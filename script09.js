// defining variables just for convenience of being able to stuff without having to select everything anew each time
var main = d3.select("body")
var animation = main.select("#section__5")
var img = animation.select(".animationbox__center")
var lappen = img.select("img")

var scrolly = main.select("#scrolly");
var figure = d3.select("figure")
var svg = d3.select("#visualization")
var article = scrolly.select("article");
var step = article.selectAll(".step");


var section__5 = main.select('#section__5')
var section__10 = main.select('#section__10')


var s5__lappenBox = section__5.select(".animationbox__center")
var s10__zoteBox = section__10.select(".animationbox__center")
//
//
// var section__6 = main.select('#section__6')
// var s6__textAndTitle = section__6.selectAll('.title,.text')
// var s6__textTitle = section__6.select('.title')
// var s6__textText = section__6.select('.text')
// var s6__stickyBox = section__6.select('.stickyBox')
// var s6__LakenBox = section__6.select(".schiene__center")


// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event: we need this to resize our content when we resize our browser window
function handleResize() {

  // tell scrollama to update new element dimensions
  scroller.resize();
}


const data = {
  5: [
    {
      name: "Ohne Arbeitsvertrag",
      barValue: 90,
      barId: "lappen__bar__1",
      textId: "textOverlay__stern",
      textValue: "90% haben keinen arbeitsvertrag"
    },
    {
      name: "keine kredite",
      barValue: 71.3,
      barId: "lappen__bar__2",
      textId: "textOverlay__stern",
      textValue: "71.3% haben keine möglichkeit auf kredite"
    },
    {
      name: "Ohne Arbeitsvertrag",
      barValue: 83.6,
      barId: "lappen__bar__3",
      textId: "textOverlay__stern",
      textValue: "83.6% verdienen unter 8 Euro täglich"
    },
    {
      name: "Ohne Arbeitsvertrag",
      barValue: 47.1,
      barId: "lappen__bar__4",
      textId: "textOverlay__stern",
      textValue: "47.1% hatten zugriff auf grundschulausbildung"
    },
    {
      name: "Ohne Arbeitsvertrag",
      barValue: 80.65,
      barId: "lappen__bar__5",
      textId: "textOverlay__stern",
      textValue: "80.65% haben keine krankenversicherung‚"
    }
  ],
  10: [
    {
      name: "feste anstellung",
      barValue: 82.3,
      barId: "zote__bar__1",
      textId: "textOverlay__zote",
      textValue: "82.3% haben einen festen arbeitsvertrag"
    },
    {
      name: "bestverdienende",
      barValue: 50.1,
      barId: "zote__bar__2",
      textId: "textOverlay__zote",
      textValue: "50.1% Gehören zu den bestverdienenden"
    },
    {
      name: "Verdienen mehr als",
      barValue: 27.9,
      barId: "zote__bar__3",
      textId: "textOverlay__zote",
      textValue: "27.9% verdienen mehr als 40 Euro täglich"
    },
    {
      name: "hochschulausbildung",
      barValue: 62.1,
      barId: "zote__bar__4",
      textId: "textOverlay__zote",
      textValue: "62.1% Hatten zugriff auf hochschulausbildung"
    },
    {
      name: "zugriff auf krankenverischerung",
      barValue: 48.6,
      barId: "zote__bar__5",
      textId: "textOverlay__zote",
      textValue: "48.6% zugriff auf krankenverischerung"
    },
  ],
    6: [
      {
        name: "Ohne Arbeitsvertrag",
        textId: "textOverlay__laken",
        textValue: "heirate einen weißen um die Rasse zu verbessern"
      },
      {
        name: "keine kredite",
        textId: "textOverlay__laken",
        textValue: "arbeite wie ein schwarzer um wie ein weißer zu leben"
      },
      {
        name: "Ohne Arbeitsvertrag",
        textId: "textOverlay__laken",
        textValue: "die Schuld hat nicht der Indio sondern der, der ihn zum Kumpel macht"
      },
      {
        name: "Ohne Arbeitsvertrag",
        textId: "textOverlay__laken",
        textValue: "das Kind ist dunkelhäutig aber schön"
      },
      {
        name: "Ohne Arbeitsvertrag",
        textId: "textOverlay__laken",
        textValue: "du bist so dumm wie ein Indio"
      }
    ]
  }


var cloudeMovementScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, 100])

  var moveHandDown = d3.scaleLinear()
    .domain([0, 0.1])
    .range([0, 300])


// ///add a new variable progressStatus that appends a svg-text-element to our svg and position it somewhere in the visualization block


////////////////////////////////////////////////////////In here we define what happens on scrolling
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// scrollama event handlers
// response.element  --> returns the current element/text paragraph
// response.direction --> returns the direction
// response.index --> returns the index of the current element, which in our case is the same as the "data-step"-attribute and the index of the step elements
// response.progress --> returns the position/scrolling progress of a paragraph in percentages, starting with 0 and ending with 1. We can use that for scroll-triggered animations


///handleStepEnter: what should happen if we enter a Step?
function handleStepEnter(response) {

console.log(response.index)
console.log(response.direction)
console.log(response.element)

if (response.index == 2){
  //
  // s5__stickyBox
  // .style("position", "sticky")
  // .style("top", "20px")

  // s5__textText
  // .style("position", "sticky")
  // .style("top", "60px")
}


}


