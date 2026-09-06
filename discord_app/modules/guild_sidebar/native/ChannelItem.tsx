// === Module 16116: ChannelItem ===

// Module 16116 (ChannelItem)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import BookCheckIcon2 from "BookCheckIcon" /* 5075 */;
import BaseChannelItem from "BaseChannelItem" /* 12379 */;
import _modDef16117 from "module_16117" /* 16117 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function getChannelMode(selected) {
  ({ unread, channel } = selected);
  if (selected.selected) {
    const ChannelModes = BaseChannelItem.ChannelModes;
    if (!isGuildVocalResult) {
      const SELECTED = ChannelModes.SELECTED;
    }
    isGuildVocalResult = channel.isGuildVocal();
  } else {
    if (tmp2) {
      let DEFAULT = BaseChannelItem.ChannelModes.LOCKED;
    } else if (tmp) {
      DEFAULT = BaseChannelItem.ChannelModes.MUTED;
    } else if (unread) {
      if (selected.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
        let UNREAD_LESS_IMPORTANT = BaseChannelItem.ChannelModes.UNREAD_IMPORTANT;
      } else {
        UNREAD_LESS_IMPORTANT = BaseChannelItem.ChannelModes.UNREAD_LESS_IMPORTANT;
      }
    } else {
      DEFAULT = BaseChannelItem.ChannelModes.DEFAULT;
    }
    return DEFAULT;
  }
}
function ChannelIcon(arg0) {
  const tmp = closure_16();
  ({ channel, locked, isChannelLive, selected } = arg0);
  if (channel.type === ChannelTypes.DM) {
    let obj = { userId: channel.getRecipientId(), selected: null };
    if (selected == null) {
      selected = false;
    }
    obj.selected = selected;
    return map1(DMChannelIcon, obj);
  } else {
    if (channel.type === tmp4.GROUP_DM) {
      obj = { id: null, icon: null, applicationId: null, size: 20 };
      ({ id: obj2.id, icon: obj2.icon } = channel);
      obj.applicationId = channel.getApplicationId();
      const channelIconSource = obj.getChannelIconSource(obj);
      if (null != channelIconSource) {
        const obj1 = { style: tmp.groupDmAvatar, source: channelIconSource };
        return map1(tmp5(5587), obj1);
      }
      tmp5 = importDefault;
    }
    if (tmp2) {
      let tmp12 = _modDef16117;
      let BookCheckIcon = BookCheckIcon2.BookCheckIcon;
      let tmp9 = require;
    } else {
      tmp9 = require;
      const obj2 = { isRulesChannel: false, locked };
      const channelIcon = obj2.getChannelIcon(channel, obj2);
      let obj4 = utils_ChannelUtils;
      const obj3 = { isRulesChannel: false, locked };
      BookCheckIcon = obj4.getChannelIconComponent(channel, obj3);
      tmp12 = channelIcon;
    }
    obj4 = { mode: tmp3, source: tmp12, isChannelLive, style: null };
    let channelIconLive;
    if (isChannelLive) {
      channelIconLive = tmp.channelIconLive;
    }
    obj4.style = channelIconLive;
    if (null != BookCheckIcon) {
      const obj5 = { IconComponent: BookCheckIcon };
      let obj6 = obj5;
    } else {
      obj6 = {};
    }
    const merged = Object.assign(obj6);
    return map1(tmp9(12379).BaseChannelIcon, obj4);
  }
}
function DMChannelIcon(userId) {
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp = closure_16();
  let obj = userId(504);
  const items = [UserStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [PresenceStore];
  const items3 = [userId];
  const stateFromStoresObject = userId(504).useStateFromStoresObject(items2, () => ({ status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId) }), items3);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { user: stateFromStores, guildId: "o", size: userId(1178).AvatarSizes.XSMALL_20, style: tmp.dmAvatar, status, isMobileOnline, isVROnline, statusStyle: null };
  const items4 = [tmp.avatarStatus, ];
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp.avatarStatusSelected;
  }
  items4[1] = avatarStatusSelected;
  obj.statusStyle = items4;
  return closure_13(userId(1178).Avatar, obj);
}
let closure_3 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
const View = fn(17).View;
const Constants = fn(1074);
const ChannelTypes = Constants.ChannelTypes;
const Routes = Constants.Routes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let items = [, ];
({ GUILD_VOICE: arr[0], GUILD_STAGE_VOICE: arr[1] } = ChannelTypes);
const set = new Set(items);
fn(4560);
let obj = { channelIconLive: null, dmAvatar: null, avatarStatus: null, groupDmAvatar: null, channelInfoContainer: null, avatarStatusSelected: null };
obj = { tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.channelIconLive = obj;
obj.dmAvatar = { marginRight: 8 };
const createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.avatarStatus = createStyles;
obj.groupDmAvatar = { width: 20, height: 20, borderRadius: 10, marginRight: 8 };
obj.channelInfoContainer = { paddingStart: 4 };
obj.avatarStatusSelected = { backgroundColor: fn(5441).DARK_393C42_LIGHT_DEE0E4 };
let closure_16 = createStyles.createStyles(obj);
let obj2 = { backgroundColor: fn(5441).DARK_393C42_LIGHT_DEE0E4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelItem.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  ({ channelInfo, onPress: importDefault } = channel);
  ({ subtitle, hideIcon, children, textStyle } = channel);
  const tmp = closure_16();
  const tmp2 = _objectWithoutProperties(channel, closure_3);
  ({ isSubscriptionGated, needSubscriptionToAccess } = require("useChannelRoleSubscriptionStatus")(channel.id));
  const tmp6 = getChannelMode(channel);
  if (null != channelInfo) {
    let obj = { style: tmp.channelInfoContainer, children: null };
    const items = [channelInfo, ];
    let tmp10 = null;
    if (isSubscriptionGated) {
      obj = { locked: needSubscriptionToAccess };
      tmp10 = closure_13(tmp3(tmp4[22]), obj);
    }
    items[1] = tmp10;
    obj.children = items;
    let tmp8Result = closure_14(View, obj);
  } else {
    tmp8Result = null;
  }
  obj = { mode: tmp6, unread: null, hideIcon: null, name: null, icon: null, channelInfo: null, onPress: null };
  const tmp5 = require("useChannelRoleSubscriptionStatus")(channel.id);
  const tmp3Result = require("BaseChannelItem");
  obj.unread = tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  obj.hideIcon = hideIcon;
  const obj1 = { mode: tmp6, name: null, subtitle: null, textStyle: null };
  const tmp15 = tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  obj1.name = channel(needSubscriptionToAccess[23]).computeChannelName(channel, UserStore, RelationshipStore);
  obj1.subtitle = subtitle;
  obj1.textStyle = textStyle;
  obj.name = closure_13(channel(needSubscriptionToAccess[13]).BaseChannelName, obj1);
  const obj2 = {};
  const merged = Object.assign(channel);
  obj2.mode = tmp6;
  obj.icon = closure_13(ChannelIcon, obj2);
  obj.channelInfo = tmp8Result;
  obj.onPress = function onPress(arg0) {
    if (needSubscriptionToAccess) {
      if (set.has(channel.type)) {
        router_utils.transitionTo(Routes.CHANNEL(channel.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
      }
    }
    if (importDefault != null) {
      tmp3(arg0);
    }
  };
  const merged1 = Object.assign(tmp2);
  obj.children = children;
  return closure_13(tmp3Result, obj);
});
export { getChannelMode };