// discord_app/modules/local_app_detection/native/RobloxConnectionCoachmark.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import themes from "../../../design/utils/shared/themes.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import ConnectedAccountsActionCreatorsDefault from "../../../actions/ConnectedAccountsActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import inlineStyles from "../../../../_runtime/08169_inlineStyles.js";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import LocalAppDetectionStore from "LocalAppDetectionStore.tsx";

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsLocations: closure_9, PlatformTypes: c10, UserSettingsSections: closure_11 } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { robloxIconContainer: null, content: null, text: null, avatarContainer: null, avatarInnerBorder: null };
let size = {
  width: 40,
  height: 40,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.robloxIconContainer = size;
obj2.content = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.text = { textAlign: "center" };
obj2.avatarContainer = { position: "relative" };
const size1 = {
  zIndex: 1,
  position: "absolute",
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  width: "100%",
  height: "100%",
};
obj2.avatarInnerBorder = size1;
let closure_15 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (theme) => {
      const cResult = c.c(15);
      theme = theme.theme;
      const tmp4 = closure_15();
      if (cResult[0] !== theme) {
        const isThemeDarkResult = themes.isThemeDark(theme);
        cResult[0] = theme;
        cResult[1] = isThemeDarkResult;
        let tmp5 = isThemeDarkResult;
        const tmpResult = themes;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        let str = "white";
        value = PlatformsDefault.get(constants2.ROBLOX);
        if (tmp5) {
          str = "black";
        }
        const icon = value.icon;
        const source = AvatarUtils.makeSource(tmp5 ? icon.darkPNG : icon.lightPNG);
        cResult[2] = tmp5;
        cResult[3] = str;
        cResult[4] = source;
        const tmpResult2 = AvatarUtils;
      } else {
        if (cResult[5] !== cResult[3]) {
          const obj2 = { backgroundColor: tmp7 };
          cResult[5] = tmp7;
          cResult[6] = obj2;
          let tmp15 = obj2;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] === tmp4.robloxIconContainer) {
          if (cResult[8] === tmp15) {
            let tmp16 = cResult[9];
          }
          if (cResult[10] !== tmp8) {
            const obj4 = { size: native.IconSizes.LARGE, source: tmp8, disableColor: true };
            const tmp19 = __initData2(native.Icon, obj4);
            cResult[10] = tmp8;
            cResult[11] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[11];
          }
          if (cResult[12] === tmp16) {
            if (cResult[13] === tmp17) {
              let tmp20 = cResult[14];
            }
            return tmp20;
          }
          const obj5 = { style: tmp16, children: tmp17 };
          const tmp23 = __initData2(View, obj5);
          cResult[12] = tmp16;
          cResult[13] = tmp17;
          cResult[14] = tmp23;
          tmp20 = tmp23;
        }
        const items = [tmp4.robloxIconContainer, tmp15];
        cResult[7] = tmp4.robloxIconContainer;
        cResult[8] = tmp15;
        cResult[9] = items;
        tmp16 = items;
      }
    }
  : (theme) => {
      const tmp = closure_15();
      const isThemeDarkResult = themes.isThemeDark(theme.theme);
      let str = "white";
      value = PlatformsDefault.get(constants2.ROBLOX);
      if (isThemeDarkResult) {
        str = "black";
      }
      const icon = value.icon;
      const obj3 = { style: null, children: null };
      const items = [tmp.robloxIconContainer, { backgroundColor: str }];
      obj3.style = items;
      const source = AvatarUtils.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
      const tmp2Result = AvatarUtils;
      obj3.children = __initData2(native.Icon, { size: native.IconSizes.LARGE, source, disableColor: true });
      return __initData2(View, obj3);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (theme) => {
      const cResult = c.c(6);
      let str = "black";
      if (obj2.isThemeDark(theme.theme)) {
        str = "white";
      }
      const id = noop.useId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = __initData2(inlineStyles.Path, {
          fill: "url(#a)",
          d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z",
        });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== str) {
        const obj3 = { children: null };
        const obj4 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: null };
        const obj5 = { stopColor: str, stopOpacity: 0.3 };
        const items = [__initData2(inlineStyles.Stop, obj5)];
        const obj6 = { offset: 1, stopColor: str, stopOpacity: 0.7 };
        items[1] = __initData2(inlineStyles.Stop, obj6);
        obj4.children = items;
        obj3.children = state(inlineStyles.LinearGradient, obj4);
        const tmp11 = __initData2(inlineStyles.Defs, obj3);
        cResult[1] = str;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === id) {
        if (cResult[4] === tmp8) {
          let tmp12 = cResult[5];
        }
        return tmp12;
      }
      const size = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: null };
      const items1 = [first, tmp8];
      size.children = items1;
      const tmp13 = state(inlineStylesDefault, size);
      cResult[3] = id;
      cResult[4] = tmp8;
      cResult[5] = tmp13;
      tmp12 = tmp13;
      obj2 = themes;
    }
  : (theme) => {
      let str = "black";
      if (obj.isThemeDark(theme.theme)) {
        str = "white";
      }
      const id = noop.useId();
      const size = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: null };
      obj = themes;
      const items = [
        __initData2(inlineStyles.Path, {
          fill: "url(#a)",
          d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z",
        }),
      ];
      const obj2 = { children: null };
      const obj3 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: null };
      const items1 = [
        __initData2(inlineStyles.Stop, { stopColor: str, stopOpacity: 0.3 }),
        __initData2(inlineStyles.Stop, { offset: 1, stopColor: str, stopOpacity: 0.7 }),
      ];
      obj3.children = items1;
      obj2.children = state(inlineStyles.LinearGradient, obj3);
      items[1] = __initData2(inlineStyles.Defs, obj2);
      size.children = items;
      return state(inlineStylesDefault, size);
    };