///handleStepExit: what should happen if we exit a Step?
function handleStepExit(response) {

  if (response.index == 2){
    console.log('LAPPEN')
    // img.select("#lappen")
    // .transition()
    // .duration(300)
    // .attr("vspace", "0")
    // if()
  }

}






function barFunction(progress, data, steps, endOfAnimation, moveHeight, imageElement) {

  const bars = data.length
  const movements = bars * 2
  const animationDuration = endOfAnimation / movements

  const moveHandDown = d3.scaleLinear()
    .domain([0, animationDuration])
    .range([0, moveHeight])


  const scaleBarToValue = function(progress, percentage) {
    const height = moveHeight * (percentage / 100)
    const number = d3.scaleLinear()
        .domain([0, animationDuration])
        .range([0, height])
    return number(progress)
  }

  const stepFinder = function (progress, steps, animationDuration) {
    for (let i = 1; i <= steps; i++) {
      if (progress < (animationDuration * i)) {
        return i
      }
    }
  }


  const move = function(progress, step, imageElement) {
    const moveDown = (step%2) !== 0
    const partlyProgress = progress - ((animationDuration * (step - 1)))



    const moveUpValue = moveHeight - moveHandDown(partlyProgress)
    const moveDownValue = moveHandDown(partlyProgress)
    const transformValue = moveDown ? moveDownValue : moveUpValue

    const transform = `translateY(${transformValue}px)`

    const stepToData = Math.ceil(step / 2) - 1
    const dataObject = data[stepToData]

    if (dataObject) {
      const barElement = d3.select('#' + data[stepToData].barId )
      const textElement = d3.select('#' + data[stepToData].textId)

      const barValue = data[stepToData].barValue
      const textValue = data[stepToData].textValue

      if (imageElement) {
        imageElement
          .style("transform", transform)
      }

      if (moveDown) {
        if (textElement) {
          textElement
            .text(textValue)
        }
        if (textElement) {
          barElement
            .style('height', `${scaleBarToValue(partlyProgress, barValue)}px`)
            .style('opacity', 1)
        }
      }
    }
  }
  const step = stepFinder(progress, steps, animationDuration)

  move(progress, step, imageElement)
}





function barFunction(progress, data, steps, endOfAnimation, moveHeight, imageElement) {

  const bars = data.length
  const movements = bars * 2
  const animationDuration = endOfAnimation / movements

  const moveHandDown = d3.scaleLinear()
    .domain([0, animationDuration])
    .range([0, moveHeight])


  const scaleBarToValue = function(progress, percentage) {
    const height = moveHeight * (percentage / 100)
    const number = d3.scaleLinear()
        .domain([0, animationDuration])
        .range([0, height])
    return number(progress)
  }

  const stepFinder = function (progress, steps, animationDuration) {
    for (let i = 1; i <= steps; i++) {
      if (progress < (animationDuration * i)) {
        return i
      }
    }
  }


  const move = function(progress, step, imageElement) {
    const moveDown = (step%2) !== 0
    const partlyProgress = progress - ((animationDuration * (step - 1)))



    const moveUpValue = moveHeight - moveHandDown(partlyProgress)
    const moveDownValue = moveHandDown(partlyProgress)
    const transformValue = moveDown ? moveDownValue : moveUpValue

    const transform = `translateY(${transformValue}px)`

    const stepToData = Math.ceil(step / 2) - 1
    const dataObject = data[stepToData]

    if (dataObject) {
      const barElement = d3.select('#' + data[stepToData].barId )
      const textElement = d3.select('#' + data[stepToData].textId)

      const barValue = data[stepToData].barValue
      const textValue = data[stepToData].textValue

      if (imageElement) {
        imageElement
          .style("transform", transform)
      }

      if (moveDown) {
        if (textElement) {
          textElement
            .text(textValue)
        }
        if (textElement) {
          barElement
            .style('height', `${scaleBarToValue(partlyProgress, barValue)}px`)
            .style('opacity', 1)
        }
      }
    }
  }
  const step = stepFinder(progress, steps, animationDuration)

  move(progress, step, imageElement)
}

///handleStepProgress: what should happen during a step between Enter and Exit?
function handleStepProgress({progress, index}) {
  console.log('handleStepProgress', progress)
console.log(index)
    // the lappen box
    if (index == 2){
      barFunction(progress, data[5], 11, 0.8, 300, s5__lappenBox)
  } else if ( index == 3){
      console.log()
      barFunction(progress, data[6], 11, 0.8, 300)
    } else if ( index == 4){
      console.log()
      barFunction(progress, data[10], 11, 1, 300, s10__zoteBox)
    }

}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////








function setupStickyfill() {
  d3.selectAll(".sticky").each(function() {
    Stickyfill.add(this);
  });
}


///general setup: interesting for you here will be mainly offset and debug
function init() {
  setupStickyfill();

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller.setup({
    //this is assigning index properties that need to be called in steps (to make the magic happens)
      step: ".step",
      offset: 0.6,
      progress: true,
      debug: false,
    })
    .onStepEnter(handleStepEnter)
    .onStepProgress(handleStepProgress)
    .onStepExit(handleStepExit)



  // setup resize event
  window.addEventListener("resize", handleResize);
}

// kick things off
init();
