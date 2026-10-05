// === Module 9891: Graphic ===

// Module 9891 (Graphic)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 4589 */;
import GraphicTypes from "GraphicTypes" /* 4695 */;
import FastImageDefault from "FastImage" /* 5974 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let src;

let closure_3 = ["aspectRatio", "style"];
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = { "21/9": 2.3333333333333335, "16/9": 1.7777777777777777, "6/4": 1.5, "2/1": 2, "1/1": 1 };
let closure_9 = createStyles.createStyles({ container: { width: "100%", justifyContent: "center", alignItems: "center", overflow: "hidden" }, image: { width: "100%", height: "100%" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((src) => {
  const obj = react2;
  const cResult = obj.c(3);
  src = src.src;
  const tmp3 = closure_9();
  if (cResult[0] === src) {
    let tmp4;
    if (cResult[1] === tmp3.image) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(FastImageDefault, { source: src, style: tmp3.image, resizeMode: "contain", accessibilityElementsHidden: true });
  cResult[0] = src;
  cResult[1] = tmp3.image;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((src) => {
  src = src.src;
  return jsx(FastImageDefault, { source: src, style: closure_9().image, resizeMode: "contain", accessibilityElementsHidden: true });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let rive;
  let riveProps;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(9);
  ({ rive, riveProps } = arg0);
  if (cResult[0] !== riveProps) {
    let obj2 = riveProps;
    if (undefined === riveProps) {
      obj2 = {};
    }
    cResult[0] = riveProps;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_9();
  if (cResult[2] === rive) {
    if (cResult[3] === tmp2) {
      let tmp4;
      if (cResult[4] === tmp3.image) {
        tmp4 = cResult[5];
      }
      if (cResult[6] === tmp3.image) {
        let tmp7;
        if (cResult[7] === tmp4) {
          tmp7 = cResult[8];
        }
        return tmp7;
      }
      const tmp10 = <View style={tmp3.image}>{tmp4}</View>;
      cResult[6] = tmp3.image;
      cResult[7] = tmp4;
      cResult[8] = tmp10;
      tmp7 = tmp10;
    }
  }
  const merged = Object.assign(tmp2);
  const tmp6 = <rive style={tmp3.image} />;
  cResult[2] = rive;
  cResult[3] = tmp2;
  cResult[4] = tmp3.image;
  cResult[5] = tmp6;
  tmp4 = tmp6;
}) : ((riveProps) => {
  riveProps = riveProps.riveProps;
  const rive = riveProps.rive;
  if (riveProps === undefined) {
    riveProps = {};
  }
  const tmp = closure_9();
  const merged = Object.assign(riveProps);
  return <View style={tmp.image}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let aspectRatio;
  let style;
  let tmp11;
  let tmp27;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(17);
  if (cResult[0] !== arg0) {
    ({ aspectRatio, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = style;
    cResult[3] = aspectRatio;
    tmp6 = aspectRatio;
    tmp5 = style;
    tmp4 = tmp9;
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
  const tmpResult = native;
  if (tmpResult.isImage(tmp4)) {
    let tmp19;
    if (cResult[4] !== tmp4) {
      const merged = Object.assign(tmp4);
      const tmp25 = <closure_10 />;
      cResult[4] = tmp4;
      cResult[5] = tmp25;
      tmp19 = tmp25;
    } else {
      tmp19 = cResult[5];
    }
    tmp11 = tmp19;
  } else {
    tmp11 = null;
    const tmpResult2 = GraphicTypes;
    if (tmpResult2.isRive(tmp4)) {
      let tmp12;
      if (cResult[6] !== tmp4) {
        const merged1 = Object.assign(tmp4);
        const tmp18 = <closure_11 />;
        cResult[6] = tmp4;
        cResult[7] = tmp18;
        tmp12 = tmp18;
      } else {
        tmp12 = cResult[7];
      }
      tmp11 = tmp12;
    }
  }
  if (cResult[8] !== closure_8[str]) {
    const obj4 = { aspectRatio: closure_8[str] };
    cResult[8] = closure_8[str];
    cResult[9] = obj4;
    tmp27 = obj4;
  } else {
    tmp27 = cResult[9];
  }
  if (cResult[10] === tmp5) {
    if (cResult[11] === tmp10.container) {
      let tmp28;
      if (cResult[12] === tmp27) {
        tmp28 = cResult[13];
      }
      if (cResult[14] === tmp11) {
        let tmp29;
        if (cResult[15] === tmp28) {
          tmp29 = cResult[16];
        }
        return tmp29;
      }
      const tmp32 = <View style={tmp28}>{tmp11}</View>;
      cResult[14] = tmp11;
      cResult[15] = tmp28;
      cResult[16] = tmp32;
      tmp29 = tmp32;
    }
  }
  const items = [tmp10.container, tmp27, tmp5];
  cResult[10] = tmp5;
  cResult[11] = tmp10.container;
  cResult[12] = tmp27;
  cResult[13] = items;
  tmp28 = items;
}) : ((aspectRatio) => {
  let str = aspectRatio.aspectRatio;
  if (str === undefined) {
    str = "16/9";
  }
  const style = aspectRatio.style;
  let merged = Object.assign(aspectRatio, Object.assign({ aspectRatio: 0, style: 0 }));
  const items = [merged];
  const items1 = [closure_9().container, , ];
  const obj2 = { aspectRatio: closure_8[str] };
  items1[1] = obj2;
  items1[2] = style;
  const tmp2 = closure_9();
  return <View style={items1}>{react.useMemo(() => {
    let tmp4;
    const obj = native;
    if (obj.isImage(merged)) {
      merged = Object.assign(tmp3);
      tmp4 = <closure_10 />;
    } else {
      tmp4 = null;
      const tmpResult = GraphicTypes;
      if (tmpResult.isRive(merged)) {
        const merged1 = Object.assign(tmp3);
        tmp4 = <closure_11 />;
      }
    }
    return tmp4;
  }, items)}</View>;
});
const result = size.fileFinishedImporting("design/components/Graphic/native/Graphic.native.tsx");

export const Graphic = tmp2;