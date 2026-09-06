// === Module 17475: ? ===

// Module 17475
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import ME from "ME" /* 1074 */;
import transitionTo from "transitionTo" /* 1100 */;
import trackFriendsListClickedDefault from "trackFriendsListClicked" /* 16752 */;

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
  }
};