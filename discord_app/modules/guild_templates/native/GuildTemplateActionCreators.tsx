// discord_app/modules/guild_templates/native/GuildTemplateActionCreators.tsx
import dispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";
import mapDefault from "../GuildTemplateActionCreators.tsx";

require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const merged = Object.assign(mapDefault);
obj.showModal = function showModal(code) {
  let obj = _modDef5265;
  obj = { code };
  obj.pushLazy(asyncRequireImpl(11011, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  dispatcherDefault.dispatch(obj);
  const obj3 = dispatcherDefault;
  const guildTemplate = mapDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  _modDef5265.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = _modDef5265;
  dispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("set").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;