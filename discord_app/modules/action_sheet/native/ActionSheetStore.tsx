// discord_app/modules/action_sheet/native/ActionSheetStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let array = new Array();
let c1;
const QuickSwitcher = "QuickSwitcher";
function setContent(arg0) {

}
const Store = initializeDefault.Store;
class ActionSheetStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.getContent = function getContent() {
      const atResult = closure_0.at(-1);
      let content;
      if (atResult != null) {
        content = atResult.content;
      }
      return content;
    };
    applyArgumentsResult.getStack = function getStack() {
      return closure_0;
    };
    applyArgumentsResult.isOpen = function isOpen() {
      return closure_0.length > 0;
    };
    applyArgumentsResult.getKey = function getKey() {
      const atResult = closure_0.at(-1);
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
const actionSheetStore = new ActionSheetStore(dispatcherDefault, {
  SHOW_ACTION_SHEET: function handleShowActionSheet(stackingBehavior) {
    if (typeof setContent !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let str = stackingBehavior.stackingBehavior;
    ({ content, key, impressionName, impressionProperties, backdropKind } = stackingBehavior);
    if (str === undefined) {
      str = "replaceTopSheet";
    }
    let str2 = stackingBehavior.appEntryKey;
    if (str2 === undefined) {
      str2 = "main";
    }
    const obj = { content, key, impressionName, impressionProperties, backdropKind, appEntryKey: str2, zIndex: c1 };
    if ("replaceAll" === str) {
      const items = [obj];
      let combined = items;
    } else {
      if ("stack" === str) {
        if (tmp) {
          const items1 = [];
          items1[HermesBuiltin.arraySpread(combined, 0)] = obj;
          combined = items1;
        }
      }
      const substr = combined.slice(0, -1);
      combined = substr.concat(obj);
    }
  },
  SHOW_ACTION_SHEET_QUICK_SWITCHER: function handleShowActionSheetQuickSwitcher(arg0) {
    let obj = { key: QuickSwitcher };
    const merged = Object.assign(arg0);
    if (typeof setContent !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let str = obj.stackingBehavior;
    ({ content, key, impressionName, impressionProperties, backdropKind } = obj);
    if (str === undefined) {
      str = "replaceTopSheet";
    }
    let str2 = obj.appEntryKey;
    if (str2 === undefined) {
      str2 = "main";
    }
    obj = { content, key, impressionName, impressionProperties, backdropKind, appEntryKey: str2, zIndex: c1 };
    if ("replaceAll" === str) {
      const items = [obj];
      let combined = items;
    } else {
      if ("stack" === str) {
        if (tmp2) {
          const items1 = [];
          items1[HermesBuiltin.arraySpread(combined, 0)] = obj;
          combined = items1;
        }
      }
      const substr = combined.slice(0, -1);
      combined = substr.concat(obj);
    }
  },
  HIDE_ACTION_SHEET: function handleHideActionSheet(key) {
    array = key;
    if (null == key.key) {
      array = array.slice(0, -1);
    }
    array = array.filter((key) => key.key !== closure_0);
  },
  HIDE_ALL_ACTION_SHEETS: function handleHideAllActionSheets() {
    closure_0 = [];
  },
  HIDE_ACTION_SHEET_QUICK_SWITCHER: function handleHideActionSheetQuickSwitcher() {
    array = QuickSwitcher;
    if (null == QuickSwitcher) {
      array = array.slice(0, -1);
    }
    array = array.filter((key) => key.key !== closure_0);
  },
  SET_ACTION_SHEET_Z_INDEX: function handleSetActionSheetZIndex(zIndex) {
    zIndex = zIndex.zIndex;
  },
  RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY: function handleResetActionSheetsForAppEntryKey(appEntryKey) {
    let found = appEntryKey.appEntryKey;
    found = found.filter((appEntryKey) => appEntryKey.appEntryKey !== found);
    if (found.length === found.length) {
      return false;
    }
  }
});
const result = require("set").fileFinishedImporting("modules/action_sheet/native/ActionSheetStore.tsx");

export default actionSheetStore;