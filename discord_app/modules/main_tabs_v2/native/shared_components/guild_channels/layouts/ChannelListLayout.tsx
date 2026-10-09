// === Module 11714: ChannelListLayout ===

// Module 11714 (ChannelListLayout)
import UserSettings from "UserSettings" /* 2041 */;
import ChannelListLayoutTypes2 from "ChannelListLayoutTypes" /* 9286 */;
import CozyDrawer from "CozyDrawer" /* 11715 */;
import Compact from "Compact" /* 11717 */;
import Cozy from "Cozy" /* 11718 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getLayoutStyles(layout) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return CozyDrawer.CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return CozyDrawer.CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT === layout) {
    const tmpResult = Compact;
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (ChannelListLayoutTypes2.ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY;
    }
    const tmpResult2 = Cozy;
    return flag ? tmpResult2.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult2.CHANNEL_LIST_STYLES_COZY;
  }
}
function isLayoutCompact(messagesTabLayout) {
  return messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
}
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export function makeSizeStyle(size) {
  size = { width: size, height: size };
  return size;
}
export { isLayoutCompact };
export const isLayoutCozy = function isLayoutCozy(messagesTabLayout) {
  return messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY || messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER || messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
};
export const useMessagesTabLayout = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessagesTabLayout(arg0) {
  const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = ChannelListLayoutTypes2.ChannelListLayoutTypes;
  if (arg0) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY;
  }
  return COZY;
}) : (function useMessagesTabLayout(arg0) {
  const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = ChannelListLayoutTypes2.ChannelListLayoutTypes;
  if (arg0) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY;
  }
  return COZY;
});
export const getScaledChannelRowHeight = function getScaledChannelRowHeight(fontScale, layout) {
  let flag = isThreadResult;
  if (isThreadResult === undefined) {
    flag = false;
  }
  const tmp = getLayoutStyles(layout);
  const container = tmp.container;
  const bound = Math.max(Math.max(fontScale, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size);
  if (flag) {
    let paddingVertical = container.paddingThread.paddingVertical;
  } else {
    paddingVertical = container.padding.paddingVertical;
  }
  layout = tmp.layout;
  const sum = bound + 2 * paddingVertical;
  if (flag) {
    let marginVertical = layout.marginThread.marginVertical;
  } else {
    marginVertical = layout.margin.marginVertical;
  }
  const result = 2 * marginVertical;
  let num = 0;
  if (layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT) {
    num = 4;
  }
  return sum + result + num;
};