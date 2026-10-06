// === Module 14746: FamilyCenterAvatarPair ===

// Module 14746 (FamilyCenterAvatarPair)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { avatars: obj2, icon: { height: 24, width: 24, marginHorizontal: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 8 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currentUser;
  let iconSrc;
  let iconStyles;
  let items1;
  let otherUser;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(17);
  ({ otherUser, iconSrc, iconStyles } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let tmp9 = null;
  if (undefined !== stateFromStores) {
    tmp9 = null;
    if (undefined !== otherUser) {
      let tmp10;
      if (cResult[2] !== stateFromStores) {
        const obj2 = { size: native.AvatarSizes.LARGE_48, user: stateFromStores, guildId: "Array", avatarDecoration: stateFromStores.avatarDecoration };
        const Avatar = native.Avatar;
        const tmp12 = React3(Avatar, obj2);
        cResult[2] = stateFromStores;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === iconStyles) {
        let tmp13;
        if (cResult[5] === tmp4.icon) {
          tmp13 = cResult[6];
        }
        if (cResult[7] === iconSrc) {
          let tmp14;
          let tmp17;
          if (cResult[8] === tmp13) {
            tmp14 = cResult[9];
          }
          if (cResult[10] !== otherUser) {
            const obj3 = { size: native.AvatarSizes.LARGE_48, user: otherUser, guildId: "Array", avatarDecoration: otherUser.avatarDecoration };
            const Avatar2 = native.Avatar;
            const tmp19 = React3(Avatar2, obj3);
            cResult[10] = otherUser;
            cResult[11] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[11];
          }
          if (cResult[12] === tmp4.avatars) {
            if (cResult[13] === tmp10) {
              if (cResult[14] === tmp14) {
                let tmp20;
                if (cResult[15] === tmp17) {
                  tmp20 = cResult[16];
                }
                tmp9 = tmp20;
              }
            }
          }
          const obj4 = { style: tmp4.avatars, children: items1 };
          items1 = [tmp10, tmp14, tmp17];
          const tmp23 = hasOwnProperty(View, obj4);
          cResult[12] = tmp4.avatars;
          cResult[13] = tmp10;
          cResult[14] = tmp14;
          cResult[15] = tmp17;
          cResult[16] = tmp23;
          tmp20 = tmp23;
        }
        const obj5 = { style: tmp13, size: native.Icon.Sizes.EXTRA_SMALL, source: iconSrc };
        const Icon = native.Icon;
        const tmp16 = React3(Icon, obj5);
        cResult[7] = iconSrc;
        cResult[8] = tmp13;
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      const items2 = [tmp4.icon, iconStyles];
      cResult[4] = iconStyles;
      cResult[5] = tmp4.icon;
      cResult[6] = items2;
      tmp13 = items2;
    }
  }
  return tmp9;
}) : ((otherUser) => {
  let currentUser;
  let iconSrc;
  let iconStyles;
  let items1;
  let items2;
  otherUser = otherUser.otherUser;
  ({ iconSrc, iconStyles } = otherUser);
  const tmp = closure_6();
  const items = [UserStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = null;
  if (undefined !== stateFromStores) {
    tmp5 = null;
    if (undefined !== otherUser) {
      const obj2 = { style: tmp.avatars, children: items1 };
      const obj3 = { size: native.AvatarSizes.LARGE_48, user: stateFromStores, guildId: "Array", avatarDecoration: stateFromStores.avatarDecoration };
      const Avatar = native.Avatar;
      items1 = [React3(Avatar, obj3), , ];
      const obj4 = { style: items2, size: native.Icon.Sizes.EXTRA_SMALL, source: iconSrc };
      items2 = [tmp.icon, iconStyles];
      const Icon = native.Icon;
      items1[1] = React3(Icon, obj4);
      const obj5 = { size: native.AvatarSizes.LARGE_48, user: otherUser, guildId: "Array", avatarDecoration: otherUser.avatarDecoration };
      const Avatar2 = native.Avatar;
      items1[2] = React3(Avatar2, obj5);
      tmp5 = hasOwnProperty(View, obj2);
    }
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default tmp4;