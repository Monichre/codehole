import React, { Fragment } from 'react'
import Head from 'next/head'
import Sticky from 'react-stickynode'
import { AgencyWrapper } from 'compositions/agency.style'
import Navbar from 'compositions/Navbar'
import BannerSection from 'compositions/BannerSection'
import FeatureSection from 'compositions/FeatureSection'
import AboutUsSection from 'compositions/AboutUsSection'
import WorkHistory from 'compositions/WorkHistory'
import BlogSection from 'compositions/BlogSection'
import TestimonialSection from 'compositions/TestimonialSection'
import TeamSection from 'compositions/TeamSection'
import VideoSection from 'compositions/VideoSection'
import NewsletterSection from 'compositions/NewsletterSection'
import QualitySection from 'compositions/QualitySection'
import Footer from 'compositions/Footer'
import { DrawerProvider } from 'contexts/DrawerContext'
import FaqSection from 'compositions/FaqSection'

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Fragment>
      {/* Start agency head section */}
      <Head>
        <title>Codehole Inc | A Dev Lab</title>
        <meta name='Description' content='React next landing page' />
        <meta name='theme-color' content='#10ac84' />

        {/* Load google fonts */}
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i'
          rel='stylesheet'
        />
      </Head>

      <AgencyWrapper>
        <Sticky top={0} innerZ={9999} activeClass='sticky-nav-active'>
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </Sticky>
        <BannerSection />
        <FeatureSection />
        <AboutUsSection />
        <WorkHistory />
        <BlogSection />
        <QualitySection />
        <VideoSection />
        <TestimonialSection />
        <TeamSection />
        <FaqSection />
        <NewsletterSection />
        <Footer />
      </AgencyWrapper>
      {/* End of agency wrapper section */}
    </Fragment>
  )
}

export default Home
