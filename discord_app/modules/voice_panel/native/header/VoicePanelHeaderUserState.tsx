// discord_app/modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import VoiceStateIcons from "../shared/VoiceStateIcons.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";

const useVoicePanelCardUserStateIconsDefault = useVoicePanelCardUserStateIcons;

require = fn;
function useVoicePanelHeaderUserStateIcons(participant, guildId, userIcons) {
  const tmp = closure_8();
  let type;
  if (participant != null) {
    type = participant.type;
  }
  let obj = useStableParticipant;
  let id;
  if (obj.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  const items = [];
  const iter = useVoicePanelCardUserStateIconsDefault(type, id, guildId)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
      obj = { blurTheme: "dark", style: tmp.floatingIconWrapper, children: null };
      obj = { style: tmp.floatingIcon, state: null };
      obj.state = tmp9.videoIconState;
      obj.children = jsx(VoiceStateIcons.VideoIcon, { style: tmp.floatingIcon, state: null });
      let arr = items.push(jsx(native.BackgroundBlurView, { style: tmp.floatingIcon, state: null }, "video"));
    }
    if (tmp9.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let items1 = [tmp.floatingIconWrapper];
      let leftMargin;
      if (tmp9.withLeftMargin) {
        leftMargin = tmp.leftMargin;
      }
      let obj1 = { blurTheme: "dark", style: null, children: null };
      items1[1] = leftMargin;
      obj1.style = items1;
      let obj2 = { style: tmp.floatingIcon, state: null };
      obj2.state = tmp9.muteDeafenIconState;
      obj1.children = jsx(VoiceStateIcons.MuteDeafenIcon, { style: tmp.floatingIcon, state: null });
      arr = items.push(
        jsx(native.BackgroundBlurView, { blurTheme: "dark", style: null, children: null }, "mute-deafen"),
      );
    }
    continue;
  }
  if (0 !== items.length) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.iconContainer, userIcons];
    obj3.style = items2;
    obj3.children = items;
    return jsx(NativeViewDefault, { style: null, children: null });
  }
  const tmp4Result = useVoicePanelCardUserStateIconsDefault(type, id, guildId);
}
const jsx = fn(21).jsx;
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(8902).BackgroundBlurView);
const OPACITY_TIMING = { duration: 100 };
const createStyles = fn(4560);
let obj = { container: null, iconContainer: null, floatingIconWrapper: null, floatingIcon: null, leftMargin: null };
const rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.round, padding: 6 };
obj.container = rect;
obj.iconContainer = { flexDirection: "row" };
let size = {
  width: 20,
  height: 20,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
obj.floatingIconWrapper = size;
const size1 = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
obj.floatingIcon = size1;
obj.leftMargin = { marginLeft: 4 };
let closure_8 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default noop.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  let channelId;
  const context = noop.useContext(channelId(12272));
  channelId = context.channelId;
  const guildId = context.guildId;
  let obj = isHeaderHidden(504);
  const items = [ChannelRTCStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(channelId(17104)(stateFromStores, channelId, guildId), guildId);
  isHeaderHidden(4296);
  const fn = function h() {
    let obj = timing;
    let num = 0;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, closure_7) };
    return obj;
  };
  obj = { withTiming: isHeaderHidden(4561).withTiming, isHeaderHidden, OPACITY_TIMING };
  fn.__closure = obj;
  fn.__workletHash = 7032221979181;
  fn.__initData = __initData;
  let tmp7 = null;
  if (null != tmp4) {
    obj = { blurTheme: "dark", style: null, pointerEvents: "none", children: null };
    const items1 = [tmp2.container, tmp6];
    obj.style = items1;
    obj.children = tmp4;
    tmp7 = (
      <closure_6 blurTheme="dark" style={null} pointerEvents="none">
        {null}
      </closure_6>
    );
  }
  return tmp7;
});
export { useVoicePanelHeaderUserStateIcons };
