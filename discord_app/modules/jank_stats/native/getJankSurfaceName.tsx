// === Module 15978: getJankSurfaceName ===

// Module 15978 (getJankSurfaceName)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useChatLayout from "useChatLayout" /* 4745 */;
import getJankScreenName from "getJankScreenName" /* 15973 */;
import react_nativeDefault from "react-native" /* 15977 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4567 */;
import JankScreenConstants from "JankScreenConstants" /* 15974 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function composeJankSurfaceName(getBaseScreenName) {
  const stack = ActionSheetStore.getStack();
  let diff = stack.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    let combined;
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
    if (react.isValidElement(tmp3.content)) {
      const obj = getJankScreenName;
      componentDisplayName = obj.getComponentDisplayName(tmp3.content.type);
    }
    if (null == componentDisplayName) {
      combined = metroImportAll;
    } else {
      let key = componentDisplayName;
      if (set.has(componentDisplayName)) {
        key = tmp3.key;
      }
      const _HermesInternal = HermesInternal;
      combined = "" + metroImportAll + ":" + key;
    }
    tmp2 = combined;
  }
  if (null != tmp2) {
    return tmp2;
  } else {
    const tmp22 = getBaseScreenName();
    const obj4 = getJankScreenName;
    if (obj4.isModalScreenName(tmp22)) {
      return tmp22;
    } else if (null != closure_11[closure_11.length - 1]) {
      const _HermesInternal2 = HermesInternal;
      return "" + metroImportDefault + ":" + closure_11[closure_11.length - 1];
    } else {
      let tmp17 = null;
      if (set1.size > 0) {
        tmp17 = hasOwnProperty;
      }
      const tmp23Result = useChatLayout;
      if (tmp23Result.getChatLayout().isChatBesideChannelList) {
        const tmp23Result2 = getJankScreenName;
        const wideViewScreenName = tmp23Result2.getWideViewScreenName(tmp17);
        if (null != wideViewScreenName) {
          return wideViewScreenName;
        }
      }
      if (tmp17 == null) {
        tmp17 = tmp22;
      }
      return tmp17;
    }
  }
}
({ CHANNEL_DETAILS_SCREEN: hasOwnProperty, INTERACTION_NONE: metroRequire, PANEL_SURFACE: metroImportDefault, SHEET_SURFACE: metroImportAll } = JankScreenConstants);
const set = new Set(["SimpleActionSheet"]);
const main = "main";
let closure_11 = [];
const set1 = new Set();
let c13 = false;
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
    const obj2 = react_nativeDefault;
    if (obj2 != null) {
      obj2.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), metroRequire);
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
    const obj = react_nativeDefault;
    if (obj != null) {
      obj.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), metroRequire);
    }
  }
};
export const attachJankActionSheetReporter = function attachJankActionSheetReporter() {
  let isAndroidResult = !c13;
  if (isAndroidResult) {
    let obj = PlatformUtils;
    isAndroidResult = obj.isAndroid();
  }
  if (isAndroidResult) {
    c13 = true;
    ActionSheetStore.addChangeListener(() => {
      const obj = react_nativeDefault;
      if (obj != null) {
        obj.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), closure_1_6);
      }
    });
  }
};