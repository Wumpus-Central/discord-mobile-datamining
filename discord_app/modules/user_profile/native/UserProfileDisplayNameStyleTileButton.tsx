// === Module 16535: UserProfileDisplayNameStyleTileButton ===

// Module 16535 (UserProfileDisplayNameStyleTileButton)
import nativeDefault from "native" /* 575 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8737 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8731 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { button: { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md }, previewContainer: { flex: 1, minWidth: 0 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStyleTileButton.tsx");

export default function UserProfileDisplayNameStyleTileButton(user) {
  user = user.user;
  const tmp = closure_8();
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => {
    const obj = ProfileCustomizationUtils;
    let displayName = obj.getProfilePreviewValue({ pendingValue: UserProfileSettingsStore.getPendingChanges().pendingGlobalName, userValue: user.globalName });
    if (displayName == null) {
      displayName = user.username;
    }
    return { displayName, displayNameStyles: UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles };
  });
  ({ displayNameStyles, displayName } = stateFromStoresObject);
  let obj = user(504);
  const items1 = [AccessibilityStore];
  const stateFromStores = user(504).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = user(4839).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const obj3 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, accessibilityHint: null, onPress: null, style: null, children: null };
  const intl = user(1113).intl;
  obj3.accessibilityLabel = intl.string(user(1113).t.lsjENp);
  const obj4 = { text: null };
  const obj2 = user(504);
  obj4.text = user(16536).getDisplayNameStyleAccessibleValue(displayNameStyles);
  obj3.accessibilityValue = obj4;
  const intl2 = user(1113).intl;
  obj3.accessibilityHint = intl2.string(user(1113).t["4lAcxv"]);
  obj3.onPress = user.onPress;
  obj3.style = tmp.button;
  const obj6 = { style: tmp.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj7 = { userId: user.id, userName: displayName, pendingDisplayNameStyles: displayNameStyles, ignoreDisabledStylesSetting: true, effectDisplayType: null, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
  if (!stateFromStores) {
    if (setting) {
      let STATIC = tmp2(10773).EffectDisplayType.ANIMATED;
    }
    obj7.effectDisplayType = STATIC;
    obj6.children = closure_6(tmp10, obj7);
    const items2 = [closure_6(View, obj6), closure_6(tmp2(6984).TableRowArrow, {})];
    obj3.children = items2;
    return closure_7(user(6980).PressableHighlight, obj3);
  }
  STATIC = tmp2(10773).EffectDisplayType.STATIC;
  const obj5 = user(16536);
};