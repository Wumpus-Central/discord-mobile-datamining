// discord_app/modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import { unsafe_rawColors } from "Themes";
import importAllResult from "noop";
import set from "get ActivityIndicator";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 }, obscureContentContainer: null, spoilerOverlayBackground: null };
obj = { gap: require("Themes").space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
obj[1] = obj;
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, borderRadius: require("Themes").radii.lg, height: require("Themes").space.PX_32, backgroundColor: null, flexGrow: 0, justifyContent: "center", alignItems: "center", alignSelf: "center" };
set = set.isAndroid();
createCacheKey[3] = set ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
obj[2] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default require("noop").memo(function MediaModalSpoilerOverlay(source) {
  let index;
  let style;
  source = source.source;
  ({ style, index } = source);
  let items2 = callback2();
  let stringResult = dependencyMap;
  let obj = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  const token = obj.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.SPOILER_HIDDEN_BACKGROUND);
  let obj1 = require("../useMediaItemSpoilerState.tsx") /* useMediaItemSpoilerState */;
  if (!tmp5[0]) {
    return null;
  } else {
    obj = { style: null, children: null };
    const items = [style, absoluteFill.absoluteFill, tmp6];
    obj[0] = items;
    if (source.obscure) {
      let str = "dark";
    } else {
      str = "light";
      const tmpResult = tmp(500);
    }
    obj = { blurTheme: null, android_fallbackColor: null, style: null };
    obj[0] = str;
    obj[1] = token;
    obj[2] = absoluteFill.absoluteFill;
    const items1 = [closure_6(tmp3(4685), obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = items2.spoilerOverlayContainer;
    const obj2 = { style: null, children: null };
    if (source.obscure) {
      obj2[0] = items2.obscureContentContainer;
      items2 = [tmp9(tmp(4791).ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj3 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.SpxcUR);
      obj3[3] = stringResult;
      items2[1] = tmp9(tmp(4281).Text, obj3);
      obj2[1] = items2;
      let tmp9Result = tmp7(tmp11, obj2);
    } else {
      obj2[0] = items2.spoilerOverlayBackground;
      const obj4 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl = tmp(1236).intl;
      obj4[3] = intl.string(tmp(1236).t["F+x38C"]).toUpperCase();
      obj2[1] = tmp9(tmp(4281).Text, obj4);
      tmp9Result = tmp9(tmp11, obj2);
      const str2 = intl.string(tmp(1236).t["F+x38C"]);
    }
    obj1[1] = tmp9Result;
    obj1 = tmp9(tmp11, obj1);
    items1[1] = obj1;
    obj[1] = items1;
    closure_7(tmp3(4146).View, obj);
    const tmp3Result = tmp3(4685);
    const tmp8 = absoluteFill;
  }
});