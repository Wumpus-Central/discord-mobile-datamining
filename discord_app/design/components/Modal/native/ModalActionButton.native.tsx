// discord_app/design/components/Modal/native/ModalActionButton.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import components_Button_Button from "../../Button/native/Button.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let variant;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let closure_2 = ["variant"];
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ spacer: { marginTop: 12 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (variant) => {
      let items;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] !== variant) {
        variant = variant.variant;
        const tmp8 = _objectWithoutProperties(variant, closure_2);
        cResult[0] = variant;
        cResult[1] = tmp8;
        cResult[2] = variant;
        tmp5 = variant;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_8();
      if (cResult[3] === tmp9) {
        let tmp10;
        if (cResult[4] === tmp5) {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          let tmp14;
          if (cResult[7] === tmp5) {
            tmp14 = cResult[8];
          }
          if (cResult[9] === tmp10) {
            let tmp20;
            if (cResult[10] === tmp14) {
              tmp20 = cResult[11];
            }
            return tmp20;
          }
          const obj2 = { children: items };
          items = [tmp10, tmp14];
          const tmp23 = metroImportDefault(metroRequire, obj2);
          cResult[9] = tmp10;
          cResult[10] = tmp14;
          cResult[11] = tmp23;
          tmp20 = tmp23;
        }
        const obj3 = { variant: tmp5, size: "lg" };
        const Button = components_Button_Button.Button;
        const merged = Object.assign(tmp4);
        const tmp19 = hasOwnProperty(Button, obj3);
        cResult[6] = tmp4;
        cResult[7] = tmp5;
        cResult[8] = tmp19;
        tmp14 = tmp19;
      }
      let tmp11 = "secondary" === tmp5;
      if (tmp11) {
        const obj4 = { style: tmp9.spacer };
        tmp11 = hasOwnProperty(View, obj4);
      }
      cResult[3] = tmp9;
      cResult[4] = tmp5;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : (variant) => {
      let items;
      variant = variant.variant;
      const merged = Object.assign(variant, Object.assign({ variant: 0 }));
      let tmp5 = "secondary" === variant;
      if (tmp5) {
        const obj = { style: tmp2.spacer };
        tmp5 = hasOwnProperty(View, obj);
      }
      const obj2 = { children: items };
      items = [tmp5];
      const obj3 = { variant, size: "lg" };
      const Button = components_Button_Button.Button;
      const merged1 = Object.assign(merged);
      items[1] = hasOwnProperty(Button, obj3);
      return metroImportDefault(metroRequire, obj2);
    };
const result = size.fileFinishedImporting("design/components/Modal/native/ModalActionButton.native.tsx");

export const ModalActionButton = tmp4;
