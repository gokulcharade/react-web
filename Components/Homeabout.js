import React from 'react'

const Homeabout = ({subheading,heading,paragraphone,paragraphtwo}) => {
  return (
    <section class="homeabout p-100">
        <div class="container">
        <div class="row aic">
            <div class="col-4 col-lg-6 col-sm-12 ser-detail">
                <img src="img/seoservices/seo-2.webp" alt=""></img>
            </div>
            <div class="col-8 col-lg-6 col-sm-12">
            <span class="t-green small-text">{subheading}</span>
            <h2 class="heading">{heading}</h2>
            <hr class="bottomline"></hr>
            <p class="justify ">{paragraphone}</p>
            <p class="justify ">{paragraphtwo}</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Homeabout;