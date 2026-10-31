// discord_app/modules/stage_channels/native/components/MediaTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

const require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(5681).ParticipantTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj = {
  container: { flex: 1, marginHorizontal: 4, marginVertical: 4 },
  media: { flex: 1, borderRadius: nativeDefault.radii.sm },
};
let closure_7 = createStyles.createStyles(obj);
const obj3 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default noop.memo(function MediaTile(channel) {
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp = closure_7();
  const speakerTileStyles = channel(12026).useSpeakerTileStyles();
  const obj = channel(12026);
  const tmp5 = participant;
  const isScreenLandscape = channel(8773).useIsScreenLandscape();
  const obj2 = channel(8773);
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const stateFromStores = channel(504).useStateFromStores(
    items,
    () => ChannelRTCStore.getParticipant(channel.id, participant.id),
    items1,
  );
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      const obj4 = { style: null, children: null };
      const items2 = [tmp.container, tmp2(12026).getSizeStyle(size, speakerTileStyles)];
      const tmp2Result = tmp2(12026);
      items2[2] = tmp2(12026).getTileWidthStyle(size, participant(1491)().width, isScreenLandscape);
      obj4.style = items2;
      const obj5 = {
        hasBottomSafeArea: false,
        hasLeftSafeArea: false,
        hasRightSafeArea: false,
        hasTopSafeArea: false,
        participant: stateFromStores,
        avatarSize: null,
        channel: null,
        shrinkStreamEmptyState: false,
        contentStyle: null,
      };
      const tmp2Result2 = tmp2(12026);
      obj5.avatarSize = tmp2(1187).AvatarSizes.XLARGE;
      obj5.channel = channel;
      obj5.contentStyle = tmp.media;
      obj4.children = jsx(tmp5(12036), {
        hasBottomSafeArea: false,
        hasLeftSafeArea: false,
        hasRightSafeArea: false,
        hasTopSafeArea: false,
        participant: stateFromStores,
        avatarSize: null,
        channel: null,
        shrinkStreamEmptyState: false,
        contentStyle: null,
      });
      tmp8 = <View style={null}>{null}</View>;
      const tmp5Result = tmp5(12036);
    }
  }
  return tmp8;
});
