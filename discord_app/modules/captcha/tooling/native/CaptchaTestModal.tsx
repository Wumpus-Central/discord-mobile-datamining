import closure_3 from "createCacheKey";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "getSystemLocale";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { HCAPTCHA_DIFFICULTY_OPTIONS as prop } from "found";
import { CAPTCHA_DECIDER_TYPE_OPTIONS as prop1 } from "found";
import createCacheKey from "createCacheKey";
import set from "noop";

let error;
let metroImportAll;
let require = arg1;
function CaptchaTestScreen(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let first;
    let closure_1;
    let first1;
    let closure_3;
    function _sendCaptchaRequest(noop, arg1) {
      const self = this;
      const tmp = callback2(function*() {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp3;
                let closure_1 = tmp7;
                if (null != outer1_0) {
                  let c4 = 1;
                  let obj4 = outer1_0(outer1_2[8]);
                  let message = outer1_2;
                  if (outer1_2 == null) {
                    message = undefined;
                  }
                  const obj1 = { difficulty: null };
                  obj1[0] = message;
                  c5 = 2;
                  c6 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = obj4.testCaptcha(tmp33, obj1);
                  return obj2;
                }
              }
            } else {
              if (1 === tmp7) {
                c4 = 0;
                message = closure_3;
                obj2 = outer1_1(outer1_2[9]);
                const obj3 = { key: "captcha-test-modal-error", content: null };
                obj3[1] = message.message;
                obj2.open(obj3);
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                obj = outer1_1(outer1_2[9]);
                obj.open({ key: "captcha-test-modal-success", content: "Captcha completed!" });
                c4 = 0;
              }
              c4 = 0;
              c6 = 3;
              obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            }
            c6 = 3;
          } catch (tmp24) {
            closure_3 = tmp24;
            if (tmp4 === c4) {
              c6 = tmp2;
              throw tmp24;
            } else {
              c5 = tmp;
            }
          }
        }
      });
      const _sendCaptchaRequest = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    const tmp5 = createCacheKey();
    const tmp8 = _sendCaptchaRequest(React.useState(null), 2);
    first = tmp8[0];
    closure_1 = tmp8[1];
    const tmp10 = _sendCaptchaRequest(React.useState(null), 2);
    first1 = tmp10[0];
    closure_3 = tmp10[1];
    let obj = { style: null, children: null };
    obj[0] = tmp5.container;
    obj = { style: null, children: null };
    obj[0] = tmp5.content;
    let obj1 = { children: null };
    const items = [callback(first(first1[10]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: "Decider" }), ];
    let obj2 = { withSpacing: true, value: null, options: null, onChange: null };
    obj2[1] = first;
    obj2[2] = closure_12;
    obj2[3] = function onChange(value) {
      value = value.value;
      if (value !== first(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA) {
        callback2(null);
      }
      callback(value);
    };
    items[1] = callback(first(first1[11]).RadioGroup, obj2);
    obj1[0] = items;
    const items1 = [callback2(View, obj1), ];
    let tmp12Result = first === first(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA;
    if (tmp12Result) {
      obj = { children: null };
      const items2 = [tmp14(tmp15(tmp16[10]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: "Difficulty" }), ];
      let obj3 = { withSpacing: true, value: null, options: null, onChange: null };
      obj3[1] = first1;
      obj3[2] = closure_10;
      obj3[3] = function onChange(value) {
        if (first === first(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA) {
          callback2(value.value);
        }
      };
      items2[1] = tmp14(tmp15(tmp16[11]).RadioGroup, obj3);
      obj[0] = items2;
      tmp12Result = tmp12(tmp13, obj);
    }
    items1[1] = tmp12Result;
    obj[1] = items1;
    const items3 = [callback2(View, obj), ];
    let obj4 = { style: null, children: null };
    obj4[0] = tmp5.footerContainer;
    const obj5 = { style: null };
    obj5[0] = tmp5.separator;
    const items4 = [callback(View, obj5), ];
    const obj6 = { bottom: true, style: null, children: null };
    obj6[1] = tmp5.footerButton;
    const obj7 = { onPress: null, text: "Submit" };
    obj7[0] = function sendCaptchaRequest() {
      const self = this;
      const apply = _sendCaptchaRequest.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj6[2] = callback(first(first1[13]).Button, obj7);
    items4[1] = callback(first(first1[12]).SafeAreaPaddingView, obj6);
    obj4[1] = items4;
    items3[1] = callback2(View, obj4);
    obj[1] = items3;
    return callback2(View, obj);
  }
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, separator: null, footerContainer: null, footerButton: null, content: null };
createCacheKey = { flex: 1, justifyContent: "space-between", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginVertical: require("Themes").space.PX_24 };
let obj1 = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginVertical: require("Themes").space.PX_24 };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_16 };
let obj2 = { marginBottom: require("Themes").space.PX_16 };
createCacheKey[3] = { paddingHorizontal: require("Themes").space.PX_16 };
let obj3 = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[4] = { margin: require("Themes").space.PX_16, gap: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = prop.map((label) => ({ name: label.label, value: label.value }));
let items = [require("_testCaptcha").CaptchaDeciderType.HCAPTCHA_RQDATA, require("_testCaptcha").CaptchaDeciderType.SMITE_RQDATA];
let set = new Set(items);
const mapped = prop1.map((label) => ({ name: label.label, value: label.value }));
let closure_12 = mapped.filter((value) => set.has(value.value));
let closure_13 = { TEST_CAPTCHA: "TEST_CAPTCHA" };
let obj5 = { headerStyle: null };
let obj4 = { margin: require("Themes").space.PX_16, gap: require("Themes").space.PX_24 };
obj5[0] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
let closure_15 = createCacheKey.createStyles(obj5);
const result = set.fileFinishedImporting("modules/captcha/tooling/native/CaptchaTestModal.tsx");

export default function CaptchaTestModal() {
  const tmp = callback3();
  const require = tmp;
  const items = [tmp];
  const memo = React.useMemo(() => {
    let obj = {};
    obj = { headerStyle: tmp.headerStyle, headerTitle: "Captcha Test Tool", headerLeft: null, render: null };
    obj[2] = tmp(outer1_2[15]).getHeaderCloseButton(function closeModal() {
      return callback(table[14]).pop();
    });
    obj[3] = function render() {
      return callback2(closure_14, {});
    };
    obj[outer1_13.TEST_CAPTCHA] = obj;
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: constants.TEST_CAPTCHA, headerBackTitle: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  return callback(require(5574) /* NavigationStack */.Navigator, obj);
};