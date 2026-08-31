// discord_app/modules/contact_sync/native/ContactSyncModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4691 from "../../../actions/ModalActionCreators.tsx";
import showInstantInviteActionSheet from "../../instant_invite/native/InstantInviteUtils.tsx";
import _uploadContacts from "ContactSyncUtils.tsx";
import Steps from "ContactSyncAnalyticsUtils.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../stores/ConnectedAccountsStore.tsx";
import closure_5 from "../../../stores/UserStore.tsx";
import ContactSyncModes from "ContactSyncModalStore.tsx";
import setStoredContacts from "ContactSyncPersistedStore.tsx";
import ContactSyncLandingPage from "ContactSyncConstants.tsx";
import ME from "../../../Constants.tsx";
import NativePermissionStatus from "../../native_permissions/NativePermissionConstants.tsx";

require = arg1;
function handleNameInputScreenOrSuggestions() {
  const self = this;
  const apply = _handleNameInputScreenOrSuggestions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleNameInputScreenOrSuggestions() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v02 = 2;
          if (0 === trackResult1) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              let name = tmp5;
              trackResult1 = callback;
              trackResult1 = navigation;
              dependencyMap = undefined;
              name = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              let v0;
              trackResult1 = undefined;
              v02 = undefined;
              let length;
              let SUGGESTIONS;
              let SUGGESTIONS_RESULTS;
              closure_12 = undefined;
              trackResult1 = closure_1_4;
              trackResult1 = closure_1_22;
              dependencyMap = closure_1_4.getLocalAccount(closure_1_22.CONTACTS);
              trackResult1 = closure_1_12;
              name = closure_1_12.getState().name;
              trackResult1 = callback;
              trackResult1 = closure_1_2;
              trackResult1 = 1;
              v02 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(closure_1_2[8]).checkContactPermissions();
              return obj1;
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              trackResult1 = name;
              trackResult1 = closure_4;
              closure_4 = arg1;
              trackResult1 = closure_4;
              trackResult1 = trackResult1(closure_4);
              trackResult1 = closure_4;
              trackResult1 = constants;
              if (closure_4 === constants.NOT_DETERMINED) {
                callback(12187).trackFlowStep(callback(12187).Steps.PERMISSION_REQUESTED, false, false);
                const obj16 = callback(12187);
              }
              v0 = 1;
              trackResult1 = 3;
              v02 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(12185).getContacts(callback);
              return obj3;
            }
          } else {
            if (2 === tmp8) {
              v0 = 0;
              closure_13 = closure_5;
              let obj12 = navigation(698);
              const obj4 = { type: null, action: null };
              obj4[0] = constants5.CONTACTS;
              obj4[1] = constants4.DENIED;
              obj12.track(constants3.PERMISSIONS_ACKED, obj4);
              if (closure_13 === callback(12185).ContactSyncPermissionDenied) {
                const obj15 = callback(12187);
                obj15.trackFlowStep(callback(12187).Steps.LANDING, true, false, { mobile_contacts_permission: "denied" });
                trackResult1(constants.UNAUTHORIZED);
              } else {
                const intl = callback(1236).intl;
                v0(intl.string(callback(1236).t.fGrbRX));
                callback2();
              }
              v02 = 3;
            } else {
              if (3 === tmp8) {
                if (arg0 === 1) {
                  v02 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 0;
                  v02 = 3;
                  let obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                } else {
                  trackResult1 = name;
                  trackResult1 = closure_4;
                  closure_5 = arg1;
                  trackResult1 = closure_5;
                  v0 = closure_5.names;
                  trackResult1 = closure_5;
                  trackResult1 = closure_5.ownName;
                  trackResult1 = closure_5;
                  v02 = closure_5.payload;
                  trackResult1 = callback3;
                  trackResult1 = v0;
                  trackResult1 = callback3(v0);
                  trackResult1 = navigation;
                  trackResult1 = dependencyMap;
                  trackResult1 = constants3;
                  let obj6 = { type: null, action: null };
                  trackResult1 = constants5;
                  obj6[0] = constants5.CONTACTS;
                  trackResult1 = constants4;
                  obj6[1] = constants4.ACCEPTED;
                  trackResult1 = navigation(698).track(constants3.PERMISSIONS_ACKED, obj6);
                  trackResult1 = name;
                  if (null == name) {
                    obj5 = callback(12187);
                    obj5.trackFlowStep(callback(12187).Steps.NAME_INPUT, false, false);
                    SUGGESTIONS_RESULTS(trackResult1, true);
                    navigation.navigate(constants2.NAME_INPUT);
                  }
                  const obj25 = navigation(698);
                }
              } else {
                if (4 === tmp8) {
                  if (arg0 === 1) {
                    v02 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    v02 = 3;
                    let obj7 = { value: null, done: true };
                    obj7[0] = arg1;
                    return obj7;
                  }
                } else if (5 === tmp8) {
                  if (arg0 === 1) {
                    v02 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    v02 = 3;
                    const obj8 = { value: null, done: true };
                    obj8[0] = arg1;
                    return obj8;
                  } else {
                    closure_12 = arg1;
                    trackResult1 = v02(closure_12.friend_suggestions, closure_12.bulk_add_token);
                    trackResult1 = closure_12;
                    length = closure_12.friend_suggestions.length;
                    trackResult1 = callback;
                    trackResult1 = dependencyMap;
                    const obj23 = callback(12187);
                    trackResult1 = SUGGESTIONS_RESULTS;
                    const obj9 = { num_contacts_found: null };
                    trackResult1 = length;
                    obj9[0] = length;
                    trackResult1 = obj23;
                    trackResult1 = obj9;
                    trackResult1 = obj23.trackFlowStep(SUGGESTIONS_RESULTS, false, false, obj9);
                    trackResult1 = navigation;
                    trackResult1 = SUGGESTIONS;
                    trackResult1 = navigation.navigate(SUGGESTIONS);
                  }
                } else if (arg0 === 1) {
                  v02 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 0;
                  v02 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
                SUGGESTIONS = constants2.SUGGESTIONS;
                SUGGESTIONS_RESULTS = callback(12187).Steps.SUGGESTIONS_RESULTS;
                obj2 = callback(12185);
                trackResult1 = 5;
                v02 = 1;
                const obj10 = { value: null, done: false };
                obj10[0] = obj2.uploadContacts(v02, false);
                return obj10;
              }
              v0 = 0;
            }
            obj6 = callback(12185);
            obj7 = navigation(12189);
            if (isContactSyncEnabledResult) {
              trackResult1 = 4;
              v02 = 1;
              const obj11 = { value: null, done: false };
              obj11[0] = obj7.updateName(name);
              return obj11;
            } else {
              dependencyMap = name;
              if (name == null) {
                dependencyMap = undefined;
              }
              obj12 = { enabled: true, name: null };
              obj12[1] = dependencyMap;
              trackResult1 = 6;
              v02 = 1;
              const obj13 = { value: null, done: false };
              obj13[0] = obj7.updateContactSyncEnabled(obj12);
              return obj13;
            }
            isContactSyncEnabledResult = obj6.isContactSyncEnabled(dependencyMap);
          }
        } catch (tmp86) {
          closure_5 = tmp86;
          if (tmp4 === v0) {
            v02 = tmp2;
            throw tmp86;
          }
        }
      }
    })();
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handlePhoneVerificationComplete() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_25(closure_0, closure_1);
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp8) {
          c2 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_27 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _startContactSync() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c1 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const currentUser = closure_1_5.getCurrentUser();
              let phone;
              if (currentUser != null) {
                phone = currentUser.phone;
              }
              if (null == phone) {
                let obj2 = callback(12187);
                obj2.trackFlowStep(callback(12187).Steps.ADD_PHONE_NUMBER, false, false);
                closure_1_9(null);
                obj7.navigate(closure_1_19.ADD_PHONE);
                c1 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              } else {
                dependencyMap = 1;
                c1 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = closure_1_25(phone, obj7);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp14) {
          c1 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  closure_28 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _bulkAddFriendSuggestions() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, failed_requests) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw failed_requests;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = failed_requests;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw failed_requests;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = failed_requests;
              return obj;
            } else {
              closure_3 = tmp3;
              let suggestions = tmp56;
              suggestions = undefined;
              closure_3 = undefined;
              const state = closure_1_12.getState();
              suggestions = state.suggestions;
              const bulkAddToken = state.bulkAddToken;
              if (null != bulkAddToken) {
                c4 = 1;
                let obj8 = lib(closure_1_2[8]);
                c5 = 2;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj8.bulkAddFriends(tmp74, bulkAddToken);
                return obj1;
              } else {
                const obj2 = { skip: false, friendsFound: null, friendsAdded: 0, back: false, onComplete: null };
                obj2[1] = suggestions.length;
                obj2[4] = tmp75;
                closure_1_31(obj2);
              }
              tmp74 = lib;
              tmp75 = callback;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              let obj5 = callback(suggestions[13]);
              const obj3 = { title: null, body: null, confirmText: null, onConfirm: null };
              const intl4 = lib(suggestions[12]).intl;
              obj3[0] = intl4.string(lib(suggestions[12]).t["6moJ8s"]);
              const intl5 = lib(suggestions[12]).intl;
              obj3[1] = intl5.string(lib(suggestions[12]).t.Gt2L32);
              const intl6 = lib(suggestions[12]).intl;
              obj3[2] = intl6.string(lib(suggestions[12]).t.BddRzS);
              obj3[3] = function onConfirm() {
                closure_1_31({ skip: false, friendsFound: suggestions.length, friendsAdded: closure_0.length, back: false, onComplete: closure_1 });
              };
              obj5.show(obj3);
            } else if (arg0 === 1) {
              c6 = 3;
              throw failed_requests;
            } else if (arg0 !== 2) {
              if (failed_requests.failed_requests.length > 0) {
                const mapped = lib.map((arg0) => {
                  closure_0 = arg0;
                  return suggestions.find((suggested_user) => suggested_user.suggested_user.id === closure_0);
                });
                const _Boolean = Boolean;
                closure_3 = mapped.filter(Boolean);
                obj = callback(suggestions[13]);
                const obj4 = { title: null, body: null, confirmText: null, onConfirm: null };
                const intl = lib(suggestions[12]).intl;
                obj4[0] = intl.string(lib(suggestions[12]).t["6moJ8s"]);
                const intl2 = lib(suggestions[12]).intl;
                obj5 = { name: null };
                obj5[0] = closure_3.join(", ");
                obj4[1] = intl2.formatToPlainString(lib(suggestions[12]).t["045SiE"], obj5);
                const intl3 = lib(suggestions[12]).intl;
                obj4[2] = intl3.string(lib(suggestions[12]).t.BddRzS);
                obj4[3] = function onConfirm() {
                  closure_1_31({ skip: false, friendsFound: suggestions.length, friendsAdded: closure_0.length, back: false, onComplete: closure_1 });
                };
                obj.show(obj4);
              } else {
                const obj6 = { key: "TOAST_ADD_FRIENDS", content: null, icon: null };
                const intl7 = lib(suggestions[12]).intl;
                obj6[1] = intl7.string(lib(suggestions[12]).t["+hjBfW"]);
                obj6[2] = callback(suggestions[15]);
                callback(suggestions[14]).open(obj6);
                const obj13 = callback(suggestions[14]);
              }
              const obj7 = { skip: false, friendsFound: null, friendsAdded: null, back: false, onComplete: null };
              obj7[1] = suggestions.length;
              obj7[2] = lib.length;
              obj7[4] = callback;
              callback2(obj7);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj8 = { value: null, done: true };
            obj8[0] = failed_requests;
            return obj8;
          }
          c6 = 3;
        } catch (tmp55) {
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp55;
          } else {
            c5 = tmp;
          }
          tmp56 = c4;
        }
      }
    })();
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
function _verifyPhone() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              c5 = 1;
              let obj3 = closure_1_1(closure_1_2[16]);
              c6 = 2;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.addPhoneWithoutPassword(lib);
              return obj1;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            lib = closure_4;
            if (301 !== lib.status) {
              if (404 !== lib.status) {
                const aPIError = new lib(4346).APIError(lib);
                const anyErrorMessage = aPIError.getAnyErrorMessage();
                closure_1 = anyErrorMessage;
                if (anyErrorMessage == null) {
                  const intl = lib(1236).intl;
                  closure_1 = intl.string(lib(1236).t.cCVXOe);
                }
                { codeIntercepted: true, addedPhone: false, error: null }[2] = closure_1;
              }
              c7 = 3;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = { codeIntercepted: true, addedPhone: true };
            return obj;
          }
        } catch (tmp21) {
          closure_4 = tmp21;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp21;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_30 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function closeContactSyncModal(skip) {
  let flag = skip.skip;
  if (flag === undefined) {
    flag = true;
  }
  ({ friendsFound, friendsAdded, back } = skip);
  if (back === undefined) {
    back = false;
  }
  const onComplete = skip.onComplete;
  if (null != onComplete) {
    if (flag === undefined) {
      flag = true;
    }
    const tmp16 = callback5();
    let obj = { num_contacts_found: null, num_contacts_added: null };
    obj[0] = friendsFound;
    obj[1] = friendsAdded;
    flag2(12187).trackFlowEnd(flag, obj);
    if (tmp16) {
      onComplete(flag);
    } else {
      const _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        back(4691).popWithKey(closure_20);
      }, 0);
    }
    const obj3 = flag2(12187);
  } else {
    flag2 = flag;
    if (flag === undefined) {
      flag2 = true;
    }
    if (back === undefined) {
      back = false;
    }
    dependencyMap = undefined;
    const tmp2 = callback5();
    dependencyMap = tmp2;
    if (!back) {
      obj = flag2(12187);
      obj = { num_contacts_found: null, num_contacts_added: null };
      obj[0] = friendsFound;
      obj[1] = friendsAdded;
      obj.trackFlowEnd(flag2, obj);
    }
    if (tmp2) {
      let updateAnimation = back(4691).updateAnimation;
      let ModalAnimation = flag2(691).ModalAnimation;
      if (back) {
        updateAnimation(tmp9, ModalAnimation.SLIDE_IN_OUT_REVERSE);
      } else {
        updateAnimation(tmp9, ModalAnimation.SLIDE_IN_OUT);
      }
      const tmp8 = back(4691);
    }
    const _setTimeout = setTimeout;
    const timerId1 = setTimeout(() => {
      let obj = back(4691);
      obj.popWithKey(closure_1_20);
      if (dependencyMap) {
        const updateAnimation = back(4691).updateAnimation;
        const ModalAnimation = flag2(691).ModalAnimation;
        if (back) {
          updateAnimation(tmp3, ModalAnimation.SLIDE_IN_OUT_REVERSE);
          let tmp7Result = tmp7(12209);
          const result = tmp7Result.previousOnboardingStep();
        } else {
          updateAnimation(tmp3, ModalAnimation.SLIDE_IN_OUT);
          tmp7Result = tmp7(12209);
          obj = { skip: null };
          obj[0] = flag2;
          tmp7Result.nextOnboardingStep(obj);
        }
        const tmpResult = back(4691);
      }
    }, 0);
  }
}
({ setError: closure_6, setPermissionState: error, setSuggestions: closure_8, setPhone: c9, setPhoneToken: c10, setName: unpackModuleId, useContactSyncModalStore: closure_12, ContactSyncModes: map1, initialize: closure_14, getIsOnboarding: closure_15 } = ContactSyncModes);
({ deleteStoredContacts: closure_16, setStoredContacts: closure_17 } = setStoredContacts);
({ ContactPermissions: closure_18, ContactSyncScenes: closure_19, CONTACT_SYNC_MODAL_KEY: closure_20 } = ContactSyncLandingPage);
({ AnalyticEvents: closure_21, PlatformTypes: closure_22 } = ME);
({ NativePermissionStates: closure_23, NativePermissionTypes: closure_24 } = NativePermissionStatus);
let result = require("set").fileFinishedImporting("modules/contact_sync/native/ContactSyncModalActionCreators.tsx");

