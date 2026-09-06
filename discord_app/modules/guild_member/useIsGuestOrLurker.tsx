// discord_app/modules/guild_member/useIsGuestOrLurker.tsx
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default function useIsGuestOrLurker(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildMemberStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const guild = GuildStore.getGuild(closure_0);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.CONFERENCE);
      }
      return true !== hasItem && GuildMemberStore.isGuestOrLurker(closure_0, closure_1);
    },
    items1,
  );
}
export const isGuestOrLurkerInGuild = function isGuestOrLurkerInGuild(guild_id, id) {
  const guild = GuildStore.getGuild(guild_id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.CONFERENCE);
  }
  let isGuestOrLurkerResult = true !== hasItem;
  if (isGuestOrLurkerResult) {
    isGuestOrLurkerResult = GuildMemberStore.isGuestOrLurker(guild_id, id);
  }
  return isGuestOrLurkerResult;
};
