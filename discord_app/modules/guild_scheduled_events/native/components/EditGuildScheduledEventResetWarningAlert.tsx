// === Module 8651: EditGuildScheduledEventResetWarningAlert ===

// Module 8651 (EditGuildScheduledEventResetWarningAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import common_AlertDefault from "common/Alert" /* 5398 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditGuildScheduledEventResetWarningAlert(arg0) {
  const cResult = c.c(7);
  ({ onClose, onConfirm } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.aNCYas);
    const intl2 = util.intl;
    const formatResult = intl2.format(util.t.RWBa5X, {});
    const intl3 = util.intl;
    const stringResult1 = intl3.string(util.t["cY+Oob"]);
    cResult[0] = stringResult;
    cResult[1] = formatResult;
    cResult[2] = stringResult1;
    tmp4 = stringResult;
    tmp5 = formatResult;
    tmp6 = stringResult1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = util.intl;
    const stringResult2 = intl4.string(util.t["ETE/oC"]);
    cResult[3] = stringResult2;
    let tmp10 = stringResult2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === onClose) {
    if (cResult[5] === onConfirm) {
      let tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj2 = { onClose, onConfirm, title: tmp4, body: tmp5, confirmText: tmp6, confirmColor: null, cancelText: null };
  obj2.confirmColor = common_AlertDefault.Colors.GREEN;
  obj2.cancelText = tmp10;
  const tmp14 = jsx(common_AlertDefault, { onClose, onConfirm, title: tmp4, body: tmp5, confirmText: tmp6, confirmColor: null, cancelText: null });
  cResult[4] = onClose;
  cResult[5] = onConfirm;
  cResult[6] = tmp14;
  tmp12 = tmp14;
}) : (function EditGuildScheduledEventResetWarningAlert(arg0) {
  ({ onClose, onConfirm } = arg0);
  const obj = { onClose, onConfirm, title: null, body: null, confirmText: null, confirmColor: null, cancelText: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.aNCYas);
  const intl2 = util.intl;
  obj.body = intl2.format(util.t.RWBa5X, {});
  const intl3 = util.intl;
  obj.confirmText = intl3.string(util.t["cY+Oob"]);
  obj.confirmColor = common_AlertDefault.Colors.GREEN;
  const intl4 = util.intl;
  obj.cancelText = intl4.string(util.t["ETE/oC"]);
  return jsx(common_AlertDefault, { onClose, onConfirm, title: null, body: null, confirmText: null, confirmColor: null, cancelText: null });
});