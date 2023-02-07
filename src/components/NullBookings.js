import React from 'react'
import { Link } from 'react-router-dom'

export default function NullBookings() {
    return (
        <div>
            <div>
                <div className="card m-auto">
                    <div className="card-body">
                        <div className='row '>
                            <div className='col-md-12'>
                                <h2 className='text-center'>Please Book Vehicle First</h2>
                            </div>
                            <div className='col-md-4 m-auto '>
                                <Link to="/index-user"><button className=' btn btn-block btn-outline-primary '>Book Vehicle</button></Link>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}
