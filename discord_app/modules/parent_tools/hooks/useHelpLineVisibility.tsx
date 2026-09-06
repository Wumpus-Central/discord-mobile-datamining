// discord_app/modules/parent_tools/hooks/useHelpLineVisibility.tsx
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../user_settings/LocaleStore.tsx";
import closure_5 from "../FamilyCenterStore.tsx";
import set from "../../../../_runtime/00002_set.js";

const require = arg1;
let set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
const result = set.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export const useShouldShowHelplineLink = function useShouldShowHelplineLink() {
  const tmp = useIsInAdultAgeGroupDefault();
  const items = [closure_5];
  stateFromStores = stateFromStores(563).useStateFromStores(items, () => userCountry.getUserCountry());
  const obj = stateFromStores(563);
  const items1 = [closure_4];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(563).useStateFromStores(items1, () => locale.locale);
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(closure_1_2[5]).fetchUserCountryCode();
      const obj = stateFromStores(closure_1_2[5]);
    }
  }, items2);
  let hasItem = !tmp;
  if (!tmp) {
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    hasItem = set.has(stateFromStores.alpha2);
  }
  if (hasItem) {
    hasItem = set1.has(stateFromStores1);
  }
  return hasItem;
};
export const useShouldShowThroughlineLink = function useShouldShowThroughlineLink() {
  const tmp = useIsInAdultAgeGroupDefault();
  let stateFromStores;
  const tmp2 = useIsInAdultAgeGroupDefault();
  const items = [closure_5];
  stateFromStores = stateFromStores(563).useStateFromStores(items, () => userCountry.getUserCountry());
  let obj = stateFromStores(563);
  const items1 = [closure_4];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(563).useStateFromStores(items1, () => locale.locale);
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(closure_1_2[5]).fetchUserCountryCode();
      const obj = stateFromStores(closure_1_2[5]);
    }
  }, items2);
  let hasItem = !tmp2;
  if (!tmp2) {
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    hasItem = set.has(stateFromStores.alpha2);
  }
  if (hasItem) {
    hasItem = set1.has(stateFromStores1);
  }
  let tmp10 = !tmp;
  if (!tmp) {
    tmp10 = !hasItem;
  }
  return tmp10;
};
