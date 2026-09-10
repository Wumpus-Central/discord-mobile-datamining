// === Module 13009: ProtocolUtils ===

// Module 13009 (ProtocolUtils)
import _modDef4928 from "module_4928" /* 4928 */;

const os = _modDef4928.os;
let family;
if (os != null) {
  family = os.family;
}
function launchMobile(href, arg1) {
  closure_0 = arg1;
  location.href = href;
  process.nextTick(() => closure_0(true));
}
let tmp3 = launchMobile;
if ("Android" !== family) {
  const os2 = _modDef4928.os;
  let family1;
  if (os2 != null) {
    family1 = os2.family;
  }
  tmp3 = launchMobile;
  if ("iOS" !== family1) {
    function launchFirefox(href, arg1) {
      closure_0 = arg1;
      if (href.startsWith("discord:")) {
        const _document = document;
        if (null == body) {
          const _process4 = process;
          return process.nextTick(() => closure_0(false));
        } else {
          const _document2 = document;
          const element = <iframe />;
          body.appendChild(element);
          try {
            if (null != element.contentWindow) {
              element.contentWindow.location.href = href;
            }
            const _process2 = process;
            process.nextTick(() => closure_0(true));
            const _window = window;
            const timerId = window.setTimeout(() => {
              let parentElement;
              if (element != null) {
                parentElement = element.parentElement;
              }
              if (parentElement == null) {
                parentElement = null;
              }
              if (null !== parentElement) {
                body.removeChild(element);
              }
            }, 1000);
          } catch (tmp4) {
            if ("NS_ERROR_UNKNOWN_PROTOCOL" === tmp4.name) {
              const _process3 = tmp.process;
              _process3.nextTick(() => closure_0(false));
            }
          }
        }
      } else {
        const _location = location;
        location.href = href;
        const _process = process;
        return process.nextTick(() => closure_0(true));
      }
    }
    if ("Gecko" !== _modDef4928.layout) {
      function launchChrome(href, arg1) {
        closure_0 = arg1;
        function handleBlur() {
          c1 = true;
        }
        c1 = false;
        const listener = window.addEventListener("blur", handleBlur);
        location.href = href;
        const timerId = setTimeout(() => {
          const removed = window.removeEventListener("blur", handleBlur);
          closure_0(c1);
        }, 1000);
      }
      let launchSteam = launchChrome;
      if (null != _modDef4928.ua) {
        const ua = _modDef4928.ua;
        launchSteam = launchChrome;
        if (-1 !== ua.indexOf("Valve Steam GameOverlay")) {
          launchSteam = function launchSteam(arg0, fn) {
            fn(false);
          };
        }
      }
      launchFirefox = launchSteam;
    }
    tmp3 = launchFirefox;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("utils/web/ProtocolUtils.tsx");

export default { launch: tmp3 };