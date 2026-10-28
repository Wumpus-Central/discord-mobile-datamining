// === Module 16119: useUserProfileEditForm ===

// Module 16119 (useUserProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8686 */;
import UserProfileStore from "UserProfileStore" /* 7738 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const FormStates = fn(1084).FormStates;
const HexagonCampaignPerk = fn(5029).HexagonCampaignPerk;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileEditForm() {
  const cResult = require("c").c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserProfileSettingsStore];
    class S {
      constructor() {
        obj = { pendingChanges: closure_1_9.getPendingChanges(), tryItOutChanges: closure_1_9.getTryItOutChanges(), errors: closure_1_9.getErrors() };
        return obj;
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp4, S);
  let pendingChanges = stateFromStoresObject.pendingChanges;
  _require = pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore, ];
    class S {
      constructor() {
        obj = { pendingChanges: closure_1_9.getPendingChanges(), tryItOutChanges: closure_1_9.getTryItOutChanges(), errors: closure_1_9.getErrors() };
        return obj;
      }
    }
    items1[1] = UserProfileSettingsStore;
    class E {
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
    cResult[3] = E;
    let tmp9 = E;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
  [first, closure_3] = noop.useState(false);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b() {
      return closure_0(first[12]).resetAllPending;
    };
    const items2 = [];
    class S {
      constructor() {
        obj = { pendingChanges: closure_1_9.getPendingChanges(), tryItOutChanges: closure_1_9.getTryItOutChanges(), errors: closure_1_9.getErrors() };
        return obj;
      }
    }
    class E {
      constructor() {
        isSubmitting = closure_1_9.getFormState() === closure_1_12.SUBMITTING;
        if (!isSubmitting) {
          tmp = closure_1_10;
          isSubmitting = closure_1_10.isSubmitting;
        }
        return isSubmitting;
      }
    }
    let tmp15 = items2;
    let tmp14 = fn;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const effect = noop.useEffect(tmp14, tmp15);
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === first) {
      let tmp17 = cResult[8];
    }
    if (cResult[9] === stateFromStores) {
      if (cResult[10] === pendingChanges.pendingAvatarDecoration) {
        let tmp18 = cResult[11];
      }
      let tmp20 = stateFromStores;
      if (!stateFromStores) {
        tmp20 = first;
      }
      class S {
        constructor() {
          obj = { pendingChanges: closure_1_9.getPendingChanges(), tryItOutChanges: closure_1_9.getTryItOutChanges(), errors: closure_1_9.getErrors() };
          return obj;
        }
      }
      if (cResult[12] === errors) {
        if (cResult[13] === tmp17) {
          if (cResult[14] === tmp18) {
            if (cResult[15] === tmp21) {
              if (cResult[16] === first) {
                if (cResult[17] === pendingChanges) {
                  if (cResult[18] === tmp20) {
                    if (cResult[19] === tryItOutChanges) {
                      let tmp22 = cResult[20];
                    }
                    return tmp22;
                  }
                }
              }
            }
          }
        }
      }
      class E {
        constructor() {
          isSubmitting = closure_1_9.getFormState() === closure_1_12.SUBMITTING;
          if (!isSubmitting) {
            tmp = closure_1_10;
            isSubmitting = closure_1_10.isSubmitting;
          }
          return isSubmitting;
        }
      }
      tmp23[0] = tmp21;
      tmp23[1] = errors;
      tmp23[2] = tmp20;
      tmp23[3] = first;
      tmp23[4] = tmp17;
      tmp23[5] = tmp18;
      tmp23[6] = tmp(tmp2[12]).resetAllPending;
      const merged = Object.assign(pendingChanges);
      const merged1 = Object.assign(tryItOutChanges);
      cResult[12] = errors;
      cResult[13] = tmp17;
      cResult[14] = tmp18;
      cResult[15] = tmp21;
      cResult[16] = first;
      cResult[17] = pendingChanges;
      cResult[18] = tmp20;
      cResult[19] = tryItOutChanges;
      cResult[20] = tmp23;
      tmp22 = tmp23;
    }
    class S {
      constructor() {
        obj = { pendingChanges: closure_1_9.getPendingChanges(), tryItOutChanges: closure_1_9.getTryItOutChanges(), errors: closure_1_9.getErrors() };
        return obj;
      }
    }
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
    class E {
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
    tmp18 = t7;
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
            closure_132_8 = undefined;
            let body3;
            let bannerOriginalMd5;
            closure_132_11 = undefined;
            closure_132_12 = undefined;
            let firstFieldErrorMessage2;
            closure_132_14 = undefined;
            closure_132_15 = undefined;
            closure_132_16 = undefined;
            let primaryGuildId;
            closure_132_18 = undefined;
            let firstFieldErrorMessage3;
            if (!c1) {
              if (!c2) {
                const pendingHexagonCampaignEnrollment = closure_0(first[13]).getPendingHexagonCampaignEnrollment();
                if (null != pendingHexagonCampaignEnrollment) {
                  c3(true);
                  c7 = 1;
                  c8 = 1;
                  const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                  return obj6;
                }
                const obj29 = closure_0(first[13]);
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
              closure_132_8 = value;
              let ok;
              if (closure_132_8 != null) {
                ok = closure_132_8.ok;
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
                  const result = closure_0(first[16]).trackUserAvatarUpdated(obj11);
                  const obj22 = closure_0(first[16]);
                }
                if (closure_132_5) {
                  const obj13 = { perks: null, content: null, contentSurface: null };
                  const items = [constants2.DISPLAY_NAME_STYLE];
                  obj13.perks = items;
                  obj13.content = closure_0(first[18]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
                  obj13.contentSurface = closure_0(first[17]).HexagonCampaignContentSurface.USER_PROFILE;
                  const result1 = closure_0(first[17]).trackHexagonCampaignPerkAction(obj13);
                  const obj24 = closure_0(first[17]);
                }
                const result2 = closure_0(first[12]).resetPendingAccountChanges();
                const obj26 = closure_0(first[12]);
              } else {
                let username;
                if (tmp90 != null) {
                  const body = tmp90.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result3 = closure_0(first[19]).showInvalidUsernameToast();
                  closure_132_7 = true;
                  const obj21 = closure_0(first[19]);
                } else {
                  let avatar;
                  if (closure_132_8 != null) {
                    const body2 = closure_132_8.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const aPIError = new closure_0(first[21]).APIError(closure_132_8);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    closure_0 = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = closure_0(first[22]).intl;
                      closure_0 = intl.string(closure_0(first[22]).t["84MExs"]);
                    }
                    const result4 = closure_0(first[20]).showGenericProfileUpdateFailureToast(closure_0);
                    closure_132_7 = true;
                    const obj51 = closure_0(first[20]);
                  }
                }
              }
              let tmp132 = closure_132_6;
              if (closure_132_6) {
                let ok1;
                if (closure_132_8 != null) {
                  ok1 = closure_132_8.ok;
                }
                c1 = ok1;
                if (ok1 == null) {
                  c1 = false;
                }
                tmp132 = c1;
              }
              closure_132_6 = tmp132;
              const _Object2 = Object;
              if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                closure_132_11 = _objectWithoutProperties(profileChangesForUpdateRequest, closure_3);
                c7 = 3;
                c8 = 1;
                const obj15 = { value: closure_0(first[23]).saveProfileChanges(closure_132_11, undefined, bannerOriginalMd5), done: false };
                return obj15;
              } else {
                if (undefined === pendingChanges.pendingBadgeDisplayOrder) {
                  if (undefined === pendingChanges.pendingBadgeHiddenBadges) {
                    if (undefined !== pendingChanges.pendingLegacyUsernameDisabled) {
                      c6 = 1;
                      const LegacyUsernameDisabled = closure_0(first[29]).LegacyUsernameDisabled;
                      c7 = 8;
                      c8 = 1;
                      const obj16 = { value: LegacyUsernameDisabled.updateSetting(pendingChanges.pendingLegacyUsernameDisabled), done: false };
                      return obj16;
                    }
                  }
                }
                const _Object4 = Object;
                let tmp203 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                if (tmp203) {
                  const _Object5 = Object;
                  tmp203 = 0 === Object.keys(profileChangesForUpdateRequest).length;
                }
                if (tmp203) {
                  const _Object6 = Object;
                  tmp203 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                }
                if (tmp203) {
                  tmp203 = undefined === pendingChanges.pendingLegacyUsernameDisabled;
                }
                closure_132_14 = tmp203;
                if (closure_132_14) {
                  stateFromStores(first[24]).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  const obj40 = stateFromStores(first[24]);
                }
                const obj17 = { displayOrder: pendingChanges.pendingBadgeDisplayOrder, hiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
                c7 = 4;
                c8 = 1;
                const obj20 = { value: closure_0(first[25]).updateBadgeSettings(obj17), done: false };
                return obj20;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else {
              closure_132_12 = value;
              let ok2;
              if (closure_132_12 != null) {
                ok2 = closure_132_12.ok;
              }
              if (ok2) {
                const result5 = closure_0(first[23]).resetPendingProfileChanges();
                const obj19 = closure_0(first[23]);
              } else {
                const aPIError1 = new closure_0(first[21]).APIError(closure_132_12);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const result6 = closure_0(first[20]).showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  closure_132_7 = true;
                  const obj18 = closure_0(first[20]);
                }
              }
              let tmp85 = closure_132_6;
              if (closure_132_6) {
                let ok3;
                if (closure_132_12 != null) {
                  ok3 = closure_132_12.ok;
                }
                c2 = ok3;
                if (ok3 == null) {
                  c2 = false;
                }
                tmp85 = c2;
              }
              closure_132_6 = tmp85;
            }
          } else {
            if (4 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj25 = { value, done: true };
                return obj25;
              } else {
                closure_132_15 = value;
                if (closure_132_15) {
                  const currentUser = authStore.getCurrentUser();
                  let id;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  closure_132_16 = id;
                  if (null != closure_132_16) {
                    const profile = closure_0(first[26]).fetchProfile(closure_132_16);
                    c7 = 5;
                    c8 = 1;
                    const obj27 = {
                      value: profile.catch(() => {

                                      }),
                      done: false
                    };
                    return obj27;
                  }
                } else if (!closure_132_14) {
                  let tmp49 = closure_132_6;
                  if (closure_132_6) {
                    tmp49 = closure_132_15;
                  }
                  closure_132_6 = tmp49;
                } else {
                  if (closure_132_15) {
                    let obj28 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj28 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  stateFromStores(first[24]).dispatch(obj28);
                  const obj10 = stateFromStores(first[24]);
                }
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj36 = { value, done: true };
                return obj36;
              }
            } else if (6 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj38 = { value, done: true };
                return obj38;
              } else {
                const result7 = closure_0(first[28]).resetPendingBadgeSettings();
                const obj7 = closure_0(first[28]);
              }
            } else if (7 === tmp7) {
              c6 = 0;
              closure_132_6 = false;
            } else {
              if (8 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj39 = { value, done: true };
                  return obj39;
                } else {
                  const result8 = closure_0(first[12]).resetPendingLegacyUsernameDisabled();
                  c6 = 0;
                  const obj5 = closure_0(first[12]);
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj42 = { value, done: true };
                return obj42;
              } else {
                closure_132_18 = value;
                let ok4;
                if (closure_132_18 != null) {
                  ok4 = closure_132_18.ok;
                }
                if (ok4) {
                  const result9 = closure_0(first[12]).resetPendingPrimaryGuildChanges();
                  const obj3 = closure_0(first[12]);
                } else {
                  const aPIError2 = new closure_0(first[21]).APIError(closure_132_18);
                  firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage3) {
                    const result10 = closure_0(first[20]).showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                    closure_132_7 = true;
                    const obj2 = closure_0(first[20]);
                  }
                }
                let tmp29 = closure_132_6;
                if (closure_132_6) {
                  let ok5;
                  if (closure_132_18 != null) {
                    ok5 = closure_132_18.ok;
                  }
                  c3 = ok5;
                  if (ok5 == null) {
                    c3 = false;
                  }
                  tmp29 = c3;
                }
                closure_132_6 = tmp29;
              }
              let tmp180 = closure_132_6;
              if (!closure_132_6) {
                tmp180 = closure_132_7;
              }
              if (!tmp180) {
                const intl2 = closure_0(first[22]).intl;
                const result11 = closure_0(first[20]).showGenericProfileUpdateFailureToast(intl2.string(closure_0(first[22]).t["84MExs"]));
                const obj35 = closure_0(first[20]);
              }
              c8 = 3;
              const obj43 = { value: closure_132_6, done: true };
              return obj43;
            }
            c7 = 6;
            c8 = 1;
            const obj45 = { value: closure_0(first[27]).fetchBadgeDirectory(), done: false };
            return obj45;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
            primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c7 = 9;
              c8 = 1;
              const obj47 = { value: closure_0(first[30]).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
              return obj47;
            }
          }
        }
        pendingChanges = UserProfileSettingsStore.getPendingChanges();
        accountUpdateForUpdateRequest = closure_0(first[14]).getAccountUpdateForUpdateRequest(pendingChanges);
        const obj30 = closure_0(first[14]);
        profileChangesForUpdateRequest = closure_0(first[14]).getProfileChangesForUpdateRequest(pendingChanges);
        const obj31 = closure_0(first[14]);
        primaryGuildChangesForUpdateRequest = closure_0(first[14]).getPrimaryGuildChangesForUpdateRequest(pendingChanges);
        const obj32 = closure_0(first[14]);
        let result12 = closure_0(first[15]).hasHexagonCampaignDisplayNameFont(accountUpdateForUpdateRequest.displayNameStyles);
        if (result12) {
          const currentUser1 = authStore.getCurrentUser();
          let displayNameStyles;
          if (currentUser1 != null) {
            displayNameStyles = currentUser1.displayNameStyles;
          }
          result12 = !closure_0(first[15]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
          const obj34 = closure_0(first[15]);
        }
        closure_132_5 = result12;
        closure_132_6 = true;
        closure_132_7 = false;
        const _Object = Object;
        if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
          c7 = 2;
          c8 = 1;
          const obj48 = { value: closure_0(first[12]).saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
          return obj48;
        }
        const obj33 = closure_0(first[15]);
      } catch (tmp239) {
        if (tmp3 === c6) {
          c8 = tmp;
          throw tmp239;
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
  tmp17 = t6;
  const tmpResult2 = require("initialize");
}) : (function useUserProfileEditForm() {
  let items = [UserProfileSettingsStore];
  const stateFromStoresObject = pendingChanges(isWaitingForHexagonCampaignEnrollment[11]).useStateFromStoresObject(items, () => ({ pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[11]);
  const tmp = pendingChanges;
  const tmp2 = isWaitingForHexagonCampaignEnrollment;
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  let stateFromStores = pendingChanges(isWaitingForHexagonCampaignEnrollment[11]).useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    return isSubmitting;
  });
  [isWaitingForHexagonCampaignEnrollment, closure_3] = noop.useState(false);
  const effect = noop.useEffect(() => pendingChanges(first[12]).resetAllPending, []);
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
            closure_132_8 = undefined;
            let body3;
            let bannerOriginalMd5;
            closure_132_11 = undefined;
            closure_132_12 = undefined;
            let firstFieldErrorMessage2;
            closure_132_14 = undefined;
            closure_132_15 = undefined;
            closure_132_16 = undefined;
            let primaryGuildId;
            closure_132_18 = undefined;
            let firstFieldErrorMessage3;
            if (!stateFromStores) {
              if (!first) {
                const pendingHexagonCampaignEnrollment = pendingChanges(16120).getPendingHexagonCampaignEnrollment();
                if (null != pendingHexagonCampaignEnrollment) {
                  closure_3(true);
                  c7 = 1;
                  c8 = 1;
                  const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                  return obj6;
                }
                const obj29 = pendingChanges(16120);
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
              closure_132_8 = value;
              let ok;
              if (closure_132_8 != null) {
                ok = closure_132_8.ok;
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
                  const result = pendingChanges(7121).trackUserAvatarUpdated(obj11);
                  const obj22 = pendingChanges(7121);
                }
                if (closure_132_5) {
                  const obj13 = { perks: null, content: null, contentSurface: null };
                  const items = [constants.DISPLAY_NAME_STYLE];
                  obj13.perks = items;
                  obj13.content = pendingChanges(6748).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
                  obj13.contentSurface = pendingChanges(16121).HexagonCampaignContentSurface.USER_PROFILE;
                  const result1 = pendingChanges(16121).trackHexagonCampaignPerkAction(obj13);
                  const obj24 = pendingChanges(16121);
                }
                const result2 = pendingChanges(7114).resetPendingAccountChanges();
                const obj26 = pendingChanges(7114);
              } else {
                let username;
                if (tmp90 != null) {
                  const body = tmp90.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result3 = pendingChanges(7124).showInvalidUsernameToast();
                  closure_132_7 = true;
                  const obj21 = pendingChanges(7124);
                } else {
                  let avatar;
                  if (closure_132_8 != null) {
                    const body2 = closure_132_8.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const aPIError = new pendingChanges(6409).APIError(closure_132_8);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    pendingChanges = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = pendingChanges(1125).intl;
                      pendingChanges = intl.string(pendingChanges(1125).t["84MExs"]);
                    }
                    const result4 = pendingChanges(16122).showGenericProfileUpdateFailureToast(pendingChanges);
                    closure_132_7 = true;
                    const obj51 = pendingChanges(16122);
                  }
                }
              }
              let tmp132 = closure_132_6;
              if (closure_132_6) {
                let ok1;
                if (closure_132_8 != null) {
                  ok1 = closure_132_8.ok;
                }
                stateFromStores = ok1;
                if (ok1 == null) {
                  stateFromStores = false;
                }
                tmp132 = stateFromStores;
              }
              closure_132_6 = tmp132;
              const _Object2 = Object;
              if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                closure_132_11 = tmp2(profileChangesForUpdateRequest, closure_4);
                c7 = 3;
                c8 = 1;
                const obj15 = { value: pendingChanges(8693).saveProfileChanges(closure_132_11, undefined, bannerOriginalMd5), done: false };
                return obj15;
              } else {
                if (undefined === pendingChanges2.pendingBadgeDisplayOrder) {
                  if (undefined === pendingChanges2.pendingBadgeHiddenBadges) {
                    if (undefined !== pendingChanges2.pendingLegacyUsernameDisabled) {
                      c6 = 1;
                      const LegacyUsernameDisabled = pendingChanges(4832).LegacyUsernameDisabled;
                      c7 = 8;
                      c8 = 1;
                      const obj16 = { value: LegacyUsernameDisabled.updateSetting(pendingChanges2.pendingLegacyUsernameDisabled), done: false };
                      return obj16;
                    }
                  }
                }
                const _Object4 = Object;
                let tmp203 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                if (tmp203) {
                  const _Object5 = Object;
                  tmp203 = 0 === Object.keys(profileChangesForUpdateRequest).length;
                }
                if (tmp203) {
                  const _Object6 = Object;
                  tmp203 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                }
                if (tmp203) {
                  tmp203 = undefined === pendingChanges2.pendingLegacyUsernameDisabled;
                }
                closure_132_14 = tmp203;
                if (closure_132_14) {
                  stateFromStores(584).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  const obj40 = stateFromStores(584);
                }
                const obj17 = { displayOrder: pendingChanges2.pendingBadgeDisplayOrder, hiddenBadges: pendingChanges2.pendingBadgeHiddenBadges };
                c7 = 4;
                c8 = 1;
                const obj20 = { value: pendingChanges(16123).updateBadgeSettings(obj17), done: false };
                return obj20;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else {
              closure_132_12 = value;
              let ok2;
              if (closure_132_12 != null) {
                ok2 = closure_132_12.ok;
              }
              if (ok2) {
                const result5 = pendingChanges(8693).resetPendingProfileChanges();
                const obj19 = pendingChanges(8693);
              } else {
                const aPIError1 = new pendingChanges(6409).APIError(closure_132_12);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const result6 = pendingChanges(16122).showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  closure_132_7 = true;
                  const obj18 = pendingChanges(16122);
                }
              }
              let tmp85 = closure_132_6;
              if (closure_132_6) {
                let ok3;
                if (closure_132_12 != null) {
                  ok3 = closure_132_12.ok;
                }
                dependencyMap = ok3;
                if (ok3 == null) {
                  dependencyMap = false;
                }
                tmp85 = dependencyMap;
              }
              closure_132_6 = tmp85;
            }
          } else {
            if (4 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj25 = { value, done: true };
                return obj25;
              } else {
                closure_132_15 = value;
                if (closure_132_15) {
                  const currentUser = authStore.getCurrentUser();
                  let id;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  closure_132_16 = id;
                  if (null != closure_132_16) {
                    const profile = pendingChanges(8707).fetchProfile(closure_132_16);
                    c7 = 5;
                    c8 = 1;
                    const obj27 = {
                      value: profile.catch(() => {

                                      }),
                      done: false
                    };
                    return obj27;
                  }
                } else if (!closure_132_14) {
                  let tmp49 = closure_132_6;
                  if (closure_132_6) {
                    tmp49 = closure_132_15;
                  }
                  closure_132_6 = tmp49;
                } else {
                  if (closure_132_15) {
                    let obj28 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj28 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  stateFromStores(584).dispatch(obj28);
                  const obj10 = stateFromStores(584);
                }
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj36 = { value, done: true };
                return obj36;
              }
            } else if (6 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj38 = { value, done: true };
                return obj38;
              } else {
                const result7 = pendingChanges(14667).resetPendingBadgeSettings();
                const obj7 = pendingChanges(14667);
              }
            } else if (7 === tmp7) {
              c6 = 0;
              closure_132_6 = false;
            } else {
              if (8 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj39 = { value, done: true };
                  return obj39;
                } else {
                  const result8 = pendingChanges(7114).resetPendingLegacyUsernameDisabled();
                  c6 = 0;
                  const obj5 = pendingChanges(7114);
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj42 = { value, done: true };
                return obj42;
              } else {
                closure_132_18 = value;
                let ok4;
                if (closure_132_18 != null) {
                  ok4 = closure_132_18.ok;
                }
                if (ok4) {
                  const result9 = pendingChanges(7114).resetPendingPrimaryGuildChanges();
                  const obj3 = pendingChanges(7114);
                } else {
                  const aPIError2 = new pendingChanges(6409).APIError(closure_132_18);
                  firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage3) {
                    const result10 = pendingChanges(16122).showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                    closure_132_7 = true;
                    const obj2 = pendingChanges(16122);
                  }
                }
                let tmp29 = closure_132_6;
                if (closure_132_6) {
                  let ok5;
                  if (closure_132_18 != null) {
                    ok5 = closure_132_18.ok;
                  }
                  c3 = ok5;
                  if (ok5 == null) {
                    c3 = false;
                  }
                  tmp29 = c3;
                }
                closure_132_6 = tmp29;
              }
              let tmp180 = closure_132_6;
              if (!closure_132_6) {
                tmp180 = closure_132_7;
              }
              if (!tmp180) {
                const intl2 = pendingChanges(1125).intl;
                const result11 = pendingChanges(16122).showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(1125).t["84MExs"]));
                const obj35 = pendingChanges(16122);
              }
              c8 = 3;
              const obj43 = { value: closure_132_6, done: true };
              return obj43;
            }
            c7 = 6;
            c8 = 1;
            const obj45 = { value: pendingChanges(8723).fetchBadgeDirectory(), done: false };
            return obj45;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
            primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c7 = 9;
              c8 = 1;
              const obj47 = { value: pendingChanges(15423).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
              return obj47;
            }
          }
        }
        pendingChanges2 = pendingChanges.getPendingChanges();
        accountUpdateForUpdateRequest = pendingChanges(11224).getAccountUpdateForUpdateRequest(pendingChanges2);
        const obj30 = pendingChanges(11224);
        profileChangesForUpdateRequest = pendingChanges(11224).getProfileChangesForUpdateRequest(pendingChanges2);
        const obj31 = pendingChanges(11224);
        primaryGuildChangesForUpdateRequest = pendingChanges(11224).getPrimaryGuildChangesForUpdateRequest(pendingChanges2);
        const obj32 = pendingChanges(11224);
        let result12 = pendingChanges(5031).hasHexagonCampaignDisplayNameFont(accountUpdateForUpdateRequest.displayNameStyles);
        if (result12) {
          const currentUser1 = authStore.getCurrentUser();
          let displayNameStyles;
          if (currentUser1 != null) {
            displayNameStyles = currentUser1.displayNameStyles;
          }
          result12 = !pendingChanges(5031).hasHexagonCampaignDisplayNameFont(displayNameStyles);
          const obj34 = pendingChanges(5031);
        }
        closure_132_5 = result12;
        closure_132_6 = true;
        closure_132_7 = false;
        const _Object = Object;
        if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
          c7 = 2;
          c8 = 1;
          const obj48 = { value: pendingChanges(7114).saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
          return obj48;
        }
        const obj33 = pendingChanges(5031);
      } catch (tmp239) {
        if (tmp3 === c6) {
          c8 = tmp;
          throw tmp239;
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
              const obj6 = { value: tmp5(7114).saveProfileAndAccountChanges(obj5), done: false };
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
            const result = tmp5(7114).resetPendingAccountChanges();
            const obj = tmp5(7114);
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
  obj3.resetPending = tmp(tmp2[12]).resetAllPending;
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
});