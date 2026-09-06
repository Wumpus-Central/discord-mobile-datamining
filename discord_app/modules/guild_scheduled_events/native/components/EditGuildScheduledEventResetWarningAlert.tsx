// === Module 9787: EditGuildScheduledEventResetWarningAlert ===

// Module 9787 (EditGuildScheduledEventResetWarningAlert)
import util from "util" /* 1114 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx");

export default function EditGuildScheduledEventResetWarningAlert(arg0) {
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
};