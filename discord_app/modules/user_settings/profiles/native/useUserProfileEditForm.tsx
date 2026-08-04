import _objectWithoutProperties from "_objectWithoutProperties";
import ME from "ME";
import noop from "noop";
import handleFormOpen from "handleFormOpen";
import createUserWidgetFromServer from "createUserWidgetFromServer";
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
  const effect = React.useEffect(() => () => callback2(709).wait(callback(8321).resetAllPending), []);
  const items2 = [stateFromStores, pendingChanges];
  callback = React.useCallback(callback(function*() {
    if (bannerOriginalMd5 === 2) {
      bannerOriginalMd5 = 3;
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    } else {
      throwTypeErrorResult = arg1;
      throwTypeErrorResult = arg0;
      throwTypeErrorResult = tmp4;
      throwTypeErrorResult = null;
      throwTypeErrorResult = globalThis;
      if (tmp5 === 3) {
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
              primaryGuildId = undefined;
              let ok;
              let firstFieldErrorMessage;
              throwTypeErrorResult = outer1_1;
              if (outer1_1) {
                bannerOriginalMd5 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const accountUpdateForUpdateRequest = outer1_0(outer1_2[9]).getAccountUpdateForUpdateRequest(outer1_0);
                c0 = accountUpdateForUpdateRequest;
                const obj16 = outer1_0(outer1_2[9]);
                profileChangesForUpdateRequest = outer1_0(outer1_2[9]).getProfileChangesForUpdateRequest(outer1_0);
                const obj17 = outer1_0(outer1_2[9]);
                primaryGuildId = outer1_0(outer1_2[9]).getPrimaryGuildChangesForUpdateRequest(outer1_0);
                c3 = true;
                c4 = false;
                const _Object = Object;
                if (Object.keys(accountUpdateForUpdateRequest).length > 0) {
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = outer1_2;
                  user = 1;
                  bannerOriginalMd5 = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = outer1_0(outer1_2[8]).saveProfileAndAccountChanges(accountUpdateForUpdateRequest);
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
                    obj2[0] = outer1_0(outer1_2[13]).saveProfileChanges(outer1_8, undefined, bannerOriginalMd5);
                    return obj2;
                  } else {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = c0;
                    if (undefined !== c0.pendingLegacyUsernameDisabled) {
                      throwTypeErrorResult = c4;
                      c5 = 1;
                      throwTypeErrorResult = outer1_0;
                      throwTypeErrorResult = outer1_2;
                      const LegacyUsernameDisabled = outer1_0(outer1_2[15]).LegacyUsernameDisabled;
                      throwTypeErrorResult = outer1_0;
                      user = 4;
                      bannerOriginalMd5 = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = LegacyUsernameDisabled.updateSetting(outer1_0.pendingLegacyUsernameDisabled);
                      return obj3;
                    }
                  }
                }
                const obj18 = outer1_0(outer1_2[9]);
              }
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              bannerOriginalMd5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              bannerOriginalMd5 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
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
                  const obj5 = { avatarHash: null, avatarId: null, avatarAssetOrigin: null };
                  obj5[0] = user.avatar;
                  obj5[1] = c0.avatarId;
                  const pendingAvatar = c0.pendingAvatar;
                  let assetOrigin;
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  obj5[2] = assetOrigin;
                  const result = outer1_0(outer1_2[10]).trackUserAvatarUpdated(obj5);
                  const obj12 = outer1_0(outer1_2[10]);
                }
                const result1 = outer1_0(outer1_2[8]).resetPendingAccountChanges();
                const obj14 = outer1_0(outer1_2[8]);
              } else {
                let username;
                if (c5 != null) {
                  const body = c5.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  let obj10 = outer1_0(outer1_2[11]);
                  const result2 = obj10.showInvalidUsernameToast();
                  outer1_4 = true;
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
                    throwTypeErrorResult = outer1_0(outer1_2[12]).showGenericProfileUpdateFailureToast(c5.body.avatar);
                    outer1_4 = true;
                    const obj30 = outer1_0(outer1_2[12]);
                  }
                }
              }
              let tmp87 = outer1_3;
              if (outer1_3) {
                let ok1;
                if (c5 != null) {
                  ok1 = c5.ok;
                }
                c0 = ok1;
                if (ok1 == null) {
                  c0 = false;
                }
                tmp87 = c0;
              }
              outer1_3 = tmp87;
            }
          } else if (2 === tmp6) {
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
              const outer1_9 = arg1;
              let ok2;
              if (outer1_9 != null) {
                ok2 = outer1_9.ok;
              }
              if (ok2) {
                let obj8 = outer1_0(outer1_2[13]);
                const result3 = obj8.resetPendingProfileChanges();
              } else {
                const aPIError = new outer1_0(outer1_2[14]).APIError(outer1_9);
                const outer1_10 = aPIError.getFirstFieldErrorMessage("banner");
                if (null != outer1_10) {
                  let obj7 = outer1_0(outer1_2[12]);
                  const result4 = obj7.showGenericProfileUpdateFailureToast(outer1_10);
                  outer1_4 = true;
                }
              }
              let tmp57 = outer1_3;
              if (outer1_3) {
                let ok3;
                if (outer1_9 != null) {
                  ok3 = outer1_9.ok;
                }
                profileChangesForUpdateRequest = ok3;
                if (ok3 == null) {
                  profileChangesForUpdateRequest = false;
                }
                tmp57 = profileChangesForUpdateRequest;
              }
              outer1_3 = tmp57;
            }
          } else if (3 === tmp6) {
            c5 = 0;
            outer1_3 = false;
          } else {
            if (4 === tmp6) {
              if (arg0 === 1) {
                bannerOriginalMd5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                bannerOriginalMd5 = 3;
                obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                obj4 = outer1_0(outer1_2[8]);
                const result5 = obj4.resetPendingLegacyUsernameDisabled();
                c5 = 0;
              }
            } else if (arg0 === 1) {
              bannerOriginalMd5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              bannerOriginalMd5 = 3;
              obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              throwTypeErrorResult = c3;
              ok = arg1;
              let ok4;
              if (ok != null) {
                ok4 = ok.ok;
              }
              if (ok4) {
                obj2 = outer1_0(outer1_2[8]);
                const result6 = obj2.resetPendingPrimaryGuildChanges();
              } else {
                const aPIError1 = new outer1_0(outer1_2[14]).APIError(ok);
                firstFieldErrorMessage = aPIError1.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage) {
                  obj1 = outer1_0(outer1_2[12]);
                  const result7 = obj1.showGenericProfileUpdateFailureToast(firstFieldErrorMessage);
                  c4 = true;
                }
              }
              let tmp28 = outer1_3;
              if (outer1_3) {
                let ok5;
                if (outer1_12 != null) {
                  ok5 = outer1_12.ok;
                }
                primaryGuildId = ok5;
                if (ok5 == null) {
                  primaryGuildId = false;
                }
                tmp28 = primaryGuildId;
              }
              outer1_3 = tmp28;
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
              const intl = outer1_0(outer1_2[17]).intl;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = outer1_2;
              throwTypeErrorResult = outer1_0(outer1_2[12]).showGenericProfileUpdateFailureToast(intl.string(outer1_0(outer1_2[17]).t["84MExs"]));
              const obj19 = outer1_0(outer1_2[12]);
            }
            throwTypeErrorResult = c3;
            bannerOriginalMd5 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = outer1_3;
            return obj9;
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
              throwTypeErrorResult = outer1_11;
              throwTypeErrorResult = outer1_11;
              user = 5;
              bannerOriginalMd5 = 1;
              obj10 = { value: null, done: false };
              obj10[0] = outer1_0(outer1_2[16]).adoptGuildIdentity(outer1_11, null !== outer1_11);
              return obj10;
            }
          }
        } catch (throwTypeErrorResult) {
          throwTypeErrorResult = c5;
          if (tmp3 === c5) {
            bannerOriginalMd5 = throwTypeErrorResult;
            throw throwTypeErrorResult;
          } else {
            user = throwTypeErrorResult;
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
                let obj2 = outer1_0(8321);
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
              obj = outer1_0(8321);
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
    resetPending: pendingChanges(8321).resetAllPending
  };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj;
};