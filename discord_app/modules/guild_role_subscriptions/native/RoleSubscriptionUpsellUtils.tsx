// === Module 10298: ? ===

// Module 10298
import noopAll from "noop" /* 19 */;
import _modDef4905 from "module_4905" /* 4905 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    let obj = _modDef4905;
    obj = {
      importer() {
        return guildId(closure_1_2[4])(closure_1_2[3], closure_1_2.paths).then((arg0) => {
          closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.guildId = closure_0;
            return closure_2_3(closure_0, obj);
          };
        });
      }
    };
    obj.openLazy(obj);
  }
};