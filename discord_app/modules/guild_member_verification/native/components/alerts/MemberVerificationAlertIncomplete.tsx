// === Module 7092: MemberVerificationAlertIncomplete ===

// Module 7092 (MemberVerificationAlertIncomplete)
import util from "util" /* 1114 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5527 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5569 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4382 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default function MemberVerificationAlertIncomplete(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, onClose: 0 }));
  let obj = guildId(563);
  const items = [UserGuildJoinRequestStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId), items1);
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
    const obj = { guildId, subtitleText: null, confirmText: null };
    const intl = util.intl;
    obj.subtitleText = intl.string(util.t.fJwWVt);
    const intl2 = util.intl;
    obj.confirmText = intl2.string(util.t.OQFlFD);
    const result = obj.openMemberVerificationCancelPendingAlert(obj);
  }, items3);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (null != name) {
    let intl2 = tmp2(1114).intl;
    obj = { guildName: stateFromStores.name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.f5Jaw7, obj);
  } else {
    let intl = tmp2(1114).intl;
    formatToPlainStringResult = intl.string(tmp2(1114).t["0sTyEb"]);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = guildId(7093).ListViewIcon;
  obj.header = formatToPlainStringResult;
  const obj1 = { children: null };
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj2.text = intl3.string(guildId(1114).t.h3aGmv);
  obj2.onPress = callback;
  const items4 = [closure_5(guildId(4975).Button, obj2), ];
  const obj3 = { text: null, variant: "destructive", onPress: null };
  const intl4 = tmp2(1114).intl;
  obj3.text = intl4.string(guildId(1114).t.OQFlFD);
  obj3.onPress = callback1;
  items4[1] = closure_5(guildId(4975).Button, obj3);
  obj1.children = items4;
  obj.buttons = closure_7(closure_6, obj1);
  return closure_5(onClose(5537), obj);
};