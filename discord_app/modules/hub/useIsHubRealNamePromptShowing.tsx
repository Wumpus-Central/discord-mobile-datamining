import noop from "noop";
import initialize from "initialize";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GuildFeatures } from "ME";
import { GuildPrompts } from "GuildPrompts";

const require = arg1;
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default function useIsHubRealNamePromptShowing(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust, initialize, mergeGuildAvatar, trackCommunicationDisabled];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const guild = outer1_6.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_8.HUB);
    }
    if (true !== hasItem) {
      return null;
    } else if (true === outer1_4.hasViewedPrompt(outer1_9.REAL_NAME_PROMPT, guild.id)) {
      return null;
    } else {
      const currentUser = outer1_7.getCurrentUser();
      if (null == currentUser) {
        return null;
      } else {
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        const member = outer1_5.getMember(guild.id, id);
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
        stateFromStores(outer1_2[8]).viewPrompt(outer1_9.REAL_NAME_PROMPT, closure_0);
        const obj = stateFromStores(outer1_2[8]);
      }
    }
  }, items1);
  return true === stateFromStores;
};