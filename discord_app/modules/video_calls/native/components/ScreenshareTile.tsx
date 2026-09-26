// === Module 8869: ScreenshareTile ===

// Module 8869 (ScreenshareTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 8870 */;
import _modDef8871 from "module_8871" /* 8871 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden", flex: 1 }, image: { marginBottom: 8, width: 60, height: 40 }, label: { lineHeight: 18, textAlign: "center" }, liveContainer: { position: "absolute", top: 8, right: 8, zIndex: 2 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default function ScreenShareTile(onSingleTap) {
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
  items[1] = timestampProducer(React4, { source: _modDef8871, style: tmp.image, resizeMode: "contain" });
  const obj5 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.G84gtR);
  items[2] = timestampProducer(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = React5(React3, obj2);
  return timestampProducer(LegacyBaseButton.GestureDetector, obj);
};