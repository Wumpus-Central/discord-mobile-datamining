// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx
import GuildJoinRequestActionCreatorsDefault from "../../../GuildJoinRequestActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx",
);

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
  const items1 = [closure_4(guildId(4975).Button, { variant: "destructive", text: confirmText, onPress: callback })];
  obj = { text: null, variant: "secondary", onPress: null };
  const intl4 = tmp7(1114).intl;
  obj.text = intl4.string(guildId(1114).t.bANR0R);
  obj.onPress = onClose;
  items1[1] = closure_4(guildId(4975).Button, obj);
  obj.children = items1;
  obj.buttons = closure_6(closure_5, obj);
  return closure_4(onClose(5537), obj);
}
