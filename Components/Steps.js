import React from 'react'

const Steps = ({heading,paracontent1,paracontent2,paracontent3,paracontent4,paraheading1,paraheading2,paraheading3,paraheading4}) => {
  return (
    <section class="steps">
    <div class="container">
      <h2 class="heading2">{heading}</h2>
      <div class="stepbox">
        <div class="flex aic">

          <div class="stp-num">
            <div class="stp-num-con">1</div>
          </div>
          <div class="flexGrow-1 stp-cont">
            <h3>{paraheading1}</h3>
            <p>{paracontent1}</p>
          </div>
        </div>
        <div class="flex aic">

          <div class="stp-num">
            <div class="stp-num-con">2</div>
          </div>
          <div class="flexGrow-1 stp-cont">
            <h3>{paraheading2}</h3>
            <p>{paracontent2}</p>
          </div>
        </div>
        <div class="flex aic">

          <div class="stp-num">
            <div class="stp-num-con">3</div>
          </div>
          <div class="flexGrow-1 stp-cont">
            <h3>{paraheading3}</h3>
            <p>{paracontent3}
            </p>
          </div>
        </div>
        <div class="flex aic">

          <div class="stp-num">
            <div class="stp-num-con">4</div>
          </div>
          <div class="flexGrow-1 stp-cont">
            <h3>{paraheading4}</h3>
            <p>{paracontent4}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Steps;