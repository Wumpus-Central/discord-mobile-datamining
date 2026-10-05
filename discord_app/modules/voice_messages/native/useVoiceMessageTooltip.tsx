// === Module 11888: useVoiceMessageTooltip ===

// Module 11888 (useVoiceMessageTooltip)
import intl2 from "intl" /* 1126 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6110 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1486 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 11574 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: hasOwnProperty, useVoiceMessagesUIStore: metroRequire } = VoiceMessagesUIStore);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp7;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(8);
  const ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(showVoiceMessagesTooltip) {
      return showVoiceMessagesTooltip.showVoiceMessagesTooltip;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_6(first);
  _require = tmp6;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t["hP6+07"]);
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj3 = { position: "top", label: tmp7, visible: tmp6 };
    cResult[2] = tmp6;
    cResult[3] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const fn2 = function h() {
      let keyboardIsOpen;
      if (keyboardIsOpen) {
        let obj = useKeyboardIsOpen;
        keyboardIsOpen = obj.getKeyboardIsOpen({ includeCustomKeyboard: true });
        let closure_1 = subscribeToKeyboardUIStore(() => {
          const obj = closure_2_0(closure_2_1[6]);
          if (closure_0 !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
            closure_2_4();
          }
        });
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          closure_1_4();
        }, 2000);
        return () => {
          clearTimeout(closure_2);
          closure_1();
        };
      }
    };
    const items = [tmp6];
    cResult[4] = tmp6;
    cResult[5] = fn2;
    cResult[6] = items;
    tmp11 = items;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  const effect = react.useEffect(tmp10, tmp11);
  const tmpResult = require("useTooltip");
  const tooltip = tmpResult.useTooltip(ref, tmp9);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { tooltipTargetRef: ref, showVoiceMessagesTooltip };
    cResult[7] = obj4;
    tmp14 = obj4;
  } else {
    tmp14 = cResult[7];
  }
  return tmp14;
}) : (() => {
  let visible;
  const ref = react.useRef(null);
  const tmp2 = closure_6((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  _require = tmp2;
  const items = [tmp2];
  const items1 = [tmp2];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { position: "top", label: intl.string(intl2.t["hP6+07"]), visible };
    intl = intl2.intl;
    return obj;
  }, items);
  const effect = react.useEffect(() => {
    let keyboardIsOpen;
    if (keyboardIsOpen) {
      let obj = useKeyboardIsOpen;
      keyboardIsOpen = obj.getKeyboardIsOpen({ includeCustomKeyboard: true });
      let closure_1 = subscribeToKeyboardUIStore(() => {
        const obj = visible(closure_2_1[6]);
        if (closure_0 !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
          closure_2_4();
        }
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4();
      }, 2000);
      return () => {
        clearTimeout(closure_2);
        closure_1();
      };
    }
  }, items1);
  let obj = require("useTooltip");
  const tooltip = obj.useTooltip(ref, memo);
  return { tooltipTargetRef: ref, showVoiceMessagesTooltip };
});
const result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default tmp3;