// discord_app/modules/video_calls/native/components/ScreenshareTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LegacyBaseButton from "../../../../../_runtime/06760_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import _modDef9725 from "../../../../../_runtime/metro/09725__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.BLACK,
    overflow: "hidden",
    flex: 1,
  },
  image: { marginBottom: 8, width: 60, height: 40 },
  label: { lineHeight: 18, textAlign: "center" },
  liveContainer: { position: "absolute", top: 8, right: 8, zIndex: 2 },
};
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
  const obj = {
    gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }),
    children: null,
  };
  const obj2 = { style: tmp.container, children: null };
  const tmp2 = useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap });
  const items = [
    timestampProducer(React3, { style: tmp.liveContainer, children: timestampProducer(native.LiveTag, {}) }),
    ,
  ];
  const obj3 = { style: tmp.liveContainer, children: timestampProducer(native.LiveTag, {}) };
  items[1] = timestampProducer(React4, { source: _modDef9725, style: tmp.image, resizeMode: "contain" });
  const obj5 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.G84gtR);
  items[2] = timestampProducer(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = React5(React3, obj2);
  return timestampProducer(LegacyBaseButton.GestureDetector, obj);
}
