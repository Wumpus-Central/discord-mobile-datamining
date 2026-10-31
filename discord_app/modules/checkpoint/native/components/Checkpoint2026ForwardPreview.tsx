// discord_app/modules/checkpoint/native/components/Checkpoint2026ForwardPreview.tsx
import getDevicePixelRatioDefault from "../../../../utils/getDevicePixelRatio.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../CheckpointMessageComponentUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { preview: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, layer: null };
let obj3 = { transform: null };
let items = [{ translateY: -2 }];
obj3.transform = items;
obj2.layer = obj3;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/Checkpoint2026ForwardPreview.tsx");

export default function Checkpoint2026ForwardPreview(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  const tmp = closure_7();
  _require = tmp;
  const character = checkpointData.character;
  const isCheckpointCardEnabled =
    require("CheckpointExperiments").useIsCheckpointCardEnabled("Checkpoint2026ForwardPreview");
  let obj = require("CheckpointExperiments");
  const tmp2 = _require;
  let items = [character];
  const memo = noop.useMemo(() => {
    if (null != character) {
      const _Math = Math;
      let characterLayerUrls = checkpoint_CheckpointMessageComponentUtils.getCharacterLayerUrls(
        tmp,
        Math.round(56 * getDevicePixelRatioDefault()),
      );
    } else {
      characterLayerUrls = [];
    }
    return characterLayerUrls;
  }, items);
  if (!isCheckpointCardEnabled) {
    return null;
  } else {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.preview];
    const obj4 = { backgroundColor: obj2.getCardColors(checkpointData.cardColorPalette).secondaryBackgroundColor };
    items1[1] = obj4;
    obj3.style = items1;
    if (null != character) {
      let mapped = memo.map((uri) => {
        const obj = { source: { uri }, style: null };
        const items = [absoluteFill.absoluteFill, layer.layer];
        obj.style = items;
        return jsx(FastImageDefault, { source: { uri }, style: null }, uri);
      });
    } else {
      const obj5 = { color: character(575).colors.BLACK };
      mapped = jsx(tmp2(13401).ExperimentalCheckpointIcon, { color: character(575).colors.BLACK });
    }
    obj3.children = mapped;
    <closure_5 style={null}>{null}</closure_5>;
  }
  obj2 = require("CheckpointCardColors");
}
