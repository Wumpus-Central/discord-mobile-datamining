// discord_app/modules/vibegrations/native/VibegrationsMessageAuthor.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3678 from "../intl/VibegrationsUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppsIcon from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import vibegrationsMessageAuthors from "../lib/vibegrationsMessageAuthors.tsx";
import VibegrationsMessageTime from "../lib/VibegrationsMessageTime.tsx";
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
class VibegrationsMessageHeader {
  constructor(arg0) {
    ({ name, onPressName } = global);
    ({ color, at } = global);
    tmp = closure_8();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[9]);
    describeMessageTimeResult = obj.describeMessageTime(at);
    tmp5 = jsx;
    obj1 = { variant: "text-md/semibold", color, style: tmp.name, lineClamp: 1, children: name };
    tmp6 = jsx(closure_0(closure_2[10]).Text, obj1);
    obj7 = { style: tmp.header, children: null };
    tmp5Result = tmp6;
    tmp7 = jsxs;
    tmp8 = View;
    if (null != onPressName) {
      obj8 = {
        style: null,
        onPress: null,
        onLongPress: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      obj8.style = tmp.name;
      obj8.onPress = onPressName;
      obj8.onLongPress = onPressName;
      intl = tmp2(tmp3[12]).intl;
      obj9 = { username: null };
      obj9.username = name;
      obj8.accessibilityLabel = intl.formatToPlainString(tmp2(tmp3[12]).t.uCenkh, obj9);
      obj8.children = tmp6;
      tmp5Result = tmp5(tmp2(tmp3[11]).PressableOpacity, obj8);
    }
    items = [,];
    items[0] = tmp5Result;
    tmp5Result1 = null;
    if (null != describeMessageTimeResult) {
      obj10 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      obj10.style = tmp.time;
      obj10.children = describeMessageTimeResult;
      tmp5Result1 = tmp5(tmp2(tmp3[10]).Text, obj10);
    }
    items[1] = tmp5Result1;
    obj7.children = items;
    return tmp7(tmp8, obj7);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  header: { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 },
  name: { flexShrink: 1 },
  time: { flexShrink: 0 },
  conjureTile: null,
};
let size = {
  width: fn(17012).MESSAGE_AVATAR_SIZE,
  height: fn(17012).MESSAGE_AVATAR_SIZE,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
  alignItems: "center",
  justifyContent: "center",
};
obj2.conjureTile = size;
const React6 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageAuthor.tsx");

export const useMessageAuthorUser = function useMessageAuthorUser(userId) {
  _require = userId;
  const items = [userId];
  const effect = noop.useEffect(() => vibegrationsMessageAuthors.requestMessageAuthor(stateFromStores), items);
  const items1 = [UserStore];
  const items2 = [userId];
  return require("initialize").useStateFromStores(
    items1,
    () => {
      let user = null;
      if (null != stateFromStores) {
        user = UserStore.getUser(stateFromStores);
      }
      return vibegrationsMessageAuthors.resolveMessageAuthor(stateFromStores, user, UserStore.getCurrentUser());
    },
    items2,
  );
};
export { VibegrationsMessageHeader };
export const VibegrationsUserHeader = function VibegrationsUserHeader(userId) {
  userId = userId.userId;
  let stateFromStores;
  closure_129_0 = userId;
  const items = [userId];
  const effect = noop.useEffect(() => vibegrationsMessageAuthors.requestMessageAuthor(stateFromStores), items);
  const items1 = [UserStore];
  const items2 = [userId];
  stateFromStores = stateFromStores(504).useStateFromStores(
    items1,
    () => {
      let user = null;
      if (null != stateFromStores) {
        user = UserStore.getUser(stateFromStores);
      }
      return vibegrationsMessageAuthors.resolveMessageAuthor(stateFromStores, user, UserStore.getCurrentUser());
    },
    items2,
  );
  let obj = stateFromStores(504);
  const name = stateFromStores(4600).useName(stateFromStores);
  [][0] = stateFromStores;
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (null != name) {
      const obj3 = { name, color: "text-default", at: userId.at, onPressName: tmp4 };
      tmp5 = closure_6(VibegrationsMessageHeader, obj3);
    }
  }
  return tmp5;
};
export const VibegrationsConjureHeader = function VibegrationsConjureHeader(arg0) {
  const obj = { name: null, color: "text-brand", at: null };
  const intl = util.intl;
  obj.name = intl.string(_modDef3678.Xmvb23);
  obj.at = arg0.at;
  return timestampProducer(VibegrationsMessageHeader, obj);
};
export const VibegrationsUserAvatar = function VibegrationsUserAvatar(arg0) {
  ({ userId, size } = arg0);
  if (size === undefined) {
    size = stateFromStores(1177).AvatarSizes.NORMAL;
  }
  stateFromStores = undefined;
  closure_129_0 = userId;
  const items = [userId];
  const effect = noop.useEffect(() => vibegrationsMessageAuthors.requestMessageAuthor(stateFromStores), items);
  const items1 = [UserStore];
  const items2 = [userId];
  stateFromStores = stateFromStores(504).useStateFromStores(
    items1,
    () => {
      let user = null;
      if (null != stateFromStores) {
        user = UserStore.getUser(stateFromStores);
      }
      return vibegrationsMessageAuthors.resolveMessageAuthor(stateFromStores, user, UserStore.getCurrentUser());
    },
    items2,
  );
  const items3 = [stateFromStores];
  const callback = noop.useCallback(() => {
    if (null != stateFromStores) {
      const result = VibegrationsMessageActionSheet.openMessageAuthorProfile(tmp.id);
    }
  }, items3);
  let tmp8 = null;
  if (null != stateFromStores) {
    const obj2 = {
      onPress: callback,
      onLongPress: callback,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl = tmp4(1115).intl;
    obj2.accessibilityLabel = intl.string(tmp4(1115).t.iXAna6);
    const obj3 = { size, user: stateFromStores, guildId: "Array" };
    obj2.children = closure_6(tmp4(1177).Avatar, obj3);
    tmp8 = closure_6(tmp4(5334).PressableOpacity, obj2);
  }
  return tmp8;
};
export const VibegrationsConjureAvatar = function VibegrationsConjureAvatar() {
  const obj = {
    style: closure_8().conjureTile,
    children: timestampProducer(AppsIcon.AppsIcon, { size: "sm", color: nativeDefault.colors.TEXT_BRAND }),
  };
  return timestampProducer(View, obj);
};
