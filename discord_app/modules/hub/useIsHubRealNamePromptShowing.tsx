// === Module 11871: useIsHubRealNamePromptShowing ===

// Module 11871 (useIsHubRealNamePromptShowing)
import closure_3 from "noop" /* 19 */;
import closure_4 from "initialize" /* 11872 */;
import closure_5 from "trackCommunicationDisabled" /* 1991 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { GuildFeatures } from "ME" /* 676 */;
import { GuildPrompts } from "GuildPrompts" /* 11873 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default function useIsHubRealNamePromptShowing(arg0) {
  const _require = arg0;
  const items = [closure_6, closure_4, closure_7, closure_5];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const guild = closure_1_6.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_8.HUB);
    }
    if (true !== hasItem) {
      return null;
    } else if (true === closure_1_4.hasViewedPrompt(closure_1_9.REAL_NAME_PROMPT, guild.id)) {
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
        stateFromStores(closure_1_2[8]).viewPrompt(closure_1_9.REAL_NAME_PROMPT, closure_0);
        const obj = stateFromStores(closure_1_2[8]);
      }
    }
  }, items1);
  return true === stateFromStores;
};