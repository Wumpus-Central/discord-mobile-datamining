// === Module 14430: useUserProfileEditForm ===

// Module 14430 (useUserProfileEditForm)
import Constants from "Constants" /* 1085 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c3, c6, c7, closure_12, isSubmitting;

let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const FormStates = Constants.FormStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let errors;
  let pendingChanges;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tryItOutChanges;
  let tmp = pendingChanges;
  let obj = pendingChanges(576);
  const cResult = obj.c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function h() {
      const obj = { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore, UserProfileSettingsStore];
    class S {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp9 = S;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp8, tmp9);
  const pendingAvatarDecoration = pendingChanges.pendingAvatarDecoration;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return () => {
          const obj = stateFromStores(closure_1_2[10]);
          return obj.wait(pendingChanges(closure_1_2[11]).resetAllPending);
        };
      }
    }
    const items2 = [];
    cResult[4] = A;
    class S {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    tmp14 = items2;
  } else {
    class A {
      constructor() {
        return () => {
          const obj = stateFromStores(closure_1_2[10]);
          return obj.wait(pendingChanges(closure_1_2[11]).resetAllPending);
        };
      }
    }
    tmp14 = cResult[5];
  }
  const effect = react.useEffect(A, tmp14);
  if (cResult[6] === stateFromStores) {
    class A {
      constructor() {
        return () => {
          const obj = stateFromStores(closure_1_2[10]);
          return obj.wait(pendingChanges(closure_1_2[11]).resetAllPending);
        };
      }
    }
    if (cResult[9] === stateFromStores) {
      class A {
        constructor() {
          return () => {
            const obj = stateFromStores(closure_1_2[10]);
            return obj.wait(pendingChanges(closure_1_2[11]).resetAllPending);
          };
        }
      }
      let tmp19 = undefined !== pendingAvatarDecoration;
      if (cResult[12] === errors) {
        class A {
          constructor() {
            return () => {
              const obj = stateFromStores(closure_1_2[10]);
              return obj.wait(pendingChanges(closure_1_2[11]).resetAllPending);
            };
          }
        }
      }
      let obj2 = { hasAvatarDecorationEdits: tmp19, errors: null, isSubmitting: stateFromStores, handleSubmit: tmp16, handleSubmitAvatarDecoration: tmp17, resetPending: tmp(6477).resetAllPending };
      class S {
        constructor() {
          isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
          return isSubmitting;
        }
      }
      const merged = Object.assign(pendingChanges);
      let tmp24 = obj2;
      const merged1 = Object.assign(tryItOutChanges);
      cResult[12] = errors;
      cResult[13] = tmp16;
      cResult[14] = tmp17;
      cResult[15] = tmp19;
      cResult[16] = stateFromStores;
      cResult[17] = pendingChanges;
      cResult[18] = tryItOutChanges;
      cResult[19] = obj2;
    }
    let closure_0 = _asyncToGenerator(async () => {
      let obj3;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let tmp;
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
              let closure_1 = tmp4;
              tmp = undefined;
              const tmp19 = closure_1;
              if (!tmp19) {
                const obj5 = { avatarDecoration: tmp.pendingAvatarDecoration };
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj3.saveProfileAndAccountChanges(obj5), done: false };
                obj3 = tmp(dependencyMap[11]);
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            let ok;
            if (tmp != null) {
              ok = tmp.ok;
            }
            if (ok) {
              const obj = tmp(dependencyMap[11]);
              const result = obj.resetPendingAccountChanges();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    const fn3 = function() {
      return closure_0(...arguments);
    };
    class S {
      constructor() {
        isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
        return isSubmitting;
      }
    }
    cResult[9] = stateFromStores;
    cResult[10] = pendingChanges.pendingAvatarDecoration;
    cResult[11] = fn3;
  }
  closure_0 = _asyncToGenerator(async function() {
    let _false;
    let assetOrigin;
    let obj11;
    let obj28;
    let obj32;
    let obj35;
    let obj37;
    let value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let accountUpdateForUpdateRequest;
        let _false3;
        let c4;
        let closure_5;
        let body;
        let closure_9;
        let firstFieldErrorMessage;
        let closure_11;
        let id;
        let primaryGuildId;
        let closure_15;
        let firstFieldErrorMessage2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp;
            accountUpdateForUpdateRequest = undefined;
            let _false2;
            _false3 = undefined;
            value = undefined;
            c4 = undefined;
            closure_5 = undefined;
            body = undefined;
            let bannerOriginalMd5;
            let closure_8;
            closure_9 = undefined;
            firstFieldErrorMessage = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            id = undefined;
            primaryGuildId = undefined;
            closure_15 = undefined;
            firstFieldErrorMessage2 = undefined;
            const tmp206 = c1;
            if (tmp206) {
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj24 = _false(dependencyMap[12]);
              accountUpdateForUpdateRequest = obj24.getAccountUpdateForUpdateRequest(_false);
              const obj25 = _false(dependencyMap[12]);
              _false2 = obj25.getProfileChangesForUpdateRequest(_false);
              const obj26 = _false(dependencyMap[12]);
              _false3 = obj26.getPrimaryGuildChangesForUpdateRequest(_false);
              value = true;
              c4 = false;
              const _Object = Object;
              if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                c6 = 1;
                c7 = 1;
                const obj6 = { value: obj37.saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
                obj37 = _false(dependencyMap[11]);
                return obj6;
              } else {
                const _Object2 = Object;
                if (Object.keys(_false2).length > 0) {
                  bannerOriginalMd5 = _false2.bannerOriginalMd5;
                  closure_8 = _objectWithoutProperties(_false2, closure_2_3);
                  c6 = 2;
                  c7 = 1;
                  const obj8 = { value: obj35.saveProfileChanges(closure_8, undefined, bannerOriginalMd5), done: false };
                  obj35 = _false(dependencyMap[16]);
                  return obj8;
                } else {
                  if (undefined === _false.pendingBadgeDisplayOrder) {
                    if (undefined === _false.pendingBadgeHiddenBadges) {
                      if (undefined !== _false.pendingLegacyUsernameDisabled) {
                        c5 = 1;
                        const LegacyUsernameDisabled = _false(dependencyMap[22]).LegacyUsernameDisabled;
                        c6 = 7;
                        c7 = 1;
                        const obj9 = { value: LegacyUsernameDisabled.updateSetting(_false.pendingLegacyUsernameDisabled), done: false };
                        return obj9;
                      }
                    }
                  }
                  const _Object4 = Object;
                  let tmp158 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                  if (tmp158) {
                    const _Object5 = Object;
                    tmp158 = 0 === Object.keys(_false2).length;
                  }
                  if (tmp158) {
                    const _Object6 = Object;
                    tmp158 = 0 === Object.keys(_false3).length;
                  }
                  if (tmp158) {
                    tmp158 = undefined === _false.pendingLegacyUsernameDisabled;
                  }
                  closure_11 = tmp158;
                  const tmp166 = closure_11;
                  if (tmp166) {
                    const obj31 = stateFromStores(dependencyMap[10]);
                    obj31.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  }
                  const obj10 = { displayOrder: _false.pendingBadgeDisplayOrder, hiddenBadges: _false.pendingBadgeHiddenBadges };
                  c6 = 3;
                  c7 = 1;
                  const obj12 = { value: obj32.updateBadgeSettings(obj10), done: false };
                  obj32 = _false(dependencyMap[18]);
                  return obj12;
                }
              }
            }
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            closure_5 = value;
            let ok;
            if (closure_5 != null) {
              ok = closure_5.ok;
            }
            if (ok) {
              body = closure_5.body;
              if (undefined !== _false.pendingAvatar) {
                const obj15 = { avatarHash: body.avatar, avatarId: accountUpdateForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
                const pendingAvatar = _false.pendingAvatar;
                assetOrigin = undefined;
                const trackUserAvatarUpdated = _false(dependencyMap[13]).trackUserAvatarUpdated;
                const tmp99 = _false(dependencyMap[13]);
                if (pendingAvatar != null) {
                  assetOrigin = pendingAvatar.assetOrigin;
                }
                const result = trackUserAvatarUpdated(obj15);
              }
              const obj22 = _false(dependencyMap[11]);
              const result1 = obj22.resetPendingAccountChanges();
            } else {
              let username;
              if (closure_5 != null) {
                body = closure_5.body;
                if (body != null) {
                  username = body.username;
                }
              }
              if (null != username) {
                const obj20 = _false(dependencyMap[14]);
                const result2 = obj20.showInvalidUsernameToast();
                c4 = true;
              } else {
                let avatar;
                if (closure_5 != null) {
                  const body2 = closure_5.body;
                  if (body2 != null) {
                    avatar = body2.avatar;
                  }
                }
                if (null != avatar) {
                  const obj41 = _false(dependencyMap[15]);
                  const result3 = obj41.showGenericProfileUpdateFailureToast(closure_5.body.avatar);
                  c4 = true;
                }
              }
            }
            let tmp110 = value;
            if (tmp110) {
              let ok1;
              if (closure_5 != null) {
                ok1 = closure_5.ok;
              }
              _false = ok1;
              if (ok1 == null) {
                _false = false;
              }
              tmp110 = _false;
            }
            value = tmp110;
          }
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            closure_9 = value;
            let ok2;
            if (closure_9 != null) {
              ok2 = closure_9.ok;
            }
            if (ok2) {
              const obj18 = _false(dependencyMap[16]);
              const result4 = obj18.resetPendingProfileChanges();
            } else {
              const self3 = this;
              const self4 = this;
              const aPIError = new _false(dependencyMap[17]).APIError(closure_9);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage) {
                const obj17 = _false(dependencyMap[15]);
                const result5 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage);
                c4 = true;
              }
            }
            let tmp79 = value;
            if (tmp79) {
              let ok3;
              if (closure_9 != null) {
                ok3 = closure_9.ok;
              }
              c1 = ok3;
              if (ok3 == null) {
                c1 = false;
              }
              tmp79 = c1;
            }
            value = tmp79;
          }
        } else {
          if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              closure_12 = value;
              const tmp197 = closure_12;
              if (tmp197) {
                currentUser = currentUser.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                if (null != id) {
                  const obj13 = _false(dependencyMap[19]);
                  const profile = obj13.fetchProfile(id);
                  c6 = 4;
                  c7 = 1;
                  const obj21 = {
                    value: profile.catch(() => {

                                  }),
                    done: false
                  };
                  return obj21;
                }
              } else {
                const tmp37 = closure_11;
                if (tmp37) {
                  let obj23;
                  const dispatch = stateFromStores(dependencyMap[10]).dispatch;
                  const tmp41 = stateFromStores(dependencyMap[10]);
                  if (closure_12) {
                    obj23 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj23 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  dispatch(obj23);
                }
                const tmp45 = value && closure_12;
                value = tmp45;
              }
            }
          } else if (4 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj27 = { value, done: true };
              return obj27;
            }
          } else if (5 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              const obj7 = _false(dependencyMap[21]);
              const result6 = obj7.resetPendingBadgeSettings();
            }
          } else if (6 === c6) {
            c5 = 0;
            value = false;
          } else {
            if (7 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj30 = { value, done: true };
                return obj30;
              } else {
                const obj5 = _false(dependencyMap[11]);
                const result7 = obj5.resetPendingLegacyUsernameDisabled();
                c5 = 0;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj33 = { value, done: true };
              return obj33;
            } else {
              closure_15 = value;
              let ok4;
              if (closure_15 != null) {
                ok4 = closure_15.ok;
              }
              if (ok4) {
                const obj3 = _false(dependencyMap[11]);
                const result8 = obj3.resetPendingPrimaryGuildChanges();
              } else {
                const self = this;
                const self2 = this;
                const aPIError1 = new _false(dependencyMap[17]).APIError(closure_15);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const obj2 = _false(dependencyMap[15]);
                  const result9 = obj2.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  c4 = true;
                }
              }
              let tmp24 = value;
              if (tmp24) {
                let ok5;
                if (closure_15 != null) {
                  ok5 = closure_15.ok;
                }
                let c2 = ok5;
                if (ok5 == null) {
                  c2 = false;
                }
                tmp24 = c2;
              }
              value = tmp24;
            }
            const tmp135 = value || c4;
            if (!tmp135) {
              const showGenericProfileUpdateFailureToast = _false(dependencyMap[15]).showGenericProfileUpdateFailureToast;
              const tmp139 = _false(dependencyMap[15]);
              const intl = _false(dependencyMap[24]).intl;
              const result10 = showGenericProfileUpdateFailureToast(intl.string(_false(dependencyMap[24]).t["84MExs"]));
            }
            c7 = 3;
            const obj34 = { value, done: true };
            return obj34;
          }
          c6 = 5;
          c7 = 1;
          const obj36 = { value: obj11.fetchBadgeDirectory(), done: false };
          obj11 = _false(dependencyMap[20]);
          return obj36;
        }
        const _Object3 = Object;
        if (Object.keys(_false3).length > 0) {
          primaryGuildId = _false3.primaryGuildId;
          if (undefined !== primaryGuildId) {
            c6 = 8;
            c7 = 1;
            const obj38 = { value: obj28.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
            obj28 = _false(dependencyMap[23]);
            return obj38;
          }
        }
      } catch (tmp188) {
        if (0 === c5) {
          c7 = 3;
          throw tmp188;
        } else {
          c6 = 6;
        }
      }
    }
  });
  const fn2 = function() {
    return closure_0(...arguments);
  };
  cResult[6] = stateFromStores;
  cResult[7] = pendingChanges;
  cResult[8] = fn2;
}) : (() => {
  let errors;
  let pendingChanges;
  let tryItOutChanges;
  let obj = pendingChanges(504);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
    return obj;
  });
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj2 = pendingChanges(504);
  const items1 = [UserProfileStore, UserProfileSettingsStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting;
    return isSubmitting;
  });
  const pendingAvatarDecoration = pendingChanges.pendingAvatarDecoration;
  const effect = react.useEffect(() => () => {
    const obj = stateFromStores(closure_1_2[10]);
    return obj.wait(pendingChanges(closure_1_2[11]).resetAllPending);
  }, []);
  const items2 = [stateFromStores, pendingChanges];
  const callback = react.useCallback(_asyncToGenerator(async function() {
    let _false;
    let assetOrigin;
    let currentUser;
    let obj11;
    let obj28;
    let obj32;
    let obj35;
    let obj37;
    let value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let v0;
      try {
        let accountUpdateForUpdateRequest;
        let _false2;
        let _false3;
        let c4;
        let body;
        let firstFieldErrorMessage;
        let closure_11;
        let id;
        let primaryGuildId;
        let closure_15;
        let firstFieldErrorMessage2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp;
            accountUpdateForUpdateRequest = undefined;
            _false2 = undefined;
            _false3 = undefined;
            value = undefined;
            c4 = undefined;
            v0 = undefined;
            body = undefined;
            let bannerOriginalMd5;
            let closure_8;
            isSubmitting = undefined;
            firstFieldErrorMessage = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            id = undefined;
            primaryGuildId = undefined;
            closure_15 = undefined;
            firstFieldErrorMessage2 = undefined;
            if (stateFromStores) {
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj24 = _false(_false3[12]);
              accountUpdateForUpdateRequest = obj24.getAccountUpdateForUpdateRequest(pendingChanges);
              const obj25 = _false(_false3[12]);
              _false2 = obj25.getProfileChangesForUpdateRequest(pendingChanges);
              const obj26 = _false(_false3[12]);
              _false3 = obj26.getPrimaryGuildChangesForUpdateRequest(pendingChanges);
              value = true;
              c4 = false;
              const _Object = Object;
              if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                c6 = 1;
                c7 = 1;
                const obj6 = { value: obj37.saveProfileAndAccountChanges(accountUpdateForUpdateRequest), done: false };
                obj37 = _false(_false3[11]);
                return obj6;
              } else {
                const _Object2 = Object;
                if (Object.keys(_false2).length > 0) {
                  bannerOriginalMd5 = _false2.bannerOriginalMd5;
                  closure_8 = v0(_false2, closure_4);
                  c6 = 2;
                  c7 = 1;
                  const obj8 = { value: obj35.saveProfileChanges(closure_8, undefined, bannerOriginalMd5), done: false };
                  obj35 = _false(_false3[16]);
                  return obj8;
                } else {
                  if (undefined === closure_132_0.pendingBadgeDisplayOrder) {
                    if (undefined === closure_132_0.pendingBadgeHiddenBadges) {
                      if (undefined !== closure_132_0.pendingLegacyUsernameDisabled) {
                        v0 = 1;
                        const LegacyUsernameDisabled = _false(_false3[22]).LegacyUsernameDisabled;
                        c6 = 7;
                        c7 = 1;
                        const obj9 = { value: LegacyUsernameDisabled.updateSetting(closure_132_0.pendingLegacyUsernameDisabled), done: false };
                        return obj9;
                      }
                    }
                  }
                  const _Object4 = Object;
                  let tmp158 = 0 === Object.keys(accountUpdateForUpdateRequest).length;
                  if (tmp158) {
                    const _Object5 = Object;
                    tmp158 = 0 === Object.keys(_false2).length;
                  }
                  if (tmp158) {
                    const _Object6 = Object;
                    tmp158 = 0 === Object.keys(_false3).length;
                  }
                  if (tmp158) {
                    tmp158 = undefined === closure_132_0.pendingLegacyUsernameDisabled;
                  }
                  closure_11 = tmp158;
                  const tmp166 = closure_11;
                  if (tmp166) {
                    const obj31 = _false2(_false3[10]);
                    obj31.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                  }
                  const obj10 = { displayOrder: closure_132_0.pendingBadgeDisplayOrder, hiddenBadges: closure_132_0.pendingBadgeHiddenBadges };
                  c6 = 3;
                  c7 = 1;
                  const obj12 = { value: obj32.updateBadgeSettings(obj10), done: false };
                  obj32 = _false(_false3[18]);
                  return obj12;
                }
              }
            }
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            v0 = value;
            let ok;
            if (v0 != null) {
              ok = v0.ok;
            }
            if (ok) {
              body = v0.body;
              if (undefined !== closure_132_0.pendingAvatar) {
                const obj15 = { avatarHash: body.avatar, avatarId: accountUpdateForUpdateRequest.avatarId, avatarAssetOrigin: assetOrigin };
                const pendingAvatar = closure_132_0.pendingAvatar;
                assetOrigin = undefined;
                const trackUserAvatarUpdated = _false(_false3[13]).trackUserAvatarUpdated;
                const tmp99 = _false(_false3[13]);
                if (pendingAvatar != null) {
                  assetOrigin = pendingAvatar.assetOrigin;
                }
                const result = trackUserAvatarUpdated(obj15);
              }
              const obj22 = _false(_false3[11]);
              const result1 = obj22.resetPendingAccountChanges();
            } else {
              let username;
              if (v0 != null) {
                body = v0.body;
                if (body != null) {
                  username = body.username;
                }
              }
              if (null != username) {
                const obj20 = _false(_false3[14]);
                const result2 = obj20.showInvalidUsernameToast();
                c4 = true;
              } else {
                let avatar;
                if (v0 != null) {
                  const body2 = v0.body;
                  if (body2 != null) {
                    avatar = body2.avatar;
                  }
                }
                if (null != avatar) {
                  const obj41 = _false(_false3[15]);
                  const result3 = obj41.showGenericProfileUpdateFailureToast(v0.body.avatar);
                  c4 = true;
                }
              }
            }
            let tmp110 = value;
            if (tmp110) {
              let ok1;
              if (v0 != null) {
                ok1 = v0.ok;
              }
              _false = ok1;
              if (ok1 == null) {
                _false = false;
              }
              tmp110 = _false;
            }
            value = tmp110;
          }
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            isSubmitting = value;
            let ok2;
            if (isSubmitting != null) {
              ok2 = isSubmitting.ok;
            }
            if (ok2) {
              const obj18 = _false(_false3[16]);
              const result4 = obj18.resetPendingProfileChanges();
            } else {
              const self3 = this;
              const self4 = this;
              const aPIError = new _false(_false3[17]).APIError(isSubmitting);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage) {
                const obj17 = _false(_false3[15]);
                const result5 = obj17.showGenericProfileUpdateFailureToast(firstFieldErrorMessage);
                c4 = true;
              }
            }
            let tmp79 = value;
            if (tmp79) {
              let ok3;
              if (isSubmitting != null) {
                ok3 = isSubmitting.ok;
              }
              _false2 = ok3;
              if (ok3 == null) {
                _false2 = false;
              }
              tmp79 = _false2;
            }
            value = tmp79;
          }
        } else {
          if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              closure_12 = value;
              const tmp197 = closure_12;
              if (tmp197) {
                currentUser = currentUser.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                if (null != id) {
                  const obj13 = _false(_false3[19]);
                  const profile = obj13.fetchProfile(id);
                  c6 = 4;
                  c7 = 1;
                  const obj21 = {
                    value: profile.catch(() => {

                                  }),
                    done: false
                  };
                  return obj21;
                }
              } else {
                const tmp37 = closure_11;
                if (tmp37) {
                  let obj23;
                  const dispatch = _false2(_false3[10]).dispatch;
                  const tmp41 = _false2(_false3[10]);
                  if (closure_12) {
                    obj23 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" };
                  } else {
                    obj23 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: {} };
                  }
                  dispatch(obj23);
                }
                const tmp45 = value && closure_12;
                value = tmp45;
              }
            }
          } else if (4 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj27 = { value, done: true };
              return obj27;
            }
          } else if (5 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              const obj7 = _false(_false3[21]);
              const result6 = obj7.resetPendingBadgeSettings();
            }
          } else if (6 === c6) {
            v0 = 0;
            value = false;
          } else {
            if (7 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c7 = 3;
                const obj30 = { value, done: true };
                return obj30;
              } else {
                const obj5 = _false(_false3[11]);
                const result7 = obj5.resetPendingLegacyUsernameDisabled();
                v0 = 0;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj33 = { value, done: true };
              return obj33;
            } else {
              closure_15 = value;
              let ok4;
              if (closure_15 != null) {
                ok4 = closure_15.ok;
              }
              if (ok4) {
                const obj3 = _false(_false3[11]);
                const result8 = obj3.resetPendingPrimaryGuildChanges();
              } else {
                const self = this;
                const self2 = this;
                const aPIError1 = new _false(_false3[17]).APIError(closure_15);
                firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage2) {
                  const obj2 = _false(_false3[15]);
                  const result9 = obj2.showGenericProfileUpdateFailureToast(firstFieldErrorMessage2);
                  c4 = true;
                }
              }
              let tmp24 = value;
              if (tmp24) {
                let ok5;
                if (closure_15 != null) {
                  ok5 = closure_15.ok;
                }
                _false3 = ok5;
                if (ok5 == null) {
                  _false3 = false;
                }
                tmp24 = _false3;
              }
              value = tmp24;
            }
            const tmp135 = value || c4;
            if (!tmp135) {
              const showGenericProfileUpdateFailureToast = _false(_false3[15]).showGenericProfileUpdateFailureToast;
              const tmp139 = _false(_false3[15]);
              const intl = _false(_false3[24]).intl;
              const result10 = showGenericProfileUpdateFailureToast(intl.string(_false(_false3[24]).t["84MExs"]));
            }
            c7 = 3;
            const obj34 = { value, done: true };
            return obj34;
          }
          c6 = 5;
          c7 = 1;
          const obj36 = { value: obj11.fetchBadgeDirectory(), done: false };
          obj11 = _false(_false3[20]);
          return obj36;
        }
        const _Object3 = Object;
        if (Object.keys(_false3).length > 0) {
          primaryGuildId = _false3.primaryGuildId;
          if (undefined !== primaryGuildId) {
            c6 = 8;
            c7 = 1;
            const obj38 = { value: obj28.adoptGuildIdentity(primaryGuildId, null !== primaryGuildId), done: false };
            obj28 = _false(_false3[23]);
            return obj38;
          }
        }
      } catch (tmp188) {
        if (0 === v0) {
          c7 = 3;
          throw tmp188;
        } else {
          c6 = 6;
        }
      }
    }
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  let obj3 = {
    hasAvatarDecorationEdits: undefined !== pendingAvatarDecoration,
    errors,
    isSubmitting: stateFromStores,
    handleSubmit: callback,
    handleSubmitAvatarDecoration: react.useCallback(_asyncToGenerator(async () => {
      let closure_0;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let tmp4;
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
              let closure_1 = tmp;
              tmp4 = undefined;
              if (!stateFromStores) {
                const obj5 = { avatarDecoration: pendingChanges.pendingAvatarDecoration };
                const obj3 = tmp4(c2[11]);
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj3.saveProfileAndAccountChanges(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp4 = value;
            let ok;
            if (tmp4 != null) {
              ok = tmp4.ok;
            }
            if (ok) {
              const obj = tmp4(c2[11]);
              const result = obj.resetPendingAccountChanges();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    }), items3),
    resetPending: pendingChanges(6477).resetAllPending
  };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
});
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default tmp2;