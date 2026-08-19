// === Module 16693: ? ===

// Module 16693
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionTo from "transitionTo" /* 1222 */;
import trackFriendsListClickedDefault from "trackFriendsListClicked" /* 15971 */;

const Routes = ME.Routes;
const result = obj132.fileFinishedImporting("actions/FriendsActionCreators.tsx");

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
    obj = { type: "FRIENDS_SET_SECTION", section: PENDING };
    dispatcherDefault.dispatch(obj);
    if (flag) {
      obj = { tab_opened: null };
      obj[0] = PENDING;
      trackFriendsListClickedDefault(obj);
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