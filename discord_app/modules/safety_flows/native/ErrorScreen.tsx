// === Module 18425: ErrorScreen ===

// Module 18425 (ErrorScreen)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { container: { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, alignItems: "center" }, buttonContainer: null };
let obj3 = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, alignItems: "center" };
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/native/ErrorScreen.tsx");

export default function ErrorScreen() {
  dependencyMap = async function _handleRetry() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            c3 = 1;
            _require(true);
            c4 = 2;
            c5 = 1;
            const obj5 = { value: closure_0(tmp32[8]).getCurrentTask(), done: false };
            return obj5;
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          if (null != closure_128_0) {
            const result = closure_0(tmp32[9]).navigateToScreenForTask(closure_129_1, closure_128_0);
            const obj = closure_0(tmp32[9]);
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
  [obj7.loading, _require] = noop.useState(false);
  closure_1 = require("useNavigation").useNavigation();
  const tmp2 = closure_9();
  let obj2 = { style: tmp2.container, children: null };
  const obj3 = { variant: "heading-lg/semibold", children: null };
  const intl = require("util").intl;
  obj3.children = intl.string(require("util").t.c6kn6F);
  const items = [closure_7(require("Text/Text").Text, obj3), , ];
  let obj4 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj4.children = intl2.string(require("util").t.ZUEGFn);
  items[1] = closure_7(require("Text/Text").Text, obj4);
  let obj5 = { style: tmp2.buttonContainer, spacing: 8, children: null };
  let obj6 = {
    onPress() {
      return closure_1(closure_2[14]).logout("safety_flows_error_screen");
    },
    text: null,
    variant: "secondary",
    size: "md"
  };
  const intl3 = require("util").intl;
  obj6.text = intl3.string(require("util").t["2jxGer"]);
  const items1 = [closure_7(require("components/Button/Button").Button, obj6), ];
  const obj7 = {
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
  obj7.text = intl4.string(require("util").t["7NqTJn"]);
  items1[1] = closure_7(require("components/Button/Button").Button, obj7);
  obj5.children = items1;
  items[2] = closure_8(require("Stack/Stack").Stack, obj5);
  obj2.children = items;
  return closure_8(View, obj2);
};