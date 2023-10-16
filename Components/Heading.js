import React from 'react'

const Heading = ({heading}) => {
    return (
        <section class="clients">
            <div class="container">
                <div class="flex cc aic hight">
                    <div class="b-icon cc aic flex">
                        <i class="icon t-red"></i>
                    </div>
                    <div class="qnavtxt ">
                        <h1 >{heading}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Heading