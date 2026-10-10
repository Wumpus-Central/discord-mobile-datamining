// === Module 14911: UserProfileDisplayNameStyleTileButton ===

// Module 14911 (UserProfileDisplayNameStyleTileButton)
import nativeDefault from "native" /* 587 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8290 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10262 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { button: { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md }, previewContainer: { flex: 1, minWidth: 0 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStyleTileButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileDisplayNameStyleTileButton(user) {
  const cResult = user(576).c(26);
  user = user.user;
  const onPress = user.onPress;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === user.globalName) {
    if (cResult[2] === user.username) {
      let tmp7 = cResult[3];
    }
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp7);
    ({ displayName, displayNameStyles } = stateFromStoresObject);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [AccessibilityStore];
      const fn2 = function v() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[4] = items1;
      cResult[5] = fn2;
      let tmp10 = fn2;
      let tmp9 = items1;
    } else {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmp(504).useStateFromStores(tmp9, tmp10);
    const GifAutoPlay = tmp(2041).GifAutoPlay;
    const _Symbol2 = Symbol;
    const setting = GifAutoPlay.useSetting();
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.lsjENp);
      cResult[6] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== displayNameStyles) {
      const displayNameStyleAccessibleValue = tmp(14912).getDisplayNameStyleAccessibleValue(displayNameStyles);
      cResult[7] = displayNameStyles;
      cResult[8] = displayNameStyleAccessibleValue;
      let tmp16 = displayNameStyleAccessibleValue;
      const tmpResult4 = tmp(14912);
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] !== tmp16) {
      const obj2 = { text: tmp16 };
      cResult[9] = tmp16;
      cResult[10] = obj2;
      let tmp18 = obj2;
    } else {
      tmp18 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t["4lAcxv"]);
      cResult[11] = stringResult1;
      let tmp19 = stringResult1;
    } else {
      tmp19 = cResult[11];
    }
    if (!stateFromStores) {
      if (setting) {
        let STATIC = tmp(10263).EffectDisplayType.ANIMATED;
      }
      if (cResult[12] === displayName) {
        if (cResult[13] === displayNameStyles) {
          if (cResult[14] === STATIC) {
            if (cResult[15] === user.id) {
              let tmp21 = cResult[16];
            }
            if (cResult[17] === tmp4.previewContainer) {
              if (cResult[18] === tmp21) {
                let tmp25 = cResult[19];
              }
              const _Symbol4 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp31 = closure_6(tmp(6188).TableRowArrow, {});
                cResult[20] = tmp31;
                let tmp29 = tmp31;
              } else {
                tmp29 = cResult[20];
              }
              if (cResult[21] === onPress) {
                if (cResult[22] === tmp4.button) {
                  if (cResult[23] === tmp25) {
                    if (cResult[24] === tmp18) {
                      let tmp32 = cResult[25];
                    }
                    return tmp32;
                  }
                }
              }
              const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp14, accessibilityValue: tmp18, accessibilityHint: tmp19, onPress, style: tmp4.button, children: null };
              const items2 = [tmp25, tmp29];
              obj3.children = items2;
              const tmp34 = closure_7(tmp(6184).PressableHighlight, obj3);
              cResult[21] = onPress;
              cResult[22] = tmp4.button;
              cResult[23] = tmp25;
              cResult[24] = tmp18;
              cResult[25] = tmp34;
              tmp32 = tmp34;
            }
            const obj4 = { style: tmp4.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp21 };
            const tmp28 = closure_6(View, obj4);
            cResult[17] = tmp4.previewContainer;
            cResult[18] = tmp21;
            cResult[19] = tmp28;
            tmp25 = tmp28;
          }
        }
      }
      const obj5 = { userId: user.id, userName: displayName, pendingDisplayNameStyles: displayNameStyles, ignoreDisabledStylesSetting: true, effectDisplayType: STATIC, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
      const tmp24 = closure_6(UsernameWithEffectsDefault, obj5);
      cResult[12] = displayName;
      cResult[13] = displayNameStyles;
      cResult[14] = STATIC;
      cResult[15] = user.id;
      cResult[16] = tmp24;
      tmp21 = tmp24;
    }
    STATIC = tmp(10263).EffectDisplayType.STATIC;
    const tmpResult3 = tmp(504);
  }
  const fn = function p() {
    const obj = ProfileCustomizationUtils;
    let displayName = obj.getProfilePreviewValue({ pendingValue: UserProfileSettingsStore.getPendingChanges().pendingGlobalName, userValue: user.globalName });
    if (displayName == null) {
      displayName = user.username;
    }
    return { displayName, displayNameStyles: UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles };
  };
  cResult[1] = user.globalName;
  cResult[2] = user.username;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = user(576);
}) : (function UserProfileDisplayNameStyleTileButton(user) {
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
  const GifAutoPlay = user(2041).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const obj3 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, accessibilityHint: null, onPress: null, style: null, children: null };
  const intl = user(1126).intl;
  obj3.accessibilityLabel = intl.string(user(1126).t.lsjENp);
  const obj4 = { text: null };
  const obj2 = user(504);
  obj4.text = user(14912).getDisplayNameStyleAccessibleValue(displayNameStyles);
  obj3.accessibilityValue = obj4;
  const intl2 = user(1126).intl;
  obj3.accessibilityHint = intl2.string(user(1126).t["4lAcxv"]);
  obj3.onPress = user.onPress;
  obj3.style = tmp.button;
  const obj6 = { style: tmp.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj7 = { userId: user.id, userName: displayName, pendingDisplayNameStyles: displayNameStyles, ignoreDisabledStylesSetting: true, effectDisplayType: null, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
  if (!stateFromStores) {
    if (setting) {
      let STATIC = tmp2(10263).EffectDisplayType.ANIMATED;
    }
    obj7.effectDisplayType = STATIC;
    obj6.children = closure_6(tmp10, obj7);
    const items2 = [closure_6(View, obj6), closure_6(tmp2(6188).TableRowArrow, {})];
    obj3.children = items2;
    return closure_7(user(6184).PressableHighlight, obj3);
  }
  STATIC = tmp2(10263).EffectDisplayType.STATIC;
  const obj5 = user(14912);
});