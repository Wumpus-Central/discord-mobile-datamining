// discord_app/modules/channel/native/components/CreateChannelTypeDescription.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildProfileVisibility from "../../../../../discord_common/js/shared/shared-constants/GuildProfileVisibility.tsx";
import useGuildProfile from "../../../guild_profile/hooks/useGuildProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const GuildProfileFetchStatus = fn(9262).GuildProfileFetchStatus;
const ChannelTypes = fn(1085).ChannelTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let stringResult = dependencyMap;
      const cResult = c.c(6);
      ({ guildId, channelType } = arg0);
      const guildProfile1 = useGuildProfile.useGuildProfile(guildId);
      ({ guildProfile, fetchGuildProfile } = guildProfile1);
      let hasItem = null != guildProfile;
      if (hasItem) {
        const VISIBLE = GuildProfileVisibility.GuildProfileVisibilitySets.VISIBLE;
        hasItem = VISIBLE.has(guildProfile.visibility);
      }
      let tmp7 = !tmp6;
      if (guildProfile1.fetchStatus === GuildProfileFetchStatus.FETCHED) {
        tmp7 = !hasItem;
      }
      if (tmp7) {
        tmp7 = channelType === ChannelTypes.GUILD_ANNOUNCEMENT;
      }
      if (cResult[0] !== fetchGuildProfile) {
        const fn = function c() {
          fetchGuildProfile();
        };
        cResult[0] = fetchGuildProfile;
        cResult[1] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === fetchGuildProfile) {
        if (cResult[3] === guildId) {
          let tmp10 = cResult[4];
        }
        const effect = noop.useEffect(tmp9, tmp10);
        if (!tmp7) {
          return null;
        } else {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { children: null };
            const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: null };
            const intl = util.intl;
            stringResult = intl.string(util.t["2Ab4Id"]);
            obj4.children = stringResult;
            obj3.children = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
            const tmp18 = <View>{null}</View>;
            cResult[5] = tmp18;
          }
        }
      }
      const items = [guildId, fetchGuildProfile];
      cResult[2] = fetchGuildProfile;
      cResult[3] = guildId;
      cResult[4] = items;
      tmp10 = items;
    }
  : (guildId) => {
      guildId = guildId.guildId;
      fetchGuildProfile = undefined;
      const guildProfile1 = useGuildProfile.useGuildProfile(guildId);
      ({ guildProfile, fetchGuildProfile } = guildProfile1);
      let hasItem = null != guildProfile;
      if (hasItem) {
        const VISIBLE = GuildProfileVisibility.GuildProfileVisibilitySets.VISIBLE;
        hasItem = VISIBLE.has(guildProfile.visibility);
      }
      let tmp6 = !tmp5;
      if (guildProfile1.fetchStatus === GuildProfileFetchStatus.FETCHED) {
        tmp6 = !hasItem;
      }
      if (tmp6) {
        tmp6 = guildId.channelType === ChannelTypes.GUILD_ANNOUNCEMENT;
      }
      const items = [guildId, fetchGuildProfile];
      const effect = noop.useEffect(() => {
        fetchGuildProfile();
      }, items);
      let tmp9 = null;
      if (tmp6) {
        const obj2 = { children: null };
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t["2Ab4Id"]);
        obj2.children = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
        tmp9 = <View>{null}</View>;
      }
      return tmp9;
    };
