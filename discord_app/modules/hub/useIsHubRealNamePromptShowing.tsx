// discord_app/modules/hub/useIsHubRealNamePromptShowing.tsx
import noop from "../../../_runtime/00019_noop.js";
import initialize from "../guild/GuildPromptsStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";
import { GuildPrompts } from "../guild/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default function useIsHubRealNamePromptShowing(arg0) {
  const _require = arg0;
  const items = [closure_6, closure_4, closure_7, closure_5];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
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