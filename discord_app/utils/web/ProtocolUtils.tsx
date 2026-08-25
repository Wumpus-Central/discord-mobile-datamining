// === Module 12878: launchMobile ===

// Module 12878 (launchMobile)
import formatDefault from "format" /* 4724 */;

const os = formatDefault.os;
let family;
if (os != null) {
  family = os.family;
}
function launchMobile(href) {
  closure_0 = arg1;
  location.href = href;
  process.nextTick(() => callback(true));
}
let tmp3 = launchMobile;
if ("Android" !== family) {
  const os2 = formatDefault.os;
  let family1;
  if (os2 != null) {
    family1 = os2.family;
  }
  tmp3 = launchMobile;
  if ("iOS" !== family1) {
    function launchFirefox(str) {
      closure_0 = arg1;
      if (str.startsWith("discord:")) {
        const _document = document;
        if (null == body) {
          const _process4 = process;
          return process.nextTick(() => callback(false));
        } else {
          const _document2 = document;
          const element = <iframe />;
          body.appendChild(element);
          try {
            if (null != element.contentWindow) {
              element.contentWindow.location.href = str;
            }
            const _process2 = process;
            process.nextTick(() => callback(true));
            const _window = window;
            const timerId = window.setTimeout(() => {
              let parentElement;
              if (element != null) {
                parentElement = tmp.parentElement;
              }
              if (parentElement == null) {
                parentElement = null;
              }
              if (null !== parentElement) {
                body.removeChild(tmp);
              }
            }, 1000);
          } catch (tmp4) {
            if ("NS_ERROR_UNKNOWN_PROTOCOL" === tmp4.name) {
              const _process3 = tmp.process;
              _process3.nextTick(() => callback(false));
            }
          }
        }
      } else {
        const _location = location;
        location.href = str;
        const _process = process;
        return process.nextTick(() => callback(true));
      }
    }
    if ("Gecko" !== formatDefault.layout) {
      function launchChrome(href) {
        closure_0 = arg1;
        function handleBlur() {
          c1 = true;
        }
        c1 = false;
        const listener = window.addEventListener("blur", handleBlur);
        location.href = href;
        const timerId = setTimeout(() => {
          const removed = window.removeEventListener("blur", handleBlur);
          callback(c1);
        }, 1000);
      }
      let launchSteam = launchChrome;
      if (null != formatDefault.ua) {
        const ua = formatDefault.ua;
        launchSteam = launchChrome;
        if (-1 !== ua.indexOf("Valve Steam GameOverlay")) {
          launchSteam = function launchSteam(arg0, arg1) {
            arg1(false);
          };
        }
      }
      launchFirefox = launchSteam;
    }
    tmp3 = launchFirefox;
  }
}
const result = require("set").fileFinishedImporting("utils/web/ProtocolUtils.tsx");

export default { launch: tmp3 };