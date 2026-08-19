// === Module 8532: MemberVerificationAlertPending ===

// Module 8532 (MemberVerificationAlertPending)
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx");

export default function MemberVerificationAlertPending(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.create(null));
  const items = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    guildId(dependencyMap[2]);
    const obj = { guildId };
    const result = obj.openMemberVerificationCancelPendingAlert(obj);
  }, items);
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = guildId(8534).ClipboardListIcon;
  const intl = guildId(1236).intl;
  obj.header = intl.string(guildId(1236).t.zhfXbs);
  const intl2 = guildId(1236).intl;
  obj.subtitle = intl2.string(guildId(1236).t["SRM/e/"]);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = guildId(1236).intl;
  obj[1] = intl3.string(guildId(1236).t.f293OM);
  obj[2] = onClose;
  const items1 = [callback(guildId(4745).Button, obj), ];
  obj1 = { text: null, variant: "destructive", onPress: null };
  const intl4 = guildId(1236).intl;
  obj1[0] = intl4.string(guildId(1236).t.mqtdmQ);
  obj1[2] = callback;
  items1[1] = callback(guildId(4745).Button, obj1);
  obj[0] = items1;
  obj.buttons = callback2(closure_5, obj);
  return callback(onClose(8533), obj);
};