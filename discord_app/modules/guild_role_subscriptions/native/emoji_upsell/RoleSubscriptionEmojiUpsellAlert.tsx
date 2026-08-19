// === Module 9352: RoleSubscriptionEmojiUpsellAlert ===

// Module 9352 (RoleSubscriptionEmojiUpsellAlert)
import noop from "noop" /* 19 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx");

export default function RoleSubscriptionEmojiUpsellAlert(arg0) {
  ({ guildId: require, onClose } = arg0);
  let stateFromStores;
  function handleConfirm() {
    const result = onClose(stateFromStores[8]).transitionToGuildSync(closure_0, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
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
    const intl = require(stateFromStores[5]).intl;
    obj[1] = intl.string(require(stateFromStores[5]).t.cBjkcx);
    const intl2 = require(stateFromStores[5]).intl;
    obj[2] = intl2.formatToPlainString(require(stateFromStores[5]).t["h0u/Hi"], { serverName: name });
    return obj;
  }, items1);
  obj = { cancelText: null, onClose: null, renderConfirmButton: null, children: null };
  let intl = require(tmp2[5]).intl;
  obj[0] = intl.string(require(stateFromStores[5]).t.cpT0Cq);
  obj[1] = onClose;
  obj[2] = function renderConfirmButton() {
    const obj = { onPress: handleConfirm, text: null };
    const intl = require(stateFromStores[5]).intl;
    obj[1] = intl.string(require(stateFromStores[5]).t.p8FG1D);
    return jsx(require(stateFromStores[10]).CreatorRevenueButton, { onPress: handleConfirm, text: null });
  };
  obj[3] = jsx(require(stateFromStores[11]).PremiumUpsellItem, { alertWidth: diff, upsellItem: memo });
  return jsx(onClose(stateFromStores[9]), { cancelText: null, onClose: null, renderConfirmButton: null, children: null });
};