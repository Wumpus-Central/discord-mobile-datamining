// === Module 12511: useShowGuildPowerupRollbackSheet ===

// Module 12511 (useShowGuildPowerupRollbackSheet)
import openGuildPowerupRollbackSheetDefault from "openGuildPowerupRollbackSheet" /* 12514 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default function useShowGuildPowerupRollbackSheet(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  modalConfig = undefined;
  let first;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  ({ shouldShow, modalConfig } = first(12512)(arg0, arg1));
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
  const tmp2 = first(12512)(arg0, arg1);
  const tmp5 = _slicedToArray(modalConfig(7388).useSelectedDismissibleContent(items), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  _slicedToArray = noop.useRef(false);
  const items1 = [first, modalConfig, tmp5[1]];
  const effect = noop.useEffect(() => {
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
      ({ header: obj.header, bodies } = modalConfig);
      obj.body = bodies.join("\n\n");
      obj.ctaText = modalConfig.primaryButtonText;
      obj.onCtaPress = function onCtaPress() {
        dependencyMap(constants.TAKE_ACTION);
        first(4527).hideActionSheet(modalConfig(12514).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
      };
      obj.onDismiss = function onDismiss() {
        dependencyMap(constants.USER_DISMISS);
      };
      openGuildPowerupRollbackSheetDefault(obj);
    }
  }, items1);
};