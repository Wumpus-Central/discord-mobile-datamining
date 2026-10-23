// === Module 15827: useUserProfileEditForm ===

// Module 15827 (useUserProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8647 */;
import UserProfileStore from "UserProfileStore" /* 7701 */;
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
  const cResult = require("c").c(21);
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
  let pendingChanges = stateFromStoresObject.pendingChanges;
  _require = pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore, UserProfileSettingsStore];
    class S {
      constructor() {
        isSubmitting = closure_1_9.getFormState() === closure_1_12.SUBMITTING;
        if (!isSubmitting) {
          tmp = closure_1_10;
          isSubmitting = closure_1_10.isSubmitting;
        }
        return isSubmitting;
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    let tmp9 = S;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
  [first, closure_3] = noop.useState(false);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_0(closure_2[11]).resetAllPending;
      }
    }
    const items2 = [];
    cResult[4] = I;
    class S {
      constructor() {
        isSubmitting = closure_1_9.getFormState() === closure_1_12.SUBMITTING;
        if (!isSubmitting) {
          tmp = closure_1_10;
          isSubmitting = closure_1_10.isSubmitting;
        }
        return isSubmitting;
      }
    }
    let tmp16 = items2;
  } else {
    class I {
      constructor() {
        return closure_0(closure_2[11]).resetAllPending;
      }
    }
    tmp16 = cResult[5];
  }
  const effect = noop.useEffect(I, tmp16);
  if (cResult[6] === stateFromStores) {
    class I {
      constructor() {
        return closure_0(closure_2[11]).resetAllPending;
      }
    }
    if (cResult[9] === stateFromStores) {
      class I {
        constructor() {
          return closure_0(closure_2[11]).resetAllPending;
        }
      }
      if (!stateFromStores) {
        class I {
          constructor() {
            return closure_0(closure_2[11]).resetAllPending;
          }
        }
      }
      if (cResult[12] === errors) {
        class I {
          constructor() {
            return closure_0(closure_2[11]).resetAllPending;
          }
        }
      }
      class S {
        constructor() {
          isSubmitting = closure_1_9.getFormState() === closure_1_12.SUBMITTING;
          if (!isSubmitting) {
            tmp = closure_1_10;
            isSubmitting = closure_1_10.isSubmitting;
          }
          return isSubmitting;
        }
      }
      tmp24[0] = undefined !== pendingChanges.pendingAvatarDecoration;
      tmp24[1] = errors;
      tmp24[2] = stateFromStores;
      tmp24[3] = first;
      tmp24[4] = tmp18;
      tmp24[5] = tmp19;
      tmp24[6] = tmp(tmp2[11]).resetAllPending;
      const merged = Object.assign(pendingChanges);
      const merged1 = Object.assign(tryItOutChanges);
      cResult[12] = errors;
      cResult[13] = tmp18;
      cResult[14] = tmp19;
      cResult[15] = undefined !== pendingChanges.pendingAvatarDecoration;
      cResult[16] = first;
      cResult[17] = pendingChanges;
      cResult[18] = stateFromStores;
      cResult[19] = tryItOutChanges;
      cResult[20] = tmp24;
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
                const obj6 = { value: tmp2(first[11]).saveProfileAndAccountChanges(obj5), done: false };
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
              const result = tmp2(first[11]).resetPendingAccountChanges();
              const obj = tmp2(first[11]);
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
    class S {
      constructor() {
        isSubmitting = closure_1_9.getFormState() === closure_1_12.SUBMITTING;
        if (!isSubmitting) {
          tmp = closure_1_10;
          isSubmitting = closure_1_10.isSubmitting;
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
            closure_4 = tmp7;
            closure_132_0 = undefined;
            let pendingChanges;
            let accountUpdateForUpdateRequest;
            let profileChangesForUpdateRequest;
            let primaryGuildChangesForUpdateRequest;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            closure_132_7 = undefined;
            let body3;
            let bannerOriginalMd5;
            closure_132_10 = undefined;
            closure_132_11 = undefined;
            let firstFieldErrorMessage2;
            closure_132_13 = undefined;
            closure_132_14 = undefined;
            closure_132_15 = undefined;
            let primaryGuildId;
            closure_132_17 = undefined;
            let firstFieldErrorMessage3;
            if (!c1) {
              if (!c2) {
                const pendingHexagonCampaignEnrollment = closure_0(first[12]).getPendingHexagonCampaignEnrollment();
                if (null != pendingHexagonCampaignEnrollment) {
                  c3(true);
                  c7 = 1;
                  c8 = 1;
                  const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                  return obj6;
                }
                const obj27 = closure_0(first[12]);
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_132_0 = value;
              c3(false);
              if (!closure_132_0) {
                c8 = 3;
                return { value: false, done: true };
              }
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_132_7 = value;
              let ok;
              if (closure_132_7 != null) {
                ok = closure_132_7.ok;
              }
              if (ok) {
                body3 = tmp90.body;
                if (undefined !== pendingChanges.pendingAvatar) {
                  const obj11 = { avatarHash: body3.avatar, avatarId: accountUpdateForUpdateRequest.avatarId, avatarAssetOrigin: null };
                  const pendingAvatar = pendingChanges.pendingAvatar;
                  let assetOrigin;
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  obj11.avatarAssetOrigin = assetOrigin;
                  const result = closure_0(first[14]).trackUserAvatarUpdated(obj11);
                  const obj22 = closure_0(first[14]);
                }
                const result1 = closure_0(first[11]).resetPendingAccountChanges();
                const obj24 = closure_0(first[11]);
              } else {
                let username;
                if (tmp90 != null) {
                  const body = tmp90.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result2 = closure_0(first[15]).showInvalidUsernameToast();
                  closure_132_6 = true;
                  const obj21 = closure_0(first[15]);
                } else {
                  let avatar;
                  if (closure_132_7 != null) {
                    const body2 = closure_132_7.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const aPIError = new closure_0(first[17]).APIError(closure_132_7);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    closure_0 = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = closure_0(first[18]).intl;
                      closure_0 = intl.string(closure_0(first[18]).t["84MExs"]);
                    }
                    const result3 = closure_0(first[16]).showGenericProfileUpdateFailureToast(closure_0);
                    closure_132_6 = true;
                    const obj47 = closure_0(first[16]);
                  }
                }
              }
              let tmp121 = closure_132_5;
              if (closure_132_5) {
                let ok1;
                if (closure_132_7 != null) {
                  ok1 = closure_132_7.ok;
                }
                c1 = ok1;
                if (ok1 == null) {
                  c1 = false;
                }
                tmp121 = c1;
              }
              closure_132_5 = tmp121;
              const _Object2 = Object;
              if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                closure_132_10 = _objectWithoutProperties(profileChangesForUpdateRequest, closure_3);
                c7 = 3;
                c8 = 1;
                const obj13 = { value: closure_0(first[19]).saveProfileChanges(closure_132_10, undefined, bannerOriginalMd5), done: false };
                return obj13;
              } else {
                if (undefined === pendingChanges.pendingBadgeDisplayOrder) {
                  if (undefined === pendingChanges.pendingBadgeHiddenBadges) {
                    if (undefined !== pendingChanges.pendingLegacyUsernameDisabled) {
                      c6 = 1;
                      const LegacyUsernameDisabled = closure_0(first[25]).LegacyUsernameDisabled;
                      c7 = 8;
                      c8 = 1;
                      const obj15 = { value: LegacyUsernameDisabled.updateSetting(pendingChanges.pendingLegacyUsernameDisabled), done: false };
                      return obj15;
                    }
                  }
                }
                const _Object4 = Object;
                let tmp181 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                if (tmp181) {
                  const _Object5 = Object;
                  tmp181 = 0 === Object.keys(profileChangesForUpdateRequest).length;
                }
                if (tmp181) {
                  const _Object6 = Object;
                  tmp181 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                }
                if (tmp181) {
                  tmp181 = undefined === pendingChanges.pendingLegacyUsernameDisabled;
                }
                closure_132_13 = tmp181;
                if (closure_132_13) {
                  stateFromStores(first[20]).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  const obj36 = stateFromStores(first[20]);
                }
                const obj16 = { displayOrder: pendingChanges.pendingBadgeDisplayOrder, hiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
                c7 = 4;
                c8 = 1;
                const obj17 = { value: closure_0(first[21]).updateBadgeSettings(obj16), done: false };
                return obj17;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              closure_132_11 = value;
              let ok2;
              if (closure_132_11 != null) {
                ok2 = closure_132_11.ok;
              }
              if (ok2) {
                const result4 = closure_0(first[19]).resetPendingProfileChanges();
                const obj19 = closure_0(first[19]);
              } else {
                const aPIError1 = new closure_0(first[17]).APIError(closure_132_11);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const result5 = closure_0(first[16]).showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  closure_132_6 = true;
                  const obj18 = closure_0(first[16]);
                }
              }
              let tmp85 = closure_132_5;
              if (closure_132_5) {
                let ok3;
                if (closure_132_11 != null) {
                  ok3 = closure_132_11.ok;
                }
                c2 = ok3;
                if (ok3 == null) {
                  c2 = false;
                }
                tmp85 = c2;
              }
              closure_132_5 = tmp85;
            }
          } else {
            if (4 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj23 = { value, done: true };
                return obj23;
              } else {
                closure_132_14 = value;
                if (closure_132_14) {
                  currentUser = currentUser.getCurrentUser();
                  let id;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  closure_132_15 = id;
                  if (null != closure_132_15) {
                    const profile = closure_0(first[22]).fetchProfile(closure_132_15);
                    c7 = 5;
                    c8 = 1;
                    const obj25 = {
                      value: profile.catch(() => {

                                      }),
                      done: false
                    };
                    return obj25;
                  }
                } else if (!closure_132_13) {
                  let tmp49 = closure_132_5;
                  if (closure_132_5) {
                    tmp49 = closure_132_14;
                  }
                  closure_132_5 = tmp49;
                } else {
                  if (closure_132_14) {
                    let obj26 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj26 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  stateFromStores(first[20]).dispatch(obj26);
                  const obj10 = stateFromStores(first[20]);
                }
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj32 = { value, done: true };
                return obj32;
              }
            } else if (6 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj34 = { value, done: true };
                return obj34;
              } else {
                const result6 = closure_0(first[24]).resetPendingBadgeSettings();
                const obj7 = closure_0(first[24]);
              }
            } else if (7 === tmp7) {
              c6 = 0;
              closure_132_5 = false;
            } else {
              if (8 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj35 = { value, done: true };
                  return obj35;
                } else {
                  const result7 = closure_0(first[11]).resetPendingLegacyUsernameDisabled();
                  c6 = 0;
                  const obj5 = closure_0(first[11]);
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj38 = { value, done: true };
                return obj38;
              } else {
                closure_132_17 = value;
                let ok4;
                if (closure_132_17 != null) {
                  ok4 = closure_132_17.ok;
                }
                if (ok4) {
                  const result8 = closure_0(first[11]).resetPendingPrimaryGuildChanges();
                  const obj3 = closure_0(first[11]);
                } else {
                  const aPIError2 = new closure_0(first[17]).APIError(closure_132_17);
                  firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage3) {
                    const result9 = closure_0(first[16]).showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                    closure_132_6 = true;
                    const obj2 = closure_0(first[16]);
                  }
                }
                let tmp29 = closure_132_5;
                if (closure_132_5) {
                  let ok5;
                  if (closure_132_17 != null) {
                    ok5 = closure_132_17.ok;
                  }
                  c3 = ok5;
                  if (ok5 == null) {
                    c3 = false;
                  }
                  tmp29 = c3;
                }
                closure_132_5 = tmp29;
              }
              let tmp158 = closure_132_5;
              if (!closure_132_5) {
                tmp158 = closure_132_6;
              }
              if (!tmp158) {
                const intl2 = closure_0(first[18]).intl;
                const result10 = closure_0(first[16]).showGenericProfileUpdateFailureToast(intl2.string(closure_0(first[18]).t["84MExs"]));
                const obj31 = closure_0(first[16]);
              }
              c8 = 3;
              const obj39 = { value: closure_132_5, done: true };
              return obj39;
            }
            c7 = 6;
            c8 = 1;
            const obj41 = { value: closure_0(first[23]).fetchBadgeDirectory(), done: false };
            return obj41;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
            primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c7 = 9;
              c8 = 1;
              const obj43 = { value: closure_0(first[26]).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
              return obj43;
            }
          }
        }
        pendingChanges = UserProfileSettingsStore.getPendingChanges();
        accountUpdateForUpdateRequest = closure_0(first[13]).getAccountUpdateForUpdateRequest(pendingChanges);
        const obj28 = closure_0(first[13]);
        profileChangesForUpdateRequest = closure_0(first[13]).getProfileChangesForUpdateRequest(pendingChanges);
        const obj29 = closure_0(first[13]);
        primaryGuildChangesForUpdateRequest = closure_0(first[13]).getPrimaryGuildChangesForUpdateRequest(pendingChanges);
        closure_132_5 = true;
        closure_132_6 = false;
        const _Object = Object;
        if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
          c7 = 2;
          c8 = 1;
          const obj44 = { value: closure_0(first[11]).saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
          return obj44;
        }
        const obj30 = closure_0(first[13]);
      } catch (tmp217) {
        if (tmp3 === c6) {
          c8 = tmp;
          throw tmp217;
        } else {
          c7 = tmp4;
        }
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
  cResult[7] = first;
  cResult[8] = t6;
  const tmpResult2 = require("initialize");
}) : (function useUserProfileEditForm() {
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]).useStateFromStoresObject(items, () => ({ pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  const tmp = pendingChanges;
  const tmp2 = isWaitingForHexagonCampaignEnrollment;
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  let stateFromStores = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]).useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    return isSubmitting;
  });
  [isWaitingForHexagonCampaignEnrollment, closure_3] = noop.useState(false);
  const effect = noop.useEffect(() => pendingChanges(first[11]).resetAllPending, []);
  const items2 = [stateFromStores, isWaitingForHexagonCampaignEnrollment];
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
            closure_4 = tmp7;
            closure_132_0 = undefined;
            let pendingChanges2;
            let accountUpdateForUpdateRequest;
            let profileChangesForUpdateRequest;
            let primaryGuildChangesForUpdateRequest;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            closure_132_7 = undefined;
            let body3;
            let bannerOriginalMd5;
            closure_132_10 = undefined;
            closure_132_11 = undefined;
            let firstFieldErrorMessage2;
            closure_132_13 = undefined;
            closure_132_14 = undefined;
            closure_132_15 = undefined;
            let primaryGuildId;
            closure_132_17 = undefined;
            let firstFieldErrorMessage3;
            if (!stateFromStores) {
              if (!first) {
                const pendingHexagonCampaignEnrollment = pendingChanges(15828).getPendingHexagonCampaignEnrollment();
                if (null != pendingHexagonCampaignEnrollment) {
                  closure_3(true);
                  c7 = 1;
                  c8 = 1;
                  const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                  return obj6;
                }
                const obj27 = pendingChanges(15828);
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_132_0 = value;
              closure_133_3(false);
              if (!closure_132_0) {
                c8 = 3;
                return { value: false, done: true };
              }
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_132_7 = value;
              let ok;
              if (closure_132_7 != null) {
                ok = closure_132_7.ok;
              }
              if (ok) {
                body3 = tmp90.body;
                if (undefined !== pendingChanges2.pendingAvatar) {
                  const obj11 = { avatarHash: body3.avatar, avatarId: accountUpdateForUpdateRequest.avatarId, avatarAssetOrigin: null };
                  const pendingAvatar = pendingChanges2.pendingAvatar;
                  let assetOrigin;
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  obj11.avatarAssetOrigin = assetOrigin;
                  const result = pendingChanges(7083).trackUserAvatarUpdated(obj11);
                  const obj22 = pendingChanges(7083);
                }
                const result1 = pendingChanges(7076).resetPendingAccountChanges();
                const obj24 = pendingChanges(7076);
              } else {
                let username;
                if (tmp90 != null) {
                  const body = tmp90.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result2 = pendingChanges(7086).showInvalidUsernameToast();
                  closure_132_6 = true;
                  const obj21 = pendingChanges(7086);
                } else {
                  let avatar;
                  if (closure_132_7 != null) {
                    const body2 = closure_132_7.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const aPIError = new pendingChanges(6372).APIError(closure_132_7);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    pendingChanges = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = pendingChanges(1128).intl;
                      pendingChanges = intl.string(pendingChanges(1128).t["84MExs"]);
                    }
                    const result3 = pendingChanges(15829).showGenericProfileUpdateFailureToast(pendingChanges);
                    closure_132_6 = true;
                    const obj47 = pendingChanges(15829);
                  }
                }
              }
              let tmp121 = closure_132_5;
              if (closure_132_5) {
                let ok1;
                if (closure_132_7 != null) {
                  ok1 = closure_132_7.ok;
                }
                stateFromStores = ok1;
                if (ok1 == null) {
                  stateFromStores = false;
                }
                tmp121 = stateFromStores;
              }
              closure_132_5 = tmp121;
              const _Object2 = Object;
              if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                closure_132_10 = tmp2(profileChangesForUpdateRequest, closure_4);
                c7 = 3;
                c8 = 1;
                const obj13 = { value: pendingChanges(8654).saveProfileChanges(closure_132_10, undefined, bannerOriginalMd5), done: false };
                return obj13;
              } else {
                if (undefined === pendingChanges2.pendingBadgeDisplayOrder) {
                  if (undefined === pendingChanges2.pendingBadgeHiddenBadges) {
                    if (undefined !== pendingChanges2.pendingLegacyUsernameDisabled) {
                      c6 = 1;
                      const LegacyUsernameDisabled = pendingChanges(4797).LegacyUsernameDisabled;
                      c7 = 8;
                      c8 = 1;
                      const obj15 = { value: LegacyUsernameDisabled.updateSetting(pendingChanges2.pendingLegacyUsernameDisabled), done: false };
                      return obj15;
                    }
                  }
                }
                const _Object4 = Object;
                let tmp181 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                if (tmp181) {
                  const _Object5 = Object;
                  tmp181 = 0 === Object.keys(profileChangesForUpdateRequest).length;
                }
                if (tmp181) {
                  const _Object6 = Object;
                  tmp181 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                }
                if (tmp181) {
                  tmp181 = undefined === pendingChanges2.pendingLegacyUsernameDisabled;
                }
                closure_132_13 = tmp181;
                if (closure_132_13) {
                  stateFromStores(584).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  const obj36 = stateFromStores(584);
                }
                const obj16 = { displayOrder: pendingChanges2.pendingBadgeDisplayOrder, hiddenBadges: pendingChanges2.pendingBadgeHiddenBadges };
                c7 = 4;
                c8 = 1;
                const obj17 = { value: pendingChanges(15830).updateBadgeSettings(obj16), done: false };
                return obj17;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              closure_132_11 = value;
              let ok2;
              if (closure_132_11 != null) {
                ok2 = closure_132_11.ok;
              }
              if (ok2) {
                const result4 = pendingChanges(8654).resetPendingProfileChanges();
                const obj19 = pendingChanges(8654);
              } else {
                const aPIError1 = new pendingChanges(6372).APIError(closure_132_11);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const result5 = pendingChanges(15829).showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  closure_132_6 = true;
                  const obj18 = pendingChanges(15829);
                }
              }
              let tmp85 = closure_132_5;
              if (closure_132_5) {
                let ok3;
                if (closure_132_11 != null) {
                  ok3 = closure_132_11.ok;
                }
                dependencyMap = ok3;
                if (ok3 == null) {
                  dependencyMap = false;
                }
                tmp85 = dependencyMap;
              }
              closure_132_5 = tmp85;
            }
          } else {
            if (4 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj23 = { value, done: true };
                return obj23;
              } else {
                closure_132_14 = value;
                if (closure_132_14) {
                  currentUser = currentUser.getCurrentUser();
                  let id;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  closure_132_15 = id;
                  if (null != closure_132_15) {
                    const profile = pendingChanges(8668).fetchProfile(closure_132_15);
                    c7 = 5;
                    c8 = 1;
                    const obj25 = {
                      value: profile.catch(() => {

                                      }),
                      done: false
                    };
                    return obj25;
                  }
                } else if (!closure_132_13) {
                  let tmp49 = closure_132_5;
                  if (closure_132_5) {
                    tmp49 = closure_132_14;
                  }
                  closure_132_5 = tmp49;
                } else {
                  if (closure_132_14) {
                    let obj26 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj26 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  stateFromStores(584).dispatch(obj26);
                  const obj10 = stateFromStores(584);
                }
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj32 = { value, done: true };
                return obj32;
              }
            } else if (6 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj34 = { value, done: true };
                return obj34;
              } else {
                const result6 = pendingChanges(14379).resetPendingBadgeSettings();
                const obj7 = pendingChanges(14379);
              }
            } else if (7 === tmp7) {
              c6 = 0;
              closure_132_5 = false;
            } else {
              if (8 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj35 = { value, done: true };
                  return obj35;
                } else {
                  const result7 = pendingChanges(7076).resetPendingLegacyUsernameDisabled();
                  c6 = 0;
                  const obj5 = pendingChanges(7076);
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj38 = { value, done: true };
                return obj38;
              } else {
                closure_132_17 = value;
                let ok4;
                if (closure_132_17 != null) {
                  ok4 = closure_132_17.ok;
                }
                if (ok4) {
                  const result8 = pendingChanges(7076).resetPendingPrimaryGuildChanges();
                  const obj3 = pendingChanges(7076);
                } else {
                  const aPIError2 = new pendingChanges(6372).APIError(closure_132_17);
                  firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage3) {
                    const result9 = pendingChanges(15829).showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                    closure_132_6 = true;
                    const obj2 = pendingChanges(15829);
                  }
                }
                let tmp29 = closure_132_5;
                if (closure_132_5) {
                  let ok5;
                  if (closure_132_17 != null) {
                    ok5 = closure_132_17.ok;
                  }
                  c3 = ok5;
                  if (ok5 == null) {
                    c3 = false;
                  }
                  tmp29 = c3;
                }
                closure_132_5 = tmp29;
              }
              let tmp158 = closure_132_5;
              if (!closure_132_5) {
                tmp158 = closure_132_6;
              }
              if (!tmp158) {
                const intl2 = pendingChanges(1128).intl;
                const result10 = pendingChanges(15829).showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(1128).t["84MExs"]));
                const obj31 = pendingChanges(15829);
              }
              c8 = 3;
              const obj39 = { value: closure_132_5, done: true };
              return obj39;
            }
            c7 = 6;
            c8 = 1;
            const obj41 = { value: pendingChanges(8684).fetchBadgeDirectory(), done: false };
            return obj41;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
            primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c7 = 9;
              c8 = 1;
              const obj43 = { value: pendingChanges(15135).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
              return obj43;
            }
          }
        }
        pendingChanges2 = pendingChanges.getPendingChanges();
        accountUpdateForUpdateRequest = pendingChanges(11181).getAccountUpdateForUpdateRequest(pendingChanges2);
        const obj28 = pendingChanges(11181);
        profileChangesForUpdateRequest = pendingChanges(11181).getProfileChangesForUpdateRequest(pendingChanges2);
        const obj29 = pendingChanges(11181);
        primaryGuildChangesForUpdateRequest = pendingChanges(11181).getPrimaryGuildChangesForUpdateRequest(pendingChanges2);
        closure_132_5 = true;
        closure_132_6 = false;
        const _Object = Object;
        if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
          c7 = 2;
          c8 = 1;
          const obj44 = { value: pendingChanges(7076).saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
          return obj44;
        }
        const obj30 = pendingChanges(11181);
      } catch (tmp217) {
        if (tmp3 === c6) {
          c8 = tmp;
          throw tmp217;
        } else {
          c7 = tmp4;
        }
      }
    }
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  let obj3 = { hasAvatarDecorationEdits: undefined !== pendingChanges.pendingAvatarDecoration, errors, isSubmitting: null, isWaitingForHexagonCampaignEnrollment: null, handleSubmit: null, handleSubmitAvatarDecoration: null, resetPending: null };
  const callback1 = noop.useCallback(asyncGeneratorStep(async () => {
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
              const obj6 = { value: tmp5(7076).saveProfileAndAccountChanges(obj5), done: false };
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
            const result = tmp5(7076).resetPendingAccountChanges();
            const obj = tmp5(7076);
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
  }), items3);
  if (!stateFromStores) {
    stateFromStores = isWaitingForHexagonCampaignEnrollment;
  }
  obj3.isSubmitting = stateFromStores;
  obj3.isWaitingForHexagonCampaignEnrollment = isWaitingForHexagonCampaignEnrollment;
  obj3.handleSubmit = callback;
  obj3.handleSubmitAvatarDecoration = callback1;
  obj3.resetPending = tmp(tmp2[11]).resetAllPending;
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
});