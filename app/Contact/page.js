import Heading from '@/Components/Heading'
import React from 'react'

const contact = () => {
  return (
    <section>
    <Heading
    heading="Contact Us"
    />
    <div class="client-list careers">
        <div class="container">
            <div class="row multiple fwr aic cc">
        <div class="col-6 col-md-8 col-sm-12">
            <div class="contactbox">
                <h1 class="t-red">Har Sawal Ka Jawab Hai Yahan!</h1>
                    <p>
                        One of the leading digital marketing agency in Raipur. Write to us about any doubts, We would be glad to discuss your business targets and how we can achieve them through our digital marketing services in Raipur, Bangalore, Delhi and Mumbai. We'll get back to you at the earliest.
                    </p>
                    <form action="https://growthxindia.com/mail.php" method="POST" class="contactform">
                    <div class="row">
                        <div class="col-6 col-sm-12 main-inputs">
                            <input type="text" name="name" placeholder="Name*" required></input>
                        </div>
                        <div class="col-6 col-sm-12 main-inputs">
                            <input type="number" name="phone" required placeholder="Phone*"></input>
                        </div>
                        <div class="col-12 main-inputs">
                            <input type="email" name="email" required placeholder="Email*"></input>
                        </div>
                        <div class="col main-inputs">
                            <textarea id="w3review" name="message" required rows="4" cols="50" placeholder="How can we help?"></textarea>
                        </div>
                        <div class="main-inputs">
                            <input type="submit" value="" class="sendarrow"></input>
                        </div>
                    </div>
                </form>
                    <div class="flex cje con-foot">
                        <div>
                            <b>Business Enquiries</b>
                            <a href="tel:+918469096000">+918469096000</a>
                            <a href="mailto:sales@growthxindia.com">sales@growthxindia.com</a>
                        
                        </div>
                        <div>
                            <b>Career Opportunities</b>
                            <a href="tel:+918469096000">+918469096000</a>
                            <a href="mailto:hr@growthxindia.com">hr@growthxindia.com</a>
                        
                        </div>
                    
                    </div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-sm-12 contact-info">
        <h3 class="t-red">India</h3>
        <a>
        <i class="icon"></i> GrowthX India House, C1 44 Sector, New Rajendra Nagar, Raipur
        </a>
        <a >
        <i class="icon"></i> 501, Ganesh Glory Corporate Towers, Jagatpur, Ahmedabad
        </a>
        <a>
        <i class="icon"></i> 80 Feet Ring Road, Near Seth School Rajkot
        </a>
        <a>
        <i class="icon"></i> A 150, Gagan Vihar, Airforce Station, Gwalior Madhya Pradesh
        </a>
        <h3 class="t-red">Canada</h3>
        <a>
        <i class="icon"></i> Marine Drive, Burnaby, Vancouver British Columbia - Canada
        </a>
        <a>
        <i class="icon"></i> 3865 Truswell Road, Kelowna, BC, Canada
        </a>

        </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default contact