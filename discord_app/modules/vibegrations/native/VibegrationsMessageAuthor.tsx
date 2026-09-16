// discord_app/modules/vibegrations/native/VibegrationsMessageAuthor.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3591 from "../intl/VibegrationsUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppsIcon from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import vibegrationsMessageAuthors from "../lib/vibegrationsMessageAuthors.tsx";
import VibegrationsMessageTime from "../lib/VibegrationsMessageTime.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
class VibegrationsMessageHeader {
  constructor(arg0) {
    ({ name, color, at } = global);
    tmp = closure_8();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[9]);
    describeMessageTimeResult = obj.describeMessageTime(at);
    obj1 = { style: tmp.header, children: null };
    tmp5 = jsxs;
    tmp6 = View;
    tmp7 = jsx;
    obj5 = { variant: "text-md/semibold", color, style: tmp.name, lineClamp: 1, children: name };
    items = [,];
    items[0] = jsx(closure_0(closure_2[10]).Text, obj5);
    tmp7Result = null;
    if (null != describeMessageTimeResult) {
      obj6 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      obj6.style = tmp.time;
      obj6.children = describeMessageTimeResult;
      tmp7Result = tmp7(tmp2(tmp3[10]).Text, obj6);
    }
    items[1] = tmp7Result;
    obj1.children = items;
    return tmp5(tmp6, obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  header: { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 },
  name: { flexShrink: 1 },
  time: { flexShrink: 0 },
  conjureTile: null,
};
let size = {
  width: fn(16763).MESSAGE_AVATAR_SIZE,
  height: fn(16763).MESSAGE_AVATAR_SIZE,
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
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageAuthor.tsx");

export const useMessageAuthorUser = function useMessageAuthorUser(userId) {
  _require = userId;
  const items = [userId];
  const effect = noop.useEffect(() => vibegrationsMessageAuthors.requestMessageAuthor(userId), items);
  const items1 = [UserStore];
  const items2 = [userId];
  return require("initialize").useStateFromStores(
    items1,
    () => {
      let user = null;
      if (null != userId) {
        user = UserStore.getUser(userId);
      }
      return vibegrationsMessageAuthors.resolveMessageAuthor(userId, user, UserStore.getCurrentUser());
    },
    items2,
  );
};
export { VibegrationsMessageHeader };
export const VibegrationsUserHeader = function VibegrationsUserHeader(userId) {
  userId = userId.userId;
  const items = [userId];
  const effect = noop.useEffect(() => vibegrationsMessageAuthors.requestMessageAuthor(userId), items);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = userId(504).useStateFromStores(
    items1,
    () => {
      let user = null;
      if (null != userId) {
        user = UserStore.getUser(userId);
      }
      return vibegrationsMessageAuthors.resolveMessageAuthor(userId, user, UserStore.getCurrentUser());
    },
    items2,
  );
  const obj = userId(504);
  const name = userId(4482).useName(stateFromStores);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (null != name) {
      const obj3 = { name, color: "text-default", at: userId.at };
      tmp4 = closure_6(VibegrationsMessageHeader, obj3);
    }
  }
  return tmp4;
};
export const VibegrationsConjureHeader = function VibegrationsConjureHeader(arg0) {
  const obj = { name: null, color: "text-brand", at: null };
  const intl = util.intl;
  obj.name = intl.string(_modDef3591.Xmvb23);
  obj.at = arg0.at;
  return timestampProducer(VibegrationsMessageHeader, obj);
};
export const VibegrationsUserAvatar = function VibegrationsUserAvatar(arg0) {
  ({ userId, size } = arg0);
  if (size === undefined) {
    size = userId(1177).AvatarSizes.NORMAL;
  }
  const items = [userId];
  const effect = noop.useEffect(() => vibegrationsMessageAuthors.requestMessageAuthor(userId), items);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = userId(504).useStateFromStores(
    items1,
    () => {
      let user = null;
      if (null != userId) {
        user = UserStore.getUser(userId);
      }
      return vibegrationsMessageAuthors.resolveMessageAuthor(userId, user, UserStore.getCurrentUser());
    },
    items2,
  );
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj2 = { size, user: stateFromStores, guildId: "Array" };
    tmp7 = closure_6(userId(1177).Avatar, obj2);
  }
  return tmp7;
};
export const VibegrationsConjureAvatar = function VibegrationsConjureAvatar() {
  const obj = {
    style: closure_8().conjureTile,
    children: timestampProducer(AppsIcon.AppsIcon, { size: "sm", color: nativeDefault.colors.TEXT_BRAND }),
  };
  return timestampProducer(View, obj);
};
