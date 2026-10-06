// discord_app/design/void/Form/native/FormRadio.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let selected;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      const obj = react2;
      const cResult = obj.c(3);
      selected = selected.selected;
      const tmp3 = closure_5();
      const tmp4 = importDefault(selected ? 6647 : 6648);
      if (cResult[0] === tmp3.radio) {
        let tmp5;
        if (cResult[1] === tmp4) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = <Image style={tmp3.radio} source={tmp4} />;
      cResult[0] = tmp3.radio;
      cResult[1] = tmp4;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (selected) => {
      selected = selected.selected;
      return <Image style={closure_5().radio} source={importDefault(selected ? 6647 : 6648)} />;
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default tmp3;
