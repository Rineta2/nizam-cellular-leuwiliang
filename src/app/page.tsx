import React from 'react'

import Home from "@/components/ui/home/Home"

import Services from "@/components/ui/services/Services"

import Konsultasi from "@/components/ui/konsultasi/Konsultasi"

import Faqs from "@/components/ui/faqs/FaqLayout"

import Gallery from "@/components/ui/gallery/Gallery"

import Blog from "@/components/ui/blog/Blog"

export default function page() {
  return (
    <main className='overflow-hidden'>
      <Home />
      <Services />
      <Konsultasi />
      <Faqs />
      <Gallery />
      <Blog />
    </main>
  )
}
