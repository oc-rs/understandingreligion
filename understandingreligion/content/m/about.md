---
Title: About the project
Abstract: "Understanding Religion is a website aimed at providing easy access to information about the study of religion. Always free, written clearly for a wide audience, grounded in academic study and supported by references for those who want to dive deeper."

Author: Luke Burns

PublishDate: 2020-01-01
LastModifiedDate: 2020-10-06
---
# Introduction
<span style="color: #1c768f">Understanding Religion</span> is a website that aims to provide easy access to information about the study of religion, published by the [Online Centre for Religious Studies](https://ocrs.online).

**Always free, written clearly for a wide audience, grounded in academic study and supported by references for those who want to dive deeper.**

It draws inspiration from a wide variety of online resources - notably [Wikipedia](https://en.wikipedia.org/wiki/Main_Page), but also Harvard University's [Pluralism Project](https://pluralism.org/home) and the essays and resources published by [REOnline](https://www.reonline.org.uk).

The goal of the site is to provide contemporary scholarism in an accessible format for readers who might not be specialists in the subject, but who want to learn and discover.

# Copyright
The website and all its content is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) - that means you're welcome to create copies of our articles and use them in your own teaching or learning projects 100% free of charge. You can even adapt or change them - you just need to include a note explaining where the original came from (click the link to find out more).

# Pages and Books
The core content of the site is the list of articles, or **Pages**, each of which is self-contained and (hopefully) self-explanatory. But nothing in life is really self-contained, everything is connected, and information is always part of a journey.

At <span style="color: #1c768f">Understanding Religion</span>, these journeys are represented by **Books** - collections of **Pages** that share a narrative. 

Each **Page** might belong to one or several **Books**, and the reader can choose to follow these journeys if they want.

At the bottom of each **Page** you will see which **Book(s)** you are currently within, and have the option to move forward, backwards, or return to the book's homepage. Something like this...

<h2>This article is part of the following books:</h2>
<br>
<div class="card has-text-centered mb-5">
    <div class="card-content">
        <div class="content">
            <p class="title">Religion in the Online World</p>
            <a class="button is-success" id="ex">Book Contents</a>
        </div>
    </div>
    <footer class="card-footer">
        <a id="ex-b" class="is-size-4 card-footer-item"><span class="icon has-text-info">
                <i class="fas fa-arrow-circle-left"></i>
              </span> &nbsp;&nbsp;Back</a>
        <a id="ex-f" class="is-size-4 card-footer-item">Forward &nbsp;&nbsp;<span class="icon has-text-info">
                <i class="fas fa-arrow-circle-right"></i>
              </span></a>
    </footer>
</div>

<div id="m" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Religion in the Online World</p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <h1>This is just an example</h1>
        <p>But normally that link would take you to the <strong>Book</strong> contents page, which will provide a brief overview and list of all the <strong>Pages</strong> contained within.</p>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button id="m-close-button" class="button is-success">Okay, got it!</button>
    </footer>
  </div>
  <button id="m-close" class="modal-close is-large" aria-label="close"></button>
</div>

<div id="m-back" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Religion in the Online World</p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <h1>Rewind...</h1>
        <p>You can move backward through the <strong>Book</strong> by clicking the Back button.</p>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button id="m-back-close-button" class="button is-success">Makes sense</button>
    </footer>
  </div>
  <button id="m-back-close" class="modal-close is-large" aria-label="close"></button>
</div>

<div id="m-forward" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Religion in the Online World</p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <h1>Onward!</h1>
        <p>Finished reading and want to move on? Clicking the Forward button will take you to the next <strong>Page</strong> in the sequence.</p>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button id="m-forward-close-button" class="button is-success">Groovy</button>
    </footer>
  </div>
  <button id="m-forward-close" class="modal-close is-large" aria-label="close"></button>
</div>

<script>
  document.getElementById("ex").addEventListener("click",function() {
    var m = document.getElementById("m");
    m.classList.add("is-active");
  })

  document.getElementById("ex-b").addEventListener("click",function() {
    var m = document.getElementById("m-back");
    m.classList.add("is-active");
  })

  document.getElementById("ex-f").addEventListener("click",function() {
    var m = document.getElementById("m-forward");
    m.classList.add("is-active");
  })

  document.getElementById("m-close").addEventListener("click",function() {
    var m = document.getElementById("m");
    m.classList.remove("is-active");
  })

  document.getElementById("m-close-button").addEventListener("click",function() {
    var m = document.getElementById("m");
    m.classList.remove("is-active");
  })

  document.getElementById("m-back-close").addEventListener("click",function() {
    var m = document.getElementById("m-back");
    m.classList.remove("is-active");
  })

  document.getElementById("m-back-close-button").addEventListener("click",function() {
    var m = document.getElementById("m-back");
    m.classList.remove("is-active");
  })

  document.getElementById("m-forward-close").addEventListener("click",function() {
    var m = document.getElementById("m-forward");
    m.classList.remove("is-active");
  })

  document.getElementById("m-forward-close-button").addEventListener("click",function() {
    var m = document.getElementById("m-forward");
    m.classList.remove("is-active");
  })
</script>

You might start by reading a book about Catholicism, but after reading the section on the early church find yourself drawn into a different book on Gnosticism (which would naturally cross over at certain points with the Catholicism book). While reading the Gnosticism book you might decide to branch into a book on religious experience, and from there into the neurological study of religion, reductionism, and evolutionary biology!

This structure, where many paths meet and intertwine allows you to follow your own impulses through the material, learning in your own way and at your own pace.

# Technology
The site is built using [Hugo](https://gohugo.io) and [Bulma](https://bulma.io), we host our source code on [Github](https://github.com/oc-rs/understandingreligion), and deploy via [Netlify](https://www.netlify.com).

The code outside of those dependancies (i.e. the site template, theming, and content) was written by [Luke Burns](/a/luke-burns/).

As far as possible, the site is built using static pages, which means it loads quickly, and is easy to build and maintain. It also means that there's very little in the way of obstructions to the reader - I promise, no pop-ups, no adverts, no cookie notices (we don't use them).

# Patrons and Sponsors
We're a small scale operation (in fact 'we' is generous) - at the moment the site is written, coded, and maintained by one person (hi, I'm Luke, pleasure to meet you). If you feel like supporting the work done here, you can become a Patron of the OCRS.

<a href="https://www.patreon.com/bePatron?u=8172845" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>

# Contributions
The project is developed by the Online Centre for Religious Studies (https://ocrs.online), but you can help!

We need contributors and editors to write and review content - if you want to get involved, use the contact form below.

<form name="contact" method="POST" data-netlify="true">

<div class="field">
  <label for="name" class="label">Name</label>
  <div class="control">
    <input name="name" class="input" type="text" id="name" placeholder="Tell us your name...">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input name="email" for="email" class="input" type="email" id="email" placeholder="you@email.com" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
  <label for="message" class="label">Message</label>
  <div class="control">
    <textarea name="message" class="textarea" id="message" placeholder="Now this is a story all about how..."></textarea>
  </div>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <a href="#" class="button is-link is-light">Cancel</a>
  </div>
</div>

</form>

