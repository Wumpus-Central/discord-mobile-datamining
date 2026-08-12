// discord_app/utils/native/ChatInputUtils.tsx
import { KeyboardTypes } from "../../modules/keyboard/native/KeyboardTypes.tsx";
import { zustandStore } from "../../modules/keyboard/native/PortalKeyboardUIStore.native.tsx";
import { dismissGlobalKeyboard } from "KeyboardManagerUtils.tsx";
function getBestActiveInput() {
  let str;
  if (0 !== map1.size) {
    str = "voice-panel";
    if (!obj.has("voice-panel")) {
      str = "message-request";
      if (!obj.has("message-request")) {
        str = "new-message";
        if (!obj.has("new-message")) {
          const _Array = Array;
          const found = Array.from(obj.keys()).filter((num) => {
            let tmp = typeof num === "number";
            if (typeof num === "number") {
              tmp = !callback(table[0]).isScreenIndexFrozen(num);
              const obj = callback(table[0]);
            }
            return tmp;
          });
          if (0 !== found.length) {
            const _Math = Math;
            const items = [];
            HermesBuiltin.arraySpread(found, 0);
            const _Math2 = Math;
            str = HermesBuiltin.apply(items, Math);
          }
          const arr = Array.from(obj.keys());
        }
      }
    }
  }
  let value;
  if (null != str) {
    value = obj.get(str);
  }
  let current;
  if (value != null) {
    current = value.current;
  }
  return current;
}
const map = new Map();
const map1 = new Map();
let result = require("useKeyboardType").fileFinishedImporting("utils/native/ChatInputUtils.tsx");

export function createInputRefTracker(id, screenIndex) {
  let closure_0 = screenIndex;
  let c1 = null;
  let obj = { current: id };
  obj = {
    handleRef(current, id) {
      obj.current = id;
      if (null == current) {
        if (null != obj) {
          let value = obj.get(id);
          if (null != value) {
            value.delete(tmp16);
            if (0 === value.size) {
              obj.delete(id);
            }
            outer1_3.delete(tmp16);
          }
          obj = null;
        }
      } else if (null == obj) {
        obj = { current: null };
        obj[0] = current;
        value = obj.get(id);
        if (value == null) {
          const _Map = Map;
          value = new Map();
        }
        const result = value.set(tmp2, obj);
        const result1 = obj.set(id, value);
        const result2 = outer1_3.set(tmp2, obj);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = outer1_3.has(tmp2);
        }
      } else {
        obj.current = current;
      }
    },
    register() {
      if (null != c1) {
        const current2 = obj.current;
        let value = obj.get(current2);
        if (null != value) {
          value.delete(tmp15);
          if (0 === value.size) {
            obj3.delete(current2);
          }
          outer1_3.delete(tmp15);
        }
        const current = obj.current;
        value = obj3.get(current);
        if (value == null) {
          const _Map = Map;
          value = new Map();
        }
        const result = value.set(tmp15, tmp5);
        const result1 = obj3.set(current, value);
        const result2 = outer1_3.set(tmp15, tmp5);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = obj2.has(tmp15);
        }
        obj2 = outer1_3;
        const tmp14 = obj;
      }
    },
    unregister() {
      if (null != c1) {
        const current = obj.current;
        const value = obj.get(current);
        if (null != value) {
          value.delete(tmp2);
          if (0 === value.size) {
            obj.delete(current);
          }
          outer1_3.delete(tmp2);
        }
      }
    }
  };
  return obj;
}
export const getHighestActiveScreenIndex = function getHighestActiveScreenIndex() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = map1;
  }
  if (0 !== obj.size) {
    if (obj.has("voice-panel")) {
      return "voice-panel";
    } else if (obj.has("message-request")) {
      return "message-request";
    } else if (obj.has("new-message")) {
      return "new-message";
    } else {
      const _Array = Array;
      const found = Array.from(obj.keys()).filter((num) => {
        let tmp = typeof num === "number";
        if (typeof num === "number") {
          tmp = !callback(table[0]).isScreenIndexFrozen(num);
          const obj = callback(table[0]);
        }
        return tmp;
      });
      if (0 !== found.length) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(found, 0);
        const _Math2 = Math;
        return HermesBuiltin.apply(items, Math);
      }
      const arr = Array.from(obj.keys());
    }
  }
};
export const getChatInputRef = function getChatInputRef(id, screenIndex) {
  if (null != id) {
    let value = map.get(id);
    let current;
    if (value != null) {
      value = value.get(screenIndex);
      if (value != null) {
        current = value.current;
      }
    }
    return current;
  }
};
export const getBestActiveInputForChannelId = function getBestActiveInputForChannelId(channelId) {
  if (null != channelId) {
    let value = map.get(channelId);
    if (null != value) {
      let obj2 = value;
      if (value === undefined) {
        obj2 = map1;
      }
      let str;
      if (0 !== obj2.size) {
        str = "voice-panel";
        if (!obj2.has("voice-panel")) {
          str = "message-request";
          if (!obj2.has("message-request")) {
            str = "new-message";
            if (!obj2.has("new-message")) {
              const _Array = Array;
              const found = Array.from(obj2.keys()).filter((num) => {
                let tmp = typeof num === "number";
                if (typeof num === "number") {
                  tmp = !callback(table[0]).isScreenIndexFrozen(num);
                  const obj = callback(table[0]);
                }
                return tmp;
              });
              if (0 !== found.length) {
                const _Math = Math;
                const items = [];
                HermesBuiltin.arraySpread(found, 0);
                const _Math2 = Math;
                str = HermesBuiltin.apply(items, Math);
              }
              const arr = Array.from(obj2.keys());
            }
          }
        }
      }
      value = undefined;
      if (null != str) {
        value = value.get(str);
      }
      let current;
      if (value != null) {
        current = value.current;
      }
      return current;
    }
  }
};
export { getBestActiveInput };
export const dismissKeyboard = function dismissKeyboard() {
  let obj = dismissGlobalKeyboard;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = getBestActiveInput();
  if (null != obj2) {
    obj2.closeCustomKeyboard();
  }
  let tmpResult = tmp(4209);
  const keyboardType = tmpResult.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    tmpResult = tmp(1497);
    obj = { type: null };
    obj[0] = tmp(1626).KeyboardTypes.SYSTEM;
    tmpResult.setKeyboardType(obj);
  }
  const result1 = zustandStore.closePortalKeyboardRequest();
};