// === Module 17779: GuildSettingsRoleSubscriptionEmojisInner ===

// Module 17779 (GuildSettingsRoleSubscriptionEmojisInner)
import noopAll from "noop" /* 19 */;
import ApplicationRejectedNoticeDefault from "ApplicationRejectedNotice" /* 17734 */;
import getMaxRoleSubscriptionEmojiSlotsDefault from "getMaxRoleSubscriptionEmojiSlots" /* 17780 */;
import closure_3 from "createGuildRecordFromRust" /* 1979 */;
import { jsx } from "jsxProd" /* 21 */;
import importDefaultResult from "apply" /* 12 */;

const require = arg1;
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  let obj = guildId(17724);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [closure_3];
  stateFromStores = guildId(504).useStateFromStores(items, () => closure_1_3.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1114).intl;
    obj = { maxSlots: null };
    obj[0] = stateFromStores(17780)(stateFromStores);
    obj = { guild: null, headerDescription: null, computeEmojiItems: null, onSelectRolesForEmoji: null, disabled: null };
    obj[0] = stateFromStores;
    obj[1] = intl.formatToPlainString(tmp(1114).t.H9Jxp6, obj);
    obj[2] = closure_5;
    obj[3] = function onSelectRolesForEmoji(arg0) {
      closure_0 = arg0;
      if (null == stateFromStores) {
        const _Error = Error;
        error = new Error("guild cannot be null");
        let rejectResult = Promise.reject(error);
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          let obj = stateFromStores(closure_2_2[10]);
          obj = {
            guildId: closure_1_1.id,
            emoji: closure_0,
            onSave(arg0) {
              callback2(closure_1_2[10]).hideActionSheet();
              callback(arg0);
            },
            onCancel() {
              callback2(closure_1_2[10]).hideActionSheet();
              error = new Error("User cancelled");
              callback2(error);
            }
          };
          obj.openLazy(guildId(closure_2_2[12])(closure_2_2[11], closure_2_2.paths), "role-subscription-emoji-" + closure_1_1.id, obj);
        });
      }
      return rejectResult;
    };
    obj[4] = roleSubscriptionSettingsDisabled;
    return jsx(tmp(17561).ManageEmojisModal, { guild: null, headerDescription: null, computeEmojiItems: null, onSelectRolesForEmoji: null, disabled: null });
  }
  const obj2 = guildId(504);
}
noopAll;
let closure_5 = importDefaultResult.memoize((arr) => {
  const _require = arg1;
  const found = arr.filter((roles) => lib(closure_1_2[4]).isRoleSubscriptionEmoji(roles, lib.id));
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(_require(17561).computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp4 = getMaxRoleSubscriptionEmojiSlotsDefault(arg1);
    const intl = _require(1114).intl;
    const items = [_require(17561).computeSectionItem(intl.string(_require(1114).t.sMOuuS), reversed.length, tmp4)];
    HermesBuiltin.arraySpread(reversed, 1);
    return items;
  }
});
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx");

export default function GuildSettingsRoleSubscriptionEmojis(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> };
  return jsx(ApplicationRejectedNoticeDefault, { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> });
};