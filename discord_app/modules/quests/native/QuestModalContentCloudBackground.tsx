// discord_app/modules/quests/native/QuestModalContentCloudBackground.tsx
import themes from "../../../design/utils/shared/themes.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((arg0) => {
  let obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj = { wrapper: null, cloudsImage: null, cloudsImageLight: null, gradient: null, solidBackground: null };
  const merged1 = Object.assign(arg0 ? { top: "Array" } : { bottom: "Array" });
  obj.height = 380;
  obj.zIndex = 1;
  obj.wrapper = obj;
  obj = {};
  const merged2 = Object.assign(tmp.absoluteFillObject);
  const merged3 = Object.assign(arg0 ? { top: "Array" } : { bottom: "Array" });
  if (arg0) {
    let obj1 = {};
  } else {
    obj1 = { transform: null };
    items = [{ rotate: "180deg" }];
    obj1.transform = items;
  }
  const merged4 = Object.assign(obj1);
  obj.width = "100%";
  obj.cloudsImage = obj;
  const obj2 = {};
  const merged5 = Object.assign(tmp.absoluteFillObject);
  obj2.bottom = undefined;
  obj2.width = "100%";
  obj.cloudsImageLight = obj2;
  const obj3 = {};
  const merged6 = Object.assign(tmp.absoluteFillObject);
  obj3.opacity = 1;
  obj.gradient = obj3;
  const merged7 = Object.assign(tmp.absoluteFillObject);
  obj.solidBackground = {};
  return obj;
});
let items = ["#292252FF", "#1E1F2200"];
const substr = items.slice();
let closure_9 = substr.reverse();
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestModalContentCloudBackground.tsx");

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
  const tmp = closure_7("bottom" === str);
  let obj = themes;
  let obj1 = useTheme;
  const isThemeDarkResult = obj.isThemeDark(obj1.useTheme());
  obj = { style: null, children: null };
  items = [tmp.wrapper, style];
  obj.style = items;
  if (isThemeDarkResult) {
    obj = { colors: "top" === str ? items : closure_9, style: tmp.gradient };
    tmp6(LinearGradientDefault, obj);
  } else {
    obj1 = { style: tmp.solidBackground };
    const items1 = [tmp6(tmp5, obj1)];
    const obj2 = { style: null, source: null, resizeMode: null };
    const items2 = [isThemeDarkResult ? tmp.cloudsImage : tmp.cloudsImageLight, imgStyle];
    obj2.style = items2;
    obj2.source = importDefault(isThemeDarkResult ? 15128 : 15129);
    obj2.resizeMode = str2;
    items1[1] = tmp6(FastImageDefault, obj2);
    obj.children = items1;
    return tmp4(tmp5, obj);
  }
}
