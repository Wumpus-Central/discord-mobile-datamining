// === Module 17475: FriendsActionCreators ===

// Module 17475 (FriendsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1100 */;
import trackFriendListClickedDefault from "trackFriendListClicked" /* 16752 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("actions/FriendsActionCreators.tsx");

export default {
  transitionToSection(PENDING, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.explicit;
    if (flag === undefined) {
      flag = false;
    }
    if (obj2.getHistory().location.pathname !== Routes.FRIENDS) {
      router_utils.transitionTo(tmp3.FRIENDS);
      const tmpResult = router_utils;
    }
    obj2 = router_utils;
    obj = { type: "FRIENDS_SET_SECTION", section: PENDING };
    DispatcherDefault.dispatch(obj);
    if (flag) {
      obj = { tab_opened: PENDING };
      trackFriendListClickedDefault(obj);
    }
  },
  setSection(section) {
    const obj = { type: "FRIENDS_SET_SECTION", section };
    obj.dispatch(obj);
  },
  setInitialSection(section) {
    const obj = { type: "FRIENDS_SET_INITIAL_SECTION", section };
    obj.dispatch(obj);
  }
};