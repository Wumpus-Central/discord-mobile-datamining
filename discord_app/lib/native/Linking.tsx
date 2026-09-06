// === Module 4255: Linking ===

// Module 4255 (Linking)
import _mod17 from "module_17" /* 17 */;
import handleURL from "handleURL" /* 4250 */;
import size from "module_2" /* 2 */;

const Linking = _mod17.Linking;
const result = size.fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    handleURL.default(arg0, arg1, { allowExternal: flag });
  },
  openURLExternally(href, SAFARI) {
    handleURL.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};