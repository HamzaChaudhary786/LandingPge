import React, { Component } from 'react';
class LandingPage extends Component 
{
    fileSelectHandle = event => {
        console.log(event.target.files[0])
    }



    render()
    {


        return (
            <>
                <div className='bg-black'>


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ' >

                        <div className=' rounded-r-lg  h-96 grid grid-cols-1 justify-items-center items-center'>
                            <div>
                                <strong className=' grid justify-items-center  text-3xl font-bold text-white'>
                                    Upload Your Gold Digger
                                </strong>
                                <strong className=' grid justify-items-center text-3xl font-bold text-green-400'> X-GirlFriend </strong>
                                <strong className='  text-3xl font-bold text-yellow-50 text-center' >And Buy Some Open Sea Market Place</strong>
                            </div>
                        </div>




                        <div className='   rounded-l-lg grid grid-cols-1 h-96 justify-items-center items-center'>

                            <div className=' border border-black bg-white  h-60 w-72 rounded-lg" id="display'>
 
                            </div>

                            <div>
                                <input type="file" onChange={this.fileSelectHandler} className='text-white bg-blue-700 px-1 text-lg rounded-lg' />
                            </div>

                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 h-auto w-auto  gap-6' >

                        <div className='border border-black rounded-r-full   grid grid-cols-1 justify-items-center items-center bg-red-500'>
                            <div className=' h-auto w-auto'>
                                <div className=' grid justify-items-center h-52  md:text-4xl font-bold text-black'>
                                    Every Image Convert Into

                                    <div className='flex'>
                                        <div>
                                            Digital
                                        </div>
                                        <div className='justify-items-center items-center text-green-400 mx-1.5'>
                                            Gold Digger Art.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className=' md:justify-items-center md:items-center grid w-auto h-auto justify-items-center items-center'>

                            <div >
                                <strong className='  grid justify-items-center text-3xl font-bold text-white'>
                                    <label className='text-3xl font-bold text-white'> Note!</label>
                                    <div className='flex'>
                                        <div className='mx-1.5 text-green-400'>Before</div>  Uploading
                                        <div className='mx-1.5 text-green-400'> Images </div> Send 0.03E.

                                    </div>

                                    <div className='flex'>
                                        Is Just For <div className='mx-1.5 text-green-400'> Security </div>  After Buy <div className='mx-1.5 text-green-400'> NFT </div>

                                    </div>

                                    <div className='flex'>
                                        Automatic Convert Into Your <div className='mx-1.5 text-green-400' > Wallet</div>
                                    </div>
                                </strong>
                            </div>
                        </div>


                    </div>

                    <br />
                    <br />
                    <br />
                    <br />


                    <div className='grid grid-cols-1 bg-gray-500 md:grid-cols-3 h-auto   gap-3 justify-items-center items-center text-white'>


                        <div>
                            <strong className='text-lg font-bold'>Product</strong><br /><br />
                            <a href="#">Designer</a><br />
                            <a href="#">Enterprise</a><br />
                            <a href="#">Ecommerce</a><br />
                            <a href="#">Interaction</a><br />
                        </div>

                        <div>
                            <strong className=' text-lg font-bold'>Comapany</strong><br /><br />
                            <a href="#">About</a><br />
                            <a href="#">Career</a><br />
                            <a href="#">Pres</a><br />
                            <a href="#">Term Of Service</a><br />
                        </div>

                        <div>
                            <strong className='text-lg font-bold'>Social</strong><br /><br />
                            <a href="https://www.google.com/"><i className=' fab fa-brands fa-google text-yellow-100'> Google</i></a><br />
                            <a href="https://www.youtube.com/"><i className='fab fa-brands fa-youtube-square text-lg'> Youtube</i></a><br />
                            <a href="https://www.instagram.com/"><i className='fab fa-brands fa-instagram'> Instagram</i></a><br />
                            <a href="https://www.tiktok.com/"><i className='fab fa-brands fa-tiktok'> Tiktok</i></a><br />
                        </div>
                    </div>



                </div>
            </>
        )
    }

}
export default LandingPage;