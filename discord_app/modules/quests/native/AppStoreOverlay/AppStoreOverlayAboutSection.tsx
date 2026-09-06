// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = {
  top: nativeDefault.space.PX_12,
  bottom: nativeDefault.space.PX_12,
  left: nativeDefault.space.PX_12,
  right: nativeDefault.space.PX_12,
};
const createStyles = fn(4560);
let obj = { aboutSection: null };
obj = {
  borderRadius: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT,
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
obj.aboutSection = obj;
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default function AppStoreOverlayAboutSection(children) {
  c0 = undefined;
  const tmp = closure_9();
  [tmp3, c0] = _slicedToArray(noop.useState(false), 2);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  const first = tmp4[0];
  closure_2 = tmp4[1];
  const items = [first];
  const callback = noop.useCallback((nativeEvent) => {
    if (null == first) {
      closure_2(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  const intl = util.intl;
  const t = util.t;
  const stringResult = intl.string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  let obj = { style: tmp.aboutSection, children: null };
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp8(1114).intl;
  obj.children = intl2.string(util.t.CI0vSJ);
  const items1 = [
    timestampProducer(Text_Text.Text, obj),
    timestampProducer(Text_Text.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      lineClamp: num,
      onTextLayout: callback,
      children: children.description,
    }),
  ];
  let tmp13Result = true === first;
  if (tmp13Result) {
    obj = {
      hitSlop: rect,
      accessibilityRole: "button",
      accessibilityLabel: stringResult,
      accessibilityState: null,
      onPress: null,
      children: null,
    };
    const obj1 = { expanded: tmp3 };
    obj.accessibilityState = obj1;
    obj.onPress = callback1;
    const obj2 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    obj.children = tmp13(tmp8(4556).Text, obj2);
    tmp13Result = tmp13(React4, obj);
  }
  items1[2] = tmp13Result;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
}
