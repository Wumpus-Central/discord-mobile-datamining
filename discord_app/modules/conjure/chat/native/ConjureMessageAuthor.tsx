// === Module 12635: ConjureMessageAuthor ===

// Module 12635 (ConjureMessageAuthor)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import Pressables from "Pressables" /* 6980 */;
import ConjureMessageTime from "ConjureMessageTime" /* 12636 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12637 */;
import _modDef12640 from "module_12640" /* 12640 */;
import noop from "module_19" /* 19 */;

require = fn;
class ConjureMessageHeader {
  constructor(arg0) {
    ({ name, onPressName } = global);
    ({ color, at } = global);
    tmp = closure_7();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[6]);
    describeMessageTimeResult = obj.describeMessageTime(at);
    tmp5 = jsx;
    obj1 = { variant: "text-md/semibold", color, style: tmp.name, lineClamp: 1, children: name };
    tmp6 = jsx(closure_0(closure_2[7]).Text, obj1);
    obj7 = { style: tmp.header, children: null };
    tmp5Result = tmp6;
    tmp7 = jsxs;
    tmp8 = View;
    if (null != onPressName) {
      obj8 = { style: null, onPress: null, onLongPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj8.style = tmp.name;
      obj8.onPress = onPressName;
      obj8.onLongPress = onPressName;
      intl = tmp2(tmp3[9]).intl;
      obj9 = { username: null };
      obj9.username = name;
      obj8.accessibilityLabel = intl.formatToPlainString(tmp2(tmp3[9]).t.uCenkh, obj9);
      obj8.children = tmp6;
      tmp5Result = tmp5(tmp2(tmp3[8]).PressableOpacity, obj8);
    }
    items = [, ];
    items[0] = tmp5Result;
    tmp5Result1 = null;
    if (null != describeMessageTimeResult) {
      obj10 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      obj10.style = tmp.time;
      obj10.children = describeMessageTimeResult;
      tmp5Result1 = tmp5(tmp2(tmp3[7]).Text, obj10);
    }
    items[1] = tmp5Result1;
    obj7.children = items;
    return tmp7(tmp8, obj7);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = { header: { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 }, name: { flexShrink: 1 }, time: { flexShrink: 0 }, agentAvatar: null };
let size = { width: fn(12622).MESSAGE_AVATAR_SIZE, height: fn(12622).MESSAGE_AVATAR_SIZE, borderRadius: fn(12622).MESSAGE_AVATAR_SIZE / 2 };
obj2.agentAvatar = size;
const React5 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageAuthor.tsx");

export { ConjureMessageHeader };
export function ConjureUserHeader(arg0) {
  let messageAuthorUser;
  ({ userId, at } = arg0);
  messageAuthorUser = messageAuthorUser(12633).useMessageAuthorUser(userId);
  let obj = messageAuthorUser(12633);
  const name = messageAuthorUser(5068).useName(messageAuthorUser);
  [][0] = messageAuthorUser;
  let tmp4 = null;
  if (null != messageAuthorUser) {
    tmp4 = null;
    if (null != name) {
      const obj3 = { name, color: "text-default", at, onPressName: tmp3 };
      tmp4 = closure_5(ConjureMessageHeader, obj3);
    }
  }
  return tmp4;
}
export function ConjureHeader(arg0) {
  const obj = { name: null, color: "text-brand", at: null };
  const intl = util.intl;
  obj.name = intl.string(_modDef3868.uk6jhJ);
  obj.at = arg0.at;
  return hasOwnProperty(ConjureMessageHeader, obj);
}
export function ConjureUserAvatar(size) {
  let NORMAL = size.size;
  if (NORMAL === undefined) {
    NORMAL = messageAuthorUser(1187).AvatarSizes.NORMAL;
  }
  messageAuthorUser = undefined;
  messageAuthorUser = messageAuthorUser(12633).useMessageAuthorUser(size.userId);
  const items = [messageAuthorUser];
  const callback = noop.useCallback(() => {
    if (null != messageAuthorUser) {
      const result = ConjureMessageActionSheet.openMessageAuthorProfile(tmp.id);
    }
  }, items);
  let tmp7 = null;
  if (null != messageAuthorUser) {
    const obj2 = { onPress: callback, onLongPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp3(1113).intl;
    obj2.accessibilityLabel = intl.string(tmp3(1113).t.iXAna6);
    const obj3 = { size: NORMAL, user: messageAuthorUser, guildId: "Array" };
    obj2.children = closure_5(tmp3(1187).Avatar, obj3);
    tmp7 = closure_5(tmp3(6980).PressableOpacity, obj2);
  }
  return tmp7;
}
export function ConjureAvatar() {
  const obj = { source: null, style: null };
  const tmp = closure_7();
  obj.source = _modDef12640;
  obj.style = tmp.agentAvatar;
  return hasOwnProperty(FastImageDefault, obj);
}