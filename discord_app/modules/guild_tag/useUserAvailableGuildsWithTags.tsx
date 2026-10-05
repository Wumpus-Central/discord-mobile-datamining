// discord_app/modules/guild_tag/useUserAvailableGuildsWithTags.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let guildsArray, selfMember;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildMemberStore];
        const fn = function u() {
          guildsArray = guildsArray.getGuildsArray();
          return guildsArray.filter((id) => {
            selfMember = selfMember.getSelfMember(id.id);
            const obj = closure_1_0(closure_1_1[4]);
            let guildSupportsTagsResult = obj.guildSupportsTags(id);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStoresArray(tmp4, tmp5);
    }
  : () => {
      let obj = get_initialized;
      const items = [GuildStore, GuildMemberStore];
      return obj.useStateFromStoresArray(items, () => {
        guildsArray = guildsArray.getGuildsArray();
        return guildsArray.filter((id) => {
          selfMember = selfMember.getSelfMember(id.id);
          const obj = closure_1_0(closure_1_1[4]);
          let guildSupportsTagsResult = obj.guildSupportsTags(id);
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
    };
const result = size.fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export const useUserAvailableGuildsWithTags = tmp2;
