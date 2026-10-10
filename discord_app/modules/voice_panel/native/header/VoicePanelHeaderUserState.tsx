// === Module 17754: VoicePanelHeaderUserState ===

// Module 17754 (VoicePanelHeaderUserState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5093 */;
import NativeViewDefault from "NativeView" /* 6161 */;
import native from "native" /* 8541 */;
import VoiceStateIcons from "VoiceStateIcons" /* 8797 */;
import useStableParticipant from "useStableParticipant" /* 17753 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 17755 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;

const useVoicePanelCardUserStateIconsDefault = useVoicePanelCardUserStateIcons;

require = fn;
const jsx = fn(21).jsx;
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(8541).BackgroundBlurView);
const OPACITY_TIMING = { duration: 100 };
const createStyles = fn(5092);
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
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoicePanelHeaderUserStateIcons(type, arg1, arg2) {
  const cResult = c.c(9);
  const tmp6 = closure_8();
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  const tmp7 = useVoicePanelCardUserStateIconsDefault;
  let id;
  if (tmp2Result.isStableParticipantWithUser(type)) {
    id = type.user.id;
  }
  const tmp7Result = tmp7(type, id, arg1);
  if (cResult[0] === tmp7Result) {
    if (cResult[1] === tmp6) {
      let arr = cResult[2];
    }
    if (0 !== arr.length) {
      if (cResult[3] === arg2) {
        if (cResult[4] === tmp6.iconContainer) {
          let tmp27 = cResult[5];
        }
        if (cResult[6] === arr) {
          if (cResult[7] === tmp27) {
            let tmp28 = cResult[8];
          }
          return tmp28;
        }
        const obj2 = { style: tmp27, children: arr };
        const tmp34 = jsx(NativeViewDefault, { style: tmp27, children: arr });
        cResult[6] = arr;
        cResult[7] = tmp27;
        cResult[8] = tmp34;
        tmp28 = tmp34;
      }
      const items = [tmp6.iconContainer, arg2];
      cResult[3] = arg2;
      cResult[4] = tmp6.iconContainer;
      cResult[5] = items;
      tmp27 = items;
    }
  }
  const items1 = [];
  const iter = tmp7Result[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp12 = nextResult;
    if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
      let obj3 = { blurTheme: "dark", style: tmp6.floatingIconWrapper, children: null };
      let obj4 = { style: tmp6.floatingIcon, state: null };
      obj4.state = tmp12.videoIconState;
      obj3.children = jsx(VoiceStateIcons.VideoIcon, { style: tmp6.floatingIcon, state: null });
      let arr2 = items1.push(jsx(native.BackgroundBlurView, { blurTheme: "dark", style: tmp6.floatingIconWrapper, children: null }, "video"));
    }
    if (tmp12.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let items2 = [tmp6.floatingIconWrapper, ];
      let leftMargin;
      if (tmp12.withLeftMargin) {
        leftMargin = tmp6.leftMargin;
      }
      let obj5 = { blurTheme: "dark", style: null, children: null };
      items2[1] = leftMargin;
      obj5.style = items2;
      let obj6 = { style: tmp6.floatingIcon, state: null };
      obj6.state = tmp12.muteDeafenIconState;
      obj5.children = jsx(VoiceStateIcons.MuteDeafenIcon, { style: tmp6.floatingIcon, state: null });
      let arr3 = items1.push(jsx(native.BackgroundBlurView, { blurTheme: "dark", style: null, children: null }, "mute-deafen"));
    }
    continue;
  }
  cResult[0] = tmp7Result;
  cResult[1] = tmp6;
  cResult[2] = items1;
  arr = items1;
  tmp2Result = useStableParticipant;
}) : (function useVoicePanelHeaderUserStateIcons(type, arg1, arg2) {
  const tmp = closure_8();
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  const tmp4 = useVoicePanelCardUserStateIconsDefault;
  let id;
  if (obj.isStableParticipantWithUser(type)) {
    id = type.user.id;
  }
  obj = useStableParticipant;
  const items = [];
  const iter = tmp4(type, id, arg1)[Symbol.iterator]();
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
    const items2 = [tmp.iconContainer, arg2];
    obj6.style = items2;
    obj6.children = items;
    return jsx(NativeViewDefault, { style: null, children: null });
  }
  const tmp4Result = tmp4(type, id, arg1);
});
let closure_9 = tmp2;
const __initData = { code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}" };
const __initData2 = { code: "function VoicePanelHeaderUserStateTsx2(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}" };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelHeaderUserState(isHeaderHidden) {
  const cResult = isHeaderHidden(576).c(9);
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const context = noop.useContext(channelId(11969));
  channelId = context.channelId;
  const guildId = context.guildId;
  const tmp6 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
      let id;
      if (selectedParticipant != null) {
        id = selectedParticipant.id;
      }
      return id;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  let obj = isHeaderHidden(576);
  const tmp4 = channelId;
  const stateFromStores = isHeaderHidden(504).useStateFromStores(first, tmp9);
  const tmp11 = closure_9(tmp4(17753)(stateFromStores, channelId, guildId), guildId);
  const tmpResult = isHeaderHidden(504);
  class P {
    constructor() {
      obj = closure_0(closure_2[15]);
      num = 0;
      if (isHeaderHidden.get()) {
        num = 1;
      }
      obj1 = { opacity: obj.withTiming(num, closure_7) };
      return obj1;
    }
  }
  const tmpResult2 = isHeaderHidden(4850);
  P.__closure = { withTiming: isHeaderHidden(5093).withTiming, isHeaderHidden, OPACITY_TIMING };
  P.__workletHash = 7032221979181;
  P.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(P);
  if (null == tmp11) {
    return null;
  } else {
    if (cResult[3] === animatedStyle) {
      if (cResult[4] === tmp6.container) {
        let tmp13 = cResult[5];
      }
      if (cResult[6] === tmp11) {
      }
      const obj3 = { blurTheme: "dark", style: tmp13, pointerEvents: "none", children: tmp11 };
      const tmp17 = <closure_6 blurTheme="dark" style={tmp13} pointerEvents="none">{tmp11}</closure_6>;
      cResult[6] = tmp11;
      cResult[7] = tmp13;
      cResult[8] = tmp17;
    }
    const items1 = [tmp6.container, animatedStyle];
    cResult[3] = animatedStyle;
    cResult[4] = tmp6.container;
    cResult[5] = items1;
    tmp13 = items1;
  }
  const obj2 = { withTiming: isHeaderHidden(5093).withTiming, isHeaderHidden, OPACITY_TIMING };
}) : (function VoicePanelHeaderUserState(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  let channelId;
  const context = noop.useContext(channelId(11969));
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
  const tmp4 = closure_9(channelId(17753)(stateFromStores, channelId, guildId), guildId);
  isHeaderHidden(4850);
  const fn = function f() {
    let num = 0;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, closure_7) };
  };
  let obj = isHeaderHidden(504);
  fn.__closure = { withTiming: isHeaderHidden(5093).withTiming, isHeaderHidden, OPACITY_TIMING };
  fn.__workletHash = 1281074829646;
  fn.__initData = __initData2;
  let tmp7 = null;
  if (null != tmp4) {
    const obj3 = { blurTheme: "dark", style: null, pointerEvents: "none", children: null };
    const items1 = [tmp2.container, tmp6];
    obj3.style = items1;
    obj3.children = tmp4;
    tmp7 = <closure_6 blurTheme="dark" style={null} pointerEvents="none">{null}</closure_6>;
  }
  return tmp7;
}));
export const useVoicePanelHeaderUserStateIcons = tmp2;