// === Module 18081: ErrorScreen ===

// Module 18081 (ErrorScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, closure_0, closure_2;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: obj3 };
obj2 = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/safety_flows/native/ErrorScreen.tsx");

export default function ErrorScreen() {
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj = function _handleRetry() {
    obj = _asyncToGenerator(async () => {
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp;
              closure_0 = undefined;
              c3 = 1;
              closure_2_0(true);
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj3.getCurrentTask(), done: false };
              obj3 = closure_0(closure_2[8]);
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_0(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_0(false);
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            if (null != closure_0) {
              obj = closure_0(closure_2[9]);
              const result = obj.navigateToScreenForTask(closure_129_1, closure_0);
            }
            c3 = 0;
            closure_129_0(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp29) {
          closure_2 = tmp29;
          if (0 === c3) {
            c5 = 3;
            throw tmp29;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, _require] = react.useState(false);
  obj = require("useNavigation");
  let closure_1 = obj.useNavigation();
  const tmp3 = closure_9();
  let obj2 = { style: tmp3.container, children: items };
  let obj3 = { variant: "heading-lg/semibold", children: intl.string(require("intl").t.c6kn6F) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items = [closure_7(Text, obj3), , ];
  let obj4 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(require("intl").t.ZUEGFn) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[1] = closure_7(Text2, obj4);
  let obj5 = { style: tmp3.buttonContainer, spacing: 8, children: items1 };
  const Stack = require("Stack/Stack").Stack;
  let obj6 = {
    onPress() {
      obj = closure_1(obj[14]);
      return obj.logout("safety_flows_error_screen");
    },
    text: intl3.string(require("intl").t["2jxGer"]),
    variant: "secondary",
    size: "md"
  };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items1 = [closure_7(Button, obj6), ];
  const obj7 = {
    onPress: function handleRetry() {
      return obj(...arguments);
    },
    text: intl4.string(require("intl").t["7NqTJn"]),
    variant: "primary",
    size: "md",
    loading: first
  };
  const Button2 = require("components/Button/Button").Button;
  intl4 = require("intl").intl;
  items1[1] = closure_7(Button2, obj7);
  items[2] = closure_8(Stack, obj5);
  return closure_8(View, obj2);
};