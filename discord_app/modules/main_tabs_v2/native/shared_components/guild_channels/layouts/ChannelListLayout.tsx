// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx
import UserSettings from "../../../../../user_settings/UserSettings.tsx";
import ChannelListLayoutTypes2 from "../../../../ChannelListLayoutTypes.tsx";
import CozyDrawer from "layout/CozyDrawer.tsx";
import Compact from "layout/Compact.tsx";
import Cozy from "layout/Cozy.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

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
    let tmpResult = Compact;
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (ChannelListLayoutTypes2.ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY;
    }
    tmpResult = Cozy;
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COZY;
  }
}
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx",
);

export { getLayoutStyles };
export function makeSizeStyle(size) {
  size = { width: size, height: size };
  return size;
}
export const isLayoutCompact = function isLayoutCompact(layout) {
  return layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
};
export const isLayoutCozy = function isLayoutCozy(layout) {
  return (
    layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY ||
    layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER ||
    layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL
  );
};
export const useMessagesTabLayout = function useMessagesTabLayout(panelVariant) {
  const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
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
export const getScaledChannelRowHeight = function getScaledChannelRowHeight(fontScale, layout) {
  let flag = isThreadResult;
  if (isThreadResult === undefined) {
    flag = false;
  }
  const tmp = getLayoutStyles(layout);
  const container = tmp.container;
  const bound = Math.max(
    Math.max(fontScale, 1) *
      (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)),
    tmp.icon.wrapper.size,
  );
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
