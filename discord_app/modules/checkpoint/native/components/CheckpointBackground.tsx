// discord_app/modules/checkpoint/native/components/CheckpointBackground.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import _modDef15535 from "../../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
let metroRequire;
const Image = react_native.Image;
const colors = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let tmp10;
      let tmp12;
      let tmp4;
      const obj = react;
      const cResult = obj.c(8);
      const tmp3 = closure_9();
      if (cResult[0] !== tmp3.background) {
        const obj3 = { colors, start: null, end: null, style: tmp3.background };
        ({ START: obj2.start, END: obj2.end } = VerticalGradient);
        const tmp9 = metroRequire(LinearGradientDefault, obj3);
        cResult[0] = tmp3.background;
        cResult[1] = tmp9;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { uri: _modDef15535 };
        cResult[2] = obj4;
        tmp10 = obj4;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp3.background) {
        const obj5 = { source: tmp10, style: tmp3.background, resizeMode: "cover" };
        const tmp15 = metroRequire(Image, obj5);
        cResult[3] = tmp3.background;
        cResult[4] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp4) {
        let tmp16;
        if (cResult[6] === tmp12) {
          tmp16 = cResult[7];
        }
        return tmp16;
      }
      const obj9 = { children: items };
      items = [tmp4, tmp12];
      const tmp17 = metroImportAll(metroImportDefault, obj9);
      cResult[5] = tmp4;
      cResult[6] = tmp12;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : () => {
      let items;
      const tmp = closure_9();
      const obj = { children: items };
      items = [,];
      const obj2 = { colors, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.background };
      items[0] = metroRequire(LinearGradientDefault, obj2);
      const obj3 = { source: { uri: _modDef15535 }, style: tmp.background, resizeMode: "cover" };
      ({ uri: _modDef15535 });
      items[1] = metroRequire(Image, obj3);
      return metroImportAll(metroImportDefault, obj);
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default tmp3;
