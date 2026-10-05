// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let StyleSheet;
let c2;
let obj2;
({ StyleSheet, View: c2 } = react_native);
const jsx = Fragment.jsx;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: { height: PX_12 }, separator: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth, top: undefined };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_4 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp3;
        const obj = react2;
        const cResult = obj.c(5);
        const tmp2 = closure_4();
        if (cResult[0] !== tmp2.separator) {
          const tmp6 = <React2 style={tmp2.separator} />;
          cResult[0] = tmp2.separator;
          cResult[1] = tmp6;
          tmp3 = tmp6;
        } else {
          tmp3 = cResult[1];
        }
        if (cResult[2] === tmp2.container) {
          let tmp7;
          if (cResult[3] === tmp3) {
            tmp7 = cResult[4];
          }
          return tmp7;
        }
        const tmp8 = (
          <React2 style={tmp2.container} collapsable={false}>
            {tmp3}
          </React2>
        );
        cResult[2] = tmp2.container;
        cResult[3] = tmp3;
        cResult[4] = tmp8;
        tmp7 = tmp8;
      }
    : () => {
        const tmp = closure_4();
        return (
          <React2 style={tmp.container} collapsable={false}>
            {null}
          </React2>
        );
      },
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default memoResult;
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;
