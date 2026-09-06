// discord_app/modules/parent_tools/hooks/useHelpLineVisibility.tsx
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";
import MessageRequestActionCreators from "../../message_request/MessageRequestActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

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
