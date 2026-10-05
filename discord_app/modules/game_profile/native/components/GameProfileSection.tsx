// discord_app/modules/game_profile/native/components/GameProfileSection.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ChevronSmallRightIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GameProfileSkeletonDefault = GameProfileSkeleton;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, skeletonTitle: obj4 };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj4 = {
  minWidth: 0,
  maxWidth: "100%",
  flexShrink: 1,
  height: nativeDefault.space.PX_20,
  borderRadius: nativeDefault.radii.xs,
};
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let animationDelayMs;
      let children;
      let headerStyle;
      let items;
      let items1;
      let items2;
      let showViewAllSkeleton;
      let skeletonTitleWidth;
      let style;
      const obj = react2;
      const cResult = obj.c(22);
      ({ animationDelayMs, children, headerStyle, showViewAllSkeleton, skeletonTitleWidth, style } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        let tmp5;
        if (cResult[1] === tmp4.container) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === headerStyle) {
          let tmp6;
          let tmp7;
          if (cResult[4] === tmp4.header) {
            tmp6 = cResult[5];
          }
          if (cResult[6] !== skeletonTitleWidth) {
            const obj2 = { width: skeletonTitleWidth };
            cResult[6] = skeletonTitleWidth;
            cResult[7] = obj2;
            tmp7 = obj2;
          } else {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp4.skeletonTitle) {
            let tmp8;
            let tmp12;
            if (cResult[9] === tmp7) {
              tmp8 = cResult[10];
            }
            if (cResult[11] !== showViewAllSkeleton) {
              const tmp13 =
                showViewAllSkeleton && React3(GameProfileSkeleton.GameProfileSkeletonButton, { size: "sm" });
              cResult[11] = showViewAllSkeleton;
              cResult[12] = tmp13;
              tmp12 = tmp13;
            } else {
              tmp12 = cResult[12];
            }
            if (cResult[13] === animationDelayMs) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp8) {
                  let tmp15;
                  if (cResult[16] === tmp12) {
                    tmp15 = cResult[17];
                  }
                  if (cResult[18] === children) {
                    if (cResult[19] === tmp5) {
                      let tmp18;
                      if (cResult[20] === tmp15) {
                        tmp18 = cResult[21];
                      }
                      return tmp18;
                    }
                  }
                  const obj3 = {
                    style: tmp5,
                    accessible: false,
                    accessibilityElementsHidden: true,
                    importantForAccessibility: "no-hide-descendants",
                    children: items,
                  };
                  items = [tmp15, children];
                  const tmp21 = hasOwnProperty(View, obj3);
                  cResult[18] = children;
                  cResult[19] = tmp5;
                  cResult[20] = tmp15;
                  cResult[21] = tmp21;
                  tmp18 = tmp21;
                }
              }
            }
            const obj4 = { animationDelayMs, style: tmp6, children: items1 };
            items1 = [tmp8, tmp12];
            const tmp17 = hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonContainer, obj4);
            cResult[13] = animationDelayMs;
            cResult[14] = tmp6;
            cResult[15] = tmp8;
            cResult[16] = tmp12;
            cResult[17] = tmp17;
            tmp15 = tmp17;
          }
          const obj5 = { style: items2 };
          items2 = [tmp4.skeletonTitle, tmp7];
          const tmp11 = React3(GameProfileSkeletonDefault, obj5);
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
      let animationDelayMs;
      let children;
      let headerStyle;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let skeletonTitleWidth;
      let style;
      showViewAllSkeleton = showViewAllSkeleton.showViewAllSkeleton;
      ({ animationDelayMs, children, headerStyle, skeletonTitleWidth, style } = showViewAllSkeleton);
      const tmp = closure_6();
      const obj = {
        style: items,
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items4,
      };
      items = [tmp.container, style];
      const obj2 = { animationDelayMs, style: items1, children: items3 };
      items1 = [tmp.header, headerStyle];
      const GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
      const obj3 = { style: items2 };
      items2 = [tmp.skeletonTitle, { width: skeletonTitleWidth }];
      items3 = [React3(GameProfileSkeletonDefault, obj3)];
      if (showViewAllSkeleton) {
        showViewAllSkeleton = React3(GameProfileSkeleton.GameProfileSkeletonButton, { size: "sm" });
      }
      items3[1] = showViewAllSkeleton;
      items4 = [hasOwnProperty(GameProfileSkeletonContainer, obj2), children];
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let headerStyle;
      let intl;
      let items;
      let items1;
      let onPressViewAll;
      let style;
      let title;
      const obj = react2;
      const cResult = obj.c(18);
      ({ children, headerStyle, onPressViewAll, style, title } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        let tmp5;
        if (cResult[1] === tmp4.container) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === headerStyle) {
          let tmp6;
          let tmp7;
          let tmp10;
          if (cResult[4] === tmp4.header) {
            tmp6 = cResult[5];
          }
          if (cResult[6] !== title) {
            const obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: title };
            const tmp9 = React3(Text_Text.Heading, obj2);
            cResult[6] = title;
            cResult[7] = tmp9;
            tmp7 = tmp9;
          } else {
            tmp7 = cResult[7];
          }
          if (cResult[8] !== onPressViewAll) {
            let tmp12 = null != onPressViewAll;
            if (tmp12) {
              const obj3 = {
                text: intl.string(intl2.t.budhsM),
                variant: "tertiary",
                size: "sm",
                icon: React3(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" }),
                iconPosition: "end",
                onPress: onPressViewAll,
              };
              const Button = components_Button_Button.Button;
              intl = intl2.intl;
              tmp12 = React3(Button, obj3);
            }
            cResult[8] = onPressViewAll;
            cResult[9] = tmp12;
            tmp10 = tmp12;
          } else {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp7) {
              let tmp14;
              if (cResult[12] === tmp10) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === children) {
                if (cResult[15] === tmp5) {
                  let tmp18;
                  if (cResult[16] === tmp14) {
                    tmp18 = cResult[17];
                  }
                  return tmp18;
                }
              }
              const obj4 = { style: tmp5, children: items };
              items = [tmp14, children];
              const tmp21 = hasOwnProperty(View, obj4);
              cResult[14] = children;
              cResult[15] = tmp5;
              cResult[16] = tmp14;
              cResult[17] = tmp21;
              tmp18 = tmp21;
            }
          }
          const obj5 = { style: tmp6, children: items1 };
          items1 = [tmp7, tmp10];
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
      let children;
      let headerStyle;
      let intl;
      let items;
      let items1;
      let items2;
      let items3;
      let style;
      let title;
      onPressViewAll = onPressViewAll.onPressViewAll;
      ({ children, headerStyle, style, title } = onPressViewAll);
      const tmp = closure_6();
      const obj = { style: items, children: items3 };
      items = [tmp.container, style];
      const obj2 = { style: items1, children: items2 };
      items1 = [tmp.header, headerStyle];
      items2 = [
        React3(Text_Text.Heading, {
          variant: "heading-sm/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      let tmp4Result = null != onPressViewAll;
      if (tmp4Result) {
        const obj3 = {
          text: intl.string(intl2.t.budhsM),
          variant: "tertiary",
          size: "sm",
          icon: React3(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" }),
          iconPosition: "end",
          onPress: onPressViewAll,
        };
        const Button = components_Button_Button.Button;
        intl = intl2.intl;
        tmp4Result = React3(Button, obj3);
      }
      items2[1] = tmp4Result;
      items3 = [hasOwnProperty(View, obj2), children];
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSection.tsx");

export default tmp6;
export const GameProfileSectionSkeleton = tmp5;
