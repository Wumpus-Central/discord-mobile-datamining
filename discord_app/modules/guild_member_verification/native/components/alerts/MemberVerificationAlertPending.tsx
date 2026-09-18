// === Module 5706: MemberVerificationAlertPending ===

// Module 5706 (MemberVerificationAlertPending)
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5697 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertPending.tsx");

export default function MemberVerificationAlertPending(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  const items = [guildId, onClose];
  const callback = noop.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert({ guildId });
  }, items);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = guildId(5708).ClipboardListIcon;
  const intl = guildId(1115).intl;
  obj.header = intl.string(guildId(1115).t.zhfXbs);
  const intl2 = guildId(1115).intl;
  obj.subtitle = intl2.string(guildId(1115).t["SRM/e/"]);
  const obj2 = { children: null };
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl3 = guildId(1115).intl;
  obj3.text = intl3.string(guildId(1115).t.f293OM);
  obj3.onPress = onClose;
  const items1 = [closure_4(guildId(5144).Button, obj3), ];
  const obj4 = { text: null, variant: "destructive", onPress: null };
  const intl4 = guildId(1115).intl;
  obj4.text = intl4.string(guildId(1115).t.mqtdmQ);
  obj4.onPress = callback;
  items1[1] = closure_4(guildId(5144).Button, obj4);
  obj2.children = items1;
  obj.buttons = closure_6(closure_5, obj2);
  return closure_4(onClose(5707), obj);
};