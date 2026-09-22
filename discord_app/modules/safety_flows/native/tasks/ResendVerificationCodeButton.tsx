// === Module 18346: ResendVerificationCodeButton ===

// Module 18346 (ResendVerificationCodeButton)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx");

export default function ResendVerificationCodeButton(flowId) {
  flowId = flowId.flowId;
  const setLoading = flowId.setLoading;
  countdown = undefined;
  asyncGeneratorStep = undefined;
  [countdown, asyncGeneratorStep] = noop.useState(0);
  const items = [countdown];
  const effect = noop.useEffect(() => {
    if (first > 0) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        closure_1_3((arg0) => arg0 - 1);
      }, 1000);
      return () => clearInterval(closure_0);
    }
  }, items);
  const items1 = [setLoading, countdown, flowId];
  let obj = {
    onPress: noop.useCallback(asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c4 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (first > 0) {
              c4 = 3;
            } else {
              setLoading(true);
              c3 = 2;
              v3 = 3;
              c4 = 1;
              const obj6 = { value: tmp4(tmp43[5]).resendVerificationCode(flowId), done: false };
              return obj6;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              const obj7 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: null, icon: null, IconComponent: null, iconColor: "icon-feedback-critical" };
              const intl = tmp4(tmp43[8]).intl;
              obj7.content = intl.string(v3(tmp43[9])["3AXMYu"]);
              obj7.icon = v3(tmp43[10]);
              obj7.IconComponent = tmp4(tmp43[11]).XLargeIcon;
              v3(tmp43[7]).open(obj7);
              const obj3 = v3(tmp43[7]);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_1(false);
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              tmp4(tmp43[6]).showVerificationSent();
              closure_128_3(30);
              c3 = 1;
              const obj = tmp4(tmp43[6]);
            }
            c3 = 0;
            closure_128_1(false);
          }
          c3 = 0;
          closure_128_1(false);
          throw tmp43;
        } catch (tmp43) {
          if (tmp5 === c3) {
            c4 = tmp3;
            throw tmp43;
          } else if (tmp2 === tmp45) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }), items1),
    disabled: countdown > 0,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  let intl = flowId(countdown[8]).intl;
  obj.accessibilityLabel = intl.string(setLoading(countdown[9]).ah0EUu);
  let obj2 = { variant: "text-sm/medium", color: "text-link", accessibilityLabel: null, importantForAccessibility: "no", children: null };
  const intl2 = flowId(countdown[8]).intl;
  obj2.accessibilityLabel = intl2.string(setLoading(countdown[9]).ah0EUu);
  if (countdown > 0) {
    const intl4 = tmp6(tmp7[8]).intl;
    let obj3 = { countdown };
    let formatResult = intl4.format(tmp8(tmp7[9])["2+Lyn0"], obj3);
  } else {
    const intl3 = tmp6(tmp7[8]).intl;
    formatResult = intl3.string(tmp8(tmp7[9]).ah0EUu);
  }
  obj2.children = formatResult;
  obj.children = jsx(flowId(countdown[12]).Text, { variant: "text-sm/medium", color: "text-link", accessibilityLabel: null, importantForAccessibility: "no", children: null });
  return <Pressable onPress={noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (first > 0) {
            c4 = 3;
          } else {
            setLoading(true);
            c3 = 2;
            v3 = 3;
            c4 = 1;
            const obj6 = { value: tmp4(tmp43[5]).resendVerificationCode(flowId), done: false };
            return obj6;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const obj7 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: null, icon: null, IconComponent: null, iconColor: "icon-feedback-critical" };
            const intl = tmp4(tmp43[8]).intl;
            obj7.content = intl.string(v3(tmp43[9])["3AXMYu"]);
            obj7.icon = v3(tmp43[10]);
            obj7.IconComponent = tmp4(tmp43[11]).XLargeIcon;
            v3(tmp43[7]).open(obj7);
            const obj3 = v3(tmp43[7]);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_1(false);
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            tmp4(tmp43[6]).showVerificationSent();
            closure_128_3(30);
            c3 = 1;
            const obj = tmp4(tmp43[6]);
          }
          c3 = 0;
          closure_128_1(false);
        }
        c3 = 0;
        closure_128_1(false);
        throw tmp43;
      } catch (tmp43) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp43;
        } else if (tmp2 === tmp45) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  }), items1)} disabled={countdown > 0} accessibilityRole="button" accessibilityLabel={null}>{null}</Pressable>;
};