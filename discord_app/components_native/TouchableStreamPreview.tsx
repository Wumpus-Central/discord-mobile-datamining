// === Module 9755: TouchableStreamPreview ===

// Module 9755 (TouchableStreamPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4948 */;
import StreamActionCreators from "StreamActionCreators" /* 5038 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5097 */;
import transitionToStreamDefault from "transitionToStream" /* 5098 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5575 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameConsoleStore from "GameConsoleStore" /* 4913 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ColorUtils_mod from "ColorUtils" /* 4733 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ColorUtils;
let StyleSheet;
let closure_4;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
const Permissions = Constants.Permissions;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { touchable: { borderRadius: 5, overflow: "hidden" }, ctaWrapper: obj2, ctaBackground: obj3, ctaText: { lineHeight: 20 } };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.7) };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
ColorUtils = ColorUtils_mod;
obj3 = { height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, justifyContent: "center", alignItems: "center" };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let disableTransition;
  let fn2;
  let items3;
  let remoteSessionId;
  let stream;
  let style;
  let tmp11;
  let tmp19;
  let tmp7;
  let tmp8;
  let obj = disableTransition(stream[15]);
  const cResult = obj.c(43);
  ({ style, disableTransition } = onPress);
  onPress = onPress.onPress;
  stream = onPress.stream;
  const channel = onPress.channel;
  closure_14();
  let obj2 = disableTransition(stream[16]);
  obj2.isChannelFull(channel, VoiceStateStore, GuildStore);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function l() {
      return null != remoteSessionId.getRemoteSessionId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let tmpResult = disableTransition(tmp2[17]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[2] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== channel) {
    class P {
      constructor() {
        return !PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
    cResult[3] = channel;
    cResult[4] = P;
  } else {
    class P {
      constructor() {
        return !PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
  }
  const tmpResult4 = disableTransition(stream[17]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, P);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return !PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
    tmp16[0] = VoiceStateStore;
    cResult[5] = tmp16;
  } else {
    class P {
      constructor() {
        return !PermissionStore.can(Permissions.CONNECT, channel);
      }
    }
  }
  if (cResult[6] !== channel.id) {
    class B {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
    cResult[6] = channel.id;
    cResult[7] = B;
  } else {
    class B {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
  }
  const tmpResult5 = disableTransition(stream[17]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp16, B);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
    const items2 = [ApplicationStreamingStore, AuthenticationStore];
    cResult[8] = items2;
    tmp19 = items2;
  } else {
    class B {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
  }
  if (cResult[9] === channel.id) {
    class B {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
    const _Symbol = Symbol;
    const tmpResult6 = disableTransition(stream[17]);
    const stateFromStores3 = tmpResult6.useStateFromStores(tmp19, fn2, items3);
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      cResult[13] = obj7.string(disableTransition(stream[18]).t["7Xq/nV"]);
      const stringResult = obj7.string(disableTransition(stream[18]).t["7Xq/nV"]);
    } else {
      class B {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
    }
    if (stateFromStores) {
      class B {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
        const stringResult1 = obj8.string(disableTransition(stream[18]).t.gcnYT2);
        cResult[14] = stringResult1;
      } else {
        class B {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
      }
    } else {
      class B {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      if (!stateFromStores2) {
        class B {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
      }
    }
    if (cResult[17] === disableTransition) {
      class B {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
    }
    class Z {
      constructor() {
        const obj = SelectedChannelActionCreatorsDefault;
        const voiceChannel = obj.selectVoiceChannel(stream.channelId);
        const obj2 = StreamActionCreators;
        obj2.watchStream(stream);
        if (disableTransition) {
          const tmpResult = ChannelRTCActionCreatorsDefault;
          const result = tmpResult.rebuildRTCActiveChannels();
        } else {
          transitionToStreamDefault(stream);
        }
        const selectParticipant = ChannelRTCActionCreatorsDefault.selectParticipant;
        const channelId = stream.channelId;
        ChannelRTCActionCreatorsDefault;
        const tmp5Result = StreamKeyUtils;
        const participant = selectParticipant(channelId, tmp5Result.encodeStreamKey(stream));
        if (onPress != null) {
          onPress();
        }
      }
    }
    cResult[17] = disableTransition;
    cResult[18] = onPress;
    cResult[19] = stream;
    cResult[20] = Z;
  }
  fn2 = function j() {
    const isSelfStreamHiddenResult = stream.ownerId === AuthenticationStore.getId() && ApplicationStreamingStore.isSelfStreamHidden(channel.id);
    return isSelfStreamHiddenResult;
  };
  items3 = [channel.id, stream.ownerId];
  cResult[9] = channel.id;
  cResult[10] = stream.ownerId;
  cResult[11] = fn2;
  cResult[12] = items3;
}) : ((disableTransition) => {
  let flag;
  let remoteSessionId;
  let stringResult1;
  disableTransition = disableTransition.disableTransition;
  const onPress = disableTransition.onPress;
  const stream = disableTransition.stream;
  const channel = disableTransition.channel;
  const style = disableTransition.style;
  const tmp = closure_14();
  let obj = disableTransition(stream[16]);
  const isChannelFullResult = obj.isChannelFull(channel, VoiceStateStore, GuildStore);
  let obj2 = disableTransition(stream[17]);
  const items = [GameConsoleStore];
  const stateFromStores = obj2.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId());
  const items1 = [PermissionStore];
  const obj3 = disableTransition(stream[17]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => !PermissionStore.can(Permissions.CONNECT, channel));
  const items2 = [VoiceStateStore];
  const obj4 = disableTransition(stream[17]);
  let stateFromStores2 = obj4.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  const items3 = [ApplicationStreamingStore, AuthenticationStore];
  const items4 = [channel.id, stream.ownerId];
  const obj5 = disableTransition(stream[17]);
  const stateFromStores3 = obj5.useStateFromStores(items3, () => {
    const isSelfStreamHiddenResult = stream.ownerId === AuthenticationStore.getId() && ApplicationStreamingStore.isSelfStreamHidden(channel.id);
    return isSelfStreamHiddenResult;
  }, items4);
  const intl = disableTransition(stream[18]).intl;
  let stringResult = intl.string(disableTransition(stream[18]).t["7Xq/nV"]);
  if (stateFromStores) {
    const intl4 = tmp2(tmp3[18]).intl;
    stringResult1 = intl4.string(tmp2(tmp3[18]).t.gcnYT2);
    flag = true;
  } else {
    if (!stateFromStores2) {
      stateFromStores2 = stateFromStores3;
    }
    flag = false;
    stringResult1 = stringResult;
    if (!stateFromStores2) {
      let flag2;
      if (isChannelFullResult) {
        const intl3 = tmp2(tmp3[18]).intl;
        stringResult = intl3.string(tmp2(tmp3[18]).t.rZfiNq);
        flag2 = true;
      } else {
        flag2 = false;
        if (stateFromStores1) {
          const intl2 = tmp2(tmp3[18]).intl;
          stringResult = intl2.string(tmp2(tmp3[18]).t.TVBCKZ);
          flag2 = true;
        }
      }
      flag = flag2;
      stringResult1 = stringResult;
    }
  }
  const items5 = [stream, disableTransition, onPress];
  const callback = channel.useCallback(() => {
    const obj = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj.selectVoiceChannel(stream.channelId);
    const obj2 = StreamActionCreators;
    obj2.watchStream(stream);
    if (disableTransition) {
      const tmpResult = ChannelRTCActionCreatorsDefault;
      const result = tmpResult.rebuildRTCActiveChannels();
    } else {
      transitionToStreamDefault(stream);
    }
    const selectParticipant = ChannelRTCActionCreatorsDefault.selectParticipant;
    const channelId = stream.channelId;
    ChannelRTCActionCreatorsDefault;
    const tmp5Result = StreamKeyUtils;
    const participant = selectParticipant(channelId, tmp5Result.encodeStreamKey(stream));
    if (onPress != null) {
      onPress();
    }
  }, items5);
  onPress(tmp3[24])(() => {
    if (channel.isGuildStageVoice()) {
      const obj = StreamActionCreators;
      obj.watchStream(stream, { noFocus: true });
    }
  });
  const items6 = [tmp.touchable, style];
  onPress(stream[26]);
  return <tmp13 stream={stream} ctaText={stringResult1} style={items6} onPress={callback} disabled={flag}>{null}</tmp13>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  _require = guildId;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId.guildId) {
    let tmp6;
    let tmp8;
    let tmp10;
    if (cResult[2] === guildId.userId) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ChannelStore];
      cResult[4] = items1;
      tmp8 = items1;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== stateFromStores) {
      const fn2 = function u() {
        let channel = null;
        if (null != stateFromStores) {
          channel = ChannelStore.getChannel(tmp.channelId);
        }
        return channel;
      };
      cResult[5] = stateFromStores;
      cResult[6] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const tmpResult2 = tmp(504);
    const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
    let tmp13 = null;
    if (null != stateFromStores) {
      tmp13 = null;
      if (null != stateFromStores1) {
        if (cResult[7] === stateFromStores1) {
          if (cResult[8] === guildId) {
            let tmp14;
            if (cResult[9] === stateFromStores) {
              tmp14 = cResult[10];
            }
            tmp13 = tmp14;
          }
        }
        const merged = Object.assign(guildId);
        const tmp20 = <closure_15 stream={stateFromStores} channel={stateFromStores1} />;
        cResult[7] = stateFromStores1;
        cResult[8] = guildId;
        cResult[9] = stateFromStores;
        cResult[10] = tmp20;
        tmp14 = tmp20;
      }
    }
    return tmp13;
  }
  const fn = function l() {
    return ApplicationStreamingStore.getStreamForUser(guildId.userId, guildId.guildId);
  };
  cResult[1] = guildId.guildId;
  cResult[2] = guildId.userId;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ApplicationStreamingStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStreamingStore.getStreamForUser(closure_0.userId, closure_0.guildId));
  const items1 = [ChannelStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let channel = null;
    if (null != stateFromStores) {
      channel = ChannelStore.getChannel(tmp.channelId);
    }
    return channel;
  });
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      const merged = Object.assign(arg0);
      tmp3 = <closure_15 stream={stateFromStores} channel={stateFromStores1} />;
    }
  }
  return tmp3;
});
let result = size.fileFinishedImporting("components_native/TouchableStreamPreview.tsx");

export default tmp5;