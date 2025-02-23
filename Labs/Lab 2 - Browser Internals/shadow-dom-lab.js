// Select the shadow host element
const shadowHost = document.querySelector('#shadow-host');

// Attach a shadow root to the host
const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

// Add content to the shadow root
shadowRoot.innerHTML = `
  <style>
    p {
      color: red;
    }
  </style>
  <p>This paragraph is in the Shadow DOM.</p>
`;
