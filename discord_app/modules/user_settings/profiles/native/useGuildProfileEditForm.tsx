// discord_app/modules/user_settings/profiles/native/useGuildProfileEditForm.tsx
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserProfileStore from "../../../user_profile/UserProfileStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
const IGNORE_GUILD_IDS = fn(8160).IGNORE_GUILD_IDS;
const FormStates = fn(1074).FormStates;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

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
  const obj2 = stateFromStores(pendingNickname[9]);
  const tmp4 = selectedGuild;
  const tmp5 = pendingProfileFrame;
  let id;
  if (selectedGuild != null) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = stateFromStores(
    pendingNickname[10],
  ).useGuildAutomodProfileQuarantineErrors(id);
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
      pendingAvatar(573).wait(stateFromStores(9210).resetAllPending);
    });
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = pendingThemeColors.useEffect(
    () => () => {
      memo.cancel();
      pendingAvatar(pendingNickname[12]).wait(stateFromStores(pendingNickname[13]).resetAllPending);
    },
    items3,
  );
  closure_14 = pendingAvatar(tmp2[14])();
  tmpResult = tmp(tmp2[9]);
  const items4 = [tmp5, pendingNameplate];
  let tmp15 = stateFromStores1;
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(closure_14);
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      if (!IGNORE_GUILD_IDS.has(guild.id)) {
        return guild;
      }
    }
    return GuildStore.getGuild(SortedGuildStore.getFlattenedGuildIds()[0]);
  });
  if (!stateFromStores1) {
    tmp15 = stateFromStoresObject.formState === memo.CLOSED;
  }
  closure_15 = tmp15;
  const items5 = [
    tmp15,
    stateFromStores,
    pendingAvatar,
    pendingNickname,
    pendingAvatarDecoration,
    pendingNameplate,
    pendingDisplayNameStyles,
    pendingBanner,
    pendingBio,
    pendingPronouns,
    pendingThemeColors,
    pendingProfileEffect,
    pendingProfileFrame,
    ,
  ];
  let id1;
  let obj3 = stateFromStores(pendingNickname[10]);
  let obj6 = pendingThemeColors;
  if (selectedGuild != null) {
    id1 = selectedGuild.id;
  }
  obj = {
    handleSubmit: obj6.useCallback(
      pendingPronouns(function* () {
        closure_3 = tmp2;
        if (!closure_15) {
          if (null != stateFromStores) {
            let obj1 = {
              pendingAvatar,
              pendingNickname,
              pendingAvatarDecoration,
              pendingNameplate,
              pendingDisplayNameStyles,
            };
            const guildMemberChangesForUpdateRequest = stateFromStores(tmp3[15]).getGuildMemberChangesForUpdateRequest(
              obj1,
            );
            closure_130_0 = guildMemberChangesForUpdateRequest;
            stateFromStores(tmp3[15]);
            let id;
            if (selectedGuild != null) {
              id = selectedGuild.id;
            }
            const profileChangesForUpdateRequest = stateFromStores(tmp3[15]).getProfileChangesForUpdateRequest(
              {
                pendingBanner,
                pendingBio,
                pendingPronouns,
                pendingThemeColors,
                pendingProfileEffect,
                pendingProfileFrame,
              },
              id,
            );
            closure_130_2 = true;
            closure_130_3 = false;
            const _Object = Object;
            if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
              let id1;
              if (selectedGuild != null) {
                id1 = selectedGuild.id;
              }
              const v2 = 1;
              c5 = 1;
              let obj3 = {
                value: stateFromStores(tmp3[13]).saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest),
                done: false,
              };
              return obj3;
            }
            stateFromStores(tmp3[15]);
          }
        }
        yield "HermesInternal";
        if (1 === tmp6) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_130_4 = value;
            if (closure_130_4.ok) {
              const body2 = closure_130_4.body;
              if (undefined !== closure_131_1) {
                obj3 = stateFromStores(tmp3[16]);
                const obj5 = {
                  isGuildProfile: true,
                  avatarHash: body2.avatar,
                  avatarId: closure_130_0.avatarId,
                  avatarAssetOrigin: null,
                };
                let assetOrigin;
                if (closure_131_1 != null) {
                  assetOrigin = closure_131_1.assetOrigin;
                }
                obj5.avatarAssetOrigin = assetOrigin;
                const result = obj3.trackUserAvatarUpdated(obj5);
              }
            } else {
              let avatar;
              if (closure_130_4 != null) {
                const body = closure_130_4.body;
                if (body != null) {
                  avatar = body.avatar;
                }
              }
              if (null != avatar) {
                const result1 = stateFromStores(tmp3[17]).showGenericGuildProfileUpdateFailureToast(
                  closure_130_4.body.avatar,
                );
                closure_130_3 = true;
                stateFromStores(tmp3[17]);
              }
            }
            let tmp42 = closure_130_2;
            if (closure_130_2) {
              let ok;
              if (closure_130_4 != null) {
                ok = closure_130_4.ok;
              }
              stateFromStores = ok;
              if (ok == null) {
                stateFromStores = false;
              }
              tmp42 = stateFromStores;
            }
            closure_130_2 = tmp42;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_8 = value;
          let ok1;
          if (closure_130_8 != null) {
            ok1 = closure_130_8.ok;
          }
          if (!ok1) {
            const aPIError = new stateFromStores(tmp3[19]).APIError(closure_130_8);
            const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
            if (null != firstFieldErrorMessage) {
              obj1 = stateFromStores(tmp3[17]);
              const result2 = obj1.showGenericGuildProfileUpdateFailureToast(firstFieldErrorMessage);
              closure_130_3 = true;
            }
          }
          let tmp24 = closure_130_2;
          if (closure_130_2) {
            let ok2;
            if (closure_130_8 != null) {
              ok2 = closure_130_8.ok;
            }
            c1 = ok2;
            if (ok2 == null) {
              c1 = false;
            }
            tmp24 = c1;
          }
          closure_130_2 = tmp24;
        }
        let tmp54 = closure_130_2;
        if (!closure_130_2) {
          tmp54 = closure_130_3;
        }
        if (!tmp54) {
          obj6 = stateFromStores(tmp3[17]);
          const intl = stateFromStores(tmp3[20]).intl;
          const result3 = obj6.showGenericGuildProfileUpdateFailureToast(
            intl.string(stateFromStores(tmp3[20]).t.s35OuK),
          );
        }
        if (closure_130_2) {
          closure_131_13.delay();
        }
        return closure_130_2;
      }),
      items5,
    ),
    isDisabled: tmp15,
    isSubmitting: stateFromStores1,
    resetPending: tmp(tmp2[13]).resetAllPending,
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
}
export const RESET_DELAY_MS = 200;
