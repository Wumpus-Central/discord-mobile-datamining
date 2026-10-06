// === Module 4751: ChatInputUtils ===

// Module 4751 (ChatInputUtils)
import KeyboardUIStore from "KeyboardUIStore" /* 1488 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import ScreenIndexFrozen from "ScreenIndexFrozen" /* 4752 */;
import useKeyboardType from "useKeyboardType" /* 4753 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4754 */;
import size from "module_2" /* 2 */;

const f89369 = (item) => {
  let tmp = typeof item === "number";
  if (typeof item === "number") {
    const obj = ScreenIndexFrozen;
    tmp = !obj.isScreenIndexFrozen(item);
  }
  return tmp;
};
function getBestActiveInput() {
  let str;
  if (0 !== map1.size) {
    str = "voice-panel";
    if (!map1.has("voice-panel")) {
      str = "message-request";
      if (!map1.has("message-request")) {
        str = "new-message";
        if (!map1.has("new-message")) {
          str = "conjure-preview";
          if (!map1.has("conjure-preview")) {
            const _Array = Array;
            const arr = Array.from(map1.keys());
            const found = arr.filter(f89369);
            if (0 !== found.length) {
              const _Math = Math;
              const items = [];
              HermesBuiltin.arraySpread(items, found, 0);
              const _Math2 = Math;
              str = HermesBuiltin.apply(max, items, Math);
            }
          }
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
let result = size.fileFinishedImporting("utils/native/ChatInputUtils.tsx");

export function createInputRefTracker(id, screenIndex) {
  let closure_0 = screenIndex;
  let obj = { current: id };
  return {
    handleRef(current, id) {
      obj.current = id;
      if (null == current) {
        if (null != obj) {
          const value = map.get(id);
          if (null != value) {
            value.delete(screenIndex);
            if (0 === value.size) {
              map.delete(id);
            }
            map1.delete(screenIndex);
          }
          obj = null;
        }
      } else if (null == obj) {
        obj = { current };
        let value2 = map.get(id);
        if (value2 == null) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          value2 = new Map();
        }
        const result = value2.set(screenIndex, obj);
        const result1 = map.set(id, value2);
        const result2 = map1.set(screenIndex, obj);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = map1.has(screenIndex);
        }
      } else {
        obj.current = current;
      }
    },
    register() {
      if (null != obj) {
        const current2 = obj.current;
        const value = map.get(current2);
        if (null != value) {
          value.delete(screenIndex);
          if (0 === value.size) {
            map.delete(current2);
          }
          map1.delete(screenIndex);
        }
        const current = obj.current;
        let value2 = map.get(current);
        if (value2 == null) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          value2 = new Map();
        }
        const result = value2.set(screenIndex, obj);
        const result1 = map.set(current, value2);
        const result2 = map1.set(screenIndex, obj);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = map1.has(screenIndex);
        }
      }
    },
    unregister() {
      if (null != map) {
        const current = map.current;
        const value = map.get(current);
        if (null != value) {
          value.delete(screenIndex);
          if (0 === value.size) {
            map.delete(current);
          }
          map1.delete(screenIndex);
        }
      }
    }
  };
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
    } else if (obj.has("conjure-preview")) {
      return "conjure-preview";
    } else {
      const _Array = Array;
      const arr = Array.from(obj.keys());
      const found = arr.filter(f89369);
      if (0 !== found.length) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(items, found, 0);
        const _Math2 = Math;
        return HermesBuiltin.apply(max, items, Math);
      }
    }
  }
};
export const getChatInputRef = function getChatInputRef(id, screenIndex) {
  if (null != id) {
    const value = map.get(id);
    let current;
    if (value != null) {
      const value2 = value.get(screenIndex);
      if (value2 != null) {
        current = value2.current;
      }
    }
    return current;
  }
};
export const getBestActiveInputForChannelId = function getBestActiveInputForChannelId(id) {
  if (null != id) {
    const value = map.get(id);
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
              str = "conjure-preview";
              if (!obj2.has("conjure-preview")) {
                const _Array = Array;
                const arr = Array.from(obj2.keys());
                const found = arr.filter(f89369);
                if (0 !== found.length) {
                  const _Math = Math;
                  const items = [];
                  HermesBuiltin.arraySpread(items, found, 0);
                  const _Math2 = Math;
                  str = HermesBuiltin.apply(max, items, Math);
                }
              }
            }
          }
        }
      }
      let value2;
      if (null != str) {
        value2 = value.get(str);
      }
      let current;
      if (value2 != null) {
        current = value2.current;
      }
      return current;
    }
  }
};
export { getBestActiveInput };
export const dismissKeyboard = function dismissKeyboard() {
  const obj = KeyboardManagerUtils;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = getBestActiveInput();
  if (null != obj2) {
    obj2.closeCustomKeyboard();
  }
  const tmpResult = useKeyboardType;
  const keyboardType = tmpResult.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    const obj3 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
    const setKeyboardType = KeyboardUIStore.setKeyboardType;
    KeyboardUIStore;
    setKeyboardType(obj3);
  }
  const tmpResult4 = PortalKeyboardUIStore;
  const result1 = tmpResult4.closePortalKeyboardRequest();
};