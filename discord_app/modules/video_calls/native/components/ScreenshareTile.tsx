// === Module 10697: ScreenshareTile ===

// Module 10697 (ScreenshareTile)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 10698 */;
import _modDef10699 from "module_10699" /* 10699 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden", flex: 1 }, image: { marginBottom: 8, width: 60, height: 40 }, label: { lineHeight: 18, textAlign: "center" }, liveContainer: { position: "absolute", top: 8, right: 8, zIndex: 2 } };
let closure_8 = createStyles.createStyles(obj2);
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
  const tmp4 = closure_8();
  if (cResult[0] === onDoubleTap) {
    if (cResult[1] === onSingleTap) {
      let tmp5 = cResult[2];
    }
    const tmp7 = useParticipantTileTapGestureDefault(tmp5);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = timestampProducer(native.LiveTag, {});
      cResult[3] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== tmp4.liveContainer) {
      const obj2 = { style: tmp4.liveContainer, children: tmp9 };
      const tmp15 = timestampProducer(React3, obj2);
      cResult[4] = tmp4.liveContainer;
      cResult[5] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp4.image) {
      const obj3 = { source: _modDef10699, style: tmp4.image, resizeMode: "contain" };
      const tmp19 = timestampProducer(React4, obj3);
      cResult[6] = tmp4.image;
      cResult[7] = tmp19;
      let tmp16 = tmp19;
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
      const tmp24 = timestampProducer(Text_Text.Text, obj4);
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
          const tmp31 = timestampProducer(LegacyBaseButton.GestureDetector, obj5);
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
    const tmp28 = React5(React3, obj6);
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
  const tmp = closure_8();
  const obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }), children: null };
  const obj2 = { style: tmp.container, children: null };
  const tmp2 = useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap });
  const items = [timestampProducer(React3, { style: tmp.liveContainer, children: timestampProducer(native.LiveTag, {}) }), , ];
  const obj3 = { style: tmp.liveContainer, children: timestampProducer(native.LiveTag, {}) };
  items[1] = timestampProducer(React4, { source: _modDef10699, style: tmp.image, resizeMode: "contain" });
  const obj5 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.G84gtR);
  items[2] = timestampProducer(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = React5(React3, obj2);
  return timestampProducer(LegacyBaseButton.GestureDetector, obj);
});