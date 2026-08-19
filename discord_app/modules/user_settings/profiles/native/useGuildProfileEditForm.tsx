// === Module 14067: useGuildProfileEditForm ===

// Module 14067 (useGuildProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;
import handleFormOpen from "handleFormOpen" /* 8370 */;
import { IGNORE_GUILD_IDS } from "handleFormOpen" /* 8370 */;
import createUserWidgetFromServer from "createUserWidgetFromServer" /* 5365 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { FormStates } from "ME" /* 676 */;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
let result = require("obj132").fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default function useGuildProfileEditForm() {
  let obj = stateFromStores(pendingNickname[9]);
  const items = [pendingDisplayNameStyles];
  stateFromStores = obj.useStateFromStores(items, () => pendingDisplayNameStyles.getCurrentUser());
  const items1 = [selectedGuild, pendingProfileFrame];
  const stateFromStoresObject = stateFromStores(pendingNickname[9]).useStateFromStoresObject(items1, () => {
    const selectedGuildId = selectedGuild.selectedGuildId;
    const obj = {};
    const merged = Object.assign(selectedGuild.getPendingChanges(selectedGuildId));
    obj.errors = selectedGuild.getErrors(selectedGuildId);
    obj.selectedGuild = pendingProfileFrame.getGuild(selectedGuildId);
    obj.formState = selectedGuild.getFormState();
    return obj;
  });
  const pendingAvatar = stateFromStoresObject.pendingAvatar;
  pendingNickname = stateFromStoresObject.pendingNickname;
  const pendingBanner = stateFromStoresObject.pendingBanner;
  const pendingBio = stateFromStoresObject.pendingBio;
  const pendingPronouns = stateFromStoresObject.pendingPronouns;
  const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
  selectedGuild = stateFromStoresObject.selectedGuild;
  const pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const pendingNameplate = stateFromStoresObject.pendingNameplate;
  pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  let obj2 = stateFromStores(pendingNickname[9]);
  const tmp4 = selectedGuild;
  const tmp5 = pendingProfileFrame;
  let id;
  if (selectedGuild != null) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = stateFromStores(pendingNickname[10]).useGuildAutomodProfileQuarantineErrors(id);
  let tmpResult = tmp(tmp2[9]);
  const items2 = [tmp4, pendingProfileEffect];
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    let isSubmitting = selectedGuild.getFormState() === memo.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = pendingProfileEffect.isSubmitting;
    }
    return isSubmitting;
  });
  obj = {};
  let merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  const memo = pendingThemeColors.useMemo(() => {
    const delayedCall = new stateFromStores(pendingNickname[11]).DelayedCall(200, () => {
      callback2(709).wait(callback(9539).resetAllPending);
    });
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = pendingThemeColors.useEffect(() => () => {
    closure_13.cancel();
    pendingAvatar(pendingNickname[12]).wait(stateFromStores(pendingNickname[13]).resetAllPending);
  }, items3);
  closure_14 = pendingAvatar(tmp2[14])();
  tmpResult = tmp(tmp2[9]);
  const items4 = [tmp5, pendingNameplate];
  let tmp15 = stateFromStores1;
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
    const guild = pendingProfileFrame.getGuild(closure_14);
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      if (!pendingAvatarDecoration.has(guild.id)) {
        return guild;
      }
    }
    return pendingProfileFrame.getGuild(pendingNameplate.getFlattenedGuildIds()[0]);
  });
  if (!stateFromStores1) {
    tmp15 = stateFromStoresObject.formState === memo.CLOSED;
  }
  closure_15 = tmp15;
  const items5 = [tmp15, stateFromStores, pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles, pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, , ];
  let id1;
  let obj3 = stateFromStores(pendingNickname[10]);
  let obj6 = pendingThemeColors;
  if (selectedGuild != null) {
    id1 = selectedGuild.id;
  }
  obj = {
    handleSubmit: obj6.useCallback(pendingPronouns(() => {
      c4 = 0;
      let body = 0;
      return (function*() {
        c3 = tmp2;
        dependencyMap = tmp3;
        if (!closure_1_15) {
          if (null != stateFromStores) {
            obj1 = { pendingAvatar: null, pendingNickname: null, pendingAvatarDecoration: null, pendingNameplate: null, pendingDisplayNameStyles: null };
            obj1[0] = pendingAvatar;
            obj1[1] = dependencyMap;
            obj1[2] = pendingAvatarDecoration;
            obj1[3] = pendingNameplate;
            obj1[4] = pendingDisplayNameStyles;
            const guildMemberChangesForUpdateRequest = stateFromStores(10397).getGuildMemberChangesForUpdateRequest(obj1);
            let avatarId = guildMemberChangesForUpdateRequest;
            const obj16 = stateFromStores(10397);
            const obj2 = { pendingBanner: null, pendingBio: null, pendingPronouns: null, pendingThemeColors: null, pendingProfileEffect: null, pendingProfileFrame: null };
            obj2[0] = c3;
            obj2[1] = v0;
            obj2[2] = body;
            obj2[3] = pendingThemeColors;
            obj2[4] = pendingProfileEffect;
            obj2[5] = pendingProfileFrame;
            let id;
            if (selectedGuild != null) {
              id = selectedGuild.id;
            }
            let bannerOriginalMd5 = stateFromStores(10397).getProfileChangesForUpdateRequest(obj2, id);
            dependencyMap = true;
            c3 = false;
            const _Object = Object;
            if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
              let id1;
              if (selectedGuild != null) {
                id1 = selectedGuild.id;
              }
              v0 = 1;
              body = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = stateFromStores(9539).saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest);
              return obj3;
            }
            const obj18 = stateFromStores(10397);
          }
        }
        yield "HermesInternal";
        if (1 === tmp6) {
          if (arg0 === 1) {
            body = 3;
            throw arg1;
          } else if (arg0 === 2) {
            body = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            v0 = arg1;
            if (v0.ok) {
              body = v0.body;
              if (undefined !== pendingAvatar) {
                obj3 = stateFromStores(8621);
                const obj5 = { isGuildProfile: true, avatarHash: null, avatarId: null, avatarAssetOrigin: null };
                obj5[1] = body.avatar;
                obj5[2] = avatarId.avatarId;
                let assetOrigin;
                if (pendingAvatar != null) {
                  assetOrigin = pendingAvatar.assetOrigin;
                }
                obj5[3] = assetOrigin;
                const result = obj3.trackUserAvatarUpdated(obj5);
              }
            } else {
              let avatar;
              if (v0 != null) {
                body = v0.body;
                if (body != null) {
                  avatar = body.avatar;
                }
              }
              if (null != avatar) {
                const result1 = stateFromStores(14019).showGenericGuildProfileUpdateFailureToast(v0.body.avatar);
                c3 = true;
                const obj15 = stateFromStores(14019);
              }
            }
            let tmp42 = dependencyMap;
            if (dependencyMap) {
              let ok;
              if (v0 != null) {
                ok = v0.ok;
              }
              avatarId = ok;
              if (ok == null) {
                avatarId = false;
              }
              tmp42 = avatarId;
            }
            dependencyMap = tmp42;
          }
        } else if (arg0 === 1) {
          body = 3;
          throw arg1;
        } else if (arg0 === 2) {
          body = 3;
          let obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          ok = arg1;
          let ok1;
          if (ok != null) {
            ok1 = ok.ok;
          }
          if (!ok1) {
            const aPIError = new stateFromStores(4273).APIError(ok);
            const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
            if (null != firstFieldErrorMessage) {
              obj1 = stateFromStores(14019);
              const result2 = obj1.showGenericGuildProfileUpdateFailureToast(pendingProfileEffect);
              c3 = true;
            }
          }
          let tmp24 = dependencyMap;
          if (dependencyMap) {
            let ok2;
            if (pendingAvatarDecoration != null) {
              ok2 = pendingAvatarDecoration.ok;
            }
            bannerOriginalMd5 = ok2;
            if (ok2 == null) {
              bannerOriginalMd5 = false;
            }
            tmp24 = bannerOriginalMd5;
          }
          dependencyMap = tmp24;
        }
        let tmp54 = dependencyMap;
        if (!dependencyMap) {
          tmp54 = c3;
        }
        if (!tmp54) {
          obj6 = stateFromStores(14019);
          const intl = stateFromStores(1236).intl;
          const result3 = obj6.showGenericGuildProfileUpdateFailureToast(intl.string(stateFromStores(1236).t.s35OuK));
        }
        if (dependencyMap) {
          memo.delay();
        }
        return dependencyMap;
      })();
    }), items5),
    isDisabled: tmp15,
    isSubmitting: stateFromStores1,
    resetPending: tmp(tmp2[13]).resetAllPending
  };
  items5[13] = id1;
  items5[14] = memo;
  const merged2 = Object.assign(stateFromStoresObject);
  if (selectedGuild == null) {
    selectedGuild = stateFromStores2;
  }
  obj.guild = selectedGuild;
  obj.errors = obj;
  return obj;
};
export const RESET_DELAY_MS = 200;