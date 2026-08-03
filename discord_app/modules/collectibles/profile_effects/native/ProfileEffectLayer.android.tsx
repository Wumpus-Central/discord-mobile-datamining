// === Module 8400: ? ===

// Module 8400
import importAllResult from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((paused) => {
  let accessibilityLabel;
  let animate;
  let layerConfig;
  let onLoad;
  ({ layerConfig, animate } = paused);
  paused = paused.paused;
  const width = paused.width;
  let aPNGPlayerControls;
  ({ accessibilityLabel, onLoad } = paused);
  const ref = aPNGPlayerControls.useRef(null);
  let obj = animate(paused[3]);
  aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [animate, paused, aPNGPlayerControls];
  const effect = aPNGPlayerControls.useEffect(() => {
    if (animate) {
      if (!paused) {
        aPNGPlayerControls.play();
      }
    }
    aPNGPlayerControls.pause();
  }, items);
  obj = { ref, url: layerConfig.src, autoplay: false, style: null, ariaLabel: null, onLoad: null };
  const items1 = [StyleSheet.absoluteFill, ];
  obj = { position: "absolute", width, height: null, opacity: null };
  obj[2] = animate(paused[4]).calculateProfileEffectHeight(layerConfig, width);
  let num = 0;
  if (animate) {
    num = 1;
  }
  obj[3] = num;
  items1[1] = obj;
  obj[3] = items1;
  obj[4] = accessibilityLabel;
  obj[5] = onLoad;
  return jsx(animate(paused[3]).APNGPlayer, { position: "absolute", width, height: null, opacity: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default memoResult;