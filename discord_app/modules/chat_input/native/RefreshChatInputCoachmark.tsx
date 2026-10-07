// === Module 11613: RefreshChatInputCoachmark ===

// Module 11613 (RefreshChatInputCoachmark)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import OmnibuttonCoachmarkRive from "OmnibuttonCoachmarkRive" /* 4690 */;
import useCoachmark from "useCoachmark" /* 9895 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["buttonRef"];
const ContentDismissActionType = fn(2048).ContentDismissActionType;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((disabled) => {
  const cResult = require("c").c(10);
  disabled = disabled.disabled;
  if (cResult[0] !== disabled) {
    if (disabled) {
      let items = [];
    } else {
      items = [tmp(2036).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
    }
    cResult[0] = disabled;
    cResult[1] = items;
  } else {
    const tmp6 = _slicedToArray(tmp(6901).useSelectedDismissibleContent(cResult[1]), 2);
    _require = tmp7;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.eqI1WA);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.nxO3NK);
      cResult[2] = stringResult;
      cResult[3] = stringResult1;
      let tmp10 = stringResult1;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    if (cResult[4] !== tmp6[1]) {
      class C {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[4] = tmp7;
      cResult[5] = C;
    } else {
      class C {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      tmp15[1] = tmp(4690).OmnibuttonCoachmarkRive;
      cResult[6] = tmp15;
    } else {
      class C {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const tmp16 = tmp6[0] === tmp(2036).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
    if (cResult[7] === tmp16) {
      class C {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      if (tmp16) {
        class C {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      return null;
    }
    const obj2 = { title: tmp9, description: tmp10, position: "top", offsetY: 4, visible: tmp16, onDismiss: C, graphic: tmp15 };
    cResult[7] = tmp16;
    cResult[8] = C;
    cResult[9] = obj2;
    const tmpResult = tmp(6901);
  }
  const obj = require("c");
}) : ((disabled) => {
  _require = undefined;
  dependencyMap = undefined;
  if (disabled.disabled) {
    let items = [];
  } else {
    items = [tmp(2036).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
  }
  const tmp3 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items), 2);
  _require = tmp4;
  const tmp5 = tmp3[0] === require("dismissible_content").DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  dependencyMap = tmp5;
  const items1 = [tmp5, tmp3[1]];
  let memo = null;
  if (tmp5) {
    memo = noop.useMemo(() => {
      const obj = { title: null, description: null, position: "top", offsetY: 4, visible: null, onDismiss: null, graphic: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.eqI1WA);
      const intl2 = util.intl;
      obj.description = intl2.string(util.t.nxO3NK);
      obj.visible = visible;
      obj.onDismiss = function onDismiss() {
        closure_1_0(constants.USER_DISMISS);
      };
      obj.graphic = { type: "rive", rive: OmnibuttonCoachmarkRive.OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
      return obj;
    }, items1);
  }
  return memo;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((buttonRef) => {
  const cResult = c.c(3);
  if (cResult[0] !== buttonRef) {
    buttonRef = buttonRef.buttonRef;
    const tmp8 = _objectWithoutProperties(buttonRef, closure_2);
    cResult[0] = buttonRef;
    cResult[1] = buttonRef;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = buttonRef;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const coachmark = useCoachmark.useCoachmark(tmp4, tmp5);
  return null;
}) : ((buttonRef) => {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
});
export const useRefreshChatInputCoachmark = tmp2;