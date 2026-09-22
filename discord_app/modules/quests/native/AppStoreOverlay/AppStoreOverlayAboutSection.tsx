// === Module 11770: AppStoreOverlayAboutSection ===

// Module 11770 (AppStoreOverlayAboutSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4753 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { top: nativeDefault.space.PX_12, bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
const createStyles = fn(4757);
let obj = { aboutSection: { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 } };
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default function AppStoreOverlayAboutSection(children) {
  const onSeeMorePress = children.onSeeMorePress;
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  const tmp = closure_9();
  [tmp3, c1] = noop.useState(false);
  [first, closure_3] = noop.useState(null);
  const items = [first];
  const items1 = [onSeeMorePress];
  const callback = noop.useCallback((nativeEvent) => {
    if (null == first) {
      closure_3(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    _undefined((arg0) => {
      if (!arg0) {
        if (onSeeMorePress != null) {
          tmp();
        }
      }
      return !arg0;
    });
  }, items1);
  const intl = util.intl;
  const t = util.t;
  const stringResult = intl.string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  const obj = { style: tmp.aboutSection, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.CI0vSJ);
  const items2 = [timestampProducer(Text_Text.Text, obj2), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: children.description }), ];
  let tmp13Result = true === first;
  if (tmp13Result) {
    const obj3 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, onPress: null, children: null };
    const obj4 = { expanded: tmp3 };
    obj3.accessibilityState = obj4;
    obj3.onPress = callback1;
    const obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    obj3.children = timestampProducer(Text_Text.Text, obj5);
    tmp13Result = timestampProducer(React4, obj3);
  }
  items2[2] = tmp13Result;
  obj.children = items2;
  return React5(hasOwnProperty, obj);
};