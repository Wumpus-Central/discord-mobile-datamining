// discord_app/modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import setDefault from "../../../core/native/NativeView.tsx";
import areStableParticipantsEqual from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import useVoicePanelCardUserStateIconsDefault from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../calls/ChannelRTCStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../reanimated/ReanimatedRexport.tsx";

require = arg1;
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
  const tmp4 = useVoicePanelCardUserStateIconsDefault;
  const items = [];
  const iter = useVoicePanelCardUserStateIconsDefault(type, id, guildId)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    let tmp10 = require;
    let tmp11 = require;
    let tmp12 = dependencyMap;
    let tmp13 = dependencyMap;
    if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
      let tmp29 = jsx;
      let tmp30 = jsx;
      let tmp31 = tmp10;
      let tmp32 = tmp12;
      obj = { blurTheme: "dark", style: null, children: null };
      obj[1] = tmp.floatingIconWrapper;
      obj = { style: null, state: null };
      obj[0] = tmp.floatingIcon;
      let tmp33 = nextResult;
      obj[1] = tmp9.videoIconState;
      obj[2] = jsx(tmp11(9326).VideoIcon, { style: null, state: null });
      let arr = items.push(jsx(tmp11(8810).BackgroundBlurView, { style: null, state: null }, "video"));
    }
    let tmp14 = nextResult;
    let tmp15 = tmp10;
    let tmp16 = tmp12;
    if (tmp9.type === tmp11(16451).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
      let tmp35 = jsx;
      let tmp37 = tmp10;
      let tmp38 = tmp12;
      let tmp36 = jsx;
      let items1 = [tmp.floatingIconWrapper, ];
      let tmp39 = nextResult;
      let leftMargin;
      if (tmp9.withLeftMargin) {
        leftMargin = tmp.leftMargin;
      }
      obj1 = { blurTheme: "dark", style: null, children: null };
      items1[1] = leftMargin;
      obj1[1] = items1;
      let tmp18 = tmp35;
      let tmp19 = tmp10;
      let tmp20 = tmp12;
      let obj2 = { style: null, state: null };
      obj2[0] = tmp.floatingIcon;
      let tmp21 = nextResult;
      obj2[1] = tmp9.muteDeafenIconState;
      obj1[2] = tmp36(tmp11(9326).MuteDeafenIcon, obj2);
      arr = items.push(tmp35(tmp11(8810).BackgroundBlurView, obj1, "mute-deafen"));
    }
    continue;
  }
  if (0 !== items.length) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.iconContainer, userIcons];
    obj3[0] = items2;
    obj3[1] = items;
    return jsx(setDefault, { style: null, children: null });
  }
  const tmp4Result = useVoicePanelCardUserStateIconsDefault(type, id, guildId);
}
let c3 = importAllResult;
let closure_6 = importDefaultResult.createAnimatedComponent(require("TwinButtons").BackgroundBlurView);
let closure_7 = { duration: 100 };
let obj = { container: null, iconContainer: null, floatingIconWrapper: null, floatingIcon: null, leftMargin: null };
obj = { position: "absolute", top: 0, left: 0, borderRadius: ThemesDefault.radii.round, padding: 6 };
obj[0] = obj;
obj[1] = { flexDirection: "row" };
obj[2] = { width: 20, height: 20, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
createCacheKey = { width: 12, height: 12, tintColor: ThemesDefault.colors.WHITE };
obj[3] = createCacheKey;
obj[4] = { marginLeft: 4 };
let closure_8 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}" };
let obj1 = { width: 20, height: 20, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
const memoResult = importAllResult.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  let channelId;
  const context = importAllResult.useContext(channelId(11840));
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
  const tmp4 = useVoicePanelHeaderUserStateIcons(channelId(16449)(stateFromStores, channelId, guildId), guildId);
  isHeaderHidden(4120);
  const fn = function h() {
    let obj = isHeaderHidden(closure_1_2[13]);
    let num = 0;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, closure_1_7) };
    return obj;
  };
  obj = { withTiming: isHeaderHidden(4381).withTiming, isHeaderHidden, OPACITY_TIMING: closure_7 };
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
const result = require("set").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default memoResult;
export { useVoicePanelHeaderUserStateIcons };