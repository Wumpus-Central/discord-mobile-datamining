// === Module 16965: IncomingRequestRow ===

// Module 16965 (IncomingRequestRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import UserRowConstants from "UserRowConstants" /* 10605 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12309 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16010 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let closure_3 = ["user", "applicationId", "accepted", "onAcceptIncomingRequest", "onDeclineIncomingRequest", "accessibilityLabel", "acceptRequestAccessibilityLabel", "ignoreRequestAccessibilityLabel", "acceptedRequestLabel", "acceptedRequestAccessibilityLabel"];
let user = ["user"];
let closure_5 = ["user", "application"];
let closure_6 = ["user", "applicationId"];
const UserRowModes = UserRowConstants.UserRowModes;
const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
const constants = { ACCEPT: "accept", DECLINE: "decline", WAVE: "wave" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let acceptRequestAccessibilityLabel;
  let acceptedRequestAccessibilityLabel;
  let acceptedRequestLabel;
  let accessibilityLabel;
  let closure_0;
  let closure_2;
  let ignoreRequestAccessibilityLabel;
  let obj7;
  let tmp10;
  let tmp19;
  let tmp20;
  let tmp4;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let obj = require("react");
  const cResult = obj.c(57);
  if (cResult[0] !== user) {
    user = user.user;
    const applicationId = user.applicationId;
    importDefault = applicationId;
    const accepted = user.accepted;
    _require = accepted;
    const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
    dependencyMap = onAcceptIncomingRequest;
    const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
    closure_3 = onDeclineIncomingRequest;
    ({ accessibilityLabel, acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel, acceptedRequestLabel, acceptedRequestAccessibilityLabel } = user);
    cResult[0] = user;
    cResult[1] = acceptRequestAccessibilityLabel;
    cResult[2] = accepted;
    cResult[3] = acceptedRequestAccessibilityLabel;
    cResult[4] = acceptedRequestLabel;
    cResult[5] = accessibilityLabel;
    cResult[6] = applicationId;
    cResult[7] = ignoreRequestAccessibilityLabel;
    cResult[8] = onAcceptIncomingRequest;
    cResult[9] = onDeclineIncomingRequest;
    cResult[10] = _objectWithoutProperties(user, closure_3);
    cResult[11] = user;
    tmp10 = ignoreRequestAccessibilityLabel;
    tmp7 = acceptedRequestLabel;
    tmp6 = acceptedRequestAccessibilityLabel;
    tmp4 = acceptRequestAccessibilityLabel;
    const tmp17 = _objectWithoutProperties(user, closure_3);
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    importDefault = cResult[6];
    tmp10 = cResult[7];
    dependencyMap = cResult[8];
    closure_3 = cResult[9];
    user = cResult[11];
  }
  const tmpResult = require("ReanimatedRexport");
  const sharedValue = tmpResult.useSharedValue(false);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function x() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[12] = items;
    cResult[13] = fn;
    tmp20 = fn;
    tmp19 = items;
  } else {
    tmp19 = cResult[12];
    tmp20 = cResult[13];
  }
  const tmpResult3 = require("useStateFromStores");
  const stateFromStores = tmpResult3.useStateFromStores(tmp19, tmp20);
  if (cResult[14] === tmp5) {
    let tmp23;
    let tmp24;
    if (cResult[15] === sharedValue) {
      tmp23 = cResult[16];
      tmp24 = cResult[17];
    }
    const effect = react.useEffect(tmp23, tmp24);
    if (cResult[18] === tmp4) {
      if (cResult[19] === tmp5) {
        if (cResult[20] === tmp10) {
          if (cResult[23] === tmp9) {
            if (cResult[24] === tmp11) {
              if (cResult[25] === tmp12) {
                if (cResult[26] === sharedValue) {
                  let tmp35;
                  let tmp37;
                  let str;
                  const tmp33 = importDefault;
                  class M {
                    constructor(nativeEvent) {
                      const actionName = nativeEvent.nativeEvent.actionName;
                      if (constants.ACCEPT === actionName) {
                        const result = sharedValue.set(true);
                        closure_2(user.id, applicationId);
                        const obj3 = { userId: user.id, applicationId };
                        const obj4 = AddFriendsScreenUtils;
                        return obj4.acceptIncomingRequest(obj3);
                      } else if (constants.DECLINE === actionName) {
                        closure_3(user.id, applicationId);
                        const obj5 = { userId: user.id, applicationId };
                        const obj2 = AddFriendsScreenUtils;
                        return obj2.dismissIncomingRequest(obj5);
                      } else if (constants.WAVE === actionName) {
                        const obj = AddFriendsScreenUtils;
                        return obj.sendWave(user.id, true, "Incoming Friend Request");
                      }
                    }
                  }
                  const _Symbol = Symbol;
                  const userTag = obj8.useUserTag(tmp14);
                  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                    const items1 = [];
                    class M {
                      constructor(nativeEvent) {
                        const actionName = nativeEvent.nativeEvent.actionName;
                        if (constants.ACCEPT === actionName) {
                          const result = sharedValue.set(true);
                          closure_2(user.id, applicationId);
                          const obj3 = { userId: user.id, applicationId };
                          const obj4 = AddFriendsScreenUtils;
                          return obj4.acceptIncomingRequest(obj3);
                        } else if (constants.DECLINE === actionName) {
                          closure_3(user.id, applicationId);
                          const obj5 = { userId: user.id, applicationId };
                          const obj2 = AddFriendsScreenUtils;
                          return obj2.dismissIncomingRequest(obj5);
                        } else if (constants.WAVE === actionName) {
                          const obj = AddFriendsScreenUtils;
                          return obj.sendWave(user.id, true, "Incoming Friend Request");
                        }
                      }
                    }
                    cResult[29] = items1;
                    tmp35 = items1;
                  } else {
                    tmp35 = cResult[29];
                  }
                  if (cResult[30] !== tmp9) {
                    const fn3 = function k() {
                      return ApplicationStore.getApplication(applicationId);
                    };
                    class M {
                      constructor(nativeEvent) {
                        const actionName = nativeEvent.nativeEvent.actionName;
                        if (constants.ACCEPT === actionName) {
                          const result = sharedValue.set(true);
                          closure_2(user.id, applicationId);
                          const obj3 = { userId: user.id, applicationId };
                          const obj4 = AddFriendsScreenUtils;
                          return obj4.acceptIncomingRequest(obj3);
                        } else if (constants.DECLINE === actionName) {
                          closure_3(user.id, applicationId);
                          const obj5 = { userId: user.id, applicationId };
                          const obj2 = AddFriendsScreenUtils;
                          return obj2.dismissIncomingRequest(obj5);
                        } else if (constants.WAVE === actionName) {
                          const obj = AddFriendsScreenUtils;
                          return obj.sendWave(user.id, true, "Incoming Friend Request");
                        }
                      }
                    }
                    cResult[31] = fn3;
                    tmp37 = fn3;
                  } else {
                    tmp37 = cResult[31];
                  }
                  const tmpResult4 = require("useStateFromStores");
                  const stateFromStores1 = tmpResult4.useStateFromStores(tmp35, tmp37);
                  if (null != stateFromStores1) {
                    let tmp40;
                    if (cResult[32] !== stateFromStores1) {
                      class M {
                        constructor(nativeEvent) {
                          const actionName = nativeEvent.nativeEvent.actionName;
                          if (constants.ACCEPT === actionName) {
                            const result = sharedValue.set(true);
                            closure_2(user.id, applicationId);
                            const obj3 = { userId: user.id, applicationId };
                            const obj4 = AddFriendsScreenUtils;
                            return obj4.acceptIncomingRequest(obj3);
                          } else if (constants.DECLINE === actionName) {
                            closure_3(user.id, applicationId);
                            const obj5 = { userId: user.id, applicationId };
                            const obj2 = AddFriendsScreenUtils;
                            return obj2.dismissIncomingRequest(obj5);
                          } else if (constants.WAVE === actionName) {
                            const obj = AddFriendsScreenUtils;
                            return obj.sendWave(user.id, true, "Incoming Friend Request");
                          }
                        }
                      }
                      const tmp42 = jsx(tmp33(12309), { application: null, textVariant: "text-xs/medium", iconSize: 12 }, stateFromStores1.id);
                      cResult[32] = stateFromStores1;
                      cResult[33] = tmp42;
                      tmp40 = tmp42;
                    } else {
                      tmp40 = cResult[33];
                    }
                    str = tmp40;
                  } else {
                    str = "";
                    if (null == tmp9) {
                      str = userTag;
                    }
                  }
                  if (cResult[34] === tmp6) {
                    if (cResult[35] === tmp7) {
                      if (cResult[36] === str) {
                        if (cResult[37] === sharedValue) {
                          class M {
                            constructor(nativeEvent) {
                              const actionName = nativeEvent.nativeEvent.actionName;
                              if (constants.ACCEPT === actionName) {
                                const result = sharedValue.set(true);
                                closure_2(user.id, applicationId);
                                const obj3 = { userId: user.id, applicationId };
                                const obj4 = AddFriendsScreenUtils;
                                return obj4.acceptIncomingRequest(obj3);
                              } else if (constants.DECLINE === actionName) {
                                closure_3(user.id, applicationId);
                                const obj5 = { userId: user.id, applicationId };
                                const obj2 = AddFriendsScreenUtils;
                                return obj2.dismissIncomingRequest(obj5);
                              } else if (constants.WAVE === actionName) {
                                const obj = AddFriendsScreenUtils;
                                return obj.sendWave(user.id, true, "Incoming Friend Request");
                              }
                            }
                          }
                          cResult[40] = tmp4;
                          cResult[41] = tmp9;
                          cResult[42] = tmp10;
                          cResult[43] = tmp11;
                          cResult[44] = tmp12;
                          cResult[45] = sharedValue;
                          cResult[46] = !stateFromStores;
                          cResult[47] = tmp14;
                          cResult[48] = jsx(require("IncomingRequestRowActions").IncomingRequestRowActions, { user: tmp14, pressed: sharedValue, applicationId: tmp9, onAcceptIncomingRequest: tmp11, onDeclineIncomingRequest: tmp12, animate: !stateFromStores, acceptRequestAccessibilityLabel: tmp4, ignoreRequestAccessibilityLabel: tmp10 });
                          const tmp50 = jsx(require("IncomingRequestRowActions").IncomingRequestRowActions, { user: tmp14, pressed: sharedValue, applicationId: tmp9, onAcceptIncomingRequest: tmp11, onDeclineIncomingRequest: tmp12, animate: !stateFromStores, acceptRequestAccessibilityLabel: tmp4, ignoreRequestAccessibilityLabel: tmp10 });
                        }
                      }
                    }
                  }
                  cResult[34] = tmp6;
                  cResult[35] = tmp7;
                  cResult[36] = str;
                  cResult[37] = sharedValue;
                  cResult[38] = !stateFromStores;
                  cResult[39] = jsx(require("ActionStatusSubLabel").ActionStatusSubLabel, { actioned: sharedValue, label: str, actionStatus: tmp7, actionStatusAccessibilityLabel: tmp6, animate: !stateFromStores });
                  const tmp46 = jsx(require("ActionStatusSubLabel").ActionStatusSubLabel, { actioned: sharedValue, label: str, actionStatus: tmp7, actionStatusAccessibilityLabel: tmp6, animate: !stateFromStores });
                }
              }
            }
          }
          class M {
            constructor(nativeEvent) {
              const actionName = nativeEvent.nativeEvent.actionName;
              if (constants.ACCEPT === actionName) {
                const result = sharedValue.set(true);
                closure_2(user.id, applicationId);
                const obj3 = { userId: user.id, applicationId };
                const obj4 = AddFriendsScreenUtils;
                return obj4.acceptIncomingRequest(obj3);
              } else if (constants.DECLINE === actionName) {
                closure_3(user.id, applicationId);
                const obj5 = { userId: user.id, applicationId };
                const obj2 = AddFriendsScreenUtils;
                return obj2.dismissIncomingRequest(obj5);
              } else if (constants.WAVE === actionName) {
                const obj = AddFriendsScreenUtils;
                return obj.sendWave(user.id, true, "Incoming Friend Request");
              }
            }
          }
          cResult[23] = tmp9;
          cResult[24] = tmp11;
          cResult[25] = tmp12;
          cResult[26] = sharedValue;
          cResult[27] = tmp14;
          cResult[28] = M;
        }
      }
    }
    let obj5 = { name: null, label: null };
    if (tmp5) {
      obj5.name = constants.WAVE;
      const intl = tmp(1126).intl;
      class M {
        constructor(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if (constants.ACCEPT === actionName) {
            const result = sharedValue.set(true);
            closure_2(user.id, applicationId);
            const obj3 = { userId: user.id, applicationId };
            const obj4 = AddFriendsScreenUtils;
            return obj4.acceptIncomingRequest(obj3);
          } else if (constants.DECLINE === actionName) {
            closure_3(user.id, applicationId);
            const obj5 = { userId: user.id, applicationId };
            const obj2 = AddFriendsScreenUtils;
            return obj2.dismissIncomingRequest(obj5);
          } else if (constants.WAVE === actionName) {
            const obj = AddFriendsScreenUtils;
            return obj.sendWave(user.id, true, "Incoming Friend Request");
          }
        }
      }
      const obj6 = { username: obj7.getName(tmp14) };
      const m0zYbV = tmp(1126).t.m0zYbV;
      obj7 = UserUtilsDefault;
      obj5.label = tmp30(m0zYbV, obj6);
      const items2 = [obj5];
    } else {
      obj5.name = constants.ACCEPT;
      obj5.label = tmp4;
      class M {
        constructor(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if (constants.ACCEPT === actionName) {
            const result = sharedValue.set(true);
            closure_2(user.id, applicationId);
            const obj3 = { userId: user.id, applicationId };
            const obj4 = AddFriendsScreenUtils;
            return obj4.acceptIncomingRequest(obj3);
          } else if (constants.DECLINE === actionName) {
            closure_3(user.id, applicationId);
            const obj5 = { userId: user.id, applicationId };
            const obj2 = AddFriendsScreenUtils;
            return obj2.dismissIncomingRequest(obj5);
          } else if (constants.WAVE === actionName) {
            const obj = AddFriendsScreenUtils;
            return obj.sendWave(user.id, true, "Incoming Friend Request");
          }
        }
      }
      tmp29[0] = obj5;
      const obj9 = { name: constants.DECLINE, label: tmp10 };
      tmp29[1] = obj9;
    }
    cResult[18] = tmp4;
    cResult[19] = tmp5;
    cResult[20] = tmp10;
    cResult[21] = tmp14;
    cResult[22] = tmp29;
  }
  const fn2 = function w() {
    const result = sharedValue.set(closure_0);
  };
  const items3 = [tmp5, sharedValue];
  cResult[14] = tmp5;
  cResult[15] = sharedValue;
  cResult[16] = fn2;
  cResult[17] = items3;
  tmp24 = items3;
  tmp23 = fn2;
}) : ((user) => {
  let acceptedRequestAccessibilityLabel;
  let acceptedRequestLabel;
  let accessibilityLabel;
  user = user.user;
  const applicationId = user.applicationId;
  const accepted = user.accepted;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const acceptRequestAccessibilityLabel = user.acceptRequestAccessibilityLabel;
  const ignoreRequestAccessibilityLabel = user.ignoreRequestAccessibilityLabel;
  ({ accessibilityLabel, acceptedRequestLabel, acceptedRequestAccessibilityLabel } = user);
  const merged = Object.assign(user, Object.assign({ user: 0, applicationId: 0, accepted: 0, onAcceptIncomingRequest: 0, onDeclineIncomingRequest: 0, accessibilityLabel: 0, acceptRequestAccessibilityLabel: 0, ignoreRequestAccessibilityLabel: 0, acceptedRequestLabel: 0, acceptedRequestAccessibilityLabel: 0 }));
  let userTag;
  let stateFromStores1;
  let obj = user(accepted[9]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = user(accepted[10]);
  let items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.useReducedMotion);
  let items1 = [accepted, sharedValue];
  const effect = userTag.useEffect(() => {
    const result = sharedValue.set(accepted);
  }, items1);
  const items2 = [acceptRequestAccessibilityLabel, accepted, ignoreRequestAccessibilityLabel, user];
  const items3 = [applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, sharedValue, user];
  const memo = userTag.useMemo(() => {
    let items1;
    let obj4;
    const obj = { name: null, label: null };
    if (accepted) {
      obj.name = constants.WAVE;
      const intl = intl6.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj2 = { username: obj4.getName(user) };
      const m0zYbV = intl6.t.m0zYbV;
      obj4 = UserUtilsDefault;
      obj.label = formatToPlainString(m0zYbV, obj2);
      const items = [obj];
      items1 = items;
    } else {
      obj.name = constants.ACCEPT;
      obj.label = acceptRequestAccessibilityLabel;
      items1 = [obj, ];
      const obj3 = { name: constants.DECLINE, label: ignoreRequestAccessibilityLabel };
      items1[1] = obj3;
    }
    return items1;
  }, items2);
  const callback = userTag.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (constants.ACCEPT === actionName) {
      const result = sharedValue.set(true);
      onAcceptIncomingRequest(user.id, applicationId);
      const obj3 = { userId: user.id, applicationId };
      const obj4 = AddFriendsScreenUtils;
      return obj4.acceptIncomingRequest(obj3);
    } else if (constants.DECLINE === actionName) {
      onDeclineIncomingRequest(user.id, applicationId);
      const obj5 = { userId: user.id, applicationId };
      const obj2 = AddFriendsScreenUtils;
      return obj2.dismissIncomingRequest(obj5);
    } else if (constants.WAVE === actionName) {
      const obj = AddFriendsScreenUtils;
      return obj.sendWave(user.id, true, "Incoming Friend Request");
    }
  }, items3);
  let obj3 = applicationId(accepted[12]);
  userTag = obj3.useUserTag(user);
  let obj4 = user(accepted[10]);
  const items4 = [ApplicationStore];
  stateFromStores1 = obj4.useStateFromStores(items4, () => ApplicationStore.getApplication(applicationId));
  const items5 = [stateFromStores1, applicationId, userTag];
  const memo1 = userTag.useMemo(() => {
    let str;
    if (null != stateFromStores1) {
      str = jsx(ApplicationIconAndNameDefault, { application: stateFromStores1, textVariant: "text-xs/medium", iconSize: 12 }, stateFromStores1.id);
    } else {
      str = "";
      if (null == applicationId) {
        str = userTag;
      }
    }
    return str;
  }, items5);
  applicationId(accepted[17]);
  const merged1 = Object.assign(merged);
  return <tmp10 user={user} type={RelationshipTypes.PENDING_INCOMING} mode={UserRowModes.ACTIONS} accessibilityActions={memo} accessibilityLabel={accessibilityLabel} onAccessibilityAction={callback} subLabel={jsx(user(accepted[15]).ActionStatusSubLabel, { actioned: sharedValue, label: memo1, actionStatus: acceptedRequestLabel, actionStatusAccessibilityLabel: acceptedRequestAccessibilityLabel, animate: !stateFromStores })} trailing={jsx(user(accepted[16]).IncomingRequestRowActions, { user, pressed: sharedValue, applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, animate: !stateFromStores, acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel })} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(19);
  if (cResult[0] !== user) {
    user = user.user;
    const tmp8 = _objectWithoutProperties(user, closure_4);
    cResult[0] = user;
    cResult[1] = tmp8;
    cResult[2] = user;
    tmp5 = user;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const obj2 = UserUtilsDefault;
  const userTag = obj2.useUserTag(tmp5);
  if (cResult[3] !== userTag) {
    const intl = intl6.intl;
    const obj3 = { name: userTag };
    const formatToPlainStringResult = intl.formatToPlainString(intl6.t.u6lp4x, obj3);
    cResult[3] = userTag;
    cResult[4] = formatToPlainStringResult;
    tmp10 = formatToPlainStringResult;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl6.intl;
    const stringResult = intl2.string(intl6.t["0E614Z"]);
    cResult[5] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== userTag) {
    const intl3 = intl6.intl;
    const obj4 = { name: userTag };
    const formatToPlainStringResult1 = intl3.formatToPlainString(intl6.t.cRwkp7, obj4);
    cResult[6] = userTag;
    cResult[7] = formatToPlainStringResult1;
    tmp14 = formatToPlainStringResult1;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] !== userTag) {
    const intl4 = intl6.intl;
    const obj5 = { name: userTag };
    const formatToPlainStringResult2 = intl4.formatToPlainString(intl6.t.MUfqsS, obj5);
    cResult[8] = userTag;
    cResult[9] = formatToPlainStringResult2;
    tmp16 = formatToPlainStringResult2;
  } else {
    tmp16 = cResult[9];
  }
  if (cResult[10] !== userTag) {
    const intl5 = intl6.intl;
    const obj6 = { name: userTag };
    const formatToPlainStringResult3 = intl5.formatToPlainString(intl6.t["0OF9IB"], obj6);
    cResult[10] = userTag;
    cResult[11] = formatToPlainStringResult3;
    tmp18 = formatToPlainStringResult3;
  } else {
    tmp18 = cResult[11];
  }
  if (cResult[12] === tmp4) {
    if (cResult[13] === tmp10) {
      if (cResult[14] === tmp14) {
        if (cResult[15] === tmp16) {
          if (cResult[16] === tmp18) {
            let tmp20;
            if (cResult[17] === tmp5) {
              tmp20 = cResult[18];
            }
            return tmp20;
          }
        }
      }
    }
  }
  const merged = Object.assign(tmp4);
  const tmp22 = <closure_15 user={tmp5} accessibilityLabel={tmp10} acceptedRequestLabel={tmp12} acceptedRequestAccessibilityLabel={tmp14} acceptRequestAccessibilityLabel={tmp16} ignoreRequestAccessibilityLabel={tmp18} />;
  cResult[12] = tmp4;
  cResult[13] = tmp10;
  cResult[14] = tmp14;
  cResult[15] = tmp16;
  cResult[16] = tmp18;
  cResult[17] = tmp5;
  cResult[18] = tmp22;
  tmp20 = tmp22;
}) : ((user) => {
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  const obj = UserUtilsDefault;
  const userTag = obj.useUserTag(user);
  const intl = intl6.intl;
  const intl2 = intl6.intl;
  const intl3 = intl6.intl;
  const intl4 = intl6.intl;
  const intl5 = intl6.intl;
  const merged1 = Object.assign(merged);
  return <closure_15 user={user} accessibilityLabel={intl.formatToPlainString(intl6.t.u6lp4x, { name: userTag })} acceptedRequestLabel={intl2.string(intl6.t["0E614Z"])} acceptedRequestAccessibilityLabel={intl3.formatToPlainString(intl6.t.cRwkp7, { name: userTag })} acceptRequestAccessibilityLabel={intl4.formatToPlainString(intl6.t.MUfqsS, { name: userTag })} ignoreRequestAccessibilityLabel={intl5.formatToPlainString(intl6.t["0OF9IB"], { name: userTag })} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp6;
  const obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] !== arg0) {
    ({ user, application } = arg0);
    _require = application;
    const tmp9 = _objectWithoutProperties(arg0, closure_5);
    cResult[0] = arg0;
    cResult[1] = application;
    cResult[2] = tmp9;
    cResult[3] = user;
    tmp6 = user;
    tmp5 = tmp9;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const obj2 = UserUtilsDefault;
  const userTag = obj2.useUserTag(tmp6);
  const id = application.id;
  if (cResult[4] !== userTag) {
    const intl = tmp(1126).intl;
    const obj3 = { name: userTag };
    const formatToPlainStringResult = intl.formatToPlainString(require("intl").t.u6lp4x, obj3);
    cResult[4] = userTag;
    cResult[5] = formatToPlainStringResult;
    tmp11 = formatToPlainStringResult;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== application) {
    const intl2 = tmp(1126).intl;
    const obj4 = {
      applicationNameHook() {
          return jsx(ApplicationIconAndNameDefault, { application, textVariant: "text-xs/medium", iconSize: 12 }, application.id);
        }
    };
    const formatResult = intl2.format(require("intl").t.gRgJGR, obj4);
    cResult[6] = application;
    cResult[7] = formatResult;
    tmp13 = formatResult;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === application.name) {
    let tmp15;
    if (cResult[9] === userTag) {
      tmp15 = cResult[10];
    }
    if (cResult[11] === application.name) {
      let tmp17;
      if (cResult[12] === userTag) {
        tmp17 = cResult[13];
      }
      if (cResult[14] === application.name) {
        let tmp19;
        if (cResult[15] === userTag) {
          tmp19 = cResult[16];
        }
        if (cResult[17] === application.id) {
          if (cResult[18] === tmp5) {
            if (cResult[19] === tmp11) {
              if (cResult[20] === tmp13) {
                if (cResult[21] === tmp15) {
                  if (cResult[22] === tmp17) {
                    if (cResult[23] === tmp19) {
                      let tmp21;
                      if (cResult[24] === tmp6) {
                        tmp21 = cResult[25];
                      }
                      return tmp21;
                    }
                  }
                }
              }
            }
          }
        }
        const merged = Object.assign(tmp5);
        const tmp27 = <closure_15 user={tmp6} applicationId={id} accessibilityLabel={tmp11} acceptedRequestLabel={tmp13} acceptedRequestAccessibilityLabel={tmp15} acceptRequestAccessibilityLabel={tmp17} ignoreRequestAccessibilityLabel={tmp19} />;
        cResult[17] = application.id;
        cResult[18] = tmp5;
        cResult[19] = tmp11;
        cResult[20] = tmp13;
        cResult[21] = tmp15;
        cResult[22] = tmp17;
        cResult[23] = tmp19;
        cResult[24] = tmp6;
        cResult[25] = tmp27;
        tmp21 = tmp27;
      }
      const intl5 = tmp(1126).intl;
      const obj6 = { name: userTag, applicationName: application.name };
      const formatToPlainStringResult1 = intl5.formatToPlainString(require("intl").t.d8Cw5e, obj6);
      cResult[14] = application.name;
      cResult[15] = userTag;
      cResult[16] = formatToPlainStringResult1;
      tmp19 = formatToPlainStringResult1;
    }
    const intl4 = tmp(1126).intl;
    const obj7 = { name: userTag, applicationName: application.name };
    const formatToPlainStringResult2 = intl4.formatToPlainString(require("intl").t.kMUpdH, obj7);
    cResult[11] = application.name;
    cResult[12] = userTag;
    cResult[13] = formatToPlainStringResult2;
    tmp17 = formatToPlainStringResult2;
  }
  const intl3 = tmp(1126).intl;
  const obj8 = { name: userTag, applicationName: application.name };
  const formatToPlainStringResult3 = intl3.formatToPlainString(require("intl").t.Ke6fRJ, obj8);
  cResult[8] = application.name;
  cResult[9] = userTag;
  cResult[10] = formatToPlainStringResult3;
  tmp15 = formatToPlainStringResult3;
}) : ((arg0) => {
  let application;
  ({ user, application } = arg0);
  const merged = Object.assign(arg0, Object.assign({ user: 0, application: 0 }));
  const obj = UserUtilsDefault;
  const userTag = obj.useUserTag(user);
  const intl = application(1126).intl;
  const intl2 = application(1126).intl;
  const obj3 = {
    applicationNameHook() {
      return jsx(ApplicationIconAndNameDefault, { application, textVariant: "text-xs/medium", iconSize: 12 }, application.id);
    }
  };
  const intl3 = application(1126).intl;
  const obj4 = { name: userTag, applicationName: application.name };
  const intl4 = application(1126).intl;
  const obj5 = { name: userTag, applicationName: application.name };
  const intl5 = application(1126).intl;
  const obj6 = { name: userTag, applicationName: application.name };
  const merged1 = Object.assign(merged);
  return <closure_15 user={user} applicationId={application.id} accessibilityLabel={intl.formatToPlainString(application(1126).t.u6lp4x, { name: userTag })} acceptedRequestLabel={intl2.format(application(1126).t.gRgJGR, obj3)} acceptedRequestAccessibilityLabel={intl3.formatToPlainString(application(1126).t.Ke6fRJ, obj4)} acceptRequestAccessibilityLabel={intl4.formatToPlainString(application(1126).t.kMUpdH, obj5)} ignoreRequestAccessibilityLabel={intl5.formatToPlainString(application(1126).t.d8Cw5e, obj6)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let closure_0;
  let tmp10;
  let tmp12;
  let tmp5;
  let tmp6;
  const obj = require("react");
  const cResult = obj.c(11);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    ({ user, applicationId } = arg0);
    _require = applicationId;
    const tmp9 = _objectWithoutProperties(arg0, closure_6);
    cResult[0] = arg0;
    cResult[1] = applicationId;
    cResult[2] = tmp9;
    cResult[3] = user;
    tmp6 = user;
    tmp5 = tmp9;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== applicationId) {
    const fn = function b() {
      return ApplicationStore.getApplication(closure_0);
    };
    cResult[5] = applicationId;
    cResult[6] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[6];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
  let tmp14 = null;
  if (null != stateFromStores) {
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === tmp5) {
        let tmp15;
        if (cResult[9] === tmp6) {
          tmp15 = cResult[10];
        }
        tmp14 = tmp15;
      }
    }
    const merged = Object.assign(tmp5);
    const tmp21 = <closure_16 user={tmp6} application={stateFromStores} />;
    cResult[7] = stateFromStores;
    cResult[8] = tmp5;
    cResult[9] = tmp6;
    cResult[10] = tmp21;
    tmp15 = tmp21;
  }
  return tmp14;
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  let tmp = null;
  user = applicationId.user;
  const merged = Object.assign(applicationId, Object.assign({ user: 0, applicationId: 0 }));
  const items = [ApplicationStore];
  const obj = applicationId(573);
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  if (null != stateFromStores) {
    const merged1 = Object.assign(merged);
    tmp = <closure_16 user={user} application={stateFromStores} />;
  }
  return tmp;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx");

export const IncomingFriendRequestRow = tmp2;
export const ConnectedIncomingGameFriendRequestRow = tmp3;