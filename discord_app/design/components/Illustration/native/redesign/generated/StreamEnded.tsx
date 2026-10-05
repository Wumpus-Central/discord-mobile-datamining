// discord_app/design/components/Illustration/native/redesign/generated/StreamEnded.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import shared from "../../../../../shared.tsx";
import _mod7905 from "../../index.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function dark() {
  return require("AssetRegistry");
}
function darker() {
  return require("AssetRegistry");
}
const Image = react_native.Image;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = shared;
      const theme = obj2.useThemeContext().theme;
      if (cResult[0] !== theme) {
        const obj3 = { dark, darker };
        const tmpResult = _mod7905;
        const illustrationSource = tmpResult.getIllustrationSource(theme, obj3);
        cResult[0] = theme;
        cResult[1] = illustrationSource;
        tmp4 = illustrationSource;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = shared;
      const theme = obj.useThemeContext().theme;
      const obj2 = _mod7905;
      const obj3 = { dark, darker };
      return obj2.getIllustrationSource(theme, obj3);
    };
let closure_4 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react2;
      const cResult = obj.c(3);
      const tmp2 = closure_4();
      if (cResult[0] === arg0) {
        let tmp3;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      const merged = Object.assign(arg0);
      const tmp5 = <Image source={tmp2} />;
      cResult[0] = arg0;
      cResult[1] = tmp2;
      cResult[2] = tmp5;
      tmp3 = tmp5;
    }
  : (arg0) => {
      const tmp = closure_4();
      const merged = Object.assign(arg0);
      return <Image source={tmp} />;
    };
function getStreamEndedSource(theme) {
  const obj = _mod7905;
  const obj2 = { dark, darker };
  return obj.getIllustrationSource(theme, obj2);
}
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export { getStreamEndedSource };
export const useStreamEndedSource = tmp3;
export const StreamEnded = tmp4;
