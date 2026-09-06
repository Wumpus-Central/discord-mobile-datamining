// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx
import MemberVerificationAlertActionCreators from "../../MemberVerificationAlertActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx",
);

export default function MemberVerificationAlertPending(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  const items = [guildId, onClose];
  const callback = noop.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = { guildId };
    const result = obj.openMemberVerificationCancelPendingAlert(obj);
  }, items);
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = guildId(5538).ClipboardListIcon;
  const intl = guildId(1114).intl;
  obj.header = intl.string(guildId(1114).t.zhfXbs);
  const intl2 = guildId(1114).intl;
  obj.subtitle = intl2.string(guildId(1114).t["SRM/e/"]);
  obj = { children: null };
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = guildId(1114).intl;
  obj.text = intl3.string(guildId(1114).t.f293OM);
  obj.onPress = onClose;
  const items1 = [closure_4(guildId(4975).Button, obj)];
  const obj1 = { text: null, variant: "destructive", onPress: null };
  const intl4 = guildId(1114).intl;
  obj1.text = intl4.string(guildId(1114).t.mqtdmQ);
  obj1.onPress = callback;
  items1[1] = closure_4(guildId(4975).Button, obj1);
  obj.children = items1;
  obj.buttons = closure_6(closure_5, obj);
  return closure_4(onClose(5537), obj);
}
