// === Module 5843: MemberVerificationAlertCancelPending ===

// Module 5843 (MemberVerificationAlertCancelPending)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5844 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx");

export default function MemberVerificationAlertCancelPending(guildId) {
  guildId = guildId.guildId;
  ({ confirmText, subtitleText, onClose } = guildId);
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, confirmText: 0, subtitleText: 0, onClose: 0 }));
  const items = [guildId, onClose];
  const callback = noop.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const result = GuildJoinRequestActionCreatorsDefault.removeGuildJoinRequest(guildId);
  }, items);
  const obj = {};
  const merged1 = Object.assign(merged);
  const intl = guildId(1115).intl;
  obj.header = intl.string(guildId(1115).t.KYiN1Q);
  if (subtitleText == null) {
    const intl2 = tmp7(1115).intl;
    subtitleText = intl2.string(tmp7(1115).t.nQHxqm);
  }
  obj.subtitle = subtitleText;
  if (confirmText == null) {
    const intl3 = tmp7(1115).intl;
    confirmText = intl3.string(tmp7(1115).t.OzHPde);
  }
  const obj2 = { children: null };
  const items1 = [closure_4(guildId(5271).Button, { variant: "destructive", text: confirmText, onPress: callback }), ];
  const obj3 = { text: null, variant: "secondary", onPress: null };
  const intl4 = tmp7(1115).intl;
  obj3.text = intl4.string(guildId(1115).t.bANR0R);
  obj3.onPress = onClose;
  items1[1] = closure_4(guildId(5271).Button, obj3);
  obj2.children = items1;
  obj.buttons = closure_6(closure_5, obj2);
  return closure_4(onClose(5840), obj);
};