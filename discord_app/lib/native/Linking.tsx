// === Module 4255: ? ===

// Module 4255
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import sanitizeURLPart from "sanitizeURLPart" /* 4250 */;

const Linking = get_ActivityIndicator.Linking;
const result = set.fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    sanitizeURLPart.default(arg0, arg1, { allowExternal: flag });
  },
  openURLExternally(href, SAFARI) {
    sanitizeURLPart.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};