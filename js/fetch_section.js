function fetchSection(sectionId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(content => {
            const sectionElement = document.getElementById(sectionId);
            sectionElement.innerHTML = content;
        })
        .catch(error => {
            console.error(`Error fetching ${sectionId}: ${error}`);
        });
}

fetchSection('nav-bar', 'component/navbar.html');
fetchSection('side-bar', 'component/sidebar.html');
fetchSection('banner', 'component/banner.html');
fetchSection('aboutus', 'component/aboutus.html');
fetchSection('gallery', 'component/gallery.html');
fetchSection('service', 'component/service.html');
fetchSection('pricing', 'component/pricing.html');
fetchSection('video', 'component/video.html');
fetchSection('feedback', 'component/feedback.html');
fetchSection('newsletter', 'component/newsletter.html');
fetchSection('footer', 'component/footer.html');