import React from 'react'

const Form = () => {
    return (
        <section class="form">
            <div class="container">
                <h2 class="heading2">Want to <span class="t-red">Kickstart</span> Your <span class="t-red">Project</span>?</h2>
                <h4>(no contracts, no commitments)</h4>
                <form action="#">
                    <div class="row">
                        <div class="col-6 main-inputs">
                            <input type="text" placeholder="Name*"></input>
                        </div>
                        <div class="col-6 main-inputs">
                            <input type="email" required placeholder="Email*"></input></div>
                        <div class="col-6 main-inputs"><input type="number" required placeholder="Phone*"></input></div>
                        <div class="col flex">
                            <div class="flexGrow-1"><p>How soon do you want to start the project</p></div>
                            <div class="flex aic">
                                <div class="position-r">
                                    <label class="container">within 8 weeks
                                        <input type="radio" checked="checked" name="radio"></input>
                                            <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="position-r">
                                    <label class="container">more than 8 weeks
                                        <input type="radio" name="radio"></input>
                                            <span class="checkmark"></span>
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div class="col main-inputs">
                            <p>Which design services do you need*</p>
                            <select name="service" id="service">
                                <option value="Display Banners">Display Banners</option>
                                <option value="Email Template">Email Template</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="Corporate Assets">Corporate Assets</option>
                            </select>
                        </div>
                        <div class="col main-inputs">
                            <p>Share your requirements*</p>
                            <textarea id="w3review" name="w3review" required rows="1" cols="50" placeholder="(You can add links to sharable materials if any)"></textarea>
                        </div>
                        <div class="main-inputs"><input type="submit" value="Submit" class="buttons outline"></input></div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form