// discord_app/modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx
import "noop";
import { jsx } from "jsxProd";
import { componentDidMount } from "../../../../components_native/common/Alert.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
const result = require("componentDidMount").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx");

export default function EditGuildScheduledEventResetWarningAlert(arg0) {
  let onClose;
  let onConfirm;
  ({ onClose, onConfirm } = arg0);
  const obj = { onClose, onConfirm, title: null, body: null, confirmText: null, confirmColor: null, cancelText: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.aNCYas);
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.format(getSystemLocale.t.RWBa5X, {});
  const intl3 = getSystemLocale.intl;
  obj[4] = intl3.string(getSystemLocale.t["cY+Oob"]);
  obj[5] = componentDidMount.Colors.GREEN;
  const intl4 = getSystemLocale.intl;
  obj[6] = intl4.string(getSystemLocale.t["ETE/oC"]);
  return jsx(componentDidMount, { onClose, onConfirm, title: null, body: null, confirmText: null, confirmColor: null, cancelText: null });
};