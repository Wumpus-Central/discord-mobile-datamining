// === Module 11366: NameplatePreview ===

// Module 11366 (NameplatePreview)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = nativeDefault.radii.sm;
  }
  const obj = { container: { borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, nameplate: null, avatar: null, content: null };
  let num2 = 0;
  if (arg0) {
    num2 = nativeDefault.radii.sm;
  }
  obj.nameplate = { borderRadius: num2 };
  const obj2 = { borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.avatar = { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 };
  const obj3 = { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 };
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
    nameplateData = user(1887).getNameplateData(nameplate);
    const obj = user(1887);
  }
  const avatarDecoration = user(8345).useAvatarDecoration(user, guildId);
  pendingAvatarDecoration = guildId(8288)({ guildId }).pendingAvatarDecoration;
  const obj2 = user(8345);
  const items = [AccessibilityStore];
  stateFromStores = user(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = user(504);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = user(504).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const obj4 = user(504);
  const name = guildId(4482).useName(user);
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
  const tmp15 = guildId(4872)({ userId: user.id, guildId, pendingDisplayNameStyles });
  const items2 = [tmp.avatar, user, guildId, tmp14, stateFromStores];
  const obj7 = { style: tmp.container, "aria-hidden": aria_hidden["aria-hidden"], children: null };
  const memo = stateFromStores.useMemo(() => React5(native.Avatar, { style: user.avatar, user, guildId, size: native.AvatarSizes.NORMAL, avatarDecoration: pendingAvatarDecoration, animate: !stateFromStores, autoStatusCutout: true, "aria-hidden": true }), items2);
  const items3 = [closure_7(guildId(8959), { nameplate: nameplateData, style: tmp.nameplate, fullOpacity: true, animate: flag2 }), closure_7(pendingAvatarDecoration, { style: tmp.avatar, children: memo }), ];
  const obj10 = { style: tmp.content, children: null };
  let tmp19Result = null != tmp15;
  if (tmp19Result) {
    const obj11 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(11046).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    tmp19Result = closure_7(tmp7(11045), obj11);
    const tmp7Result = tmp7(11045);
  }
  const items4 = [tmp19Result, ];
  let tmp19Result2 = null == tmp15;
  if (tmp19Result2) {
    const obj12 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
    tmp19Result2 = closure_7(user(4634).Text, obj12);
  }
  items4[1] = tmp19Result2;
  obj10.children = items4;
  items3[2] = closure_8(pendingAvatarDecoration, obj10);
  obj7.children = items3;
  return closure_8(pendingAvatarDecoration, obj7);
};