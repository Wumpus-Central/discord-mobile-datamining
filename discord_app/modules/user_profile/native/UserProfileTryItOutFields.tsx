// discord_app/modules/user_profile/native/UserProfileTryItOutFields.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../actions/UserSettingsModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileTryItOutFields(initialTarget) {
      const cResult = mode(navigation[7]).c(53);
      ({ currentUser, mode } = initialTarget);
      initialTarget = initialTarget.initialTarget;
      ref();
      const obj = mode(navigation[7]);
      const tmp = mode;
      const tmp2 = navigation;
      navigation = mode(navigation[8]).useNavigation();
      const obj2 = mode(navigation[8]);
      ({ primaryColor, secondaryColor, avatarColors } = initialTarget(navigation[9])(currentUser));
      if (cResult[0] !== navigation) {
        const fn = function y(initialTarget) {
          UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
          navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, { initialTarget });
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      closure_3 = tmp7;
      if (cResult[2] !== navigation) {
        class S {
          constructor() {
            navigateResult = closure_2.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
            return;
          }
        }
        cResult[2] = navigation;
        cResult[3] = S;
        const tmp8 = S;
      } else {
        class S {
          constructor() {
            navigateResult = closure_2.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
            return;
          }
        }
      }
      S = tmp8;
      if (cResult[4] === avatarColors) {
        class S {
          constructor() {
            navigateResult = closure_2.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
            return;
          }
        }
      }
      const tmp6 = initialTarget(navigation[9])(currentUser);
      cResult[4] = avatarColors;
      cResult[5] = primaryColor;
      cResult[6] = secondaryColor;
      cResult[7] = { primaryColor, secondaryColor, avatarColors, onChangeColors: tmp(tmp2[11]).setTryItOutThemeColors };
    }
  : function UserProfileTryItOutFields(initialTarget) {
      ({ currentUser, mode } = initialTarget);
      initialTarget = initialTarget.initialTarget;
      let navigation;
      noop = undefined;
      let ref;
      const tmp = ref();
      navigation = mode(navigation[8]).useNavigation();
      const tmp6 = initialTarget(navigation[9])(currentUser);
      ({ primaryColor, secondaryColor } = tmp6);
      const items = [navigation];
      noop = noop.useCallback((initialTarget) => {
        UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
        navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, { initialTarget });
      }, items);
      const items1 = [navigation];
      let onPress = noop.useCallback(() => {
        navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
      }, items1);
      const obj2 = { primaryColor, secondaryColor, avatarColors: tmp6.avatarColors, onChangeColors: null };
      const obj = mode(navigation[8]);
      obj2.onChangeColors = mode(navigation[11]).setTryItOutThemeColors;
      const tmp7Result = initialTarget(navigation[12])(obj2);
      let fn2 = tmp7Result.openPrimaryColorPicker;
      let fn3 = tmp7Result.openSecondaryColorPicker;
      let fn4 = initialTarget(navigation[13])({ user: currentUser, isTryItOut: true });
      ref = noop.useRef(false);
      const items2 = [mode, initialTarget, onPress, fn2, fn3, fn4];
      const effect = noop.useEffect(() => {
        if ("edit" === mode) {
          if (!ref.current) {
            if ("display-name-styles" === initialTarget) {
              fn();
            } else {
              if ("theme-primary" === initialTarget) {
                fn2();
              } else if ("theme-secondary" !== initialTarget) {
                if ("banner" === initialTarget) {
                  fn4();
                }
              }
              fn3();
            }
            tmp.current = true;
          }
        }
      }, items2);
      const obj3 = { style: tmp.container, children: null };
      const obj4 = { heading: null, showNitroIcon: true, children: null };
      const intl = mode(navigation[14]).intl;
      obj4.heading = intl.string(initialTarget(navigation[15])["86GtGH"]);
      const obj5 = { user: currentUser, onPress: null };
      const tmp11 = fn4;
      const tmp12 = onPress;
      const tmp7 = initialTarget(navigation[12]);
      if ("edit" !== mode) {
        onPress = () => closure_3("display-name-styles");
      }
      obj5.onPress = onPress;
      obj4.children = fn3(initialTarget(navigation[17]), obj5);
      const items3 = [fn3(mode(navigation[16]).EditableTileGroup, obj4), ,];
      const obj6 = { heading: null, showNitroIcon: true, children: null };
      const intl2 = tmp2(tmp3[14]).intl;
      obj6.heading = intl2.string(mode(navigation[14]).t.DMeO2X);
      const obj7 = { primaryColor, secondaryColor, onPressPrimary: null, onPressSecondary: null };
      const tmp14 = initialTarget(navigation[17]);
      if ("edit" !== mode) {
        fn2 = () => closure_3("theme-primary");
      }
      obj7.onPressPrimary = fn2;
      if ("edit" !== mode) {
        fn3 = () => closure_3("theme-secondary");
      }
      obj7.onPressSecondary = fn3;
      obj6.children = fn3(initialTarget(navigation[18]), obj7);
      items3[1] = fn3(mode(navigation[16]).EditableTileGroup, obj6);
      const obj8 = { heading: null, showNitroIcon: true, children: null };
      const intl3 = tmp2(tmp3[14]).intl;
      obj8.heading = intl3.string(mode(navigation[14]).t.Vgdusv);
      const obj9 = { user: currentUser, onPress: null };
      const tmp5Result = initialTarget(navigation[18]);
      if ("edit" !== mode) {
        fn4 = () => closure_3("banner");
      }
      obj9.onPress = fn4;
      obj8.children = fn3(initialTarget(navigation[19]), obj9);
      items3[2] = fn3(mode(navigation[16]).EditableTileGroup, obj8);
      obj3.children = items3;
      return tmp11(tmp12, obj3);
    };
