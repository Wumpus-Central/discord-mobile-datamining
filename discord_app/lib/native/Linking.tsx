// discord_app/lib/native/Linking.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import handleURL from "../../modules/links/native/handleURL.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Linking = react_native.Linking;
const obj = {
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
    const openURLResult = Linking.openURL(href);
    openURLResult.catch(() => {});
  },
};
const result = size.fileFinishedImporting("lib/native/Linking.tsx");

export default obj;
