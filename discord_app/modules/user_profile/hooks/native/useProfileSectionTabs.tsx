// discord_app/modules/user_profile/hooks/native/useProfileSectionTabs.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { UserProfileSections } from "../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/native/useProfileSectionTabs.tsx");

export function useProfileTabIndices(arg0, arg1) {
  let num = -1;
  let num2 = -1;
  if (arg0) {
    num2 = 1;
  }
  const obj = { boardTabIndex: num2, wishlistTabIndex: null };
  if (arg1) {
    let num3 = 1;
    if (arg0) {
      num3 = 2;
    }
    num = num3;
  }
  obj[1] = num;
  return obj;
}
export const useProfileSectionTabs = function useProfileSectionTabs(boardTabIndex) {
  ({ initialUserProfileSection: closure_0, wishlistTabIndex } = boardTabIndex);
  boardTabIndex = boardTabIndex.boardTabIndex;
  const onTabChange = boardTabIndex.onTabChange;
  let num2;
  let obj = wishlistTabIndex;
  [tmp2, tmp3] = callback(wishlistTabIndex.useState(() => {
    if (boardTabIndex.WISHLIST === closure_0) {
      return boardTabIndex.WISHLIST;
    } else {
      return boardTabIndex.WIDGETS === tmp ? boardTabIndex.WIDGETS : boardTabIndex.MAIN;
    }
  }), 2);
  c4 = tmp3;
  let num = wishlistTabIndex;
  if (boardTabIndex.WISHLIST !== tmp2) {
    num = boardTabIndex;
    if (tmp4.WIDGETS !== tmp2) {
      if (tmp4.MAIN === tmp2) {
        num = 0;
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
  const items = [wishlistTabIndex, boardTabIndex, onTabChange];
  const items1 = [num2];
  callback = obj.useCallback((arg0) => {
    if (wishlistTabIndex === arg0) {
      let MAIN = boardTabIndex.WISHLIST;
    } else if (boardTabIndex === arg0) {
      MAIN = boardTabIndex.WIDGETS;
    } else {
      MAIN = boardTabIndex.MAIN;
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
    activeProfileTabSectionIndex: num2
  };
  return obj;
};