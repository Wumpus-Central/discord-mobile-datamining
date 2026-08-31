// discord_app/modules/chat_input/native/RefreshChatInputCoachmark.tsx
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";

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
  const tmp3 = callback(require("../../dismissible_content/hooks/useSelectedDismissibleContent.tsx").useSelectedDismissibleContent(items), 2);
  _require = tmp4;
  const tmp5 = tmp3[0] === require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
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