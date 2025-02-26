const data = {
    contactEmail: ['xxxx@codebeast.com', 'yyyy@codebeast.com'],
    subsriptionEmail: 'xxxx@codebeast.com',
    phone: ['+92 900 0901', '90788888'],
    address: ['somewhere sometime', 'somewhere sometime 2'],
    socialLinks: {
        facebook: 'adas.facebook',
        linkedin: 'adas.linkedin',
        behance: 'adas.behance',
        twitter: 'adas.twitter'
    }
}
const submissionFormElements = document.querySelectorAll('#wf-form-contact');
const address_1 = document.querySelectorAll('.address_1');
const email_1 = document.querySelectorAll('.email_1');
const email_2 = document.querySelectorAll('.email_2');
const phone_1 = document.querySelectorAll('.phone_1');
const phone_2 = document.querySelectorAll('.phone_2');
const facebook = document.querySelectorAll('.facebook_link');
const linkedin = document.querySelectorAll('.linkedin_link');
const behance = document.querySelectorAll('.behance_link');
const twitter = document.querySelectorAll('.twitter_link');

facebook.forEach(link => {
    link.href = data.socialLinks.facebook
})
linkedin.forEach(link => {
    link.href = data.socialLinks.linkedin
})
behance.forEach(link => {
    link.href = data.socialLinks.behance
})
twitter.forEach(link => {
    link.href = data.socialLinks.twitter
})


address_1?.forEach(address => {
    address.innerHTML = data.address[0];
})

email_1?.forEach(email => {
    email.innerHTML = data.contactEmail[0];;
})
email_2?.forEach(email => {
    email.innerHTML = data.contactEmail[1];;
})

phone_1?.forEach(phone => {
    phone.innerHTML = data.phone[0];
})
phone_2?.forEach(phone => {
    phone.innerHTML = data.phone[1];
})


if(window.location.pathname == '/contact.html') {
    const contactFormElements = document.querySelectorAll('wf-form-contact');
    // Add email function here
}