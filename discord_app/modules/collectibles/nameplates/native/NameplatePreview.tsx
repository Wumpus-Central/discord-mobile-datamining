// === Module 11220: NameplatePreview ===

// Module 11220 (NameplatePreview)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = nativeDefault.radii.sm;
  }
  let obj = { container: null, nameplate: null, avatar: null, content: null };
  obj = { borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.container = obj;
  let num2 = 0;
  if (arg0) {
    num2 = nativeDefault.radii.sm;
  }
  obj.nameplate = { borderRadius: num2 };
  obj = { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 };
  obj.avatar = obj;
  obj.content = { flex: 1, paddingRight: nativeDefault.space.PX_40 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = function NameplatePreview(aria_hidden) {
  ({ nameplate, nameplateData, user } = aria_hidden);
  let flag = aria_hidden.hasRoundedCorners;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = aria_hidden.animate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const guildId = aria_hidden.guildId;
  ({ pendingDisplayNameStyles, pendingGlobalName } = aria_hidden);
  let stateFromStores;
  let pendingAvatarDecoration;
  const tmp = closure_9(flag);
  dependencyMap = tmp;
  if (null != nameplate) {
    let obj = user(1886);
    nameplateData = obj.getNameplateData(nameplate);
  }
  let obj1 = user(8217);
  const avatarDecoration = obj1.useAvatarDecoration(user, guildId);
  pendingAvatarDecoration = guildId(8159)({ guildId }).pendingAvatarDecoration;
  let obj2 = user(504);
  const items = [AccessibilityStore];
  stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj3 = user(504);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  let obj4 = guildId(4404);
  const name = obj4.useName(user);
  if (pendingGlobalName == null) {
    let tmp11 = name;
    if (null != guildId) {
      let nick;
      if (stateFromStores1 != null) {
        nick = stateFromStores1.nick;
      }
      tmp11 = name;
      if (null != nick) {
        let nick1;
        if (stateFromStores1 != null) {
          nick1 = stateFromStores1.nick;
        }
        tmp11 = nick1;
      }
    }
    pendingGlobalName = tmp11;
  }
  let tmp14 = avatarDecoration;
  if (undefined !== pendingAvatarDecoration) {
    tmp14 = pendingAvatarDecoration;
  }
  pendingAvatarDecoration = tmp14;
  obj = { userId: user.id, guildId, pendingDisplayNameStyles };
  const tmp15 = guildId(4794)(obj);
  const items2 = [tmp.avatar, user, guildId, tmp14, stateFromStores];
  obj = { style: tmp.container, "aria-hidden": aria_hidden["aria-hidden"], children: null };
  const memo = stateFromStores.useMemo(() => React5(native.Avatar, { style: user.avatar, user, guildId, size: native.AvatarSizes.NORMAL, avatarDecoration: pendingAvatarDecoration, animate: !stateFromStores, autoStatusCutout: true, "aria-hidden": true }), items2);
  obj1 = { nameplate: nameplateData, style: tmp.nameplate, fullOpacity: true, animate: flag2 };
  const items3 = [closure_7(guildId(8818), obj1), , ];
  obj2 = { style: tmp.avatar, children: memo };
  items3[1] = closure_7(pendingAvatarDecoration, obj2);
  obj3 = { style: tmp.content, children: null };
  let tmp19Result = null != tmp15;
  if (tmp19Result) {
    obj4 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(10900).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    tmp19Result = closure_7(tmp7(10899), obj4);
    const tmp7Result = tmp7(10899);
  }
  const items4 = [tmp19Result, ];
  tmp19Result = null == tmp15;
  if (tmp19Result) {
    const obj5 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
    tmp19Result = closure_7(user(4556).Text, obj5);
  }
  items4[1] = tmp19Result;
  obj3.children = items4;
  items3[2] = closure_8(pendingAvatarDecoration, obj3);
  obj.children = items3;
  return closure_8(pendingAvatarDecoration, obj);
};