// discord_app/modules/guild_sidebar/native/GuildActionRows.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ChannelListState from "../ChannelListState.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import NewChannelsStore from "../../recent_channels/NewChannelsStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";

require = fn;
const View = fn(17).View;
let closure_7 = fn(7097).CHANNELS_AND_ROLES_MODAL_KEY;
const ReadStateTypes = fn(4742).ReadStateTypes;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, channelInfoContainer: null };
createStyles = {
  marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
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
  const tmp4 = id(7335)(guild);
  id = guild.id;
  let obj = guild(4380);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(
    guild(1943).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
  );
  let obj1 = guild(563);
  const items = [ReadStateStore];
  const stateFromStores = obj1.useStateFromStores(items, () =>
    ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION),
  );
  const items1 = [NewChannelsStore];
  const items2 = [id];
  const stateFromStores1 = guild(563).useStateFromStores(
    items1,
    () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW,
  );
  const callback = noop.useCallback(() => {
    const obj = { guildId: id };
    obj.pushLazy(asyncRequireImpl(11549, dependencyMap.paths), obj, closure_7);
  }, items2);
  let SELECTED = guild(12379).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(12379).ChannelModes.SELECTED;
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
    obj = { style: tmp.channelInfoContainer, children: jsx(tmp5(12291).NewBadge, {}) };
    tmp11 = <View style={tmp.channelInfoContainer}>{jsx(tmp5(12291).NewBadge, {})}</View>;
  }
  obj = {
    onPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    name: null,
    icon: null,
    channelInfo: null,
  };
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
  obj.name = jsx(guild(12379).BaseChannelName, { name: string2Result, mode: SELECTED });
  obj1 = { mode: SELECTED, IconComponent: tmp5(13843).ChannelListMagnifyingGlassIcon };
  obj.icon = jsx(guild(12379).BaseChannelIcon, {
    mode: SELECTED,
    IconComponent: tmp5(13843).ChannelListMagnifyingGlassIcon,
  });
  obj.channelInfo = tmp11;
  return jsx(id(12379), {
    onPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    name: null,
    icon: null,
    channelInfo: null,
  });
};
