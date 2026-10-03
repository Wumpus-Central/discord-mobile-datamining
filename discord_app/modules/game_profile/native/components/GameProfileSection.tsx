// discord_app/modules/game_profile/native/components/GameProfileSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ChevronSmallRightIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { gap: nativeDefault.space.PX_8 }, header: null, skeletonTitle: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.header = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_8,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj2.skeletonTitle = {
  minWidth: 0,
  maxWidth: "100%",
  flexShrink: 1,
  height: nativeDefault.space.PX_20,
  borderRadius: nativeDefault.radii.xs,
};
let closure_6 = createStyles.createStyles(obj2);
fn(558);
let obj5 = {
  minWidth: 0,
  maxWidth: "100%",
  flexShrink: 1,
  height: nativeDefault.space.PX_20,
  borderRadius: nativeDefault.radii.xs,
};
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(22);
      ({ animationDelayMs, children, headerStyle, showViewAllSkeleton, skeletonTitleWidth, style } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.container) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === headerStyle) {
          if (cResult[4] === tmp4.header) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] !== skeletonTitleWidth) {
            const obj2 = { width: skeletonTitleWidth };
            cResult[6] = skeletonTitleWidth;
            cResult[7] = obj2;
            let tmp7 = obj2;
          } else {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp4.skeletonTitle) {
            if (cResult[9] === tmp7) {
              let tmp8 = cResult[10];
            }
            if (cResult[11] !== showViewAllSkeleton) {
              let tmp13 = showViewAllSkeleton;
              if (showViewAllSkeleton) {
                tmp13 = React4(GameProfileSkeleton.GameProfileSkeletonButton, { size: "sm" });
              }
              cResult[11] = showViewAllSkeleton;
              cResult[12] = tmp13;
              let tmp12 = tmp13;
            } else {
              tmp12 = cResult[12];
            }
            if (cResult[13] === animationDelayMs) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp12) {
                    let tmp15 = cResult[17];
                  }
                  if (cResult[18] === children) {
                    if (cResult[19] === tmp5) {
                      if (cResult[20] === tmp15) {
                        let tmp18 = cResult[21];
                      }
                      return tmp18;
                    }
                  }
                  const obj3 = {
                    style: tmp5,
                    accessible: false,
                    accessibilityElementsHidden: true,
                    importantForAccessibility: "no-hide-descendants",
                    children: null,
                  };
                  const items = [tmp15, children];
                  obj3.children = items;
                  const tmp21 = hasOwnProperty(View, obj3);
                  cResult[18] = children;
                  cResult[19] = tmp5;
                  cResult[20] = tmp15;
                  cResult[21] = tmp21;
                  tmp18 = tmp21;
                }
              }
            }
            const obj4 = { animationDelayMs, style: tmp6, children: null };
            const items1 = [tmp8, tmp12];
            obj4.children = items1;
            const tmp17 = hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonContainer, obj4);
            cResult[13] = animationDelayMs;
            cResult[14] = tmp6;
            cResult[15] = tmp8;
            cResult[16] = tmp12;
            cResult[17] = tmp17;
            tmp15 = tmp17;
          }
          const obj5 = { style: null };
          const items2 = [tmp4.skeletonTitle, tmp7];
          obj5.style = items2;
          const tmp11 = React4(GameProfileSkeletonDefault, obj5);
          cResult[8] = tmp4.skeletonTitle;
          cResult[9] = tmp7;
          cResult[10] = tmp11;
          tmp8 = tmp11;
        }
        const items3 = [tmp4.header, headerStyle];
        cResult[3] = headerStyle;
        cResult[4] = tmp4.header;
        cResult[5] = items3;
        tmp6 = items3;
      }
      const items4 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items4;
      tmp5 = items4;
    }
  : (showViewAllSkeleton) => {
      showViewAllSkeleton = showViewAllSkeleton.showViewAllSkeleton;
      ({ animationDelayMs, children, headerStyle, skeletonTitleWidth, style } = showViewAllSkeleton);
      const tmp = closure_6();
      const obj = {
        style: null,
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const items = [tmp.container, style];
      obj.style = items;
      const obj2 = { animationDelayMs, style: null, children: null };
      const items1 = [tmp.header, headerStyle];
      obj2.style = items1;
      const obj3 = { style: null };
      const items2 = [tmp.skeletonTitle, { width: skeletonTitleWidth }];
      obj3.style = items2;
      const items3 = [React4(GameProfileSkeletonDefault, obj3)];
      if (showViewAllSkeleton) {
        showViewAllSkeleton = React4(GameProfileSkeleton.GameProfileSkeletonButton, { size: "sm" });
      }
      items3[1] = showViewAllSkeleton;
      obj2.children = items3;
      const items4 = [hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonContainer, obj2), children];
      obj.children = items4;
      return hasOwnProperty(View, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(18);
      ({ children, headerStyle, onPressViewAll, style, title } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.container) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === headerStyle) {
          if (cResult[4] === tmp4.header) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] !== title) {
            const obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: title };
            const tmp9 = React4(Text_Text.Heading, obj2);
            cResult[6] = title;
            cResult[7] = tmp9;
            let tmp7 = tmp9;
          } else {
            tmp7 = cResult[7];
          }
          if (cResult[8] !== onPressViewAll) {
            let tmp12 = null != onPressViewAll;
            if (tmp12) {
              const obj3 = {
                text: null,
                variant: "tertiary",
                size: "sm",
                icon: null,
                iconPosition: "end",
                onPress: null,
              };
              const intl = util.intl;
              obj3.text = intl.string(util.t.budhsM);
              obj3.icon = React4(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
              obj3.onPress = onPressViewAll;
              tmp12 = React4(components_Button_Button.Button, obj3);
            }
            cResult[8] = onPressViewAll;
            cResult[9] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp10) {
                let tmp14 = cResult[13];
              }
              if (cResult[14] === children) {
                if (cResult[15] === tmp5) {
                  if (cResult[16] === tmp14) {
                    let tmp18 = cResult[17];
                  }
                  return tmp18;
                }
              }
              const obj4 = { style: tmp5, children: null };
              const items = [tmp14, children];
              obj4.children = items;
              const tmp21 = hasOwnProperty(View, obj4);
              cResult[14] = children;
              cResult[15] = tmp5;
              cResult[16] = tmp14;
              cResult[17] = tmp21;
              tmp18 = tmp21;
            }
          }
          const obj5 = { style: tmp6, children: null };
          const items1 = [tmp7, tmp10];
          obj5.children = items1;
          const tmp17 = hasOwnProperty(View, obj5);
          cResult[10] = tmp6;
          cResult[11] = tmp7;
          cResult[12] = tmp10;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
        const items2 = [tmp4.header, headerStyle];
        cResult[3] = headerStyle;
        cResult[4] = tmp4.header;
        cResult[5] = items2;
        tmp6 = items2;
      }
      const items3 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items3;
      tmp5 = items3;
    }
  : (onPressViewAll) => {
      onPressViewAll = onPressViewAll.onPressViewAll;
      ({ children, headerStyle, style, title } = onPressViewAll);
      const tmp = closure_6();
      const obj = { style: null, children: null };
      const items = [tmp.container, style];
      obj.style = items;
      const obj2 = { style: null, children: null };
      const items1 = [tmp.header, headerStyle];
      obj2.style = items1;
      const items2 = [
        React4(Text_Text.Heading, {
          variant: "heading-sm/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      let tmp4Result = null != onPressViewAll;
      if (tmp4Result) {
        const obj3 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
        const intl = util.intl;
        obj3.text = intl.string(util.t.budhsM);
        obj3.icon = React4(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
        obj3.onPress = onPressViewAll;
        tmp4Result = React4(components_Button_Button.Button, obj3);
      }
      items2[1] = tmp4Result;
      obj2.children = items2;
      const items3 = [hasOwnProperty(View, obj2), children];
      obj.children = items3;
      return hasOwnProperty(View, obj);
    };
export const GameProfileSectionSkeleton = tmp4;
