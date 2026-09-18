// === Module 18148: GuildSettingsRoleSubscriptionEmojis ===

// Module 18148 (GuildSettingsRoleSubscriptionEmojis)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5634 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 18103 */;
import getMaxRoleSubscriptionEmojiSlotsDefault from "getMaxRoleSubscriptionEmojiSlots" /* 18149 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;
import apply from "module_12" /* 12 */;

require = fn;
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  const roleSubscriptionSettingsDisabled = guildId(18093).useRoleSubscriptionSettingsDisabled();
  let obj = guildId(18093);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1115).intl;
    const obj3 = { maxSlots: stateFromStores(18149)(stateFromStores) };
    const obj4 = {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(1115).t.H9Jxp6, obj3),
      computeEmojiItems,
      onSelectRolesForEmoji(emoji) {
          if (null == stateFromStores) {
            const _Error = Error;
            let error = new Error("guild cannot be null");
            let rejectResult = Promise.reject(error);
          } else {
            rejectResult = new Promise((arg0, arg1) => {
              emoji = arg0;
              closure_1 = arg1;
              const obj = ActionSheetActionCreatorsDefault;
              obj.openLazy(asyncRequireImpl(18150, dependencyMap.paths), "role-subscription-emoji-" + stateFromStores.id, {
                guildId: stateFromStores.id,
                emoji,
                onSave(arg0) {
                  stateFromStores(4689).hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  stateFromStores(4689).hideActionSheet();
                  const error = new Error("User cancelled");
                  closure_1(error);
                }
              });
            });
          }
          return rejectResult;
        },
      disabled: roleSubscriptionSettingsDisabled
    };
    return jsx(tmp(17905).ManageEmojisModal, {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(1115).t.H9Jxp6, obj3),
      computeEmojiItems,
      onSelectRolesForEmoji(emoji) {
          if (null == stateFromStores) {
            const _Error = Error;
            let error = new Error("guild cannot be null");
            let rejectResult = Promise.reject(error);
          } else {
            rejectResult = new Promise((arg0, arg1) => {
              emoji = arg0;
              closure_1 = arg1;
              const obj = ActionSheetActionCreatorsDefault;
              obj.openLazy(asyncRequireImpl(18150, dependencyMap.paths), "role-subscription-emoji-" + stateFromStores.id, {
                guildId: stateFromStores.id,
                emoji,
                onSave(arg0) {
                  stateFromStores(4689).hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  stateFromStores(4689).hideActionSheet();
                  const error = new Error("User cancelled");
                  closure_1(error);
                }
              });
            });
          }
          return rejectResult;
        },
      disabled: roleSubscriptionSettingsDisabled
    });
  }
  const obj2 = guildId(504);
}
const jsx = fn(21).jsx;
const computeEmojiItems = apply.memoize((arr, arg1) => {
  _require = arg1;
  const found = arr.filter((item) => RoleSubscriptionEmojiUtils.isRoleSubscriptionEmoji(item, id.id));
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(require("GuildSettingsModalEmoji").computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp4 = getMaxRoleSubscriptionEmojiSlotsDefault(arg1);
    const intl = require("util").intl;
    const items = [require("GuildSettingsModalEmoji").computeSectionItem(intl.string(require("util").t.sMOuuS), reversed.length, tmp4)];
    HermesBuiltin.arraySpread(reversed, 1);
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx");

export default function GuildSettingsRoleSubscriptionEmojis(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> };
  return jsx(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> });
};