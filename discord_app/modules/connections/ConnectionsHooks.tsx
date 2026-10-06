// discord_app/modules/connections/ConnectionsHooks.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import react2 from "../../../_runtime/00576_react.js";
import DurationsDefault from "../../utils/Durations.tsx";
import PlatformsDefault from "../../lib/Platforms.tsx";
import KeyboardConstants from "../../../discord_common/js/shared/constants/KeyboardConstants.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, forUserProfile, set;

let PlatformTypes;
let metroImportDefault;
({ ACTIVITY_PLATFORM_TYPES: metroImportDefault, PlatformTypes } = Constants);
const KeyboardKeysUpdated = KeyboardConstants.KeyboardKeysUpdated;
let closure_10 = { [PlatformTypes.INSTAGRAM]: ["1036753656588017764"] };
let items = [PlatformTypes.INSTAGRAM];
const date = new Date(2023, 1, 18);
items[1] = date.getTime();
let items1 = [items];
new Map(items1);
let closure_12 = 30 * DurationsDefault.Millis.DAY;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (forUserProfile) => {
      let allowPlayStationStaging;
      let currentUser;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = forUserProfile(allowPlayStationStaging[8]);
      const cResult = obj.c(7);
      forUserProfile = forUserProfile.forUserProfile;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = fn;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = forUserProfile(allowPlayStationStaging[9]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "f2f7ef_1" };
        cResult[2] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[2];
      }
      const PlayStationVoiceExperiment = tmp(tmp2[10]).PlayStationVoiceExperiment;
      allowPlayStationStaging = PlayStationVoiceExperiment.useConfig(tmp8).allowPlayStationStaging;
      if (cResult[3] === allowPlayStationStaging) {
        if (cResult[4] === stateFromStores) {
          let tmp9;
          if (cResult[5] === forUserProfile) {
            tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
      const fn2 = function p(type) {
        let tmp5;
        if (type.type === PlatformTypes.PLAYSTATION_STAGING) {
          tmp5 = allowPlayStationStaging;
        } else {
          let tmp4 = undefined === stateFromStores;
          if (!tmp4) {
            let hasItem;
            if (closure_10[type.type] != null) {
              hasItem = obj.includes(tmp11.id);
            }
            tmp4 = !hasItem;
          }
          tmp5 = !tmp4;
          if (tmp4) {
            let tmp7 = forUserProfile;
            if (!tmp7) {
              const migrationData = type.migrationData;
              let migrationExperimentEnabled;
              if (migrationData != null) {
                migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
              }
              tmp7 = !migrationExperimentEnabled && type.enabled;
            }
            tmp5 = tmp7;
          }
        }
        return tmp5;
      };
      cResult[3] = allowPlayStationStaging;
      cResult[4] = stateFromStores;
      cResult[5] = forUserProfile;
      cResult[6] = fn2;
      tmp9 = fn2;
    }
  : (forUserProfile) => {
      let currentUser;
      forUserProfile = forUserProfile.forUserProfile;
      let allowPlayStationStaging;
      const obj = forUserProfile(allowPlayStationStaging[9]);
      const items = [UserStore];
      let closure_1 = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const PlayStationVoiceExperiment = forUserProfile(allowPlayStationStaging[10]).PlayStationVoiceExperiment;
      allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
      return (type) => {
        let tmp5;
        if (type.type === PlatformTypes.PLAYSTATION_STAGING) {
          tmp5 = allowPlayStationStaging;
        } else {
          let tmp4 = undefined === closure_1;
          if (!tmp4) {
            let hasItem;
            if (closure_10[type.type] != null) {
              hasItem = obj.includes(tmp11.id);
            }
            tmp4 = !hasItem;
          }
          tmp5 = !tmp4;
          if (tmp4) {
            let tmp7 = forUserProfile;
            if (!tmp7) {
              const migrationData = type.migrationData;
              let migrationExperimentEnabled;
              if (migrationData != null) {
                migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
              }
              tmp7 = !migrationExperimentEnabled && type.enabled;
            }
            tmp5 = tmp7;
          }
        }
        return tmp5;
      };
    };
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let items2 = [PlatformTypes.PLAYSTATION, 2];
const items3 = [items2, , , ,];
const items4 = [PlatformTypes.XBOX, 2];
items3[1] = items4;
const items5 = [PlatformTypes.SPOTIFY, 1];
items3[2] = items5;
const items6 = [PlatformTypes.STEAM, 1];
items3[3] = items6;
const items7 = [PlatformTypes.TWITCH, 1];
items3[4] = items7;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      let accounts;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp4;
      let tmp5;
      let tmp7;
      const obj = require("react");
      const cResult = obj.c(14);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConnectedAccountsStore];
        const fn = function o() {
          return accounts.getAccounts();
        };
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { forUserProfile: false };
        cResult[2] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[2];
      }
      const tmp8 = closure_13(tmp7);
      if (cResult[3] !== stateFromStores) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        _require = set;
        const item = stateFromStores.forEach((type) => set.add(type.type));
        cResult[3] = stateFromStores;
        cResult[4] = set;
      } else {
        _require = cResult[4];
      }
      set = tmp9;
      if (cResult[5] === tmp9) {
        let tmp13;
        if (cResult[6] === tmp8) {
          tmp13 = cResult[7];
        }
        return tmp13;
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(type) {
          let hasItem = set3.has(type.type);
          if (hasItem) {
            const _Date = Date;
            const timestamp = Date.now();
            let num = set3.get(type.type);
            if (num == null) {
              num = 0;
            }
            hasItem = timestamp < num + closure_1_12;
          }
          return !hasItem;
        };
        cResult[8] = fn2;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] !== tmp9) {
        const fn3 = function v(type) {
          return set.has(type.type);
        };
        cResult[9] = tmp9;
        cResult[10] = fn3;
        tmp15 = fn3;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const fn4 = function w(hasMetadata) {
          return hasMetadata.hasMetadata;
        };
        class P {
          constructor(type) {
            return !set2.has(type.type);
          }
        }
        class E {
          constructor(name) {
            return name.name;
          }
        }
        cResult[11] = fn4;
        cResult[12] = P;
        cResult[13] = E;
        tmp16 = fn4;
      } else {
        tmp16 = cResult[11];
        class P {
          constructor(type) {
            return !set2.has(type.type);
          }
        }
        class E {
          constructor(name) {
            return name.name;
          }
        }
      }
      const sortBy = set(12).sortBy;
      set(12);
      const items1 = [tmp14, tmp15, tmp16, P, E];
      const arr3 = set(5449);
      const sortByResult = sortBy(arr3.filter(tmp8), items1);
      cResult[5] = tmp9;
      cResult[6] = tmp8;
      cResult[7] = sortByResult;
      tmp13 = sortByResult;
    }
  : () => {
      let accounts;
      let memo;
      let stateFromStores;
      let items = [ConnectedAccountsStore];
      const obj = stateFromStores(memo[9]);
      stateFromStores = obj.useStateFromStores(items, () => accounts.getAccounts());
      const tmp2 = closure_13({ forUserProfile: false });
      let closure_1 = tmp2;
      const items1 = [stateFromStores];
      memo = react.useMemo(() => {
        set = new Set();
        const item = stateFromStores.forEach((type) => set.add(type.type));
        return set;
      }, items1);
      const items2 = [memo, tmp2];
      return react.useMemo(() => {
        const sortBy = _modDef12.sortBy;
        _modDef12;
        const items = [
          (type) => {
            let hasItem = set3.has(type.type);
            if (hasItem) {
              const _Date = Date;
              const timestamp = Date.now();
              let num = set3.get(type.type);
              if (num == null) {
                num = 0;
              }
              hasItem = timestamp < num + closure_1_12;
            }
            return !hasItem;
          },
          (type) => set.has(type.type),
          (hasMetadata) => hasMetadata.hasMetadata,
          (type) => !set2.has(type.type),
          (name) => name.name,
        ];
        const arr = PlatformsDefault;
        return sortBy(arr.filter(closure_1), items);
      }, items2);
    };
