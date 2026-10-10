// === Module 9020: NameplateDummyUserPreview ===

// Module 9020 (NameplateDummyUserPreview)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import themes from "themes" /* 4825 */;
import NameplateDefault from "Nameplate" /* 9021 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = {};
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1200).AvatarSizes.XSMALL_20] = { padding: nativeDefault.space.PX_4, avatarMarginRight: nativeDefault.space.PX_4, placeholderBarHeight: 6 };
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1200).AvatarSizes.XSMALL] = { padding: 6, avatarMarginRight: 6, placeholderBarHeight: 8 };
let obj2 = { padding: nativeDefault.space.PX_4, avatarMarginRight: nativeDefault.space.PX_4, placeholderBarHeight: 6 };
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[fn(1200).AvatarSizes.NORMAL] = { padding: nativeDefault.space.PX_8, avatarMarginRight: nativeDefault.space.PX_8, placeholderBarHeight: 14 };
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles((arg0, arg1) => {
  obj = { container: { padding: obj[arg0].padding, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative", borderRadius: nativeDefault.radii.sm }, avatarContainer: null, avatar: null, placeholderBar: null, nameplate: null };
  const obj3 = { borderRadius: nativeDefault.radii.round, marginRight: obj[arg0].avatarMarginRight, backgroundColor: null };
  let str = "transparent";
  if (arg1) {
    str = nativeDefault.colors.BORDER_STRONG;
  }
  obj3.backgroundColor = str;
  obj.avatarContainer = obj3;
  let num = 0.5;
  if (arg1) {
    num = 0;
  }
  obj.avatar = { opacity: num };
  const obj2 = { padding: obj[arg0].padding, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative", borderRadius: nativeDefault.radii.sm };
  obj.placeholderBar = { borderRadius: nativeDefault.radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: nativeDefault.colors.BORDER_STRONG };
  const obj4 = { borderRadius: nativeDefault.radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: nativeDefault.colors.BORDER_STRONG };
  obj.nameplate = { borderRadius: nativeDefault.radii.sm };
  return obj;
});
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_8, avatarMarginRight: nativeDefault.space.PX_8, placeholderBarHeight: 14 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx");

export { NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG };
export const NameplateDummyUserPreview = ReactCompilerGating.isReactCompilerEnabled() ? (function NameplateDummyUserPreview(arg0) {
  const cResult = c.c(26);
  ({ width, hideAvatar, avatarSize, nameplate, style, animate } = arg0);
  if (undefined === avatarSize) {
    avatarSize = native.AvatarSizes.NORMAL;
  }
  const tmp6 = closure_8(avatarSize, undefined !== hideAvatar && hideAvatar);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function p() {
      return themes.isThemeDark(theme.theme);
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  initialize;
  if (cResult[2] === style) {
    if (cResult[3] === tmp6.container) {
      let tmp12 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === nameplate) {
        if (cResult[7] === tmp6.nameplate) {
          let tmp13 = cResult[8];
        }
        const tmp17 = importDefault(tmp11 ? 9023 : 9024);
        if (cResult[9] === avatarSize) {
          if (cResult[10] === tmp6.avatar) {
            if (cResult[11] === tmp17) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] === tmp6.avatarContainer) {
              if (cResult[14] === tmp18) {
                let tmp21 = cResult[15];
              }
              if (cResult[16] !== width) {
                const obj2 = { width };
                cResult[16] = width;
                cResult[17] = obj2;
                let tmp25 = obj2;
              } else {
                tmp25 = cResult[17];
              }
              if (cResult[18] === tmp6.placeholderBar) {
                if (cResult[19] === tmp25) {
                  let tmp26 = cResult[20];
                }
                if (cResult[21] === tmp21) {
                  if (cResult[22] === tmp26) {
                    if (cResult[23] === tmp12) {
                      if (cResult[24] === tmp13) {
                        let tmp30 = cResult[25];
                      }
                      return tmp30;
                    }
                  }
                }
                const obj3 = { style: tmp12, children: null };
                const items1 = [tmp13, tmp21, tmp26];
                obj3.children = items1;
                const tmp33 = timestampProducer(View, obj3);
                cResult[21] = tmp21;
                cResult[22] = tmp26;
                cResult[23] = tmp12;
                cResult[24] = tmp13;
                cResult[25] = tmp33;
                tmp30 = tmp33;
              }
              const obj4 = { style: null };
              const items2 = [tmp6.placeholderBar, tmp25];
              obj4.style = items2;
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
    const obj7 = { nameplate, fullOpacity: true, style: tmp6.nameplate, animate: tmp5 };
    const tmp16 = hasOwnProperty(NameplateDefault, obj7);
    cResult[5] = tmp5;
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
  const tmp4 = undefined !== hideAvatar && hideAvatar;
}) : (function NameplateDummyUserPreview(hideAvatar) {
  let flag = hideAvatar.hideAvatar;
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
  const items = [ThemeStore];
  const obj2 = { style: null, children: null };
  const items1 = [tmp3.container, style];
  obj2.style = items1;
  const stateFromStores = initialize.useStateFromStores(items, () => themes.isThemeDark(theme.theme));
  const items2 = [hasOwnProperty(NameplateDefault, { nameplate, fullOpacity: true, style: tmp3.nameplate, animate }), , ];
  const obj4 = { style: tmp3.avatarContainer, children: null };
  const obj3 = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  obj4.children = hasOwnProperty(native.Avatar, { source: importDefault(stateFromStores ? 9023 : 9024), size: NORMAL, "aria-hidden": true, style: tmp3.avatar });
  items2[1] = hasOwnProperty(View, obj4);
  const obj6 = { style: null };
  const items3 = [tmp3.placeholderBar, { width: hideAvatar.width }];
  obj6.style = items3;
  items2[2] = hasOwnProperty(View, obj6);
  obj2.children = items2;
  return timestampProducer(View, obj2);
});