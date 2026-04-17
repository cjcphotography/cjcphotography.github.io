/* ============================================
   CJC PHOTOGRAPHY — Main JS
   ============================================ */

const STATS = {
  followers:   "51,000",
  clients:     "19",
  yearsActive: "2"
};

const CONTACT = {
  email:     "charliecaddick123@gmail.com",
  instagram: "@cjc_photography2025",
  igUrl:     "https://www.instagram.com/cjc_photography2025",
  location:  "North Vancouver, BC (Now based in Antigonish, NS)",
  phone:     "778-840-2042"
};

const CLIENTS = [
  {
    id: "pucks-for-purpose",
    tag: "Charity Event",
    name: "Pucks for Purpose",
    shortDesc: "A charity hockey event bringing the community together for two great causes.",
    fullDesc: "Pucks for Purpose is a hockey focused initiative that brings communities together to create meaningful change through sport. Built on the energy of both men's and women's games, the event reached over 1.1 million viewers this year, highlighting its growing impact and wide audience. It also made history by hosting the first ever university women's charity sporting event in Canada, setting a new standard for inclusivity and recognition in university athletics. Beyond the game itself, Pucks for Purpose is dedicated to giving back. This year alone, the initiative raised $200,000, bringing its three year total to $385,000. These funds directly support the Canadian Cancer Society and motionball for Special Olympics, helping fund critical research, programs, and opportunities for those who need it most. At its core, Pucks for Purpose is about more than hockey — it is about using a shared passion for sport to unite people, raise awareness, and make a lasting difference in the community.",
    stats: [
      { num: "3,000+", label: "Attendees" },
      { num: "1.1M",   label: "Instagram Views" },
      { num: "$385K",  label: "Total Raised" }
    ],
    thumbnail: "images/clients/pucks-thumb.jpg",
    photos: ["images/clients/pucks-1.jpg","images/clients/pucks-2.jpg","images/clients/pucks-3.jpg"]
  },
  {
    id: "women-in-business",
    tag: "Professional Event",
    name: "Women in Business",
    shortDesc: "Celebrating and elevating women entrepreneurs and leaders in Nova Scotia.",
    fullDesc: "Schwartz Women in Business hosts an annual leadership conference in celebration of International Women's Day, bringing together students, professionals, and leaders to focus on confidence, self-discovery, and developing leadership from within. This year's event, In Full Bloom: The Leader Within, highlighted the importance of personal growth and empowering women in business and beyond. The conference featured an impressive lineup of speakers, including Johanne R. Belanger, Tia Upshaw, Andrea Paul, Daureen MacAulay, and Ann-Marie Flinn, each offering unique perspectives on leadership, entrepreneurship, and community impact. The event continues to create a strong and supportive environment that encourages connection, inspiration, and the advancement of women in leadership roles.",
    stats: [
      { num: "2",      label: "Years Hired" },
      { num: "4,000+", label: "Photos Delivered" },
      { num: "31",     label: "Hours Shot" }
    ],
    thumbnail: "images/clients/wib-thumb.jpg",
    photos: ["images/clients/wib-1.jpg","images/clients/wib-2.jpg","images/clients/wib-3.jpg"]
  },
  {
    id: "stfx-nursing",
    tag: "University Event",
    name: "StFX Nursing Society",
    shortDesc: "Documenting the dedication and camaraderie of the StFX Nursing Society.",
    fullDesc: "The StFX Nursing Society event is an annual celebration of the dedication, hard work, and impact of its students and faculty in shaping the future of healthcare. CJC Photography 2025 was there to document this meaningful gathering, capturing the pride, professionalism, and strong sense of community that defines the program. These images reflect not just a single event, but an ongoing commitment to improving the healthcare world.",
    stats: [
      { num: "300+", label: "Attendees" },
      { num: "800+", label: "Photos Delivered" },
      { num: "5",    label: "Hours Shot" }
    ],
    thumbnail: "images/clients/stfx-thumb.jpg",
    photos: ["images/clients/stfx-1.jpg","images/clients/stfx-2.jpg","images/clients/stfx-3.jpg"]
  },
  {
    id: "oliver-bray-music",
    tag: "Music & Artist",
    name: "Oliver Bray Music",
    shortDesc: "Live music photography for rising Nova Scotia artist Oliver Bray.",
    fullDesc: "Oliver Bray is a rising talent in the Nova Scotia music scene, known for his ability to connect with audiences through raw energy and emotion. His live performance at Oak Manor by Burnside drew a full crowd of fourth year graduating students, filling the venue to capacity and creating an electric atmosphere. The performance highlighted Oliver's growing presence and artistry, with each moment reflecting his connection to the crowd and the momentum behind his music. The night captured the excitement of a milestone celebration while showcasing a performer whose sound and stage presence continue to resonate with an expanding fanbase.",
    stats: [
      { num: "200+", label: "Photos Delivered" },
      { num: "2",    label: "Hours Shot" },
      { num: "150+", label: "Attendees" }
    ],
    thumbnail: "images/clients/oliver-thumb.jpg",
    photos: ["images/clients/oliver-1.jpg","images/clients/oliver-2.jpg","images/clients/oliver-3.jpg"]
  }
];

