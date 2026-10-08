// discord_app/modules/user_profile/native/UserProfileEditBannerButton.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import useUserProfileBannerHeightDefault from "../hooks/native/useUserProfileBannerHeight.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const UserProfileBannerDefault = tmp5(8348);
const EditButtonDefault = tmp5(14672);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { position: "relative" },
  editButton: null,
  previewButton: null,
  refreshEditButtonContainer: null,
};
let size = {
  position: "absolute",
  top: 12,
  right: 12,
  width: 28,
  height: 28,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.round,
};
obj2.editButton = size;
const rect = {
  position: "absolute",
  justifyContent: "center",
  minHeight: 28,
  top: 12,
  right: 48,
  paddingVertical: 4,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  zIndex: 1,
};
obj2.previewButton = rect;
obj2.refreshEditButtonContainer = { position: "absolute", top: 12, right: 12 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfilePreviewButton(userId) {
      const cResult = userId(context[6]).c(9);
      userId = userId.userId;
      let tmp4 = closure_7();
      analyticsLocations = analyticsLocations(context[7])().analyticsLocations;
      let obj = userId(context[6]);
      context = userId(context[8]).useUserProfileAnalyticsContext().context;
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === context) {
          if (cResult[2] === userId) {
            let tmp5 = cResult[3];
          }
          if (null == userId) {
            return null;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[10]).intl;
              const stringResult = intl.string(tmp(tmp2[10]).t["3Qcx6K"]);
              cResult[4] = stringResult;
              let tmp7 = stringResult;
            } else {
              tmp7 = cResult[4];
            }
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
              const intl2 = tmp(tmp2[10]).intl;
              obj3.children = intl2.string(tmp(tmp2[10]).t["3Qcx6K"]);
              const tmp11 = closure_5(tmp(tmp2[11]).Text, obj3);
              cResult[5] = tmp11;
              let tmp9 = tmp11;
            } else {
              tmp9 = cResult[5];
            }
            if (cResult[6] === tmp5) {
              if (cResult[7] === tmp4.previewButton) {
                let tmp12 = cResult[8];
              }
              return tmp12;
            }
            const obj4 = {
              style: tmp4.previewButton,
              onPress: tmp5,
              accessibilityRole: "button",
              accessibilityLabel: tmp7,
              children: tmp9,
            };
            const tmp14 = closure_5(tmp(tmp2[12]).PressableOpacity, obj4);
            cResult[6] = tmp5;
            cResult[7] = tmp4.previewButton;
            cResult[8] = tmp14;
            tmp12 = tmp14;
          }
        }
      }
      const fn = function n() {
        if (null != userId) {
          const obj = {};
          const merged = Object.assign(context);
          obj.userId = tmp;
          obj.isPreviewingChanges = true;
          obj.sourceAnalyticsLocations = analyticsLocations;
          showUserProfileActionSheetDefault(obj);
        }
      };
      cResult[0] = analyticsLocations;
      cResult[1] = context;
      cResult[2] = userId;
      cResult[3] = fn;
      tmp5 = fn;
      const obj2 = userId(context[8]);
    }
  : function ProfilePreviewButton(userId) {
      userId = userId.userId;
      let analyticsLocations;
      let context;
      analyticsLocations = analyticsLocations(context[7])().analyticsLocations;
      const tmp = closure_7();
      context = userId(context[8]).useUserProfileAnalyticsContext().context;
      const items = [userId, context, analyticsLocations];
      let tmp5 = null;
      if (null != userId) {
        const obj2 = {
          style: tmp.previewButton,
          onPress: tmp4,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = tmp3(tmp2[10]).intl;
        obj2.accessibilityLabel = intl.string(tmp3(tmp2[10]).t["3Qcx6K"]);
        const obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
        const intl2 = tmp3(tmp2[10]).intl;
        obj3.children = intl2.string(tmp3(tmp2[10]).t["3Qcx6K"]);
        obj2.children = closure_5(tmp3(tmp2[11]).Text, obj3);
        tmp5 = closure_5(tmp3(tmp2[12]).PressableOpacity, obj2);
      }
      return tmp5;
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditButton(arg0) {
      const cResult = c.c(6);
      ({ onPress, accessibilityLabel, disabled } = arg0);
      const tmp5 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
        const tmp9 = hasOwnProperty(PencilIcon.PencilIcon, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === accessibilityLabel) {
        if (cResult[2] === tmp4) {
          if (cResult[3] === onPress) {
            if (cResult[4] === tmp5.editButton) {
              let tmp10 = cResult[5];
            }
            return tmp10;
          }
        }
      }
      const tmp11 = hasOwnProperty(Pressables.PressableOpacity, {
        accessibilityRole: "button",
        accessibilityLabel,
        onPress,
        disabled: undefined !== disabled && disabled,
        style: tmp5.editButton,
        children: first,
      });
      cResult[1] = accessibilityLabel;
      cResult[2] = undefined !== disabled && disabled;
      cResult[3] = onPress;
      cResult[4] = tmp5.editButton;
      cResult[5] = tmp11;
      tmp10 = tmp11;
      const obj3 = {
        accessibilityRole: "button",
        accessibilityLabel,
        onPress,
        disabled: undefined !== disabled && disabled,
        style: tmp5.editButton,
        children: first,
      };
    }
  : function EditButton(disabled) {
      let flag = disabled.disabled;
      ({ onPress, accessibilityLabel } = disabled);
      if (flag === undefined) {
        flag = false;
      }
      const obj = {
        accessibilityRole: "button",
        accessibilityLabel,
        onPress,
        disabled: flag,
        style: closure_7().editButton,
        children: null,
      };
      const tmp = closure_7();
      obj.children = hasOwnProperty(PencilIcon.PencilIcon, { size: "xs", color: nativeDefault.colors.WHITE });
      return hasOwnProperty(Pressables.PressableOpacity, obj);
    };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileEditBannerButton(arg0) {
      let obj = dependencyMap;
      const cResult = c.c(24);
      ({
        user,
        displayProfile,
        pendingBanner,
        pendingAvatarSrc,
        pendingThemeColors,
        pendingAccentColor,
        bannerSafeArea,
        showProfilePreviewButton,
        showEditButton,
        onPressEdit,
        editButtonAccessibilityLabel,
        editDisabled,
        isUserProfileEditingRefresh,
      } = arg0);
      const tmp4 = closure_7();
      let tmp5 = importDefault;
      const tmp6 = useUserProfileBannerHeightDefault();
      if (cResult[0] === tmp6) {
        if (cResult[1] === bannerSafeArea) {
          if (cResult[2] === displayProfile) {
            if (cResult[3] === pendingAccentColor) {
              if (cResult[4] === pendingAvatarSrc) {
                if (cResult[5] === pendingBanner) {
                  if (cResult[6] === pendingThemeColors) {
                    if (cResult[7] === user) {
                      let tmp7 = cResult[8];
                    }
                    if (cResult[9] === showProfilePreviewButton) {
                      if (cResult[10] === user) {
                        let tmp9 = cResult[11];
                      }
                      if (cResult[12] === editButtonAccessibilityLabel) {
                        if (cResult[13] === tmp3) {
                          if (cResult[14] === isUserProfileEditingRefresh) {
                            if (cResult[15] === onPressEdit) {
                              if (cResult[16] === tmp2) {
                                if (cResult[17] === tmp4.refreshEditButtonContainer) {
                                  let tmp13 = cResult[18];
                                }
                                if (cResult[19] === tmp4.container) {
                                  if (cResult[20] === tmp7) {
                                    if (cResult[21] === tmp9) {
                                      if (cResult[22] === tmp13) {
                                        let tmp19 = cResult[23];
                                      }
                                      return tmp19;
                                    }
                                  }
                                }
                                const obj3 = { style: tmp4.container, children: null };
                                const items = [tmp7, tmp9, tmp13];
                                obj3.children = items;
                                const tmp22 = timestampProducer(View, obj3);
                                cResult[19] = tmp4.container;
                                cResult[20] = tmp7;
                                cResult[21] = tmp9;
                                cResult[22] = tmp13;
                                cResult[23] = tmp22;
                                tmp19 = tmp22;
                              }
                            }
                          }
                        }
                      }
                      if (!tmp2) {
                        cResult[12] = editButtonAccessibilityLabel;
                        cResult[13] = tmp3;
                        cResult[14] = isUserProfileEditingRefresh;
                        cResult[15] = onPressEdit;
                        cResult[16] = tmp2;
                        cResult[17] = tmp4.refreshEditButtonContainer;
                        cResult[18] = tmp2;
                        tmp13 = tmp2;
                      } else if (isUserProfileEditingRefresh) {
                        tmp5 = EditButtonDefault;
                        obj = {
                          style: tmp4.refreshEditButtonContainer,
                          onPress: onPressEdit,
                          accessibilityLabel: editButtonAccessibilityLabel,
                          disabled: tmp3,
                          variant: "secondary-overlay",
                        };
                        let tmp15Result = hasOwnProperty(tmp5, obj);
                      } else {
                        const obj4 = {
                          onPress: onPressEdit,
                          accessibilityLabel: editButtonAccessibilityLabel,
                          disabled: tmp3,
                        };
                        tmp15Result = hasOwnProperty(closure_9, obj4);
                      }
                    }
                    let tmp10 = showProfilePreviewButton;
                    if (showProfilePreviewButton) {
                      const obj5 = { userId: user.id };
                      tmp10 = hasOwnProperty(closure_8, obj5);
                    }
                    cResult[9] = showProfilePreviewButton;
                    cResult[10] = user;
                    cResult[11] = tmp10;
                    tmp9 = tmp10;
                  }
                }
              }
            }
          }
        }
      }
      const tmp8 = hasOwnProperty(UserProfileBannerDefault, {
        user,
        displayProfile,
        pendingBanner,
        pendingAvatarSrc,
        pendingThemeColors,
        pendingAccentColor,
        bannerHeight: tmp6,
        bannerSafeArea,
      });
      cResult[0] = tmp6;
      cResult[1] = bannerSafeArea;
      cResult[2] = displayProfile;
      cResult[3] = pendingAccentColor;
      cResult[4] = pendingAvatarSrc;
      cResult[5] = pendingBanner;
      cResult[6] = pendingThemeColors;
      cResult[7] = user;
      cResult[8] = tmp8;
      tmp7 = tmp8;
    }
  : function UserProfileEditBannerButton(isUserProfileEditingRefresh) {
      ({ user, showProfilePreviewButton, showEditButton } = isUserProfileEditingRefresh);
      ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } =
        isUserProfileEditingRefresh);
      if (showEditButton === undefined) {
        showEditButton = true;
      }
      ({ onPressEdit, editButtonAccessibilityLabel, editDisabled } = isUserProfileEditingRefresh);
      if (editDisabled === undefined) {
        editDisabled = false;
      }
      let refreshEditButtonContainer = closure_7();
      let tmp = importDefault;
      let obj = dependencyMap;
      const obj2 = { style: refreshEditButtonContainer.container, children: null };
      const items = [
        hasOwnProperty(UserProfileBannerDefault, {
          user,
          displayProfile,
          pendingBanner,
          pendingAvatarSrc,
          pendingThemeColors,
          pendingAccentColor,
          bannerHeight: useUserProfileBannerHeightDefault(),
          bannerSafeArea,
        }),
        ,
      ];
      if (showProfilePreviewButton) {
        const obj3 = { userId: user.id };
        showProfilePreviewButton = hasOwnProperty(closure_8, obj3);
      }
      items[1] = showProfilePreviewButton;
      if (!showEditButton) {
        items[2] = showEditButton;
        obj2.children = items;
        return timestampProducer(View, obj2);
      } else if (isUserProfileEditingRefresh.isUserProfileEditingRefresh) {
        tmp = EditButtonDefault;
        obj = { style: null, onPress: null, accessibilityLabel: null, disabled: null, variant: "secondary-overlay" };
        refreshEditButtonContainer = refreshEditButtonContainer.refreshEditButtonContainer;
        obj.style = refreshEditButtonContainer;
        obj.onPress = onPressEdit;
        obj.accessibilityLabel = editButtonAccessibilityLabel;
        obj.disabled = editDisabled;
        let tmp5Result = hasOwnProperty(tmp, obj);
      } else {
        const obj4 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
        tmp5Result = hasOwnProperty(closure_9, obj4);
      }
      const tmp2 = useUserProfileBannerHeightDefault();
    };
