// === Module 4251: ActionSheetStore ===

// Module 4251 (ActionSheetStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const array = new Array();
let found = array;
let zIndex;
const QuickSwitcher = "QuickSwitcher";
function setContent(arg0) {

}
const Store = initializeDefault.Store;
class ActionSheetStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.getContent = function getContent() {
      const atResult = found.at(-1);
      let content;
      if (atResult != null) {
        content = atResult.content;
      }
      return content;
    };
    applyArgumentsResult.getStack = function getStack() {
      return found;
    };
    applyArgumentsResult.isOpen = function isOpen() {
      return found.length > 0;
    };
    applyArgumentsResult.getKey = function getKey() {
      const atResult = found.at(-1);
      let key;
      if (atResult != null) {
        key = atResult.key;
      }
      return key;
    };
    return applyArgumentsResult;
  }
}
const prototype = ActionSheetStore.prototype;
prototype["initialize"] = function initialize() {

};
Object.defineProperty(prototype, "impressionName", {
  get: function impressionName() {
    const atResult = found.at(-1);
    let impressionName;
    if (atResult != null) {
      impressionName = atResult.impressionName;
    }
    return impressionName;
  },
  set: undefined
});
Object.defineProperty(prototype, "impressionProperties", {
  get: function impressionProperties() {
    const atResult = found.at(-1);
    let impressionProperties;
    if (atResult != null) {
      impressionProperties = atResult.impressionProperties;
    }
    return impressionProperties;
  },
  set: undefined
});
Object.defineProperty(prototype, "backdropKind", {
  get: function backdropKind() {
    const atResult = found.at(-1);
    let backdropKind;
    if (atResult != null) {
      backdropKind = atResult.backdropKind;
    }
    return backdropKind;
  },
  set: undefined
});
ActionSheetStore.displayName = "ActionSheetStore";
const actionSheetStore = new ActionSheetStore(DispatcherDefault, {
  SHOW_ACTION_SHEET: function handleShowActionSheet(stackingBehavior) {
    if (typeof setContent === "function") {
      let str = stackingBehavior.stackingBehavior;
      ({ content, key, impressionName, impressionProperties, backdropKind } = stackingBehavior);
      if (str === undefined) {
        str = "replaceTopSheet";
      }
      let str2 = stackingBehavior.appEntryKey;
      if (str2 === undefined) {
        str2 = "main";
      }
      const obj = { content, key, impressionName, impressionProperties, backdropKind, appEntryKey: str2, zIndex };
      if ("replaceAll" === str) {
        const items = [obj];
        let combined = items;
      } else {
        if ("stack" === str) {
          if (tmp4) {
            const items1 = [];
            items1[HermesBuiltin.arraySpread(found, 0)] = obj;
            combined = items1;
          }
        }
        const substr = found.slice(0, -1);
        combined = substr.concat(obj);
      }
      found = combined;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  SHOW_ACTION_SHEET_QUICK_SWITCHER: function handleShowActionSheetQuickSwitcher(arg0) {
    let obj = { key: QuickSwitcher };
    const merged = Object.assign(arg0);
    if (typeof setContent === "function") {
      let str = obj.stackingBehavior;
      ({ content, key, impressionName, impressionProperties, backdropKind } = obj);
      if (str === undefined) {
        str = "replaceTopSheet";
      }
      let str2 = obj.appEntryKey;
      if (str2 === undefined) {
        str2 = "main";
      }
      obj = { content, key, impressionName, impressionProperties, backdropKind, appEntryKey: str2, zIndex };
      if ("replaceAll" === str) {
        const items = [obj];
        let combined = items;
      } else {
        if ("stack" === str) {
          if (tmp4) {
            const items1 = [];
            items1[HermesBuiltin.arraySpread(found, 0)] = obj;
            combined = items1;
          }
        }
        const substr = found.slice(0, -1);
        combined = substr.concat(obj);
      }
      found = combined;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  HIDE_ACTION_SHEET: function handleHideActionSheet(key) {
    key = key.key;
    if (null == key) {
      found = found.slice(0, -1);
    }
    found = found.filter((key) => key.key !== closure_0);
  },
  HIDE_ALL_ACTION_SHEETS: function handleHideAllActionSheets() {
    found = [];
  },
  HIDE_ACTION_SHEET_QUICK_SWITCHER: function handleHideActionSheetQuickSwitcher() {
    closure_0 = QuickSwitcher;
    if (null == QuickSwitcher) {
      found = found.slice(0, -1);
    }
    found = found.filter((key) => key.key !== closure_0);
  },
  SET_ACTION_SHEET_Z_INDEX: function handleSetActionSheetZIndex(zIndex) {
    zIndex = zIndex.zIndex;
  },
  RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY: function handleResetActionSheetsForAppEntryKey(appEntryKey) {
    appEntryKey = appEntryKey.appEntryKey;
    found = found.filter((appEntryKey) => appEntryKey.appEntryKey !== appEntryKey);
    if (found.length === found.length) {
      return false;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/action_sheet/native/ActionSheetStore.tsx");

export default actionSheetStore;