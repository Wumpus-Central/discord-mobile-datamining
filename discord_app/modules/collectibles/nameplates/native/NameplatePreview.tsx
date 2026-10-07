// discord_app/modules/collectibles/nameplates/native/NameplatePreview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = user(576).c(47);
  ({ nameplate, nameplateData, user } = arg0);
  ({ hasRoundedCorners, animate, guildId } = arg0);
  ({ pendingDisplayNameStyles, pendingGlobalName, aria-hidden: tmp4 } = arg0);
  let tmp6 = undefined === hasRoundedCorners;
  if (!tmp6) {
    tmp6 = hasRoundedCorners;
  }
  const tmp5Result = closure_9(tmp6);
  if (cResult[0] === nameplate) {
    let avatarDecoration = user(7898).useAvatarDecoration(user, guildId);
    if (cResult[3] !== guildId) {
      const obj2 = { guildId };
      cResult[3] = guildId;
      cResult[4] = obj2;
      let tmp11 = obj2;
    } else {
      tmp11 = cResult[4];
    }
    const pendingAvatarDecoration = guildId(7841)(tmp11).pendingAvatarDecoration;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      class O {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      cResult[5] = items;
      cResult[6] = O;
      let tmp15 = O;
      let tmp14 = items;
    } else {
      tmp14 = cResult[5];
      tmp15 = cResult[6];
    }
    const tmpResult = user(7898);
    const _Symbol2 = Symbol;
    const stateFromStores = user(504).useStateFromStores(tmp14, tmp15);
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildMemberStore];
      class O {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      cResult[7] = items1;
      let tmp18 = items1;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] === guildId) {
      if (cResult[9] === user) {
        let tmp20 = cResult[10];
      }
      const stateFromStores1 = user(504).useStateFromStores(tmp18, tmp20);
      class O {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      const name = obj7.useName(user);
      if (pendingGlobalName == null) {
        let tmp24 = name;
        if (null != guildId) {
          if (stateFromStores1 != null) {
            const nick = stateFromStores1.nick;
          }
          tmp24 = name;
          class O {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
        }
        pendingGlobalName = tmp24;
      }
      if (undefined !== pendingAvatarDecoration) {
        avatarDecoration = pendingAvatarDecoration;
      }
      if (cResult[11] === guildId) {
        if (cResult[12] === pendingDisplayNameStyles) {
          if (cResult[13] === user.id) {
            let tmp25 = cResult[14];
          }
          guildId(5312)(tmp25);
          class O {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          const obj3 = { style: tmp5Result.avatar, user, guildId, size: user(1188).AvatarSizes.NORMAL, avatarDecoration, animate: !stateFromStores, autoStatusCutout: true, "aria-hidden": true };
          const tmp30 = closure_7(user(1188).Avatar, obj3);
          cResult[15] = avatarDecoration;
          cResult[16] = guildId;
          cResult[17] = tmp5Result.avatar;
          cResult[18] = !stateFromStores;
          cResult[19] = user;
          cResult[20] = tmp30;
        }
      }
      const obj4 = { userId: user.id, guildId, pendingDisplayNameStyles };
      cResult[11] = guildId;
      cResult[12] = pendingDisplayNameStyles;
      cResult[13] = user.id;
      cResult[14] = obj4;
      tmp25 = obj4;
      const tmpResult5 = user(504);
    }
    const fn = function w() {
      let member = null;
      if (null != guildId) {
        member = null;
        if (null != user) {
          member = GuildMemberStore.getMember(tmp, tmp3.id);
        }
      }
      return member;
    };
    cResult[8] = guildId;
    cResult[9] = user;
    cResult[10] = fn;
    tmp20 = fn;
    const tmpResult4 = user(504);
  }
  let nameplateData1 = nameplateData;
  if (null != nameplate) {
    nameplateData1 = user(1977).getNameplateData(nameplate);
    const tmpResult6 = user(1977);
  }
  cResult[0] = nameplate;
  cResult[1] = nameplateData;
  cResult[2] = nameplateData1;
  const obj = user(576);
}) : ((aria_hidden) => {
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
    nameplateData = user(1977).getNameplateData(nameplate);
    const obj = user(1977);
  }
  const avatarDecoration = user(7898).useAvatarDecoration(user, guildId);
  pendingAvatarDecoration = guildId(7841)({ guildId }).pendingAvatarDecoration;
  const obj2 = user(7898);
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
  const name = guildId(4728).useName(user);
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
  const tmp15 = guildId(5312)({ userId: user.id, guildId, pendingDisplayNameStyles });
  const items2 = [tmp.avatar, user, guildId, tmp14, stateFromStores];
  const obj7 = { style: tmp.container, "aria-hidden": aria_hidden["aria-hidden"], children: null };
  const memo = stateFromStores.useMemo(() => React5(native.Avatar, { style: user.avatar, user, guildId, size: native.AvatarSizes.NORMAL, avatarDecoration: pendingAvatarDecoration, animate: !stateFromStores, autoStatusCutout: true, "aria-hidden": true }), items2);
  const items3 = [closure_7(guildId(8507), { nameplate: nameplateData, style: tmp.nameplate, fullOpacity: true, animate: flag2 }), closure_7(pendingAvatarDecoration, { style: tmp.avatar, children: memo }), ];
  const obj10 = { style: tmp.content, children: null };
  let tmp19Result = null != tmp15;
  if (tmp19Result) {
    const obj11 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(10647).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    tmp19Result = closure_7(tmp7(10646), obj11);
    const tmp7Result = tmp7(10646);
  }
  const items4 = [tmp19Result, ];
  let tmp19Result2 = null == tmp15;
  if (tmp19Result2) {
    const obj12 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
    tmp19Result2 = closure_7(user(4892).Text, obj12);
  }
  items4[1] = tmp19Result2;
  obj10.children = items4;
  items3[2] = closure_8(pendingAvatarDecoration, obj10);
  obj7.children = items3;
  return closure_8(pendingAvatarDecoration, obj7);
});