// discord_app/modules/share/native/DestinationFailedAlertModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import GroupDMAvatarDefault from "../../group_dm/native/GroupDMAvatar.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function FailedGroupDMRow(channel) {
  channel = channel.channel;
  const tmp = closure_13();
  const obj = { style: tmp.row, children: null };
  const obj2 = { size: null, channel: null };
  const tmp2 = useChannelNameDefault(channel);
  obj2.size = native.AvatarSizes.REFRESH_MEDIUM_32;
  obj2.channel = channel;
  const items = [
    closure_1_10(GroupDMAvatarDefault, obj2),
    closure_1_10(Text_Text.Text, {
      style: tmp.label,
      variant: "text-md/medium",
      lineClamp: 1,
      ellipsizeMode: "tail",
      children: tmp2,
    }),
  ];
  obj.children = items;
  return closure_1_11(View, obj);
}
function FailedUserRow(user) {
  user = user.user;
  const tmp = closure_13();
  const items = [RelationshipStore];
  let stateFromStores = user(504).useStateFromStores(items, () => RelationshipStore.getNickname(user.id));
  const obj = user(504);
  const items1 = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items1, () => ({
    isMobileOnline: PresenceStore.isMobileOnline(user.id),
    status: PresenceStore.getStatus(user.id),
    isVROnline: PresenceStore.isVROnline(user.id),
  }));
  const status = stateFromStoresObject.status;
  let tmp9Result = null;
  if (null != user) {
    const obj3 = { style: tmp.row, children: null };
    const obj4 = {
      user,
      guildId: "Boolean",
      status: true,
      isMobileOnline: "done",
      isVROnline: true,
      size: null,
      avatarDecoration: "header",
      autoStatusCutout: null,
    };
    let tmp13 = null;
    if (StatusTypes.OFFLINE !== status) {
      tmp13 = status;
    }
    obj4.status = tmp13;
    obj4.isMobileOnline = tmp6;
    obj4.isVROnline = tmp7;
    obj4.size = tmp2(1177).AvatarSizes.XSMALL;
    obj4.avatarDecoration = user.avatarDecoration;
    const items2 = [closure_10(tmp2(1177).Avatar, obj4)];
    const obj5 = { style: tmp.label, variant: "text-md/medium", lineClamp: 1, ellipsizeMode: "tail", children: null };
    if (stateFromStores == null) {
      stateFromStores = UserUtilsDefault.getName(user);
    }
    obj5.children = stateFromStores;
    items2[1] = closure_10(tmp2(4825).Text, obj5);
    obj3.children = items2;
    tmp9Result = closure_11(View, obj3);
  }
  return tmp9Result;
}
function FailedChannelRow(channel) {
  channel = channel.channel;
  const tmp = closure_13();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const obj2 = { style: tmp.row, children: null };
  const obj = channel(504);
  const tmp3 = useChannelNameDefault(channel);
  const items1 = [
    closure_10(channel(11356).GuildIconWithChannelType, {
      "aria-label": "",
      guild: stateFromStores,
      channel,
      size: channel(11356).GuildIconWithChannelTypeSizes.SMALL_32,
    }),
    closure_10(channel(4825).Text, {
      style: tmp.label,
      variant: "text-md/medium",
      lineClamp: 1,
      ellipsizeMode: "tail",
      children: tmp3,
    }),
  ];
  obj2.children = items1;
  return closure_11(View, obj2);
}
function FailedDestinationRow(destination) {
  destination = destination.destination;
  const items = [ChannelStore, UserStore];
  const stateFromStoresObject = destination(504).useStateFromStoresObject(items, () => {
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
    const obj2 = { channel };
    let tmp3 = closure_10(FailedGroupDMRow, obj2);
  } else if (null != user) {
    const obj3 = { user };
    tmp3 = closure_10(FailedUserRow, obj3);
  } else {
    tmp3 = null;
    if (null != channel) {
      const obj4 = { channel };
      tmp3 = closure_10(FailedChannelRow, obj4);
    }
  }
  return tmp3;
}
const View = fn(17).View;
const StatusTypes = fn(1085).StatusTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: {
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_STRONG,
    borderRadius: nativeDefault.radii.lg,
    paddingVertical: nativeDefault.space.PX_8,
  },
  row: null,
  label: null,
};
let obj3 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderRadius: nativeDefault.radii.lg,
  paddingVertical: nativeDefault.space.PX_8,
};
obj2.row = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  height: 40,
  marginHorizontal: nativeDefault.space.PX_16,
};
obj2.label = { flexShrink: 1 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/DestinationFailedAlertModal.tsx");

export default function DestinationFailedAlertModal(arg0) {
  ({ failedDestinations, onRetry } = arg0);
  ({ title, content } = arg0);
  const obj = { title, content, extraContent: null, actions: null };
  const tmp = closure_13();
  obj.extraContent = closure_1_10(View, {
    style: closure_13().container,
    children: failedDestinations.map((destination, index) =>
      closure_1_10(FailedDestinationRow, { destination }, index),
    ),
  });
  if (null != onRetry) {
    const obj3 = { children: null };
    const obj4 = { variant: "primary", onPress: onRetry, text: null };
    const intl2 = util.intl;
    obj4.text = intl2.string(util.t["5911Lb"]);
    const items = [closure_1_10(AlertModal.AlertActionButton, obj4, "confirm")];
    const obj5 = { variant: "secondary", text: null };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t.WAI6xu);
    items[1] = closure_1_10(AlertModal.AlertActionButton, obj5, "cancel");
    obj3.children = items;
    let tmp2Result = closure_1_11(closure_1_12, obj3);
  } else {
    const obj6 = { variant: "primary", text: null };
    const intl = util.intl;
    obj6.text = intl.string(util.t.BddRzS);
    tmp2Result = closure_1_10(AlertModal.AlertActionButton, obj6, "confirm");
  }
  obj.actions = closure_1_10(AlertModal.AlertActions, { children: tmp2Result });
  return closure_1_10(AlertModal.AlertModal, obj);
}
