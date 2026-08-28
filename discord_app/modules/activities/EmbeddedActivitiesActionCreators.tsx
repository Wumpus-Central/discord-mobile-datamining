// === Module 9408: _runPrimaryAppCommandOrJoinEmbeddedActivity ===

// Module 9408 (_runPrimaryAppCommandOrJoinEmbeddedActivity)
import dispatcherDefault from "dispatcher" /* 709 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import addVersionedDismissedContent from "addVersionedDismissedContent" /* 1379 */;
import _modDef4687 from "module_4687" /* 4687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { getOrFetchApplicationCommandIndexForTarget as closure_4 } from "getIndexKey" /* 8092 */;
import closure_5 from "addApplication" /* 4487 */;
import closure_6 from "getParticipants" /* 4462 */;
import closure_7 from "initialize" /* 4630 */;
import closure_8 from "createExecutable" /* 4472 */;
import closure_9 from "fetchFingerprint" /* 1218 */;
import closure_10 from "ensureGuildLoaded" /* 1391 */;
import closure_11 from "createGuildRecordFromRust" /* 1910 */;
import closure_12 from "getUncachedChannelPermissions" /* 4090 */;
import closure_13 from "mergeGuildAvatar" /* 1923 */;
import closure_14 from "updateVoiceState" /* 4465 */;
import closure_15 from "participantFromServer" /* 1390 */;
import { SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES as closure_16 } from "items3" /* 4474 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9405 */;
import ME from "ME" /* 676 */;
import { INSTALL_LESS_APP_IDS } from "ApplicationTypes" /* 4475 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { InviteTargetTypes } from "InviteSendStates" /* 7428 */;

