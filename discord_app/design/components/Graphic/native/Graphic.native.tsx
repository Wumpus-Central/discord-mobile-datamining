// === Module 10363: Graphic ===

// Module 10363 (Graphic)
import GraphicTypes from "GraphicTypes" /* 4457 */;
import FastImageDefault from "FastImage" /* 5672 */;
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
  const obj = { style: tmp.image, children: null };
  const obj2 = {};
  const merged = Object.assign(riveProps);
  obj2.style = tmp.image;
  obj.children = <riveProps.rive />;
  return <View style={tmp.image}>{null}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_6 = { "21/9": 2.3333333333333335, "16/9": 1.7777777777777777, "6/4": 1.5, "2/1": 2, "1/1": 1 };
const createStyles = fn(4639);
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
  const obj = {
    style: null,
    children: noop.useMemo(() => {
      if (obj.isImage(merged)) {
        const obj2 = {};
        merged = Object.assign(tmp3);
        let tmp4 = <ImageGraphic />;
      } else {
        tmp4 = null;
        if (tmpResult.isRive(tmp3)) {
          const obj3 = {};
          const merged1 = Object.assign(tmp3);
          tmp4 = <RiveGraphic />;
        }
        tmpResult = GraphicTypes;
      }
      return tmp4;
    }, items)
  };
  const items1 = [closure_7().container, { aspectRatio: closure_6[str] }, aspectRatio.style];
  obj.style = items1;
  return <View style={null}>{noop.useMemo(() => {
    if (obj.isImage(merged)) {
      const obj2 = {};
      merged = Object.assign(tmp3);
      let tmp4 = <ImageGraphic />;
    } else {
      tmp4 = null;
      if (tmpResult.isRive(tmp3)) {
        const obj3 = {};
        const merged1 = Object.assign(tmp3);
        tmp4 = <RiveGraphic />;
      }
      tmpResult = GraphicTypes;
    }
    return tmp4;
  }, items)}</View>;
};