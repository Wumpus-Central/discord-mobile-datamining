// === Module 10600: useFastestListTableRowPlaceholderConfig ===

// Module 10600 (useFastestListTableRowPlaceholderConfig)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6559 */;
import noop from "module_19" /* 19 */;

require = fn;
const createStyles = fn(4890);
let obj2 = { placeholder: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT }, placeholderAvatar: null, placeholderUsername: null, placeholderDivider: null };
let size = { width: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.REFRESH_MEDIUM_32], height: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.REFRESH_MEDIUM_32], borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.placeholderAvatar = size;
let obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.placeholderUsername = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let obj4 = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.placeholderDivider = { backgroundColor: fn(5620).DIVIDER_BACKGROUND };
const styles = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: fn(5620).DIVIDER_BACKGROUND };
size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(23);
  const tmp4 = styles();
  if (cResult[0] === tmp4.placeholder.backgroundColor) {
    if (cResult[1] === tmp4.placeholderAvatar.backgroundColor) {
      if (cResult[2] === tmp4.placeholderAvatar.width) {
        if (cResult[3] === tmp4.placeholderUsername.height) {
          let tmp5 = cResult[4];
        }
        const sum = nativeDefault.space.PX_12 + tmp4.placeholderAvatar.width;
        const sum1 = sum + nativeDefault.space.PX_16;
        if (cResult[5] === tmp4.placeholderDivider.backgroundColor) {
          if (cResult[6] === sum1) {
            let tmp9 = cResult[7];
          }
          if (cResult[8] !== tmp4.placeholder.backgroundColor) {
            const obj2 = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: tmp4.placeholder.backgroundColor, paddingVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, width: nativeDefault.space.PX_96 };
            cResult[8] = tmp4.placeholder.backgroundColor;
            cResult[9] = obj2;
            let tmp10 = obj2;
          } else {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp9) {
              let tmp11 = cResult[12];
              let tmp12 = cResult[13];
            }
            if (cResult[14] !== tmp5) {
              const obj3 = {};
              const merged = Object.assign(tmp5);
              obj3.borderBottomLeftRadius = nativeDefault.radii.lg;
              obj3.borderBottomRightRadius = nativeDefault.radii.lg;
              const obj4 = {};
              const merged1 = Object.assign(tmp5);
              obj4.borderRadius = nativeDefault.radii.lg;
              cResult[14] = tmp5;
              cResult[15] = obj3;
              cResult[16] = obj4;
              let tmp26 = obj4;
              let tmp25 = obj3;
            } else {
              tmp25 = cResult[15];
              tmp26 = cResult[16];
            }
            if (cResult[17] === tmp10) {
              if (cResult[18] === tmp11) {
                if (cResult[19] === tmp12) {
                  if (cResult[20] === tmp25) {
                    if (cResult[21] === tmp26) {
                      let tmp33 = cResult[22];
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
          const obj7 = {};
          const merged4 = Object.assign(tmp5);
          const merged5 = Object.assign(tmp9);
          obj7.borderTopLeftRadius = nativeDefault.radii.lg;
          obj7.borderTopRightRadius = nativeDefault.radii.lg;
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
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => {
    const obj = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: closure_0.placeholder.backgroundColor, colorHex: closure_0.placeholderAvatar.backgroundColor, labelPadding: nativeDefault.space.PX_16, labelPaddingInnerRatio: 0, labelSize: closure_0.placeholderUsername.height, padding: nativeDefault.space.PX_12, shapeSize: closure_0.placeholderAvatar.width };
    const obj2 = { divider: true, dividerColorHex: closure_0.placeholderDivider.backgroundColor, dividerPaddingLeft: null };
    const sum = nativeDefault.space.PX_12 + closure_0.placeholderAvatar.width;
    obj2.dividerPaddingLeft = sum + nativeDefault.space.PX_16;
    const obj3 = { sectionHeader: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: closure_0.placeholder.backgroundColor, paddingVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, width: nativeDefault.space.PX_96 }, sectionItem: null, sectionItemAtFront: null, sectionItemAtRear: null, sectionItemSingleton: null };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj2);
    obj3.sectionItem = {};
    const obj6 = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj2);
    obj6.borderTopLeftRadius = nativeDefault.radii.lg;
    obj6.borderTopRightRadius = nativeDefault.radii.lg;
    obj3.sectionItemAtFront = obj6;
    const obj7 = {};
    const merged4 = Object.assign(obj);
    obj7.borderBottomLeftRadius = nativeDefault.radii.lg;
    obj7.borderBottomRightRadius = nativeDefault.radii.lg;
    obj3.sectionItemAtRear = obj7;
    const obj8 = {};
    const merged5 = Object.assign(obj);
    obj8.borderRadius = nativeDefault.radii.lg;
    obj3.sectionItemSingleton = obj8;
    return obj3;
  }, items);
});
export const useFastestListTableRowPlaceholderStyles = styles;