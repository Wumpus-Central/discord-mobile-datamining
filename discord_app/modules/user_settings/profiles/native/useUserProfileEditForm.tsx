// === Module 16722: useUserProfileEditForm ===

// Module 16722 (useUserProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8877 */;
import UserProfileStore from "UserProfileStore" /* 7917 */;
import WidgetStore from "WidgetStore" /* 12572 */;
import UserStore from "UserStore" /* 1385 */;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
const FormStates = fn(1072).FormStates;
const HexagonCampaignPerk = fn(5168).HexagonCampaignPerk;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  items = [UserProfileSettingsStore];
  const stateFromStoresObject = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]).useStateFromStoresObject(items, () => ({ pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  const tmp = pendingChanges;
  const tmp2 = isWaitingForHexagonCampaignEnrollment;
  const items1 = [UserProfileStore, UserProfileSettingsStore, WidgetStore];
  let stateFromStores = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]).useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    if (!isSubmitting) {
      isSubmitting = isSubmitting2.isSubmitting;
    }
    return isSubmitting;
  });
  [isWaitingForHexagonCampaignEnrollment, closure_3] = noop.useState(false);
  const effect = noop.useEffect(() => pendingChanges(first[11]).resetAllPending, []);
  const items2 = [stateFromStores, isWaitingForHexagonCampaignEnrollment];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (pendingChanges === 2) {
      pendingChanges = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        pendingChanges = 2;
        switch (c7) {
          case 0:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_5 = tmp3;
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
              let saveablePendingWidgets;
              let primaryGuildId;
              closure_132_19 = undefined;
              let firstFieldErrorMessage3;
              if (!stateFromStores) {
                if (!first) {
                  const pendingHexagonCampaignEnrollment = pendingChanges(16723).getPendingHexagonCampaignEnrollment();
                  if (null != pendingHexagonCampaignEnrollment) {
                    closure_3(true);
                    c7 = 1;
                    pendingChanges = 1;
                    const obj6 = { value: pendingHexagonCampaignEnrollment, done: false };
                    return obj6;
                  } else {
                    pendingChanges2 = pendingChanges.getPendingChanges();
                    accountUpdateForUpdateRequest = pendingChanges(11713).getAccountUpdateForUpdateRequest(pendingChanges2);
                    const obj27 = pendingChanges(11713);
                    profileChangesForUpdateRequest = pendingChanges(11713).getProfileChangesForUpdateRequest(pendingChanges2);
                    const obj28 = pendingChanges(11713);
                    primaryGuildChangesForUpdateRequest = pendingChanges(11713).getPrimaryGuildChangesForUpdateRequest(pendingChanges2);
                    const obj29 = pendingChanges(11713);
                    let result = pendingChanges(5170).hasHexagonCampaignDisplayNameFont(accountUpdateForUpdateRequest.displayNameStyles);
                    if (result) {
                      const currentUser = authStore.getCurrentUser();
                      let displayNameStyles;
                      if (currentUser != null) {
                        displayNameStyles = currentUser.displayNameStyles;
                      }
                      result = !pendingChanges(5170).hasHexagonCampaignDisplayNameFont(displayNameStyles);
                      const obj31 = pendingChanges(5170);
                    }
                    closure_132_5 = result;
                    closure_132_6 = true;
                    closure_132_7 = false;
                    const _Object = Object;
                    if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                      c7 = 2;
                      pendingChanges = 1;
                      const obj8 = { value: pendingChanges(7292).saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
                      return obj8;
                    } else {
                      const _Object2 = Object;
                      if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                        bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                        closure_132_11 = tmp9(profileChangesForUpdateRequest, c3);
                        c7 = 3;
                        pendingChanges = 1;
                        const obj10 = { value: pendingChanges(8884).saveProfileChanges(closure_132_11, undefined, bannerOriginalMd5), done: false };
                        return obj10;
                      } else {
                        if (undefined === pendingChanges2.pendingBadgeDisplayOrder) {
                          if (undefined === pendingChanges2.pendingBadgeHiddenBadges) {
                            if (undefined !== pendingChanges2.pendingLegacyUsernameDisabled) {
                              c6 = 1;
                              const LegacyUsernameDisabled = pendingChanges(4968).LegacyUsernameDisabled;
                              c7 = 8;
                              pendingChanges = 1;
                              const obj12 = { value: LegacyUsernameDisabled.updateSetting(pendingChanges2.pendingLegacyUsernameDisabled), done: false };
                              return obj12;
                            } else {
                              if (isSubmitting2.hasUnsavedChanges()) {
                                saveablePendingWidgets = isSubmitting2.getSaveablePendingWidgets();
                                if (null != saveablePendingWidgets) {
                                  if (isSubmitting2.canSaveChanges()) {
                                    c6 = 2;
                                    c7 = 10;
                                    pendingChanges = 1;
                                    const obj13 = { value: stateFromStores(12574).savePendingWidgets(saveablePendingWidgets), done: false };
                                    return obj13;
                                  }
                                }
                                closure_132_6 = false;
                              }
                              const _Object3 = Object;
                              if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
                                primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
                                if (undefined !== primaryGuildId) {
                                  c7 = 11;
                                  pendingChanges = 1;
                                  const obj14 = { value: pendingChanges(15997).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
                                  return obj14;
                                }
                              }
                              let tmp237 = closure_132_6;
                              if (!closure_132_6) {
                                tmp237 = closure_132_7;
                              }
                              if (!tmp237) {
                                const intl2 = pendingChanges(1113).intl;
                                const result1 = pendingChanges(16725).showGenericProfileUpdateFailureToast(intl2.string(pendingChanges(1113).t["84MExs"]));
                                const obj49 = pendingChanges(16725);
                              }
                              pendingChanges = 3;
                              const obj17 = { value: closure_132_6, done: true };
                              return obj17;
                            }
                          }
                        }
                        const _Object4 = Object;
                        let tmp176 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                        if (tmp176) {
                          const _Object5 = Object;
                          tmp176 = 0 === Object.keys(profileChangesForUpdateRequest).length;
                        }
                        if (tmp176) {
                          const _Object6 = Object;
                          tmp176 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                        }
                        if (tmp176) {
                          tmp176 = undefined === pendingChanges2.pendingLegacyUsernameDisabled;
                        }
                        closure_132_14 = tmp176;
                        if (closure_132_14) {
                          stateFromStores(572).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                          const obj36 = stateFromStores(572);
                        }
                        const obj20 = { displayOrder: pendingChanges2.pendingBadgeDisplayOrder, hiddenBadges: pendingChanges2.pendingBadgeHiddenBadges };
                        c7 = 4;
                        pendingChanges = 1;
                        const obj22 = { value: pendingChanges(16726).updateBadgeSettings(obj20), done: false };
                        return obj22;
                      }
                    }
                    const obj30 = pendingChanges(5170);
                  }
                  const obj26 = pendingChanges(16723);
                }
              }
              pendingChanges = 3;
              return { value: "HermesInternal", done: null };
            }
          break;
          case 1:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj24 = { value, done: true };
              return obj24;
            } else {
              closure_132_0 = value;
              closure_133_3(false);
              if (!closure_132_0) {
                pendingChanges = 3;
                return { value: false, done: true };
              }
            }
          break;
          case 2:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj25 = { value, done: true };
              return obj25;
            } else {
              closure_132_8 = value;
              let ok;
              if (closure_132_8 != null) {
                ok = closure_132_8.ok;
              }
              if (ok) {
                body3 = tmp69.body;
                if (undefined !== pendingChanges2.pendingAvatar) {
                  const obj32 = { avatarHash: body3.avatar, avatarId: accountUpdateForUpdateRequest.avatarId, avatarAssetOrigin: null };
                  const pendingAvatar = pendingChanges2.pendingAvatar;
                  let assetOrigin;
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  obj32.avatarAssetOrigin = assetOrigin;
                  const result2 = pendingChanges(7299).trackUserAvatarUpdated(obj32);
                  const obj19 = pendingChanges(7299);
                }
                if (closure_132_5) {
                  const obj34 = { perks: null, content: null, contentSurface: null };
                  items = [constants.DISPLAY_NAME_STYLE];
                  obj34.perks = items;
                  obj34.content = pendingChanges(6922).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
                  obj34.contentSurface = pendingChanges(16724).HexagonCampaignContentSurface.USER_PROFILE;
                  const result3 = pendingChanges(16724).trackHexagonCampaignPerkAction(obj34);
                  const obj21 = pendingChanges(16724);
                }
                const result4 = pendingChanges(7292).resetPendingAccountChanges();
                const obj23 = pendingChanges(7292);
              } else {
                let username;
                if (tmp69 != null) {
                  const body = tmp69.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result5 = pendingChanges(7302).showInvalidUsernameToast();
                  closure_132_7 = true;
                  const obj18 = pendingChanges(7302);
                } else {
                  let avatar;
                  if (closure_132_8 != null) {
                    const body2 = closure_132_8.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const aPIError = new pendingChanges(6584).APIError(closure_132_8);
                    const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                    pendingChanges = firstFieldErrorMessage;
                    if (firstFieldErrorMessage == null) {
                      const intl = pendingChanges(1113).intl;
                      pendingChanges = intl.string(pendingChanges(1113).t["84MExs"]);
                    }
                    const result6 = pendingChanges(16725).showGenericProfileUpdateFailureToast(pendingChanges);
                    closure_132_7 = true;
                    const obj53 = pendingChanges(16725);
                  }
                }
              }
              let tmp111 = closure_132_6;
              if (closure_132_6) {
                let ok1;
                if (closure_132_8 != null) {
                  ok1 = closure_132_8.ok;
                }
                stateFromStores = ok1;
                if (ok1 == null) {
                  stateFromStores = false;
                }
                tmp111 = stateFromStores;
              }
              closure_132_6 = tmp111;
            }
          break;
          case 3:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj35 = { value, done: true };
              return obj35;
            } else {
              closure_132_12 = value;
              let ok2;
              if (closure_132_12 != null) {
                ok2 = closure_132_12.ok;
              }
              if (ok2) {
                const result7 = pendingChanges(8884).resetPendingProfileChanges();
                const obj16 = pendingChanges(8884);
              } else {
                const aPIError1 = new pendingChanges(6584).APIError(closure_132_12);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const result8 = pendingChanges(16725).showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  closure_132_7 = true;
                  const obj15 = pendingChanges(16725);
                }
              }
              let tmp64 = closure_132_6;
              if (closure_132_6) {
                let ok3;
                if (closure_132_12 != null) {
                  ok3 = closure_132_12.ok;
                }
                dependencyMap = ok3;
                if (ok3 == null) {
                  dependencyMap = false;
                }
                tmp64 = dependencyMap;
              }
              closure_132_6 = tmp64;
            }
          break;
          case 4:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj38 = { value, done: true };
              return obj38;
            } else {
              closure_132_15 = value;
              if (closure_132_15) {
                const currentUser1 = authStore.getCurrentUser();
                let id;
                if (currentUser1 != null) {
                  id = currentUser1.id;
                }
                closure_132_16 = id;
                if (null != closure_132_16) {
                  const profile = pendingChanges(8898).fetchProfile(closure_132_16);
                  c7 = 5;
                  pendingChanges = 1;
                  const obj39 = {
                    value: profile.catch(() => {

                                  }),
                    done: false
                  };
                  return obj39;
                } else {
                  c7 = 6;
                  pendingChanges = 1;
                  const obj41 = { value: pendingChanges(8914).fetchBadgeDirectory(), done: false };
                  return obj41;
                }
              } else if (!closure_132_14) {
                let tmp28 = closure_132_6;
                if (closure_132_6) {
                  tmp28 = closure_132_15;
                }
                closure_132_6 = tmp28;
              } else {
                if (closure_132_15) {
                  let obj43 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                } else {
                  obj43 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                }
                stateFromStores(572).dispatch(obj43);
                const obj7 = stateFromStores(572);
              }
            }
          break;
          case 5:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj44 = { value, done: true };
              return obj44;
            }
          break;
          case 6:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj45 = { value, done: true };
              return obj45;
            } else {
              const result9 = pendingChanges(15215).resetPendingBadgeSettings();
              const obj4 = pendingChanges(15215);
            }
          break;
          case 7:
            c6 = 0;
            closure_132_6 = false;
          break;
          case 8:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              pendingChanges = 3;
              const obj46 = { value, done: true };
              return obj46;
            } else {
              const result10 = pendingChanges(7292).resetPendingLegacyUsernameDisabled();
              c6 = 0;
              const obj2 = pendingChanges(7292);
            }
          break;
          case 9:
            c6 = 0;
            closure_132_6 = false;
          break;
          case 10:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              pendingChanges = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
          break;
          default:
            if (arg0 === 1) {
              pendingChanges = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingChanges = 3;
              const obj50 = { value, done: true };
              return obj50;
            } else {
              closure_132_19 = value;
              let ok4;
              if (closure_132_19 != null) {
                ok4 = closure_132_19.ok;
              }
              if (ok4) {
                const result11 = pendingChanges(7292).resetPendingPrimaryGuildChanges();
                const obj48 = pendingChanges(7292);
              } else {
                const aPIError2 = new pendingChanges(6584).APIError(closure_132_19);
                firstFieldErrorMessage3 = aPIError2.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage3) {
                  const result12 = pendingChanges(16725).showGenericProfileUpdateFailureToast(firstFieldErrorMessage3);
                  closure_132_7 = true;
                  const obj47 = pendingChanges(16725);
                }
              }
              let tmp233 = closure_132_6;
              if (closure_132_6) {
                let ok5;
                if (closure_132_19 != null) {
                  ok5 = closure_132_19.ok;
                }
                c3 = ok5;
                if (ok5 == null) {
                  c3 = false;
                }
                tmp233 = c3;
              }
              closure_132_6 = tmp233;
            }
        }
      } catch (tmp247) {
        if (tmp4 === c6) {
          pendingChanges = tmp2;
          throw tmp247;
        } else if (tmp === tmp248) {
          c7 = tmp6;
        } else {
          c7 = tmp5;
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
        return { value: "HermesInternal", done: null };
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
              const obj6 = { value: tmp5(7292).saveProfileAndAccountChanges(obj5), done: false };
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
            const result = tmp5(7292).resetPendingAccountChanges();
            const obj = tmp5(7292);
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
};