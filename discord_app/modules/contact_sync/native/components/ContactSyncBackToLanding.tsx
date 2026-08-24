// discord_app/modules/contact_sync/native/components/ContactSyncBackToLanding.tsx
import set from "../../../../../_runtime/00002_set.js";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

let result = set.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  dependencyMap = require("../../../../design/components/Navigator/native/useNavigation.native.tsx").useNavigation();
  const obj = useNavigation;
  return require("../../../../design/components/Navigator/native/NavigatorHeader.native.tsx").getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};