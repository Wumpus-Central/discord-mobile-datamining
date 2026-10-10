// === Module 17495: YouScreenUserProfileContent ===

// Module 17495 (YouScreenUserProfileContent)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7099 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8367 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8381 */;
import FormDividerDefault from "FormDivider" /* 8583 */;
import tracking_Tracking from "tracking/Tracking" /* 9166 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 10519 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10531 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 10571 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10612 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11639 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13112 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13171 */;
import useBadgeDirectoryNuxCoachmarkVariant from "useBadgeDirectoryNuxCoachmarkVariant" /* 13184 */;
import useBadgeDirectoryNuxEntryPoint from "useBadgeDirectoryNuxEntryPoint" /* 13187 */;
import BadgeDirectoryNuxCoachmarkDefault from "BadgeDirectoryNuxCoachmark" /* 13188 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13209 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 13210 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 13227 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13356 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 13371 */;
import UserProfileConnections from "UserProfileConnections" /* 13374 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13379 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13384 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 14847 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 16046 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16805 */;
import useOwnsAnyBadgeDefault from "useOwnsAnyBadge" /* 17502 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 17504 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 17506 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5759 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const useIsContentShown = fn(2057).useIsContentShown;
let UserProfileSections = fn(8307).UserProfileSections;
let UserProfileThemeTypes = fn(6904).UserProfileThemeTypes;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
let closure_13 = fn(14816).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouAvatar(arg0) {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const result = require("tracking/Tracking").trackYouTabAvatarPress();
      const obj = require("tracking/Tracking");
      const result1 = require("showYouAccountActionSheet").showYouAccountActionSheet();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const isAndroidResult = PlatformUtils.isAndroid();
    cResult[1] = isAndroidResult;
    let tmp5 = isAndroidResult;
    const tmpResult = PlatformUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.onPress = first;
    obj2.importantForAccessibility = "no-hide-descendants";
    obj2.accessibilityElementsHidden = tmp5;
    obj2.accessible = !tmp5;
    const tmp8Result = closure_1_14(UserProfileAvatarDefault, obj2);
    cResult[2] = arg0;
    cResult[3] = tmp8Result;
    let tmp7 = tmp8Result;
    const tmp14 = !tmp5;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (function YouAvatar(arg0) {
  const callback = noop.useCallback(() => {
    const result = require("tracking/Tracking").trackYouTabAvatarPress();
    const obj = require("tracking/Tracking");
    const result1 = require("showYouAccountActionSheet").showYouAccountActionSheet();
  }, []);
  const isAndroidResult = PlatformUtils.isAndroid();
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.onPress = callback;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj2.accessibilityElementsHidden = isAndroidResult;
  obj2.accessible = !isAndroidResult;
  return closure_1_14(UserProfileAvatarDefault, obj2);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouScreenCardStyle(backgroundColor, borderColor) {
  const cResult = c.c(6);
  const tmp2 = UserProfileSharedStylesDefault();
  if (cResult[0] === backgroundColor) {
    if (cResult[1] === borderColor) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === tmp2.card) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
      }
      return tmp4;
    }
    const items = [tmp2.card, tmp3];
    cResult[3] = tmp2.card;
    cResult[4] = tmp3;
    cResult[5] = items;
    tmp4 = items;
  }
  const obj2 = { backgroundColor, borderColor, borderWidth: 1 };
  cResult[0] = backgroundColor;
  cResult[1] = borderColor;
  cResult[2] = obj2;
  tmp3 = obj2;
}) : (function useYouScreenCardStyle(backgroundColor, borderColor) {
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor, borderColor, borderWidth: 1 }];
  return items;
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenWidgetsBoardContainer(userId) {
  const cResult = c.c(9);
  userId = userId.userId;
  ({ activeSection, containerBackground, containerBorderColor } = userId);
  const tmp4 = UserProfileSharedStylesDefault();
  const tmp5 = closure_18(containerBackground, containerBorderColor);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = closure_1_14(UserProfileWidgetsBoardEditNoticeDefault, {});
    const tmp10 = closure_1_14(ConjureCustomWidgetAddOptionDefault, {});
    cResult[0] = tmp9;
    cResult[1] = tmp10;
    tmp6 = tmp9;
    tmp7 = tmp10;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === tmp11) {
      if (cResult[4] === userId) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] === tmp4.profileContent) {
        if (cResult[7] === tmp12) {
          let tmp14 = cResult[8];
        }
        return tmp14;
      }
      const obj2 = { style: tmp4.profileContent, children: null };
      const items = [tmp6, tmp7, tmp12];
      obj2.children = items;
      const tmp17 = value2(params, obj2);
      cResult[6] = tmp4.profileContent;
      cResult[7] = tmp12;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
  }
  const tmp13 = closure_1_14(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = activeSection === UserProfileSections.WIDGETS;
  cResult[4] = userId;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function YouScreenWidgetsBoardContainer(arg0) {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const obj = { style: UserProfileSharedStylesDefault().profileContent, children: null };
  const tmp = UserProfileSharedStylesDefault();
  const items = [closure_1_14(UserProfileWidgetsBoardEditNoticeDefault, {}), closure_1_14(ConjureCustomWidgetAddOptionDefault, {}), ];
  const tmp2 = closure_18(containerBackground, containerBorderColor);
  items[2] = closure_1_14(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: closure_18(containerBackground, containerBorderColor) });
  obj.children = items;
  return value2(params, obj);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenActivityTabContainer(arg0) {
  const cResult = c.c(9);
  ({ user, containerBackground, containerBorderColor } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  const tmp5 = closure_18(containerBackground, containerBorderColor);
  if (cResult[0] === tmp4.cards) {
    if (cResult[1] === tmp4.profileContent) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === user) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj2 = { style: tmp6, children: tmp7 };
      const tmp13 = closure_1_14(params, obj2);
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { user, currentUser: user, cardStyle: tmp5 };
    const tmp9 = closure_1_14(UserProfileActivityTabDefault, obj3);
    cResult[3] = tmp5;
    cResult[4] = user;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const items = [, ];
  ({ cards: arr[0], profileContent: arr[1] } = tmp4);
  cResult[0] = tmp4.cards;
  cResult[1] = tmp4.profileContent;
  cResult[2] = items;
  tmp6 = items;
}) : (function YouScreenActivityTabContainer(user) {
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  const obj = { style: null, children: null };
  const items = [, ];
  ({ cards: arr[0], profileContent: arr[1] } = UserProfileSharedStylesDefault());
  obj.style = items;
  const tmp = UserProfileSharedStylesDefault();
  obj.children = closure_1_14(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: closure_18(containerBackground, containerBorderColor) });
  return closure_1_14(params, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditSection(navigateToProfileCustomization) {
  const cResult = navigateToProfileCustomization(trackUserProfileAction[12]).c(37);
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  ({ isProfileLoaded, visibleContent, markAsDismissed } = navigateToProfileCustomization);
  const tmp5 = markAsDismissed(trackUserProfileAction[17])();
  let obj = navigateToProfileCustomization(trackUserProfileAction[12]);
  const token = navigateToProfileCustomization(trackUserProfileAction[22]).useToken(markAsDismissed(trackUserProfileAction[23]).colors.WHITE);
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[22]);
  trackUserProfileAction = navigateToProfileCustomization(trackUserProfileAction[24]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  closure_3 = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  noop = tmp9;
  const tmp10 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  closure_5 = tmp10;
  if (cResult[0] === markAsDismissed) {
    if (cResult[1] === navigateToProfileCustomization) {
      if (cResult[2] === tmp9) {
        if (cResult[3] === tmp10) {
          if (cResult[4] === tmp8) {
            if (cResult[5] === trackUserProfileAction) {
              let tmp11 = cResult[6];
            }
            if (cResult[7] !== navigateToProfileCustomization) {
              const fn2 = function _() {
                navigateToProfileCustomization(constants.BADGES);
              };
              cResult[7] = navigateToProfileCustomization;
              cResult[8] = fn2;
              let tmp12 = fn2;
            } else {
              tmp12 = cResult[8];
            }
            if (cResult[9] === token) {
              if (cResult[10] === isProfileLoaded) {
                const _Symbol = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(tmp2[28]).intl;
                  const stringResult = intl.string(tmp(tmp2[28]).t.AAjhgi);
                  cResult[12] = stringResult;
                  let tmp19 = stringResult;
                } else {
                  tmp19 = cResult[12];
                }
                if (cResult[13] !== isProfileLoaded) {
                  let tmp22;
                  if (!isProfileLoaded) {
                    const obj4 = { text: null };
                    const intl2 = tmp(tmp2[28]).intl;
                    obj4.text = intl2.string(tmp(tmp2[28]).t.ZTNur7);
                    tmp22 = obj4;
                  }
                  cResult[13] = isProfileLoaded;
                  cResult[14] = tmp22;
                  let tmp21 = tmp22;
                } else {
                  tmp21 = cResult[14];
                }
                if (cResult[15] === tmp11) {
                  if (cResult[16] === tmp14) {
                    if (cResult[17] === tmp21) {
                      let tmp23 = cResult[18];
                    }
                    if (cResult[19] === tmp5.primaryButtons) {
                      if (cResult[20] === tmp23) {
                        let tmp26 = cResult[21];
                      }
                      if (cResult[22] === markAsDismissed) {
                        if (cResult[23] === tmp8) {
                          let tmp29 = cResult[24];
                        }
                        if (cResult[25] === markAsDismissed) {
                          if (cResult[26] === tmp12) {
                            if (cResult[27] === tmp9) {
                              let tmp32 = cResult[28];
                            }
                            if (cResult[29] === markAsDismissed) {
                              if (cResult[30] === tmp10) {
                                let tmp35 = cResult[31];
                              }
                              if (cResult[32] === tmp32) {
                                if (cResult[33] === tmp35) {
                                  if (cResult[34] === tmp26) {
                                    if (cResult[35] === tmp29) {
                                      let tmp38 = cResult[36];
                                    }
                                    return tmp38;
                                  }
                                }
                              }
                              const obj5 = { children: null };
                              const items = [tmp26, tmp29, tmp32, tmp35];
                              obj5.children = items;
                              const tmp41 = closure_15(closure_16, obj5);
                              cResult[32] = tmp32;
                              cResult[33] = tmp35;
                              cResult[34] = tmp26;
                              cResult[35] = tmp29;
                              cResult[36] = tmp41;
                              tmp38 = tmp41;
                            }
                            const obj6 = { targetRef: ref, visible: tmp10, markAsDismissed };
                            const tmp37 = closure_14(markAsDismissed(tmp2[33]), obj6);
                            cResult[29] = markAsDismissed;
                            cResult[30] = tmp10;
                            cResult[31] = tmp37;
                            tmp35 = tmp37;
                          }
                        }
                        const obj7 = { targetRef: ref, visible: tmp9, markAsDismissed, onTryItOut: tmp12 };
                        const tmp34 = closure_14(markAsDismissed(tmp2[32]), obj7);
                        cResult[25] = markAsDismissed;
                        cResult[26] = tmp12;
                        cResult[27] = tmp9;
                        cResult[28] = tmp34;
                        tmp32 = tmp34;
                      }
                      const obj8 = { targetRef: ref, visible: tmp8, markAsDismissed };
                      const tmp31 = closure_14(markAsDismissed(tmp2[31]), obj8);
                      cResult[22] = markAsDismissed;
                      cResult[23] = tmp8;
                      cResult[24] = tmp31;
                      tmp29 = tmp31;
                    }
                    const obj9 = { style: tmp13, secondaryButton: tmp23 };
                    const tmp28 = closure_14(markAsDismissed(tmp2[30]), obj9);
                    cResult[19] = tmp5.primaryButtons;
                    cResult[20] = tmp23;
                    cResult[21] = tmp28;
                    tmp26 = tmp28;
                  }
                }
                const obj10 = { ref, variant: "primary", icon: cResult[11], text: tmp19, onPress: tmp11, accessibilityValue: tmp21, grow: true };
                const tmp25 = closure_14(tmp(tmp2[29]).Button, obj10);
                cResult[15] = tmp11;
                cResult[16] = cResult[11];
                cResult[17] = tmp21;
                cResult[18] = tmp25;
                tmp23 = tmp25;
              }
            }
            if (isProfileLoaded) {
              const obj11 = { size: "sm", color: token };
              let tmp15Result = closure_14(tmp(tmp2[26]).PencilIcon, obj11);
            } else {
              const obj12 = { size: "small", color: token, accessible: false };
              tmp15Result = closure_14(tmp(tmp2[27]).ActivityIndicator, obj12);
            }
            cResult[9] = token;
            cResult[10] = isProfileLoaded;
            cResult[11] = tmp15Result;
          }
        }
      }
    }
  }
  const fn = function o() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    let tmp4 = closure_3;
    if (!closure_3) {
      tmp4 = closure_4;
    }
    if (!tmp4) {
      tmp4 = closure_5;
    }
    if (tmp4) {
      markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    }
  };
  cResult[0] = markAsDismissed;
  cResult[1] = navigateToProfileCustomization;
  cResult[2] = tmp9;
  cResult[3] = tmp10;
  cResult[4] = tmp8;
  cResult[5] = trackUserProfileAction;
  cResult[6] = fn;
  tmp11 = fn;
  const obj3 = navigateToProfileCustomization(trackUserProfileAction[24]);
}) : (function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  ({ isProfileLoaded, visibleContent, markAsDismissed } = navigateToProfileCustomization);
  let trackUserProfileAction;
  noop = undefined;
  const tmp3 = markAsDismissed(trackUserProfileAction[17])();
  const token = navigateToProfileCustomization(trackUserProfileAction[22]).useToken(markAsDismissed(trackUserProfileAction[23]).colors.WHITE);
  let obj = navigateToProfileCustomization(trackUserProfileAction[22]);
  trackUserProfileAction = navigateToProfileCustomization(trackUserProfileAction[24]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  const tmp7 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  closure_3 = tmp7;
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  noop = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  closure_5 = tmp9;
  const items = [navigateToProfileCustomization, trackUserProfileAction, tmp7, tmp8, tmp9, markAsDismissed];
  const items1 = [navigateToProfileCustomization];
  const callback = noop.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    let tmp4 = closure_3;
    if (!closure_3) {
      tmp4 = closure_4;
    }
    if (!tmp4) {
      tmp4 = closure_5;
    }
    if (tmp4) {
      markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    navigateToProfileCustomization(constants.BADGES);
  }, items1);
  const obj3 = { style: tmp3.primaryButtons, secondaryButton: null };
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[24]);
  const obj4 = { ref, variant: "primary", icon: null, text: null, onPress: null, accessibilityValue: null, grow: true };
  if (isProfileLoaded) {
    const obj5 = { size: "sm", color: token };
    let tmp14Result = closure_14(tmp4(tmp2[26]).PencilIcon, obj5);
  } else {
    const obj6 = { size: "small", color: token, accessible: false };
    tmp14Result = closure_14(tmp4(tmp2[27]).ActivityIndicator, obj6);
  }
  obj4.icon = tmp14Result;
  const intl = tmp4(tmp2[28]).intl;
  obj4.text = intl.string(navigateToProfileCustomization(trackUserProfileAction[28]).t.AAjhgi);
  obj4.onPress = callback;
  let tmp17;
  if (!isProfileLoaded) {
    const obj7 = { text: null };
    const intl2 = tmp4(tmp2[28]).intl;
    obj7.text = intl2.string(tmp4(tmp2[28]).t.ZTNur7);
    tmp17 = obj7;
  }
  const obj8 = { children: null };
  obj4.accessibilityValue = tmp17;
  obj3.secondaryButton = closure_14(navigateToProfileCustomization(trackUserProfileAction[29]).Button, obj4);
  const items2 = [closure_14(markAsDismissed(trackUserProfileAction[30]), obj3), closure_14(markAsDismissed(trackUserProfileAction[31]), { targetRef: ref, visible: tmp7, markAsDismissed }), closure_14(markAsDismissed(trackUserProfileAction[32]), { targetRef: ref, visible: tmp8, markAsDismissed, onTryItOut: callback1 }), closure_14(markAsDismissed(trackUserProfileAction[33]), { targetRef: ref, visible: tmp9, markAsDismissed })];
  obj8.children = items2;
  return closure_15(closure_16, obj8);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenPrimaryInfoSection(arg0) {
  const cResult = c.c(36);
  ({ isProfileLoaded, navigateToProfileCustomization, primaryInfoProps } = arg0);
  const tmp5 = UserProfileSharedStylesDefault();
  const id = primaryInfoProps.user.id;
  const isDisplayNameStylesFlywheelSettersEnabled = DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "YouScreenUserProfileContent" };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const isBadgeManagementEnabled = BadgeManagementExperiment.useIsBadgeManagementEnabled(first);
  const tmp9 = useOwnsAnyBadgeDefault();
  if (cResult[1] !== id) {
    const obj4 = { userId: id, enabled: true, location: "YouScreenUserProfileContent" };
    cResult[1] = id;
    cResult[2] = obj4;
    let tmp10 = obj4;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = BadgeManagementExperiment;
  const badgeDirectoryNuxCoachmarkVariant = useBadgeDirectoryNuxCoachmarkVariant.useBadgeDirectoryNuxCoachmarkVariant(tmp10);
  const tmpResult5 = useBadgeDirectoryNuxCoachmarkVariant;
  const customTypingIndicatorConfig = CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp13 = useIsContentShown(dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  if (cResult[3] === badgeDirectoryNuxCoachmarkVariant.isPending) {
    if (cResult[4] === badgeDirectoryNuxCoachmarkVariant.variantProps) {
      if (cResult[5] === entryPoint) {
        if (cResult[6] === tmp13) {
          if (cResult[7] === isBadgeManagementEnabled) {
            if (cResult[8] === canSet) {
              if (cResult[9] === isDisplayNameStylesFlywheelSettersEnabled) {
                if (cResult[10] === isProfileLoaded) {
                  if (cResult[11] === tmp9) {
                    let tmp14 = cResult[12];
                  }
                  const tmpResult7 = useSelectedDismissibleContent;
                  [tmp26, tmp27] = useSelectedDismissibleContent.useSelectedDismissibleContent(tmp14);
                  const tmp28 = tmp26 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
                  const tmp25 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp14), 2);
                  const badgeDirectoryNuxEntryPoint = useBadgeDirectoryNuxEntryPoint.useBadgeDirectoryNuxEntryPoint(tmp28, tmp27);
                  ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
                  if (cResult[13] === tmp5.primaryInfo) {
                    if (cResult[14] === tmp5.profileContent) {
                      let tmp30 = cResult[15];
                    }
                    if (cResult[16] === entryPointRef) {
                      if (cResult[17] === onOpenBadgeDirectory) {
                        if (cResult[18] === primaryInfoProps) {
                          let tmp31 = cResult[19];
                        }
                        if (cResult[20] === badgeDirectoryNuxCoachmarkVariant.variantProps) {
                          if (cResult[21] === entryPointRef) {
                            if (cResult[22] === tmp28) {
                              if (cResult[23] === tmp27) {
                                if (cResult[24] === id) {
                                  let tmp38 = cResult[25];
                                }
                                if (cResult[26] === isProfileLoaded) {
                                  if (cResult[27] === tmp27) {
                                    if (cResult[28] === navigateToProfileCustomization) {
                                      if (cResult[29] === tmp26) {
                                        let tmp42 = cResult[30];
                                      }
                                      if (cResult[31] === tmp30) {
                                        if (cResult[32] === tmp31) {
                                          if (cResult[33] === tmp38) {
                                            if (cResult[34] === tmp42) {
                                              let tmp46 = cResult[35];
                                            }
                                            return tmp46;
                                          }
                                        }
                                      }
                                      const obj5 = { style: tmp30, children: null };
                                      const items = [tmp31, tmp38, tmp42];
                                      obj5.children = items;
                                      const tmp49 = value2(params, obj5);
                                      cResult[31] = tmp30;
                                      cResult[32] = tmp31;
                                      cResult[33] = tmp38;
                                      cResult[34] = tmp42;
                                      cResult[35] = tmp49;
                                      tmp46 = tmp49;
                                    }
                                  }
                                }
                                const obj6 = { navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp26, markAsDismissed: tmp27 };
                                const tmp45 = closure_1_14(closure_21, obj6);
                                cResult[26] = isProfileLoaded;
                                cResult[27] = tmp27;
                                cResult[28] = navigateToProfileCustomization;
                                cResult[29] = tmp26;
                                cResult[30] = tmp45;
                                tmp42 = tmp45;
                              }
                            }
                          }
                        }
                        let tmp40 = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
                        if (tmp40) {
                          const obj7 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp28, markAsDismissed: tmp27 };
                          tmp40 = closure_1_14(BadgeDirectoryNuxCoachmarkDefault, obj7);
                        }
                        cResult[20] = badgeDirectoryNuxCoachmarkVariant.variantProps;
                        cResult[21] = entryPointRef;
                        cResult[22] = tmp28;
                        cResult[23] = tmp27;
                        cResult[24] = id;
                        cResult[25] = tmp40;
                        tmp38 = tmp40;
                      }
                    }
                    const obj8 = {};
                    const merged = Object.assign(primaryInfoProps);
                    obj8.badgeDirectoryEntryPointRef = entryPointRef;
                    obj8.onOpenBadgeDirectory = onOpenBadgeDirectory;
                    const tmp37 = closure_1_14(UserProfilePrimaryInfoDefault, obj8);
                    cResult[16] = entryPointRef;
                    cResult[17] = onOpenBadgeDirectory;
                    cResult[18] = primaryInfoProps;
                    cResult[19] = tmp37;
                    tmp31 = tmp37;
                    const tmp4Result = UserProfilePrimaryInfoDefault;
                  }
                  const items1 = [, ];
                  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp5);
                  cResult[13] = tmp5.primaryInfo;
                  cResult[14] = tmp5.profileContent;
                  cResult[15] = items1;
                  tmp30 = items1;
                  const tmpResult8 = useBadgeDirectoryNuxEntryPoint;
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp15 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp15 = isDisplayNameStylesFlywheelSettersEnabled;
  }
  if (tmp15) {
    tmp15 = !tmp13;
  }
  const items2 = [];
  if (tmp15) {
    items2.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let tmp17 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp17 = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  }
  if (tmp17) {
    items2.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  let tmp20 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp20 = isBadgeManagementEnabled;
  }
  if (tmp20) {
    tmp20 = tmp9;
  }
  if (tmp20) {
    tmp20 = !badgeDirectoryNuxCoachmarkVariant.isPending;
  }
  if (tmp20) {
    items2.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  let tmp22 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp22 = canSet;
  }
  if (tmp22) {
    tmp22 = "profile" === entryPoint;
  }
  if (tmp22) {
    tmp22 = !tmp13;
  }
  if (tmp22) {
    tmp22 = !badgeDirectoryNuxCoachmarkVariant.isPending;
  }
  if (tmp22) {
    items2.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  cResult[3] = badgeDirectoryNuxCoachmarkVariant.isPending;
  cResult[4] = badgeDirectoryNuxCoachmarkVariant.variantProps;
  cResult[5] = entryPoint;
  cResult[6] = tmp13;
  cResult[7] = isBadgeManagementEnabled;
  cResult[8] = canSet;
  cResult[9] = isDisplayNameStylesFlywheelSettersEnabled;
  cResult[10] = isProfileLoaded;
  cResult[11] = tmp9;
  cResult[12] = items2;
  tmp14 = items2;
  const tmpResult6 = CustomTypingIndicatorExperiment;
}) : (function YouScreenPrimaryInfoSection(navigateToProfileCustomization) {
  ({ isProfileLoaded, primaryInfoProps } = navigateToProfileCustomization);
  const id = primaryInfoProps.user.id;
  const tmp3 = UserProfileSharedStylesDefault();
  const isDisplayNameStylesFlywheelSettersEnabled = DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const isBadgeManagementEnabled = BadgeManagementExperiment.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const tmp7 = useOwnsAnyBadgeDefault();
  const badgeDirectoryNuxCoachmarkVariant = useBadgeDirectoryNuxCoachmarkVariant.useBadgeDirectoryNuxCoachmarkVariant({ userId: id, enabled: true, location: "YouScreenUserProfileContent" });
  const customTypingIndicatorConfig = CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp10 = useIsContentShown(dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  let tmp11 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp11 = isDisplayNameStylesFlywheelSettersEnabled;
  }
  if (tmp11) {
    tmp11 = !tmp10;
  }
  const items = [];
  if (tmp11) {
    items.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let tmp13 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp13 = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  }
  if (tmp13) {
    items.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  let tmp16 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp16 = isBadgeManagementEnabled;
  }
  if (tmp16) {
    tmp16 = tmp7;
  }
  if (tmp16) {
    tmp16 = !badgeDirectoryNuxCoachmarkVariant.isPending;
  }
  if (tmp16) {
    items.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  let tmp18 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp18 = canSet;
  }
  if (tmp18) {
    tmp18 = "profile" === entryPoint;
  }
  if (tmp18) {
    tmp18 = !tmp10;
  }
  if (tmp18) {
    tmp18 = !badgeDirectoryNuxCoachmarkVariant.isPending;
  }
  if (tmp18) {
    items.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp4Result = useSelectedDismissibleContent;
  [tmp21, tmp22] = useSelectedDismissibleContent.useSelectedDismissibleContent(items);
  const tmp23 = tmp21 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp20 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items), 2);
  const badgeDirectoryNuxEntryPoint = useBadgeDirectoryNuxEntryPoint.useBadgeDirectoryNuxEntryPoint(tmp23, tmp22);
  const entryPointRef = badgeDirectoryNuxEntryPoint.entryPointRef;
  const obj5 = { style: null, children: null };
  const items1 = [, ];
  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp3);
  obj5.style = items1;
  const obj6 = {};
  const tmp4Result2 = useBadgeDirectoryNuxEntryPoint;
  const merged = Object.assign(primaryInfoProps);
  obj6.badgeDirectoryEntryPointRef = entryPointRef;
  obj6.onOpenBadgeDirectory = badgeDirectoryNuxEntryPoint.onOpenBadgeDirectory;
  const items2 = [closure_1_14(UserProfilePrimaryInfoDefault, obj6), , ];
  let tmp27Result = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  if (tmp27Result) {
    const obj7 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp23, markAsDismissed: tmp22 };
    tmp27Result = closure_1_14(BadgeDirectoryNuxCoachmarkDefault, obj7);
  }
  items2[1] = tmp27Result;
  items2[2] = closure_1_14(closure_21, { navigateToProfileCustomization: navigateToProfileCustomization.navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp21, markAsDismissed: tmp22 });
  obj5.children = items2;
  return value2(params, obj5);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenUserProfileContent(user) {
  const cResult = user(navigateToPremium[12]).c(182);
  user = user.user;
  ({ style, navigateToProfileCustomization, navigateToFriends } = user);
  navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  const animateAvatar = user.animateAvatar;
  let tmp4 = undefined === animateAvatar;
  if (!tmp4) {
    tmp4 = animateAvatar;
  }
  let obj = user(navigateToPremium[12]);
  closure_5 = navigateToFriends(navigateToPremium[17])();
  const tmp6 = navigateToFriends(navigateToPremium[17])();
  const navigation = user(navigateToPremium[43]).useNavigation();
  const tmpResult = user(navigateToPremium[43]);
  const trackUserProfileAction = user(navigateToPremium[24]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp8 = navigateToFriends(navigateToPremium[44])(user.id);
  SelfPresenceStore = tmp8;
  const tmpResult13 = user(navigateToPremium[24]);
  const customStatusActivity = user(navigateToPremium[45]).useCustomStatusActivity();
  navigateToFriends(navigateToPremium[46])(tmp8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore];
    class S {
      constructor() {
        return closure_8.getStatus();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp11 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult14 = user(navigateToPremium[45]);
  const stateFromStores = user(navigateToPremium[47]).useStateFromStores(tmp11, S);
  if (cResult[2] === tmp8) {
    if (cResult[3] === user) {
      let tmp15 = cResult[4];
    }
    const tmp16 = navigateToFriends(tmp2[48])(tmp15);
    const theme = tmp16.theme;
    class S {
      constructor() {
        return closure_8.getStatus();
      }
    }
    const secondaryColor = tmp16.secondaryColor;
    UserProfileSections = null != tmp17;
    if (cResult[5] === tmp17) {
      if (cResult[6] === secondaryColor) {
        if (cResult[7] === theme) {
          let tmp19 = cResult[8];
        }
        const userProfileColors = tmp(tmp2[49]).useUserProfileColors(tmp19);
        class S {
          constructor() {
            return closure_8.getStatus();
          }
        }
        UserProfileThemeTypes = tmp21;
        const containerBorderColor = userProfileColors.containerBorderColor;
        ({ avatarBackground, statusBackground } = userProfileColors);
        initialTab.useRef(null);
        if (cResult[9] !== trackUserProfileAction) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          cResult[9] = trackUserProfileAction;
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
          cResult[10] = Z;
        } else {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        const tmpResult16 = tmp(tmp2[49]);
        const enabled = tmp(tmp2[50]).useVirtualCurrencyMobileEnabled().enabled;
        const tmp24 = navigateToShop;
        const tmpResult17 = tmp(tmp2[50]);
        [r10110, closure_14] = navigateToShop(initialTab.useState(null), 2);
        const tmp25 = navigateToShop(initialTab.useState(null), 2);
        const shouldShowExpiringTrialOfferCard = tmp(tmp2[51]).useShouldShowExpiringTrialOfferCard();
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          let items1 = [customStatusActivity];
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
          cResult[11] = items1;
          const tmp27 = items1;
        } else {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        if (cResult[12] !== user.id) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          cResult[12] = user.id;
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
          cResult[13] = tmp29;
        } else {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        const tmpResult18 = tmp(tmp2[51]);
        const stateFromStores1 = tmp(tmp2[47]).useStateFromStores(tmp27, tmp29);
        const tmpResult19 = tmp(tmp2[47]);
        const displayableBoardWidgets = tmp(tmp2[52]).useDisplayableBoardWidgets(user.id);
        const tmpResult20 = tmp(tmp2[52]);
        const tmp31 = displayableBoardWidgets.length > 0 || tmp(tmp2[53]).useCanConjureCustomWidget("YouScreenUserProfileContent");
        const tmpResult21 = tmp(tmp2[53]);
        const isRecentActivityMobileEnabled = tmp(tmp2[54]).useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
        const tmpResult22 = tmp(tmp2[54]);
        const profileTabIndices = tmp(tmp2[55]).useProfileTabIndices(tmp31, isRecentActivityMobileEnabled, true);
        const boardTabIndex = profileTabIndices.boardTabIndex;
        const activityTabIndex = profileTabIndices.activityTabIndex;
        const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
        let MAIN = initialTab;
        if (null != initialTab) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          let obj2 = { wishlistTabIndex, boardTabIndex: null, activityTabIndex: null };
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
          obj2.activityTabIndex = activityTabIndex;
          MAIN = initialTab;
          if (obj17.getProfileTabSectionIndex(initialTab, obj2) < 0) {
            class Z {
              constructor() {
                tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
                obj = closure_0(closure_2[14]);
                result = obj.showYouAccountActionSheet();
                return;
              }
            }
            MAIN = UserProfileSections.MAIN;
          }
        }
        const tmp24Result = tmp24(initialTab.useState(0), 2);
        closure_21 = tmp24Result[0];
        closure_22 = tmp24Result[1];
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
          cResult[14] = tmp36;
          class S {
            constructor() {
              return closure_8.getStatus();
            }
          }
        } else {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        const tmpResult23 = tmp(tmp2[55]);
        const pageHeights = tmp(tmp2[56]).usePageHeights();
        const handlePageContentSize = pageHeights.handlePageContentSize;
        if (cResult[15] === initialTab) {
          class Z {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_SET_STATUS" });
              obj = closure_0(closure_2[14]);
              result = obj.showYouAccountActionSheet();
              return;
            }
          }
        }
        class Ae {
          constructor(arg0) {
            obj = { action: "PRESS_SECTION", section: user };
            tmp = trackUserProfileAction(obj);
            if (user !== initialTab) {
              tmp2 = closure_6;
              obj1 = { initialTab: null };
              obj1.initialTab = user;
              setParamsResult = closure_6.setParams(obj1);
            }
            return;
          }
        }
        cResult[15] = initialTab;
        cResult[16] = navigation;
        cResult[17] = trackUserProfileAction;
        cResult[18] = Ae;
        const tmpResult24 = tmp(tmp2[56]);
      }
    }
    let obj3 = { theme, primaryColor: tmp17, secondaryColor };
    cResult[5] = tmp17;
    cResult[6] = secondaryColor;
    cResult[7] = theme;
    cResult[8] = obj3;
    tmp19 = obj3;
  }
  let obj4 = { user, displayProfile: tmp8 };
  cResult[2] = tmp8;
  cResult[3] = user;
  cResult[4] = obj4;
  tmp15 = obj4;
  const tmpResult15 = user(navigateToPremium[47]);
}) : (function YouScreenUserProfileContent(user) {
  user = user.user;
  const navigateToFriends = user.navigateToFriends;
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  let flag = user.animateAvatar;
  ({ style, scrollPosition, navigateToProfileCustomization } = user);
  if (flag === undefined) {
    flag = true;
  }
  let pageWidth;
  closure_24 = undefined;
  let handlePageContentSize;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  let isVisible;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  const tmp3 = navigateToFriends(navigateToPremium[17])();
  closure_5 = tmp3;
  const navigation = user(navigateToPremium[43]).useNavigation();
  let obj = user(navigateToPremium[43]);
  const trackUserProfileAction = user(navigateToPremium[24]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[44])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[24]);
  const customStatusActivity = user(navigateToPremium[45]).useCustomStatusActivity();
  let obj3 = user(navigateToPremium[45]);
  let tmp8 = navigateToFriends(navigateToPremium[46])(tmp6);
  let items = [displayProfile];
  const stateFromStores = user(navigateToPremium[47]).useStateFromStores(items, () => displayProfile.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[48])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileSections = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj4 = user(navigateToPremium[47]);
  const userProfileColors = user(navigateToPremium[49]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  let obj5 = user(navigateToPremium[49]);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = showYouAccountActionSheet.showYouAccountActionSheet();
  }, items1);
  const ref = initialTab.useRef(null);
  const enabled = user(navigateToPremium[50]).useVirtualCurrencyMobileEnabled().enabled;
  let obj7 = user(navigateToPremium[50]);
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  const shouldShowExpiringTrialOfferCard = user(navigateToPremium[51]).useShouldShowExpiringTrialOfferCard();
  let obj9 = user(navigateToPremium[51]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = user(navigateToPremium[47]).useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj10 = user(navigateToPremium[47]);
  const displayableBoardWidgets = user(navigateToPremium[52]).useDisplayableBoardWidgets(user.id);
  const obj11 = user(navigateToPremium[52]);
  const tmp20 = displayableBoardWidgets.length > 0 || user(navigateToPremium[53]).useCanConjureCustomWidget("YouScreenUserProfileContent");
  closure_17 = tmp20;
  const obj12 = user(navigateToPremium[53]);
  const isRecentActivityMobileEnabled = user(navigateToPremium[54]).useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  let tmp4Result = user(navigateToPremium[54]);
  const profileTabIndices = user(navigateToPremium[55]).useProfileTabIndices(tmp20, isRecentActivityMobileEnabled, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const activityTabIndex = profileTabIndices.activityTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  let MAIN = initialTab;
  if (null != initialTab) {
    const obj13 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
    MAIN = initialTab;
    if (tmp4Result11.getProfileTabSectionIndex(initialTab, obj13) < 0) {
      MAIN = UserProfileSections.MAIN;
    }
    tmp4Result11 = tmp4(tmp2[55]);
  }
  const tmp15Result = tmp15(initialTab.useState(0), 2);
  pageWidth = tmp15Result[0];
  closure_24 = tmp15Result[1];
  const callback1 = obj6.useCallback((nativeEvent) => {
    closure_24(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4Result10 = user(navigateToPremium[55]);
  const pageHeights = user(navigateToPremium[56]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction, navigation, initialTab];
  const callback2 = obj6.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (section !== initialTab) {
      const obj2 = { initialTab: section };
      navigation.setParams(obj2);
    }
    const obj = { action: "PRESS_SECTION", section };
  }, items3);
  const tmp4Result12 = user(navigateToPremium[56]);
  const profileSectionTabs = user(navigateToPremium[55]).useProfileSectionTabs({ initialUserProfileSection: MAIN, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp30;
  const items4 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback3 = obj6.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    _undefined(tmp2);
  }, items4);
  const items5 = [callback3];
  const effect = obj6.useEffect(() => {
    setImmediate(() => {
      callback3();
    });
  }, items5);
  let labelResult;
  if (null != obj8) {
    labelResult = obj8.label();
  }
  const items6 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback4 = obj6.useCallback(() => {
    const items = [closure_5.card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
    const obj2 = { style: null, children: null };
    const items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    obj2.style = items1;
    const items2 = [closure_2_14(YouExpiringTrialOfferCardDefault, { navigateToPremium, style: items }), , , , , , , , , ];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj4 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = closure_2_14(UserProfileDismissibleUpsellsDefault, obj4);
    }
    items2[1] = tmp3Result;
    let tmp3Result2 = enabled;
    if (enabled) {
      tmp3Result2 = closure_2_14(BalanceWidgetMenuDefault, {});
    }
    items2[2] = tmp3Result2;
    items2[3] = closure_2_14(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[4] = closure_2_14(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[5] = closure_2_14(FormDividerDefault, {});
    items2[6] = closure_2_14(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = closure_2_14(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = closure_2_14(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends });
    items2[9] = closure_2_14(UserProfileNoteDefault, { userId: user.id });
    obj2.children = items2;
    return value2(params, obj2);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj6.useCallback(() => {
    const obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = closure_2_14(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = closure_2_14;
    } else {
      tmp4 = closure_2_14;
      const obj2 = { wishlistId: stateFromStores1, containerWidth: null, isVisible: null };
      let tmp8;
      if (first > 0) {
        tmp8 = first;
      }
      obj2.containerWidth = tmp8;
      obj2.isVisible = isVisible;
      tmp4Result = tmp4(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp4Result, ];
    const obj3 = { userId: user.id, wishlistId: stateFromStores1, containerWidth: null };
    let tmp15;
    if (first > 0) {
      tmp15 = first;
    }
    obj3.containerWidth = tmp15;
    items[1] = tmp4(UserProfileWishlistSuggestionsGridDefault, obj3);
    obj.children = items;
    return value2(params, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp20, isRecentActivityMobileEnabled, boardTabIndex, activityTabIndex, wishlistTabIndex, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = closure_2_14(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    });
    const items = [obj];
    if (closure_17) {
      const obj3 = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.laViwx);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj5 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      obj4.children = closure_2_14(closure_19, obj5);
      obj3.page = closure_2_14(hasOwnProperty, obj4, boardTabIndex);
      items.push(obj3);
    }
    if (isRecentActivityMobileEnabled) {
      const obj6 = { id: "activity", label: null, page: null };
      const intl3 = util.intl;
      obj6.label = intl3.string(util.t.chq59f);
      const obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj8 = { user, containerBackground, containerBorderColor };
      obj7.children = closure_2_14(closure_20, obj8);
      obj6.page = closure_2_14(hasOwnProperty, obj7, activityTabIndex);
      items.push(obj6);
    }
    const obj9 = { id: "wishlist", label: null, page: null };
    const intl4 = util.intl;
    obj9.label = intl4.string(util.t["7lZ31J"]);
    const obj2 = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    obj9.page = closure_2_14(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(wishlistTabIndex, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj9);
    return items;
  }, items8);
  const tmp4Result13 = user(navigateToPremium[55]);
  const tmp4Result14 = user(navigateToPremium[69]);
  segmentedControlState = tmp4Result14.useSegmentedControlState({ pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[23]).space.PX_24, items: memo, onPageChange: handleTabChange });
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[23]).space.PX_24, items: memo, onPageChange: handleTabChange };
  const pagerFillHeight = user(navigateToPremium[56]).usePagerFillHeight(scrollPosition);
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const tmp4Result15 = user(navigateToPremium[56]);
  const pagesHeightStyle = user(navigateToPremium[56]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  const tmp4Result16 = user(navigateToPremium[56]);
  const items10 = [MAIN, activeProfileTabSection, navigation, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[43]).useFocusEffect(obj6.useCallback(() => {
    let tmp2 = undefined !== MAIN;
    if (tmp2) {
      tmp2 = tmp !== activeProfileTabSection;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(MAIN);
      }, 80);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
      if (!navigation.isFocused()) {
        const parent = navigation.getParent();
        let isFocusedResult;
        if (parent != null) {
          isFocusedResult = parent.isFocused();
        }
        if (isFocusedResult) {
          const obj2 = { initialTab: UserProfileSections.MAIN };
          navigation.setParams(obj2);
        }
      }
    };
  }, items10));
  const obj15 = { style, children: null };
  const obj16 = { style: null, children: null };
  const items11 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  obj16.style = items11;
  const items12 = [c14(closure_17, { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag }), , , ];
  const obj18 = { ref, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  const items13 = [, ];
  ({ customStatusBubble: arr15[0], customStatusBubbleInset: arr15[1] } = tmp3);
  obj18.style = items13;
  items12[1] = c14(navigateToFriends(navigateToPremium[70]), obj18);
  let isLoaded;
  if (tmp6 != null) {
    isLoaded = tmp6.isLoaded;
  }
  const obj19 = { isProfileLoaded: true === isLoaded, navigateToProfileCustomization, primaryInfoProps: null };
  const obj20 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true, canOpenBadgeDirectory: true };
  let pronouns;
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj20.pronouns = pronouns;
  obj20.badges = tmp8;
  obj20.badgeContainerBackground = containerBackground;
  obj20.onPressDisplayName = callback;
  let intl = tmp4(tmp2[28]).intl;
  const obj21 = { status: null };
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const tmp45 = MAIN;
  const tmp4Result17 = user(navigateToPremium[43]);
  obj21.status = user(navigateToPremium[71]).getStatusLabel(stateFromStores);
  const tmp4Result18 = user(navigateToPremium[71]);
  let intl2 = tmp4(tmp2[28]).intl;
  obj20.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[28]).t["er+FRD"], obj21) + ", " + intl2.string(user(navigateToPremium[28]).t.C6COaT);
  obj20.themeType = containerBackground.YOU_SCREEN;
  obj19.primaryInfoProps = obj20;
  items12[2] = c14(tmp45, obj19);
  const obj22 = { style: { flex: 1 }, onLayout: callback1, children: null };
  const obj23 = { style: tmp3.profileTablist, children: null };
  const obj24 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "overlay";
  }
  const obj25 = { zIndex: 1, children: null };
  obj24.variant = str;
  obj23.children = c14(user(navigateToPremium[72]).Tabs, obj24);
  const items14 = [c14(navigation, obj23), ];
  const formatToPlainStringResult = intl.formatToPlainString(user(navigateToPremium[28]).t["er+FRD"], obj21);
  items14[1] = c14(navigateToFriends(navigateToPremium[74]).View, { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: c14(user(navigateToPremium[73]).SegmentedControlPages, { state: segmentedControlState }) });
  obj22.children = items14;
  items12[3] = shouldShowExpiringTrialOfferCard(navigation, obj22);
  obj16.children = items12;
  obj25.children = shouldShowExpiringTrialOfferCard(navigation, obj16);
  obj15.children = c14(user(navigateToPremium[75]).LayerScope, obj25);
  return c14(navigateToFriends(navigateToPremium[74]).View, obj15);
});