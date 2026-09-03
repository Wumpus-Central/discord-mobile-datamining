// === Module 9153: ? ===

// Module 9153
import noopAll from "noop" /* 19 */;
import _modDef4859 from "module_4859" /* 4859 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    let obj = _modDef4859;
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