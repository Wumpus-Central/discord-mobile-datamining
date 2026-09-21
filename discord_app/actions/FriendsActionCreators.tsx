// === Module 17880: FriendsActionCreators ===

// Module 17880 (FriendsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import trackFriendListClickedDefault from "trackFriendListClicked" /* 17227 */;
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
    DispatcherDefault.dispatch({ type: "FRIENDS_SET_SECTION", section: PENDING });
    if (flag) {
      const obj5 = { tab_opened: PENDING };
      trackFriendListClickedDefault(obj5);
    }
    const obj3 = { type: "FRIENDS_SET_SECTION", section: PENDING };
  },
  setSection(section) {
    DispatcherDefault.dispatch({ type: "FRIENDS_SET_SECTION", section });
  },
  setInitialSection(section) {
    DispatcherDefault.dispatch({ type: "FRIENDS_SET_INITIAL_SECTION", section });
  }
};