require = arg1;
function _runPrimaryAppCommandOrJoinEmbeddedActivity() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_16 = 0;
    closure_17 = 0;
    c15 = 0;
    const iter = (function*(applicationId) {
      if (c17 === 2) {
        c17 = 3;
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = applicationId;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = null;
        if (tmp6 === 3) {
          if (applicationId === 1) {
            throw arg1;
          } else if (applicationId === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c17 = 2;
            if (0 === type) {
              if (applicationId === 1) {
                c17 = 3;
                throw arg1;
              } else if (applicationId === 2) {
                c17 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let currentUser = tmp3;
                c12 = tmp7;
                let callback;
                let callback2;
                dependencyMap = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                c7 = undefined;
                closure_8 = undefined;
                c9 = undefined;
                let callback3;
                c11 = undefined;
                c12 = undefined;
                currentUser = undefined;
                c14 = undefined;
                c15 = undefined;
                throwTypeErrorResult = callback;
                ({ channelId: c0, applicationId: c1, isStart: c2, analyticsLocations: c3, locationObject: c4, embeddedActivitiesManager: c5, componentId: c6, commandOrigin: c7, sectionName: closure_8, source: c9, onExecutedCallback: c10, referrerId: c11, customId: c12, inviterUserId: c13, renderInFramePool: c14, onConfirmActivityLaunchChecksAlertOpen: c15 } = callback);
                type = undefined;
                c17 = undefined;
                c18 = undefined;
                c19 = undefined;
                c20 = undefined;
                closure_21 = undefined;
                let id;
                closure_23 = undefined;
                closure_24 = undefined;
                let PRIVATE_CHANNEL;
                type = 1;
                c17 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp7) {
              if (applicationId === 1) {
                c17 = 3;
                throw arg1;
              } else if (applicationId === 2) {
                c17 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                throwTypeErrorResult = closure_1_10;
                throwTypeErrorResult = callback;
                const channel = closure_1_10.getChannel(callback);
                throwTypeErrorResult = undefined;
                if (channel != null) {
                  throwTypeErrorResult = obj32.getGuildId();
                }
                callback2 = throwTypeErrorResult;
                if (throwTypeErrorResult == null) {
                  callback2 = undefined;
                }
                throwTypeErrorResult = c12;
                throwTypeErrorResult = callback2;
                closure_17 = callback2;
                throwTypeErrorResult = closure_17;
                if (null == closure_17) {
                  throwTypeErrorResult = c12;
                  let obj14 = channel;
                  throwTypeErrorResult = undefined;
                  if (channel != null) {
                    throwTypeErrorResult = obj14.isPrivate();
                  }
                  if (!throwTypeErrorResult) {
                    c17 = 3;
                    return { value: false, done: true };
                  }
                }
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                throwTypeErrorResult = closure_1_5;
                throwTypeErrorResult = closure_1_1;
                let application = closure_1_5.getApplication(closure_1_1);
                throwTypeErrorResult = application;
                throwTypeErrorResult = null != application;
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = c12;
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = closure_1_2;
                  let obj15 = callback(closure_1_2[19]);
                  throwTypeErrorResult = application;
                  throwTypeErrorResult = obj15.canLaunchFrame(application);
                }
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = closure_1_2;
                let obj16 = callback(closure_1_2[20]);
                closure_20 = obj16.createNonce();
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                c15 = 1;
                throwTypeErrorResult = closure_1_7;
                throwTypeErrorResult = closure_1_23;
                throwTypeErrorResult = closure_1_7.getWindowOpen(closure_1_23.ACTIVITY_POPOUT);
                throwTypeErrorResult = closure_1_14;
                if (true !== closure_1_14) {
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = closure_1_1;
                  throwTypeErrorResult = closure_1_2;
                  let obj17 = closure_1_1(closure_1_2[21]);
                  throwTypeErrorResult = obj17.clearMainFrameSlot();
                }
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = closure_1_2;
                let obj18 = callback(closure_1_2[22]);
                const obj2 = { applicationId: null };
                throwTypeErrorResult = callback2;
                obj2[0] = callback2;
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                if (obj18.tryLaunchAsFrame(obj2)) {
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = closure_1_2;
                  let obj3 = { isStart: null, inviterUserId: null, channelId: null, guildId: null, locationKind: null };
                  throwTypeErrorResult = dependencyMap;
                  obj3[0] = dependencyMap;
                  throwTypeErrorResult = currentUser;
                  obj3[1] = currentUser;
                  throwTypeErrorResult = callback;
                  dependencyMap = callback;
                  throwTypeErrorResult = callback2;
                  if (callback == null) {
                    dependencyMap = null;
                  }
                  throwTypeErrorResult = c12;
                  throwTypeErrorResult = dependencyMap;
                  obj3[2] = dependencyMap;
                  throwTypeErrorResult = c17;
                  c4 = c17;
                  if (c17 == null) {
                    c4 = null;
                  }
                  throwTypeErrorResult = c12;
                  throwTypeErrorResult = c4;
                  obj3[3] = c4;
                  throwTypeErrorResult = c17;
                  if (null != c17) {
                    throwTypeErrorResult = currentUser;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    let PRIVATE_CHANNEL2 = callback(9412).EmbeddedActivityLocationKind.GUILD_CHANNEL;
                  } else {
                    throwTypeErrorResult = currentUser;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    PRIVATE_CHANNEL2 = callback(9412).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
                  }
                  obj3[4] = PRIVATE_CHANNEL2;
                  obj3 = callback(closure_1_2[23]).stashPendingFrameLaunch(throwTypeErrorResult, obj3);
                  c15 = 0;
                  c17 = 3;
                  const obj25 = callback(closure_1_2[23]);
                } else {
                  throwTypeErrorResult = closure_1_1;
                  throwTypeErrorResult = closure_1_2;
                  const obj4 = { type: "EMBEDDED_ACTIVITY_LAUNCH_START", nonce: null, applicationId: null, channelId: null, componentId: null, analyticsLocations: null, source: null, commandOrigin: null, inviterUserId: null, launchParams: null };
                  throwTypeErrorResult = c20;
                  obj4[1] = c20;
                  throwTypeErrorResult = callback2;
                  obj4[2] = callback2;
                  throwTypeErrorResult = callback;
                  c3 = callback;
                  if (callback == null) {
                    c3 = null;
                  }
                  throwTypeErrorResult = c12;
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = c3;
                  obj4[3] = c3;
                  throwTypeErrorResult = closure_1_6;
                  obj4[4] = closure_1_6;
                  throwTypeErrorResult = closure_1_3;
                  obj4[5] = closure_1_3;
                  throwTypeErrorResult = closure_1_9;
                  obj4[6] = closure_1_9;
                  throwTypeErrorResult = closure_1_7;
                  obj4[7] = closure_1_7;
                  throwTypeErrorResult = closure_1_13;
                  obj4[8] = closure_1_13;
                  const obj5 = { customId: null, referrerId: null, renderInFramePool: null };
                  throwTypeErrorResult = closure_1_12;
                  obj5[0] = closure_1_12;
                  throwTypeErrorResult = closure_1_11;
                  obj5[1] = closure_1_11;
                  throwTypeErrorResult = closure_1_14;
                  obj5[2] = closure_1_14;
                  obj4[9] = obj5;
                  throwTypeErrorResult = closure_1_1(closure_1_2[25]).dispatch(obj4);
                  throwTypeErrorResult = callback;
                  c5 = callback;
                  throwTypeErrorResult = closure_40;
                  throwTypeErrorResult = closure_1_1;
                  if (callback == null) {
                    c5 = undefined;
                  }
                  throwTypeErrorResult = c5;
                  type = 3;
                  c17 = 1;
                  const obj6 = { value: null, done: false };
                  obj6[0] = throwTypeErrorResult(throwTypeErrorResult, c5);
                  return obj6;
                }
                obj32 = channel;
              }
            } else if (2 === tmp7) {
              throwTypeErrorResult = c12;
              throwTypeErrorResult = c14;
              throwTypeErrorResult = c14;
              c15 = 0;
              closure_26 = c14;
              if (throwTypeErrorResult) {
                c17 = 3;
                return { value: false, done: true };
              } else {
                throwTypeErrorResult = closure_17;
                if (null != closure_17) {
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = closure_1_2;
                  PRIVATE_CHANNEL = callback(closure_1_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
                } else {
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = closure_1_2;
                  PRIVATE_CHANNEL = callback(closure_1_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
                }
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                throwTypeErrorResult = closure_1_1;
                throwTypeErrorResult = closure_1_2;
                let obj12 = closure_1_1(closure_1_2[25]);
                let obj7 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: null, applicationId: null, channelId: null, guildId: null, isStart: null, error: null, locationKind: null };
                throwTypeErrorResult = c20;
                obj7[1] = c20;
                throwTypeErrorResult = callback2;
                obj7[2] = callback2;
                throwTypeErrorResult = callback;
                callback3 = callback;
                if (callback == null) {
                  callback3 = null;
                }
                throwTypeErrorResult = c12;
                throwTypeErrorResult = callback3;
                obj7[3] = callback3;
                throwTypeErrorResult = c17;
                c11 = c17;
                if (c17 == null) {
                  c11 = null;
                }
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                throwTypeErrorResult = c11;
                obj7[4] = c11;
                throwTypeErrorResult = dependencyMap;
                obj7[5] = dependencyMap;
                throwTypeErrorResult = closure_26;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                if (!(closure_26 instanceof callback2(9414))) {
                  throwTypeErrorResult = c12;
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = closure_26;
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = dependencyMap;
                  if (!(closure_26 instanceof callback2(4345))) {
                    throwTypeErrorResult = c12;
                    throwTypeErrorResult = currentUser;
                    throwTypeErrorResult = closure_26;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = dependencyMap;
                    if (!(closure_26 instanceof callback2(4708))) {
                      throwTypeErrorResult = c12;
                      throwTypeErrorResult = currentUser;
                      throwTypeErrorResult = callback2;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_26;
                      throwTypeErrorResult = new.target;
                      throwTypeErrorResult = new.target;
                      throwTypeErrorResult = new callback2(4345)(closure_26);
                    }
                    throwTypeErrorResult = c12;
                    obj7[6] = throwTypeErrorResult;
                    throwTypeErrorResult = PRIVATE_CHANNEL;
                    obj7[7] = PRIVATE_CHANNEL;
                    obj7 = obj12.dispatch(obj7);
                    c17 = 3;
                  }
                }
                throwTypeErrorResult = c12;
                throwTypeErrorResult = closure_26;
              }
            } else if (3 === tmp7) {
              if (applicationId === 1) {
                c17 = 3;
                throw arg1;
              } else if (applicationId === 2) {
                c15 = 0;
                c17 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              } else {
                throwTypeErrorResult = c12;
                throwTypeErrorResult = currentUser;
                closure_21 = arg1;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                const obj9 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId: null, channelId: null, proxyTicket: null };
                throwTypeErrorResult = callback2;
                obj9[1] = callback2;
                throwTypeErrorResult = callback;
                c6 = callback;
                if (callback == null) {
                  c6 = null;
                }
                obj9[2] = c6;
                obj9[3] = closure_21;
                callback2(709).dispatch(obj9);
                id = currentUser.getCurrentUser();
                if (null != id) {
                  throwTypeErrorResult = c12;
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = c19;
                  throwTypeErrorResult = callback2(9413);
                  if (dependencyMap) {
                    let JOIN = throwTypeErrorResult.LAUNCH;
                  } else {
                    JOIN = throwTypeErrorResult.JOIN;
                  }
                  const obj10 = { type: null, userId: null, guildId: null, channelId: null, channelType: null, applicationId: null, locationObject: null, analyticsLocations: null, source: null, referrerId: null, inviterUserId: null };
                  obj10[0] = JOIN;
                  id = undefined;
                  if (id != null) {
                    id = id.id;
                  }
                  obj10[1] = id;
                  obj10[2] = c17;
                  obj10[3] = callback;
                  type = undefined;
                  if (type != null) {
                    type = type.type;
                  }
                  obj10[4] = type;
                  obj10[5] = callback2;
                  obj10[6] = c4;
                  closure_8 = c3;
                  if (c3 == null) {
                    closure_8 = [];
                  }
                  obj10[7] = closure_8;
                  obj10[8] = c9;
                  obj10[9] = c11;
                  obj10[10] = currentUser;
                  throwTypeErrorResult(obj10);
                }
                if (dependencyMap) {
                  if (null != callback) {
                    throwTypeErrorResult = c12;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = type;
                    if ((function isSupportedChannelType(c1, c16) {
                      let type;
                      if (c16 != null) {
                        type = c16.type;
                      }
                      let tmp2 = type === constants.GUILD_VOICE;
                      const application = _undefined2.getApplication(c1);
                      const obj = _undefined(_null[30]);
                      const hasApplicationFlagResult = _undefined(_null[30]).hasApplicationFlag(application, _undefined3.EMBEDDED);
                      const result = _undefined(_null[31]).isActivityInTextSupportedForChannel(c16);
                      if (tmp2) {
                        tmp2 = hasApplicationFlagResult;
                      }
                      if (!tmp2) {
                        tmp2 = result;
                      }
                      return tmp2;
                    })(callback2, type)) {
                      const obj11 = { applicationId: null, nonce: null, channelId: null, guildId: null, commandOrigin: null, sectionName: null, source: null, onExecutedCallback: null, onConfirmActivityLaunchChecksAlertOpen: null, embeddedActivitiesManager: null };
                      obj11[0] = closure_1_1;
                      obj11[1] = closure_20;
                      obj11[2] = callback;
                      obj11[3] = closure_17;
                      obj11[4] = closure_1_7;
                      obj11[5] = closure_1_8;
                      obj11[6] = closure_1_9;
                      obj11[7] = closure_1_10;
                      obj11[8] = c15;
                      obj11[9] = closure_1_5;
                      type = 5;
                      c17 = 1;
                      obj12 = { value: null, done: false };
                      obj12[0] = (function maybeSendPrimaryAppCommand(arg0) {
                        const self = this;
                        const apply = closure_29.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(obj11);
                      return obj12;
                    }
                  }
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new closure_1_1(closure_1_2[27])(closure_1_1(closure_1_2[27]).Reasons.INVALID_CHANNEL);
                  throw throwTypeErrorResult;
                } else {
                  const obj13 = { applicationId: null, channelId: null, embeddedActivitiesManager: null, isStart: null, guildId: null };
                  obj13[0] = callback2;
                  obj13[1] = callback;
                  obj13[2] = c5;
                  obj13[3] = dependencyMap;
                  obj13[4] = c17;
                  type = 4;
                  c17 = 1;
                  obj14 = { value: null, done: false };
                  obj14[0] = (function joinEmbeddedActivity(arg0) {
                    const self = this;
                    const apply = closure_31.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(obj13);
                  return obj14;
                }
                const obj30 = callback2(709);
              }
            } else {
              if (4 === tmp7) {
                if (applicationId === 1) {
                  c17 = 3;
                  throw arg1;
                } else if (applicationId === 2) {
                  c15 = 0;
                  c17 = 3;
                  obj15 = { value: null, done: true };
                  obj15[0] = arg1;
                  return obj15;
                } else {
                  throwTypeErrorResult = c12;
                  closure_24 = arg1;
                  if (callback3 != null) {
                    callback3();
                  }
                  if ("failure" === closure_24.result) {
                    let tmp43 = callback2(9414);
                    tmp43 = new tmp43(callback2(9414).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, closure_24.reason);
                    throw tmp43;
                  }
                }
              } else if (applicationId === 1) {
                c17 = 3;
                throw arg1;
              } else if (applicationId === 2) {
                c15 = 0;
                c17 = 3;
                obj16 = { value: null, done: true };
                obj16[0] = arg1;
                return obj16;
              } else {
                throwTypeErrorResult = c12;
                closure_23 = arg1;
                throwTypeErrorResult = closure_23;
                if ("failure" === closure_23.result) {
                  throwTypeErrorResult = c12;
                  throwTypeErrorResult = currentUser;
                  throwTypeErrorResult = closure_23;
                  throwTypeErrorResult = constants;
                  if (closure_23.reason === constants.FAILED_ACTIVITY_LAUNCH_CHECKS) {
                    obj = callback2(709);
                    obj17 = { type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL", nonce: null, applicationId: null, channelId: null };
                    obj17[1] = c20;
                    obj17[2] = callback2;
                    c9 = callback;
                    if (callback == null) {
                      c9 = null;
                    }
                    obj17[3] = c9;
                    obj.dispatch(obj17);
                    c15 = 0;
                    c17 = 3;
                    return { value: false, done: true };
                  } else {
                    let tmp11 = callback2(9414);
                    tmp11 = new tmp11(callback2(9414).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
                    throw tmp11;
                  }
                }
              }
              obj3 = callback2(709);
              obj18 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: null, applicationId: null, channelId: null };
              obj18[1] = c20;
              obj18[2] = callback2;
              c7 = callback;
              if (callback == null) {
                c7 = null;
              }
              obj18[3] = c7;
              obj3.dispatch(obj18);
              c15 = 0;
              c17 = 3;
              return { value: true, done: true };
            }
          } catch (throwTypeErrorResult) {
            c14 = throwTypeErrorResult;
            throwTypeErrorResult = c15;
            if (tmp4 === c15) {
              throwTypeErrorResult = tmp2;
              c17 = tmp2;
              throw throwTypeErrorResult;
            } else {
              type = throwTypeErrorResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_27 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeSendPrimaryAppCommand() {
  const self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0, isAuthorized) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw isAuthorized;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = isAuthorized;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === store) {
            if (arg0 === 1) {
              c6 = 3;
              throw isAuthorized;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = isAuthorized;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              let v0;
              store = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              let tmp = callback;
              ({ applicationId: c0, nonce: c1, channelId: c2, guildId: c3, commandOrigin: c4, sectionName: closure_5, source: c6, onExecutedCallback: c7, onConfirmActivityLaunchChecksAlertOpen: c8, embeddedActivitiesManager: c9 } = callback);
              let store2;
              let guild;
              let channel;
              let currentUser;
              guild = undefined;
              let currentEmbeddedActivity;
              let currentEmbeddedActivity2;
              let application;
              let currentUser2;
              store = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw isAuthorized;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = isAuthorized;
              return obj1;
            } else {
              store2 = null;
              v0 = 1;
              store = 3;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback2(9415)(dependencyMap, callback);
              return obj2;
            }
          } else if (2 === tmp7) {
            v0 = 0;
            const message = c3;
            if (message.message === callback(9415).NO_PRIMARY_APP_COMMAND_ERROR) {
              const obj3 = { result: "failure", reason: null };
              obj3[1] = constants.NO_PRIMARY_APP_COMMAND;
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = obj3;
              return obj4;
            } else {
              throw message;
            }
          } else {
            if (3 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw isAuthorized;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = isAuthorized;
                return obj5;
              } else {
                tmp = callback2;
                store2 = isAuthorized;
                v0 = 0;
                tmp = dependencyMap;
                tmp = store2;
                tmp = callback;
                tmp = dependencyMap;
                guild = store2.handler !== callback(1956).ApplicationCommandHandler.APP_HANDLER;
                tmp = guild;
                if (!guild) {
                  if (!closure_24.includes(callback)) {
                    if (null != dependencyMap) {
                      const obj6 = { type: "channel", channelId: null };
                      obj6[1] = dependencyMap;
                      store = 4;
                      c6 = 1;
                      const obj7 = { value: null, done: false };
                      obj7[0] = v0(obj6);
                      return obj7;
                    }
                  }
                }
                currentUser = store2.getChannel(dependencyMap);
                guild = null;
                if (null != c3) {
                  guild = guild.getGuild(c3);
                }
                if (null == currentUser) {
                  const obj8 = { result: "failure", reason: null };
                  obj8[1] = constants.NO_CHANNEL;
                  c6 = 3;
                  const obj9 = { value: null, done: true };
                  obj9[0] = obj8;
                  return obj9;
                } else {
                  tmp = callback2;
                  tmp = guild;
                  if (guild) {
                    currentEmbeddedActivity = store.getApplication(callback);
                    currentEmbeddedActivity2 = currentEmbeddedActivity.getCurrentEmbeddedActivity();
                    application = undefined;
                    let applicationId;
                    if (currentEmbeddedActivity2 != null) {
                      applicationId = currentEmbeddedActivity2.applicationId;
                    }
                    if (null != applicationId) {
                      let applicationId1;
                      if (currentEmbeddedActivity2 != null) {
                        applicationId1 = currentEmbeddedActivity2.applicationId;
                      }
                      application = store.getApplication(applicationId1);
                    }
                    currentUser2 = currentUser.getCurrentUser();
                    if (null != currentUser2) {
                      let obj15 = callback(9417);
                      const obj10 = { applicationId: null, application: null, channel: null, currentEmbeddedApplication: null, embeddedActivitiesManager: null, user: null, onConfirmActivityLaunchChecksAlertOpen: null, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: false };
                      obj10[0] = callback;
                      obj10[1] = currentEmbeddedActivity;
                      obj10[2] = currentUser;
                      obj10[3] = application;
                      obj10[4] = c9;
                      obj10[5] = currentUser2;
                      obj10[6] = c8;
                      store = 8;
                      c6 = 1;
                      const obj11 = { value: null, done: false };
                      obj11[0] = obj15.confirmActivityLaunchChecks(obj10);
                      return obj11;
                    }
                  }
                  const promise = new Promise((arg0, arg1) => {
                    closure_0 = arg0;
                    closure_1 = arg1;
                    obj = {
                      command: closure_10,
                      optionValues: {},
                      context: obj,
                      commandOrigin: c4,
                      sectionName: closure_5,
                      source: c6,
                      interactionLifecycleOptionsFactory() {
                        return { nonce: closure_1, onSuccess() { ... }, onFailure() { ... } };
                      }
                    };
                    obj = { channel: closure_13, guild };
                    _undefined(_undefined2[36])(obj);
                  });
                  store = 7;
                  c6 = 1;
                  const obj12 = { value: null, done: false };
                  obj12[0] = promise;
                  return obj12;
                }
              }
            } else if (4 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw isAuthorized;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj13 = { value: null, done: true };
                obj13[0] = isAuthorized;
                return obj13;
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw isAuthorized;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj14 = { value: null, done: true };
                obj14[0] = isAuthorized;
                return obj14;
              } else {
                channel = store2.getChannel(dependencyMap);
                tmp = dependencyMap;
                obj15 = { applicationId: null, channel: null, commandIntegrationTypes: null };
                tmp = callback;
                obj15[0] = callback;
                tmp = channel;
                obj15[1] = channel;
                tmp = store2;
                obj15[2] = store2.integration_types;
                store = 6;
                c6 = 1;
                const obj16 = { value: null, done: false };
                obj16[0] = callback(9416).installApplicationOnDemandIfNeeded(obj15);
                return obj16;
              }
            } else if (6 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw isAuthorized;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj17 = { value: null, done: true };
                obj17[0] = isAuthorized;
                return obj17;
              } else if (!isAuthorized.isAuthorized) {
                const obj18 = { result: "failure", reason: null };
                obj18[1] = constants.UNAUTHORIZED;
                c6 = 3;
                const obj19 = { value: null, done: true };
                obj19[0] = obj18;
                return obj19;
              }
            } else if (7 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw isAuthorized;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj20 = { value: null, done: true };
                obj20[0] = isAuthorized;
                return obj20;
              } else {
                c6 = 3;
                const obj21 = { value: null, done: true };
                obj21[0] = { result: "success" };
                return obj21;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw isAuthorized;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj22 = { value: null, done: true };
              obj22[0] = isAuthorized;
              return obj22;
            } else if (!isAuthorized) {
              obj = { result: "failure", reason: null };
              obj[1] = constants.FAILED_ACTIVITY_LAUNCH_CHECKS;
              c6 = 3;
              const obj23 = { value: null, done: true };
              obj23[0] = obj;
              return obj23;
            }
            store = 5;
            c6 = 1;
            const obj24 = { value: null, done: false };
            obj24[0] = v0({ type: "user" });
            return obj24;
          }
        } catch (tmp85) {
          c3 = tmp85;
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp85;
          } else {
            store = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _joinEmbeddedActivity() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (application === 2) {
        application = 3;
        HermesBuiltin.throwTypeError();
      } else {
        let showResult = arg0;
        showResult = tmp3;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            application = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                application = 3;
                throw arg1;
              } else if (arg0 === 2) {
                application = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c3 = tmp2;
                dependencyMap = tmp5;
                let callback;
                let callback2;
                dependencyMap = undefined;
                c3 = undefined;
                c4 = undefined;
                showResult = callback;
                ({ applicationId: c0, channelId: c1, embeddedActivitiesManager: c2, isStart: c3, guildId: c4 } = callback);
                application = undefined;
                let currentUser2;
                closure_7 = undefined;
                closure_8 = undefined;
                let sessionId;
                let channel;
                closure_11 = undefined;
                let currentEmbeddedActivity2;
                let currentUser;
                closure_14 = undefined;
                let currentEmbeddedActivity;
                let obj20;
                c4 = 1;
                application = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                application = 3;
                throw arg1;
              } else if (arg0 === 2) {
                application = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                showResult = dependencyMap;
                showResult = c3;
                showResult = sessionId;
                application = sessionId.getSessionId();
                showResult = currentUser;
                currentUser2 = currentUser.getCurrentUser();
                showResult = callback;
                closure_7 = callback;
                showResult = closure_7;
                showResult = null;
                if (null == closure_7) {
                  const obj2 = { result: "failure", reason: null };
                  obj2[1] = constants.NO_APPLICATION_ID;
                  application = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = obj2;
                  return obj3;
                } else {
                  c4 = 2;
                  application = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = callback2(9418)(closure_7, callback2);
                  return obj4;
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  application = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  application = 3;
                  const obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                } else {
                  showResult = dependencyMap;
                  closure_8 = arg1;
                  showResult = currentUser2;
                  showResult = null;
                  if (null != currentUser2) {
                    showResult = dependencyMap;
                    showResult = closure_8;
                    if (null != closure_8) {
                      showResult = dependencyMap;
                      showResult = callback2;
                      if (null == callback2) {
                        const obj6 = { result: "failure", reason: null };
                        obj6[1] = constants.INVALID_CHANNEL;
                        application = 3;
                        const obj7 = { value: null, done: true };
                        obj7[0] = obj6;
                        return obj7;
                      } else {
                        showResult = dependencyMap;
                        showResult = c3;
                        showResult = channel;
                        showResult = callback2;
                        sessionId = channel.getChannel(callback2);
                        showResult = sessionId;
                        if (null == sessionId) {
                          let obj8 = { result: "failure", reason: null };
                          obj8[1] = constants.INVALID_CHANNEL;
                          application = 3;
                          const obj9 = { value: null, done: true };
                          obj9[0] = obj8;
                          return obj9;
                        } else {
                          showResult = dependencyMap;
                          showResult = c3;
                          showResult = callback;
                          showResult = dependencyMap;
                          const obj10 = { channelId: null, ChannelStore: null, GuildStore: null, PermissionStore: null, VoiceStateStore: null };
                          showResult = callback2;
                          obj10[0] = callback2;
                          showResult = channel;
                          obj10[1] = channel;
                          showResult = closure_11;
                          obj10[2] = closure_11;
                          showResult = currentEmbeddedActivity2;
                          obj10[3] = currentEmbeddedActivity2;
                          showResult = closure_14;
                          obj10[4] = closure_14;
                          channel = callback(9425).getEmbeddedActivityLaunchability(obj10);
                          showResult = channel;
                          showResult = callback;
                          showResult = dependencyMap;
                          if (channel !== callback(9425).EmbeddedActivityLaunchability.CAN_LAUNCH) {
                            closure_11 = constants.LAUNCHABILITY_CHECK_FAILED_OTHER;
                            if (channel === callback(9425).EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION) {
                              closure_11 = constants.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                              let obj24 = callback(9426);
                              const result = obj24.showActivitiesInvalidPermissionsAlert();
                            } else {
                              showResult = dependencyMap;
                              showResult = c3;
                              showResult = channel;
                              showResult = callback;
                              showResult = dependencyMap;
                              if (channel === callback(9425).EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS) {
                                showResult = dependencyMap;
                                showResult = c3;
                                showResult = constants;
                                closure_11 = constants.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                                showResult = callback2;
                                showResult = dependencyMap;
                                const obj11 = { title: null, body: null, hideActionSheet: false };
                                showResult = callback;
                                showResult = dependencyMap;
                                const intl = callback(1236).intl;
                                showResult = callback;
                                showResult = dependencyMap;
                                obj11[0] = intl.string(callback(1236).t["IOy+I5"]);
                                showResult = callback;
                                showResult = dependencyMap;
                                const intl2 = callback(1236).intl;
                                showResult = callback;
                                showResult = dependencyMap;
                                obj11[1] = intl2.string(callback(1236).t.UXoQTp);
                                showResult = callback2(4822).show(obj11);
                                const obj41 = callback2(4822);
                              }
                            }
                            { result: "failure", reason: null }[1] = closure_11;
                            application = 3;
                          } else {
                            showResult = dependencyMap;
                            showResult = c3;
                            showResult = currentEmbeddedActivity;
                            currentEmbeddedActivity2 = currentEmbeddedActivity.getCurrentEmbeddedActivity();
                            currentUser = undefined;
                            let applicationId;
                            if (currentEmbeddedActivity2 != null) {
                              applicationId = currentEmbeddedActivity2.applicationId;
                            }
                            if (null != applicationId) {
                              let applicationId1;
                              if (currentEmbeddedActivity2 != null) {
                                applicationId1 = currentEmbeddedActivity2.applicationId;
                              }
                              currentUser = application.getApplication(applicationId1);
                            }
                            if (c3) {
                              let obj21 = callback(9417);
                              const obj12 = { applicationId: null, application: null, channel: null, currentEmbeddedApplication: null, embeddedActivitiesManager: null, user: null };
                              obj12[0] = callback;
                              obj12[1] = closure_8;
                              obj12[2] = sessionId;
                              obj12[3] = currentUser;
                              obj12[4] = dependencyMap;
                              obj12[5] = currentUser2;
                              c4 = 3;
                              application = 1;
                              const obj13 = { value: null, done: false };
                              obj13[0] = obj21.confirmActivityLaunchChecks(obj12);
                              return obj13;
                            }
                          }
                          const obj39 = callback(9425);
                        }
                      }
                    }
                  }
                  const obj14 = { result: "failure", reason: null };
                  obj14[1] = constants.UNKNOWN_USER_OR_APPLICATION;
                  application = 3;
                  let obj15 = { value: null, done: true };
                  obj15[0] = obj14;
                  return obj15;
                }
              } else {
                if (3 === tmp5) {
                  if (arg0 === 1) {
                    application = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    application = 3;
                    const obj16 = { value: null, done: true };
                    obj16[0] = arg1;
                    return obj16;
                  } else if (!arg1) {
                    const obj17 = { result: "failure", reason: null };
                    obj17[1] = constants.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    application = 3;
                    const obj18 = { value: null, done: true };
                    obj18[0] = obj17;
                    return obj18;
                  }
                } else if (4 === tmp5) {
                  if (arg0 === 1) {
                    application = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    application = 3;
                    const obj19 = { value: null, done: true };
                    obj19[0] = arg1;
                    return obj19;
                  } else if (arg1) {
                    obj20 = { trackedActionData: null, retries: 3, oldFormErrors: true, rejectWithError: true };
                    obj21 = { event: null, properties: null };
                    obj21[0] = callback(503).NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH;
                    const obj22 = { guild_id: null, channel_id: null, application_id: null, session_id: null };
                    obj22[0] = c4;
                    obj22[1] = callback2;
                    obj22[2] = callback;
                    obj22[3] = application;
                    obj21[1] = obj22;
                    obj20[0] = obj21;
                    if (null != callback2) {
                      obj15 = callback2(4679);
                      const obj23 = { url: null, body: null };
                      obj23[0] = closure_22.ACTIVITY_CHANNEL_LAUNCH(callback2, callback);
                      obj24 = { session_id: null, guild_id: null };
                      obj24[0] = application;
                      callback2 = c4;
                      if (c4 == null) {
                        callback2 = undefined;
                      }
                      obj24[1] = callback2;
                      obj23[1] = obj24;
                      const merged = Object.assign(obj20);
                      c4 = 5;
                      application = 1;
                      const obj25 = { value: null, done: false };
                      obj25[0] = obj15.post(obj23);
                      return obj25;
                    } else {
                      const obj26 = { result: "failure", reason: null };
                      obj26[1] = constants.OTHER;
                      application = 3;
                    }
                  } else {
                    const obj27 = { result: "failure", reason: null };
                    obj27[1] = constants.NOT_CONNECTED_TO_VOICE_CHANNEL;
                    application = 3;
                    const obj28 = { value: null, done: true };
                    obj28[0] = obj27;
                    return obj28;
                  }
                } else if (arg0 === 1) {
                  application = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  obj = { result: "success" };
                }
                application = 3;
                const obj29 = { value: null, done: true };
                obj29[0] = arg1;
                return obj29;
              }
              if (null != sessionId) {
                showResult = dependencyMap;
                showResult = c3;
                showResult = callback2;
                showResult = dependencyMap;
                showResult = sessionId;
                closure_14 = callback2(9427)(sessionId.id);
                showResult = obj20;
                showResult = sessionId;
                currentEmbeddedActivity = obj20.includes(sessionId.type);
                showResult = closure_14;
                showResult = dependencyMap;
                showResult = c3;
                if (closure_14) {
                  const obj30 = { channelId: null, bypassChangeModal: null };
                  obj30[0] = sessionId.id;
                  obj30[1] = null != currentUser;
                  c4 = 4;
                  application = 1;
                  const obj31 = { value: null, done: false };
                  obj31[0] = callback2(9428)(obj30);
                  return obj31;
                } else {
                  obj8 = callback(8090);
                  const obj32 = { result: "failure", reason: null };
                  obj32[1] = constants.AIT_NOT_ENABLED_FOR_USER;
                  application = 3;
                  const obj33 = { value: null, done: true };
                  obj33[0] = obj32;
                  return obj33;
                }
              }
            }
          } catch (tmp96) {
            application = showResult;
            throw tmp96;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_31 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function stopEmbeddedActivity(showFeedback) {
  ({ location: _location, applicationId } = showFeedback);
  let flag = showFeedback.showFeedback;
  if (flag === undefined) {
    flag = true;
  }
  let obj = store;
  const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(_location);
  obj = { type: "EMBEDDED_ACTIVITY_CLOSE", applicationId, location: _location, instanceId: null, showFeedback: null };
  let launchId;
  if (selfEmbeddedActivityForLocation != null) {
    launchId = selfEmbeddedActivityForLocation.launchId;
  }
  obj[3] = launchId;
  obj[4] = flag;
  dispatcherDefault.dispatch(obj);
  const obj2 = dispatcherDefault;
  const tmp2 = importDefault;
  const tmp6 = applicationId;
  const embeddedActivityLocationChannelId = applicationId(4080).getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    selectedParticipantId = selectedParticipantId.getSelectedParticipantId(embeddedActivityLocationChannelId);
    currentUser = currentUser.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    const embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === applicationId);
    if (null != found) {
      if (null != id) {
        if ("" !== id) {
          obj = { applicationId: null, instanceId: null };
          obj[0] = applicationId;
          let compositeInstanceId;
          if (found != null) {
            compositeInstanceId = found.compositeInstanceId;
          }
          obj[1] = compositeInstanceId;
          if (selectedParticipantId === tmp6Result.getEmbeddedActivityParticipantId(obj)) {
            const participant = _modDef4687.selectParticipant(embeddedActivityLocationChannelId, null);
            const tmp2Result = _modDef4687;
          }
          tmp6Result = tmp6(9429);
        }
      }
    }
  }
}
function _fetchDeveloperApplications() {
  const self = this;
  const tmp = callback(function*() {
    let applications = tmp3;
    c3 = 1;
    closure_1_1(closure_1_2[25]).dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
    const HTTP = closure_1_0(closure_1_2[50]).HTTP;
    obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
    obj1[0] = closure_1_22.APPLICATIONS_WITH_ASSETS;
    obj1[1] = { with_team_applications: true };
    yield HTTP.get(obj1);
    if (1 === tmp7) {
      c3 = 0;
      obj1 = applications(709);
      obj1.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_0 = arg1;
      applications = closure_0.body.applications;
      dependencyMap = applications.map((arg0) => closure_8.createFromServer(arg0));
      const obj3 = { type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: null, assets: null };
      obj3[1] = dependencyMap;
      obj3[2] = closure_0.body.assets;
      applications(709).dispatch(obj3);
      const obj6 = applications(709);
      const obj4 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: null };
      obj4[1] = applications;
      applications(709).dispatch(obj4);
      c3 = 0;
      const obj8 = applications(709);
    }
    c3 = 0;
    return arg1;
  });
  closure_33 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _uploadImageAttachment() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              let lib;
              c6 = 1;
              callback(709).dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
              let tmp29;
              if (null != callback) {
                obj1 = { channel_id: null };
                obj1[0] = callback;
                tmp29 = obj1;
              }
              const HTTP = lib(530).HTTP;
              const obj2 = { url: null, query: null, attachments: null, rejectWithError: true };
              obj2[0] = closure_1_22.APPLICATION_UPLOAD_ATTACHMENT(lib);
              obj2[1] = tmp29;
              const obj3 = { name: "file", file: null };
              obj3[1] = dependencyMap;
              const items = [obj3];
              obj2[2] = items;
              c7 = 2;
              c8 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            callback = closure_5;
            obj4 = callback(709);
            obj4.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" });
            const tmp27 = new callback(4345)(callback);
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = tmp27;
            return obj5;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            lib = arg1;
            obj = callback(709);
            const obj7 = { type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: null };
            obj7[1] = lib.body.attachment;
            obj.dispatch(obj7);
            c6 = 0;
            c8 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = lib.body.attachment;
            return obj8;
          }
        } catch (tmp33) {
          closure_5 = tmp33;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp33;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_34 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleFetchDone(arg0, arg1, guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === arg0;
  if (!tmp) {
    tmp = null == guildId && null == arg0;
    const tmp3 = null == guildId && null == arg0;
  }
  if (tmp) {
    arg1();
  }
}
function _fetchShelf() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    const iter = (function*(arg0) {
      if (c9 === 2) {
        c9 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c9 = 2;
            if (0 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c9 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c5 = tmp3;
                c4 = tmp7;
                let callback;
                let callback2;
                ({ guildId: c0, force } = callback);
                if (force === undefined) {
                  force = false;
                }
                callback2 = force;
                let shelfActivities;
                closure_3 = undefined;
                c4 = undefined;
                c5 = undefined;
                let promise;
                c7 = undefined;
                c8 = undefined;
                c9 = undefined;
                closure_10 = undefined;
                closure_11 = undefined;
                closure_12 = undefined;
                c8 = 1;
                c9 = 1;
                return { value: "ct", done: true };
              }
            } else {
              if (1 === tmp7) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c9 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = c4;
                  throwTypeErrorResult = c5;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = closure_0;
                  shelfActivities = store.getShelfActivities(closure_0);
                  throwTypeErrorResult = shelfActivities;
                  const mapped = shelfActivities.map((application_id) => _undefined.getApplication(application_id.application_id));
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = shelfActivities;
                  closure_3 = mapped.filter(callback(shelfActivities[51]).isNotNullish);
                  throwTypeErrorResult = closure_1_1;
                  if (!closure_1_1) {
                    if (!store.shouldFetchShelf(closure_0)) {
                      const shelfFetchStatus = store.getShelfFetchStatus(closure_0);
                      let isFetching;
                      if (shelfFetchStatus != null) {
                        isFetching = shelfFetchStatus.isFetching;
                      }
                      if (isFetching) {
                        promise = new Promise((cache) => {
                          closure_4 = closure_1_35.bind(null, c0, cache);
                          const subscription = callback(709).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_4);
                        });
                        promise = new Promise((cache) => {
                          closure_5 = closure_1_35.bind(null, c0, cache);
                          const subscription = callback(709).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_5);
                        });
                        c7 = promise;
                        const items = [promise, c7];
                        c8 = 3;
                        c9 = 1;
                        let obj2 = { value: null, done: false };
                        obj2[0] = Promise.race(items);
                        return obj2;
                      } else {
                        const obj3 = { activityConfigs: null, applications: null };
                        obj3[0] = shelfActivities;
                        obj3[1] = closure_3;
                        c9 = 3;
                      }
                    }
                  }
                  c7 = 1;
                  let obj15 = callback2(shelfActivities[25]);
                  const obj4 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: null };
                  obj4[1] = closure_0;
                  obj15.dispatch(obj4);
                  let tmp82;
                  if (undefined !== closure_0) {
                    if ("" !== closure_0) {
                      const obj5 = { guild_id: null };
                      obj5[0] = closure_0;
                      tmp82 = obj5;
                    }
                  }
                  c8 = tmp82;
                  let obj18 = callback2(shelfActivities[46]);
                  const obj6 = { url: null, query: null, trackedActionData: null, retries: 0, oldFormErrors: true, rejectWithError: true };
                  obj6[0] = constants.ACTIVITY_SHELF;
                  obj6[1] = c8;
                  let obj7 = { event: null, properties: null };
                  obj7[0] = callback(shelfActivities[45]).NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF;
                  const obj8 = { guild_id: null };
                  obj8[0] = callback;
                  obj7[1] = obj8;
                  obj6[2] = obj7;
                  c8 = 4;
                  c9 = 1;
                  let obj9 = { value: null, done: false };
                  obj9[0] = obj18.get(obj6);
                  return obj9;
                }
              } else if (2 === tmp7) {
                c7 = 0;
                obj9 = callback2(shelfActivities[25]);
                const obj10 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: null };
                obj10[1] = closure_0;
                obj9.dispatch(obj10);
                const obj11 = { activityConfigs: null, applications: null };
                obj11[0] = shelfActivities;
                obj11[1] = closure_3;
                c9 = 3;
                const obj12 = { value: null, done: true };
                obj12[0] = obj11;
                return obj12;
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  throwTypeErrorResult = c4;
                  throwTypeErrorResult = c4;
                  if (null != c4) {
                    obj7 = callback2(shelfActivities[25]);
                    obj7.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", c4);
                    c4 = undefined;
                  }
                  if (null != c5) {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = c5;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = shelfActivities;
                    throwTypeErrorResult = c5;
                    throwTypeErrorResult = callback2(shelfActivities[25]).unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", c5);
                    c5 = undefined;
                    const obj27 = callback2(shelfActivities[25]);
                  }
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                const obj13 = { value: null, done: true };
                obj13[0] = arg1;
                return obj13;
              } else {
                throwTypeErrorResult = c4;
                c9 = arg1;
                throwTypeErrorResult = c9;
                const activities = c9.body.activities;
                callback2 = activities;
                if (activities == null) {
                  callback2 = [];
                }
                closure_10 = callback2;
                const applications = c9.body.applications;
                shelfActivities = applications;
                if (applications == null) {
                  shelfActivities = [];
                }
                closure_11 = shelfActivities;
                const assets = c9.body.assets;
                closure_3 = assets;
                if (assets == null) {
                  closure_3 = {};
                }
                closure_12 = closure_3;
                obj = callback2(shelfActivities[25]);
                const obj14 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", guildId: null, activities: null, applications: null, assets: null };
                obj14[1] = callback;
                obj14[2] = closure_10;
                obj14[3] = closure_11;
                obj14[4] = closure_12;
                obj.dispatch(obj14);
                if (closure_11.length > 0) {
                  obj2 = callback2(shelfActivities[25]);
                  obj15 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: null };
                  obj15[1] = closure_11;
                  obj2.dispatch(obj15);
                }
                const obj16 = { activityConfigs: null, applications: null };
                obj16[0] = closure_10;
                obj16[1] = closure_11.map((arg0) => c8.createFromServer(arg0));
                c7 = 0;
                c9 = 3;
                const obj17 = { value: null, done: true };
                obj17[0] = obj16;
                return obj17;
              }
              c9 = 3;
              obj18 = { value: null, done: true };
              obj18[0] = arg1;
              return obj18;
            }
          } catch (tmp96) {
            promise = tmp96;
            if (tmp4 === c7) {
              c9 = tmp2;
              throw tmp96;
            } else {
              c8 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_36 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _sendEmbeddedActivityInvite() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let callback = tmp2;
              c0 = undefined;
              callback = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              ({ activityChannelId: c0, invitedChannelId: c1, applicationId: c2, location: c3, inviteAnalyticsMetadata: c4 } = c0);
              let code;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj2 = callback(8595);
              obj2 = { target_type: null, target_application_id: null };
              obj2[0] = constants.EMBEDDED_APPLICATION;
              obj2[1] = dependencyMap;
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj2.createInvite(c0, obj2, c3);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            code = arg1;
            if (null != channel.getChannel(callback)) {
              obj = callback(7148);
              obj.sendInvite(callback, code.code, c3, c4);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp30) {
          c4 = tmp;
          throw tmp30;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_37 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _sendEmbeddedActivityInviteUser() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let callback = tmp2;
              c0 = undefined;
              callback = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ channelId: c0, applicationId: c1, userId: c2, location: c3, inviteAnalyticsMetadata: c4, prefixedContent: c5 } = c0);
              closure_6 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj4 = callback(8595);
              let obj2 = { target_type: null, target_application_id: null };
              obj2[0] = constants.EMBEDDED_APPLICATION;
              obj2[1] = callback;
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj4.createInvite(c0, obj2, c3);
              return obj3;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              closure_6 = arg1;
              obj1 = callback(4459);
              c3 = 3;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = obj1.ensurePrivateChannel(dependencyMap).then((c1) => {
                const channel = closure_1_10.getChannel(c1);
                if (null == channel) {
                  const _Error = Error;
                  error = new Error("Private channel not found");
                  throw error;
                } else {
                  let content;
                  if (null != c5) {
                    content = _undefined(_undefined2[55]).parse(channel, tmp2).content;
                    const obj = _undefined(_undefined2[55]);
                  }
                  const obj2 = _undefined(_undefined2[53]);
                  obj2.sendInvite(c1, code.code, c3, c4, content);
                }
              });
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c4 = tmp;
          throw tmp19;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_38 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _validateTestMode() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = 1;
              const HTTP = callback(table[50]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
              obj1[0] = closure_1_22.ACTIVITY_TEST_MODE(callback);
              table = 2;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp6) {
            c4 = 0;
            c1 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            c1 = 3;
            return { value: true, done: true };
          }
        } catch (tmp13) {
          closure_3 = tmp13;
          if (tmp3 === c4) {
            c1 = tmp2;
            throw tmp13;
          } else {
            table = tmp;
          }
        }
      }
    })();
  });
  closure_39 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function createProxyTicket(applicationId, id) {
  const self = this;
  const apply = _createProxyTicket.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createProxyTicket() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, body) {
      obj1 = {};
      if (null != closure_1) {
        obj1.channel_id = closure_1;
      }
      const HTTP = callback(table[50]).HTTP;
      const obj2 = { url: null, body: null, rejectWithError: true };
      obj2[0] = closure_1_22.APPLICATION_PROXY_TICKET(callback);
      obj2[1] = obj1;
      yield HTTP.post(obj2);
      return body.body.ticket;
    })();
  });
  closure_41 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _refreshProxyTicket() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, arg1) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let PRIVATE_CHANNEL = tmp4;
              closure_4 = tmp6;
              let dispatchResult = callback2;
              dependencyMap = undefined;
              let guild_id;
              closure_4 = undefined;
              PRIVATE_CHANNEL = undefined;
              dispatchResult = callback2;
              dispatchResult = closure_1_2;
              dispatchResult = callback;
              obj1 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: true };
              obj1[1] = callback;
              dispatchResult = callback2(closure_1_2[25]).dispatch(obj1);
              c7 = 2;
              guild_id = callback2;
              dispatchResult = closure_1_40;
              if (callback2 == null) {
                guild_id = undefined;
              }
              c8 = 3;
              c9 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = dispatchResult(dispatchResult, guild_id);
              return obj2;
            }
          } else if (1 === tmp9) {
            c7 = 0;
            let obj6 = callback2(709);
            const obj3 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
            obj3[1] = callback;
            obj6.dispatch(obj3);
            throw closure_6;
          } else if (2 === tmp9) {
            c7 = 1;
            guild_id = channel.getChannel(callback2);
            guild_id = undefined;
            if (guild_id != null) {
              guild_id = guild_id.guild_id;
            }
            dependencyMap = guild_id;
            if (guild_id == null) {
              dependencyMap = null;
            }
            closure_4 = dependencyMap;
            if (null != closure_4) {
              PRIVATE_CHANNEL = callback(9412).EmbeddedActivityLocationKind.GUILD_CHANNEL;
            } else {
              PRIVATE_CHANNEL = callback(9412).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
            }
            let tmp36 = callback2(709);
            let dispatch = tmp36.dispatch;
            let obj4 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: null, applicationId: null, channelId: null, guildId: null, locationKind: null, error: null };
            obj4 = callback(7445);
            obj4[1] = obj4.createNonce();
            obj4[2] = callback;
            obj4[3] = callback2;
            obj4[4] = closure_4;
            obj4[5] = PRIVATE_CHANNEL;
            if (!(closure_6 instanceof callback2(9414))) {
              if (!(closure_6 instanceof callback2(4345))) {
                if (!(closure_6 instanceof callback2(4708))) {
                  let tmp63 = new callback2(4345)(closure_6);
                }
                obj4[6] = tmp63;
                dispatch(obj4);
                c7 = 0;
                tmp36 = callback2(709);
                dispatch = tmp36.dispatch;
                const obj5 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
                obj5[1] = callback;
                obj4 = dispatch(obj5);
                c9 = 3;
              }
            }
            tmp63 = closure_6;
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 0;
            obj = callback2(709);
            obj6 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
            obj6[1] = callback;
            obj.dispatch(obj6);
            c9 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            dependencyMap = arg1;
            const obj8 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId: null, channelId: null, proxyTicket: null };
            obj8[1] = callback;
            obj8[2] = callback2;
            obj8[3] = dependencyMap;
            callback2(709).dispatch(obj8);
            const obj12 = callback2(709);
            const obj9 = { type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: null, proxyTicket: null };
            obj9[1] = callback;
            dispatchResult = dependencyMap;
            obj9[2] = dependencyMap;
            dispatchResult = callback2(709).dispatch(obj9);
            c7 = 0;
            dispatchResult = closure_4;
            dispatchResult = PRIVATE_CHANNEL;
            dispatchResult = callback2;
            dispatchResult = dependencyMap;
            const obj14 = callback2(709);
            const obj10 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
            dispatchResult = callback;
            obj10[1] = callback;
            dispatchResult = callback2(709).dispatch(obj10);
            c9 = 3;
            return { value: true, done: true };
          }
        } catch (tmp80) {
          closure_6 = tmp80;
          if (tmp5 === c7) {
            c9 = tmp3;
            throw tmp80;
          } else if (tmp2 === tmp82) {
            c8 = tmp2;
          } else {
            c8 = dispatchResult;
          }
        }
      }
    })();
  });
  closure_42 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_18, AnalyticsGameOpenTypes: closure_19, ApplicationFlags: closure_20, ChannelTypes: closure_21, Endpoints: closure_22, PopoutWindowKeys: closure_23 } = ME);
