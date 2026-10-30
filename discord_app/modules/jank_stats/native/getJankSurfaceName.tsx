// === Module 18011: getJankSurfaceName ===

// Module 18011 (getJankSurfaceName)
import getJankScreenName from "getJankScreenName" /* 18006 */;
import NativeJankSessionModuleDefault from "NativeJankSessionModule" /* 18010 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5254 */;

require = fn;
function composeJankSurfaceName(getBaseScreenName) {
  const stack = ActionSheetStore.getStack();
  let diff = stack.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    while (true) {
      let appEntryKey = stack[diff].appEntryKey;
      if (appEntryKey == null) {
        appEntryKey = main;
      }
      if (appEntryKey === main) {
        break;
      } else {
        diff = diff - 1;
        tmp2 = null;
      }
    }
    let componentDisplayName = null;
    if (noop.isValidElement(tmp3.content)) {
      componentDisplayName = getJankScreenName.getComponentDisplayName(tmp3.content.type);
    }
    if (null == componentDisplayName) {
      let combined = React6;
    } else {
      let key = componentDisplayName;
      if (set.has(componentDisplayName)) {
        key = tmp3.key;
      }
      const _HermesInternal = HermesInternal;
      combined = "" + React6 + ":" + key;
    }
  }
  if (null != tmp2) {
    return tmp2;
  } else {
    const tmp29 = getBaseScreenName();
    if (obj4.isModalScreenName(tmp29)) {
      return tmp29;
    } else if (null != closure_11[closure_11.length - 1]) {
      if ("voice" !== tmp16) {
        const _HermesInternal4 = HermesInternal;
        let combined1 = "" + React5 + ":" + tmp16;
      } else {
        const _Array = Array;
        let arr2 = Array.from(map.values()).pop();
        if (arr2 == null) {
          arr2 = global;
        }
        if (null != arr2) {
          const _HermesInternal3 = HermesInternal;
          combined1 = "" + React5 + ":" + tmp16 + ":" + arr2;
        } else {
          const _HermesInternal2 = HermesInternal;
          combined1 = "" + React5 + ":" + tmp16;
        }
        const arr = Array.from(map.values());
      }
      return combined1;
    } else {
      let tmp18 = null;
      if (set1.size > 0) {
        tmp18 = hasOwnProperty;
      }
      if (tmp30Result.getChatLayout().isChatBesideChannelList) {
        const wideViewScreenName = getJankScreenName.getWideViewScreenName(tmp18);
        if (null != wideViewScreenName) {
          return wideViewScreenName;
        }
        const tmp30Result2 = getJankScreenName;
      }
      if (tmp18 == null) {
        tmp18 = tmp29;
      }
      return tmp18;
    }
    obj4 = getJankScreenName;
  }
}
const JankScreenConstants = fn(18007);
({ CHANNEL_DETAILS_SCREEN: hasOwnProperty, INTERACTION_NONE: metroRequire, PANEL_SURFACE: closure_7, SHEET_SURFACE: closure_8 } = JankScreenConstants);
const set = new Set(["SimpleActionSheet"]);
const main = "main";
let closure_11 = [];
const set1 = new Set();
const map = new Map();
let global = null;
let c15 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/getJankSurfaceName.tsx");

export { composeJankSurfaceName };
export function getJankSurfaceName() {
  return composeJankSurfaceName(getJankScreenName.getBaseScreenName);
}
export function recordJankChannelDetailsOpen(memo1, arg1) {
  let flag = arg1 !== set1.has(memo1);
  if (flag) {
    if (arg1) {
      set1.add(memo1);
      flag = true;
    } else {
      set1.delete(memo1);
      flag = true;
    }
  }
  return flag;
}
export function setJankChannelDetailsOpen(memo1, arg1) {
  let flag = arg1 !== set1.has(memo1);
  if (flag) {
    if (arg1) {
      set1.add(memo1);
      flag = true;
    } else {
      set1.delete(memo1);
      flag = true;
    }
  }
  if (flag) {
    const tmp6 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    NativeJankSessionModuleDefault.setScreenContext(tmp6, timestampProducer);
  }
}
export function setJankPanelOpen(activity, arg1) {
  const lastIndexOfResult = closure_11.lastIndexOf(activity);
  if (arg1 !== -1 !== lastIndexOfResult) {
    if (arg1) {
      closure_11.push(activity);
    } else {
      closure_11.splice(lastIndexOfResult, 1);
    }
    const tmp8 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    const obj = NativeJankSessionModuleDefault;
    if (arg1) {
      obj.setScreenContext(tmp8, timestampProducer);
    } else {
      obj.surfaceClosed(tmp8);
    }
  }
}
export function setJankVoicePanelTab(channelId, arg1) {
  value = map.get(channelId);
  if (value == null) {
    value = null;
  }
  if (value !== arg1) {
    if (null == arg1) {
      map.delete(channelId);
    } else {
      const result = map.set(channelId, arg1);
    }
    const tmp8 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    const obj2 = NativeJankSessionModuleDefault;
    if (tmp4) {
      obj2.surfaceClosed(tmp8);
    } else {
      obj2.setScreenContext(tmp8, timestampProducer);
    }
    tmp4 = null == arg1;
  }
}
export function setJankVoicePanelFocus(arg0) {
  if (arg0 !== global) {
    global = arg0;
    const tmp4 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    NativeJankSessionModuleDefault.setScreenContext(tmp4, timestampProducer);
  }
}
export function attachJankActionSheetReporter() {
  if (!c15) {
    c15 = true;
    ActionSheetStore.getStack().length;
    let stack = ActionSheetStore.getStack();
    importDefault = stack.at(-1);
    ActionSheetStore.addChangeListener(() => {
      const stack = ActionSheetStore.getStack();
      if (stack.length !== length) {
        const tmp8 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
        const obj = NativeJankSessionModuleDefault;
        if (tmp4) {
          obj.surfaceClosed(tmp8);
        } else {
          obj.setScreenContext(tmp8, timestampProducer);
        }
        tmp4 = stack.length < stack.length;
      }
      atResult = stack.at(-1);
    });
  }
}