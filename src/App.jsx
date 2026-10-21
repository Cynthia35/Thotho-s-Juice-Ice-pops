import { useEffect, useState } from 'react'
import {
  aboutCopy,
  businessName,
  galleryImages,
  icePopProduct,
  juiceProducts,
  whatsappUrl,
} from './content.js'

function BrandMark({ light = false }) {
  return (
    <a
      className={`brand${light ? ' brand-light' : ''}`}
      href="#home"
      aria-label={`${businessName} home`}
    >
      <span className="brand-icon" aria-hidden="true">
        <svg viewBox="0 0 42 42" fill="none">
          <circle cx="21" cy="21" r="19" fill="currentColor" />
          <path
            d="M21 8.5c-6.9 0-12.5 5.6-12.5 12.5S14.1 33.5 21 33.5"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M21 8.5c6.9 0 12.5 5.6 12.5 12.5S27.9 33.5 21 33.5"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M21 9v24M9 21h24" stroke="white" strokeWidth="1.8" />
          <path d="M21 8.5c1.2-4 4.8-5 8-3.7-1.3 3.5-4.1 5-8 3.7Z" fill="#f4bd38" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Thotho’s</strong>
        <span>JUICE & ICE POPS</span>
      </span>
    </a>
  )
}

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['Our products', '#products'],
    ['Our story', '#about'],
    ['Gallery', '#gallery'],
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`main-nav${menuOpen ? ' nav-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Get in touch <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description, centered = false, titleId }) {
  return (
    <div className={`section-heading${centered ? ' heading-centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={titleId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="hero-kicker"><span /> A brighter kind of refreshment</span>
        <h1 id="hero-title">
          A little
          <br />
          <em>sunshine</em> in
          <br />
          every sip.
        </h1>
        <p className="hero-slogan">Quench Your Thirst</p>
        <p className="hero-description">
          Pour a little colour into your day with our juices and ice pops, made for the moments
          worth sharing.
        </p>
        <a className="button button-primary" href="#products">
          Explore our products <ArrowIcon />
        </a>
        <div className="hero-footnote">
          <span className="footnote-line" />
          <span>Good days taste better chilled.</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img
            src="/images/optimized/Juice 5.jpg"
            alt="Rows of Thotho’s colourful bottled juices, made with care."
            fetchpriority="high"
          />
          <div className="image-caption">
            <span className="caption-sparkle" aria-hidden="true">✳</span>
            <span>Made for the<br /><strong>good stuff.</strong></span>
          </div>
        </div>
        <div className="hero-stamp" aria-label="Fresh and full of flavour">
          <span>FRESH</span>
          <i aria-hidden="true">✳</i>
          <span>FULL OF FLAVOUR</span>
        </div>
        <span className="hero-orb orb-one" aria-hidden="true" />
        <span className="hero-orb orb-two" aria-hidden="true" />
      </div>
    </section>
  )
}

function ProductCard({ product, index }) {
  return (
    <article className={`product-card product-card-${index + 1}`}>
      <a
        className="product-image"
        href={product.image}
        target="_blank"
        rel="noreferrer"
        aria-label={`View photograph: ${product.alt}`}
      >
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className="image-open" aria-hidden="true"><ArrowIcon diagonal /></span>
      </a>
      <div className="product-card-copy">
        <div className="product-title-row">
          <h3>{product.name}</h3>
          <span className="product-number">{product.number}</span>
        </div>
        <p>{product.note}</p>
      </div>
    </article>
  )
}

