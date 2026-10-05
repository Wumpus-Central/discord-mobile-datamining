// discord_app/modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx
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
      let stateFromStores;
      let stateFromStoresArray;
      let tmp11;
      let tmp12;
      let tmp17;
      let tmp5;
      let tmp6;
      let tmp9;
      let obj = analyticsLocations(stateFromStores[7]);
      const cResult = obj.c(17);
      const tmp4 = stateFromStoresArray(stateFromStores[8]);
      analyticsLocations = tmp4(stateFromStoresArray(stateFromStores[9]).FRIEND_REQUESTS).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        const fn = function p() {
          const obj = analyticsLocations(stateFromStores[10]);
          return obj.getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).ignoredUserIds;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = analyticsLocations(stateFromStores[11]);
      stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        cResult[2] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== stateFromStoresArray) {
        const fn2 = function y() {
          let user;
          const mapped = stateFromStoresArray.map((item) => user.getUser(item));
          return mapped.filter((item) => null != item);
        };
        const items2 = [stateFromStoresArray];
        cResult[3] = stateFromStoresArray;
        cResult[4] = fn2;
        cResult[5] = items2;
        tmp12 = items2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult2 = analyticsLocations(stateFromStores[11]);
      stateFromStores = tmpResult2.useStateFromStores(tmp9, tmp11, tmp12);
      if (cResult[6] !== analyticsLocations) {
        class N {
          constructor(id) {
            const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        }
        cResult[6] = analyticsLocations;
        cResult[7] = N;
      } else {
        class N {
          constructor(id) {
            const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        }
      }
      N = tmp13;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {}
        }
        cResult[8] = U;
      } else {
        class U {
          constructor() {}
        }
      }
      if (cResult[9] === tmp13) {
        class U {
          constructor() {}
        }
        if (0 !== stateFromStores.length) {
          class U {
            constructor() {}
          }
          if (cResult[14] === P) {
            class U {
              constructor() {}
            }
            return tmp17;
          }
          const tmp19 = jsx(analyticsLocations(stateFromStores[13]).UsersFastList, {
            getItemProps: P,
            getSectionProps: U,
            sections: tmp16,
          });
          cResult[14] = P;
          cResult[15] = tmp16;
          cResult[16] = tmp19;
          tmp17 = tmp19;
        } else {
          class U {
            constructor() {}
          }
        }
      }
      class P {
        constructor(arg0) {
          const element = { type: "user", props: obj };
          return element;
        }
      }
      cResult[9] = tmp13;
      cResult[10] = stateFromStores;
      cResult[11] = P;
    }
  : (navigation) => {
      let mutableRelationships;
      navigation = navigation.navigation;
      let stateFromStoresArray;
      let stateFromStores;
      onPress = undefined;
      const tmp2 = stateFromStoresArray(stateFromStores[8]);
      const analyticsLocations = tmp2(stateFromStoresArray(stateFromStores[9]).FRIEND_REQUESTS).analyticsLocations;
      let obj = analyticsLocations(stateFromStores[11]);
      const items = [RelationshipStore];
      stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
        const obj = analyticsLocations(stateFromStores[10]);
        return obj.getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).ignoredUserIds;
      });
      const items1 = [UserStore];
      const items2 = [stateFromStoresArray];
      const obj2 = analyticsLocations(stateFromStores[11]);
      const tmp = stateFromStores;
      stateFromStores = obj2.useStateFromStores(
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
      const items4 = [onPress, stateFromStores];
      const callback1 = onPress.useCallback(() => {}, []);
      const tmp3 = analyticsLocations;
      if (0 !== stateFromStores.length) {
        const items5 = [stateFromStores.length];
        return jsx(tmp3(tmp[13]).UsersFastList, { getItemProps: tmp7, getSectionProps: callback1, sections: items5 });
      } else {
        navigation.goBack();
      }
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx");

export default tmp2;
