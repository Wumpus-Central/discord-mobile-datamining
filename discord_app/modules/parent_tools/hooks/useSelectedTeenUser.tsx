// discord_app/modules/parent_tools/hooks/useSelectedTeenUser.tsx
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterControlledSettingsStore from "../FamilyCenterControlledSettingsStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let tmp8;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp4 = useIsInAdultAgeGroupDefault();
      const tmp = _require;
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore, UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function o() {
          if (true !== closure_0) {
            return UserStore.getCurrentUser();
          } else {
            const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
            let user;
            if (null !== selectedTeenId) {
              user = UserStore.getUser(selectedTeenId);
            }
            return user;
          }
        };
        cResult[1] = tmp4;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(573);
      return tmpResult.useStateFromStores(first, tmp8);
    }
  : () => {
      let closure_0;
      _require = useIsInAdultAgeGroupDefault();
      const items = [FamilyCenterStore, UserStore];
      const obj = require("useStateFromStores");
      return obj.useStateFromStores(items, () => {
        if (true !== closure_0) {
          return UserStore.getCurrentUser();
        } else {
          const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
          let user;
          if (null !== selectedTeenId) {
            user = UserStore.getUser(selectedTeenId);
          }
          return user;
        }
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          const user = UserStore.getUser(closure_0);
          return null != user ? user : undefined;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(573);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [UserStore];
      const obj = require("useStateFromStores");
      return obj.useStateFromStores(items, () => {
        const user = UserStore.getUser(closure_0);
        return null != user ? user : undefined;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp7;
      let tmp8;
      const tmp = first;
      const obj = first(576);
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
        cResult[0] = selectedTeenId;
        first = selectedTeenId;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterControlledSettingsStore];
        const fn = function l() {
          const hasSettingsForUserResult = null != first && FamilyCenterControlledSettingsStore.hasSettingsForUser(tmp);
          return {
            hasLoadedSettings: hasSettingsForUserResult,
            isLoading: FamilyCenterControlledSettingsStore.isLoading,
          };
        };
        cResult[1] = items;
        cResult[2] = fn;
        tmp8 = fn;
        tmp7 = items;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
      const hasLoadedSettings = stateFromStoresObject.hasLoadedSettings;
      let tmp12 = null !== first;
      if (tmp12) {
        tmp12 = !hasLoadedSettings && !tmp11;
      }
      return tmp12;
    }
  : () => {
      const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
      const items = [FamilyCenterControlledSettingsStore];
      const obj = selectedTeenId(573);
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const hasSettingsForUserResult =
          null != selectedTeenId && FamilyCenterControlledSettingsStore.hasSettingsForUser(tmp);
        return {
          hasLoadedSettings: hasSettingsForUserResult,
          isLoading: FamilyCenterControlledSettingsStore.isLoading,
        };
      });
      const hasLoadedSettings = stateFromStoresObject.hasLoadedSettings;
      let tmp4 = null !== selectedTeenId;
      if (tmp4) {
        tmp4 = !hasLoadedSettings && !tmp3;
      }
      return tmp4;
    };
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export const useSelectedTeenUser = tmp2;
export const useTeenUserForId = tmp3;
export const useShouldLoadSettingsForSelectedTeenUser = tmp4;