function JuiceSection() {
  return (
    <section className="juices section-shell" id="products" aria-labelledby="juice-title">
      <SectionHeading
        eyebrow="A bottle of bright"
        title={<>Good things come<br />in <em>colourful</em> bottles.</>}
        description="Pick your kind of sunshine. Our juice favourites are ready to make any moment a little brighter."
        titleId="juice-title"
      />
      <div className="product-grid">
        {juiceProducts.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
      <p className="product-note">A little something for every kind of day.</p>
    </section>
  )
}

function IcePopSection() {
  return (
    <section className="ice-pops" id="ice-pops" aria-labelledby="ice-pop-title">
      <div className="ice-pop-image">
        <img src={icePopProduct.image} alt={icePopProduct.alt} loading="lazy" />
        <span className="ice-image-note">A little joy<br />on a stick.</span>
      </div>
      <div className="ice-pop-copy">
        <span className="eyebrow eyebrow-light">Cool down, perk up</span>
        <h2 id="ice-pop-title">
          Small treat.
          <br />
          <em>Big</em> happy.
        </h2>
        <p>
          A freezer favourite for warm afternoons, little celebrations and everything in between.
        </p>
        <div className="flavour-list" aria-label="Ice-pop flavours">
          {icePopProduct.flavours.map((flavour, index) => (
            <span className="flavour-chip" key={flavour}>
              <i className={`flavour-dot flavour-dot-${index + 1}`} aria-hidden="true" />
              {flavour}
            </span>
          ))}
        </div>
        <a className="button button-cream" href="#contact">
          Ask about ice pops <ArrowIcon />
        </a>
      </div>
      <span className="ice-pop-decoration" aria-hidden="true">✳</span>
    </section>
  )
}

function Gallery({ onImageSelect }) {
  return (
    <section className="gallery-section section-shell" id="gallery" aria-labelledby="gallery-title">
      <SectionHeading
        eyebrow="From our bottles to your table"
        title={<>A peek at the <em>goodness.</em></>}
        description="Real moments from our collection, including the bigger orders made for sharing."
      />
      <div className="gallery-grid">
        {galleryImages.map((item) => (
          <button
            className={`gallery-item ${item.shape}`}
            key={item.image}
            type="button"
            onClick={() => onImageSelect(item)}
            aria-label={`Open image: ${item.alt}`}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
            <span className="gallery-caption">
              <span>{item.label}</span>
              <ArrowIcon diagonal />
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-image-wrap">
          <img
            src="/images/optimized/Juice 4.jpg"
            alt="A real Thotho’s bulk juice order prepared for customers."
            loading="lazy"
          />
          <span className="about-image-label">Made to share <span aria-hidden="true">✳</span></span>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="A little about us"
            title={<>Good things are<br />better <em>shared.</em></>}
          />
          <p className="about-description">{aboutCopy}</p>
          <a className="text-link" href="#contact">
            Let’s make your day <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <span className="contact-spark contact-spark-one" aria-hidden="true">✳</span>
      <span className="contact-spark contact-spark-two" aria-hidden="true">✳</span>
      <div className="contact-inner">
        <span className="eyebrow eyebrow-light">Your next good thing</span>
        <h2 id="contact-title">Let’s get<br /><em>refreshing.</em></h2>
        <p>Have a question or planning a bigger order? Say hello and we’ll take it from there.</p>
        <a className="button button-cream contact-button" href={whatsappUrl} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20.1 11.8a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4A8.1 8.1 0 1 1 20.1 11.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M8.5 8.2c.3-.5.6-.5.9-.5h.3c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.4 0 .6l-.5.6c-.2.2-.3.4-.1.7.2.4.8 1.3 1.8 2 .8.6 1.4.8 1.8.9.3.1.5 0 .7-.2l.7-.8c.2-.2.4-.2.7-.1l1.6.8c.3.1.4.3.4.4 0 .2-.1.9-.6 1.3-.5.5-1.2.7-1.8.6-.7-.1-1.8-.5-3.3-1.4-2-1.2-3.3-3-3.6-3.4-.3-.5-.8-1.4-.8-2.2 0-.7.3-1.1.6-1.4Z" fill="currentColor" />
          </svg>
          Start a WhatsApp enquiry <ArrowIcon />
        </a>
        <p className="contact-note">No number to share? WhatsApp will let you choose a chat.</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <BrandMark light />
          <p>Quench Your Thirst</p>
        </div>
        <div className="footer-nav">
          <span className="footer-label">Take a look</span>
          <a href="#products">Juices</a>
          <a href="#ice-pops">Ice pops</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">Our story</a>
        </div>
        <div className="footer-contact">
          <span className="footer-label">Say hello</span>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp enquiry <ArrowIcon diagonal /></a>
          <span className="footer-placeholder">Phone and email details to be added</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Thotho’s Juice & Ice Pops</span>
        <a href="#home">Back to the sunshine ↑</a>
      </div>
    </footer>
  )
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Product photo preview"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close image preview">
        <span aria-hidden="true">×</span>
      </button>
      <figure>
        <img src={image.image} alt={image.alt} />
        <figcaption>{image.alt}</figcaption>
      </figure>
    </div>
  )
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <JuiceSection />
        <IcePopSection />
        <Gallery onImageSelect={setSelectedImage} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  )
}
