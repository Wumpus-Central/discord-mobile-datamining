// === Module 12891: zustandStore ===

// Module 12891 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4246 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = set.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };