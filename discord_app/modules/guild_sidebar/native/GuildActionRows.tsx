// discord_app/modules/guild_sidebar/native/GuildActionRows.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ReadStateConstants from "../../read_states/ReadStateConstants.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildOnboardingConstants from "../../guild_onboarding/native/GuildOnboardingConstants.tsx";
import ChannelListState from "../ChannelListState.tsx";
import RedesignChannelListConstants from "../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import NewChannelsStore from "../../recent_channels/NewChannelsStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
const View = react_native.View;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
let closure_7 = GuildOnboardingConstants.CHANNELS_AND_ROLES_MODAL_KEY;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const jsx = Fragment.jsx;
let obj = { container: obj2, channelInfoContainer: { paddingStart: 4 } };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  let stringResult;
  guild = guild.guild;
  const selected = guild.selected;
  let id;
  const tmp = closure_10();
  const tmp4 = id(6848)(guild);
  const tmp2 = id;
  id = guild.id;
  let obj = guild(4704);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(
    guild(2036).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
  );
  let obj2 = guild(573);
  const items = [ReadStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () =>
    ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION),
  );
  const items1 = [NewChannelsStore];
  const items2 = [id];
  const obj3 = guild(573);
  const stateFromStores1 = obj3.useStateFromStores(
    items1,
    () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW,
  );
  const callback = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guildId: id };
    obj.pushLazy(asyncRequire(11179, dependencyMap.paths), obj2, closure_7);
  }, items2);
  let SELECTED = guild(12031).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(12031).ChannelModes.SELECTED;
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
    tmp11 = <View style={tmp.channelInfoContainer}>{jsx(guild(11933).NewBadge, {})}</View>;
  }
  tmp2(12031);
  const intl = tmp5(1126).intl;
  const string = intl.string;
  const t = tmp5(1126).t;
  if (tmp4) {
    stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  const BaseChannelName = tmp5(12031).BaseChannelName;
  const intl2 = tmp5(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1126).t;
  if (tmp4) {
    string2(t2.h9mGOP);
  } else {
    string2(t2.et6wav);
  }
  ({ mode: SELECTED, IconComponent: guild(13672).ChannelListMagnifyingGlassIcon });
  const BaseChannelIcon = tmp5(12031).BaseChannelIcon;
  return (
    <tmp2Result
      onPress={callback}
      style={tmp.container}
      accessible
      accessibilityLabel={stringResult}
      accessibilityState={{ selected }}
      mode={SELECTED}
      name={null}
      icon={null}
      channelInfo={tmp11}
    />
  );
};
