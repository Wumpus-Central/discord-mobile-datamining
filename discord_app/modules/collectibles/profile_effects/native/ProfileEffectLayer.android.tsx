// === Module 8270: ProfileEffectLayer ===

// Module 8270 (ProfileEffectLayer)
import ProfileEffectUtils from "ProfileEffectUtils" /* 8267 */;
import APNGPlayer from "APNGPlayer" /* 8271 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default noop.memo((paused) => {
  ({ layerConfig, animate } = paused);
  paused = paused.paused;
  const width = paused.width;
  ({ accessibilityLabel, onLoad } = paused);
  const ref = noop.useRef(null);
  const aPNGPlayerControls = APNGPlayer.useAPNGPlayerControls(ref);
  const items = [animate, paused, aPNGPlayerControls];
  const effect = noop.useEffect(() => {
    if (animate) {
      if (!paused) {
        aPNGPlayerControls.play();
      }
    }
    aPNGPlayerControls.pause();
  }, items);
  const obj2 = { ref, url: layerConfig.src, autoplay: false, style: null, ariaLabel: null, onLoad: null };
  const items1 = [StyleSheet.absoluteFill, ];
  const size = { position: "absolute", width, height: null, opacity: null };
  size.height = ProfileEffectUtils.calculateProfileEffectHeight(layerConfig, width);
  let num = 0;
  if (animate) {
    num = 1;
  }
  size.opacity = num;
  items1[1] = size;
  obj2.style = items1;
  obj2.ariaLabel = accessibilityLabel;
  obj2.onLoad = onLoad;
  return jsx(APNGPlayer.APNGPlayer, { ref, url: layerConfig.src, autoplay: false, style: null, ariaLabel: null, onLoad: null });
});