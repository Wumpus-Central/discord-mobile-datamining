// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx
function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (require("../../../../ChannelListLayoutTypes.tsx") /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return tmp(9712).CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (tmp(3963).ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return tmp(9712).CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (tmp(3963).ChannelListLayoutTypes.COMPACT === layout) {
    let tmpResult = tmp(9714);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (tmp(3963).ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = tmp(3963).ChannelListLayoutTypes.COZY;
    }
    tmpResult = tmp(9715);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COZY;
  }
}
let result = require("CHANNEL_LIST_STYLES_COMPACT").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export function makeSizeStyle(size) {
  return { width: size, height: size };
}
export const isLayoutCompact = function isLayoutCompact(closure_2) {
  return closure_2 === require("../../../../ChannelListLayoutTypes.tsx") /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
};
export const isLayoutCozy = function isLayoutCozy(layout) {
  return layout === require("../../../../ChannelListLayoutTypes.tsx") /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY || layout === require("../../../../ChannelListLayoutTypes.tsx") /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER || layout === require("../../../../ChannelListLayoutTypes.tsx") /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
};
export const useMessagesTabLayout = function useMessagesTabLayout(panelVariant) {
  const ChannelListLayoutSetting = require("../../../../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = require("../../../../ChannelListLayoutTypes.tsx") /* ChannelListLayoutTypes */.ChannelListLayoutTypes;
  if (panelVariant) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = tmp(3963).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = tmp(3963).ChannelListLayoutTypes.COZY;
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
  if (layout === require("../../../../ChannelListLayoutTypes.tsx") /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT) {
    num = 4;
  }
  return sum + result + num;
};