const SERVICES = [
  {
    tag: "Service 01",
    name: "Photography",
    desc: "Professional photography tailored to your event, brand, or moment. From intimate gatherings to large scale productions, every shot is crafted with intention and delivered with care.",
    includes: ["Headshots & Portraits","Live Music & Concerts","Galas & Formal Events","Conferences & Corporate","Campus & University Events","Sports & Action"],
    thumbnail: "images/clients/service-photo.jpg"
  },
  {
    tag: "Service 02",
    name: "Videography & Social Media",
    desc: "Dynamic video content built for modern audiences — from sweeping drone footage to polished recap videos and high-performing social media content. CJC Photography co-runs the Pucks for Purpose social media account, which accumulated over 1.1 million views during the event period.",
    includes: ["Drone Cinematography","Event Recap Videos","Social Media Content Creation","Co-managed Social Accounts","Highlight Reels","Short-form & Reels"],
    thumbnail: "images/clients/service-video.jpg"
  }
];

const ABOUT = {
  founderName: "Charlie Caddick",
  subtitle:    "Founder & Lead Photographer",
  bio1: "CJC Photography 2025 is a growing creative brand founded by Charlie Caddick, focused on capturing authentic moments with a clean, natural style. Based in Nova Scotia, the business is built on a passion for storytelling through images and a commitment to delivering high quality work that clients can genuinely connect with. The goal is always to create photos that feel real, personal, and meaningful.",
  bio2: "The brand specializes in event coverage, lifestyle photography, and sports content. From formal events and campus functions to fast paced action on the field, each moment is captured as it naturally unfolds. Charlie's experience working with student organizations, local events, and athletic teams has shaped a strong ability to capture energy, movement, and emotion in a way that reflects the purpose behind each shoot.",
  bio3: "What sets CJC Photography 2025 apart is its balance between professionalism and approachability. Clients can expect clear communication, reliability, and a collaborative experience from start to finish. There is a strong emphasis on making people feel comfortable in front of the camera, leading to more natural results. The focus remains on building lasting relationships, supporting local communities, and continuing to grow creatively.",
  values: [
    { num: "01", title: "Authenticity",    desc: "Capturing real moments as they happen, without over staging or forcing emotion." },
    { num: "02", title: "Professionalism", desc: "Providing reliable service, clear communication, and consistent high quality results." },
    { num: "03", title: "Creativity",      desc: "Bringing a unique perspective to every shoot while adapting to each client's vision." },
    { num: "04", title: "Connection",      desc: "Building trust with clients to create a comfortable environment and more natural photos." }
  ]
};

// ============================================
// GALLERY — tries .jpg first, falls back to .JPG
// This handles both lowercase and uppercase extensions
// ============================================
function makeImageSrc(base) {
  // Returns the lowercase path; onerror in HTML will try uppercase
  return base;
}

const GALLERY_PHOTOS = Array.from({length: 40}, (_, i) => `images/photo${i+1}.jpg`);
const HOME_GALLERY_COUNT = 6;

// ============================================
// SITE ENGINE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderHomeGallery();
  renderFullGallery();
  renderClientsPage();
  renderServicesPage();
  renderAbout();
  renderContact();
  initNav();
  initLightbox();
  initDatePicker();
  navigateTo('home');
  setTimeout(initAnimations, 150);
});

function renderStats() {
  document.querySelectorAll('[data-stat]').forEach(el => {
    const key = el.dataset.stat;
    if (STATS[key]) el.textContent = STATS[key];
  });
}

function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
  const page = document.getElementById('page-' + pageId);
  if (page) { page.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  document.querySelector('.nav-links')?.classList.remove('open');
  setTimeout(initAnimations, 80);
}

function initNav() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => navigateTo(el.dataset.nav));
  });
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }
}

