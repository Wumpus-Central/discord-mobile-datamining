// === Module 16323: useVoicePanelHeaderUserStateIcons ===

// Module 16323 (useVoicePanelHeaderUserStateIcons)
import ThemesDefault from "Themes" /* 712 */;
import obj132Default from "obj132" /* 7190 */;
import TwinButtons from "TwinButtons" /* 8811 */;
import VideoDisabledSvgIcon from "VideoDisabledSvgIcon" /* 9677 */;
import areStableParticipantsEqual from "areStableParticipantsEqual" /* 16322 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 16324 */;
import useVoicePanelCardUserStateIconsDefault from "useVoicePanelCardUserStateIcons" /* 16324 */;
import importAllResult from "noop" /* 19 */;
import getParticipants from "getParticipants" /* 4773 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "module_4115" /* 4115 */;

require = fn;
function useVoicePanelHeaderUserStateIcons(participant, guildId, userIcons) {
  const tmp = callback();
  let type;
  if (participant != null) {
    type = participant.type;
  }
  let obj = areStableParticipantsEqual;
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
      obj = { blurTheme: "dark", style: null, children: null };
      obj[1] = tmp.floatingIconWrapper;
      obj = { style: null, state: null };
      obj[0] = tmp.floatingIcon;
      obj[1] = tmp9.videoIconState;
      obj[2] = jsx(VideoDisabledSvgIcon.VideoIcon, { style: null, state: null });
      let arr = items.push(jsx(TwinButtons.BackgroundBlurView, { style: null, state: null }, "video"));
    }
    if (tmp9.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let items1 = [tmp.floatingIconWrapper, ];
      let leftMargin;
      if (tmp9.withLeftMargin) {
        leftMargin = tmp.leftMargin;
      }
      obj1 = { blurTheme: "dark", style: null, children: null };
      items1[1] = leftMargin;
      obj1[1] = items1;
      let obj2 = { style: null, state: null };
      obj2[0] = tmp.floatingIcon;
      obj2[1] = tmp9.muteDeafenIconState;
      obj1[2] = jsx(VideoDisabledSvgIcon.MuteDeafenIcon, { style: null, state: null });
      arr = items.push(jsx(TwinButtons.BackgroundBlurView, { blurTheme: "dark", style: null, children: null }, "mute-deafen"));
    }
    continue;
  }
  if (0 !== items.length) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.iconContainer, userIcons];
    obj3[0] = items2;
    obj3[1] = items;
    return jsx(obj132Default, { style: null, children: null });
  }
  const tmp4Result = useVoicePanelCardUserStateIconsDefault(type, id, guildId);
}
let c3 = importAllResult;
let closure_6 = importDefaultResult.createAnimatedComponent(require("TwinButtons").BackgroundBlurView);
let closure_7 = { duration: 100 };
let obj = { position: "absolute", top: 0, left: 0, borderRadius: ThemesDefault.radii.round, padding: 6 };
obj[0] = obj;
obj[1] = { flexDirection: "row" };
obj[2] = { width: 20, height: 20, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
const createCacheKey = { width: 12, height: 12, tintColor: ThemesDefault.colors.WHITE };
obj[3] = createCacheKey;
obj[4] = { marginLeft: 4 };
let closure_8 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}" };
const memoResult = importAllResult.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  let channelId;
  const context = importAllResult.useContext(channelId(11439));
  channelId = context.channelId;
  const guildId = context.guildId;
  let obj = isHeaderHidden(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const selectedParticipant = closure_1_4.getSelectedParticipant(channelId);
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(channelId(16322)(stateFromStores, channelId, guildId), guildId);
  isHeaderHidden(4115);
  const fn = function h() {
    let obj = isHeaderHidden(dependencyMap[13]);
    let num = 0;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, closure_1_7) };
    return obj;
  };
  obj = { withTiming: isHeaderHidden(4664).withTiming, isHeaderHidden, OPACITY_TIMING: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 7032221979181;
  fn.__initData = closure_10;
  let tmp7 = null;
  if (null != tmp4) {
    obj = { blurTheme: "dark", style: null, pointerEvents: "none", children: null };
    const items1 = [tmp2.container, tmp6];
    obj[1] = items1;
    obj[3] = tmp4;
    tmp7 = <closure_6 blurTheme="dark" style={null} pointerEvents="none">{null}</closure_6>;
  }
  return tmp7;
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default memoResult;
export { useVoicePanelHeaderUserStateIcons };