const map1 = new Map(items3);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { forUserProfile: false };
        let num = 0;
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp4 = closure_13(first);
      if (cResult[1] !== tmp4) {
        let tmp7;
        let tmp6;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(type) {
            let num = map1.get(type.type);
            if (num == null) {
              num = 0;
            }
            return -1 * num;
          };
          const fn2 = function l(name) {
            return name.name;
          };
          cResult[3] = fn;
          cResult[4] = fn2;
          tmp7 = fn2;
          tmp6 = fn;
        } else {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const sortBy = _modDef12.sortBy;
        _modDef12;
        const items = [tmp6, tmp7];
        const arr = PlatformsDefault;
        const sortByResult = sortBy(arr.filter(tmp4), items);
        cResult[1] = tmp4;
        cResult[2] = sortByResult;
        tmp5 = sortByResult;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : () => {
      const tmp = closure_13({ forUserProfile: false });
      let closure_0 = tmp;
      let items = [tmp];
      return react.useMemo(() => {
        const sortBy = _modDef12.sortBy;
        _modDef12;
        const items = [
          (type) => {
            let num = closure_1_14.get(type.type);
            if (num == null) {
              num = 0;
            }
            return -1 * num;
          },
          (name) => name.name,
        ];
        const arr = PlatformsDefault;
        return sortBy(arr.filter(closure_0), items);
      }, items);
    };
const result = size.fileFinishedImporting("modules/connections/ConnectionsHooks.tsx");

export const usePlatformAllowed = tmp4;
export const usePlatforms = tmp5;
export const useEmptyStatePlatforms = tmp7;
export const useLegacyPlatformType = function useLegacyPlatformType(arg0) {
  let require;
  let tmp2;
  function handleKeyDown(key) {
    if (key.key === KeyboardKeysUpdated.SHIFT) {
      _require(true);
    }
  }
  function handleKeyUp(key) {
    if (key.key === KeyboardKeysUpdated.SHIFT) {
      _require(false);
    }
  }
  [tmp2, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const listener = window.addEventListener("keydown", handleKeyDown);
    const listener1 = window.addEventListener("keyup", handleKeyUp);
    return () => {
      const removed = window.removeEventListener("keydown", handleKeyDown);
      const removed1 = window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  let TWITTER_LEGACY = arg0;
  if (tmp2) {
    TWITTER_LEGACY = arg0;
    if (arg0 === PlatformTypes.TWITTER) {
      TWITTER_LEGACY = PlatformTypes.TWITTER_LEGACY;
    }
  }
  return TWITTER_LEGACY;
};
