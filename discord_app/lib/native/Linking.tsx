// discord_app/lib/native/Linking.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import sanitizeURLPart from "../../modules/links/native/handleURL.tsx";

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