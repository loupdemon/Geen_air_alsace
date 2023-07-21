import React, { useState } from 'react'
import Faqs from './Faqs'

function FaqTabs() {
    const [items] = useState(Faqs)
    return (
        <div className="accordion my-5" id="accordionExample">
            {
                items.map((elem) => {
                    const { id, question, answer, col } = elem;
                    return (
                        <div key={id} className="accordion-item">
                            <div className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${col}`} aria-expanded="false" aria-controls={col}>
                                    <span className="h4 text-capitalize text-Secondary">{question}</span>
                                </button>
                            </div>
                            <div id={col} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {answer}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FaqTabs
