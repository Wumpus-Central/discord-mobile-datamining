// === Module 14018: useUserProfileEditForm ===

// Module 14018 (useUserProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;
import handleFormOpen from "handleFormOpen" /* 8370 */;
import createUserWidgetFromServer from "createUserWidgetFromServer" /* 5365 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { FormStates } from "ME" /* 676 */;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
let result = require("obj132").fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let obj = pendingChanges(589);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ pendingChanges: store.getPendingChanges(), tryItOutChanges: store.getTryItOutChanges(), errors: store.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  const items1 = [closure_8, closure_7];
  const stateFromStores = pendingChanges(589).useStateFromStores(items1, () => {
    let isSubmitting = store.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    return isSubmitting;
  });
  const effect = React.useEffect(() => () => callback2(709).wait(callback(8620).resetAllPending), []);
  const items2 = [stateFromStores, pendingChanges];
  callback = React.useCallback(callback(() => {
    c6 = 0;
    let bannerOriginalMd5 = 0;
    closure_5 = 0;
    return (function*() {
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
          if (0 === user) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _true = tmp2;
              c3 = tmp190;
              c0 = undefined;
              let profileChangesForUpdateRequest;
              let primaryGuildId;
              c3 = undefined;
              _true = undefined;
              c5 = undefined;
              user = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              c12 = undefined;
              c13 = undefined;
              primaryGuildId = undefined;
              let ok;
              let firstFieldErrorMessage2;
              if (stateFromStores) {
                c7 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                const accountUpdateForUpdateRequest = pendingChanges(closure_1_2[10]).getAccountUpdateForUpdateRequest(pendingChanges);
                c0 = accountUpdateForUpdateRequest;
                const obj23 = pendingChanges(closure_1_2[10]);
                profileChangesForUpdateRequest = pendingChanges(closure_1_2[10]).getProfileChangesForUpdateRequest(pendingChanges);
                const obj24 = pendingChanges(closure_1_2[10]);
                primaryGuildId = pendingChanges(closure_1_2[10]).getPrimaryGuildChangesForUpdateRequest(pendingChanges);
                c3 = true;
                _true = false;
                const _Object = Object;
                if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                  user = 1;
                  c7 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = pendingChanges(closure_1_2[9]).saveProfileAndAccountChanges(accountUpdateForUpdateRequest);
                  return obj1;
                } else {
                  const _Object2 = Object;
                  if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                    bannerOriginalMd5 = stateFromStores.bannerOriginalMd5;
                    closure_8 = _true(stateFromStores, closure_3);
                    user = 2;
                    c7 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = pendingChanges(closure_1_2[14]).saveProfileChanges(closure_8, undefined, bannerOriginalMd5);
                    return obj2;
                  } else {
                    if (undefined === c0.pendingBadgeDisplayOrder) {
                      if (undefined === c0.pendingBadgeHiddenBadges) {
                        if (undefined !== c0.pendingLegacyUsernameDisabled) {
                          c5 = 1;
                          const LegacyUsernameDisabled = pendingChanges(closure_1_2[19]).LegacyUsernameDisabled;
                          user = 6;
                          c7 = 1;
                          const obj3 = { value: null, done: false };
                          obj3[0] = LegacyUsernameDisabled.updateSetting(pendingChanges.pendingLegacyUsernameDisabled);
                          return obj3;
                        }
                      }
                    }
                    const _Object4 = Object;
                    let tmp159 = 0 === Object.keys(pendingChanges).length;
                    if (tmp159) {
                      const _Object5 = Object;
                      tmp159 = 0 === Object.keys(stateFromStores).length;
                    }
                    if (tmp159) {
                      const _Object6 = Object;
                      tmp159 = 0 === Object.keys(closure_1_2).length;
                    }
                    if (tmp159) {
                      tmp159 = undefined === pendingChanges.pendingLegacyUsernameDisabled;
                    }
                    closure_11 = tmp159;
                    if (closure_11) {
                      stateFromStores(closure_1_2[8]).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                      const obj31 = stateFromStores(closure_1_2[8]);
                    }
                    let obj4 = { displayOrder: null, hiddenBadges: null };
                    obj4[0] = c0.pendingBadgeDisplayOrder;
                    obj4[1] = c0.pendingBadgeHiddenBadges;
                    user = 3;
                    c7 = 1;
                    const obj5 = { value: null, done: false };
                    obj5[0] = pendingChanges(closure_1_2[16]).updateBadgeSettings(obj4);
                    return obj5;
                  }
                }
                const obj25 = pendingChanges(closure_1_2[10]);
              }
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              closure_5 = arg1;
              ok = undefined;
              if (closure_5 != null) {
                ok = closure_5.ok;
              }
              if (ok) {
                user = c5.body;
                if (undefined !== pendingChanges.pendingAvatar) {
                  let obj7 = { avatarHash: null, avatarId: null, avatarAssetOrigin: null };
                  obj7[0] = user.avatar;
                  obj7[1] = c0.avatarId;
                  const pendingAvatar = c0.pendingAvatar;
                  let assetOrigin;
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  obj7[2] = assetOrigin;
                  const result = pendingChanges(closure_1_2[11]).trackUserAvatarUpdated(obj7);
                  const obj19 = pendingChanges(closure_1_2[11]);
                }
                const result1 = pendingChanges(closure_1_2[9]).resetPendingAccountChanges();
                const obj21 = pendingChanges(closure_1_2[9]);
              } else {
                let username;
                if (c5 != null) {
                  const body = c5.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result2 = pendingChanges(closure_1_2[12]).showInvalidUsernameToast();
                  _true = true;
                  const obj18 = pendingChanges(closure_1_2[12]);
                } else {
                  let avatar;
                  if (closure_5 != null) {
                    const body2 = closure_5.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    const result3 = pendingChanges(closure_1_2[13]).showGenericProfileUpdateFailureToast(closure_5.body.avatar);
                    _true = true;
                    const obj41 = pendingChanges(closure_1_2[13]);
                  }
                }
              }
              let tmp112 = closure_3;
              if (closure_3) {
                let ok1;
                if (closure_5 != null) {
                  ok1 = closure_5.ok;
                }
                c0 = ok1;
                if (ok1 == null) {
                  c0 = false;
                }
                tmp112 = c0;
              }
              closure_3 = tmp112;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              let currentUser = arg1;
              let ok2;
              if (currentUser != null) {
                ok2 = currentUser.ok;
              }
              if (ok2) {
                let obj15 = pendingChanges(closure_1_2[14]);
                const result4 = obj15.resetPendingProfileChanges();
              } else {
                const aPIError = new pendingChanges(closure_1_2[15]).APIError(currentUser);
                const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage) {
                  let obj14 = pendingChanges(closure_1_2[13]);
                  const result5 = obj14.showGenericProfileUpdateFailureToast(firstFieldErrorMessage);
                  _true = true;
                }
              }
              let tmp82 = closure_3;
              if (closure_3) {
                let ok3;
                if (currentUser != null) {
                  ok3 = currentUser.ok;
                }
                profileChangesForUpdateRequest = ok3;
                if (ok3 == null) {
                  profileChangesForUpdateRequest = false;
                }
                tmp82 = profileChangesForUpdateRequest;
              }
              closure_3 = tmp82;
            }
          } else {
            if (3 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              } else {
                closure_12 = arg1;
                if (closure_12) {
                  currentUser = currentUser.getCurrentUser();
                  id = undefined;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  if (null != id) {
                    let obj10 = pendingChanges(closure_1_2[17]);
                    const profile = obj10.fetchProfile(id);
                    user = 4;
                    c7 = 1;
                    obj10 = { value: null, done: false };
                    obj10[0] = profile.catch((error) => {

                    });
                    return obj10;
                  }
                }
                if (!closure_11) {
                  let tmp55 = closure_3;
                  if (closure_3) {
                    tmp55 = closure_12;
                  }
                  closure_3 = tmp55;
                } else {
                  obj8 = stateFromStores(closure_1_2[8]);
                  if (closure_12) {
                    let obj11 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj11 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: null };
                    obj11[1] = {};
                  }
                  obj8.dispatch(obj11);
                }
              }
            } else if (4 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj12 = { value: null, done: true };
                obj12[0] = arg1;
                return obj12;
              }
            } else if (5 === tmp7) {
              c5 = 0;
              closure_3 = false;
            } else {
              if (6 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj13 = { value: null, done: true };
                  obj13[0] = arg1;
                  return obj13;
                } else {
                  obj4 = pendingChanges(closure_1_2[9]);
                  const result6 = obj4.resetPendingLegacyUsernameDisabled();
                  c5 = 0;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj14 = { value: null, done: true };
                obj14[0] = arg1;
                return obj14;
              } else {
                ok = arg1;
                let ok4;
                if (ok != null) {
                  ok4 = ok.ok;
                }
                if (ok4) {
                  obj2 = pendingChanges(closure_1_2[9]);
                  const result7 = obj2.resetPendingPrimaryGuildChanges();
                } else {
                  const aPIError1 = new pendingChanges(closure_1_2[15]).APIError(ok);
                  firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage2) {
                    obj1 = pendingChanges(closure_1_2[13]);
                    const result8 = obj1.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                    _true = true;
                  }
                }
                let tmp29 = closure_3;
                if (closure_3) {
                  let ok5;
                  if (closure_1_15 != null) {
                    ok5 = closure_1_15.ok;
                  }
                  primaryGuildId = ok5;
                  if (ok5 == null) {
                    primaryGuildId = false;
                  }
                  tmp29 = primaryGuildId;
                }
                closure_3 = tmp29;
              }
              let tmp137 = c3;
              if (!c3) {
                tmp137 = _true;
              }
              if (!tmp137) {
                const intl = pendingChanges(closure_1_2[21]).intl;
                const result9 = pendingChanges(closure_1_2[13]).showGenericProfileUpdateFailureToast(intl.string(pendingChanges(closure_1_2[21]).t["84MExs"]));
                const obj26 = pendingChanges(closure_1_2[13]);
              }
              c7 = 3;
              obj15 = { value: null, done: true };
              obj15[0] = closure_3;
              return obj15;
            }
            obj7 = pendingChanges(closure_1_2[18]);
            const result10 = obj7.resetPendingBadgeSettings();
          }
          const _Object3 = Object;
          if (Object.keys(primaryGuildId).length > 0) {
            primaryGuildId = primaryGuildId.primaryGuildId;
            if (undefined !== primaryGuildId) {
              user = 7;
              c7 = 1;
              const obj16 = { value: null, done: false };
              obj16[0] = pendingChanges(closure_1_2[20]).adoptGuildIdentity(closure_1_14, null !== closure_1_14);
              return obj16;
            }
          }
        } catch (tmp189) {
          if (tmp3 === c5) {
            c7 = tmp;
            throw tmp189;
          } else {
            user = tmp4;
          }
          tmp190 = c5;
        }
      }
    })();
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  obj = {
    hasAvatarDecorationEdits: undefined !== pendingChanges.pendingAvatarDecoration,
    errors,
    isSubmitting: stateFromStores,
    handleSubmit: callback,
    handleSubmitAvatarDecoration: React.useCallback(callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              let ok = tmp5;
              ok = undefined;
              if (stateFromStores) {
                c3 = 3;
              } else {
                let obj2 = pendingChanges(8620);
                obj1 = { avatarDecoration: null };
                obj1[0] = pendingChanges.pendingAvatarDecoration;
                dependencyMap = 1;
                c3 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.saveProfileAndAccountChanges(obj1);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            ok = arg1;
            ok = undefined;
            if (ok != null) {
              ok = ok.ok;
            }
            if (ok) {
              obj = pendingChanges(8620);
              const result = obj.resetPendingAccountChanges();
            }
          }
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } catch (tmp16) {
          c3 = tmp;
          throw tmp16;
        }
      }
    }), items3),
    resetPending: pendingChanges(8620).resetAllPending
  };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj;
};