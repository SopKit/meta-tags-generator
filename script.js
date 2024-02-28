function generateMetaTags() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const metaTagsResult = document.getElementById('metaTagsResult');

    if (title && description && image) {
        const metaTags = `
<!--Generated Meta Tags: ==================== :-->
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${image}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.yourwebsite.com">
  <meta property="og:site_name" content="Your Site Name">

  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
        `;
        metaTagsResult.innerText = metaTags;
        document.getElementById('copyButton').disabled = false; // Enable copy button
    } else {
        metaTagsResult.innerHTML = 'Please fill in all fields.';
        document.getElementById('copyButton').disabled = true; // Disable copy button if fields are empty
    }
}

function copyMetaTags() {
    const metaTagsResult = document.getElementById('metaTagsResult');
    const range = document.createRange();
    range.selectNode(metaTagsResult);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    // Change button text temporarily to indicate copied
    const copyButton = document.getElementById('copyButton');
    copyButton.innerText = 'Copied!';
    setTimeout(() => {
        copyButton.innerText = 'Copy to Clipboard';
    }, 1500);
}

let sample = `<!--Generated Meta Tags: ==================== :-->
<meta property="og:title" content=" ">
<meta property="og:description" content=" ">
<meta property="og:image" content=" ">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.yourwebsite.com">
<meta property="og:site_name" content="Your Site Name">

<meta name="twitter:title" content=" ">
<meta name="twitter:description" content=" ">
<meta name="twitter:image" content=" ">
<meta name="twitter:card" content="summary_large_image">
`;
        metaTagsResult.innerText = sample;
