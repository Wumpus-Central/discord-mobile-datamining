// discord_app/modules/connections/ConnectionsHooks.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import c from "../../../_runtime/00576_c.js";
import DurationsDefault from "../../utils/Durations.tsx";
import PlatformsDefault from "../../lib/Platforms.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1085);
({ ACTIVITY_PLATFORM_TYPES: closure_7, PlatformTypes } = Constants);
const KeyboardKeysUpdated = fn(7219).KeyboardKeysUpdated;
let closure_10 = { [PlatformTypes.INSTAGRAM]: ["1036753656588017764"] };
let items = [PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()];
let items1 = [items];
const map = new Map(items1);
let closure_12 = 30 * DurationsDefault.Millis.DAY;
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePlatformAllowed(forUserProfile) {
      const cResult = forUserProfile(allowPlayStationStaging[8]).c(7);
      forUserProfile = forUserProfile.forUserProfile;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = forUserProfile(allowPlayStationStaging[8]);
      const stateFromStores = forUserProfile(allowPlayStationStaging[9]).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "f2f7ef_1" };
        cResult[2] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[2];
      }
      const PlayStationVoiceExperiment = tmp(tmp2[10]).PlayStationVoiceExperiment;
      allowPlayStationStaging = PlayStationVoiceExperiment.useConfig(tmp8).allowPlayStationStaging;
      if (cResult[3] === allowPlayStationStaging) {
        if (cResult[4] === stateFromStores) {
          if (cResult[5] === forUserProfile) {
            let tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
      const fn2 = function p(type) {
        if (type.type === PlatformTypes.PLAYSTATION_STAGING) {
          let tmp5 = allowPlayStationStaging;
        } else {
          let tmp4 = undefined === stateFromStores;
          if (!tmp4) {
            let hasItem;
            if (closure_10[type.type] != null) {
              hasItem = obj.includes(tmp10.id);
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
              let enabled = !migrationExperimentEnabled;
              if (!migrationExperimentEnabled) {
                enabled = type.enabled;
              }
              tmp7 = enabled;
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
      const tmpResult = forUserProfile(allowPlayStationStaging[9]);
    }
  : function usePlatformAllowed(forUserProfile) {
      forUserProfile = forUserProfile.forUserProfile;
      let allowPlayStationStaging;
      const items = [UserStore];
      closure_1 = forUserProfile(allowPlayStationStaging[9]).useStateFromStores(items, () =>
        currentUser.getCurrentUser(),
      );
      const PlayStationVoiceExperiment = forUserProfile(allowPlayStationStaging[10]).PlayStationVoiceExperiment;
      allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
      return (type) => {
        if (type.type === PlatformTypes.PLAYSTATION_STAGING) {
          let tmp5 = allowPlayStationStaging;
        } else {
          let tmp4 = undefined === closure_1;
          if (!tmp4) {
            let hasItem;
            if (closure_10[type.type] != null) {
              hasItem = obj.includes(tmp10.id);
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
              let enabled = !migrationExperimentEnabled;
              if (!migrationExperimentEnabled) {
                enabled = type.enabled;
              }
              tmp7 = enabled;
            }
            tmp5 = tmp7;
          }
        }
        return tmp5;
      };
    };
let closure_13 = tmp4;
fn(558);
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
const date = new Date(2023, 1, 18);
const map1 = new Map(items3);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePlatforms() {
      let sortByResult = dependencyMap;
      const cResult = require("c").c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConnectedAccountsStore];
        const fn = function o() {
          return accounts.getAccounts();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { forUserProfile: false };
        cResult[2] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[2];
      }
      const tmp8 = closure_13(tmp7);
      if (cResult[3] !== stateFromStores) {
        const _Set = Set;
        let set = new Set();
        _require = set;
        const item = stateFromStores.forEach((type) => set.add(type.type));
        cResult[3] = stateFromStores;
        cResult[4] = set;
      } else {
        _require = cResult[4];
      }
      set = tmp9;
      if (cResult[5] === tmp9) {
        if (cResult[6] === tmp8) {
          return cResult[7];
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _(type) {
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
        let tmp15 = fn2;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] !== tmp9) {
        const fn3 = function h(type) {
          return set.has(type.type);
        };
        cResult[9] = tmp9;
        cResult[10] = fn3;
        let tmp16 = fn3;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const fn4 = function w(hasMetadata) {
          return hasMetadata.hasMetadata;
        };
        const fn5 = function v(type) {
          return !set2.has(type.type);
        };
        class E {
          constructor(arg0) {
            return arg0.name;
          }
        }
        cResult[11] = fn4;
        cResult[12] = fn5;
        cResult[13] = E;
        let tmp18 = fn5;
        let tmp17 = fn4;
      } else {
        tmp17 = cResult[11];
        tmp18 = cResult[12];
        class E {
          constructor(arg0) {
            return arg0.name;
          }
        }
      }
      const tmpResult = require("initialize");
      const obj4 = set(12);
      const items1 = [tmp15, tmp16, tmp17, tmp18, E];
      sortByResult = obj4.sortBy(set(5760).filter(tmp8), items1);
      cResult[5] = tmp9;
      cResult[6] = tmp8;
      cResult[7] = sortByResult;
      const arr3 = set(5760);
    }
  : function usePlatforms() {
      let items = [ConnectedAccountsStore];
      stateFromStores = stateFromStores(memo[9]).useStateFromStores(items, () => accounts.getAccounts());
      const tmp2 = closure_13({ forUserProfile: false });
      closure_1 = tmp2;
      const items1 = [stateFromStores];
      memo = noop.useMemo(() => {
        const set = new Set();
        const item = stateFromStores.forEach((type) => set.add(type.type));
        return set;
      }, items1);
      const items2 = [memo, tmp2];
      return noop.useMemo(() => {
        const obj = _modDef12;
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
        return obj.sortBy(PlatformsDefault.filter(closure_1), items);
      }, items2);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/ConnectionsHooks.tsx");

export const usePlatformAllowed = tmp4;
export const usePlatforms = tmp5;
export const useEmptyStatePlatforms = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmptyStatePlatforms() {
      let sortByResult = dependencyMap;
      const cResult = c.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { forUserProfile: false };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp4 = closure_13(first);
      if (cResult[1] !== tmp4) {
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
          let tmp6 = fn2;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[3];
          tmp6 = cResult[4];
        }
        const obj3 = _modDef12;
        const items = [tmp5, tmp6];
        sortByResult = obj3.sortBy(PlatformsDefault.filter(tmp4), items);
        cResult[1] = tmp4;
        cResult[2] = sortByResult;
      } else {
        return cResult[2];
      }
    }
  : function useEmptyStatePlatforms() {
      const tmp = closure_13({ forUserProfile: false });
      closure_0 = tmp;
      let items = [tmp];
      return noop.useMemo(() => {
        const obj = _modDef12;
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
        return obj.sortBy(PlatformsDefault.filter(closure_0), items);
      }, items);
    };
export const useLegacyPlatformType = function useLegacyPlatformType(arg0) {
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
  [tmp2, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
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
