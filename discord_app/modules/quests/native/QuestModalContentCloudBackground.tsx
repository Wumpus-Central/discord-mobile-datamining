// discord_app/modules/quests/native/QuestModalContentCloudBackground.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import isThemeLight from "../../../design/utils/shared/themes.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../_runtime/04940_LinearGradient.js";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles((arg0) => {
  let obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj = { wrapper: null, cloudsImage: null, cloudsImageLight: null, gradient: null, solidBackground: null };
  const merged1 = Object.assign(arg0 ? { top: "r" } : { bottom: "r" });
  obj.height = 380;
  obj.zIndex = 1;
  obj[0] = obj;
  obj = {};
  const merged2 = Object.assign(tmp.absoluteFillObject);
  const merged3 = Object.assign(arg0 ? { top: "r" } : { bottom: "r" });
  if (arg0) {
    obj1 = {};
  } else {
    obj1 = { transform: null };
    items = [{ rotate: "180deg" }];
    obj1[0] = items;
  }
  const merged4 = Object.assign(obj1);
  obj.width = "100%";
  obj[1] = obj;
  const obj2 = {};
  const merged5 = Object.assign(tmp.absoluteFillObject);
  obj2.bottom = undefined;
  obj2.width = "100%";
  obj[2] = obj2;
  const obj3 = {};
  const merged6 = Object.assign(tmp.absoluteFillObject);
  obj3.opacity = 1;
  obj[3] = obj3;
  const merged7 = Object.assign(tmp.absoluteFillObject);
  obj[4] = {};
  return obj;
});
let items = ["#292252FF", "#1E1F2200"];
const substr = items.slice();
let closure_9 = substr.reverse();
const result = require("set").fileFinishedImporting("modules/quests/native/QuestModalContentCloudBackground.tsx");

export default function QuestModalContentCloudBackground(align) {
  align = align.align;
  let str = "bottom";
  if (undefined !== align) {
    str = align;
  }
  const resizeMode = align.resizeMode;
  let str2 = "cover";
  ({ style, imgStyle } = align);
  if (undefined !== resizeMode) {
    str2 = resizeMode;
  }
  const tmp = callback("bottom" === str);
  let obj = isThemeLight;
  obj1 = useTheme;
  const isThemeDarkResult = obj.isThemeDark(obj1.useTheme());
  obj = { style: items, children: null };
  items = [tmp.wrapper, style];
  if (isThemeDarkResult) {
    obj = { colors: null, style: null };
    obj[0] = "top" === str ? items : closure_9;
    obj[1] = tmp.gradient;
    tmp6(LinearGradientDefault, obj);
  } else {
    obj1 = { style: null };
    obj1[0] = tmp.solidBackground;
    const items1 = [tmp6(tmp5, obj1)];
    const obj2 = { style: null, source: null, resizeMode: null };
    const items2 = [isThemeDarkResult ? tmp.cloudsImage : tmp.cloudsImageLight, imgStyle];
    obj2[0] = items2;
    obj2[1] = importDefault(isThemeDarkResult ? 14955 : 14956);
    obj2[2] = str2;
    items1[1] = tmp6(preloadDefault, obj2);
    obj[1] = items1;
    return tmp4(tmp5, obj);
  }
}
