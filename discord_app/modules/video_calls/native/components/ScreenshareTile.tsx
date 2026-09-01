// discord_app/modules/video_calls/native/components/ScreenshareTile.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import LegacyBaseButton from "../../../../../_runtime/05652_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import registerAssetDefault from "../../../../../_runtime/09561_registerAsset.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NOOP } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, image: null, label: null, liveContainer: null };
createCacheKey = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.BLACK,
  overflow: "hidden",
  flex: 1,
};
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
  let obj = {
    gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }),
    children: null,
  };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.liveContainer, children: callback(Button.LiveTag, {}) };
  const items = [callback(closure_3, obj), ,];
  const tmp2 = useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap });
  items[1] = callback(closure_4, { source: registerAssetDefault, style: tmp.image, resizeMode: "contain" });
  const obj2 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t.G84gtR);
  items[2] = callback(Text.Text, obj2);
  obj[1] = items;
  obj[1] = callback2(closure_3, obj);
  return callback(LegacyBaseButton.GestureDetector, obj);
}
