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
import inlineStyles from "../../../../_runtime/07576_inlineStyles.js";
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
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5092);
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
  ? function RobloxIcon(theme) {
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
            const tmp19 = map1(native.Icon, obj4);
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
          const tmp23 = map1(View, obj5);
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
  : function RobloxIcon(theme) {
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
      obj3.children = map1(native.Icon, { size: native.IconSizes.LARGE, source, disableColor: true });
      return map1(View, obj3);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UnionIcon(theme) {
      const cResult = c.c(6);
      let str = "black";
      if (obj2.isThemeDark(theme.theme)) {
        str = "white";
      }
      const id = noop.useId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = map1(inlineStyles.Path, {
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
        const items = [map1(inlineStyles.Stop, obj5)];
        const obj6 = { offset: 1, stopColor: str, stopOpacity: 0.7 };
        items[1] = map1(inlineStyles.Stop, obj6);
        obj4.children = items;
        obj3.children = closure_1_14(inlineStyles.LinearGradient, obj4);
        const tmp11 = map1(inlineStyles.Defs, obj3);
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
      const tmp13 = closure_1_14(inlineStylesDefault, size);
      cResult[3] = id;
      cResult[4] = tmp8;
      cResult[5] = tmp13;
      tmp12 = tmp13;
      obj2 = themes;
    }
  : function UnionIcon(theme) {
      let str = "black";
      if (obj.isThemeDark(theme.theme)) {
        str = "white";
      }
      const id = noop.useId();
      const size = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: null };
      obj = themes;
      const items = [
        map1(inlineStyles.Path, {
          fill: "url(#a)",
          d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z",
        }),
      ];
      const obj2 = { children: null };
      const obj3 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: null };
      const items1 = [
        map1(inlineStyles.Stop, { stopColor: str, stopOpacity: 0.3 }),
        map1(inlineStyles.Stop, { offset: 1, stopColor: str, stopOpacity: 0.7 }),
      ];
      obj3.children = items1;
      obj2.children = closure_1_14(inlineStyles.LinearGradient, obj3);
      items[1] = map1(inlineStyles.Defs, obj2);
      size.children = items;
      return closure_1_14(inlineStylesDefault, size);
    };
let closure_17 = tmp5;
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserIcon() {
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
        const tmp12 = map1(View, obj2);
        cResult[2] = tmp4.avatarInnerBorder;
        cResult[3] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const obj3 = { size: native.AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" };
        const tmp15 = map1(native.Avatar, obj3);
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
      const tmp17 = closure_1_14(View, obj4);
      cResult[6] = tmp4.avatarContainer;
      cResult[7] = tmp9;
      cResult[8] = tmp13;
      cResult[9] = tmp17;
      tmp16 = tmp17;
      const tmpResult = initialize;
    }
  : function UserIcon() {
      const tmp = closure_15();
      const items = [UserStore];
      const obj2 = { style: tmp.avatarContainer, children: null };
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [map1(View, { style: tmp.avatarInnerBorder })];
      const obj3 = { style: tmp.avatarInnerBorder };
      items1[1] = map1(native.Avatar, { size: native.AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" });
      obj2.children = items1;
      return closure_1_14(View, obj2);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RobloxConnectionActionSheet(markAsDismissed) {
      const cResult = markAsDismissed(576).c(46);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_15();
      let obj = markAsDismissed(576);
      const theme = markAsDismissed(4827).useThemeContext().theme;
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== markAsDismissed) {
        function handleConnect() {
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
        }
        cResult[0] = markAsDismissed;
        cResult[1] = handleConnect;
        let tmp6 = handleConnect;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== markAsDismissed) {
        function handleCancel() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          if (markAsDismissed != null) {
            tmp2(ContentDismissActionType.DISMISS);
          }
        }
        cResult[2] = markAsDismissed;
        cResult[3] = handleCancel;
        let tmp7 = handleCancel;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp7) {
        let obj3 = { title: null, leading: null };
        let obj4 = { onPress: tmp7 };
        obj3.leading = closure_13(tmp(6893).ActionSheetCloseButton, obj4);
        const tmp10 = closure_13(tmp(6838).BottomSheetTitleHeader, obj3);
        cResult[4] = tmp7;
        cResult[5] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== markAsDismissed) {
        const fn = function _() {
          return markAsDismissed(ContentDismissActionType.DISMISS);
        };
        cResult[6] = markAsDismissed;
        cResult[7] = fn;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== bottom) {
        const obj5 = { paddingBottom: bottom };
        cResult[8] = bottom;
        cResult[9] = obj5;
        let tmp12 = obj5;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] !== theme) {
        const obj6 = { theme };
        const tmp17 = closure_13(closure_16, obj6);
        const obj7 = { theme };
        const tmp19 = closure_13(closure_17, obj7);
        cResult[10] = theme;
        cResult[11] = tmp17;
        cResult[12] = tmp19;
        let tmp14 = tmp19;
        let tmp13 = tmp17;
      } else {
        tmp13 = cResult[11];
        tmp14 = cResult[12];
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = closure_13(closure_18, {});
        cResult[13] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[14] === tmp13) {
        if (cResult[15] === tmp14) {
          let tmp24 = cResult[16];
        }
        const _Symbol = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.t3asUZ);
          cResult[17] = stringResult;
          let tmp26 = stringResult;
        } else {
          tmp26 = cResult[17];
        }
        if (cResult[18] !== tmp4.text) {
          const obj8 = { variant: "heading-xl/bold", style: tmp4.text, children: tmp26 };
          const tmp30 = closure_13(tmp(5088).Text, obj8);
          cResult[18] = tmp4.text;
          cResult[19] = tmp30;
          let tmp28 = tmp30;
        } else {
          tmp28 = cResult[19];
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.no96NU);
          cResult[20] = stringResult1;
          let tmp31 = stringResult1;
        } else {
          tmp31 = cResult[20];
        }
        if (cResult[21] !== tmp4.text) {
          const obj9 = { variant: "text-md/medium", style: tmp4.text, children: tmp31 };
          const tmp35 = closure_13(tmp(5088).Text, obj9);
          cResult[21] = tmp4.text;
          cResult[22] = tmp35;
          let tmp33 = tmp35;
        } else {
          tmp33 = cResult[22];
        }
        if (cResult[23] === tmp28) {
          if (cResult[24] === tmp33) {
            let tmp36 = cResult[25];
          }
          const _Symbol3 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t.ItuabN);
            const obj10 = { size: "sm", color: nativeDefault.colors.WHITE };
            const tmp43 = closure_13(tmp(12869).WindowLaunchIcon, obj10);
            cResult[26] = stringResult2;
            cResult[27] = tmp43;
            let tmp40 = tmp43;
            let tmp39 = stringResult2;
          } else {
            tmp39 = cResult[26];
            tmp40 = cResult[27];
          }
          if (cResult[28] !== tmp6) {
            const obj11 = { text: tmp39, icon: tmp40, iconPosition: "end", size: "lg", onPress: tmp6 };
            const tmp46 = closure_13(tmp(5379).Button, obj11);
            cResult[28] = tmp6;
            cResult[29] = tmp46;
            let tmp44 = tmp46;
          } else {
            tmp44 = cResult[29];
          }
          const _Symbol4 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult3 = intl4.string(tmp(1126).t.DiGJy3);
            cResult[30] = stringResult3;
            let tmp47 = stringResult3;
          } else {
            tmp47 = cResult[30];
          }
          if (cResult[31] !== tmp7) {
            const obj12 = { text: tmp47, variant: "secondary", size: "lg", onPress: tmp7 };
            const tmp51 = closure_13(tmp(5379).Button, obj12);
            cResult[31] = tmp7;
            cResult[32] = tmp51;
            let tmp49 = tmp51;
          } else {
            tmp49 = cResult[32];
          }
          if (cResult[33] === tmp44) {
            if (cResult[34] === tmp49) {
              let tmp52 = cResult[35];
            }
            if (cResult[36] === tmp24) {
              if (cResult[37] === tmp36) {
                if (cResult[38] === tmp52) {
                  if (cResult[39] === tmp12) {
                    let tmp55 = cResult[40];
                  }
                  if (cResult[41] === tmp4.content) {
                    if (cResult[42] === tmp55) {
                      if (cResult[43] === tmp8) {
                        if (cResult[44] === tmp11) {
                          let tmp58 = cResult[45];
                        }
                        return tmp58;
                      }
                    }
                  }
                  const obj13 = {
                    startExpanded: true,
                    contentStyles: tmp4.content,
                    header: tmp8,
                    onDismiss: tmp11,
                    children: tmp55,
                  };
                  const tmp60 = closure_13(tmp(6839).BottomSheet, obj13);
                  cResult[41] = tmp4.content;
                  cResult[42] = tmp55;
                  cResult[43] = tmp8;
                  cResult[44] = tmp11;
                  cResult[45] = tmp60;
                  tmp58 = tmp60;
                }
              }
            }
            const obj14 = { spacing: 24, style: tmp12, children: null };
            const items = [tmp24, tmp36, tmp52];
            obj14.children = items;
            const tmp57 = closure_14(tmp(5377).Stack, obj14);
            cResult[36] = tmp24;
            cResult[37] = tmp36;
            cResult[38] = tmp52;
            cResult[39] = tmp12;
            cResult[40] = tmp57;
            tmp55 = tmp57;
          }
          const obj15 = { children: null };
          const items1 = [tmp44, tmp49];
          obj15.children = items1;
          const tmp54 = closure_14(tmp(5377).Stack, obj15);
          cResult[33] = tmp44;
          cResult[34] = tmp49;
          cResult[35] = tmp54;
          tmp52 = tmp54;
        }
        const obj16 = { justify: "center", children: null };
        const items2 = [tmp28, tmp33];
        obj16.children = items2;
        const tmp38 = closure_14(tmp(5377).Stack, obj16);
        cResult[23] = tmp28;
        cResult[24] = tmp33;
        cResult[25] = tmp38;
        tmp36 = tmp38;
      }
      const obj17 = { justify: "center", align: "center", direction: "horizontal", children: null };
      const items3 = [tmp13, tmp14, tmp20];
      obj17.children = items3;
      const tmp25 = closure_14(markAsDismissed(5377).Stack, obj17);
      cResult[14] = tmp13;
      cResult[15] = tmp14;
      cResult[16] = tmp25;
      tmp24 = tmp25;
      let obj2 = markAsDismissed(4827);
    }
  : function RobloxConnectionActionSheet(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      function handleCancel() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }
      const tmp = closure_15();
      const theme = markAsDismissed(4827).useThemeContext().theme;
      let obj2 = { startExpanded: true, contentStyles: tmp.content, header: null, onDismiss: null, children: null };
      let obj = markAsDismissed(4827);
      obj2.header = closure_13(markAsDismissed(6838).BottomSheetTitleHeader, {
        title: null,
        leading: closure_13(markAsDismissed(6893).ActionSheetCloseButton, { onPress: handleCancel }),
      });
      obj2.onDismiss = function onDismiss() {
        return markAsDismissed(ContentDismissActionType.DISMISS);
      };
      let obj4 = { spacing: 24, style: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
      const obj5 = { justify: "center", align: "center", direction: "horizontal", children: null };
      const items = [closure_13(closure_16, { theme }), closure_13(closure_17, { theme }), closure_13(closure_18, {})];
      obj5.children = items;
      const items1 = [closure_14(markAsDismissed(5377).Stack, obj5), ,];
      const obj6 = { justify: "center", children: null };
      const obj7 = { variant: "heading-xl/bold", style: tmp.text, children: null };
      const intl = markAsDismissed(1126).intl;
      obj7.children = intl.string(markAsDismissed(1126).t.t3asUZ);
      const items2 = [closure_13(markAsDismissed(5088).Text, obj7)];
      const obj8 = { variant: "text-md/medium", style: tmp.text, children: null };
      const intl2 = markAsDismissed(1126).intl;
      obj8.children = intl2.string(markAsDismissed(1126).t.no96NU);
      items2[1] = closure_13(markAsDismissed(5088).Text, obj8);
      obj6.children = items2;
      items1[1] = closure_14(markAsDismissed(5377).Stack, obj6);
      const obj9 = { children: null };
      const obj10 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
      const intl3 = markAsDismissed(1126).intl;
      obj10.text = intl3.string(markAsDismissed(1126).t.ItuabN);
      let obj3 = {
        title: null,
        leading: closure_13(markAsDismissed(6893).ActionSheetCloseButton, { onPress: handleCancel }),
      };
      obj10.icon = closure_13(markAsDismissed(12869).WindowLaunchIcon, {
        size: "sm",
        color: nativeDefault.colors.WHITE,
      });
      obj10.onPress = function handleConnect() {
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
      const items3 = [closure_13(markAsDismissed(5379).Button, obj10)];
      const obj12 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl4 = markAsDismissed(1126).intl;
      obj12.text = intl4.string(markAsDismissed(1126).t.DiGJy3);
      obj12.onPress = handleCancel;
      items3[1] = closure_13(markAsDismissed(5379).Button, obj12);
      obj9.children = items3;
      items1[2] = closure_14(markAsDismissed(5377).Stack, obj9);
      obj4.children = items1;
      obj2.children = closure_14(markAsDismissed(5377).Stack, obj4);
      return closure_13(markAsDismissed(6839).BottomSheet, obj2);
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default tmp4;
export const UnionIcon = tmp5;
export const useShouldShowRobloxConnectionCoachmark = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldShowRobloxConnectionCoachmark() {
      const cResult = stateFromStores(576).c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocalAppDetectionStore];
        const fn = function s() {
          return appInstalled.isAppInstalled(stateFromStores(13984).DetectableAppNames.ROBLOX);
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
          const fn2 = function v() {
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
          cResult[9] = fn2;
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
      class A {
        constructor() {
          tmp = closure_0;
          if (closure_0) {
            tmp2 = closure_1;
            tmp = !closure_1;
          }
          if (tmp) {
            tmp3 = closure_2;
            flag = true;
            tmp4 = closure_2(true);
            tmp5 = closure_1;
            tmp6 = closure_2;
            obj = closure_1(closure_2[33]);
            response = obj.fetch();
          }
          return;
        }
      }
      const items3 = [first, stateFromStores];
      cResult[4] = first;
      cResult[5] = stateFromStores;
      cResult[6] = A;
      cResult[7] = items3;
      tmp15 = items3;
      tmp14 = A;
      const tmpResult2 = stateFromStores(504);
    }
  : function useShouldShowRobloxConnectionCoachmark() {
      const items = [LocalAppDetectionStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () =>
        appInstalled.isAppInstalled(stateFromStores(13984).DetectableAppNames.ROBLOX),
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
