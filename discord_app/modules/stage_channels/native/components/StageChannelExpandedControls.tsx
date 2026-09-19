// discord_app/modules/stage_channels/native/components/StageChannelExpandedControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useCanSpeakInChannelDefault from "../../useCanSpeakInChannel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

const useChannelVideoLimitDefault = tmp2(9909);
const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj = { container: null };
let obj3 = { backgroundColor: null, borderRadius: null, overflow: "hidden" };
const ColorUtils = fn(4605);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
obj3.borderRadius = nativeDefault.radii.sm;
obj.container = obj3;
let closure_8 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelExpandedControls.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  importDefault = undefined;
  const tmp = closure_8();
  const tmp4 = useCanSpeakInChannelDefault(channel.id);
  const isConnectedToVoiceChannel = channel(9643).useIsConnectedToVoiceChannel(channel);
  const obj = channel(9643);
  const items = [GuildStore];
  const items1 = [channel.guild_id];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id), items1);
  const obj2 = channel(504);
  const items2 = [ApplicationStreamingStore];
  const items3 = [channel.id];
  const stateFromStoresArray = channel(504).useStateFromStoresArray(
    items2,
    () => ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id),
    items3,
  );
  const obj3 = channel(504);
  const items4 = [AuthenticationStore];
  importDefault = channel(504).useStateFromStores(items4, () => id.getId());
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.maxStageVideoChannelUsers;
  }
  if (num == null) {
    num = 0;
  }
  const obj4 = channel(504);
  const stageHasMedia = channel(5629).useStageHasMedia(channel.id);
  const items5 = [];
  items5.push(jsx(channel(10270).StreamVolumeItem, {}));
  if (tmp11) {
    const obj5 = { channel, disabled: null };
    let tmp12 = stateFromStoresArray.length > 0;
    if (tmp12) {
      tmp12 = null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === closure_1);
    }
    if (!tmp12) {
      let reachedLimit = !stageHasMedia;
      if (!stageHasMedia) {
        reachedLimit = useChannelVideoLimitDefault(channel).reachedLimit;
      }
      tmp12 = reachedLimit;
    }
    obj5.disabled = tmp12;
    items5.push(jsx(tmp5(10270).ScreenshareButton, { channel, disabled: null }));
  }
  items5.push(jsx(channel(10270).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel }));
  items5.push(jsx(channel(10270).DeafenButton, { channel }));
  const obj6 = { channelId: channel.id, isConnectedToVoiceChannel };
  tmp11 = num > 0 && tmp4;
  const tmp5Result = channel(5629);
  return (
    <View style={tmp.container}>
      {items5.map((children, index) => (
        <View key={index}>{children}</View>
      ))}
    </View>
  );
});
