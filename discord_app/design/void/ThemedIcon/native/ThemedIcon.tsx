// discord_app/design/void/ThemedIcon/native/ThemedIcon.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useToken from "../../../tokens/native/useToken.tsx";
import IconDefault from "../../Icon/native/Icon.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let themedColor;

let closure_3 = ["themedColor"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (themedColor) => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] !== themedColor) {
        themedColor = themedColor.themedColor;
        const tmp8 = _objectWithoutProperties(themedColor, closure_3);
        cResult[0] = themedColor;
        cResult[1] = tmp8;
        cResult[2] = themedColor;
        tmp5 = themedColor;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmpResult = useToken;
      const token = tmpResult.useToken(tmp5);
      if (cResult[3] === tmp4) {
        let tmp10;
        if (cResult[4] === token) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      IconDefault;
      const merged = Object.assign(tmp4);
      const tmp13 = <tmp11 color={token} />;
      cResult[3] = tmp4;
      cResult[4] = token;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    }
  : (themedColor) => {
      themedColor = themedColor.themedColor;
      const merged = Object.assign(themedColor, Object.assign({ themedColor: 0 }));
      const obj = useToken;
      const token = obj.useToken(themedColor);
      IconDefault;
      const merged1 = Object.assign(merged);
      return <tmp3 color={token} />;
    };
const result = size.fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default tmp3;
