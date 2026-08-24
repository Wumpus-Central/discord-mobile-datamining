// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../UserGuildJoinRequestStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx");

export default function MemberVerificationAlertIncomplete(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.create(null));
  let obj = guildId(647);
  const items = [closure_4];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getJoinRequestGuild(guildId), items1);
  const items2 = [guildId, onClose];
  const items3 = [guildId, onClose];
  const callback = React.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const result = guildId(closure_1_2[4]).openMemberVerificationModal(guildId);
  }, items2);
  let name;
  const callback1 = React.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    let obj = guildId(closure_1_2[5]);
    obj = { guildId, subtitleText: null, confirmText: null };
    const intl = guildId(closure_1_2[6]).intl;
    obj[1] = intl.string(guildId(closure_1_2[6]).t.fJwWVt);
    const intl2 = guildId(closure_1_2[6]).intl;
    obj[2] = intl2.string(guildId(closure_1_2[6]).t.OQFlFD);
    const result = obj.openMemberVerificationCancelPendingAlert(obj);
  }, items3);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (null != name) {
    let intl2 = tmp2(1236).intl;
    obj = { guildName: null };
    obj[0] = stateFromStores.name;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.f5Jaw7, obj);
  } else {
    let intl = tmp2(1236).intl;
    formatToPlainStringResult = intl.string(tmp2(1236).t["0sTyEb"]);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = guildId(8583).ListViewIcon;
  obj.header = formatToPlainStringResult;
  obj1 = { children: null };
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const intl3 = tmp2(1236).intl;
  obj2[1] = intl3.string(guildId(1236).t.h3aGmv);
  obj2[2] = callback;
  const items4 = [callback(guildId(4750).Button, obj2), ];
  const obj3 = { text: null, variant: "destructive", onPress: null };
  const intl4 = tmp2(1236).intl;
  obj3[0] = intl4.string(guildId(1236).t.OQFlFD);
  obj3[2] = callback1;
  items4[1] = callback(guildId(4750).Button, obj3);
  obj1[0] = items4;
  obj.buttons = callback2(closure_6, obj1);
  return callback(onClose(8572), obj);
};