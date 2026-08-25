// === Module 11352: showModal ===

// Module 11352 (showModal)
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;
import mapDefault from "map" /* 6048 */;

require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const merged = Object.assign(mapDefault);
obj.showModal = function showModal(code) {
  let obj = _modDef4611;
  obj = { code };
  obj.pushLazy(asyncRequireImpl(11353, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  dispatcherDefault.dispatch(obj);
  const obj3 = dispatcherDefault;
  const guildTemplate = mapDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  _modDef4611.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = _modDef4611;
  dispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("set").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;