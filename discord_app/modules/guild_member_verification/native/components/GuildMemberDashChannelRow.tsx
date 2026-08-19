// === Module 15476: GuildMemberDashChannelRow ===

// Module 15476 (GuildMemberDashChannelRow)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ GuildFeatures: c4, Routes: c5 } = ME);
const createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_DEFAULT };
createCacheKey[2] = { color: ThemesDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default function GuildMemberDashChannelRow(arg0) {
  ({ guild, selected } = arg0);
  let hasItem;
  const tmp = callback();
  const id = guild.id;
  let obj = id(15477);
  let num = obj.useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = React.useEffect(() => {
    if (hasItem) {
      hasItem(dependencyMap[8]);
      const obj = { guildId: null, status: null };
      obj[0] = id;
      obj[1] = id(dependencyMap[9]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      const guildJoinRequests = obj.fetchGuildJoinRequests(obj);
    }
  }, items);
  const items1 = [id];
  callback = React.useCallback(() => {
    id(dependencyMap[10]).transitionTo(closure_1_5.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = tmp2(11553).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  obj = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null };
  const intl = tmp2(1236).intl;
  obj[3] = intl.string(id(1236).t["9Oq93m"]);
  obj[4] = { selected };
  obj[5] = tmp7;
  obj = { name: null, mode: null };
  const intl2 = tmp2(1236).intl;
  obj[0] = intl2.string(id(1236).t["9Oq93m"]);
  obj[1] = tmp7;
  obj[6] = jsx(id(11553).BaseChannelName, { name: null, mode: null });
  const tmp9 = hasItem(11553);
  obj[7] = jsx(id(11553).BaseChannelIcon, { mode: tmp7, IconComponent: id(6884).GroupIcon });
  let tmp8Result = null;
  if (num > 0) {
    const obj2 = { style: null, textStyle: null, value: null };
    ({ badge: obj5[0], badgeText: obj5[1] } = tmp);
    obj2[2] = num;
    tmp8Result = jsx(tmp2(1297).Badge, { style: null, textStyle: null, value: null });
  }
  obj[8] = tmp8Result;
  return <tmp9 name={null} mode={null} />;
};