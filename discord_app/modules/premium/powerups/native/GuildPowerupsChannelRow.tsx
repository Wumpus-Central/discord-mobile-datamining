// === Module 15575: GuildPowerupsChannelRowIndicator ===

// Module 15575 (GuildPowerupsChannelRowIndicator)
import ThemesDefault from "Themes" /* 712 */;
import add from "add" /* 5823 */;
import GUILD_POWERUP_NOTIFICATION_COOLDOWN from "GUILD_POWERUP_NOTIFICATION_COOLDOWN" /* 12055 */;
import SidebarCoachmarkOverlayLayer from "SidebarCoachmarkOverlayLayer" /* 15371 */;
import useGuildPowerupsCoachmarkDefault from "useGuildPowerupsCoachmark" /* 15529 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (GUILD_POWERUP_NOTIFICATION_COOLDOWN.GuildPowerupNotificationIndicatorType.WARNING === type) {
      let obj = { color: null, size: "sm" };
      obj[0] = ThemesDefault.colors.STATUS_WARNING;
      return callback(tmp4(7938).CircleErrorIcon, obj);
    } else if (tmp4(12055).GuildPowerupNotificationIndicatorType.UNREAD === type) {
      obj = { value: null, isMentionLowImportance: true };
      obj[0] = indicator.count;
      return callback(tmp4(1297).Badge, obj);
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
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  guildId = guildId.guildId;
  let dismissNewBadgeIfShown;
  let obj = React;
  const ref = React.useRef(null);
  const tmp5 = dismissNewBadgeIfShown(12051)(guildId);
  let indicator;
  const tmp = callback2();
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
  const tmp6Result = dismissNewBadgeIfShown(12070)(guildId, tmp8);
  dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
  let showUnread;
  if (tmp5 != null) {
    showUnread = tmp5.showUnread;
  }
  const ChannelModes = guildId(11948).ChannelModes;
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
    const obj = { guildId, analyticsLocation: dismissNewBadgeIfShown(closure_1_2[16]).GUILD_POWERUPS_CHANNEL_LIST_ROW };
    dismissNewBadgeIfShown(closure_1_2[15])(obj);
  }, items);
  obj = { ref, collapsable: false, children: null };
  obj = { targetRef: ref, guildId, popout: null };
  let popout1;
  if (tmp5 != null) {
    popout1 = tmp5.popout;
  }
  obj[2] = popout1;
  const items1 = [closure_5(GuildPowerupsCoachmark, obj), ];
  obj1 = { onPress: callback, style: tmp.container, accessible: true, mode: DEFAULT, unread: true === showUnread, accessibilityLabel: null, accessibilityState: null, name: null, icon: null, channelInfo: null };
  const tmp17 = closure_6;
  const tmp18 = View;
  const tmp19 = GuildPowerupsCoachmark;
  const tmp6 = dismissNewBadgeIfShown(12070);
  const intl = tmp14(1236).intl;
  obj1[5] = intl.string(dismissNewBadgeIfShown(2369).yv3DJJ);
  obj1[6] = { selected: false };
  const obj2 = { name: null, mode: null };
  const intl2 = tmp14(1236).intl;
  obj2[0] = intl2.string(dismissNewBadgeIfShown(2369).yv3DJJ);
  obj2[1] = DEFAULT;
  obj1[7] = closure_5(tmp14(11948).BaseChannelName, obj2);
  const tmp3Result = dismissNewBadgeIfShown(11948);
  obj1[8] = closure_5(tmp14(11948).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp14(15576).BoostTier2Icon });
  if (tmp6Result.showNewBadgeOnRow) {
    let tmp16Result = tmp16(tmp14(11858).NewBadge, {});
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
  items1[1] = closure_5(tmp3Result, obj1);
  obj[2] = items1;
  obj5[1] = tmp17(tmp18, obj);
  return closure_5(tmp14(5821).LayerScope, obj5);
};