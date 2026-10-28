// === Module 18884: VoicePanelVoiceChannelApp ===

// Module 18884 (VoicePanelVoiceChannelApp)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5085 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 10938 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 18768 */;
import useVoiceChannelAppSurface from "useVoiceChannelAppSurface" /* 18843 */;
import voiceChannelAppLayerLayout from "voiceChannelAppLayerLayout" /* 18885 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import VoicePanelStore from "VoicePanelStore" /* 6839 */;

require = fn;
const VoicePanelControlsModes = fn(10937).VoicePanelControlsModes;
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let obj2 = { layer: null };
let obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BLACK;
obj2.layer = obj3;
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function VoicePanelVoiceChannelAppTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData2 = { code: "function VoicePanelVoiceChannelAppTsx2(mode,previousMode){const{shouldRestoreVoiceChannelAppControls,runOnJS,showControls}=this.__closure;if(shouldRestoreVoiceChannelAppControls(mode,previousMode)){runOnJS(showControls)();}}" };
const __initData3 = { code: "function VoicePanelVoiceChannelAppTsx3(){const{getVoiceChannelAppLayerInsets,safeArea,edgeGutter,controlsSpecs,keyboardHeight}=this.__closure;return getVoiceChannelAppLayerInsets({safeArea:safeArea.get(),edgeGutter:edgeGutter,controlsHeight:controlsSpecs.get().height,keyboardHeight:keyboardHeight});}" };
const __initData4 = { code: "function VoicePanelVoiceChannelAppTsx4(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData5 = { code: "function VoicePanelVoiceChannelAppTsx5(mode,previousMode){const{shouldRestoreVoiceChannelAppControls,runOnJS,showControls}=this.__closure;if(shouldRestoreVoiceChannelAppControls(mode,previousMode)){runOnJS(showControls)();}}" };
const __initData6 = { code: "function VoicePanelVoiceChannelAppTsx6(){const{getVoiceChannelAppLayerInsets,safeArea,edgeGutter,controlsSpecs,keyboardHeight}=this.__closure;return getVoiceChannelAppLayerInsets({safeArea:safeArea.get(),edgeGutter:edgeGutter,controlsHeight:controlsSpecs.get().height,keyboardHeight:keyboardHeight});}" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppLayer(arg0) {
  const cResult = safeArea(showControls[9]).c(13);
  ({ applicationId, channel } = arg0);
  const tmp4 = closure_8();
  const context = token.useContext(controlsSpecs(showControls[10]));
  safeArea = context.safeArea;
  controlsSpecs = context.controlsSpecs;
  showControls = context.showControls;
  let obj = safeArea(showControls[9]);
  const obj2 = token;
  token = safeArea(showControls[11]).useToken(controlsSpecs(showControls[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmp8 = controlsSpecs(showControls[12])();
  keyboardHeight = tmp8;
  const tmp9 = controlsSpecs(showControls[13])();
  closure_5 = tmp9;
  if (cResult[0] !== tmp9) {
    const fn = function t() {
      closure_5.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
    };
    const items = [tmp9];
    cResult[0] = tmp9;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp11 = items;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp10, tmp11);
  const obj3 = safeArea(showControls[11]);
  class A {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  A.__closure = { controlsSpecs };
  A.__workletHash = 12896943727457;
  A.__initData = __initData;
  const fn2 = function _(arg0, arg1) {
    if (obj.shouldRestoreVoiceChannelAppControls(arg0, arg1)) {
      ReanimatedRexport.runOnJS(showControls)();
      const tmpResult = ReanimatedRexport;
    }
    obj = voiceChannelAppLayerLayout;
  };
  let tmpResult = safeArea(showControls[14]);
  fn2.__closure = { shouldRestoreVoiceChannelAppControls: safeArea(showControls[15]).shouldRestoreVoiceChannelAppControls, runOnJS: safeArea(showControls[14]).runOnJS, showControls };
  fn2.__workletHash = 6566921515413;
  fn2.__initData = __initData2;
  const animatedReaction = tmpResult.useAnimatedReaction(A, fn2);
  const obj4 = { shouldRestoreVoiceChannelAppControls: safeArea(showControls[15]).shouldRestoreVoiceChannelAppControls, runOnJS: safeArea(showControls[14]).runOnJS, showControls };
  class P {
    constructor() {
      obj = closure_0(closure_2[15]);
      obj1 = { safeArea: safeArea.get(), edgeGutter: closure_3, controlsHeight: controlsSpecs.get().height, keyboardHeight: closure_4 };
      return obj.getVoiceChannelAppLayerInsets(obj1);
    }
  }
  const tmpResult2 = safeArea(showControls[14]);
  P.__closure = { getVoiceChannelAppLayerInsets: safeArea(showControls[15]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp8 };
  P.__workletHash = 2621992408468;
  P.__initData = __initData3;
  const animatedStyle = tmpResult2.useAnimatedStyle(P);
  if (cResult[3] === animatedStyle) {
    if (cResult[4] === tmp4.layer) {
      let tmp15 = cResult[5];
    }
    if (cResult[6] === applicationId) {
      if (cResult[7] === channel.guild_id) {
        if (cResult[8] === channel.id) {
          let tmp16 = cResult[9];
        }
        if (cResult[10] === tmp15) {
          if (cResult[11] === tmp16) {
            let tmp19 = cResult[12];
          }
          return tmp19;
        }
        const obj6 = { style: tmp15, children: tmp16 };
        const tmp21 = jsx(tmp5(tmp2[17]), { style: tmp15, children: tmp16 });
        cResult[10] = tmp15;
        cResult[11] = tmp16;
        cResult[12] = tmp21;
        tmp19 = tmp21;
      }
    }
    const obj7 = { applicationId, channelId: null, guildId: null };
    ({ id: obj8.channelId, guild_id: obj8.guildId } = channel);
    const tmp18 = jsx(tmp5(tmp2[16]), { applicationId, channelId: null, guildId: null });
    cResult[6] = applicationId;
    cResult[7] = channel.guild_id;
    cResult[8] = channel.id;
    cResult[9] = tmp18;
    tmp16 = tmp18;
  }
  const items1 = [tmp4.layer, animatedStyle];
  cResult[3] = animatedStyle;
  cResult[4] = tmp4.layer;
  cResult[5] = items1;
  tmp15 = items1;
  const obj5 = { getVoiceChannelAppLayerInsets: safeArea(showControls[15]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp8 };
}) : (function VoiceChannelAppLayer(applicationId) {
  const channel = applicationId.channel;
  let controlsSpecs;
  let showControls;
  let token;
  const context = token.useContext(controlsSpecs(showControls[10]));
  const safeArea = context.safeArea;
  controlsSpecs = context.controlsSpecs;
  showControls = context.showControls;
  const tmp = closure_8();
  token = safeArea(showControls[11]).useToken(controlsSpecs(showControls[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmp4 = controlsSpecs(showControls[12])();
  keyboardHeight = tmp4;
  const tmp5 = controlsSpecs(showControls[13])();
  closure_5 = tmp5;
  const items = [tmp5];
  const layoutEffect = token.useLayoutEffect(() => {
    closure_5.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
  }, items);
  let obj = safeArea(showControls[11]);
  const fn = function h() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 8524103339268;
  fn.__initData = __initData4;
  const fn2 = function l(arg0, arg1) {
    if (obj.shouldRestoreVoiceChannelAppControls(arg0, arg1)) {
      ReanimatedRexport.runOnJS(showControls)();
      const tmpResult = ReanimatedRexport;
    }
    obj = voiceChannelAppLayerLayout;
  };
  const obj2 = safeArea(showControls[14]);
  fn2.__closure = { shouldRestoreVoiceChannelAppControls: safeArea(showControls[15]).shouldRestoreVoiceChannelAppControls, runOnJS: safeArea(showControls[14]).runOnJS, showControls };
  fn2.__workletHash = 10498414310514;
  fn2.__initData = __initData5;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  const obj3 = { shouldRestoreVoiceChannelAppControls: safeArea(showControls[15]).shouldRestoreVoiceChannelAppControls, runOnJS: safeArea(showControls[14]).runOnJS, showControls };
  class L {
    constructor() {
      obj = closure_0(closure_2[15]);
      obj1 = { safeArea: safeArea.get(), edgeGutter: closure_3, controlsHeight: controlsSpecs.get().height, keyboardHeight: closure_4 };
      return obj.getVoiceChannelAppLayerInsets(obj1);
    }
  }
  const obj4 = safeArea(showControls[14]);
  L.__closure = { getVoiceChannelAppLayerInsets: safeArea(showControls[15]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp4 };
  L.__workletHash = 6994832796657;
  L.__initData = __initData6;
  const animatedStyle = obj4.useAnimatedStyle(L);
  const obj6 = { style: null, children: null };
  const items1 = [tmp.layer, animatedStyle];
  obj6.style = items1;
  const obj5 = { getVoiceChannelAppLayerInsets: safeArea(showControls[15]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp4 };
  obj6.children = jsx(controlsSpecs(showControls[16]), { applicationId: applicationId.applicationId, channelId: channel.id, guildId: channel.guild_id });
  return jsx(controlsSpecs(showControls[17]), { style: null, children: null });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelVoiceChannelAppForChannel(channel) {
  const cResult = c.c(3);
  channel = channel.channel;
  const tmp2 = useIsConnectedToVoiceChannelDefault(channel.id);
  const currentVoiceChannelApplicationId = useVoiceChannelAppSurface.useCurrentVoiceChannelApplicationId(channel, tmp2);
  const voiceChannelAppVisible = useVoiceChannelAppSurface.useVoiceChannelAppVisible(channel);
  if (null != currentVoiceChannelApplicationId) {
    if (voiceChannelAppVisible) {
      if (VoicePanelStore((voicePanelsOpened) => {
        voicePanelsOpened = voicePanelsOpened.voicePanelsOpened;
        return voicePanelsOpened.has(channel.id);
      })) {
        if (cResult[0] === channel) {
          if (cResult[1] === currentVoiceChannelApplicationId) {
            let tmp5 = cResult[2];
          }
          return tmp5;
        }
        const obj4 = { applicationId: currentVoiceChannelApplicationId, channel };
        const tmp8 = <closure_15 applicationId={currentVoiceChannelApplicationId} channel={channel} />;
        cResult[0] = channel;
        cResult[1] = currentVoiceChannelApplicationId;
        cResult[2] = tmp8;
        tmp5 = tmp8;
      }
    }
  }
  return null;
}) : (function VoicePanelVoiceChannelAppForChannel(channel) {
  channel = channel.channel;
  const tmp = useIsConnectedToVoiceChannelDefault(channel.id);
  const currentVoiceChannelApplicationId = useVoiceChannelAppSurface.useCurrentVoiceChannelApplicationId(channel, tmp);
  const voiceChannelAppVisible = useVoiceChannelAppSurface.useVoiceChannelAppVisible(channel);
  let tmp5 = null;
  if (null != currentVoiceChannelApplicationId) {
    tmp5 = null;
    if (voiceChannelAppVisible) {
      tmp5 = null;
      if (tmp4) {
        const obj3 = { applicationId: currentVoiceChannelApplicationId, channel };
        tmp5 = <closure_15 applicationId={currentVoiceChannelApplicationId} channel={channel} />;
      }
    }
  }
  return tmp5;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelVoiceChannelApp.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelVoiceChannelApp() {
  const cResult = channelId(576).c(6);
  channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6, tmp7);
  if (null == stateFromStores) {
    return null;
  } else if (cResult[4] !== stateFromStores) {
    const obj2 = { channel: stateFromStores };
    const tmp12 = <closure_16 channel={stateFromStores} />;
    cResult[4] = stateFromStores;
    cResult[5] = tmp12;
  }
  const tmpResult = channelId(504);
}) : (function VoicePanelVoiceChannelApp() {
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = <closure_16 channel={stateFromStores} />;
  }
  return tmp2;
});