// discord_app/modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import VoiceStateIcons from "../shared/VoiceStateIcons.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import 01652__ from "../../../../../_runtime/metro/01652__.js";

const require = globalThis.__r;
const useStableParticipantDefault = useStableParticipant;
const useVoicePanelCardUserStateIconsDefault = useVoicePanelCardUserStateIcons;

require = fn;
function useVoicePanelHeaderUserStateIcons(participant, guildId, userIcons) {
  const tmp = closure_8();
  let type;
  if (participant != null) {
    type = participant.type;
  }
  const tmp4 = useVoicePanelCardUserStateIconsDefault;
  let id;
  if (obj.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  obj = useStableParticipant;
  items = [];
  const iter = tmp4(type, id, guildId)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
      let obj2 = { blurTheme: "dark", style: tmp.floatingIconWrapper, children: null };
      let obj3 = { style: tmp.floatingIcon, state: null };
      obj3.state = tmp9.videoIconState;
      obj2.children = jsx(VoiceStateIcons.VideoIcon, { style: tmp.floatingIcon, state: null });
      let arr = items.push(jsx(native.BackgroundBlurView, { blurTheme: "dark", style: tmp.floatingIconWrapper, children: null }, "video"));
    }
    if (tmp9.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let items1 = [tmp.floatingIconWrapper, ];
      let leftMargin;
      if (tmp9.withLeftMargin) {
        leftMargin = tmp.leftMargin;
      }
      let obj4 = { blurTheme: "dark", style: null, children: null };
      items1[1] = leftMargin;
      obj4.style = items1;
      let obj5 = { style: tmp.floatingIcon, state: null };
      obj5.state = tmp9.muteDeafenIconState;
      obj4.children = jsx(VoiceStateIcons.MuteDeafenIcon, { style: tmp.floatingIcon, state: null });
      let arr2 = items.push(jsx(native.BackgroundBlurView, { blurTheme: "dark", style: null, children: null }, "mute-deafen"));
    }
    continue;
  }
  if (0 !== items.length) {
    const obj6 = { style: null, children: null };
    const items2 = [tmp.iconContainer, userIcons];
    obj6.style = items2;
    obj6.children = items;
    return jsx(NativeViewDefault, { style: null, children: null });
  }
  const tmp4Result = tmp4(type, id, guildId);
}
const jsx = fn(21).jsx;
let closure_6 = module_1652.createAnimatedComponent(fn(9078).BackgroundBlurView);
let closure_7 = { duration: 100 };
const createStyles = fn(5142);
let obj = { container: null, iconContainer: null, floatingIconWrapper: null, floatingIcon: null, leftMargin: null };
const rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.round, padding: 6 };
obj.container = rect;
obj.iconContainer = { flexDirection: "row" };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.floatingIconWrapper = size;
const size1 = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
obj.floatingIcon = size1;
obj.leftMargin = { marginLeft: 4 };
let closure_8 = createStyles.createStyles(obj);
let closure_10 = { code: "(function VoicePanelHeaderUserStateTsx1(){let[withTiming,isHeaderHidden,OPACITY_TIMING]=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};})" };
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default noop.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  _require = channelId;
  const guildId = context.guildId;
  const tmp2 = closure_8();
  items = [ChannelRTCStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(c0);
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(useStableParticipantDefault(stateFromStores, channelId, guildId), guildId);
  require("../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_10, require("timing/timing").withTiming, isHeaderHidden.isHeaderHidden, closure_7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class VoicePanelHeaderUserStateTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  VoicePanelHeaderUserStateTsx1.__closure = items2;
  VoicePanelHeaderUserStateTsx1.__workletHash = 15393024042132;
  VoicePanelHeaderUserStateTsx1.__initData = tmp6;
  let tmp11 = null;
  if (null != tmp4) {
    const obj2 = { blurTheme: "dark", style: null, pointerEvents: "none", children: null };
    const items3 = [tmp2.container, tmp10];
    obj2.style = items3;
    obj2.children = tmp4;
    tmp11 = <closure_6 blurTheme="dark" style={null} pointerEvents="none">{null}</closure_6>;
  }
  return tmp11;
});
export { useVoicePanelHeaderUserStateIcons };