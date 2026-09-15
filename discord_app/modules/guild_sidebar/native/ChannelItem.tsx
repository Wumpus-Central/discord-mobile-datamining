// discord_app/modules/guild_sidebar/native/ChannelItem.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import BookCheckIcon2 from "../../../design/components/Icon/native/redesign/generated/BookCheckIcon.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import BaseChannelItem from "BaseChannelItem.tsx";
import _modDef16227 from "../../../../_runtime/metro/16227__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

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
    const obj4 = { userId: channel.getRecipientId(), selected: null };
    if (selected == null) {
      selected = false;
    }
    obj4.selected = selected;
    return map1(DMChannelIcon, obj4);
  } else {
    if (channel.type === tmp4.GROUP_DM) {
      const obj6 = { id: null, icon: null, applicationId: null, size: 20 };
      ({ id: obj2.id, icon: obj2.icon } = channel);
      obj6.applicationId = channel.getApplicationId();
      const channelIconSource = AvatarUtilsDefault.getChannelIconSource(obj6);
      if (null != channelIconSource) {
        const obj7 = { style: tmp.groupDmAvatar, source: channelIconSource };
        return map1(FastImageDefault, obj7);
      }
    }
    if (tmp2) {
      let tmp12 = _modDef16227;
      let BookCheckIcon = BookCheckIcon2.BookCheckIcon;
      let tmp9 = require;
    } else {
      tmp9 = require;
      const obj8 = { isRulesChannel: false, locked };
      const channelIcon = utils_ChannelUtils.getChannelIcon(channel, obj8);
      const obj9 = { isRulesChannel: false, locked };
      BookCheckIcon = utils_ChannelUtils.getChannelIconComponent(channel, obj9);
      tmp12 = channelIcon;
    }
    const obj10 = { mode: tmp3, source: tmp12, isChannelLive, style: null };
    let channelIconLive;
    if (isChannelLive) {
      channelIconLive = tmp.channelIconLive;
    }
    obj10.style = channelIconLive;
    if (null != BookCheckIcon) {
      const obj11 = { IconComponent: BookCheckIcon };
      let obj19 = obj11;
    } else {
      obj19 = {};
    }
    const merged = Object.assign(obj19);
    return map1(tmp9(12514).BaseChannelIcon, obj10);
  }
}
function DMChannelIcon(userId) {
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp = closure_16();
  const items = [UserStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const obj = userId(504);
  const items2 = [PresenceStore];
  const items3 = [userId];
  const stateFromStoresObject = userId(504).useStateFromStoresObject(
    items2,
    () => ({
      status: PresenceStore.getStatus(userId),
      isMobileOnline: PresenceStore.isMobileOnline(userId),
      isVROnline: PresenceStore.isVROnline(userId),
    }),
    items3,
  );
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = {
    user: stateFromStores,
    guildId: "o",
    size: userId(1177).AvatarSizes.XSMALL_20,
    style: tmp.dmAvatar,
    status,
    isMobileOnline,
    isVROnline,
    statusStyle: "hash",
  };
  const items4 = [tmp.avatarStatus];
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp.avatarStatusSelected;
  }
  items4[1] = avatarStatusSelected;
  obj3.statusStyle = items4;
  return closure_13(userId(1177).Avatar, obj3);
}
let closure_3 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
const View = fn(17).View;
const Constants = fn(1074);
const ChannelTypes = Constants.ChannelTypes;
const Routes = Constants.Routes;
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const UnreadSetting = fn(4821).UnreadSetting;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let items = [,];
({ GUILD_VOICE: arr[0], GUILD_STAGE_VOICE: arr[1] } = ChannelTypes);
const set = new Set(items);
const createStyles = fn(4639);
let obj = {
  channelIconLive: { tintColor: nativeDefault.unsafe_rawColors.GREEN_360 },
  dmAvatar: { marginRight: 8 },
  avatarStatus: null,
  groupDmAvatar: null,
  channelInfoContainer: null,
  avatarStatusSelected: null,
};
let obj3 = { tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.avatarStatus = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.groupDmAvatar = { width: 20, height: 20, borderRadius: 10, marginRight: 8 };
obj.channelInfoContainer = { paddingStart: 4 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.avatarStatusSelected = { backgroundColor: fn(5526).DARK_393C42_LIGHT_DEE0E4 };
let closure_16 = createStyles.createStyles(obj);
let obj5 = { backgroundColor: fn(5526).DARK_393C42_LIGHT_DEE0E4 };
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
    const items = [channelInfo];
    let tmp10 = null;
    if (isSubscriptionGated) {
      const obj2 = { locked: needSubscriptionToAccess };
      tmp10 = closure_13(require("GuildRoleSubscriptionGatedChannelIcon"), obj2);
    }
    items[1] = tmp10;
    obj.children = items;
    let tmp8Result = closure_14(View, obj);
  } else {
    tmp8Result = null;
  }
  const obj3 = { mode: tmp6, unread: null, hideIcon: null, name: null, icon: null, channelInfo: null, onPress: null };
  const tmp5 = require("useChannelRoleSubscriptionStatus")(channel.id);
  const tmp3Result = require("BaseChannelItem");
  obj3.unread =
    tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT ||
    tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  obj3.hideIcon = hideIcon;
  const obj4 = { mode: tmp6, name: null, subtitle: null, textStyle: null };
  const tmp15 =
    tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT ||
    tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  obj4.name = channel(needSubscriptionToAccess[23]).computeChannelName(channel, UserStore, RelationshipStore);
  obj4.subtitle = subtitle;
  obj4.textStyle = textStyle;
  obj3.name = closure_13(channel(needSubscriptionToAccess[13]).BaseChannelName, obj4);
  const obj5 = {};
  const merged = Object.assign(channel);
  obj5.mode = tmp6;
  obj3.icon = closure_13(ChannelIcon, obj5);
  obj3.channelInfo = tmp8Result;
  obj3.onPress = function onPress(arg0) {
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
  obj3.children = children;
  return closure_13(tmp3Result, obj3);
});
export { getChannelMode };
