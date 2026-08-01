// === Module 16642: GuildSettingsRoleSubscriptionEmojisInner ===

// Module 16642 (GuildSettingsRoleSubscriptionEmojisInner)
import "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { jsx } from "jsxProd";
import importDefaultResult from "asyncRequireImpl";

const require = arg1;
function GuildSettingsRoleSubscriptionEmojisInner(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  let obj = guildId(16587);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [createGuildRecordFromRust];
  stateFromStores = guildId(589).useStateFromStores(items, () => outer1_3.getGuild(guildId));
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp(1236).intl;
    obj = { maxSlots: null };
    obj[0] = stateFromStores(16643)(stateFromStores);
    obj = { guild: null, headerDescription: null, computeEmojiItems: null, onSelectRolesForEmoji: null, disabled: null };
    obj[0] = stateFromStores;
    obj[1] = intl.formatToPlainString(tmp(1236).t.H9Jxp6, obj);
    obj[2] = closure_5;
    obj[3] = function onSelectRolesForEmoji(arg0) {
      let closure_0 = arg0;
      if (null == stateFromStores) {
        const _Error = Error;
        let error = new Error("guild cannot be null");
        let rejectResult = Promise.reject(error);
      } else {
        rejectResult = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let obj = stateFromStores(outer2_2[10]);
          obj = {
            guildId: outer1_1.id,
            emoji: closure_0,
            onSave(arg0) {
              callback2(outer1_2[10]).hideActionSheet();
              callback(arg0);
            },
            onCancel() {
              callback2(outer1_2[10]).hideActionSheet();
              const error = new Error("User cancelled");
              callback2(error);
            }
          };
          obj.openLazy(guildId(outer2_2[12])(outer2_2[11], outer2_2.paths), "role-subscription-emoji-" + outer1_1.id, obj);
        });
      }
      return rejectResult;
    };
    obj[4] = roleSubscriptionSettingsDisabled;
    return jsx(tmp(16418).ManageEmojisModal, { guild: null, headerDescription: null, computeEmojiItems: null, onSelectRolesForEmoji: null, disabled: null });
  }
  const obj2 = guildId(589);
}
let closure_5 = require("asyncRequireImpl").memoize((arr) => {
  const _require = arg1;
  const found = arr.filter((roles) => lib(outer1_2[4]).isRoleSubscriptionEmoji(roles, lib.id));
  if (0 === found.length) {
    return [];
  } else {
    const mapped = found.map(_require(16418).computeEmojiItem);
    const reversed = mapped.reverse();
    const tmp4 = importDefault(16643)(arg1);
    const intl = _require(1236).intl;
    const items = [_require(16418).computeSectionItem(intl.string(_require(1236).t.sMOuuS), reversed.length, tmp4)];
    HermesBuiltin.arraySpread(reversed, 1);
    return items;
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx");

export default function GuildSettingsRoleSubscriptionEmojis(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: null };
  obj[1] = <GuildSettingsRoleSubscriptionEmojisInner guildId={guildId} />;
  return jsx(importDefault(16597), { guildId, children: null });
};