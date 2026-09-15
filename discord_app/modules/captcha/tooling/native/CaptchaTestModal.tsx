// === Module 15785: CaptchaTestModal ===

// Module 15785 (CaptchaTestModal)
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5709 */;
import CaptchaTestActionCreators from "CaptchaTestActionCreators" /* 15787 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function CaptchaTestScreen(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    value = undefined;
    closure_1 = undefined;
    first1 = undefined;
    closure_3 = undefined;
    _slicedToArray = async function _sendCaptchaRequest(noop) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (noop === 1) {
          throw value;
        } else if (noop === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (noop === 1) {
              c6 = 3;
              throw value;
            } else if (noop === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp7;
              if (null != _require) {
                c4 = 1;
                let difficulty = first1;
                if (first1 == null) {
                  difficulty = undefined;
                }
                const obj6 = { difficulty };
                c5 = 2;
                c6 = 1;
                const obj7 = { value: difficulty(tmp3[8]).testCaptcha(tmp32, obj6), done: false };
                return obj7;
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_129_0 = closure_3;
              const obj8 = { key: "captcha-test-modal-error", content: closure_129_0.message };
              closure_1(tmp3[9]).open(obj8);
              const obj3 = closure_1(tmp3[9]);
            } else if (noop === 1) {
              c6 = 3;
              throw value;
            } else if (noop !== 2) {
              closure_1(tmp3[9]).open({ key: "captcha-test-modal-success", content: "Captcha completed!" });
              c4 = 0;
              const obj = closure_1(tmp3[9]);
            }
            c4 = 0;
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
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
    };
    const tmp4 = closure_9();
    [value, closure_1] = noop.useState(null);
    [first1, closure_3] = noop.useState(null);
    let obj2 = { style: tmp4.container, children: null };
    let obj3 = { style: tmp4.content, children: null };
    let obj4 = { children: null };
    const items = [closure_7(value(first1[10]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: "Decider" }), ];
    const obj5 = {
      withSpacing: true,
      value,
      options: options2,
      onChange(value) {
          value = value.value;
          if (value !== CaptchaTestActionCreators.CaptchaDeciderType.HCAPTCHA_RQDATA) {
            closure_3(null);
          }
          closure_1(value);
        }
    };
    items[1] = closure_7(value(first1[11]).RadioGroup, obj5);
    obj4.children = items;
    const items1 = [closure_8(View, obj4), ];
    let tmp11Result = value === value(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA;
    if (tmp11Result) {
      let obj = { children: null };
      const items2 = [closure_7(tmp14(tmp15[10]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: "Difficulty" }), ];
      let obj6 = {
        withSpacing: true,
        value: first1,
        options,
        onChange(value) {
              if (first === CaptchaTestActionCreators.CaptchaDeciderType.HCAPTCHA_RQDATA) {
                closure_3(value.value);
              }
            }
      };
      items2[1] = closure_7(tmp14(tmp15[11]).RadioGroup, obj6);
      obj.children = items2;
      tmp11Result = closure_8(View, obj);
    }
    items1[1] = tmp11Result;
    obj3.children = items1;
    const items3 = [closure_8(View, obj3), ];
    let obj7 = { style: tmp4.footerContainer, children: null };
    let obj8 = { style: tmp4.separator };
    const items4 = [closure_7(View, obj8), ];
    let obj9 = { bottom: true, style: tmp4.footerButton, children: null };
    const obj10 = {
      onPress: function sendCaptchaRequest() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      text: "Submit"
    };
    obj9.children = closure_7(value(first1[13]).Button, obj10);
    items4[1] = closure_7(value(first1[12]).SafeAreaPaddingView, obj9);
    obj7.children = items4;
    items3[1] = closure_8(View, obj7);
    obj2.children = items3;
    return closure_8(View, obj2);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4639);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, separator: null, footerContainer: null, footerButton: null, content: null };
let obj3 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_24 };
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_24 };
obj2.footerContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj2.footerButton = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.content = { margin: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj2);
const prop = fn(15786).HCAPTCHA_DIFFICULTY_OPTIONS;
const options = prop.map((label) => ({ name: label.label, value: label.value }));
let items = [fn(15787).CaptchaDeciderType.HCAPTCHA_RQDATA, fn(15787).CaptchaDeciderType.SMITE_RQDATA];
const set = new Set(items);
const prop1 = fn(15786).CAPTCHA_DECIDER_TYPE_OPTIONS;
const mapped = prop1.map((label) => ({ name: label.label, value: label.value }));
const options2 = mapped.filter((value) => set.has(value.value));
const constants = { TEST_CAPTCHA: "TEST_CAPTCHA" };
createStyles = fn(4639);
let obj9 = { headerStyle: null };
let obj7 = { margin: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj9.headerStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_15 = createStyles.createStyles(obj9);
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/tooling/native/CaptchaTestModal.tsx");

export default function CaptchaTestModal() {
  const tmp = closure_15();
  _require = tmp;
  const items = [tmp];
  const memo = noop.useMemo(() => {
    const obj = {};
    const obj2 = {
      headerStyle: headerStyle.headerStyle,
      headerTitle: "Captcha Test Tool",
      headerLeft: NavigatorHeader.getHeaderCloseButton(function closeModal() {
        return closure_1_1(closure_1_2[14]).pop();
      }),
      render() {
        return closure_1_7(closure_1_14, {});
      }
    };
    obj[constants.TEST_CAPTCHA] = obj2;
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: constants.TEST_CAPTCHA, headerBackTitle: null };
  const intl = require("util").intl;
  obj.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  return closure_7(require("Navigator").Navigator, obj);
};