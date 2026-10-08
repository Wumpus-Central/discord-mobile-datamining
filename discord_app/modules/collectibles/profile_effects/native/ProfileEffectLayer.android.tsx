// === Module 8980: ProfileEffectLayer ===

// Module 8980 (ProfileEffectLayer)
import c from "c" /* 576 */;
import ProfileEffectUtils from "ProfileEffectUtils" /* 8977 */;
import APNGPlayer from "APNGPlayer" /* 8981 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileEffectLayerAndroid(paused) {
  const cResult = c.c(17);
  ({ layerConfig, animate } = paused);
  paused = paused.paused;
  ({ width, accessibilityLabel, onLoad } = paused);
  const ref = noop.useRef(null);
  const aPNGPlayerControls = APNGPlayer.useAPNGPlayerControls(ref);
  if (cResult[0] === animate) {
    if (cResult[1] === aPNGPlayerControls) {
      if (cResult[2] === paused) {
        let tmp6 = cResult[3];
        let tmp7 = cResult[4];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (cResult[5] === layerConfig) {
        if (cResult[6] === width) {
          let tmp10 = cResult[7];
        }
        let num4 = 0;
        if (animate) {
          num4 = 1;
        }
        if (cResult[8] === tmp10) {
          if (cResult[9] === num4) {
            if (cResult[10] === width) {
              let tmp12 = cResult[11];
            }
            if (cResult[12] === accessibilityLabel) {
              if (cResult[13] === layerConfig.src) {
                if (cResult[14] === onLoad) {
                  if (cResult[15] === tmp12) {
                    let tmp14 = cResult[16];
                  }
                  return tmp14;
                }
              }
            }
            const obj4 = { ref, url: tmp9, autoplay: false, style: tmp12, ariaLabel: accessibilityLabel, onLoad };
            const tmp16 = jsx(APNGPlayer.APNGPlayer, { ref, url: tmp9, autoplay: false, style: tmp12, ariaLabel: accessibilityLabel, onLoad });
            cResult[12] = accessibilityLabel;
            cResult[13] = layerConfig.src;
            cResult[14] = onLoad;
            cResult[15] = tmp12;
            cResult[16] = tmp16;
            tmp14 = tmp16;
          }
        }
        const items = [StyleSheet.absoluteFill, ];
        const size = { position: "absolute", width, height: tmp10, opacity: num4 };
        items[1] = size;
        cResult[8] = tmp10;
        cResult[9] = num4;
        cResult[10] = width;
        cResult[11] = items;
        tmp12 = items;
      }
      const result = ProfileEffectUtils.calculateProfileEffectHeight(layerConfig, width);
      cResult[5] = layerConfig;
      cResult[6] = width;
      cResult[7] = result;
      tmp10 = result;
      const tmpResult = ProfileEffectUtils;
    }
  }
  const fn = function f() {
    if (animate) {
      if (!paused) {
        aPNGPlayerControls.play();
      }
    }
    aPNGPlayerControls.pause();
  };
  const items1 = [animate, paused, aPNGPlayerControls];
  cResult[0] = animate;
  cResult[1] = aPNGPlayerControls;
  cResult[2] = paused;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function ProfileEffectLayerAndroid(paused) {
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
}));