// === Module 11613: RefreshChatInputCoachmark ===

// Module 11613 (RefreshChatInputCoachmark)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import OmnibuttonCoachmarkRive from "OmnibuttonCoachmarkRive" /* 4690 */;
import useCoachmark from "useCoachmark" /* 9895 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, buttonRef, dependencyMap, disabled, tmp;

let closure_2 = ["buttonRef"];
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((disabled) => {
  let closure_0;
  let tmp4;
  let tmp8;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(10);
  disabled = disabled.disabled;
  if (cResult[0] !== disabled) {
    let items;
    if (disabled) {
      items = [];
    } else {
      items = [tmp(2036).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
    }
    cResult[0] = disabled;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp5 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp4), 2);
  _require = tmp7;
  const first = tmp5[0];
  const MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK = tmp(2036).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.eqI1WA);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(require("intl").t.nxO3NK);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    tmp9 = stringResult1;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp5[1]) {
    class C {
      constructor() {
        tmp = closure_0(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    cResult[4] = tmp5[1];
    cResult[5] = C;
  } else {
    class C {
      constructor() {
        tmp = closure_0(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        tmp = closure_0(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    tmp14[1] = require("OmnibuttonCoachmarkRive").OmnibuttonCoachmarkRive;
    cResult[6] = tmp14;
  } else {
    class C {
      constructor() {
        tmp = closure_0(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[7] === first === MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK) {
    class C {
      constructor() {
        tmp = closure_0(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    if (first === MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK) {
      class C {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    return null;
  }
  const obj2 = { title: tmp8, description: tmp9, position: "top", offsetY: 4, visible: first === MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK, onDismiss: C, graphic: tmp14 };
  cResult[7] = first === MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  cResult[8] = C;
  cResult[9] = obj2;
}) : ((disabled) => {
  let closure_0;
  let items;
  let visible;
  _require = undefined;
  dependencyMap = undefined;
  disabled = disabled.disabled;
  const useSelectedDismissibleContent = require("useSelectedDismissibleContent").useSelectedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (disabled) {
    items = [];
  } else {
    items = [tmp(2036).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
  }
  const tmp4 = _slicedToArray(useSelectedDismissibleContent(items), 2);
  _require = tmp5;
  const tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  dependencyMap = tmp6;
  const items1 = [tmp6, tmp4[1]];
  let memo = null;
  if (tmp6) {
    memo = react.useMemo(() => {
      let intl;
      let intl2;
      const obj = {
        title: intl.string(intl3.t.eqI1WA),
        description: intl2.string(intl3.t.nxO3NK),
        position: "top",
        offsetY: 4,
        visible,
        onDismiss() {
          closure_1_0(constants.USER_DISMISS);
        },
        graphic: { type: "rive", rive: OmnibuttonCoachmarkRive.OmnibuttonCoachmarkRive, aspectRatio: "16/9" }
      };
      intl = intl3.intl;
      intl2 = intl3.intl;
      ({ type: "rive", rive: OmnibuttonCoachmarkRive.OmnibuttonCoachmarkRive, aspectRatio: "16/9" });
      return obj;
    }, items1);
  }
  return memo;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((buttonRef) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] !== buttonRef) {
    buttonRef = buttonRef.buttonRef;
    const tmp8 = _objectWithoutProperties(buttonRef, closure_2);
    cResult[0] = buttonRef;
    cResult[1] = buttonRef;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = buttonRef;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = useCoachmark;
  const coachmark = tmpResult.useCoachmark(tmp4, tmp5);
  return null;
}) : ((buttonRef) => {
  buttonRef = buttonRef.buttonRef;
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(buttonRef, merged);
  return null;
});
const result = size.fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default tmp3;
export const useRefreshChatInputCoachmark = tmp2;