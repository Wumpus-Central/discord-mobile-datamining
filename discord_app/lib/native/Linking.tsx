// discord_app/lib/native/Linking.tsx
import { Linking } from "get ActivityIndicator";
import { sanitizeURLPart } from "../../modules/links/native/handleURL.tsx";

const result = require("set").fileFinishedImporting("lib/native/Linking.tsx");

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