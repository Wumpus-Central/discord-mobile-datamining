// discord_app/modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let obj = {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    const obj = actions_AlertActionCreatorsDefault;
    const obj2 = {
      importer() {
        const promise = asyncRequire(9901, dependencyMap.paths);
        return promise.then((result) => {
          let closure_0 = result.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return <closure_0 guildId={guildId} />;
          };
        });
      },
      isDismissable: false,
    };
    obj.openLazy(obj2);
  },
};
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default obj;
