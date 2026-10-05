// === Module 16951: IgnoredUserRequestsScreen ===

// Module 16951 (IgnoredUserRequestsScreen)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

const require = fn;
const UserRowModes = fn(10592).UserRowModes;
const RelationshipTypes = fn(1085).RelationshipTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = analyticsLocations(stateFromStores[7]).c(17);
  const obj = analyticsLocations(stateFromStores[7]);
  analyticsLocations = stateFromStoresArray(stateFromStores[8])(stateFromStoresArray(stateFromStores[9]).FRIEND_REQUESTS).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    const fn = function p() {
      return analyticsLocations(stateFromStores[10]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).ignoredUserIds;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp4 = stateFromStoresArray(stateFromStores[8]);
  stateFromStoresArray = analyticsLocations(stateFromStores[11]).useStateFromStoresArray(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== stateFromStoresArray) {
    const fn2 = function y() {
      const mapped = stateFromStoresArray.map((item) => user.getUser(item));
      return mapped.filter((item) => null != item);
    };
    const items2 = [stateFromStoresArray];
    cResult[3] = stateFromStoresArray;
    cResult[4] = fn2;
    cResult[5] = items2;
    let tmp12 = items2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult = analyticsLocations(stateFromStores[11]);
  stateFromStores = analyticsLocations(stateFromStores[11]).useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[6] !== analyticsLocations) {
    class N {
      constructor(arg0) {
        obj = { userId: arg0.id, localUser: arg0, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[12])(obj);
        return;
      }
    }
    cResult[6] = analyticsLocations;
    cResult[7] = N;
  } else {
    class N {
      constructor(arg0) {
        obj = { userId: arg0.id, localUser: arg0, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[12])(obj);
        return;
      }
    }
  }
  onPress = N;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return;
      }
    }
    cResult[8] = U;
  } else {
    class U {
      constructor() {
        return;
      }
    }
  }
  if (cResult[9] === N) {
    class U {
      constructor() {
        return;
      }
    }
    if (0 !== stateFromStores.length) {
      class U {
        constructor() {
          return;
        }
      }
      if (cResult[14] === P) {
        class U {
          constructor() {
            return;
          }
        }
        return tmp17;
      }
      const obj2 = { getItemProps: P, getSectionProps: U, sections: tmp16 };
      const tmp19 = jsx(tmp(tmp2[13]).UsersFastList, { getItemProps: P, getSectionProps: U, sections: tmp16 });
      cResult[14] = P;
      cResult[15] = tmp16;
      cResult[16] = tmp19;
      tmp17 = tmp19;
    } else {
      class U {
        constructor() {
          return;
        }
      }
    }
  }
  class P {
    constructor(arg0) {
      element = { type: "user", props: null };
      obj1 = { type: RelationshipTypes.PENDING_INCOMING, user: closure_2[arg0], onPress: closure_3, mode: UserRowModes.ACTIONS, start: 0 === arg0, end: arg0 === closure_2.length - 1 };
      element.props = obj1;
      return element;
    }
  }
  cResult[9] = N;
  cResult[10] = stateFromStores;
  cResult[11] = P;
  const tmpResult2 = analyticsLocations(stateFromStores[11]);
}) : ((navigation) => {
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStores;
  onPress = undefined;
  const analyticsLocations = stateFromStoresArray(stateFromStores[8])(stateFromStoresArray(stateFromStores[9]).FRIEND_REQUESTS).analyticsLocations;
  const tmp = stateFromStores;
  const tmp2 = stateFromStoresArray(stateFromStores[8]);
  const tmp3 = analyticsLocations;
  const items = [RelationshipStore];
  stateFromStoresArray = analyticsLocations(stateFromStores[11]).useStateFromStoresArray(items, () => analyticsLocations(stateFromStores[10]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).ignoredUserIds);
  const obj = analyticsLocations(stateFromStores[11]);
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  stateFromStores = analyticsLocations(stateFromStores[11]).useStateFromStores(items1, () => {
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  onPress = onPress.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const items4 = [onPress, stateFromStores];
  const callback1 = onPress.useCallback(() => {

  }, []);
  if (0 !== stateFromStores.length) {
    const obj3 = { getItemProps: tmp7, getSectionProps: callback1, sections: null };
    const items5 = [stateFromStores.length];
    obj3.sections = items5;
    return jsx(tmp3(tmp[13]).UsersFastList, { getItemProps: tmp7, getSectionProps: callback1, sections: null });
  } else {
    navigation.goBack();
  }
  const obj2 = analyticsLocations(stateFromStores[11]);
});