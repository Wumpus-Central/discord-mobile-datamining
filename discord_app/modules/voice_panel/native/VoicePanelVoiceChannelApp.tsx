// === Module 19672: VoicePanelVoiceChannelApp ===

// Module 19672 (VoicePanelVoiceChannelApp)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 2020 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19522 */;
import useControlsLockDefault from "useControlsLock" /* 19577 */;
import useVoiceChannelAppSurface from "useVoiceChannelAppSurface" /* 19631 */;
import VoiceChannelAppSurfaceDefault from "VoiceChannelAppSurface" /* 19674 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import VoicePanelStore from "VoicePanelStore" /* 6930 */;

require = fn;
function VoiceChannelAppLayer(applicationId) {
  const channel = applicationId.channel;
  _require = undefined;
  const context = noop.useContext(VoicePanelStateContextDefault);
  const controlsSpecs = context.controlsSpecs;
  ({ safeArea, showControls } = context);
  const tmp = closure_8();
  const token = require("useToken").useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const obj = require("useToken");
  const tmp8 = useControlsLockDefault();
  items = [tmp8];
  const layoutEffect = noop.useLayoutEffect(() => {
    _undefined.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
  }, items);
  const tmp7 = useSystemKeyboardHeightDefault();
  const items1 = [closure_9, controlsSpecs];
  _require = undefined;
  [tmp10, tmp11] = items1;
  class VoicePanelVoiceChannelAppTsx1 {
    constructor() {
      return closure_0.get().mode;
    }
  }
  const items2 = [tmp11];
  VoicePanelVoiceChannelAppTsx1.__closure = items2;
  VoicePanelVoiceChannelAppTsx1.__workletHash = 3536903528120;
  VoicePanelVoiceChannelAppTsx1.__initData = tmp10;
  const items3 = [closure_10, require("voiceChannelAppLayerLayout").shouldRestoreVoiceChannelAppControls, require("module_1705").scheduleOnRN, showControls];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp12, tmp13, tmp14, tmp15] = items3;
  class VoicePanelVoiceChannelAppTsx2 {
    constructor(arg0, arg1) {
      if (closure_0(applicationId, arg1)) {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_1(closure_2);
      }
      return;
    }
  }
  const items4 = [tmp13, tmp14, tmp15];
  VoicePanelVoiceChannelAppTsx2.__closure = items4;
  VoicePanelVoiceChannelAppTsx2.__workletHash = 6881977336877;
  VoicePanelVoiceChannelAppTsx2.__initData = tmp12;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelVoiceChannelAppTsx1, VoicePanelVoiceChannelAppTsx2);
  const obj2 = require("module_1652");
  const items5 = [closure_11, require("voiceChannelAppLayerLayout").getVoiceChannelAppLayerInsets, safeArea, token, controlsSpecs, tmp7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items5;
  class VoicePanelVoiceChannelAppTsx3 {
    constructor() {
      obj = { safeArea: closure_1.get(), edgeGutter: closure_2, controlsHeight: closure_3.get().height, keyboardHeight: closure_4 };
      return closure_0(obj);
    }
  }
  const items6 = [tmp18, tmp19, tmp20, tmp21, tmp22];
  VoicePanelVoiceChannelAppTsx3.__closure = items6;
  VoicePanelVoiceChannelAppTsx3.__workletHash = 7326712047373;
  VoicePanelVoiceChannelAppTsx3.__initData = tmp17;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelVoiceChannelAppTsx3);
  const obj3 = { style: null, children: jsx(VoiceChannelAppSurfaceDefault, { applicationId: applicationId.applicationId, channelId: channel.id, guildId: channel.guild_id }) };
  const items7 = [tmp.layer, animatedStyle];
  obj3.style = items7;
  return jsx(_modDef1652.View, { style: null, children: jsx(VoiceChannelAppSurfaceDefault, { applicationId: applicationId.applicationId, channelId: channel.id, guildId: channel.guild_id }) });
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
const VoicePanelControlsModes = fn(11361).VoicePanelControlsModes;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj2 = { layer: null };
let obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BLACK;
obj2.layer = obj3;
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { code: "(function VoicePanelVoiceChannelAppTsx1(){let[controlsSpecs]=this.__closure;return controlsSpecs.get().mode;})" };
let closure_10 = { code: "(function VoicePanelVoiceChannelAppTsx2(mode,previousMode){let[shouldRestoreVoiceChannelAppControls,scheduleOnRN,showControls]=this.__closure;if(shouldRestoreVoiceChannelAppControls(mode,previousMode)){scheduleOnRN(showControls);}})" };
let closure_11 = { code: "(function VoicePanelVoiceChannelAppTsx3(){let[getVoiceChannelAppLayerInsets,safeArea,edgeGutter,controlsSpecs,keyboardHeight]=this.__closure;return getVoiceChannelAppLayerInsets({safeArea:safeArea.get(),edgeGutter:edgeGutter,controlsHeight:controlsSpecs.get().height,keyboardHeight:keyboardHeight});})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelVoiceChannelApp.tsx");

export default function VoicePanelVoiceChannelApp() {
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = <VoicePanelVoiceChannelAppForChannel channel={stateFromStores} />;
  }
  return tmp2;
};