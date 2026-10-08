// === Module 14745: UserProfileDisplayNameStyleTileButton ===

// Module 14745 (UserProfileDisplayNameStyleTileButton)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import Pressables from "Pressables" /* 6189 */;
import TableRowArrow from "TableRowArrow" /* 6193 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10246 */;
import types from "types" /* 10247 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 14746 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8260 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { button: { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md }, previewContainer: { flex: 1, minWidth: 0 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStyleTileButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileDisplayNameStyleTileButton(arg0) {
  const cResult = c.c(24);
  ({ user, onPress } = arg0);
  const tmp4 = closure_8();
  let username = user.globalName;
  if (username == null) {
    username = user.username;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function b() {
      return tryItOutChanges.getTryItOutChanges().tryItOutDisplayNameStyles;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class N {
      constructor() {
        return closure_1_4.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = N;
    let tmp10 = N;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp9, tmp10);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.lsjENp);
    class N {
      constructor() {
        return closure_1_4.useReducedMotion;
      }
    }
    cResult[4] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const displayNameStyleAccessibleValue = UserProfileEditingAccessibilityUtils.getDisplayNameStyleAccessibleValue(stateFromStores);
    class N {
      constructor() {
        return closure_1_4.useReducedMotion;
      }
    }
    cResult[6] = displayNameStyleAccessibleValue;
    let tmp16 = displayNameStyleAccessibleValue;
    const tmpResult4 = UserProfileEditingAccessibilityUtils;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== tmp16) {
    const obj2 = { text: tmp16 };
    class N {
      constructor() {
        return closure_1_4.useReducedMotion;
      }
    }
    cResult[8] = obj2;
    let tmp18 = obj2;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["4lAcxv"]);
    class N {
      constructor() {
        return closure_1_4.useReducedMotion;
      }
    }
    cResult[9] = stringResult1;
    let tmp19 = stringResult1;
  } else {
    tmp19 = cResult[9];
  }
  if (!stateFromStores1) {
    if (setting) {
      let STATIC = types.EffectDisplayType.ANIMATED;
    }
    if (cResult[10] === username) {
      if (cResult[11] === stateFromStores) {
        if (cResult[12] === STATIC) {
          if (cResult[13] === user.id) {
            let tmp21 = cResult[14];
          }
          if (cResult[15] === tmp4.previewContainer) {
            if (cResult[16] === tmp21) {
              let tmp24 = cResult[17];
            }
            const _Symbol = Symbol;
            class N {
              constructor() {
                return closure_1_4.useReducedMotion;
              }
            }
            if (cResult[19] === onPress) {
              if (cResult[20] === tmp4.button) {
                if (cResult[21] === tmp24) {
                  if (cResult[22] === tmp18) {
                    let tmp29 = cResult[23];
                  }
                  return tmp29;
                }
              }
            }
            const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp14, accessibilityValue: tmp18, accessibilityHint: tmp19, onPress, style: tmp4.button, children: null };
            const items2 = [tmp24, tmp28];
            obj3.children = items2;
            const tmp31 = React5(Pressables.PressableHighlight, obj3);
            cResult[19] = onPress;
            cResult[20] = tmp4.button;
            cResult[21] = tmp24;
            cResult[22] = tmp18;
            cResult[23] = tmp31;
            tmp29 = tmp31;
          }
          class N {
            constructor() {
              return closure_1_4.useReducedMotion;
            }
          }
          const obj4 = { style: tmp4.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp21 };
          const tmp26 = timestampProducer(View, obj4);
          cResult[15] = tmp4.previewContainer;
          cResult[16] = tmp21;
          cResult[17] = tmp26;
          tmp24 = tmp26;
        }
      }
    }
    class N {
      constructor() {
        return closure_1_4.useReducedMotion;
      }
    }
    const obj5 = { userId: user.id, userName: username, pendingDisplayNameStyles: stateFromStores, ignoreDisabledStylesSetting: true, effectDisplayType: STATIC, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
    const tmp23 = timestampProducer(UsernameWithEffectsDefault, obj5);
    cResult[10] = username;
    cResult[11] = stateFromStores;
    cResult[12] = STATIC;
    cResult[13] = user.id;
    cResult[14] = tmp23;
    tmp21 = tmp23;
  }
  STATIC = types.EffectDisplayType.STATIC;
  const tmpResult3 = initialize;
}) : (function UserProfileDisplayNameStyleTileButton(user) {
  user = user.user;
  const tmp = closure_8();
  let username = user.globalName;
  if (username == null) {
    username = user.username;
  }
  const items = [UserProfileSettingsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => tryItOutChanges.getTryItOutChanges().tryItOutDisplayNameStyles);
  const items1 = [AccessibilityStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const obj3 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, accessibilityHint: null, onPress: null, style: null, children: null };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.lsjENp);
  const obj4 = { text: null };
  obj4.text = UserProfileEditingAccessibilityUtils.getDisplayNameStyleAccessibleValue(stateFromStores);
  obj3.accessibilityValue = obj4;
  const intl2 = util.intl;
  obj3.accessibilityHint = intl2.string(util.t["4lAcxv"]);
  obj3.onPress = user.onPress;
  obj3.style = tmp.button;
  const obj6 = { style: tmp.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj7 = { userId: user.id, userName: username, pendingDisplayNameStyles: stateFromStores, ignoreDisabledStylesSetting: true, effectDisplayType: null, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
  if (!stateFromStores1) {
    if (setting) {
      let STATIC = types.EffectDisplayType.ANIMATED;
    }
    obj7.effectDisplayType = STATIC;
    obj6.children = timestampProducer(tmp10, obj7);
    const items2 = [timestampProducer(View, obj6), timestampProducer(TableRowArrow.TableRowArrow, {})];
    obj3.children = items2;
    return React5(Pressables.PressableHighlight, obj3);
  }
  STATIC = types.EffectDisplayType.STATIC;
});