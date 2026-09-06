// discord_app/modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles(() => {
  const obj = { closeButton: null };
  const size = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.round,
    width: nativeDefault.space.PX_32,
    height: nativeDefault.space.PX_32,
  };
  obj.closeButton = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  let obj = {
    accessibilityLabel: null,
    accessibilityRole: "button",
    hitSlop: 12,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = onPress.onPress;
  obj.style = closure_4().closeButton;
  obj = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  obj.children = jsx(XSmallIcon.XSmallIcon, {
    size: "sm",
    color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
  });
  return jsx(Pressables.PressableOpacity, {
    size: "sm",
    color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
  });
}
