// === Module 1932: isUserPrimaryGuildEqual ===

// Module 1932 (isUserPrimaryGuildEqual)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_tag/PrimaryGuildUtils.tsx");

export const isUserPrimaryGuildEqual = function isUserPrimaryGuildEqual(primaryGuild, primary_guild) {
  if (null != primaryGuild) {
    if (null != primary_guild) {
      let tmp = primaryGuild.identityGuildId === primary_guild.identityGuildId && primaryGuild.identityEnabled === primary_guild.identityEnabled && primaryGuild.tag === primary_guild.tag && primaryGuild.badge === primary_guild.badge;
    }
    return tmp;
  }
  tmp = primaryGuild === primary_guild;
};
export const ensureUserPrimaryGuild = function ensureUserPrimaryGuild(primary_guild) {
  if (null == primary_guild) {
    return null;
  } else if ("identityGuildId" in primary_guild) {
    return primary_guild;
  } else {
    const obj = { identityGuildId: null, identityEnabled: null, tag: null, badge: null };
    ({ identity_guild_id: obj[0], identity_enabled: obj[1], tag: obj[2], badge: obj[3] } = primary_guild);
    return obj;
  }
};