// discord_app/modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import _modDef3877 from "../../IntelligenceSearch.messages.js";
import ChevronSmallDownIcon2 from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import ChevronSmallUpIcon from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallUpIcon.tsx";
import useSearchHostSurface from "../useSearchHostSurface.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8 };
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = {
    block: { position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center" },
    pill: {
      height: nativeDefault.space.PX_32,
      paddingHorizontal: nativeDefault.space.PX_16,
      borderRadius: nativeDefault.radii.round,
      borderWidth: 1,
      borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
      backgroundColor,
      alignItems: "center",
      justifyContent: "center",
    },
    surface: null,
  };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.borderRadius = nativeDefault.radii.round;
  obj3.backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  obj.surface = obj3;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx",
);

export default noop.memo((isExpanded) => {
  isExpanded = isExpanded.isExpanded;
  const tmp3 = closure_9(useSearchHostSurface.useSearchHostSurfaceColor());
  if (isExpanded) {
    let ChevronSmallDownIcon = ChevronSmallUpIcon.ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
  }
  const obj2 = { style: tmp3.block, hitSlop: rect, children: null };
  const obj3 = {
    style: tmp3.pill,
    hitSlop: rect,
    accessibilityRole: "button",
    accessibilityLabel: null,
    onPress: null,
    children: null,
  };
  const intl = util.intl;
  const tmp9 = _modDef3877;
  if (isExpanded) {
    let OLD0mz = tmp9.ih0v1g;
    let tmp10 = importDefault;
  } else {
    OLD0mz = tmp9.OLD0mz;
    tmp10 = importDefault;
  }
  obj3.accessibilityLabel = intl.string(OLD0mz);
  obj3.onPress = isExpanded.onPress;
  const items = [timestampProducer(hasOwnProperty, { style: tmp3.surface, pointerEvents: "none" })];
  const obj4 = { style: tmp3.surface, pointerEvents: "none" };
  items[1] = timestampProducer(ChevronSmallDownIcon, { size: "sm", color: tmp10(576).colors.INTERACTIVE_ICON_DEFAULT });
  obj3.children = items;
  obj2.children = React5(React3, obj3);
  return timestampProducer(hasOwnProperty, obj2);
});
