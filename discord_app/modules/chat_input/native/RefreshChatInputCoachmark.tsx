// === Module 11524: RefreshChatInputCoachmark ===

// Module 11524 (RefreshChatInputCoachmark)
import useCoachmark from "useCoachmark" /* 8936 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default function RefreshChatInputCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useRefreshChatInputCoachmark = function useRefreshChatInputCoachmark(disabled) {
  let _require;
  dependencyMap = undefined;
  if (disabled.disabled) {
    let items = [];
  } else {
    items = [tmp(1373).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
  }
  const tmp3 = callback(_require(6219).useSelectedDismissibleContent(items), 2);
  _require = tmp4;
  const tmp5 = tmp3[0] === _require(1373).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  dependencyMap = tmp5;
  const items1 = [tmp5, tmp3[1]];
  let memo = null;
  if (tmp5) {
    memo = React.useMemo(() => {
      let obj = { title: null, description: null, position: "top", offsetY: 4, visible: null, onDismiss: null, graphic: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t.eqI1WA);
      const intl2 = callback(1236).intl;
      obj[1] = intl2.string(callback(1236).t.nxO3NK);
      obj[4] = dependencyMap;
      obj[5] = function onDismiss() {
        callback(closure_1_4.USER_DISMISS);
      };
      obj = { type: "rive", rive: callback(4174).OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
      obj[6] = obj;
      return obj;
    }, items1);
  }
  return memo;
};