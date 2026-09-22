// === Module 15984: CheckpointBackground ===

// Module 15984 (CheckpointBackground)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1074 */;
import CheckpointConstants from "CheckpointConstants" /* 4982 */;
import LinearGradientDefault from "LinearGradient" /* 5199 */;
import _modDef15985 from "module_15985" /* 15985 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4757 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const colors = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default function CheckpointBackground() {
  const tmp = closure_8();
  const obj = { children: null };
  const items = [hasOwnProperty(LinearGradientDefault, { colors, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.background }), ];
  const obj3 = { source: { uri: _modDef15985 }, style: tmp.background, resizeMode: "cover" };
  items[1] = hasOwnProperty(Image, obj3);
  obj.children = items;
  return React5(timestampProducer, obj);
};