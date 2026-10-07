// === Module 15978: getJankSurfaceName ===

// Module 15978 (getJankSurfaceName)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import getJankScreenName from "getJankScreenName" /* 15973 */;
import NativeJankStatsModuleDefault from "NativeJankStatsModule" /* 15977 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4567 */;

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
      let combined = closure_1_8;
    } else {
      let key = componentDisplayName;
      if (set.has(componentDisplayName)) {
        key = tmp3.key;
      }
      const _HermesInternal = HermesInternal;
      combined = "" + closure_1_8 + ":" + key;
    }
  }
  if (null != tmp2) {
    return tmp2;
  } else {
    const tmp23 = getBaseScreenName();
    if (obj4.isModalScreenName(tmp23)) {
      return tmp23;
    } else if (null != closure_11[closure_11.length - 1]) {
      const _HermesInternal2 = HermesInternal;
      return "" + React5 + ":" + tmp16;
    } else {
      let tmp18 = null;
      if (set1.size > 0) {
        tmp18 = hasOwnProperty;
      }
      if (tmp24Result.getChatLayout().isChatBesideChannelList) {
        const wideViewScreenName = getJankScreenName.getWideViewScreenName(tmp18);
        if (null != wideViewScreenName) {
          return wideViewScreenName;
        }
        const tmp24Result2 = getJankScreenName;
      }
      if (tmp18 == null) {
        tmp18 = tmp23;
      }
      return tmp18;
    }
    obj4 = getJankScreenName;
  }
}
const JankScreenConstants = fn(15974);
({ CHANNEL_DETAILS_SCREEN: hasOwnProperty, INTERACTION_NONE: metroRequire, PANEL_SURFACE: closure_7, SHEET_SURFACE: closure_8 } = JankScreenConstants);
const set = new Set(["SimpleActionSheet"]);
const main = "main";
let closure_11 = [];
const set1 = new Set();
let c13 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/jank_stats/native/getJankSurfaceName.tsx");

export { composeJankSurfaceName };
export const getJankSurfaceName = function getJankSurfaceName() {
  return composeJankSurfaceName(getJankScreenName.getBaseScreenName);
};
export const recordJankChannelDetailsOpen = function recordJankChannelDetailsOpen(memo1, arg1) {
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
};
export const setJankChannelDetailsOpen = function setJankChannelDetailsOpen(constants, arg1) {
  let flag = arg1 !== set1.has(constants);
  if (flag) {
    if (arg1) {
      set1.add(constants);
      flag = true;
    } else {
      set1.delete(constants);
      flag = true;
    }
  }
  if (flag) {
    const obj2 = NativeJankStatsModuleDefault;
    if (obj2 != null) {
      obj2.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), timestampProducer);
    }
  }
};
export const setJankPanelOpen = function setJankPanelOpen(activity, arg1) {
  const lastIndexOfResult = closure_11.lastIndexOf(activity);
  if (arg1 !== -1 !== lastIndexOfResult) {
    if (arg1) {
      closure_11.push(activity);
    } else {
      closure_11.splice(lastIndexOfResult, 1);
    }
    const obj = NativeJankStatsModuleDefault;
    if (obj != null) {
      obj.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), timestampProducer);
    }
  }
};
export const attachJankActionSheetReporter = function attachJankActionSheetReporter() {
  let isAndroidResult = !c13;
  if (!c13) {
    isAndroidResult = PlatformUtils.isAndroid();
  }
  if (isAndroidResult) {
    c13 = true;
    ActionSheetStore.addChangeListener(() => {
      const obj = NativeJankStatsModuleDefault;
      if (obj != null) {
        obj.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), closure_1_6);
      }
    });
  }
};