// discord_app/modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx
import noop from "noop";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ GuildFeatures: c4, Routes: c5 } = ME);
createCacheKey = { container: null, badge: null, badgeText: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_DEFAULT };
let obj1 = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_DEFAULT };
createCacheKey[2] = { color: require("Themes").colors.BADGE_TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: require("Themes").colors.BADGE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default function GuildMemberDashChannelRow(arg0) {
  let guild;
  let selected;
  ({ guild, selected } = arg0);
  let id;
  let hasItem;
  const tmp = createCacheKey();
  id = guild.id;
  let obj = id(15340);
  let num = obj.useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = React.useEffect(() => {
    if (hasItem) {
      let obj = hasItem(outer1_2[8]);
      obj = { guildId: null, status: null };
      obj[0] = id;
      obj[1] = id(outer1_2[9]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      const guildJoinRequests = obj.fetchGuildJoinRequests(obj);
    }
  }, items);
  const items1 = [id];
  const callback = React.useCallback(() => {
    id(outer1_2[10]).transitionTo(outer1_5.CHANNEL(id, outer1_6.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = tmp2(11753).ChannelModes;
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
  obj[6] = jsx(id(11753).BaseChannelName, { name: null, mode: null });
  const obj1 = { mode: tmp7, IconComponent: null };
  obj1[1] = id(4817).GroupIcon;
  obj[7] = jsx(id(11753).BaseChannelIcon, { mode: tmp7, IconComponent: null });
  let tmp8Result = null;
  if (num > 0) {
    const obj2 = { style: null, textStyle: null, value: null };
    ({ badge: obj5[0], badgeText: obj5[1] } = tmp);
    obj2[2] = num;
    tmp8Result = tmp8(tmp2(1297).Badge, obj2);
  }
  obj[8] = tmp8Result;
  return jsx(hasItem(11753), { name: null, mode: null });
};