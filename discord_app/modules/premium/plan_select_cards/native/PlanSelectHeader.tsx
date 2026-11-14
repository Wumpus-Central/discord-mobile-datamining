// discord_app/modules/premium/plan_select_cards/native/PlanSelectHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  container: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
  },
  backButton: null,
  title: null,
};
const rect = {
  position: "absolute",
  top: 0,
  bottom: nativeDefault.space.PX_16,
  left: nativeDefault.space.PX_16,
  justifyContent: "center",
};
obj2.backButton = rect;
obj2.title = { alignItems: "center" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/plan_select_cards/native/PlanSelectHeader.tsx");

export default function PlanSelectHeader(arg0) {
  ({ style, onBack } = arg0);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  items = [tmp.container, style];
  obj.style = items;
  const obj2 = { style: tmp.backButton, children: null };
  const obj3 = {
    variant: "icon-only",
    size: "sm",
    icon: React4(ArrowLargeLeftIcon.ArrowLargeLeftIcon, {
      size: "md",
      color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT,
    }),
    accessibilityLabel: null,
    onPress: null,
  };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj3.onPress = onBack;
  obj2.children = React4(IconButton.IconButton, obj3);
  const items1 = [React4(View, obj2)];
  const obj5 = { style: tmp.title, children: null };
  const obj6 = { variant: "nitro-xs", color: "text-strong", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.lG6a5x);
  const items2 = [React4(Text_Text.Heading, obj6)];
  const obj7 = { variant: "body-xs/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj7.children = intl3.string(util.t.SD5MJW);
  items2[1] = React4(Text_Text.Text, obj7);
  obj5.children = items2;
  items1[1] = hasOwnProperty(View, obj5);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
