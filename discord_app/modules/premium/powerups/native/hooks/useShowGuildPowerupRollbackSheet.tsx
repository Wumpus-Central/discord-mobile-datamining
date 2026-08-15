// discord_app/modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
const result = require("ContentDismissActionType").fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default function useShowGuildPowerupRollbackSheet(arg0, arg1) {
  let modalConfig;
  let shouldShow;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  modalConfig = undefined;
  let first;
  let dependencyMap;
  let callback;
  ({ shouldShow, modalConfig } = first(11681)(arg0, arg1));
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
  const tmp2 = first(11681)(arg0, arg1);
  const tmp5 = callback(modalConfig(7366).useSelectedDismissibleContent(items), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  callback = React.useRef(false);
  const items1 = [first, modalConfig, tmp5[1]];
  const effect = React.useEffect(() => {
    let bodies;
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
        callback(outer1_5.TAKE_ACTION);
        outer1_1(outer1_2[6]).hideActionSheet(outer1_0(outer1_2[5]).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
      };
      obj[4] = function onDismiss() {
        callback(outer1_5.USER_DISMISS);
      };
      first(_undefined[5])(obj);
      const tmp10 = first(_undefined[5]);
    }
  }, items1);
};