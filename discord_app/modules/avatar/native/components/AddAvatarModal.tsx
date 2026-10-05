// discord_app/modules/avatar/native/components/AddAvatarModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import RecentAvatarUtils from "../../../recent_avatars/RecentAvatarUtils.tsx";
import VideoBackground from "../../../calls/native/VideoBackground.tsx";
import ProfilePendingImageUtils from "../../../profile_customization/ProfilePendingImageUtils.tsx";
import AddAvatarModalActionCreators from "../AddAvatarModalActionCreators.tsx";
import PresetAvatarSelect from "PresetAvatarSelect.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c2, c3, dependencyMap;

let Fonts;
let ModalAnimation;
let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
function headerRight() {
  let intl;
  let obj = {
    text: intl.string(closure_1_0(closure_1_2[22]).t["5Wxrcd"]),
    onPress() {
      const obj = closure_1_0(closure_1_2[26]);
      return obj.showSkipAvatarModal();
    },
  };
  const HeaderActionButton = closure_1_0(closure_1_2[29]).HeaderActionButton;
  intl = closure_1_0(closure_1_2[22]).intl;
  return closure_1_9(HeaderActionButton, obj);
}
function headerLeft() {
  return null;
}
function render() {
  return closure_1_9(closure_1_12, {});
}
const View = react_native.View;
({ UPLOAD_MEDIUM_SIZE: metroImportAll, Fonts, ModalAnimation } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  headerContainer: { display: "flex", alignItems: "center" },
  buttonContainer: { marginHorizontal: 16, marginBottom: 16 },
  title: { marginBottom: 8, textAlign: "center" },
  subtitle: { textAlign: "center" },
  errorContainer: { alignSelf: "center", paddingTop: 24 },
  errorText: obj3,
};
obj2 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  justifyContent: "center",
  paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32,
  alignItems: "center",
};
createStyles = createStyles.createStyles;
obj3 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.RED_400, 12));
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_2;
      let headerContainer;
      let items1;
      let items2;
      let items3;
      let pendingChanges;
      let title;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp20;
      let tmp22;
      let tmp24;
      let tmp6;
      let tmpResult5;
      let obj = react2;
      const cResult = obj.c(54);
      const tmp4 = closure_11();
      [tmp6, require] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      const tmp7 = _slicedToArray(react.useState(), 2);
      const selectedAvatar = tmp7[0];
      dependencyMap = tmp9;
      const bottom = selectedAvatar(1618)().bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileSettingsStore];
        const fn = function u() {
          return pendingChanges.getPendingChanges().pendingAvatar;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp11 = items;
        tmp12 = fn;
      } else {
        [tmp11, tmp12] = cResult;
      }
      const tmpResult = get_initialized;
      let stateFromStores = tmpResult.useStateFromStores(tmp11, tmp12);
      if (cResult[2] !== selectedAvatar) {
        let pendingImage;
        if (null != selectedAvatar) {
          let obj2 = {
            imageUri: PresetAvatarSelect.DEFAULT_AVATARS[selectedAvatar],
            description: tmpResult5.generateAvatarDescription(),
          };
          let createPendingImage = ProfilePendingImageUtils.createPendingImage;
          ProfilePendingImageUtils;
          tmpResult5 = RecentAvatarUtils;
          pendingImage = createPendingImage(obj2);
        }
        cResult[2] = selectedAvatar;
        cResult[3] = pendingImage;
        tmp15 = pendingImage;
      } else {
        tmp15 = cResult[3];
      }
      if (tmp15 == null) {
        tmp15 = stateFromStores;
      }
      stateFromStores = tmp15;
      let imageUri;
      if (tmp15 != null) {
        imageUri = tmp15.imageUri;
      }
      if (cResult[4] !== imageUri) {
        const tmpResult6 = VideoBackground;
        const memoizedImageSourceResult = tmpResult6.memoizedImageSource(imageUri);
        cResult[4] = imageUri;
        cResult[5] = memoizedImageSourceResult;
        tmp20 = memoizedImageSourceResult;
      } else {
        tmp20 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        let closure_0 = stateFromStores(function* () {
          let obj2;
          let obj6;
          let v1;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let base64;
              let pendingImage;
              c3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let closure_1 = tmp4;
                  base64 = undefined;
                  pendingImage = undefined;
                  tmp(false);
                  const obj7 = { size };
                  v1 = 1;
                  c3 = 1;
                  const obj8 = { value: obj6.openImagePicker(obj7), done: false };
                  obj6 = tmp(closure_2_2[19]);
                  return obj8;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                base64 = value.base64;
                if (null != base64) {
                  if (null != base64.match(tmp(closure_2_2[19]).base64GIFRegex)) {
                    tmp(true);
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
                pendingImage = undefined;
                if (null != base64) {
                  const obj = { imageUri: base64, description: obj2.generateAvatarDescription() };
                  const createPendingImage = tmp(closure_2_2[15]).createPendingImage;
                  const tmp17 = tmp(closure_2_2[15]);
                  obj2 = tmp(closure_2_2[17]);
                  pendingImage = createPendingImage(obj);
                }
                const obj10 = { avatar: pendingImage };
                const obj3 = tmp(closure_2_2[20]);
                obj3.setPendingChanges(obj10);
                let str = "set";
                const announcePendingAvatarChange = tmp(closure_2_2[21]).announcePendingAvatarChange;
                const tmp29 = tmp(closure_2_2[21]);
                if (null == pendingImage) {
                  str = "remove";
                }
                const result = announcePendingAvatarChange(str);
                v1(undefined);
              }
            } catch (tmp43) {
              c3 = 3;
              throw tmp43;
            }
          }
        });
        function handleSelectAvatar() {
          return closure_0(...arguments);
        }
        cResult[6] = handleSelectAvatar;
        tmp22 = handleSelectAvatar;
      } else {
        tmp22 = cResult[6];
      }
      let num7 = 16;
      if (bottom > 0) {
        num7 = bottom;
      }
      if (cResult[7] !== num7) {
        let obj3 = { paddingBottom: num7 };
        cResult[7] = num7;
        cResult[8] = obj3;
        tmp24 = obj3;
      } else {
        tmp24 = cResult[8];
      }
      if (cResult[9] === tmp4.container) {
        let tmp25;
        let tmp26;
        let tmp28;
        let tmp31;
        let tmp33;
        if (cResult[10] === tmp24) {
          tmp25 = cResult[11];
        }
        const _Symbol = Symbol;
        ({ headerContainer, title } = tmp4);
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl5.intl;
          const stringResult = intl.string(intl5.t.XQRWvR);
          cResult[12] = stringResult;
          tmp26 = stringResult;
        } else {
          tmp26 = cResult[12];
        }
        if (cResult[13] !== tmp4.title) {
          let obj4 = {
            style: title,
            accessibilityRole: "header",
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: tmp26,
          };
          const tmp30 = closure_9(Text_Text.Text, obj4);
          cResult[13] = tmp4.title;
          cResult[14] = tmp30;
          tmp28 = tmp30;
        } else {
          tmp28 = cResult[14];
        }
        const _Symbol2 = Symbol;
        const subtitle = tmp4.subtitle;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl5.intl;
          const stringResult1 = intl2.string(intl5.t.fH9TLT);
          cResult[15] = stringResult1;
          tmp31 = stringResult1;
        } else {
          tmp31 = cResult[15];
        }
        if (cResult[16] !== tmp4.subtitle) {
          let obj5 = {
            style: subtitle,
            variant: "heading-deprecated-12/medium",
            color: "text-default",
            children: tmp31,
          };
          const tmp35 = closure_9(Text_Text.Text, obj5);
          cResult[16] = tmp4.subtitle;
          cResult[17] = tmp35;
          tmp33 = tmp35;
        } else {
          tmp33 = cResult[17];
        }
        if (cResult[18] === tmp28) {
          let tmp36;
          if (cResult[19] === tmp33) {
            tmp36 = cResult[20];
          }
          if (cResult[21] === tmp20) {
            let tmp41;
            let tmp44;
            if ((cResult[22] === null) != tmp15) {
              tmp41 = cResult[23];
            }
            if (cResult[24] !== tmp6) {
              let stringResult2 = tmp6;
              if (stringResult2) {
                const intl3 = intl5.intl;
                stringResult2 = intl3.string(intl5.t.XyLlVm);
              }
              cResult[24] = tmp6;
              cResult[25] = stringResult2;
              tmp44 = stringResult2;
            } else {
              tmp44 = cResult[25];
            }
            if (cResult[26] === tmp4.errorText) {
              let tmp46;
              if (cResult[27] === tmp44) {
                tmp46 = cResult[28];
              }
              if (cResult[29] === tmp4.errorContainer) {
                let tmp49;
                if (cResult[30] === tmp46) {
                  tmp49 = cResult[31];
                }
                if (cResult[32] === tmp4.headerContainer) {
                  if (cResult[33] === tmp36) {
                    if (cResult[34] === tmp41) {
                      let tmp53;
                      let tmp57;
                      let tmp60;
                      if (cResult[35] === tmp49) {
                        tmp53 = cResult[36];
                      }
                      if (cResult[37] !== selectedAvatar) {
                        let obj6 = { onAvatarSelect: tmp7[1], selectedAvatar };
                        const tmp59 = closure_9(selectedAvatar(17571), obj6);
                        cResult[37] = selectedAvatar;
                        cResult[38] = tmp59;
                        tmp57 = tmp59;
                      } else {
                        tmp57 = cResult[38];
                      }
                      const _Symbol3 = Symbol;
                      const buttonContainer = tmp4.buttonContainer;
                      if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = intl5.intl;
                        const stringResult3 = intl4.string(intl5.t.PDTjLN);
                        cResult[39] = stringResult3;
                        tmp60 = stringResult3;
                      } else {
                        tmp60 = cResult[39];
                      }
                      if (cResult[40] === selectedAvatar) {
                        let tmp62;
                        if (cResult[41] === tmp15) {
                          tmp62 = cResult[42];
                        }
                        if (cResult[43] === tmp62) {
                          let tmp64;
                          if ((cResult[44] === null) == tmp15) {
                            tmp64 = cResult[45];
                          }
                          if (cResult[46] === tmp4.buttonContainer) {
                            let tmp67;
                            if (cResult[47] === tmp64) {
                              tmp67 = cResult[48];
                            }
                            if (cResult[49] === tmp53) {
                              if (cResult[50] === tmp57) {
                                if (cResult[51] === tmp67) {
                                  let tmp71;
                                  if (cResult[52] === tmp25) {
                                    tmp71 = cResult[53];
                                  }
                                  return tmp71;
                                }
                              }
                            }
                            let obj7 = { style: tmp25, children: items1 };
                            items1 = [tmp53, tmp57, tmp67];
                            const tmp74 = closure_10(View, obj7);
                            cResult[49] = tmp53;
                            cResult[50] = tmp57;
                            cResult[51] = tmp67;
                            cResult[52] = tmp25;
                            cResult[53] = tmp74;
                            tmp71 = tmp74;
                          }
                          let obj8 = { style: buttonContainer, children: tmp64 };
                          const tmp70 = closure_9(View, obj8);
                          cResult[46] = tmp4.buttonContainer;
                          cResult[47] = tmp64;
                          cResult[48] = tmp70;
                          tmp67 = tmp70;
                        }
                        let obj9 = { text: tmp60, grow: true, onPress: tmp62, disabled: null == tmp15 };
                        const tmp66 = closure_9(components_Button_Button.Button, obj9);
                        cResult[43] = tmp62;
                        cResult[44] = null == tmp15;
                        cResult[45] = tmp66;
                        tmp64 = tmp66;
                      }
                      function ne() {
                        const obj = AddAvatarModalActionCreators;
                        return obj.handlePressNext(stateFromStores, first);
                      }
                      cResult[40] = selectedAvatar;
                      cResult[41] = tmp15;
                      cResult[42] = ne;
                      tmp62 = ne;
                    }
                  }
                }
                let obj10 = { style: headerContainer, children: items2 };
                items2 = [tmp36, tmp41, tmp49];
                const tmp56 = closure_10(View, obj10);
                cResult[32] = tmp4.headerContainer;
                cResult[33] = tmp36;
                cResult[34] = tmp41;
                cResult[35] = tmp49;
                cResult[36] = tmp56;
                tmp53 = tmp56;
              }
              const obj11 = { style: tmp4.errorContainer, children: tmp46 };
              const tmp52 = closure_9(View, obj11);
              cResult[29] = tmp4.errorContainer;
              cResult[30] = tmp46;
              cResult[31] = tmp52;
              tmp49 = tmp52;
            }
            const obj12 = { style: tmp4.errorText, children: tmp44 };
            const tmp48 = closure_9(native.LegacyText, obj12);
            cResult[26] = tmp4.errorText;
            cResult[27] = tmp44;
            cResult[28] = tmp48;
            tmp46 = tmp48;
          }
          const obj13 = { avatarSource: tmp20, showPendingAvatar: null != tmp15, onSelectAvatar: tmp22 };
          const tmp43 = closure_9(tmp10(17580), obj13);
          cResult[21] = tmp20;
          cResult[22] = null != tmp15;
          cResult[23] = tmp43;
          tmp41 = tmp43;
        }
        const obj14 = { children: items3 };
        items3 = [tmp28, tmp33];
        const tmp39 = closure_10(View, obj14);
        cResult[18] = tmp28;
        cResult[19] = tmp33;
        cResult[20] = tmp39;
        tmp36 = tmp39;
      }
      const items4 = [tmp4.container, tmp24];
      cResult[9] = tmp4.container;
      cResult[10] = tmp24;
      cResult[11] = items4;
      tmp25 = items4;
    }
  : () => {
      let Button;
      let LegacyText;
      let closure_2;
      let intl;
      let intl2;
      let intl4;
      let items2;
      let items3;
      let items4;
      let obj10;
      let obj12;
      let pendingChanges;
      let stringResult;
      let tmp3;
      let tmp9Result3;
      let obj = function _handleSelectAvatar2() {
        obj = _asyncToGenerator(async () => {
          let closure_0;
          let obj2;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let base64;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let closure_1 = tmp4;
                  base64 = undefined;
                  pendingImage = undefined;
                  require(false);
                  const obj7 = { size };
                  const obj6 = tmp(c2[19]);
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: obj6.openImagePicker(obj7), done: false };
                  return obj8;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                base64 = value.base64;
                if (null != base64) {
                  if (null != base64.match(tmp(c2[19]).base64GIFRegex)) {
                    closure_129_0(true);
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
                pendingImage = undefined;
                if (null != base64) {
                  obj = { imageUri: base64, description: obj2.generateAvatarDescription() };
                  const createPendingImage = tmp(c2[15]).createPendingImage;
                  const tmp17 = tmp(c2[15]);
                  obj2 = tmp(c2[17]);
                  pendingImage = createPendingImage(obj);
                }
                const obj10 = { avatar: pendingImage };
                const obj3 = tmp(c2[20]);
                obj3.setPendingChanges(obj10);
                let str = "set";
                const announcePendingAvatarChange = tmp(c2[21]).announcePendingAvatarChange;
                const tmp29 = tmp(c2[21]);
                if (null == pendingImage) {
                  str = "remove";
                }
                const result = announcePendingAvatarChange(str);
                closure_129_2(undefined);
              }
            } catch (tmp43) {
              c3 = 3;
              throw tmp43;
            }
          }
        });
        return obj(...arguments);
      };
      const tmp = closure_11();
      [tmp3, require] = obj(react.useState(false), 2);
      obj(react.useState(false), 2);
      const tmp4 = obj(react.useState(), 2);
      const selectedAvatar = tmp4[0];
      dependencyMap = tmp6;
      const bottom = selectedAvatar(1618)().bottom;
      obj = get_initialized;
      const items = [UserProfileSettingsStore];
      let pendingImage;
      const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
      if (null != selectedAvatar) {
        let obj2 = {
          imageUri: PresetAvatarSelect.DEFAULT_AVATARS[selectedAvatar],
          description: tmp9Result3.generateAvatarDescription(),
        };
        let createPendingImage = ProfilePendingImageUtils.createPendingImage;
        ProfilePendingImageUtils;
        tmp9Result3 = RecentAvatarUtils;
        pendingImage = createPendingImage(obj2);
      }
      if (pendingImage == null) {
        pendingImage = stateFromStores;
      }
      let imageUri;
      const memoizedImageSource = VideoBackground.memoizedImageSource;
      VideoBackground;
      if (pendingImage != null) {
        imageUri = pendingImage.imageUri;
      }
      const items1 = [tmp.container];
      let num = 16;
      const memoizedImageSourceResult = memoizedImageSource(imageUri);
      if (bottom > 0) {
        num = bottom;
      }
      let obj3 = { style: items1, children: items4 };
      items1[1] = { paddingBottom: num };
      let obj4 = { style: tmp.headerContainer, children: items3 };
      let obj5 = { children: items2 };
      let obj6 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl5.t.XQRWvR),
      };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      items2 = [closure_9(Text, obj6)];
      let obj7 = {
        style: tmp.subtitle,
        variant: "heading-deprecated-12/medium",
        color: "text-default",
        children: intl2.string(intl5.t.fH9TLT),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl5.intl;
      items2[1] = closure_9(Text2, obj7);
      items3 = [closure_10(View, obj5), ,];
      let obj8 = {
        avatarSource: memoizedImageSourceResult,
        showPendingAvatar: null != pendingImage,
        onSelectAvatar: function handleSelectAvatar() {
          return obj(...arguments);
        },
      };
      items3[1] = closure_9(selectedAvatar(17580), obj8);
      let obj9 = { style: tmp.errorContainer, children: closure_9(LegacyText, obj10) };
      obj10 = { style: tmp.errorText, children: stringResult };
      LegacyText = native.LegacyText;
      if (stringResult) {
        const intl3 = intl5.intl;
        stringResult = intl3.string(intl5.t.XyLlVm);
      }
      items3[2] = closure_9(View, obj9);
      items4 = [closure_10(View, obj4), closure_9(tmp7(17571), { onAvatarSelect: tmp6, selectedAvatar })];
      const obj11 = { style: tmp.buttonContainer, children: closure_9(Button, obj12) };
      obj12 = {
        text: intl4.string(intl5.t.PDTjLN),
        grow: true,
        onPress() {
          obj = AddAvatarModalActionCreators;
          return obj.handlePressNext(pendingImage, first);
        },
        disabled: null == pendingImage,
      };
      Button = components_Button_Button.Button;
      intl4 = intl5.intl;
      items4[2] = closure_9(View, obj11);
      return closure_10(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddAvatarModal() {
      let first;
      let obj3;
      let tmp5;
      let tmpResult;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { ADD_AVATAR: obj3 };
        obj3 = {
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.AVATAR_UPLOAD,
          headerRight,
          headerLeft,
          headerTitle: tmpResult.getHeaderNoTitle(),
          ignoreKeyboard: true,
          fullscreen: true,
          render,
        };
        cResult[0] = obj2;
        first = obj2;
        tmpResult = NavigatorHeader;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { screens: first, initialRouteName: "ADD_AVATAR" };
        const tmp7 = React4(Navigator.Navigator, obj4);
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function AddAvatarModal() {
      const screens = react.useMemo(() => {
        let obj2;
        let obj3;
        let obj = { ADD_AVATAR: obj2 };
        obj2 = {
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.AVATAR_UPLOAD,
          headerRight,
          headerLeft,
          headerTitle: obj3.getHeaderNoTitle(),
          ignoreKeyboard: true,
          fullscreen: true,
          render,
        };
        obj3 = NavigatorHeader;
        return obj;
      }, []);
      return React4(Navigator.Navigator, { screens, initialRouteName: "ADD_AVATAR" });
    };
tmp7.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/avatar/native/components/AddAvatarModal.tsx");

export default tmp7;
