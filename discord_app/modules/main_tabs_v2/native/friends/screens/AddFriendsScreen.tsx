// === Module 16936: AddFriendsScreen ===

// Module 16936 (AddFriendsScreen)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8054 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12325 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12329 */;
import IncomingRequestRow from "IncomingRequestRow" /* 16939 */;
import ContactSuggestionRow from "ContactSuggestionRow" /* 16941 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7142 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function handleFindFriends() {
  ContactSyncModalActionCreators.openContactSyncModal({}, __initData2.FRIENDS_ADD_FRIENDS_MODAL);
}
function handleShare() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _handleShare() {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  await InstantInviteActionCreatorsDefault.createFriendInvite(null, constants.ADD_FRIENDS_MODAL);
  const code = value.code;
  const obj8 = { channel: null, code, message: null, location: null };
  const intl2 = closure_130_0(closure_130_2[16]).intl;
  obj8.message = intl2.formatToPlainString(closure_130_0(closure_130_2[16]).t.PJf9P9, { link: closure_130_1(closure_130_2[17])(code) });
  obj8.location = closure_130_14.ADD_FRIENDS_MODAL;
  closure_129_0(obj8);
  await "IconComponent";
  const intl = closure_130_0(closure_130_2[16]).intl;
  closure_130_0(closure_130_2[15]).presentError(intl.string(closure_130_0(closure_130_2[16]).t.R0RpRX));
  { link: closure_130_1(closure_130_2[17])(code) };
};
function areHydratedGameFriendRequestRowStatesEqual(arr, arg1) {
  dependencyMap = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((user, index) => user.user === dependencyMap[index].user && user.applicationId === dependencyMap[index].applicationId);
    const tmp2 = arr.length === arg1.length && arr.every((user, index) => user.user === dependencyMap[index].user && user.applicationId === dependencyMap[index].applicationId);
  }
  return tmp;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Sections = fn(12348).Sections;
const Constants = fn(1085);
({ AnalyticEvents: closure_12, AnalyticsSections: map1, InstantInviteSources: closure_14, RelationshipTypes: closure_15 } = Constants);
let ContactPermissions = fn(12327).ContactPermissions;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { FIND_FRIENDS: 0, [0]: "FIND_FRIENDS", INCOMING_FRIEND_REQUESTS: 1, [1]: "INCOMING_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS: 2, [2]: "INCOMING_GAME_FRIEND_REQUESTS", CONTACT_SUGGESTIONS: 3, [3]: "CONTACT_SUGGESTIONS" };
const createStyles = fn(4890);
let obj2 = { container: { flex: 1 }, inviteAppsContainerNonSticky: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: nativeDefault.space.PX_16 }, inviteAppsContentContainer: { paddingTop: 0, paddingBottom: 0, minWidth: "100%" }, emptyContainer: null, emptyActionContainer: null, loading: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: nativeDefault.space.PX_16 };
obj2.emptyContainer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.emptyActionContainer = { marginHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let obj5 = { marginHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.loading = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
let closure_20 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(4);
  let obj = require("c");
  const contactSyncAccount = require("ContactSyncUtils").useContactSyncAccount();
  if (cResult[0] !== contactSyncAccount) {
    const isContactSyncEnabledResult = tmp(12329).isContactSyncEnabled(contactSyncAccount);
    cResult[0] = contactSyncAccount;
    cResult[1] = isContactSyncEnabledResult;
    let tmp5 = isContactSyncEnabledResult;
    let tmpResult = tmp(12329);
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  _require = tmp7[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      if (obj.isContactSyncAvailable()) {
        const result = ContactSyncUtils.checkContactPermissions();
        result.then((result) => {
          const obj = closure_0(dependencyMap[21]);
          let tmp3 = result === constants.NOT_DETERMINED;
          if (!tmp3) {
            tmp3 = tmp2;
          }
          closure_1_0(tmp3);
          tmp2 = closure_0(dependencyMap[21]).isAndroid() && result === constants.UNAUTHORIZED;
        });
        const tmpResult = ContactSyncUtils;
      }
      obj = ContactSyncUtils;
    };
    const items = [];
    cResult[2] = fn;
    cResult[3] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  const obj2 = require("ContactSyncUtils");
  let result = require("ContactSyncUtils").isContactSyncAvailable();
  if (result) {
    let first = !tmp5;
    if (tmp5) {
      first = tmp7[0];
    }
    result = first;
  }
  return result;
}) : (() => {
  const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
  const isContactSyncEnabledResult = ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
  [tmp4, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    if (obj.isContactSyncAvailable()) {
      const result = ContactSyncUtils.checkContactPermissions();
      result.then((result) => {
        const obj = require("PlatformUtils");
        let tmp3 = result === constants.NOT_DETERMINED;
        if (!tmp3) {
          tmp3 = tmp2;
        }
        closure_1_0(tmp3);
        tmp2 = require("PlatformUtils").isAndroid() && result === constants.UNAUTHORIZED;
      });
      const tmpResult = ContactSyncUtils;
    }
    obj = ContactSyncUtils;
  }, []);
  let tmp3 = _slicedToArray(noop.useState(false), 2);
  let result = ContactSyncUtils.isContactSyncAvailable();
  if (result) {
    let tmp7 = !isContactSyncEnabledResult;
    if (isContactSyncEnabledResult) {
      tmp7 = tmp4;
    }
    result = tmp7;
  }
  return result;
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = c.c(3);
  navigation = navigation.navigation;
  [tmp3, importDefault] = noop.useState(false);
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
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  return tmp3;
}) : ((navigation) => {
  navigation = navigation.navigation;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp[1];
  const items = [navigation];
  const effect = noop.useEffect(() => navigation.addListener("transitionEnd", () => {
    closure_1_1(true);
  }), items);
  return tmp[0];
});
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = navigation(analyticsLocations[19]).c(80);
  navigation = navigation.navigation;
  const sourcePage = navigation.route.params.sourcePage;
  added();
  let obj = navigation(analyticsLocations[19]);
  analyticsLocations = sourcePage(analyticsLocations[22])(sourcePage(analyticsLocations[23]).ADD_FRIENDS).analyticsLocations;
  let tmp6 = sourcePage(analyticsLocations[22]);
  _slicedToArray = sourcePage(analyticsLocations[24])();
  let tmp7 = sourcePage(analyticsLocations[24])();
  const userRowWithSubLabelHeight = navigation(analyticsLocations[25]).useUserRowWithSubLabelHeight(1);
  let obj2 = navigation(analyticsLocations[25]);
  const userRowWithSubLabelHeight1 = navigation(analyticsLocations[25]).useUserRowWithSubLabelHeight(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  [first1, closure_7] = userRowWithSubLabelHeight1.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [];
    cResult[num] = items1;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[1];
  }
  [first2, RelationshipStore] = userRowWithSubLabelHeight1.useState(tmp14);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    cResult[2] = items2;
    let tmp17 = items2;
  } else {
    tmp17 = cResult[2];
  }
  [first3, Sections] = userRowWithSubLabelHeight1.useState(tmp17);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [];
    cResult[3] = items3;
    let tmp20 = items3;
  } else {
    tmp20 = cResult[3];
  }
  [first4, closure_13] = userRowWithSubLabelHeight1.useState(tmp20);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_13;
          tmp4 = closure_13((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_9;
          tmp2 = closure_9((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    cResult[4] = X;
  } else {
    class X {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_13;
          tmp4 = closure_13((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_9;
          tmp2 = closure_9((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  closure_14 = X;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    cResult[5] = Y;
  } else {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  constants = Y;
  if (cResult[6] !== sourcePage) {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    cResult[6] = sourcePage;
    cResult[7] = tmp26;
  } else {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  sourcePage(analyticsLocations[27])(tmp26);
  if (cResult[8] !== navigation) {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    cResult[8] = navigation;
    cResult[9] = tmp29;
  } else {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  ContactPermissions = tmp29;
  if (cResult[10] !== analyticsLocations) {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    cResult[10] = analyticsLocations;
    cResult[11] = tmp31;
  } else {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  closure_17 = tmp31;
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    const items4 = [RelationshipStore, first3];
    cResult[12] = items4;
    const tmp32 = items4;
  } else {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
  }
  if (cResult[13] === first2) {
    class Y {
      constructor(arg0, arg1) {
        closure_0 = navigation;
        closure_1 = arg1;
        if (null != arg1) {
          tmp3 = closure_11;
          tmp4 = closure_11((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
            return items;
          });
        } else {
          tmp = closure_7;
          tmp2 = closure_7((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items;
          });
        }
        return;
      }
    }
    const stateFromStoresArray = tmp(tmp2[31]).useStateFromStoresArray(tmp32, se);
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class Y {
        constructor(arg0, arg1) {
          closure_0 = navigation;
          closure_1 = arg1;
          if (null != arg1) {
            tmp3 = closure_11;
            tmp4 = closure_11((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
              return items;
            });
          } else {
            tmp = closure_7;
            tmp2 = closure_7((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
              return items;
            });
          }
          return;
        }
      }
      const items5 = [first2, RelationshipStore, first3];
      cResult[16] = items5;
    } else {
      class Y {
        constructor(arg0, arg1) {
          closure_0 = navigation;
          closure_1 = arg1;
          if (null != arg1) {
            tmp3 = closure_11;
            tmp4 = closure_11((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
              return items;
            });
          } else {
            tmp = closure_7;
            tmp2 = closure_7((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
              return items;
            });
          }
          return;
        }
      }
    }
    if (cResult[17] === first4) {
      class Y {
        constructor(arg0, arg1) {
          closure_0 = navigation;
          closure_1 = arg1;
          if (null != arg1) {
            tmp3 = closure_11;
            tmp4 = closure_11((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
              return items;
            });
          } else {
            tmp = closure_7;
            tmp2 = closure_7((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
              return items;
            });
          }
          return;
        }
      }
      const tmpResult2 = tmp(tmp2[31]);
      const stateFromStores = tmpResult2.useStateFromStores(tmp34, tmp37, tmp38, areHydratedGameFriendRequestRowStatesEqual);
      const tmp44 = tmp5(tmp2[32])();
      added = tmp44.added;
      const setAdded = tmp44.setAdded;
      const friendSuggestions = tmp44.friendSuggestions;
      let tmp45 = friendSuggestions.length > 0;
      if (tmp45) {
        class Y {
          constructor(arg0, arg1) {
            closure_0 = navigation;
            closure_1 = arg1;
            if (null != arg1) {
              tmp3 = closure_11;
              tmp4 = closure_11((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                return items;
              });
            } else {
              tmp = closure_7;
              tmp2 = closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                return items;
              });
            }
            return;
          }
        }
        tmp45 = stateFromStoresArray.length > 3;
      }
      closure_23 = tmp45;
      let tmp46 = friendSuggestions.length > 0;
      if (tmp46) {
        class Y {
          constructor(arg0, arg1) {
            closure_0 = navigation;
            closure_1 = arg1;
            if (null != arg1) {
              tmp3 = closure_11;
              tmp4 = closure_11((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                return items;
              });
            } else {
              tmp = closure_7;
              tmp2 = closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                return items;
              });
            }
            return;
          }
        }
        tmp46 = stateFromStores.length > 3;
      }
      closure_24 = tmp46;
      if (tmp46) {
        class Y {
          constructor(arg0, arg1) {
            closure_0 = navigation;
            closure_1 = arg1;
            if (null != arg1) {
              tmp3 = closure_11;
              tmp4 = closure_11((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                return items;
              });
            } else {
              tmp = closure_7;
              tmp2 = closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                return items;
              });
            }
            return;
          }
        }
        const bound = Math.min(stateFromStores.length, 3);
      } else {
        class Y {
          constructor(arg0, arg1) {
            closure_0 = navigation;
            closure_1 = arg1;
            if (null != arg1) {
              tmp3 = closure_11;
              tmp4 = closure_11((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                return items;
              });
            } else {
              tmp = closure_7;
              tmp2 = closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                return items;
              });
            }
            return;
          }
        }
      }
      if (cResult[21] === stateFromStores) {
        class Y {
          constructor(arg0, arg1) {
            closure_0 = navigation;
            closure_1 = arg1;
            if (null != arg1) {
              tmp3 = closure_11;
              tmp4 = closure_11((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                return items;
              });
            } else {
              tmp = closure_7;
              tmp2 = closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                return items;
              });
            }
            return;
          }
        }
        sourcePage(analyticsLocations[33])(tmp48);
        if (cResult[24] !== navigation) {
          class Y {
            constructor(arg0, arg1) {
              closure_0 = navigation;
              closure_1 = arg1;
              if (null != arg1) {
                tmp3 = closure_11;
                tmp4 = closure_11((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                  return items;
                });
              } else {
                tmp = closure_7;
                tmp2 = closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                  return items;
                });
              }
              return;
            }
          }
          tmp56[0] = navigation;
          cResult[24] = navigation;
          cResult[25] = tmp56;
        } else {
          class Y {
            constructor(arg0, arg1) {
              closure_0 = navigation;
              closure_1 = arg1;
              if (null != arg1) {
                tmp3 = closure_11;
                tmp4 = closure_11((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                  return items;
                });
              } else {
                tmp = closure_7;
                tmp2 = closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                  return items;
                });
              }
              return;
            }
          }
        }
        const tmp58 = closure_25(tmp56);
        const tmp60 = closure_24();
        closure_25 = tmp60;
        if (!tmp58) {
          class Y {
            constructor(arg0, arg1) {
              closure_0 = navigation;
              closure_1 = arg1;
              if (null != arg1) {
                tmp3 = closure_11;
                tmp4 = closure_11((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                  return items;
                });
              } else {
                tmp = closure_7;
                tmp2 = closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                  return items;
                });
              }
              return;
            }
          }
        }
        if (tmp60) {
          class Y {
            constructor(arg0, arg1) {
              closure_0 = navigation;
              closure_1 = arg1;
              if (null != arg1) {
                tmp3 = closure_11;
                tmp4 = closure_11((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                  return items;
                });
              } else {
                tmp = closure_7;
                tmp2 = closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                  return items;
                });
              }
              return;
            }
          }
        }
        if (!tmp45) {
          class Y {
            constructor(arg0, arg1) {
              closure_0 = navigation;
              closure_1 = arg1;
              if (null != arg1) {
                tmp3 = closure_11;
                tmp4 = closure_11((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                  return items;
                });
              } else {
                tmp = closure_7;
                tmp2 = closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                  return items;
                });
              }
              return;
            }
          }
        }
        if (!tmp46) {
          class Y {
            constructor(arg0, arg1) {
              closure_0 = navigation;
              closure_1 = arg1;
              if (null != arg1) {
                tmp3 = closure_11;
                tmp4 = closure_11((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                  return items;
                });
              } else {
                tmp = closure_7;
                tmp2 = closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                  return items;
                });
              }
              return;
            }
          }
        }
        if (cResult[26] === friendSuggestions.length) {
          class Y {
            constructor(arg0, arg1) {
              closure_0 = navigation;
              closure_1 = arg1;
              if (null != arg1) {
                tmp3 = closure_11;
                tmp4 = closure_11((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                  return items;
                });
              } else {
                tmp = closure_7;
                tmp2 = closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                  return items;
                });
              }
              return;
            }
          }
        }
        const items6 = [num, 4, 4, friendSuggestions.length];
        cResult[26] = friendSuggestions.length;
        cResult[27] = num;
        cResult[28] = 4;
        cResult[29] = 4;
        cResult[30] = items6;
      }
      const items7 = [];
      let num20 = 0;
      if (0 < bound) {
        class Y {
          constructor(arg0, arg1) {
            closure_0 = navigation;
            closure_1 = arg1;
            if (null != arg1) {
              tmp3 = closure_11;
              tmp4 = closure_11((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                return items;
              });
            } else {
              tmp = closure_7;
              tmp2 = closure_7((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                return items;
              });
            }
            return;
          }
        }
        while (true) {
          class Y {
            constructor(arg0, arg1) {
              closure_0 = navigation;
              closure_1 = arg1;
              if (null != arg1) {
                tmp3 = closure_11;
                tmp4 = closure_11((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                  return items;
                });
              } else {
                tmp = closure_7;
                tmp2 = closure_7((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                  return items;
                });
              }
              return;
            }
          }
          if (null != tmp50) {
            class Y {
              constructor(arg0, arg1) {
                closure_0 = navigation;
                closure_1 = arg1;
                if (null != arg1) {
                  tmp3 = closure_11;
                  tmp4 = closure_11((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                    return items;
                  });
                } else {
                  tmp = closure_7;
                  tmp2 = closure_7((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                    return items;
                  });
                }
                return;
              }
            }
          }
          num20 = num20 + num;
          if (num20 >= bound) {
            class Y {
              constructor(arg0, arg1) {
                closure_0 = navigation;
                closure_1 = arg1;
                if (null != arg1) {
                  tmp3 = closure_11;
                  tmp4 = closure_11((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                    return items;
                  });
                } else {
                  tmp = closure_7;
                  tmp2 = closure_7((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                    return items;
                  });
                }
                return;
              }
            }
          } else {
            class Y {
              constructor(arg0, arg1) {
                closure_0 = navigation;
                closure_1 = arg1;
                if (null != arg1) {
                  tmp3 = closure_11;
                  tmp4 = closure_11((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
                    return items;
                  });
                } else {
                  tmp = closure_7;
                  tmp2 = closure_7((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                    return items;
                  });
                }
                return;
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
      const gameRelationshipsByType = first2.getGameRelationshipsByType(constants.PENDING_INCOMING);
      const items = [];
      const item = gameRelationshipsByType.forEach((id) => {
        id = id.id;
        const applicationId = id.applicationId;
        const user = UserStore.getUser(id);
        let someResult = RelationshipStore.isSpam(id) || RelationshipStore.isBlockedOrIgnored(id);
        if (!someResult) {
          someResult = null == user;
        }
        if (!someResult) {
          someResult = first3.some((userId) => userId.userId === id && userId.applicationId === tmp);
        }
        if (!someResult) {
          const obj2 = { user, applicationId };
          items.push(obj2);
        }
      });
      const items1 = [];
      const item1 = first4.forEach((userId) => {
        const user = UserStore.getUser(userId.userId);
        if (null != user) {
          const obj = { user, applicationId: userId.applicationId };
          items1.push(obj);
        }
      });
      let obj = sourcePage(analyticsLocations[29]);
      return sourcePage(analyticsLocations[29]).unionBy(items1, items, (user) => user.user.id).sort((user, user2) => {
        const name = items1(4722).getName(user.user);
        const obj = items1(4722);
        return name.localeCompare(items1(4722).getName(user2.user));
      });
    }
    const items8 = [first4, first3];
    cResult[17] = first4;
    cResult[18] = first3;
    cResult[19] = ue;
    cResult[20] = items8;
    const tmpResult = tmp(tmp2[31]);
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
      const user = first3.getUser(item);
      if (null != user) {
        items1.push(user);
      }
    });
    return _modDef12.unionBy(items1, items, (id) => id.id).sort((arg0, arg1) => {
      const name = sourcePage(4722).getName(arg0);
      const obj = sourcePage(4722);
      return name.localeCompare(sourcePage(4722).getName(arg1));
    });
  };
  cResult[13] = first2;
  cResult[14] = first1;
  cResult[15] = se;
  let obj3 = navigation(analyticsLocations[25]);
}) : ((navigation) => {
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
  closure_23 = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  let memo1;
  let callback1;
  let tmp = c20();
  let tmp2 = sourcePage;
  let obj = analyticsLocations;
  analyticsLocations = sourcePage(analyticsLocations[22])(sourcePage(analyticsLocations[23]).ADD_FRIENDS).analyticsLocations;
  const tmp4 = sourcePage(analyticsLocations[24])();
  _slicedToArray = tmp4;
  let tmp3 = sourcePage(analyticsLocations[22]);
  const userRowWithSubLabelHeight = navigation(analyticsLocations[25]).useUserRowWithSubLabelHeight(1);
  let obj2 = navigation(analyticsLocations[25]);
  const userRowWithSubLabelHeight1 = navigation(analyticsLocations[25]).useUserRowWithSubLabelHeight(2);
  let obj3 = navigation(analyticsLocations[25]);
  [c6, c7] = userRowWithSubLabelHeight1.useState([]);
  let tmp8 = _slicedToArray(userRowWithSubLabelHeight1.useState([]), 2);
  [c8, c9] = userRowWithSubLabelHeight1.useState([]);
  [first, closure_11] = userRowWithSubLabelHeight1.useState([]);
  [first1, closure_13] = userRowWithSubLabelHeight1.useState([]);
  closure_14 = userRowWithSubLabelHeight1.useCallback((userId, applicationId) => {
    if (null != applicationId) {
      closure_13((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
        return items;
      });
    } else {
      _undefined4((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }, []);
  constants = userRowWithSubLabelHeight1.useCallback((userId, applicationId) => {
    if (null != applicationId) {
      closure_11((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
        return items;
      });
    } else {
      _undefined2((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }, []);
  sourcePage(analyticsLocations[27])(() => {
    AnalyticsUtilsDefault.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: __initData2.FRIENDS_ADD_FRIENDS_MODAL, source_page: sourcePage });
  });
  let items = [navigation];
  const onPress = userRowWithSubLabelHeight1.useCallback(() => {
    navigation.navigate("username-search");
  }, items);
  let items1 = [analyticsLocations];
  closure_17 = userRowWithSubLabelHeight1.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations, location: "Add Friends Modal User Profile" });
  }, items1);
  const tmp9 = _slicedToArray(userRowWithSubLabelHeight1.useState([]), 2);
  const items2 = [c9, first];
  const stateFromStoresArray = navigation(analyticsLocations[31]).useStateFromStoresArray(items2, () => {
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
      const user = first.getUser(item);
      if (null != user) {
        items1.push(user);
      }
    });
    return _modDef12.unionBy(items1, items, (id) => id.id).sort((arg0, arg1) => {
      const name = sourcePage(4722).getName(arg0);
      const obj = sourcePage(4722);
      return name.localeCompare(sourcePage(4722).getName(arg1));
    });
  });
  let obj5 = navigation(analyticsLocations[31]);
  const items3 = [c8, c9, first];
  const items4 = [first1, first];
  const stateFromStores = navigation(analyticsLocations[31]).useStateFromStores(items3, () => {
    const gameRelationshipsByType = _undefined3.getGameRelationshipsByType(constants.PENDING_INCOMING);
    const items = [];
    const item = gameRelationshipsByType.forEach((id) => {
      id = id.id;
      const applicationId = id.applicationId;
      const user = UserStore.getUser(id);
      let someResult = RelationshipStore.isSpam(id) || RelationshipStore.isBlockedOrIgnored(id);
      if (!someResult) {
        someResult = null == user;
      }
      if (!someResult) {
        someResult = first.some((userId) => userId.userId === id && userId.applicationId === tmp);
      }
      if (!someResult) {
        const obj2 = { user, applicationId };
        items.push(obj2);
      }
    });
    const items1 = [];
    const item1 = first1.forEach((userId) => {
      const user = UserStore.getUser(userId.userId);
      if (null != user) {
        const obj = { user, applicationId: userId.applicationId };
        items1.push(obj);
      }
    });
    let obj = sourcePage(analyticsLocations[29]);
    return sourcePage(analyticsLocations[29]).unionBy(items1, items, (user) => user.user.id).sort((user, user2) => {
      const name = items1(4722).getName(user.user);
      const obj = items1(4722);
      return name.localeCompare(items1(4722).getName(user2.user));
    });
  }, items4, memo1);
  let obj6 = navigation(analyticsLocations[31]);
  ({ added: c20, setAdded: c21, friendSuggestions } = sourcePage(analyticsLocations[32])());
  let tmp17 = friendSuggestions.length > 0;
  if (tmp17) {
    tmp17 = stateFromStoresArray.length > 3;
  }
  closure_23 = tmp17;
  let tmp18 = friendSuggestions.length > 0;
  if (tmp18) {
    tmp18 = stateFromStores.length > 3;
  }
  closure_24 = tmp18;
  const items5 = [stateFromStores, tmp18];
  const memo = obj4.useMemo(() => {
    if (closure_24) {
      const _Math = Math;
      let length = Math.min(stateFromStores.length, 3);
    } else {
      length = stateFromStores.length;
    }
    const items = [];
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp5 = stateFromStores[num2];
      if (null != tmp5) {
        let arr = items.push(tmp5.applicationId);
      }
    }
    return items;
  }, items5);
  tmp2(obj[33])(memo);
  const tmp16 = sourcePage(analyticsLocations[32])();
  const tmp22 = closure_24();
  closure_25 = tmp22;
  const items6 = [stateFromStoresArray.length, friendSuggestions.length, stateFromStores.length, tmp22, tmp17, tmp18];
  memo1 = obj4.useMemo(() => {
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
  const items7 = [memo1, tmp17, tmp18];
  callback1 = obj4.useCallback((arg0, arg1) => {
    let tmp = arg1 === memo1[arg0] - 1;
    if (stateFromStores.INCOMING_FRIEND_REQUESTS === arg0) {
      if (tmp) {
        tmp = closure_23;
      }
      return tmp;
    } else if (tmp2.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
      let tmp3 = tmp;
      if (tmp) {
        tmp3 = closure_24;
      }
      return tmp3;
    } else {
      return false;
    }
  }, items7);
  const items8 = [callback1, tmp4, userRowWithSubLabelHeight, userRowWithSubLabelHeight1, friendSuggestions];
  const callback2 = obj4.useCallback((arg0) => {
    if (stateFromStores.FIND_FRIENDS !== arg0) {
      if (stateFromStores.INCOMING_FRIEND_REQUESTS === arg0) {
        const element = { type: "section", props: null };
        const obj = { title: null };
        const intl3 = navigation(analyticsLocations[16]).intl;
        obj.title = intl3.string(navigation(analyticsLocations[16]).t["93cLE3"]);
        element.props = obj;
        return element;
      } else if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        const element1 = { type: "section", props: null };
        const obj2 = { title: null };
        const intl2 = navigation(analyticsLocations[16]).intl;
        obj2.title = intl2.string(navigation(analyticsLocations[16]).t["0uVuaU"]);
        element1.props = obj2;
        return element1;
      } else if (stateFromStores.CONTACT_SUGGESTIONS === arg0) {
        const element2 = { type: "section", props: null };
        const obj3 = { title: null };
        const intl = navigation(analyticsLocations[16]).intl;
        obj3.title = intl.string(navigation(analyticsLocations[16]).t["1uAmCw"]);
        element2.props = obj3;
        return element2;
      }
    }
  }, []);
  const callback3 = obj4.useCallback((arg0, arg1) => {
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
              if (tmp4 != null) {
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
  let obj7 = { value: analyticsLocations, children: null };
  const items9 = [closure_17(tmp2(obj[40]), { absolute: true }), ];
  const obj8 = { style: tmp.container, children: null };
  const obj9 = { style: tmp.inviteAppsContainerNonSticky, children: closure_17(tmp2(obj[41]), { onItemPressed: friendSuggestions, contentContainerStyle: tmp.inviteAppsContentContainer }) };
  const items10 = [closure_17(c6, obj9), ];
  if (!tmp21) {
    if (!tmp23) {
      const obj11 = { style: tmp.loading, children: tmp29(tmp5(obj[42]).ActivityIndicator, {}) };
      items10[1] = tmp29(tmp30, obj11);
      obj8.children = items10;
      items9[1] = tmp28(tmp30, obj8);
      obj7.children = items9;
      return tmp28(tmp5(obj[22]).AnalyticsLocationProvider, obj7);
    }
  }
  if (0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length) {
    const obj12 = { style: tmp.emptyContainer, children: null };
    const obj13 = { style: tmp.emptyActionContainer, children: null };
    const obj14 = { label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null, start: true, end: true };
    let intl = tmp5(obj[16]).intl;
    obj14.label = intl.string(tmp5(obj[16]).t.QzVsOs);
    const obj15 = { IconComponent: tmp5(obj[36]).AtIcon };
    obj14.icon = tmp29(tmp5(obj[34]).TableRow.Icon, obj15);
    obj14.onPress = onPress;
    obj13.children = tmp29(tmp5(obj[34]).TableRow, obj14);
    const items11 = [tmp29(tmp30, obj13), ];
    tmp = null;
    if (tmp22) {
      tmp2 = tmp2(obj[44]);
      obj = {};
      tmp = tmp29(tmp2, obj);
    }
    items11[1] = tmp;
    obj12.children = items11;
    tmp28(c7, obj12);
  } else {
    const obj16 = {
      sections: memo1,
      getItemProps(disableThemedGradient, arg1) {
          const start = tmp;
          const end = arg1 === memo1[disableThemedGradient] - 1;
          if (stateFromStores.FIND_FRIENDS === disableThemedGradient) {
            if (tmp) {
              if (closure_25) {
                const obj2 = {
                  type: "custom",
                  itemType: "showContactSyncCTA",
                  key: "showContactSyncCTA",
                  component() {
                          const obj = { start: true, height: "100%", label: null, labelLineClamp: 1, icon: null, trailing: null, onPress: null };
                          const intl = start(user[16]).intl;
                          obj.label = intl.string(start(user[16]).t.j2POVo);
                          obj.icon = onPress2(start(user[34]).TableRow.Icon, { IconComponent: start(user[35]).FriendsIcon });
                          obj.trailing = onPress2(start(user[34]).TableRow.Arrow, {});
                          obj.onPress = onPress3;
                          return onPress2(start(user[34]).TableRow, obj);
                        }
                };
                let obj3 = obj2;
              }
              return obj3;
            }
            obj3 = {
              type: "custom",
              itemType: "addByUsername",
              key: "addByUsername",
              component() {
                  const obj = { start: !closure_1_25, end: true, height: "100%", label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null };
                  const intl = navigation(analyticsLocations[16]).intl;
                  obj.label = intl.string(navigation(analyticsLocations[16]).t.QzVsOs);
                  obj.icon = onPress2(navigation(analyticsLocations[34]).TableRow.Icon, { IconComponent: navigation(analyticsLocations[36]).AtIcon });
                  obj.onPress = onPress;
                  return onPress2(navigation(analyticsLocations[34]).TableRow, obj);
                }
            };
          } else if (stateFromStores.INCOMING_FRIEND_REQUESTS === disableThemedGradient) {
            if (callback1(disableThemedGradient, arg1)) {
              const obj4 = {
                type: "custom",
                itemType: "viewAll",
                key: "friendRequestsViewAll",
                component() {
                      const obj = {
                        onPress() {
                          closure_1(closure_2[26]).track(constants2.FRIEND_FINDER_SECTION_EXPANDED, { section_id: constants.PENDING, truncated_count: 3, expanded_count: length.length, location: "AddFriends" });
                          navigation.navigate("requests");
                        },
                        users: stateFromStoresArray.slice(3),
                        count: stateFromStoresArray.length
                      };
                      return onPress2(sourcePage(analyticsLocations[37]), obj);
                    }
              };
              return obj4;
            } else {
              let user = tmp15;
              const obj5 = {
                type: "custom",
                itemType: "incomingRequest",
                key: stateFromStoresArray[arg1].id,
                component() {
                      return constants(IncomingRequestRow.IncomingFriendRequestRow, { accepted: c8.includes(user.id), user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest });
                    }
              };
              return obj5;
            }
          } else if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS === disableThemedGradient) {
            if (callback1(disableThemedGradient, arg1)) {
              const obj6 = {
                type: "custom",
                itemType: "viewAll",
                key: "gameFriendRequestsViewAll",
                component() {
                      const obj = {
                        onPress() {
                          navigation.navigate("requests");
                        },
                        users: null,
                        count: null
                      };
                      const substr = stateFromStores.slice(3);
                      obj.users = substr.map((user) => user.user);
                      obj.count = stateFromStores.length;
                      return onPress2(sourcePage(analyticsLocations[37]), obj);
                    }
              };
              return obj6;
            } else {
              user = tmp11.user;
              const applicationId = tmp11.applicationId;
              const obj7 = { type: "custom", itemType: "incomingRequest", key: null, component: null };
              const _HermesInternal = HermesInternal;
              obj7.key = "" + user.id + "-" + applicationId;
              obj7.component = function component() {
                return constants(IncomingRequestRow.ConnectedIncomingGameFriendRequestRow, { accepted: null != first1.find((userId) => userId.userId === id.id && userId.applicationId === tmp), applicationId, user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest });
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
              if (tmp4 != null) {
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
                  return constants(ContactSuggestionRow.ContactSuggestionRow, {
                    added: c20.includes(suggestedFriend),
                    suggestedFriend,
                    start,
                    end,
                    onPress: onPress2,
                    location: constants2.ADD_FRIENDS_MODAL,
                    onAddSuggestion() {
                      return onPress3((arg0) => {
                        const items = [];
                        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_1_5;
                        return items;
                      });
                    }
                  });
                }
            };
            return obj;
          }
        },
      getSectionProps: callback2,
      getItemSize: callback3,
      insetEnd: 12,
      disableStickySections: true
    };
    tmp29(tmp5(obj[43]).UsersFastList, obj16);
  }
});