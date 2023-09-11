import React from 'react'
import clsx from 'clsx'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl'

import Features, { type FeatureItem } from '@site/src/data/features'
import Quotes from '@site/src/data/quotes'

// import styles from './index.module.css';
import styles from './styles.module.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import Image from '@theme/IdealImage'
import { InlineIcon, Icon } from '@iconify/react' // Import the entire Iconify library.

function HeroBanner () {
  return (
    <div className={styles.hero} data-theme="light">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({ message: 'Colorfull dots that form an arrow' })}
            className={styles.heroLogo}
            src={useBaseUrl('/img/mess-to-arrow-full-colors.webp')}
            width="700"
            height="550"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  '<b>Finding a way forward</b> together',
                description:
                  'Home page hero title, can contain simple html tags'
              })
            }}
          />
        </Heading>
        <p className={styles.heroProjectSubtitle}> Bring people together across differences within a facilitated decision making process and find creative and nuanced solutions that work for everyone.</p>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/case-studies">
          <InlineIcon icon="entypo:documents"/>
            <Translate> Read our Case Studies</Translate>
          </Link>
          <Link className="button button--secondary button-outline" to="/learn">
          <InlineIcon icon="mdi:seedling"/>
            <Translate> Grow your own CF Skills</Translate>
          </Link>

        </div>
      </div>
    </div>
  )
}

function QuotesSection () {
  return (
      <div className="container text--center">
      <Heading as="h1" >
            <Translate>What people say about Convergent Facilitation</Translate>
      </Heading>
        <div className="row">
          {Quotes.map((quote) => (
            <div className="col" key={quote.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <Image
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  img={quote.thumbnail}
                  style={{ overflow: 'hidden' }}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">
                {quote.text}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

function VideoContainer () {
  return (
  <div className="container text--center margin-bottom--x1">
          <Heading as="h1" >
            <Translate>Get a small taste of the power of Convergent Facilitation from Paul</Translate>
          </Heading>
          <div className="video-container">
            <LiteYouTubeEmbed
              id="xsPvRmUwEIE"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Convergent Facilitation Podcast Episode"
              poster="maxresdefault"
              webp
            />
      </div>
    </div>
  )
}

function FeaturesContainer () {
  const firstRow = Features.slice(0, 3)
  const secondRow = Features.slice(3)

  return (
    <div className="container text--center">
      <Heading as="h1">
        <Translate>What makes Convergent Facilitation powerful</Translate>
      </Heading>
      <div className="row margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  )
}

function Feature ({
  feature,
  className
}: {
  feature: FeatureItem
  className?: string
}) {
  const { withBaseUrl } = useBaseUrlUtils()

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  )
}

export default function HoVideoContaineVideoContainer (): JSX.Element {
  const {
    siteConfig: { customFields, tagline }
  } = useDocusaurusContext()
  const { description } = customFields as { description: string }
  return (
    <Layout title={tagline} description={description}>
      <main>
        <HeroBanner />
          <div className={styles.section}>

          <div className={styles.section}>
            <FeaturesContainer />
        </div>
          <div className={styles.section}>
            <QuotesSection />
        </div>
          <div className={styles.section}>
            <VideoContainer />
        </div>
        </div>
      </main>
    </Layout>
  )
}
