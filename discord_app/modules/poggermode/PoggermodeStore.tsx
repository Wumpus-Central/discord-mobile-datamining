// discord_app/modules/poggermode/PoggermodeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ComponentDispatchUtils from "../../utils/ComponentDispatchUtils.tsx";
import PoggermodeUtils from "PoggermodeUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import PoggermodeSettingsStore from "PoggermodeSettingsStore.tsx";

require = fn;
function updateCombo(userId) {
  const flag = true;
  const iter = secondaryIndexMap.get("" + userId.userId + "-" + userId.channelId);
  let obj = {};
  let merged = Object.assign(iter);
  let merged1 = Object.assign(userId);
  let num = userId.value;
  if (num == null) {
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    num = value;
  }
  if (num == null) {
    num = 0;
  }
  obj.value = num;
  let num2 = userId.multiplier;
  if (num2 == null) {
    let multiplier;
    if (iter != null) {
      multiplier = iter.multiplier;
    }
    num2 = multiplier;
  }
  if (num2 == null) {
    num2 = 1;
  }
  obj.multiplier = Math.min(num2, 7);
  let decayInterval;
  if (iter != null) {
    decayInterval = iter.decayInterval;
  }
  if (decayInterval == null) {
    decayInterval = new obj(4447).Interval();
  }
  obj.decayInterval = decayInterval;
  const result = obj.set("" + userId.userId + "-" + userId.channelId, obj);
  if (flag) {
    decayInterval = obj.decayInterval;
    if (decayInterval != null) {
      decayInterval.start(1000, () => {
        const iter2 = secondaryIndexMap.get("" + obj.userId + "-" + obj.channelId);
        if (null != iter2) {
          if (iter2.value > 0) {
            if (!tmp) {
              obj = {};
              const merged = Object.assign(iter2);
              obj.value = iter2.value - 1;
              updateCombo(obj);
              poggermodeStore.emitChange();
            }
          }
          const decayInterval = iter2.decayInterval;
          if (decayInterval != null) {
            decayInterval.stop();
          }
          if (iter2.value <= 0) {
            obj = {};
            const merged1 = Object.assign(iter2);
            obj.value = 0;
            obj.multiplier = 1;
            updateCombo(obj);
            poggermodeStore.emitChange();
          }
          tmp = iter.multiplier !== iter2.multiplier && iter.value !== iter2.value;
        }
      });
    }
  }
}
const PoggermodeConstants = fn(7679);
({ ShakeLevel: hasOwnProperty, ShakeLocation: metroRequire } = PoggermodeConstants);
const ComponentActions = fn(1074).ComponentActions;
const set = new Set();
const secondaryIndexMap = new fn(4195).SecondaryIndexMap(
  (arg0) => {
    const items = [,];
    ({ userId: arr[0], channelId: arr[1] } = arg0);
    return items;
  },
  (channelId) => "" + channelId.channelId + "-" + channelId.userId,
);
const secondaryIndexMap1 = new fn(4195).SecondaryIndexMap(
  (combo) => {
    const items = [, ,];
    ({ messageId: arr[0], channelId: arr[1] } = combo);
    items[2] = combo.combo.userId;
    return items;
  },
  (channelId) => "" + channelId.channelId + "-" + channelId.combo.userId + "-" + channelId.messageId,
);
const Store = initializeDefault.Store;
class PoggermodeStore extends Store {}
const prototype = PoggermodeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, PoggermodeSettingsStore, SelectedChannelStore);
};
prototype["getComboScore"] = function getComboScore(arg0, arg1) {
  value = secondaryIndexMap.get("" + arg0 + "-" + arg1);
  let num = 0;
  if (null != value) {
    num = PoggermodeUtils.getComboScore(value);
  }
  return num;
};
prototype["getUserCombo"] = function getUserCombo(id, channelId) {
  return secondaryIndexMap.get("" + id + "-" + channelId);
};
prototype["isComboing"] = function isComboing(id, channelId) {
  const iter = this.getUserCombo(id, channelId);
  let tmp = null != iter;
  if (tmp) {
    tmp = iter.value >= PoggermodeSettingsStore.combosRequiredCount;
  }
  if (tmp) {
    let tmp3 = null != iter;
    if (tmp3) {
      let tmp4 = iter.value > 0;
      if (!tmp4) {
        let multiplier;
        if (iter != null) {
          multiplier = iter.multiplier;
        }
        tmp4 = multiplier > 1;
      }
      tmp3 = tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getMessageCombo"] = function getMessageCombo(arg0) {
  value = secondaryIndexMap1.get(arg0);
  let combo;
  if (value != null) {
    combo = value.combo;
  }
  return combo;
};
prototype["getMostRecentMessageCombo"] = function getMostRecentMessageCombo(arg0) {
  const values = secondaryIndexMap1.values(arg0);
  return values[values.length - 1];
};
prototype["getUserComboShakeIntensity"] = function getUserComboShakeIntensity(id, channelId, arg2, LEVEL_4) {
  const userCombo = this.getUserCombo(id, channelId);
  let num = 0;
  if (null != userCombo) {
    num = PoggermodeUtils.getComboShakeIntensity(userCombo, LEVEL_4) * arg2;
  }
  return num;
};
PoggermodeStore.displayName = "PoggermodeStore";
const poggermodeStore = new PoggermodeStore(DispatcherDefault, {
  POGGERMODE_UPDATE_COMBO: function handleComboing(arg0) {
    const merged = Object.assign(arg0, Object.assign({ type: 0 }));
    if (PoggermodeSettingsStore.isEnabled()) {
      updateCombo(merged);
    } else {
      return false;
    }
  },
  POGGERMODE_UPDATE_MESSAGE_COMBO: function handleUpdateMessageCombo(comboMessage) {
    comboMessage = comboMessage.comboMessage;
    if (PoggermodeSettingsStore.isEnabled()) {
      const result = secondaryIndexMap1.set(comboMessage.messageId, comboMessage);
    } else {
      return false;
    }
  },
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    ({ mentions, author, nonce } = message.message);
    let id;
    if (PoggermodeSettingsStore.isEnabled()) {
      id = AuthenticationStore.getId();
      let id1;
      if (author != null) {
        id1 = author.id;
      }
      let obj = set;
      let tmp6 = id1 === id;
      if (tmp6) {
        let flag2 = null != nonce && !obj.has(nonce);
        if (flag2) {
          obj.add(nonce);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      if (tmp6) {
        let str;
        if (author != null) {
          str = author.id;
        }
        if (str == null) {
          str = "???";
        }
        const _HermesInternal = HermesInternal;
        value = secondaryIndexMap.get("" + str + "-" + message.channelId);
        if (tmp.screenshakeEnabled) {
          if (tmp.screenshakeEnabledLocations[constants.MENTION]) {
            if (null != mentions) {
              if (null != mentions.find((id) => id.id === id)) {
                if (null != value) {
                  let num2 = PoggermodeUtils.getComboShakeIntensity(value, LEVEL_4.LEVEL_4);
                  if (num2 == null) {
                    num2 = 0.001;
                  }
                  let result = num2;
                } else {
                  const _Math = Math;
                  result = 4 * Math.random();
                }
                const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                obj = { duration: 1000, intensity: result };
                ComponentDispatch.dispatch(ComponentActions.SHAKE_APP, obj);
                return true;
              }
            }
          }
        }
        return false;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/poggermode/PoggermodeStore.tsx");

export default poggermodeStore;
export const isComboing = function isComboing(value) {
  let tmp = null != value;
  if (tmp) {
    let tmp2 = value.value > 0;
    if (!tmp2) {
      let multiplier;
      if (value != null) {
        multiplier = value.multiplier;
      }
      tmp2 = multiplier > 1;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getComboId = function getComboId(userId) {
  return "" + userId.userId + "-" + userId.channelId;
};
export const shouldTrackMessage = function shouldTrackMessage(arg0, arg1, arg2, has) {
  let tmp = arg0 === arg1;
  if (tmp) {
    let flag = null != arg2 && !has.has(arg2);
    if (flag) {
      has.add(arg2);
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
};
