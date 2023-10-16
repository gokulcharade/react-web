import React from 'react';

const quicknav = ({ heading , subheading }) => {
    return (
        <section class="qnav">
            <div class="container">
                <a href="digital-marketing-services.html">
                    <div class="flex cc aic">
                        <div class="b-icon cc aic flex">
                        <i class="icon t-red"></i>
                        </div>
                        <div class="qnavtxt">
                        <span>{subheading}</span>
                        <h1 class="t-red">{heading}<i class="icon"></i></h1>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default quicknav;