// discord_app/modules/video_calls/native/components/ScreenshareTile.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, image: null, label: null, liveContainer: null };
createCacheKey = { alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BLACK, overflow: "hidden", flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 8, width: 60, height: 40 };
createCacheKey[2] = { lineHeight: 18, textAlign: "center" };
createCacheKey[3] = { position: "absolute", top: 8, right: 8, zIndex: 2 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default function ScreenShareTile(onSingleTap) {
  onSingleTap = onSingleTap.onSingleTap;
  if (onSingleTap === undefined) {
    onSingleTap = NOOP;
  }
  let onDoubleTap = onSingleTap.onDoubleTap;
  if (onDoubleTap === undefined) {
    onDoubleTap = NOOP;
  }
  const tmp = createCacheKey();
  let obj = { gesture: importDefault(10556)({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }), children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.liveContainer, children: null };
  obj[1] = callback(require(1297) /* Button */.LiveTag, {});
  const items = [callback(closure_3, obj), , ];
  const tmp2 = importDefault(10556)({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap });
  items[1] = callback(closure_4, { source: importDefault(10557), style: tmp.image, resizeMode: "contain" });
  const obj2 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj2[3] = intl.string(require(1236) /* getSystemLocale */.t.G84gtR);
  items[2] = callback(require(4189) /* Text */.Text, obj2);
  obj[1] = items;
  obj[1] = callback2(closure_3, obj);
  return callback(require(5277) /* Directions */.GestureDetector, obj);
};