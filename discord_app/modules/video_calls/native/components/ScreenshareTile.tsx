// === Module 10843: ScreenshareTile ===

// Module 10843 (ScreenshareTile)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import FastImageDefault from "FastImage" /* 6163 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 10844 */;
import _modDef10845 from "module_10845" /* 10845 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden", flex: 1 }, image: { marginBottom: 8, width: 60, height: 40 }, label: { lineHeight: 18, textAlign: "center" }, liveContainer: { position: "absolute", top: 8, right: 8, zIndex: 2 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden", flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenShareTile(arg0) {
  const cResult = c.c(19);
  ({ onSingleTap, onDoubleTap } = arg0);
  if (undefined === onSingleTap) {
    onSingleTap = NOOP;
  }
  if (undefined === onDoubleTap) {
    onDoubleTap = NOOP;
  }
  const tmp4 = closure_7();
  if (cResult[0] === onDoubleTap) {
    if (cResult[1] === onSingleTap) {
      let tmp5 = cResult[2];
    }
    const tmp7 = useParticipantTileTapGestureDefault(tmp5);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = hasOwnProperty(native.LiveTag, {});
      cResult[3] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== tmp4.liveContainer) {
      const obj2 = { style: tmp4.liveContainer, children: tmp9 };
      const tmp15 = hasOwnProperty(View, obj2);
      cResult[4] = tmp4.liveContainer;
      cResult[5] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp4.image) {
      const obj3 = { source: _modDef10845, style: tmp4.image, resizeMode: "contain" };
      const tmp19 = hasOwnProperty(FastImageDefault, obj3);
      cResult[6] = tmp4.image;
      cResult[7] = tmp19;
      let tmp16 = tmp19;
      const tmp6Result = FastImageDefault;
    } else {
      tmp16 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.G84gtR);
      cResult[8] = stringResult;
      let tmp20 = stringResult;
    } else {
      tmp20 = cResult[8];
    }
    if (cResult[9] !== tmp4.label) {
      const obj4 = { style: tmp4.label, variant: "text-xs/bold", color: "text-overlay-light", children: tmp20 };
      const tmp24 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[9] = tmp4.label;
      cResult[10] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[10];
    }
    if (cResult[11] === tmp4.container) {
      if (cResult[12] === tmp22) {
        if (cResult[13] === tmp12) {
          if (cResult[14] === tmp16) {
            let tmp25 = cResult[15];
          }
          if (cResult[16] === tmp7) {
            if (cResult[17] === tmp25) {
              let tmp29 = cResult[18];
            }
            return tmp29;
          }
          const obj5 = { gesture: tmp7, children: tmp25 };
          const tmp31 = hasOwnProperty(LegacyBaseButton.GestureDetector, obj5);
          cResult[16] = tmp7;
          cResult[17] = tmp25;
          cResult[18] = tmp31;
          tmp29 = tmp31;
        }
      }
    }
    const obj6 = { style: tmp4.container, children: null };
    const items = [tmp12, tmp16, tmp22];
    obj6.children = items;
    const tmp28 = timestampProducer(View, obj6);
    cResult[11] = tmp4.container;
    cResult[12] = tmp22;
    cResult[13] = tmp12;
    cResult[14] = tmp16;
    cResult[15] = tmp28;
    tmp25 = tmp28;
  }
  const obj7 = { onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap };
  cResult[0] = onDoubleTap;
  cResult[1] = onSingleTap;
  cResult[2] = obj7;
  tmp5 = obj7;
}) : (function ScreenShareTile(onSingleTap) {
  onSingleTap = onSingleTap.onSingleTap;
  if (onSingleTap === undefined) {
    onSingleTap = NOOP;
  }
  let onDoubleTap = onSingleTap.onDoubleTap;
  if (onDoubleTap === undefined) {
    onDoubleTap = NOOP;
  }
  const tmp = closure_7();
  const obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }), children: null };
  const obj2 = { style: tmp.container, children: null };
  const tmp2 = useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap });
  const items = [hasOwnProperty(View, { style: tmp.liveContainer, children: hasOwnProperty(native.LiveTag, {}) }), , ];
  const obj4 = { source: null, style: null, resizeMode: "contain" };
  const obj3 = { style: tmp.liveContainer, children: hasOwnProperty(native.LiveTag, {}) };
  obj4.source = _modDef10845;
  obj4.style = tmp.image;
  items[1] = hasOwnProperty(FastImageDefault, obj4);
  const obj5 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.G84gtR);
  items[2] = hasOwnProperty(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(LegacyBaseButton.GestureDetector, obj);
});