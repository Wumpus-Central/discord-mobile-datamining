// discord_app/modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx
import c from "../../../../../../_runtime/00576_c.js";
import asyncRequireImpl from "../../../../../../_runtime/02000_asyncRequireImpl.js";
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
  const roleSubscriptionSettingsDisabled = guildId(18416).useRoleSubscriptionSettingsDisabled();
  let obj = guildId(18416);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1126).intl;
    const obj3 = { maxSlots: stateFromStores(18470)(stateFromStores) };
    const obj4 = {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(1126).t.H9Jxp6, obj3),
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
            obj.openLazy(
              asyncRequireImpl(18471, dependencyMap.paths),
              "role-subscription-emoji-" + stateFromStores.id,
              {
                guildId: stateFromStores.id,
                emoji,
                onSave(arg0) {
                  stateFromStores(5055).hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  stateFromStores(5055).hideActionSheet();
                  const error = new Error("User cancelled");
                  closure_1(error);
                },
              },
            );
          });
        }
        return rejectResult;
      },
      disabled: roleSubscriptionSettingsDisabled,
    };
    return jsx(tmp(18226).ManageEmojisModal, {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(1126).t.H9Jxp6, obj3),
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
            obj.openLazy(
              asyncRequireImpl(18471, dependencyMap.paths),
              "role-subscription-emoji-" + stateFromStores.id,
              {
                guildId: stateFromStores.id,
                emoji,
                onSave(arg0) {
                  stateFromStores(5055).hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  stateFromStores(5055).hideActionSheet();
                  const error = new Error("User cancelled");
                  closure_1(error);
                },
              },
            );
          });
        }
        return rejectResult;
      },
      disabled: roleSubscriptionSettingsDisabled,
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsRoleSubscriptionEmojis(guildId) {
      const cResult = c.c(5);
      guildId = guildId.guildId;
      if (cResult[0] !== guildId) {
        const obj2 = { guildId };
        const tmp6 = <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} />;
        cResult[0] = guildId;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === guildId) {
        if (cResult[3] === tmp3) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = jsx(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
      cResult[2] = guildId;
      cResult[3] = tmp3;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : function GuildSettingsRoleSubscriptionEmojis(guildId) {
      guildId = guildId.guildId;
      const obj = { guildId, children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} /> };
      return jsx(GuildSettingsRoleSubscriptionContainerDefault, {
        guildId,
        children: <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} />,
      });
    };
