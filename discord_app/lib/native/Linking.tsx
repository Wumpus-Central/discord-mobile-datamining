// discord_app/lib/native/Linking.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import handleURL from "../../modules/links/native/handleURL.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    Linking.openURL(href).catch(() => {});
  },
};
