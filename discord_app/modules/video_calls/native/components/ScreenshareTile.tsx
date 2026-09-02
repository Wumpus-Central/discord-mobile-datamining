// === Module 9572: ScreenShareTile ===

// Module 9572 (ScreenShareTile)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import Text from "Text" /* 4474 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5660 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 9573 */;
import registerAssetDefault from "registerAsset" /* 9574 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { NOOP } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, image: null, label: null, liveContainer: null };
createCacheKey = { alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BLACK, overflow: "hidden", flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 8, width: 60, height: 40 };
createCacheKey[2] = { lineHeight: 18, textAlign: "center" };
createCacheKey[3] = { position: "absolute", top: 8, right: 8, zIndex: 2 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default function ScreenShareTile(onSingleTap) {
  onSingleTap = onSingleTap.onSingleTap;
  if (onSingleTap === undefined) {
    onSingleTap = NOOP;
  }
  let onDoubleTap = onSingleTap.onDoubleTap;
  if (onDoubleTap === undefined) {
    onDoubleTap = NOOP;
  }
  const tmp = callback3();
  let obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }), children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.liveContainer, children: callback(Button.LiveTag, {}) };
  const items = [callback(closure_3, obj), , ];
  const tmp2 = useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap });
  items[1] = callback(closure_4, { source: registerAssetDefault, style: tmp.image, resizeMode: "contain" });
  const obj2 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t.G84gtR);
  items[2] = callback(Text.Text, obj2);
  obj[1] = items;
  obj[1] = callback2(closure_3, obj);
  return callback(LegacyBaseButton.GestureDetector, obj);
};