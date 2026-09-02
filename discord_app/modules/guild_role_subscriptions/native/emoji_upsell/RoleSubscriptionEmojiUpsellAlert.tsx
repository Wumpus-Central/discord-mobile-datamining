// === Module 9150: RoleSubscriptionEmojiUpsellAlert ===

// Module 9150 (RoleSubscriptionEmojiUpsellAlert)
import closure_3 from "noop" /* 19 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import { StaticChannelRoute } from "set" /* 1393 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx");

export default function RoleSubscriptionEmojiUpsellAlert(arg0) {
  ({ guildId: require, onClose } = arg0);
  let stateFromStores;
  function handleConfirm() {
    const result = onClose(stateFromStores[8]).transitionToGuildSync(closure_0, undefined, closure_1_5.ROLE_SUBSCRIPTIONS);
    if (onClose != null) {
      onClose();
    }
  }
  const size = onClose(stateFromStores[6])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  let obj = require(stateFromStores[7]);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = closure_1_4.getGuild(tmp);
    }
    return guild;
  });
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items1 = [name];
  const memo = handleConfirm.useMemo(() => {
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    const obj = { image: onClose(stateFromStores[4]), title: null, description: null };
    const intl = closure_1_0(stateFromStores[5]).intl;
    obj[1] = intl.string(closure_1_0(stateFromStores[5]).t.cBjkcx);
    const intl2 = closure_1_0(stateFromStores[5]).intl;
    obj[2] = intl2.formatToPlainString(closure_1_0(stateFromStores[5]).t["h0u/Hi"], { serverName: name });
    return obj;
  }, items1);
  obj = { cancelText: null, onClose: null, renderConfirmButton: null, children: null };
  let intl = tmp4(tmp2[5]).intl;
  obj[0] = intl.string(require(stateFromStores[5]).t.cpT0Cq);
  obj[1] = onClose;
  obj[2] = function renderConfirmButton() {
    const obj = { onPress: handleConfirm, text: null };
    const intl = closure_1_0(stateFromStores[5]).intl;
    obj[1] = intl.string(closure_1_0(stateFromStores[5]).t.p8FG1D);
    return closure_1_6(closure_1_0(stateFromStores[10]).CreatorRevenueButton, obj);
  };
  obj[3] = jsx(require(stateFromStores[11]).PremiumUpsellItem, { alertWidth: diff, upsellItem: memo });
  return jsx(onClose(stateFromStores[9]), { cancelText: null, onClose: null, renderConfirmButton: null, children: null });
};