/* SABR & SHAWQ — site configuration. Prices, contact and project details are editable here.
   Before publishing: use dedicated business contact details; obtain permission for client images and feedback.
   Add only approved genuine reviews to the REVIEWS configuration. */
'use strict';
const CONFIG = {
    // Add a dedicated public business email and telephone here before launch.
    email: '', phone: '',
    instagram: 'https://www.instagram.com/sabrshawq/',
    facebook: 'https://www.facebook.com/profile.php?id=61595884534232',
    // Set individual review.approved flags below only after receiving permission.
    showDraftReviews: false,
    websitePlans: [
        { id: 'essential', name: 'Essential website', price: 300, description: 'A refined, straightforward business website. Ideal for a clear introduction and enquiries.' },
        { id: 'signature', name: 'Signature website', price: 400, description: 'A more comprehensive, bespoke presence with room to showcase your business.' },
        { id: 'bespoke', name: 'Bespoke website', price: 500, description: 'A tailored experience with additional design and functionality.' },
        { id: 'custom', name: 'Custom project', price: null, description: 'For more extensive requirements; let’s discuss a personalised quote.' }
    ],
    carePlans: [
        { id: 'none', name: 'No monthly package', price: 0, description: 'Arrange hosting and ongoing care separately.' },
        { id: 'essential', name: 'Essential', price: 15, description: 'Hosting, SSL and backups.' },
        { id: 'professional', name: 'Professional', price: 35, description: 'Essential plus maintenance and agreed minor edits.' },
        { id: 'premium', name: 'Premium', price: 75, description: 'Professional plus priority support and an agreed larger edit allowance.' }
    ]
};
const PROJECTS = [
    { id: 'glow-and-go', name: 'Glow & Go Travel', category: 'Travel & tourism', number: '01', flagship: true, art: 'waters', url: 'https://www.glowandgotravel.co.uk/#/home', publicLink: true, image: 'glow-and-go', summary: 'A distinctive digital home for an independent travel agent, built around the personal experience of planning a holiday.', overview: 'Glow & Go Travel helps people plan holidays with individual advice. The website brings together destination inspiration, personal storytelling and a direct route to making a travel enquiry.', direction: 'The design centres the person behind the business while making holiday inspiration easy to explore. Destination-led visuals, clear navigation and welcoming language support a more personal journey.', features: ['Dedicated pages for travel inspiration, the founder and reasons to book', 'Destination gallery, travel journal and client stories', 'Customer feedback and a structured holiday enquiry', 'Responsive navigation and direct contact journey'], recognition: 'The founder reports that Azure’s web design team requested a screenshot of the Glow & Go homepage for an award nomination presentation and has been recommending the work to other travel agents. This is recognition, not a claim of an award win or a formal partnership.' },
    { id: 'em-clean', name: 'EM Clean & Co', category: 'Domestic cleaning', number: '02', art: 'dunes', publicLink: false, image: 'em-clean', summary: 'A warm, approachable website for a local domestic cleaning business, with a clear path to requesting a quotation.', overview: 'EM Clean & Co provides home cleaning in Kettering and nearby areas. The website introduces its services, the person behind the business and the free home-visit quotation process.', direction: 'A welcoming visual approach supports trust and makes it easy for prospective clients to understand the service. Clear calls to action bring the personal quotation process into focus.', features: ['Service sections covering different areas of the home', 'Business introduction and reassurance information', 'Customer feedback area and FAQs', 'Contact details and structured email enquiry'] },
    { id: 'dog-cabin', name: 'The Dog Cabin', category: 'Pet care & grooming', number: '03', art: 'celestial', publicLink: false, image: 'dog-cabin', summary: 'A personality-led website for a dog grooming salon, combining a friendly visual identity with straightforward booking information.', overview: 'The Dog Cabin is a grooming salon in Rothwell, Kettering. Its website introduces grooming, washing and nail trimming, alongside a gallery and contact details.', direction: 'A friendly, image-led design communicates warmth and care. Service content, gallery browsing and clear telephone booking prompts help visitors find the information they need.', features: ['Grooming, washing and nail-trimming service sections', 'Photo gallery with enlarged image viewing', 'Customer feedback and frequently asked questions', 'Telephone booking and location information'] }
];
const REVIEWS = {
    'glow-and-go': { approved: false, kind: 'Industry feedback', attribution: '', short: '', full: '' },
    'em-clean': { approved: false, kind: 'Client feedback', attribution: '', short: '' },
    'dog-cabin': { approved: false, kind: 'Client feedback', attribution: '', short: '' }
};
const SERVICES = [
    { title: 'Bespoke web design', desc: 'Distinctive, responsive websites designed around your individual business, vision and audience.', icon: '<rect x="3" y="4" width="26" height="18" rx="1"/><path d="M10 28h12m-6-6v6"/>' },
    { title: 'Website redesign', desc: 'Reimagine your existing digital presence with a more refined visual identity and clearer user experience.', icon: '<path d="M26 10a12 12 0 1 0 1 12M26 3v8h-8"/>' },
    { title: 'Logo & branding', desc: 'Thoughtful visual identities, distinctive logos and cohesive colour and typography systems.', icon: '<path d="m16 2 13 14-13 14L3 16Z M16 8l7 8-7 8-7-8Z"/>' },
    { title: 'Hosting & domains', desc: 'Practical help with hosting, domain setup and the infrastructure behind your website.', icon: '<rect x="4" y="4" width="24" height="10" rx="2"/><rect x="4" y="18" width="24" height="10" rx="2"/><path d="M9 9h2m-2 14h2m7-14h6m-6 14h6"/>' },
    { title: 'Maintenance & support', desc: 'Optional ongoing care, agreed updates and personal support beyond the launch of your website.', icon: '<path d="M16 3 5 7v9c0 6 5 10 11 13 6-3 11-7 11-13V7Z M11 16l3 3 7-7"/>' }
];
const PROCESS = [
    ['Discovery', 'Understanding you, your business and your ambitions through a genuine conversation.'],
    ['Direction', 'Establishing the creative vision, requirements and agreed pricing.'],
    ['Design', 'Crafting a distinctive visual identity and website experience.'],
    ['Development', 'Bringing the design to life with meticulous attention to detail.'],
    ['Refinement', 'Working together, reviewing feedback and perfecting the details.'],
    ['Launch & Beyond', 'Launching your website and offering continued support where required.']
];
const FAQ = [
    ['How much does a website cost?', 'Indicative development packages are £300, £400 and £500. More extensive projects are quoted individually. We agree the final scope and price together before work begins.'],
    ['How long does a website take to build?', 'It depends on the size and complexity of the project, the content you have available and the feedback process. We will discuss a realistic schedule during discovery.'],
    ['Can you redesign my existing website?', 'Yes. We can discuss your existing website, what is working well and what needs improving, then agree a tailored redesign.'],
    ['Will my website work on mobile devices?', 'Responsive design is part of our approach. We tailor the layout and interactions for desktop, tablet and mobile.'],
    ['Is monthly maintenance compulsory?', 'No. Monthly website care is optional. If you do not choose a care plan, we will discuss your hosting and maintenance arrangements separately.'],
    ['Will I own my website?', 'We will explain ownership, deliverables, source files, third-party licences and hosting arrangements in your individual project agreement before development.'],
    ['How do I get started?', 'Explore our work, choose an indicative package if you wish, then send a project enquiry or contact us directly. We can discuss your requirements, budget and next steps personally.']
];
const $ = (s, root = document) => root.querySelector(s), $$ = (s, root = document) => [...root.querySelectorAll(s)];
const escapeHTML = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = n => n === null ? 'Custom' : `£${n.toLocaleString('en-GB')}`;
const localReview = p => Boolean(REVIEWS[p.id].approved && REVIEWS[p.id].short);
let artCount = 0, observer, toastTimer, currentRoute = '', firstHome = true;
let selection = { website: 'signature', care: 'none' };
const enquiry = { step: 0, values: { name: '', business: '', email: '', phone: '', industry: '', existing: '', services: [], budget: 'unsure', care: 'undecided', design: '', description: '', date: '', time: '' } };
/* Original scalable illustration system, no stock photography or external art files. */
function art(type = 'summit') {
    const id = 'a' + (++artCount), sky = `${id}s`, glow = `${id}g`, moon = `${id}m`;
    let seed = type.split('').reduce((n, c) => n + c.charCodeAt(0), 13);
    const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    let stars = '';
    for (let i = 0; i < 97; i++) {
        const x = rand() * 1600, y = rand() * 510, r = .45 + rand() * 1.5;
        stars += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" fill="${i % 7 === 0 ? '#d9c4a2' : '#d7e3f2'}" opacity="${(.17 + rand() * .57).toFixed(2)}"/>`;
    }
    let scenery = '', orb = '';
    const mountain = `<path d="M0 635 144 519 240 563 381 396 511 520 627 447 777 580 901 457 1000 535 1158 354 1300 480 1400 412 1600 554V900H0Z" fill="#152b49"/><path d="m381 396 130 124-91-52-38 20-55-19-87 94Z" fill="#203958" opacity=".65"/><path d="m1158 354 142 126-85-40-57 28-43-31-115 98Z" fill="#223958" opacity=".65"/><path d="M0 681 185 566 325 632 510 528 668 657 833 602 1001 685 1224 511 1392 605 1600 561V900H0Z" fill="#0d1a2d"/><path d="M0 763 205 672 360 741 557 640 731 719 922 661 1140 749 1378 642 1600 714V900H0Z" fill="#09111e"/><path d="M0 830Q230 717 433 788T830 776T1200 758T1600 765V900H0Z" fill="#050608"/>`;
    if (type === 'summit' || type === 'celestial') {
        scenery = mountain;
        orb = `<circle cx="1290" cy="167" r="47" fill="#d8c3a4" mask="url(#${moon})" opacity=".88"/>`;
        if (type === 'celestial')
            orb += `<path d="M184 150 290 115 414 182 510 109" fill="none" stroke="#bca98a" stroke-width="1" opacity=".3"/>`;
    }
    else if (type === 'dunes') {
        orb = '<circle cx="1030" cy="270" r="94" fill="#c4af90" opacity=".72"/>';
        scenery = '<path d="M0 587Q290 386 670 552T1600 482V900H0Z" fill="#1b304e"/><path d="M0 650Q370 465 810 650T1600 574V900H0Z" fill="#12233a"/><path d="M0 739Q310 555 740 745T1600 679V900H0Z" fill="#0a1525"/><path d="M0 830Q390 674 790 815T1600 756V900H0Z" fill="#050608"/>';
    }
    else if (type === 'waters') {
        orb = '<circle cx="1180" cy="250" r="65" fill="#d1bfa2" opacity=".83"/>';
        scenery = '<path d="M0 535 177 445 343 529 523 400 710 520 903 431 1100 541 1340 395 1600 520V615H0Z" fill="#172a45"/><path d="M0 590 235 530 408 579 650 486 855 568 1092 530 1310 579 1600 500V635H0Z" fill="#0b1729"/><rect y="598" width="1600" height="302" fill="#091322"/>';
        for (let i = 0; i < 14; i++) {
            const y = 615 + i * 15, w = 40 + i * 17;
            scenery += `<path d="M${1180 - w / 2} ${y}h${w}" stroke="#c4af90" opacity="${(.3 - i * .017).toFixed(3)}" stroke-width="1.8"/>`;
        }
        scenery += '<path d="M0 758 173 704 345 780 510 900H0ZM1600 740 1460 766 1330 900H1600Z" fill="#050608"/>';
    }
    else {
        orb = '<circle cx="1190" cy="285" r="116" fill="#142b4d" stroke="#7589a4" stroke-width="1.3"/><circle cx="1190" cy="285" r="92" fill="#0a1224" stroke="#c4af90" stroke-width="1" opacity=".8"/>';
        scenery = mountain;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${sky}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#050608"/><stop offset=".58" stop-color="#0e1e35"/><stop offset="1" stop-color="#142b4d"/></linearGradient><radialGradient id="${glow}"><stop stop-color="#29486d" stop-opacity=".4"/><stop offset="1" stop-color="#0a1224" stop-opacity="0"/></radialGradient><mask id="${moon}"><rect width="1600" height="900" fill="black"/><circle cx="1290" cy="167" r="47" fill="white"/><circle cx="1308" cy="150" r="45" fill="black"/></mask></defs><rect width="1600" height="900" fill="url(#${sky})"/><ellipse cx="1050" cy="450" rx="900" ry="460" fill="url(#${glow})"/><g class="art-stars">${stars}</g>${orb}${scenery}</svg>`;
}
function hydrateArt(root = document) { $$('[data-art]', root).forEach(el => { el.innerHTML = art(el.dataset.art); }); }
function icon(name) { const paths = { mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>', phone: '<path d="M8 3H4c-1 0-1 2-1 3 0 8 7 15 15 15 1 0 3 0 3-1v-4l-5-2-2 3a14 14 0 0 1-7-7l3-2Z"/>', instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>', facebook: '<path d="M14 21v-8h3l1-4h-4V7c0-1 1-2 3-2h1V2h-3c-4 0-5 2-5 5v2H7v4h3v8"/>' }; return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || ''}</svg>`; }
const verse = () => '<div class="verse"><p>God is with the patient.</p><span>2 : 153</span></div>';
function contactLink(type, label) { const value = CONFIG[type]; if (!value)
    return `<a href="#/contact">${icon(type)}${label}</a>`; return `<a href="${type === 'email' ? 'mailto:' : 'tel:'}${escapeHTML(type === 'phone' ? value.replace(/[^+\d]/g, '') : value)}">${icon(type)}${label}</a>`; }
function footer() { return `<div class="footer-main"><div class="footer-side"><p class="eyebrow">Contact</p>${contactLink('email', 'Email us')}${contactLink('phone', 'Call us')}</div><div class="footer-brand"><a href="#/home" aria-label="Return to home"><img src="sabr-emblem.png" alt="" width="80" height="42"></a><a href="#/home" class="wordmark">Sabr <span>&amp;</span> Shawq</a>${verse()}</div><div class="footer-side"><p class="eyebrow">Follow us</p><a href="${CONFIG.instagram}" target="_blank" rel="noopener noreferrer">Instagram ${icon('instagram')}</a><a href="${CONFIG.facebook}" target="_blank" rel="noopener noreferrer">Facebook ${icon('facebook')}</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Sabr &amp; Shawq. All rights reserved. <small class="build-marker">Build 3.1</small></span><nav aria-label="Footer navigation"><a href="#/reviews">Reviews</a><a href="#/faq">FAQ</a><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a></nav></div>`; }
function subhero(kicker, title, desc, illustration = 'celestial') { return `<section class="subhero"><div class="landscape" data-art="${illustration}" aria-hidden="true"></div><div class="shell"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p class="lead">${desc}</p></div></section>`; }
function closing() { return `<section class="closing"><div class="landscape" data-art="dunes" aria-hidden="true"></div><p class="eyebrow">Your next chapter</p><h2>Let’s create something <em>exceptional.</em></h2><p class="lead">A genuine conversation. A distinctive vision. A website entirely your own.</p><a href="#/start" class="btn btn-gold">Start a project ↗</a></section>`; }
function miniReview(p) { const r = REVIEWS[p.id]; return `<div class="mini-review">${localReview(p) ? `<p>“${escapeHTML(r.short)}”</p><small>${escapeHTML(r.approved ? r.attribution : r.kind)}</small>` : '<p>Client feedback coming soon.</p>'}<a class="text-link" href="#/reviews">All reviews ↗</a></div>`; }
function projectCard(p) { return `<article class="project-card ${p.flagship ? 'flagship' : ''}"><a href="#/work/${p.id}" class="project-visual" aria-label="Explore ${escapeHTML(p.name)} case study"><div class="project-placeholder"><div data-art="${p.art}" style="position:absolute;inset:0" aria-hidden="true"></div><div class="placeholder-label"><strong>${p.name}</strong><small>Explore the website preview</small></div></div><img data-screenshot="${p.image}.png" alt="${p.name} website screenshot" hidden></a><div class="project-body"><p class="eyebrow">${p.number} / ${p.category}${p.flagship ? ' · Flagship project' : ''}</p><h3><a href="#/work/${p.id}">${p.name}</a></h3><p>${p.summary}</p><a href="#/work/${p.id}" class="text-link">Explore case study <span>↗</span></a>${miniReview(p)}</div></article>`; }
function serviceCards() { return SERVICES.map((s, i) => `<article class="service-card"><span class="number">0${i + 1} /</span><svg class="service-icon" viewBox="0 0 32 32" aria-hidden="true">${s.icon}</svg><h3>${s.title}</h3><p>${s.desc}</p><a href="#/start" class="text-link">Discuss your project ↗</a></article>`).join(''); }
function processCards() { return PROCESS.map(([t, d], i) => `<article class="process-card"><span class="number">0${i + 1} /</span><h3>${t}</h3><p>${d}</p></article>`).join(''); }
function recognition() { const r = REVIEWS['glow-and-go']; return `<div><p class="eyebrow">Industry recognition</p><h2>Craftsmanship that <em>gets noticed.</em></h2><p class="lead">${localReview(PROJECTS[0]) ? 'The work for Glow & Go Travel led to a request to feature the website in an award nomination presentation and recommendations to other travel agents. No award win or official partnership is claimed.' : 'Discover how a tailored website brings a travel business’s individual story and services together.'}</p><a class="text-link" style="margin-top:20px" href="#/work/glow-and-go">Explore the flagship project ↗</a></div>${localReview(PROJECTS[0]) ? `<blockquote>“${escapeHTML(r.short)}”<cite>${escapeHTML(r.approved ? r.attribution : r.kind)}<br><a href="#/reviews" class="text-link" style="margin-top:10px">Read the full feedback ↗</a></cite></blockquote>` : '<div class="art-panel" data-art="celestial" aria-hidden="true"></div>'}`; }
function renderHome() { const app = $('#app'); app.append($('#home-template').content.cloneNode(true)); $('#home-projects').innerHTML = PROJECTS.map(projectCard).join(''); $('#home-services').innerHTML = serviceCards(); $('#home-recognition').innerHTML = recognition(); $('#home-prices').innerHTML = CONFIG.websitePlans.slice(0, 3).map(p => `<div><p class="eyebrow">${p.name}</p><strong>${money(p.price)}</strong><small>Indicative one-off investment</small></div>`).join(''); $('#home-process').innerHTML = processCards(); $('#home-cta').innerHTML = closing(); if (!firstHome)
    $('.hero-content').style.animation = 'none'; firstHome = false; $('.scroll-cue').addEventListener('click', e => { e.preventDefault(); $('#selected-work').scrollIntoView({ behavior: 'smooth' }); }); }
function renderWork() { return subhero('01 / The portfolio', 'Distinctive by <em>nature.</em>', 'Different businesses. Individual visions. A collection of carefully considered digital experiences.', 'summit') + `<section class="section shell"><div class="section-top"><div><p class="eyebrow">Selected client work</p><h2>Three businesses.<br><em>Three individual stories.</em></h2></div><p class="lead">Explore each project in its own case study.</p></div><div class="project-grid">${PROJECTS.map(projectCard).join('')}</div></section>` + closing(); }
function renderCase(p) { return subhero(`${p.number} / ${p.category}`, `${p.name}<em>.</em>`, p.summary, p.art) + `<section class="section shell"><a href="#/work" class="back-link">← All projects</a><div class="case-intro"><p class="lead">${p.overview}</p><div class="case-meta"><div><small>Client</small><strong>${p.name}</strong></div><div><small>Industry</small><strong>${p.category}</strong></div><div><small>Scope</small><strong>Website design & development</strong></div><div><small>Project</small><strong>${p.flagship ? 'Flagship' : 'Selected work'}</strong></div></div></div><div class="preview-panel"><div class="preview-controls"><div><p class="eyebrow" style="margin:0">Website showcase</p><span class="fine-print">Original website screenshot · tap or click to enlarge</span></div></div><div class="preview-stage"><div class="device-frame"><div class="frame-top" aria-hidden="true"><i></i><i></i><i></i></div><div class="frame-content" id="frame-content"></div></div></div><p class="preview-note">The original screenshot scales to fit any screen. Select it to view the full image.</p>${p.publicLink ? `<a class="text-link" style="margin-top:18px" href="${p.url}" target="_blank" rel="noopener noreferrer">Visit live website ↗</a>` : ''}</div><div class="case-columns"><div><p class="eyebrow">Creative direction</p><h3>Thoughtfully designed.</h3><p>${p.direction}</p></div><div><p class="eyebrow">Project details</p><h3>What it includes.</h3><ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul></div></div>${p.flagship && localReview(p) ? `<div class="case-review review-card"><p class="eyebrow">Industry recognition · ${REVIEWS[p.id].approved ? 'Approved' : 'Permission pending'}</p><h3>Recognition beyond the project.</h3><p class="lead">${p.recognition}</p><a href="#/reviews" class="text-link">Read the full message ↗</a></div>` : ''}<div class="case-review">${miniReview(p)}</div></section>` + closing(); }
function renderServices() { return subhero('02 / Our services', 'Design with <em>intention.</em>', 'Distinctive websites, thoughtful redesigns and the support to keep your digital presence at its best.', 'waters') + `<section class="section shell"><div class="section-top"><div><p class="eyebrow">Our craft</p><h2>Made around <em>you.</em></h2></div><a href="#/pricing" class="text-link">Explore indicative pricing ↗</a></div><div class="services-grid">${serviceCards()}</div></section><section class="section section-tinted"><div class="shell"><div class="section-top"><div><p class="eyebrow">How we work</p><h2>From vision <em>to reality.</em></h2></div></div><div class="process-grid">${processCards()}</div></div></section>` + closing(); }
function renderStudio() { return subhero('03 / The studio', 'Purpose beyond <em>design.</em>', 'An independent UK web design studio built around patience, aspiration and genuine human connection.', 'dunes') + `<section class="section shell"><div class="section-top"><div><p class="eyebrow">The name behind the craft</p><h2>Two words.<br><em>One philosophy.</em></h2></div></div><div class="philosophy-grid"><article><div class="arabic" lang="ar" dir="rtl" style="text-align:left">صبر</div><p class="eyebrow">Sabr / Patience</p><h3>Patience. Perseverance.</h3><p>Trusting in God's timing and taking the time to do things with intention.</p></article><article><div class="arabic" lang="ar" dir="rtl" style="text-align:left">شوق</div><p class="eyebrow">Shawq / Aspiration</p><h3>Longing. Aspiration.</h3><p>The desire to become better, create better and give more to those who matter.</p></article></div><article class="founder-letter"><p class="eyebrow">A letter from the founder</p><h2>The person behind <em>the purpose.</em></h2><p class="byline">Eli Wood — Founder of Sabr &amp; Shawq</p><p>Sabr &amp; Shawq was founded with a purpose that extends beyond digital design.</p><p>My journey into web development began with an ambition to pursue medicine, fund my future education and, truly above all, provide for the people I love. What began as a means of achieving those ambitions has become an opportunity to create meaningful work and build genuine relationships.</p><p>The name Sabr &amp; Shawq reflects two principles that guide my life.</p><p><strong>Sabr — <span lang="ar">صبر</span></strong><br>Patience. Perseverance. Trusting in God's timing, even when the path ahead is uncertain.</p><p><strong>Shawq — <span lang="ar">شوق</span></strong><br>Longing. Aspiration. The desire to become the best version of oneself, not only for personal achievement, but for those who matter most.</p><p>In an increasingly automated world, I believe genuine human connection is more important than ever. My ambition to pursue medicine has reinforced my appreciation for empathy, compassion and understanding — values that I bring into every professional relationship.</p><p>Behind every business is a person with ambitions, responsibilities and a story worth understanding.</p><p>At Sabr &amp; Shawq, I believe exceptional design begins with understanding that person.</p><p>My ambition is to build something meaningful, pursue excellence and create a future in which success allows me to give back to those I love.</p><div class="signature" aria-label="Stylised signature: Eli Wood">Eli Wood</div><div class="signature-label">Founder · Sabr &amp; Shawq</div>${verse()}</article></section><section class="section section-tinted"><div class="shell"><div class="section-top"><div><p class="eyebrow">The experience</p><h2>From vision <em>to reality.</em></h2></div></div><div class="process-grid">${processCards()}</div></div></section>` + closing(); }
function renderPricing() { return subhero('04 / The investment', 'Tailored <em>to you.</em>', 'Your vision. Your requirements. Your investment. Choose a starting point and discuss the details personally.', 'eclipse') + `<section class="section shell"><div class="package-layout"><div class="package-options"><p class="eyebrow">Personalised package builder</p><h2>01 / Your website</h2>${CONFIG.websitePlans.map(p => planOption(p, 'website', selection.website)).join('')}<h2>02 / Optional monthly care</h2>${CONFIG.carePlans.map(p => planOption(p, 'care', selection.care)).join('')}<p class="fine-print">Hosting and care allowances, timing and final project scope are agreed individually. Prices are estimates, not binding quotations.</p></div><aside class="estimate" aria-label="Your estimated investment"><p class="eyebrow">Your estimated investment</p><h3>A starting point.</h3><div class="estimate-line"><span>One-off development</span><strong id="estimate-one"></strong></div><div class="estimate-line"><span>Optional monthly care</span><strong id="estimate-month"></strong></div><p class="fine-print">No payment is taken here. Final pricing and payment arrangements are discussed personally.</p><button class="btn btn-gold" id="use-plan" type="button">Continue to enquiry ↗</button></aside></div></section>`; }
function planOption(p, group, selected) { return `<label class="option"><input type="radio" name="${group}" value="${p.id}" ${p.id === selected ? 'checked' : ''}><span class="option-text"><strong>${p.name}</strong><small>${p.description}</small></span><span class="amount">${money(p.price)}${group === 'care' ? '<small>/mo</small>' : ''}</span></label>`; }
function renderReviews() { return subhero('05 / Kind words', 'Work that <em>speaks.</em>', 'Feedback and industry recognition from the people connected with our projects.', 'celestial') + `<section class="section shell">${CONFIG.showDraftReviews ? '<p class="fine-print" style="margin:0 0 24px">Local preview: feedback awaiting permission and sample testimonials are clearly marked. They must not be published as genuine reviews without approval.</p>' : ''}<div class="reviews-grid">${PROJECTS.map(p => { const r = REVIEWS[p.id]; return `<article class="review-card ${p.flagship ? 'feature' : ''}"><p class="eyebrow">${p.flagship ? 'Industry feedback' : p.category}</p><h3>${p.name}</h3>${localReview(p) ? `<span class="draft-tag">${escapeHTML(r.approved ? 'Approved feedback' : r.kind)}</span><span class="quote-mark" aria-hidden="true">“</span><blockquote>${escapeHTML(r.short)}</blockquote>${p.flagship ? `<details><summary class="text-link">Read the full original message</summary><p class="transcript" style="margin-top:20px">${escapeHTML(r.full)}</p></details><p class="fine-print">Message supplied by the founder. Request to use a screenshot in an award nomination presentation; no award win or formal partnership is claimed.</p>` : ''}<p class="review-footer">${escapeHTML(r.attribution)}</p>` : '<p class="lead">Feedback will be added when permission to publish has been confirmed.</p>'}<a class="text-link" href="#/work/${p.id}">Explore the case study ↗</a></article>`; }).join('')}</div></section>` + closing(); }
function renderFAQ() { return subhero('06 / Good to know', 'A few <em>answers.</em>', 'Clear information, straightforward expectations and an invitation to ask anything else.', 'waters') + `<section class="section shell"><div class="faq-list">${FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section>` + closing(); }
function renderContact() { return subhero('07 / Let’s connect', 'It starts with <em>a conversation.</em>', 'Tell us about your business, your ambitions and what you would like to create.', 'dunes') + `<section class="section shell"><div class="contact-grid"><article class="contact-card"><p class="eyebrow">Direct contact</p><h3>Speak personally.</h3><p>For questions, ideas or an introductory conversation.</p>${CONFIG.email ? `<a href="mailto:${escapeHTML(CONFIG.email)}">${escapeHTML(CONFIG.email)}</a>` : '<p class="fine-print">Business email to be configured before launch.</p>'}${CONFIG.phone ? `<a href="tel:${escapeHTML(CONFIG.phone.replace(/[^+\d]/g, ''))}">${escapeHTML(CONFIG.phone)}</a>` : '<p class="fine-print">Business telephone to be configured before launch.</p>'}<a href="${CONFIG.instagram}" target="_blank" rel="noopener noreferrer" class="text-link">Instagram ↗</a><a href="${CONFIG.facebook}" target="_blank" rel="noopener noreferrer" class="text-link">Facebook ↗</a></article><article class="contact-card"><p class="eyebrow">Your project</p><h3>Share your vision.</h3><p>Introduce your business, choose an indicative budget and tell us about your requirements. You can also request a preferred call time.</p><a href="#/start" class="btn btn-gold">Start a project ↗</a><a href="#/pricing" class="text-link">Explore website packages ↗</a></article></div></section>` + closing(); }
function renderStart() { return subhero('08 / Start a project', 'Something exceptional <em>begins here.</em>', 'Share a little about yourself and your vision. No commitment, just a personal conversation.', 'summit') + `<section class="section shell"><div class="form-wrap"><div class="form-heading"><p class="eyebrow">Your project enquiry</p><h2>Tell us your <em>story.</em></h2><p>Four small steps towards a website entirely your own.</p></div><div id="enquiry-steps"></div><form id="enquiry-form" novalidate></form></div></section>`; }
function renderLegal(route) { const privacy = route === 'privacy'; return subhero('Information / Draft for review', privacy ? 'Your <em>privacy.</em>' : 'Working <em>together.</em>', privacy ? 'A straightforward explanation of how this website handles enquiry information.' : 'An outline of how individual projects are agreed.', 'eclipse') + `<section class="section shell legal"><p class="draft-tag">Draft · review before public launch</p>${privacy ? '<h2>Project enquiries</h2><p>The project form prepares an email locally in your browser. It does not send information to a website server. If you choose to send the prepared email, your email provider and the recipient will process the information you include.</p><h2>External services</h2><p>Fonts may load from Google Fonts. If you choose a live portfolio preview or follow a social link, the external website may process your visit under its own privacy policy.</p><h2>Data and cookies</h2><p>This version has no analytics or marketing cookies of its own. It keeps unfinished form values in memory while the page is open. Confirm the actual processing, retention, contact details and applicable rights before publication.</p>' : '<h2>Indicative pricing</h2><p>Website packages and monthly care prices are indicative. No payment is collected here, and submitting an enquiry does not create a project contract.</p><h2>Individual project agreements</h2><p>Scope, delivery schedule, payment terms, revisions, ownership, licences, hosting and ongoing support are agreed separately before work begins.</p><h2>Website content</h2><p>Portfolio material and feedback should only be published with appropriate permissions. This draft is not a complete set of contractual terms.</p>'}<h2>Questions</h2><p>Contact the studio through the <a class="text-link" href="#/contact">contact page</a>.</p></section>`; }
/* Interaction layer: screenshots, portfolio previews, routing and enquiry. */
function hydrateScreenshots(root = document) { $$('img[data-screenshot]', root).forEach(img => { img.addEventListener('load', () => { img.hidden = false; const p = img.parentElement.querySelector('.project-placeholder'); if (p)
    p.hidden = true; }, { once: true }); img.addEventListener('error', () => { img.hidden = true; }, { once: true }); img.src = img.dataset.screenshot; }); }
function showImage(src, alt) { const dialog = $('#image-dialog'); $('img', dialog).src = src; $('img', dialog).alt = alt; $('p', dialog).textContent = alt; if (typeof dialog.showModal === 'function')
    dialog.showModal();
else
    window.open(src, '_blank', 'noopener'); }
// One screenshot per project, responsive on every device. No external embed required.
function initCase(p) {
    const content = $('#frame-content');
    content.innerHTML = '<div class="frame-message"><p>Preparing website preview…</p></div>';
    const img = new Image();
    img.alt = `${p.name} — original website screenshot`;
    img.onload = () => {
        if (!content.isConnected)
            return;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'screenshot-zoom';
        button.setAttribute('aria-label', `Enlarge ${p.name} website screenshot`);
        button.append(img);
        button.addEventListener('click', () => showImage(img.src, img.alt));
        content.replaceChildren(button);
    };
    img.onerror = () => {
        if (!content.isConnected)
            return;
        content.innerHTML = `<div class="frame-message"><p class="eyebrow">${p.category}</p><h3>${p.name}</h3><p>The project screenshot will appear here when available.</p></div>`;
    };
    img.src = `${p.image}.png`;
}
function initPricing() { const refresh = () => { const w = CONFIG.websitePlans.find(p => p.id === selection.website), c = CONFIG.carePlans.find(p => p.id === selection.care); $('#estimate-one').textContent = money(w.price); $('#estimate-month').textContent = c.price ? `${money(c.price)}/mo` : '£0/mo'; }; $$('.package-options input').forEach(input => input.addEventListener('change', () => { selection[input.name] = input.value; refresh(); })); $('#use-plan').addEventListener('click', () => { const w = CONFIG.websitePlans.find(p => p.id === selection.website); enquiry.values.budget = w.price === null ? 'custom' : String(w.price); enquiry.values.care = selection.care; enquiry.step = 0; location.hash = '/start'; }); refresh(); }
const inputField = (name, label, type = 'text', placeholder = '', required = false, full = false) => `<label class="field ${full ? 'full' : ''}"><span>${label}${required ? ' *' : ''}</span><input name="${name}" type="${type}" value="${escapeHTML(enquiry.values[name])}" placeholder="${escapeHTML(placeholder)}" ${required ? 'required' : ''} ${name === 'date' ? `min="${localDate()}"` : ''} ${name === 'email' ? 'autocomplete="email"' : name === 'name' ? 'autocomplete="name"' : name === 'phone' ? 'autocomplete="tel"' : name === 'business' ? 'autocomplete="organization"' : ''}></label>`;
function localDate() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
function selectField(name, label, options) { return `<label class="field"><span>${label}</span><select name="${name}">${options.map(([val, text]) => `<option value="${val}" ${enquiry.values[name] === val ? 'selected' : ''}>${escapeHTML(text)}</option>`).join('')}</select></label>`; }
function textareaField(name, label, placeholder, required = false) { return `<label class="field full"><span>${label}${required ? ' *' : ''}</span><textarea name="${name}" placeholder="${escapeHTML(placeholder)}" ${required ? 'required' : ''} maxlength="2500">${escapeHTML(enquiry.values[name])}</textarea></label>`; }
function enquiryBody() { const v = enquiry.values; const c = CONFIG.carePlans.find(p => p.id === v.care); return `Hello Sabr & Shawq,\n\nI would like to discuss a website project.\n\nName: ${v.name}\nBusiness: ${v.business}\nEmail: ${v.email}\nPhone: ${v.phone || 'Not provided'}\nIndustry: ${v.industry}\nExisting website: ${v.existing || 'Not provided'}\nRequired services: ${v.services.join(', ') || 'To discuss'}\nEstimated budget: ${v.budget === 'unsure' ? 'To discuss' : v.budget === 'custom' ? 'Custom quotation' : '£' + v.budget}\nMonthly care: ${c ? `${c.name} (${money(c.price)}/month)` : 'To discuss'}\nDesign preferences: ${v.design || 'To discuss'}\nProject description: ${v.description}\nPreferred call date: ${v.date || 'Not requested'}\nPreferred call time (UK time): ${v.time || 'Not requested'}\n\nI understand that any call time and pricing are subject to confirmation.\n\nKind regards,\n${v.name}`; }
function renderForm() {
    const step = enquiry.step;
    $('#enquiry-steps').innerHTML = `<div class="steps" aria-label="Step ${step + 1} of 4">${['Introduction', 'Your project', 'Investment', 'Next steps'].map((s, i) => `<div class="${i === step ? 'current' : i < step ? 'complete' : ''}" ${i === step ? 'aria-current="step"' : ''}>0${i + 1} / ${s}</div>`).join('')}</div>`;
    const form = $('#enquiry-form');
    let content = '';
    if (step === 0) {
        content = `<h3>01 — Tell us about yourself.</h3><div class="form-grid">${inputField('name', 'Full name', 'text', 'Your name', true)}${inputField('business', 'Business name', 'text', 'Your business', true)}${inputField('email', 'Email address', 'email', 'you@business.co.uk', true)}${inputField('phone', 'Phone number (optional)', 'tel', 'Your telephone')}${inputField('industry', 'Industry', 'text', 'Your industry', true, true)}</div>`;
    }
    else if (step === 1) {
        content = `<h3>02 — Your vision.</h3><div class="form-grid"><fieldset class="field full"><legend>Required services</legend><div class="checks">${SERVICES.map(s => `<label class="check"><input type="checkbox" name="services" value="${escapeHTML(s.title)}" ${enquiry.values.services.includes(s.title) ? 'checked' : ''}>${s.title}</label>`).join('')}</div></fieldset>${inputField('existing', 'Existing website (if applicable)', 'url', 'https://', false, true)}${textareaField('design', 'Design preferences', 'Colours, styles or websites you admire…')}${textareaField('description', 'Project description', 'Tell us what you would like to achieve.', true)}</div>`;
    }
    else if (step === 2) {
        content = `<h3>03 — Your investment.</h3><div class="form-grid">${selectField('budget', 'Estimated website budget', [["unsure", "I’d like some guidance"], ['300', 'Around £300'], ['400', 'Around £400'], ['500', 'Around £500'], ['custom', '£500+ / custom quotation']])}${selectField('care', 'Optional monthly care', [['undecided', 'I’d like to discuss this'], ...CONFIG.carePlans.map(p => [p.id, `${p.name}${p.price ? ' — ' + money(p.price) + '/month' : ''}`])])}</div><p class="fine-print">All prices are indicative and subject to your individual requirements. No payment is taken on the website.</p>`;
    }
    else {
        content = `<h3>04 — Let’s connect.</h3><p class="lead" style="margin:0 0 20px">Request a call if you prefer to talk through your project. Times are subject to confirmation.</p><div class="form-grid">${inputField('date', 'Preferred call date (optional)', 'date')}${inputField('time', 'Preferred call time (UK time, optional)', 'time')}</div><p class="fine-print">Your email application will open with the enquiry prepared. You will need to press Send yourself. No information is submitted automatically.</p><div class="review-enquiry" id="enquiry-summary"></div>${CONFIG.email ? '' : '<p class="fine-print">Preview mode: configure a dedicated business email in script.js before sending enquiries. You can still copy the prepared enquiry.</p>'}`;
    }
    form.innerHTML = `<div class="form-step">${content}</div><p class="form-error" id="form-error" role="alert"></p><div class="form-actions">${step > 0 ? '<button class="btn" type="button" id="form-back">← Back</button>' : ''}<div class="right">${step === 3 ? '<button class="btn" type="button" id="copy-enquiry">Copy enquiry</button>' : ''}<button class="btn btn-gold" type="submit" ${step === 3 && !CONFIG.email ? 'disabled' : ''}>${step === 3 ? 'Prepare email ↗' : 'Continue →'}</button></div></div>`;
    if (step === 3)
        $('#enquiry-summary').textContent = enquiryBody();
    function sync() { const fd = new FormData(form); for (const [k, v] of fd.entries()) {
        if (k !== 'services')
            enquiry.values[k] = String(v);
    } if (step === 1)
        enquiry.values.services = fd.getAll('services').map(String); if (step === 3)
        $('#enquiry-summary').textContent = enquiryBody(); }
    form.oninput = sync;
    form.onchange = sync;
    const back = $('#form-back');
    if (back)
        back.onclick = () => { sync(); enquiry.step--; renderForm(); };
    const copy = $('#copy-enquiry');
    if (copy)
        copy.onclick = () => { sync(); copyText(enquiryBody()); };
    form.onsubmit = e => { e.preventDefault(); sync(); if (!form.checkValidity()) {
        const invalid = $(':invalid', form);
        $('#form-error').textContent = 'Please complete the required fields correctly.';
        if (invalid) {
            invalid.focus();
            invalid.reportValidity();
        }
        return;
    } if (step === 3 && enquiry.values.time && !enquiry.values.date) {
        $('#form-error').textContent = 'Please choose a date for your preferred call time, or leave both blank.';
        return;
    } if (step < 3) {
        enquiry.step++;
        renderForm();
        return;
    } if (CONFIG.email) {
        const subject = `New website enquiry — ${enquiry.values.business.replace(/[\r\n]/g, ' ')}`;
        const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryBody())}`;
        location.href = mailto;
        toast('Email prepared. Please press Send in your email app.');
    } };
}
async function copyText(text) { try {
    if (navigator.clipboard && window.isSecureContext)
        await navigator.clipboard.writeText(text);
    else {
        const field = document.createElement('textarea');
        field.value = text;
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.append(field);
        field.select();
        const ok = document.execCommand('copy');
        field.remove();
        if (!ok)
            throw Error('copy unavailable');
    }
    toast('Enquiry copied.');
}
catch {
    toast('Copy is unavailable. Select the enquiry summary and copy it manually.');
} }
function toast(message) { const el = $('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 4500); }
function reveal() { if (observer)
    observer.disconnect(); if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches)
    return; observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) {
    e.target.classList.add('visible');
    observer.unobserve(e.target);
} }), { threshold: .08 }); $$('.reveal').forEach(el => { if (el.getBoundingClientRect().top > innerHeight + 40) {
    el.classList.add('pending');
    observer.observe(el);
} }); }
const ROUTES = { home: { title: 'Uniquely unrivalled.', render: renderHome }, work: { title: 'Our Work', render: renderWork }, services: { title: 'Our Services', render: renderServices }, studio: { title: 'The Studio', render: renderStudio }, pricing: { title: 'Pricing & Plans', render: renderPricing }, reviews: { title: 'Reviews & Recognition', render: renderReviews }, faq: { title: 'FAQs', render: renderFAQ }, contact: { title: 'Contact', render: renderContact }, start: { title: 'Start a Project', render: renderStart }, privacy: { title: 'Privacy', render: () => renderLegal('privacy') }, terms: { title: 'Terms', render: () => renderLegal('terms') } };
function setMenu(open) { const header = $('#site-header'), toggle = $('.menu-toggle'); header.classList.toggle('menu-open', open); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); if (open)
    $('nav a', header).focus(); }
