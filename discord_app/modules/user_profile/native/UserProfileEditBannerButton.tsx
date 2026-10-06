// === Module 14432: UserProfileEditBannerButton ===

// Module 14432 (UserProfileEditBannerButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Pressables from "Pressables" /* 5916 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 7913 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 7929 */;
import PencilIcon2 from "PencilIcon" /* 10071 */;
import EditButtonDefault from "EditButton" /* 14433 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let userId;

let hasOwnProperty;
let metroRequire;
let rect;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "relative" }, editButton: size, previewButton: rect, refreshEditButtonContainer: { position: "absolute", top: 12, right: 12 } };
size = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
rect = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let analyticsLocations;
  let context;
  let intl2;
  const tmp = userId;
  let obj = userId(context[6]);
  const cResult = obj.c(9);
  userId = userId.userId;
  let tmp4 = closure_7();
  analyticsLocations = analyticsLocations(context[7])().analyticsLocations;
  const obj2 = userId(context[8]);
  context = obj2.useUserProfileAnalyticsContext().context;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === context) {
      let tmp5;
      if (cResult[2] === userId) {
        tmp5 = cResult[3];
      }
      if (null == userId) {
        return null;
      } else {
        let tmp7;
        let tmp9;
        const _Symbol2 = Symbol;
        const previewButton = tmp4.previewButton;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[10]).intl;
          const stringResult = intl.string(tmp(context[10]).t["3Qcx6K"]);
          cResult[4] = stringResult;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl2.string(tmp(context[10]).t["3Qcx6K"]) };
          const Text = tmp(tmp2[11]).Text;
          intl2 = tmp(tmp2[10]).intl;
          const tmp11 = closure_5(Text, obj3);
          cResult[5] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          let tmp12;
          if (cResult[7] === tmp4.previewButton) {
            tmp12 = cResult[8];
          }
          return tmp12;
        }
        const obj4 = { style: previewButton, onPress: tmp5, accessibilityRole: "button", accessibilityLabel: tmp7, children: tmp9 };
        const tmp14 = closure_5(tmp(context[12]).PressableOpacity, obj4);
        cResult[6] = tmp5;
        cResult[7] = tmp4.previewButton;
        cResult[8] = tmp14;
        tmp12 = tmp14;
      }
    }
  }
  const fn = function n() {
    if (null != userId) {
      const obj = { userId: tmp, isPreviewingChanges: true, sourceAnalyticsLocations: analyticsLocations };
      const tmp4 = showUserProfileActionSheetDefault;
      const merged = Object.assign(context);
      tmp4(obj);
    }
  };
  cResult[0] = analyticsLocations;
  cResult[1] = context;
  cResult[2] = userId;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((userId) => {
  let Text;
  let intl;
  let intl2;
  let obj3;
  let tmp4;
  userId = userId.userId;
  let analyticsLocations;
  let context;
  const tmp = closure_7();
  analyticsLocations = analyticsLocations(context[7])().analyticsLocations;
  let obj = userId(context[8]);
  context = obj.useUserProfileAnalyticsContext().context;
  const items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    const obj2 = { style: tmp.previewButton, onPress: tmp4, accessibilityRole: "button", accessibilityLabel: intl.string(userId(context[10]).t["3Qcx6K"]), children: closure_5(Text, obj3) };
    const PressableOpacity = tmp3(tmp2[12]).PressableOpacity;
    intl = tmp3(tmp2[10]).intl;
    obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl2.string(userId(context[10]).t["3Qcx6K"]) };
    Text = tmp3(tmp2[11]).Text;
    intl2 = tmp3(tmp2[10]).intl;
    tmp5 = closure_5(PressableOpacity, obj2);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let disabled;
  let first;
  let onPress;
  const obj = react2;
  const cResult = obj.c(6);
  ({ onPress, accessibilityLabel, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
    const PencilIcon = PencilIcon2.PencilIcon;
    const tmp9 = hasOwnProperty(PencilIcon, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === accessibilityLabel) {
    if (cResult[2] === (undefined !== disabled && disabled)) {
      if (cResult[3] === onPress) {
        let tmp10;
        if (cResult[4] === tmp5.editButton) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
    }
  }
  const obj3 = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: undefined !== disabled && disabled, style: tmp5.editButton, children: first };
  const tmp11 = hasOwnProperty(Pressables.PressableOpacity, obj3);
  cResult[1] = accessibilityLabel;
  cResult[2] = undefined !== disabled && disabled;
  cResult[3] = onPress;
  cResult[4] = tmp5.editButton;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((disabled) => {
  let PencilIcon;
  let accessibilityLabel;
  let obj2;
  let onPress;
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: closure_7().editButton, children: hasOwnProperty(PencilIcon, obj2) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
  PencilIcon = PencilIcon2.PencilIcon;
  return hasOwnProperty(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bannerSafeArea;
  let displayProfile;
  let editButtonAccessibilityLabel;
  let editDisabled;
  let isUserProfileEditingRefresh;
  let items;
  let onPressEdit;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let showEditButton;
  let showProfilePreviewButton;
  let user;
  const obj = react2;
  const cResult = obj.c(24);
  ({ user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea, showProfilePreviewButton, showEditButton, onPressEdit, editButtonAccessibilityLabel, editDisabled, isUserProfileEditingRefresh } = arg0);
  const tmp5 = closure_7();
  const tmp7 = useUserProfileBannerHeightDefault();
  if (cResult[0] === tmp7) {
    if (cResult[1] === bannerSafeArea) {
      if (cResult[2] === displayProfile) {
        if (cResult[3] === pendingAccentColor) {
          if (cResult[4] === pendingAvatarSrc) {
            if (cResult[5] === pendingBanner) {
              if (cResult[6] === pendingThemeColors) {
                let tmp8;
                if (cResult[7] === user) {
                  tmp8 = cResult[8];
                }
                if (cResult[9] === showProfilePreviewButton) {
                  let tmp10;
                  if (cResult[10] === user) {
                    tmp10 = cResult[11];
                  }
                  if (cResult[12] === editButtonAccessibilityLabel) {
                    if (cResult[13] === (undefined !== editDisabled && editDisabled)) {
                      if (cResult[14] === isUserProfileEditingRefresh) {
                        if (cResult[15] === onPressEdit) {
                          if (cResult[16] === (undefined === showEditButton || showEditButton)) {
                            let tmp14;
                            if (cResult[17] === tmp5.refreshEditButtonContainer) {
                              tmp14 = cResult[18];
                            }
                            if (cResult[19] === tmp5.container) {
                              if (cResult[20] === tmp8) {
                                if (cResult[21] === tmp10) {
                                  let tmp19;
                                  if (cResult[22] === tmp14) {
                                    tmp19 = cResult[23];
                                  }
                                  return tmp19;
                                }
                              }
                            }
                            const obj2 = { style: tmp5.container, children: items };
                            items = [tmp8, tmp10, tmp14];
                            const tmp22 = metroRequire(View, obj2);
                            cResult[19] = tmp5.container;
                            cResult[20] = tmp8;
                            cResult[21] = tmp10;
                            cResult[22] = tmp14;
                            cResult[23] = tmp22;
                            tmp19 = tmp22;
                          }
                        }
                      }
                    }
                  }
                  let tmp15 = tmp3;
                  if (tmp15) {
                    let tmp16Result;
                    if (isUserProfileEditingRefresh) {
                      const obj3 = { style: tmp5.refreshEditButtonContainer, onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: undefined !== editDisabled && editDisabled, variant: "secondary-overlay" };
                      tmp16Result = hasOwnProperty(EditButtonDefault, obj3);
                    } else {
                      const obj4 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: undefined !== editDisabled && editDisabled };
                      tmp16Result = hasOwnProperty(closure_9, obj4);
                    }
                    tmp15 = tmp16Result;
                  }
                  cResult[12] = editButtonAccessibilityLabel;
                  cResult[13] = undefined !== editDisabled && editDisabled;
                  cResult[14] = isUserProfileEditingRefresh;
                  cResult[15] = onPressEdit;
                  cResult[16] = undefined === showEditButton || showEditButton;
                  cResult[17] = tmp5.refreshEditButtonContainer;
                  cResult[18] = tmp15;
                  tmp14 = tmp15;
                }
                let tmp11 = showProfilePreviewButton;
                if (tmp11) {
                  const obj5 = { userId: user.id };
                  tmp11 = hasOwnProperty(closure_8, obj5);
                }
                cResult[9] = showProfilePreviewButton;
                cResult[10] = user;
                cResult[11] = tmp11;
                tmp10 = tmp11;
              }
            }
          }
        }
      }
    }
  }
  const tmp9 = hasOwnProperty(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: tmp7, bannerSafeArea });
  cResult[0] = tmp7;
  cResult[1] = bannerSafeArea;
  cResult[2] = displayProfile;
  cResult[3] = pendingAccentColor;
  cResult[4] = pendingAvatarSrc;
  cResult[5] = pendingBanner;
  cResult[6] = pendingThemeColors;
  cResult[7] = user;
  cResult[8] = tmp9;
  tmp8 = tmp9;
}) : ((isUserProfileEditingRefresh) => {
  let bannerSafeArea;
  let displayProfile;
  let editButtonAccessibilityLabel;
  let editDisabled;
  let items;
  let onPressEdit;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let showEditButton;
  let showProfilePreviewButton;
  let user;
  ({ user, showProfilePreviewButton, showEditButton } = isUserProfileEditingRefresh);
  ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } = isUserProfileEditingRefresh);
  if (showEditButton === undefined) {
    showEditButton = true;
  }
  ({ onPressEdit, editButtonAccessibilityLabel, editDisabled } = isUserProfileEditingRefresh);
  if (editDisabled === undefined) {
    editDisabled = false;
  }
  isUserProfileEditingRefresh = isUserProfileEditingRefresh.isUserProfileEditingRefresh;
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  items = [, , ];
  const tmp4 = useUserProfileBannerHeightDefault();
  items[0] = hasOwnProperty(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: tmp4, bannerSafeArea });
  if (showProfilePreviewButton) {
    const obj2 = { userId: user.id };
    showProfilePreviewButton = hasOwnProperty(closure_8, obj2);
  }
  items[1] = showProfilePreviewButton;
  if (showEditButton) {
    let tmp7Result;
    if (isUserProfileEditingRefresh) {
      const obj3 = { style: tmp.refreshEditButtonContainer, onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled, variant: "secondary-overlay" };
      tmp7Result = hasOwnProperty(EditButtonDefault, obj3);
    } else {
      const obj4 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
      tmp7Result = hasOwnProperty(closure_9, obj4);
    }
    showEditButton = tmp7Result;
  }
  items[2] = showEditButton;
  return metroRequire(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default tmp4;