// === Module 10613: useFastestListTableRowPlaceholderConfig ===

// Module 10613 (useFastestListTableRowPlaceholderConfig)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import LegacyTokens from "LegacyTokens" /* 5627 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6566 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
let size;
let createStyles = createStyles_mod;
let obj = { placeholder: obj2, placeholderAvatar: size, placeholderUsername: obj3, placeholderDivider: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
size = { width: native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32], height: native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32], borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj3 = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { backgroundColor: LegacyTokens.DIVIDER_BACKGROUND };
const styles = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(23);
  const tmp4 = styles();
  if (cResult[0] === tmp4.placeholder.backgroundColor) {
    if (cResult[1] === tmp4.placeholderAvatar.backgroundColor) {
      if (cResult[2] === tmp4.placeholderAvatar.width) {
        let tmp5;
        if (cResult[3] === tmp4.placeholderUsername.height) {
          tmp5 = cResult[4];
        }
        const sum = nativeDefault.space.PX_12 + tmp4.placeholderAvatar.width;
        const sum1 = sum + nativeDefault.space.PX_16;
        if (cResult[5] === tmp4.placeholderDivider.backgroundColor) {
          let tmp9;
          let tmp10;
          if (cResult[6] === sum1) {
            tmp9 = cResult[7];
          }
          if (cResult[8] !== tmp4.placeholder.backgroundColor) {
            const obj2 = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: tmp4.placeholder.backgroundColor, paddingVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, width: nativeDefault.space.PX_96 };
            cResult[8] = tmp4.placeholder.backgroundColor;
            cResult[9] = obj2;
            tmp10 = obj2;
          } else {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp5) {
            let tmp11;
            let tmp12;
            let tmp26;
            let tmp25;
            if (cResult[11] === tmp9) {
              tmp11 = cResult[12];
              tmp12 = cResult[13];
            }
            if (cResult[14] !== tmp5) {
              const obj3 = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
              const merged = Object.assign(tmp5);
              const obj4 = { borderRadius: nativeDefault.radii.lg };
              const merged1 = Object.assign(tmp5);
              cResult[14] = tmp5;
              cResult[15] = obj3;
              cResult[16] = obj4;
              tmp26 = obj4;
              tmp25 = obj3;
            } else {
              tmp25 = cResult[15];
              tmp26 = cResult[16];
            }
            if (cResult[17] === tmp10) {
              if (cResult[18] === tmp11) {
                if (cResult[19] === tmp12) {
                  if (cResult[20] === tmp25) {
                    let tmp33;
                    if (cResult[21] === tmp26) {
                      tmp33 = cResult[22];
                    }
                    return tmp33;
                  }
                }
              }
            }
            const obj5 = { sectionHeader: tmp10, sectionItem: tmp11, sectionItemAtFront: tmp12, sectionItemAtRear: tmp25, sectionItemSingleton: tmp26 };
            cResult[17] = tmp10;
            cResult[18] = tmp11;
            cResult[19] = tmp12;
            cResult[20] = tmp25;
            cResult[21] = tmp26;
            cResult[22] = obj5;
            tmp33 = obj5;
          }
          const obj6 = {};
          const merged2 = Object.assign(tmp5);
          const merged3 = Object.assign(tmp9);
          const obj7 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
          const merged4 = Object.assign(tmp5);
          const merged5 = Object.assign(tmp9);
          cResult[10] = tmp5;
          cResult[11] = tmp9;
          cResult[12] = obj6;
          cResult[13] = obj7;
          tmp12 = obj7;
          tmp11 = obj6;
        }
        const obj8 = { divider: true, dividerColorHex: tmp4.placeholderDivider.backgroundColor, dividerPaddingLeft: sum1 };
        cResult[5] = tmp4.placeholderDivider.backgroundColor;
        cResult[6] = sum1;
        cResult[7] = obj8;
        tmp9 = obj8;
      }
    }
  }
  const obj9 = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: tmp4.placeholder.backgroundColor, colorHex: tmp4.placeholderAvatar.backgroundColor, labelPadding: nativeDefault.space.PX_16, labelPaddingInnerRatio: 0, labelSize: tmp4.placeholderUsername.height, padding: nativeDefault.space.PX_12, shapeSize: tmp4.placeholderAvatar.width };
  cResult[0] = tmp4.placeholder.backgroundColor;
  cResult[1] = tmp4.placeholderAvatar.backgroundColor;
  cResult[2] = tmp4.placeholderAvatar.width;
  cResult[3] = tmp4.placeholderUsername.height;
  cResult[4] = obj9;
  tmp5 = obj9;
}) : (() => {
  const tmp = styles();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => {
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    let sum;
    const obj = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: closure_0.placeholder.backgroundColor, colorHex: closure_0.placeholderAvatar.backgroundColor, labelPadding: nativeDefault.space.PX_16, labelPaddingInnerRatio: 0, labelSize: closure_0.placeholderUsername.height, padding: nativeDefault.space.PX_12, shapeSize: closure_0.placeholderAvatar.width };
    const obj2 = { divider: true, dividerColorHex: closure_0.placeholderDivider.backgroundColor, dividerPaddingLeft: sum + nativeDefault.space.PX_16 };
    sum = nativeDefault.space.PX_12 + closure_0.placeholderAvatar.width;
    const obj3 = { sectionHeader: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: closure_0.placeholder.backgroundColor, paddingVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, width: nativeDefault.space.PX_96 }, sectionItem: obj5, sectionItemAtFront: obj6, sectionItemAtRear: obj7, sectionItemSingleton: obj8 };
    ({ type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: closure_0.placeholder.backgroundColor, paddingVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, width: nativeDefault.space.PX_96 });
    obj5 = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj2);
    obj6 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj2);
    obj7 = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
    const merged4 = Object.assign(obj);
    obj8 = { borderRadius: nativeDefault.radii.lg };
    const merged5 = Object.assign(obj);
    return obj3;
  }, items);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx");

export default tmp4;
export const useFastestListTableRowPlaceholderStyles = styles;