// === Module 7503: ConnectionsHooks ===

// Module 7503 (ConnectionsHooks)
import _modDef12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1090 */;
import PlatformsDefault from "Platforms" /* 5283 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const Constants = fn(1074);
({ ACTIVITY_PLATFORM_TYPES: closure_7, PlatformTypes } = Constants);
const KeyboardKeysUpdated = fn(7504).KeyboardKeysUpdated;
let closure_10 = { [PlatformTypes.INSTAGRAM]: ["1036753656588017764"] };
let items = [PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()];
let items1 = [items];
const map = new Map(items1);
let closure_12 = 30 * DurationsDefault.Millis.DAY;
let items2 = [PlatformTypes.PLAYSTATION, 2];
let items3 = [items2, , , , ];
const items4 = [PlatformTypes.XBOX, 2];
items3[1] = items4;
const items5 = [PlatformTypes.SPOTIFY, 1];
items3[2] = items5;
const items6 = [PlatformTypes.STEAM, 1];
items3[3] = items6;
const items7 = [PlatformTypes.TWITCH, 1];
items3[4] = items7;
const map1 = new Map(items3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/ConnectionsHooks.tsx");

export const usePlatformAllowed = function usePlatformAllowed(forUserProfile) {
  forUserProfile = forUserProfile.forUserProfile;
  let allowPlayStationStaging;
  const items = [UserStore];
  closure_1 = forUserProfile(allowPlayStationStaging[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const PlayStationVoiceExperiment = forUserProfile(allowPlayStationStaging[8]).PlayStationVoiceExperiment;
  allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  return (dependencyMap) => {
    if (dependencyMap.type === PlatformTypes.PLAYSTATION_STAGING) {
      let tmp5 = dependencyMap;
    } else {
      let tmp4 = undefined === importDefault;
      if (!tmp4) {
        let hasItem;
        if (closure_10[dependencyMap.type] != null) {
          hasItem = obj.includes(tmp10.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = fn;
        if (!tmp7) {
          const migrationData = dependencyMap.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          let enabled = !migrationExperimentEnabled;
          if (!migrationExperimentEnabled) {
            enabled = dependencyMap.enabled;
          }
          tmp7 = enabled;
        }
        tmp5 = tmp7;
      }
    }
    return tmp5;
  };
};
export const usePlatforms = function usePlatforms() {
  let items = [ConnectedAccountsStore];
  stateFromStores = stateFromStores(memo[7]).useStateFromStores(items, () => accounts.getAccounts());
  closure_129_0 = false;
  let obj = stateFromStores(memo[7]);
  const items1 = [UserStore];
  closure_129_1 = stateFromStores(memo[7]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const PlayStationVoiceExperiment = stateFromStores(memo[8]).PlayStationVoiceExperiment;
  closure_129_2 = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  const fn = (dependencyMap) => {
    if (dependencyMap.type === PlatformTypes.PLAYSTATION_STAGING) {
      let tmp5 = dependencyMap;
    } else {
      let tmp4 = undefined === importDefault;
      if (!tmp4) {
        let hasItem;
        if (closure_10[dependencyMap.type] != null) {
          hasItem = obj.includes(tmp10.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = fn;
        if (!tmp7) {
          const migrationData = dependencyMap.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          let enabled = !migrationExperimentEnabled;
          if (!migrationExperimentEnabled) {
            enabled = dependencyMap.enabled;
          }
          tmp7 = enabled;
        }
        tmp5 = tmp7;
      }
    }
    return tmp5;
  };
  const items2 = [stateFromStores];
  memo = noop.useMemo(() => {
    const set = new Set();
    const item = stateFromStores.forEach((type) => set.add(type.type));
    return set;
  }, items2);
  const items3 = [memo, fn];
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
      (name) => name.name
    ];
    return obj.sortBy(PlatformsDefault.filter(fn), items);
  }, items3);
};
export const useEmptyStatePlatforms = function useEmptyStatePlatforms() {
  closure_129_0 = false;
  let items = [UserStore];
  closure_129_1 = fn(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const PlayStationVoiceExperiment = fn(7506).PlayStationVoiceExperiment;
  closure_129_2 = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  fn = (dependencyMap) => {
    if (dependencyMap.type === PlatformTypes.PLAYSTATION_STAGING) {
      let tmp5 = dependencyMap;
    } else {
      let tmp4 = undefined === importDefault;
      if (!tmp4) {
        let hasItem;
        if (closure_10[dependencyMap.type] != null) {
          hasItem = obj.includes(tmp10.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = fn;
        if (!tmp7) {
          const migrationData = dependencyMap.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          let enabled = !migrationExperimentEnabled;
          if (!migrationExperimentEnabled) {
            enabled = dependencyMap.enabled;
          }
          tmp7 = enabled;
        }
        tmp5 = tmp7;
      }
    }
    return tmp5;
  };
  const items1 = [fn];
  return noop.useMemo(() => {
    const obj = _modDef12;
    const items = [
      (type) => {
        let num = closure_1_13.get(type.type);
        if (num == null) {
          num = 0;
        }
        return -1 * num;
      },
      (name) => name.name
    ];
    return obj.sortBy(PlatformsDefault.filter(fn), items);
  }, items1);
};
export const useLegacyPlatformType = function useLegacyPlatformType(arg0) {
  function handleKeyDown(key) {
    if (key.key === KeyboardKeysUpdated.SHIFT) {
      require(true);
    }
  }
  function handleKeyUp(key) {
    if (key.key === KeyboardKeysUpdated.SHIFT) {
      require(false);
    }
  }
  [tmp2, require] = _slicedToArray(noop.useState(false), 2);
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