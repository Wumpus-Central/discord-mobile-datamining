// discord_app/modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = userId(576).c(18);
      ({ userDisplayName, userId } = arg0);
      ({ gameName, applicationId } = arg0);
      if (cResult[0] === applicationId) {
        if (cResult[1] === userId) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== userDisplayName) {
          const intl = userId(1126).intl;
          const obj2 = { name: userDisplayName };
          const formatToPlainStringResult = intl.formatToPlainString(userId(1126).t.fBKKfq, obj2);
          cResult[3] = userDisplayName;
          cResult[4] = formatToPlainStringResult;
          let tmp5 = formatToPlainStringResult;
        } else {
          tmp5 = cResult[4];
        }
        if (cResult[5] === gameName) {
          if (cResult[6] === userDisplayName) {
            let tmp7 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = userId(1126).intl;
            const stringResult = intl3.string(userId(1126).t.RLcE6x);
            cResult[8] = stringResult;
            let tmp10 = stringResult;
          } else {
            tmp10 = cResult[8];
          }
          if (cResult[9] !== tmp4) {
            const obj3 = { variant: "destructive", text: tmp10, onPress: tmp4 };
            const tmp14 = closure_4(userId(5713).AlertActionButton, obj3, "confirm-remove");
            cResult[9] = tmp4;
            cResult[10] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "secondary", text: null };
            const intl4 = userId(1126).intl;
            obj4.text = intl4.string(userId(1126).t["eN6+rI"]);
            const tmp17 = closure_4(userId(5713).AlertActionButton, obj4, "nevermind");
            cResult[11] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] !== tmp12) {
            const obj5 = { children: null };
            const items = [tmp12, tmp15];
            obj5.children = items;
            const tmp20 = closure_5(userId(5713).AlertActions, obj5);
            cResult[12] = tmp12;
            cResult[13] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp7) {
              if (cResult[16] === tmp18) {
                let tmp21 = cResult[17];
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
        const result = UserProfileAnalyticsUtils.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
        PeopleUtilsDefault.removeFriend({ userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" });
      };
      cResult[0] = applicationId;
      cResult[1] = userId;
      cResult[2] = fn;
      tmp4 = fn;
      let obj = userId(576);
    }
  : (gameName) => {
      ({ userDisplayName, userId } = gameName);
      const applicationId = gameName.applicationId;
      const items = [applicationId, userId];
      const callback = noop.useCallback(() => {
        const result = UserProfileAnalyticsUtils.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
        PeopleUtilsDefault.removeFriend({ userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" });
      }, items);
      let obj = { title: null, content: null, actions: null };
      const intl = userId(1126).intl;
      obj.title = intl.formatToPlainString(userId(1126).t.fBKKfq, { name: userDisplayName });
      const intl2 = userId(1126).intl;
      obj.content = intl2.formatToPlainString(userId(1126).t.dsU5bl, {
        name: userDisplayName,
        gameName: gameName.gameName,
      });
      const obj2 = { children: null };
      const obj3 = { variant: "destructive", text: null, onPress: null };
      const intl3 = userId(1126).intl;
      obj3.text = intl3.string(userId(1126).t.RLcE6x);
      obj3.onPress = callback;
      const items1 = [closure_4(userId(5713).AlertActionButton, obj3, "confirm-remove")];
      const obj4 = { variant: "secondary", text: null };
      const intl4 = userId(1126).intl;
      obj4.text = intl4.string(userId(1126).t["eN6+rI"]);
      items1[1] = closure_4(userId(5713).AlertActionButton, obj4, "nevermind");
      obj2.children = items1;
      obj.actions = closure_5(userId(5713).AlertActions, obj2);
      return closure_4(userId(5713).AlertModal, obj);
    };
