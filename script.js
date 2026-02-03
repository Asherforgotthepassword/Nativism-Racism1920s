// Main script to handle rendering and interactions

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Content from data.js
    renderHero();
    renderHero();
    renderIntro();
    renderMigrationMap();
    renderVocabulary();
    renderVocabImages();

    renderTimeline();
    renderTimelineImages();
    renderGroups();
    renderGroupsImages();
    renderPeople();
    renderPeopleImages();
    renderChangeAndContinuity();
    renderChangeImages();
    renderImpact();
    renderImpact();
    renderImpactImages();
    renderResolution();

    // 2. Initialize Scroll Animations
    initObservers();

    // 3. Scroll Progress Bar
    window.addEventListener('scroll', updateScrollProgress);
});

// --- Rendering Functions ---

function renderHero() {
    const hero = siteContent.hero;
    document.getElementById('hero-title').textContent = hero.title;
    document.getElementById('hero-subtitle').textContent = hero.subtitle;
    document.getElementById('hero-desc').textContent = hero.description;

    if (hero.backgroundImage) {
        document.getElementById('hero').style.backgroundImage = `url('${hero.backgroundImage}')`;
    }
}

function renderIntro() {
    document.getElementById('intro-title').textContent = siteContent.intro.title;
    document.getElementById('intro-text').innerHTML = siteContent.intro.text.replace(/\n/g, '<br><br>');

    if (siteContent.intro.inlineImage) {
        const imgContainer = document.getElementById('intro-img-container');
        const img = document.getElementById('intro-img');
        const cap = document.getElementById('intro-caption');

        img.src = siteContent.intro.inlineImage;
        img.alt = siteContent.intro.imageCaption;
        cap.textContent = siteContent.intro.imageCaption;
        imgContainer.style.display = 'block';
    } else {
        document.getElementById('intro-img-container').style.display = 'none';
    }

    if (siteContent.intro.backgroundImage) {
        const section = document.getElementById('intro');
        section.style.backgroundImage = `url('${siteContent.intro.backgroundImage}')`;
        section.classList.add('has-bg');
    }
}

function renderMigrationMap() {
    if (siteContent.migrationSection) {
        document.getElementById('migration-img').src = siteContent.migrationSection.image;
        document.getElementById('migration-caption').textContent = siteContent.migrationSection.caption;
    }
}

function renderVocabulary() {
    const list = document.getElementById('vocab-container');
    siteContent.vocabulary.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-card fade-in';
        card.innerHTML = `
            <div class="vocab-term">${item.term}</div>
            <div class="vocab-def">${item.definition}</div>
        `;
        list.appendChild(card);
    });
}

function renderVocabImages() {
    const list = document.getElementById('vocab-images-container');
    if (!siteContent.vocabImages) return;

    siteContent.vocabImages.forEach(item => {
        const el = document.createElement('div');
        el.className = 'image-card fade-in';
        el.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="img-caption">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
            </div>
        `;
        list.appendChild(el);
    });
}



function renderTimeline() {
    const list = document.getElementById('timeline-container');
    siteContent.timeline.forEach(item => {
        const el = document.createElement('div');
        el.className = 'timeline-item'; // We'll observe this for animation
        el.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-year">${item.year}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        list.appendChild(el);
    });
}



function renderTimelineImages() {
    const list = document.getElementById('timeline-images-container');
    if (!siteContent.timelineImages) return;

    siteContent.timelineImages.forEach(item => {
        const el = document.createElement('div');
        el.className = 'image-card fade-in';
        el.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="img-caption">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
            </div>
        `;
        list.appendChild(el);
    });
}

function renderGroups() {
    const list = document.getElementById('groups-container');
    siteContent.keyGroups.forEach(item => {
        const card = document.createElement('div');
        card.className = 'info-card fade-in';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        list.appendChild(card);
    });
}

function renderGroupsImages() {
    const list = document.getElementById('groups-images-container');
    if (!siteContent.keyGroupsImages) return;

    siteContent.keyGroupsImages.forEach(item => {
        const el = document.createElement('div');
        el.className = 'image-card fade-in';
        el.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="img-caption">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
            </div>
        `;
        list.appendChild(el);
    });
}

function renderPeople() {
    const list = document.getElementById('people-container');
    siteContent.keyPeople.forEach(item => {
        const card = document.createElement('div');
        card.className = 'info-card fade-in';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        list.appendChild(card);
    });
}

function renderPeopleImages() {
    const list = document.getElementById('people-images-container');
    if (!siteContent.keyPeopleImages) return;

    siteContent.keyPeopleImages.forEach(item => {
        const el = document.createElement('div');
        el.className = 'image-card fade-in';
        el.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="img-caption">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
            </div>
        `;
        list.appendChild(el);
    });
}

function renderChangeImages() {
    const list = document.getElementById('change-images-container');
    if (!siteContent.changeImages) return;

    siteContent.changeImages.forEach(item => {
        const el = document.createElement('div');
        el.className = 'image-card fade-in';
        el.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="img-caption">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
            </div>
        `;
        list.appendChild(el);
    });
}

function renderImpactImages() {
    const list = document.getElementById('impact-images-container');
    if (!siteContent.impactImages) return;

    siteContent.impactImages.forEach(item => {
        const el = document.createElement('div');
        el.className = 'image-card fade-in';
        // Only render caption div if there is content, otherwise just image
        let captionHtml = '';
        if (item.title || item.caption) {
            captionHtml = `
            <div class="img-caption">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
            </div>`;
        }

        el.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            ${captionHtml}
        `;
        list.appendChild(el);
    });
}

function renderResolutionImages() {
    const list = document.getElementById('resolution-images-container');
    if (!siteContent.resolutionImages) return;

    siteContent.resolutionImages.forEach(item => {
        const el = document.createElement('div');
        el.className = 'image-card fade-in';
        // Only render caption div if there is content
        let captionHtml = '';
        if (item.title || item.caption) {
            captionHtml = `
            <div class="img-caption">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
            </div>`;
        }

        el.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            ${captionHtml}
        `;
        list.appendChild(el);
    });
}

function renderChangeAndContinuity() {
    renderSection('change-continuity', siteContent.changeAndContinuity, 'change-title', 'change-text');
}

function renderImpact() {
    renderSection('impact', siteContent.impact, 'impact-title', 'impact-text');
}

function renderResolution() {
    renderSection('resolution', siteContent.resolution, 'resolution-title', 'resolution-text');
}

// Helper for standard sections
function renderSection(sectionId, data, titleId, textId) {
    document.getElementById(titleId).textContent = data.title;
    document.getElementById(textId).innerHTML = data.text.replace(/\n/g, '<br><br>');

    if (data.backgroundImage) {
        const section = document.getElementById(sectionId);
        section.style.backgroundImage = `url('${data.backgroundImage}')`;
        section.classList.add('has-bg');
    }
}

// --- Interaction Functions ---

function initObservers() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe legacy 'fade-in' elements
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Observe timeline items specially
    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + "%";
}
