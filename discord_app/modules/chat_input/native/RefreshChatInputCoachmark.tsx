// === Module 11985: RefreshChatInputCoachmark ===

// Module 11985 (RefreshChatInputCoachmark)
import util from "util" /* 1114 */;
import native from "native" /* 4271 */;
import useCoachmark from "useCoachmark" /* 11127 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default function RefreshChatInputCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useRefreshChatInputCoachmark = function useRefreshChatInputCoachmark(disabled) {
  _require = undefined;
  dependencyMap = undefined;
  if (disabled.disabled) {
    let items = [];
  } else {
    items = [tmp(1943).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
  }
  const tmp3 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items), 2);
  _require = tmp4;
  const tmp5 = tmp3[0] === require("dismissible_content").DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  dependencyMap = tmp5;
  const items1 = [tmp5, tmp3[1]];
  let memo = null;
  if (tmp5) {
    memo = noop.useMemo(() => {
      let obj = { title: null, description: null, position: "top", offsetY: 4, visible: null, onDismiss: null, graphic: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.eqI1WA);
      const intl2 = util.intl;
      obj.description = intl2.string(util.t.nxO3NK);
      obj.visible = visible;
      obj.onDismiss = function onDismiss() {
        closure_1_0(constants.USER_DISMISS);
      };
      obj = { type: "rive", rive: native.OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
      obj.graphic = obj;
      return obj;
    }, items1);
  }
  return memo;
};