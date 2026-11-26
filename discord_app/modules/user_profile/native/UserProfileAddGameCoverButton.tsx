// discord_app/modules/user_profile/native/UserProfileAddGameCoverButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
const obj2 = {
  button: {
    aspectRatio: fn(14558).GAME_COVER_ASPECT_RATIO,
    borderRadius: fn(14558).GAME_COVER_BORDER_RADIUS,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    alignItems: "center",
    justifyContent: "center",
  },
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAddGameCoverButton.tsx");

export default function UserProfileAddGameCoverButton(ref) {
  ref = ref.ref;
  const widgetType = ref.widgetType;
  const obj = {
    ref,
    onPress() {
      return openUserProfileAddGameActionSheetDefault({ widgetType, returnFocusRef: ref });
    },
    accessibilityRole: "button",
    accessibilityLabel: null,
    style: null,
    children: null,
  };
  const intl = ref(1112).intl;
  obj.accessibilityLabel = intl.string(ref(1112).t.E3l3Zx);
  items = [closure_4().button, { width: ref.coverWidth }];
  obj.style = items;
  const tmp = closure_4();
  obj.children = jsx(ref(9631).PlusLargeIcon, { size: "md", color: widgetType(575).colors.ICON_MUTED });
  return jsx(ref(6152).PressableOpacity, {
    ref,
    onPress() {
      return openUserProfileAddGameActionSheetDefault({ widgetType, returnFocusRef: ref });
    },
    accessibilityRole: "button",
    accessibilityLabel: null,
    style: null,
    children: null,
  });
}
