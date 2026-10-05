// === Module 14470: useUserAvailableGuildsWithTags ===

// Module 14470 (useUserAvailableGuildsWithTags)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export const useUserAvailableGuildsWithTags = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildMemberStore];
    const fn = function u() {
      guildsArray = guildsArray.getGuildsArray();
      return guildsArray.filter((id) => {
        selfMember = selfMember.getSelfMember(id.id);
        let guildSupportsTagsResult = closure_1_0(closure_1_1[4]).guildSupportsTags(id);
        if (guildSupportsTagsResult) {
          let joinedAt;
          if (selfMember != null) {
            joinedAt = selfMember.joinedAt;
          }
          guildSupportsTagsResult = null != joinedAt;
        }
        if (guildSupportsTagsResult) {
          guildSupportsTagsResult = true !== selfMember.isPending;
        }
        if (guildSupportsTagsResult) {
          const profile = id.profile;
          let tag;
          if (profile != null) {
            tag = profile.tag;
          }
          guildSupportsTagsResult = null != tag;
        }
        return guildSupportsTagsResult;
      });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStoresArray(tmp4, tmp5);
}) : (() => {
  const items = [GuildStore, GuildMemberStore];
  return initialize.useStateFromStoresArray(items, () => {
    guildsArray = guildsArray.getGuildsArray();
    return guildsArray.filter((id) => {
      selfMember = selfMember.getSelfMember(id.id);
      let guildSupportsTagsResult = closure_1_0(closure_1_1[4]).guildSupportsTags(id);
      if (guildSupportsTagsResult) {
        let joinedAt;
        if (selfMember != null) {
          joinedAt = selfMember.joinedAt;
        }
        guildSupportsTagsResult = null != joinedAt;
      }
      if (guildSupportsTagsResult) {
        guildSupportsTagsResult = true !== selfMember.isPending;
      }
      if (guildSupportsTagsResult) {
        const profile = id.profile;
        let tag;
        if (profile != null) {
          tag = profile.tag;
        }
        guildSupportsTagsResult = null != tag;
      }
      return guildSupportsTagsResult;
    });
  });
});