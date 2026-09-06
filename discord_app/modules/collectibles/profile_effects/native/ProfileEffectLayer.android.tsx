// discord_app/modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx
import ProfileEffectUtils from "ProfileEffectUtils.tsx";
import APNGPlayer from "../../../image/native/APNGPlayer.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  let obj = APNGPlayer;
  const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [animate, paused, aPNGPlayerControls];
  const effect = noop.useEffect(() => {
    if (animate) {
      if (!paused) {
        aPNGPlayerControls.play();
      }
    }
    aPNGPlayerControls.pause();
  }, items);
  obj = { ref, url: layerConfig.src, autoplay: false, style: null, ariaLabel: null, onLoad: null };
  const items1 = [StyleSheet.absoluteFill];
  const size = {
    position: "absolute",
    width,
    height: ProfileEffectUtils.calculateProfileEffectHeight(layerConfig, width),
    opacity: null,
  };
  let num = 0;
  if (animate) {
    num = 1;
  }
  size.opacity = num;
  items1[1] = size;
  obj.style = items1;
  obj.ariaLabel = accessibilityLabel;
  obj.onLoad = onLoad;
  return jsx(APNGPlayer.APNGPlayer, {
    ref,
    url: layerConfig.src,
    autoplay: false,
    style: null,
    ariaLabel: null,
    onLoad: null,
  });
});