let closure_28 = { NO_PRIMARY_APP_COMMAND: 1, [1]: "NO_PRIMARY_APP_COMMAND", UNAUTHORIZED: 2, [2]: "UNAUTHORIZED", NO_CHANNEL: 3, [3]: "NO_CHANNEL", FAILED_ACTIVITY_LAUNCH_CHECKS: 4, [4]: "FAILED_ACTIVITY_LAUNCH_CHECKS" };
let closure_30 = { OTHER: 0, [0]: "OTHER", NO_APPLICATION_ID: 1, [1]: "NO_APPLICATION_ID", UNKNOWN_USER_OR_APPLICATION: 2, [2]: "UNKNOWN_USER_OR_APPLICATION", INVALID_CHANNEL: 3, [3]: "INVALID_CHANNEL", LAUNCHABILITY_CHECK_FAILED_OTHER: 4, [4]: "LAUNCHABILITY_CHECK_FAILED_OTHER", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 5, [5]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", FAILED_ACTIVITY_LAUNCH_CHECKS: 7, [7]: "FAILED_ACTIVITY_LAUNCH_CHECKS", NOT_CONNECTED_TO_VOICE_CHANNEL: 8, [8]: "NOT_CONNECTED_TO_VOICE_CHANNEL", AIT_NOT_ENABLED_FOR_USER: 9, [9]: "AIT_NOT_ENABLED_FOR_USER" };
let result = require("set").fileFinishedImporting("modules/activities/EmbeddedActivitiesActionCreators.tsx");

export const maybeDisconnectFromCurrentActivity = function maybeDisconnectFromCurrentActivity(location) {
  const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(location);
  if (null != selfEmbeddedActivityForLocation) {
    const obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj[0], applicationId: obj[1] } = selfEmbeddedActivityForLocation);
    stopEmbeddedActivity(obj);
  }
};
export const runPrimaryAppCommandOrJoinEmbeddedActivity = function runPrimaryAppCommandOrJoinEmbeddedActivity(arg0) {
  const self = this;
  const apply = _runPrimaryAppCommandOrJoinEmbeddedActivity.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { stopEmbeddedActivity };
export const requestRespondToSeriousThermalState = function requestRespondToSeriousThermalState() {
  dispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE" });
};
export const consumeRequestToReactToSeriousThermalState = function consumeRequestToReactToSeriousThermalState() {
  dispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST" });
};
export const disregardSeriousThermalState = function disregardSeriousThermalState() {
  dispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE" });
};
export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  const self = this;
  const apply = _fetchDeveloperApplications.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadImageAttachment = function uploadImageAttachment(id, id2, arg2) {
  const self = this;
  const apply = _uploadImageAttachment.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchShelf = function fetchShelf(arg0) {
  const self = this;
  const apply = _fetchShelf.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendEmbeddedActivityInvite = function sendEmbeddedActivityInvite() {
  const self = this;
  const apply = _sendEmbeddedActivityInvite.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendEmbeddedActivityInviteUser = function sendEmbeddedActivityInviteUser(arg0) {
  const self = this;
  const apply = _sendEmbeddedActivityInviteUser.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissNewActivityIndicator = function dismissNewActivityIndicator() {
  let INDIRECT_ACTION = arg0;
  if (arg0 === undefined) {
    INDIRECT_ACTION = ContentDismissActionType.INDIRECT_ACTION;
  }
  const obj = addVersionedDismissedContent;
  const result = obj.markVersionedDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), { dismissAction: INDIRECT_ACTION });
};
export const validateTestMode = function validateTestMode() {
  const self = this;
  const apply = _validateTestMode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateActivityPanelMode = function updateActivityPanelMode(PANEL) {
  let obj = dispatcherDefault;
  obj = { type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: PANEL };
  obj.dispatch(obj);
};
export const updateFocusedActivityLayout = function updateFocusedActivityLayout(focusedActivityLayout) {
  let obj = dispatcherDefault;
  obj = { type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout };
  obj.dispatch(obj);
};
export const openActivityPopoutWindow = function openActivityPopoutWindow() {
  dispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: ActivityPanelModes.ACTIVITY_POPOUT_WINDOW });
  const obj = dispatcherDefault;
  dispatcherDefault.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
};
export const updateActivityPopoutWindowLayout = function updateActivityPopoutWindowLayout(layout) {
  let obj = dispatcherDefault;
  obj = { type: "EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT", layout };
  obj.dispatch(obj);
};
export { createProxyTicket };
export const refreshProxyTicket = function refreshProxyTicket() {
  const self = this;
  const apply = _refreshProxyTicket.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};