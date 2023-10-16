import Clientlogo from '@/Components/Clientlogo';
import Cta from '@/Components/Cta';
import Heading from '@/Components/Heading';
import Homeabout from '@/Components/Homeabout';
import Innerbanner from '@/Components/Innerbanner';
import Record from '@/Components/Record';
import Servicetype from '@/Components/Servicetype';
import Steps from '@/Components/Steps';
import React from 'react';

const services = () => {
  return (
    <div>
            <Innerbanner 
            heading="Get Found Locally, Grow Globally with GrowthX India's Local SEO"
            subheading="We are Vocal About Local"
            paragraphone="Local SEO is not just about local anymore; it’s about credibility and reach. Our Local SEO services ensure you're not just a local favorite but also a global contender. From Google My Business to localized content, we help you dominate local search results."
            buttontext="Schedule An Appointment"
            background="banner op2 brown"
            />
            <Record
            counter1="10+"
            counter1text="Professional SEO Experts"
            counter2="$2+"
            counter2text="Million Spend Managed"
            counter3="286+"
            counter3text="Global B2B and B2C Clients till date"
            />
            <Homeabout
            subheading="We help your business"
            heading="Be found by real people, not just search engine bots."
            paragraphone="We offer a comprehensive suite of SEO services, from in-depth analysis of user and keyword trends to drafting killer strategies for your custom needs. But we don't just do it the old-fashioned way. We're an affordable SEO company, and we do it in a much cooler way.Our fine-tuned professional Search Engine Optimization services embrace everything from local strategy setup, expanding your business capabilities, cracking the Google search rankings, to setting the right KPIs. But we don't stop there. We eavesdrop on your target audience to help them find where you are."
            paragraphtwo="We're not just about getting you to the top of the search results. We're about helping you connect with real people who are interested in what you have to offer."
            />
            <Servicetype
            heading="SEO Services We Deliver"
            iconboxheading1="Full Site SEO"
            iconboxheading2="Local SEO Services"
            iconboxheading3="Google Analytics Configuration"
            iconboxheading4="Link Building"
            iconboxheading5="SEO Audits"
            iconboxheading6="Ecommerce SEO"
            iconboxcontent1="We help you push your marketing efforts forward with the help of our conversion-focused display banner design services. Be it static or dynamic HTML display banners, we can help"
            iconboxcontent2="We help you push your marketing efforts forward with the help of our conversion-focused display banner design services. Be it static or dynamic HTML display banners, we can help"
            iconboxcontent3="We help you push your marketing efforts forward with the help of our conversion-focused display banner design services. Be it static or dynamic HTML display banners, we can help"
            iconboxcontent4="We help you push your marketing efforts forward with the help of our conversion-focused display banner design services. Be it static or dynamic HTML display banners, we can help"
            iconboxcontent5="We help you push your marketing efforts forward with the help of our conversion-focused display banner design services. Be it static or dynamic HTML display banners, we can help"
            iconboxcontent6="We help you push your marketing efforts forward with the help of our conversion-focused display banner design services. Be it static or dynamic HTML display banners, we can help"
            />
            <Steps
            heading="What is SOOOOO Special about Our SEO Experts?"
            paraheading1="Been there, Done that, That to be many times and for years"
            paracontent1="SEO is a complex and every-changing field, but our team of experts has been workig in the industry for years. We know what works and what doesn't, and we are comitted to help you achieve your SEO Goals. We'll create a custom SEO Strategy for your business thats tailored to your specific needs. We will use a combination of tied and tested methodologies to help you make a place and name for your brand. We are not just here to help you rank hiugh in search enginers. We are her to help you grow your business."
            paraheading2="BIG NOOOOOOOOO NOOOOOOO"
            paracontent2="We've learned a lot over the years, and one of the most important things we've learned is that you should never mess with SEO techniques or search engine algorithms.There are a lot of unscrupulous SEO companies out there who will try to trick you into using black hat techniques that will get you penalized by Google. We believe in white hat SEO, and we'll never do anything that could jeopardize your website's ranking in search engines. We're here to help you grow your business through ethical and effective SEO practices."
            paraheading3="Patience! is the Key!"
            paracontent3="As a leading SEO marketing company, we understand that SEO campaigns are complex, competitive, and research-intensive. They demand a high level of patience and perseverance.We've seen it all: businesses that give up too early, businesses that try to cut corners, and businesses that get discouraged by the competition. But we've also seen businesses that succeed. Businesses that understand that SEO is a marathon, not a sprint. Businesses that are patient and persistent. If you're looking for an SEO company that will help you succeed, we're here for you. We'll work with you to develop a custom SEO strategy that's tailored to your specific needs. We'll be patient and persistent, and we'll never give up on you."
            paraheading4="Meeting Expectations"
            paracontent4="We have the niche skills, real-time insights, competitive analysis, and a humane approach that set us apart and exceed your clients' expectations."
            />
            <Cta/>
            
        </div>
  )
}

export default services