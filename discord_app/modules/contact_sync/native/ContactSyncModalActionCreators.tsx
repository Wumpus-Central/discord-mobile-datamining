// discord_app/modules/contact_sync/native/ContactSyncModalActionCreators.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import PhoneActionCreatorsDefault from "../../phone/PhoneActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../instant_invite/native/InstantInviteUtils.tsx";
import ContactSyncUtils from "ContactSyncUtils.tsx";
import ContactSyncAnalyticsUtils from "ContactSyncAnalyticsUtils.tsx";
import NUFActionCreators from "../../nuf/native/NUFActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ContactSyncModalStore from "ContactSyncModalStore.tsx";
import ContactSyncPersistedStore from "ContactSyncPersistedStore.tsx";
import ContactSyncConstants from "ContactSyncConstants.tsx";
import Constants from "../../../Constants.tsx";
import NativePermissionConstants from "../../native_permissions/NativePermissionConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let closure_4, contacts, currentUser, dependencyMap, name;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function handleNameInputScreenOrSuggestions() {
  return obj(...arguments);
}
let obj = function _handleNameInputScreenOrSuggestions() {
  let localAccount;
  let state;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_5;
    let closure_0 = arg0;
    navigation = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj27;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp77;
        try {
          let names;
          let ownName;
          let payload;
          let length;
          let SUGGESTIONS;
          let SUGGESTIONS_RESULTS;
          let localAccount2;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = undefined;
              tmp77 = undefined;
              names = undefined;
              ownName = undefined;
              payload = undefined;
              length = undefined;
              SUGGESTIONS = undefined;
              SUGGESTIONS_RESULTS = undefined;
              closure_12 = undefined;
              localAccount2 = localAccount.getLocalAccount(constants.CONTACTS);
              name = state.getState().name;
              c7 = 1;
              c8 = 1;
              const obj5 = { value: obj27.checkContactPermissions(), done: false };
              obj27 = ContactSyncUtils;
              return obj5;
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = value;
              closure_132_7(closure_4);
              contacts = closure_4;
              if (closure_4 === closure_132_18.NOT_DETERMINED) {
                const obj16 = closure_132_0(closure_132_2[9]);
                obj16.trackFlowStep(closure_132_0(closure_132_2[9]).Steps.PERMISSION_REQUESTED, false, false);
              }
              c6 = 1;
              const obj17 = closure_132_0(closure_132_2[8]);
              contacts = obj17.getContacts(closure_0);
              c7 = 3;
              c8 = 1;
              return { value: contacts, done: false };
            }
          } else {
            if (2 === c7) {
              c6 = 0;
              let closure_13 = tmp77;
              const obj11 = { type: closure_132_24.CONTACTS, action: closure_132_23.DENIED };
              const obj13 = closure_132_1(closure_132_2[10]);
              obj13.track(closure_132_21.PERMISSIONS_ACKED, obj11);
              contacts = closure_13;
              if (closure_13 === closure_132_0(closure_132_2[8]).ContactSyncPermissionDenied) {
                const obj15 = closure_132_0(closure_132_2[9]);
                obj15.trackFlowStep(closure_132_0(closure_132_2[9]).Steps.LANDING, true, false, {
                  mobile_contacts_permission: "denied",
                });
                contacts = closure_132_7;
                closure_132_7(closure_132_18.UNAUTHORIZED);
              } else {
                const intl = closure_132_0(closure_132_2[12]).intl;
                contacts = closure_132_6(intl.string(closure_132_0(closure_132_2[12]).t.fGrbRX));
                closure_132_16();
              }
            } else {
              if (3 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  return { value, done: true };
                } else {
                  tmp77 = value;
                  names = tmp77.names;
                  ownName = tmp77.ownName;
                  payload = tmp77.payload;
                  closure_132_17(names);
                  const obj14 = { type: closure_132_24.CONTACTS, action: closure_132_23.ACCEPTED };
                  const obj25 = closure_132_1(closure_132_2[10]);
                  contacts = obj25.track(closure_132_21.PERMISSIONS_ACKED, obj14);
                  if (null != name) {
                    const obj8 = closure_132_0(closure_132_2[8]);
                    contacts = obj8.isContactSyncEnabled(localAccount2);
                    const obj9 = closure_132_1(closure_132_2[11]);
                    if (contacts) {
                      contacts = obj9.updateName(name);
                      c7 = 4;
                      c8 = 1;
                      return { value: contacts, done: false };
                    } else {
                      contacts = name;
                      const updateContactSyncEnabled = obj9.updateContactSyncEnabled;
                      if (name == null) {
                        name = undefined;
                      }
                      contacts = { enabled: true, name };
                      c7 = 6;
                      c8 = 1;
                      const obj19 = { value: updateContactSyncEnabled(contacts), done: false };
                      return obj19;
                    }
                  } else {
                    const obj7 = closure_132_0(closure_132_2[9]);
                    obj7.trackFlowStep(closure_132_0(closure_132_2[9]).Steps.NAME_INPUT, false, false);
                    closure_132_11(ownName, true);
                    navigation.navigate(closure_132_19.NAME_INPUT);
                  }
                }
              } else {
                if (4 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 0;
                    c8 = 3;
                    return { value, done: true };
                  }
                } else if (5 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 0;
                    c8 = 3;
                    return { value, done: true };
                  } else {
                    closure_12 = value;
                    closure_132_8(closure_12.friend_suggestions, closure_12.bulk_add_token);
                    length = closure_12.friend_suggestions.length;
                    const obj22 = { num_contacts_found: length };
                    const obj23 = closure_132_0(closure_132_2[9]);
                    obj23.trackFlowStep(SUGGESTIONS_RESULTS, false, false, obj22);
                    navigation.navigate(SUGGESTIONS);
                  }
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  return { value, done: true };
                }
                SUGGESTIONS = closure_132_19.SUGGESTIONS;
                SUGGESTIONS_RESULTS = closure_132_0(closure_132_2[9]).Steps.SUGGESTIONS_RESULTS;
                const obj3 = closure_132_0(closure_132_2[8]);
                contacts = obj3.uploadContacts(payload, false);
                c7 = 5;
                c8 = 1;
                return { value: contacts, done: false };
              }
              c6 = 0;
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp77) {
          if (0 === c6) {
            c8 = 3;
            throw tmp77;
          } else {
            c7 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handlePhoneVerificationComplete() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c3 = 1;
            c2 = 1;
            const obj4 = { value: handleNameInputScreenOrSuggestions(closure_0, closure_1), done: false };
            return obj4;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
obj = function _startContactSync() {
  obj = _asyncToGenerator(async (arg0) => {
    navigation = arg0;
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              currentUser = currentUser.getCurrentUser();
              let phone;
              if (currentUser != null) {
                phone = currentUser.phone;
              }
              if (null == phone) {
                const obj3 = ContactSyncAnalyticsUtils;
                obj3.trackFlowStep(ContactSyncAnalyticsUtils.Steps.ADD_PHONE_NUMBER, false, false);
                closure_2_9(null);
                navigation.navigate(constants.ADD_PHONE);
                c1 = 3;
                return { value: undefined, done: true };
              } else {
                c2 = 1;
                c1 = 1;
                const obj6 = { value: handleNameInputScreenOrSuggestions(phone, navigation), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            return { value, done: true };
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c1 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _bulkAddFriendSuggestions() {
  obj = _asyncToGenerator(async (arg0, onComplete) => {
    let closure_3;
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let formatToPlainString;
      let intl;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let obj7;
      let obj9;
      let tmp56;
      let v045SiE;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let suggestions;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp56;
              tmp = undefined;
              state = state.getState();
              suggestions = state.suggestions;
              const bulkAddToken = state.bulkAddToken;
              if (null != bulkAddToken) {
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj4 = { value: obj7.bulkAddFriends(closure_0, bulkAddToken), done: false };
                obj7 = ContactSyncUtils;
                return obj4;
              } else {
                const obj5 = {
                  skip: false,
                  friendsFound: suggestions.length,
                  friendsAdded: 0,
                  back: false,
                  onComplete,
                };
                closeContactSyncModal(obj5);
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
            const obj6 = {
              title: intl4.string(closure_131_0(closure_131_2[12]).t["6moJ8s"]),
              body: intl5.string(closure_131_0(closure_131_2[12]).t.Gt2L32),
              confirmText: intl6.string(closure_131_0(closure_131_2[12]).t.BddRzS),
              onConfirm() {
                obj = {
                  skip: false,
                  friendsFound: closure_1_2.length,
                  friendsAdded: closure_1_0.length,
                  back: false,
                  onComplete,
                };
                closure_2_31(obj);
              },
              isDismissable: false,
            };
            const show2 = closure_131_1(closure_131_2[13]).show;
            closure_131_1(closure_131_2[13]);
            intl4 = closure_131_0(closure_131_2[12]).intl;
            intl5 = closure_131_0(closure_131_2[12]).intl;
            intl6 = closure_131_0(closure_131_2[12]).intl;
            show2(obj6);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            if (value.failed_requests.length > 0) {
              const mapped = closure_0.map((item) => {
                closure_0 = item;
                return closure_1_2.find((suggested_user) => suggested_user.suggested_user.id === closure_0);
              });
              const _Boolean = Boolean;
              tmp = mapped.filter(Boolean);
              obj = {
                title: intl.string(closure_131_0(closure_131_2[12]).t["6moJ8s"]),
                body: formatToPlainString(v045SiE, obj9),
                confirmText: intl3.string(closure_131_0(closure_131_2[12]).t.BddRzS),
                onConfirm() {
                  obj = {
                    skip: false,
                    friendsFound: closure_1_2.length,
                    friendsAdded: closure_1_0.length,
                    back: false,
                    onComplete,
                  };
                  closure_2_31(obj);
                },
                isDismissable: false,
              };
              const show = closure_131_1(closure_131_2[13]).show;
              closure_131_1(closure_131_2[13]);
              intl = closure_131_0(closure_131_2[12]).intl;
              const intl2 = closure_131_0(closure_131_2[12]).intl;
              formatToPlainString = intl2.formatToPlainString;
              obj9 = { name: tmp.join(", ") };
              v045SiE = closure_131_0(closure_131_2[12]).t["045SiE"];
              intl3 = closure_131_0(closure_131_2[12]).intl;
              show(obj);
            } else {
              const obj10 = {
                key: "TOAST_ADD_FRIENDS",
                content: intl7.string(closure_131_0(closure_131_2[12]).t["+hjBfW"]),
                icon: closure_131_1(closure_131_2[15]),
              };
              const open = closure_131_1(closure_131_2[14]).open;
              closure_131_1(closure_131_2[14]);
              intl7 = closure_131_0(closure_131_2[12]).intl;
              open(obj10);
            }
            const obj11 = {
              skip: false,
              friendsFound: suggestions.length,
              friendsAdded: closure_0.length,
              back: false,
              onComplete,
            };
            closure_131_31(obj11);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp55) {
          tmp56 = c4;
          if (0 === c4) {
            c6 = 3;
            throw tmp55;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _verifyPhone() {
  obj = _asyncToGenerator(async function (arg0) {
    let obj5;
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj4 = { value: obj5.addPhoneWithoutPassword(closure_0), done: false };
            obj5 = PhoneActionCreatorsDefault;
            return obj4;
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_0 = closure_4;
          if (301 !== closure_0.status) {
            let obj6;
            if (404 !== closure_0.status) {
              const self = this;
              const self2 = this;
              const aPIError = new closure_131_0(closure_131_2[17]).APIError(closure_0);
              const anyErrorMessage = aPIError.getAnyErrorMessage();
              let error = anyErrorMessage;
              if (anyErrorMessage == null) {
                const intl = closure_131_0(closure_131_2[12]).intl;
                error = intl.string(closure_131_0(closure_131_2[12]).t.cCVXOe);
              }
              obj6 = { codeIntercepted: true, addedPhone: false, error };
            }
            c7 = 3;
            const obj7 = { value: obj6, done: true };
            return obj7;
          }
          obj6 = { codeIntercepted: false, addedPhone: false };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: { codeIntercepted: true, addedPhone: true }, done: true };
          return obj;
        }
      } catch (tmp18) {
        closure_4 = tmp18;
        if (0 === c5) {
          c7 = 3;
          throw tmp18;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function closeContactSyncModal(skip) {
  let back;
  let closure_2;
  let flag2;
  let friendsAdded;
  let friendsFound;
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
    let obj2 = { num_contacts_found: friendsFound, num_contacts_added: friendsAdded };
    const tmp16 = closure_15();
    const obj3 = flag2(12331);
    obj3.trackFlowEnd(flag, obj2);
    if (tmp16) {
      onComplete(flag);
    } else {
      const _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        obj = back(closure_2[18]);
        obj.popWithKey(closure_1_20);
      }, 0);
    }
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
      obj = flag2(12331);
      const obj4 = { num_contacts_found: friendsFound, num_contacts_added: friendsAdded };
      obj.trackFlowEnd(flag2, obj4);
    }
    if (tmp2) {
      let updateAnimation = back(5093).updateAnimation;
      back(5093);
      let ModalAnimation = flag2(1105).ModalAnimation;
      if (back) {
        updateAnimation(closure_20, ModalAnimation.SLIDE_IN_OUT_REVERSE);
      } else {
        updateAnimation(closure_20, ModalAnimation.SLIDE_IN_OUT);
      }
    }
    const _setTimeout = setTimeout;
    const timerId1 = setTimeout(() => {
      obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_20);
      if (closure_2) {
        const updateAnimation = ModalActionCreatorsDefault.updateAnimation;
        ModalActionCreatorsDefault;
        const ModalAnimation = ConstantsIOS.ModalAnimation;
        if (back) {
          updateAnimation(closure_20, ModalAnimation.SLIDE_IN_OUT_REVERSE);
          const tmp8Result = NUFActionCreators;
          const result = tmp8Result.previousOnboardingStep();
        } else {
          updateAnimation(closure_20, ModalAnimation.SLIDE_IN_OUT);
          const obj2 = { skip: flag2 };
          const tmp8Result2 = NUFActionCreators;
          tmp8Result2.nextOnboardingStep(obj2);
        }
      }
    }, 0);
  }
}
({
  setError: metroRequire,
  setPermissionState: metroImportDefault,
  setSuggestions: metroImportAll,
  setPhone: c9,
  setPhoneToken: c10,
  setName: unpackModuleId,
  useContactSyncModalStore: closure_12,
  ContactSyncModes: map1,
  initialize: closure_14,
  getIsOnboarding: closure_15,
} = ContactSyncModalStore);
({ deleteStoredContacts: closure_16, setStoredContacts: closure_17 } = ContactSyncPersistedStore);
({
  ContactPermissions: closure_18,
  ContactSyncScenes: closure_19,
  CONTACT_SYNC_MODAL_KEY: closure_20,
} = ContactSyncConstants);
({ AnalyticEvents: closure_21, PlatformTypes: closure_22 } = Constants);
({ NativePermissionStates: closure_23, NativePermissionTypes: closure_24 } = NativePermissionConstants);
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncModalActionCreators.tsx");

export const handlePhoneVerificationComplete = function handlePhoneVerificationComplete() {
  return obj(...arguments);
};
export const startContactSync = function startContactSync() {
  return obj(...arguments);
};
export const bulkAddFriendSuggestions = function bulkAddFriendSuggestions() {
  return obj(...arguments);
};
export const goBackToLanding = function goBackToLanding(navigation) {
  obj = ContactSyncAnalyticsUtils;
  obj.trackFlowStep(ContactSyncAnalyticsUtils.Steps.LANDING, false, true);
  navigation.pop(navigation.getState().routes.length - 1);
};
export const submitPhone = function submitPhone(arg0, navigation) {
  React4(arg0);
  obj = ContactSyncAnalyticsUtils;
  obj.trackFlowStep(ContactSyncAnalyticsUtils.Steps.VERIFY_PHONE_NUMBER, false, false);
  navigation.navigate(constants2.VERIFY_PHONE);
};
export const verifyPhone = function verifyPhone() {
  return obj(...arguments);
};
export const verifyPhoneWithPassword = function verifyPhoneWithPassword(arg0, navigation) {
  obj = ContactSyncAnalyticsUtils;
  obj.trackFlowStep(ContactSyncAnalyticsUtils.Steps.PASSWORD_CONFIRM, false, false);
  authStore(arg0);
  navigation.navigate(constants2.VERIFY_PASSWORD);
};
export const upsellDismissed = function upsellDismissed() {
  obj = ContactSyncAnalyticsUtils;
  obj.trackFlowEnd(true);
};
export const openContactSyncModal = function openContactSyncModal(initialRoutes, HUB_PROGRESS, arg2) {
  obj = ContactSyncUtils;
  const result = obj.checkContactPermissions();
  result.then((result) => {
    closure_1_7(result);
  });
  if (null == initialRoutes.initialRoutes) {
    authStore2(map1.NORMAL);
  }
  const tmp7 = HUB_PROGRESS;
  if (tmp7) {
    const obj2 = { location: HUB_PROGRESS };
    const tmpResult = ContactSyncAnalyticsUtils;
    tmpResult.trackFlowStart(obj2);
  }
  const obj3 = {
    initialRoutes: initialRoutes.initialRoutes,
    openSettingsSheet: initialRoutes.openSettings,
    customLandingPage: initialRoutes.customLandingPage,
  };
  const obj4 = ModalActionCreatorsDefault;
  const pushLazyResult = obj4.pushLazy(asyncRequire(12334, dependencyMap.paths), obj3, closure_20);
  pushLazyResult.then(arg2);
};
export const openContactSyncModalOnboarding = function openContactSyncModalOnboarding() {
  let obj4;
  let paths;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag) {
    obj = instant_invite_InstantInviteUtils;
    authStore2(obj.hasDeferredInvite() ? map1.ONBOARDING_INVITE : map1.ONBOARDING);
  }
  const obj2 = ContactSyncAnalyticsUtils;
  const obj3 = { location: obj4 };
  obj4 = { page: ContactSyncAnalyticsUtils.CONTACT_SYNC_ONBOARDING_LOCATION };
  obj2.trackFlowStart(obj3);
  const obj5 = ModalActionCreatorsDefault;
  obj5.pushLazy(
    _asyncToGenerator(async () => {
      let c2;
      let c3;
      let closure_1;
      let value = tmp;
      await require("asyncRequire")(paths[19], paths.paths);
      value = value.default;
      obj = { animation: closure_129_0(closure_129_2[22]).ModalAnimation.SLIDE_IN_OUT };
      value.modalConfig = obj;
      return value;
    }),
    {},
    closure_20,
  );
};
export const openContactSyncModalDeeplink = function openContactSyncModalDeeplink() {
  obj = {};
  const obj2 = ContactSyncUtils;
  const result = obj2.checkContactPermissions();
  result.then((result) => {
    closure_1_7(result);
  });
  if (null == obj.initialRoutes) {
    authStore2(map1.NORMAL);
  }
  const tmpResult = ContactSyncAnalyticsUtils;
  tmpResult.trackFlowStart({ location: { page: "Deep Link" } });
  const obj3 = {
    initialRoutes: obj.initialRoutes,
    openSettingsSheet: obj.openSettings,
    customLandingPage: obj.customLandingPage,
  };
  const obj4 = ModalActionCreatorsDefault;
  const pushLazyResult = obj4.pushLazy(asyncRequire(12334, dependencyMap.paths), obj3, closure_20);
  pushLazyResult.then(undefined);
};
export const refreshContactSyncPermissionStatus = function refreshContactSyncPermissionStatus() {
  obj = ContactSyncUtils;
  const result = obj.checkContactPermissions();
  result.then((result) => {
    closure_1_7(result);
  });
};
export { closeContactSyncModal };
