// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx
import set from "../../../../../../../_runtime/00002_set.js";
import explicitContentFromProto from "../../../../../user_settings/UserSettings.tsx";
import ChannelListLayoutTypes2 from "../../../../ChannelListLayoutTypes.tsx";

function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return tmp(10203).CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (tmp(4171).ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return tmp(10203).CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (tmp(4171).ChannelListLayoutTypes.COMPACT === layout) {
    let tmpResult = tmp(10205);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (tmp(4171).ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = tmp(4171).ChannelListLayoutTypes.COZY;
    }
    tmpResult = tmp(10206);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COZY;
  }
}
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

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
    COZY = tmp(4171).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = tmp(4171).ChannelListLayoutTypes.COZY;
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