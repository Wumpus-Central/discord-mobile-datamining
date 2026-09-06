// === Module 16116: getChannelMode ===

// Module 16116 (getChannelMode)
import ThemesDefault from "Themes" /* 576 */;
import getAvatarURLDefault from "getAvatarURL" /* 1396 */;
import getChannelIcon from "getChannelIcon" /* 5028 */;
import BookCheckIcon2 from "BookCheckIcon" /* 5075 */;
import BaseChannelSubtitle from "BaseChannelSubtitle" /* 12379 */;
import registerAssetDefault from "registerAsset" /* 16117 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "sortActivity" /* 4600 */;
import closure_7 from "markAllUserIdListsStale" /* 4209 */;
import closure_8 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;
import { StaticChannelRoute } from "set" /* 1964 */;
import { UnreadSetting } from "ReadStateTypes" /* 4742 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;
import set from "set" /* 2 */;

require = arg1;
function getChannelMode(selected) {
  ({ unread, channel } = selected);
  if (selected.selected) {
    const ChannelModes = BaseChannelSubtitle.ChannelModes;
    if (!isGuildVocalResult) {
      const SELECTED = ChannelModes.SELECTED;
    }
    isGuildVocalResult = channel.isGuildVocal();
  } else {
    if (tmp2) {
      let DEFAULT = BaseChannelSubtitle.ChannelModes.LOCKED;
    } else if (tmp) {
      DEFAULT = BaseChannelSubtitle.ChannelModes.MUTED;
    } else if (unread) {
      if (selected.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
        let UNREAD_LESS_IMPORTANT = BaseChannelSubtitle.ChannelModes.UNREAD_IMPORTANT;
      } else {
        UNREAD_LESS_IMPORTANT = BaseChannelSubtitle.ChannelModes.UNREAD_LESS_IMPORTANT;
      }
    } else {
      DEFAULT = BaseChannelSubtitle.ChannelModes.DEFAULT;
    }
    return DEFAULT;
  }
}
function ChannelIcon(arg0) {
  const tmp = callback3();
  ({ channel, locked, isChannelLive, selected } = arg0);
  if (channel.type === ChannelTypes.DM) {
    let obj = { userId: null, selected: null };
    obj[0] = channel.getRecipientId();
    if (selected == null) {
      selected = false;
    }
    obj[1] = selected;
    return callback2(DMChannelIcon, obj);
  } else {
    if (channel.type === tmp4.GROUP_DM) {
      obj = getAvatarURLDefault;
      obj = { id: null, icon: null, applicationId: null, size: 20 };
      ({ id: obj2[0], icon: obj2[1] } = channel);
      obj[2] = channel.getApplicationId();
      const channelIconSource = obj.getChannelIconSource(obj);
      if (null != channelIconSource) {
        obj1 = { style: null, source: null };
        obj1[0] = tmp.groupDmAvatar;
        obj1[1] = channelIconSource;
        return callback2(tmp5(5587), obj1);
      }
      tmp5 = importDefault;
    }
    if (tmp2) {
      let tmp12 = registerAssetDefault;
      let BookCheckIcon = BookCheckIcon2.BookCheckIcon;
      let tmp9 = require;
    } else {
      tmp9 = require;
      let obj2 = getChannelIcon;
      obj2 = { isRulesChannel: false, locked: null };
      obj2[1] = locked;
      const channelIcon = obj2.getChannelIcon(channel, obj2);
      let obj4 = getChannelIcon;
      const obj3 = { isRulesChannel: false, locked: null };
      obj3[1] = locked;
      BookCheckIcon = obj4.getChannelIconComponent(channel, obj3);
      tmp12 = channelIcon;
    }
    obj4 = { mode: null, source: null, isChannelLive: null, style: null };
    obj4[0] = tmp3;
    obj4[1] = tmp12;
    obj4[2] = isChannelLive;
    let channelIconLive;
    if (isChannelLive) {
      channelIconLive = tmp.channelIconLive;
    }
    obj4[3] = channelIconLive;
    if (null != BookCheckIcon) {
      const obj5 = { IconComponent: null };
      obj5[0] = BookCheckIcon;
      let obj6 = obj5;
    } else {
      obj6 = {};
    }
    const merged = Object.assign(obj6);
    return callback2(tmp9(12379).BaseChannelIcon, obj4);
  }
}
function DMChannelIcon(userId) {
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp = callback3();
  let obj = userId(504);
  const items = [closure_8];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getUser(userId), items1);
  const items2 = [closure_6];
  const items3 = [userId];
  const stateFromStoresObject = userId(504).useStateFromStoresObject(items2, () => ({ status: closure_1_6.getStatus(userId), isMobileOnline: closure_1_6.isMobileOnline(userId), isVROnline: closure_1_6.isVROnline(userId) }), items3);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { user: stateFromStores, guildId: "o", size: 0, style: 7, status: 4, isMobileOnline: "shims - shim_star_lb", isVROnline: 1, statusStyle: null };
  obj[2] = userId(1178).AvatarSizes.XSMALL_20;
  obj[3] = tmp.dmAvatar;
  obj[4] = status;
  obj[5] = isMobileOnline;
  obj[6] = isVROnline;
  const items4 = [tmp.avatarStatus, ];
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp.avatarStatusSelected;
  }
  items4[1] = avatarStatusSelected;
  obj[7] = items4;
  return closure_13(userId(1178).Avatar, obj);
}
let closure_3 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
const ChannelTypes = ME.ChannelTypes;
const Routes = ME.Routes;
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let items = [, ];
({ GUILD_VOICE: arr[0], GUILD_STAGE_VOICE: arr[1] } = ChannelTypes);
let set = new Set(items);
let obj = { channelIconLive: null, dmAvatar: null, avatarStatus: null, groupDmAvatar: null, channelInfoContainer: null, avatarStatusSelected: null };
obj = { tintColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
obj[0] = obj;
obj[1] = { marginRight: 8 };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[2] = createCacheKey;
obj[3] = { width: 20, height: 20, borderRadius: 10, marginRight: 8 };
obj[4] = { paddingStart: 4 };
obj[5] = { backgroundColor: require("result").DARK_393C42_LIGHT_DEE0E4 };
let closure_16 = createCacheKey.createStyles(obj);
let obj2 = { backgroundColor: require("result").DARK_393C42_LIGHT_DEE0E4 };
const result = set.fileFinishedImporting("modules/guild_sidebar/native/ChannelItem.tsx");

export default importAllResult.memo((channel) => {
  channel = channel.channel;
  ({ channelInfo, onPress: importDefault } = channel);
  ({ subtitle, hideIcon, children, textStyle } = channel);
  const tmp = callback3();
  const tmp2 = callback(channel, closure_3);
  ({ isSubscriptionGated, needSubscriptionToAccess } = importDefault(needSubscriptionToAccess[21])(channel.id));
  const tmp6 = getChannelMode(channel);
  if (null != channelInfo) {
    let obj = { style: null, children: null };
    obj[0] = tmp.channelInfoContainer;
    const items = [channelInfo, ];
    let tmp10 = null;
    if (isSubscriptionGated) {
      obj = { locked: null };
      obj[0] = needSubscriptionToAccess;
      tmp10 = callback2(tmp3(tmp4[22]), obj);
    }
    items[1] = tmp10;
    obj[1] = items;
    let tmp8Result = closure_14(View, obj);
    const tmp8 = closure_14;
    const tmp9 = View;
  } else {
    tmp8Result = null;
  }
  obj = { mode: tmp6, unread: null, hideIcon: null, name: null, icon: null, channelInfo: null, onPress: null };
  const tmp5 = importDefault(needSubscriptionToAccess[21])(channel.id);
  const tmp3Result = importDefault(needSubscriptionToAccess[13]);
  obj[1] = tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  obj[2] = hideIcon;
  obj1 = { mode: tmp6, name: null, subtitle: null, textStyle: null };
  const tmp15 = tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  obj1[1] = channel(needSubscriptionToAccess[23]).computeChannelName(channel, closure_8, closure_7);
  obj1[2] = subtitle;
  obj1[3] = textStyle;
  obj[3] = callback2(channel(needSubscriptionToAccess[13]).BaseChannelName, obj1);
  const obj2 = {};
  const merged = Object.assign(channel);
  obj2.mode = tmp6;
  obj[4] = callback2(ChannelIcon, obj2);
  obj[5] = tmp8Result;
  obj[6] = function onPress(arg0) {
    if (needSubscriptionToAccess) {
      if (closure_1_15.has(channel.type)) {
        channel(needSubscriptionToAccess[24]).transitionTo(closure_1_10.CHANNEL(channel.guild_id, closure_1_11.ROLE_SUBSCRIPTIONS));
        const obj = channel(needSubscriptionToAccess[24]);
      }
    }
    if (closure_1 != null) {
      tmp3(arg0);
    }
  };
  const merged1 = Object.assign(tmp2);
  obj.children = children;
  return callback2(tmp3Result, obj);
});
export { getChannelMode };