// === Module 8019: ImageGraphic ===

// Module 8019 (ImageGraphic)
import preloadDefault from "preload" /* 5449 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function ImageGraphic(source) {
  const tmp = callback();
  return jsx(preloadDefault, { source: source.src, style: callback().image, resizeMode: "contain", accessibilityElementsHidden: true });
}
function RiveGraphic(riveProps) {
  riveProps = riveProps.riveProps;
  if (riveProps === undefined) {
    riveProps = {};
  }
  const tmp = callback();
  let obj = { style: tmp.image, children: null };
  obj = {};
  const merged = Object.assign(riveProps);
  obj.style = tmp.image;
  obj[1] = jsx(riveProps.rive, {});
  return <View />;
}
let closure_6 = { "21/9": 2.3333333333333335, "16/9": 1.7777777777777777, "6/4": 1.5, "2/1": 2, "1/1": 1 };
let closure_7 = createCacheKey.createStyles({ container: { width: "100%", justifyContent: "center", alignItems: "center", overflow: "hidden" }, image: { width: "100%", height: "100%" } });
const result = require("set").fileFinishedImporting("design/components/Graphic/native/Graphic.native.tsx");

export const Graphic = function Graphic(aspectRatio) {
  let str = aspectRatio.aspectRatio;
  if (str === undefined) {
    str = "16/9";
  }
  let merged = Object.assign(aspectRatio, Object.create(null));
  const items = [merged];
  let obj = {
    style: items1,
    children: React.useMemo(() => {
      let obj = merged(closure_1_2[5]);
      if (obj.isImage(merged)) {
        obj = {};
        merged = Object.assign(tmp3);
        let tmp4 = closure_1_5(closure_1_8, obj);
      } else {
        tmp4 = null;
        if (tmpResult.isRive(tmp3)) {
          obj = {};
          const merged1 = Object.assign(tmp3);
          tmp4 = closure_1_5(closure_1_9, obj);
        }
        tmpResult = merged(closure_1_2[6]);
      }
      return tmp4;
    }, items)
  };
  items1 = [callback().container, , ];
  obj = { aspectRatio: table[str] };
  items1[1] = obj;
  items1[2] = aspectRatio.style;
  return <View aspectRatio={table[str]} />;
};