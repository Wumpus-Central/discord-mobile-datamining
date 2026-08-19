// === Module 10056: getLayoutStyles ===

// Module 10056 (getLayoutStyles)
import obj132 from "obj132" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import ChannelListLayoutTypes2 from "ChannelListLayoutTypes" /* 4071 */;
import importDefaultResult1 from "importDefaultResult1" /* 10057 */;
import CHANNEL_LIST_STYLES_COMPACT from "CHANNEL_LIST_STYLES_COMPACT" /* 10059 */;
import CHANNEL_LIST_STYLES_COZY from "CHANNEL_LIST_STYLES_COZY" /* 10060 */;

function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return importDefaultResult1.CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return importDefaultResult1.CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT === layout) {
    let tmpResult = CHANNEL_LIST_STYLES_COMPACT;
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (ChannelListLayoutTypes2.ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY;
    }
    tmpResult = CHANNEL_LIST_STYLES_COZY;
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COZY;
  }
}
let result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export function makeSizeStyle(size) {
  return { width: size, height: size };
}
export const isLayoutCompact = function isLayoutCompact(closure_1_6) {
  return closure_1_6 === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
};
export const isLayoutCozy = function isLayoutCozy(layout) {
  return layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY || layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER || layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
};
export const useMessagesTabLayout = function useMessagesTabLayout(panelVariant) {
  const ChannelListLayoutSetting = explicitContentFromProto.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = ChannelListLayoutTypes2.ChannelListLayoutTypes;
  if (panelVariant) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY;
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