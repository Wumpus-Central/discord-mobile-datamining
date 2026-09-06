// discord_app/modules/user_settings/profiles/native/useUserProfileEditForm.tsx
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserProfileStore from "../../../user_profile/UserProfileStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
const FormStates = fn(1074).FormStates;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let obj = pendingChanges(504);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    pendingChanges: UserProfileSettingsStore.getPendingChanges(),
    tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(),
    errors: UserProfileSettingsStore.getErrors(),
  }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  let stateFromStores = pendingChanges(504).useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    return isSubmitting;
  });
  const effect = noop.useEffect(() => () => stateFromStores(573).wait(pendingChanges(6984).resetAllPending), []);
  const items2 = [stateFromStores, pendingChanges];
  const callback = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
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
              closure_3 = tmp193;
              closure_131_0 = undefined;
              let profileChangesForUpdateRequest;
              let primaryGuildChangesForUpdateRequest;
              closure_131_3 = undefined;
              closure_131_4 = undefined;
              closure_131_5 = undefined;
              let body3;
              let bannerOriginalMd5;
              closure_131_8 = undefined;
              closure_131_9 = undefined;
              let firstFieldErrorMessage;
              closure_131_11 = undefined;
              closure_131_12 = undefined;
              closure_131_13 = undefined;
              let primaryGuildId;
              closure_131_15 = undefined;
              let firstFieldErrorMessage2;
              if (stateFromStores) {
                c7 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const accountUpdateForUpdateRequest =
                  pendingChanges(11086).getAccountUpdateForUpdateRequest(pendingChanges);
                closure_131_0 = accountUpdateForUpdateRequest;
                const obj26 = pendingChanges(11086);
                profileChangesForUpdateRequest =
                  pendingChanges(11086).getProfileChangesForUpdateRequest(pendingChanges);
                const obj27 = pendingChanges(11086);
                primaryGuildChangesForUpdateRequest =
                  pendingChanges(11086).getPrimaryGuildChangesForUpdateRequest(pendingChanges);
                closure_131_3 = true;
                closure_131_4 = false;
                const _Object = Object;
                if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                  c6 = 1;
                  c7 = 1;
                  let obj1 = {
                    value: pendingChanges(6984).saveProfileAndAccountChanges(accountUpdateForUpdateRequest),
                    done: false,
                  };
                  return obj1;
                } else {
                  const _Object2 = Object;
                  if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                    bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                    closure_131_8 = tmp2(profileChangesForUpdateRequest, closure_3);
                    c6 = 2;
                    c7 = 1;
                    let obj2 = {
                      value: pendingChanges(8167).saveProfileChanges(closure_131_8, undefined, bannerOriginalMd5),
                      done: false,
                    };
                    return obj2;
                  } else {
                    if (undefined === closure_132_0.pendingBadgeDisplayOrder) {
                      if (undefined === closure_132_0.pendingBadgeHiddenBadges) {
                        if (undefined !== closure_132_0.pendingLegacyUsernameDisabled) {
                          c5 = 1;
                          const LegacyUsernameDisabled = pendingChanges(1935).LegacyUsernameDisabled;
                          c6 = 7;
                          c7 = 1;
                          const obj3 = {
                            value: LegacyUsernameDisabled.updateSetting(closure_132_0.pendingLegacyUsernameDisabled),
                            done: false,
                          };
                          return obj3;
                        }
                      }
                    }
                    const _Object4 = Object;
                    let tmp162 = 0 === Object.keys(closure_131_0).length;
                    if (tmp162) {
                      const _Object5 = Object;
                      tmp162 = 0 === Object.keys(profileChangesForUpdateRequest).length;
                    }
                    if (tmp162) {
                      const _Object6 = Object;
                      tmp162 = 0 === Object.keys(primaryGuildChangesForUpdateRequest).length;
                    }
                    if (tmp162) {
                      tmp162 = undefined === closure_132_0.pendingLegacyUsernameDisabled;
                    }
                    closure_131_11 = tmp162;
                    if (closure_131_11) {
                      stateFromStores(573).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                      const obj34 = stateFromStores(573);
                    }
                    let obj4 = {
                      displayOrder: closure_132_0.pendingBadgeDisplayOrder,
                      hiddenBadges: closure_132_0.pendingBadgeHiddenBadges,
                    };
                    c6 = 3;
                    c7 = 1;
                    const obj5 = { value: pendingChanges(14606).updateBadgeSettings(obj4), done: false };
                    return obj5;
                  }
                }
                const obj28 = pendingChanges(11086);
              }
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj6 = { value, done: true };
              return obj6;
            } else {
              closure_131_5 = value;
              let ok;
              if (closure_131_5 != null) {
                ok = closure_131_5.ok;
              }
              if (ok) {
                body3 = closure_131_5.body;
                if (undefined !== closure_132_0.pendingAvatar) {
                  const obj7 = { avatarHash: body3.avatar, avatarId: closure_131_0.avatarId, avatarAssetOrigin: null };
                  const pendingAvatar = closure_132_0.pendingAvatar;
                  let assetOrigin;
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  obj7.avatarAssetOrigin = assetOrigin;
                  const result = pendingChanges(6988).trackUserAvatarUpdated(obj7);
                  const obj22 = pendingChanges(6988);
                }
                const result1 = pendingChanges(6984).resetPendingAccountChanges();
                const obj24 = pendingChanges(6984);
              } else {
                let username;
                if (closure_131_5 != null) {
                  const body = closure_131_5.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result2 = pendingChanges(6991).showInvalidUsernameToast();
                  closure_131_4 = true;
                  const obj21 = pendingChanges(6991);
                } else {
                  let avatar;
                  if (closure_131_5 != null) {
                    const body2 = closure_131_5.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const result3 = pendingChanges(14605).showGenericProfileUpdateFailureToast(
                      closure_131_5.body.avatar,
                    );
                    closure_131_4 = true;
                    const obj44 = pendingChanges(14605);
                  }
                }
              }
              let tmp115 = closure_131_3;
              if (closure_131_3) {
                let ok1;
                if (closure_131_5 != null) {
                  ok1 = closure_131_5.ok;
                }
                pendingChanges = ok1;
                if (ok1 == null) {
                  pendingChanges = false;
                }
                tmp115 = pendingChanges;
              }
              closure_131_3 = tmp115;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_131_9 = value;
              let ok2;
              if (closure_131_9 != null) {
                ok2 = closure_131_9.ok;
              }
              if (ok2) {
                let obj18 = pendingChanges(8167);
                const result4 = obj18.resetPendingProfileChanges();
              } else {
                const aPIError = new pendingChanges(4461).APIError(closure_131_9);
                firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage) {
                  let obj17 = pendingChanges(14605);
                  const result5 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage);
                  closure_131_4 = true;
                }
              }
              let tmp85 = closure_131_3;
              if (closure_131_3) {
                let ok3;
                if (closure_131_9 != null) {
                  ok3 = closure_131_9.ok;
                }
                stateFromStores = ok3;
                if (ok3 == null) {
                  stateFromStores = false;
                }
                tmp85 = stateFromStores;
              }
              closure_131_3 = tmp85;
            }
          } else {
            if (3 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                let obj9 = { value, done: true };
                return obj9;
              } else {
                closure_131_12 = value;
                if (closure_131_12) {
                  currentUser = currentUser.getCurrentUser();
                  let id;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  closure_131_13 = id;
                  if (null != closure_131_13) {
                    let obj13 = pendingChanges(8181);
                    const profile = obj13.fetchProfile(closure_131_13);
                    c6 = 4;
                    c7 = 1;
                    const obj10 = {
                      value: profile.catch(() => {}),
                      done: false,
                    };
                    return obj10;
                  }
                } else if (!closure_131_11) {
                  let tmp49 = closure_131_3;
                  if (closure_131_3) {
                    tmp49 = closure_131_12;
                  }
                  closure_131_3 = tmp49;
                } else {
                  obj9 = stateFromStores(573);
                  if (closure_131_12) {
                    let obj11 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj11 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  obj9.dispatch(obj11);
                }
              }
            } else if (4 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj12 = { value, done: true };
                return obj12;
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                obj13 = { value, done: true };
                return obj13;
              } else {
                obj6 = pendingChanges(13067);
                const result6 = obj6.resetPendingBadgeSettings();
              }
            } else if (6 === tmp7) {
              c5 = 0;
              closure_131_3 = false;
            } else {
              if (7 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj14 = { value, done: true };
                  return obj14;
                } else {
                  obj4 = pendingChanges(6984);
                  const result7 = obj4.resetPendingLegacyUsernameDisabled();
                  c5 = 0;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                closure_131_15 = value;
                let ok4;
                if (closure_131_15 != null) {
                  ok4 = closure_131_15.ok;
                }
                if (ok4) {
                  obj2 = pendingChanges(6984);
                  const result8 = obj2.resetPendingPrimaryGuildChanges();
                } else {
                  const aPIError1 = new pendingChanges(4461).APIError(closure_131_15);
                  firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage2) {
                    obj1 = pendingChanges(14605);
                    const result9 = obj1.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                    closure_131_4 = true;
                  }
                }
                let tmp29 = closure_131_3;
                if (closure_131_3) {
                  let ok5;
                  if (closure_131_15 != null) {
                    ok5 = closure_131_15.ok;
                  }
                  dependencyMap = ok5;
                  if (ok5 == null) {
                    dependencyMap = false;
                  }
                  tmp29 = dependencyMap;
                }
                closure_131_3 = tmp29;
              }
              let tmp140 = closure_131_3;
              if (!closure_131_3) {
                tmp140 = closure_131_4;
              }
              if (!tmp140) {
                const intl = pendingChanges(1114).intl;
                const result10 = pendingChanges(14605).showGenericProfileUpdateFailureToast(
                  intl.string(pendingChanges(1114).t["84MExs"]),
                );
                const obj29 = pendingChanges(14605);
              }
              c7 = 3;
              const obj16 = { value: closure_131_3, done: true };
              return obj16;
            }
            obj11 = pendingChanges(8197);
            c6 = 5;
            c7 = 1;
            obj17 = { value: obj11.fetchBadgeDirectory(), done: false };
            return obj17;
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildChangesForUpdateRequest).length > 0) {
            primaryGuildId = primaryGuildChangesForUpdateRequest.primaryGuildId;
            if (undefined !== primaryGuildId) {
              c6 = 8;
              c7 = 1;
              obj18 = {
                value: pendingChanges(13914).adoptGuildIdentity(primaryGuildId, null !== primaryGuildId),
                done: false,
              };
              return obj18;
            }
          }
        } catch (tmp192) {
          if (tmp3 === c5) {
            c7 = tmp;
            throw tmp192;
          } else {
            c6 = tmp4;
          }
          tmp193 = c5;
        }
      }
    }),
    items2,
  );
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  obj = {
    hasAvatarDecorationEdits: undefined !== pendingChanges.pendingAvatarDecoration,
    errors,
    isSubmitting: stateFromStores,
    handleSubmit: callback,
    handleSubmitAvatarDecoration: noop.useCallback(
      asyncGeneratorStep(async (arg0, value) => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c3 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1 = tmp2;
                closure_128_0 = undefined;
                if (stateFromStores) {
                  c3 = 3;
                } else {
                  let obj2 = tmp5(6984);
                  const obj1 = { avatarDecoration: pendingChanges.pendingAvatarDecoration };
                  dependencyMap = 1;
                  c3 = 1;
                  obj2 = { value: null, done: false };
                  obj2.value = obj2.saveProfileAndAccountChanges(obj1);
                  return obj2;
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
                obj = tmp5(6984);
                const result = obj.resetPendingAccountChanges();
              }
            }
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } catch (tmp16) {
            c3 = tmp;
            throw tmp16;
          }
        }
      }),
      items3,
    ),
    resetPending: pendingChanges(6984).resetAllPending,
  };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj;
}
