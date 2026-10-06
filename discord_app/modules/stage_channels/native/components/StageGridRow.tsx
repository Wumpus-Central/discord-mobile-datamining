// discord_app/modules/stage_channels/native/components/StageGridRow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import StageChannelParticipants from "../../StageChannelParticipants.tsx";
import useIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import SpeakerTileDefault from "SpeakerTile.tsx";
import StageTileTypes from "../../StageTileTypes.tsx";
import MediaTileDefault from "MediaTile.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center" },
  containerLandscape: { justifyContent: "center" },
});
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let tmp6;
        const obj = channel(576);
        const cResult = obj.c(15);
        channel = channel.channel;
        const participants = channel.participants;
        const row = channel.row;
        const tmp4 = closure_5();
        const obj2 = channel(5919);
        const isScreenLandscape = obj2.useIsScreenLandscape();
        let num = 3;
        if (0 === row) {
          num = participants.length;
        }
        if (cResult[0] !== num) {
          let THIRD;
          if (1 === num) {
            THIRD = tmp(9744).StageTileSize.FULL;
          } else if (2 === num) {
            THIRD = tmp(9744).StageTileSize.HALF;
          } else {
            THIRD = tmp(9744).StageTileSize.THIRD;
          }
          cResult[0] = num;
          cResult[1] = THIRD;
          tmp6 = THIRD;
        } else {
          tmp6 = cResult[1];
        }
        size = tmp6;
        if (cResult[2] === tmp4.container) {
          let tmp8;
          let tmp9;
          if (cResult[3] === (isScreenLandscape && tmp4.containerLandscape)) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === channel) {
            if (cResult[6] === participants) {
              if (cResult[7] === tmp6) {
                tmp9 = cResult[8];
              }
              if (cResult[12] === tmp8) {
                let tmp12;
                if (cResult[13] === tmp9) {
                  tmp12 = cResult[14];
                }
                return tmp12;
              }
              const tmp15 = <View style={tmp8}>{tmp9}</View>;
              cResult[12] = tmp8;
              cResult[13] = tmp9;
              cResult[14] = tmp15;
              tmp12 = tmp15;
            }
          }
          if (cResult[9] === channel) {
            let tmp10;
            if (cResult[10] === tmp6) {
              tmp10 = cResult[11];
            }
            const mapped = participants.map(tmp10);
            cResult[5] = channel;
            cResult[6] = participants;
            cResult[7] = tmp6;
            cResult[8] = mapped;
            tmp9 = mapped;
          }
          const fn = function y(type) {
            let tmp5Result;
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
              const _HermesInternal2 = HermesInternal;
              MediaTileDefault;
              tmp5Result = (
                <tmp6Result
                  key={"stage-media-participant-" + type.id}
                  participant={type}
                  size={size}
                  channel={channel}
                />
              );
            } else {
              const _HermesInternal = HermesInternal;
              SpeakerTileDefault;
              tmp5Result = (
                <tmp6Result2
                  key={"stage-user-participant-" + type.id}
                  channel={channel}
                  participant={type}
                  size={size}
                />
              );
            }
            return tmp5Result;
          };
          cResult[9] = channel;
          cResult[10] = tmp6;
          cResult[11] = fn;
          tmp10 = fn;
        }
        const items = [tmp4.container, isScreenLandscape && tmp4.containerLandscape];
        cResult[2] = tmp4.container;
        cResult[3] = isScreenLandscape && tmp4.containerLandscape;
        cResult[4] = items;
        tmp8 = items;
      }
    : (row) => {
        let channel;
        let participants;
        ({ channel: require, participants } = row);
        let THIRD;
        row = row.row;
        const tmp = closure_5();
        const obj = useIsScreenLandscape;
        let containerLandscape = obj.useIsScreenLandscape();
        let num = 3;
        if (0 === row) {
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
              let tmp5Result;
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
                const _HermesInternal2 = HermesInternal;
                MediaTileDefault;
                tmp5Result = (
                  <tmp6Result
                    key={"stage-media-participant-" + type.id}
                    participant={type}
                    size={THIRD}
                    channel={require}
                  />
                );
              } else {
                const _HermesInternal = HermesInternal;
                SpeakerTileDefault;
                tmp5Result = (
                  <tmp6Result2
                    key={"stage-user-participant-" + type.id}
                    channel={require}
                    participant={type}
                    size={THIRD}
                  />
                );
              }
              return tmp5Result;
            })}
          </View>
        );
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default memoResult;
