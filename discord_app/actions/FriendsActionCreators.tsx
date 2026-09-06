// discord_app/actions/FriendsActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import trackFriendListClickedDefault from "../modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  },
};
