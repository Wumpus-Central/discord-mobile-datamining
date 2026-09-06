// === Module 5540: MemberVerificationAlertCancelPending ===

// Module 5540 (MemberVerificationAlertCancelPending)
import closure_3 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx");

export default function MemberVerificationAlertCancelPending(guildId) {
  guildId = guildId.guildId;
  ({ confirmText, subtitleText, onClose } = guildId);
  const merged = Object.assign(guildId, Object.create(null));
  const items = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const result = onClose(closure_1_2[2]).removeGuildJoinRequest(guildId);
  }, items);
  let obj = {};
  const merged1 = Object.assign(merged);
  const intl = guildId(1114).intl;
  obj.header = intl.string(guildId(1114).t.KYiN1Q);
  if (subtitleText == null) {
    const intl2 = tmp7(1114).intl;
    subtitleText = intl2.string(tmp7(1114).t.nQHxqm);
  }
  obj.subtitle = subtitleText;
  if (confirmText == null) {
    const intl3 = tmp7(1114).intl;
    confirmText = intl3.string(tmp7(1114).t.OzHPde);
  }
  obj = { children: null };
  const items1 = [closure_4(guildId(4975).Button, { variant: "destructive", text: confirmText, onPress: callback }), ];
  obj = { text: null, variant: "secondary", onPress: null };
  const intl4 = tmp7(1114).intl;
  obj[0] = intl4.string(guildId(1114).t.bANR0R);
  obj[2] = onClose;
  items1[1] = closure_4(guildId(4975).Button, obj);
  obj[0] = items1;
  obj.buttons = closure_6(closure_5, obj);
  return closure_4(onClose(5537), obj);
};