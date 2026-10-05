// === Module 18070: ResendVerificationCodeButton ===

// Module 18070 (ResendVerificationCodeButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4;

let _asyncToGenerator = _asyncToGenerator_mod;
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx");

export default function ResendVerificationCodeButton(flowId) {
  let closure_3;
  let countdown;
  let formatResult;
  let intl2;
  flowId = flowId.flowId;
  const setLoading = flowId.setLoading;
  countdown = undefined;
  _asyncToGenerator = undefined;
  [countdown, _asyncToGenerator] = react.useState(0);
  const items = [countdown];
  const effect = react.useEffect(() => {
    let closure_0;
    if (first > 0) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        closure_1_3((arg0) => arg0 - 1);
      }, 1000);
      return () => clearInterval(closure_0);
    }
  }, items);
  const items1 = [setLoading, countdown, flowId];
  let intl = flowId(countdown[8]).intl;
  let obj2 = { variant: "text-sm/medium", color: "text-link", accessibilityLabel: intl2.string(setLoading(countdown[9]).ah0EUu), importantForAccessibility: "no", children: formatResult };
  const Text = flowId(countdown[12]).Text;
  intl2 = flowId(countdown[8]).intl;
  if (countdown > 0) {
    const intl4 = tmp6(tmp7[8]).intl;
    let obj3 = { countdown };
    formatResult = intl4.format(tmp8(tmp7[9])["2+Lyn0"], obj3);
  } else {
    const intl3 = tmp6(tmp7[8]).intl;
    formatResult = intl3.string(tmp8(tmp7[9]).ah0EUu);
  }
  return <Pressable onPress={react.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    let closure_2;
    let intl;
    let obj4;
    let v2;
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (first <= 0) {
            setLoading(true);
            c3 = 2;
            v2 = 3;
            c4 = 1;
            const obj5 = { value: obj4.resendVerificationCode(flowId), done: false };
            obj4 = tmp(countdown[5]);
            return obj5;
          }
        } else if (1 === v2) {
          c3 = 0;
          closure_128_1(false);
          throw countdown;
        } else {
          if (2 === v2) {
            c3 = 1;
            const obj6 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: intl.string(v2(countdown[9])["3AXMYu"]), icon: v2(countdown[10]), IconComponent: tmp(countdown[11]).XLargeIcon, iconColor: "icon-feedback-critical" };
            const open = v2(countdown[7]).open;
            const tmp18 = v2(countdown[7]);
            intl = tmp(countdown[8]).intl;
            open(obj6);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_1(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const obj = tmp(countdown[6]);
            obj.showVerificationSent();
            closure_128_3(30);
            c3 = 1;
          }
          c3 = 0;
          closure_128_1(false);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp40) {
        countdown = tmp40;
        if (0 === c3) {
          c4 = 3;
          throw tmp40;
        } else if (1 === tmp42) {
          v2 = 1;
        } else {
          v2 = 2;
        }
      }
    }
  }), items1)} disabled={countdown > 0} accessibilityRole="button" accessibilityLabel={intl.string(setLoading(countdown[9]).ah0EUu)}>{null}</Pressable>;
};