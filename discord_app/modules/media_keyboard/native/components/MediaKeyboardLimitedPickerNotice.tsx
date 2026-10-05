// discord_app/modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({
  container: { flexDirection: "row", paddingHorizontal: 16, paddingVertical: 16, alignItems: "center" },
  absoluteContainer: { position: "absolute" },
  text: { flex: 1 },
  button: { marginLeft: 16 },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let onHeightChange;
      let onPress;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(19);
      ({ onPress, onHeightChange } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] !== onHeightChange) {
        const fn = function n(nativeEvent) {
          if (onHeightChange != null) {
            tmp(nativeEvent.nativeEvent.layout.height);
          }
        };
        cResult[0] = onHeightChange;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      let absoluteContainer;
      if (null != onHeightChange) {
        absoluteContainer = tmp4.absoluteContainer;
      }
      if (cResult[2] === tmp4.container) {
        let tmp7;
        let tmp9;
        let tmp11;
        let tmp14;
        let tmp16;
        if (cResult[3] === absoluteContainer) {
          tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        const text = tmp4.text;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t["5g7NcN"]);
          cResult[5] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== tmp4.text) {
          const obj2 = { style: text, variant: "text-sm/normal", children: tmp9 };
          const tmp13 = React3(Text_Text.Text, obj2);
          cResult[6] = tmp4.text;
          cResult[7] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[7];
        }
        const _Symbol2 = Symbol;
        const button = tmp4.button;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl3.intl;
          const stringResult1 = intl2.string(intl3.t.JuXTi6);
          cResult[8] = stringResult1;
          tmp14 = stringResult1;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] !== onPress) {
          const obj3 = { size: "sm", variant: "tertiary", text: tmp14, onPress };
          const tmp18 = React3(components_Button_Button.Button, obj3);
          cResult[9] = onPress;
          cResult[10] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] === tmp4.button) {
          let tmp19;
          if (cResult[12] === tmp16) {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp19) {
              if (cResult[16] === tmp7) {
                let tmp23;
                if (cResult[17] === tmp11) {
                  tmp23 = cResult[18];
                }
                return tmp23;
              }
            }
          }
          const obj4 = { style: tmp7, onLayout: tmp5, children: items };
          items = [tmp11, tmp19];
          const tmp26 = hasOwnProperty(View, obj4);
          cResult[14] = tmp5;
          cResult[15] = tmp19;
          cResult[16] = tmp7;
          cResult[17] = tmp11;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
        const obj5 = { style: button, children: tmp16 };
        const tmp22 = React3(View, obj5);
        cResult[11] = tmp4.button;
        cResult[12] = tmp16;
        cResult[13] = tmp22;
        tmp19 = tmp22;
      }
      const items1 = [tmp4.container, absoluteContainer];
      cResult[2] = tmp4.container;
      cResult[3] = absoluteContainer;
      cResult[4] = items1;
      tmp7 = items1;
    }
  : (onHeightChange) => {
      let Button;
      let intl;
      let intl2;
      let items2;
      let obj4;
      onHeightChange = onHeightChange.onHeightChange;
      const onPress = onHeightChange.onPress;
      const tmp = closure_6();
      const items = [onHeightChange];
      const items1 = [tmp.container];
      let absoluteContainer;
      const callback = react.useCallback((nativeEvent) => {
        if (onHeightChange != null) {
          tmp(nativeEvent.nativeEvent.layout.height);
        }
      }, items);
      if (null != onHeightChange) {
        absoluteContainer = tmp.absoluteContainer;
      }
      const obj = { style: items1, onLayout: callback, children: items2 };
      items1[1] = absoluteContainer;
      const obj2 = { style: tmp.text, variant: "text-sm/normal", children: intl.string(intl3.t["5g7NcN"]) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items2 = [React3(Text, obj2)];
      const obj3 = { style: tmp.button, children: React3(Button, obj4) };
      obj4 = { size: "sm", variant: "tertiary", text: intl2.string(intl3.t.JuXTi6), onPress };
      Button = components_Button_Button.Button;
      intl2 = intl3.intl;
      items2[1] = React3(View, obj3);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting(
  "modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx",
);

export default tmp3;
