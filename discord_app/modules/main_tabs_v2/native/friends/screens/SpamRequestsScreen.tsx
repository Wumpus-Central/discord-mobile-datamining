// discord_app/modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../Constants.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import UserRowConstants from "../../shared_components/user_list/UserRowConstants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let navigation, onPress;

const UserRowModes = UserRowConstants.UserRowModes;
const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let analyticsLocations;
      let mutableRelationships;
      let stateFromStoresArray;
      let stateFromStoresArray1;
      let tmp10;
      let tmp12;
      let tmp15;
      let tmp20;
      let tmp6;
      let tmp7;
      let obj = analyticsLocations(stateFromStoresArray1[7]);
      const cResult = obj.c(18);
      const tmp5 = stateFromStoresArray(stateFromStoresArray1[8]);
      analyticsLocations = tmp5(stateFromStoresArray(stateFromStoresArray1[9]).FRIEND_REQUESTS).analyticsLocations;
      const tmp4 = stateFromStoresArray;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        const fn = function p() {
          const obj = analyticsLocations(stateFromStoresArray1[10]);
          return obj.getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).spamIds;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = analyticsLocations(stateFromStoresArray1[11]);
      stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { name: analyticsLocations(stateFromStoresArray1[12]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX };
        cResult[2] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[2];
      }
      tmp4(stateFromStoresArray1[13])(tmp10);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        cResult[3] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] !== stateFromStoresArray) {
        class N {
          constructor() {
            mapped = closure_1.map((item) => user.getUser(item));
            return mapped.filter((item) => null != item);
          }
        }
        const items2 = [stateFromStoresArray];
        cResult[4] = stateFromStoresArray;
        cResult[5] = N;
        cResult[6] = items2;
        tmp15 = items2;
      } else {
        class N {
          constructor() {
            mapped = closure_1.map((item) => user.getUser(item));
            return mapped.filter((item) => null != item);
          }
        }
        tmp15 = cResult[6];
      }
      const tmpResult2 = analyticsLocations(stateFromStoresArray1[11]);
      stateFromStoresArray1 = tmpResult2.useStateFromStoresArray(tmp12, N, tmp15);
      if (cResult[7] !== analyticsLocations) {
        class E {
          constructor(id) {
            const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        }
        cResult[7] = analyticsLocations;
        cResult[8] = E;
      } else {
        class E {
          constructor(id) {
            const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        }
      }
      E = tmp16;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {}
        }
        cResult[9] = P;
      } else {
        class P {
          constructor() {}
        }
      }
      if (cResult[10] === tmp16) {
        class P {
          constructor() {}
        }
        if (0 !== stateFromStoresArray1.length) {
          class P {
            constructor() {}
          }
          if (cResult[15] === F) {
            class P {
              constructor() {}
            }
            return tmp20;
          }
          const tmp22 = jsx(analyticsLocations(stateFromStoresArray1[15]).UsersFastList, {
            getItemProps: F,
            getSectionProps: P,
            sections: tmp19,
          });
          cResult[15] = F;
          cResult[16] = tmp19;
          cResult[17] = tmp22;
          tmp20 = tmp22;
        } else {
          class P {
            constructor() {}
          }
        }
      }
      class F {
        constructor(arg0, arg1) {
          const element = { type: "user", props: obj };
          return element;
        }
      }
      cResult[10] = tmp16;
      cResult[11] = stateFromStoresArray1;
      cResult[12] = F;
    }
  : (navigation) => {
      let mutableRelationships;
      navigation = navigation.navigation;
      let stateFromStoresArray;
      let stateFromStoresArray1;
      onPress = undefined;
      const tmp2 = stateFromStoresArray(stateFromStoresArray1[8]);
      const analyticsLocations = tmp2(
        stateFromStoresArray(stateFromStoresArray1[9]).FRIEND_REQUESTS,
      ).analyticsLocations;
      let obj = analyticsLocations(stateFromStoresArray1[11]);
      const items = [RelationshipStore];
      stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
        const obj = analyticsLocations(stateFromStoresArray1[10]);
        return obj.getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).spamIds;
      });
      const obj2 = { name: analyticsLocations(stateFromStoresArray1[12]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX };
      const tmp5 = stateFromStoresArray(stateFromStoresArray1[13]);
      tmp5(obj2);
      const items1 = [UserStore];
      const items2 = [stateFromStoresArray];
      const obj3 = analyticsLocations(stateFromStoresArray1[11]);
      const tmp = stateFromStoresArray1;
      stateFromStoresArray1 = obj3.useStateFromStoresArray(
        items1,
        () => {
          let user;
          const mapped = stateFromStoresArray.map((item) => user.getUser(item));
          return mapped.filter((item) => null != item);
        },
        items2,
      );
      const items3 = [analyticsLocations];
      onPress = onPress.useCallback((id) => {
        const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }, items3);
      const items4 = [onPress, stateFromStoresArray1];
      const callback1 = onPress.useCallback(() => {}, []);
      const tmp3 = analyticsLocations;
      if (0 !== stateFromStoresArray1.length) {
        const items5 = [stateFromStoresArray1.length];
        return jsx(tmp3(tmp[15]).UsersFastList, { getItemProps: tmp9, getSectionProps: callback1, sections: items5 });
      } else {
        navigation.goBack();
      }
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx");

export default tmp2;
