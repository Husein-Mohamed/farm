

import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import ServiceArea from './ServiceArea'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

export default function Service() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Services" subtitle="Services" />
      <ServiceArea />
      <SubscribeHomeThree />
      <FooterTwo />

    </>
  )
}
