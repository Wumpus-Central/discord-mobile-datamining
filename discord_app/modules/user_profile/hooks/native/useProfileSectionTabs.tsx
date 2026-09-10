// discord_app/modules/user_profile/hooks/native/useProfileSectionTabs.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const UserProfileSections = fn(8246).UserProfileSections;
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
export const useProfileSectionTabs = function useProfileSectionTabs(boardTabIndex) {
  ({ initialUserProfileSection: _slicedToArray, wishlistTabIndex } = boardTabIndex);
  boardTabIndex = boardTabIndex.boardTabIndex;
  const activityTabIndex = boardTabIndex.activityTabIndex;
  const onTabChange = boardTabIndex.onTabChange;
  let num2;
  let obj = wishlistTabIndex;
  [tmp2, tmp3] = _slicedToArray(
    wishlistTabIndex.useState(() => {
      if (UserProfileSections.WISHLIST === _slicedToArray) {
        return UserProfileSections.WISHLIST;
      } else if (UserProfileSections.WIDGETS === _slicedToArray) {
        return UserProfileSections.WIDGETS;
      } else {
        return UserProfileSections.ACTIVITY === _slicedToArray
          ? UserProfileSections.ACTIVITY
          : UserProfileSections.MAIN;
      }
    }),
    2,
  );
  c5 = tmp3;
  let num = wishlistTabIndex;
  if (boardTabIndex.WISHLIST !== tmp2) {
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
  obj = {
    activeProfileTabSection: tmp2,
    setActiveProfileTabSection: tmp3,
    handleTabChange: callback,
    restoreActiveIndex: obj.useCallback((activeIndex) => {
      activeIndex = activeIndex.activeIndex;
      if (activeIndex.get() !== num2) {
        activeIndex.setActiveIndex(tmp, false, true);
      }
    }, items1),
    activeProfileTabSectionIndex: num2,
  };
  return obj;
};
