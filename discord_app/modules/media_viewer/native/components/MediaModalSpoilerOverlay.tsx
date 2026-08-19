// === Module 12075: ? ===

// Module 12075
import obj1322 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import map from "map" /* 4097 */;
import _modDef4115 from "module_4115" /* 4115 */;
import isBlurDisabledDefault from "isBlurDisabled" /* 4725 */;
import Text from "Text" /* 4734 */;
import ImageWarningIcon from "ImageWarningIcon" /* 6877 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 12058 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import obj132 from "obj132" /* 500 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { gap: ThemesDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
obj[1] = obj;
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.lg, height: ThemesDefault.space.PX_32, backgroundColor: null, flexGrow: 0, justifyContent: "center", alignItems: "center", alignSelf: "center" };
obj132 = obj132.isAndroid();
const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
createCacheKey[3] = obj132 ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
obj[2] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default importAllResult.memo(function MediaModalSpoilerOverlay(source) {
  source = source.source;
  ({ style, index } = source);
  let items2 = callback2();
  let stringResult = dependencyMap;
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  obj1 = useMediaItemSpoilerState;
  if (!tmp5[0]) {
    return null;
  } else {
    obj = { style: null, children: null };
    const items = [style, absoluteFill.absoluteFill, tmp6];
    obj[0] = items;
    if (source.obscure) {
      let str = "dark";
    } else {
      obj1322;
      str = "light";
    }
    obj = { blurTheme: null, android_fallbackColor: null, style: null };
    obj[0] = str;
    obj[1] = token;
    obj[2] = absoluteFill.absoluteFill;
    const items1 = [callback(isBlurDisabledDefault, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = items2.spoilerOverlayContainer;
    const obj2 = { style: null, children: null };
    if (source.obscure) {
      obj2[0] = items2.obscureContentContainer;
      items2 = [callback(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj3 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl2 = getSystemLocale.intl;
      stringResult = intl2.string(getSystemLocale.t.SpxcUR);
      obj3[3] = stringResult;
      items2[1] = callback(Text.Text, obj3);
      obj2[1] = items2;
      let tmp9Result = callback2(closure_5, obj2);
    } else {
      obj2[0] = items2.spoilerOverlayBackground;
      const obj4 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl = getSystemLocale.intl;
      obj4[3] = intl.string(getSystemLocale.t["F+x38C"]).toUpperCase();
      obj2[1] = callback(Text.Text, obj4);
      tmp9Result = callback(closure_5, obj2);
      const str2 = intl.string(getSystemLocale.t["F+x38C"]);
    }
    obj1[1] = tmp9Result;
    obj1 = callback(closure_5, obj1);
    items1[1] = obj1;
    obj[1] = items1;
    callback2(_modDef4115.View, obj);
    const tmp3Result = isBlurDisabledDefault;
  }
  tmp5 = callback(obj1.useMediaItemSpoilerState(index), 2);
});