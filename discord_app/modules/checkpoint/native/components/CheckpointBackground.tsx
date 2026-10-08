// === Module 15816: CheckpointBackground ===

// Module 15816 (CheckpointBackground)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1085 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import CheckpointConstants from "CheckpointConstants" /* 5433 */;
import FastImageDefault from "FastImage" /* 6164 */;
import _modDef15817 from "module_15817" /* 15817 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const colors = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointBackground() {
  const cResult = c.c(8);
  const tmp3 = closure_8();
  if (cResult[0] !== tmp3.background) {
    const obj3 = { colors, start: null, end: null, style: null };
    ({ START: obj2.start, END: obj2.end } = VerticalGradient);
    obj3.style = tmp3.background;
    const tmp9 = hasOwnProperty(LinearGradientDefault, obj3);
    cResult[0] = tmp3.background;
    cResult[1] = tmp9;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { uri: _modDef15817 };
    cResult[2] = obj4;
    let tmp10 = obj4;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp3.background) {
    const obj5 = { source: tmp10, style: tmp3.background, resizeMode: "cover" };
    const tmp15 = hasOwnProperty(FastImageDefault, obj5);
    cResult[3] = tmp3.background;
    cResult[4] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    if (cResult[6] === tmp12) {
      let tmp16 = cResult[7];
    }
    return tmp16;
  }
  const obj9 = { children: null };
  const items = [tmp4, tmp12];
  obj9.children = items;
  const tmp17 = React5(timestampProducer, obj9);
  cResult[5] = tmp4;
  cResult[6] = tmp12;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (function CheckpointBackground() {
  const tmp = closure_8();
  const obj = { children: null };
  const items = [hasOwnProperty(LinearGradientDefault, { colors, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.background }), ];
  const obj3 = { source: null, style: null, resizeMode: "cover" };
  const obj4 = { uri: _modDef15817 };
  obj3.source = obj4;
  obj3.style = tmp.background;
  items[1] = hasOwnProperty(FastImageDefault, obj3);
  obj.children = items;
  return React5(timestampProducer, obj);
});