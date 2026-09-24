// === Module 7653: GuildTemplateTooltipActionCreators ===

// Module 7653 (GuildTemplateTooltipActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import PermissionStore from "PermissionStore" /* 4464 */;

const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateTooltipActionCreators.tsx");

export default {
  checkGuildTemplateDirty(guildId) {
    closure_0 = guildId;
    return (async () => {
      if (guildId === 2) {
        guildId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj5 = { guildId };
              if (PermissionStore.canWithPartialContext(constants.MANAGE_GUILD, obj5)) {
                c1 = 1;
                guildId = 1;
                const obj6 = { value: guildId(c1[3]).loadTemplatesForGuild(tmp14), done: false };
                return obj6;
              }
              tmp14 = guildId;
            }
          } else if (arg0 === 1) {
            guildId = 3;
            throw value;
          } else if (arg0 === 2) {
            guildId = 3;
            const obj = { value, done: true };
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
    DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId });
  },
  hideGuildTemplatePromotionTooltip() {
    DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
  }
};