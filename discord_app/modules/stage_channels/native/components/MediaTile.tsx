// === Module 10056: MediaTile ===

// Module 10056 (MediaTile)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;

const require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(4581).ParticipantTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: { flex: 1, marginHorizontal: 4, marginVertical: 4 }, media: null };
obj = { flex: 1, borderRadius: nativeDefault.radii.sm };
obj.media = obj;
let closure_7 = createStyles.createStyles(obj);
let size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp = closure_7();
  let obj = channel(10046);
  const speakerTileStyles = obj.useSpeakerTileStyles();
  const isScreenLandscape = channel(5126).useIsScreenLandscape();
  const obj2 = channel(5126);
  const tmp5 = participant;
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const stateFromStores = channel(504).useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      obj = { style: null, children: null };
      const items2 = [tmp.container, , ];
      let tmp2Result = tmp2(10046);
      items2[1] = tmp2Result.getSizeStyle(size, speakerTileStyles);
      tmp2Result = tmp2(10046);
      items2[2] = tmp2Result.getTileWidthStyle(size, participant(1477)().width, isScreenLandscape);
      obj.style = items2;
      obj = { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: tmp2(1178).AvatarSizes.XLARGE, channel, shrinkStreamEmptyState: false, contentStyle: tmp.media };
      obj.children = jsx(tmp5(10057), { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: tmp2(1178).AvatarSizes.XLARGE, channel, shrinkStreamEmptyState: false, contentStyle: tmp.media });
      tmp8 = <View hasBottomSafeArea={false} hasLeftSafeArea={false} hasRightSafeArea={false} hasTopSafeArea={false} participant={stateFromStores} avatarSize={tmp2(1178).AvatarSizes.XLARGE} channel={channel} shrinkStreamEmptyState={false} contentStyle={tmp.media} />;
      const tmp5Result = tmp5(10057);
    }
  }
  return tmp8;
});