// Image with JPG/jpg fallback
function imgWithFallback(src, alt, extraAttrs = '') {
  const upper = src.replace(/\.jpg$/, '.JPG');
  return `<img src="${src}" alt="${alt}" ${extraAttrs}
    onerror="if(this.src.endsWith('.jpg')){this.src=this.src.replace('.jpg','.JPG')}else{this.closest('[data-hide-on-error]')&&this.closest('[data-hide-on-error]').style.setProperty('display','none');this.style.display='none';var p=this.parentElement;if(p&&p.dataset.placeholder){p.innerHTML=p.dataset.placeholder}}"
  >`;
}

function galleryItemHTML(src) {
  const upper = src.replace(/\.jpg$/, '.JPG');
  return `<div class="gallery-item img-reveal">
    <img src="${src}" alt="CJC Photography" loading="lazy"
      onerror="if(this.src.endsWith('.jpg')){this.src=this.src.replace('.jpg','.JPG')}else{this.closest('.gallery-item').style.display='none'}">
  </div>`;
}

function renderHomeGallery() {
  const el = document.getElementById('home-gallery');
  if (!el) return;
  el.innerHTML = GALLERY_PHOTOS.slice(0, HOME_GALLERY_COUNT).map(galleryItemHTML).join('');
}

function renderFullGallery() {
  const el = document.getElementById('full-gallery');
  if (!el) return;
  el.innerHTML = GALLERY_PHOTOS.map(galleryItemHTML).join('');
}

