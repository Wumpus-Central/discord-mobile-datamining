// discord_app/modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default function useShowGuildPowerupRollbackSheet(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  modalConfig = undefined;
  let first;
  dependencyMap = undefined;
  let callback;
  ({ shouldShow, modalConfig } = first(12145)(arg0, arg1));
  if (shouldShow) {
    shouldShow = null != modalConfig;
  }
  if (shouldShow) {
    shouldShow = !flag;
  }
  const items = [];
  if (shouldShow) {
    items.push(modalConfig.dismissibleContent);
  }
  const tmp2 = first(12145)(arg0, arg1);
  const tmp5 = callback(modalConfig(6197).useSelectedDismissibleContent(items), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  callback = React.useRef(false);
  const items1 = [first, modalConfig, tmp5[1]];
  const effect = React.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = null == modalConfig;
    }
    if (!current) {
      current = null == modalConfig.primaryButtonText;
    }
    if (!current) {
      current = first !== modalConfig.dismissibleContent;
    }
    if (!current) {
      ref.current = true;
      const obj = { header: null, body: null, ctaText: null, onCtaPress: null, onDismiss: null };
      ({ header: obj[0], bodies } = modalConfig);
      obj[1] = bodies.join("\n\n");
      obj[2] = modalConfig.primaryButtonText;
      obj[3] = function onCtaPress() {
        callback(closure_1_5.TAKE_ACTION);
        closure_1_1(closure_1_2[6]).hideActionSheet(closure_1_0(closure_1_2[5]).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
      };
      obj[4] = function onDismiss() {
        callback(closure_1_5.USER_DISMISS);
      };
      first(table[5])(obj);
      const tmp10 = first(table[5]);
    }
  }, items1);
};