// discord_app/modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import canReviewGuildMemberApplications from "../../guild_member_verification/canReviewGuildMemberApplications.tsx";
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs.tsx";
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let guildId;

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        let tmp3;
        const obj = react2;
        const cResult = obj.c(4);
        guildId = guildId.guildId;
        const obj2 = canReviewGuildMemberApplications;
        if (obj2.useCanReviewGuildMemberApplications(guildId)) {
          let tmp7;
          if (cResult[0] !== guildId) {
            const tmp10 = jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
            cResult[0] = guildId;
            cResult[1] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[1];
          }
          tmp3 = tmp7;
        } else if (cResult[2] !== guildId) {
          const tmp6 = jsx(GuildSettingsModalMembersDefault, { guildId });
          cResult[2] = guildId;
          cResult[3] = tmp6;
          tmp3 = tmp6;
        } else {
          tmp3 = cResult[3];
        }
        return tmp3;
      }
    : (guildId) => {
        guildId = guildId.guildId;
        const obj = canReviewGuildMemberApplications;
        return jsx(importDefault(obj.useCanReviewGuildMemberApplications(guildId) ? 16565 : 16567), { guildId });
      },
);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
