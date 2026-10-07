// discord_app/modules/checkpoint/native/components/CheckpointBackground.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import c from "../../../../../_runtime/00576_c.js";
import Constants from "../../../../Constants.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import _modDef15551 from "../../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const colors = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(8);
      const tmp3 = closure_9();
      if (cResult[0] !== tmp3.background) {
        const obj3 = { colors, start: null, end: null, style: null };
        ({ START: obj2.start, END: obj2.end } = VerticalGradient);
        obj3.style = tmp3.background;
        const tmp9 = timestampProducer(LinearGradientDefault, obj3);
        cResult[0] = tmp3.background;
        cResult[1] = tmp9;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { uri: _modDef15551 };
        cResult[2] = obj4;
        let tmp10 = obj4;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp3.background) {
        const obj5 = { source: tmp10, style: tmp3.background, resizeMode: "cover" };
        const tmp15 = timestampProducer(Image, obj5);
        cResult[3] = tmp3.background;
        cResult[4] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp4) {
        if (cResult[6] === tmp12) {
          let tmp16 = cResult[7];
        }
        return tmp16;
      }
      const obj9 = { children: null };
      const items = [tmp4, tmp12];
      obj9.children = items;
      const tmp17 = closure_1_8(React5, obj9);
      cResult[5] = tmp4;
      cResult[6] = tmp12;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : () => {
      const tmp = closure_9();
      const obj = { children: null };
      const items = [
        timestampProducer(LinearGradientDefault, {
          colors,
          start: VerticalGradient.START,
          end: VerticalGradient.END,
          style: tmp.background,
        }),
      ];
      const obj3 = { source: { uri: _modDef15551 }, style: tmp.background, resizeMode: "cover" };
      items[1] = timestampProducer(Image, obj3);
      obj.children = items;
      return closure_1_8(React5, obj);
    };
