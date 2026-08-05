// discord_app/modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx
import _getCurrentTask from "_getCurrentTask";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx");

export default function ResendVerificationCodeButton(flowId) {
  flowId = flowId.flowId;
  const setLoading = flowId.setLoading;
  let first;
  let callback;
  const tmp = callback2(React.useState(0), 2);
  first = tmp[0];
  callback = tmp[1];
  const items = [first];
  const effect = React.useEffect(() => {
    if (first > 0) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        callback((arg0) => arg0 - 1);
      }, 1000);
      return () => clearInterval(closure_0);
    }
  }, items);
  const items1 = [setLoading, first, flowId];
  let obj = {
    onPress: React.useCallback(callback(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp4;
              if (outer1_2 > 0) {
                c4 = 3;
              } else {
                v0(true);
                let v02 = 2;
                v0 = 3;
                c4 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_0(outer1_2[5]).resendVerificationCode(outer1_0);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              v02 = 1;
              let obj2 = v0(outer1_2[7]);
              obj2 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: null, icon: null, IconComponent: null, iconColor: "icon-feedback-critical" };
              const intl = outer1_0(outer1_2[8]).intl;
              obj2[1] = intl.string(v0(outer1_2[9])["3AXMYu"]);
              obj2[2] = v0(outer1_2[10]);
              obj2[3] = outer1_0(outer1_2[11]).XLargeIcon;
              obj2.open(obj2);
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 0;
              v0(false);
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              obj = outer1_0(outer1_2[6]);
              obj.showVerificationSent();
              v02(30);
              v02 = 1;
            }
            v02 = 0;
            v0(false);
          }
          v02 = 0;
          v0(false);
          throw closure_2;
        } catch (tmp43) {
          closure_2 = tmp43;
          if (tmp5 === v02) {
            c4 = tmp3;
            throw tmp43;
          } else if (tmp2 === tmp45) {
            v0 = tmp2;
          } else {
            v0 = tmp;
          }
        }
      }
    }), items1),
    disabled: first > 0,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  let intl = flowId(first[8]).intl;
  obj[3] = intl.string(setLoading(first[9]).ah0EUu);
  obj = { variant: "text-sm/medium", color: "text-link", accessibilityLabel: null, importantForAccessibility: "no", children: null };
  const intl2 = flowId(first[8]).intl;
  obj[2] = intl2.string(setLoading(first[9]).ah0EUu);
  if (first > 0) {
    const intl4 = tmp6(tmp7[8]).intl;
    obj = { countdown: null };
    obj[0] = first;
    let formatResult = intl4.format(tmp8(tmp7[9])["2+Lyn0"], obj);
  } else {
    const intl3 = tmp6(tmp7[8]).intl;
    formatResult = intl3.string(tmp8(tmp7[9]).ah0EUu);
  }
  obj[4] = formatResult;
  obj[4] = jsx(flowId(first[12]).Text, { variant: "text-sm/medium", color: "text-link", accessibilityLabel: null, importantForAccessibility: "no", children: null });
  return <Pressable variant="text-sm/medium" color="text-link" accessibilityLabel={null} importantForAccessibility="no">{null}</Pressable>;
};