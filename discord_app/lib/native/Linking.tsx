// === Module 3952: ? ===

// Module 3952
import { Linking } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    require(3947) /* sanitizeURLPart */.default(arg0, arg1, { allowExternal: flag });
  },
  openURLExternally(href, SAFARI) {
    require(3947) /* sanitizeURLPart */.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};