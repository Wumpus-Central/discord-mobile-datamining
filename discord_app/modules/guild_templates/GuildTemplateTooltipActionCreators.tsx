// === Module 7324: ? ===

// Module 7324
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "getUncachedChannelPermissions" /* 4024 */;
import { Permissions } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/guild_templates/GuildTemplateTooltipActionCreators.tsx");

export default {
  checkGuildTemplateDirty(closure_0) {
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = { guildId: null };
              obj1[0] = v0;
              if (closure_1_3.canWithPartialContext(closure_1_4.MANAGE_GUILD, obj1)) {
                obj1 = v0(table[3]);
                table = 1;
                v0 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj1.loadTemplatesForGuild(tmp15);
                return obj2;
              }
              tmp15 = v0;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp7) {
          v0 = tmp;
          throw tmp7;
        }
      }
    })();
  },
  hideGuildTemplateDirtyTooltip(guildId) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId };
    obj.dispatch(obj);
  },
  hideGuildTemplatePromotionTooltip() {
    dispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
  }
};