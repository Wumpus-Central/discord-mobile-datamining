// === Module 16730: ChannelNameHeader ===

// Module 16730 (ChannelNameHeader)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import _modDef3483 from "module_3483" /* 3483 */;
import Text_Text from "Text/Text" /* 4556 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10910 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function DirectMessageIcon(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  const tmp = closure_15();
  const items1 = [PresenceStore];
  const items2 = [stateFromStores];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items1, () => {
    let isMobileOnlineResult = null != stateFromStores;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = PresenceStore.isMobileOnline(tmp.id);
    }
    const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
    let isVROnlineResult = null != tmp;
    if (isVROnlineResult) {
      isVROnlineResult = PresenceStore.isVROnline(tmp.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores) {
      let UNKNOWN = PresenceStore.getStatus(tmp.id);
    } else {
      UNKNOWN = constants2.UNKNOWN;
    }
    obj.status = UNKNOWN;
    return obj;
  }, items2);
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj = { avatarDecoration: stateFromStores.avatarDecoration, user: stateFromStores, guildId: "Boolean", size: tmp2(1178).AvatarSizes.NORMAL, status: false, isMobileOnline: "done", isVROnline: "flowing", statusStyle: "hourglass" };
    let isSystemUserResult;
    if (stateFromStores != null) {
      isSystemUserResult = stateFromStores.isSystemUser();
    }
    let tmp11 = null;
    if (!isSystemUserResult) {
      tmp11 = tmp7;
    }
    obj.status = tmp11;
    obj.isMobileOnline = tmp5;
    obj.isVROnline = tmp6;
    obj.statusStyle = tmp.statusStyle;
    tmp9Result = closure_12(tmp2(1178).Avatar, obj);
  }
  return tmp9Result;
}
function ThreadParentChannelLink(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let navigation;
  const tmp = require("useChannelName")(channel, true);
  importDefault = tmp;
  let obj = channel(navigation[14]);
  navigation = obj.useNavigation();
  const items = [channel.id, navigation];
  const callback = noop.useCallback(() => {
    navigation.goBack();
    transitionToChannel.transitionToChannel(channel.id, { navigationReplace: true });
  }, items);
  obj = { onPress: callback, children: null };
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
  const intl = channel(navigation[18]).intl;
  obj.children = intl.format(channel(navigation[18]).t.YbkB3U, {
    channelName: tmp,
    channelNameHook() {
      return closure_2_12(Text_Text.Text, { variant: "text-sm/medium", color: "text-brand", lineClamp: 1, children });
    }
  });
  obj.children = closure_12(channel(navigation[17]).Text, obj);
  return closure_12(channel(navigation[16]).PressableOpacity, obj);
}
function ChannelSubtitle(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [UserStore];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let privateChannelUserTagsString = null;
    if (channel.isPrivate()) {
      privateChannelUserTagsString = ChannelUtils.getPrivateChannelUserTagsString(channel.recipients, UserStore);
    }
    return privateChannelUserTagsString;
  }, items1);
  if (channel.isPrivate()) {
    let tmp8 = null;
    if (null != stateFromStores) {
      tmp8 = null;
      if ("" !== stateFromStores) {
        obj = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: stateFromStores };
        tmp8 = closure_12(tmp(4556).Text, obj);
      }
    }
    return tmp8;
  } else if (channel.isGameInvitesChannel()) {
    const intl = tmp(1114).intl;
    let stringResult = intl.string(_modDef3483["D+2/QP"]);
  } else {
    stringResult = tmp(4705).channelTypeString(channel);
    const tmpResult = tmp(4705);
  }
}
function ChannelNameHeaderContent(channel) {
  channel = channel.channel;
  let stateFromStores;
  const tmp = closure_15();
  importDefault = tmp;
  const tmp4 = require("useChannelName")(channel);
  let obj = channel(stateFromStores[11]);
  let items = [ChannelStore];
  const items1 = [channel];
  stateFromStores = obj.useStateFromStores(items, () => {
    channel = null;
    if (channel.isThread()) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    return channel;
  }, items1);
  let obj1 = channel(stateFromStores[11]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(constants.VIEW_CHANNEL, tmp);
    }
    return canResult;
  }, items3);
  let obj2 = channel(stateFromStores[11]);
  const items4 = [GuildStore];
  const items5 = [, ];
  ({ id: arr6[0], guild_id: arr6[1] } = channel);
  const stateFromStores2 = obj2.useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(channel.guild_id);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId === channel.id;
  }, items5);
  const items6 = [channel, stateFromStores, stateFromStores1];
  const items7 = [channel, stateFromStores2, tmp];
  const memo = stateFromStores1.useMemo(() => {
    if (null != stateFromStores) {
      if (stateFromStores1) {
        let obj = { channel: tmp };
        let tmp3 = closure_2_12(ThreadParentChannelLink, obj);
      }
      return tmp3;
    }
    obj = { channel };
    tmp3 = closure_2_12(ChannelSubtitle, obj);
  }, items6);
  const items8 = [
    stateFromStores1.useMemo(() => {
      let obj = channel;
      if (channel.isDM()) {
        obj = { style: closure_1.channelIcon, children: null };
        obj = { channel: null };
        obj.channel = obj;
        obj.children = closure_2_12(DirectMessageIcon, obj);
        return closure_2_12(View, obj);
      } else if (obj.isGroupDM()) {
        let obj1 = { style: closure_1.channelIcon, children: null };
        const obj2 = { channel: obj, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
        obj1.children = closure_2_12(GroupDMAvatarDefault, obj2);
        return closure_2_12(View, obj1);
      } else {
        obj1 = utils_ChannelUtils;
        const obj3 = { isRulesChannel: stateFromStores2 };
        const channelIconComponent = obj1.getChannelIconComponent(obj, obj3);
        let tmp5 = null;
        if (null != channelIconComponent) {
          const obj4 = { style: null, children: null };
          const items = [, ];
          ({ channelIcon: arr[0], channelTypeBox: arr[1] } = closure_1);
          obj4.style = items;
          obj4.children = closure_2_12(channelIconComponent, { size: "md", color: "mobile-text-heading-primary" });
          tmp5 = closure_2_12(View, obj4);
        }
        return tmp5;
      }
    }, items7),

  ];
  obj = { style: tmp.channelData, children: null };
  if (channel.isDM()) {
    obj = { userId: channel.getRecipientId(), guildId: channel.guild_id, userName: tmp4, variant: "redesign/heading-18/bold", defaultColor: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail" };
    let tmp13Result = tmp13(require("UsernameWithEffects"), obj);
    const tmp2Result = require("UsernameWithEffects");
  } else {
    obj1 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail", children: tmp4 };
    tmp13Result = tmp13(channel(tmp3[17]).Text, obj1);
  }
  obj2 = { children: null };
  const items9 = [tmp13Result, memo];
  obj.children = items9;
  items8[1] = closure_13(stateFromStores2, obj);
  obj2.children = items8;
  return closure_13(closure_14, obj2);
}
function DMChannelNameHeader(channel) {
  channel = channel.channel;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  const items = [channel, analyticsLocations];
  const callback = noop.useCallback(() => {
    const recipientId = channel.getRecipientId();
    if (null != recipientId) {
      const obj = { userId: recipientId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  let obj = { style: null, onPress: callback, children: closure_12(ChannelNameHeaderContent, { channel }) };
  const items1 = [closure_15().container, channel.containerStyle];
  obj.style = items1;
  return closure_12(channel(5123).PressableOpacity, obj);
}
function DefaultChannelNameHeader(arg0) {
  ({ channel, containerStyle } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_15().container, containerStyle];
  obj.style = items;
  obj.children = closure_1_12(ChannelNameHeaderContent, { channel });
  return closure_1_12(View, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ Permissions: c10, StatusTypes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let obj = { container: null, channelIcon: null, channelTypeBox: null, channelData: null, statusStyle: null };
obj = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
obj.container = obj;
obj.channelIcon = { height: 40, width: 40, justifyContent: "center", alignItems: "center" };
const createStyles = { borderRadius: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_ICON_RADIUS, borderWidth: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.channelTypeBox = createStyles;
obj.channelData = { flex: 1 };
obj.statusStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_15 = createStyles.createStyles(obj);
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx");

export default noop.memo(function ChannelNameHeader(arg0) {
  ({ channel, containerStyle } = arg0);
  if (channel.isDM()) {
    let obj = { channel, containerStyle };
    let tmpResult = tmp(DMChannelNameHeader, obj);
  } else {
    obj = { channel, containerStyle };
    tmpResult = tmp(DefaultChannelNameHeader, obj);
  }
  return tmpResult;
});