// === Module 11703: DestinationFailedAlertModal ===

// Module 11703 (DestinationFailedAlertModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import AlertModal from "AlertModal" /* 4910 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10910 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function FailedGroupDMRow(channel) {
  channel = channel.channel;
  const tmp = closure_13();
  let obj = { style: tmp.row, children: null };
  obj = { size: null, channel: null };
  const tmp2 = useChannelNameDefault(channel);
  obj.size = native.AvatarSizes.REFRESH_MEDIUM_32;
  obj.channel = channel;
  const items = [closure_1_10(GroupDMAvatarDefault, obj), ];
  obj = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: tmp2 };
  items[1] = closure_1_10(Text_Text.Text, obj);
  obj.children = items;
  return closure_1_11(View, obj);
}
function FailedUserRow(user) {
  user = user.user;
  const tmp = closure_13();
  let obj = user(504);
  const items = [RelationshipStore];
  let stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.getNickname(user.id));
  let obj1 = user(504);
  const items1 = [PresenceStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: PresenceStore.isMobileOnline(user.id), status: PresenceStore.getStatus(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  const status = stateFromStoresObject.status;
  let tmp9Result = null;
  if (null != user) {
    obj = { style: tmp.row, children: null };
    obj = { user, guildId: "Boolean", status: true, isMobileOnline: null, isVROnline: null, size: 195, avatarDecoration: null, autoStatusCutout: null };
    let tmp13 = null;
    if (StatusTypes.OFFLINE !== status) {
      tmp13 = status;
    }
    obj.status = tmp13;
    obj.isMobileOnline = tmp6;
    obj.isVROnline = tmp7;
    obj.size = tmp2(1178).AvatarSizes.XSMALL;
    obj.avatarDecoration = user.avatarDecoration;
    const items2 = [closure_10(tmp2(1178).Avatar, obj), ];
    obj1 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: null };
    if (stateFromStores == null) {
      stateFromStores = UserUtilsDefault.getName(user);
    }
    obj1.children = stateFromStores;
    items2[1] = closure_10(tmp2(4556).Text, obj1);
    obj.children = items2;
    tmp9Result = closure_11(View, obj);
  }
  return tmp9Result;
}
function FailedChannelRow(channel) {
  channel = channel.channel;
  const tmp = closure_13();
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  obj = { style: tmp.row, children: null };
  obj = { "aria-label": "", guild: stateFromStores, channel, size: channel(10999).GuildIconWithChannelTypeSizes.SMALL_32 };
  const items1 = [closure_10(channel(10999).GuildIconWithChannelType, obj), ];
  const tmp3 = useChannelNameDefault(channel);
  items1[1] = closure_10(channel(4556).Text, { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: useChannelNameDefault(channel) });
  obj.children = items1;
  return closure_11(View, obj);
}
function FailedDestinationRow(destination) {
  destination = destination.destination;
  let obj = destination(504);
  const items = [ChannelStore, UserStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let channel = null;
    if ("channel" === destination.type) {
      channel = ChannelStore.getChannel(destination.id);
    }
    const obj = { channel, user: null };
    let user = null;
    if ("user" === destination.type) {
      user = UserStore.getUser(destination.id);
    }
    obj.user = user;
    return obj;
  });
  ({ channel, user } = stateFromStoresObject);
  let isGroupDMResult;
  if (channel != null) {
    isGroupDMResult = channel.isGroupDM();
  }
  if (isGroupDMResult) {
    obj = { channel };
    let tmp3 = closure_10(FailedGroupDMRow, obj);
  } else if (null != user) {
    obj = { user };
    tmp3 = closure_10(FailedUserRow, obj);
  } else {
    tmp3 = null;
    if (null != channel) {
      const obj1 = { channel };
      tmp3 = closure_10(FailedChannelRow, obj1);
    }
  }
  return tmp3;
}
const View = fn(17).View;
const StatusTypes = fn(1085).StatusTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, row: null, label: null };
createStyles = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.row = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, height: 40, marginHorizontal: nativeDefault.space.PX_16 };
createStyles.label = { flexShrink: 1 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default function DestinationFailedAlertModal(arg0) {
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  let obj = { title, content, extraContent: null, actions: null };
  obj = { style: closure_13().container, children: failedDestinations.map((destination, index) => closure_1_10(FailedDestinationRow, { destination }, index)) };
  obj.extraContent = closure_1_10(View, obj);
  if (null != onRetry) {
    obj = { children: null };
    const obj1 = { variant: "primary", onPress: onRetry, text: null };
    const intl2 = util.intl;
    obj1.text = intl2.string(util.t["5911Lb"]);
    const items = [closure_1_10(AlertModal.AlertActionButton, obj1, "confirm"), ];
    const obj2 = { variant: "secondary", text: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t.WAI6xu);
    items[1] = closure_1_10(AlertModal.AlertActionButton, obj2, "cancel");
    obj.children = items;
    let tmp2Result = closure_1_11(closure_1_12, obj);
  } else {
    const obj3 = { variant: "primary", text: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t.BddRzS);
    tmp2Result = closure_1_10(AlertModal.AlertActionButton, obj3, "confirm");
  }
  obj.actions = closure_1_10(AlertModal.AlertActions, { children: tmp2Result });
  return closure_1_10(AlertModal.AlertModal, obj);
};