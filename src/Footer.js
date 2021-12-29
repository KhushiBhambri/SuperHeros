import React from 'react'

export const Footer = () => {
    let foot={
    //    position:"fixed",
       marginBottom:"0",
       width:"100%",
       "backgroundColor":"black",
       "color":'rgb(117, 178, 231)',
       "textAlign":"center",
       'zIndex':"4"
    }
    return (
        <div className=" py-2" style={foot}>
            Copyright &copy; Khushi Bhambri 
        </div>
    )
}



