// discord_app/modules/stage_channels/native/components/StageChannelExpandedControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useCanSpeakInChannelDefault from "../../useCanSpeakInChannel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

const useChannelVideoLimitDefault = tmp2(9305);
const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { container: null };
let obj3 = { backgroundColor: null, borderRadius: null, overflow: "hidden" };
const ColorUtils = fn(4727);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
obj3.borderRadius = nativeDefault.radii.sm;
obj.container = obj3;
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelExpandedControls.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let DeafenButton = channel;
        const cResult = channel(576).c(38);
        channel = channel.channel;
        const tmp3 = closure_8();
        const tmp5 = stateFromStores1(9082)(channel.id);
        const obj = channel(576);
        const tmp4 = stateFromStores1;
        const isConnectedToVoiceChannel = channel(9054).useIsConnectedToVoiceChannel(channel);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildStore];
          cResult[0] = items;
          let first = items;
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
          let tmp10 = items1;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[2];
          tmp10 = cResult[3];
        }
        const obj2 = channel(9054);
        const stateFromStores = DeafenButton(504).useStateFromStores(first, tmp9, tmp10);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ApplicationStreamingStore];
          cResult[4] = items2;
          let tmp12 = items2;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] !== channel.id) {
          const fn2 = function y() {
            return ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id);
          };
          const items3 = [channel.id];
          cResult[5] = channel.id;
          cResult[6] = fn2;
          cResult[7] = items3;
          let tmp15 = items3;
          let tmp14 = fn2;
        } else {
          tmp14 = cResult[6];
          tmp15 = cResult[7];
        }
        const DeafenButtonResult = DeafenButton(504);
        const stateFromStoresArray = DeafenButton(504).useStateFromStoresArray(tmp12, tmp14, tmp15);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items4 = [AuthenticationStore];
          class A {
            constructor() {
              return closure_1_5.getId();
            }
          }
          cResult[8] = items4;
          cResult[9] = A;
          let tmp17 = A;
          let tmp16 = items4;
        } else {
          tmp16 = cResult[8];
          tmp17 = cResult[9];
        }
        const DeafenButtonResult1 = DeafenButton(504);
        stateFromStores1 = DeafenButton(504).useStateFromStores(tmp16, tmp17);
        let num11;
        if (stateFromStores != null) {
          num11 = stateFromStores.maxStageVideoChannelUsers;
        }
        if (num11 == null) {
          num11 = 0;
        }
        const DeafenButtonResult2 = DeafenButton(504);
        const stageHasMedia = DeafenButton(5574).useStageHasMedia(channel.id);
        const reachedLimit = tmp4(9305)(channel).reachedLimit;
        if (cResult[10] === channel) {
          if (cResult[11] === stateFromStores1) {
            if (cResult[12] === stageHasMedia) {
              if (cResult[13] === isConnectedToVoiceChannel) {
                if (cResult[14] === tmp5) {
                  if (cResult[15] === reachedLimit) {
                    if (cResult[16] === num11) {
                      if (cResult[17] === stateFromStoresArray) {
                        if (cResult[33] !== cResult[18]) {
                          const mapped = arr7.map((children, index) => <View key={index}>{children}</View>);
                          cResult[33] = arr7;
                          class A {
                            constructor() {
                              return closure_1_5.getId();
                            }
                          }
                          cResult[34] = mapped;
                          let tmp40 = mapped;
                        } else {
                          tmp40 = cResult[34];
                        }
                        class A {
                          constructor() {
                            return closure_1_5.getId();
                          }
                        }
                        const obj3 = { style: tmp3.container, children: tmp40 };
                        const tmp45 = <View style={tmp3.container}>{tmp40}</View>;
                        cResult[35] = tmp3.container;
                        cResult[36] = tmp40;
                        cResult[37] = tmp45;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return closure_1_5.getId();
            }
          }
          let tmp21 = jsx(DeafenButton(9698).StreamVolumeItem, {});
          const tmp23 = jsx(DeafenButton(9698).StreamVolumeItem, {});
        } else {
          tmp21 = cResult[19];
        }
        const items5 = [];
        items5.push(tmp21);
        if (num11 > 0) {
          if (tmp5) {
            if (cResult[20] === stateFromStores1) {
              if (cResult[21] === stageHasMedia) {
                if (cResult[22] === reachedLimit) {
                  if (cResult[23] === stateFromStoresArray) {
                    let tmp25 = cResult[24];
                  }
                  if (cResult[25] === channel) {
                    if (cResult[26] === tmp25) {
                      let tmp28 = cResult[27];
                    }
                    items5.push(tmp28);
                  }
                  class A {
                    constructor() {
                      return closure_1_5.getId();
                    }
                  }
                  tmp30[0] = channel;
                  tmp30[1] = tmp25;
                  const tmp31 = jsx(DeafenButton(9698).ScreenshareButton, tmp30);
                  cResult[25] = channel;
                  cResult[26] = tmp25;
                  cResult[27] = tmp31;
                  tmp28 = tmp31;
                }
              }
            }
            let tmp26 =
              stateFromStoresArray.length > 0 &&
              null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === stateFromStores1);
            if (!tmp26) {
              let tmp27 = !stageHasMedia;
              if (!stageHasMedia) {
                tmp27 = reachedLimit;
              }
              tmp26 = tmp27;
            }
            class A {
              constructor() {
                return closure_1_5.getId();
              }
            }
            cResult[20] = stateFromStores1;
            cResult[21] = stageHasMedia;
            cResult[22] = reachedLimit;
            cResult[23] = stateFromStoresArray;
            cResult[24] = tmp26;
            tmp25 = tmp26;
          }
        }
        if (cResult[28] === channel.id) {
          if (cResult[29] === isConnectedToVoiceChannel) {
            let tmp33 = cResult[30];
          }
          items5.push(tmp33);
          if (cResult[31] !== channel) {
            DeafenButton = DeafenButton(9698).DeafenButton;
            class A {
              constructor() {
                return closure_1_5.getId();
              }
            }
            const tmp38 = <DeafenButton channel={null} />;
            cResult[31] = channel;
            cResult[32] = tmp38;
            const obj4 = { channel: null };
          }
          class A {
            constructor() {
              return closure_1_5.getId();
            }
          }
          cResult[10] = channel;
          cResult[11] = stateFromStores1;
          cResult[12] = stageHasMedia;
          cResult[13] = isConnectedToVoiceChannel;
          cResult[14] = tmp5;
          cResult[15] = reachedLimit;
          cResult[16] = num11;
          cResult[17] = stateFromStoresArray;
          cResult[18] = items5;
        }
        const tmp34 = jsx(DeafenButton(9698).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel });
        cResult[28] = channel.id;
        cResult[29] = isConnectedToVoiceChannel;
        cResult[30] = tmp34;
        tmp33 = tmp34;
        const DeafenButtonResult3 = DeafenButton(5574);
        const obj5 = { channelId: channel.id, isConnectedToVoiceChannel };
      }
    : (channel) => {
        channel = channel.channel;
        importDefault = undefined;
        const tmp = closure_8();
        const tmp4 = useCanSpeakInChannelDefault(channel.id);
        const isConnectedToVoiceChannel = channel(9054).useIsConnectedToVoiceChannel(channel);
        const obj = channel(9054);
        const items = [GuildStore];
        const items1 = [channel.guild_id];
        const stateFromStores = channel(504).useStateFromStores(
          items,
          () => GuildStore.getGuild(channel.guild_id),
          items1,
        );
        const obj2 = channel(504);
        const items2 = [ApplicationStreamingStore];
        const items3 = [channel.id];
        const stateFromStoresArray = channel(504).useStateFromStoresArray(
          items2,
          () => ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id),
          items3,
        );
        const obj3 = channel(504);
        const items4 = [AuthenticationStore];
        importDefault = channel(504).useStateFromStores(items4, () => id.getId());
        let num;
        if (stateFromStores != null) {
          num = stateFromStores.maxStageVideoChannelUsers;
        }
        if (num == null) {
          num = 0;
        }
        const obj4 = channel(504);
        const stageHasMedia = channel(5574).useStageHasMedia(channel.id);
        const items5 = [];
        items5.push(jsx(channel(9698).StreamVolumeItem, {}));
        if (tmp11) {
          const obj5 = { channel, disabled: null };
          let tmp12 = stateFromStoresArray.length > 0;
          if (tmp12) {
            tmp12 = null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === closure_1);
          }
          if (!tmp12) {
            let reachedLimit = !stageHasMedia;
            if (!stageHasMedia) {
              reachedLimit = useChannelVideoLimitDefault(channel).reachedLimit;
            }
            tmp12 = reachedLimit;
          }
          obj5.disabled = tmp12;
          items5.push(jsx(tmp5(9698).ScreenshareButton, { channel, disabled: null }));
        }
        items5.push(jsx(channel(9698).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel }));
        items5.push(jsx(channel(9698).DeafenButton, { channel }));
        const obj6 = { channelId: channel.id, isConnectedToVoiceChannel };
        tmp11 = num > 0 && tmp4;
        const tmp5Result = channel(5574);
        return (
          <View style={tmp.container}>
            {items5.map((children, index) => (
              <View key={index}>{children}</View>
            ))}
          </View>
        );
      },
);
