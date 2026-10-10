// === Module 9452: Graphic ===

// Module 9452 (Graphic)
import c from "c" /* 576 */;
import native from "native" /* 4827 */;
import GraphicTypes from "GraphicTypes" /* 4935 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["aspectRatio", "style"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const dependencyMap = { "21/9": 2.3333333333333335, "16/9": 1.7777777777777777, "6/4": 1.5, "2/1": 2, "1/1": 1 };
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ container: { width: "100%", justifyContent: "center", alignItems: "center", overflow: "hidden" }, image: { width: "100%", height: "100%" } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageGraphic(src) {
  const cResult = c.c(3);
  src = src.src;
  const tmp3 = closure_9();
  if (cResult[0] === src) {
    if (cResult[1] === tmp3.image) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(FastImageDefault, { source: src, style: tmp3.image, resizeMode: "contain", accessibilityElementsHidden: true });
  cResult[0] = src;
  cResult[1] = tmp3.image;
  cResult[2] = tmp5;
  tmp4 = tmp5;
  const obj2 = { source: src, style: tmp3.image, resizeMode: "contain", accessibilityElementsHidden: true };
}) : (function ImageGraphic(source) {
  const tmp = closure_9();
  return jsx(FastImageDefault, { source: source.src, style: closure_9().image, resizeMode: "contain", accessibilityElementsHidden: true });
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function RiveGraphic(arg0) {
  const cResult = c.c(9);
  ({ rive, riveProps } = arg0);
  if (cResult[0] !== riveProps) {
    let obj2 = riveProps;
    if (undefined === riveProps) {
      obj2 = {};
    }
    cResult[0] = riveProps;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_9();
  if (cResult[2] === rive) {
    if (cResult[3] === tmp2) {
      if (cResult[4] === tmp3.image) {
        let tmp4 = cResult[5];
      }
      if (cResult[6] === tmp3.image) {
        if (cResult[7] === tmp4) {
          let tmp7 = cResult[8];
        }
        return tmp7;
      }
      const obj3 = { style: tmp3.image, children: tmp4 };
      const tmp10 = <View style={tmp3.image}>{tmp4}</View>;
      cResult[6] = tmp3.image;
      cResult[7] = tmp4;
      cResult[8] = tmp10;
      tmp7 = tmp10;
    }
  }
  const obj4 = {};
  const merged = Object.assign(tmp2);
  obj4.style = tmp3.image;
  const tmp6 = <rive />;
  cResult[2] = rive;
  cResult[3] = tmp2;
  cResult[4] = tmp3.image;
  cResult[5] = tmp6;
  tmp4 = tmp6;
}) : (function RiveGraphic(riveProps) {
  riveProps = riveProps.riveProps;
  if (riveProps === undefined) {
    riveProps = {};
  }
  const tmp = closure_9();
  const obj = { style: tmp.image, children: null };
  const obj2 = {};
  const merged = Object.assign(riveProps);
  obj2.style = tmp.image;
  obj.children = <riveProps.rive />;
  return <View style={tmp.image}>{null}</View>;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Graphic/native/Graphic.native.tsx");

export const Graphic = ReactCompilerGating.isReactCompilerEnabled() ? (function Graphic(arg0) {
  const cResult = c.c(17);
  if (cResult[0] !== arg0) {
    ({ aspectRatio, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = style;
    cResult[3] = aspectRatio;
    let tmp6 = aspectRatio;
    let tmp5 = style;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  let str = "16/9";
  if (undefined !== tmp6) {
    str = tmp6;
  }
  const tmp10 = closure_9();
  if (tmpResult.isImage(tmp4)) {
    if (cResult[4] !== tmp4) {
      const obj2 = {};
      const merged = Object.assign(tmp4);
      const tmp25 = <closure_10 />;
      cResult[4] = tmp4;
      cResult[5] = tmp25;
    }
  } else {
    let tmp11 = null;
    if (tmpResult2.isRive(tmp4)) {
      if (cResult[6] !== tmp4) {
        const obj3 = {};
        const merged1 = Object.assign(tmp4);
        const tmp18 = <closure_11 />;
        cResult[6] = tmp4;
        cResult[7] = tmp18;
        let tmp12 = tmp18;
      } else {
        tmp12 = cResult[7];
      }
      tmp11 = tmp12;
    }
    if (cResult[8] !== dependencyMap[str]) {
      const obj4 = { aspectRatio: tmp28 };
      cResult[8] = tmp28;
      cResult[9] = obj4;
      let tmp29 = obj4;
    } else {
      tmp29 = cResult[9];
    }
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp10.container) {
        if (cResult[12] === tmp29) {
          let tmp30 = cResult[13];
        }
        if (cResult[14] === tmp11) {
          if (cResult[15] === tmp30) {
            let tmp31 = cResult[16];
          }
          return tmp31;
        }
        const obj5 = { style: tmp30, children: tmp11 };
        const tmp34 = <View style={tmp30}>{tmp11}</View>;
        cResult[14] = tmp11;
        cResult[15] = tmp30;
        cResult[16] = tmp34;
        tmp31 = tmp34;
      }
    }
    const items = [tmp10.container, tmp29, tmp5];
    cResult[10] = tmp5;
    cResult[11] = tmp10.container;
    cResult[12] = tmp29;
    cResult[13] = items;
    tmp30 = items;
    tmpResult2 = GraphicTypes;
  }
  tmpResult = native;
}) : (function Graphic(aspectRatio) {
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
        let tmp4 = <closure_10 />;
      } else {
        tmp4 = null;
        if (tmpResult.isRive(tmp3)) {
          const obj3 = {};
          const merged1 = Object.assign(tmp3);
          tmp4 = <closure_11 />;
        }
        tmpResult = GraphicTypes;
      }
      return tmp4;
    }, items)
  };
  const items1 = [closure_9().container, { aspectRatio: dependencyMap[str] }, aspectRatio.style];
  obj.style = items1;
  return <View style={null}>{noop.useMemo(() => {
    if (obj.isImage(merged)) {
      const obj2 = {};
      merged = Object.assign(tmp3);
      let tmp4 = <closure_10 />;
    } else {
      tmp4 = null;
      if (tmpResult.isRive(tmp3)) {
        const obj3 = {};
        const merged1 = Object.assign(tmp3);
        tmp4 = <closure_11 />;
      }
      tmpResult = GraphicTypes;
    }
    return tmp4;
  }, items)}</View>;
});