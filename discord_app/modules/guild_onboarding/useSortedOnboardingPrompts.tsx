// === Module 11170: useSortedOnboardingPrompts ===

// Module 11170 (useSortedOnboardingPrompts)
import react from "react" /* 19 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6595 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/guild_onboarding/useSortedOnboardingPrompts.tsx");

export default function useSortedOnboardingPrompts(arg0) {
  let closure_0;
  let stateFromStoresArray;
  _require = arg0;
  let obj = require("useStateFromStores");
  let items = [GuildOnboardingPromptsStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildOnboardingPromptsStore.getEnabledOnboardingPrompts(closure_0));
  let items1 = [stateFromStoresArray];
  return react.useMemo(() => {
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    let tmp = stateFromStoresArray;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < stateFromStoresArray.length) {
      do {
        let sum;
        let tmp2 = stateFromStoresArray[num];
        if (tmp2.isNew) {
          let arr = items.push(tmp2);
          sum = num2;
        } else if (tmp2.hasNewAnswers) {
          let arr2 = items1.push(tmp2);
          let options = tmp2.options;
          sum = num2 + options.filter((isUnseen) => isUnseen.isUnseen).length;
        } else if (tmp2.inOnboarding) {
          let arr3 = items3.push(tmp2);
          sum = num2;
        } else {
          let arr4 = items2.push(tmp2);
          sum = num2;
        }
        num = num + 1;
        num2 = sum;
        num3 = sum;
        tmp = stateFromStoresArray;
      } while (num < stateFromStoresArray.length);
    }
    const obj = { onboardingPromptsRaw: tmp, newOnboardingPrompts: items, onboardingPromptsWithNewAnswers: items1, newAnswersCount: num3, onboardingPrompts: items2.concat(items3) };
    return obj;
  }, items1);
};