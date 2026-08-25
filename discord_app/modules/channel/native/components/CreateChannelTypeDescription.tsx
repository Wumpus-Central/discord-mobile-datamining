// === Module 9147: CreateChannelTypeDescription ===

// Module 9147 (CreateChannelTypeDescription)
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { GuildProfileFetchStatus } from "handleUpdateStart" /* 9148 */;
import { ChannelTypes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  let obj = fetchGuildProfile(9149);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  let hasItem = null != guildProfile;
  if (hasItem) {
    const VISIBLE = tmp(5444).GuildProfileVisibilitySets.VISIBLE;
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
  const effect = React.useEffect(() => {
    fetchGuildProfile();
  }, items);
  let tmp9 = null;
  if (tmp6) {
    obj = { children: null };
    obj = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t["2Ab4Id"]);
    obj[0] = jsx(tmp(4376).Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
    tmp9 = <View variant="text-sm/normal" color="text-subtle">{null}</View>;
  }
  return tmp9;
};