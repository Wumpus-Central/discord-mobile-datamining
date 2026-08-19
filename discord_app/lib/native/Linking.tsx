// === Module 4090: ? ===

// Module 4090
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import sanitizeURLPart from "sanitizeURLPart" /* 4085 */;

const Linking = get_ActivityIndicator.Linking;
const result = obj132.fileFinishedImporting("lib/native/Linking.tsx");

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
    Linking.openURL(href).catch((error) => {

    });
  }
};