// discord_app/modules/collectibles/nameplates/native/NameplatePreview.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let num2;
  let num = 0;
  if (arg0) {
    num = nativeDefault.radii.sm;
  }
  const obj = {
    container: {
      borderRadius: num,
      padding: nativeDefault.space.PX_8,
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    },
    nameplate: { borderRadius: num2 },
    avatar: { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 },
    content: { flex: 1, paddingRight: nativeDefault.space.PX_40 },
  };
  num2 = 0;
  ({
    borderRadius: num,
    padding: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  });
  if (arg0) {
    num2 = nativeDefault.radii.sm;
  }
  ({ borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 });
  ({ flex: 1, paddingRight: nativeDefault.space.PX_40 });
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let animate;
      let guildId;
      let hasRoundedCorners;
      let nameplate;
      let nameplateData;
      let pendingDisplayNameStyles;
      let pendingGlobalName;
      let tmp4;
      let useReducedMotion;
      let user;
      const obj = user(576);
      const cResult = obj.c(47);
      ({ nameplate, nameplateData, user } = arg0);
      ({ hasRoundedCorners, animate, guildId } = arg0);
      ({ pendingDisplayNameStyles, pendingGlobalName, "aria-hidden": tmp4 } = arg0);
      const tmp6 = undefined === hasRoundedCorners || hasRoundedCorners;
      const tmp5Result = closure_9(tmp6);
      if (cResult[0] === nameplate) {
        let tmp11;
        let tmp15;
        let tmp14;
        let tmp18;
        const tmpResult = user(7898);
        let avatarDecoration = tmpResult.useAvatarDecoration(user, guildId);
        if (cResult[3] !== guildId) {
          const obj2 = { guildId };
          cResult[3] = guildId;
          cResult[4] = obj2;
          tmp11 = obj2;
        } else {
          tmp11 = cResult[4];
        }
        const pendingAvatarDecoration = guildId(7841)(tmp11).pendingAvatarDecoration;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          class O {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          cResult[5] = items;
          cResult[6] = O;
          tmp15 = O;
          tmp14 = items;
        } else {
          tmp14 = cResult[5];
          tmp15 = cResult[6];
        }
        const _Symbol2 = Symbol;
        const tmpResult4 = user(504);
        const stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [GuildMemberStore];
          class O {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          cResult[7] = items1;
          tmp18 = items1;
        } else {
          tmp18 = cResult[7];
        }
        if (cResult[8] === guildId) {
          let tmp20;
          if (cResult[9] === user) {
            tmp20 = cResult[10];
          }
          const tmpResult5 = user(504);
          const stateFromStores1 = tmpResult5.useStateFromStores(tmp18, tmp20);
          class O {
            constructor() {
              return useReducedMotion.useReducedMotion;
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
                  return useReducedMotion.useReducedMotion;
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
              let tmp25;
              if (cResult[13] === user.id) {
                tmp25 = cResult[14];
              }
              guildId(5312)(tmp25);
              class O {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              const obj3 = {
                style: tmp5Result.avatar,
                user,
                guildId,
                size: user(1188).AvatarSizes.NORMAL,
                avatarDecoration,
                animate: !stateFromStores,
                autoStatusCutout: true,
                "aria-hidden": true,
              };
              const Avatar = user(1188).Avatar;
              cResult[15] = avatarDecoration;
              cResult[16] = guildId;
              cResult[17] = tmp5Result.avatar;
              cResult[18] = !stateFromStores;
              cResult[19] = user;
              cResult[20] = closure_7(Avatar, obj3);
              const tmp30 = closure_7(Avatar, obj3);
            }
          }
          const obj4 = { userId: user.id, guildId, pendingDisplayNameStyles };
          cResult[11] = guildId;
          cResult[12] = pendingDisplayNameStyles;
          cResult[13] = user.id;
          cResult[14] = obj4;
          tmp25 = obj4;
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
      }
      let nameplateData1 = nameplateData;
      if (null != nameplate) {
        const tmpResult6 = user(1977);
        nameplateData1 = tmpResult6.getNameplateData(nameplate);
      }
      cResult[0] = nameplate;
      cResult[1] = nameplateData;
      cResult[2] = nameplateData1;
    }
  : (hasRoundedCorners) => {
      let items3;
      let items4;
      let nameplate;
      let nameplateData;
      let pendingDisplayNameStyles;
      let pendingGlobalName;
      let useReducedMotion;
      let user;
      ({ nameplate, nameplateData, user } = hasRoundedCorners);
      let flag = hasRoundedCorners.hasRoundedCorners;
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = hasRoundedCorners.animate;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const guildId = hasRoundedCorners.guildId;
      ({ pendingDisplayNameStyles, pendingGlobalName } = hasRoundedCorners);
      let stateFromStores;
      let pendingAvatarDecoration;
      const prop = hasRoundedCorners["aria-hidden"];
      const tmp2 = closure_9(flag);
      dependencyMap = tmp2;
      if (null != nameplate) {
        let obj = user(1977);
        nameplateData = obj.getNameplateData(nameplate);
      }
      const obj2 = user(7898);
      const avatarDecoration = obj2.useAvatarDecoration(user, guildId);
      pendingAvatarDecoration = guildId(7841)({ guildId }).pendingAvatarDecoration;
      const items = [AccessibilityStore];
      const obj3 = user(504);
      stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const items1 = [GuildMemberStore];
      const obj4 = user(504);
      const stateFromStores1 = obj4.useStateFromStores(items1, () => {
        let member = null;
        if (null != guildId) {
          member = null;
          if (null != user) {
            member = GuildMemberStore.getMember(tmp, tmp3.id);
          }
        }
        return member;
      });
      const obj5 = guildId(4728);
      const name = obj5.useName(user);
      if (pendingGlobalName == null) {
        let tmp12 = name;
        if (null != guildId) {
          let nick;
          if (stateFromStores1 != null) {
            nick = stateFromStores1.nick;
          }
          tmp12 = name;
          if (null != nick) {
            let nick1;
            if (stateFromStores1 != null) {
              nick1 = stateFromStores1.nick;
            }
            tmp12 = nick1;
          }
        }
        pendingGlobalName = tmp12;
      }
      let tmp15 = avatarDecoration;
      if (undefined !== pendingAvatarDecoration) {
        tmp15 = pendingAvatarDecoration;
      }
      pendingAvatarDecoration = tmp15;
      const obj6 = { userId: user.id, guildId, pendingDisplayNameStyles };
      const tmp16 = guildId(5312)(obj6);
      const items2 = [tmp2.avatar, user, guildId, tmp15, stateFromStores];
      const obj7 = { style: tmp2.container, "aria-hidden": prop, children: items3 };
      const memo = stateFromStores.useMemo(() => {
        const obj = {
          style: user.avatar,
          user,
          guildId,
          size: native.AvatarSizes.NORMAL,
          avatarDecoration: pendingAvatarDecoration,
          animate: !stateFromStores,
          autoStatusCutout: true,
          "aria-hidden": true,
        };
        const Avatar = native.Avatar;
        return metroImportDefault(Avatar, obj);
      }, items2);
      items3 = [, ,];
      const obj8 = { nameplate: nameplateData, style: tmp2.nameplate, fullOpacity: true, animate: flag2 };
      items3[0] = closure_7(guildId(8507), obj8);
      const obj9 = { style: tmp2.avatar, children: memo };
      items3[1] = closure_7(pendingAvatarDecoration, obj9);
      let tmp20Result = null != tmp16;
      const obj10 = { style: tmp2.content, children: items4 };
      if (tmp20Result) {
        const obj11 = {
          userId: user.id,
          guildId,
          userName: pendingGlobalName,
          variant: "text-md/semibold",
          effectDisplayType: user(10647).EffectDisplayType.STATIC,
          lineClamp: 1,
          pendingDisplayNameStyles,
        };
        const tmp8Result = guildId(10646);
        tmp20Result = closure_7(tmp8Result, obj11);
      }
      items4 = [tmp20Result];
      let tmp20Result2 = null == tmp16;
      if (tmp20Result2) {
        const obj12 = {
          lineClamp: 1,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: pendingGlobalName,
        };
        tmp20Result2 = closure_7(user(4892).Text, obj12);
      }
      items4[1] = tmp20Result2;
      items3[2] = closure_8(pendingAvatarDecoration, obj10);
      return closure_8(pendingAvatarDecoration, obj7);
    };
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = tmp3;
