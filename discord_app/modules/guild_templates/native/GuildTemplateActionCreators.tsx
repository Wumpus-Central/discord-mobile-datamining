// discord_app/modules/guild_templates/native/GuildTemplateActionCreators.tsx
import merged from "map";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { map } from "../GuildTemplateActionCreators.tsx";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = ModalActionCreators;
  obj = { code };
  obj.pushLazy(asyncRequireImpl(11197, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  dispatcher.dispatch(obj);
  const obj3 = dispatcher;
  const guildTemplate = map.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  ModalActionCreators.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = ModalActionCreators;
  dispatcher.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;