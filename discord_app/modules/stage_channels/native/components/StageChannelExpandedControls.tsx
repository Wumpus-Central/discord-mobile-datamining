// discord_app/modules/stage_channels/native/components/StageChannelExpandedControls.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useCanSpeakInChannelDefault from "../../useCanSpeakInChannel.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ColorUtils_mod from "../../../../utils/ColorUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel, importDefault;

let ColorUtils;
let obj2;
let tmp2;
const useChannelVideoLimitDefault = tmp2(9305);
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2 };
obj2 = {
  backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24),
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
let closure_8 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let arr7;
        let first;
        let id;
        let stateFromStores1;
        let tmp10;
        let tmp11;
        let tmp13;
        let tmp15;
        let tmp16;
        let tmp17;
        let tmp18;
        let tmp22;
        const obj = channel(576);
        const cResult = obj.c(38);
        channel = channel.channel;
        const tmp4 = closure_8();
        const tmp6 = stateFromStores1(9082)(channel.id);
        const obj2 = channel(9054);
        const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
        const tmp5 = stateFromStores1;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel.guild_id) {
          const fn = function h() {
            return GuildStore.getGuild(channel.guild_id);
          };
          const items1 = [channel.guild_id];
          cResult[1] = channel.guild_id;
          cResult[2] = fn;
          cResult[3] = items1;
          tmp11 = items1;
          tmp10 = fn;
        } else {
          tmp10 = cResult[2];
          tmp11 = cResult[3];
        }
        const tmpResult = channel(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp10, tmp11);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ApplicationStreamingStore];
          cResult[4] = items2;
          tmp13 = items2;
        } else {
          tmp13 = cResult[4];
        }
        if (cResult[5] !== channel.id) {
          const fn2 = function y() {
            return ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id);
          };
          const items3 = [channel.id];
          cResult[5] = channel.id;
          cResult[6] = fn2;
          cResult[7] = items3;
          tmp16 = items3;
          tmp15 = fn2;
        } else {
          tmp15 = cResult[6];
          tmp16 = cResult[7];
        }
        const tmpResult4 = channel(504);
        const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp13, tmp15, tmp16);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items4 = [AuthenticationStore];
          class A {
            constructor() {
              return id.getId();
            }
          }
          cResult[8] = items4;
          cResult[9] = A;
          tmp18 = A;
          tmp17 = items4;
        } else {
          tmp17 = cResult[8];
          tmp18 = cResult[9];
        }
        const tmpResult5 = channel(504);
        stateFromStores1 = tmpResult5.useStateFromStores(tmp17, tmp18);
        let num11;
        if (stateFromStores != null) {
          num11 = stateFromStores.maxStageVideoChannelUsers;
        }
        if (num11 == null) {
          num11 = 0;
        }
        const tmpResult6 = channel(5574);
        const stageHasMedia = tmpResult6.useStageHasMedia(channel.id);
        const reachedLimit = tmp5(9305)(channel).reachedLimit;
        if (cResult[10] === channel) {
          if (cResult[11] === stateFromStores1) {
            if (cResult[12] === stageHasMedia) {
              if (cResult[13] === isConnectedToVoiceChannel) {
                if (cResult[14] === tmp6) {
                  if (cResult[15] === reachedLimit) {
                    if (cResult[16] === num11) {
                      let tmp40;
                      if (cResult[17] === stateFromStoresArray) {
                        arr7 = cResult[18];
                      }
                      const container = tmp4.container;
                      if (cResult[33] !== arr7) {
                        const mapped = arr7.map((children, index) => <View key={index}>{children}</View>);
                        cResult[33] = arr7;
                        class A {
                          constructor() {
                            return id.getId();
                          }
                        }
                        cResult[34] = mapped;
                        tmp40 = mapped;
                      } else {
                        tmp40 = cResult[34];
                      }
                      class A {
                        constructor() {
                          return id.getId();
                        }
                      }
                      const tmp45 = <View style={container}>{tmp40}</View>;
                      cResult[35] = tmp4.container;
                      cResult[36] = tmp40;
                      cResult[37] = tmp45;
                    }
                  }
                }
              }
            }
          }
        }
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp24 = jsx(channel(9698).StreamVolumeItem, {});
          class A {
            constructor() {
              return id.getId();
            }
          }
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[19];
        }
        const items5 = [];
        items5.push(tmp22);
        if (num11 > 0) {
          if (tmp6) {
            if (cResult[20] === stateFromStores1) {
              if (cResult[21] === stageHasMedia) {
                if (cResult[22] === reachedLimit) {
                  let tmp26;
                  if (cResult[23] === stateFromStoresArray) {
                    tmp26 = cResult[24];
                  }
                  if (cResult[25] === channel) {
                    let tmp29;
                    if (cResult[26] === tmp26) {
                      tmp29 = cResult[27];
                    }
                    items5.push(tmp29);
                  }
                  class A {
                    constructor() {
                      return id.getId();
                    }
                  }
                  tmp31[0] = channel;
                  tmp31[1] = tmp26;
                  const tmp32 = jsx(channel(9698).ScreenshareButton, tmp31);
                  cResult[25] = channel;
                  cResult[26] = tmp26;
                  cResult[27] = tmp32;
                  tmp29 = tmp32;
                }
              }
            }
            let tmp27 =
              stateFromStoresArray.length > 0 &&
              null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === stateFromStores1);
            if (!tmp27) {
              tmp27 = !stageHasMedia && reachedLimit;
            }
            class A {
              constructor() {
                return id.getId();
              }
            }
            cResult[20] = stateFromStores1;
            cResult[21] = stageHasMedia;
            cResult[22] = reachedLimit;
            cResult[23] = stateFromStoresArray;
            cResult[24] = tmp27;
            tmp26 = tmp27;
          }
        }
        if (cResult[28] === channel.id) {
          let tmp34;
          if (cResult[29] === isConnectedToVoiceChannel) {
            tmp34 = cResult[30];
          }
          items5.push(tmp34);
          if (cResult[31] !== channel) {
            class A {
              constructor() {
                return id.getId();
              }
            }
            cResult[31] = channel;
            cResult[32] = tmp39;
          }
          class A {
            constructor() {
              return id.getId();
            }
          }
          cResult[10] = channel;
          cResult[11] = stateFromStores1;
          cResult[12] = stageHasMedia;
          cResult[13] = isConnectedToVoiceChannel;
          cResult[14] = tmp6;
          cResult[15] = reachedLimit;
          cResult[16] = num11;
          cResult[17] = stateFromStoresArray;
          cResult[18] = items5;
          arr7 = items5;
        }
        const tmp35 = jsx(channel(9698).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel });
        cResult[28] = channel.id;
        cResult[29] = isConnectedToVoiceChannel;
        cResult[30] = tmp35;
        tmp34 = tmp35;
      }
    : (channel) => {
        let closure_1;
        let id;
        channel = channel.channel;
        importDefault = undefined;
        const tmp = closure_8();
        const tmp4 = useCanSpeakInChannelDefault(channel.id);
        const obj = channel(9054);
        const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
        const items = [GuildStore];
        const items1 = [channel.guild_id];
        const obj2 = channel(504);
        const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id), items1);
        const items2 = [ApplicationStreamingStore];
        const items3 = [channel.id];
        const obj3 = channel(504);
        const stateFromStoresArray = obj3.useStateFromStoresArray(
          items2,
          () => ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id),
          items3,
        );
        const items4 = [AuthenticationStore];
        const obj4 = channel(504);
        importDefault = obj4.useStateFromStores(items4, () => id.getId());
        let num;
        if (stateFromStores != null) {
          num = stateFromStores.maxStageVideoChannelUsers;
        }
        if (num == null) {
          num = 0;
        }
        const tmp5Result = channel(5574);
        const stageHasMedia = tmp5Result.useStageHasMedia(channel.id);
        const items5 = [];
        const reachedLimit = useChannelVideoLimitDefault(channel).reachedLimit;
        items5.push(jsx(channel(9698).StreamVolumeItem, {}));
        const tmp11 = num > 0 && tmp4;
        if (tmp11) {
          const push = items5.push;
          let tmp12 = stateFromStoresArray.length > 0;
          const ScreenshareButton = tmp5(9698).ScreenshareButton;
          if (tmp12) {
            tmp12 = null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === closure_1);
          }
          if (!tmp12) {
            tmp12 = !stageHasMedia && reachedLimit;
          }
          push(<ScreenshareButton channel={channel} disabled={tmp12} />);
        }
        items5.push(jsx(channel(9698).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel }));
        items5.push(jsx(channel(9698).DeafenButton, { channel }));
        return (
          <View style={tmp.container}>
            {items5.map((children, index) => (
              <View key={index}>{children}</View>
            ))}
          </View>
        );
      },
);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelExpandedControls.tsx");

export default memoResult;
