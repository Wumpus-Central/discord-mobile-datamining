// === Module 11168: MediaTile ===

// Module 11168 (MediaTile)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;

const require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(5115).ParticipantTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { container: { flex: 1, marginHorizontal: 4, marginVertical: 4 }, media: { flex: 1, borderRadius: nativeDefault.radii.sm } };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaTile(channel) {
  const cResult = channel(576).c(23);
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp4 = closure_7();
  const obj = channel(576);
  const speakerTileStyles = channel(11159).useSpeakerTileStyles();
  const width = participant(1497)().width;
  const obj2 = channel(11159);
  const tmp6 = participant;
  const isScreenLandscape = channel(8326).useIsScreenLandscape();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    if (cResult[2] === participant.id) {
      let tmp10 = cResult[3];
      let tmp11 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp10, tmp11);
    if (null != stateFromStores) {
      if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
        if (cResult[5] === size) {
          if (cResult[6] === speakerTileStyles) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === isScreenLandscape) {
            if (cResult[9] === size) {
              if (cResult[10] === width) {
                let tmp16 = cResult[11];
              }
              if (cResult[12] === tmp4.container) {
                if (cResult[13] === tmp14) {
                  if (cResult[14] === tmp16) {
                    let tmp18 = cResult[15];
                  }
                  if (cResult[16] === channel) {
                    if (cResult[17] === stateFromStores) {
                      if (cResult[18] === tmp4.media) {
                        let tmp19 = cResult[19];
                      }
                      if (cResult[20] === tmp18) {
                        if (cResult[21] === tmp19) {
                          let tmp23 = cResult[22];
                        }
                        return tmp23;
                      }
                      const obj4 = { style: tmp18, children: tmp19 };
                      const tmp26 = <View style={tmp18}>{tmp19}</View>;
                      cResult[20] = tmp18;
                      cResult[21] = tmp19;
                      cResult[22] = tmp26;
                      tmp23 = tmp26;
                    }
                  }
                  const obj5 = { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: tmp(1200).AvatarSizes.XLARGE, channel, shrinkStreamEmptyState: false, contentStyle: tmp4.media };
                  const tmp22 = jsx(tmp6(11169), { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: tmp(1200).AvatarSizes.XLARGE, channel, shrinkStreamEmptyState: false, contentStyle: tmp4.media });
                  cResult[16] = channel;
                  cResult[17] = stateFromStores;
                  cResult[18] = tmp4.media;
                  cResult[19] = tmp22;
                  tmp19 = tmp22;
                  const tmp6Result = tmp6(11169);
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
          const tileWidthStyle = tmp(11159).getTileWidthStyle(size, width, isScreenLandscape);
          cResult[8] = isScreenLandscape;
          cResult[9] = size;
          cResult[10] = width;
          cResult[11] = tileWidthStyle;
          tmp16 = tileWidthStyle;
          const tmpResult3 = tmp(11159);
        }
        const sizeStyle = tmp(11159).getSizeStyle(size, speakerTileStyles);
        cResult[5] = size;
        cResult[6] = speakerTileStyles;
        cResult[7] = sizeStyle;
        tmp14 = sizeStyle;
        const tmpResult4 = tmp(11159);
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
  const obj3 = channel(8326);
}) : (function MediaTile(channel) {
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp = closure_7();
  const speakerTileStyles = channel(11159).useSpeakerTileStyles();
  const obj = channel(11159);
  const tmp5 = participant;
  const isScreenLandscape = channel(8326).useIsScreenLandscape();
  const obj2 = channel(8326);
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const stateFromStores = channel(504).useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      const obj4 = { style: null, children: null };
      const items2 = [tmp.container, tmp2(11159).getSizeStyle(size, speakerTileStyles), ];
      const tmp2Result = tmp2(11159);
      items2[2] = tmp2(11159).getTileWidthStyle(size, participant(1497)().width, isScreenLandscape);
      obj4.style = items2;
      const obj5 = { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: null, channel: null, shrinkStreamEmptyState: false, contentStyle: null };
      const tmp2Result2 = tmp2(11159);
      obj5.avatarSize = tmp2(1200).AvatarSizes.XLARGE;
      obj5.channel = channel;
      obj5.contentStyle = tmp.media;
      obj4.children = jsx(tmp5(11169), { hasBottomSafeArea: false, hasLeftSafeArea: false, hasRightSafeArea: false, hasTopSafeArea: false, participant: stateFromStores, avatarSize: null, channel: null, shrinkStreamEmptyState: false, contentStyle: null });
      tmp8 = <View style={null}>{null}</View>;
      const tmp5Result = tmp5(11169);
    }
  }
  return tmp8;
}));