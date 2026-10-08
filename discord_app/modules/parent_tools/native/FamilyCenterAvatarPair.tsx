// discord_app/modules/parent_tools/native/FamilyCenterAvatarPair.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  avatars: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  icon: { height: 24, width: 24, marginHorizontal: 16 },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 8,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterAvatarPair(arg0) {
      const cResult = c.c(17);
      ({ otherUser, iconSrc, iconStyles } = arg0);
      let avatars = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
      let tmp8 = null;
      if (undefined !== stateFromStores) {
        tmp8 = null;
        if (undefined !== otherUser) {
          if (cResult[2] !== stateFromStores) {
            const obj2 = {
              size: native.AvatarSizes.LARGE_48,
              user: stateFromStores,
              guildId: "Array",
              avatarDecoration: stateFromStores.avatarDecoration,
            };
            const tmp11 = React4(native.Avatar, obj2);
            cResult[2] = stateFromStores;
            cResult[3] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[3];
          }
          if (cResult[4] === iconStyles) {
            if (cResult[5] === avatars.icon) {
              let tmp12 = cResult[6];
            }
            if (cResult[7] === iconSrc) {
              if (cResult[8] === tmp12) {
                let tmp13 = cResult[9];
              }
              if (cResult[10] !== otherUser) {
                const obj3 = {
                  size: native.AvatarSizes.LARGE_48,
                  user: otherUser,
                  guildId: "Array",
                  avatarDecoration: otherUser.avatarDecoration,
                };
                const tmp18 = React4(native.Avatar, obj3);
                cResult[10] = otherUser;
                cResult[11] = tmp18;
                let tmp16 = tmp18;
              } else {
                tmp16 = cResult[11];
              }
              if (cResult[12] === avatars.avatars) {
                if (cResult[13] === tmp9) {
                  if (cResult[14] === tmp13) {
                  }
                }
              }
              const obj4 = { style: avatars.avatars, children: null };
              const items1 = [tmp9, tmp13, tmp16];
              obj4.children = items1;
              const tmp22 = hasOwnProperty(View, obj4);
              avatars = avatars.avatars;
              cResult[12] = avatars;
              cResult[13] = tmp9;
              cResult[14] = tmp13;
              cResult[15] = tmp16;
              cResult[16] = tmp22;
            }
            const obj5 = { style: tmp12, size: native.Icon.Sizes.EXTRA_SMALL, source: iconSrc };
            const tmp15 = React4(native.Icon, obj5);
            cResult[7] = iconSrc;
            cResult[8] = tmp12;
            cResult[9] = tmp15;
            tmp13 = tmp15;
          }
          const items2 = [avatars.icon, iconStyles];
          cResult[4] = iconStyles;
          cResult[5] = avatars.icon;
          cResult[6] = items2;
          tmp12 = items2;
        }
      }
      return tmp8;
    }
  : function FamilyCenterAvatarPair(otherUser) {
      otherUser = otherUser.otherUser;
      ({ iconSrc, iconStyles } = otherUser);
      const tmp = closure_6();
      const items = [UserStore];
      const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
      let tmp5 = null;
      if (undefined !== stateFromStores) {
        tmp5 = null;
        if (undefined !== otherUser) {
          const obj2 = { style: tmp.avatars, children: null };
          const obj3 = {
            size: native.AvatarSizes.LARGE_48,
            user: stateFromStores,
            guildId: "Array",
            avatarDecoration: stateFromStores.avatarDecoration,
          };
          const items1 = [React4(native.Avatar, obj3), ,];
          const obj4 = { style: null, size: null, source: null };
          const items2 = [tmp.icon, iconStyles];
          obj4.style = items2;
          obj4.size = native.Icon.Sizes.EXTRA_SMALL;
          obj4.source = iconSrc;
          items1[1] = React4(native.Icon, obj4);
          const obj5 = {
            size: native.AvatarSizes.LARGE_48,
            user: otherUser,
            guildId: "Array",
            avatarDecoration: otherUser.avatarDecoration,
          };
          items1[2] = React4(native.Avatar, obj5);
          obj2.children = items1;
          tmp5 = hasOwnProperty(View, obj2);
        }
      }
      return tmp5;
    };
