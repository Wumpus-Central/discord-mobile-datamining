// === Module 8536: MemberVerificationAlertCancelPending ===

// Module 8536 (MemberVerificationAlertCancelPending)
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx");

export default function MemberVerificationAlertCancelPending(guildId) {
  guildId = guildId.guildId;
  ({ confirmText, subtitleText, onClose } = guildId);
  const merged = Object.assign(guildId, Object.create(null));
  const items = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const result = onClose(dependencyMap[2]).removeGuildJoinRequest(guildId);
  }, items);
  let obj = {};
  const merged1 = Object.assign(merged);
  const intl = guildId(1236).intl;
  obj.header = intl.string(guildId(1236).t.KYiN1Q);
  if (subtitleText == null) {
    const intl2 = tmp7(1236).intl;
    subtitleText = intl2.string(tmp7(1236).t.nQHxqm);
  }
  obj.subtitle = subtitleText;
  if (confirmText == null) {
    const intl3 = tmp7(1236).intl;
    confirmText = intl3.string(tmp7(1236).t.OzHPde);
  }
  const items1 = [callback(guildId(4745).Button, { variant: "destructive", text: confirmText, onPress: callback }), ];
  obj = { text: null, variant: "secondary", onPress: null };
  const intl4 = tmp7(1236).intl;
  obj[0] = intl4.string(guildId(1236).t.bANR0R);
  obj[2] = onClose;
  items1[1] = callback(guildId(4745).Button, obj);
  obj[0] = items1;
  obj.buttons = callback2(closure_5, obj);
  return callback(onClose(8533), obj);
};