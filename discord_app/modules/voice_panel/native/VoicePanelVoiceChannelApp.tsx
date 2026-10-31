// discord_app/modules/voice_panel/native/VoicePanelVoiceChannelApp.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import VoicePanelStateContextDefault from "VoicePanelStateContext.tsx";
import useIsConnectedToVoiceChannelDefault from "hooks/useIsConnectedToVoiceChannel.tsx";
import useVoiceChannelAppSurface from "../../voice_channel_apps/useVoiceChannelAppSurface.tsx";
import voiceChannelAppLayerLayout from "voiceChannelAppLayerLayout.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import VoicePanelStore from "../VoicePanelStore.tsx";

require = fn;
function VoiceChannelAppLayer(applicationId) {
  const channel = applicationId.channel;
  let controlsSpecs;
  let showControls;
  let token;
  const context = token.useContext(controlsSpecs(showControls[8]));
  const safeArea = context.safeArea;
  controlsSpecs = context.controlsSpecs;
  showControls = context.showControls;
  const tmp = closure_8();
  token = safeArea(showControls[9]).useToken(controlsSpecs(showControls[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmp4 = controlsSpecs(showControls[10])();
  const keyboardHeight = tmp4;
  const tmp5 = controlsSpecs(showControls[11])();
  closure_5 = tmp5;
  const items = [tmp5];
  const layoutEffect = token.useLayoutEffect(() => {
    closure_5.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
  }, items);
  let obj = safeArea(showControls[9]);
  class A {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  A.__closure = { controlsSpecs };
  A.__workletHash = 12896943727457;
  A.__initData = __initData;
  const fn = function l(arg0, arg1) {
    if (obj.shouldRestoreVoiceChannelAppControls(arg0, arg1)) {
      ReanimatedRexport.runOnJS(showControls)();
      const tmpResult = ReanimatedRexport;
    }
    obj = voiceChannelAppLayerLayout;
  };
  const obj2 = safeArea(showControls[12]);
  fn.__closure = {
    shouldRestoreVoiceChannelAppControls: safeArea(showControls[13]).shouldRestoreVoiceChannelAppControls,
    runOnJS: safeArea(showControls[12]).runOnJS,
    showControls,
  };
  fn.__workletHash = 6566921515413;
  fn.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(A, fn);
  const obj3 = {
    shouldRestoreVoiceChannelAppControls: safeArea(showControls[13]).shouldRestoreVoiceChannelAppControls,
    runOnJS: safeArea(showControls[12]).runOnJS,
    showControls,
  };
  const fn2 = function k() {
    const obj = voiceChannelAppLayerLayout;
    return obj.getVoiceChannelAppLayerInsets({
      safeArea: safeArea.get(),
      edgeGutter: token,
      controlsHeight: controlsSpecs.get().height,
      keyboardHeight,
    });
  };
  const obj4 = safeArea(showControls[12]);
  fn2.__closure = {
    getVoiceChannelAppLayerInsets: safeArea(showControls[13]).getVoiceChannelAppLayerInsets,
    safeArea,
    edgeGutter: token,
    controlsSpecs,
    keyboardHeight: tmp4,
  };
  fn2.__workletHash = 2621992408468;
  fn2.__initData = __initData3;
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const obj6 = { style: null, children: null };
  const items1 = [tmp.layer, animatedStyle];
  obj6.style = items1;
  const obj5 = {
    getVoiceChannelAppLayerInsets: safeArea(showControls[13]).getVoiceChannelAppLayerInsets,
    safeArea,
    edgeGutter: token,
    controlsSpecs,
    keyboardHeight: tmp4,
  };
  obj6.children = jsx(controlsSpecs(showControls[15]), {
    applicationId: applicationId.applicationId,
    channelId: channel.id,
    guildId: channel.guild_id,
  });
  return jsx(controlsSpecs(showControls[14]), { style: null, children: null });
}
function VoicePanelVoiceChannelAppForChannel(channel) {
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
        tmp5 = <VoiceChannelAppLayer applicationId={currentVoiceChannelApplicationId} channel={channel} />;
      }
    }
  }
  return tmp5;
}
const VoicePanelControlsModes = fn(11221).VoicePanelControlsModes;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { layer: null };
let obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BLACK;
obj2.layer = obj3;
let closure_8 = createStyles.createStyles(obj2);
const __initData = {
  code: "function VoicePanelVoiceChannelAppTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}",
};
const __initData2 = {
  code: "function VoicePanelVoiceChannelAppTsx2(mode,previousMode){const{shouldRestoreVoiceChannelAppControls,runOnJS,showControls}=this.__closure;if(shouldRestoreVoiceChannelAppControls(mode,previousMode)){runOnJS(showControls)();}}",
};
const __initData3 = {
  code: "function VoicePanelVoiceChannelAppTsx3(){const{getVoiceChannelAppLayerInsets,safeArea,edgeGutter,controlsSpecs,keyboardHeight}=this.__closure;return getVoiceChannelAppLayerInsets({safeArea:safeArea.get(),edgeGutter:edgeGutter,controlsHeight:controlsSpecs.get().height,keyboardHeight:keyboardHeight});}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelVoiceChannelApp.tsx");

export default function VoicePanelVoiceChannelApp() {
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = <VoicePanelVoiceChannelAppForChannel channel={stateFromStores} />;
  }
  return tmp2;
}
