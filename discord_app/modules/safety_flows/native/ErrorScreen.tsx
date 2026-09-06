// === Module 17888: ErrorScreen ===

// Module 17888 (ErrorScreen)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, buttonContainer: null };
createStyles = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, alignItems: "center" };
createStyles.container = createStyles;
createStyles.buttonContainer = { marginTop: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/native/ErrorScreen.tsx");

export default function ErrorScreen() {
  dependencyMap = async function _handleRetry(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            c3 = 1;
            _require(true);
            let obj2 = closure_0(tmp32[8]);
            c4 = 2;
            c5 = 1;
            const obj1 = { value: obj2.getCurrentTask(), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_0(false);
          throw tmp32;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_0(false);
          c5 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value;
          if (null != closure_128_0) {
            obj = closure_0(tmp32[9]);
            const result = obj.navigateToScreenForTask(closure_129_1, closure_128_0);
          }
          c3 = 0;
          closure_129_0(false);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp32) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp32;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  _require = tmp[1];
  let obj = require("useNavigation");
  closure_1 = obj.useNavigation();
  const tmp2 = closure_9();
  obj = { style: tmp2.container, children: null };
  obj = { variant: "heading-lg/semibold", children: null };
  const intl = require("util").intl;
  obj.children = intl.string(require("util").t.c6kn6F);
  const items = [closure_7(require("Text/Text").Text, obj), , ];
  let obj1 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj1.children = intl2.string(require("util").t.ZUEGFn);
  items[1] = closure_7(require("Text/Text").Text, obj1);
  let obj2 = { style: tmp2.buttonContainer, spacing: 8, children: null };
  const obj3 = {
    onPress() {
      return closure_1(closure_2[14]).logout("safety_flows_error_screen");
    },
    text: null,
    variant: "secondary",
    size: "md"
  };
  const intl3 = require("util").intl;
  obj3.text = intl3.string(require("util").t["2jxGer"]);
  const items1 = [closure_7(require("components/Button/Button").Button, obj3), ];
  const obj4 = {
    onPress: function handleRetry() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    text: null,
    variant: "primary",
    size: "md",
    loading: null
  };
  const intl4 = require("util").intl;
  obj4.text = intl4.string(require("util").t["7NqTJn"]);
  obj4.loading = tmp[0];
  items1[1] = closure_7(require("components/Button/Button").Button, obj4);
  obj2.children = items1;
  items[2] = closure_8(require("Stack/Stack").Stack, obj2);
  obj.children = items;
  return closure_8(View, obj);
};