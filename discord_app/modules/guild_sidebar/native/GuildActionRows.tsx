// === Module 16028: GuildRolesAndChannelsRow ===

// Module 16028 (GuildRolesAndChannelsRow)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "guildHasCommunity" /* 7286 */;
import closure_6 from "generateOldThreadCutoff" /* 4493 */;
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_7 } from "GUILD_ONBOARDING_MODAL_KEY" /* 5472 */;
import { ReadStateTypes } from "ReadStateTypes" /* 4702 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
createCacheKey = { container: null, channelInfoContainer: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingStart: 4 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  guild = guild.guild;
  const selected = guild.selected;
  let id;
  const tmp = callback();
  const tmp4 = id(6188)(guild);
  id = guild.id;
  let obj = guild(4298);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(1372).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  obj1 = guild(644);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.hasUnread(guild.id, closure_1_8.GUILD_ONBOARDING_QUESTION));
  const items1 = [closure_5];
  const items2 = [id];
  const stateFromStores1 = guild(644).useStateFromStores(items1, () => closure_1_5.getNewChannelIds(guild.id).size > guild(closure_1_2[14]).MAX_NEW_CHANNELS_TO_SHOW);
  callback = React.useCallback(() => {
    let obj = id(closure_1_2[15]);
    obj = { guildId: id };
    obj.pushLazy(guild(closure_1_2[17])(closure_1_2[16], closure_1_2.paths), obj, closure_1_7);
  }, items2);
  let SELECTED = guild(12171).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(12171).ChannelModes.SELECTED;
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
    obj[1] = jsx(tmp5(12081).NewBadge, {});
    tmp11 = <View style={null}>{null}</View>;
  }
  obj = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null };
  const obj3 = guild(644);
  const tmp2 = id;
  const intl = tmp5(1233).intl;
  const string = intl.string;
  const t = tmp5(1233).t;
  if (tmp4) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj[3] = stringResult;
  obj[4] = { selected };
  obj[5] = SELECTED;
  const intl2 = tmp5(1233).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1233).t;
  if (tmp4) {
    let string2Result = string2(t2.h9mGOP);
  } else {
    string2Result = string2(t2.et6wav);
  }
  obj[6] = jsx(guild(12171).BaseChannelName, { name: string2Result, mode: SELECTED });
  obj1 = { mode: SELECTED, IconComponent: tmp5(13805).ChannelListMagnifyingGlassIcon };
  obj[7] = jsx(guild(12171).BaseChannelIcon, { mode: SELECTED, IconComponent: tmp5(13805).ChannelListMagnifyingGlassIcon });
  obj[8] = tmp11;
  return jsx(id(12171), { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null });
};