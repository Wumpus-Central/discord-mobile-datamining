// discord_app/modules/premium/powerups/native/GuildPowerupsChannelRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LayerContext from "../../../../design/components/Layers/native/LayerContext.native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openGuildPowerupsModalDefault from "utils/openGuildPowerupsModal.tsx";
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import SidebarCoachmarkOverlay from "../../../main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx";
import useGuildPowerupsCoachmarkDefault from "hooks/useGuildPowerupsCoachmark.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING === type) {
      let obj = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
      return hasOwnProperty(tmp4(6610).CircleErrorIcon, obj);
    } else if (tmp4(12495).GuildPowerupNotificationIndicatorType.UNREAD === type) {
      obj = { value: indicator.count, isMentionLowImportance: true };
      return hasOwnProperty(tmp4(1178).Badge, obj);
    } else {
      return null;
    }
  }
}
function GuildPowerupsCoachmarkHost(arg0) {
  ({ targetRef, guildId, popout } = arg0);
  useGuildPowerupsCoachmarkDefault(targetRef, guildId, popout);
  return null;
}
function GuildPowerupsCoachmark(arg0) {
  ({ targetRef, guildId, popout } = arg0);
  const context = noop.useContext(SidebarCoachmarkOverlay.SidebarCoachmarkOverlayContext);
  const tmp5 = hasOwnProperty(GuildPowerupsCoachmarkHost, { targetRef, guildId, popout });
  let tmp4Result = tmp5;
  if (null != context) {
    const obj = { value: context, children: tmp5 };
    tmp4Result = hasOwnProperty(LayerContext.LayerContext.Provider, obj);
  }
  return tmp4Result;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = {
  marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
createStyles.container = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  guildId = guildId.guildId;
  let dismissNewBadgeIfShown;
  let obj = noop;
  const ref = noop.useRef(null);
  const tmp5 = dismissNewBadgeIfShown(12491)(guildId);
  let indicator;
  const tmp = closure_8();
  if (tmp5 != null) {
    indicator = tmp5.indicator;
  }
  let tmp8 = null != indicator;
  if (!tmp8) {
    let popout;
    if (tmp5 != null) {
      popout = tmp5.popout;
    }
    tmp8 = null != popout;
  }
  const tmp6Result = dismissNewBadgeIfShown(12510)(guildId, tmp8);
  dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
  let showUnread;
  if (tmp5 != null) {
    showUnread = tmp5.showUnread;
  }
  const ChannelModes = guildId(12379).ChannelModes;
  if (true === showUnread) {
    let DEFAULT = ChannelModes.UNREAD_IMPORTANT;
    let tmp14 = tmp13;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp14 = tmp13;
  }
  const items = [guildId, dismissNewBadgeIfShown];
  const callback = obj.useCallback(() => {
    dismissNewBadgeIfShown();
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_CHANNEL_LIST_ROW };
    openGuildPowerupsModalDefault(obj);
  }, items);
  obj = { ref, collapsable: false, children: null };
  obj = { targetRef: ref, guildId, popout: null };
  let popout1;
  if (tmp5 != null) {
    popout1 = tmp5.popout;
  }
  obj.popout = popout1;
  const items1 = [closure_5(GuildPowerupsCoachmark, obj)];
  const obj1 = {
    onPress: callback,
    style: tmp.container,
    accessible: true,
    mode: DEFAULT,
    unread: true === showUnread,
    accessibilityLabel: null,
    accessibilityState: null,
    name: null,
    icon: null,
    channelInfo: null,
  };
  const tmp17 = closure_6;
  const tmp18 = View;
  const tmp6 = dismissNewBadgeIfShown(12510);
  const intl = tmp14(1114).intl;
  obj1.accessibilityLabel = intl.string(dismissNewBadgeIfShown(2428).yv3DJJ);
  obj1.accessibilityState = { selected: false };
  const obj2 = { name: null, mode: null };
  const intl2 = tmp14(1114).intl;
  obj2.name = intl2.string(dismissNewBadgeIfShown(2428).yv3DJJ);
  obj2.mode = DEFAULT;
  obj1.name = closure_5(tmp14(12379).BaseChannelName, obj2);
  const tmp3Result = dismissNewBadgeIfShown(12379);
  obj1.icon = closure_5(tmp14(12379).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp14(16218).BoostTier2Icon });
  if (tmp6Result.showNewBadgeOnRow) {
    let tmp16Result = tmp16(tmp14(12291).NewBadge, {});
  } else {
    let indicator1;
    if (tmp5 != null) {
      indicator1 = tmp5.indicator;
    }
    const obj4 = { indicator: indicator1 };
    tmp16Result = tmp16(GuildPowerupsChannelRowIndicator, obj4);
  }
  const obj5 = { zIndex: 1, children: null };
  obj1.channelInfo = tmp16Result;
  items1[1] = closure_5(tmp3Result, obj1);
  obj.children = items1;
  obj5.children = tmp17(tmp18, obj);
  return closure_5(tmp14(7156).LayerScope, obj5);
}
