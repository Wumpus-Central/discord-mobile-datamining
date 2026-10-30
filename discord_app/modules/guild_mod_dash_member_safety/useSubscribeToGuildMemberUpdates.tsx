// === Module 18598: useSubscribeToGuildMemberUpdates ===

// Module 18598 (useSubscribeToGuildMemberUpdates)
import GuildSubscriptionsActionCreatorsAll from "GuildSubscriptionsActionCreators" /* 7445 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/useSubscribeToGuildMemberUpdates.tsx");

export function useSubscribeToGuildMemberUpdates(guildId) {
  closure_0 = guildId;
  const items = [guildId];
  const effect = noop.useEffect(() => {
    let result = GuildSubscriptionsActionCreatorsAll.subscribeToMemberUpdates(closure_0);
    return () => {
      const result = closure_0(dependencyMap[1]).unsubscribeFromMemberUpdates(guildId);
    };
  }, items);
}