// discord_app/modules/stage_channels/native/components/StageGridRow.tsx
import StageChannelParticipants from "../../StageChannelParticipants.tsx";
import useIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import SpeakerTileDefault from "SpeakerTile.tsx";
import StageTileTypes from "../../StageTileTypes.tsx";
import MediaTileDefault from "MediaTile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center" },
  containerLandscape: { justifyContent: "center" },
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function StageGridRow(channel) {
        let StageTileSize = dependencyMap;
        const cResult = channel(576).c(15);
        channel = channel.channel;
        const participants = channel.participants;
        const tmp3 = closure_5();
        let obj = channel(576);
        const isScreenLandscape = channel(8310).useIsScreenLandscape();
        let num = 3;
        if (0 === channel.row) {
          num = participants.length;
        }
        if (cResult[0] !== num) {
          if (1 === num) {
            StageTileSize = tmp(11120).StageTileSize;
            let HALF = StageTileSize.FULL;
            cResult[0] = num;
            cResult[1] = HALF;
          } else if (2 !== num) {
            HALF = tmp(11120).StageTileSize.THIRD;
          }
          HALF = tmp(11120).StageTileSize.HALF;
        } else {
          const size = tmp5;
          let containerLandscape = isScreenLandscape;
          if (isScreenLandscape) {
            containerLandscape = tmp3.containerLandscape;
          }
          if (cResult[2] === tmp3.container) {
            if (cResult[3] === containerLandscape) {
              let tmp7 = cResult[4];
            }
            if (cResult[5] === channel) {
              if (cResult[6] === participants) {
                if (cResult[7] === tmp5) {
                  if (cResult[12] === tmp7) {
                    if (cResult[13] === tmp8) {
                      let tmp12 = cResult[14];
                    }
                    return tmp12;
                  }
                  const obj3 = { style: tmp7, children: cResult[8] };
                  const tmp15 = <View style={tmp7}>{cResult[8]}</View>;
                  cResult[12] = tmp7;
                  cResult[13] = cResult[8];
                  cResult[14] = tmp15;
                  tmp12 = tmp15;
                }
              }
            }
            if (cResult[9] === channel) {
              if (cResult[10] === tmp5) {
                let tmp9 = cResult[11];
              }
              const mapped = participants.map(tmp9);
              cResult[5] = channel;
              cResult[6] = participants;
              cResult[7] = tmp5;
              cResult[8] = mapped;
            }
            const fn = function v(type) {
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
                const obj2 = { participant: type, size, channel };
                const _HermesInternal2 = HermesInternal;
                let tmp5Result = jsx(
                  MediaTileDefault,
                  { participant: type, size, channel },
                  "stage-media-participant-" + type.id,
                );
                const tmp6Result = MediaTileDefault;
              } else {
                const obj = { channel, participant: type, size };
                const _HermesInternal = HermesInternal;
                tmp5Result = jsx(
                  SpeakerTileDefault,
                  { channel, participant: type, size },
                  "stage-user-participant-" + type.id,
                );
                const tmp6Result2 = SpeakerTileDefault;
              }
              return tmp5Result;
            };
            cResult[9] = channel;
            cResult[10] = tmp5;
            cResult[11] = fn;
            tmp9 = fn;
          }
          const items = [tmp3.container, containerLandscape];
          cResult[2] = tmp3.container;
          cResult[3] = containerLandscape;
          cResult[4] = items;
          tmp7 = items;
        }
        let obj2 = channel(8310);
      }
    : function StageGridRow(row) {
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
      },
);
