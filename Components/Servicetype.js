import React from 'react'

const Servicetype = ({heading,iconboxcontent1,iconboxcontent2,iconboxcontent3,iconboxcontent4,iconboxcontent5,iconboxcontent6,iconboxheading1,iconboxheading2,iconboxheading3,iconboxheading4,iconboxheading5,iconboxheading6}) => {
    return (
        <section class="quicklinks">
            <div class="container">
                <h2 class="heading2">{heading}</h2>
                <div class="row">
                    <div class="col-6 col-xs-12">
                        <div class="flex ser-type">
                            <div class="flexGrow-1">
                                <i class="icon"></i>
                            </div>
                            <div class="flexGrow-1">
                                <h3>{iconboxheading1}</h3>
                                <p>{iconboxcontent1}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-xs-12">
                        <div class="flex ser-type">
                            <div class="flexGrow-1">
                                <i class="icon"></i>
                            </div>
                            <div class="flexGrow-1">
                                <h3>{iconboxheading2}</h3>
                                <p>{iconboxcontent2}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-xs-12">
                        <div class="flex ser-type">
                            <div class="flexGrow-1">
                                <i class="icon"></i>
                            </div>
                            <div class="flexGrow-1">
                                <h3>{iconboxheading3}</h3>
                                <p>{iconboxcontent3}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-xs-12">
                        <div class="flex ser-type">
                            <div class="flexGrow-1">
                                <i class="icon"></i>
                            </div>
                            <div class="flexGrow-1">
                                <h3>{iconboxheading4}</h3>
                                <p>{iconboxcontent4}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-xs-12">
                        <div class="flex ser-type">
                            <div class="flexGrow-1">
                                <i class="icon"></i>
                            </div>
                            <div class="flexGrow-1">
                                <h3>{iconboxheading5}</h3>
                                <p>{iconboxcontent5}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-xs-12">
                        <div class="flex ser-type">
                            <div class="flexGrow-1">
                                <i class="icon"></i>
                            </div>
                            <div class="flexGrow-1">
                                <h3>{iconboxheading6}</h3>
                                <p>{iconboxcontent6}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicetype;