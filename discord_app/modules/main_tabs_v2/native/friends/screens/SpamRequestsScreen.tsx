// === Module 17483: SpamRequestsScreen ===

// Module 17483 (SpamRequestsScreen)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8303 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

const require = fn;
const UserRowModes = fn(10216).UserRowModes;
const RelationshipTypes = fn(1085).RelationshipTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SpamRequestsScreen(arg0) {
  const cResult = analyticsLocations(stateFromStoresArray1[7]).c(18);
  const obj = analyticsLocations(stateFromStoresArray1[7]);
  const tmp4 = stateFromStoresArray;
  analyticsLocations = stateFromStoresArray(stateFromStoresArray1[8])(stateFromStoresArray(stateFromStoresArray1[9]).FRIEND_REQUESTS).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmp5 = stateFromStoresArray(stateFromStoresArray1[8]);
  stateFromStoresArray = analyticsLocations(stateFromStoresArray1[11]).useStateFromStoresArray(tmp6, S);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { name: tmp(tmp2[12]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX };
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[2];
  }
  tmp4(stateFromStoresArray1[13])(tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    cResult[3] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== stateFromStoresArray) {
    class N {
      constructor() {
        mapped = closure_1.map(() => { ... });
        return mapped.filter(() => { ... });
      }
    }
    const items2 = [stateFromStoresArray];
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    cResult[4] = stateFromStoresArray;
    cResult[5] = N;
    cResult[6] = items2;
    let tmp15 = items2;
  } else {
    class N {
      constructor() {
        mapped = closure_1.map(() => { ... });
        return mapped.filter(() => { ... });
      }
    }
    tmp15 = cResult[6];
  }
  const tmpResult = analyticsLocations(stateFromStoresArray1[11]);
  stateFromStoresArray1 = analyticsLocations(stateFromStoresArray1[11]).useStateFromStoresArray(tmp12, N, tmp15);
  if (cResult[7] !== analyticsLocations) {
    class E {
      constructor(arg0) {
        obj = { userId: arg0.id, localUser: arg0, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[14])(obj);
        return;
      }
    }
    cResult[7] = analyticsLocations;
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    cResult[8] = E;
  } else {
    class E {
      constructor(arg0) {
        obj = { userId: arg0.id, localUser: arg0, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[14])(obj);
        return;
      }
    }
  }
  onPress = E;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return;
      }
    }
    cResult[9] = P;
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
  } else {
    class P {
      constructor() {
        return;
      }
    }
  }
  if (cResult[10] === E) {
    class P {
      constructor() {
        return;
      }
    }
    if (0 !== stateFromStoresArray1.length) {
      class P {
        constructor() {
          return;
        }
      }
      if (cResult[15] === F) {
        class P {
          constructor() {
            return;
          }
        }
        return tmp20;
      }
      class S {
        constructor() {
          obj = analyticsLocations(closure_2[10]);
          return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
        }
      }
      tmp22[0] = F;
      tmp22[1] = tmp17;
      tmp22[2] = tmp19;
      const tmp23 = jsx(tmp(tmp2[15]).UsersFastList, tmp22);
      cResult[15] = F;
      cResult[16] = tmp19;
      cResult[17] = tmp23;
      tmp20 = tmp23;
    } else {
      class P {
        constructor() {
          return;
        }
      }
    }
  }
  class F {
    constructor(arg0, arg1) {
      element = { type: "user", props: null };
      obj1 = { type: RelationshipTypes.PENDING_INCOMING, user: closure_2[arg1], onPress: closure_3, mode: UserRowModes.ACTIONS, start: 0 === arg1, end: arg1 === closure_2.length - 1 };
      element.props = obj1;
      return element;
    }
  }
  cResult[10] = E;
  cResult[11] = stateFromStoresArray1;
  cResult[12] = F;
  const tmpResult2 = analyticsLocations(stateFromStoresArray1[11]);
}) : (function SpamRequestsScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  onPress = undefined;
  const analyticsLocations = stateFromStoresArray(stateFromStoresArray1[8])(stateFromStoresArray(stateFromStoresArray1[9]).FRIEND_REQUESTS).analyticsLocations;
  const tmp = stateFromStoresArray1;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1[8]);
  const tmp3 = analyticsLocations;
  const items = [RelationshipStore];
  stateFromStoresArray = analyticsLocations(stateFromStoresArray1[11]).useStateFromStoresArray(items, () => analyticsLocations(stateFromStoresArray1[10]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).spamIds);
  const obj2 = { name: null };
  const obj = analyticsLocations(stateFromStoresArray1[11]);
  obj2.name = analyticsLocations(stateFromStoresArray1[12]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX;
  stateFromStoresArray(stateFromStoresArray1[13])(obj2);
  const tmp5 = stateFromStoresArray(stateFromStoresArray1[13]);
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  stateFromStoresArray1 = analyticsLocations(stateFromStoresArray1[11]).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  onPress = onPress.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const items4 = [onPress, stateFromStoresArray1];
  const callback1 = onPress.useCallback(() => {

  }, []);
  if (0 !== stateFromStoresArray1.length) {
    const obj4 = { getItemProps: tmp9, getSectionProps: callback1, sections: null };
    const items5 = [stateFromStoresArray1.length];
    obj4.sections = items5;
    return jsx(tmp3(tmp[15]).UsersFastList, { getItemProps: tmp9, getSectionProps: callback1, sections: null });
  } else {
    navigation.goBack();
  }
  const obj3 = analyticsLocations(stateFromStoresArray1[11]);
});