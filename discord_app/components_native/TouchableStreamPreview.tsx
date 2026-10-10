// === Module 11170: TouchableStreamPreview ===

// Module 11170 (TouchableStreamPreview)
import nativeDefault from "native" /* 587 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5106 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5889 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import StreamActionCreators from "StreamActionCreators" /* 7443 */;
import transitionToStreamDefault from "transitionToStream" /* 7480 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5111 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Permissions = fn(1085).Permissions;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { touchable: { borderRadius: 5, overflow: "hidden" }, ctaWrapper: null, ctaBackground: null, ctaText: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
const ColorUtils = fn(4967);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.7);
obj2.ctaWrapper = obj3;
obj2.ctaBackground = { height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, justifyContent: "center", alignItems: "center" };
obj2.ctaText = { lineHeight: 20 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamPreviewContainer(onPress) {
  const cResult = disableTransition(stream[15]).c(43);
  ({ style, disableTransition } = onPress);
  onPress = onPress.onPress;
  stream = onPress.stream;
  const channel = onPress.channel;
  closure_14();
  let obj = disableTransition(stream[15]);
  disableTransition(stream[16]).isChannelFull(channel, VoiceStateStore, GuildStore);
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
  let obj2 = disableTransition(stream[16]);
  const stateFromStores = disableTransition(stream[17]).useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[2] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== channel) {
    class R {
      constructor() {
        return !closure_10.can(Permissions.CONNECT, channel);
      }
    }
    cResult[3] = channel;
    cResult[4] = R;
  } else {
    class R {
      constructor() {
        return !closure_10.can(Permissions.CONNECT, channel);
      }
    }
  }
  let tmpResult = disableTransition(stream[17]);
  const stateFromStores1 = disableTransition(stream[17]).useStateFromStores(tmp11, R);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return !closure_10.can(Permissions.CONNECT, channel);
      }
    }
    tmp16[0] = VoiceStateStore;
    cResult[5] = tmp16;
  } else {
    class R {
      constructor() {
        return !closure_10.can(Permissions.CONNECT, channel);
      }
    }
  }
  if (cResult[6] !== channel.id) {
    class B {
      constructor() {
        return closure_11.isInChannel(channel.id);
      }
    }
    cResult[6] = channel.id;
    cResult[7] = B;
  } else {
    class B {
      constructor() {
        return closure_11.isInChannel(channel.id);
      }
    }
  }
  const tmpResult4 = disableTransition(stream[17]);
  const stateFromStores2 = disableTransition(stream[17]).useStateFromStores(tmp16, B);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return closure_11.isInChannel(channel.id);
      }
    }
    const items2 = [ApplicationStreamingStore, AuthenticationStore];
    cResult[8] = items2;
    const tmp19 = items2;
  } else {
    class B {
      constructor() {
        return closure_11.isInChannel(channel.id);
      }
    }
  }
  if (cResult[9] === channel.id) {
    class B {
      constructor() {
        return closure_11.isInChannel(channel.id);
      }
    }
    const _Symbol = Symbol;
    const stateFromStores3 = disableTransition(tmp2[17]).useStateFromStores(tmp19, fn2, items3);
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          return closure_11.isInChannel(channel.id);
        }
      }
      const stringResult = obj7.string(disableTransition(tmp2[18]).t["7Xq/nV"]);
      cResult[13] = stringResult;
    } else {
      class B {
        constructor() {
          return closure_11.isInChannel(channel.id);
        }
      }
    }
    if (stateFromStores) {
      class B {
        constructor() {
          return closure_11.isInChannel(channel.id);
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return closure_11.isInChannel(channel.id);
          }
        }
        const stringResult1 = obj8.string(disableTransition(tmp2[18]).t.gcnYT2);
        cResult[14] = stringResult1;
      } else {
        class B {
          constructor() {
            return closure_11.isInChannel(channel.id);
          }
        }
      }
    } else {
      class B {
        constructor() {
          return closure_11.isInChannel(channel.id);
        }
      }
      if (!stateFromStores2) {
        class B {
          constructor() {
            return closure_11.isInChannel(channel.id);
          }
        }
      }
      if (cResult[17] === disableTransition) {
        class B {
          constructor() {
            return closure_11.isInChannel(channel.id);
          }
        }
      }
      class Z {
        constructor() {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[19]);
          tmp3 = stream;
          voiceChannel = obj.selectVoiceChannel(stream.channelId);
          tmp5 = closure_0;
          obj2 = closure_0(closure_2[20]);
          watchStreamResult = obj2.watchStream(stream);
          if (disableTransition) {
            tmpResult = tmp(tmp2[22]);
            result = tmpResult.rebuildRTCActiveChannels();
          } else {
            tmp7 = tmp(tmp2[21])(tmp3);
          }
          tmpResult1 = tmp(tmp2[22]);
          tmp5Result = tmp5(tmp2[23]);
          participant = tmpResult1.selectParticipant(tmp3.channelId, tmp5Result.encodeStreamKey(tmp3));
          if (onPress != null) {
            tmp10 = onPress();
          }
          return;
        }
      }
      cResult[17] = disableTransition;
      cResult[18] = onPress;
      cResult[19] = stream;
      cResult[20] = Z;
    }
    const tmpResult6 = disableTransition(tmp2[17]);
  }
  fn2 = function j() {
    let isSelfStreamHiddenResult = stream.ownerId === AuthenticationStore.getId();
    if (isSelfStreamHiddenResult) {
      isSelfStreamHiddenResult = ApplicationStreamingStore.isSelfStreamHidden(channel.id);
    }
    return isSelfStreamHiddenResult;
  };
  items3 = [channel.id, stream.ownerId];
  cResult[9] = channel.id;
  cResult[10] = stream.ownerId;
  cResult[11] = fn2;
  cResult[12] = items3;
  const tmpResult5 = disableTransition(stream[17]);
}) : (function StreamPreviewContainer(disableTransition) {
  disableTransition = disableTransition.disableTransition;
  const onPress = disableTransition.onPress;
  const stream = disableTransition.stream;
  const channel = disableTransition.channel;
  const tmp = closure_14();
  let obj = disableTransition(stream[16]);
  const isChannelFullResult = disableTransition(stream[16]).isChannelFull(channel, VoiceStateStore, GuildStore);
  const items = [GameConsoleStore];
  const stateFromStores = disableTransition(stream[17]).useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId());
  let obj2 = disableTransition(stream[17]);
  const items1 = [PermissionStore];
  const stateFromStores1 = disableTransition(stream[17]).useStateFromStores(items1, () => !PermissionStore.can(Permissions.CONNECT, channel));
  const obj3 = disableTransition(stream[17]);
  const items2 = [VoiceStateStore];
  let stateFromStores2 = disableTransition(stream[17]).useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  const obj4 = disableTransition(stream[17]);
  const items3 = [ApplicationStreamingStore, AuthenticationStore];
  const items4 = [channel.id, stream.ownerId];
  const stateFromStores3 = disableTransition(stream[17]).useStateFromStores(items3, () => {
    let isSelfStreamHiddenResult = stream.ownerId === AuthenticationStore.getId();
    if (isSelfStreamHiddenResult) {
      isSelfStreamHiddenResult = ApplicationStreamingStore.isSelfStreamHidden(channel.id);
    }
    return isSelfStreamHiddenResult;
  }, items4);
  const intl = disableTransition(stream[18]).intl;
  let stringResult = intl.string(disableTransition(stream[18]).t["7Xq/nV"]);
  if (stateFromStores) {
    const intl4 = tmp2(tmp3[18]).intl;
    let stringResult1 = intl4.string(tmp2(tmp3[18]).t.gcnYT2);
    let flag = true;
  } else {
    if (!stateFromStores2) {
      stateFromStores2 = stateFromStores3;
    }
    flag = false;
    stringResult1 = stringResult;
    if (!stateFromStores2) {
      if (isChannelFullResult) {
        const intl3 = tmp2(tmp3[18]).intl;
        stringResult = intl3.string(tmp2(tmp3[18]).t.rZfiNq);
        let flag2 = true;
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
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(stream.channelId);
    StreamActionCreators.watchStream(stream);
    if (disableTransition) {
      const result = ChannelRTCActionCreatorsDefault.rebuildRTCActiveChannels();
      const tmpResult = ChannelRTCActionCreatorsDefault;
    } else {
      transitionToStreamDefault(stream);
    }
    const tmpResult2 = ChannelRTCActionCreatorsDefault;
    const participant = tmpResult2.selectParticipant(stream.channelId, StreamKeyUtils.encodeStreamKey(stream));
    if (onPress != null) {
      onPress();
    }
    const tmp5Result = StreamKeyUtils;
  }, items5);
  onPress(stream[24])(() => {
    if (channel.isGuildStageVoice()) {
      StreamActionCreators.watchStream(stream, { noFocus: true });
    }
  });
  const obj6 = { stream, ctaText: stringResult1, style: null, onPress: callback, disabled: flag, children: null };
  const items6 = [tmp.touchable, disableTransition.style];
  obj6.style = items6;
  const obj7 = { style: tmp.ctaWrapper, children: null };
  const obj8 = { style: tmp.ctaBackground, children: null };
  const obj5 = disableTransition(stream[17]);
  obj8.children = jsx(disableTransition(stream[25]).Text, { style: tmp.ctaText, variant: "text-md/semibold", color: "text-overlay-light", children: stringResult1 });
  obj7.children = <closure_4 style={tmp.ctaBackground}>{null}</closure_4>;
  obj6.children = <closure_4 style={tmp.ctaWrapper}>{null}</closure_4>;
  return jsx(onPress(stream[26]), { stream, ctaText: stringResult1, style: null, onPress: callback, disabled: flag, children: null });
});
ReactCompilerGating = fn(558);
let obj5 = { height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, justifyContent: "center", alignItems: "center" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/TouchableStreamPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelSettingsStreamPreview(guildId) {
  _require = guildId;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId.guildId) {
    if (cResult[2] === guildId.userId) {
      let tmp6 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ChannelStore];
      cResult[4] = items1;
      let tmp8 = items1;
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
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const tmpResult = tmp(504);
    const stateFromStores1 = tmp(504).useStateFromStores(tmp8, tmp10);
    let tmp13 = null;
    if (null != stateFromStores) {
      tmp13 = null;
      if (null != stateFromStores1) {
        if (cResult[7] === stateFromStores1) {
          if (cResult[8] === guildId) {
          }
        }
        const obj2 = {};
        const merged = Object.assign(guildId);
        obj2.stream = stateFromStores;
        obj2.channel = stateFromStores1;
        const tmp20 = <closure_15 />;
        cResult[7] = stateFromStores1;
        cResult[8] = guildId;
        cResult[9] = stateFromStores;
        cResult[10] = tmp20;
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
  const obj = require("c");
}) : (function VoiceChannelSettingsStreamPreview(arg0) {
  _require = arg0;
  const items = [ApplicationStreamingStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ApplicationStreamingStore.getStreamForUser(closure_0.userId, closure_0.guildId));
  const obj = require("initialize");
  const items1 = [ChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
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
      const obj3 = {};
      const merged = Object.assign(arg0);
      obj3.stream = stateFromStores;
      obj3.channel = stateFromStores1;
      tmp3 = <closure_15 />;
    }
  }
  return tmp3;
});