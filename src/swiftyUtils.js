export const SWIFTY_JS_SCRIPT_ID = "swifty-js-script-id"
const SWIFTY_VARIABLES_SCRIPT_ID = "swifty-variables-script-id"


export function loadSwifty() {
    const swiftyStylesLink = document.createElement('link')
    swiftyStylesLink.setAttribute('href', 'https://nxtwave.helpjuice.com/swifty.css')

    const swiftyJsScript = document.createElement('script')
    swiftyJsScript.id = SWIFTY_JS_SCRIPT_ID
    swiftyJsScript.src = "https://nxtwave.helpjuice.com/swifty.js"
    swiftyVariablesScript.type = "application/javascript";
    swiftyJsScript.async = false

    const swiftyVariablesScript = document.createElement('script')
    swiftyVariablesScript.id = SWIFTY_VARIABLES_SCRIPT_ID
    swiftyVariablesScript.type = "application/javascript";
    swiftyVariablesScript.async = false
    swiftyVariablesScript.innerHTML = `
      helpjuice_account_url = 'https://nxtwave.helpjuice.com';
      helpjuice_contact_us_url = 'https://nxtwave.helpjuice.com/contact-us';
      helpjuiceSwiftyConfig = {
        widgetPosition: 'bottomRight',
        themeColor: '#126CFF',
        linkColor: '#126CFF'
      }
      helpjuiceSwiftyUrlMap = {
        'https://learning.ccbp.in/track/tech-foundations': [1495906],
        'https://learning-beta.earlywave.in/instruction-flows': [1518613, 1499346],
        'https://learning-beta.earlywave.in/': [1502609, 1516644, 1516647, 1502604, 1502607],
        'https://learning-beta.earlywave.in/track/projects': [1551007],
        'https://learning-beta.earlywave.in/track/tech-foundations': [1499345, 1518596, 1516649],
        'https://learning-beta.earlywave.in/idp/my-idp': [1495883, 1516649, 1502607, 1516644],
        'https://htemxr.csb.app/': [1518613, 1554543],
        'https://htemxr.csb.app/1': [1499345, 1563383],
        'https://htemxr.csb.app/2': [1563383]
      }
  `

    document.head.appendChild(swiftyStylesLink)
    document.head.appendChild(swiftyJsScript)
    document.head.appendChild(swiftyVariablesScript)
}