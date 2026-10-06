// === Module 15791: CollectiblesProgressiveImage ===

// Module 15791 (CollectiblesProgressiveImage)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

let hasOwnProperty;
let metroRequire;
let closure_3 = ["source", "style"];
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const jsx = Fragment.jsx;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let sharedValue;
  let source;
  let style;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(16);
  if (cResult[0] !== arg0) {
    ({ source, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = source;
    cResult[3] = style;
    tmp6 = style;
    tmp5 = source;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmpResult = tmp(4618);
  sharedValue = tmpResult.useSharedValue(0);
  if (cResult[4] !== sharedValue) {
    const fn = function h() {
      let Easing;
      set = sharedValue.set;
      const obj = { duration: 500, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withTiming(1, obj));
    };
    cResult[4] = sharedValue;
    cResult[5] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== sharedValue) {
    const obj2 = { opacity: sharedValue };
    const merged = Object.assign(closure_6.absoluteFillObject);
    cResult[6] = sharedValue;
    cResult[7] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === tmp11) {
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp5) {
        let tmp16;
        if (cResult[11] === tmp12) {
          tmp16 = cResult[12];
        }
        if (cResult[13] === tmp6) {
          let tmp19;
          if (cResult[14] === tmp16) {
            tmp19 = cResult[15];
          }
          return tmp19;
        }
        const tmp22 = <closure_5 style={tmp6}>{tmp16}</closure_5>;
        cResult[13] = tmp6;
        cResult[14] = tmp16;
        cResult[15] = tmp22;
        tmp19 = tmp22;
      }
    }
  }
  const Image = ReanimatedRexportDefault.Image;
  const merged1 = Object.assign(tmp4);
  const tmp18 = <Image source={tmp5} style={tmp12} onLoad={tmp11} />;
  cResult[8] = tmp11;
  cResult[9] = tmp4;
  cResult[10] = tmp5;
  cResult[11] = tmp12;
  cResult[12] = tmp18;
  tmp16 = tmp18;
}) : ((arg0) => {
  let source;
  let style;
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  let obj = sharedValue(4618);
  sharedValue = obj.useSharedValue(0);
  const Image = ReanimatedRexportDefault.Image;
  const merged1 = Object.assign(merged);
  const obj4 = { opacity: sharedValue };
  const merged2 = Object.assign(closure_6.absoluteFillObject);
  return <closure_5 style={style}>{null}</closure_5>;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = tmp4;