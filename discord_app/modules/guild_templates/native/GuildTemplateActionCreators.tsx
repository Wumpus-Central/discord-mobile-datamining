// discord_app/modules/guild_templates/native/GuildTemplateActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildTemplateActionCreatorsDefault from "../GuildTemplateActionCreators.tsx";

require = fn;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const GuildTemplateActionCreators = Object.assign(GuildTemplateActionCreatorsDefault);
obj.showModal = function showModal(code) {
  let obj = { code };
  obj.pushLazy(asyncRequireImpl(11793, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  DispatcherDefault.dispatch(obj);
  const guildTemplate = GuildTemplateActionCreatorsDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  ModalActionCreatorsDefault.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
