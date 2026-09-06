// === Module 10055: StageGridRow ===

// Module 10055 (StageGridRow)
import useIsScreenLandscape from "useIsScreenLandscape" /* 5126 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5425 */;
import SpeakerTileDefault from "SpeakerTile" /* 10046 */;
import StageTileTypes from "StageTileTypes" /* 10047 */;
import MediaTileDefault from "MediaTile" /* 10056 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center" }, containerLandscape: { justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default noop.memo((row) => {
  ({ channel: require, participants } = row);
  let THIRD;
  const tmp = closure_5();
  let obj = useIsScreenLandscape;
  let containerLandscape = obj.useIsScreenLandscape();
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
  const items = [tmp.container, ];
  if (containerLandscape) {
    containerLandscape = tmp.containerLandscape;
  }
  obj = {
    style: items,
    children: participants.map((type) => {
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
        let obj = { participant: type, size: THIRD, channel };
        const _HermesInternal2 = HermesInternal;
        let tmp6Result = MediaTileDefault;
        let tmp5Result = <tmp6Result key={"stage-media-participant-" + type.id} participant={type} size={THIRD} channel={channel} />;
      } else {
        obj = { channel, participant: type, size: THIRD };
        const _HermesInternal = HermesInternal;
        tmp6Result = SpeakerTileDefault;
        tmp5Result = <tmp6Result key={"stage-user-participant-" + type.id} channel={channel} participant={type} size={THIRD} />;
      }
      return tmp5Result;
    })
  };
  items[1] = containerLandscape;
  return <View style={items}>{participants.map((type) => {
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
      let obj = { participant: type, size: THIRD, channel };
      const _HermesInternal2 = HermesInternal;
      let tmp6Result = MediaTileDefault;
      let tmp5Result = <tmp6Result key={"stage-media-participant-" + type.id} participant={type} size={THIRD} channel={channel} />;
    } else {
      obj = { channel, participant: type, size: THIRD };
      const _HermesInternal = HermesInternal;
      tmp6Result = SpeakerTileDefault;
      tmp5Result = <tmp6Result key={"stage-user-participant-" + type.id} channel={channel} participant={type} size={THIRD} />;
    }
    return tmp5Result;
  })}</View>;
});