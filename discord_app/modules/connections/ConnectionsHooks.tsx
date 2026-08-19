// === Module 5220: PlatformTypes ===

// Module 5220 (PlatformTypes)
import obj132Default from "obj132" /* 687 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import set from "set" /* 5221 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { KeyboardKeysUpdated } from "items" /* 5228 */;

const require = fn;
({ ACTIVITY_PLATFORM_TYPES: error, PlatformTypes } = ME);
let closure_10 = { [PlatformTypes.INSTAGRAM]: ["1036753656588017764"] };
let items = [PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()];
let items1 = [items];
const map = new Map(items1);
let closure_12 = 30 * obj132Default.Millis.DAY;
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
const date = new Date(2023, 1, 18);
const result = require("obj132").fileFinishedImporting("modules/connections/ConnectionsHooks.tsx");

export const usePlatformAllowed = function usePlatformAllowed(forUserProfile) {
  forUserProfile = forUserProfile.forUserProfile;
  let allowPlayStationStaging;
  const items = [closure_6];
  closure_1 = forUserProfile(allowPlayStationStaging[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const PlayStationVoiceExperiment = forUserProfile(allowPlayStationStaging[8]).PlayStationVoiceExperiment;
  allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  return (allowPlayStationStaging) => {
    if (allowPlayStationStaging.type === PlatformTypes.PLAYSTATION_STAGING) {
      let tmp5 = allowPlayStationStaging;
    } else {
      let tmp4 = undefined === closure_1;
      if (!tmp4) {
        let hasItem;
        if (closure_1_10[allowPlayStationStaging.type] != null) {
          hasItem = obj.includes(tmp10.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = fn;
        if (!tmp7) {
          const migrationData = allowPlayStationStaging.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          let enabled = !migrationExperimentEnabled;
          if (!migrationExperimentEnabled) {
            enabled = allowPlayStationStaging.enabled;
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
  let items = [closure_5];
  const stateFromStores = _require(memo[7]).useStateFromStores(items, () => accounts.getAccounts());
  _require = false;
  memo = undefined;
  let obj = _require(memo[7]);
  const items1 = [closure_6];
  _require(memo[7]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const PlayStationVoiceExperiment = _require(memo[8]).PlayStationVoiceExperiment;
  PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  const fn = (allowPlayStationStaging) => {
    if (allowPlayStationStaging.type === PlatformTypes.PLAYSTATION_STAGING) {
      let tmp5 = allowPlayStationStaging;
    } else {
      let tmp4 = undefined === closure_1;
      if (!tmp4) {
        let hasItem;
        if (closure_1_10[allowPlayStationStaging.type] != null) {
          hasItem = obj.includes(tmp10.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = fn;
        if (!tmp7) {
          const migrationData = allowPlayStationStaging.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          let enabled = !migrationExperimentEnabled;
          if (!migrationExperimentEnabled) {
            enabled = allowPlayStationStaging.enabled;
          }
          tmp7 = enabled;
        }
        tmp5 = tmp7;
      }
    }
    return tmp5;
  };
  const items2 = [stateFromStores];
  memo = React.useMemo(() => {
    const set = new Set();
    const item = set.forEach((item, index) => set.add(item.type));
    return set;
  }, items2);
  const items3 = [memo, fn];
  return React.useMemo(() => {
    const obj = fn(memo[9]);
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
          hasItem = timestamp < num + closure_12;
        }
        return !hasItem;
      },
      (type) => set.has(type.type),
      (hasMetadata) => hasMetadata.hasMetadata,
      (type) => !set2.has(type.type),
      (name) => name.name
    ];
    return obj.sortBy(fn(memo[10]).filter(fn), items);
  }, items3);
};
export const useEmptyStatePlatforms = function useEmptyStatePlatforms() {
  let fn = false;
  let items = [closure_6];
  closure_1 = fn(allowPlayStationStaging[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const PlayStationVoiceExperiment = fn(allowPlayStationStaging[8]).PlayStationVoiceExperiment;
  allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  fn = (allowPlayStationStaging) => {
    if (allowPlayStationStaging.type === PlatformTypes.PLAYSTATION_STAGING) {
      let tmp5 = allowPlayStationStaging;
    } else {
      let tmp4 = undefined === closure_1;
      if (!tmp4) {
        let hasItem;
        if (closure_1_10[allowPlayStationStaging.type] != null) {
          hasItem = obj.includes(tmp10.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = fn;
        if (!tmp7) {
          const migrationData = allowPlayStationStaging.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          let enabled = !migrationExperimentEnabled;
          if (!migrationExperimentEnabled) {
            enabled = allowPlayStationStaging.enabled;
          }
          tmp7 = enabled;
        }
        tmp5 = tmp7;
      }
    }
    return tmp5;
  };
  const items1 = [fn];
  return React.useMemo(() => {
    const obj = callback(allowPlayStationStaging[9]);
    const items = [
      (type) => {
        let num = closure_13.get(type.type);
        if (num == null) {
          num = 0;
        }
        return -1 * num;
      },
      (name) => name.name
    ];
    return obj.sortBy(callback(allowPlayStationStaging[10]).filter(fn), items);
  }, items1);
};
export const useLegacyPlatformType = function useLegacyPlatformType(arg0) {
  function handleKeyDown(key) {
    if (key.key === KeyboardKeysUpdated.SHIFT) {
      callback(true);
    }
  }
  function handleKeyUp(key) {
    if (key.key === KeyboardKeysUpdated.SHIFT) {
      callback(false);
    }
  }
  [tmp2, require] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const listener = window.addEventListener("keydown", handleKeyDown);
    const listener1 = window.addEventListener("keyup", handleKeyUp);
    return () => {
      const removed = window.removeEventListener("keydown", closure_1);
      const removed1 = window.removeEventListener("keyup", closure_2);
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