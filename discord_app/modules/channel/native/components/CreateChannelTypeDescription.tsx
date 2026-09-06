// === Module 9749: CreateChannelTypeDescription ===

// Module 9749 (CreateChannelTypeDescription)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildProfileVisibility from "GuildProfileVisibility" /* 5551 */;
import useGuildProfile from "useGuildProfile" /* 9187 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildProfileFetchStatus = fn(9065).GuildProfileFetchStatus;
const ChannelTypes = fn(1074).ChannelTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  let obj = useGuildProfile;
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  let hasItem = null != guildProfile;
  if (hasItem) {
    const VISIBLE = GuildProfileVisibility.GuildProfileVisibilitySets.VISIBLE;
    hasItem = VISIBLE.has(guildProfile.visibility);
  }
  let tmp6 = !tmp5;
  if (guildProfile.fetchStatus === GuildProfileFetchStatus.FETCHED) {
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
    obj = { children: null };
    obj = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t["2Ab4Id"]);
    obj.children = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
    tmp9 = <View variant="text-sm/normal" color="text-subtle">{null}</View>;
  }
  return tmp9;
};