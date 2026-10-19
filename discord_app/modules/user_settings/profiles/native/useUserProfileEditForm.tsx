// === Module 15625: useUserProfileEditForm ===

// Module 15625 (useUserProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8558 */;
import UserProfileStore from "UserProfileStore" /* 7586 */;
import UserStore from "UserStore" /* 1392 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const FormStates = fn(1087).FormStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileEditForm() {
  const cResult = require("c").c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function y() {
      return { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp4, tmp5);
  const pendingChanges = stateFromStoresObject.pendingChanges;
  _require = pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore, UserProfileSettingsStore];
    class P {
      constructor() {
        isSubmitting = closure_1_8.getFormState() === closure_1_11.SUBMITTING;
        if (!isSubmitting) {
          tmp = closure_1_9;
          isSubmitting = closure_1_9.isSubmitting;
        }
        return isSubmitting;
      }
    }
    cResult[2] = items1;
    cResult[3] = P;
    let tmp9 = P;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_0(closure_1_2[10]).resetAllPending;
      }
    }
    const items2 = [];
    cResult[4] = I;
    class P {
      constructor() {
        isSubmitting = closure_1_8.getFormState() === closure_1_11.SUBMITTING;
        if (!isSubmitting) {
          tmp = closure_1_9;
          isSubmitting = closure_1_9.isSubmitting;
        }
        return isSubmitting;
      }
    }
    let tmp14 = items2;
  } else {
    class I {
      constructor() {
        return closure_0(closure_1_2[10]).resetAllPending;
      }
    }
    tmp14 = cResult[5];
  }
  const effect = noop.useEffect(I, tmp14);
  if (cResult[6] === stateFromStores) {
    class I {
      constructor() {
        return closure_0(closure_1_2[10]).resetAllPending;
      }
    }
    if (cResult[9] === stateFromStores) {
      class I {
        constructor() {
          return closure_0(closure_1_2[10]).resetAllPending;
        }
      }
      if (cResult[12] === errors) {
        class I {
          constructor() {
            return closure_0(closure_1_2[10]).resetAllPending;
          }
        }
      }
      let obj2 = { hasAvatarDecorationEdits: undefined !== pendingChanges.pendingAvatarDecoration, errors: null, isSubmitting: null, handleSubmit: null, handleSubmitAvatarDecoration: null, resetPending: null };
      class P {
        constructor() {
          isSubmitting = closure_1_8.getFormState() === closure_1_11.SUBMITTING;
          if (!isSubmitting) {
            tmp = closure_1_9;
            isSubmitting = closure_1_9.isSubmitting;
          }
          return isSubmitting;
        }
      }
      obj2.isSubmitting = stateFromStores;
      obj2.handleSubmit = tmp16;
      obj2.handleSubmitAvatarDecoration = tmp17;
      obj2.resetPending = tmp(6948).resetAllPending;
      const merged = Object.assign(pendingChanges);
      const merged1 = Object.assign(tryItOutChanges);
      cResult[12] = errors;
      cResult[13] = tmp16;
      cResult[14] = tmp17;
      cResult[15] = undefined !== pendingChanges.pendingAvatarDecoration;
      cResult[16] = stateFromStores;
      cResult[17] = pendingChanges;
      cResult[18] = tryItOutChanges;
      cResult[19] = obj2;
    }
    _require = asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              if (closure_1) {
                c3 = 3;
              } else {
                const obj5 = { avatarDecoration: tmp2.pendingAvatarDecoration };
                c2 = 1;
                c3 = 1;
                const obj6 = { value: tmp2(6948).saveProfileAndAccountChanges(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            let ok;
            if (closure_128_0 != null) {
              ok = closure_128_0.ok;
            }
            if (ok) {
              const result = tmp2(6948).resetPendingAccountChanges();
              const obj = tmp2(6948);
            }
          }
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } catch (tmp16) {
          c3 = tmp;
          throw tmp16;
        }
      }
    });
    function t7() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    class P {
      constructor() {
        isSubmitting = closure_1_8.getFormState() === closure_1_11.SUBMITTING;
        if (!isSubmitting) {
          tmp = closure_1_9;
          isSubmitting = closure_1_9.isSubmitting;
        }
        return isSubmitting;
      }
    }
    cResult[9] = stateFromStores;
    cResult[10] = pendingChanges.pendingAvatarDecoration;
    cResult[11] = t7;
  }
  _require = asyncGeneratorStep(async () => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp2;
            closure_4 = tmp200;
            closure_132_0 = undefined;
            let profileChangesForUpdateRequest;
            let primaryGuildChangesForUpdateRequest;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            let body3;
            let bannerOriginalMd5;
            closure_132_8 = undefined;
            closure_132_9 = undefined;
            let firstFieldErrorMessage2;
            closure_132_11 = undefined;
            closure_132_12 = undefined;
            closure_132_13 = undefined;
            let primaryGuildId;
            closure_132_15 = undefined;
            let firstFieldErrorMessage3;
            if (c1) {
              c8 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const accountUpdateForUpdateRequest = closure_0(10965).getAccountUpdateForUpdateRequest(closure_0);
              closure_132_0 = accountUpdateForUpdateRequest;
              const obj26 = closure_0(10965);
              profileChangesForUpdateRequest = closure_0(10965).getProfileChangesForUpdateRequest(closure_0);
              const obj27 = closure_0(10965);
              primaryGuildChangesForUpdateRequest = closure_0(10965).getPrimaryGuildChangesForUpdateRequest(closure_0);
              closure_132_3 = true;
              closure_132_4 = false;
              const _Object = Object;
              if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                c7 = 1;
                c8 = 1;
                const obj6 = { value: closure_0(6948).saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
                return obj6;
              } else {
                const _Object2 = Object;
                if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                  bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                  closure_132_8 = _objectWithoutProperties(profileChangesForUpdateRequest, closure_2_3);
                  c7 = 2;
                  c8 = 1;
                  const obj8 = { value: closure_0(8565).saveProfileChanges(closure_132_8, undefined, bannerOriginalMd5), done: false };
                  return obj8;
                } else {
                  if (undefined === closure_0.pendingBadgeDisplayOrder) {
                    if (undefined === closure_0.pendingBadgeHiddenBadges) {
                      if (undefined !== closure_0.pendingLegacyUsernameDisabled) {
                        c6 = 1;
                        const LegacyUsernameDisabled = closure_0(2044).LegacyUsernameDisabled;
                        c7 = 7;
                        c8 = 1;
                        const obj9 = { value: LegacyUsernameDisabled.updateSetting(closure_0.pendingLegacyUsernameDisabled), done: false };
                        return obj9;
                      }
                    }
                  }
                  const _Object4 = Object;
                  let tmp169 = 0 === Object.keys(closure_132_0).length;
                  if (tmp169) {
                    const _Object5 = Object;
                    tmp169 = 0 === Object.keys(profileChangesForUpdateRequest).length;
                  }
                  if (tmp169) {
                    const _Object6 = Object;
                    tmp169 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                  }
                  if (tmp169) {
                    tmp169 = undefined === closure_0.pendingLegacyUsernameDisabled;
                  }
                  closure_132_11 = tmp169;
                  if (closure_132_11) {
                    stateFromStores(584).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                    const obj34 = stateFromStores(584);
                  }
                  const obj11 = { displayOrder: closure_0.pendingBadgeDisplayOrder, hiddenBadges: closure_0.pendingBadgeHiddenBadges };
                  c7 = 3;
                  c8 = 1;
                  const obj13 = { value: closure_0(15627).updateBadgeSettings(obj11), done: false };
                  return obj13;
                }
              }
              const obj28 = closure_0(10965);
            }
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            closure_132_5 = value;
            let ok;
            if (closure_132_5 != null) {
              ok = closure_132_5.ok;
            }
            if (ok) {
              body3 = closure_132_5.body;
              if (undefined !== closure_0.pendingAvatar) {
                const obj16 = { avatarHash: body3.avatar, avatarId: closure_132_0.avatarId, avatarAssetOrigin: null };
                const pendingAvatar = closure_0.pendingAvatar;
                let assetOrigin;
                if (pendingAvatar != null) {
                  assetOrigin = pendingAvatar.assetOrigin;
                }
                obj16.avatarAssetOrigin = assetOrigin;
                const result = closure_0(6955).trackUserAvatarUpdated(obj16);
                const obj22 = closure_0(6955);
              }
              const result1 = closure_0(6948).resetPendingAccountChanges();
              const obj24 = closure_0(6948);
            } else {
              let username;
              if (closure_132_5 != null) {
                const body = closure_132_5.body;
                if (body != null) {
                  username = body.username;
                }
              }
              if (null != username) {
                const result2 = closure_0(6958).showInvalidUsernameToast();
                closure_132_4 = true;
                const obj21 = closure_0(6958);
              } else {
                let avatar;
                if (closure_132_5 != null) {
                  const body2 = closure_132_5.body;
                  if (body2 != null) {
                    avatar = body2.avatar;
                  }
                }
                if (null != avatar) {
                  const aPIError = new closure_0(5891).APIError(closure_132_5);
                  const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                  closure_0 = firstFieldErrorMessage;
                  if (firstFieldErrorMessage == null) {
                    const intl = closure_0(1128).intl;
                    closure_0 = intl.string(closure_0(1128).t["84MExs"]);
                  }
                  const result3 = closure_0(15626).showGenericProfileUpdateFailureToast(closure_0);
                  closure_132_4 = true;
                  const obj44 = closure_0(15626);
                }
              }
            }
            let tmp122 = closure_132_3;
            if (closure_132_3) {
              let ok1;
              if (closure_132_5 != null) {
                ok1 = closure_132_5.ok;
              }
              c1 = ok1;
              if (ok1 == null) {
                c1 = false;
              }
              tmp122 = c1;
            }
            closure_132_3 = tmp122;
          }
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            closure_132_9 = value;
            let ok2;
            if (closure_132_9 != null) {
              ok2 = closure_132_9.ok;
            }
            if (ok2) {
              const result4 = closure_0(8565).resetPendingProfileChanges();
              const obj19 = closure_0(8565);
            } else {
              const aPIError1 = new closure_0(5891).APIError(closure_132_9);
              firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage2) {
                const result5 = closure_0(15626).showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                closure_132_4 = true;
                const obj18 = closure_0(15626);
              }
            }
            let tmp85 = closure_132_3;
            if (closure_132_3) {
              let ok3;
              if (closure_132_9 != null) {
                ok3 = closure_132_9.ok;
              }
              c2 = ok3;
              if (ok3 == null) {
                c2 = false;
              }
              tmp85 = c2;
            }
            closure_132_3 = tmp85;
          }
        } else {
          if (3 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              closure_132_12 = value;
              if (closure_132_12) {
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                closure_132_13 = id;
                if (null != closure_132_13) {
                  const profile = closure_0(8579).fetchProfile(closure_132_13);
                  c7 = 4;
                  c8 = 1;
                  const obj23 = {
                    value: profile.catch(() => {

                                  }),
                    done: false
                  };
                  return obj23;
                }
              } else if (!closure_132_11) {
                let tmp49 = closure_132_3;
                if (closure_132_3) {
                  tmp49 = closure_132_12;
                }
                closure_132_3 = tmp49;
              } else {
                if (closure_132_12) {
                  let obj25 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                } else {
                  obj25 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                }
                stateFromStores(584).dispatch(obj25);
                const obj10 = stateFromStores(584);
              }
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj30 = { value, done: true };
              return obj30;
            }
          } else if (5 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj32 = { value, done: true };
              return obj32;
            } else {
              const result6 = closure_0(14172).resetPendingBadgeSettings();
              const obj7 = closure_0(14172);
            }
          } else if (6 === tmp7) {
            c6 = 0;
            closure_132_3 = false;
          } else {
            if (7 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj33 = { value, done: true };
                return obj33;
              } else {
                const result7 = closure_0(6948).resetPendingLegacyUsernameDisabled();
                c6 = 0;
                const obj5 = closure_0(6948);
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj36 = { value, done: true };
              return obj36;
            } else {
              closure_132_15 = value;
              let ok4;
              if (closure_132_15 != null) {
                ok4 = closure_132_15.ok;
              }
              if (ok4) {
                const result8 = closure_0(6948).resetPendingPrimaryGuildChanges();
                const obj3 = closure_0(6948);
              } else {
                const aPIError2 = new closure_0(5891).APIError(closure_132_15);
                firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage3) {
                  const result9 = closure_0(15626).showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                  closure_132_4 = true;
                  const obj2 = closure_0(15626);
                }
              }
              let tmp29 = closure_132_3;
              if (closure_132_3) {
                let ok5;
                if (closure_132_15 != null) {
                  ok5 = closure_132_15.ok;
                }
                c3 = ok5;
                if (ok5 == null) {
                  c3 = false;
                }
                tmp29 = c3;
              }
              closure_132_3 = tmp29;
            }
            let tmp147 = closure_132_3;
            if (!closure_132_3) {
              tmp147 = closure_132_4;
            }
            if (!tmp147) {
              const intl2 = closure_0(1128).intl;
              const result10 = closure_0(15626).showGenericProfileUpdateFailureToast(intl2.string(closure_0(1128).t["84MExs"]));
              const obj29 = closure_0(15626);
            }
            c8 = 3;
            const obj37 = { value: closure_132_3, done: true };
            return obj37;
          }
          c7 = 5;
          c8 = 1;
          const obj39 = { value: closure_0(8595).fetchBadgeDirectory(), done: false };
          return obj39;
        }
        const _Object3 = Object;
        if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
          primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
          if (undefined !== primaryGuildId) {
            c7 = 8;
            c8 = 1;
            const obj41 = { value: closure_0(14929).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
            return obj41;
          }
        }
      } catch (tmp199) {
        if (tmp3 === c6) {
          c8 = tmp;
          throw tmp199;
        } else {
          c7 = tmp4;
        }
        tmp200 = c6;
      }
    }
  });
  function t6() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[6] = stateFromStores;
  cResult[7] = pendingChanges;
  cResult[8] = t6;
  const tmpResult2 = require("initialize");
}) : (function useUserProfileEditForm() {
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = pendingChanges(504).useStateFromStoresObject(items, () => ({ pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj = pendingChanges(504);
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  let stateFromStores = pendingChanges(504).useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    return isSubmitting;
  });
  const effect = noop.useEffect(() => pendingChanges(dependencyMap[10]).resetAllPending, []);
  const items2 = [stateFromStores, pendingChanges];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp200;
            closure_132_0 = undefined;
            let profileChangesForUpdateRequest;
            let primaryGuildChangesForUpdateRequest;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            let body3;
            let bannerOriginalMd5;
            closure_132_8 = undefined;
            closure_132_9 = undefined;
            let firstFieldErrorMessage2;
            closure_132_11 = undefined;
            closure_132_12 = undefined;
            closure_132_13 = undefined;
            let primaryGuildId;
            closure_132_15 = undefined;
            let firstFieldErrorMessage3;
            if (stateFromStores) {
              c8 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const accountUpdateForUpdateRequest = pendingChanges(10965).getAccountUpdateForUpdateRequest(pendingChanges);
              closure_132_0 = accountUpdateForUpdateRequest;
              const obj26 = pendingChanges(10965);
              profileChangesForUpdateRequest = pendingChanges(10965).getProfileChangesForUpdateRequest(pendingChanges);
              const obj27 = pendingChanges(10965);
              primaryGuildChangesForUpdateRequest = pendingChanges(10965).getPrimaryGuildChangesForUpdateRequest(pendingChanges);
              closure_132_3 = true;
              closure_132_4 = false;
              const _Object = Object;
              if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                c7 = 1;
                c8 = 1;
                const obj6 = { value: pendingChanges(6948).saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
                return obj6;
              } else {
                const _Object2 = Object;
                if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                  bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                  closure_132_8 = tmp2(profileChangesForUpdateRequest, closure_4);
                  c7 = 2;
                  c8 = 1;
                  const obj8 = { value: pendingChanges(8565).saveProfileChanges(closure_132_8, undefined, bannerOriginalMd5), done: false };
                  return obj8;
                } else {
                  if (undefined === closure_133_0.pendingBadgeDisplayOrder) {
                    if (undefined === closure_133_0.pendingBadgeHiddenBadges) {
                      if (undefined !== closure_133_0.pendingLegacyUsernameDisabled) {
                        c6 = 1;
                        const LegacyUsernameDisabled = pendingChanges(2044).LegacyUsernameDisabled;
                        c7 = 7;
                        c8 = 1;
                        const obj9 = { value: LegacyUsernameDisabled.updateSetting(closure_133_0.pendingLegacyUsernameDisabled), done: false };
                        return obj9;
                      }
                    }
                  }
                  const _Object4 = Object;
                  let tmp169 = 0 === Object.keys(closure_132_0).length;
                  if (tmp169) {
                    const _Object5 = Object;
                    tmp169 = 0 === Object.keys(profileChangesForUpdateRequest).length;
                  }
                  if (tmp169) {
                    const _Object6 = Object;
                    tmp169 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                  }
                  if (tmp169) {
                    tmp169 = undefined === closure_133_0.pendingLegacyUsernameDisabled;
                  }
                  closure_132_11 = tmp169;
                  if (closure_132_11) {
                    stateFromStores(584).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                    const obj34 = stateFromStores(584);
                  }
                  const obj11 = { displayOrder: closure_133_0.pendingBadgeDisplayOrder, hiddenBadges: closure_133_0.pendingBadgeHiddenBadges };
                  c7 = 3;
                  c8 = 1;
                  const obj13 = { value: pendingChanges(15627).updateBadgeSettings(obj11), done: false };
                  return obj13;
                }
              }
              const obj28 = pendingChanges(10965);
            }
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            closure_132_5 = value;
            let ok;
            if (closure_132_5 != null) {
              ok = closure_132_5.ok;
            }
            if (ok) {
              body3 = closure_132_5.body;
              if (undefined !== closure_133_0.pendingAvatar) {
                const obj16 = { avatarHash: body3.avatar, avatarId: closure_132_0.avatarId, avatarAssetOrigin: null };
                const pendingAvatar = closure_133_0.pendingAvatar;
                let assetOrigin;
                if (pendingAvatar != null) {
                  assetOrigin = pendingAvatar.assetOrigin;
                }
                obj16.avatarAssetOrigin = assetOrigin;
                const result = pendingChanges(6955).trackUserAvatarUpdated(obj16);
                const obj22 = pendingChanges(6955);
              }
              const result1 = pendingChanges(6948).resetPendingAccountChanges();
              const obj24 = pendingChanges(6948);
            } else {
              let username;
              if (closure_132_5 != null) {
                const body = closure_132_5.body;
                if (body != null) {
                  username = body.username;
                }
              }
              if (null != username) {
                const result2 = pendingChanges(6958).showInvalidUsernameToast();
                closure_132_4 = true;
                const obj21 = pendingChanges(6958);
              } else {
                let avatar;
                if (closure_132_5 != null) {
                  const body2 = closure_132_5.body;
                  if (body2 != null) {
                    avatar = body2.avatar;
                  }
                }
                if (null != avatar) {
                  const aPIError = new pendingChanges(5891).APIError(closure_132_5);
                  const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                  pendingChanges = firstFieldErrorMessage;
                  if (firstFieldErrorMessage == null) {
                    const intl = pendingChanges(1128).intl;
                    pendingChanges = intl.string(pendingChanges(1128).t["84MExs"]);
                  }
                  const result3 = pendingChanges(15626).showGenericProfileUpdateFailureToast(pendingChanges);
                  closure_132_4 = true;
                  const obj44 = pendingChanges(15626);
                }
              }
            }
            let tmp122 = closure_132_3;
            if (closure_132_3) {
              let ok1;
              if (closure_132_5 != null) {
                ok1 = closure_132_5.ok;
              }
              stateFromStores = ok1;
              if (ok1 == null) {
                stateFromStores = false;
              }
              tmp122 = stateFromStores;
            }
            closure_132_3 = tmp122;
          }
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            closure_132_9 = value;
            let ok2;
            if (closure_132_9 != null) {
              ok2 = closure_132_9.ok;
            }
            if (ok2) {
              const result4 = pendingChanges(8565).resetPendingProfileChanges();
              const obj19 = pendingChanges(8565);
            } else {
              const aPIError1 = new pendingChanges(5891).APIError(closure_132_9);
              firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage2) {
                const result5 = pendingChanges(15626).showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                closure_132_4 = true;
                const obj18 = pendingChanges(15626);
              }
            }
            let tmp85 = closure_132_3;
            if (closure_132_3) {
              let ok3;
              if (closure_132_9 != null) {
                ok3 = closure_132_9.ok;
              }
              dependencyMap = ok3;
              if (ok3 == null) {
                dependencyMap = false;
              }
              tmp85 = dependencyMap;
            }
            closure_132_3 = tmp85;
          }
        } else {
          if (3 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              closure_132_12 = value;
              if (closure_132_12) {
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                closure_132_13 = id;
                if (null != closure_132_13) {
                  const profile = pendingChanges(8579).fetchProfile(closure_132_13);
                  c7 = 4;
                  c8 = 1;
                  const obj23 = {
                    value: profile.catch(() => {

                                  }),
                    done: false
                  };
                  return obj23;
                }
              } else if (!closure_132_11) {
                let tmp49 = closure_132_3;
                if (closure_132_3) {
                  tmp49 = closure_132_12;
                }
                closure_132_3 = tmp49;
              } else {
                if (closure_132_12) {
                  let obj25 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                } else {
                  obj25 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                }
                stateFromStores(584).dispatch(obj25);
                const obj10 = stateFromStores(584);
              }
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj30 = { value, done: true };
              return obj30;
            }
          } else if (5 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj32 = { value, done: true };
              return obj32;
            } else {
              const result6 = pendingChanges(14172).resetPendingBadgeSettings();
              const obj7 = pendingChanges(14172);
            }
          } else if (6 === tmp7) {
            c6 = 0;
            closure_132_3 = false;
          } else {
            if (7 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj33 = { value, done: true };
                return obj33;
              } else {
                const result7 = pendingChanges(6948).resetPendingLegacyUsernameDisabled();
                c6 = 0;
                const obj5 = pendingChanges(6948);
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj36 = { value, done: true };
              return obj36;
            } else {
              closure_132_15 = value;
              let ok4;
              if (closure_132_15 != null) {
                ok4 = closure_132_15.ok;
              }
              if (ok4) {
                const result8 = pendingChanges(6948).resetPendingPrimaryGuildChanges();
                const obj3 = pendingChanges(6948);
              } else {
                const aPIError2 = new pendingChanges(5891).APIError(closure_132_15);
                firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage3) {
                  const result9 = pendingChanges(15626).showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                  closure_132_4 = true;
                  const obj2 = pendingChanges(15626);
                }
              }
              let tmp29 = closure_132_3;
              if (closure_132_3) {
                let ok5;
                if (closure_132_15 != null) {
                  ok5 = closure_132_15.ok;
                }
                c3 = ok5;
                if (ok5 == null) {
                  c3 = false;
                }
                tmp29 = c3;
              }
              closure_132_3 = tmp29;
            }
            let tmp147 = closure_132_3;
            if (!closure_132_3) {
              tmp147 = closure_132_4;
            }
            if (!tmp147) {
              const intl2 = pendingChanges(1128).intl;
              const result10 = pendingChanges(15626).showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(1128).t["84MExs"]));
              const obj29 = pendingChanges(15626);
            }
            c8 = 3;
            const obj37 = { value: closure_132_3, done: true };
            return obj37;
          }
          c7 = 5;
          c8 = 1;
          const obj39 = { value: pendingChanges(8595).fetchBadgeDirectory(), done: false };
          return obj39;
        }
        const _Object3 = Object;
        if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
          primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
          if (undefined !== primaryGuildId) {
            c7 = 8;
            c8 = 1;
            const obj41 = { value: pendingChanges(14929).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
            return obj41;
          }
        }
      } catch (tmp199) {
        if (tmp3 === c6) {
          c8 = tmp;
          throw tmp199;
        } else {
          c7 = tmp4;
        }
        tmp200 = c6;
      }
    }
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  let obj2 = pendingChanges(504);
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return {
    hasAvatarDecorationEdits: undefined !== pendingChanges.pendingAvatarDecoration,
    errors,
    isSubmitting: stateFromStores,
    handleSubmit: callback,
    handleSubmitAvatarDecoration: noop.useCallback(asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp2;
              closure_128_0 = undefined;
              if (stateFromStores) {
                c3 = 3;
              } else {
                const obj5 = { avatarDecoration: pendingChanges.pendingAvatarDecoration };
                dependencyMap = 1;
                c3 = 1;
                const obj6 = { value: tmp5(6948).saveProfileAndAccountChanges(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            let ok;
            if (closure_128_0 != null) {
              ok = closure_128_0.ok;
            }
            if (ok) {
              const result = tmp5(6948).resetPendingAccountChanges();
              const obj = tmp5(6948);
            }
          }
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } catch (tmp16) {
          c3 = tmp;
          throw tmp16;
        }
      }
    }), items3),
    resetPending: pendingChanges(6948).resetAllPending
  };
});