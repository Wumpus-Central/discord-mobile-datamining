// === Module 15478: GuildPowerupsChannelRowIndicator ===

// Module 15478 (GuildPowerupsChannelRowIndicator)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import add from "add" /* 7128 */;
import CircleErrorIcon from "CircleErrorIcon" /* 8074 */;
import GUILD_POWERUP_NOTIFICATION_COOLDOWN from "GUILD_POWERUP_NOTIFICATION_COOLDOWN" /* 11664 */;
import SidebarCoachmarkOverlayLayer from "SidebarCoachmarkOverlayLayer" /* 15277 */;
import useGuildPowerupsCoachmarkDefault from "useGuildPowerupsCoachmark" /* 15433 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (GUILD_POWERUP_NOTIFICATION_COOLDOWN.GuildPowerupNotificationIndicatorType.WARNING === type) {
      let obj = { color: null, size: "sm" };
      obj[0] = ThemesDefault.colors.STATUS_WARNING;
      return callback(CircleErrorIcon.CircleErrorIcon, obj);
    } else if (GUILD_POWERUP_NOTIFICATION_COOLDOWN.GuildPowerupNotificationIndicatorType.UNREAD === type) {
      obj = { value: null, isMentionLowImportance: true };
      obj[0] = indicator.count;
      return callback(Button.Badge, obj);
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
const createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  guildId = guildId.guildId;
  let dismissNewBadgeIfShown;
  let obj = React;
  const ref = React.useRef(null);
  const tmp5 = dismissNewBadgeIfShown(11660)(guildId);
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
  const tmp6Result = dismissNewBadgeIfShown(11679)(guildId, tmp8);
  dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
  let showUnread;
  if (tmp5 != null) {
    showUnread = tmp5.showUnread;
  }
  const ChannelModes = guildId(11553).ChannelModes;
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
    const obj = { guildId, analyticsLocation: dismissNewBadgeIfShown(dependencyMap[16]).GUILD_POWERUPS_CHANNEL_LIST_ROW };
    dismissNewBadgeIfShown(dependencyMap[15])(obj);
  }, items);
  obj = { targetRef: ref, guildId, popout: null };
  let popout1;
  if (tmp5 != null) {
    popout1 = tmp5.popout;
  }
  obj[2] = popout1;
  const items1 = [callback(GuildPowerupsCoachmark, obj), ];
  obj1 = { onPress: callback, style: tmp.container, accessible: true, mode: DEFAULT, unread: true === showUnread, accessibilityLabel: null, accessibilityState: null, name: null, icon: null, channelInfo: null };
  const tmp6 = dismissNewBadgeIfShown(11679);
  const intl = tmp14(1236).intl;
  obj1[5] = intl.string(dismissNewBadgeIfShown(2367).yv3DJJ);
  obj1[6] = { selected: false };
  const obj2 = { name: null, mode: null };
  const intl2 = tmp14(1236).intl;
  obj2[0] = intl2.string(dismissNewBadgeIfShown(2367).yv3DJJ);
  obj2[1] = DEFAULT;
  obj1[7] = callback(tmp14(11553).BaseChannelName, obj2);
  const tmp3Result = dismissNewBadgeIfShown(11553);
  obj1[8] = callback(tmp14(11553).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp14(15479).BoostTier2Icon });
  if (tmp6Result.showNewBadgeOnRow) {
    let tmp16Result = callback(tmp14(11458).NewBadge, {});
  } else {
    let indicator1;
    if (tmp5 != null) {
      indicator1 = tmp5.indicator;
    }
    const obj4 = { indicator: null };
    obj4[0] = indicator1;
    tmp16Result = callback(GuildPowerupsChannelRowIndicator, obj4);
  }
  const obj5 = { zIndex: 1, children: null };
  obj1[9] = tmp16Result;
  items1[1] = callback(tmp3Result, obj1);
  obj[2] = items1;
  obj5[1] = callback2(View, obj);
  return callback(tmp14(7126).LayerScope, obj5);
};