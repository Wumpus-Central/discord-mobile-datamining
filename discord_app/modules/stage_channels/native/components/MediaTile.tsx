// === Module 10206: MediaTile ===

// Module 10206 (MediaTile)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4656 */;

const require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(4661).ParticipantTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj = { container: { flex: 1, marginHorizontal: 4, marginVertical: 4 }, media: { flex: 1, borderRadius: nativeDefault.radii.sm } };
let closure_7 = createStyles.createStyles(obj);
const obj3 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp = closure_7();
  const speakerTileStyles = channel(10196).useSpeakerTileStyles();
  const obj = channel(10196);
  const tmp5 = participant;
  const isScreenLandscape = channel(5213).useIsScreenLandscape();
  const obj2 = channel(5213);
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const stateFromStores = channel(504).useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      const obj4 = { style: null, children: null };
      const items2 = [tmp.container, tmp2(10196).getSizeStyle(size, speakerTileStyles), ];
      const tmp2Result = tmp2(10196);
      items2[2] = tmp2(10196).getTileWidthStyle(size, participant(1478)().width, isScreenLandscape);
      obj4.style = items2;
      const obj5 = { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: null, channel: null, shrinkStreamEmptyState: false, contentStyle: null };
      const tmp2Result2 = tmp2(10196);
      obj5.avatarSize = tmp2(1177).AvatarSizes.XLARGE;
      obj5.channel = channel;
      obj5.contentStyle = tmp.media;
      obj4.children = jsx(tmp5(10207), { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: null, channel: null, shrinkStreamEmptyState: false, contentStyle: null });
      tmp8 = <View style={null}>{null}</View>;
      const tmp5Result = tmp5(10207);
    }
  }
  return tmp8;
});