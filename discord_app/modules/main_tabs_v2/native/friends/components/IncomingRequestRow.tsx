// discord_app/modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import ApplicationIconAndNameDefault from "../../../../user_profile/native/ApplicationIconAndName.tsx";
import AddFriendsScreenUtils from "AddFriendsScreenUtils.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import ApplicationStore from "../../../../applications/ApplicationStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = [
  "user",
  "applicationId",
  "accepted",
  "onAcceptIncomingRequest",
  "onDeclineIncomingRequest",
  "accessibilityLabel",
  "acceptRequestAccessibilityLabel",
  "ignoreRequestAccessibilityLabel",
  "acceptedRequestLabel",
  "acceptedRequestAccessibilityLabel",
];
let user = ["user"];
let closure_5 = ["user", "application"];
let closure_6 = ["user", "applicationId"];
const UserRowModes = fn(10605).UserRowModes;
const RelationshipTypes = fn(1085).RelationshipTypes;
const jsx = fn(21).jsx;
const constants = { ACCEPT: "accept", DECLINE: "decline", WAVE: "wave" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      const cResult = require("c").c(57);
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
        ({
          accessibilityLabel,
          acceptRequestAccessibilityLabel,
          ignoreRequestAccessibilityLabel,
          acceptedRequestLabel,
          acceptedRequestAccessibilityLabel,
        } = user);
        const tmp17 = _objectWithoutProperties(user, closure_3);
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
        cResult[10] = tmp17;
        cResult[11] = user;
        let tmp10 = ignoreRequestAccessibilityLabel;
        let tmp7 = acceptedRequestLabel;
        let tmp6 = acceptedRequestAccessibilityLabel;
        let tmp4 = acceptRequestAccessibilityLabel;
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
      const obj = require("c");
      const sharedValue = require("ReanimatedRexport").useSharedValue(false);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function x() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[12] = items;
        cResult[13] = fn;
        let tmp20 = fn;
        let tmp19 = items;
      } else {
        tmp19 = cResult[12];
        tmp20 = cResult[13];
      }
      const tmpResult = require("ReanimatedRexport");
      const stateFromStores = require("useStateFromStores").useStateFromStores(tmp19, tmp20);
      if (cResult[14] === tmp5) {
        if (cResult[15] === sharedValue) {
          let tmp23 = cResult[16];
          let tmp24 = cResult[17];
        }
        const effect = noop.useEffect(tmp23, tmp24);
        if (cResult[18] === tmp4) {
          if (cResult[19] === tmp5) {
            if (cResult[20] === tmp10) {
              if (cResult[21] === tmp14) {
                if (cResult[23] === tmp9) {
                  if (cResult[24] === tmp11) {
                    if (cResult[25] === tmp12) {
                      if (cResult[26] === sharedValue) {
                        class M {
                          constructor(arg0) {
                            actionName = user.nativeEvent.actionName;
                            tmp = closure_14;
                            if (closure_14.ACCEPT === actionName) {
                              tmp11 = closure_5;
                              flag2 = true;
                              result = closure_5.set(true);
                              tmp13 = closure_2;
                              tmp14 = closure_4;
                              tmp15 = closure_1;
                              tmp16 = closure_2(closure_4.id, closure_1);
                              tmp17 = closure_0;
                              tmp18 = closure_2;
                              obj4 = closure_0(closure_2[13]);
                              obj1 = { userId: null, applicationId: null };
                              obj1.userId = closure_4.id;
                              obj1.applicationId = closure_1;
                              return obj4.acceptIncomingRequest(obj1);
                            } else if (tmp.DECLINE === actionName) {
                              tmp5 = closure_3;
                              tmp6 = closure_4;
                              tmp7 = closure_1;
                              tmp8 = closure_3(closure_4.id, closure_1);
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              obj2 = closure_0(closure_2[13]);
                              obj6 = { userId: null, applicationId: null };
                              obj6.userId = closure_4.id;
                              obj6.applicationId = closure_1;
                              return obj2.dismissIncomingRequest(obj6);
                            } else if (tmp.WAVE === actionName) {
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = closure_0(closure_2[13]);
                              tmp4 = closure_4;
                              str = "Incoming Friend Request";
                              flag = true;
                              return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
                            } else {
                              return;
                            }
                          }
                        }
                        const _Symbol = Symbol;
                        const userTag = obj8.useUserTag(tmp14);
                        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                          const items1 = [];
                          class M {
                            constructor(arg0) {
                              actionName = user.nativeEvent.actionName;
                              tmp = closure_14;
                              if (closure_14.ACCEPT === actionName) {
                                tmp11 = closure_5;
                                flag2 = true;
                                result = closure_5.set(true);
                                tmp13 = closure_2;
                                tmp14 = closure_4;
                                tmp15 = closure_1;
                                tmp16 = closure_2(closure_4.id, closure_1);
                                tmp17 = closure_0;
                                tmp18 = closure_2;
                                obj4 = closure_0(closure_2[13]);
                                obj1 = { userId: null, applicationId: null };
                                obj1.userId = closure_4.id;
                                obj1.applicationId = closure_1;
                                return obj4.acceptIncomingRequest(obj1);
                              } else if (tmp.DECLINE === actionName) {
                                tmp5 = closure_3;
                                tmp6 = closure_4;
                                tmp7 = closure_1;
                                tmp8 = closure_3(closure_4.id, closure_1);
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                obj2 = closure_0(closure_2[13]);
                                obj6 = { userId: null, applicationId: null };
                                obj6.userId = closure_4.id;
                                obj6.applicationId = closure_1;
                                return obj2.dismissIncomingRequest(obj6);
                              } else if (tmp.WAVE === actionName) {
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                obj = closure_0(closure_2[13]);
                                tmp4 = closure_4;
                                str = "Incoming Friend Request";
                                flag = true;
                                return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
                              } else {
                                return;
                              }
                            }
                          }
                          cResult[29] = items1;
                          let tmp35 = items1;
                        } else {
                          tmp35 = cResult[29];
                        }
                        if (cResult[30] !== tmp9) {
                          const fn3 = function k() {
                            return ApplicationStore.getApplication(closure_1);
                          };
                          class M {
                            constructor(arg0) {
                              actionName = user.nativeEvent.actionName;
                              tmp = closure_14;
                              if (closure_14.ACCEPT === actionName) {
                                tmp11 = closure_5;
                                flag2 = true;
                                result = closure_5.set(true);
                                tmp13 = closure_2;
                                tmp14 = closure_4;
                                tmp15 = closure_1;
                                tmp16 = closure_2(closure_4.id, closure_1);
                                tmp17 = closure_0;
                                tmp18 = closure_2;
                                obj4 = closure_0(closure_2[13]);
                                obj1 = { userId: null, applicationId: null };
                                obj1.userId = closure_4.id;
                                obj1.applicationId = closure_1;
                                return obj4.acceptIncomingRequest(obj1);
                              } else if (tmp.DECLINE === actionName) {
                                tmp5 = closure_3;
                                tmp6 = closure_4;
                                tmp7 = closure_1;
                                tmp8 = closure_3(closure_4.id, closure_1);
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                obj2 = closure_0(closure_2[13]);
                                obj6 = { userId: null, applicationId: null };
                                obj6.userId = closure_4.id;
                                obj6.applicationId = closure_1;
                                return obj2.dismissIncomingRequest(obj6);
                              } else if (tmp.WAVE === actionName) {
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                obj = closure_0(closure_2[13]);
                                tmp4 = closure_4;
                                str = "Incoming Friend Request";
                                flag = true;
                                return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
                              } else {
                                return;
                              }
                            }
                          }
                          cResult[31] = fn3;
                          let tmp37 = fn3;
                        } else {
                          tmp37 = cResult[31];
                        }
                        const stateFromStores1 = tmp(573).useStateFromStores(tmp35, tmp37);
                        if (null != stateFromStores1) {
                          if (cResult[32] !== stateFromStores1) {
                            class M {
                              constructor(arg0) {
                                actionName = user.nativeEvent.actionName;
                                tmp = closure_14;
                                if (closure_14.ACCEPT === actionName) {
                                  tmp11 = closure_5;
                                  flag2 = true;
                                  result = closure_5.set(true);
                                  tmp13 = closure_2;
                                  tmp14 = closure_4;
                                  tmp15 = closure_1;
                                  tmp16 = closure_2(closure_4.id, closure_1);
                                  tmp17 = closure_0;
                                  tmp18 = closure_2;
                                  obj4 = closure_0(closure_2[13]);
                                  obj1 = { userId: null, applicationId: null };
                                  obj1.userId = closure_4.id;
                                  obj1.applicationId = closure_1;
                                  return obj4.acceptIncomingRequest(obj1);
                                } else if (tmp.DECLINE === actionName) {
                                  tmp5 = closure_3;
                                  tmp6 = closure_4;
                                  tmp7 = closure_1;
                                  tmp8 = closure_3(closure_4.id, closure_1);
                                  tmp9 = closure_0;
                                  tmp10 = closure_2;
                                  obj2 = closure_0(closure_2[13]);
                                  obj6 = { userId: null, applicationId: null };
                                  obj6.userId = closure_4.id;
                                  obj6.applicationId = closure_1;
                                  return obj2.dismissIncomingRequest(obj6);
                                } else if (tmp.WAVE === actionName) {
                                  tmp2 = closure_0;
                                  tmp3 = closure_2;
                                  obj = closure_0(closure_2[13]);
                                  tmp4 = closure_4;
                                  str = "Incoming Friend Request";
                                  flag = true;
                                  return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
                                } else {
                                  return;
                                }
                              }
                            }
                            const tmp42 = jsx(
                              tmp33(12309),
                              { application: null, textVariant: "text-xs/medium", iconSize: 12 },
                              stateFromStores1.id,
                            );
                            cResult[32] = stateFromStores1;
                            cResult[33] = tmp42;
                            const obj2 = { application: null, textVariant: "text-xs/medium", iconSize: 12 };
                          }
                        } else {
                          let str = "";
                          if (null == tmp9) {
                            str = userTag;
                          }
                          class M {
                            constructor(arg0) {
                              actionName = user.nativeEvent.actionName;
                              tmp = closure_14;
                              if (closure_14.ACCEPT === actionName) {
                                tmp11 = closure_5;
                                flag2 = true;
                                result = closure_5.set(true);
                                tmp13 = closure_2;
                                tmp14 = closure_4;
                                tmp15 = closure_1;
                                tmp16 = closure_2(closure_4.id, closure_1);
                                tmp17 = closure_0;
                                tmp18 = closure_2;
                                obj4 = closure_0(closure_2[13]);
                                obj1 = { userId: null, applicationId: null };
                                obj1.userId = closure_4.id;
                                obj1.applicationId = closure_1;
                                return obj4.acceptIncomingRequest(obj1);
                              } else if (tmp.DECLINE === actionName) {
                                tmp5 = closure_3;
                                tmp6 = closure_4;
                                tmp7 = closure_1;
                                tmp8 = closure_3(closure_4.id, closure_1);
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                obj2 = closure_0(closure_2[13]);
                                obj6 = { userId: null, applicationId: null };
                                obj6.userId = closure_4.id;
                                obj6.applicationId = closure_1;
                                return obj2.dismissIncomingRequest(obj6);
                              } else if (tmp.WAVE === actionName) {
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                obj = closure_0(closure_2[13]);
                                tmp4 = closure_4;
                                str = "Incoming Friend Request";
                                flag = true;
                                return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
                              } else {
                                return;
                              }
                            }
                          }
                          if (cResult[34] === tmp6) {
                            if (cResult[35] === tmp7) {
                              if (cResult[36] === str) {
                                if (cResult[37] === sharedValue) {
                                  class M {
                                    constructor(arg0) {
                                      actionName = user.nativeEvent.actionName;
                                      tmp = closure_14;
                                      if (closure_14.ACCEPT === actionName) {
                                        tmp11 = closure_5;
                                        flag2 = true;
                                        result = closure_5.set(true);
                                        tmp13 = closure_2;
                                        tmp14 = closure_4;
                                        tmp15 = closure_1;
                                        tmp16 = closure_2(closure_4.id, closure_1);
                                        tmp17 = closure_0;
                                        tmp18 = closure_2;
                                        obj4 = closure_0(closure_2[13]);
                                        obj1 = { userId: null, applicationId: null };
                                        obj1.userId = closure_4.id;
                                        obj1.applicationId = closure_1;
                                        return obj4.acceptIncomingRequest(obj1);
                                      } else if (tmp.DECLINE === actionName) {
                                        tmp5 = closure_3;
                                        tmp6 = closure_4;
                                        tmp7 = closure_1;
                                        tmp8 = closure_3(closure_4.id, closure_1);
                                        tmp9 = closure_0;
                                        tmp10 = closure_2;
                                        obj2 = closure_0(closure_2[13]);
                                        obj6 = { userId: null, applicationId: null };
                                        obj6.userId = closure_4.id;
                                        obj6.applicationId = closure_1;
                                        return obj2.dismissIncomingRequest(obj6);
                                      } else if (tmp.WAVE === actionName) {
                                        tmp2 = closure_0;
                                        tmp3 = closure_2;
                                        obj = closure_0(closure_2[13]);
                                        tmp4 = closure_4;
                                        str = "Incoming Friend Request";
                                        flag = true;
                                        return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
                                      } else {
                                        return;
                                      }
                                    }
                                  }
                                  let obj3 = {
                                    user: tmp14,
                                    pressed: sharedValue,
                                    applicationId: tmp9,
                                    onAcceptIncomingRequest: tmp11,
                                    onDeclineIncomingRequest: tmp12,
                                    animate: !stateFromStores,
                                    acceptRequestAccessibilityLabel: tmp4,
                                    ignoreRequestAccessibilityLabel: tmp10,
                                  };
                                  const tmp51 = jsx(tmp(16966).IncomingRequestRowActions, {
                                    user: tmp14,
                                    pressed: sharedValue,
                                    applicationId: tmp9,
                                    onAcceptIncomingRequest: tmp11,
                                    onDeclineIncomingRequest: tmp12,
                                    animate: !stateFromStores,
                                    acceptRequestAccessibilityLabel: tmp4,
                                    ignoreRequestAccessibilityLabel: tmp10,
                                  });
                                  cResult[40] = tmp4;
                                  cResult[41] = tmp9;
                                  cResult[42] = tmp10;
                                  cResult[43] = tmp11;
                                  cResult[44] = tmp12;
                                  cResult[45] = sharedValue;
                                  cResult[46] = !stateFromStores;
                                  cResult[47] = tmp14;
                                  cResult[48] = tmp51;
                                }
                              }
                            }
                          }
                          const obj4 = {
                            actioned: sharedValue,
                            label: str,
                            actionStatus: tmp7,
                            actionStatusAccessibilityLabel: tmp6,
                            animate: tmp44,
                          };
                          const tmp47 = jsx(tmp(16422).ActionStatusSubLabel, {
                            actioned: sharedValue,
                            label: str,
                            actionStatus: tmp7,
                            actionStatusAccessibilityLabel: tmp6,
                            animate: tmp44,
                          });
                          cResult[34] = tmp6;
                          cResult[35] = tmp7;
                          cResult[36] = str;
                          cResult[37] = sharedValue;
                          cResult[38] = tmp44;
                          cResult[39] = tmp47;
                        }
                        tmp33 = importDefault;
                        const tmpResult4 = tmp(573);
                      }
                    }
                  }
                }
                class M {
                  constructor(arg0) {
                    actionName = user.nativeEvent.actionName;
                    tmp = closure_14;
                    if (closure_14.ACCEPT === actionName) {
                      tmp11 = closure_5;
                      flag2 = true;
                      result = closure_5.set(true);
                      tmp13 = closure_2;
                      tmp14 = closure_4;
                      tmp15 = closure_1;
                      tmp16 = closure_2(closure_4.id, closure_1);
                      tmp17 = closure_0;
                      tmp18 = closure_2;
                      obj4 = closure_0(closure_2[13]);
                      obj1 = { userId: null, applicationId: null };
                      obj1.userId = closure_4.id;
                      obj1.applicationId = closure_1;
                      return obj4.acceptIncomingRequest(obj1);
                    } else if (tmp.DECLINE === actionName) {
                      tmp5 = closure_3;
                      tmp6 = closure_4;
                      tmp7 = closure_1;
                      tmp8 = closure_3(closure_4.id, closure_1);
                      tmp9 = closure_0;
                      tmp10 = closure_2;
                      obj2 = closure_0(closure_2[13]);
                      obj6 = { userId: null, applicationId: null };
                      obj6.userId = closure_4.id;
                      obj6.applicationId = closure_1;
                      return obj2.dismissIncomingRequest(obj6);
                    } else if (tmp.WAVE === actionName) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = closure_0(closure_2[13]);
                      tmp4 = closure_4;
                      str = "Incoming Friend Request";
                      flag = true;
                      return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
                    } else {
                      return;
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
        }
        let obj5 = { name: null, label: null };
        let items2 = constants;
        if (tmp5) {
          obj5.name = items2.WAVE;
          class M {
            constructor(arg0) {
              actionName = user.nativeEvent.actionName;
              tmp = closure_14;
              if (closure_14.ACCEPT === actionName) {
                tmp11 = closure_5;
                flag2 = true;
                result = closure_5.set(true);
                tmp13 = closure_2;
                tmp14 = closure_4;
                tmp15 = closure_1;
                tmp16 = closure_2(closure_4.id, closure_1);
                tmp17 = closure_0;
                tmp18 = closure_2;
                obj4 = closure_0(closure_2[13]);
                obj1 = { userId: null, applicationId: null };
                obj1.userId = closure_4.id;
                obj1.applicationId = closure_1;
                return obj4.acceptIncomingRequest(obj1);
              } else if (tmp.DECLINE === actionName) {
                tmp5 = closure_3;
                tmp6 = closure_4;
                tmp7 = closure_1;
                tmp8 = closure_3(closure_4.id, closure_1);
                tmp9 = closure_0;
                tmp10 = closure_2;
                obj2 = closure_0(closure_2[13]);
                obj6 = { userId: null, applicationId: null };
                obj6.userId = closure_4.id;
                obj6.applicationId = closure_1;
                return obj2.dismissIncomingRequest(obj6);
              } else if (tmp.WAVE === actionName) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[13]);
                tmp4 = closure_4;
                str = "Incoming Friend Request";
                flag = true;
                return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
              } else {
                return;
              }
            }
          }
          const obj6 = { username: UserUtilsDefault.getName(tmp14) };
          obj5.label = tmp29(tmp(1126).t.m0zYbV, obj6);
          items2 = [obj5];
        } else {
          obj5.name = items2.ACCEPT;
          obj5.label = tmp4;
          class M {
            constructor(arg0) {
              actionName = user.nativeEvent.actionName;
              tmp = closure_14;
              if (closure_14.ACCEPT === actionName) {
                tmp11 = closure_5;
                flag2 = true;
                result = closure_5.set(true);
                tmp13 = closure_2;
                tmp14 = closure_4;
                tmp15 = closure_1;
                tmp16 = closure_2(closure_4.id, closure_1);
                tmp17 = closure_0;
                tmp18 = closure_2;
                obj4 = closure_0(closure_2[13]);
                obj1 = { userId: null, applicationId: null };
                obj1.userId = closure_4.id;
                obj1.applicationId = closure_1;
                return obj4.acceptIncomingRequest(obj1);
              } else if (tmp.DECLINE === actionName) {
                tmp5 = closure_3;
                tmp6 = closure_4;
                tmp7 = closure_1;
                tmp8 = closure_3(closure_4.id, closure_1);
                tmp9 = closure_0;
                tmp10 = closure_2;
                obj2 = closure_0(closure_2[13]);
                obj6 = { userId: null, applicationId: null };
                obj6.userId = closure_4.id;
                obj6.applicationId = closure_1;
                return obj2.dismissIncomingRequest(obj6);
              } else if (tmp.WAVE === actionName) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[13]);
                tmp4 = closure_4;
                str = "Incoming Friend Request";
                flag = true;
                return obj.sendWave(closure_4.id, true, "Incoming Friend Request");
              } else {
                return;
              }
            }
          }
          tmp28[0] = obj5;
          const obj9 = { name: items2.DECLINE, label: tmp10 };
          tmp28[1] = obj9;
        }
        cResult[18] = tmp4;
        cResult[19] = tmp5;
        cResult[20] = tmp10;
        cResult[21] = tmp14;
        cResult[22] = tmp28;
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
      const tmpResult3 = require("useStateFromStores");
    }
  : (user) => {
      user = user.user;
      const applicationId = user.applicationId;
      const accepted = user.accepted;
      const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
      const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
      const acceptRequestAccessibilityLabel = user.acceptRequestAccessibilityLabel;
      const ignoreRequestAccessibilityLabel = user.ignoreRequestAccessibilityLabel;
      ({ accessibilityLabel, acceptedRequestLabel, acceptedRequestAccessibilityLabel } = user);
      const merged = Object.assign(
        user,
        Object.assign({
          user: 0,
          applicationId: 0,
          accepted: 0,
          onAcceptIncomingRequest: 0,
          onDeclineIncomingRequest: 0,
          accessibilityLabel: 0,
          acceptRequestAccessibilityLabel: 0,
          ignoreRequestAccessibilityLabel: 0,
          acceptedRequestLabel: 0,
          acceptedRequestAccessibilityLabel: 0,
        }),
      );
      let userTag;
      let stateFromStores1;
      const sharedValue = user(accepted[9]).useSharedValue(false);
      let obj = user(accepted[9]);
      let items = [stateFromStores1];
      const stateFromStores = user(accepted[10]).useStateFromStores(items, () => stateFromStores1.useReducedMotion);
      let items1 = [accepted, sharedValue];
      const effect = userTag.useEffect(() => {
        const result = sharedValue.set(accepted);
      }, items1);
      const items2 = [acceptRequestAccessibilityLabel, accepted, ignoreRequestAccessibilityLabel, user];
      const items3 = [applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, sharedValue, user];
      const memo = userTag.useMemo(() => {
        const obj = { name: null, label: null };
        if (accepted) {
          obj.name = constants.WAVE;
          const intl = util.intl;
          const obj2 = { username: UserUtilsDefault.getName(user) };
          obj.label = intl.formatToPlainString(util.t.m0zYbV, obj2);
          const items = [obj];
          let items1 = items;
        } else {
          obj.name = constants.ACCEPT;
          obj.label = acceptRequestAccessibilityLabel;
          items1 = [obj];
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
          return AddFriendsScreenUtils.acceptIncomingRequest(obj3);
        } else if (constants.DECLINE === actionName) {
          onDeclineIncomingRequest(user.id, applicationId);
          const obj5 = { userId: user.id, applicationId };
          return AddFriendsScreenUtils.dismissIncomingRequest(obj5);
        } else if (constants.WAVE === actionName) {
          return AddFriendsScreenUtils.sendWave(user.id, true, "Incoming Friend Request");
        }
      }, items3);
      let obj2 = user(accepted[10]);
      userTag = applicationId(accepted[12]).useUserTag(user);
      let obj3 = applicationId(accepted[12]);
      const items4 = [ApplicationStore];
      stateFromStores1 = user(accepted[10]).useStateFromStores(items4, () =>
        ApplicationStore.getApplication(applicationId),
      );
      const items5 = [stateFromStores1, applicationId, userTag];
      const memo1 = userTag.useMemo(() => {
        if (null != stateFromStores1) {
          const obj = { application: stateFromStores1, textVariant: "text-xs/medium", iconSize: 12 };
          let str = jsx(
            ApplicationIconAndNameDefault,
            { application: stateFromStores1, textVariant: "text-xs/medium", iconSize: 12 },
            stateFromStores1.id,
          );
        } else {
          str = "";
          if (null == applicationId) {
            str = userTag;
          }
        }
        return str;
      }, items5);
      let obj5 = {};
      let obj4 = user(accepted[10]);
      const merged1 = Object.assign(merged);
      obj5.user = user;
      obj5.type = RelationshipTypes.PENDING_INCOMING;
      obj5.mode = UserRowModes.ACTIONS;
      obj5.accessibilityActions = memo;
      obj5.accessibilityLabel = accessibilityLabel;
      obj5.onAccessibilityAction = callback;
      obj5.subLabel = jsx(user(accepted[15]).ActionStatusSubLabel, {
        actioned: sharedValue,
        label: memo1,
        actionStatus: acceptedRequestLabel,
        actionStatusAccessibilityLabel: acceptedRequestAccessibilityLabel,
        animate: !stateFromStores,
      });
      obj5.trailing = jsx(user(accepted[16]).IncomingRequestRowActions, {
        user,
        pressed: sharedValue,
        applicationId,
        onAcceptIncomingRequest,
        onDeclineIncomingRequest,
        animate: !stateFromStores,
        acceptRequestAccessibilityLabel,
        ignoreRequestAccessibilityLabel,
      });
      return jsx(applicationId(accepted[17]), {});
    };
