// discord_app/modules/premium/powerups/native/GuildPowerupsChannelRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
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
      const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
      return hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj2);
    } else if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD === type) {
      const obj = { value: indicator.count, isMentionLowImportance: true };
      return hasOwnProperty(native.Badge, obj);
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
const createStyles = fn(4638);
let obj2 = {
  container: {
    marginVertical: fn(10256).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  guildId = guildId.guildId;
  let dismissNewBadgeIfShown;
  const ref = noop.useRef(null);
  const tmp5 = dismissNewBadgeIfShown(12634)(guildId);
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
  const tmp6Result = dismissNewBadgeIfShown(12653)(guildId, tmp8);
  dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
  let showUnread;
  if (tmp5 != null) {
    showUnread = tmp5.showUnread;
  }
  const ChannelModes = guildId(12522).ChannelModes;
  if (true === showUnread) {
    let DEFAULT = ChannelModes.UNREAD_IMPORTANT;
    let tmp14 = tmp13;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp14 = tmp13;
  }
  const items = [guildId, dismissNewBadgeIfShown];
  const callback = noop.useCallback(() => {
    dismissNewBadgeIfShown();
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_CHANNEL_LIST_ROW };
    openGuildPowerupsModalDefault(obj);
  }, items);
  const obj2 = { ref, collapsable: false, children: null };
  const obj3 = { targetRef: ref, guildId, popout: null };
  let popout1;
  if (tmp5 != null) {
    popout1 = tmp5.popout;
  }
  obj3.popout = popout1;
  const items1 = [closure_5(GuildPowerupsCoachmark, obj3)];
  const obj4 = {
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
  const tmp6 = dismissNewBadgeIfShown(12653);
  const intl = tmp14(1115).intl;
  obj4.accessibilityLabel = intl.string(dismissNewBadgeIfShown(2429).yv3DJJ);
  obj4.accessibilityState = { selected: false };
  const obj5 = { name: null, mode: null };
  const intl2 = tmp14(1115).intl;
  obj5.name = intl2.string(dismissNewBadgeIfShown(2429).yv3DJJ);
  obj5.mode = DEFAULT;
  obj4.name = closure_5(tmp14(12522).BaseChannelName, obj5);
  const tmp3Result = dismissNewBadgeIfShown(12522);
  obj4.icon = closure_5(tmp14(12522).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp14(16348).BoostTier2Icon });
  if (tmp6Result.showNewBadgeOnRow) {
    let tmp16Result = closure_5(tmp14(12434).NewBadge, {});
  } else {
    let indicator1;
    if (tmp5 != null) {
      indicator1 = tmp5.indicator;
    }
    const obj7 = { indicator: indicator1 };
    tmp16Result = closure_5(GuildPowerupsChannelRowIndicator, obj7);
  }
  const obj8 = { zIndex: 1, children: null };
  obj4.channelInfo = tmp16Result;
  items1[1] = closure_5(tmp3Result, obj4);
  obj2.children = items1;
  obj8.children = closure_6(View, obj2);
  return closure_5(tmp14(7266).LayerScope, obj8);
}
