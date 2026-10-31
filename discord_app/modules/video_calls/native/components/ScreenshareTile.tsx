// discord_app/modules/video_calls/native/components/ScreenshareTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05303_LegacyBaseButton.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import _modDef11755 from "../../../../../_runtime/metro/11755__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const NOOP = fn(1072).NOOP;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
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
let closure_7 = createStyles.createStyles(obj2);
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
  const tmp = closure_7();
  const obj = {
    gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }),
    children: null,
  };
  const obj2 = { style: tmp.container, children: null };
  const tmp2 = useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap });
  const items = [hasOwnProperty(View, { style: tmp.liveContainer, children: hasOwnProperty(native.LiveTag, {}) }), ,];
  const obj4 = { source: null, style: null, resizeMode: "contain" };
  const obj3 = { style: tmp.liveContainer, children: hasOwnProperty(native.LiveTag, {}) };
  obj4.source = _modDef11755;
  obj4.style = tmp.image;
  items[1] = hasOwnProperty(FastImageDefault, obj4);
  const obj5 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.G84gtR);
  items[2] = hasOwnProperty(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(LegacyBaseButton.GestureDetector, obj);
}
