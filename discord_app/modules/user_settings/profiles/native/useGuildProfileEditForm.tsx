// === Module 16513: useGuildProfileEditForm ===

// Module 16513 (useGuildProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import SortedGuildStore from "SortedGuildStore" /* 6766 */;
import UserStore from "UserStore" /* 1384 */;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
const IGNORE_GUILD_IDS = fn(8723).IGNORE_GUILD_IDS;
let FormStates = fn(1072).FormStates;
const HexagonCampaignPerk = fn(5034).HexagonCampaignPerk;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default function useGuildProfileEditForm() {
  let items = [memo];
  stateFromStores = stateFromStores(pendingNickname[11]).useStateFromStores(items, () => memo.getCurrentUser());
  let obj = stateFromStores(pendingNickname[11]);
  const items1 = [selectedGuild, pendingNameplate];
  const stateFromStoresObject = stateFromStores(pendingNickname[11]).useStateFromStoresObject(items1, () => {
    const selectedGuildId = selectedGuild.selectedGuildId;
    const obj = {};
    const merged = Object.assign(selectedGuild.getPendingChanges(selectedGuildId));
    obj.errors = selectedGuild.getErrors(selectedGuildId);
    obj.selectedGuild = pendingNameplate.getGuild(selectedGuildId);
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
  const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  pendingNameplate = stateFromStoresObject.pendingNameplate;
  const pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
  let obj2 = stateFromStores(pendingNickname[11]);
  const tmp4 = selectedGuild;
  const tmp5 = pendingNameplate;
  let id;
  if (selectedGuild != null) {
    id = selectedGuild.id;
  }
  const guildAutomodProfileQuarantineErrors = stateFromStores(pendingNickname[12]).useGuildAutomodProfileQuarantineErrors(id);
  let obj3 = stateFromStores(pendingNickname[12]);
  const items2 = [tmp4, pendingProfileEffect];
  const stateFromStores1 = stateFromStores(pendingNickname[11]).useStateFromStores(items2, () => {
    let isSubmitting = selectedGuild.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = pendingProfileEffect.isSubmitting;
    }
    return isSubmitting;
  });
  let merged = Object.assign(guildAutomodProfileQuarantineErrors);
  const merged1 = Object.assign(stateFromStoresObject.errors);
  memo = pendingThemeColors.useMemo(() => {
    const delayedCall = new stateFromStores(pendingNickname[13]).DelayedCall(200, stateFromStores(pendingNickname[14]).resetAllPending);
    return delayedCall;
  }, []);
  const items3 = [memo];
  const effect = pendingThemeColors.useEffect(() => function cleanup() {
    memo.cancel();
    stateFromStores(pendingNickname[14]).resetAllPending();
  }, items3);
  FormStates = pendingAvatar(tmp2[15])();
  let obj4 = {};
  let obj6 = pendingThemeColors;
  const tmpResult = stateFromStores(pendingNickname[11]);
  const items4 = [tmp5, pendingDisplayNameStyles];
  let tmp15 = stateFromStores1;
  const stateFromStores2 = stateFromStores(pendingNickname[11]).useStateFromStores(items4, () => {
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
    tmp15 = stateFromStoresObject.formState === FormStates.CLOSED;
  }
  closure_15 = tmp15;
  const items5 = [tmp15, stateFromStores, pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles, pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, , ];
  let id1;
  const tmpResult2 = stateFromStores(pendingNickname[11]);
  if (selectedGuild != null) {
    id1 = selectedGuild.id;
  }
  let obj5 = {
    handleSubmit: obj6.useCallback(pendingPronouns(function*() {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp3;
              closure_131_0 = undefined;
              let profileChangesForUpdateRequest;
              closure_131_2 = undefined;
              closure_131_3 = undefined;
              closure_131_4 = undefined;
              closure_131_5 = undefined;
              let body2;
              let bannerOriginalMd5;
              closure_131_8 = undefined;
              closure_131_9 = undefined;
              let firstFieldErrorMessage2;
              if (!closure_15) {
                if (null != stateFromStores) {
                  const obj5 = { pendingAvatar, pendingNickname, pendingAvatarDecoration, pendingNameplate, pendingDisplayNameStyles };
                  const guildMemberChangesForUpdateRequest = stateFromStores(11481).getGuildMemberChangesForUpdateRequest(obj5);
                  closure_131_0 = guildMemberChangesForUpdateRequest;
                  const obj21 = stateFromStores(11481);
                  const obj7 = { pendingBanner, pendingBio, pendingPronouns, pendingThemeColors, pendingProfileEffect, pendingProfileFrame };
                  let id;
                  if (selectedGuild != null) {
                    id = selectedGuild.id;
                  }
                  profileChangesForUpdateRequest = stateFromStores(11481).getProfileChangesForUpdateRequest(obj7, id);
                  let id1;
                  if (selectedGuild != null) {
                    id1 = selectedGuild.id;
                  }
                  let result = null != id1;
                  if (result) {
                    result = stateFromStores(5036).hasHexagonCampaignDisplayNameFont(guildMemberChangesForUpdateRequest.displayNameStyles);
                    const obj9 = stateFromStores(5036);
                  }
                  if (result) {
                    member = member.getMember(id1, tmp65.id);
                    let displayNameStyles;
                    if (member != null) {
                      displayNameStyles = member.displayNameStyles;
                    }
                    result = !stateFromStores(5036).hasHexagonCampaignDisplayNameFont(displayNameStyles);
                    const obj10 = stateFromStores(5036);
                  }
                  closure_131_2 = result;
                  closure_131_3 = true;
                  closure_131_4 = false;
                  const _Object = Object;
                  if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
                    let id2;
                    if (selectedGuild != null) {
                      id2 = selectedGuild.id;
                    }
                    c5 = 1;
                    c6 = 1;
                    const obj8 = { value: stateFromStores(11485).saveGuildIdentityChanges(id2, guildMemberChangesForUpdateRequest), done: false };
                    return obj8;
                  } else {
                    const _Object2 = Object;
                    if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                      bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                      let id3;
                      closure_131_8 = tmp2(profileChangesForUpdateRequest, closure_3);
                      if (closure_132_7 != null) {
                        id3 = closure_132_7.id;
                      }
                      c5 = 2;
                      c6 = 1;
                      const obj12 = { value: stateFromStores(8730).saveProfileChanges(closure_131_8, id3, bannerOriginalMd5), done: false };
                      return obj12;
                    }
                  }
                  const obj23 = stateFromStores(11481);
                }
              }
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              closure_131_5 = value;
              if (closure_131_5.ok) {
                body2 = closure_131_5.body;
                if (undefined !== closure_132_1) {
                  const obj16 = { isGuildProfile: true, avatarHash: body2.avatar, avatarId: closure_131_0.avatarId, avatarAssetOrigin: null };
                  let assetOrigin;
                  if (closure_132_1 != null) {
                    assetOrigin = closure_132_1.assetOrigin;
                  }
                  obj16.avatarAssetOrigin = assetOrigin;
                  const result1 = stateFromStores(7153).trackUserAvatarUpdated(obj16);
                  const obj4 = stateFromStores(7153);
                }
                if (closure_131_2) {
                  const obj17 = { perks: null, content: null, contentSurface: null };
                  const items = [constants.DISPLAY_NAME_STYLE];
                  obj17.perks = items;
                  obj17.content = stateFromStores(6778).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
                  obj17.contentSurface = stateFromStores(16411).HexagonCampaignContentSurface.GUILD_PROFILE;
                  const result2 = stateFromStores(16411).trackHexagonCampaignPerkAction(obj17);
                  const obj6 = stateFromStores(16411);
                }
              } else {
                let avatar;
                if (closure_131_5 != null) {
                  const body = closure_131_5.body;
                  if (body != null) {
                    avatar = body.avatar;
                  }
                }
                if (null != avatar) {
                  const aPIError = new stateFromStores(6440).APIError(closure_131_5);
                  const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                  stateFromStores = firstFieldErrorMessage;
                  if (firstFieldErrorMessage == null) {
                    const intl = stateFromStores(1114).intl;
                    stateFromStores = intl.string(stateFromStores(1114).t.s35OuK);
                  }
                  const result3 = stateFromStores(16412).showGenericGuildProfileUpdateFailureToast(stateFromStores);
                  closure_131_4 = true;
                  const obj19 = stateFromStores(16412);
                }
              }
              let tmp61 = closure_131_3;
              if (closure_131_3) {
                let ok;
                if (closure_131_5 != null) {
                  ok = closure_131_5.ok;
                }
                c1 = ok;
                if (ok == null) {
                  c1 = false;
                }
                tmp61 = c1;
              }
              closure_131_3 = tmp61;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj18 = { value, done: true };
            return obj18;
          } else {
            closure_131_9 = value;
            let ok1;
            if (closure_131_9 != null) {
              ok1 = closure_131_9.ok;
            }
            if (!ok1) {
              const aPIError1 = new stateFromStores(6440).APIError(closure_131_9);
              firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage2) {
                const result4 = stateFromStores(16412).showGenericGuildProfileUpdateFailureToast(firstFieldErrorMessage2);
                closure_131_4 = true;
                const obj2 = stateFromStores(16412);
              }
            }
            let tmp24 = closure_131_3;
            if (closure_131_3) {
              let ok2;
              if (closure_131_9 != null) {
                ok2 = closure_131_9.ok;
              }
              dependencyMap = ok2;
              if (ok2 == null) {
                dependencyMap = false;
              }
              tmp24 = dependencyMap;
            }
            closure_131_3 = tmp24;
          }
          let tmp82 = closure_131_3;
          if (!closure_131_3) {
            tmp82 = closure_131_4;
          }
          if (!tmp82) {
            const intl2 = stateFromStores(1114).intl;
            const result5 = stateFromStores(16412).showGenericGuildProfileUpdateFailureToast(intl2.string(stateFromStores(1114).t.s35OuK));
            const obj11 = stateFromStores(16412);
          }
          if (closure_131_3) {
            closure_132_13.delay();
          }
          c6 = 3;
          const obj20 = { value: closure_131_3, done: true };
          return obj20;
        } catch (tmp113) {
          c6 = tmp;
          throw tmp113;
        }
      }
    }), items5),
    isDisabled: tmp15,
    isSubmitting: stateFromStores1,
    resetPending: stateFromStores(pendingNickname[14]).resetAllPending
  };
  items5[13] = id1;
  items5[14] = memo;
  const merged2 = Object.assign(stateFromStoresObject);
  if (selectedGuild == null) {
    selectedGuild = stateFromStores2;
  }
  obj5.guild = selectedGuild;
  obj5.errors = obj4;
  return obj5;
};
export const RESET_DELAY_MS = 200;