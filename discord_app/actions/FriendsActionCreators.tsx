// discord_app/actions/FriendsActionCreators.tsx
import { Routes } from "ME";
import { dispatcher } from "../Dispatcher.tsx";
import { transitionTo } from "../modules/routing/router_utils.tsx";

const result = require("transitionTo").fileFinishedImporting("actions/FriendsActionCreators.tsx");

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
      tmp(1222).transitionTo(tmp3.FRIENDS);
      const tmpResult = tmp(1222);
    }
    obj2 = transitionTo;
    tmp = require;
    const tmp5 = importDefault;
    obj = { type: "FRIENDS_SET_SECTION", section: PENDING };
    dispatcher.dispatch(obj);
    if (flag) {
      obj = { tab_opened: null };
      obj[0] = PENDING;
      tmp5(15847)(obj);
    }
  },
  setSection(section) {
    let obj = dispatcher;
    obj = { type: "FRIENDS_SET_SECTION", section };
    obj.dispatch(obj);
  },
  setInitialSection(section) {
    let obj = dispatcher;
    obj = { type: "FRIENDS_SET_INITIAL_SECTION", section };
    obj.dispatch(obj);
  }
};