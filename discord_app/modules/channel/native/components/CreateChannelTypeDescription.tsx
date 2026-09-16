// === Module 9889: CreateChannelTypeDescription ===

// Module 9889 (CreateChannelTypeDescription)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4634 */;
import GuildProfileVisibility from "GuildProfileVisibility" /* 5637 */;
import useGuildProfile from "useGuildProfile" /* 9330 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildProfileFetchStatus = fn(9208).GuildProfileFetchStatus;
const ChannelTypes = fn(1074).ChannelTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
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