// === Module 4567: ActionSheetStore ===

// Module 4567 (ActionSheetStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let array = new Array();
let zIndex;
const QuickSwitcher = "QuickSwitcher";
function setContent(arg0) {

}
const Store = get_initializedDefault.Store;
class ActionSheetStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.getContent = function getContent() {
      const atResult = array.at(-1);
      let content;
      if (atResult != null) {
        content = atResult.content;
      }
      return content;
    };
    applyArgumentsResult.getStack = function getStack() {
      return array;
    };
    applyArgumentsResult.isOpen = function isOpen() {
      return array.length > 0;
    };
    applyArgumentsResult.getKey = function getKey() {
      const atResult = array.at(-1);
      let key;
      if (atResult != null) {
        key = atResult.key;
      }
      return key;
    };
    return applyArgumentsResult;
  }
  initialize() {

  }
}
const prototype = ActionSheetStore.prototype;
Object.defineProperty(prototype, "impressionName", {
  get: function impressionName() {
    const atResult = array.at(-1);
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
    const atResult = array.at(-1);
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
    const atResult = array.at(-1);
    let backdropKind;
    if (atResult != null) {
      backdropKind = atResult.backdropKind;
    }
    return backdropKind;
  },
  set: undefined
});
ActionSheetStore.displayName = "ActionSheetStore";
let obj = {
  SHOW_ACTION_SHEET: function handleShowActionSheet(stackingBehavior) {
    let backdropKind;
    let content;
    let impressionName;
    let impressionProperties;
    let key;
    if (typeof setContent === "function") {
      let combined;
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
        combined = items;
      } else {
        if ("stack" === str) {
          if (tmp5) {
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items1, array, 0)] = obj;
            combined = items1;
          }
        }
        const substr = array.slice(0, -1);
        combined = substr.concat(obj);
      }
      array = combined;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  SHOW_ACTION_SHEET_QUICK_SWITCHER: function handleShowActionSheetQuickSwitcher(arg0) {
    let backdropKind;
    let content;
    let impressionName;
    let impressionProperties;
    let key;
    const obj = { key: QuickSwitcher };
    const merged = Object.assign(arg0);
    if (typeof setContent === "function") {
      let combined;
      let str = obj.stackingBehavior;
      ({ content, key, impressionName, impressionProperties, backdropKind } = obj);
      if (str === undefined) {
        str = "replaceTopSheet";
      }
      let str2 = obj.appEntryKey;
      if (str2 === undefined) {
        str2 = "main";
      }
      const obj2 = { content, key, impressionName, impressionProperties, backdropKind, appEntryKey: str2, zIndex };
      if ("replaceAll" === str) {
        const items = [obj2];
        combined = items;
      } else {
        if ("stack" === str) {
          if (tmp5) {
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items1, array, 0)] = obj2;
            combined = items1;
          }
        }
        const substr = array.slice(0, -1);
        combined = substr.concat(obj2);
      }
      array = combined;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  HIDE_ACTION_SHEET: function handleHideActionSheet(key) {
    if (null == key.key) {
      array = array.slice(0, -1);
    }
    array = array.filter((key) => key.key !== closure_0);
  },
  HIDE_ALL_ACTION_SHEETS: function handleHideAllActionSheets() {
    array = [];
  },
  HIDE_ACTION_SHEET_QUICK_SWITCHER: function handleHideActionSheetQuickSwitcher() {
    let closure_0 = QuickSwitcher;
    if (null == QuickSwitcher) {
      array = array.slice(0, -1);
    }
    array = array.filter((key) => key.key !== closure_0);
  },
  SET_ACTION_SHEET_Z_INDEX: function handleSetActionSheetZIndex(zIndex) {
    zIndex = zIndex.zIndex;
  },
  RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY: function handleResetActionSheetsForAppEntryKey(appEntryKey) {
    appEntryKey = appEntryKey.appEntryKey;
    const found = array.filter((appEntryKey) => appEntryKey.appEntryKey !== appEntryKey);
    if (found.length === array.length) {
      return false;
    } else {
      array = found;
    }
  }
};
const actionSheetStore = new ActionSheetStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/action_sheet/native/ActionSheetStore.tsx");

export default actionSheetStore;