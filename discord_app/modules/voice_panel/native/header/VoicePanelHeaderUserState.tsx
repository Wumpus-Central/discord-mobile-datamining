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
  const tmp4 = useVoicePanelCardUserStateIconsDefault;
  let id;
  if (obj.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  obj = useStableParticipant;
  const items = [];
  const iter = tmp4(type, id, guildId)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
      let obj2 = { blurTheme: "dark", style: tmp.floatingIconWrapper, children: null };
      let obj3 = { style: tmp.floatingIcon, state: null };
      obj3.state = tmp9.videoIconState;
      obj2.children = jsx(VoiceStateIcons.VideoIcon, { style: tmp.floatingIcon, state: null });
      let arr = items.push(
        jsx(native.BackgroundBlurView, { blurTheme: "dark", style: tmp.floatingIconWrapper, children: null }, "video"),
      );
    }
    if (tmp9.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let items1 = [tmp.floatingIconWrapper];
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
      let arr2 = items.push(
        jsx(native.BackgroundBlurView, { blurTheme: "dark", style: null, children: null }, "mute-deafen"),
      );
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
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(9045).BackgroundBlurView);
const OPACITY_TIMING = { duration: 100 };
const createStyles = fn(4638);
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
  const context = noop.useContext(channelId(12414));
  channelId = context.channelId;
  const guildId = context.guildId;
  const tmp2 = closure_8();
  const items = [ChannelRTCStore];
  const stateFromStores = isHeaderHidden(504).useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(channelId(17309)(stateFromStores, channelId, guildId), guildId);
  isHeaderHidden(4374);
  const fn = function h() {
    let num = 0;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, closure_7) };
  };
  let obj = isHeaderHidden(504);
  fn.__closure = { withTiming: isHeaderHidden(4639).withTiming, isHeaderHidden, OPACITY_TIMING };
  fn.__workletHash = 7032221979181;
  fn.__initData = __initData;
  let tmp7 = null;
  if (null != tmp4) {
    const obj3 = { blurTheme: "dark", style: null, pointerEvents: "none", children: null };
    const items1 = [tmp2.container, tmp6];
    obj3.style = items1;
    obj3.children = tmp4;
    tmp7 = (
      <closure_6 blurTheme="dark" style={null} pointerEvents="none">
        {null}
      </closure_6>
    );
  }
  return tmp7;
});
export { useVoicePanelHeaderUserStateIcons };
