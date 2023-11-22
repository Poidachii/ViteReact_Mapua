import React from 'react'

import { FcAddressBook } from 'react-icons/fc'
import { FcBriefcase } from 'react-icons/fc'
import { FcSteam } from 'react-icons/fc'

const TopHeader = () => {
    return (
        <div className = 'border-b border-gray-200 hidden sm:block'>
            <div className = 'container py-4'>
                <div className = 'flex justify-between items-center'>
                    <div className = 'hidden lg:flex gap-2'>

                        <div className = 'header_top__icon_wrapper'>
                         <FcAddressBook /></div>
                         

                    </div>
                </div>
            </div>
        </div>
}