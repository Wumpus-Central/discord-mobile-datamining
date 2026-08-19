// === Module 11875: ContactSyncBackToLanding ===

// Module 11875 (ContactSyncBackToLanding)
import obj132 from "obj132" /* 2 */;

let result = obj132.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  dependencyMap = _require(1500).useNavigation();
  const obj = _require(1500);
  return _require(6314).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};