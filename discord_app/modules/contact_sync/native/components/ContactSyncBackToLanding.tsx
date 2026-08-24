// discord_app/modules/contact_sync/native/components/ContactSyncBackToLanding.tsx
import set from "../../../../../_runtime/00002_set.js";
import { HeaderBackImage } from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

let result = set.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  dependencyMap = _useNavigation.useNavigation();
  const obj = _useNavigation;
  return _HeaderBackImage.getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};