function route() {
    const path = location.hash.replace(/^#\/?/, '').split('?')[0].replace(/\/$/, '') || 'home';
    if (path === 'main-content' || path === 'selected-work') {
        if (!currentRoute) {
            location.replace('#/home');
        }
        return;
    }
    if (currentRoute === path)
        return;
    currentRoute = path;
    setMenu(false);
    const app = $('#app');
    app.replaceChildren();
    let p = null, section = path.split('/')[0], entry = ROUTES[path];
    if (path.startsWith('work/'))
        p = PROJECTS.find(x => x.id === path.split('/')[1]);
    if (p) {
        app.innerHTML = renderCase(p);
        document.title = `${p.name} | Sabr & Shawq`;
    }
    else if (entry) {
        if (path === 'home')
            entry.render();
        else
            app.innerHTML = entry.render();
        document.title = `${entry.title} | Sabr & Shawq`;
    }
    else {
        app.innerHTML = subhero('404 / A different path', 'The way <em>home.</em>', 'This page could not be found.') + '<section class="section shell"><a class="btn btn-gold" href="#/home">Return home ↗</a></section>';
        document.title = 'Page not found | Sabr & Shawq';
    }
    $$('#site-nav a').forEach(a => { const active = a.getAttribute('href') === `#/${section}`; a.classList.toggle('active', active); if (active)
        a.setAttribute('aria-current', 'page');
    else
        a.removeAttribute('aria-current'); });
    hydrateArt(app);
    hydrateScreenshots(app);
    if (p)
        initCase(p);
    if (path === 'pricing')
        initPricing();
    if (path === 'start')
        renderForm();
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (path !== 'home') {
        $('#main-content').focus({ preventScroll: true });
        app.classList.remove('route-enter');
        void app.offsetWidth;
        app.classList.add('route-enter');
    }
    else
        app.classList.remove('route-enter');
    reveal();
}
$('#footer').innerHTML = footer();
$('.menu-toggle').addEventListener('click', () => setMenu($('.menu-toggle').getAttribute('aria-expanded') !== 'true'));
$('#site-nav').addEventListener('click', e => { if (e.target.closest('a'))
    setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#site-header').classList.contains('menu-open')) {
    setMenu(false);
    $('.menu-toggle').focus();
} });
window.addEventListener('scroll', () => $('#site-header').classList.toggle('scrolled', window.scrollY > 65), { passive: true });
window.addEventListener('hashchange', route);
$('.skip').addEventListener('click', e => { e.preventDefault(); $('#main-content').focus(); });
const dialog = $('#image-dialog');
$('.dialog-close', dialog).addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog)
    dialog.close(); });
route();
