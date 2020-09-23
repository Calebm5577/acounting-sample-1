import React from 'react'
import {IndexBanner} from '../components/IndexComponents/Banner/IndexBanner'
import {Body1} from '../components/IndexComponents/Body1/Body1'
import {Body2} from '../components/IndexComponents/Body2/Body2'
import {Body3} from '../components/IndexComponents/Body3/Body3'
import {Services} from '../components/Services/Services'

export const Index = () => {
    return (
        <>
            <IndexBanner />
            <Body1 />
            <Body2 />
            <Body3 />
            <Services />
        </>
    )
}
