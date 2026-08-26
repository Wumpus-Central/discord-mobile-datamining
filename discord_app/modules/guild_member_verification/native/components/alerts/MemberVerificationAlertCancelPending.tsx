// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";

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
  obj = { children: null };
  const items1 = [closure_4(guildId(4879).Button, { variant: "destructive", text: confirmText, onPress: callback }), ];
  obj = { text: null, variant: "secondary", onPress: null };
  const intl4 = tmp7(1236).intl;
  obj[0] = intl4.string(guildId(1236).t.bANR0R);
  obj[2] = onClose;
  items1[1] = closure_4(guildId(4879).Button, obj);
  obj[0] = items1;
  obj.buttons = closure_6(closure_5, obj);
  return closure_4(onClose(8648), obj);
};