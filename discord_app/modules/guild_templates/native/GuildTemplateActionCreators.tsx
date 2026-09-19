// === Module 12044: guild_templates/GuildTemplateActionCreators ===

// Module 12044 (guild_templates/GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import GuildTemplateActionCreatorsDefault from "GuildTemplateActionCreators" /* 7564 */;

require = fn;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const GuildTemplateActionCreators = Object.assign(GuildTemplateActionCreatorsDefault);
obj.showModal = function showModal(code) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12045, dependencyMap.paths), { code }, GUILD_TEMPLATE_MODAL_KEY);
  const obj2 = { code };
  DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_SHOW", code });
  const obj4 = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  const guildTemplate = GuildTemplateActionCreatorsDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  ModalActionCreatorsDefault.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;