// discord_app/modules/mfa/native/components/BackButton.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import MfaStepsTypes from "../MfaStepsTypes.tsx";
import buttonDefault from "button.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BackButton(props) {
      const cResult = props(576).c(4);
      props = props.props;
      const obj = props(576);
      const navigation = props(1502).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.Tot4EC);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === navigation) {
        if (cResult[2] === props) {
          let tmp7 = cResult[3];
        }
        return tmp7;
      }
      const tmp8 = jsx(navigation(15781), {
        variant: "secondary",
        text: first,
        onPress() {
          navigation.push(MfaStepsTypes.MfaScreens.SELECT, props);
        },
      });
      cResult[1] = navigation;
      cResult[2] = props;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      const obj2 = props(1502);
      const obj3 = {
        variant: "secondary",
        text: first,
        onPress() {
          navigation.push(MfaStepsTypes.MfaScreens.SELECT, props);
        },
      };
    }
  : function BackButton(props) {
      props = props.props;
      importDefault = props(1502).useNavigation();
      const obj2 = { variant: "secondary", text: null, onPress: null };
      const obj = props(1502);
      const intl = props(1126).intl;
      obj2.text = intl.string(props(1126).t.Tot4EC);
      obj2.onPress = function onPress() {
        closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
      };
      return jsx(buttonDefault, { variant: "secondary", text: null, onPress: null });
    };
