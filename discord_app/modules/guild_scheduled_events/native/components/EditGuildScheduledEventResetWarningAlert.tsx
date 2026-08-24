// === Module 8925: EditGuildScheduledEventResetWarningAlert ===

// Module 8925 (EditGuildScheduledEventResetWarningAlert)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import componentDidMountDefault from "componentDidMount" /* 4768 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx");

export default function EditGuildScheduledEventResetWarningAlert(arg0) {
  ({ onClose, onConfirm } = arg0);
  const obj = { onClose, onConfirm, title: null, body: null, confirmText: null, confirmColor: null, cancelText: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.aNCYas);
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.format(getSystemLocale.t.RWBa5X, {});
  const intl3 = getSystemLocale.intl;
  obj[4] = intl3.string(getSystemLocale.t["cY+Oob"]);
  obj[5] = componentDidMountDefault.Colors.GREEN;
  const intl4 = getSystemLocale.intl;
  obj[6] = intl4.string(getSystemLocale.t["ETE/oC"]);
  return jsx(componentDidMountDefault, { onClose, onConfirm, title: null, body: null, confirmText: null, confirmColor: null, cancelText: null });
};