// discord_app/modules/contact_sync/native/components/ContactSyncBackToLanding.tsx
let result = require("handleNameInputScreenOrSuggestions").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  const dependencyMap = _require("../../../../design/components/Navigator/native/useNavigation.native.tsx").useNavigation();
  const obj = _require("../../../../design/components/Navigator/native/useNavigation.native.tsx");
  return _require("../../../../design/components/Navigator/native/NavigatorHeader.native.tsx").getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};