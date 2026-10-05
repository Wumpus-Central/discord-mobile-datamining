// discord_app/modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let applicationId;
      let gameName;
      let intl4;
      let items;
      let userDisplayName;
      let userId;
      let obj = userId(576);
      const cResult = obj.c(18);
      ({ userDisplayName, userId } = arg0);
      ({ gameName, applicationId } = arg0);
      if (cResult[0] === applicationId) {
        let tmp4;
        let tmp5;
        if (cResult[1] === userId) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== userDisplayName) {
          const intl = userId(1126).intl;
          let obj2 = { name: userDisplayName };
          const formatToPlainStringResult = intl.formatToPlainString(userId(1126).t.fBKKfq, obj2);
          cResult[3] = userDisplayName;
          cResult[4] = formatToPlainStringResult;
          tmp5 = formatToPlainStringResult;
        } else {
          tmp5 = cResult[4];
        }
        if (cResult[5] === gameName) {
          let tmp7;
          let tmp10;
          let tmp12;
          let tmp15;
          let tmp18;
          if (cResult[6] === userDisplayName) {
            tmp7 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = userId(1126).intl;
            const stringResult = intl3.string(userId(1126).t.RLcE6x);
            cResult[8] = stringResult;
            tmp10 = stringResult;
          } else {
            tmp10 = cResult[8];
          }
          if (cResult[9] !== tmp4) {
            let obj3 = { variant: "destructive", text: tmp10, onPress: tmp4 };
            const tmp14 = closure_4(userId(5713).AlertActionButton, obj3, "confirm-remove");
            cResult[9] = tmp4;
            cResult[10] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "secondary", text: intl4.string(userId(1126).t["eN6+rI"]) };
            const AlertActionButton = userId(5713).AlertActionButton;
            intl4 = userId(1126).intl;
            const tmp17 = closure_4(AlertActionButton, obj4, "nevermind");
            cResult[11] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] !== tmp12) {
            const obj5 = { children: items };
            items = [tmp12, tmp15];
            const tmp20 = closure_5(userId(5713).AlertActions, obj5);
            cResult[12] = tmp12;
            cResult[13] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp7) {
              let tmp21;
              if (cResult[16] === tmp18) {
                tmp21 = cResult[17];
              }
              return tmp21;
            }
          }
          const obj6 = { title: tmp5, content: tmp7, actions: tmp18 };
          const tmp23 = closure_4(userId(5713).AlertModal, obj6);
          cResult[14] = tmp5;
          cResult[15] = tmp7;
          cResult[16] = tmp18;
          cResult[17] = tmp23;
          tmp21 = tmp23;
        }
        const intl2 = userId(1126).intl;
        const obj7 = { name: userDisplayName, gameName };
        const formatToPlainStringResult1 = intl2.formatToPlainString(userId(1126).t.dsU5bl, obj7);
        cResult[5] = gameName;
        cResult[6] = userDisplayName;
        cResult[7] = formatToPlainStringResult1;
        tmp7 = formatToPlainStringResult1;
      }
      const fn = function n() {
        const obj = UserProfileAnalyticsUtils;
        const result = obj.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
        const obj2 = PeopleUtilsDefault;
        const obj3 = { userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" };
        obj2.removeFriend(obj3);
      };
      cResult[0] = applicationId;
      cResult[1] = userId;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (applicationId) => {
      let AlertActions;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let obj2;
      let userDisplayName;
      let userId;
      ({ userDisplayName, userId } = applicationId);
      applicationId = applicationId.applicationId;
      const items = [applicationId, userId];
      const gameName = applicationId.gameName;
      const callback = react.useCallback(() => {
        const obj = UserProfileAnalyticsUtils;
        const result = obj.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
        const obj2 = PeopleUtilsDefault;
        const obj3 = { userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" };
        obj2.removeFriend(obj3);
      }, items);
      let obj = {
        title: intl.formatToPlainString(userId(1126).t.fBKKfq, { name: userDisplayName }),
        content: intl2.formatToPlainString(userId(1126).t.dsU5bl, { name: userDisplayName, gameName }),
        actions: closure_5(AlertActions, obj2),
      };
      const AlertModal = userId(5713).AlertModal;
      intl = userId(1126).intl;
      intl2 = userId(1126).intl;
      obj2 = { children: items1 };
      AlertActions = userId(5713).AlertActions;
      let obj3 = { variant: "destructive", text: intl3.string(userId(1126).t.RLcE6x), onPress: callback };
      const AlertActionButton = userId(5713).AlertActionButton;
      intl3 = userId(1126).intl;
      items1 = [closure_4(AlertActionButton, obj3, "confirm-remove")];
      const obj4 = { variant: "secondary", text: intl4.string(userId(1126).t["eN6+rI"]) };
      const AlertActionButton2 = userId(5713).AlertActionButton;
      intl4 = userId(1126).intl;
      items1[1] = closure_4(AlertActionButton2, obj4, "nevermind");
      return closure_4(AlertModal, obj);
    };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx");

export default tmp3;
