// === Module 14194: useUserProfileEditForm ===

// Module 14194 (useUserProfileEditForm)
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "noop" /* 19 */;
import closure_7 from "handleFormOpen" /* 8484 */;
import closure_8 from "createUserWidgetFromServer" /* 7293 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import { FormStates } from "ME" /* 676 */;

const require = arg1;
let closure_3 = ["bannerOriginalMd5"];
let result = require("set").fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

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
  const effect = React.useEffect(() => () => callback2(709).wait(callback(8733).resetAllPending), []);
  const items2 = [stateFromStores, pendingChanges];
  callback = React.useCallback(callback(() => {
    c6 = 0;
    let bannerOriginalMd5 = 0;
    closure_5 = 0;
    return (function*() {
      if (c7 === 2) {
        c7 = 3;
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                c3 = throwTypeErrorResult;
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
                throwTypeErrorResult = closure_1_1;
                if (closure_1_1) {
                  c7 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_2;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_0(closure_1_2[10]).getAccountUpdateForUpdateRequest(closure_1_0);
                  c0 = throwTypeErrorResult;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_2;
                  const obj23 = closure_1_0(closure_1_2[10]);
                  throwTypeErrorResult = closure_1_0;
                  profileChangesForUpdateRequest = closure_1_0(closure_1_2[10]).getProfileChangesForUpdateRequest(closure_1_0);
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_2;
                  const obj24 = closure_1_0(closure_1_2[10]);
                  throwTypeErrorResult = closure_1_0;
                  primaryGuildId = closure_1_0(closure_1_2[10]).getPrimaryGuildChangesForUpdateRequest(closure_1_0);
                  c3 = true;
                  _true = false;
                  const _Object = Object;
                  if (Object.keys(throwTypeErrorResult).length > 0) {
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_2;
                    user = 1;
                    c7 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_0(closure_1_2[9]).saveProfileAndAccountChanges(throwTypeErrorResult);
                    return obj1;
                  } else {
                    throwTypeErrorResult = c3;
                    const _Object2 = Object;
                    throwTypeErrorResult = profileChangesForUpdateRequest;
                    if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                      throwTypeErrorResult = c3;
                      throwTypeErrorResult = _true;
                      throwTypeErrorResult = closure_1_1;
                      bannerOriginalMd5 = closure_1_1.bannerOriginalMd5;
                      throwTypeErrorResult = _true;
                      throwTypeErrorResult = closure_1_1;
                      throwTypeErrorResult = closure_3;
                      closure_8 = _true(closure_1_1, closure_3);
                      throwTypeErrorResult = closure_1_0;
                      throwTypeErrorResult = closure_1_2;
                      throwTypeErrorResult = closure_8;
                      throwTypeErrorResult = bannerOriginalMd5;
                      user = 2;
                      c7 = 1;
                      let obj2 = { value: null, done: false };
                      obj2[0] = closure_1_0(closure_1_2[14]).saveProfileChanges(closure_8, undefined, bannerOriginalMd5);
                      return obj2;
                    } else {
                      throwTypeErrorResult = _true;
                      throwTypeErrorResult = c0;
                      if (undefined === c0.pendingBadgeDisplayOrder) {
                        throwTypeErrorResult = _true;
                        throwTypeErrorResult = c0;
                        if (undefined === c0.pendingBadgeHiddenBadges) {
                          throwTypeErrorResult = _true;
                          throwTypeErrorResult = c0;
                          if (undefined !== c0.pendingLegacyUsernameDisabled) {
                            throwTypeErrorResult = _true;
                            c5 = 1;
                            throwTypeErrorResult = closure_1_0;
                            throwTypeErrorResult = closure_1_2;
                            const LegacyUsernameDisabled = closure_1_0(closure_1_2[19]).LegacyUsernameDisabled;
                            throwTypeErrorResult = closure_1_0;
                            user = 6;
                            c7 = 1;
                            const obj3 = { value: null, done: false };
                            obj3[0] = LegacyUsernameDisabled.updateSetting(closure_1_0.pendingLegacyUsernameDisabled);
                            return obj3;
                          }
                        }
                      }
                      throwTypeErrorResult = c3;
                      const _Object4 = Object;
                      throwTypeErrorResult = closure_1_0;
                      throwTypeErrorResult = 0 === Object.keys(closure_1_0).length;
                      if (throwTypeErrorResult) {
                        throwTypeErrorResult = c3;
                        const _Object5 = Object;
                        throwTypeErrorResult = closure_1_1;
                        throwTypeErrorResult = 0 === Object.keys(closure_1_1).length;
                      }
                      if (throwTypeErrorResult) {
                        throwTypeErrorResult = c3;
                        const _Object6 = Object;
                        throwTypeErrorResult = closure_1_2;
                        throwTypeErrorResult = 0 === Object.keys(closure_1_2).length;
                      }
                      if (throwTypeErrorResult) {
                        throwTypeErrorResult = _true;
                        throwTypeErrorResult = closure_1_0;
                        throwTypeErrorResult = undefined === closure_1_0.pendingLegacyUsernameDisabled;
                      }
                      throwTypeErrorResult = c3;
                      if (throwTypeErrorResult) {
                        throwTypeErrorResult = _true;
                        throwTypeErrorResult = closure_1_1;
                        throwTypeErrorResult = closure_1_2;
                        throwTypeErrorResult = closure_1_1(closure_1_2[8]).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                        const obj31 = closure_1_1(closure_1_2[8]);
                      }
                      throwTypeErrorResult = _true;
                      throwTypeErrorResult = closure_1_0;
                      throwTypeErrorResult = closure_1_2;
                      let obj4 = { displayOrder: null, hiddenBadges: null };
                      throwTypeErrorResult = c0;
                      obj4[0] = c0.pendingBadgeDisplayOrder;
                      throwTypeErrorResult = c0;
                      obj4[1] = c0.pendingBadgeHiddenBadges;
                      user = 3;
                      c7 = 1;
                      const obj5 = { value: null, done: false };
                      obj5[0] = closure_1_0(closure_1_2[16]).updateBadgeSettings(obj4);
                      return obj5;
                    }
                  }
                  const obj25 = closure_1_0(closure_1_2[10]);
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
                throwTypeErrorResult = c3;
                closure_5 = arg1;
                ok = undefined;
                if (closure_5 != null) {
                  ok = closure_5.ok;
                }
                if (ok) {
                  user = c5.body;
                  if (undefined !== closure_1_0.pendingAvatar) {
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_2;
                    let obj7 = { avatarHash: null, avatarId: null, avatarAssetOrigin: null };
                    throwTypeErrorResult = user;
                    obj7[0] = user.avatar;
                    throwTypeErrorResult = c0;
                    obj7[1] = c0.avatarId;
                    throwTypeErrorResult = c0;
                    const pendingAvatar = c0.pendingAvatar;
                    throwTypeErrorResult = undefined;
                    if (pendingAvatar != null) {
                      throwTypeErrorResult = pendingAvatar.assetOrigin;
                    }
                    obj7[2] = throwTypeErrorResult;
                    throwTypeErrorResult = closure_1_0(closure_1_2[11]).trackUserAvatarUpdated(obj7);
                    const obj19 = closure_1_0(closure_1_2[11]);
                  }
                  throwTypeErrorResult = _true;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_2;
                  throwTypeErrorResult = closure_1_0(closure_1_2[9]).resetPendingAccountChanges();
                  const obj21 = closure_1_0(closure_1_2[9]);
                } else {
                  let username;
                  if (c5 != null) {
                    const body = c5.body;
                    if (body != null) {
                      username = body.username;
                    }
                  }
                  if (null != username) {
                    const result = closure_1_0(closure_1_2[12]).showInvalidUsernameToast();
                    _true = true;
                    const obj18 = closure_1_0(closure_1_2[12]);
                  } else {
                    let avatar;
                    if (closure_5 != null) {
                      const body2 = closure_5.body;
                      if (body2 != null) {
                        avatar = body2.avatar;
                      }
                    }
                    if (null != avatar) {
                      throwTypeErrorResult = c3;
                      throwTypeErrorResult = _true;
                      throwTypeErrorResult = closure_1_0;
                      throwTypeErrorResult = closure_1_2;
                      throwTypeErrorResult = closure_5;
                      throwTypeErrorResult = closure_1_0(closure_1_2[13]).showGenericProfileUpdateFailureToast(closure_5.body.avatar);
                      _true = true;
                      const obj41 = closure_1_0(closure_1_2[13]);
                    }
                  }
                }
                throwTypeErrorResult = c3;
                throwTypeErrorResult = closure_3;
                if (closure_3) {
                  throwTypeErrorResult = undefined;
                  if (closure_5 != null) {
                    throwTypeErrorResult = closure_5.ok;
                  }
                  c0 = throwTypeErrorResult;
                  if (throwTypeErrorResult == null) {
                    c0 = false;
                  }
                  throwTypeErrorResult = c0;
                }
                throwTypeErrorResult = c3;
                closure_3 = throwTypeErrorResult;
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
                throwTypeErrorResult = c3;
                let currentUser = arg1;
                let ok1;
                if (currentUser != null) {
                  ok1 = currentUser.ok;
                }
                if (ok1) {
                  let obj15 = closure_1_0(closure_1_2[14]);
                  const result1 = obj15.resetPendingProfileChanges();
                } else {
                  const aPIError = new closure_1_0(closure_1_2[15]).APIError(currentUser);
                  const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage) {
                    let obj14 = closure_1_0(closure_1_2[13]);
                    const result2 = obj14.showGenericProfileUpdateFailureToast(firstFieldErrorMessage);
                    _true = true;
                  }
                }
                let tmp82 = closure_3;
                if (closure_3) {
                  let ok2;
                  if (currentUser != null) {
                    ok2 = currentUser.ok;
                  }
                  profileChangesForUpdateRequest = ok2;
                  if (ok2 == null) {
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
                  throwTypeErrorResult = c3;
                  closure_12 = arg1;
                  throwTypeErrorResult = closure_12;
                  if (closure_12) {
                    currentUser = currentUser.getCurrentUser();
                    id = undefined;
                    if (currentUser != null) {
                      id = currentUser.id;
                    }
                    if (null != id) {
                      let obj10 = closure_1_0(closure_1_2[17]);
                      const profile = obj10.fetchProfile(id);
                      user = 4;
                      c7 = 1;
                      obj10 = { value: null, done: false };
                      obj10[0] = profile.catch(() => {

                      });
                      return obj10;
                    }
                  }
                  if (!throwTypeErrorResult) {
                    let tmp55 = closure_3;
                    if (closure_3) {
                      tmp55 = closure_12;
                    }
                    closure_3 = tmp55;
                  } else {
                    obj8 = closure_1_1(closure_1_2[8]);
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
                    obj4 = closure_1_0(closure_1_2[9]);
                    const result3 = obj4.resetPendingLegacyUsernameDisabled();
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
                  throwTypeErrorResult = c3;
                  ok = arg1;
                  let ok3;
                  if (ok != null) {
                    ok3 = ok.ok;
                  }
                  if (ok3) {
                    obj2 = closure_1_0(closure_1_2[9]);
                    const result4 = obj2.resetPendingPrimaryGuildChanges();
                  } else {
                    const aPIError1 = new closure_1_0(closure_1_2[15]).APIError(ok);
                    firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                    if (null != firstFieldErrorMessage2) {
                      obj1 = closure_1_0(closure_1_2[13]);
                      const result5 = obj1.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                      _true = true;
                    }
                  }
                  let tmp29 = closure_3;
                  if (closure_3) {
                    let ok4;
                    if (closure_1_15 != null) {
                      ok4 = closure_1_15.ok;
                    }
                    primaryGuildId = ok4;
                    if (ok4 == null) {
                      primaryGuildId = false;
                    }
                    tmp29 = primaryGuildId;
                  }
                  closure_3 = tmp29;
                }
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c3;
                if (!c3) {
                  throwTypeErrorResult = _true;
                }
                if (!throwTypeErrorResult) {
                  throwTypeErrorResult = _true;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_2;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_2;
                  const intl = closure_1_0(closure_1_2[21]).intl;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_2;
                  throwTypeErrorResult = closure_1_0(closure_1_2[13]).showGenericProfileUpdateFailureToast(intl.string(closure_1_0(closure_1_2[21]).t["84MExs"]));
                  const obj26 = closure_1_0(closure_1_2[13]);
                }
                throwTypeErrorResult = c3;
                c7 = 3;
                obj15 = { value: null, done: true };
                obj15[0] = closure_3;
                return obj15;
              }
              obj7 = closure_1_0(closure_1_2[18]);
              const result6 = obj7.resetPendingBadgeSettings();
            }
            throwTypeErrorResult = c3;
            const _Object3 = Object;
            throwTypeErrorResult = primaryGuildId;
            if (Object.keys(primaryGuildId).length > 0) {
              throwTypeErrorResult = c3;
              throwTypeErrorResult = primaryGuildId;
              primaryGuildId = primaryGuildId.primaryGuildId;
              throwTypeErrorResult = primaryGuildId;
              if (undefined !== primaryGuildId) {
                throwTypeErrorResult = c3;
                throwTypeErrorResult = _true;
                throwTypeErrorResult = closure_1_0;
                throwTypeErrorResult = closure_1_2;
                throwTypeErrorResult = closure_1_14;
                throwTypeErrorResult = closure_1_14;
                user = 7;
                c7 = 1;
                const obj16 = { value: null, done: false };
                obj16[0] = closure_1_0(closure_1_2[20]).adoptGuildIdentity(closure_1_14, null !== closure_1_14);
                return obj16;
              }
            }
          } catch (throwTypeErrorResult) {
            throwTypeErrorResult = c5;
            if (tmp3 === c5) {
              c7 = throwTypeErrorResult;
              throw throwTypeErrorResult;
            } else {
              user = tmp4;
            }
          }
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
          return { value: "HermesInternal", done: null };
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
              if (closure_1_1) {
                c3 = 3;
              } else {
                let obj2 = closure_1_0(8733);
                obj1 = { avatarDecoration: null };
                obj1[0] = closure_1_0.pendingAvatarDecoration;
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
              obj = closure_1_0(8733);
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
    resetPending: pendingChanges(8733).resetAllPending
  };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj;
};