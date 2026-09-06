// === Module 9591: ScreenshareTile ===

// Module 9591 (ScreenshareTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 9592 */;
import _modDef9593 from "module_9593" /* 9593 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, image: null, label: null, liveContainer: null };
createStyles = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden", flex: 1 };
createStyles.container = createStyles;
createStyles.image = { marginBottom: 8, width: 60, height: 40 };
createStyles.label = { lineHeight: 18, textAlign: "center" };
createStyles.liveContainer = { position: "absolute", top: 8, right: 8, zIndex: 2 };
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }), children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.liveContainer, children: timestampProducer(native.LiveTag, {}) };
  const items = [timestampProducer(React3, obj), , ];
  const tmp2 = useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap });
  items[1] = timestampProducer(React4, { source: _modDef9593, style: tmp.image, resizeMode: "contain" });
  const obj2 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.G84gtR);
  items[2] = timestampProducer(Text_Text.Text, obj2);
  obj.children = items;
  obj.children = React5(React3, obj);
  return timestampProducer(LegacyBaseButton.GestureDetector, obj);
};