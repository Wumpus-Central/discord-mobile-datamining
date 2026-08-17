// discord_app/modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef4656 from "../../../actions/native/AlertActionCreators.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    let obj = _modDef4656;
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