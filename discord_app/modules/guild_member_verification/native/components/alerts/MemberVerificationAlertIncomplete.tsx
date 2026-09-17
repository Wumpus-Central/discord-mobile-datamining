// === Module 7206: MemberVerificationAlertIncomplete ===

// Module 7206 (MemberVerificationAlertIncomplete)
import util from "util" /* 1115 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5615 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5657 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4462 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default function MemberVerificationAlertIncomplete(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  const items = [UserGuildJoinRequestStore];
  const items1 = [guildId];
  const stateFromStores = guildId(563).useStateFromStores(items, () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId), items1);
  const items2 = [guildId, onClose];
  const items3 = [guildId, onClose];
  const callback = noop.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
  }, items2);
  let name;
  const callback1 = noop.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj2 = { guildId, subtitleText: null, confirmText: null };
    const intl = util.intl;
    obj2.subtitleText = intl.string(util.t.fJwWVt);
    const intl2 = util.intl;
    obj2.confirmText = intl2.string(util.t.OQFlFD);
    const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj2);
  }, items3);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (null != name) {
    let intl2 = tmp2(1115).intl;
    let obj2 = { guildName: stateFromStores.name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.f5Jaw7, obj2);
  } else {
    let intl = tmp2(1115).intl;
    formatToPlainStringResult = intl.string(tmp2(1115).t["0sTyEb"]);
  }
  const obj3 = {};
  const obj = guildId(563);
  const merged1 = Object.assign(merged);
  obj3.icon = guildId(7207).ListViewIcon;
  obj3.header = formatToPlainStringResult;
  const obj4 = { children: null };
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl3 = tmp2(1115).intl;
  obj5.text = intl3.string(guildId(1115).t.h3aGmv);
  obj5.onPress = callback;
  const items4 = [closure_5(guildId(5062).Button, obj5), ];
  const obj6 = { text: null, variant: "destructive", onPress: null };
  const intl4 = tmp2(1115).intl;
  obj6.text = intl4.string(guildId(1115).t.OQFlFD);
  obj6.onPress = callback1;
  items4[1] = closure_5(guildId(5062).Button, obj6);
  obj4.children = items4;
  obj3.buttons = closure_7(closure_6, obj4);
  return closure_5(onClose(5625), obj3);
};