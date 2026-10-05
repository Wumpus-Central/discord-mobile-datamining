// === Module 16936: AddFriendsScreen ===

// Module 16936 (AddFriendsScreen)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8054 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12325 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12327 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12329 */;
import FriendsScreenConstants from "FriendsScreenConstants" /* 12348 */;
import IncomingRequestRow from "IncomingRequestRow" /* 16939 */;
import ContactSuggestionRow2 from "ContactSuggestionRow" /* 16941 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7142 */;
import RelationshipStore_mod from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, constants, navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function handleFindFriends() {
  const obj = ContactSyncModalActionCreators;
  obj.openContactSyncModal({}, map1.FRIENDS_ADD_FRIENDS_MODAL);
}
function handleShare() {
  return obj(...arguments);
}
let props = function _handleShare() {
  let obj = _asyncToGenerator(async (arg0) => {
    let PJf9P9;
    let formatToPlainString;
    let obj3;
    let obj8;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let code;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            code = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj3.createFriendInvite(null, constants.ADD_FRIENDS_MODAL), done: false };
            obj3 = InstantInviteActionCreatorsDefault;
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          const presentError = closure_130_0(closure_130_2[15]).presentError;
          const tmp9 = closure_130_0(closure_130_2[15]);
          const intl = closure_130_0(closure_130_2[16]).intl;
          presentError(intl.string(closure_130_0(closure_130_2[16]).t.R0RpRX));
          c6 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          code = value.code;
          c4 = 0;
          const obj7 = { channel: null, code, message: formatToPlainString(PJf9P9, obj8), location: closure_130_14.ADD_FRIENDS_MODAL };
          const intl2 = closure_130_0(closure_130_2[16]).intl;
          formatToPlainString = intl2.formatToPlainString;
          obj8 = { link: closure_130_1(closure_130_2[17])(code) };
          PJf9P9 = closure_130_0(closure_130_2[16]).t.PJf9P9;
          closure_0(obj7);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        let closure_3 = tmp19;
        if (0 === c4) {
          c6 = 3;
          throw tmp19;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function areHydratedGameFriendRequestRowStatesEqual(arr, arg1) {
  const f127429 = (user, index) => user.user === closure_0[index].user && user.applicationId === closure_0[index].applicationId;
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f127429);
    const tmp2 = arr.length === arg1.length && arr.every(f127429);
  }
  return tmp;
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
let RelationshipStore = RelationshipStore_mod;
let Sections = FriendsScreenConstants.Sections;
({ AnalyticEvents: closure_12, AnalyticsSections: map1, InstantInviteSources: closure_14, RelationshipTypes: closure_15 } = Constants);
let ContactPermissions = ContactSyncConstants.ContactPermissions;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = { FIND_FRIENDS: 0, [0]: "FIND_FRIENDS", INCOMING_FRIEND_REQUESTS: 1, [1]: "INCOMING_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS: 2, [2]: "INCOMING_GAME_FRIEND_REQUESTS", CONTACT_SUGGESTIONS: 3, [3]: "CONTACT_SUGGESTIONS" };
let createStyles = createStyles_mod;
props = { container: { flex: 1 }, inviteAppsContainerNonSticky: obj2, inviteAppsContentContainer: { paddingTop: 0, paddingBottom: 0, minWidth: "100%" }, emptyContainer: obj3, emptyActionContainer: obj4, loading: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { marginHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj5 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
let closure_20 = createStyles(props);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let tmp10;
  let tmp5;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(4);
  const obj2 = require("ContactSyncUtils");
  const contactSyncAccount = obj2.useContactSyncAccount();
  if (cResult[0] !== contactSyncAccount) {
    let tmpResult = tmp(12329);
    const isContactSyncEnabledResult = tmpResult.isContactSyncEnabled(contactSyncAccount);
    cResult[0] = contactSyncAccount;
    cResult[1] = isContactSyncEnabledResult;
    tmp5 = isContactSyncEnabledResult;
  } else {
    tmp5 = cResult[1];
  }
  [first, _require] = react.useState(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      let obj = ContactSyncUtils;
      if (obj.isContactSyncAvailable()) {
        const tmpResult = ContactSyncUtils;
        const result = tmpResult.checkContactPermissions();
        result.then((result) => {
          const NOT_DETERMINED = constants.NOT_DETERMINED;
          let tmp3 = result === NOT_DETERMINED;
          const obj = closure_0(dependencyMap[21]);
          const tmp2 = obj.isAndroid() && result === constants.UNAUTHORIZED;
          if (!tmp3) {
            tmp3 = tmp2;
          }
          closure_1_0(tmp3);
        });
      }
    };
    const items = [];
    cResult[2] = fn;
    cResult[3] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const effect = react.useEffect(tmp9, tmp10);
  const tmpResult2 = require("ContactSyncUtils");
  let result = tmpResult2.isContactSyncAvailable();
  if (result) {
    let tmp13 = !tmp5;
    if (tmp5) {
      tmp13 = first;
    }
    result = tmp13;
  }
  return result;
}) : (() => {
  let require;
  let tmp4;
  let obj = ContactSyncUtils;
  const contactSyncAccount = obj.useContactSyncAccount();
  const obj2 = ContactSyncUtils;
  const isContactSyncEnabledResult = obj2.isContactSyncEnabled(contactSyncAccount);
  let tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, require] = tmp3;
  const effect = react.useEffect(() => {
    let obj = ContactSyncUtils;
    if (obj.isContactSyncAvailable()) {
      const tmpResult = ContactSyncUtils;
      const result = tmpResult.checkContactPermissions();
      result.then((result) => {
        const NOT_DETERMINED = constants.NOT_DETERMINED;
        let tmp3 = result === NOT_DETERMINED;
        const obj = require("PlatformUtils");
        const tmp2 = obj.isAndroid() && result === constants.UNAUTHORIZED;
        if (!tmp3) {
          tmp3 = tmp2;
        }
        closure_1_0(tmp3);
      });
    }
  }, []);
  const obj3 = ContactSyncUtils;
  let result = obj3.isContactSyncAvailable();
  if (result) {
    let tmp7 = !isContactSyncEnabledResult;
    if (isContactSyncEnabledResult) {
      tmp7 = tmp4;
    }
    result = tmp7;
  }
  return result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let closure_129_1;
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  navigation = navigation.navigation;
  [tmp3, closure_129_1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== navigation) {
    const fn = function i() {
      return navigation.addListener("transitionEnd", () => {
        closure_1_1(true);
      });
    };
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  return tmp3;
}) : ((navigation) => {
  let closure_1;
  let first;
  navigation = navigation.navigation;
  closure_1 = undefined;
  [first, closure_1] = react.useState(false);
  const items = [navigation];
  const effect = react.useEffect(() => navigation.addListener("transitionEnd", () => {
    closure_1_1(true);
  }), items);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let added;
  let analyticsLocations;
  let closure_11;
  let closure_16;
  let closure_3;
  let closure_7;
  let closure_9;
  let first;
  let first1;
  let se;
  let tmp14;
  let tmp17;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp32;
  let tmp48;
  let tmp = navigation;
  const tmp2 = analyticsLocations;
  let obj = navigation(analyticsLocations[19]);
  const cResult = obj.c(80);
  navigation = navigation.navigation;
  const sourcePage = navigation.route.params.sourcePage;
  const tmp4 = added();
  let tmp6 = sourcePage(analyticsLocations[22]);
  analyticsLocations = tmp6(sourcePage(analyticsLocations[23]).ADD_FRIENDS).analyticsLocations;
  let tmp7 = sourcePage(analyticsLocations[24])();
  _slicedToArray = tmp7;
  let obj2 = navigation(analyticsLocations[25]);
  const userRowWithSubLabelHeight = obj2.useUserRowWithSubLabelHeight(1);
  let obj3 = navigation(analyticsLocations[25]);
  const userRowWithSubLabelHeight1 = obj3.useUserRowWithSubLabelHeight(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const obj4 = userRowWithSubLabelHeight1;
  let tmp11 = _slicedToArray;
  [first1, closure_7] = userRowWithSubLabelHeight1.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [];
    cResult[1] = items1;
    tmp14 = items1;
  } else {
    tmp14 = cResult[1];
  }
  const tmp11Result = tmp11(obj4.useState(tmp14), 2);
  const first2 = tmp11Result[0];
  RelationshipStore = tmp11Result[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    cResult[2] = items2;
    tmp17 = items2;
  } else {
    tmp17 = cResult[2];
  }
  const tmp11Result3 = tmp11(obj4.useState(tmp17), 2);
  const first3 = tmp11Result3[0];
  Sections = tmp11Result3[1];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [];
    cResult[3] = items3;
    tmp20 = items3;
  } else {
    tmp20 = cResult[3];
  }
  const tmp11Result4 = tmp11(obj4.useState(tmp20), 2);
  const first4 = tmp11Result4[0];
  let closure_13 = tmp11Result4[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_13((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_9((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
    cResult[4] = X;
    tmp23 = X;
  } else {
    class X {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_13((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_9((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
  }
  X = tmp23;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
    cResult[5] = Y;
    tmp24 = Y;
  } else {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
  }
  Y = tmp24;
  if (cResult[6] !== sourcePage) {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
    cResult[6] = sourcePage;
    cResult[7] = tmp26;
  } else {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
  }
  sourcePage(tmp2[27])(tmp26);
  if (cResult[8] !== navigation) {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
    cResult[8] = navigation;
    cResult[9] = tmp29;
  } else {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
  }
  ContactPermissions = tmp29;
  if (cResult[10] !== analyticsLocations) {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
    cResult[10] = analyticsLocations;
    cResult[11] = tmp31;
  } else {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
  }
  let closure_17 = tmp31;
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
    const items4 = [RelationshipStore, first3];
    cResult[12] = items4;
    tmp32 = items4;
  } else {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
  }
  if (cResult[13] === first2) {
    class Y {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        if (null != arg1) {
          closure_11((arg0) => {
            const items = [];
            const obj = { userId, applicationId };
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
            return items;
          });
        } else {
          closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
            return items;
          });
        }
      }
    }
    const tmpResult = tmp(tmp2[31]);
    const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp32, se);
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class Y {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          if (null != arg1) {
            closure_11((arg0) => {
              const items = [];
              const obj = { userId, applicationId };
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
              return items;
            });
          } else {
            closure_7((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
              return items;
            });
          }
        }
      }
      const items5 = [first2, RelationshipStore, first3];
      cResult[16] = items5;
    } else {
      class Y {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          if (null != arg1) {
            closure_11((arg0) => {
              const items = [];
              const obj = { userId, applicationId };
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
              return items;
            });
          } else {
            closure_7((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
              return items;
            });
          }
        }
      }
    }
    if (cResult[17] === first4) {
      let bound;
      class Y {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          if (null != arg1) {
            closure_11((arg0) => {
              const items = [];
              const obj = { userId, applicationId };
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
              return items;
            });
          } else {
            closure_7((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
              return items;
            });
          }
        }
      }
      const tmpResult2 = tmp(tmp2[31]);
      const stateFromStores = tmpResult2.useStateFromStores(tmp34, tmp37, tmp38, areHydratedGameFriendRequestRowStatesEqual);
      const tmp44 = sourcePage(tmp2[32])();
      added = tmp44.added;
      const setAdded = tmp44.setAdded;
      const friendSuggestions = tmp44.friendSuggestions;
      let tmp45 = friendSuggestions.length > 0;
      if (tmp45) {
        class Y {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            if (null != arg1) {
              closure_11((arg0) => {
                const items = [];
                const obj = { userId, applicationId };
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                return items;
              });
            } else {
              closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                return items;
              });
            }
          }
        }
        tmp45 = stateFromStoresArray.length > 3;
      }
      let closure_23 = tmp45;
      let tmp46 = friendSuggestions.length > 0;
      if (tmp46) {
        class Y {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            if (null != arg1) {
              closure_11((arg0) => {
                const items = [];
                const obj = { userId, applicationId };
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                return items;
              });
            } else {
              closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                return items;
              });
            }
          }
        }
        tmp46 = stateFromStores.length > 3;
      }
      closure_24 = tmp46;
      if (closure_24) {
        class Y {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            if (null != arg1) {
              closure_11((arg0) => {
                const items = [];
                const obj = { userId, applicationId };
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                return items;
              });
            } else {
              closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                return items;
              });
            }
          }
        }
        bound = Math.min(stateFromStores.length, 3);
      } else {
        class Y {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            if (null != arg1) {
              closure_11((arg0) => {
                const items = [];
                const obj = { userId, applicationId };
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                return items;
              });
            } else {
              closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                return items;
              });
            }
          }
        }
      }
      if (cResult[21] === stateFromStores) {
        class Y {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            if (null != arg1) {
              closure_11((arg0) => {
                const items = [];
                const obj = { userId, applicationId };
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                return items;
              });
            } else {
              closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                return items;
              });
            }
          }
        }
        sourcePage(analyticsLocations[33])(tmp48);
        if (cResult[24] !== navigation) {
          class Y {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              if (null != arg1) {
                closure_11((arg0) => {
                  const items = [];
                  const obj = { userId, applicationId };
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                  return items;
                });
              } else {
                closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                  return items;
                });
              }
            }
          }
          tmp56[0] = navigation;
          cResult[24] = navigation;
          cResult[25] = tmp56;
        } else {
          class Y {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              if (null != arg1) {
                closure_11((arg0) => {
                  const items = [];
                  const obj = { userId, applicationId };
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                  return items;
                });
              } else {
                closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                  return items;
                });
              }
            }
          }
        }
        closure_25(tmp56);
        const tmp60 = closure_24();
        closure_25 = tmp60;
        if (tmp60) {
          class Y {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              if (null != arg1) {
                closure_11((arg0) => {
                  const items = [];
                  const obj = { userId, applicationId };
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                  return items;
                });
              } else {
                closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                  return items;
                });
              }
            }
          }
        }
        if (!tmp45) {
          class Y {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              if (null != arg1) {
                closure_11((arg0) => {
                  const items = [];
                  const obj = { userId, applicationId };
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                  return items;
                });
              } else {
                closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                  return items;
                });
              }
            }
          }
        }
        if (!tmp46) {
          class Y {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              if (null != arg1) {
                closure_11((arg0) => {
                  const items = [];
                  const obj = { userId, applicationId };
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                  return items;
                });
              } else {
                closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                  return items;
                });
              }
            }
          }
        }
        if (cResult[26] === friendSuggestions.length) {
          class Y {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              if (null != arg1) {
                closure_11((arg0) => {
                  const items = [];
                  const obj = { userId, applicationId };
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                  return items;
                });
              } else {
                closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                  return items;
                });
              }
            }
          }
        }
        const items6 = [num, 4, 4, friendSuggestions.length];
        cResult[26] = friendSuggestions.length;
        cResult[27] = 1;
        cResult[28] = 4;
        cResult[29] = 4;
        cResult[30] = items6;
      }
      const items7 = [];
      let num20 = 0;
      if (0 < bound) {
        class Y {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            if (null != arg1) {
              closure_11((arg0) => {
                const items = [];
                const obj = { userId, applicationId };
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                return items;
              });
            } else {
              closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                return items;
              });
            }
          }
        }
        while (true) {
          class Y {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              if (null != arg1) {
                closure_11((arg0) => {
                  const items = [];
                  const obj = { userId, applicationId };
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                  return items;
                });
              } else {
                closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                  return items;
                });
              }
            }
          }
          if (null != tmp50) {
            class Y {
              constructor(arg0, arg1) {
                let closure_0 = arg0;
                let closure_1 = arg1;
                if (null != arg1) {
                  closure_11((arg0) => {
                    const items = [];
                    const obj = { userId, applicationId };
                    items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                    return items;
                  });
                } else {
                  closure_7((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                    return items;
                  });
                }
              }
            }
          }
          num20 = num20 + num;
          if (num20 >= bound) {
            class Y {
              constructor(arg0, arg1) {
                let closure_0 = arg0;
                let closure_1 = arg1;
                if (null != arg1) {
                  closure_11((arg0) => {
                    const items = [];
                    const obj = { userId, applicationId };
                    items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                    return items;
                  });
                } else {
                  closure_7((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                    return items;
                  });
                }
              }
            }
          } else {
            class Y {
              constructor(arg0, arg1) {
                let closure_0 = arg0;
                let closure_1 = arg1;
                if (null != arg1) {
                  closure_11((arg0) => {
                    const items = [];
                    const obj = { userId, applicationId };
                    items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
                    return items;
                  });
                } else {
                  closure_7((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
                    return items;
                  });
                }
              }
            }
          }
        }
      }
      cResult[21] = stateFromStores;
      cResult[22] = bound;
      cResult[23] = items7;
      tmp48 = items7;
    }
    function ue() {
      const gameRelationshipsByType = first2.getGameRelationshipsByType(Y.PENDING_INCOMING);
      const items = [];
      const item = gameRelationshipsByType.forEach((id) => {
        id = id.id;
        const applicationId = id.applicationId;
        const user = UserStore.getUser(id);
        const someResult = RelationshipStore.isSpam(id) || RelationshipStore.isBlockedOrIgnored(id) || null == user || first3.some((userId) => userId.userId === id && userId.applicationId === tmp);
        if (!someResult) {
          const obj2 = { user, applicationId };
          items.push(obj2);
        }
      });
      const items1 = [];
      const item1 = first4.forEach((applicationId) => {
        applicationId = applicationId.applicationId;
        const user = UserStore.getUser(applicationId.userId);
        if (null != user) {
          const obj = { user, applicationId };
          items1.push(obj);
        }
      });
      let obj = sourcePage(analyticsLocations[29]);
      const unionByResult = obj.unionBy(items1, items, (user) => user.user.id);
      return unionByResult.sort((user, user2) => {
        const obj = items1(analyticsLocations[30]);
        const name = obj.getName(user.user);
        const localeCompare = name.localeCompare;
        const obj2 = items1(analyticsLocations[30]);
        return localeCompare(obj2.getName(user2.user));
      });
    }
    const items8 = [first4, first3];
    cResult[17] = first4;
    cResult[18] = first3;
    cResult[19] = ue;
    cResult[20] = items8;
  }
  se = function se() {
    const items = [];
    const mutableRelationships = RelationshipStore.getMutableRelationships();
    const keys = mutableRelationships.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (RelationshipStore.isUnfilteredPendingIncoming(nextResult)) {
        let user = UserStore.getUser(tmp3);
        let hasItem = null == user;
        let tmp8 = user;
        if (!hasItem) {
          hasItem = first1.includes(tmp3);
        }
        if (!hasItem) {
          let arr = items.push(tmp8);
        }
      }
      continue;
    }
    const items1 = [];
    const item = first2.forEach((item) => {
      user = user.getUser(item);
      if (null != user) {
        items1.push(user);
      }
    });
    let obj2 = _modDef12;
    const unionByResult = obj2.unionBy(items1, items, (id) => id.id);
    return unionByResult.sort((arg0, arg1) => {
      const obj = sourcePage(analyticsLocations[30]);
      const name = obj.getName(arg0);
      const localeCompare = name.localeCompare;
      const obj2 = sourcePage(analyticsLocations[30]);
      return localeCompare(obj2.getName(arg1));
    });
  };
  cResult[13] = first2;
  cResult[14] = first1;
  cResult[15] = se;
}) : ((navigation) => {
  let Icon;
  let TableRow;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c20;
  let c21;
  let c6;
  let c7;
  let c8;
  let c9;
  let closure_11;
  let closure_13;
  let closure_3;
  let first;
  let first1;
  let friendSuggestions;
  let intl;
  let items11;
  let obj13;
  let obj14;
  let obj9;
  let tmp30Result3;
  navigation = navigation.navigation;
  const sourcePage = navigation.route.params.sourcePage;
  let analyticsLocations;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  first = undefined;
  closure_11 = undefined;
  first1 = undefined;
  closure_13 = undefined;
  c20 = undefined;
  c21 = undefined;
  friendSuggestions = undefined;
  let closure_23;
  closure_24 = undefined;
  closure_25 = undefined;
  let memo1;
  let callback1;
  let tmp = c20();
  const tmp2 = sourcePage;
  let tmp3 = analyticsLocations;
  const tmp4 = sourcePage(analyticsLocations[22]);
  analyticsLocations = tmp4(sourcePage(analyticsLocations[23]).ADD_FRIENDS).analyticsLocations;
  const tmp5 = sourcePage(analyticsLocations[24])();
  _slicedToArray = tmp5;
  let tmp6 = navigation;
  let obj = navigation(analyticsLocations[25]);
  const userRowWithSubLabelHeight = obj.useUserRowWithSubLabelHeight(1);
  let obj2 = navigation(analyticsLocations[25]);
  const userRowWithSubLabelHeight1 = obj2.useUserRowWithSubLabelHeight(2);
  let obj3 = userRowWithSubLabelHeight1;
  [c6, c7] = userRowWithSubLabelHeight1.useState([]);
  _slicedToArray(userRowWithSubLabelHeight1.useState([]), 2);
  [c8, c9] = userRowWithSubLabelHeight1.useState([]);
  _slicedToArray(userRowWithSubLabelHeight1.useState([]), 2);
  [first, closure_11] = userRowWithSubLabelHeight1.useState([]);
  [first1, closure_13] = userRowWithSubLabelHeight1.useState([]);
  let closure_14 = userRowWithSubLabelHeight1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null != arg1) {
      closure_13((arg0) => {
        const items = [];
        const obj = { userId, applicationId };
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
        return items;
      });
    } else {
      _undefined4((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
        return items;
      });
    }
  }, []);
  constants = userRowWithSubLabelHeight1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null != arg1) {
      closure_11((arg0) => {
        const items = [];
        const obj = { userId, applicationId };
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
        return items;
      });
    } else {
      _undefined2((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
        return items;
      });
    }
  }, []);
  const tmp15 = sourcePage(analyticsLocations[27])(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { friend_add_type: map1.FRIENDS_ADD_FRIENDS_MODAL, source_page: sourcePage };
    obj.track(first1.FRIEND_ADD_VIEWED, obj2);
  });
  let items = [navigation];
  const onPress = userRowWithSubLabelHeight1.useCallback(() => {
    navigation.navigate("username-search");
  }, items);
  let items1 = [analyticsLocations];
  let closure_17 = userRowWithSubLabelHeight1.useCallback((id) => {
    const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations, location: "Add Friends Modal User Profile" };
    showUserProfileActionSheetDefault(obj);
  }, items1);
  const obj4 = navigation(analyticsLocations[31]);
  const items2 = [c9, first];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items2, () => {
    const items = [];
    const mutableRelationships = RelationshipStore.getMutableRelationships();
    const keys = mutableRelationships.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (RelationshipStore.isUnfilteredPendingIncoming(nextResult)) {
        let user = UserStore.getUser(tmp3);
        let hasItem = null == user;
        let tmp8 = user;
        if (!hasItem) {
          hasItem = _undefined.includes(tmp3);
        }
        if (!hasItem) {
          let arr = items.push(tmp8);
        }
      }
      continue;
    }
    const items1 = [];
    const item = _undefined3.forEach((item) => {
      user = user.getUser(item);
      if (null != user) {
        items1.push(user);
      }
    });
    let obj2 = _modDef12;
    const unionByResult = obj2.unionBy(items1, items, (id) => id.id);
    return unionByResult.sort((arg0, arg1) => {
      const obj = sourcePage(analyticsLocations[30]);
      const name = obj.getName(arg0);
      const localeCompare = name.localeCompare;
      const obj2 = sourcePage(analyticsLocations[30]);
      return localeCompare(obj2.getName(arg1));
    });
  });
  const obj5 = navigation(analyticsLocations[31]);
  const items3 = [c8, c9, first];
  const items4 = [first1, first];
  const stateFromStores = obj5.useStateFromStores(items3, () => {
    const gameRelationshipsByType = _undefined3.getGameRelationshipsByType(constants.PENDING_INCOMING);
    const items = [];
    const item = gameRelationshipsByType.forEach((id) => {
      id = id.id;
      const applicationId = id.applicationId;
      const user = UserStore.getUser(id);
      const someResult = RelationshipStore.isSpam(id) || RelationshipStore.isBlockedOrIgnored(id) || null == user || first.some((userId) => userId.userId === id && userId.applicationId === tmp);
      if (!someResult) {
        const obj2 = { user, applicationId };
        items.push(obj2);
      }
    });
    const items1 = [];
    const item1 = first1.forEach((applicationId) => {
      applicationId = applicationId.applicationId;
      const user = UserStore.getUser(applicationId.userId);
      if (null != user) {
        const obj = { user, applicationId };
        items1.push(obj);
      }
    });
    let obj = sourcePage(analyticsLocations[29]);
    const unionByResult = obj.unionBy(items1, items, (user) => user.user.id);
    return unionByResult.sort((user, user2) => {
      const obj = items1(analyticsLocations[30]);
      const name = obj.getName(user.user);
      const localeCompare = name.localeCompare;
      const obj2 = items1(analyticsLocations[30]);
      return localeCompare(obj2.getName(user2.user));
    });
  }, items4, memo1);
  ({ added: c20, setAdded: c21, friendSuggestions } = sourcePage(analyticsLocations[32])());
  let tmp18 = friendSuggestions.length > 0;
  sourcePage(analyticsLocations[32])();
  if (tmp18) {
    let num = 3;
    tmp18 = stateFromStoresArray.length > 3;
  }
  closure_23 = tmp18;
  let tmp19 = friendSuggestions.length > 0;
  if (tmp19) {
    let num2 = 3;
    tmp19 = stateFromStores.length > 3;
  }
  closure_24 = tmp19;
  const items5 = [stateFromStores, tmp19];
  const memo = obj3.useMemo(() => {
    let num2;
    if (closure_24) {
      const _Math = Math;
      let length = Math.min(stateFromStores.length, 3);
    } else {
      length = stateFromStores.length;
    }
    const items = [];
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp6 = stateFromStores[num2];
      if (null != tmp6) {
        let arr = items.push(tmp6.applicationId);
      }
    }
    return items;
  }, items5);
  tmp2(tmp3[33])(memo);
  const tmp22 = closure_25({ navigation });
  const tmp23 = closure_24();
  closure_25 = tmp23;
  const items6 = [stateFromStoresArray.length, friendSuggestions.length, stateFromStores.length, tmp23, tmp18, tmp19];
  memo1 = obj3.useMemo(() => {
    let num = 1;
    if (closure_25) {
      num = 2;
    }
    const items = [num, , , ];
    let num2 = 4;
    let num3 = 4;
    if (!closure_23) {
      num3 = stateFromStoresArray.length;
    }
    items[1] = num3;
    if (!closure_24) {
      num2 = stateFromStores.length;
    }
    items[2] = num2;
    items[3] = friendSuggestions.length;
    return items;
  }, items6);
  const items7 = [memo1, tmp18, tmp19];
  callback1 = obj3.useCallback((arg0, arg1) => {
    let tmp = arg1 === memo1[arg0] - 1;
    if (stateFromStores.INCOMING_FRIEND_REQUESTS === arg0) {
      if (tmp) {
        tmp = closure_23;
      }
      return tmp;
    } else if (tmp2.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
      return tmp && closure_24;
    } else {
      return false;
    }
  }, items7);
  const items8 = [callback1, tmp5, userRowWithSubLabelHeight, userRowWithSubLabelHeight1, friendSuggestions];
  const callback2 = obj3.useCallback((arg0) => {
    let intl;
    let intl2;
    let intl3;
    let obj2;
    let obj3;
    if (stateFromStores.FIND_FRIENDS !== arg0) {
      if (stateFromStores.INCOMING_FRIEND_REQUESTS === arg0) {
        const element = { type: "section", props };
        props = { title: intl3.string(navigation(analyticsLocations[16]).t["93cLE3"]) };
        intl3 = navigation(analyticsLocations[16]).intl;
        return element;
      } else if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        const element1 = { type: "section", props: obj2 };
        obj2 = { title: intl2.string(navigation(analyticsLocations[16]).t["0uVuaU"]) };
        intl2 = navigation(analyticsLocations[16]).intl;
        return element1;
      } else if (stateFromStores.CONTACT_SUGGESTIONS === arg0) {
        const element2 = { type: "section", props: obj3 };
        obj3 = { title: intl.string(navigation(analyticsLocations[16]).t["1uAmCw"]) };
        intl = navigation(analyticsLocations[16]).intl;
        return element2;
      }
    }
  }, []);
  const callback3 = obj3.useCallback((arg0, arg1) => {
    if (callback1(arg0, arg1)) {
      return closure_3;
    } else if (stateFromStores.FIND_FRIENDS === arg0) {
      return closure_3;
    } else {
      if (stateFromStores.INCOMING_FRIEND_REQUESTS !== arg0) {
        if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS !== arg0) {
          if (stateFromStores.CONTACT_SUGGESTIONS === arg0) {
            let mutualFriendsCount;
            if (friendSuggestions[arg1] != null) {
              mutualFriendsCount = tmp4.mutualFriendsCount;
            }
            let tmp7 = null != mutualFriendsCount;
            if (tmp7) {
              let mutualFriendsCount1;
              if (friendSuggestions[arg1] != null) {
                mutualFriendsCount1 = tmp4.mutualFriendsCount;
              }
              tmp7 = mutualFriendsCount1 > 0;
            }
            return tmp7 ? userRowWithSubLabelHeight1 : userRowWithSubLabelHeight;
          } else {
            return closure_3;
          }
        }
      }
      return userRowWithSubLabelHeight;
    }
  }, items8);
  const obj6 = { value: analyticsLocations, children: null };
  const AnalyticsLocationProvider = tmp6(tmp3[22]).AnalyticsLocationProvider;
  const items9 = [closure_17(tmp2(tmp3[40]), { absolute: true }), ];
  let obj7 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.inviteAppsContainerNonSticky, children: closure_17(tmp2(tmp3[41]), obj9) };
  obj9 = { onItemPressed: friendSuggestions, contentContainerStyle: tmp.inviteAppsContentContainer };
  const items10 = [closure_17(c6, obj8), ];
  if (!tmp22) {
    let tmp30Result;
    if (!(0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length)) {
      const obj10 = { style: tmp.loading, children: closure_17(tmp6(tmp3[42]).ActivityIndicator, {}) };
      tmp30Result = tmp30(tmp31, obj10);
    }
    items10[1] = tmp30Result;
    obj7.children = items10;
    items9[1] = stateFromStoresArray(c6, obj7);
    obj6.children = items9;
    return stateFromStoresArray(AnalyticsLocationProvider, obj6);
  }
  if (0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length) {
    const obj11 = { style: tmp.emptyContainer, children: items11 };
    const obj12 = { style: tmp.emptyActionContainer, children: closure_17(TableRow, obj13) };
    obj13 = { label: intl.string(tmp6(tmp3[16]).t.QzVsOs), labelLineClamp: 1, icon: closure_17(Icon, obj14), arrow: true, onPress, start: true, end: true };
    TableRow = tmp6(tmp3[34]).TableRow;
    intl = tmp6(tmp3[16]).intl;
    obj14 = { IconComponent: tmp6(tmp3[36]).AtIcon };
    Icon = tmp6(tmp3[34]).TableRow.Icon;
    items11 = [closure_17(c6, obj12), ];
    let tmp30Result2 = null;
    const tmp34 = c7;
    if (tmp23) {
      tmp30Result2 = tmp30(tmp2(tmp3[44]), {});
    }
    items11[1] = tmp30Result2;
    tmp30Result3 = tmp29(tmp34, obj11);
  } else {
    const obj15 = {
      sections: memo1,
      getItemProps(disableThemedGradient, arg1) {
          let onAcceptIncomingRequest;
          let onDeclineIncomingRequest;
          let onPress2;
          let onPress3;
          let tmp = 0 === arg1;
          const start = tmp;
          const end = arg1 === memo1[disableThemedGradient] - 1;
          if (stateFromStores.FIND_FRIENDS === disableThemedGradient) {
            if (tmp) {
              let obj3;
              if (closure_25) {
                let obj2 = {
                  type: "custom",
                  itemType: "showContactSyncCTA",
                  key: "showContactSyncCTA",
                  component() {
                          let Icon;
                          let intl;
                          let obj2;
                          const obj = { start: true, height: "100%", label: intl.string(start(user[16]).t.j2POVo), labelLineClamp: 1, icon: onPress2(Icon, obj2), trailing: onPress2(start(user[34]).TableRow.Arrow, {}), onPress: onPress3 };
                          const TableRow = start(user[34]).TableRow;
                          intl = start(user[16]).intl;
                          obj2 = { IconComponent: start(user[35]).FriendsIcon };
                          Icon = start(user[34]).TableRow.Icon;
                          return onPress2(TableRow, obj);
                        }
                };
                obj3 = obj2;
              }
              return obj3;
            }
            obj3 = {
              type: "custom",
              itemType: "addByUsername",
              key: "addByUsername",
              component() {
                  let Icon;
                  let intl;
                  let obj2;
                  const obj = { start: !closure_1_25, end: true, height: "100%", label: intl.string(navigation(analyticsLocations[16]).t.QzVsOs), labelLineClamp: 1, icon: onPress2(Icon, obj2), arrow: true, onPress };
                  const TableRow = navigation(analyticsLocations[34]).TableRow;
                  intl = navigation(analyticsLocations[16]).intl;
                  obj2 = { IconComponent: navigation(analyticsLocations[36]).AtIcon };
                  Icon = navigation(analyticsLocations[34]).TableRow.Icon;
                  return onPress2(TableRow, obj);
                }
            };
          } else {
            let user;
            if (stateFromStores.INCOMING_FRIEND_REQUESTS === disableThemedGradient) {
              if (callback1(disableThemedGradient, arg1)) {
                return {
                  type: "custom",
                  itemType: "viewAll",
                  key: "friendRequestsViewAll",
                  component() {
                          let length;
                          let obj = {
                            onPress() {
                              const obj = end(user[26]);
                              const obj2 = { section_id: constants.PENDING, truncated_count: 3, expanded_count: length.length, location: "AddFriends" };
                              obj.track(constants2.FRIEND_FINDER_SECTION_EXPANDED, obj2);
                              navigation.navigate("requests");
                            },
                            users: stateFromStoresArray.slice(3),
                            count: stateFromStoresArray.length
                          };
                          const tmp = sourcePage(analyticsLocations[37]);
                          return onPress2(tmp, obj);
                        }
                };
              } else {
                user = tmp15;
                return {
                  type: "custom",
                  itemType: "incomingRequest",
                  key: stateFromStoresArray[arg1].id,
                  component() {
                          const obj = { accepted: c8.includes(user.id), user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest };
                          const IncomingFriendRequestRow = IncomingRequestRow.IncomingFriendRequestRow;
                          return onPress2(IncomingFriendRequestRow, obj);
                        }
                };
              }
            } else if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS === disableThemedGradient) {
              if (callback1(disableThemedGradient, arg1)) {
                return {
                  type: "custom",
                  itemType: "viewAll",
                  key: "gameFriendRequestsViewAll",
                  component() {
                          let substr;
                          const obj = {
                            onPress() {
                              navigation.navigate("requests");
                            },
                            users: substr.map((user) => user.user),
                            count: stateFromStores.length
                          };
                          const tmp = sourcePage(analyticsLocations[37]);
                          substr = stateFromStores.slice(3);
                          return onPress2(tmp, obj);
                        }
                };
              } else {
                user = tmp11.user;
                const applicationId = tmp11.applicationId;
                const _HermesInternal = HermesInternal;
                const obj7 = {
                  type: "custom",
                  itemType: "incomingRequest",
                  key: "" + user.id + "-" + applicationId,
                  component() {
                          let id;
                          const obj = { accepted: null != first1.find((userId) => userId.userId === id.id && userId.applicationId === tmp), applicationId, user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest };
                          const ConnectedIncomingGameFriendRequestRow = IncomingRequestRow.ConnectedIncomingGameFriendRequestRow;
                          return onPress2(ConnectedIncomingGameFriendRequestRow, obj);
                        }
                };
                return obj7;
              }
            } else if (stateFromStores.CONTACT_SUGGESTIONS === disableThemedGradient) {
              const suggestedFriend = tmp4;
              let mutualFriendsCount;
              if (friendSuggestions[arg1] != null) {
                mutualFriendsCount = tmp4.mutualFriendsCount;
              }
              let tmp7 = null != mutualFriendsCount;
              if (tmp7) {
                let mutualFriendsCount1;
                if (friendSuggestions[arg1] != null) {
                  mutualFriendsCount1 = tmp4.mutualFriendsCount;
                }
                tmp7 = mutualFriendsCount1 > 0;
              }
              let str = "contactSuggestionNoMutualCount";
              if (tmp7) {
                str = "contactSuggestionMutualCount";
              }
              let obj = {
                type: "custom",
                itemType: str,
                key: friendSuggestions[arg1].user.id,
                component() {
                      const obj = {
                        added: c20.includes(suggestedFriend),
                        suggestedFriend,
                        start,
                        end,
                        onPress: onPress2,
                        location: onAcceptIncomingRequest.ADD_FRIENDS_MODAL,
                        onAddSuggestion() {
                          return onPress3((arg0) => {
                            const items = [];
                            items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_5;
                            return items;
                          });
                        }
                      };
                      const ContactSuggestionRow = ContactSuggestionRow2.ContactSuggestionRow;
                      return onPress2(ContactSuggestionRow, obj);
                    }
              };
              return obj;
            }
          }
        },
      getSectionProps: callback2,
      getItemSize: callback3,
      insetEnd: 12,
      disableStickySections: true
    };
    tmp30Result3 = tmp30(tmp6(tmp3[43]).UsersFastList, obj15);
  }
  tmp30Result = tmp30Result3;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx");

export default tmp6;