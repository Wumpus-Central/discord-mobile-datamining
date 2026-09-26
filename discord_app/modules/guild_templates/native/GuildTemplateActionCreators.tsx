// discord_app/modules/guild_templates/native/GuildTemplateActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildTemplateActionCreatorsDefault from "../GuildTemplateActionCreators.tsx";

require = fn;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const GuildTemplateActionCreators = Object.assign(GuildTemplateActionCreatorsDefault);
obj.showModal = function showModal(code) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11271, dependencyMap.paths), { code }, GUILD_TEMPLATE_MODAL_KEY);
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
