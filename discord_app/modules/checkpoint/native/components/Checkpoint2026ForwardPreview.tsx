// === Module 12993: Checkpoint2026ForwardPreview ===

// Module 12993 (Checkpoint2026ForwardPreview)
import nativeDefault from "native" /* 587 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1897 */;
import FastImageDefault from "FastImage" /* 5705 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6071 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let obj2 = { preview: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, layer: null };
let obj3 = { transform: null };
let items = [{ translateY: -2 }];
obj3.transform = items;
obj2.layer = obj3;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/Checkpoint2026ForwardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Checkpoint2026ForwardPreview(checkpointData) {
  const cResult = layer(576).c(16);
  layer = closure_7();
  let obj = layer(576);
  const character = checkpointData.checkpointData.character;
  const isCheckpointCardEnabled = layer(6072).useIsCheckpointCardEnabled("Checkpoint2026ForwardPreview");
  if (cResult[0] !== character) {
    const cardColors = tmp(8661).getCardColors(character);
    cResult[0] = character;
    cResult[1] = cardColors;
    let tmp5 = cardColors;
    const tmpResult = tmp(8661);
  } else {
    tmp5 = cResult[1];
  }
  const secondaryBackgroundColor = tmp5.secondaryBackgroundColor;
  if (cResult[2] !== character) {
    if (null != character) {
      const _Math = Math;
      let characterLayerUrls = tmp(6071).getCharacterLayerUrls(character, Math.round(56 * getDevicePixelRatioDefault()));
      const tmpResult2 = tmp(6071);
    } else {
      characterLayerUrls = [];
    }
    cResult[2] = character;
    cResult[3] = characterLayerUrls;
  } else if (!isCheckpointCardEnabled) {
    return null;
  } else {
    if (cResult[4] !== secondaryBackgroundColor) {
      const obj3 = { backgroundColor: secondaryBackgroundColor };
      cResult[4] = secondaryBackgroundColor;
      cResult[5] = obj3;
      let tmp13 = obj3;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === layer.preview) {
      if (cResult[7] === tmp13) {
        let tmp14 = cResult[8];
      }
      if (cResult[9] === character) {
        if (cResult[10] === arr) {
          if (cResult[11] === layer.layer) {
            if (cResult[13] === tmp14) {
            }
            const obj4 = { style: tmp14, children: cResult[12] };
            const tmp23 = <closure_5 style={tmp14}>{cResult[12]}</closure_5>;
            cResult[13] = tmp14;
            cResult[14] = cResult[12];
            cResult[15] = tmp23;
          }
        }
      }
      if (null != character) {
        let mapped = arr.map((uri) => {
          const obj = { source: { uri }, style: null };
          const items = [React4.absoluteFill, layer.layer];
          obj.style = items;
          return jsx(FastImageDefault, { source: { uri }, style: null }, uri);
        });
      } else {
        const obj5 = { color: nativeDefault.colors.BLACK };
        mapped = jsx(tmp(12994).ExperimentalCheckpointIcon, { color: nativeDefault.colors.BLACK });
      }
      cResult[9] = character;
      cResult[10] = arr;
      layer = layer.layer;
      cResult[11] = layer;
      cResult[12] = mapped;
    }
    let items = [layer.preview, tmp13];
    cResult[6] = layer.preview;
    cResult[7] = tmp13;
    cResult[8] = items;
    tmp14 = items;
  }
  const obj2 = layer(6072);
}) : (function Checkpoint2026ForwardPreview(checkpointData) {
  const tmp = closure_7();
  _require = tmp;
  const character = checkpointData.checkpointData.character;
  const isCheckpointCardEnabled = require("CheckpointExperiments").useIsCheckpointCardEnabled("Checkpoint2026ForwardPreview");
  let obj = require("CheckpointExperiments");
  const tmp2 = _require;
  let items = [character];
  const memo = noop.useMemo(() => {
    if (null != character) {
      const _Math = Math;
      let characterLayerUrls = checkpoint_CheckpointMessageComponentUtils.getCharacterLayerUrls(tmp, Math.round(56 * getDevicePixelRatioDefault()));
    } else {
      characterLayerUrls = [];
    }
    return characterLayerUrls;
  }, items);
  if (!isCheckpointCardEnabled) {
    return null;
  } else {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.preview, ];
    const obj4 = { backgroundColor: obj2.getCardColors(character).secondaryBackgroundColor };
    items1[1] = obj4;
    obj3.style = items1;
    if (null != character) {
      let mapped = memo.map((uri) => {
        const obj = { source: { uri }, style: null };
        const items = [React4.absoluteFill, layer.layer];
        obj.style = items;
        return jsx(FastImageDefault, { source: { uri }, style: null }, uri);
      });
    } else {
      const obj5 = { color: character(587).colors.BLACK };
      mapped = jsx(tmp2(12994).ExperimentalCheckpointIcon, { color: character(587).colors.BLACK });
    }
    obj3.children = mapped;
    <closure_5 style={null}>{null}</closure_5>;
  }
  obj2 = require("CheckpointCardColors");
});