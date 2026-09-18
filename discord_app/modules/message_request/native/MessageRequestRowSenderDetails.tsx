// discord_app/modules/message_request/native/MessageRequestRowSenderDetails.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_AvatarUtilsDefault from "../../../utils/native/AvatarUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import MessageRequestPreviewDefault from "MessageRequestPreview.tsx";
import MessageRequestMutualServersDefault from "MessageRequestMutualServers.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4722);
const obj2 = {
  avatar: {
    borderRadius: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.NORMAL] / 2,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  avatarContainer: { marginRight: 16, alignItems: "flex-start", height: "100%" },
  detailsContainer: { marginRight: 8, justifyContent: "flex-start", alignItems: "flex-start", flex: 1 },
  messageDetails: { flexDirection: "row", alignItems: "center" },
  username: null,
  timestampSeparator: null,
  messagePreview: null,
  usernameTextContainer: null,
};
let obj3 = {
  borderRadius: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.username = { flexShrink: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.timestampSeparator = { marginHorizontal: 6 };
obj2.messagePreview = { marginTop: 2 };
obj2.usernameTextContainer = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestRowSenderDetails.tsx");

export default function MessageRequestRowSenderDetails(isRestricted) {
  ({ channel, otherUser } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const items = [RelationshipStore];
  const stateFromStores = otherUser(504).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != otherUser) {
      let nickname = RelationshipStore.getNickname(otherUser.id);
      if (nickname == null) {
        nickname = UserUtilsDefault.getGlobalName(otherUser);
      }
      tmp2 = nickname;
    }
    return tmp2;
  });
  let obj = otherUser(504);
  const messageRequestRelativeTimestampText = otherUser(17258).useMessageRequestRelativeTimestampText(channel);
  const random = Math.random();
  const rounded = Math.floor(random * utils_AvatarUtilsDefault.DEFAULT_AVATARS.length);
  const obj3 = { style: tmp.avatarContainer, children: null };
  if (null != otherUser) {
    const obj4 = {
      avatarStyle: tmp.avatar,
      user: otherUser,
      guildId: "HermesInternal",
      disablePlaceholder: null,
      avatarDecoration: "Warning",
    };
    let avatarDecoration;
    if (otherUser != null) {
      avatarDecoration = otherUser.avatarDecoration;
    }
    obj4.avatarDecoration = avatarDecoration;
    let obj5 = obj4;
  } else {
    obj5 = { avatarStyle: tmp.avatar, source: utils_AvatarUtilsDefault.DEFAULT_AVATARS[rounded] };
  }
  obj3.children = closure_5(otherUser(1177).Avatar, obj5);
  const items1 = [closure_5(View, obj3)];
  const obj6 = { style: tmp.detailsContainer, children: null };
  const obj7 = { style: tmp.messageDetails, children: null };
  const obj8 = {
    lineClamp: 1,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.usernameTextContainer,
    children: null,
  };
  const obj9 = {
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.username,
    children: null,
  };
  let stringResult = stateFromStores;
  if (stateFromStores == null) {
    let username;
    if (otherUser != null) {
      username = otherUser.username;
    }
    stringResult = username;
  }
  if (stringResult == null) {
    const intl = otherUser(1115).intl;
    stringResult = intl.string(otherUser(1115).t["30mdIx"]);
  }
  obj9.children = stringResult;
  const items2 = [closure_5(otherUser(4718).Text, obj9)];
  let tmp9Result = null != stateFromStores;
  if (tmp9Result) {
    const obj10 = { variant: "text-md/medium", color: "text-muted", children: null };
    const items3 = [" ", otherUser(4566).getUserTag(otherUser)];
    obj10.children = items3;
    tmp9Result = closure_6(otherUser(4718).Text, obj10);
    const tmp2Result = otherUser(4566);
  }
  items2[1] = tmp9Result;
  obj8.children = items2;
  const items4 = [
    closure_6(otherUser(4718).Text, obj8),
    closure_5(otherUser(4718).Text, {
      style: tmp.timestampSeparator,
      variant: "text-xs/medium",
      color: "text-muted",
      children: "\u00B7",
    }),
    closure_5(otherUser(4718).Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      children: messageRequestRelativeTimestampText,
    }),
  ];
  obj7.children = items4;
  const items5 = [closure_6(View, obj7), ,];
  let tmp11Result = !flag;
  if (!flag) {
    const obj12 = { style: tmp.messagePreview, channel };
    tmp11Result = closure_5(MessageRequestPreviewDefault, obj12);
  }
  items5[1] = tmp11Result;
  if (flag) {
    flag = null != otherUser;
  }
  if (flag) {
    const obj13 = { style: tmp.messagePreview, userId: otherUser.id, suffix: null };
    const intl2 = otherUser(1115).intl;
    obj13.suffix = intl2.string(otherUser(1115).t.hTltPn);
    flag = closure_5(MessageRequestMutualServersDefault, obj13);
    const tmp7Result = MessageRequestMutualServersDefault;
  }
  const obj14 = { children: null };
  items5[2] = flag;
  obj6.children = items5;
  items1[1] = closure_6(View, obj6);
  obj14.children = items1;
  return closure_6(closure_7, obj14);
}
