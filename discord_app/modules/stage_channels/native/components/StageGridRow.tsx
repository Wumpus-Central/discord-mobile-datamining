// === Module 12612: ? ===

// Module 12612
import sortKey from "sortKey" /* 6703 */;
import getIsScreenLandscape from "getIsScreenLandscape" /* 8944 */;
import StageTileSize from "StageTileSize" /* 12605 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_5 = createCacheKey.createStyles({ container: { flexDirection: "row", alignItems: "center" }, containerLandscape: { justifyContent: "center" } });
const memoResult = importAllResult.memo((row) => {
  ({ channel: require, participants } = row);
  let THIRD;
  const tmp = callback();
  let obj = getIsScreenLandscape;
  let containerLandscape = obj.useIsScreenLandscape();
  let num = 3;
  if (0 === row.row) {
    num = participants.length;
  }
  if (1 === num) {
    THIRD = StageTileSize.StageTileSize.FULL;
  } else if (2 === num) {
    THIRD = StageTileSize.StageTileSize.HALF;
  } else {
    THIRD = StageTileSize.StageTileSize.THIRD;
  }
  const items = [tmp.container, ];
  if (containerLandscape) {
    containerLandscape = tmp.containerLandscape;
  }
  obj = {
    style: items,
    children: participants.map((item, index) => {
      const type = item.type;
      let flag = true;
      if (sortKey.StageChannelParticipantTypes.STREAM !== type) {
        flag = false;
        if (sortKey.StageChannelParticipantTypes.VOICE === type) {
          const voiceState = item.voiceState;
          let selfVideo;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
          flag = selfVideo;
        }
      }
      if (flag) {
        let obj = { participant: null, size: null, channel: null };
        obj[0] = item;
        obj[1] = THIRD;
        obj[2] = closure_0;
        const _HermesInternal2 = HermesInternal;
        let tmp6Result = THIRD(dependencyMap[7]);
        let tmp5Result = <tmp6Result key={"stage-media-participant-" + item.id} participant={null} size={null} channel={null} />;
      } else {
        obj = { channel: null, participant: null, size: null };
        obj[0] = closure_0;
        obj[1] = item;
        obj[2] = THIRD;
        const _HermesInternal = HermesInternal;
        tmp6Result = THIRD(dependencyMap[8]);
        tmp5Result = <tmp6Result key={"stage-user-participant-" + item.id} channel={null} participant={null} size={null} />;
      }
      return tmp5Result;
    })
  };
  items[1] = containerLandscape;
  return <View style={items}>{participants.map((item, index) => {
    const type = item.type;
    let flag = true;
    if (sortKey.StageChannelParticipantTypes.STREAM !== type) {
      flag = false;
      if (sortKey.StageChannelParticipantTypes.VOICE === type) {
        const voiceState = item.voiceState;
        let selfVideo;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
        flag = selfVideo;
      }
    }
    if (flag) {
      let obj = { participant: null, size: null, channel: null };
      obj[0] = item;
      obj[1] = THIRD;
      obj[2] = closure_0;
      const _HermesInternal2 = HermesInternal;
      let tmp6Result = THIRD(dependencyMap[7]);
      let tmp5Result = <tmp6Result key={"stage-media-participant-" + item.id} participant={null} size={null} channel={null} />;
    } else {
      obj = { channel: null, participant: null, size: null };
      obj[0] = closure_0;
      obj[1] = item;
      obj[2] = THIRD;
      const _HermesInternal = HermesInternal;
      tmp6Result = THIRD(dependencyMap[8]);
      tmp5Result = <tmp6Result key={"stage-user-participant-" + item.id} channel={null} participant={null} size={null} />;
    }
    return tmp5Result;
  })}</View>;
});
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default memoResult;