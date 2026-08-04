// discord_app/modules/guild_sidebar/native/GuildActionRows.tsx
import renderChannelBadge from "renderChannelBadge";
import { View } from "asyncRequireImpl";
import guildHasCommunity from "guildHasCommunity";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_7 } from "GUILD_ONBOARDING_MODAL_KEY";
import { ReadStateTypes } from "ReadStateTypes";
import { jsx } from "ChannelListMagnifyingGlassIcon";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null, channelInfoContainer: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingStart: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("guildHasCommunity").fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  guild = guild.guild;
  const selected = guild.selected;
  let id;
  const tmp = createCacheKey();
  const tmp4 = id(10006)(guild);
  id = guild.id;
  let obj = guild(4009);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(1358).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj1 = guild(647);
  const items = [generateOldThreadCutoff];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.hasUnread(guild.id, outer1_8.GUILD_ONBOARDING_QUESTION));
  const items1 = [guildHasCommunity];
  const items2 = [id];
  const stateFromStores1 = guild(647).useStateFromStores(items1, () => outer1_5.getNewChannelIds(guild.id).size > guild(outer1_2[14]).MAX_NEW_CHANNELS_TO_SHOW);
  const callback = React.useCallback(() => {
    let obj = id(outer1_2[15]);
    obj = { guildId: id };
    obj.pushLazy(guild(outer1_2[17])(outer1_2[16], outer1_2.paths), obj, outer1_7);
  }, items2);
  let SELECTED = guild(11492).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(11492).ChannelModes.SELECTED;
  }
  let tmp10 = !result;
  if (result) {
    tmp10 = stateFromStores;
  }
  if (!tmp10) {
    tmp10 = stateFromStores1;
  }
  let tmp11 = null;
  if (tmp10) {
    obj = { style: null, children: null };
    obj[0] = tmp.channelInfoContainer;
    obj[1] = jsx(tmp5(11458).NewBadge, {});
    tmp11 = <View style={null}>{null}</View>;
  }
  obj = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null };
  const obj3 = guild(647);
  const tmp2 = id;
  const intl = tmp5(1236).intl;
  const string = intl.string;
  const t = tmp5(1236).t;
  if (tmp4) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj[3] = stringResult;
  obj[4] = { selected };
  obj[5] = SELECTED;
  const intl2 = tmp5(1236).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1236).t;
  if (tmp4) {
    let string2Result = string2(t2.h9mGOP);
  } else {
    string2Result = string2(t2.et6wav);
  }
  obj[6] = jsx(guild(11492).BaseChannelName, { name: string2Result, mode: SELECTED });
  obj1 = { mode: SELECTED, IconComponent: null };
  obj1[1] = guild(13003).ChannelListMagnifyingGlassIcon;
  obj[7] = jsx(guild(11492).BaseChannelIcon, { mode: SELECTED, IconComponent: null });
  obj[8] = tmp11;
  return jsx(id(11492), { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null });
};