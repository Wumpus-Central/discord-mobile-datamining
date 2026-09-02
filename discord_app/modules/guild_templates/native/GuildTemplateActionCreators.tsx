// === Module 11586: showModal ===

// Module 11586 (showModal)
import dispatcherDefault from "dispatcher" /* 706 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;
import mapDefault from "map" /* 6177 */;

require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const merged = Object.assign(mapDefault);
obj.showModal = function showModal(code) {
  let obj = _modDef4723;
  obj = { code };
  obj.pushLazy(asyncRequireImpl(11587, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  dispatcherDefault.dispatch(obj);
  const obj3 = dispatcherDefault;
  const guildTemplate = mapDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  _modDef4723.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = _modDef4723;
  dispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("set").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;