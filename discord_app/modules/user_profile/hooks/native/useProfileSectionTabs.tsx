// discord_app/modules/user_profile/hooks/native/useProfileSectionTabs.tsx
import Constants from "../../Constants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let activeIndex, initialUserProfileSection;

const UserProfileSections = Constants.UserProfileSections;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (initialUserProfileSection) => {
      let closure_5;
      let tmp4;
      let tmp5;
      let wishlistTabIndex;
      const obj = initialUserProfileSection(wishlistTabIndex[4]);
      const cResult = obj.c(19);
      initialUserProfileSection = initialUserProfileSection.initialUserProfileSection;
      wishlistTabIndex = initialUserProfileSection.wishlistTabIndex;
      const boardTabIndex = initialUserProfileSection.boardTabIndex;
      const activityTabIndex = initialUserProfileSection.activityTabIndex;
      const onTabChange = initialUserProfileSection.onTabChange;
      if (cResult[0] !== initialUserProfileSection) {
        class T {
          constructor() {
            tmp = initialUserProfileSection;
            tmp2 = UserProfileSections;
            if (UserProfileSections.WISHLIST === initialUserProfileSection) {
              return tmp2.WISHLIST;
            } else if (tmp2.WIDGETS === tmp) {
              return tmp2.WIDGETS;
            } else {
              return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
            }
          }
        }
        cResult[0] = initialUserProfileSection;
        cResult[1] = T;
      } else {
        class T {
          constructor() {
            tmp = initialUserProfileSection;
            tmp2 = UserProfileSections;
            if (UserProfileSections.WISHLIST === initialUserProfileSection) {
              return tmp2.WISHLIST;
            } else if (tmp2.WIDGETS === tmp) {
              return tmp2.WIDGETS;
            } else {
              return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
            }
          }
        }
      }
      [tmp4, tmp5] = boardTabIndex(activityTabIndex.useState(T), 2);
      boardTabIndex(activityTabIndex.useState(T), 2);
      if (cResult[2] === tmp4) {
        class T {
          constructor() {
            tmp = initialUserProfileSection;
            tmp2 = UserProfileSections;
            if (UserProfileSections.WISHLIST === initialUserProfileSection) {
              return tmp2.WISHLIST;
            } else if (tmp2.WIDGETS === tmp) {
              return tmp2.WIDGETS;
            } else {
              return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
            }
          }
        }
      }
      const tmp7 = wishlistTabIndex;
      if (onTabChange.WISHLIST !== tmp4) {
        class T {
          constructor() {
            tmp = initialUserProfileSection;
            tmp2 = UserProfileSections;
            if (UserProfileSections.WISHLIST === initialUserProfileSection) {
              return tmp2.WISHLIST;
            } else if (tmp2.WIDGETS === tmp) {
              return tmp2.WIDGETS;
            } else {
              return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
            }
          }
        }
        if (onTabChange.WIDGETS !== tmp4) {
          class T {
            constructor() {
              tmp = initialUserProfileSection;
              tmp2 = UserProfileSections;
              if (UserProfileSections.WISHLIST === initialUserProfileSection) {
                return tmp2.WISHLIST;
              } else if (tmp2.WIDGETS === tmp) {
                return tmp2.WIDGETS;
              } else {
                return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
              }
            }
          }
          if (onTabChange.ACTIVITY !== tmp4) {
            class T {
              constructor() {
                tmp = initialUserProfileSection;
                tmp2 = UserProfileSections;
                if (UserProfileSections.WISHLIST === initialUserProfileSection) {
                  return tmp2.WISHLIST;
                } else if (tmp2.WIDGETS === tmp) {
                  return tmp2.WIDGETS;
                } else {
                  return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
                }
              }
            }
            if (onTabChange.MAIN === tmp4) {
              class T {
                constructor() {
                  tmp = initialUserProfileSection;
                  tmp2 = UserProfileSections;
                  if (UserProfileSections.WISHLIST === initialUserProfileSection) {
                    return tmp2.WISHLIST;
                  } else if (tmp2.WIDGETS === tmp) {
                    return tmp2.WIDGETS;
                  } else {
                    return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
                  }
                }
              }
            }
          }
        }
      }
      cResult[2] = tmp4;
      cResult[3] = activityTabIndex;
      cResult[4] = boardTabIndex;
      cResult[5] = wishlistTabIndex;
      cResult[6] = tmp7;
    }
  : (boardTabIndex) => {
      let _undefined;
      let tmp2;
      let tmp3;
      let wishlistTabIndex;
      ({ initialUserProfileSection: require, wishlistTabIndex } = boardTabIndex);
      boardTabIndex = boardTabIndex.boardTabIndex;
      const activityTabIndex = boardTabIndex.activityTabIndex;
      const onTabChange = boardTabIndex.onTabChange;
      let num2;
      const tmp = boardTabIndex(
        activityTabIndex.useState(() => {
          if (UserProfileSections.WISHLIST === require) {
            return UserProfileSections.WISHLIST;
          } else if (UserProfileSections.WIDGETS === require) {
            return UserProfileSections.WIDGETS;
          } else {
            return UserProfileSections.ACTIVITY === require ? UserProfileSections.ACTIVITY : UserProfileSections.MAIN;
          }
        }),
        2,
      );
      [tmp2, tmp3] = tmp;
      let c5 = tmp3;
      let num = wishlistTabIndex;
      if (onTabChange.WISHLIST !== tmp2) {
        num = boardTabIndex;
        if (onTabChange.WIDGETS !== tmp2) {
          num = activityTabIndex;
          if (onTabChange.ACTIVITY !== tmp2) {
            if (onTabChange.MAIN === tmp2) {
              num = 0;
            }
          }
        }
      }
      if (num < 0) {
        tmp3(onTabChange.MAIN);
      }
      num2 = 0;
      if (num >= 0) {
        num2 = num;
      }
      const items = [wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange];
      const items1 = [num2];
      const callback = obj.useCallback((arg0) => {
        let MAIN;
        if (wishlistTabIndex === arg0) {
          MAIN = UserProfileSections.WISHLIST;
        } else if (boardTabIndex === arg0) {
          MAIN = UserProfileSections.WIDGETS;
        } else if (activityTabIndex === arg0) {
          MAIN = UserProfileSections.ACTIVITY;
        } else {
          MAIN = UserProfileSections.MAIN;
        }
        _undefined(MAIN);
        if (onTabChange != null) {
          onTabChange(MAIN);
        }
      }, items);
      const obj2 = {
        activeProfileTabSection: tmp2,
        setActiveProfileTabSection: tmp3,
        handleTabChange: callback,
        restoreActiveIndex: activityTabIndex.useCallback((activeIndex) => {
          activeIndex = activeIndex.activeIndex;
          if (activeIndex.get() !== num2) {
            activeIndex.setActiveIndex(tmp, false, true);
          }
        }, items1),
        activeProfileTabSectionIndex: num2,
      };
      return obj2;
    };
function getProfileTabSectionIndex(initialTab, wishlistTabIndex) {
  if (UserProfileSections.WISHLIST === initialTab) {
    return wishlistTabIndex.wishlistTabIndex;
  } else if (UserProfileSections.WIDGETS === initialTab) {
    return tmp;
  } else if (UserProfileSections.ACTIVITY === initialTab) {
    return tmp2;
  } else if (UserProfileSections.MAIN === initialTab) {
    return 0;
  }
}
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useProfileSectionTabs.tsx");

export function useProfileTabIndices(arg0, isRecentActivityMobileEnabled, arg2) {
  let tmp2;
  let num = -1;
  let num2 = 1;
  let num3 = -1;
  if (arg0) {
    num2 = 2;
    num3 = 1;
  }
  let sum = num2;
  const obj = { boardTabIndex: num3, activityTabIndex: tmp2, wishlistTabIndex: num };
  tmp2 = num;
  if (isRecentActivityMobileEnabled) {
    sum = num2 + 1;
    tmp2 = num2;
  }
  if (arg2) {
    num = sum;
  }
  return obj;
}
export { getProfileTabSectionIndex };
export const useProfileSectionTabs = tmp2;
