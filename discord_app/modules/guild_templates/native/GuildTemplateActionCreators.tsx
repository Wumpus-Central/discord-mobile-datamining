// discord_app/modules/guild_templates/native/GuildTemplateActionCreators.tsx
import merged from "map";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = require("../../../actions/ModalActionCreators.tsx");
  obj = { code };
  obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11106, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  require("../../../Dispatcher.tsx").dispatch(obj);
  const obj3 = require("../../../Dispatcher.tsx");
  const guildTemplate = require("../GuildTemplateActionCreators.tsx").resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  require("../../../actions/ModalActionCreators.tsx").popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = require("../../../actions/ModalActionCreators.tsx");
  require("../../../Dispatcher.tsx").dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;