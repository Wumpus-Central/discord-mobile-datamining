import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("componentDidMount").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx");

export default function EditGuildScheduledEventResetWarningAlert(arg0) {
  let onClose;
  let onConfirm;
  ({ onClose, onConfirm } = arg0);
  const obj = { onClose, onConfirm, title: null, body: null, confirmText: null, confirmColor: null, cancelText: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.aNCYas);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl2.format(require(1236) /* getSystemLocale */.t.RWBa5X, {});
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl3.string(require(1236) /* getSystemLocale */.t["cY+Oob"]);
  obj[5] = importDefault(4622).Colors.GREEN;
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[6] = intl4.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  return jsx(importDefault(4622), { onClose, onConfirm, title: null, body: null, confirmText: null, confirmColor: null, cancelText: null });
};