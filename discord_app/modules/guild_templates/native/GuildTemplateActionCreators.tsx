// discord_app/modules/guild_templates/native/GuildTemplateActionCreators.tsx
import merged from "map";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = importDefault(4399);
  obj = { code };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(11000, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(709).dispatch(obj);
  const obj3 = importDefault(709);
  const guildTemplate = importDefault(7694).resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  importDefault(4399).popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = importDefault(4399);
  importDefault(709).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;