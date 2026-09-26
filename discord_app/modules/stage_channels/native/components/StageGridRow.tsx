// discord_app/modules/stage_channels/native/components/StageGridRow.tsx
import useIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import StageChannelParticipants from "../../StageChannelParticipants.tsx";
import SpeakerTileDefault from "SpeakerTile.tsx";
import StageTileTypes from "../../StageTileTypes.tsx";
import MediaTileDefault from "MediaTile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_5 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center" },
  containerLandscape: { justifyContent: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default noop.memo((row) => {
  ({ channel: require, participants } = row);
  let THIRD;
  const tmp = closure_5();
  let containerLandscape = useIsScreenLandscape.useIsScreenLandscape();
  let num = 3;
  if (0 === row.row) {
    num = participants.length;
  }
  if (1 === num) {
    THIRD = StageTileTypes.StageTileSize.FULL;
  } else if (2 === num) {
    THIRD = StageTileTypes.StageTileSize.HALF;
  } else {
    THIRD = StageTileTypes.StageTileSize.THIRD;
  }
  const items = [tmp.container];
  if (containerLandscape) {
    containerLandscape = tmp.containerLandscape;
  }
  items[1] = containerLandscape;
  return (
    <View style={items}>
      {participants.map((type) => {
        type = type.type;
        let flag = true;
        if (StageChannelParticipants.StageChannelParticipantTypes.STREAM !== type) {
          flag = false;
          if (StageChannelParticipants.StageChannelParticipantTypes.VOICE === type) {
            const voiceState = type.voiceState;
            let selfVideo;
            if (voiceState != null) {
              selfVideo = voiceState.selfVideo;
            }
            flag = selfVideo;
          }
        }
        if (flag) {
          const obj2 = { participant: type, size: THIRD, channel };
          const _HermesInternal2 = HermesInternal;
          let tmp5Result = jsx(
            MediaTileDefault,
            { participant: type, size: THIRD, channel },
            "stage-media-participant-" + type.id,
          );
          const tmp6Result = MediaTileDefault;
        } else {
          const obj = { channel, participant: type, size: THIRD };
          const _HermesInternal = HermesInternal;
          tmp5Result = jsx(
            SpeakerTileDefault,
            { channel, participant: type, size: THIRD },
            "stage-user-participant-" + type.id,
          );
          const tmp6Result2 = SpeakerTileDefault;
        }
        return tmp5Result;
      })}
    </View>
  );
});
