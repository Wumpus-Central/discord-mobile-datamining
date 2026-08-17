// discord_app/modules/user_settings/profiles/native/useGuildProfileEditForm.tsx
import closure_4 from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import closure_7 from "../../../user_profile/UserProfileSettingsStore.tsx";
import { IGNORE_GUILD_IDS } from "../../../user_profile/UserProfileSettingsStore.tsx";
import closure_9 from "../../../user_profile/UserProfileStore.tsx";
import closure_10 from "../../../../stores/GuildStore.tsx";
import closure_11 from "../../../../stores/SortedGuildStore.tsx";
import closure_12 from "../../../../stores/UserStore.tsx";
import { FormStates } from "../../../../Constants.tsx";

const require = arg1;
let closure_3 = ["bannerOriginalMd5"];
let result = require("set").fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

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
    closure_1_1(closure_1_2[12]).wait(closure_1_0(closure_1_2[13]).resetAllPending);
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
          if (null != closure_1_0) {
            let guildMemberChangesForUpdateRequest = closure_1_0;
            guildMemberChangesForUpdateRequest = dependencyMap;
            obj1 = { pendingAvatar: null, pendingNickname: null, pendingAvatarDecoration: null, pendingNameplate: null, pendingDisplayNameStyles: null };
            guildMemberChangesForUpdateRequest = closure_1_1;
            obj1[0] = closure_1_1;
            guildMemberChangesForUpdateRequest = dependencyMap;
            obj1[1] = dependencyMap;
            guildMemberChangesForUpdateRequest = closure_1_8;
            obj1[2] = closure_1_8;
            guildMemberChangesForUpdateRequest = closure_1_11;
            obj1[3] = closure_1_11;
            guildMemberChangesForUpdateRequest = closure_1_12;
            obj1[4] = closure_1_12;
            guildMemberChangesForUpdateRequest = closure_1_0(10397).getGuildMemberChangesForUpdateRequest(obj1);
            let avatarId = guildMemberChangesForUpdateRequest;
            guildMemberChangesForUpdateRequest = closure_1_0;
            guildMemberChangesForUpdateRequest = dependencyMap;
            const obj16 = closure_1_0(10397);
            const obj2 = { pendingBanner: null, pendingBio: null, pendingPronouns: null, pendingThemeColors: null, pendingProfileEffect: null, pendingProfileFrame: null };
            guildMemberChangesForUpdateRequest = c3;
            obj2[0] = c3;
            guildMemberChangesForUpdateRequest = v0;
            obj2[1] = v0;
            guildMemberChangesForUpdateRequest = body;
            obj2[2] = body;
            guildMemberChangesForUpdateRequest = closure_1_6;
            obj2[3] = closure_1_6;
            guildMemberChangesForUpdateRequest = closure_1_9;
            obj2[4] = closure_1_9;
            guildMemberChangesForUpdateRequest = closure_1_10;
            obj2[5] = closure_1_10;
            let id;
            if (closure_1_7 != null) {
              id = closure_1_7.id;
            }
            let bannerOriginalMd5 = closure_1_0(10397).getProfileChangesForUpdateRequest(obj2, id);
            dependencyMap = true;
            c3 = false;
            const _Object = Object;
            if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
              let id1;
              if (closure_1_7 != null) {
                id1 = closure_1_7.id;
              }
              v0 = 1;
              guildMemberChangesForUpdateRequest = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = closure_1_0(9539).saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest);
              return obj3;
            }
            const obj18 = closure_1_0(10397);
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
              body = v0.body;
              if (undefined !== closure_1_1) {
                obj3 = closure_1_0(8621);
                const obj5 = { isGuildProfile: true, avatarHash: null, avatarId: null, avatarAssetOrigin: null };
                obj5[1] = guildMemberChangesForUpdateRequest.avatar;
                obj5[2] = avatarId.avatarId;
                let assetOrigin;
                if (closure_1_1 != null) {
                  assetOrigin = closure_1_1.assetOrigin;
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
                guildMemberChangesForUpdateRequest = v0;
                guildMemberChangesForUpdateRequest = closure_1_0(14019).showGenericGuildProfileUpdateFailureToast(v0.body.avatar);
                c3 = true;
                const obj15 = closure_1_0(14019);
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
            const aPIError = new closure_1_0(4273).APIError(ok);
            const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
            if (null != firstFieldErrorMessage) {
              obj1 = closure_1_0(14019);
              const result1 = obj1.showGenericGuildProfileUpdateFailureToast(closure_1_9);
              c3 = true;
            }
          }
          let tmp24 = dependencyMap;
          if (dependencyMap) {
            let ok2;
            if (closure_1_8 != null) {
              ok2 = closure_1_8.ok;
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
          obj6 = closure_1_0(14019);
          const intl = closure_1_0(1236).intl;
          const result2 = obj6.showGenericGuildProfileUpdateFailureToast(intl.string(closure_1_0(1236).t.s35OuK));
        }
        if (dependencyMap) {
          closure_1_13.delay();
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