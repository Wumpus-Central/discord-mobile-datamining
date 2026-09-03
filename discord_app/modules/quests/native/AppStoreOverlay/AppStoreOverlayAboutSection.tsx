// === Module 11335: AppStoreOverlayAboutSection ===

// Module 11335 (AppStoreOverlayAboutSection)
import ThemesDefault from "Themes" /* 709 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { top: ThemesDefault.space.PX_12, bottom: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_12, right: ThemesDefault.space.PX_12 };
obj = { aboutSection: null };
obj = { borderRadius: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default function AppStoreOverlayAboutSection(children) {
  let _require;
  let first;
  let callback;
  const tmp = callback3();
  [tmp3, c0] = callback(React.useState(false), 2);
  const tmp4 = callback(React.useState(null), 2);
  first = tmp4[0];
  callback = tmp4[1];
  const items = [first];
  callback = React.useCallback((nativeEvent) => {
    if (null == first) {
      callback(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = React.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  const intl = _require(first[6]).intl;
  const t = _require(first[6]).t;
  const stringResult = intl.string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  obj = { style: tmp.aboutSection, children: null };
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp8(tmp9[6]).intl;
  obj[2] = intl2.string(_require(first[6]).t.CI0vSJ);
  const items1 = [callback2(_require(first[7]).Text, obj), callback2(_require(first[7]).Text, { variant: "text-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: children.description }), ];
  let tmp13Result = true === first;
  if (tmp13Result) {
    obj = { hitSlop: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
    obj[0] = obj;
    obj[2] = stringResult;
    obj1 = { expanded: null };
    obj1[0] = tmp3;
    obj[3] = obj1;
    obj[4] = callback1;
    const obj2 = { variant: "text-sm/medium", color: "text-link", children: null };
    obj2[2] = stringResult;
    obj[5] = tmp13(tmp8(tmp9[7]).Text, obj2);
    tmp13Result = tmp13(closure_4, obj);
  }
  items1[2] = tmp13Result;
  obj[1] = items1;
  return closure_7(closure_5, obj);
};