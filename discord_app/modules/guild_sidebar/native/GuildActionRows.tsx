// discord_app/modules/guild_sidebar/native/GuildActionRows.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ChannelListState from "../ChannelListState.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import NewChannelsStore from "../../recent_channels/NewChannelsStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";

require = fn;
const View = fn(17).View;
let closure_7 = fn(7293).CHANNELS_AND_ROLES_MODAL_KEY;
const ReadStateTypes = fn(4904).ReadStateTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj2 = {
  container: {
    marginVertical: fn(10361).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
  channelInfoContainer: { paddingStart: 4 },
};
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  guild = guild.guild;
  const selected = guild.selected;
  let id;
  const tmp = closure_10();
  const tmp4 = id(7531)(guild);
  id = guild.id;
  const result = guild(4542).useIsDismissibleContentDismissed_UNSAFE(
    guild(1944).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
  );
  const obj = guild(4542);
  const tmp2 = id;
  const items = [ReadStateStore];
  const stateFromStores = guild(563).useStateFromStores(items, () =>
    ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION),
  );
  const obj2 = guild(563);
  const items1 = [NewChannelsStore];
  const items2 = [id];
  const stateFromStores1 = guild(563).useStateFromStores(
    items1,
    () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW,
  );
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11789, dependencyMap.paths), { guildId: id }, closure_7);
  }, items2);
  let SELECTED = guild(12622).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(12622).ChannelModes.SELECTED;
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
    const obj4 = { style: tmp.channelInfoContainer, children: jsx(tmp5(12534).NewBadge, {}) };
    tmp11 = <View style={tmp.channelInfoContainer}>{jsx(tmp5(12534).NewBadge, {})}</View>;
  }
  const obj5 = {
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
  const intl = tmp5(1115).intl;
  const string = intl.string;
  const t = tmp5(1115).t;
  if (tmp4) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj5.accessibilityLabel = stringResult;
  obj5.accessibilityState = { selected };
  obj5.mode = SELECTED;
  const intl2 = tmp5(1115).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1115).t;
  if (tmp4) {
    let string2Result = string2(t2.h9mGOP);
  } else {
    string2Result = string2(t2.et6wav);
  }
  obj5.name = jsx(guild(12622).BaseChannelName, { name: string2Result, mode: SELECTED });
  const tmp2Result = tmp2(12622);
  obj5.icon = jsx(guild(12622).BaseChannelIcon, {
    mode: SELECTED,
    IconComponent: guild(14052).ChannelListMagnifyingGlassIcon,
  });
  obj5.channelInfo = tmp11;
  return (
    <tmp2Result
      onPress={callback}
      style={tmp.container}
      accessible
      accessibilityLabel={null}
      accessibilityState={null}
      mode={null}
      name={null}
      icon={null}
      channelInfo={null}
    />
  );
};
