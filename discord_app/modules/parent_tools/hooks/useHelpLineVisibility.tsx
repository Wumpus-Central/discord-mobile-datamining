// === Module 11393: useHelpLineVisibility ===

// Module 11393 (useHelpLineVisibility)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8646 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10959 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export const useShouldShowHelplineLink = function useShouldShowHelplineLink() {
  const tmp = useIsInAdultAgeGroupDefault();
  const items = [FamilyCenterStore];
  stateFromStores = stateFromStores(563).useStateFromStores(items, () => userCountry.getUserCountry());
  const obj = stateFromStores(563);
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(563).useStateFromStores(items1, () => locale.locale);
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
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
  const items = [FamilyCenterStore];
  stateFromStores = stateFromStores(563).useStateFromStores(items, () => userCountry.getUserCountry());
  let obj = stateFromStores(563);
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(563).useStateFromStores(items1, () => locale.locale);
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
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