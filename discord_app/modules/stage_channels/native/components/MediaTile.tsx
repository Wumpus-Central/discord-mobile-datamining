// === Module 9753: MediaTile ===

// Module 9753 (MediaTile)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import CallConstants from "CallConstants" /* 4917 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let channel;

let obj2;
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
const jsx = Fragment.jsx;
let obj = { container: { flex: 1, marginHorizontal: 4, marginVertical: 4 }, media: obj2 };
obj2 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let closure_7 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  const obj = channel(576);
  const cResult = obj.c(23);
  channel = channel.channel;
  const participant = channel.participant;
  size = channel.size;
  const tmp4 = closure_7();
  const obj2 = channel(9743);
  const speakerTileStyles = obj2.useSpeakerTileStyles();
  const width = participant(1484)().width;
  const obj3 = channel(5919);
  const isScreenLandscape = obj3.useIsScreenLandscape();
  const tmp6 = participant;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    let tmp10;
    let tmp11;
    if (cResult[2] === participant.id) {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    const tmpResult = channel(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp10, tmp11);
    if (null != stateFromStores) {
      if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
        if (cResult[5] === size) {
          let tmp14;
          if (cResult[6] === speakerTileStyles) {
            tmp14 = cResult[7];
          }
          if (cResult[8] === isScreenLandscape) {
            if (cResult[9] === size) {
              let tmp16;
              if (cResult[10] === width) {
                tmp16 = cResult[11];
              }
              if (cResult[12] === tmp4.container) {
                if (cResult[13] === tmp14) {
                  let tmp18;
                  if (cResult[14] === tmp16) {
                    tmp18 = cResult[15];
                  }
                  if (cResult[16] === channel) {
                    if (cResult[17] === stateFromStores) {
                      let tmp19;
                      if (cResult[18] === tmp4.media) {
                        tmp19 = cResult[19];
                      }
                      if (cResult[20] === tmp18) {
                        let tmp23;
                        if (cResult[21] === tmp19) {
                          tmp23 = cResult[22];
                        }
                        return tmp23;
                      }
                      const tmp26 = <View style={tmp18}>{tmp19}</View>;
                      cResult[20] = tmp18;
                      cResult[21] = tmp19;
                      cResult[22] = tmp26;
                      tmp23 = tmp26;
                    }
                  }
                  tmp6(9754);
                  const tmp22 = <tmp6Result hasBottomSafeArea={false} hasLeftSafeArea={false} hasRightSafeArea={false} hasTopSafeArea={false} participant={stateFromStores} avatarSize={channel(1188).AvatarSizes.XLARGE} channel={channel} shrinkStreamEmptyState={false} contentStyle={tmp4.media} />;
                  cResult[16] = channel;
                  cResult[17] = stateFromStores;
                  cResult[18] = tmp4.media;
                  cResult[19] = tmp22;
                  tmp19 = tmp22;
                }
              }
              const items1 = [tmp28, tmp14, tmp16];
              cResult[12] = tmp4.container;
              cResult[13] = tmp14;
              cResult[14] = tmp16;
              cResult[15] = items1;
              tmp18 = items1;
            }
          }
          const tmpResult3 = channel(9743);
          const tileWidthStyle = tmpResult3.getTileWidthStyle(size, width, isScreenLandscape);
          cResult[8] = isScreenLandscape;
          cResult[9] = size;
          cResult[10] = width;
          cResult[11] = tileWidthStyle;
          tmp16 = tileWidthStyle;
        }
        const tmpResult4 = channel(9743);
        const sizeStyle = tmpResult4.getSizeStyle(size, speakerTileStyles);
        cResult[5] = size;
        cResult[6] = speakerTileStyles;
        cResult[7] = sizeStyle;
        tmp14 = sizeStyle;
      }
    }
    return null;
  }
  const fn = function p() {
    return ChannelRTCStore.getParticipant(channel.id, participant.id);
  };
  const items2 = [channel.id, participant.id];
  cResult[1] = channel.id;
  cResult[2] = participant.id;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp11 = items2;
  tmp10 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const participant = channel.participant;
  size = channel.size;
  const tmp = closure_7();
  const obj = channel(9743);
  const speakerTileStyles = obj.useSpeakerTileStyles();
  const width = participant(1484)().width;
  const obj2 = channel(5919);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const obj3 = channel(504);
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  let tmp8 = null;
  const tmp5 = participant;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      const items2 = [tmp.container, , ];
      const tmp2Result = channel(9743);
      items2[1] = tmp2Result.getSizeStyle(size, speakerTileStyles);
      const tmp2Result2 = channel(9743);
      items2[2] = tmp2Result2.getTileWidthStyle(size, width, isScreenLandscape);
      ({ hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: channel(1188).AvatarSizes.XLARGE, channel, shrinkStreamEmptyState: false, contentStyle: tmp.media });
      tmp5(9754);
      tmp8 = <View style={items2}>{null}</View>;
    }
  }
  return tmp8;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default memoResult;