import { useIsInAdultAgeGroup } from "useIsInAdultAgeGroup.tsx";
// discord_app/modules/parent_tools/hooks/useHelpLineVisibility.tsx
import noop from "noop";
import _getSystemLocale from "_getSystemLocale";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import set from "freshTeenActivityWithMap";

const require = arg1;
let set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
const result = set.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export const useShouldShowHelplineLink = function useShouldShowHelplineLink() {
  const tmp = useIsInAdultAgeGroup();
  const items = [freshTeenActivityWithMap];
  stateFromStores = stateFromStores(647).useStateFromStores(items, () => userCountry.getUserCountry());
  const obj = stateFromStores(647);
  const items1 = [_getSystemLocale];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(647).useStateFromStores(items1, () => locale.locale);
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(outer1_2[5]).fetchUserCountryCode();
      const obj = stateFromStores(outer1_2[5]);
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
  const tmp = useIsInAdultAgeGroup();
  let stateFromStores;
  const tmp2 = useIsInAdultAgeGroup();
  const items = [freshTeenActivityWithMap];
  stateFromStores = stateFromStores(647).useStateFromStores(items, () => userCountry.getUserCountry());
  let obj = stateFromStores(647);
  const items1 = [_getSystemLocale];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(647).useStateFromStores(items1, () => locale.locale);
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(outer1_2[5]).fetchUserCountryCode();
      const obj = stateFromStores(outer1_2[5]);
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