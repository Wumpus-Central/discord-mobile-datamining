// === Module 10314: TouchableStreamPreview ===

// Module 10314 (TouchableStreamPreview)
import nativeDefault from "native" /* 576 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4808 */;
import StreamActionCreators from "StreamActionCreators" /* 4898 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4957 */;
import transitionToStreamDefault from "transitionToStream" /* 4958 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5623 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4773 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import VoiceStateStore from "VoiceStateStore" /* 4775 */;

const require = globalThis.__r;

require = fn;
function StreamPreviewContainer(disableTransition) {
  disableTransition = disableTransition.disableTransition;
  const onPress = disableTransition.onPress;
  const stream = disableTransition.stream;
  const channel = disableTransition.channel;
  const tmp = closure_14();
  let obj = disableTransition(stream[14]);
  const isChannelFullResult = disableTransition(stream[14]).isChannelFull(channel, VoiceStateStore, GuildStore);
  const items = [GameConsoleStore];
  const stateFromStores = disableTransition(stream[15]).useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId());
  let obj2 = disableTransition(stream[15]);
  const items1 = [PermissionStore];
  const stateFromStores1 = disableTransition(stream[15]).useStateFromStores(items1, () => !PermissionStore.can(Permissions.CONNECT, channel));
  const obj3 = disableTransition(stream[15]);
  const items2 = [VoiceStateStore];
  let stateFromStores2 = disableTransition(stream[15]).useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  const obj4 = disableTransition(stream[15]);
  const items3 = [ApplicationStreamingStore, AuthenticationStore];
  const items4 = [channel.id, stream.ownerId];
  const stateFromStores3 = disableTransition(stream[15]).useStateFromStores(items3, () => {
    let isSelfStreamHiddenResult = stream.ownerId === AuthenticationStore.getId();
    if (isSelfStreamHiddenResult) {
      isSelfStreamHiddenResult = ApplicationStreamingStore.isSelfStreamHidden(channel.id);
    }
    return isSelfStreamHiddenResult;
  }, items4);
  const intl = disableTransition(stream[16]).intl;
  let stringResult = intl.string(disableTransition(stream[16]).t["7Xq/nV"]);
  if (stateFromStores) {
    const intl4 = tmp2(tmp3[16]).intl;
    let stringResult1 = intl4.string(tmp2(tmp3[16]).t.gcnYT2);
    let flag = true;
  } else {
    if (!stateFromStores2) {
      stateFromStores2 = stateFromStores3;
    }
    flag = false;
    stringResult1 = stringResult;
    if (!stateFromStores2) {
      if (isChannelFullResult) {
        const intl3 = tmp2(tmp3[16]).intl;
        stringResult = intl3.string(tmp2(tmp3[16]).t.rZfiNq);
        let flag2 = true;
      } else {
        flag2 = false;
        if (stateFromStores1) {
          const intl2 = tmp2(tmp3[16]).intl;
          stringResult = intl2.string(tmp2(tmp3[16]).t.TVBCKZ);
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
  onPress(stream[22])(() => {
    if (channel.isGuildStageVoice()) {
      StreamActionCreators.watchStream(stream, { noFocus: true });
    }
  });
  const obj6 = { stream, ctaText: stringResult1, style: null, onPress: callback, disabled: flag, children: null };
  const items6 = [tmp.touchable, disableTransition.style];
  obj6.style = items6;
  const obj7 = { style: tmp.ctaWrapper, children: null };
  const obj8 = { style: tmp.ctaBackground, children: null };
  const obj5 = disableTransition(stream[15]);
  obj8.children = jsx(disableTransition(stream[24]).Text, { style: tmp.ctaText, variant: "text-md/semibold", color: "text-overlay-light", children: stringResult1 });
  obj7.children = <closure_4 style={tmp.ctaBackground}>{null}</closure_4>;
  obj6.children = <closure_4 style={tmp.ctaWrapper}>{null}</closure_4>;
  return jsx(onPress(stream[23]), { stream, ctaText: stringResult1, style: null, onPress: callback, disabled: flag, children: null });
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Permissions = fn(1074).Permissions;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { touchable: { borderRadius: 5, overflow: "hidden" }, ctaWrapper: null, ctaBackground: null, ctaText: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
const ColorUtils = fn(4605);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.7);
obj2.ctaWrapper = obj3;
obj2.ctaBackground = { height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, justifyContent: "center", alignItems: "center" };
obj2.ctaText = { lineHeight: 20 };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/TouchableStreamPreview.tsx");

export default function VoiceChannelSettingsStreamPreview(arg0) {
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
      tmp3 = <StreamPreviewContainer />;
    }
  }
  return tmp3;
};