// === Module 16451: useUserProfileEditForm ===

// Module 16451 (useUserProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8731 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;
import UserStore from "UserStore" /* 1383 */;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
const FormStates = fn(1072).FormStates;
const HexagonCampaignPerk = fn(5039).HexagonCampaignPerk;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let items = [UserProfileSettingsStore];
  const stateFromStoresObject = pendingChanges(isWaitingForHexagonCampaignEnrollment[9]).useStateFromStoresObject(items, () => ({ pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[9]);
  const tmp = pendingChanges;
  const tmp2 = isWaitingForHexagonCampaignEnrollment;
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  let stateFromStores = pendingChanges(isWaitingForHexagonCampaignEnrollment[9]).useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    return isSubmitting;
  });
  [isWaitingForHexagonCampaignEnrollment, closure_3] = noop.useState(false);
  const effect = noop.useEffect(() => pendingChanges(first[10]).resetAllPending, []);
  const items2 = [stateFromStores, isWaitingForHexagonCampaignEnrollment];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (pendingChanges === 2) {
      pendingChanges = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        pendingChanges = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            pendingChanges = 3;
            throw value;
          } else if (arg0 === 2) {
            pendingChanges = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp2;
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
                const pendingHexagonCampaignEnrollment = pendingChanges(16452).getPendingHexagonCampaignEnrollment();
                if (null != pendingHexagonCampaignEnrollment) {
                  closure_3(true);
                  c7 = 1;
                  pendingChanges = 1;
                  const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                  return obj6;
                }
                const obj29 = pendingChanges(16452);
              }
            }
            pendingChanges = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_132_0 = value;
              closure_133_3(false);
              if (!closure_132_0) {
                pendingChanges = 3;
                return { value: false, done: true };
              }
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
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
                  const result = pendingChanges(7159).trackUserAvatarUpdated(obj11);
                  const obj22 = pendingChanges(7159);
                }
                if (closure_132_5) {
                  const obj13 = { perks: null, content: null, contentSurface: null };
                  const items = [constants.DISPLAY_NAME_STYLE];
                  obj13.perks = items;
                  obj13.content = pendingChanges(6784).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
                  obj13.contentSurface = pendingChanges(16453).HexagonCampaignContentSurface.USER_PROFILE;
                  const result1 = pendingChanges(16453).trackHexagonCampaignPerkAction(obj13);
                  const obj24 = pendingChanges(16453);
                }
                const result2 = pendingChanges(7152).resetPendingAccountChanges();
                const obj26 = pendingChanges(7152);
              } else {
                let username;
                if (tmp90 != null) {
                  const body = tmp90.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result3 = pendingChanges(7162).showInvalidUsernameToast();
                  closure_132_7 = true;
                  const obj21 = pendingChanges(7162);
                } else {
                  let avatar;
                  if (closure_132_8 != null) {
                    const body2 = closure_132_8.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const aPIError = new pendingChanges(6446).APIError(closure_132_8);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    pendingChanges = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = pendingChanges(1113).intl;
                      pendingChanges = intl.string(pendingChanges(1113).t["84MExs"]);
                    }
                    const result4 = pendingChanges(16454).showGenericProfileUpdateFailureToast(pendingChanges);
                    closure_132_7 = true;
                    const obj51 = pendingChanges(16454);
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
                closure_132_11 = closure_4(profileChangesForUpdateRequest, c3);
                c7 = 3;
                pendingChanges = 1;
                const obj15 = { value: pendingChanges(8738).saveProfileChanges(closure_132_11, undefined, bannerOriginalMd5), done: false };
                return obj15;
              } else {
                if (undefined === pendingChanges2.pendingBadgeDisplayOrder) {
                  if (undefined === pendingChanges2.pendingBadgeHiddenBadges) {
                    if (undefined !== pendingChanges2.pendingLegacyUsernameDisabled) {
                      c6 = 1;
                      const LegacyUsernameDisabled = pendingChanges(4839).LegacyUsernameDisabled;
                      c7 = 8;
                      pendingChanges = 1;
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
                  stateFromStores(572).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  const obj40 = stateFromStores(572);
                }
                const obj17 = { displayOrder: pendingChanges2.pendingBadgeDisplayOrder, hiddenBadges: pendingChanges2.pendingBadgeHiddenBadges };
                c7 = 4;
                pendingChanges = 1;
                const obj20 = { value: pendingChanges(16455).updateBadgeSettings(obj17), done: false };
                return obj20;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else {
              closure_132_12 = value;
              let ok2;
              if (closure_132_12 != null) {
                ok2 = closure_132_12.ok;
              }
              if (ok2) {
                const result5 = pendingChanges(8738).resetPendingProfileChanges();
                const obj19 = pendingChanges(8738);
              } else {
                const aPIError1 = new pendingChanges(6446).APIError(closure_132_12);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const result6 = pendingChanges(16454).showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  closure_132_7 = true;
                  const obj18 = pendingChanges(16454);
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
                pendingChanges = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingChanges = 3;
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
                    const profile = pendingChanges(8752).fetchProfile(closure_132_16);
                    c7 = 5;
                    pendingChanges = 1;
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
                  stateFromStores(572).dispatch(obj28);
                  const obj10 = stateFromStores(572);
                }
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                pendingChanges = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingChanges = 3;
                const obj36 = { value, done: true };
                return obj36;
              }
            } else if (6 === tmp7) {
              if (arg0 === 1) {
                pendingChanges = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingChanges = 3;
                const obj38 = { value, done: true };
                return obj38;
              } else {
                const result7 = pendingChanges(14981).resetPendingBadgeSettings();
                const obj7 = pendingChanges(14981);
              }
            } else if (7 === tmp7) {
              c6 = 0;
              closure_132_6 = false;
            } else {
              if (8 === tmp7) {
                if (arg0 === 1) {
                  pendingChanges = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  pendingChanges = 3;
                  const obj39 = { value, done: true };
                  return obj39;
                } else {
                  const result8 = pendingChanges(7152).resetPendingLegacyUsernameDisabled();
                  c6 = 0;
                  const obj5 = pendingChanges(7152);
                }
              } else if (arg0 === 1) {
                pendingChanges = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingChanges = 3;
                const obj42 = { value, done: true };
                return obj42;
              } else {
                closure_132_18 = value;
                let ok4;
                if (closure_132_18 != null) {
                  ok4 = closure_132_18.ok;
                }
                if (ok4) {
                  const result9 = pendingChanges(7152).resetPendingPrimaryGuildChanges();
                  const obj3 = pendingChanges(7152);
                } else {
                  const aPIError2 = new pendingChanges(6446).APIError(closure_132_18);
                  firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage3) {
                    const result10 = pendingChanges(16454).showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                    closure_132_7 = true;
                    const obj2 = pendingChanges(16454);
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
                const intl2 = pendingChanges(1113).intl;
                const result11 = pendingChanges(16454).showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(1113).t["84MExs"]));
                const obj35 = pendingChanges(16454);
              }
              pendingChanges = 3;
              const obj43 = { value: closure_132_6, done: true };
              return obj43;
            }
            c7 = 6;
            pendingChanges = 1;
            const obj45 = { value: pendingChanges(8768).fetchBadgeDirectory(), done: false };
            return obj45;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
            primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c7 = 9;
              pendingChanges = 1;
              const obj47 = { value: pendingChanges(15737).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
              return obj47;
            }
          }
        }
        pendingChanges2 = pendingChanges.getPendingChanges();
        accountUpdateForUpdateRequest = pendingChanges(11515).getAccountUpdateForUpdateRequest(pendingChanges2);
        const obj30 = pendingChanges(11515);
        profileChangesForUpdateRequest = pendingChanges(11515).getProfileChangesForUpdateRequest(pendingChanges2);
        const obj31 = pendingChanges(11515);
        primaryGuildChangesForUpdateRequest = pendingChanges(11515).getPrimaryGuildChangesForUpdateRequest(pendingChanges2);
        const obj32 = pendingChanges(11515);
        let result12 = pendingChanges(5041).hasHexagonCampaignDisplayNameFont(accountUpdateForUpdateRequest.displayNameStyles);
        if (result12) {
          const currentUser1 = authStore.getCurrentUser();
          let displayNameStyles;
          if (currentUser1 != null) {
            displayNameStyles = currentUser1.displayNameStyles;
          }
          result12 = !pendingChanges(5041).hasHexagonCampaignDisplayNameFont(displayNameStyles);
          const obj34 = pendingChanges(5041);
        }
        closure_132_5 = result12;
        closure_132_6 = true;
        closure_132_7 = false;
        const _Object = Object;
        if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
          c7 = 2;
          pendingChanges = 1;
          const obj48 = { value: pendingChanges(7152).saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
          return obj48;
        }
        const obj33 = pendingChanges(5041);
      } catch (tmp239) {
        if (tmp3 === c6) {
          pendingChanges = tmp;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj6 = { value: tmp5(7152).saveProfileAndAccountChanges(obj5), done: false };
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
            const result = tmp5(7152).resetPendingAccountChanges();
            const obj = tmp5(7152);
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
  obj3.resetPending = tmp(tmp2[10]).resetAllPending;
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
};