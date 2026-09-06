// === Module 10058: TouchableStreamPreview ===

// Module 10058 (TouchableStreamPreview)
import nativeDefault from "native" /* 576 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import StreamActionCreators from "StreamActionCreators" /* 4702 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import transitionToStreamDefault from "transitionToStream" /* 4762 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
function StreamPreviewContainer(disableTransition) {
  disableTransition = disableTransition.disableTransition;
  const onPress = disableTransition.onPress;
  const stream = disableTransition.stream;
  const channel = disableTransition.channel;
  const tmp = closure_14();
  let obj = disableTransition(stream[14]);
  let obj1 = disableTransition(stream[15]);
  const items = [GameConsoleStore];
  const stateFromStores = obj1.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId());
  let obj2 = disableTransition(stream[15]);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => !PermissionStore.can(Permissions.CONNECT, channel));
  const isChannelFullResult = obj.isChannelFull(channel, VoiceStateStore, GuildStore);
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
      let tmpResult = ChannelRTCActionCreatorsDefault;
      const result = tmpResult.rebuildRTCActiveChannels();
    } else {
      transitionToStreamDefault(stream);
    }
    tmpResult = ChannelRTCActionCreatorsDefault;
    const participant = tmpResult.selectParticipant(stream.channelId, StreamKeyUtils.encodeStreamKey(stream));
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
  obj = { stream, ctaText: stringResult1, style: null, onPress: callback, disabled: flag, children: null };
  const items6 = [tmp.touchable, disableTransition.style];
  obj.style = items6;
  obj = { style: tmp.ctaWrapper, children: null };
  obj1 = { style: tmp.ctaBackground, children: null };
  const obj5 = disableTransition(stream[15]);
  obj2 = { style: tmp.ctaText, variant: "text-md/semibold", color: "text-overlay-light", children: stringResult1 };
  obj1.children = jsx(disableTransition(stream[24]).Text, { style: tmp.ctaText, variant: "text-md/semibold", color: "text-overlay-light", children: stringResult1 });
  obj.children = <closure_4 style={tmp.ctaBackground}>{null}</closure_4>;
  obj.children = <closure_4 style={tmp.ctaWrapper}>{null}</closure_4>;
  return jsx(onPress(stream[23]), { style: tmp.ctaWrapper, children: null });
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Permissions = fn(1074).Permissions;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { touchable: { borderRadius: 5, overflow: "hidden" }, ctaWrapper: null, ctaBackground: null, ctaText: null };
createStyles = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.alignItems = "center";
createStyles.justifyContent = "center";
const ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.7);
createStyles.ctaWrapper = createStyles;
createStyles.ctaBackground = { height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, justifyContent: "center", alignItems: "center" };
createStyles.ctaText = { lineHeight: 20 };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/TouchableStreamPreview.tsx");

export default function VoiceChannelSettingsStreamPreview(arg0) {
  _require = arg0;
  let obj = require("initialize");
  const items = [ApplicationStreamingStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStreamingStore.getStreamForUser(closure_0.userId, closure_0.guildId));
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
      obj = {};
      const merged = Object.assign(arg0);
      obj.stream = stateFromStores;
      obj.channel = stateFromStores1;
      tmp3 = <StreamPreviewContainer />;
    }
  }
  return tmp3;
};