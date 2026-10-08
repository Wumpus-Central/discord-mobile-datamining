// discord_app/modules/parent_tools/hooks/useHelpLineVisibility.tsx
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";
import MessageRequestActionCreators from "../../message_request/MessageRequestActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldShowHelplineLink() {
      const cResult = stateFromStores(576).c(11);
      const tmp4 = useIsInAdultAgeGroupDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore];
        const fn = function h() {
          return userCountry.getUserCountry();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(573).useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [LocaleStore];
        const fn2 = function p() {
          return locale.locale;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = stateFromStores(573);
      const stateFromStores1 = stateFromStores(573).useStateFromStores(tmp9, tmp10);
      if (cResult[4] !== stateFromStores) {
        const fn3 = function v() {
          if (null == stateFromStores) {
            const userCountryCode = MessageRequestActionCreators.fetchUserCountryCode();
          }
        };
        const items2 = [stateFromStores];
        cResult[4] = stateFromStores;
        cResult[5] = fn3;
        cResult[6] = items2;
        let tmp14 = items2;
        let tmp13 = fn3;
      } else {
        tmp13 = cResult[5];
        tmp14 = cResult[6];
      }
      const effect = noop.useEffect(tmp13, tmp14);
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === tmp4) {
          if (cResult[9] === stateFromStores1) {
            let tmp16 = cResult[10];
          }
          return tmp16;
        }
      }
      let hasItem = !tmp4;
      if (!tmp4) {
        hasItem = null != stateFromStores;
      }
      if (hasItem) {
        hasItem = set.has(stateFromStores.alpha2);
      }
      if (hasItem) {
        hasItem = set1.has(stateFromStores1);
      }
      cResult[7] = stateFromStores;
      cResult[8] = tmp4;
      cResult[9] = stateFromStores1;
      cResult[10] = hasItem;
      tmp16 = hasItem;
      const tmpResult2 = stateFromStores(573);
    }
  : function useShouldShowHelplineLink() {
      const tmp = useIsInAdultAgeGroupDefault();
      const items = [FamilyCenterStore];
      stateFromStores = stateFromStores(573).useStateFromStores(items, () => userCountry.getUserCountry());
      let obj = stateFromStores(573);
      const items1 = [LocaleStore];
      const items2 = [stateFromStores];
      const stateFromStores1 = stateFromStores(573).useStateFromStores(items1, () => locale.locale);
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
let closure_8 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export const useShouldShowHelplineLink = tmp4;
export const useShouldShowThroughlineLink = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldShowThroughlineLink() {
      const tmp = useIsInAdultAgeGroupDefault();
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = !closure_8();
      }
      return tmp2;
    }
  : function useShouldShowThroughlineLink() {
      const tmp = useIsInAdultAgeGroupDefault();
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = !closure_8();
      }
      return tmp2;
    };
