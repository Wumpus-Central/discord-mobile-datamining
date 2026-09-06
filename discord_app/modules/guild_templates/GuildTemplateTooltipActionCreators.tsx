// === Module 7323: GuildTemplateTooltipActionCreators ===

// Module 7323 (GuildTemplateTooltipActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import PermissionStore from "PermissionStore" /* 4199 */;

const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateTooltipActionCreators.tsx");

export default {
  checkGuildTemplateDirty(guildId) {
    closure_0 = guildId;
    return (async (arg0, value) => {
      if (guildId === 2) {
        guildId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          guildId = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              guildId = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let obj1 = { guildId };
              if (PermissionStore.canWithPartialContext(constants.MANAGE_GUILD, obj1)) {
                obj1 = guildId(c1[3]);
                c1 = 1;
                guildId = 1;
                const obj2 = { value: obj1.loadTemplatesForGuild(tmp14), done: false };
                return obj2;
              }
              tmp14 = guildId;
            }
          } else if (arg0 === 1) {
            guildId = 3;
            throw value;
          } else if (arg0 === 2) {
            guildId = 3;
            obj = { value, done: true };
            return obj;
          }
          guildId = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp7) {
          guildId = tmp;
          throw tmp7;
        }
      }
    })();
  },
  hideGuildTemplateDirtyTooltip(guildId) {
    const obj = { type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId };
    obj.dispatch(obj);
  },
  hideGuildTemplatePromotionTooltip() {
    DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
  }
};