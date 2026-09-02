// discord_app/modules/message_request/native/MessageRequestRowSenderDetails.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ensureAvatarSourceDefault from "../../../utils/native/AvatarUtils.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/RelationshipStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = {
  avatar: null,
  avatarContainer: null,
  detailsContainer: null,
  messageDetails: null,
  username: null,
  timestampSeparator: null,
  messagePreview: null,
  usernameTextContainer: null,
};
createCacheKey = {
  borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 16, alignItems: "flex-start", height: "100%" };
createCacheKey[2] = { marginRight: 8, justifyContent: "flex-start", alignItems: "flex-start", flex: 1 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { flexShrink: 1, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[5] = { marginHorizontal: 6 };
createCacheKey[6] = { marginTop: 2 };
createCacheKey[7] = { flexShrink: 1 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexShrink: 1, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("set").fileFinishedImporting(
  "modules/message_request/native/MessageRequestRowSenderDetails.tsx",
);

export default function MessageRequestRowSenderDetails(isRestricted) {
  ({ channel, otherUser } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  let obj = otherUser(586);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != otherUser) {
      let nickname = closure_1_4.getNickname(tmp.id);
      if (nickname == null) {
        nickname = closure_1_1(closure_1_2[8]).getGlobalName(tmp);
        const obj = closure_1_1(closure_1_2[8]);
      }
      tmp2 = nickname;
    }
    return tmp2;
  });
  obj1 = otherUser(16692);
  const messageRequestRelativeTimestampText = obj1.useMessageRequestRelativeTimestampText(channel);
  const random = Math.random();
  const rounded = Math.floor(random * ensureAvatarSourceDefault.DEFAULT_AVATARS.length);
  obj = { style: tmp.avatarContainer, children: null };
  if (null != otherUser) {
    obj = {
      avatarStyle: null,
      user: null,
      guildId: "HermesInternal",
      disablePlaceholder: null,
      avatarDecoration: "Warning",
    };
    obj[0] = tmp.avatar;
    obj[1] = otherUser;
    let avatarDecoration;
    if (otherUser != null) {
      avatarDecoration = otherUser.avatarDecoration;
    }
    obj[4] = avatarDecoration;
    obj1 = obj;
  } else {
    obj1 = { avatarStyle: null, source: null };
    obj1[0] = tmp.avatar;
    obj1[1] = ensureAvatarSourceDefault.DEFAULT_AVATARS[rounded];
  }
  obj[1] = closure_5(otherUser(1296).Avatar, obj1);
  const items1 = [closure_5(View, obj)];
  const obj2 = { style: tmp.detailsContainer, children: null };
  const obj3 = { style: tmp.messageDetails, children: null };
  const obj4 = {
    lineClamp: 1,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.usernameTextContainer,
    children: null,
  };
  const obj5 = {
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
    const intl = tmp2(1233).intl;
    stringResult = intl.string(tmp2(1233).t["30mdIx"]);
  }
  obj5[3] = stringResult;
  const items2 = [closure_5(otherUser(4474).Text, obj5)];
  let tmp9Result = null != stateFromStores;
  if (tmp9Result) {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
    const items3 = [" ", tmp2(4322).getUserTag(otherUser)];
    obj6[2] = items3;
    tmp9Result = tmp9(tmp2(4474).Text, obj6);
    const tmp2Result = tmp2(4322);
  }
  items2[1] = tmp9Result;
  obj4[4] = items2;
  const items4 = [
    closure_6(otherUser(4474).Text, obj4),
    closure_5(otherUser(4474).Text, {
      style: tmp.timestampSeparator,
      variant: "text-xs/medium",
      color: "text-muted",
      children: "\u00B7",
    }),
    closure_5(otherUser(4474).Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      children: messageRequestRelativeTimestampText,
    }),
  ];
  obj3[1] = items4;
  const items5 = [closure_6(View, obj3), ,];
  let tmp11Result = !flag;
  if (!flag) {
    const obj8 = { style: null, channel: null };
    obj8[0] = tmp.messagePreview;
    obj8[1] = channel;
    tmp11Result = tmp11(tmp7(16693), obj8);
  }
  items5[1] = tmp11Result;
  if (flag) {
    flag = null != otherUser;
  }
  if (flag) {
    const obj9 = { style: null, userId: null, suffix: null };
    obj9[0] = tmp.messagePreview;
    obj9[1] = otherUser.id;
    const intl2 = tmp2(1233).intl;
    obj9[2] = intl2.string(tmp2(1233).t.hTltPn);
    flag = tmp11(tmp7(16694), obj9);
    const tmp7Result = tmp7(16694);
  }
  const obj10 = { children: null };
  items5[2] = flag;
  obj2[1] = items5;
  items1[1] = closure_6(View, obj2);
  obj10[0] = items1;
  return closure_6(closure_7, obj10);
}
