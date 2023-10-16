import React from 'react'

const Record = ({counter1,counter1text,counter2,counter2text,counter3,counter3text}) => {
  return (
    <section class="records flex cc aic">
        <div class="records-box flex aic csa">
            <div class="text-center">
                <h2>{counter1}</h2>
                <p>{counter1text}</p>
            </div>
            <div class=" text-center">
                <h2>{counter2}</h2>
                <p>{counter2text}</p>
            </div>
            <div class=" text-center">
                <h2>{counter3}</h2>
                <p>{counter3text}</p>
            </div>
        </div>
    </section>
  )
}

export default Record;