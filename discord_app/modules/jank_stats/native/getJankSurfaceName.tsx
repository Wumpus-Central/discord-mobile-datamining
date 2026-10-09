// discord_app/modules/jank_stats/native/getJankSurfaceName.tsx
import getJankScreenName from "getJankScreenName.tsx";
import NativeJankStatsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";

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
const JankScreenConstants = fn(16353);
({
  CHANNEL_DETAILS_SCREEN: hasOwnProperty,
  INTERACTION_NONE: metroRequire,
  PANEL_SURFACE: closure_7,
  SHEET_SURFACE: closure_8,
} = JankScreenConstants);
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
      obj2.setScreenContext(tmp6, timestampProducer);
    }
    tmp6 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
  }
};
export const setJankPanelOpen = function setJankPanelOpen(activity, arg1) {
  const lastIndexOfResult = closure_11.lastIndexOf(activity);
  if ((arg1 !== -1) !== lastIndexOfResult) {
    if (arg1) {
      closure_11.push(activity);
    } else {
      closure_11.splice(lastIndexOfResult, 1);
    }
    const tmp8 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    const obj = NativeJankStatsModuleDefault;
    if (arg1) {
      if (obj != null) {
        obj.setScreenContext(tmp8, timestampProducer);
      }
    } else if (obj != null) {
      obj.surfaceClosed(tmp8);
    }
  }
};
export const setJankVoicePanelTab = function setJankVoicePanelTab(channelId, arg1) {
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
    const obj2 = NativeJankStatsModuleDefault;
    if (tmp4) {
      if (obj2 != null) {
        obj2.surfaceClosed(tmp8);
      }
    } else if (obj2 != null) {
      obj2.setScreenContext(tmp8, timestampProducer);
    }
    tmp4 = null == arg1;
  }
};
export const setJankVoicePanelFocus = function setJankVoicePanelFocus(arg0) {
  if (arg0 !== global) {
    global = arg0;
    const obj = NativeJankStatsModuleDefault;
    if (obj != null) {
      obj.setScreenContext(tmp4, timestampProducer);
    }
    tmp4 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
  }
};
export const attachJankActionSheetReporter = function attachJankActionSheetReporter() {
  if (!c15) {
    if (obj.isAndroid()) {
      c15 = true;
      let length = ActionSheetStore.getStack().length;
      ActionSheetStore.addChangeListener(() => {
        length = ActionSheetStore.getStack().length;
        const tmp2 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
        const obj = NativeJankStatsModuleDefault;
        if (tmp) {
          if (obj != null) {
            obj.surfaceClosed(tmp2);
          }
        } else if (obj != null) {
          obj.setScreenContext(tmp2, timestampProducer);
        }
        tmp = length < length;
      });
    }
    obj = length(1382);
  }
};
