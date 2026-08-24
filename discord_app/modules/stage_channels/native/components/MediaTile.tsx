// discord_app/modules/stage_channels/native/components/MediaTile.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../calls/ChannelRTCStore.tsx";
import { ParticipantTypes } from "../../../calls/CallConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

const require = arg1;
let obj = { container: { flex: 1, marginHorizontal: 4, marginVertical: 4 }, media: null };
obj = { flex: 1, borderRadius: ThemesDefault.radii.sm };
obj[1] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp = callback();
  let obj = channel(12604);
  const speakerTileStyles = obj.useSpeakerTileStyles();
  const isScreenLandscape = channel(8944).useIsScreenLandscape();
  const obj2 = channel(8944);
  const tmp5 = participant;
  const items = [closure_4];
  const items1 = [channel.id, participant.id];
  const stateFromStores = channel(589).useStateFromStores(items, () => closure_1_4.getParticipant(channel.id, participant.id), items1);
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      obj = { style: null, children: null };
      const items2 = [tmp.container, , ];
      let tmp2Result = tmp2(12604);
      items2[1] = tmp2Result.getSizeStyle(size, speakerTileStyles);
      tmp2Result = tmp2(12604);
      items2[2] = tmp2Result.getTileWidthStyle(size, participant(1494)().width, isScreenLandscape);
      obj[0] = items2;
      obj = { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: null, avatarSize: null, channel: null, shrinkStreamEmptyState: false, contentStyle: null };
      obj[4] = stateFromStores;
      obj[5] = tmp2(1297).AvatarSizes.XLARGE;
      obj[6] = channel;
      obj[8] = tmp.media;
      obj[1] = jsx(tmp5(12614), { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: null, avatarSize: null, channel: null, shrinkStreamEmptyState: false, contentStyle: null });
      tmp8 = <View hasBottomSafeArea={false} hasLeftSafeArea={false} hasRightSafeArea={false} hasTopSafeArea={false} participant={null} avatarSize={null} channel={null} shrinkStreamEmptyState={false} contentStyle={null} />;
      const tmp5Result = tmp5(12614);
    }
  }
  return tmp8;
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default memoResult;