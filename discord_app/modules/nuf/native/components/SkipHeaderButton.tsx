// discord_app/modules/nuf/native/components/SkipHeaderButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let label;

let obj2;
const jsx = Fragment.jsx;
let obj = { button: obj2, insideNavigatorButton: { paddingRight: 16 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (label) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(9);
      const tmp4 = closure_3();
      if (cResult[0] !== label.label) {
        label = label.label;
        if (label == null) {
          const intl = intl2.intl;
          label = intl.string(intl2.t["5Wxrcd"]);
        }
        cResult[0] = label.label;
        cResult[1] = label;
        tmp5 = label;
      } else {
        tmp5 = cResult[1];
      }
      let prop;
      if (label.insideNavigator) {
        prop = tmp4.insideNavigatorButton;
      }
      if (cResult[2] === tmp4.button) {
        let tmp8;
        if (cResult[3] === prop) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === label) {
            let tmp9;
            if (cResult[7] === tmp8) {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
        }
        const HeaderTextButton = HeaderShared.HeaderTextButton;
        const merged = Object.assign(label);
        const tmp14 = <HeaderTextButton labelStyle={tmp8} label={tmp5} accessibilityLabel={tmp5} />;
        cResult[5] = tmp5;
        cResult[6] = label;
        cResult[7] = tmp8;
        cResult[8] = tmp14;
        tmp9 = tmp14;
      }
      const items = [tmp4.button, prop];
      cResult[2] = tmp4.button;
      cResult[3] = prop;
      cResult[4] = items;
      tmp8 = items;
    }
  : (label) => {
      const tmp = closure_3();
      label = label.label;
      if (label == null) {
        const intl = intl2.intl;
        label = intl.string(intl2.t["5Wxrcd"]);
      }
      const HeaderTextButton = HeaderShared.HeaderTextButton;
      const merged = Object.assign(label);
      const items = [tmp.button];
      let prop;
      if (label.insideNavigator) {
        prop = tmp.insideNavigatorButton;
      }
      items[1] = prop;
      return <HeaderTextButton labelStyle={items} label={label} accessibilityLabel={label} />;
    };
const result = size.fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default tmp3;
