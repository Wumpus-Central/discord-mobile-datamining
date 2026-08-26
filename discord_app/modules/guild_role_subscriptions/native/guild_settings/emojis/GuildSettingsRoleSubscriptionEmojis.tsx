// discord_app/modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ApplicationRejectedNoticeDefault from "../GuildSettingsRoleSubscriptionContainer.tsx";
import getMaxRoleSubscriptionEmojiSlotsDefault from "../../../getMaxRoleSubscriptionEmojiSlots.tsx";
import closure_3 from "../../../../../stores/GuildStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../../../../_runtime/00012_apply.js";

const require = arg1;
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  let obj = guildId(17155);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [closure_3];
  stateFromStores = guildId(589).useStateFromStores(items, () => closure_1_3.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1236).intl;
    obj = { maxSlots: null };
    obj[0] = stateFromStores(17211)(stateFromStores);
    obj = { guild: null, headerDescription: null, computeEmojiItems: null, onSelectRolesForEmoji: null, disabled: null };
    obj[0] = stateFromStores;
    obj[1] = intl.formatToPlainString(tmp(1236).t.H9Jxp6, obj);
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
    return jsx(tmp(16992).ManageEmojisModal, { guild: null, headerDescription: null, computeEmojiItems: null, onSelectRolesForEmoji: null, disabled: null });
  }
  const obj2 = guildId(589);
}
noopAll;
let closure_5 = importDefaultResult.memoize((arr) => {
  const _require = arg1;
  const found = arr.filter((roles) => lib(closure_1_2[4]).isRoleSubscriptionEmoji(roles, lib.id));
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(require("../../../../guild_settings/native/GuildSettingsModalEmoji.tsx").computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp4 = getMaxRoleSubscriptionEmojiSlotsDefault(arg1);
    const intl = require("../../../../../intl/index.native.tsx").intl;
    const items = [require("../../../../guild_settings/native/GuildSettingsModalEmoji.tsx").computeSectionItem(intl.string(require("../../../../../intl/index.native.tsx").t.sMOuuS), reversed.length, tmp4)];
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