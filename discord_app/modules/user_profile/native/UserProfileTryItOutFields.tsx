// discord_app/modules/user_profile/native/UserProfileTryItOutFields.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default function UserProfileTryItOutFields(initialTarget) {
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  let onPress;
  let fn2;
  const tmp4 = initialTarget(onPress[6])(currentUser);
  ({ primaryColor, secondaryColor } = tmp4);
  onPress = fn2.useCallback(() => {
    mode(fn[7]).openUserSettings({ screen: fn4.DISPLAY_NAME_STYLES, params: { isTryItOut: true } }, undefined, {
      pop: false,
    });
  }, []);
  const obj = { primaryColor, secondaryColor, avatarColors: tmp4.avatarColors, onChangeColors: null };
  const tmp = closure_8();
  obj.onChangeColors = mode(onPress[9]).setTryItOutThemeColors;
  const tmp5Result = initialTarget(onPress[8])(obj);
  fn2 = tmp5Result.openPrimaryColorPicker;
  let fn3 = tmp5Result.openSecondaryColorPicker;
  let fn4 = initialTarget(onPress[10])({ user: currentUser, isTryItOut: true });
  let fn5 = initialTarget(onPress[11])({ user: currentUser, isTryItOut: true });
  const ref = fn2.useRef(false);
  const items = [mode, initialTarget, onPress, fn2, fn3, fn4, fn5];
  const effect = fn2.useEffect(() => {
    if ("edit" === mode) {
      if (!ref.current) {
        if ("display-name-styles" === initialTarget) {
          fn();
        } else if ("theme-primary" === initialTarget) {
          fn2();
        } else {
          if ("theme-secondary" === initialTarget) {
            fn3();
          } else if ("banner" !== initialTarget) {
            if ("avatar" === initialTarget) {
              fn5();
            }
          }
          fn4();
        }
        tmp12.current = true;
      }
    }
  }, items);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { heading: null, showNitroIcon: true, children: null };
  const intl = mode(onPress[13]).intl;
  obj3.heading = intl.string(initialTarget(onPress[14])["86GtGH"]);
  const obj4 = { user: currentUser, onPress: null };
  const tmp10 = ref;
  const tmp11 = fn3;
  const tmp5 = initialTarget(onPress[8]);
  if ("edit" !== mode) {
    onPress = () => mode(fn[16]).openPremiumTryItOutModal("display-name-styles");
  }
  obj4.onPress = onPress;
  obj3.children = fn5(initialTarget(onPress[15]), obj4);
  const items1 = [fn5(mode(onPress[12]).EditableTileGroup, obj3), , ,];
  const obj5 = { heading: null, showNitroIcon: true, children: null };
  const intl2 = tmp6(tmp3[13]).intl;
  obj5.heading = intl2.string(mode(onPress[13]).t.DMeO2X);
  const obj6 = { primaryColor, secondaryColor, onPressPrimary: null, onPressSecondary: null };
  const tmp13 = initialTarget(onPress[15]);
  if ("edit" !== mode) {
    fn2 = () => mode(fn[16]).openPremiumTryItOutModal("theme-primary");
  }
  obj6.onPressPrimary = fn2;
  if ("edit" !== mode) {
    fn3 = () => mode(fn[16]).openPremiumTryItOutModal("theme-secondary");
  }
  obj6.onPressSecondary = fn3;
  obj5.children = fn5(initialTarget(onPress[17]), obj6);
  items1[1] = fn5(mode(onPress[12]).EditableTileGroup, obj5);
  const obj7 = { heading: null, showNitroIcon: true, children: null };
  const intl3 = tmp6(tmp3[13]).intl;
  obj7.heading = intl3.string(mode(onPress[13]).t.Vgdusv);
  const obj8 = { user: currentUser, onPress: null };
  const tmp2Result = initialTarget(onPress[17]);
  if ("edit" !== mode) {
    fn4 = () => mode(fn[16]).openPremiumTryItOutModal("banner");
  }
  obj8.onPress = fn4;
  obj7.children = fn5(initialTarget(onPress[18]), obj8);
  items1[2] = fn5(mode(onPress[12]).EditableTileGroup, obj7);
  const obj9 = { heading: null, showNitroIcon: true, children: null };
  const intl4 = tmp6(tmp3[13]).intl;
  obj9.heading = intl4.string(mode(onPress[13]).t.Dt3ZUr);
  const obj10 = { user: currentUser, onPress: null };
  if ("edit" !== mode) {
    fn5 = () => mode(fn[16]).openPremiumTryItOutModal("avatar");
  }
  obj10.onPress = fn5;
  obj9.children = fn5(mode(onPress[19]).TryItOutEditableTileAvatarButton, obj10);
  items1[3] = fn5(mode(onPress[12]).EditableTileGroup, obj9);
  obj2.children = items1;
  return tmp10(tmp11, obj2);
}
