"use client";

import { useSectionInView } from '@/lib/hooks';

import React from 'react'

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section id="contact">

    </section>
  )
}