fn(558);
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(26);
      if (cResult[0] !== arg0) {
        ({ user, application } = arg0);
        _require = application;
        const tmp9 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = application;
        cResult[2] = tmp9;
        cResult[3] = user;
        let tmp6 = user;
        let tmp5 = tmp9;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const obj = require("c");
      const userTag = UserUtilsDefault.useUserTag(tmp6);
      if (cResult[4] !== userTag) {
        const intl = tmp(1126).intl;
        const obj3 = { name: userTag };
        const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.u6lp4x, obj3);
        cResult[4] = userTag;
        cResult[5] = formatToPlainStringResult;
        let tmp11 = formatToPlainStringResult;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== application) {
        const intl2 = tmp(1126).intl;
        const obj4 = {
          applicationNameHook() {
            return jsx(
              ApplicationIconAndNameDefault,
              { application, textVariant: "text-xs/medium", iconSize: 12 },
              application.id,
            );
          },
        };
        const formatResult = intl2.format(tmp(1126).t.gRgJGR, obj4);
        cResult[6] = application;
        cResult[7] = formatResult;
        let tmp13 = formatResult;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === application.name) {
        if (cResult[9] === userTag) {
          let tmp15 = cResult[10];
        }
        if (cResult[11] === application.name) {
          if (cResult[12] === userTag) {
            let tmp17 = cResult[13];
          }
          if (cResult[14] === application.name) {
            if (cResult[15] === userTag) {
              let tmp19 = cResult[16];
            }
            if (cResult[17] === application.id) {
              if (cResult[18] === tmp5) {
                if (cResult[19] === tmp11) {
                  if (cResult[20] === tmp13) {
                    if (cResult[21] === tmp15) {
                      if (cResult[22] === tmp17) {
                        if (cResult[23] === tmp19) {
                          if (cResult[24] === tmp6) {
                            let tmp21 = cResult[25];
                          }
                          return tmp21;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj5 = {
              user: tmp6,
              applicationId: application.id,
              accessibilityLabel: tmp11,
              acceptedRequestLabel: tmp13,
              acceptedRequestAccessibilityLabel: tmp15,
              acceptRequestAccessibilityLabel: tmp17,
              ignoreRequestAccessibilityLabel: tmp19,
            };
            const merged = Object.assign(tmp5);
            const tmp27 = (
              <closure_15
                user={tmp6}
                applicationId={application.id}
                accessibilityLabel={tmp11}
                acceptedRequestLabel={tmp13}
                acceptedRequestAccessibilityLabel={tmp15}
                acceptRequestAccessibilityLabel={tmp17}
                ignoreRequestAccessibilityLabel={tmp19}
              />
            );
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
          const formatToPlainStringResult1 = intl5.formatToPlainString(tmp(1126).t.d8Cw5e, obj6);
          cResult[14] = application.name;
          cResult[15] = userTag;
          cResult[16] = formatToPlainStringResult1;
          tmp19 = formatToPlainStringResult1;
        }
        const intl4 = tmp(1126).intl;
        const obj7 = { name: userTag, applicationName: application.name };
        const formatToPlainStringResult2 = intl4.formatToPlainString(tmp(1126).t.kMUpdH, obj7);
        cResult[11] = application.name;
        cResult[12] = userTag;
        cResult[13] = formatToPlainStringResult2;
        tmp17 = formatToPlainStringResult2;
      }
      const intl3 = tmp(1126).intl;
      const formatToPlainStringResult3 = intl3.formatToPlainString(require("util").t.Ke6fRJ, {
        name: userTag,
        applicationName: application.name,
      });
      cResult[8] = application.name;
      cResult[9] = userTag;
      cResult[10] = formatToPlainStringResult3;
      tmp15 = formatToPlainStringResult3;
      const obj8 = { name: userTag, applicationName: application.name };
    }
  : (arg0) => {
      ({ user, application } = arg0);
      const merged = Object.assign(arg0, Object.assign({ user: 0, application: 0 }));
      const userTag = UserUtilsDefault.useUserTag(user);
      const obj2 = {
        user,
        applicationId: application.id,
        accessibilityLabel: null,
        acceptedRequestLabel: null,
        acceptedRequestAccessibilityLabel: null,
        acceptRequestAccessibilityLabel: null,
        ignoreRequestAccessibilityLabel: null,
      };
      const intl = application(1126).intl;
      obj2.accessibilityLabel = intl.formatToPlainString(application(1126).t.u6lp4x, { name: userTag });
      const intl2 = application(1126).intl;
      obj2.acceptedRequestLabel = intl2.format(application(1126).t.gRgJGR, {
        applicationNameHook() {
          return jsx(
            ApplicationIconAndNameDefault,
            { application, textVariant: "text-xs/medium", iconSize: 12 },
            application.id,
          );
        },
      });
      const intl3 = application(1126).intl;
      obj2.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(application(1126).t.Ke6fRJ, {
        name: userTag,
        applicationName: application.name,
      });
      const intl4 = application(1126).intl;
      obj2.acceptRequestAccessibilityLabel = intl4.formatToPlainString(application(1126).t.kMUpdH, {
        name: userTag,
        applicationName: application.name,
      });
      const intl5 = application(1126).intl;
      obj2.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(application(1126).t.d8Cw5e, {
        name: userTag,
        applicationName: application.name,
      });
      const merged1 = Object.assign(merged);
      return (
        <closure_15
          user={user}
          applicationId={application.id}
          accessibilityLabel={null}
          acceptedRequestLabel={null}
          acceptedRequestAccessibilityLabel={null}
          acceptRequestAccessibilityLabel={null}
          ignoreRequestAccessibilityLabel={null}
        />
      );
    };
ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      const cResult = c.c(19);
      if (cResult[0] !== user) {
        user = user.user;
        const tmp8 = _objectWithoutProperties(user, closure_4);
        cResult[0] = user;
        cResult[1] = tmp8;
        cResult[2] = user;
        let tmp5 = user;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const userTag = UserUtilsDefault.useUserTag(tmp5);
      if (cResult[3] !== userTag) {
        const intl = util.intl;
        const obj3 = { name: userTag };
        const formatToPlainStringResult = intl.formatToPlainString(util.t.u6lp4x, obj3);
        cResult[3] = userTag;
        cResult[4] = formatToPlainStringResult;
        let tmp10 = formatToPlainStringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t["0E614Z"]);
        cResult[5] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== userTag) {
        const intl3 = util.intl;
        const obj4 = { name: userTag };
        const formatToPlainStringResult1 = intl3.formatToPlainString(util.t.cRwkp7, obj4);
        cResult[6] = userTag;
        cResult[7] = formatToPlainStringResult1;
        let tmp14 = formatToPlainStringResult1;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== userTag) {
        const intl4 = util.intl;
        const obj5 = { name: userTag };
        const formatToPlainStringResult2 = intl4.formatToPlainString(util.t.MUfqsS, obj5);
        cResult[8] = userTag;
        cResult[9] = formatToPlainStringResult2;
        let tmp16 = formatToPlainStringResult2;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] !== userTag) {
        const intl5 = util.intl;
        const obj6 = { name: userTag };
        const formatToPlainStringResult3 = intl5.formatToPlainString(util.t["0OF9IB"], obj6);
        cResult[10] = userTag;
        cResult[11] = formatToPlainStringResult3;
        let tmp18 = formatToPlainStringResult3;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] === tmp4) {
        if (cResult[13] === tmp10) {
          if (cResult[14] === tmp14) {
            if (cResult[15] === tmp16) {
              if (cResult[16] === tmp18) {
                if (cResult[17] === tmp5) {
                  let tmp20 = cResult[18];
                }
                return tmp20;
              }
            }
          }
        }
      }
      const merged = Object.assign(tmp4);
      const tmp22 = (
        <closure_15
          user={tmp5}
          accessibilityLabel={tmp10}
          acceptedRequestLabel={tmp12}
          acceptedRequestAccessibilityLabel={tmp14}
          acceptRequestAccessibilityLabel={tmp16}
          ignoreRequestAccessibilityLabel={tmp18}
        />
      );
      cResult[12] = tmp4;
      cResult[13] = tmp10;
      cResult[14] = tmp14;
      cResult[15] = tmp16;
      cResult[16] = tmp18;
      cResult[17] = tmp5;
      cResult[18] = tmp22;
      tmp20 = tmp22;
      const obj7 = {
        user: tmp5,
        accessibilityLabel: tmp10,
        acceptedRequestLabel: tmp12,
        acceptedRequestAccessibilityLabel: tmp14,
        acceptRequestAccessibilityLabel: tmp16,
        ignoreRequestAccessibilityLabel: tmp18,
      };
    }
  : (user) => {
      user = user.user;
      const merged = Object.assign(user, Object.assign({ user: 0 }));
      const userTag = UserUtilsDefault.useUserTag(user);
      const obj2 = {
        user,
        accessibilityLabel: null,
        acceptedRequestLabel: null,
        acceptedRequestAccessibilityLabel: null,
        acceptRequestAccessibilityLabel: null,
        ignoreRequestAccessibilityLabel: null,
      };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.formatToPlainString(util.t.u6lp4x, { name: userTag });
      const intl2 = util.intl;
      obj2.acceptedRequestLabel = intl2.string(util.t["0E614Z"]);
      const intl3 = util.intl;
      obj2.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(util.t.cRwkp7, { name: userTag });
      const intl4 = util.intl;
      obj2.acceptRequestAccessibilityLabel = intl4.formatToPlainString(util.t.MUfqsS, { name: userTag });
      const intl5 = util.intl;
      obj2.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(util.t["0OF9IB"], { name: userTag });
      const merged1 = Object.assign(merged);
      return (
        <closure_15
          user={user}
          accessibilityLabel={null}
          acceptedRequestLabel={null}
          acceptedRequestAccessibilityLabel={null}
          acceptRequestAccessibilityLabel={null}
          ignoreRequestAccessibilityLabel={null}
        />
      );
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx");

export const IncomingFriendRequestRow = tmp2;
export const ConnectedIncomingGameFriendRequestRow = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(11);
      if (cResult[0] !== arg0) {
        ({ user, applicationId } = arg0);
        _require = applicationId;
        const tmp9 = _objectWithoutProperties(arg0, closure_6);
        cResult[0] = arg0;
        cResult[1] = applicationId;
        cResult[2] = tmp9;
        cResult[3] = user;
        let tmp6 = user;
        let tmp5 = tmp9;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStore];
        cResult[4] = items;
        let tmp10 = items;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== applicationId) {
        const fn = function b() {
          return ApplicationStore.getApplication(closure_0);
        };
        cResult[5] = applicationId;
        cResult[6] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(tmp10, tmp12);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === tmp5) {
          }
        }
        const obj2 = { user: tmp6, application: stateFromStores };
        const merged = Object.assign(tmp5);
        const tmp20 = <closure_16 user={tmp6} application={stateFromStores} />;
        cResult[7] = stateFromStores;
        cResult[8] = tmp5;
        cResult[9] = tmp6;
        cResult[10] = tmp20;
      }
      const tmpResult = require("useStateFromStores");
    }
  : (applicationId) => {
      applicationId = applicationId.applicationId;
      let tmp = null;
      const merged = Object.assign(applicationId, Object.assign({ user: 0, applicationId: 0 }));
      const items = [ApplicationStore];
      const stateFromStores = applicationId(573).useStateFromStores(items, () =>
        ApplicationStore.getApplication(applicationId),
      );
      if (null != stateFromStores) {
        const obj2 = { user: applicationId.user, application: stateFromStores };
        const merged1 = Object.assign(merged);
        tmp = <closure_16 user={applicationId.user} application={stateFromStores} />;
      }
      return tmp;
    };
