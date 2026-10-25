// discord_app/modules/user_settings/profiles/native/useGuildProfileEditForm.tsx
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserProfileStore from "../../../user_profile/UserProfileStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const IGNORE_GUILD_IDS = fn(8649).IGNORE_GUILD_IDS;
let FormStates = fn(1087).FormStates;
const HexagonCampaignPerk = fn(4996).HexagonCampaignPerk;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildProfileEditForm() {
      const cResult = require("c").c(37);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        class G {
          constructor() {
            return closure_14.getCurrentUser();
          }
        }
        cResult[0] = items;
        cResult[1] = G;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, G);
      _require = stateFromStores;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [pendingAvatarDecoration];
        class G {
          constructor() {
            return closure_14.getCurrentUser();
          }
        }
        items1[1] = pendingDisplayNameStyles;
        const fn = function b() {
          const selectedGuildId = pendingAvatarDecoration.selectedGuildId;
          const obj = {};
          const merged = Object.assign(pendingAvatarDecoration.getPendingChanges(selectedGuildId));
          obj.errors = pendingAvatarDecoration.getErrors(selectedGuildId);
          obj.selectedGuild = pendingDisplayNameStyles.getGuild(selectedGuildId);
          obj.formState = pendingAvatarDecoration.getFormState();
          return obj;
        };
        cResult[2] = items1;
        cResult[3] = fn;
        let tmp9 = fn;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = require("initialize");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp8, tmp9);
      let pendingAvatar = stateFromStoresObject.pendingAvatar;
      pendingNickname = stateFromStoresObject.pendingNickname;
      let pendingBanner = stateFromStoresObject.pendingBanner;
      let pendingBio = stateFromStoresObject.pendingBio;
      let pendingPronouns = stateFromStoresObject.pendingPronouns;
      let pendingThemeColors = stateFromStoresObject.pendingThemeColors;
      const selectedGuild = stateFromStoresObject.selectedGuild;
      pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
      const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
      const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
      const pendingNameplate = stateFromStoresObject.pendingNameplate;
      pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
      const tmpResult5 = require("initialize");
      let id;
      if (selectedGuild != null) {
        id = selectedGuild.id;
      }
      const guildAutomodProfileQuarantineErrors =
        require("AutomodQuarantineUtils").useGuildAutomodProfileQuarantineErrors(id);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [pendingAvatarDecoration];
        class G {
          constructor() {
            return closure_14.getCurrentUser();
          }
        }
        items2[1] = pendingProfileFrame;
        const fn2 = function _() {
          let isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING;
          if (!isSubmitting) {
            isSubmitting = pendingProfileFrame.isSubmitting;
          }
          return isSubmitting;
        };
        cResult[4] = items2;
        cResult[5] = fn2;
        let tmp15 = fn2;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[4];
        tmp15 = cResult[5];
      }
      const tmpResult6 = require("AutomodQuarantineUtils");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp14, tmp15);
      if (cResult[6] === guildAutomodProfileQuarantineErrors) {
        const _Symbol = Symbol;
        class G {
          constructor() {
            return closure_14.getCurrentUser();
          }
        }
        SortedGuildStore = tmp22;
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function z() {
            return function cleanup() {
              closure_1_13.cancel();
              closure_0(pendingNickname[16]).resetAllPending();
            };
          };
          const items3 = [tmp22];
          class G {
            constructor() {
              return closure_14.getCurrentUser();
            }
          }
          cResult[10] = fn3;
          cResult[11] = items3;
          let tmp24 = items3;
          let tmp23 = fn3;
        } else {
          tmp23 = cResult[10];
          tmp24 = cResult[11];
        }
        const effect = selectedGuild.useEffect(tmp23, tmp24);
        const tmp28 = pendingAvatar(tmp2[17])();
        UserStore = tmp28;
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const items4 = [pendingDisplayNameStyles];
          class G {
            constructor() {
              return closure_14.getCurrentUser();
            }
          }
          items4[1] = SortedGuildStore;
          cResult[12] = items4;
          let tmp29 = items4;
        } else {
          tmp29 = cResult[12];
        }
        if (cResult[13] !== tmp28) {
          class X {
            constructor() {
              obj = closure_12;
              guild = closure_12.getGuild(closure_14);
              id = undefined;
              if (guild != null) {
                id = guild.id;
              }
              if (null != id) {
                tmp3 = IGNORE_GUILD_IDS;
                if (!IGNORE_GUILD_IDS.has(guild.id)) {
                  return guild;
                }
              }
              return obj.getGuild(closure_13.getFlattenedGuildIds()[0]);
            }
          }
          cResult[13] = tmp28;
          class G {
            constructor() {
              return closure_14.getCurrentUser();
            }
          }
          cResult[14] = X;
        } else {
          class X {
            constructor() {
              obj = closure_12;
              guild = closure_12.getGuild(closure_14);
              id = undefined;
              if (guild != null) {
                id = guild.id;
              }
              if (null != id) {
                tmp3 = IGNORE_GUILD_IDS;
                if (!IGNORE_GUILD_IDS.has(guild.id)) {
                  return guild;
                }
              }
              return obj.getGuild(closure_13.getFlattenedGuildIds()[0]);
            }
          }
        }
        let tmp33 = stateFromStores1;
        const stateFromStores2 = tmp(tmp2[13]).useStateFromStores(tmp29, X);
        if (!stateFromStores1) {
          class X {
            constructor() {
              obj = closure_12;
              guild = closure_12.getGuild(closure_14);
              id = undefined;
              if (guild != null) {
                id = guild.id;
              }
              if (null != id) {
                tmp3 = IGNORE_GUILD_IDS;
                if (!IGNORE_GUILD_IDS.has(guild.id)) {
                  return guild;
                }
              }
              return obj.getGuild(closure_13.getFlattenedGuildIds()[0]);
            }
          }
          tmp33 = stateFromStoresObject.formState === FormStates.CLOSED;
        }
        FormStates = tmp33;
        if (cResult[15] === tmp33) {
          class X {
            constructor() {
              obj = closure_12;
              guild = closure_12.getGuild(closure_14);
              id = undefined;
              if (guild != null) {
                id = guild.id;
              }
              if (null != id) {
                tmp3 = IGNORE_GUILD_IDS;
                if (!IGNORE_GUILD_IDS.has(guild.id)) {
                  return guild;
                }
              }
              return obj.getGuild(closure_13.getFlattenedGuildIds()[0]);
            }
          }
        }
        _require = pendingThemeColors(function* () {
          if (pendingThemeColors === 2) {
            pendingThemeColors = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp5 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj = { value, done: true };
              return obj;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              pendingThemeColors = 2;
              if (0 === pendingPronouns) {
                if (arg0 === 1) {
                  pendingThemeColors = 3;
                  throw value;
                } else if (arg0 === 2) {
                  pendingThemeColors = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  pendingBio = tmp2;
                  pendingBanner = tmp3;
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
                  if (!constants) {
                    if (null != closure_0) {
                      const obj5 = {
                        pendingAvatar,
                        pendingNickname,
                        pendingAvatarDecoration,
                        pendingNameplate,
                        pendingDisplayNameStyles,
                      };
                      const guildMemberChangesForUpdateRequest = closure_0(
                        pendingNickname[18],
                      ).getGuildMemberChangesForUpdateRequest(obj5);
                      closure_131_0 = guildMemberChangesForUpdateRequest;
                      const obj21 = closure_0(pendingNickname[18]);
                      const obj7 = {
                        pendingBanner,
                        pendingBio,
                        pendingPronouns,
                        pendingThemeColors,
                        pendingProfileEffect,
                        pendingProfileFrame,
                      };
                      let id;
                      if (user != null) {
                        id = user.id;
                      }
                      profileChangesForUpdateRequest = closure_0(pendingNickname[18]).getProfileChangesForUpdateRequest(
                        obj7,
                        id,
                      );
                      let id1;
                      if (user != null) {
                        id1 = user.id;
                      }
                      let result = null != id1;
                      if (result) {
                        result = closure_0(pendingNickname[19]).hasHexagonCampaignDisplayNameFont(
                          guildMemberChangesForUpdateRequest.displayNameStyles,
                        );
                        const obj9 = closure_0(pendingNickname[19]);
                      }
                      if (result) {
                        const member = pendingNameplate.getMember(id1, tmp65.id);
                        let displayNameStyles;
                        if (member != null) {
                          displayNameStyles = member.displayNameStyles;
                        }
                        result = !closure_0(pendingNickname[19]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
                        const obj10 = closure_0(pendingNickname[19]);
                      }
                      closure_131_2 = result;
                      closure_131_3 = true;
                      closure_131_4 = false;
                      const _Object = Object;
                      if (Object.keys(guildMemberChangesForUpdateRequest).length > 0) {
                        let id2;
                        if (user != null) {
                          id2 = user.id;
                        }
                        pendingPronouns = 1;
                        pendingThemeColors = 1;
                        const obj8 = {
                          value: closure_0(pendingNickname[16]).saveGuildIdentityChanges(
                            id2,
                            guildMemberChangesForUpdateRequest,
                          ),
                          done: false,
                        };
                        return obj8;
                      } else {
                        const _Object2 = Object;
                        if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                          bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                          let id3;
                          closure_131_8 = pendingPronouns(profileChangesForUpdateRequest, pendingBanner);
                          if (user != null) {
                            id3 = user.id;
                          }
                          pendingPronouns = 2;
                          pendingThemeColors = 1;
                          const obj12 = {
                            value: closure_0(pendingNickname[26]).saveProfileChanges(
                              closure_131_8,
                              id3,
                              bannerOriginalMd5,
                            ),
                            done: false,
                          };
                          return obj12;
                        }
                      }
                      const obj23 = closure_0(pendingNickname[18]);
                    }
                  }
                  pendingThemeColors = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (1 === tmp6) {
                if (arg0 === 1) {
                  pendingThemeColors = 3;
                  throw value;
                } else if (arg0 === 2) {
                  pendingThemeColors = 3;
                  const obj14 = { value, done: true };
                  return obj14;
                } else {
                  closure_131_5 = value;
                  if (closure_131_5.ok) {
                    body2 = closure_131_5.body;
                    if (undefined !== pendingAvatar) {
                      const obj16 = {
                        isGuildProfile: true,
                        avatarHash: body2.avatar,
                        avatarId: closure_131_0.avatarId,
                        avatarAssetOrigin: null,
                      };
                      let assetOrigin;
                      if (pendingAvatar != null) {
                        assetOrigin = pendingAvatar.assetOrigin;
                      }
                      obj16.avatarAssetOrigin = assetOrigin;
                      const result1 = closure_0(pendingNickname[20]).trackUserAvatarUpdated(obj16);
                      const obj4 = closure_0(pendingNickname[20]);
                    }
                    if (closure_131_2) {
                      const obj17 = { perks: null, content: null, contentSurface: null };
                      const items = [constants2.DISPLAY_NAME_STYLE];
                      obj17.perks = items;
                      obj17.content = closure_0(pendingNickname[22]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
                      obj17.contentSurface = closure_0(pendingNickname[21]).HexagonCampaignContentSurface.GUILD_PROFILE;
                      const result2 = closure_0(pendingNickname[21]).trackHexagonCampaignPerkAction(obj17);
                      const obj6 = closure_0(pendingNickname[21]);
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
                      const aPIError = new closure_0(pendingNickname[24]).APIError(closure_131_5);
                      const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                      closure_0 = firstFieldErrorMessage;
                      if (firstFieldErrorMessage == null) {
                        const intl = closure_0(pendingNickname[25]).intl;
                        closure_0 = intl.string(closure_0(pendingNickname[25]).t.s35OuK);
                      }
                      const result3 = closure_0(pendingNickname[23]).showGenericGuildProfileUpdateFailureToast(
                        closure_0,
                      );
                      closure_131_4 = true;
                      const obj19 = closure_0(pendingNickname[23]);
                    }
                  }
                  let tmp61 = closure_131_3;
                  if (closure_131_3) {
                    let ok;
                    if (closure_131_5 != null) {
                      ok = closure_131_5.ok;
                    }
                    pendingAvatar = ok;
                    if (ok == null) {
                      pendingAvatar = false;
                    }
                    tmp61 = pendingAvatar;
                  }
                  closure_131_3 = tmp61;
                }
              } else if (arg0 === 1) {
                pendingThemeColors = 3;
                throw value;
              } else if (arg0 === 2) {
                pendingThemeColors = 3;
                const obj18 = { value, done: true };
                return obj18;
              } else {
                closure_131_9 = value;
                let ok1;
                if (closure_131_9 != null) {
                  ok1 = closure_131_9.ok;
                }
                if (!ok1) {
                  const aPIError1 = new closure_0(pendingNickname[24]).APIError(closure_131_9);
                  firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                  if (null != firstFieldErrorMessage2) {
                    const result4 = closure_0(pendingNickname[23]).showGenericGuildProfileUpdateFailureToast(
                      firstFieldErrorMessage2,
                    );
                    closure_131_4 = true;
                    const obj2 = closure_0(pendingNickname[23]);
                  }
                }
                let tmp24 = closure_131_3;
                if (closure_131_3) {
                  let ok2;
                  if (closure_131_9 != null) {
                    ok2 = closure_131_9.ok;
                  }
                  pendingNickname = ok2;
                  if (ok2 == null) {
                    pendingNickname = false;
                  }
                  tmp24 = pendingNickname;
                }
                closure_131_3 = tmp24;
              }
              let tmp82 = closure_131_3;
              if (!closure_131_3) {
                tmp82 = closure_131_4;
              }
              if (!tmp82) {
                const intl2 = closure_0(pendingNickname[25]).intl;
                const result5 = closure_0(pendingNickname[23]).showGenericGuildProfileUpdateFailureToast(
                  intl2.string(closure_0(pendingNickname[25]).t.s35OuK),
                );
                const obj11 = closure_0(pendingNickname[23]);
              }
              if (closure_131_3) {
                tmp22.delay();
              }
              pendingThemeColors = 3;
              const obj20 = { value: closure_131_3, done: true };
              return obj20;
            } catch (tmp113) {
              pendingThemeColors = tmp;
              throw tmp113;
            }
          }
        });
        cResult[15] = tmp33;
        cResult[16] = pendingAvatar;
        cResult[17] = pendingAvatarDecoration;
        cResult[18] = pendingBanner;
        cResult[19] = pendingBio;
        cResult[20] = pendingDisplayNameStyles;
        cResult[21] = pendingNameplate;
        cResult[22] = pendingNickname;
        cResult[23] = pendingProfileEffect;
        cResult[24] = pendingProfileFrame;
        cResult[25] = pendingPronouns;
        cResult[26] = pendingThemeColors;
        if (selectedGuild != null) {
          class X {
            constructor() {
              obj = closure_12;
              guild = closure_12.getGuild(closure_14);
              id = undefined;
              if (guild != null) {
                id = guild.id;
              }
              if (null != id) {
                tmp3 = IGNORE_GUILD_IDS;
                if (!IGNORE_GUILD_IDS.has(guild.id)) {
                  return guild;
                }
              }
              return obj.getGuild(closure_13.getFlattenedGuildIds()[0]);
            }
          }
        }
        function t12() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[27] = undefined;
        cResult[28] = stateFromStores;
        cResult[29] = t12;
        const tmpResult8 = tmp(tmp2[13]);
      }
      let merged = Object.assign(guildAutomodProfileQuarantineErrors);
      const merged1 = Object.assign(stateFromStoresObject.errors);
      cResult[6] = guildAutomodProfileQuarantineErrors;
      cResult[7] = stateFromStoresObject.errors;
      cResult[8] = {};
      let obj2 = {};
      const tmpResult7 = require("initialize");
    }
  : function useGuildProfileEditForm() {
      let items = [currentUser];
      stateFromStores = stateFromStores(pendingNickname[13]).useStateFromStores(items, () =>
        currentUser.getCurrentUser(),
      );
      let obj = stateFromStores(pendingNickname[13]);
      const items1 = [pendingAvatarDecoration, pendingDisplayNameStyles];
      const stateFromStoresObject = stateFromStores(pendingNickname[13]).useStateFromStoresObject(items1, () => {
        const selectedGuildId = pendingAvatarDecoration.selectedGuildId;
        const obj = {};
        const merged = Object.assign(pendingAvatarDecoration.getPendingChanges(selectedGuildId));
        obj.errors = pendingAvatarDecoration.getErrors(selectedGuildId);
        obj.selectedGuild = pendingDisplayNameStyles.getGuild(selectedGuildId);
        obj.formState = pendingAvatarDecoration.getFormState();
        return obj;
      });
      const pendingAvatar = stateFromStoresObject.pendingAvatar;
      pendingNickname = stateFromStoresObject.pendingNickname;
      const pendingBanner = stateFromStoresObject.pendingBanner;
      const pendingBio = stateFromStoresObject.pendingBio;
      const pendingPronouns = stateFromStoresObject.pendingPronouns;
      const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
      let selectedGuild = stateFromStoresObject.selectedGuild;
      pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
      const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
      const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
      const pendingNameplate = stateFromStoresObject.pendingNameplate;
      pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
      let obj2 = stateFromStores(pendingNickname[13]);
      const tmp4 = pendingAvatarDecoration;
      const tmp5 = pendingDisplayNameStyles;
      let id;
      if (selectedGuild != null) {
        id = selectedGuild.id;
      }
      const guildAutomodProfileQuarantineErrors = stateFromStores(
        pendingNickname[14],
      ).useGuildAutomodProfileQuarantineErrors(id);
      let obj3 = stateFromStores(pendingNickname[14]);
      const items2 = [tmp4, pendingProfileFrame];
      const stateFromStores1 = stateFromStores(pendingNickname[13]).useStateFromStores(items2, () => {
        let isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING;
        if (!isSubmitting) {
          isSubmitting = pendingProfileFrame.isSubmitting;
        }
        return isSubmitting;
      });
      let merged = Object.assign(guildAutomodProfileQuarantineErrors);
      const merged1 = Object.assign(stateFromStoresObject.errors);
      const memo = selectedGuild.useMemo(() => {
        const delayedCall = new stateFromStores(pendingNickname[15]).DelayedCall(
          200,
          stateFromStores(pendingNickname[16]).resetAllPending,
        );
        return delayedCall;
      }, []);
      const items3 = [memo];
      const effect = selectedGuild.useEffect(
        () =>
          function cleanup() {
            memo.cancel();
            stateFromStores(pendingNickname[16]).resetAllPending();
          },
        items3,
      );
      currentUser = pendingAvatar(tmp2[17])();
      let obj4 = {};
      let obj6 = selectedGuild;
      const tmpResult = stateFromStores(pendingNickname[13]);
      const items4 = [tmp5, memo];
      let tmp15 = stateFromStores1;
      const stateFromStores2 = stateFromStores(pendingNickname[13]).useStateFromStores(items4, () => {
        guild = GuildStore.getGuild(closure_14);
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
      FormStates = tmp15;
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
      const tmpResult2 = stateFromStores(pendingNickname[13]);
      if (selectedGuild != null) {
        id1 = selectedGuild.id;
      }
      let obj5 = {
        handleSubmit: obj6.useCallback(
          pendingThemeColors(function* () {
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
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c6 = 2;
                if (0 === v2) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_4 = tmp2;
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
                        const obj5 = {
                          pendingAvatar,
                          pendingNickname,
                          pendingAvatarDecoration,
                          pendingNameplate,
                          pendingDisplayNameStyles,
                        };
                        const guildMemberChangesForUpdateRequest =
                          stateFromStores(11183).getGuildMemberChangesForUpdateRequest(obj5);
                        closure_131_0 = guildMemberChangesForUpdateRequest;
                        const obj21 = stateFromStores(11183);
                        const obj7 = {
                          pendingBanner,
                          pendingBio,
                          pendingPronouns,
                          pendingThemeColors,
                          pendingProfileEffect,
                          pendingProfileFrame,
                        };
                        let id;
                        if (selectedGuild != null) {
                          id = selectedGuild.id;
                        }
                        profileChangesForUpdateRequest = stateFromStores(11183).getProfileChangesForUpdateRequest(
                          obj7,
                          id,
                        );
                        let id1;
                        if (selectedGuild != null) {
                          id1 = selectedGuild.id;
                        }
                        let result = null != id1;
                        if (result) {
                          result = stateFromStores(4998).hasHexagonCampaignDisplayNameFont(
                            guildMemberChangesForUpdateRequest.displayNameStyles,
                          );
                          const obj9 = stateFromStores(4998);
                        }
                        if (result) {
                          member = member.getMember(id1, tmp65.id);
                          let displayNameStyles;
                          if (member != null) {
                            displayNameStyles = member.displayNameStyles;
                          }
                          result = !stateFromStores(4998).hasHexagonCampaignDisplayNameFont(displayNameStyles);
                          const obj10 = stateFromStores(4998);
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
                          v2 = 1;
                          c6 = 1;
                          const obj8 = {
                            value: stateFromStores(11187).saveGuildIdentityChanges(
                              id2,
                              guildMemberChangesForUpdateRequest,
                            ),
                            done: false,
                          };
                          return obj8;
                        } else {
                          const _Object2 = Object;
                          if (Object.keys(profileChangesForUpdateRequest).length > 0) {
                            bannerOriginalMd5 = profileChangesForUpdateRequest.bannerOriginalMd5;
                            let id3;
                            closure_131_8 = v2(profileChangesForUpdateRequest, closure_4);
                            if (closure_132_7 != null) {
                              id3 = closure_132_7.id;
                            }
                            v2 = 2;
                            c6 = 1;
                            const obj12 = {
                              value: stateFromStores(8656).saveProfileChanges(closure_131_8, id3, bannerOriginalMd5),
                              done: false,
                            };
                            return obj12;
                          }
                        }
                        const obj23 = stateFromStores(11183);
                      }
                    }
                    c6 = 3;
                    return { value: "IconComponent", done: null };
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
                        const obj16 = {
                          isGuildProfile: true,
                          avatarHash: body2.avatar,
                          avatarId: closure_131_0.avatarId,
                          avatarAssetOrigin: null,
                        };
                        let assetOrigin;
                        if (closure_132_1 != null) {
                          assetOrigin = closure_132_1.assetOrigin;
                        }
                        obj16.avatarAssetOrigin = assetOrigin;
                        const result1 = stateFromStores(7085).trackUserAvatarUpdated(obj16);
                        const obj4 = stateFromStores(7085);
                      }
                      if (closure_131_2) {
                        const obj17 = { perks: null, content: null, contentSurface: null };
                        const items = [constants.DISPLAY_NAME_STYLE];
                        obj17.perks = items;
                        obj17.content = stateFromStores(6713).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
                        obj17.contentSurface = stateFromStores(15857).HexagonCampaignContentSurface.GUILD_PROFILE;
                        const result2 = stateFromStores(15857).trackHexagonCampaignPerkAction(obj17);
                        const obj6 = stateFromStores(15857);
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
                        const aPIError = new stateFromStores(6374).APIError(closure_131_5);
                        const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("avatar");
                        stateFromStores = firstFieldErrorMessage;
                        if (firstFieldErrorMessage == null) {
                          const intl = stateFromStores(1128).intl;
                          stateFromStores = intl.string(stateFromStores(1128).t.s35OuK);
                        }
                        const result3 =
                          stateFromStores(15858).showGenericGuildProfileUpdateFailureToast(stateFromStores);
                        closure_131_4 = true;
                        const obj19 = stateFromStores(15858);
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
                    const aPIError1 = new stateFromStores(6374).APIError(closure_131_9);
                    firstFieldErrorMessage2 = aPIError1.getFirstFieldErrorMessage("banner");
                    if (null != firstFieldErrorMessage2) {
                      const result4 =
                        stateFromStores(15858).showGenericGuildProfileUpdateFailureToast(firstFieldErrorMessage2);
                      closure_131_4 = true;
                      const obj2 = stateFromStores(15858);
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
                  const intl2 = stateFromStores(1128).intl;
                  const result5 = stateFromStores(15858).showGenericGuildProfileUpdateFailureToast(
                    intl2.string(stateFromStores(1128).t.s35OuK),
                  );
                  const obj11 = stateFromStores(15858);
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
          }),
          items5,
        ),
        isDisabled: tmp15,
        isSubmitting: stateFromStores1,
        resetPending: stateFromStores(pendingNickname[16]).resetAllPending,
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
