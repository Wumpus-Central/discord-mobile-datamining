// === Module 9216: ? ===

// Module 9216
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const memoResult = importAllResult.memo((paused) => {
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
  const items1 = [StyleSheet.absoluteFill, ];
  obj = { position: "absolute", width, height: animate(paused[4]).calculateProfileEffectHeight(layerConfig, width), opacity: null };
  let num = 0;
  if (animate) {
    num = 1;
  }
  obj[3] = num;
  items1[1] = obj;
  obj[3] = items1;
  obj[4] = accessibilityLabel;
  obj[5] = onLoad;
  return jsx(animate(paused[3]).APNGPlayer, { position: "absolute", width, height: animate(paused[4]).calculateProfileEffectHeight(layerConfig, width), opacity: null });
});
const result = require("obj132").fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default memoResult;