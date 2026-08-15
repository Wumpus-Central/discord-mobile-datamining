// discord_app/modules/poggermode/PoggermodeStore.tsx
import fetchFingerprint from "fetchFingerprint";
import handleConnectionOpen from "handleConnectionOpen";
import initialize from "initialize";
import ConfettiLocation from "ConfettiLocation";
import { ComponentActions } from "ME";
import { Store } from "initialize";
import set from "initialize";
import { getComboShakeIntensity } from "PoggermodeUtils.tsx";

let c5;
let closure_6;
const require = arg1;
function updateCombo(userId) {
  let flag;
  flag = true;
  let obj;
  obj = secondaryIndexMap;
  const iter = secondaryIndexMap.get("" + userId.userId + "-" + userId.channelId);
  obj = {};
  let merged = Object.assign(iter);
  let merged1 = Object.assign(userId);
  let num = userId.value;
  if (num == null) {
    let value;
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
    decayInterval = new obj(4259).Interval();
  }
  obj.decayInterval = decayInterval;
  const result = obj.set("" + userId.userId + "-" + userId.channelId, obj);
  if (flag) {
    decayInterval = obj.decayInterval;
    if (decayInterval != null) {
      decayInterval.start(1000, () => {
        const iter2 = outer1_9.get("" + obj.userId + "-" + obj.channelId);
        if (null != iter2) {
          if (iter2.value > 0) {
            if (!tmp) {
              obj = {};
              const merged = Object.assign(iter2);
              obj.value = iter2.value - 1;
              outer1_11(obj);
              outer1_12.emitChange();
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
            outer1_11(obj);
            outer1_12.emitChange();
          }
          tmp = iter.multiplier !== iter2.multiplier && iter.value !== iter2.value;
        }
      });
    }
  }
}
({ ShakeLevel: c5, ShakeLocation: closure_6 } = ConfettiLocation);
let set = new Set();
const secondaryIndexMap = new require("version").SecondaryIndexMap((arg0) => {
  const items = [, ];
  ({ userId: arr[0], channelId: arr[1] } = arg0);
  return items;
}, (channelId) => "" + channelId.channelId + "-" + channelId.userId);
const secondaryIndexMap1 = new require("version").SecondaryIndexMap((combo) => {
  const items = [, , ];
  ({ messageId: arr[0], channelId: arr[1] } = combo);
  items[2] = combo.combo.userId;
  return items;
}, (channelId) => "" + channelId.channelId + "-" + channelId.combo.userId + "-" + channelId.messageId);
class PoggermodeStore extends Store {
}
const prototype = PoggermodeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, initialize, handleConnectionOpen);
};
prototype["getComboScore"] = function getComboScore(arg0, arg1) {
  const value = secondaryIndexMap.get("" + arg0 + "-" + arg1);
  let num = 0;
  if (null != value) {
    num = getComboShakeIntensity.getComboScore(value);
    const obj = getComboShakeIntensity;
  }
  return num;
};
prototype["getUserCombo"] = function getUserCombo(id, throwTypeErrorResult) {
  return secondaryIndexMap.get("" + id + "-" + throwTypeErrorResult);
};
prototype["isComboing"] = function isComboing(id, throwTypeErrorResult) {
  const iter = this.getUserCombo(id, throwTypeErrorResult);
  let tmp = null != iter;
  if (tmp) {
    tmp = iter.value >= initialize.combosRequiredCount;
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
  const value = secondaryIndexMap1.get(arg0);
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
prototype["getUserComboShakeIntensity"] = function getUserComboShakeIntensity(id, throwTypeErrorResult, arg2, LEVEL_4) {
  const userCombo = this.getUserCombo(id, throwTypeErrorResult);
  let num = 0;
  if (null != userCombo) {
    num = getComboShakeIntensity.getComboShakeIntensity(userCombo, LEVEL_4) * arg2;
    const obj = getComboShakeIntensity;
  }
  return num;
};
PoggermodeStore.displayName = "PoggermodeStore";
const poggermodeStore = new PoggermodeStore(require("dispatcher"), {
  POGGERMODE_UPDATE_COMBO: function handleComboing(arg0) {
    const merged = Object.assign(arg0, Object.create(null));
    if (initialize.isEnabled()) {
      updateCombo(merged);
    } else {
      return false;
    }
  },
  POGGERMODE_UPDATE_MESSAGE_COMBO: function handleUpdateMessageCombo(comboMessage) {
    comboMessage = comboMessage.comboMessage;
    if (initialize.isEnabled()) {
      const result = secondaryIndexMap1.set(comboMessage.messageId, comboMessage);
    } else {
      return false;
    }
  },
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    let author;
    let mentions;
    let nonce;
    ({ mentions, author, nonce } = message.message);
    let id;
    if (initialize.isEnabled()) {
      id = id.getId();
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
        const value = secondaryIndexMap.get("" + str + "-" + message.channelId);
        if (tmp.screenshakeEnabled) {
          if (tmp.screenshakeEnabledLocations[constants.MENTION]) {
            if (null != mentions) {
              if (null != mentions.find((id) => id.id === id)) {
                if (null != value) {
                  let num2 = id(7579).getComboShakeIntensity(value, LEVEL_4.LEVEL_4);
                  if (num2 == null) {
                    num2 = 0.001;
                  }
                  let result = num2;
                  const obj2 = id(7579);
                } else {
                  const _Math = Math;
                  result = 4 * Math.random();
                }
                const ComponentDispatch = id(1231).ComponentDispatch;
                obj = { duration: 1000, intensity: null };
                obj[1] = result;
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
  }
});
let result = set.fileFinishedImporting("modules/poggermode/PoggermodeStore.tsx");

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