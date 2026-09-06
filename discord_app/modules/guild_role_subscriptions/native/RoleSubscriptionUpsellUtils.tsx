// discord_app/modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    let obj = {
      importer() {
        return asyncRequireImpl(10299, dependencyMap.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.guildId = guildId;
            return <closure_0 />;
          };
        });
      },
    };
    obj.openLazy(obj);
  },
};
