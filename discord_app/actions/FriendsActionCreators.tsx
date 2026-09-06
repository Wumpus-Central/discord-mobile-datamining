// discord_app/actions/FriendsActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import dispatcherDefault from "../Dispatcher.tsx";
import ME from "../Constants.tsx";
import transitionTo from "../modules/routing/router_utils.tsx";
import trackFriendsListClickedDefault from "../modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx";

const Routes = ME.Routes;
const result = set.fileFinishedImporting("actions/FriendsActionCreators.tsx");

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
      transitionTo.transitionTo(tmp3.FRIENDS);
      const tmpResult = transitionTo;
    }
    obj2 = transitionTo;
    const tmp = require;
    const tmp5 = importDefault;
    obj = { type: "FRIENDS_SET_SECTION", section: PENDING };
    dispatcherDefault.dispatch(obj);
    if (flag) {
      obj = { tab_opened: null };
      obj[0] = PENDING;
      trackFriendsListClickedDefault(obj);
    }
  },
  setSection(section) {
    let obj = dispatcherDefault;
    obj = { type: "FRIENDS_SET_SECTION", section };
    obj.dispatch(obj);
  },
  setInitialSection(section) {
    let obj = dispatcherDefault;
    obj = { type: "FRIENDS_SET_INITIAL_SECTION", section };
    obj.dispatch(obj);
  },
};
