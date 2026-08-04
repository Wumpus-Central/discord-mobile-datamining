import _objectWithoutProperties from "_objectWithoutProperties";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import V6OrEarlierAPIError from "V6OrEarlierAPIError";
import handleFormOpen from "handleFormOpen";
import { IGNORE_GUILD_IDS } from "handleFormOpen";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import closure_10 from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import mergeGuildAvatar from "mergeGuildAvatar";
import { FormStates } from "ME";

const require = arg1;
let closure_3 = ["bannerOriginalMd5"];
let result = require("noop").fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

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
      callback2(709).wait(callback(10053).resetAllPending);
    });
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = pendingThemeColors.useEffect(() => () => {
    closure_13.cancel();
    outer1_1(outer1_2[12]).wait(outer1_0(outer1_2[13]).resetAllPending);
  }, items3);
  let closure_14 = pendingAvatar(tmp2[14])();
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
  let closure_15 = tmp15;
  const items5 = [tmp15, stateFromStores, pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles, pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, , ];
  let id1;
  let obj3 = stateFromStores(pendingNickname[10]);
  let obj6 = pendingThemeColors;
  if (selectedGuild != null) {
    id1 = selectedGuild.id;
  }
  obj = {
    handleSubmit: obj6.useCallback(pendingPronouns(function*() {
      let c3 = tmp2;
      let c2 = tmp3;
      if (!outer1_15) {
        if (null != outer1_0) {
          let guildMemberChangesForUpdateRequest = outer1_0;
          guildMemberChangesForUpdateRequest = outer1_2;
          let obj1 = { pendingAvatar: null, pendingNickname: null, pendingAvatarDecoration: null, pendingNameplate: null, pendingDisplayNameStyles: null };
          guildMemberChangesForUpdateRequest = outer1_1;
          obj1[0] = outer1_1;
          guildMemberChangesForUpdateRequest = outer1_2;
          obj1[1] = outer1_2;
          guildMemberChangesForUpdateRequest = outer1_8;
          obj1[2] = outer1_8;
          guildMemberChangesForUpdateRequest = outer1_11;
          obj1[3] = outer1_11;
          guildMemberChangesForUpdateRequest = outer1_12;
          obj1[4] = outer1_12;
          guildMemberChangesForUpdateRequest = outer1_0(outer1_2[15]).getGuildMemberChangesForUpdateRequest(obj1);
          let avatarId = guildMemberChangesForUpdateRequest;
          guildMemberChangesForUpdateRequest = outer1_0;
          guildMemberChangesForUpdateRequest = outer1_2;
          const obj16 = outer1_0(outer1_2[15]);
          const obj2 = { pendingBanner: null, pendingBio: null, pendingPronouns: null, pendingThemeColors: null, pendingProfileEffect: null, pendingProfileFrame: null };
          guildMemberChangesForUpdateRequest = outer1_3;
          obj2[0] = outer1_3;
          guildMemberChangesForUpdateRequest = v0;
          obj2[1] = v0;
          guildMemberChangesForUpdateRequest = body2;
          obj2[2] = body2;
          guildMemberChangesForUpdateRequest = outer1_6;
          obj2[3] = outer1_6;
          guildMemberChangesForUpdateRequest = outer1_9;
          obj2[4] = outer1_9;
          guildMemberChangesForUpdateRequest = outer1_10;
          obj2[5] = outer1_10;
          let id;
          if (outer1_7 != null) {
            id = outer1_7.id;
          }
          let bannerOriginalMd5 = outer1_0(outer1_2[15]).getProfileChangesForUpdateRequest(obj2, id);
          c2 = true;
          c3 = false;
          const _Object = Object;
          if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
            let id1;
            if (outer1_7 != null) {
              id1 = outer1_7.id;
            }
            v0 = 1;
            guildMemberChangesForUpdateRequest = 1;
            let obj3 = { value: null, done: false };
            obj3[0] = outer1_0(outer1_2[13]).saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest);
            return obj3;
          }
          const obj18 = outer1_0(outer1_2[15]);
        }
      }
      yield "HermesInternal";
      if (1 === tmp6) {
        if (arg0 === 1) {
          guildMemberChangesForUpdateRequest = 3;
          throw arg1;
        } else if (arg0 === 2) {
          guildMemberChangesForUpdateRequest = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          v0 = arg1;
          if (v0.ok) {
            body2 = v0.body;
            if (undefined !== outer1_1) {
              obj3 = outer1_0(outer1_2[16]);
              const obj5 = { isGuildProfile: true, avatarHash: null, avatarId: null, avatarAssetOrigin: null };
              obj5[1] = guildMemberChangesForUpdateRequest.avatar;
              obj5[2] = avatarId.avatarId;
              let assetOrigin;
              if (outer1_1 != null) {
                assetOrigin = outer1_1.assetOrigin;
              }
              obj5[3] = assetOrigin;
              const result = obj3.trackUserAvatarUpdated(obj5);
            }
          } else {
            let avatar;
            if (v0 != null) {
              const body = v0.body;
              if (body != null) {
                avatar = body.avatar;
              }
            }
            if (null != avatar) {
              guildMemberChangesForUpdateRequest = v0;
              guildMemberChangesForUpdateRequest = outer1_0(outer1_2[17]).showGenericGuildProfileUpdateFailureToast(v0.body.avatar);
              c3 = true;
              const obj15 = outer1_0(outer1_2[17]);
            }
          }
          let tmp42 = outer1_2;
          if (outer1_2) {
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
          outer1_2 = tmp42;
        }
      } else if (arg0 === 1) {
        guildMemberChangesForUpdateRequest = 3;
        throw arg1;
      } else if (arg0 === 2) {
        guildMemberChangesForUpdateRequest = 3;
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
          const aPIError = new outer1_0(outer1_2[19]).APIError(ok);
          const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
          if (null != firstFieldErrorMessage) {
            obj1 = outer1_0(outer1_2[17]);
            const result1 = obj1.showGenericGuildProfileUpdateFailureToast(outer1_9);
            outer1_3 = true;
          }
        }
        let tmp24 = outer1_2;
        if (outer1_2) {
          let ok2;
          if (outer1_8 != null) {
            ok2 = outer1_8.ok;
          }
          bannerOriginalMd5 = ok2;
          if (ok2 == null) {
            bannerOriginalMd5 = false;
          }
          tmp24 = bannerOriginalMd5;
        }
        c2 = tmp24;
      }
      let tmp54 = c2;
      if (!c2) {
        tmp54 = c3;
      }
      if (!tmp54) {
        obj6 = outer1_0(outer1_2[17]);
        const intl = outer1_0(outer1_2[20]).intl;
        const result2 = obj6.showGenericGuildProfileUpdateFailureToast(intl.string(outer1_0(outer1_2[20]).t.s35OuK));
      }
      if (outer1_2) {
        outer1_13.delay();
      }
      return outer1_2;
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