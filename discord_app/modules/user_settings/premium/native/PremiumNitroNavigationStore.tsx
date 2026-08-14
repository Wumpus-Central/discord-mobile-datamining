// discord_app/modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ scrollToSectionId: "title" }));
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };