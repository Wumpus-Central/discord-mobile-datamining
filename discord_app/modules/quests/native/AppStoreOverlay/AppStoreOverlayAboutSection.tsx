// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import findTextStart from "../../../html_parser/index.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const rect = {
  top: nativeDefault.space.PX_12,
  bottom: nativeDefault.space.PX_12,
  left: nativeDefault.space.PX_12,
  right: nativeDefault.space.PX_12,
};
const createStyles = fn(5306);
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

export default function AppStoreOverlayAboutSection(description) {
  description = description.description;
  const onSeeMorePress = description.onSeeMorePress;
  _slicedToArray = undefined;
  first = undefined;
  closure_4 = undefined;
  const tmp = closure_9();
  [tmp3, c2] = first.useState(false);
  [first, closure_4] = first.useState(null);
  items = [description];
  const memo = first.useMemo(() => findTextStart.parseHTMLFromText(description, { parseTextLinks: true }), items);
  const items1 = [first];
  const items2 = [onSeeMorePress];
  const callback = first.useCallback((nativeEvent) => {
    if (null == first) {
      closure_4(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items1);
  const callback1 = first.useCallback(() => {
    _undefined((arg0) => {
      if (!arg0) {
        if (onSeeMorePress != null) {
          tmp();
        }
      }
      return !arg0;
    });
  }, items2);
  const intl = description(onSeeMorePress[7]).intl;
  const t = description(onSeeMorePress[7]).t;
  const stringResult = intl.string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  let tmp15Result = null;
  if (0 !== memo.length) {
    const obj2 = { style: tmp.aboutSection, children: null };
    const obj3 = { variant: "body-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp8(tmp9[7]).intl;
    obj3.children = intl2.string(tmp8(tmp9[7]).t.CI0vSJ);
    const items3 = [closure_6(tmp8(tmp9[8]).Text, obj3), ,];
    const obj = {
      variant: "body-sm/medium",
      color: "text-default",
      lineClamp: num,
      onTextLayout: callback,
      children: null,
    };
    const obj4 = { runs: memo, textVariant: "body-sm/medium", boldTextVariant: "body-sm/semibold" };
    obj.children = closure_6(tmp8(tmp9[9]).HTMLText, obj4);
    items3[1] = closure_6(tmp8(tmp9[8]).Text, obj);
    let tmp17Result = true === first;
    if (tmp17Result) {
      const obj5 = {
        hitSlop: rect,
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        accessibilityState: null,
        onPress: null,
        children: null,
      };
      const obj6 = { expanded: tmp3 };
      obj5.accessibilityState = obj6;
      obj5.onPress = callback1;
      const obj7 = { variant: "body-sm/medium", color: "text-link", children: stringResult };
      obj5.children = closure_6(tmp8(tmp9[8]).Text, obj7);
      tmp17Result = closure_6(closure_4, obj5);
    }
    items3[2] = tmp17Result;
    obj2.children = items3;
    tmp15Result = closure_7(closure_5, obj2);
  }
  return tmp15Result;
}
