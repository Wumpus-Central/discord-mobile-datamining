// discord_app/modules/user_settings/profiles/native/useUserProfileEditForm.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import mergeGuildAvatar from "mergeGuildAvatar";
import explicitContentFromProto from "explicitContentFromProto";
import handleFormOpen from "handleFormOpen";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import closure_9 from "mergeGuildAvatar";
import { FormStates } from "ME";

const require = arg1;
let closure_3 = ["bannerOriginalMd5"];
let result = require("noop").fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let errors;
  let tryItOutChanges;
  let obj = pendingChanges(589);
  const items = [handleFormOpen];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ pendingChanges: store.getPendingChanges(), tryItOutChanges: store.getTryItOutChanges(), errors: store.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  const items1 = [createUserWidgetFromServer, handleFormOpen];
  const stateFromStores = pendingChanges(589).useStateFromStores(items1, () => {
    let isSubmitting = store.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    return isSubmitting;
  });
  const effect = React.useEffect(() => () => callback2(709).wait(callback(8559).resetAllPending), []);
  const items2 = [stateFromStores, pendingChanges];
  callback = React.useCallback(callback(function*() {
    if (bannerOriginalMd5 === 2) {
      bannerOriginalMd5 = 3;
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
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
          bannerOriginalMd5 = 2;
          if (0 === user) {
            if (arg0 === 1) {
              bannerOriginalMd5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              bannerOriginalMd5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c4 = tmp2;
              let c3 = throwTypeErrorResult;
              let c0;
              let profileChangesForUpdateRequest;
              let primaryGuildId;
              c3 = undefined;
              c4 = undefined;
              let c5;
              user = undefined;
              bannerOriginalMd5 = undefined;
              let c8;
              let c9;
              let c10;
              let c11;
              let c12;
              let c13;
              primaryGuildId = undefined;
              let ok;
              let firstFieldErrorMessage;
              throwTypeErrorResult = outer1_1;
              if (outer1_1) {
                bannerOriginalMd5 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_0(outer1_2[10]).getAccountUpdateForUpdateRequest(outer1_0);
                c0 = throwTypeErrorResult;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                const obj23 = outer1_0(outer1_2[10]);
                throwTypeErrorResult = outer1_0;
                profileChangesForUpdateRequest = outer1_0(outer1_2[10]).getProfileChangesForUpdateRequest(outer1_0);
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                const obj24 = outer1_0(outer1_2[10]);
                throwTypeErrorResult = outer1_0;
                primaryGuildId = outer1_0(outer1_2[10]).getPrimaryGuildChangesForUpdateRequest(outer1_0);
                c3 = true;
                c4 = false;
                const _Object = Object;
                if (Object.keys(throwTypeErrorResult).length > 0) {
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = outer1_2;
                  user = 1;
                  bannerOriginalMd5 = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = outer1_0(outer1_2[9]).saveProfileAndAccountChanges(throwTypeErrorResult);
                  return obj1;
                } else {
                  throwTypeErrorResult = c3;
                  const _Object2 = Object;
                  throwTypeErrorResult = profileChangesForUpdateRequest;
                  if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_1;
                    bannerOriginalMd5 = outer1_1.bannerOriginalMd5;
                    throwTypeErrorResult = outer1_4;
                    throwTypeErrorResult = outer1_1;
                    throwTypeErrorResult = outer1_3;
                    const outer1_8 = outer1_4(outer1_1, outer1_3);
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_2;
                    throwTypeErrorResult = outer1_8;
                    throwTypeErrorResult = bannerOriginalMd5;
                    user = 2;
                    bannerOriginalMd5 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = outer1_0(outer1_2[14]).saveProfileChanges(outer1_8, undefined, bannerOriginalMd5);
                    return obj2;
                  } else {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = c0;
                    if (undefined === c0.pendingBadgeDisplayOrder) {
                      throwTypeErrorResult = c4;
                      throwTypeErrorResult = c0;
                      if (undefined === c0.pendingBadgeHiddenBadges) {
                        throwTypeErrorResult = c4;
                        throwTypeErrorResult = c0;
                        if (undefined !== c0.pendingLegacyUsernameDisabled) {
                          throwTypeErrorResult = c4;
                          c5 = 1;
                          throwTypeErrorResult = outer1_0;
                          throwTypeErrorResult = outer1_2;
                          const LegacyUsernameDisabled = outer1_0(outer1_2[19]).LegacyUsernameDisabled;
                          throwTypeErrorResult = outer1_0;
                          user = 6;
                          bannerOriginalMd5 = 1;
                          const obj3 = { value: null, done: false };
                          obj3[0] = LegacyUsernameDisabled.updateSetting(outer1_0.pendingLegacyUsernameDisabled);
                          return obj3;
                        }
                      }
                    }
                    throwTypeErrorResult = c3;
                    const _Object4 = Object;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = 0 === Object.keys(outer1_0).length;
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = c3;
                      const _Object5 = Object;
                      throwTypeErrorResult = outer1_1;
                      throwTypeErrorResult = 0 === Object.keys(outer1_1).length;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = c3;
                      const _Object6 = Object;
                      throwTypeErrorResult = outer1_2;
                      throwTypeErrorResult = 0 === Object.keys(outer1_2).length;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = c4;
                      throwTypeErrorResult = outer1_0;
                      throwTypeErrorResult = undefined === outer1_0.pendingLegacyUsernameDisabled;
                    }
                    throwTypeErrorResult = c3;
                    const outer1_11 = throwTypeErrorResult;
                    throwTypeErrorResult = outer1_11;
                    if (outer1_11) {
                      throwTypeErrorResult = c4;
                      throwTypeErrorResult = outer1_1;
                      throwTypeErrorResult = outer1_2;
                      throwTypeErrorResult = outer1_1(outer1_2[8]).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
                      const obj31 = outer1_1(outer1_2[8]);
                    }
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_2;
                    let obj4 = { displayOrder: null, hiddenBadges: null };
                    throwTypeErrorResult = c0;
                    obj4[0] = c0.pendingBadgeDisplayOrder;
                    throwTypeErrorResult = c0;
                    obj4[1] = c0.pendingBadgeHiddenBadges;
                    user = 3;
                    bannerOriginalMd5 = 1;
                    const obj5 = { value: null, done: false };
                    obj5[0] = outer1_0(outer1_2[16]).updateBadgeSettings(obj4);
                    return obj5;
                  }
                }
                const obj25 = outer1_0(outer1_2[10]);
              }
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              bannerOriginalMd5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              bannerOriginalMd5 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              throwTypeErrorResult = c3;
              c5 = arg1;
              ok = undefined;
              if (c5 != null) {
                ok = c5.ok;
              }
              if (ok) {
                user = c5.body;
                if (undefined !== outer1_0.pendingAvatar) {
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = outer1_2;
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
                  throwTypeErrorResult = outer1_0(outer1_2[11]).trackUserAvatarUpdated(obj7);
                  const obj19 = outer1_0(outer1_2[11]);
                }
                throwTypeErrorResult = c4;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                throwTypeErrorResult = outer1_0(outer1_2[9]).resetPendingAccountChanges();
                const obj21 = outer1_0(outer1_2[9]);
              } else {
                let username;
                if (c5 != null) {
                  const body = c5.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const result = outer1_0(outer1_2[12]).showInvalidUsernameToast();
                  outer1_4 = true;
                  const obj18 = outer1_0(outer1_2[12]);
                } else {
                  let avatar;
                  if (c5 != null) {
                    const body2 = c5.body;
                    if (body2 != null) {
                      avatar = body2.avatar;
                    }
                  }
                  if (null != avatar) {
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = outer1_2;
                    throwTypeErrorResult = c5;
                    throwTypeErrorResult = outer1_0(outer1_2[13]).showGenericProfileUpdateFailureToast(c5.body.avatar);
                    outer1_4 = true;
                    const obj41 = outer1_0(outer1_2[13]);
                  }
                }
              }
              throwTypeErrorResult = c3;
              throwTypeErrorResult = outer1_3;
              if (outer1_3) {
                throwTypeErrorResult = undefined;
                if (c5 != null) {
                  throwTypeErrorResult = c5.ok;
                }
                c0 = throwTypeErrorResult;
                if (throwTypeErrorResult == null) {
                  c0 = false;
                }
                throwTypeErrorResult = c0;
              }
              throwTypeErrorResult = c3;
              outer1_3 = throwTypeErrorResult;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              bannerOriginalMd5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              bannerOriginalMd5 = 3;
              let obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              throwTypeErrorResult = c3;
              const outer1_9 = arg1;
              let ok1;
              if (outer1_9 != null) {
                ok1 = outer1_9.ok;
              }
              if (ok1) {
                let obj15 = outer1_0(outer1_2[14]);
                const result1 = obj15.resetPendingProfileChanges();
              } else {
                const aPIError = new outer1_0(outer1_2[15]).APIError(outer1_9);
                const outer1_10 = aPIError.getFirstFieldErrorMessage("banner");
                if (null != outer1_10) {
                  let obj14 = outer1_0(outer1_2[13]);
                  const result2 = obj14.showGenericProfileUpdateFailureToast(outer1_10);
                  outer1_4 = true;
                }
              }
              let tmp82 = outer1_3;
              if (outer1_3) {
                let ok2;
                if (outer1_9 != null) {
                  ok2 = outer1_9.ok;
                }
                profileChangesForUpdateRequest = ok2;
                if (ok2 == null) {
                  profileChangesForUpdateRequest = false;
                }
                tmp82 = profileChangesForUpdateRequest;
              }
              outer1_3 = tmp82;
            }
          } else {
            if (3 === tmp7) {
              if (arg0 === 1) {
                bannerOriginalMd5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                bannerOriginalMd5 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              } else {
                throwTypeErrorResult = c3;
                const outer1_12 = arg1;
                throwTypeErrorResult = outer1_12;
                if (outer1_12) {
                  const currentUser = outer1_9.getCurrentUser();
                  let id;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  const outer1_13 = id;
                  if (null != outer1_13) {
                    let obj10 = outer1_0(outer1_2[17]);
                    const profile = obj10.fetchProfile(outer1_13);
                    user = 4;
                    bannerOriginalMd5 = 1;
                    obj10 = { value: null, done: false };
                    obj10[0] = profile.catch(() => {

                    });
                    return obj10;
                  }
                }
                if (!outer1_11) {
                  let tmp55 = outer1_3;
                  if (outer1_3) {
                    tmp55 = outer1_12;
                  }
                  outer1_3 = tmp55;
                } else {
                  obj8 = outer1_1(outer1_2[8]);
                  if (outer1_12) {
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
                bannerOriginalMd5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                bannerOriginalMd5 = 3;
                const obj12 = { value: null, done: true };
                obj12[0] = arg1;
                return obj12;
              }
            } else if (5 === tmp7) {
              c5 = 0;
              outer1_3 = false;
            } else {
              if (6 === tmp7) {
                if (arg0 === 1) {
                  bannerOriginalMd5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 0;
                  bannerOriginalMd5 = 3;
                  const obj13 = { value: null, done: true };
                  obj13[0] = arg1;
                  return obj13;
                } else {
                  obj4 = outer1_0(outer1_2[9]);
                  const result3 = obj4.resetPendingLegacyUsernameDisabled();
                  c5 = 0;
                }
              } else if (arg0 === 1) {
                bannerOriginalMd5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                bannerOriginalMd5 = 3;
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
                  obj2 = outer1_0(outer1_2[9]);
                  const result4 = obj2.resetPendingPrimaryGuildChanges();
                } else {
                  const aPIError1 = new outer1_0(outer1_2[15]).APIError(ok);
                  firstFieldErrorMessage = aPIError1.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage) {
                    obj1 = outer1_0(outer1_2[13]);
                    const result5 = obj1.showGenericProfileUpdateFailureToast(firstFieldErrorMessage);
                    c4 = true;
                  }
                }
                let tmp29 = outer1_3;
                if (outer1_3) {
                  let ok4;
                  if (outer1_15 != null) {
                    ok4 = outer1_15.ok;
                  }
                  primaryGuildId = ok4;
                  if (ok4 == null) {
                    primaryGuildId = false;
                  }
                  tmp29 = primaryGuildId;
                }
                outer1_3 = tmp29;
              }
              throwTypeErrorResult = c3;
              throwTypeErrorResult = c3;
              if (!c3) {
                throwTypeErrorResult = c4;
              }
              if (!throwTypeErrorResult) {
                throwTypeErrorResult = c4;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                const intl = outer1_0(outer1_2[21]).intl;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = outer1_2;
                throwTypeErrorResult = outer1_0(outer1_2[13]).showGenericProfileUpdateFailureToast(intl.string(outer1_0(outer1_2[21]).t["84MExs"]));
                const obj26 = outer1_0(outer1_2[13]);
              }
              throwTypeErrorResult = c3;
              bannerOriginalMd5 = 3;
              obj15 = { value: null, done: true };
              obj15[0] = outer1_3;
              return obj15;
            }
            obj7 = outer1_0(outer1_2[18]);
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
              throwTypeErrorResult = c4;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = outer1_2;
              throwTypeErrorResult = outer1_14;
              throwTypeErrorResult = outer1_14;
              user = 7;
              bannerOriginalMd5 = 1;
              const obj16 = { value: null, done: false };
              obj16[0] = outer1_0(outer1_2[20]).adoptGuildIdentity(outer1_14, null !== outer1_14);
              return obj16;
            }
          }
        } catch (throwTypeErrorResult) {
          throwTypeErrorResult = c5;
          if (tmp3 === c5) {
            bannerOriginalMd5 = throwTypeErrorResult;
            throw throwTypeErrorResult;
          } else {
            user = tmp4;
          }
        }
      }
    }
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
              let closure_1 = tmp2;
              let ok = tmp5;
              ok = undefined;
              if (outer1_1) {
                c3 = 3;
              } else {
                let obj2 = outer1_0(8559);
                const obj1 = { avatarDecoration: null };
                obj1[0] = outer1_0.pendingAvatarDecoration;
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
              obj = outer1_0(8559);
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
    resetPending: pendingChanges(8559).resetAllPending
  };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj;
};