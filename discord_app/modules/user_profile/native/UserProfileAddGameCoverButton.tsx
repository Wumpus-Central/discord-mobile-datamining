// === Module 15219: UserProfileAddGameCoverButton ===

// Module 15219 (UserProfileAddGameCoverButton)
import nativeDefault from "native" /* 575 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 15211 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
const obj2 = { button: { aspectRatio: fn(15207).GAME_COVER_ASPECT_RATIO, borderRadius: fn(15207).GAME_COVER_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" } };
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
    children: null
  };
  const intl = ref(1113).intl;
  obj.accessibilityLabel = intl.string(ref(1113).t.E3l3Zx);
  items = [closure_4().button, { width: ref.coverWidth }];
  obj.style = items;
  const tmp = closure_4();
  obj.children = jsx(ref(10947).PlusLargeIcon, { size: "md", color: widgetType(575).colors.ICON_MUTED });
  return jsx(ref(7043).PressableOpacity, {
    ref,
    onPress() {
      return openUserProfileAddGameActionSheetDefault({ widgetType, returnFocusRef: ref });
    },
    accessibilityRole: "button",
    accessibilityLabel: null,
    style: null,
    children: null
  });
};