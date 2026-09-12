// discord_app/modules/game_profile/native/components/GameProfileSection.tsx
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
fn(4636);
let createStyles = { container: null, header: null, skeletonTitle: null };
createStyles = { gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.header = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_8,
};
const obj1 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_8,
};
createStyles.skeletonTitle = {
  minWidth: 0,
  maxWidth: "100%",
  flexShrink: 1,
  height: nativeDefault.space.PX_20,
  borderRadius: nativeDefault.radii.xs,
};
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSection.tsx");

export default function GameProfileSection(onPressViewAll) {
  onPressViewAll = onPressViewAll.onPressViewAll;
  ({ children, headerStyle, style, title } = onPressViewAll);
  const tmp = closure_6();
  let obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  obj = { style: null, children: null };
  const items1 = [tmp.header, headerStyle];
  obj.style = items1;
  const items2 = [
    React4(Text_Text.Heading, {
      variant: "heading-sm/semibold",
      color: "mobile-text-heading-primary",
      children: title,
    }),
  ];
  let tmp4Result = null != onPressViewAll;
  if (tmp4Result) {
    obj = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.budhsM);
    obj.icon = React4(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
    obj.onPress = onPressViewAll;
    tmp4Result = React4(components_Button_Button.Button, obj);
  }
  items2[1] = tmp4Result;
  obj.children = items2;
  const items3 = [hasOwnProperty(View, obj), children];
  obj.children = items3;
  return hasOwnProperty(View, obj);
}
export const GameProfileSectionSkeleton = function GameProfileSectionSkeleton(showViewAllSkeleton) {
  showViewAllSkeleton = showViewAllSkeleton.showViewAllSkeleton;
  ({ animationDelayMs, children, headerStyle, skeletonTitleWidth, style } = showViewAllSkeleton);
  const tmp = closure_6();
  let obj = {
    style: null,
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items = [tmp.container, style];
  obj.style = items;
  obj = { animationDelayMs, style: null, children: null };
  const items1 = [tmp.header, headerStyle];
  obj.style = items1;
  obj = { style: null };
  const items2 = [tmp.skeletonTitle, { width: skeletonTitleWidth }];
  obj.style = items2;
  const items3 = [React4(GameProfileSkeletonDefault, obj)];
  if (showViewAllSkeleton) {
    showViewAllSkeleton = React4(GameProfileSkeleton.GameProfileSkeletonButton, { size: "sm" });
  }
  items3[1] = showViewAllSkeleton;
  obj.children = items3;
  const items4 = [hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonContainer, obj), children];
  obj.children = items4;
  return hasOwnProperty(View, obj);
};
