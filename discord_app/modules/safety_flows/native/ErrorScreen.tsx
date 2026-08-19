// === Module 17104: ErrorScreen ===

// Module 17104 (ErrorScreen)
import ThemesDefault from "Themes" /* 712 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flexDirection: "column", justifyContent: "center", gap: ThemesDefault.space.PX_8, padding: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_8 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/safety_flows/native/ErrorScreen.tsx");

export default function ErrorScreen() {
  function _handleRetry() {
    const self = this;
    const tmp = closure_1_3(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let callback = tmp7;
              callback = undefined;
              c3 = 1;
              closure_1_0(true);
              let obj2 = closure_1_0(closure_1_2[8]);
              c4 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.getCurrentTask();
              return obj1;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            callback(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback(false);
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            callback = arg1;
            if (null != callback) {
              obj = closure_1_0(closure_1_2[9]);
              const result = obj.navigateToScreenForTask(closure_1, callback);
            }
            c3 = 0;
            callback(false);
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp32) {
          closure_2 = tmp32;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp32;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback(React.useState(false), 2);
  const _require = tmp[1];
  let obj = _require(_handleRetry[7]);
  closure_1 = obj.useNavigation();
  const tmp2 = callback4();
  obj = { variant: "heading-lg/semibold", children: null };
  const intl = _require(_handleRetry[11]).intl;
  obj[1] = intl.string(_require(_handleRetry[11]).t.c6kn6F);
  const items = [callback2(_require(_handleRetry[10]).Text, obj), , ];
  obj1 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = _require(_handleRetry[11]).intl;
  obj1[2] = intl2.string(_require(_handleRetry[11]).t.ZUEGFn);
  items[1] = callback2(_require(_handleRetry[10]).Text, obj1);
  let obj2 = { style: tmp2.buttonContainer, spacing: 8, children: null };
  const obj3 = {
    onPress() {
      return callback(_handleRetry[14]).logout("safety_flows_error_screen");
    },
    text: null,
    variant: "secondary",
    size: "md"
  };
  const intl3 = _require(_handleRetry[11]).intl;
  obj3[1] = intl3.string(_require(_handleRetry[11]).t["2jxGer"]);
  const items1 = [callback2(_require(_handleRetry[13]).Button, obj3), ];
  const obj4 = {
    onPress: function handleRetry() {
      const self = this;
      const apply = _handleRetry.apply;
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
  const intl4 = _require(_handleRetry[11]).intl;
  obj4[1] = intl4.string(_require(_handleRetry[11]).t["7NqTJn"]);
  obj4[4] = tmp[0];
  items1[1] = callback2(_require(_handleRetry[13]).Button, obj4);
  obj2[2] = items1;
  items[2] = callback3(_require(_handleRetry[12]).Stack, obj2);
  obj[1] = items;
  return callback3(View, obj);
};