// === Module 9395: RoleSubscriptionUpsellUtils ===

// Module 9395 (RoleSubscriptionUpsellUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    actions_AlertActionCreatorsDefault.openLazy({
      importer() {
        return asyncRequireImpl(9396, dependencyMap.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.guildId = guildId;
            return <closure_0 />;
          };
        });
      },
      isDismissable: false
    });
  }
};