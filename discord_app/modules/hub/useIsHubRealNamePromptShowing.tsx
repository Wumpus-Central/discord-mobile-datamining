// === Module 11822: useIsHubRealNamePromptShowing ===

// Module 11822 (useIsHubRealNamePromptShowing)
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 11823 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { GuildFeatures } from "ME" /* 676 */;
import { GuildPrompts } from "GuildPrompts" /* 11824 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default function useIsHubRealNamePromptShowing(arg0) {
  const _require = arg0;
  const items = [closure_6, closure_4, closure_7, closure_5];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const guild = closure_1_6.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (true !== hasItem) {
      return null;
    } else if (true === closure_1_4.hasViewedPrompt(GuildPrompts.REAL_NAME_PROMPT, guild.id)) {
      return null;
    } else {
      const currentUser = closure_1_7.getCurrentUser();
      if (null == currentUser) {
        return null;
      } else {
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        const member = closure_1_5.getMember(guild.id, id);
        let nick;
        if (member != null) {
          nick = member.nick;
        }
        return null == nick;
      }
    }
  });
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      if (!stateFromStores) {
        stateFromStores(dependencyMap[8]).viewPrompt(GuildPrompts.REAL_NAME_PROMPT, closure_0);
        const obj = stateFromStores(dependencyMap[8]);
      }
    }
  }, items1);
  return true === stateFromStores;
};