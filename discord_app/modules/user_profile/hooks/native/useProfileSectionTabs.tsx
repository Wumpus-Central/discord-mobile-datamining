// === Module 12926: useProfileSectionTabs ===

// Module 12926 (useProfileSectionTabs)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const UserProfileSections = fn(7854).UserProfileSections;
const ReactCompilerGating = fn(558);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useProfileSectionTabs.tsx");

export function useProfileTabIndices(arg0, isRecentActivityMobileEnabled, arg2) {
  let num = -1;
  let num2 = 1;
  let num3 = -1;
  if (arg0) {
    num2 = 2;
    num3 = 1;
  }
  const obj = { boardTabIndex: num3, activityTabIndex: null, wishlistTabIndex: null };
  let sum = num2;
  let tmp2 = num;
  if (isRecentActivityMobileEnabled) {
    sum = num2 + 1;
    tmp2 = num2;
  }
  obj.activityTabIndex = tmp2;
  if (arg2) {
    num = sum;
  }
  obj.wishlistTabIndex = num;
  return obj;
}
export { getProfileTabSectionIndex };
export const useProfileSectionTabs = ReactCompilerGating.isReactCompilerEnabled() ? ((initialUserProfileSection) => {
  const cResult = initialUserProfileSection(wishlistTabIndex[4]).c(19);
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
  const obj = initialUserProfileSection(wishlistTabIndex[4]);
  [tmp4, tmp5] = boardTabIndex(activityTabIndex.useState(T), 2);
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
    if (tmp6.WIDGETS !== tmp4) {
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
      if (tmp6.ACTIVITY !== tmp4) {
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
        if (tmp6.MAIN === tmp4) {
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
  cResult[6] = wishlistTabIndex;
  const tmp3 = boardTabIndex(activityTabIndex.useState(T), 2);
}) : ((boardTabIndex) => {
  ({ initialUserProfileSection: require, wishlistTabIndex } = boardTabIndex);
  boardTabIndex = boardTabIndex.boardTabIndex;
  const activityTabIndex = boardTabIndex.activityTabIndex;
  const onTabChange = boardTabIndex.onTabChange;
  let num2;
  [tmp2, tmp3] = boardTabIndex(activityTabIndex.useState(() => {
    if (UserProfileSections.WISHLIST === require) {
      return UserProfileSections.WISHLIST;
    } else if (UserProfileSections.WIDGETS === require) {
      return UserProfileSections.WIDGETS;
    } else {
      return UserProfileSections.ACTIVITY === require ? UserProfileSections.ACTIVITY : UserProfileSections.MAIN;
    }
  }), 2);
  c5 = tmp3;
  let num = wishlistTabIndex;
  if (onTabChange.WISHLIST !== tmp2) {
    num = boardTabIndex;
    if (tmp4.WIDGETS !== tmp2) {
      num = activityTabIndex;
      if (tmp4.ACTIVITY !== tmp2) {
        if (tmp4.MAIN === tmp2) {
          num = 0;
        }
      }
    }
  }
  if (num < 0) {
    tmp3(tmp4.MAIN);
  }
  num2 = 0;
  if (num >= 0) {
    num2 = num;
  }
  const items = [wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange];
  const items1 = [num2];
  const callback = obj.useCallback((arg0) => {
    if (wishlistTabIndex === arg0) {
      let MAIN = UserProfileSections.WISHLIST;
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
  const tmp = boardTabIndex(activityTabIndex.useState(() => {
    if (UserProfileSections.WISHLIST === require) {
      return UserProfileSections.WISHLIST;
    } else if (UserProfileSections.WIDGETS === require) {
      return UserProfileSections.WIDGETS;
    } else {
      return UserProfileSections.ACTIVITY === require ? UserProfileSections.ACTIVITY : UserProfileSections.MAIN;
    }
  }), 2);
  return {
    activeProfileTabSection: tmp2,
    setActiveProfileTabSection: tmp3,
    handleTabChange: callback,
    restoreActiveIndex: activityTabIndex.useCallback((activeIndex) => {
      activeIndex = activeIndex.activeIndex;
      if (activeIndex.get() !== num2) {
        activeIndex.setActiveIndex(tmp, false, true);
      }
    }, items1),
    activeProfileTabSectionIndex: num2
  };
});