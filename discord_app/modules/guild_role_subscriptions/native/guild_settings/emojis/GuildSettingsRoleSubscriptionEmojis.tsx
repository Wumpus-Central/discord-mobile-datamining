// === Module 17974: GuildSettingsRoleSubscriptionEmojis ===

// Module 17974 (GuildSettingsRoleSubscriptionEmojis)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5643 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 17929 */;
import getMaxRoleSubscriptionEmojiSlotsDefault from "getMaxRoleSubscriptionEmojiSlots" /* 17975 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import module_12 from "module_12" /* 12 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  let tmp = guildId;
  let obj = guildId(17921);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { maxSlots: stateFromStores(17975)(stateFromStores) };
    const H9Jxp6 = tmp(1126).t.H9Jxp6;
    formatToPlainString(H9Jxp6, obj3);
    return jsx(tmp(17733).ManageEmojisModal, {
      guild: stateFromStores,
      headerDescription: formatToPlainString(H9Jxp6, obj3),
      computeEmojiItems,
      onSelectRolesForEmoji(emoji) {
          let rejectResult;
          if (null == stateFromStores) {
            const _Error = Error;
            const self3 = this;
            const self4 = this;
            let error = new Error("guild cannot be null");
            rejectResult = reject(error);
          } else {
            const tmp = globalThis;
            const self = this;
            const self2 = this;
            rejectResult = new Promise((arg0, arg1) => {
              emoji = arg0;
              let closure_1 = arg1;
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              let obj = {
                guildId: stateFromStores.id,
                emoji,
                onSave(arg0) {
                  const obj = closure_2_1(closure_2_2[10]);
                  obj.hideActionSheet();
                  closure_0(arg0);
                },
                onCancel() {
                  const obj = closure_2_1(closure_2_2[10]);
                  obj.hideActionSheet();
                  const error = new Error("User cancelled");
                  closure_1(error);
                }
              };
              const tmp2 = asyncRequire(17976, dependencyMap.paths);
              openLazy(tmp2, "role-subscription-emoji-" + stateFromStores.id, obj);
            });
          }
          return rejectResult;
        },
      disabled: roleSubscriptionSettingsDisabled
    });
  }
}
const jsx = Fragment.jsx;
const computeEmojiItems = module_12.memoize((arr, arg1) => {
  let id;
  _require = arg1;
  const found = arr.filter((item) => {
    const obj = RoleSubscriptionEmojiUtils;
    return obj.isRoleSubscriptionEmoji(item, id.id);
  });
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(require("GuildSettingsModalEmoji").computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp5 = getMaxRoleSubscriptionEmojiSlotsDefault(arg1);
    const computeSectionItem = require("GuildSettingsModalEmoji").computeSectionItem;
    require("GuildSettingsModalEmoji");
    const intl = require("intl").intl;
    const items = [computeSectionItem(intl.string(require("intl").t.sMOuuS), reversed.length, tmp5)];
    HermesBuiltin.arraySpread(items, reversed, 1);
    return items;
  }
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  guildId = guildId.guildId;
  if (cResult[0] !== guildId) {
    const tmp6 = <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} />;
    cResult[0] = guildId;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === guildId) {
    let tmp7;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = jsx(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
  cResult[2] = guildId;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((guildId) => {
  guildId = guildId.guildId;
  GuildSettingsRoleSubscriptionContainerDefault;
  return <tmp guildId={guildId}>{null}</tmp>;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx");

export default tmp3;