function translate(languageCode) {
  const currentTranslation = translations[languageCode];

  document.getElementById('intro-name').textContent =
    currentTranslation.myNameIs;
  document.getElementById('intro-name-span').textContent =
    currentTranslation.myName;
  document.getElementById('intro-title').textContent =
    currentTranslation.myTitle;
  document.getElementById('intro-student').textContent =
    currentTranslation.student;
  document.getElementById('intro-sdu').textContent =
    currentTranslation.studying;
  document.getElementById('nav-projects').textContent =
    currentTranslation.projects;
  document.getElementById('nav-about').textContent = currentTranslation.about;
  document.getElementById('nav-contact').textContent =
    currentTranslation.contact;
  document.getElementById('nav-resume').textContent = currentTranslation.resume;
  document.getElementById('proud').textContent = currentTranslation.proud;
  document.getElementById('latest-project-title').textContent =
    currentTranslation.latestProject;
  document.getElementById('minimusic-desc').textContent =
    currentTranslation.miniMusicDesc;
  document.getElementById('diploma-project-title').textContent =
    currentTranslation.diplomaProject;
  document.getElementById('kitaptap-desc').textContent =
    currentTranslation.kitaptapDesc;
  document.getElementById('contact-message').textContent =
    currentTranslation.contactMessage;
  document.getElementById('technologies').textContent =
    currentTranslation.technologies;
  document.getElementById('technologies2').textContent =
    currentTranslation.technologies;
  document.getElementById('contact-me').textContent =
    currentTranslation.contactme;
  document.getElementById('email-me').textContent = currentTranslation.emailme;
  document.getElementById('izba').innerHTML = currentTranslation.izba;
  document.getElementById('rights').innerHTML = currentTranslation.rights;

  const resumeLinkElement = document.getElementById('nav-resume');
  resumeLinkElement.href = currentTranslation.resumeLink;

  const flagImage = document.getElementById('current-flag');
  if (languageCode === 'en') {
    flagImage.src = 'img/Flag_of_Great_Britain_(English_version).png';
    flagImage.alt = 'USA Flag';
  } else if (languageCode === 'ru') {
    flagImage.src = 'img/Flag_of_Russia.png';
    flagImage.alt = 'Russian Flag';
  }
}

const languageSwitcher = document.getElementById('language-switcher');
languageSwitcher.addEventListener('click', function () {
  const currentFlagSrc = document.getElementById('current-flag').src;
  let newLanguage = 'ru';
  if (
    currentFlagSrc.includes('img/Flag_of_Great_Britain_(English_version).png')
  ) {
    newLanguage = 'ru';
  } else {
    newLanguage = 'en';
  }

  translate(newLanguage);
});

const defaultLanguage = 'ru';
translate(defaultLanguage);