export const handlePhoneVerificationComplete = function handlePhoneVerificationComplete(arg0, navigation) {
  const self = this;
  const apply = _handlePhoneVerificationComplete.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const startContactSync = function startContactSync(c3) {
  const self = this;
  const apply = _startContactSync.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const bulkAddFriendSuggestions = function bulkAddFriendSuggestions(arg0, onComplete) {
  const self = this;
  const apply = _bulkAddFriendSuggestions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const goBackToLanding = function goBackToLanding(closure_1) {
  Steps.trackFlowStep(Steps.Steps.LANDING, false, true);
  closure_1.pop(closure_1.getState().routes.length - 1);
};
export const submitPhone = function submitPhone(arg0, closure_0) {
  callback2(arg0);
  Steps.trackFlowStep(Steps.Steps.VERIFY_PHONE_NUMBER, false, false);
  closure_0.navigate(constants2.VERIFY_PHONE);
};
export const verifyPhone = function verifyPhone() {
  const self = this;
  const apply = _verifyPhone.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const verifyPhoneWithPassword = function verifyPhoneWithPassword(arg0, navigation) {
  Steps.trackFlowStep(Steps.Steps.PASSWORD_CONFIRM, false, false);
  callback3(arg0);
  navigation.navigate(constants2.VERIFY_PASSWORD);
};
export const upsellDismissed = function upsellDismissed() {
  Steps.trackFlowEnd(true);
};
export const openContactSyncModal = function openContactSyncModal(initialRoutes, FRIENDS_ADD_FRIENDS_MODAL) {
  let obj = _uploadContacts;
  const result = obj.checkContactPermissions();
  result.then((arg0) => {
    callback(arg0);
  });
  if (null == initialRoutes.initialRoutes) {
    callback4(constants.NORMAL);
  }
  if (FRIENDS_ADD_FRIENDS_MODAL) {
    obj = { location: null };
    obj[0] = FRIENDS_ADD_FRIENDS_MODAL;
    tmp(12187).trackFlowStart(obj);
    const tmpResult = tmp(12187);
  }
  obj = { initialRoutes: initialRoutes.initialRoutes, openSettingsSheet: initialRoutes.openSettings, customLandingPage: initialRoutes.customLandingPage };
  const obj4 = _modDef4691;
  const tmp2 = dependencyMap;
  _modDef4691.pushLazy(asyncRequireImpl(12190, dependencyMap.paths), obj, closure_20).then(arg2);
};
export const openContactSyncModalOnboarding = function openContactSyncModalOnboarding() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    let obj = { location: null };
    obj = { page: null };
    obj[0] = Steps.CONTACT_SYNC_ONBOARDING_LOCATION;
    obj[0] = obj;
    Steps.trackFlowStart(obj);
    const obj2 = Steps;
    _modDef4691.pushLazy(callback(function*() {
      closure_1 = tmp5;
      let callback = tmp2;
      yield closure_1_0(paths[20])(paths[19], paths.paths);
      callback = arg1.default;
      const obj = { animation: null };
      obj[0] = callback(paths[22]).ModalAnimation.SLIDE_IN_OUT;
      callback.modalConfig = obj;
      return callback;
    }), {}, closure_20);
  } else {
    obj = showInstantInviteActionSheet;
    closure_14(obj.hasDeferredInvite() ? closure_13.ONBOARDING_INVITE : closure_13.ONBOARDING);
    const tmp = closure_14;
  }
};
export const openContactSyncModalDeeplink = function openContactSyncModalDeeplink() {
  let obj = {};
  const result = _uploadContacts.checkContactPermissions();
  result.then((arg0) => {
    callback(arg0);
  });
  if (null == obj.initialRoutes) {
    callback4(constants.NORMAL);
  }
  const obj2 = _uploadContacts;
  const tmp2 = dependencyMap;
  Steps.trackFlowStart({ location: { page: "Deep Link" } });
  const tmpResult = Steps;
  obj = { initialRoutes: obj.initialRoutes, openSettingsSheet: obj.openSettings, customLandingPage: obj.customLandingPage };
  const obj4 = _modDef4691;
  _modDef4691.pushLazy(asyncRequireImpl(12190, tmp2.paths), obj, closure_20).then(undefined);
};
export const refreshContactSyncPermissionStatus = function refreshContactSyncPermissionStatus() {
  const result = _uploadContacts.checkContactPermissions();
  result.then((arg0) => {
    callback(arg0);
  });
};
export { closeContactSyncModal };