// === Module 8506: NameplateDummyUserPreview ===

// Module 8506 (NameplateDummyUserPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import themes from "themes" /* 4593 */;
import NameplateDefault from "Nameplate" /* 8507 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = {};
let obj2 = { padding: nativeDefault.space.PX_4, avatarMarginRight: nativeDefault.space.PX_4, placeholderBarHeight: 6 };
const XSMALL_20 = native.AvatarSizes.XSMALL_20;
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[XSMALL_20] = obj2;
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[native.AvatarSizes.XSMALL] = { padding: 6, avatarMarginRight: 6, placeholderBarHeight: 8 };
let obj3 = { padding: nativeDefault.space.PX_8, avatarMarginRight: nativeDefault.space.PX_8, placeholderBarHeight: 14 };
let NORMAL = native.AvatarSizes.NORMAL;
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[NORMAL] = obj3;
let closure_8 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let obj;
  let obj3;
  let str;
  obj = { container: { padding: obj[arg0].padding, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative", borderRadius: nativeDefault.radii.sm }, avatarContainer: obj3, avatar: { opacity: num }, placeholderBar: { borderRadius: nativeDefault.radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: nativeDefault.colors.BORDER_STRONG }, nameplate: { borderRadius: nativeDefault.radii.sm } };
  ({ padding: obj[arg0].padding, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative", borderRadius: nativeDefault.radii.sm });
  obj3 = { borderRadius: nativeDefault.radii.round, marginRight: obj[arg0].avatarMarginRight, backgroundColor: str };
  str = "transparent";
  if (arg1) {
    str = nativeDefault.colors.BORDER_STRONG;
  }
  num = 0.5;
  if (arg1) {
    num = 0;
  }
  ({ borderRadius: nativeDefault.radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: nativeDefault.colors.BORDER_STRONG });
  ({ borderRadius: nativeDefault.radii.sm });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animate;
  let avatarSize;
  let hideAvatar;
  let items1;
  let items2;
  let nameplate;
  let style;
  let theme;
  let tmp7;
  let tmp8;
  let width;
  let obj = react2;
  const cResult = obj.c(26);
  ({ width, hideAvatar, avatarSize, nameplate, style, animate } = arg0);
  const tmp4 = undefined !== hideAvatar && hideAvatar;
  if (undefined === avatarSize) {
    avatarSize = native.AvatarSizes.NORMAL;
  }
  const tmp6 = closure_8(avatarSize, tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function v() {
      const obj = themes;
      return obj.isThemeDark(theme.theme);
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  get_initialized;
  if (cResult[2] === style) {
    let tmp12;
    if (cResult[3] === tmp6.container) {
      tmp12 = cResult[4];
    }
    if (cResult[5] === (undefined !== animate && animate)) {
      if (cResult[6] === nameplate) {
        let tmp13;
        if (cResult[7] === tmp6.nameplate) {
          tmp13 = cResult[8];
        }
        const tmp17 = importDefault(tmp11 ? 8509 : 8510);
        if (cResult[9] === avatarSize) {
          if (cResult[10] === tmp6.avatar) {
            let tmp18;
            if (cResult[11] === tmp17) {
              tmp18 = cResult[12];
            }
            if (cResult[13] === tmp6.avatarContainer) {
              let tmp21;
              let tmp25;
              if (cResult[14] === tmp18) {
                tmp21 = cResult[15];
              }
              if (cResult[16] !== width) {
                const obj2 = { width };
                cResult[16] = width;
                cResult[17] = obj2;
                tmp25 = obj2;
              } else {
                tmp25 = cResult[17];
              }
              if (cResult[18] === tmp6.placeholderBar) {
                let tmp26;
                if (cResult[19] === tmp25) {
                  tmp26 = cResult[20];
                }
                if (cResult[21] === tmp21) {
                  if (cResult[22] === tmp26) {
                    if (cResult[23] === tmp12) {
                      let tmp30;
                      if (cResult[24] === tmp13) {
                        tmp30 = cResult[25];
                      }
                      return tmp30;
                    }
                  }
                }
                const obj3 = { style: tmp12, children: items1 };
                items1 = [tmp13, tmp21, tmp26];
                const tmp33 = metroRequire(View, obj3);
                cResult[21] = tmp21;
                cResult[22] = tmp26;
                cResult[23] = tmp12;
                cResult[24] = tmp13;
                cResult[25] = tmp33;
                tmp30 = tmp33;
              }
              const obj4 = { style: items2 };
              items2 = [tmp6.placeholderBar, tmp25];
              const tmp29 = hasOwnProperty(View, obj4);
              cResult[18] = tmp6.placeholderBar;
              cResult[19] = tmp25;
              cResult[20] = tmp29;
              tmp26 = tmp29;
            }
            const obj5 = { style: tmp6.avatarContainer, children: tmp18 };
            const tmp24 = hasOwnProperty(View, obj5);
            cResult[13] = tmp6.avatarContainer;
            cResult[14] = tmp18;
            cResult[15] = tmp24;
            tmp21 = tmp24;
          }
        }
        const obj6 = { source: tmp17, size: avatarSize, "aria-hidden": true, style: tmp6.avatar };
        const tmp20 = hasOwnProperty(native.Avatar, obj6);
        cResult[9] = avatarSize;
        cResult[10] = tmp6.avatar;
        cResult[11] = tmp17;
        cResult[12] = tmp20;
        tmp18 = tmp20;
      }
    }
    const obj7 = { nameplate, fullOpacity: true, style: tmp6.nameplate, animate: undefined !== animate && animate };
    const tmp16 = hasOwnProperty(NameplateDefault, obj7);
    cResult[5] = undefined !== animate && animate;
    cResult[6] = nameplate;
    cResult[7] = tmp6.nameplate;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const items3 = [tmp6.container, style];
  cResult[2] = style;
  cResult[3] = tmp6.container;
  cResult[4] = items3;
  tmp12 = items3;
}) : ((hideAvatar) => {
  let Avatar;
  let animate;
  let items1;
  let items2;
  let items3;
  let nameplate;
  let obj5;
  let style;
  let theme;
  let flag = hideAvatar.hideAvatar;
  const width = hideAvatar.width;
  if (flag === undefined) {
    flag = false;
  }
  let NORMAL = hideAvatar.avatarSize;
  if (NORMAL === undefined) {
    NORMAL = native.AvatarSizes.NORMAL;
  }
  ({ animate, nameplate, style } = hideAvatar);
  if (animate === undefined) {
    animate = false;
  }
  const tmp3 = closure_8(NORMAL, flag);
  let obj = get_initialized;
  const items = [ThemeStore];
  const obj2 = { style: items1, children: items2 };
  items1 = [tmp3.container, style];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = themes;
    return obj.isThemeDark(theme.theme);
  });
  items2 = [, , ];
  const obj3 = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  items2[0] = hasOwnProperty(NameplateDefault, obj3);
  const obj4 = { style: tmp3.avatarContainer, children: hasOwnProperty(Avatar, obj5) };
  obj5 = { source: importDefault(stateFromStores ? 8509 : 8510), size: NORMAL, "aria-hidden": true, style: tmp3.avatar };
  Avatar = native.Avatar;
  items2[1] = hasOwnProperty(View, obj4);
  const obj6 = { style: items3 };
  items3 = [tmp3.placeholderBar, { width }];
  items2[2] = hasOwnProperty(View, obj6);
  return metroRequire(View, obj2);
});
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx");

export { NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG };
export const NameplateDummyUserPreview = tmp4;