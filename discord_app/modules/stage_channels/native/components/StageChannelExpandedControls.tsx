// discord_app/modules/stage_channels/native/components/StageChannelExpandedControls.tsx
import { View } from "get ActivityIndicator";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";
import importAllResult from "noop";
import { useCanCurrentUserSpeakInChannel } from "../../useCanSpeakInChannel.tsx";

const require = arg1;
let obj = { container: null };
obj = { backgroundColor: null, borderRadius: null, overflow: "hidden" };
obj[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.WHITE, 0.24);
obj[1] = require("Themes").radii.sm;
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo((channel) => {
  channel = channel.channel;
  let importDefault;
  const tmp = callback();
  const tmp2 = importDefault;
  let obj = channel(9742);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  let obj1 = channel(589);
  const items = [createGuildRecordFromRust];
  const items1 = [channel.guild_id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getGuild(channel.guild_id), items1);
  const tmp4 = useCanCurrentUserSpeakInChannel(channel.id);
  const items2 = [reset];
  const items3 = [channel.id];
  const stateFromStoresArray = channel(589).useStateFromStoresArray(items2, () => outer1_4.getAllApplicationStreamsForChannel(channel.id), items3);
  const obj3 = channel(589);
  const items4 = [fetchFingerprint];
  importDefault = channel(589).useStateFromStores(items4, () => id.getId());
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.maxStageVideoChannelUsers;
  }
  if (num == null) {
    num = 0;
  }
  const obj4 = channel(589);
  const stageHasMedia = channel(5135).useStageHasMedia(channel.id);
  const items5 = [];
  items5.push(jsx(channel(10896).StreamVolumeItem, {}));
  if (tmp11) {
    obj = { channel: null, disabled: null };
    obj[0] = channel;
    let tmp12 = stateFromStoresArray.length > 0;
    if (tmp12) {
      tmp12 = null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === closure_1);
    }
    if (!tmp12) {
      let reachedLimit = !stageHasMedia;
      if (!stageHasMedia) {
        reachedLimit = tmp2(9154)(channel).reachedLimit;
      }
      tmp12 = reachedLimit;
    }
    obj[1] = tmp12;
    items5.push(tmp9(tmp5(10896).ScreenshareButton, obj));
  }
  obj = { channelId: channel.id, isConnectedToVoiceChannel };
  items5.push(jsx(channel(10896).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel }));
  items5.push(jsx(channel(10896).DeafenButton, { channel }));
  obj1 = { style: tmp.container, children: items5.map((children) => callback(closure_3, { children }, arg1)) };
  return <View style={tmp.container}>{items5.map((children) => callback(closure_3, { children }, arg1))}</View>;
});
const result = require("reset").fileFinishedImporting("modules/stage_channels/native/components/StageChannelExpandedControls.tsx");

export default memoResult;