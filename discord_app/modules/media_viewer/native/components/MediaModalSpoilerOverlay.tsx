// discord_app/modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import useMediaItemSpoilerState from "../useMediaItemSpoilerState.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../../utils/PlatformUtils.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = {
  spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 },
  obscureContentContainer: null,
  spoilerOverlayBackground: null,
};
obj = { gap: ThemesDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
obj[1] = obj;
createCacheKey = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  borderRadius: ThemesDefault.radii.lg,
  height: ThemesDefault.space.PX_32,
  backgroundColor: null,
  flexGrow: 0,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
};
set = set.isAndroid();
const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
createCacheKey[3] = set ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
obj[2] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

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
      str = "light";
      const tmpResult = tmp(1234);
    }
    obj = { blurTheme: null, android_fallbackColor: null, style: null };
    obj[0] = str;
    obj[1] = token;
    obj[2] = absoluteFill.absoluteFill;
    const items1 = [closure_6(tmp3(4918), obj)];
    obj1 = { style: null, children: null };
    obj1[0] = items2.spoilerOverlayContainer;
    const obj2 = { style: null, children: null };
    if (source.obscure) {
      obj2[0] = items2.obscureContentContainer;
      items2 = [tmp9(tmp(5034).ImageWarningIcon, { size: "lg", color: "white" })];
      const obj3 = {
        accessibilityRole: "text",
        variant: "heading-md/medium",
        color: "text-overlay-light",
        children: null,
      };
      const intl2 = tmp(1233).intl;
      stringResult = intl2.string(tmp(1233).t.SpxcUR);
      obj3[3] = stringResult;
      items2[1] = tmp9(tmp(4474).Text, obj3);
      obj2[1] = items2;
      let tmp9Result = tmp7(tmp11, obj2);
    } else {
      obj2[0] = items2.spoilerOverlayBackground;
      const obj4 = {
        accessibilityRole: "text",
        variant: "heading-md/medium",
        color: "text-overlay-light",
        children: null,
      };
      const intl = tmp(1233).intl;
      obj4[3] = intl.string(tmp(1233).t["F+x38C"]).toUpperCase();
      obj2[1] = tmp9(tmp(4474).Text, obj4);
      tmp9Result = tmp9(tmp11, obj2);
      const str2 = intl.string(tmp(1233).t["F+x38C"]);
    }
    obj1[1] = tmp9Result;
    obj1 = tmp9(tmp11, obj1);
    items1[1] = obj1;
    obj[1] = items1;
    closure_7(tmp3(4217).View, obj);
    const tmp3Result = tmp3(4918);
    const tmp8 = absoluteFill;
  }
});
