// discord_app/modules/guild_onboarding/useSortedOnboardingPrompts.tsx
import noop from "../../../_runtime/00019_noop.js";
import handleUpdate from "GuildOnboardingPromptsStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/useSortedOnboardingPrompts.tsx");

export default function useSortedOnboardingPrompts(arg0) {
  const _require = arg0;
  let items = [closure_3];
  stateFromStoresArray = _require(stateFromStoresArray[2]).useStateFromStoresArray(items, () => closure_1_3.getEnabledOnboardingPrompts(closure_0));
  let items1 = [stateFromStoresArray];
  return React.useMemo(() => {
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
        let tmp2 = stateFromStoresArray[num];
        if (tmp2.isNew) {
          let arr = items.push(tmp2);
          let sum = num2;
        } else if (tmp2.hasNewAnswers) {
          arr = items1.push(tmp2);
          let options = tmp2.options;
          sum = num2 + options.filter((item, index) => item.isUnseen).length;
        } else if (tmp2.inOnboarding) {
          let arr1 = items3.push(tmp2);
          sum = num2;
        } else {
          let arr2 = items2.push(tmp2);
          sum = num2;
        }
        num = num + 1;
        num2 = sum;
        num3 = sum;
        tmp = stateFromStoresArray;
      } while (num < stateFromStoresArray.length);
    }
    return { onboardingPromptsRaw: tmp, newOnboardingPrompts: items, onboardingPromptsWithNewAnswers: items1, newAnswersCount: num3, onboardingPrompts: items2.concat(items3) };
  }, items1);
};