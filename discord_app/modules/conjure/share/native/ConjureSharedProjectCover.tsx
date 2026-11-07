// === Module 13004: ConjureSharedProjectCover ===

// Module 13004 (ConjureSharedProjectCover)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import components_Button_Button from "components/Button/Button" /* 5758 */;
import FastImageDefault from "FastImage" /* 5842 */;
import PlayIcon from "PlayIcon" /* 8922 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 13005 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let obj2 = { frame: { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST }, cover: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureSharedProjectCover.tsx");

export default function ConjureSharedProjectCover(onPress) {
  ({ application, action, launching } = onPress);
  if (launching === undefined) {
    launching = false;
  }
  const tmp = closure_6();
  const coverImageURL = application.getCoverImageURL(1024);
  if (null != coverImageURL) {
    const obj = { style: tmp.frame, children: null };
    if (null != coverImageURL) {
      const obj2 = { source: null, style: null };
      const obj3 = { uri: coverImageURL };
      obj2.source = obj3;
      obj2.style = tmp.cover;
      let tmp11 = React4(FastImageDefault, obj2);
      let tmp6 = React4;
      let tmp10 = importDefault;
      let v1cF7L4 = dependencyMap;
    } else {
      tmp6 = React4;
      v1cF7L4 = dependencyMap;
      const obj4 = { application, radius: nativeDefault.radii.sm };
      tmp10 = importDefault;
      tmp11 = React4(ConjureAppSheetIconDefault, obj4);
    }
    items = [tmp11, ];
    if (null == action) {
      items[1] = null;
      obj.children = items;
      let tmp4Result = hasOwnProperty(View, obj);
    } else {
      let tmp6Result;
      if ("launch" === action) {
        tmp6Result = tmp6(PlayIcon.PlayIcon, {});
      }
      const obj5 = { variant: "primary-overlay", size: "md", icon: tmp6Result, text: null, loading: null, onPress: null };
      const intl = util.intl;
      const string = intl.string;
      if ("launch" === action) {
        v1cF7L4 = tmp10(4026)["1cF7L4"];
        let stringResult = string(v1cF7L4);
      } else {
        stringResult = string(util.t["3xjX0U"]);
      }
      obj5.text = stringResult;
      obj5.loading = launching;
      obj5.onPress = onPress.onPress;
      tmp6(components_Button_Button.Button, obj5);
    }
  } else {
    tmp4Result = null;
  }
  return tmp4Result;
};