// discord_app/modules/stage_channels/native/components/MediaTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

const require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(4777).ParticipantTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj = {
  container: { flex: 1, marginHorizontal: 4, marginVertical: 4 },
  media: { flex: 1, borderRadius: nativeDefault.radii.sm },
};
let closure_7 = createStyles.createStyles(obj);
const obj3 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp = closure_7();
  const speakerTileStyles = channel(10303).useSpeakerTileStyles();
  const obj = channel(10303);
  const tmp5 = participant;
  const isScreenLandscape = channel(5342).useIsScreenLandscape();
  const obj2 = channel(5342);
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
      const items2 = [tmp.container, tmp2(10303).getSizeStyle(size, speakerTileStyles)];
      const tmp2Result = tmp2(10303);
      items2[2] = tmp2(10303).getTileWidthStyle(size, participant(1478)().width, isScreenLandscape);
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
      const tmp2Result2 = tmp2(10303);
      obj5.avatarSize = tmp2(1177).AvatarSizes.XLARGE;
      obj5.channel = channel;
      obj5.contentStyle = tmp.media;
      obj4.children = jsx(tmp5(10314), {
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
      const tmp5Result = tmp5(10314);
    }
  }
  return tmp8;
});
