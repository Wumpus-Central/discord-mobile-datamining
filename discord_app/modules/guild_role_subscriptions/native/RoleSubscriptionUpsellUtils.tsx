// === Module 9859: RoleSubscriptionUpsellUtils ===

// Module 9859 (RoleSubscriptionUpsellUtils)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5909 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    const obj2 = { importer: null, isDismissable: false };
    importDefault = asyncGeneratorStep(async () => {
      await tmp2(paths[5])(paths[4], paths.paths);
      closure_128_0 = value.default;
      return (arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        return <closure_1_0 />;
      };
    });
    obj2.importer = function importer() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    actions_AlertActionCreatorsDefault.openLazy(obj2);
  }
};