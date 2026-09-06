// === Module 16876: MessageRequestRowSenderDetails ===

// Module 16876 (MessageRequestRowSenderDetails)
import nativeDefault from "native" /* 576 */;
import utils_AvatarUtilsDefault from "utils/AvatarUtils" /* 1399 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = { avatar: null, avatarContainer: null, detailsContainer: null, messageDetails: null, username: null, timestampSeparator: null, messagePreview: null, usernameTextContainer: null };
createStyles = { borderRadius: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.avatar = createStyles;
createStyles.avatarContainer = { marginRight: 16, alignItems: "flex-start", height: "100%" };
createStyles.detailsContainer = { marginRight: 8, justifyContent: "flex-start", alignItems: "flex-start", flex: 1 };
createStyles.messageDetails = { flexDirection: "row", alignItems: "center" };
createStyles.username = { flexShrink: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.timestampSeparator = { marginHorizontal: 6 };
createStyles.messagePreview = { marginTop: 2 };
createStyles.usernameTextContainer = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestRowSenderDetails.tsx");

export default function MessageRequestRowSenderDetails(isRestricted) {
  ({ channel, otherUser } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  let obj = otherUser(504);
  const items = [RelationshipStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != otherUser) {
      let nickname = RelationshipStore.getNickname(tmp.id);
      if (nickname == null) {
        nickname = UserUtilsDefault.getGlobalName(tmp);
      }
      tmp2 = nickname;
    }
    return tmp2;
  });
  let obj1 = otherUser(16877);
  const messageRequestRelativeTimestampText = obj1.useMessageRequestRelativeTimestampText(channel);
  const random = Math.random();
  const rounded = Math.floor(random * utils_AvatarUtilsDefault.DEFAULT_AVATARS.length);
  obj = { style: tmp.avatarContainer, children: null };
  if (null != otherUser) {
    obj = { avatarStyle: tmp.avatar, user: otherUser, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: "Warning" };
    let avatarDecoration;
    if (otherUser != null) {
      avatarDecoration = otherUser.avatarDecoration;
    }
    obj.avatarDecoration = avatarDecoration;
    obj1 = obj;
  } else {
    obj1 = { avatarStyle: tmp.avatar, source: utils_AvatarUtilsDefault.DEFAULT_AVATARS[rounded] };
  }
  obj.children = closure_5(otherUser(1178).Avatar, obj1);
  const items1 = [closure_5(View, obj), ];
  const obj2 = { style: tmp.detailsContainer, children: null };
  const obj3 = { style: tmp.messageDetails, children: null };
  const obj4 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.usernameTextContainer, children: null };
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.username, children: null };
  let stringResult = stateFromStores;
  if (stateFromStores == null) {
    let username;
    if (otherUser != null) {
      username = otherUser.username;
    }
    stringResult = username;
  }
  if (stringResult == null) {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t["30mdIx"]);
  }
  obj5.children = stringResult;
  const items2 = [closure_5(otherUser(4556).Text, obj5), ];
  let tmp9Result = null != stateFromStores;
  if (tmp9Result) {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
    const items3 = [" ", tmp2(4404).getUserTag(otherUser)];
    obj6.children = items3;
    tmp9Result = tmp9(tmp2(4556).Text, obj6);
    const tmp2Result = tmp2(4404);
  }
  items2[1] = tmp9Result;
  obj4.children = items2;
  const items4 = [closure_6(otherUser(4556).Text, obj4), closure_5(otherUser(4556).Text, { style: tmp.timestampSeparator, variant: "text-xs/medium", color: "text-muted", children: "\u00B7" }), closure_5(otherUser(4556).Text, { variant: "text-xs/semibold", color: "text-muted", children: messageRequestRelativeTimestampText })];
  obj3.children = items4;
  const items5 = [closure_6(View, obj3), , ];
  let tmp11Result = !flag;
  if (!flag) {
    const obj8 = { style: tmp.messagePreview, channel };
    tmp11Result = tmp11(tmp7(16878), obj8);
  }
  items5[1] = tmp11Result;
  if (flag) {
    flag = null != otherUser;
  }
  if (flag) {
    const obj9 = { style: tmp.messagePreview, userId: otherUser.id, suffix: null };
    const intl2 = tmp2(1114).intl;
    obj9.suffix = intl2.string(tmp2(1114).t.hTltPn);
    flag = tmp11(tmp7(16879), obj9);
    const tmp7Result = tmp7(16879);
  }
  const obj10 = { children: null };
  items5[2] = flag;
  obj2.children = items5;
  items1[1] = closure_6(View, obj2);
  obj10.children = items1;
  return closure_6(closure_7, obj10);
};