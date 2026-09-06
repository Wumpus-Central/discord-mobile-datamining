// discord_app/utils/native/ChatInputUtils.tsx
import KeyboardTypes from "../../modules/keyboard/native/KeyboardTypes.tsx";
import KeyboardManagerUtils from "KeyboardManagerUtils.tsx";
import ScreenIndexFrozen from "../../modules/channel/native/ScreenIndexFrozen.tsx";
import PortalKeyboardUIStore from "../../modules/keyboard/native/PortalKeyboardUIStore.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
          const found = Array.from(obj.keys()).filter((item) => {
            let tmp = typeof item === "number";
            if (typeof item === "number") {
              tmp = !ScreenIndexFrozen.isScreenIndexFrozen(item);
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
  value = undefined;
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
let result = size.fileFinishedImporting("utils/native/ChatInputUtils.tsx");

export function createInputRefTracker(id, screenIndex) {
  closure_0 = screenIndex;
  let obj = { current: id };
  obj = {
    handleRef(current, id) {
      obj.current = id;
      if (null == current) {
        if (null != obj) {
          value = map.get(id);
          if (null != value) {
            value.delete(tmp16);
            if (0 === value.size) {
              map.delete(id);
            }
            map1.delete(tmp16);
          }
          obj = null;
        }
      } else if (null == obj) {
        obj = { current };
        value = map.get(id);
        if (value == null) {
          const _Map = Map;
          value = new Map();
        }
        const result = value.set(tmp2, obj);
        const result1 = map.set(id, value);
        const result2 = map1.set(tmp2, obj);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = map1.has(tmp2);
        }
      } else {
        obj.current = current;
      }
    },
    register() {
      if (null != obj) {
        const current2 = obj.current;
        value = map.get(current2);
        if (null != value) {
          value.delete(tmp15);
          if (0 === value.size) {
            obj3.delete(current2);
          }
          map1.delete(tmp15);
        }
        const current = obj.current;
        value = obj3.get(current);
        if (value == null) {
          const _Map = Map;
          value = new Map();
        }
        const result = value.set(tmp15, tmp5);
        const result1 = obj3.set(current, value);
        const result2 = map1.set(tmp15, tmp5);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = obj2.has(tmp15);
        }
        obj2 = map1;
      }
    },
    unregister() {
      if (null != obj) {
        const current = obj.current;
        value = map.get(current);
        if (null != value) {
          value.delete(tmp2);
          if (0 === value.size) {
            obj.delete(current);
          }
          map1.delete(tmp2);
        }
      }
    },
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
      const found = Array.from(obj.keys()).filter((item) => {
        let tmp = typeof item === "number";
        if (typeof item === "number") {
          tmp = !ScreenIndexFrozen.isScreenIndexFrozen(item);
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
    value = map.get(id);
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
    value = map.get(channelId);
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
              const found = Array.from(obj2.keys()).filter((item) => {
                let tmp = typeof item === "number";
                if (typeof item === "number") {
                  tmp = !ScreenIndexFrozen.isScreenIndexFrozen(item);
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
  let obj = KeyboardManagerUtils;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = getBestActiveInput();
  if (null != obj2) {
    obj2.closeCustomKeyboard();
  }
  let tmpResult = tmp(4427);
  const keyboardType = tmpResult.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    tmpResult = tmp(1481);
    obj = { type: tmp(1609).KeyboardTypes.SYSTEM };
    tmpResult.setKeyboardType(obj);
  }
  const result1 = PortalKeyboardUIStore.closePortalKeyboardRequest();
};
