// === Module 12676: ContactSyncModalActionCreators ===

// Module 12676 (ContactSyncModalActionCreators)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import PhoneActionCreatorsDefault from "PhoneActionCreators" /* 7045 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import ContactSyncAnalyticsUtils from "ContactSyncAnalyticsUtils" /* 12682 */;
import NUFActionCreators from "NUFActionCreators" /* 12704 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleNameInputScreenOrSuggestions() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _handleNameInputScreenOrSuggestions(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let localAccount2;
          let name2;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          let names;
          let ownName;
          let payload;
          closure_131_9 = undefined;
          let SUGGESTIONS;
          let SUGGESTIONS_RESULTS;
          closure_131_12 = undefined;
          localAccount2 = localAccount.getLocalAccount(constants.CONTACTS);
          name2 = state.getState().name;
          c7 = 1;
          c8 = 1;
          const obj1 = { value: ContactSyncUtils.checkContactPermissions(), done: false };
          return obj1;
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_131_4 = value;
          closure_132_7(closure_131_4);
          if (closure_131_4 === closure_132_18.NOT_DETERMINED) {
            closure_132_0(closure_132_2[9]).trackFlowStep(closure_132_0(closure_132_2[9]).Steps.PERMISSION_REQUESTED, false, false);
            const obj16 = closure_132_0(closure_132_2[9]);
          }
          c6 = 1;
          c7 = 3;
          c8 = 1;
          const obj3 = { value: closure_132_0(closure_132_2[8]).getContacts(closure_131_0), done: false };
          return obj3;
        }
      } else {
        if (2 === tmp8) {
          c6 = 0;
          closure_131_13 = closure_5;
          let obj12 = closure_132_1(closure_132_2[10]);
          const obj4 = { type: closure_132_24.CONTACTS, action: closure_132_23.DENIED };
          obj12.track(closure_132_21.PERMISSIONS_ACKED, obj4);
          if (closure_131_13 === closure_132_0(closure_132_2[8]).ContactSyncPermissionDenied) {
            const obj15 = closure_132_0(closure_132_2[9]);
            obj15.trackFlowStep(closure_132_0(closure_132_2[9]).Steps.LANDING, true, false, { mobile_contacts_permission: "denied" });
            closure_132_7(closure_132_18.UNAUTHORIZED);
          } else {
            const intl = closure_132_0(closure_132_2[12]).intl;
            closure_132_6(intl.string(closure_132_0(closure_132_2[12]).t.fGrbRX));
            closure_132_16();
          }
          c8 = 3;
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              closure_131_5 = value;
              names = closure_131_5.names;
              ownName = closure_131_5.ownName;
              payload = closure_131_5.payload;
              closure_132_17(names);
              let obj6 = { type: closure_132_24.CONTACTS, action: closure_132_23.ACCEPTED };
              closure_132_1(closure_132_2[10]).track(closure_132_21.PERMISSIONS_ACKED, obj6);
              if (null == name2) {
                obj5 = closure_132_0(closure_132_2[9]);
                obj5.trackFlowStep(closure_132_0(closure_132_2[9]).Steps.NAME_INPUT, false, false);
                closure_132_11(ownName, true);
                closure_131_1.navigate(closure_132_19.NAME_INPUT);
              }
              const obj25 = closure_132_1(closure_132_2[10]);
            }
          } else {
            if (4 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                let obj7 = { value, done: true };
                return obj7;
              }
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                closure_131_12 = value;
                closure_132_8(closure_131_12.friend_suggestions, closure_131_12.bulk_add_token);
                closure_131_9 = closure_131_12.friend_suggestions.length;
                const obj23 = closure_132_0(closure_132_2[9]);
                const obj9 = { num_contacts_found: closure_131_9 };
                obj23.trackFlowStep(SUGGESTIONS_RESULTS, false, false, obj9);
                closure_131_1.navigate(SUGGESTIONS);
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj = { value, done: true };
              return obj;
            }
            SUGGESTIONS = closure_132_19.SUGGESTIONS;
            SUGGESTIONS_RESULTS = closure_132_0(closure_132_2[9]).Steps.SUGGESTIONS_RESULTS;
            obj2 = closure_132_0(closure_132_2[8]);
            c7 = 5;
            c8 = 1;
            const obj10 = { value: obj2.uploadContacts(payload, false), done: false };
            return obj10;
          }
          c6 = 0;
        }
        obj6 = closure_132_0(closure_132_2[8]);
        obj7 = closure_132_1(closure_132_2[11]);
        if (isContactSyncEnabledResult) {
          c7 = 4;
          c8 = 1;
          const obj11 = { value: obj7.updateName(name2), done: false };
          return obj11;
        } else {
          let name = name2;
          if (name2 == null) {
            name = undefined;
          }
          obj12 = { enabled: true, name };
          c7 = 6;
          c8 = 1;
          const obj13 = { value: obj7.updateContactSyncEnabled(obj12), done: false };
          return obj13;
        }
        isContactSyncEnabledResult = obj6.isContactSyncEnabled(localAccount2);
      }
    } catch (tmp86) {
      closure_5 = tmp86;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp86;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_27 = async function _handlePhoneVerificationComplete(arg0) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 1;
          c2 = 1;
          const obj1 = { value: handleNameInputScreenOrSuggestions(closure_0, closure_1), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c2 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      c2 = tmp;
      throw tmp8;
    }
  }
};
let closure_28 = async function _startContactSync(arg0) {
  let navigation = arg0;
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            currentUser = currentUser.getCurrentUser();
            let phone;
            if (currentUser != null) {
              phone = currentUser.phone;
            }
            if (null == phone) {
              let obj2 = ContactSyncAnalyticsUtils;
              obj2.trackFlowStep(ContactSyncAnalyticsUtils.Steps.ADD_PHONE_NUMBER, false, false);
              closure_2_9(null);
              navigation.navigate(constants.ADD_PHONE);
              c1 = 3;
              const obj1 = { value: undefined, done: true };
              return obj1;
            } else {
              c2 = 1;
              c1 = 1;
              obj2 = { value: handleNameInputScreenOrSuggestions(phone, navigation), done: false };
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        c1 = tmp;
        throw tmp14;
      }
    }
  })();
};
let closure_29 = async function _bulkAddFriendSuggestions(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp56;
          closure_130_0 = closure_0;
          closure_130_1 = onComplete;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          state = state.getState();
          const suggestions = state.suggestions;
          closure_130_2 = suggestions;
          const bulkAddToken = state.bulkAddToken;
          if (null != bulkAddToken) {
            c4 = 1;
            let obj8 = ContactSyncUtils;
            c5 = 2;
            c6 = 1;
            const obj1 = { value: obj8.bulkAddFriends(closure_0, bulkAddToken), done: false };
            return obj1;
          } else {
            const obj2 = { skip: false, friendsFound: suggestions.length, friendsAdded: 0, back: false, onComplete };
            closeContactSyncModal(obj2);
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          let obj5 = closure_131_1(closure_131_2[13]);
          const obj3 = { title: null, body: null, confirmText: null, onConfirm: null };
          const intl4 = closure_131_0(closure_131_2[12]).intl;
          obj3.title = intl4.string(closure_131_0(closure_131_2[12]).t["6moJ8s"]);
          const intl5 = closure_131_0(closure_131_2[12]).intl;
          obj3.body = intl5.string(closure_131_0(closure_131_2[12]).t.Gt2L32);
          const intl6 = closure_131_0(closure_131_2[12]).intl;
          obj3.confirmText = intl6.string(closure_131_0(closure_131_2[12]).t.BddRzS);
          obj3.onConfirm = function onConfirm() {
            closure_2_31({ skip: false, friendsFound: closure_1_2.length, friendsAdded: closure_1_0.length, back: false, onComplete });
          };
          obj5.show(obj3);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value.failed_requests.length > 0) {
            const mapped = closure_130_0.map((item) => {
              closure_0 = item;
              return closure_1_2.find((suggested_user) => suggested_user.suggested_user.id === closure_0);
            });
            const _Boolean = Boolean;
            closure_130_3 = mapped.filter(Boolean);
            obj = closure_131_1(closure_131_2[13]);
            const obj4 = { title: null, body: null, confirmText: null, onConfirm: null };
            const intl = closure_131_0(closure_131_2[12]).intl;
            obj4.title = intl.string(closure_131_0(closure_131_2[12]).t["6moJ8s"]);
            const intl2 = closure_131_0(closure_131_2[12]).intl;
            obj5 = { name: closure_130_3.join(", ") };
            obj4.body = intl2.formatToPlainString(closure_131_0(closure_131_2[12]).t["045SiE"], obj5);
            const intl3 = closure_131_0(closure_131_2[12]).intl;
            obj4.confirmText = intl3.string(closure_131_0(closure_131_2[12]).t.BddRzS);
            obj4.onConfirm = function onConfirm() {
              closure_2_31({ skip: false, friendsFound: closure_1_2.length, friendsAdded: closure_1_0.length, back: false, onComplete });
            };
            obj.show(obj4);
          } else {
            const obj6 = { key: "TOAST_ADD_FRIENDS", content: null, icon: null };
            const intl7 = closure_131_0(closure_131_2[12]).intl;
            obj6.content = intl7.string(closure_131_0(closure_131_2[12]).t["+hjBfW"]);
            obj6.icon = closure_131_1(closure_131_2[15]);
            closure_131_1(closure_131_2[14]).open(obj6);
            const obj13 = closure_131_1(closure_131_2[14]);
          }
          const obj7 = { skip: false, friendsFound: closure_130_2.length, friendsAdded: closure_130_0.length, back: false, onComplete: closure_130_1 };
          closure_131_31(obj7);
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        obj8 = { value, done: true };
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
};
let closure_30 = async function _verifyPhone(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          c5 = 1;
          let obj3 = PhoneActionCreatorsDefault;
          c6 = 2;
          c7 = 1;
          const obj1 = { value: obj3.addPhoneWithoutPassword(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_0 = closure_4;
        if (301 !== closure_130_0.status) {
          if (404 !== closure_130_0.status) {
            const aPIError = new closure_131_0(closure_131_2[17]).APIError(closure_130_0);
            const anyErrorMessage = aPIError.getAnyErrorMessage();
            closure_1 = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl = closure_131_0(closure_131_2[12]).intl;
              closure_1 = intl.string(closure_131_0(closure_131_2[12]).t.cCVXOe);
            }
            { codeIntercepted: true, addedPhone: false, error: null }[2] = closure_1;
          }
          c7 = 3;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        obj3 = { value, done: true };
        return obj3;
      } else {
        c5 = 0;
        c7 = 3;
        obj = { value: { codeIntercepted: true, addedPhone: true }, done: true };
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
};
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
    const tmp16 = closure_15();
    let obj = { num_contacts_found: friendsFound, num_contacts_added: friendsAdded };
    flag2(12682).trackFlowEnd(flag, obj);
    if (tmp16) {
      onComplete(flag);
    } else {
      const _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        back(closure_2[18]).popWithKey(closure_1_20);
      }, 0);
    }
    const obj3 = flag2(12682);
  } else {
    flag2 = flag;
    if (flag === undefined) {
      flag2 = true;
    }
    if (back === undefined) {
      back = false;
    }
    const tmp2 = closure_15();
    dependencyMap = tmp2;
    if (!back) {
      flag2(12682);
      obj = { num_contacts_found: friendsFound, num_contacts_added: friendsAdded };
      obj.trackFlowEnd(flag2, obj);
    }
    if (tmp2) {
      let updateAnimation = back(4763).updateAnimation;
      let ModalAnimation = flag2(1093).ModalAnimation;
      if (back) {
        updateAnimation(closure_20, ModalAnimation.SLIDE_IN_OUT_REVERSE);
      } else {
        updateAnimation(closure_20, ModalAnimation.SLIDE_IN_OUT);
      }
      const tmp8 = back(4763);
    }
    const _setTimeout = setTimeout;
    const timerId1 = setTimeout(() => {
      let obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_2_20);
      if (closure_2) {
        const updateAnimation = ModalActionCreatorsDefault.updateAnimation;
        const ModalAnimation = ConstantsIOS.ModalAnimation;
        if (back) {
          updateAnimation(closure_2_20, ModalAnimation.SLIDE_IN_OUT_REVERSE);
          let tmp7Result = NUFActionCreators;
          const result = tmp7Result.previousOnboardingStep();
        } else {
          updateAnimation(closure_2_20, ModalAnimation.SLIDE_IN_OUT);
          tmp7Result = NUFActionCreators;
          obj = { skip: flag2 };
          tmp7Result.nextOnboardingStep(obj);
        }
        const tmpResult = ModalActionCreatorsDefault;
      }
    }, 0);
  }
}
const ContactSyncModalStore = fn(12677);
({ setError: metroRequire, setPermissionState: closure_7, setSuggestions: closure_8, setPhone: closure_9, setPhoneToken: c10, setName: closure_11, useContactSyncModalStore: closure_12, ContactSyncModes: map1, initialize: closure_14, getIsOnboarding: closure_15 } = ContactSyncModalStore);
const ContactSyncPersistedStore = fn(12679);
({ deleteStoredContacts: closure_16, setStoredContacts: closure_17 } = ContactSyncPersistedStore);
const ContactSyncConstants = fn(12678);
({ ContactPermissions: closure_18, ContactSyncScenes: closure_19, CONTACT_SYNC_MODAL_KEY: closure_20 } = ContactSyncConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_21, PlatformTypes: closure_22 } = Constants);
const NativePermissionConstants = fn(4770);
({ NativePermissionStates: closure_23, NativePermissionTypes: closure_24 } = NativePermissionConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncModalActionCreators.tsx");

export const handlePhoneVerificationComplete = function handlePhoneVerificationComplete() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const startContactSync = function startContactSync() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const bulkAddFriendSuggestions = function bulkAddFriendSuggestions() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const goBackToLanding = function goBackToLanding(getState) {
  ContactSyncAnalyticsUtils.trackFlowStep(ContactSyncAnalyticsUtils.Steps.LANDING, false, true);
  getState.pop(getState.getState().routes.length - 1);
};
export const submitPhone = function submitPhone(arg0, navigate) {
  React7(arg0);
  ContactSyncAnalyticsUtils.trackFlowStep(ContactSyncAnalyticsUtils.Steps.VERIFY_PHONE_NUMBER, false, false);
  navigate.navigate(constants2.VERIFY_PHONE);
};
export const verifyPhone = function verifyPhone() {
  const self = this;
  const apply = closure_30.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const verifyPhoneWithPassword = function verifyPhoneWithPassword(arg0, navigation) {
  ContactSyncAnalyticsUtils.trackFlowStep(ContactSyncAnalyticsUtils.Steps.PASSWORD_CONFIRM, false, false);
  closure_1_10(arg0);
  navigation.navigate(constants2.VERIFY_PASSWORD);
};
export const upsellDismissed = function upsellDismissed() {
  ContactSyncAnalyticsUtils.trackFlowEnd(true);
};
export const openContactSyncModal = function openContactSyncModal(initialRoutes, FRIENDS_ADD_FRIENDS_MODAL, arg2) {
  let obj = ContactSyncUtils;
  const result = obj.checkContactPermissions();
  result.then((result) => {
    closure_1_7(result);
  });
  if (null == initialRoutes.initialRoutes) {
    closure_1_14(constants.NORMAL);
  }
  if (FRIENDS_ADD_FRIENDS_MODAL) {
    obj = { location: FRIENDS_ADD_FRIENDS_MODAL };
    ContactSyncAnalyticsUtils.trackFlowStart(obj);
    const tmpResult = ContactSyncAnalyticsUtils;
  }
  obj = { initialRoutes: initialRoutes.initialRoutes, openSettingsSheet: initialRoutes.openSettings, customLandingPage: initialRoutes.customLandingPage };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12685, dependencyMap.paths), obj, closure_1_20).then(arg2);
  const pushLazyResult = ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12685, dependencyMap.paths), obj, closure_1_20);
};
export const openContactSyncModalOnboarding = function openContactSyncModalOnboarding() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    let obj = { location: null };
    obj = { page: ContactSyncAnalyticsUtils.CONTACT_SYNC_ONBOARDING_LOCATION };
    obj.location = obj;
    ContactSyncAnalyticsUtils.trackFlowStart(obj);
    ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
      closure_1 = tmp5;
      closure_0 = tmp2;
      await require("asyncRequireImpl")(paths[19], paths.paths);
      closure_128_0 = value.default;
      closure_128_0.modalConfig = { animation: closure_129_0(closure_129_2[22]).ModalAnimation.SLIDE_IN_OUT };
      return closure_128_0;
    }), {}, closure_1_20);
  } else {
    obj = instant_invite_InstantInviteUtils;
    closure_1_14(obj.hasDeferredInvite() ? constants.ONBOARDING_INVITE : constants.ONBOARDING);
  }
};
export const openContactSyncModalDeeplink = function openContactSyncModalDeeplink() {
  let obj = {};
  const result = ContactSyncUtils.checkContactPermissions();
  result.then((result) => {
    closure_1_7(result);
  });
  if (null == obj.initialRoutes) {
    closure_1_14(constants.NORMAL);
  }
  ContactSyncAnalyticsUtils.trackFlowStart({ location: { page: "Deep Link" } });
  const tmpResult = ContactSyncAnalyticsUtils;
  obj = { initialRoutes: obj.initialRoutes, openSettingsSheet: obj.openSettings, customLandingPage: obj.customLandingPage };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12685, dependencyMap.paths), obj, closure_1_20).then(undefined);
  const pushLazyResult = ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12685, dependencyMap.paths), obj, closure_1_20);
};
export const refreshContactSyncPermissionStatus = function refreshContactSyncPermissionStatus() {
  const result = ContactSyncUtils.checkContactPermissions();
  result.then((result) => {
    closure_1_7(result);
  });
};
export { closeContactSyncModal };