// discord_app/modules/captcha/tooling/native/CaptchaTestModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import CaptchaTestActionCreators from "../CaptchaTestActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function CaptchaTestScreen(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    _slicedToArray = async function _sendCaptchaRequest(noop, value) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (noop === 1) {
          throw value;
        } else if (noop === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp7;
              if (null != _require) {
                c4 = 1;
                let obj4 = difficulty(tmp3[8]);
                difficulty = first1;
                if (first1 == null) {
                  difficulty = undefined;
                }
                const obj1 = { difficulty };
                c5 = 2;
                c6 = 1;
                let obj2 = { value: obj4.testCaptcha(tmp32, obj1), done: false };
                return obj2;
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_129_0 = closure_3;
              obj2 = closure_1(tmp3[9]);
              const obj3 = { key: "captcha-test-modal-error", content: closure_129_0.message };
              obj2.open(obj3);
            } else if (noop === 1) {
              c6 = 3;
              throw value;
            } else if (noop !== 2) {
              obj = closure_1(tmp3[9]);
              obj.open({ key: "captcha-test-modal-success", content: "Captcha completed!" });
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj4 = { value, done: true };
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
    };
    const tmp4 = closure_9();
    const tmp7 = _slicedToArray(noop.useState(null), 2);
    value = tmp7[0];
    closure_1 = tmp7[1];
    const tmp9 = _slicedToArray(noop.useState(null), 2);
    const first1 = tmp9[0];
    closure_3 = tmp9[1];
    let obj = { style: tmp4.container, children: null };
    obj = { style: tmp4.content, children: null };
    let obj1 = { children: null };
    const items = [
      closure_7(value(first1[10]).Text, {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        children: "Decider",
      }),
    ];
    let obj2 = {
      withSpacing: true,
      value,
      options: options2,
      onChange(value) {
        value = value.value;
        if (value !== CaptchaTestActionCreators.CaptchaDeciderType.HCAPTCHA_RQDATA) {
          closure_3(null);
        }
        closure_1(value);
      },
    };
    items[1] = closure_7(value(first1[11]).RadioGroup, obj2);
    obj1.children = items;
    const items1 = [closure_8(View, obj1)];
    let tmp11Result = value === value(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA;
    if (tmp11Result) {
      obj = { children: null };
      const items2 = [
        tmp13(tmp14(tmp15[10]).Text, {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          children: "Difficulty",
        }),
      ];
      let obj3 = {
        withSpacing: true,
        value: first1,
        options,
        onChange(value) {
          if (first === CaptchaTestActionCreators.CaptchaDeciderType.HCAPTCHA_RQDATA) {
            closure_3(value.value);
          }
        },
      };
      items2[1] = tmp13(tmp14(tmp15[11]).RadioGroup, obj3);
      obj.children = items2;
      tmp11Result = tmp11(tmp12, obj);
    }
    items1[1] = tmp11Result;
    obj.children = items1;
    const items3 = [closure_8(View, obj)];
    let obj4 = { style: tmp4.footerContainer, children: null };
    const obj5 = { style: tmp4.separator };
    const items4 = [closure_7(View, obj5)];
    const obj6 = { bottom: true, style: tmp4.footerButton, children: null };
    const obj7 = {
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
      text: "Submit",
    };
    obj6.children = closure_7(value(first1[13]).Button, obj7);
    items4[1] = closure_7(value(first1[12]).SafeAreaPaddingView, obj6);
    obj4.children = items4;
    items3[1] = closure_8(View, obj4);
    obj.children = items3;
    return closure_8(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, separator: null, footerContainer: null, footerButton: null, content: null };
createStyles = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.separator = {
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginVertical: nativeDefault.space.PX_24,
};
let obj1 = {
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginVertical: nativeDefault.space.PX_24,
};
createStyles.footerContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles.footerButton = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = { margin: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(createStyles);
const prop = fn(15684).HCAPTCHA_DIFFICULTY_OPTIONS;
const options = prop.map((label) => ({ name: label.label, value: label.value }));
let items = [fn(15685).CaptchaDeciderType.HCAPTCHA_RQDATA, fn(15685).CaptchaDeciderType.SMITE_RQDATA];
const set = new Set(items);
const prop1 = fn(15684).CAPTCHA_DECIDER_TYPE_OPTIONS;
const mapped = prop1.map((label) => ({ name: label.label, value: label.value }));
const options2 = mapped.filter((value) => set.has(value.value));
const constants = { TEST_CAPTCHA: "TEST_CAPTCHA" };
createStyles = fn(4560);
let obj5 = { headerStyle: null };
let obj4 = { margin: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj5.headerStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_15 = createStyles.createStyles(obj5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/tooling/native/CaptchaTestModal.tsx");

export default function CaptchaTestModal() {
  const tmp = closure_15();
  _require = tmp;
  const items = [tmp];
  const memo = noop.useMemo(() => {
    let obj = {};
    obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle: "Captcha Test Tool",
      headerLeft: NavigatorHeader.getHeaderCloseButton(function closeModal() {
        return closure_1_1(closure_1_2[14]).pop();
      }),
      render() {
        return closure_1_7(closure_1_14, {});
      },
    };
    obj[constants.TEST_CAPTCHA] = obj;
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: constants.TEST_CAPTCHA, headerBackTitle: null };
  const intl = require("util").intl;
  obj.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  return closure_7(require("Navigator").Navigator, obj);
}
