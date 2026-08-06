// discord_app/modules/premium/powerups/native/GuildPowerupsChannelRow.tsx
import messagesProxy from "messagesProxy";
import { View } from "Layer";
import jsxProd from "renderChannelBadge";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { add } from "../../../../design/components/Layers/native/LayerContext.native.tsx";
import { SidebarCoachmarkOverlayLayer } from "../../../main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx";
import { GUILD_POWERUP_NOTIFICATION_COOLDOWN } from "../constants/GuildPowerupsNotification.tsx";
import { useGuildPowerupsCoachmark } from "hooks/useGuildPowerupsCoachmark.tsx";

let c5;
let closure_6;
const require = arg1;
function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (GUILD_POWERUP_NOTIFICATION_COOLDOWN.GuildPowerupNotificationIndicatorType.WARNING === type) {
      let obj = { color: null, size: "sm" };
      obj[0] = Themes.colors.STATUS_WARNING;
      return callback(tmp4(7716).CircleErrorIcon, obj);
    } else if (tmp4(11774).GuildPowerupNotificationIndicatorType.UNREAD === type) {
      obj = { value: null, isMentionLowImportance: true };
      obj[0] = indicator.count;
      return callback(tmp4(1297).Badge, obj);
    } else {
      return null;
    }
  }
}
function GuildPowerupsCoachmarkHost(arg0) {
  let guildId;
  let popout;
  let targetRef;
  ({ targetRef, guildId, popout } = arg0);
  useGuildPowerupsCoachmark(targetRef, guildId, popout);
  return null;
}
function GuildPowerupsCoachmark(arg0) {
  let guildId;
  let popout;
  let targetRef;
  ({ targetRef, guildId, popout } = arg0);
  const context = React.useContext(SidebarCoachmarkOverlayLayer.SidebarCoachmarkOverlayContext);
  const tmp5 = callback(GuildPowerupsCoachmarkHost, { targetRef, guildId, popout });
  let tmp4Result = tmp5;
  if (null != context) {
    const obj = { value: null, children: null };
    obj[0] = context;
    obj[1] = tmp5;
    tmp4Result = callback(add.LayerContext.Provider, obj);
  }
  return tmp4Result;
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("hairlineWidth").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  guildId = guildId.guildId;
  let dismissNewBadgeIfShown;
  let obj = React;
  const ref = React.useRef(null);
  const tmp5 = dismissNewBadgeIfShown(11770)(guildId);
  let indicator;
  const tmp = createCacheKey();
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
  const tmp6Result = dismissNewBadgeIfShown(11789)(guildId, tmp8);
  dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
  let showUnread;
  if (tmp5 != null) {
    showUnread = tmp5.showUnread;
  }
  const ChannelModes = guildId(11671).ChannelModes;
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
    const obj = { guildId, analyticsLocation: null };
    obj[1] = dismissNewBadgeIfShown(outer1_2[16]).GUILD_POWERUPS_CHANNEL_LIST_ROW;
    dismissNewBadgeIfShown(outer1_2[15])(obj);
  }, items);
  obj = { ref, collapsable: false, children: null };
  obj = { targetRef: ref, guildId, popout: null };
  let popout1;
  if (tmp5 != null) {
    popout1 = tmp5.popout;
  }
  obj[2] = popout1;
  const items1 = [closure_5(GuildPowerupsCoachmark, obj), ];
  const obj1 = { onPress: callback, style: tmp.container, accessible: true, mode: DEFAULT, unread: true === showUnread, accessibilityLabel: null, accessibilityState: null, name: null, icon: null, channelInfo: null };
  const tmp17 = closure_6;
  const tmp18 = View;
  const tmp19 = GuildPowerupsCoachmark;
  const tmp6 = dismissNewBadgeIfShown(11789);
  const intl = tmp14(1236).intl;
  obj1[5] = intl.string(dismissNewBadgeIfShown(2316).yv3DJJ);
  obj1[6] = { selected: false };
  const obj2 = { name: null, mode: null };
  const intl2 = tmp14(1236).intl;
  obj2[0] = intl2.string(dismissNewBadgeIfShown(2316).yv3DJJ);
  obj2[1] = DEFAULT;
  obj1[7] = closure_5(tmp14(11671).BaseChannelName, obj2);
  const obj3 = { mode: DEFAULT, IconComponent: null };
  obj3[1] = tmp14(15237).BoostTier2Icon;
  obj1[8] = closure_5(tmp14(11671).BaseChannelIcon, obj3);
  if (tmp6Result.showNewBadgeOnRow) {
    let tmp16Result = tmp16(tmp14(11581).NewBadge, {});
  } else {
    let indicator1;
    if (tmp5 != null) {
      indicator1 = tmp5.indicator;
    }
    const obj4 = { indicator: null };
    obj4[0] = indicator1;
    tmp16Result = tmp16(GuildPowerupsChannelRowIndicator, obj4);
    const tmp22 = GuildPowerupsChannelRowIndicator;
  }
  const obj5 = { zIndex: 1, children: null };
  obj1[9] = tmp16Result;
  items1[1] = closure_5(dismissNewBadgeIfShown(11671), obj1);
  obj[2] = items1;
  obj5[1] = tmp17(tmp18, obj);
  return closure_5(tmp14(5636).LayerScope, obj5);
};