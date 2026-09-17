// discord_app/modules/jank_stats/native/getJankSurfaceName.tsx
import useChatLayout from "../../chat/native/useChatLayout.tsx";
import getJankScreenName from "getJankScreenName.tsx";
import NativeJankStatsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx";
import JankScreenConstants from "JankScreenConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ CHANNEL_DETAILS_SCREEN: c3, INTERACTION_NONE: closure_4 } = JankScreenConstants);
const set = new Set();
const result = size.fileFinishedImporting("modules/jank_stats/native/getJankSurfaceName.tsx");

export const composeJankSurfaceName = function composeJankSurfaceName(resolveClosedName) {
  const tmp = resolveClosedName();
  if (obj.isModalScreenName(tmp)) {
    return tmp;
  } else {
    let tmp6 = null;
    if (set.size > 0) {
      tmp6 = React3;
    }
    if (tmp2Result.getChatLayout().isChatBesideChannelList) {
      const wideViewScreenName = getJankScreenName.getWideViewScreenName(tmp6);
      if (null != wideViewScreenName) {
        return wideViewScreenName;
      }
      const tmp2Result2 = getJankScreenName;
    }
    if (tmp6 == null) {
      tmp6 = tmp;
    }
    return tmp6;
  }
  obj = getJankScreenName;
};
export const getJankSurfaceName = function getJankSurfaceName() {
  const baseScreenName = getJankScreenName.getBaseScreenName();
  let wideViewScreenName = baseScreenName;
  if (!obj.isModalScreenName(baseScreenName)) {
    let tmp7 = null;
    if (set.size > 0) {
      tmp7 = React3;
    }
    if (!tmpResult.getChatLayout().isChatBesideChannelList) {
      if (tmp7 == null) {
        tmp7 = baseScreenName;
      }
      wideViewScreenName = tmp7;
    } else {
      wideViewScreenName = getJankScreenName.getWideViewScreenName(tmp7);
      const tmpResult2 = getJankScreenName;
    }
    tmpResult = useChatLayout;
  }
  return wideViewScreenName;
};
export const recordJankChannelDetailsOpen = function recordJankChannelDetailsOpen(memo1, arg1) {
  let flag = arg1 !== set.has(memo1);
  if (flag) {
    if (arg1) {
      set.add(memo1);
      flag = true;
    } else {
      set.delete(memo1);
      flag = true;
    }
  }
  return flag;
};
export const setJankChannelDetailsOpen = function setJankChannelDetailsOpen(memo1, arg1) {
  let flag = arg1 !== set.has(memo1);
  if (flag) {
    if (arg1) {
      set.add(memo1);
      flag = true;
    } else {
      set.delete(memo1);
      flag = true;
    }
  }
  if (flag) {
    const obj2 = NativeJankStatsModuleDefault;
    if (obj2 != null) {
      const baseScreenName = getJankScreenName.getBaseScreenName();
      let wideViewScreenName = baseScreenName;
      if (!obj5.isModalScreenName(baseScreenName)) {
        let tmp6 = null;
        if (set.size > 0) {
          tmp6 = React3;
        }
        if (!tmp10Result.getChatLayout().isChatBesideChannelList) {
          if (tmp6 == null) {
            tmp6 = baseScreenName;
          }
          wideViewScreenName = tmp6;
        } else {
          wideViewScreenName = getJankScreenName.getWideViewScreenName(tmp6);
          const tmp10Result2 = getJankScreenName;
        }
        tmp10Result = useChatLayout;
      }
      obj2.setScreenContext(wideViewScreenName, React4);
      obj5 = getJankScreenName;
    }
  }
};