let closure_17 = tmp5;
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(10);
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== tmp4.avatarInnerBorder) {
        const obj2 = { style: tmp4.avatarInnerBorder };
        const tmp12 = __initData2(View, obj2);
        cResult[2] = tmp4.avatarInnerBorder;
        cResult[3] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const obj3 = { size: native.AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" };
        const tmp15 = __initData2(native.Avatar, obj3);
        cResult[4] = stateFromStores;
        cResult[5] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp4.avatarContainer) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === tmp13) {
            let tmp16 = cResult[9];
          }
          return tmp16;
        }
      }
      const obj4 = { style: tmp4.avatarContainer, children: null };
      const items1 = [tmp9, tmp13];
      obj4.children = items1;
      const tmp17 = state(View, obj4);
      cResult[6] = tmp4.avatarContainer;
      cResult[7] = tmp9;
      cResult[8] = tmp13;
      cResult[9] = tmp17;
      tmp16 = tmp17;
      const tmpResult = initialize;
    }
  : () => {
      const tmp = closure_15();
      const items = [UserStore];
      const obj2 = { style: tmp.avatarContainer, children: null };
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [__initData2(View, { style: tmp.avatarInnerBorder })];
      const obj3 = { style: tmp.avatarInnerBorder };
      items1[1] = __initData2(native.Avatar, {
        size: native.AvatarSizes.NORMAL,
        user: stateFromStores,
        guildId: "Array",
      });
      obj2.children = items1;
      return state(View, obj2);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(576).c(46);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_15();
      let obj = markAsDismissed(576);
      const theme = markAsDismissed(4595).useThemeContext().theme;
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== markAsDismissed) {
        const fn = function n() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          if (markAsDismissed != null) {
            tmp4(ContentDismissActionType.PRIMARY);
          }
          authorizeConnectionDefault({
            platformType: constants2.ROBLOX,
            location: constants.ROBLOX_CONNECTION_ACTION_SHEET,
          });
          const obj2 = { platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET };
          openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS });
          const obj4 = { screen: constants3.CONNECTIONS };
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== markAsDismissed) {
        class O {
          constructor() {
            obj = closure_1(closure_2[15]);
            hideActionSheetResult = obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp3 = ContentDismissActionType;
              tmp2Result = tmp2(ContentDismissActionType.DISMISS);
            }
            return;
          }
        }
        cResult[2] = markAsDismissed;
        cResult[3] = O;
      } else {
        class O {
          constructor() {
            obj = closure_1(closure_2[15]);
            hideActionSheetResult = obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp3 = ContentDismissActionType;
              tmp2Result = tmp2(ContentDismissActionType.DISMISS);
            }
            return;
          }
        }
      }
      if (cResult[4] !== O) {
        class O {
          constructor() {
            obj = closure_1(closure_2[15]);
            hideActionSheetResult = obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp3 = ContentDismissActionType;
              tmp2Result = tmp2(ContentDismissActionType.DISMISS);
            }
            return;
          }
        }
        let obj3 = { title: null, leading: null };
        let obj4 = { onPress: O };
        obj3.leading = closure_13(tmp(6703).ActionSheetCloseButton, obj4);
        const tmp9 = closure_13(tmp(6651).BottomSheetTitleHeader, obj3);
        cResult[4] = O;
        cResult[5] = tmp9;
      } else {
        class O {
          constructor() {
            obj = closure_1(closure_2[15]);
            hideActionSheetResult = obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp3 = ContentDismissActionType;
              tmp2Result = tmp2(ContentDismissActionType.DISMISS);
            }
            return;
          }
        }
      }
      if (cResult[6] !== markAsDismissed) {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        cResult[6] = markAsDismissed;
        cResult[7] = R;
      } else {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
      }
      if (cResult[8] !== bottom) {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        tmp12[0] = bottom;
        cResult[8] = bottom;
        cResult[9] = tmp12;
      } else {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
      }
      if (cResult[10] !== theme) {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        const obj5 = { theme };
        const tmp16 = closure_13(closure_16, obj5);
        const obj6 = { theme };
        const tmp18 = closure_13(closure_17, obj6);
        cResult[10] = theme;
        cResult[11] = tmp16;
        cResult[12] = tmp18;
        let tmp14 = tmp18;
      } else {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        tmp14 = cResult[12];
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        const tmp21 = closure_13(closure_18, {});
        cResult[13] = tmp21;
        const tmp19 = tmp21;
      } else {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
      }
      if (cResult[14] === tmp13) {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        const _Symbol = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
          const stringResult = obj8.string(tmp(1126).t.t3asUZ);
          cResult[17] = stringResult;
          const tmp24 = stringResult;
        } else {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
        }
        if (cResult[18] !== tmp4.text) {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
          const obj7 = { variant: "heading-xl/bold", style: tmp4.text, children: tmp24 };
          const tmp27 = closure_13(tmp(4892).Text, obj7);
          cResult[18] = tmp4.text;
          cResult[19] = tmp27;
        } else {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
          const stringResult1 = obj10.string(tmp(1126).t.no96NU);
          cResult[20] = stringResult1;
          const tmp28 = stringResult1;
        } else {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
        }
        if (cResult[21] !== tmp4.text) {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
          const obj9 = { variant: "text-md/medium", style: tmp4.text, children: tmp28 };
          const tmp31 = closure_13(tmp(4892).Text, obj9);
          cResult[21] = tmp4.text;
          cResult[22] = tmp31;
        } else {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
        }
        if (cResult[23] === tmp26) {
          class R {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
            const stringResult2 = obj13.string(tmp(1126).t.ItuabN);
            const obj11 = { size: "sm", color: nativeDefault.colors.WHITE };
            const tmp39 = closure_13(tmp(12772).WindowLaunchIcon, obj11);
            cResult[26] = stringResult2;
            cResult[27] = tmp39;
            let tmp36 = tmp39;
            const tmp35 = stringResult2;
          } else {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
            tmp36 = cResult[27];
          }
          if (cResult[28] !== tmp6) {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
            const obj12 = { text: tmp35, icon: tmp36, iconPosition: "end", size: "lg", onPress: tmp6 };
            const tmp41 = closure_13(tmp(5601).Button, obj12);
            cResult[28] = tmp6;
            cResult[29] = tmp41;
          } else {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
            const stringResult3 = obj16.string(tmp(1126).t.DiGJy3);
            cResult[30] = stringResult3;
            const tmp42 = stringResult3;
          } else {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
          }
          if (cResult[31] !== O) {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
            const obj14 = { text: tmp42, variant: "secondary", size: "lg", onPress: O };
            const tmp45 = closure_13(tmp(5601).Button, obj14);
            cResult[31] = O;
            cResult[32] = tmp45;
          } else {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
          }
          if (cResult[33] === tmp40) {
            class R {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
            if (cResult[36] === tmp22) {
              class R {
                constructor() {
                  return markAsDismissed(ContentDismissActionType.DISMISS);
                }
              }
            }
            const obj15 = { spacing: 24, style: tmp12, children: null };
            const items = [tmp22, tmp32, tmp46];
            obj15.children = items;
            const tmp51 = closure_14(tmp(5600).Stack, obj15);
            cResult[36] = tmp22;
            cResult[37] = tmp32;
            cResult[38] = tmp46;
            cResult[39] = tmp12;
            cResult[40] = tmp51;
          }
          const obj17 = { children: null };
          const items1 = [tmp40, tmp44];
          obj17.children = items1;
          const tmp48 = closure_14(tmp(5600).Stack, obj17);
          cResult[33] = tmp40;
          cResult[34] = tmp44;
          cResult[35] = tmp48;
        }
        const obj18 = { justify: "center", children: null };
        const items2 = [tmp26, tmp30];
        obj18.children = items2;
        const tmp34 = closure_14(tmp(5600).Stack, obj18);
        cResult[23] = tmp26;
        cResult[24] = tmp30;
        cResult[25] = tmp34;
      }
      const obj19 = { justify: "center", align: "center", direction: "horizontal", children: null };
      const items3 = [tmp13, tmp14, tmp19];
      obj19.children = items3;
      const tmp23 = closure_14(markAsDismissed(5600).Stack, obj19);
      cResult[14] = tmp13;
      cResult[15] = tmp14;
      cResult[16] = tmp23;
      let obj2 = markAsDismissed(4595);
    }
  : (markAsDismissed) => {
      markAsDismissed = markAsDismissed.markAsDismissed;
      function handleCancel() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
      const tmp = closure_15();
      const theme = markAsDismissed(4595).useThemeContext().theme;
      let obj2 = { startExpanded: true, contentStyles: tmp.content, header: null, onDismiss: null, children: null };
      let obj = markAsDismissed(4595);
      obj2.header = closure_13(markAsDismissed(6651).BottomSheetTitleHeader, {
        title: null,
        leading: closure_13(markAsDismissed(6703).ActionSheetCloseButton, { onPress: handleCancel }),
      });
      obj2.onDismiss = function onDismiss() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      };
      let obj4 = { spacing: 24, style: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
      const obj5 = { justify: "center", align: "center", direction: "horizontal", children: null };
      const items = [closure_13(closure_16, { theme }), closure_13(closure_17, { theme }), closure_13(closure_18, {})];
      obj5.children = items;
      const items1 = [closure_14(markAsDismissed(5600).Stack, obj5), ,];
      const obj6 = { justify: "center", children: null };
      const obj7 = { variant: "heading-xl/bold", style: tmp.text, children: null };
      const intl = markAsDismissed(1126).intl;
      obj7.children = intl.string(markAsDismissed(1126).t.t3asUZ);
      const items2 = [closure_13(markAsDismissed(4892).Text, obj7)];
      const obj8 = { variant: "text-md/medium", style: tmp.text, children: null };
      const intl2 = markAsDismissed(1126).intl;
      obj8.children = intl2.string(markAsDismissed(1126).t.no96NU);
      items2[1] = closure_13(markAsDismissed(4892).Text, obj8);
      obj6.children = items2;
      items1[1] = closure_14(markAsDismissed(5600).Stack, obj6);
      const obj9 = { children: null };
      const obj10 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
      const intl3 = markAsDismissed(1126).intl;
      obj10.text = intl3.string(markAsDismissed(1126).t.ItuabN);
      let obj3 = {
        title: null,
        leading: closure_13(markAsDismissed(6703).ActionSheetCloseButton, { onPress: handleCancel }),
      };
      obj10.icon = closure_13(markAsDismissed(12772).WindowLaunchIcon, {
        size: "sm",
        color: nativeDefault.colors.WHITE,
      });
      obj10.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (markAsDismissed != null) {
          tmp4(ContentDismissActionType.PRIMARY);
        }
        authorizeConnectionDefault({
          platformType: constants2.ROBLOX,
          location: constants.ROBLOX_CONNECTION_ACTION_SHEET,
        });
        const obj2 = { platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET };
        openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS });
        const obj4 = { screen: constants3.CONNECTIONS };
      };
      const items3 = [closure_13(markAsDismissed(5601).Button, obj10)];
      const obj12 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl4 = markAsDismissed(1126).intl;
      obj12.text = intl4.string(markAsDismissed(1126).t.DiGJy3);
      obj12.onPress = handleCancel;
      items3[1] = closure_13(markAsDismissed(5601).Button, obj12);
      obj9.children = items3;
      items1[2] = closure_14(markAsDismissed(5600).Stack, obj9);
      obj4.children = items1;
      obj2.children = closure_14(markAsDismissed(5600).Stack, obj4);
      return closure_13(markAsDismissed(6652).BottomSheet, obj2);
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default tmp4;
export const UnionIcon = tmp5;
export const useShouldShowRobloxConnectionCoachmark = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocalAppDetectionStore];
        const fn = function c() {
          return appInstalled.isAppInstalled(stateFromStores(13541).DetectableAppNames.ROBLOX);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      const tmp8 = hasRoloxAccount(noop.useState(false), 2);
      const first = tmp8[0];
      dependencyMap = tmp8[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ConnectedAccountsStore];
        class S {
          constructor() {
            obj = { fetchingAccounts: closure_1_6.isFetching(), hasRoloxAccount: null };
            accounts = closure_1_6.getAccounts();
            obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
            return obj;
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        let tmp11 = S;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult = stateFromStores(504);
      const stateFromStoresObject = stateFromStores(504).useStateFromStoresObject(tmp10, tmp11);
      ({ fetchingAccounts, hasRoloxAccount } = stateFromStoresObject);
      if (cResult[4] === first) {
        if (cResult[5] === stateFromStores) {
          let tmp14 = cResult[6];
          let tmp15 = cResult[7];
        }
        const effect = noop.useEffect(tmp14, tmp15);
        if (cResult[8] !== hasRoloxAccount) {
          const fn3 = function x() {
            if (hasRoloxAccount) {
              const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
              const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
                dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
                obj2,
              );
            }
          };
          const items2 = [hasRoloxAccount];
          class S {
            constructor() {
              obj = { fetchingAccounts: closure_1_6.isFetching(), hasRoloxAccount: null };
              accounts = closure_1_6.getAccounts();
              obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
              return obj;
            }
          }
          cResult[8] = hasRoloxAccount;
          cResult[9] = fn3;
          cResult[10] = items2;
        }
        class S {
          constructor() {
            obj = { fetchingAccounts: closure_1_6.isFetching(), hasRoloxAccount: null };
            accounts = closure_1_6.getAccounts();
            obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
            return obj;
          }
        }
        let tmp19 = !fetchingAccounts;
        if (!fetchingAccounts) {
          tmp19 = stateFromStores;
        }
        if (tmp19) {
          tmp19 = !hasRoloxAccount;
        }
        return tmp19;
      }
      const fn2 = function y() {
        let tmp = stateFromStores;
        if (stateFromStores) {
          tmp = !first;
        }
        if (tmp) {
          dependencyMap(true);
          const response = ConnectedAccountsActionCreatorsDefault.fetch();
        }
      };
      const items3 = [first, stateFromStores];
      cResult[4] = first;
      cResult[5] = stateFromStores;
      cResult[6] = fn2;
      cResult[7] = items3;
      tmp15 = items3;
      tmp14 = fn2;
      const tmpResult2 = stateFromStores(504);
    }
  : () => {
      const items = [LocalAppDetectionStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () =>
        appInstalled.isAppInstalled(stateFromStores(13541).DetectableAppNames.ROBLOX),
      );
      const tmp2 = hasRoloxAccount(noop.useState(false), 2);
      const first = tmp2[0];
      dependencyMap = tmp2[1];
      let obj = stateFromStores(504);
      const items1 = [ConnectedAccountsStore];
      const stateFromStoresObject = stateFromStores(504).useStateFromStoresObject(items1, () => {
        const obj = { fetchingAccounts: ConnectedAccountsStore.isFetching(), hasRoloxAccount: null };
        const accounts = ConnectedAccountsStore.getAccounts();
        obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
        return obj;
      });
      ({ fetchingAccounts, hasRoloxAccount } = stateFromStoresObject);
      const items2 = [first, stateFromStores];
      const effect = noop.useEffect(() => {
        let tmp = stateFromStores;
        if (stateFromStores) {
          tmp = !first;
        }
        if (tmp) {
          dependencyMap(true);
          const response = ConnectedAccountsActionCreatorsDefault.fetch();
        }
      }, items2);
      const items3 = [hasRoloxAccount];
      const effect1 = noop.useEffect(() => {
        if (hasRoloxAccount) {
          const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
            dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
            obj2,
          );
        }
      }, items3);
      let tmp7 = !fetchingAccounts;
      if (!fetchingAccounts) {
        tmp7 = stateFromStores;
      }
      if (tmp7) {
        tmp7 = !hasRoloxAccount;
      }
      return tmp7;
    };
