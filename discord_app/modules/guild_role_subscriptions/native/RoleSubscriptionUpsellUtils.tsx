// discord_app/modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef4656 from "../../../actions/native/AlertActionCreators.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    let obj = {
      importer() {
        return guildId(dependencyMap[4])(dependencyMap[3], dependencyMap.paths).then((result) => {
          closure_0 = result.default;
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