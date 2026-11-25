// === Module 20201: GuildSettingsRoleSubscriptionEmojis ===

// Module 20201 (GuildSettingsRoleSubscriptionEmojis)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 4966 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 20159 */;
import getMaxRoleSubscriptionEmojiSlotsDefault from "getMaxRoleSubscriptionEmojiSlots" /* 20202 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;
import apply from "apply" /* 12 */;

require = fn;
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  const roleSubscriptionSettingsDisabled = guildId(20151).useRoleSubscriptionSettingsDisabled();
  let obj = guildId(20151);
  items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1112).intl;
    const obj3 = { maxSlots: stateFromStores(20202)(stateFromStores) };
    const obj4 = {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(1112).t.H9Jxp6, obj3),
      computeEmojiItems,
      onSelectRolesForEmoji(dependencyMap) {
          if (null == stateFromStores) {
            const _Error = Error;
            let error = new Error("guild cannot be null");
            let rejectResult = Promise.reject(error);
          } else {
            rejectResult = new Promise((arg0, arg1) => {
              dependencyMap = arg0;
              closure_1 = arg1;
              const obj = ActionSheetActionCreatorsDefault;
              obj.openLazy(asyncRequireImpl(20203, dependencyMap.paths), "role-subscription-emoji-" + stateFromStores.id, {
                guildId: stateFromStores.id,
                emoji: dependencyMap,
                onSave(arg0) {
                  stateFromStores(5226).hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  stateFromStores(5226).hideActionSheet();
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
    return jsx(tmp(19920).ManageEmojisModal, {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(1112).t.H9Jxp6, obj3),
      computeEmojiItems,
      onSelectRolesForEmoji(dependencyMap) {
          if (null == stateFromStores) {
            const _Error = Error;
            let error = new Error("guild cannot be null");
            let rejectResult = Promise.reject(error);
          } else {
            rejectResult = new Promise((arg0, arg1) => {
              dependencyMap = arg0;
              closure_1 = arg1;
              const obj = ActionSheetActionCreatorsDefault;
              obj.openLazy(asyncRequireImpl(20203, dependencyMap.paths), "role-subscription-emoji-" + stateFromStores.id, {
                guildId: stateFromStores.id,
                emoji: dependencyMap,
                onSave(arg0) {
                  stateFromStores(5226).hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  stateFromStores(5226).hideActionSheet();
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
    items = [require("GuildSettingsModalEmoji").computeSectionItem(intl.string(require("util").t.sMOuuS), reversed.length, tmp4)];
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