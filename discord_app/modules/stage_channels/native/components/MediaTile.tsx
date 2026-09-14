// === Module 10185: MediaTile ===

// Module 10185 (MediaTile)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4652 */;

const require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(4657).ParticipantTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
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
  const speakerTileStyles = channel(10175).useSpeakerTileStyles();
  const obj = channel(10175);
  const tmp5 = participant;
  const isScreenLandscape = channel(5207).useIsScreenLandscape();
  const obj2 = channel(5207);
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const stateFromStores = channel(504).useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      const obj4 = { style: null, children: null };
      const items2 = [tmp.container, tmp2(10175).getSizeStyle(size, speakerTileStyles), ];
      const tmp2Result = tmp2(10175);
      items2[2] = tmp2(10175).getTileWidthStyle(size, participant(1477)().width, isScreenLandscape);
      obj4.style = items2;
      const obj5 = { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: null, channel: null, shrinkStreamEmptyState: false, contentStyle: null };
      const tmp2Result2 = tmp2(10175);
      obj5.avatarSize = tmp2(1176).AvatarSizes.XLARGE;
      obj5.channel = channel;
      obj5.contentStyle = tmp.media;
      obj4.children = jsx(tmp5(10186), { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: null, channel: null, shrinkStreamEmptyState: false, contentStyle: null });
      tmp8 = <View style={null}>{null}</View>;
      const tmp5Result = tmp5(10186);
    }
  }
  return tmp8;
});