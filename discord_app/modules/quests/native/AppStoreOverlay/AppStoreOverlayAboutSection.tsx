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
const createStyles = fn(4638);
let obj = {
  aboutSection: {
    borderRadius: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT,
    padding: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
  },
};
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default function AppStoreOverlayAboutSection(children) {
  c0 = undefined;
  first = undefined;
  closure_2 = undefined;
  const tmp = closure_9();
  [tmp3, c0] = noop.useState(false);
  [first, closure_2] = noop.useState(null);
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
  const obj = { style: tmp.aboutSection, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.CI0vSJ);
  const items1 = [
    timestampProducer(Text_Text.Text, obj2),
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
    const obj3 = {
      hitSlop: rect,
      accessibilityRole: "button",
      accessibilityLabel: stringResult,
      accessibilityState: null,
      onPress: null,
      children: null,
    };
    const obj4 = { expanded: tmp3 };
    obj3.accessibilityState = obj4;
    obj3.onPress = callback1;
    const obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    obj3.children = timestampProducer(Text_Text.Text, obj5);
    tmp13Result = timestampProducer(React4, obj3);
  }
  items1[2] = tmp13Result;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
}