function renderServicesPage() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => {
    const upper = s.thumbnail.replace(/\.jpg$/, '.JPG');
    return `
    <div class="service-card reveal">
      <div class="service-thumbnail" data-placeholder="<div class='service-thumbnail-placeholder'><svg width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1'><rect x='3' y='3' width='18' height='18' rx='2'/><circle cx='8.5' cy='8.5' r='1.5'/><polyline points='21 15 16 10 5 21'/></svg><span>Upload ${s.thumbnail}</span></div>">
        <img src="${s.thumbnail}" alt="${s.name}" loading="lazy"
          onerror="if(this.src.endsWith('.jpg')){this.src=this.src.replace('.jpg','.JPG')}else{var p=this.parentElement;p.innerHTML=p.dataset.placeholder}">
      </div>
      <div class="service-info">
        <span class="service-tag">${s.tag}</span>
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.desc}</p>
        <div class="service-includes">
          <div class="service-includes-label">What's included</div>
          ${s.includes.map(item => `<div class="service-include-item">${item}</div>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderClientsPage() {
  const grid = document.getElementById('clients-grid');
  if (!grid) return;
  grid.innerHTML = CLIENTS.map(c => {
    return `
    <div class="client-card reveal" onclick="openClient('${c.id}')">
      <div class="client-card-inner">
        <div class="client-thumbnail" data-placeholder="<div class='client-thumbnail-placeholder'><svg width='30' height='30' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1'><rect x='3' y='3' width='18' height='18' rx='2'/><circle cx='8.5' cy='8.5' r='1.5'/><polyline points='21 15 16 10 5 21'/></svg><span>Upload thumbnail</span></div>">
          <img src="${c.thumbnail}" alt="${c.name}" loading="lazy"
            onerror="if(this.src.endsWith('.jpg')){this.src=this.src.replace('.jpg','.JPG')}else{var p=this.parentElement;p.innerHTML=p.dataset.placeholder}">
        </div>
        <div class="client-info">
          <div>
            <span class="client-tag">${c.tag}</span>
            <h3 class="client-name">${c.name}</h3>
            <p class="client-desc">${c.shortDesc}</p>
          </div>
          <div>
            <div class="client-stats">
              ${c.stats.slice(0,2).map(s => `
                <div>
                  <span class="client-stat-num">${s.num}</span>
                  <span class="client-stat-lbl">${s.label}</span>
                </div>
              `).join('')}
            </div>
            <button class="view-more-link">View Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function openClient(id) {
  const client = CLIENTS.find(c => c.id === id);
  if (!client) return;
  const modal = document.getElementById('client-modal');
  document.getElementById('modal-body').innerHTML = `
    <button class="modal-back" onclick="closeClient()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
      </svg>Back to clients
    </button>
    <div class="modal-header">
      <div class="modal-hero-img" data-placeholder="">
        <img src="${client.thumbnail}" alt="${client.name}"
          onerror="if(this.src.endsWith('.jpg')){this.src=this.src.replace('.jpg','.JPG')}else{this.style.display='none'}">
      </div>
      <div class="modal-meta">
        <span class="modal-tag">${client.tag}</span>
        <h2 class="modal-title">${client.name}</h2>
        <p class="modal-desc">${client.fullDesc}</p>
        <div class="modal-stats">
          ${client.stats.map(s => `<div class="modal-stat"><span class="modal-stat-num">${s.num}</span><span class="modal-stat-lbl">${s.label}</span></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="section-header" style="margin-top:0;">
      <div class="section-eyebrow">From the shoot</div>
      <h3 class="section-title">Featured <em>Photographs</em></h3>
    </div>
    <div class="modal-gallery">
      ${client.photos.map((photo, i) => `
        <div class="modal-gallery-item" onclick="openLightbox('${photo}')">
          <img src="${photo}" alt="Photo ${i+1}" loading="lazy"
            onerror="if(this.src.endsWith('.jpg')){this.src=this.src.replace('.jpg','.JPG')}else{this.parentElement.innerHTML='<div class=\'modal-gallery-placeholder\'>Photo ${i+1}</div>'}">
        </div>
      `).join('')}
    </div>
  `;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeClient() {
  document.getElementById('client-modal').style.display = 'none';
  document.body.style.overflow = '';
}

function renderAbout() {
  const el = document.getElementById('about-content');
  if (!el) return;
  el.innerHTML = `
    <div class="about-grid">
      <div class="about-portrait reveal">
        <img src="images/charlie.jpg" alt="Charlie Caddick"
          onerror="if(this.src.endsWith('.jpg')){this.src=this.src.replace('.jpg','.JPG')}else{this.style.display='none';this.nextElementSibling.style.display='flex'}">
        <div class="about-portrait-placeholder" style="display:none;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          <span style="font-size:0.75rem;letter-spacing:0.08em;text-align:center;">Upload images/charlie.jpg</span>
        </div>
      </div>
      <div class="about-text reveal reveal-delay-1">
        <div class="section-eyebrow">The Founder</div>
        <h2 class="section-title" style="margin-bottom:8px;">${ABOUT.founderName}</h2>
        <span class="about-subtitle">${ABOUT.subtitle}</span>
        <p>${ABOUT.bio1}</p>
        <p>${ABOUT.bio2}</p>
        <p>${ABOUT.bio3}</p>
        <a class="btn-primary" data-nav="contact" style="display:inline-block;margin-top:8px;cursor:pointer;">Work with Charlie</a>
        <div class="about-values">
          ${ABOUT.values.map((v,i) => `
            <div class="value-item reveal reveal-delay-${i+1}">
              <span class="value-num">${v.num}</span>
              <div class="value-title">${v.title}</div>
              <div class="value-desc">${v.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  el.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.nav));
  });
}

// ============================================
// DATE PICKER
// ============================================
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function buildTimeOptions() {
  const options = [];
  for (let h = 0; h < 24; h++) {
    for (let m of [0, 30]) {
      const hour12 = h % 12 || 12;
      const ampm   = h < 12 ? 'AM' : 'PM';
      const mins   = m === 0 ? '00' : '30';
      options.push(`${hour12}:${mins} ${ampm}`);
    }
  }
  return options;
}

const TIME_OPTIONS = buildTimeOptions();
let dateCount = 0;

function addDateEntry() {
  dateCount++;
  const container  = document.getElementById('date-entries-container');
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 5}, (_, i) => currentYear + i);
  const days  = Array.from({length: 31}, (_, i) => i + 1);

  const entry = document.createElement('div');
  entry.className = 'date-entry';
  entry.dataset.id = dateCount;

  const timeOpts = TIME_OPTIONS.map(t => `<option value="${t}">${t}</option>`).join('');
  const dayOpts  = days.map(d  => `<option value="${d}">${d}</option>`).join('');
  const yearOpts = years.map(y => `<option value="${y}">${y}</option>`).join('');
  const monOpts  = MONTHS.map(m => `<option value="${m}">${m}</option>`).join('');

  entry.innerHTML = `
    <div class="date-entry-header">
      <span class="date-entry-title">Day ${dateCount}</span>
      <button type="button" class="remove-date-btn" onclick="removeDateEntry(${dateCount})">Remove</button>
    </div>
    <div class="date-row">
      <select class="date-month" aria-label="Month">
        <option value="">Month</option>${monOpts}
      </select>
      <select class="date-day" aria-label="Day">
        <option value="">Day</option>${dayOpts}
      </select>
      <select class="date-year" aria-label="Year">
        <option value="">Year</option>${yearOpts}
      </select>
    </div>
    <div class="time-row">
      <div class="time-block">
        <div class="time-block-label">Start time</div>
        <select class="date-start" aria-label="Start time">${timeOpts}</select>
      </div>
      <span class="time-separator">to</span>
      <div class="time-block">
        <div class="time-block-label">End time</div>
        <select class="date-end" aria-label="End time">${timeOpts}</select>
      </div>
    </div>
  `;
  container.appendChild(entry);
}

function removeDateEntry(id) {
  const entry = document.querySelector(`.date-entry[data-id="${id}"]`);
  if (entry) entry.remove();
  document.querySelectorAll('.date-entry').forEach((e, i) => {
    e.querySelector('.date-entry-title').textContent = `Day ${i + 1}`;
  });
}

function initDatePicker() {
  addDateEntry();
}

// ============================================
// COLLECT DATES — called before form submit
// Reads each date entry using named classes,
// builds a clear readable string for the email
// ============================================
function collectDates() {
  const entries = document.querySelectorAll('.date-entry');
  if (!entries.length) return 'No dates provided';

  const lines = [];

  entries.forEach((entry, i) => {
    const month = entry.querySelector('.date-month')?.value;
    const day   = entry.querySelector('.date-day')?.value;
    const year  = entry.querySelector('.date-year')?.value;
    const start = entry.querySelector('.date-start')?.value;
    const end   = entry.querySelector('.date-end')?.value;

    // Only include if at least month+day+year selected
    if (month && day && year) {
      lines.push(`Day ${i+1}: ${month} ${day}, ${year} | ${start || '?'} to ${end || '?'}`);
    }
  });

  return lines.length ? lines.join('\n') : 'No dates selected';
}

// ============================================
// CONTACT FORM
// ============================================
function renderContact() {
  const phoneRow = document.getElementById('contact-phone-row');
  if (phoneRow && !CONTACT.phone) phoneRow.style.display = 'none';

  const emailLink = document.getElementById('contact-email-link');
  if (emailLink) { emailLink.href = `mailto:${CONTACT.email}`; emailLink.textContent = CONTACT.email; }

  const igLink = document.getElementById('contact-ig-link');
  if (igLink) { igLink.href = CONTACT.igUrl; igLink.textContent = CONTACT.instagram; }

  const locEl = document.getElementById('contact-location');
  if (locEl) locEl.textContent = CONTACT.location;

  const phoneEl = document.getElementById('contact-phone');
  if (phoneEl && CONTACT.phone) phoneEl.textContent = CONTACT.phone;

  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    // ---- Collect date entries into the hidden field BEFORE FormData is built ----
    const datesField = document.getElementById('project-dates-hidden');
    if (datesField) {
      datesField.value = collectDates();
    }

    const btn = form.querySelector('button[type=submit]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Build FormData AFTER setting the hidden field value
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(res => {
      if (res.ok) {
        btn.textContent = 'Message sent ✓';
        btn.style.opacity = '0.7';
        form.reset();
        // Reset date picker
        document.getElementById('date-entries-container').innerHTML = '';
        dateCount = 0;
        addDateEntry();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.opacity = '';
          btn.disabled = false;
        }, 4000);
      } else {
        res.json().then(data => {
          btn.textContent = 'Error — try again';
          btn.disabled = false;
          setTimeout(() => { btn.textContent = originalText; }, 3000);
        });
      }
    }).catch(() => {
      btn.textContent = 'Error — try again';
      btn.disabled = false;
      setTimeout(() => { btn.textContent = originalText; }, 3000);
    });
  });
}

// ============================================
// LIGHTBOX
// ============================================
function initLightbox() {
  const lb = document.getElementById('lightbox');
  lb?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lb?.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  lb.querySelector('img').src = src;
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('open');
}

document.addEventListener('click', e => {
  const item = e.target.closest('.gallery-item');
  if (item) { const img = item.querySelector('img'); if (img) openLightbox(img.src); }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal, .img-reveal').forEach(el => observer.observe(el));
}

function animateCounter(el, rawValue, duration = 2000) {
  const prefix = rawValue.startsWith('$') ? '$' : '';
  const clean  = rawValue.replace(/[$+,KMB]/gi, '').trim();
  const num    = parseFloat(clean) || 0;
  const suffix = rawValue.replace(/^[$\d.,]+/, '');
  const start  = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.floor(num * eased).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = rawValue;
  }
  requestAnimationFrame(update);
}

function initStatCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, STATS[entry.target.dataset.stat] || '0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number[data-stat]').forEach(el => observer.observe(el));
}

function initAnimations() { initReveal(); initStatCounters(); }
