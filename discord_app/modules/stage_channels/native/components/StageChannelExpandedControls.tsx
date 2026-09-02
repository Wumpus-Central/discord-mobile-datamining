// discord_app/modules/stage_channels/native/components/StageChannelExpandedControls.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useCanCurrentUserSpeakInChannelDefault from "../../useCanSpeakInChannel.tsx";
import useChannelVideoLimitDefault from "../../../video_calls/useChannelVideoLimit.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_5 from "../../../../stores/AuthenticationStore.tsx";
import closure_6 from "../../../../stores/GuildStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

const require = arg1;
let obj = { container: null };
obj = { backgroundColor: null, borderRadius: null, overflow: "hidden" };
obj[0] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.WHITE, 0.24);
obj[1] = ThemesDefault.radii.sm;
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  importDefault = undefined;
  const tmp = callback();
  const tmp2 = importDefault;
  let obj = channel(9537);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  obj1 = channel(586);
  const items = [closure_6];
  const items1 = [channel.guild_id];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.getGuild(channel.guild_id), items1);
  const tmp4 = useCanCurrentUserSpeakInChannelDefault(channel.id);
  const items2 = [closure_4];
  const items3 = [channel.id];
  const stateFromStoresArray = channel(586).useStateFromStoresArray(
    items2,
    () => closure_1_4.getAllApplicationStreamsForChannel(channel.id),
    items3,
  );
  const obj3 = channel(586);
  const items4 = [closure_5];
  importDefault = channel(586).useStateFromStores(items4, () => id.getId());
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.maxStageVideoChannelUsers;
  }
  if (num == null) {
    num = 0;
  }
  const obj4 = channel(586);
  const stageHasMedia = channel(5369).useStageHasMedia(channel.id);
  const items5 = [];
  items5.push(jsx(channel(10119).StreamVolumeItem, {}));
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
        reachedLimit = useChannelVideoLimitDefault(channel).reachedLimit;
      }
      tmp12 = reachedLimit;
    }
    obj[1] = tmp12;
    items5.push(tmp9(tmp5(10119).ScreenshareButton, obj));
  }
  obj = { channelId: channel.id, isConnectedToVoiceChannel };
  items5.push(jsx(channel(10119).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel }));
  items5.push(jsx(channel(10119).DeafenButton, { channel }));
  obj1 = { style: tmp.container, children: items5.map((children) => callback(closure_3, { children }, arg1)) };
  return <View style={tmp.container}>{items5.map((children) => callback(closure_3, { children }, arg1))}</View>;
});
const result = require("set").fileFinishedImporting(
  "modules/stage_channels/native/components/StageChannelExpandedControls.tsx",
);

export default memoResult;
