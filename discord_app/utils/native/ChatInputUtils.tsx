// discord_app/utils/native/ChatInputUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import computeEntryState from "../../modules/keyboard/native/KeyboardUIStore.native.tsx";
import KeyboardTypes from "../../modules/keyboard/native/KeyboardTypes.tsx";
import dismissGlobalKeyboard from "KeyboardManagerUtils.tsx";
import useKeyboardType from "../../modules/keyboard/native/useKeyboardType.tsx";
import zustandStore from "../../modules/keyboard/native/PortalKeyboardUIStore.native.tsx";

function getBestActiveInput() {
  let str;
  if (0 !== map1.size) {
    str = "voice-panel";
    if (!map1.has("voice-panel")) {
      str = "message-request";
      if (!map1.has("message-request")) {
        str = "new-message";
        if (!map1.has("new-message")) {
          const _Array = Array;
          const found = Array.from(map1.keys()).filter((item, index) => {
            let tmp = typeof item === "number";
            if (typeof item === "number") {
              tmp = !callback(table[0]).isScreenIndexFrozen(item);
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
          const arr = Array.from(map1.keys());
        }
      }
    }
  }
  let value;
  if (null != str) {
    value = map1.get(str);
  }
  let current;
  if (value != null) {
    current = value.current;
  }
  return current;
}
const map = new Map();
const map1 = new Map();
let result = obj132.fileFinishedImporting("utils/native/ChatInputUtils.tsx");

export function createInputRefTracker(id, screenIndex) {
  closure_0 = screenIndex;
  c1 = null;
  let obj = {
    handleRef(current, id) {
      obj.current = id;
      if (null == current) {
        if (null != obj) {
          let value = obj.get(id);
          if (null != value) {
            value.delete(closure_0);
            if (0 === value.size) {
              obj.delete(id);
            }
            map1.delete(closure_0);
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
        const result = value.set(closure_0, obj);
        const result1 = obj.set(id, value);
        const result2 = map1.set(closure_0, obj);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = map1.has(closure_0);
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
          value.delete(closure_0);
          if (0 === value.size) {
            obj.delete(current2);
          }
          map1.delete(closure_0);
        }
        const current = obj.current;
        value = obj.get(current);
        if (value == null) {
          const _Map = Map;
          value = new Map();
        }
        const result = value.set(closure_0, c1);
        const result1 = obj.set(current, value);
        const result2 = map1.set(closure_0, c1);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = map1.has(closure_0);
        }
      }
    },
    unregister() {
      if (null != c1) {
        const current = obj.current;
        const value = obj.get(current);
        if (null != value) {
          value.delete(closure_0);
          if (0 === value.size) {
            obj.delete(current);
          }
          map1.delete(closure_0);
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
      const found = Array.from(obj.keys()).filter((item, index) => {
        let tmp = typeof item === "number";
        if (typeof item === "number") {
          tmp = !callback(table[0]).isScreenIndexFrozen(item);
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
              const found = Array.from(obj2.keys()).filter((item, index) => {
                let tmp = typeof item === "number";
                if (typeof item === "number") {
                  tmp = !callback(table[0]).isScreenIndexFrozen(item);
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
  let tmpResult = useKeyboardType;
  const keyboardType = tmpResult.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    tmpResult = computeEntryState;
    obj = { type: null };
    obj[0] = KeyboardTypes.KeyboardTypes.SYSTEM;
    tmpResult.setKeyboardType(obj);
  }
  const result1 = zustandStore.closePortalKeyboardRequest();
  const tmpResult1 = zustandStore;
};