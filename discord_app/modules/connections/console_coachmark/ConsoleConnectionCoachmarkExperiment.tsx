// === Module 19436: ConsoleConnectionCoachmarkExperiment ===

// Module 19436 (ConsoleConnectionCoachmarkExperiment)
import initialize from "initialize" /* 504 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 7022 */;
import ConsentStore from "ConsentStore" /* 6783 */;

require = fn;
const Constants = fn(1072);
({ Consents: closure_4, PlatformTypes } = Constants);
let items = [, , ];
({ PLAYSTATION: arr[0], PLAYSTATION_STAGING: arr[1], XBOX: arr[2] } = PlatformTypes);
const set = new Set(items);
const ApexExperiment = fn(1449);
let obj2 = { name: "2026-11-console-connection-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj3 = { 1: null, 2: { enabled: true }, 3: { enabled: true } };
obj3[3] = { enabled: true };
obj2.variations = obj3;
let closure_6 = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/console_coachmark/ConsoleConnectionCoachmarkExperiment.tsx");

export function useIsConsoleConnectionCoachmarkEligible(YouSettingsCoachmark) {
  let enabled = closure_6.useConfig({ location: YouSettingsCoachmark }).enabled;
  items = [ConnectedAccountsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    const isFetchingResult = fetching.isFetching();
    let tmp2 = !isFetchingResult;
    if (!isFetchingResult) {
      const accounts = fetching.getAccounts();
      tmp2 = !accounts.some((type) => set.has(type.type));
    }
    return tmp2;
  });
  const obj = { location: YouSettingsCoachmark };
  const items1 = [ConsentStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  if (enabled) {
    enabled = stateFromStores;
  }
  if (enabled) {
    enabled = stateFromStores1;
  }
  return enabled;
}