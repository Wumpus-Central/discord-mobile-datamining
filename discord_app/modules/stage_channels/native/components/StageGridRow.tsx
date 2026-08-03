import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ container: { flexDirection: "row", alignItems: "center" }, containerLandscape: { justifyContent: "center" } });
const memoResult = require("noop").memo((row) => {
  let participants;
  let require;
  ({ channel: require, participants } = row);
  let THIRD;
  const tmp = callback();
  let obj = require(4724) /* getIsScreenLandscape */;
  let containerLandscape = obj.useIsScreenLandscape();
  let num = 3;
  if (0 === row.row) {
    num = participants.length;
  }
  if (1 === num) {
    THIRD = tmp2(10853).StageTileSize.FULL;
  } else if (2 === num) {
    THIRD = tmp2(10853).StageTileSize.HALF;
  } else {
    THIRD = tmp2(10853).StageTileSize.THIRD;
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
      if (outer1_0(outer1_2[5]).StageChannelParticipantTypes.STREAM !== type) {
        flag = false;
        if (outer1_0(tmp2[5]).StageChannelParticipantTypes.VOICE === type) {
          const voiceState = type.voiceState;
          let selfVideo;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
          flag = selfVideo;
        }
      }
      if (flag) {
        let obj = { participant: null, size: null, channel: null };
        obj[0] = type;
        obj[1] = THIRD;
        obj[2] = closure_0;
        const _HermesInternal2 = HermesInternal;
        let tmp6Result = tmp6(tmp2[7]);
        let tmp5Result = tmp5(tmp6Result, obj, "stage-media-participant-" + type.id);
      } else {
        obj = { channel: null, participant: null, size: null };
        obj[0] = closure_0;
        obj[1] = type;
        obj[2] = THIRD;
        const _HermesInternal = HermesInternal;
        tmp6Result = tmp6(tmp2[8]);
        tmp5Result = tmp5(tmp6Result, obj, "stage-user-participant-" + type.id);
      }
      return tmp5Result;
    })
  };
  items[1] = containerLandscape;
  return <View style={items}>{participants.map((type) => {
    type = type.type;
    let flag = true;
    if (outer1_0(outer1_2[5]).StageChannelParticipantTypes.STREAM !== type) {
      flag = false;
      if (outer1_0(tmp2[5]).StageChannelParticipantTypes.VOICE === type) {
        const voiceState = type.voiceState;
        let selfVideo;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
        flag = selfVideo;
      }
    }
    if (flag) {
      let obj = { participant: null, size: null, channel: null };
      obj[0] = type;
      obj[1] = THIRD;
      obj[2] = closure_0;
      const _HermesInternal2 = HermesInternal;
      let tmp6Result = tmp6(tmp2[7]);
      let tmp5Result = tmp5(tmp6Result, obj, "stage-media-participant-" + type.id);
    } else {
      obj = { channel: null, participant: null, size: null };
      obj[0] = closure_0;
      obj[1] = type;
      obj[2] = THIRD;
      const _HermesInternal = HermesInternal;
      tmp6Result = tmp6(tmp2[8]);
      tmp5Result = tmp5(tmp6Result, obj, "stage-user-participant-" + type.id);
    }
    return tmp5Result;
  })}</View>;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default memoResult;