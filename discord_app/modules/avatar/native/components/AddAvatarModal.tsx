// discord_app/modules/avatar/native/components/AddAvatarModal.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import RecentAvatarUtils from "../../../recent_avatars/RecentAvatarUtils.tsx";
import VideoBackground from "../../../calls/native/VideoBackground.tsx";
import ProfilePendingImageUtils from "../../../profile_customization/ProfilePendingImageUtils.tsx";
import AddAvatarModalActionCreators from "../AddAvatarModalActionCreators.tsx";
import PresetAvatarSelect from "PresetAvatarSelect.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ UPLOAD_MEDIUM_SIZE: closure_8, Fonts, ModalAnimation } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    justifyContent: "center",
    paddingTop: fn(6261).NAV_BAR_HEIGHT + 32,
    alignItems: "center",
  },
  headerContainer: { display: "flex", alignItems: "center" },
  buttonContainer: { marginHorizontal: 16, marginBottom: 16 },
  title: { marginBottom: 8, textAlign: "center" },
  subtitle: { textAlign: "center" },
  errorContainer: { alignSelf: "center", paddingTop: 24 },
  errorText: null,
};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.RED_400, 12));
obj2.errorText = {};
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddAvatarScreen() {
      const cResult = require("c").c(54);
      const tmp4 = closure_11();
      let obj = require("c");
      [tmp6, closure_0] = noop.useState(false);
      [selectedAvatar] = noop.useState();
      dependencyMap = tmp9;
      const bottom = selectedAvatar(1630)().bottom;
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
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      let stateFromStores = require("initialize").useStateFromStores(tmp11, tmp12);
      if (cResult[2] !== selectedAvatar) {
        let pendingImage;
        if (null != selectedAvatar) {
          let obj2 = { imageUri: tmp(17899).DEFAULT_AVATARS[selectedAvatar], description: null };
          const tmpResult4 = tmp(14660);
          obj2.description = tmp(8269).generateAvatarDescription();
          pendingImage = tmpResult4.createPendingImage(obj2);
          const tmpResult5 = tmp(8269);
        }
        cResult[2] = selectedAvatar;
        cResult[3] = pendingImage;
        let tmp15 = pendingImage;
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
        const memoizedImageSourceResult = tmp(8350).memoizedImageSource(imageUri);
        cResult[4] = imageUri;
        cResult[5] = memoizedImageSourceResult;
        let tmp19 = memoizedImageSourceResult;
        const tmpResult6 = tmp(8350);
      } else {
        tmp19 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        _require = stateFromStores(function* () {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === dependencyMap) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_1 = tmp5;
                  let base64;
                  closure_128_1 = undefined;
                  tmp2(false);
                  const obj7 = { size };
                  dependencyMap = 1;
                  c3 = 1;
                  const obj9 = { value: tmp2(7741).openImagePicker(obj7), done: false };
                  return obj9;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                base64 = value.base64;
                if (null == base64) {
                  let pendingImage;
                  if (null != base64) {
                    const obj11 = { imageUri: base64, description: null };
                    const obj = tmp2(14660);
                    obj11.description = tmp2(8269).generateAvatarDescription();
                    pendingImage = obj.createPendingImage(obj11);
                    const obj3 = tmp2(8269);
                  }
                  closure_128_1 = pendingImage;
                  const obj12 = { avatar: closure_128_1 };
                  tmp2(8264).setPendingChanges(obj12);
                  const obj4 = tmp2(8264);
                  let str = "set";
                  if (null == closure_128_1) {
                    str = "remove";
                  }
                  const result = tmp2(8266).announcePendingAvatarChange(str);
                  dependencyMap(undefined);
                  c3 = 3;
                  const obj6 = tmp2(8266);
                }
                tmp2(true);
              }
            } catch (tmp42) {
              c3 = tmp;
              throw tmp42;
            }
          }
        });
        function handleSelectAvatar() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[6] = handleSelectAvatar;
        let tmp21 = handleSelectAvatar;
      } else {
        tmp21 = cResult[6];
      }
      let num7 = 16;
      if (bottom > 0) {
        num7 = bottom;
      }
      if (cResult[7] !== num7) {
        let obj3 = { paddingBottom: num7 };
        cResult[7] = num7;
        cResult[8] = obj3;
        let tmp23 = obj3;
      } else {
        tmp23 = cResult[8];
      }
      if (cResult[9] === tmp4.container) {
        if (cResult[10] === tmp23) {
          let tmp24 = cResult[11];
        }
        const _Symbol = Symbol;
        ({ headerContainer, title } = tmp4);
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.XQRWvR);
          cResult[12] = stringResult;
          let tmp25 = stringResult;
        } else {
          tmp25 = cResult[12];
        }
        if (cResult[13] !== tmp4.title) {
          let obj4 = {
            style: title,
            accessibilityRole: "header",
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: tmp25,
          };
          const tmp29 = closure_9(tmp(5086).Text, obj4);
          cResult[13] = tmp4.title;
          cResult[14] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[14];
        }
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.fH9TLT);
          cResult[15] = stringResult1;
          let tmp30 = stringResult1;
        } else {
          tmp30 = cResult[15];
        }
        if (cResult[16] !== tmp4.subtitle) {
          let obj5 = {
            style: tmp4.subtitle,
            variant: "heading-deprecated-12/medium",
            color: "text-default",
            children: tmp30,
          };
          const tmp34 = closure_9(tmp(5086).Text, obj5);
          cResult[16] = tmp4.subtitle;
          cResult[17] = tmp34;
          let tmp32 = tmp34;
        } else {
          tmp32 = cResult[17];
        }
        if (cResult[18] === tmp27) {
          if (cResult[19] === tmp32) {
            let tmp35 = cResult[20];
          }
          if (cResult[21] === tmp19) {
            if (cResult[22] === tmp39) {
              let tmp40 = cResult[23];
            }
            if (cResult[24] !== tmp6) {
              let stringResult2 = tmp6;
              if (tmp6) {
                const intl3 = tmp(1126).intl;
                stringResult2 = intl3.string(tmp(1126).t.XyLlVm);
              }
              cResult[24] = tmp6;
              cResult[25] = stringResult2;
              let tmp43 = stringResult2;
            } else {
              tmp43 = cResult[25];
            }
            if (cResult[26] === tmp4.errorText) {
              if (cResult[27] === tmp43) {
                let tmp45 = cResult[28];
              }
              if (cResult[29] === tmp4.errorContainer) {
                if (cResult[30] === tmp45) {
                  let tmp48 = cResult[31];
                }
                if (cResult[32] === tmp4.headerContainer) {
                  if (cResult[33] === tmp35) {
                    if (cResult[34] === tmp40) {
                      if (cResult[35] === tmp48) {
                        let tmp52 = cResult[36];
                      }
                      if (cResult[37] !== selectedAvatar) {
                        let obj6 = { onAvatarSelect: tmp9, selectedAvatar };
                        const tmp58 = closure_9(tmp10(17899), obj6);
                        cResult[37] = selectedAvatar;
                        cResult[38] = tmp58;
                        let tmp56 = tmp58;
                      } else {
                        tmp56 = cResult[38];
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = tmp(1126).intl;
                        const stringResult3 = intl4.string(tmp(1126).t.PDTjLN);
                        cResult[39] = stringResult3;
                        let tmp59 = stringResult3;
                      } else {
                        tmp59 = cResult[39];
                      }
                      if (cResult[40] === selectedAvatar) {
                        if (cResult[41] === tmp15) {
                          let tmp61 = cResult[42];
                        }
                        if (cResult[43] === tmp61) {
                          if (cResult[44] === tmp62) {
                            let tmp63 = cResult[45];
                          }
                          if (cResult[46] === tmp4.buttonContainer) {
                            if (cResult[47] === tmp63) {
                              let tmp66 = cResult[48];
                            }
                            if (cResult[49] === tmp52) {
                              if (cResult[50] === tmp56) {
                                if (cResult[51] === tmp66) {
                                  if (cResult[52] === tmp24) {
                                    let tmp70 = cResult[53];
                                  }
                                  return tmp70;
                                }
                              }
                            }
                            let obj7 = { style: tmp24, children: null };
                            const items1 = [tmp52, tmp56, tmp66];
                            obj7.children = items1;
                            const tmp73 = closure_10(View, obj7);
                            cResult[49] = tmp52;
                            cResult[50] = tmp56;
                            cResult[51] = tmp66;
                            cResult[52] = tmp24;
                            cResult[53] = tmp73;
                            tmp70 = tmp73;
                          }
                          const obj8 = { style: tmp4.buttonContainer, children: tmp63 };
                          const tmp69 = closure_9(View, obj8);
                          cResult[46] = tmp4.buttonContainer;
                          cResult[47] = tmp63;
                          cResult[48] = tmp69;
                          tmp66 = tmp69;
                        }
                        let obj9 = { text: tmp59, grow: true, onPress: tmp61, disabled: null == tmp15 };
                        const tmp65 = closure_9(tmp(5375).Button, obj9);
                        cResult[43] = tmp61;
                        cResult[44] = null == tmp15;
                        cResult[45] = tmp65;
                        tmp63 = tmp65;
                      }
                      function ne() {
                        return AddAvatarModalActionCreators.handlePressNext(stateFromStores, first);
                      }
                      cResult[40] = selectedAvatar;
                      cResult[41] = tmp15;
                      cResult[42] = ne;
                      tmp61 = ne;
                    }
                  }
                }
                let obj10 = { style: headerContainer, children: null };
                const items2 = [tmp35, tmp40, tmp48];
                obj10.children = items2;
                const tmp55 = closure_10(View, obj10);
                cResult[32] = tmp4.headerContainer;
                cResult[33] = tmp35;
                cResult[34] = tmp40;
                cResult[35] = tmp48;
                cResult[36] = tmp55;
                tmp52 = tmp55;
              }
              let obj11 = { style: tmp4.errorContainer, children: tmp45 };
              const tmp51 = closure_9(View, obj11);
              cResult[29] = tmp4.errorContainer;
              cResult[30] = tmp45;
              cResult[31] = tmp51;
              tmp48 = tmp51;
            }
            let obj12 = { style: tmp4.errorText, children: tmp43 };
            const tmp47 = closure_9(tmp(1200).LegacyText, obj12);
            cResult[26] = tmp4.errorText;
            cResult[27] = tmp43;
            cResult[28] = tmp47;
            tmp45 = tmp47;
          }
          const obj13 = { avatarSource: tmp19, showPendingAvatar: null != tmp15, onSelectAvatar: tmp21 };
          const tmp42 = closure_9(tmp10(17908), obj13);
          cResult[21] = tmp19;
          cResult[22] = null != tmp15;
          cResult[23] = tmp42;
          tmp40 = tmp42;
        }
        const obj14 = { children: null };
        const items3 = [tmp27, tmp32];
        obj14.children = items3;
        const tmp38 = closure_10(View, obj14);
        cResult[18] = tmp27;
        cResult[19] = tmp32;
        cResult[20] = tmp38;
        tmp35 = tmp38;
      }
      const items4 = [tmp4.container, tmp23];
      cResult[9] = tmp4.container;
      cResult[10] = tmp23;
      cResult[11] = items4;
      tmp24 = items4;
      const tmpResult = require("initialize");
    }
  : function AddAvatarScreen() {
      _slicedToArray = async function _handleSelectAvatar2(noop) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (noop === 1) {
            throw value;
          } else if (noop === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === dependencyMap) {
              if (noop === 1) {
                c3 = 3;
                throw value;
              } else if (noop === 2) {
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_1 = tmp5;
                let base64;
                closure_128_1 = undefined;
                _require(false);
                const obj7 = { size };
                dependencyMap = 1;
                c3 = 1;
                const obj9 = { value: tmp2(7741).openImagePicker(obj7), done: false };
                return obj9;
              }
            } else if (noop === 1) {
              c3 = 3;
              throw value;
            } else if (noop === 2) {
              c3 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              base64 = value.base64;
              if (null == base64) {
                pendingImage = undefined;
                if (null != base64) {
                  const obj11 = { imageUri: base64, description: null };
                  const obj = tmp2(14660);
                  obj11.description = tmp2(8269).generateAvatarDescription();
                  pendingImage = obj.createPendingImage(obj11);
                  const obj3 = tmp2(8269);
                }
                closure_128_1 = pendingImage;
                const obj12 = { avatar: closure_128_1 };
                tmp2(8264).setPendingChanges(obj12);
                const obj4 = tmp2(8264);
                let str = "set";
                if (null == closure_128_1) {
                  str = "remove";
                }
                const result = tmp2(8266).announcePendingAvatarChange(str);
                closure_129_2(undefined);
                c3 = 3;
                const obj6 = tmp2(8266);
              }
              closure_129_0(true);
            }
          } catch (tmp42) {
            c3 = tmp;
            throw tmp42;
          }
        }
      };
      const tmp = closure_11();
      [tmp3, require] = noop.useState(false);
      const tmp4 = _slicedToArray(noop.useState(), 2);
      const selectedAvatar = tmp4[0];
      dependencyMap = tmp6;
      const bottom = selectedAvatar(1630)().bottom;
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      const items = [UserProfileSettingsStore];
      let pendingImage;
      const stateFromStores = initialize.useStateFromStores(
        items,
        () => pendingChanges.getPendingChanges().pendingAvatar,
      );
      if (null != selectedAvatar) {
        let obj2 = { imageUri: PresetAvatarSelect.DEFAULT_AVATARS[selectedAvatar], description: null };
        const tmp9Result = ProfilePendingImageUtils;
        obj2.description = RecentAvatarUtils.generateAvatarDescription();
        pendingImage = tmp9Result.createPendingImage(obj2);
        const tmp9Result3 = RecentAvatarUtils;
      }
      if (pendingImage == null) {
        pendingImage = stateFromStores;
      }
      let imageUri;
      if (pendingImage != null) {
        imageUri = pendingImage.imageUri;
      }
      const items1 = [tmp.container];
      let num = 16;
      const tmp9Result4 = VideoBackground;
      if (bottom > 0) {
        num = bottom;
      }
      let obj3 = { style: items1, children: null };
      items1[1] = { paddingBottom: num };
      let obj4 = { style: tmp.headerContainer, children: null };
      let obj5 = { children: null };
      let obj6 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj6.children = intl.string(util.t.XQRWvR);
      const items2 = [closure_9(Text_Text.Text, obj6)];
      let obj7 = {
        style: tmp.subtitle,
        variant: "heading-deprecated-12/medium",
        color: "text-default",
        children: null,
      };
      const intl2 = util.intl;
      obj7.children = intl2.string(util.t.fH9TLT);
      items2[1] = closure_9(Text_Text.Text, obj7);
      obj5.children = items2;
      const items3 = [closure_10(View, obj5), ,];
      const memoizedImageSourceResult = VideoBackground.memoizedImageSource(imageUri);
      items3[1] = closure_9(selectedAvatar(17908), {
        avatarSource: VideoBackground.memoizedImageSource(imageUri),
        showPendingAvatar: null != pendingImage,
        onSelectAvatar: function handleSelectAvatar() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      });
      let obj9 = { style: tmp.errorContainer, children: null };
      let obj10 = { style: tmp.errorText, children: null };
      if (stringResult) {
        const intl3 = util.intl;
        stringResult = intl3.string(util.t.XyLlVm);
      }
      obj10.children = stringResult;
      obj9.children = closure_9(native.LegacyText, obj10);
      items3[2] = closure_9(View, obj9);
      obj4.children = items3;
      const items4 = [
        closure_10(View, obj4),
        closure_9(selectedAvatar(17899), { onAvatarSelect: tmp4[1], selectedAvatar }),
      ];
      let obj11 = { style: tmp.buttonContainer, children: null };
      let obj12 = { text: null, grow: true, onPress: null, disabled: null };
      const intl4 = util.intl;
      obj12.text = intl4.string(util.t.PDTjLN);
      obj12.onPress = function onPress() {
        return AddAvatarModalActionCreators.handlePressNext(pendingImage, first);
      };
      obj12.disabled = null == pendingImage;
      obj11.children = closure_9(components_Button_Button.Button, obj12);
      items4[2] = closure_9(View, obj11);
      obj3.children = items4;
      return closure_10(View, obj3);
    };
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddAvatarModal() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { ADD_AVATAR: null };
        const obj3 = {
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.AVATAR_UPLOAD,
          headerRight() {
            const obj = { text: null, onPress: null };
            const intl = closure_1_0(1126).intl;
            obj.text = intl.string(closure_1_0(1126).t["5Wxrcd"]);
            obj.onPress = function onPress() {
              return closure_1_0(dependencyMap[26]).showSkipAvatarModal();
            };
            return closure_1_9(closure_1_0(7079).HeaderActionButton, obj);
          },
          headerLeft() {
            return null;
          },
          headerTitle: NavigatorHeader.getHeaderNoTitle(),
          ignoreKeyboard: true,
          fullscreen: true,
          render() {
            return closure_1_9(closure_1_12, {});
          },
        };
        obj2.ADD_AVATAR = obj3;
        cResult[0] = obj2;
        let first = obj2;
        const tmpResult = NavigatorHeader;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { screens: first, initialRouteName: "ADD_AVATAR" };
        const tmp7 = options(Navigator.Navigator, obj4);
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function AddAvatarModal() {
      const screens = noop.useMemo(() => {
        let obj = { ADD_AVATAR: null };
        const obj2 = {
          impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.AVATAR_UPLOAD,
          headerRight() {
            const obj = { text: null, onPress: null };
            const intl = closure_1_0(1126).intl;
            obj.text = intl.string(closure_1_0(1126).t["5Wxrcd"]);
            obj.onPress = function onPress() {
              return closure_1_0(dependencyMap[26]).showSkipAvatarModal();
            };
            return closure_1_9(closure_1_0(7079).HeaderActionButton, obj);
          },
          headerLeft() {
            return null;
          },
          headerTitle: require("NavigatorHeader").getHeaderNoTitle(),
          ignoreKeyboard: true,
          fullscreen: true,
          render() {
            return closure_1_9(closure_1_12, {});
          },
        };
        obj.ADD_AVATAR = obj2;
        return obj;
      }, []);
      return options(Navigator.Navigator, { screens, initialRouteName: "ADD_AVATAR" });
    };
tmp6.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/avatar/native/components/AddAvatarModal.tsx");

export default tmp6;
