// === Module 10121: ChannelListLayout ===

// Module 10121 (ChannelListLayout)
import UserSettings from "UserSettings" /* 1935 */;
import ChannelListLayoutTypes2 from "ChannelListLayoutTypes" /* 7879 */;
import size from "module_2" /* 2 */;

function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return tmp(10122).CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (tmp(7879).ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return tmp(10122).CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (tmp(7879).ChannelListLayoutTypes.COMPACT === layout) {
    let tmpResult = tmp(10124);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (tmp(7879).ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = tmp(7879).ChannelListLayoutTypes.COZY;
    }
    tmpResult = tmp(10125);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COZY;
  }
}
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export function makeSizeStyle(size) {
  size = { width: size, height: size };
  return size;
}
export const isLayoutCompact = function isLayoutCompact(layout) {
  return layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
};
export const isLayoutCozy = function isLayoutCozy(layout) {
  return layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY || layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER || layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
};
export const useMessagesTabLayout = function useMessagesTabLayout(panelVariant) {
  const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = ChannelListLayoutTypes2.ChannelListLayoutTypes;
  if (panelVariant) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = tmp(7879).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = tmp(7879).ChannelListLayoutTypes.COZY;
  }
  return COZY;
};
export const getScaledChannelRowHeight = function getScaledChannelRowHeight(arg0, layout) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = getLayoutStyles(layout);
  const container = tmp.container;
  const bound = Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size);
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