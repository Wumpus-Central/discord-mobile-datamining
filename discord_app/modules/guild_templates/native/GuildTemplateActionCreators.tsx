// === Module 11475: guild_templates/GuildTemplateActionCreators ===

// Module 11475 (guild_templates/GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import GuildTemplateActionCreatorsDefault from "GuildTemplateActionCreators" /* 6938 */;

require = fn;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const GuildTemplateActionCreators = Object.assign(GuildTemplateActionCreatorsDefault);
obj.showModal = function showModal(code) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11476, dependencyMap.paths), { code }, GUILD_TEMPLATE_MODAL_KEY);
  const obj2 = { code };
  DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_SHOW", code });
  if (flag) {
    const guildTemplate = GuildTemplateActionCreatorsDefault.resolveGuildTemplate(code);
    const tmpResult = GuildTemplateActionCreatorsDefault;
  }
  const obj4 = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
};
obj.hideModal = function hideModal() {
  ModalActionCreatorsDefault.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;