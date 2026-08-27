// === Module 11480: RefreshChatInputCoachmark ===

// Module 11480 (RefreshChatInputCoachmark)
import useCoachmark from "useCoachmark" /* 8895 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default function RefreshChatInputCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useRefreshChatInputCoachmark = function useRefreshChatInputCoachmark(disabled) {
  let _require;
  importDefault = undefined;
  _require(6203);
  if (tmp2) {
    if (!disabled.disabled) {
      let items = [tmp3(1377).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
    }
    const tmp7 = callback(tmp5(items), 2);
    _require = tmp8;
    const tmp9 = tmp7[0] === tmp3(1377).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
    importDefault = tmp9;
    const items1 = [tmp9, tmp7[1]];
    let memo = null;
    if (tmp9) {
      memo = React.useMemo(() => {
        let obj = { title: null, description: null, position: "top", offsetY: 4, visible: null, onDismiss: null, graphic: null };
        const intl = callback(closure_1_2[6]).intl;
        obj[0] = intl.string(callback(closure_1_2[6]).t.eqI1WA);
        const intl2 = callback(closure_1_2[6]).intl;
        obj[1] = intl2.string(callback(closure_1_2[6]).t.nxO3NK);
        obj[4] = closure_1;
        obj[5] = function onDismiss() {
          callback(closure_1_5.USER_DISMISS);
        };
        obj = { type: "rive", rive: callback(closure_1_2[7]).OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
        obj[6] = obj;
        return obj;
      }, items1);
    }
    return memo;
  }
  items = [];
};