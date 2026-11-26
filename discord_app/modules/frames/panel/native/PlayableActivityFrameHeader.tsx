// discord_app/modules/frames/panel/native/PlayableActivityFrameHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ActivityPanelModes = fn(5669).ActivityPanelModes;
const orbAmount = fn(6871).PLAYABLE_REWARD_ORB_QUANTITY;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  header: null,
  handleWrapper: null,
  handle: null,
  info: null,
  titleGroup: null,
  textShadow: null,
  subtitle: null,
};
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
  paddingTop: nativeDefault.space.PX_8,
};
obj2.header = rect;
const rect1 = { position: "absolute", left: 0, right: 0, top: nativeDefault.space.PX_4, alignItems: "center" };
obj2.handleWrapper = rect1;
let size = {
  width: 31,
  height: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED,
};
obj2.handle = size;
obj2.info = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, flex: 1, minWidth: 0 };
obj2.titleGroup = { flex: 1, minWidth: 0 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, flex: 1, minWidth: 0 };
obj2.textShadow = {
  margin: -14,
  padding: 14,
  textShadowColor: nativeDefault.colors.BLACK,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 14,
};
obj2.subtitle = { opacity: 0.8 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/PlayableActivityFrameHeader.tsx");

export default function PlayableActivityFrameHeader(arg0) {
  ({ frameId: require, playable } = arg0);
  let isClaimed;
  let setMode;
  function onLeave() {
    setMode(ActivityPanelModes.DISCONNECTED);
    const timerId = setTimeout(() => require("leaveFrame").leaveFrame(closure_1_0), 400);
  }
  const tmp = closure_9();
  const tmp4 = isClaimed(setMode[7])(playable.id);
  isClaimed = tmp4.isClaimed;
  const context = onLeave.useContext(isClaimed(setMode[8]));
  setMode = context.setMode;
  ({ wrapperOffset, pipState } = context);
  let obj2 = {
    gesture: require("ActivityPanelHeader").useBaseActivityPanelHeaderContent({
      landscape: false,
      setMode,
      wrapperOffset,
      pipState,
    }).gesture,
    children: null,
  };
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { style: tmp.handleWrapper, pointerEvents: "none", children: closure_7(View, { style: tmp.handle }) };
  items = [closure_7(View, obj4), ,];
  const obj6 = { style: tmp.info, children: null };
  const items1 = [
    closure_7(isClaimed(setMode[12]), {
      isCompleted: isClaimed,
      totalSeconds: playable.rewardTimerSeconds,
      remainingSeconds: tmp4.remainingSeconds,
    }),
  ];
  const obj8 = { style: tmp.titleGroup, children: null };
  const obj9 = {
    variant: "body-md/semibold",
    color: "text-strong",
    lineClamp: 1,
    maxFontSizeMultiplier: 1.25,
    style: tmp.textShadow,
    children: null,
  };
  if (isClaimed) {
    let intl = require("util").intl;
    let productName = intl.string(tmp2(tmp3[15])["08Kgg0"]);
  } else {
    productName = playable.productName;
  }
  obj9.children = productName;
  const items2 = [closure_7(require("Text/Text").Text, obj9)];
  if (isClaimed) {
    const obj10 = {
      variant: "body-sm/medium",
      color: "text-strong",
      lineClamp: 1,
      maxFontSizeMultiplier: 1.25,
      style: null,
      children: null,
    };
    const items3 = [,];
    ({ textShadow: arr4[0], subtitle: arr4[1] } = tmp);
    obj10.style = items3;
    let intl2 = require("util").intl;
    const obj11 = { orbAmount };
    obj10.children = intl2.formatToPlainString(tmp2(tmp3[15]).Hshnic, obj11);
    isClaimed = closure_7(require("Text/Text").Text, obj10);
  }
  items2[1] = isClaimed;
  obj8.children = items2;
  items1[1] = closure_8(View, obj8);
  obj6.children = items1;
  items[1] = closure_8(View, obj6);
  const obj12 = { size: "sm", variant: "secondary-overlay", icon: null, accessibilityLabel: null, onPress: null };
  let obj = require("ActivityPanelHeader");
  const obj5 = { style: tmp.handle };
  const obj7 = {
    isCompleted: isClaimed,
    totalSeconds: playable.rewardTimerSeconds,
    remainingSeconds: tmp4.remainingSeconds,
  };
  obj12.icon = closure_7(require("XSmallIcon").XSmallIcon, {
    size: "sm",
    color: isClaimed(setMode[6]).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
  });
  let intl3 = require("util").intl;
  obj12.accessibilityLabel = intl3.string(require("util").t.cpT0Cq);
  obj12.onPress = function onClose() {
    if (isClaimed) {
      const obj2 = {
        key: "playable-leave-game-confirm",
        title: null,
        content: null,
        confirmText: null,
        cancelText: null,
        onConfirm: null,
      };
      const intl = util.intl;
      obj2.title = intl.string(util.t.sfp1IW);
      const intl2 = util.intl;
      obj2.content = intl2.string(util.t.N9rsFG);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t["Hi1/aQ"]);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t.DvApnG);
      obj2.onConfirm = onLeave;
      AlertModal.showConfirmModal(obj2);
    } else {
      setMode(ActivityPanelModes.DISCONNECTED);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => require("leaveFrame").leaveFrame(closure_1_0), 400);
    }
  };
  items[2] = closure_7(require("IconButton").IconButton, obj12);
  obj3.children = items;
  obj2.children = closure_8(View, obj3);
  return closure_7(require("LegacyBaseButton").GestureDetector, obj2);
}
