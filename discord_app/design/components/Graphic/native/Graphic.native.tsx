// === Module 10232: Graphic ===

// Module 10232 (Graphic)
import native from "native" /* 4271 */;
import GraphicTypes from "GraphicTypes" /* 4377 */;
import FastImageDefault from "FastImage" /* 5587 */;
import noop from "module_19" /* 19 */;

require = fn;
function ImageGraphic(source) {
  const tmp = closure_7();
  return jsx(FastImageDefault, { source: source.src, style: closure_7().image, resizeMode: "contain", accessibilityElementsHidden: true });
}
function RiveGraphic(riveProps) {
  riveProps = riveProps.riveProps;
  if (riveProps === undefined) {
    riveProps = {};
  }
  const tmp = closure_7();
  let obj = { style: tmp.image, children: null };
  obj = {};
  const merged = Object.assign(riveProps);
  obj.style = tmp.image;
  obj.children = <riveProps.rive />;
  return <View />;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_6 = { "21/9": 2.3333333333333335, "16/9": 1.7777777777777777, "6/4": 1.5, "2/1": 2, "1/1": 1 };
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ container: { width: "100%", justifyContent: "center", alignItems: "center", overflow: "hidden" }, image: { width: "100%", height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Graphic/native/Graphic.native.tsx");

export const Graphic = function Graphic(aspectRatio) {
  let str = aspectRatio.aspectRatio;
  if (str === undefined) {
    str = "16/9";
  }
  let merged = Object.assign(aspectRatio, Object.assign({ aspectRatio: 0, style: 0 }));
  const items = [merged];
  let obj = {
    style: null,
    children: noop.useMemo(() => {
      let obj = native;
      if (obj.isImage(merged)) {
        obj = {};
        merged = Object.assign(tmp3);
        let tmp4 = <ImageGraphic />;
      } else {
        tmp4 = null;
        if (tmpResult.isRive(tmp3)) {
          obj = {};
          const merged1 = Object.assign(tmp3);
          tmp4 = <RiveGraphic />;
        }
        tmpResult = GraphicTypes;
      }
      return tmp4;
    }, items)
  };
  const items1 = [closure_7().container, , ];
  obj = { aspectRatio: closure_6[str] };
  items1[1] = obj;
  items1[2] = aspectRatio.style;
  obj.style = items1;
  return <View aspectRatio={closure_6[str]} />;
};