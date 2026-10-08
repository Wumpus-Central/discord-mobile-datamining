// === Module 11139: setupEmbeddedAppBotScope ===

// Module 11139 (setupEmbeddedAppBotScope)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6102 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8433 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/setupEmbeddedAppBotScope.tsx");

export default function setupEmbeddedAppBotScope(context) {
  function handleMemberChange() {
    if (null != closure_1) {
      if (null != id) {
        if (null != GuildMemberStore.getMember(closure_1, id)) {
          c3 = false;
          const scopes2 = context.authorization.scopes;
          scopes2.add(OAuth2Scopes.OAuth2Scopes.BOT);
        } else {
          const scopes = context.authorization.scopes;
          scopes.delete(OAuth2Scopes.OAuth2Scopes.BOT);
          if (!c3) {
            c3 = true;
            const membersById = GuildActionCreatorsDefault.requestMembersById(closure_1, id);
          }
        }
      }
    }
  }
  const tmp = require("getGuildIdForEmbeddedSurface")(context.context.surface);
  importDefault = tmp;
  const bot = context.application.bot;
  id = undefined;
  if (bot != null) {
    id = bot.id;
  }
  if (null != tmp) {
    if (null != id) {
      GuildMemberStore = false;
      GuildMemberStore.addChangeListener(handleMemberChange);
      const signal = context.abortController.signal;
      const listener = signal.addEventListener("abort", () => {
        GuildMemberStore.removeChangeListener(handleMemberChange);
      });
      handleMemberChange();
    }
  }
};