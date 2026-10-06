// === Module 8496: ProfileEffectLayer ===

// Module 8496 (ProfileEffectLayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ProfileEffectUtils from "ProfileEffectUtils" /* 8493 */;
import APNGPlayer2 from "APNGPlayer" /* 8497 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let paused;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((paused) => {
  let accessibilityLabel;
  let animate;
  let layerConfig;
  let onLoad;
  let width;
  const obj = react2;
  const cResult = obj.c(17);
  ({ layerConfig, animate } = paused);
  paused = paused.paused;
  ({ width, accessibilityLabel, onLoad } = paused);
  const ref = react.useRef(null);
  const obj3 = APNGPlayer2;
  const aPNGPlayerControls = obj3.useAPNGPlayerControls(ref);
  if (cResult[0] === animate) {
    if (cResult[1] === aPNGPlayerControls) {
      let tmp6;
      let tmp7;
      if (cResult[2] === paused) {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const effect = react.useEffect(tmp6, tmp7);
      if (cResult[5] === layerConfig) {
        let tmp10;
        if (cResult[6] === width) {
          tmp10 = cResult[7];
        }
        let num4 = 0;
        if (animate) {
          num4 = 1;
        }
        if (cResult[8] === tmp10) {
          if (cResult[9] === num4) {
            let tmp12;
            if (cResult[10] === width) {
              tmp12 = cResult[11];
            }
            if (cResult[12] === accessibilityLabel) {
              if (cResult[13] === layerConfig.src) {
                if (cResult[14] === onLoad) {
                  let tmp14;
                  if (cResult[15] === tmp12) {
                    tmp14 = cResult[16];
                  }
                  return tmp14;
                }
              }
            }
            const tmp16 = jsx(APNGPlayer2.APNGPlayer, { ref, url: tmp9, autoplay: false, style: tmp12, ariaLabel: accessibilityLabel, onLoad });
            cResult[12] = accessibilityLabel;
            cResult[13] = layerConfig.src;
            cResult[14] = onLoad;
            cResult[15] = tmp12;
            cResult[16] = tmp16;
            tmp14 = tmp16;
          }
        }
        const items = [StyleSheet.absoluteFill, ];
        size = { position: "absolute", width, height: tmp10, opacity: num4 };
        items[1] = size;
        cResult[8] = tmp10;
        cResult[9] = num4;
        cResult[10] = width;
        cResult[11] = items;
        tmp12 = items;
      }
      const tmpResult = ProfileEffectUtils;
      const result = tmpResult.calculateProfileEffectHeight(layerConfig, width);
      cResult[5] = layerConfig;
      cResult[6] = width;
      cResult[7] = result;
      tmp10 = result;
    }
  }
  const fn = function u() {
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
}) : ((paused) => {
  let accessibilityLabel;
  let animate;
  let layerConfig;
  let num;
  let obj4;
  let onLoad;
  ({ layerConfig, animate } = paused);
  paused = paused.paused;
  const width = paused.width;
  ({ accessibilityLabel, onLoad } = paused);
  const ref = react.useRef(null);
  const obj = APNGPlayer2;
  const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [animate, paused, aPNGPlayerControls];
  const effect = react.useEffect(() => {
    if (animate) {
      if (!paused) {
        aPNGPlayerControls.play();
      }
    }
    aPNGPlayerControls.pause();
  }, items);
  const items1 = [StyleSheet.absoluteFill, ];
  size = { position: "absolute", width, height: obj4.calculateProfileEffectHeight(layerConfig, width), opacity: num };
  const APNGPlayer = APNGPlayer2.APNGPlayer;
  num = 0;
  obj4 = ProfileEffectUtils;
  if (animate) {
    num = 1;
  }
  items1[1] = size;
  return <APNGPlayer ref={ref} url={layerConfig.src} autoplay={false} style={items1} ariaLabel={accessibilityLabel} onLoad={onLoad} />;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default memoResult;