// discord_app/modules/checkpoint/native/components/CheckpointBackground.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../Constants.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import LinearGradientDefault from "../../../../../_runtime/05283_LinearGradient.js";
import _modDef16038 from "../../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const colors = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default function CheckpointBackground() {
  const tmp = closure_8();
  const obj = { children: null };
  const items = [
    hasOwnProperty(LinearGradientDefault, {
      colors,
      start: VerticalGradient.START,
      end: VerticalGradient.END,
      style: tmp.background,
    }),
  ];
  const obj3 = { source: { uri: _modDef16038 }, style: tmp.background, resizeMode: "cover" };
  items[1] = hasOwnProperty(Image, obj3);
  obj.children = items;
  return React5(timestampProducer, obj);
}
