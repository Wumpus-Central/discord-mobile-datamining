// === Module 16241: GuildActionRows ===

// Module 16241 (GuildActionRows)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import ChannelListState from "ChannelListState" /* 7542 */;
import noop from "module_19" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7546 */;
import ReadStateStore from "ReadStateStore" /* 4589 */;

require = fn;
const View = fn(17).View;
let closure_7 = fn(7111).CHANNELS_AND_ROLES_MODAL_KEY;
const ReadStateTypes = fn(4756).ReadStateTypes;
const jsx = fn(21).jsx;
fn(4574);
let createStyles = { container: null, channelInfoContainer: null };
createStyles = { marginVertical: fn(10150).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
createStyles.container = createStyles;
createStyles.channelInfoContainer = { paddingStart: 4 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  guild = guild.guild;
  const selected = guild.selected;
  let id;
  const tmp = closure_10();
  const tmp4 = id(7349)(guild);
  id = guild.id;
  let obj = guild(4394);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(1943).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj1 = guild(563);
  const items = [ReadStateStore];
  const stateFromStores = obj1.useStateFromStores(items, () => ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  const items1 = [NewChannelsStore];
  const items2 = [id];
  const stateFromStores1 = guild(563).useStateFromStores(items1, () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW);
  const callback = noop.useCallback(() => {
    const obj = { guildId: id };
    obj.pushLazy(asyncRequireImpl(11580, dependencyMap.paths), obj, closure_7);
  }, items2);
  let SELECTED = guild(12409).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(12409).ChannelModes.SELECTED;
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
    obj = { style: tmp.channelInfoContainer, children: jsx(tmp5(12321).NewBadge, {}) };
    tmp11 = <View style={tmp.channelInfoContainer}>{jsx(tmp5(12321).NewBadge, {})}</View>;
  }
  obj = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null };
  const obj3 = guild(563);
  const intl = tmp5(1114).intl;
  const string = intl.string;
  const t = tmp5(1114).t;
  if (tmp4) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj.accessibilityLabel = stringResult;
  obj.accessibilityState = { selected };
  obj.mode = SELECTED;
  const intl2 = tmp5(1114).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1114).t;
  if (tmp4) {
    let string2Result = string2(t2.h9mGOP);
  } else {
    string2Result = string2(t2.et6wav);
  }
  obj.name = jsx(guild(12409).BaseChannelName, { name: string2Result, mode: SELECTED });
  obj1 = { mode: SELECTED, IconComponent: tmp5(13869).ChannelListMagnifyingGlassIcon };
  obj.icon = jsx(guild(12409).BaseChannelIcon, { mode: SELECTED, IconComponent: tmp5(13869).ChannelListMagnifyingGlassIcon });
  obj.channelInfo = tmp11;
  return jsx(id(12409), { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null });
};