// === Module 13656: useIsHubRealNamePromptShowing ===

// Module 13656 (useIsHubRealNamePromptShowing)
import GuildPromptsActionCreatorsDefault from "GuildPromptsActionCreators" /* 13659 */;
import noop from "module_19" /* 19 */;
import GuildPromptsStore from "GuildPromptsStore" /* 13657 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildStore from "GuildStore" /* 4914 */;
import UserStore from "UserStore" /* 1387 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1071).GuildFeatures;
const GuildPrompts = fn(13658).GuildPrompts;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default function useIsHubRealNamePromptShowing(arg0) {
  _require = arg0;
  items = [GuildStore, GuildPromptsStore, UserStore, GuildMemberStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (true !== hasItem) {
      return null;
    } else if (true === GuildPromptsStore.hasViewedPrompt(GuildPrompts.REAL_NAME_PROMPT, guild.id)) {
      return null;
    } else {
      const currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        return null;
      } else {
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        const member = GuildMemberStore.getMember(guild.id, id);
        let nick;
        if (member != null) {
          nick = member.nick;
        }
        return null == nick;
      }
    }
  });
  const items1 = [stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      if (!stateFromStores) {
        GuildPromptsActionCreatorsDefault.viewPrompt(GuildPrompts.REAL_NAME_PROMPT, closure_0);
      }
    }
  }, items1);
  return true === stateFromStores;
};