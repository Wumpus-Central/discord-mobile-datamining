// discord_app/modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RoleSubscriptionEmojiUtils from "../../../RoleSubscriptionEmojiUtils.tsx";
import GuildSettingsRoleSubscriptionContainerDefault from "../GuildSettingsRoleSubscriptionContainer.tsx";
import getMaxRoleSubscriptionEmojiSlotsDefault from "../../../getMaxRoleSubscriptionEmojiSlots.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import apply from "../../../../../../_runtime/metro/00012__.js";

require = fn;
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(17724);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1114).intl;
    obj = { maxSlots: stateFromStores(17780)(stateFromStores) };
    obj = {
      guild: stateFromStores,
      headerDescription: null,
      computeEmojiItems: null,
      onSelectRolesForEmoji: null,
      disabled: null,
    };
    obj.headerDescription = intl.formatToPlainString(tmp(1114).t.H9Jxp6, obj);
    obj.computeEmojiItems = computeEmojiItems;
    obj.onSelectRolesForEmoji = function onSelectRolesForEmoji(emoji) {
      if (null == stateFromStores) {
        const _Error = Error;
        let error = new Error("guild cannot be null");
        let rejectResult = Promise.reject(error);
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          emoji = arg0;
          closure_1 = arg1;
          const obj = {
            guildId: stateFromStores.id,
            emoji,
            onSave(arg0) {
              stateFromStores(4527).hideActionSheet();
              closure_0(arg0);
            },
            onCancel() {
              stateFromStores(4527).hideActionSheet();
              const error = new Error("User cancelled");
              closure_1(error);
            },
          };
          obj.openLazy(
            asyncRequireImpl(17781, dependencyMap.paths),
            "role-subscription-emoji-" + stateFromStores.id,
            obj,
          );
        });
      }
      return rejectResult;
    };
    obj.disabled = roleSubscriptionSettingsDisabled;
    return jsx(tmp(17561).ManageEmojisModal, {
      guild: stateFromStores,
      headerDescription: null,
      computeEmojiItems: null,
      onSelectRolesForEmoji: null,
      disabled: null,
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
    const items = [
      require("GuildSettingsModalEmoji").computeSectionItem(
        intl.string(require("util").t.sMOuuS),
        reversed.length,
        tmp4,
      ),
    ];
    HermesBuiltin.arraySpread(reversed, 1);
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx",
);

export default function GuildSettingsRoleSubscriptionEmojis(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> };
  return jsx(GuildSettingsRoleSubscriptionContainerDefault, {
    guildId,
    children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} />,
  });
}
