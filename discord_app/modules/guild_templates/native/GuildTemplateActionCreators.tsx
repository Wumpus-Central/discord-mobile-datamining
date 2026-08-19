// === Module 10971: showModal ===

// Module 10971 (showModal)
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import mapDefault from "map" /* 7287 */;

require = fn;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const merged = Object.assign(mapDefault);
obj.showModal = function showModal(code) {
  let obj = { code };
  obj.pushLazy(asyncRequireImpl(10972, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  dispatcherDefault.dispatch(obj);
  const guildTemplate = mapDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  _modDef5260.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  dispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("obj132").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;