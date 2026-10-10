// discord_app/modules/user_settings/profiles/native/useGuildProfileEditForm.tsx
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserProfileStore from "../../../user_profile/UserProfileStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
let closure_4 = ["bannerOriginalMd5"];
const IGNORE_GUILD_IDS = fn(8284).IGNORE_GUILD_IDS;
let FormStates = fn(1085).FormStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useGuildProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildProfileEditForm() {
      const cResult = require("c").c(37);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        class G {
          constructor() {
            return closure_13.getCurrentUser();
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
            return closure_13.getCurrentUser();
          }
        }
        items1[1] = pendingNameplate;
        class F {
          constructor() {
            selectedGuildId = pendingAvatarDecoration.selectedGuildId;
            obj = {};
            merged = Object.assign(pendingAvatarDecoration.getPendingChanges(selectedGuildId));
            obj.errors = pendingAvatarDecoration.getErrors(selectedGuildId);
            obj.selectedGuild = pendingNameplate.getGuild(selectedGuildId);
            obj.formState = pendingAvatarDecoration.getFormState();
            return obj;
          }
        }
        cResult[2] = items1;
        cResult[3] = F;
        let tmp9 = F;
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
      const pendingThemeColors = stateFromStoresObject.pendingThemeColors;
      const selectedGuild = stateFromStoresObject.selectedGuild;
      pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
      const pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
      const pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
      pendingNameplate = stateFromStoresObject.pendingNameplate;
      const pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
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
            return closure_13.getCurrentUser();
          }
        }
        items2[1] = pendingProfileFrame;
        class A {
          constructor() {
            isSubmitting = pendingAvatarDecoration.getFormState() === closure_14.SUBMITTING;
            if (!isSubmitting) {
              tmp = pendingProfileFrame;
              isSubmitting = pendingProfileFrame.isSubmitting;
            }
            return isSubmitting;
          }
        }
        cResult[4] = items2;
        cResult[5] = A;
        let tmp15 = A;
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
            return closure_13.getCurrentUser();
          }
        }
        UserStore = tmp22;
        class A {
          constructor() {
            isSubmitting = pendingAvatarDecoration.getFormState() === closure_14.SUBMITTING;
            if (!isSubmitting) {
              tmp = pendingProfileFrame;
              isSubmitting = pendingProfileFrame.isSubmitting;
            }
            return isSubmitting;
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function x() {
            return function cleanup() {
              closure_1_13.cancel();
              closure_0(pendingNickname[14]).resetAllPending();
            };
          };
          const items3 = [tmp22];
          class G {
            constructor() {
              return closure_13.getCurrentUser();
            }
          }
          cResult[10] = fn;
          class A {
            constructor() {
              isSubmitting = pendingAvatarDecoration.getFormState() === closure_14.SUBMITTING;
              if (!isSubmitting) {
                tmp = pendingProfileFrame;
                isSubmitting = pendingProfileFrame.isSubmitting;
              }
              return isSubmitting;
            }
          }
          cResult[11] = items3;
          let tmp24 = items3;
          let tmp23 = fn;
        } else {
          tmp23 = cResult[10];
          tmp24 = cResult[11];
        }
        const effect = selectedGuild.useEffect(tmp23, tmp24);
        const tmp28 = pendingAvatar(tmp2[15])();
        FormStates = tmp28;
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const items4 = [pendingNameplate];
          class G {
            constructor() {
              return closure_13.getCurrentUser();
            }
          }
          items4[1] = pendingDisplayNameStyles;
          class A {
            constructor() {
              isSubmitting = pendingAvatarDecoration.getFormState() === closure_14.SUBMITTING;
              if (!isSubmitting) {
                tmp = pendingProfileFrame;
                isSubmitting = pendingProfileFrame.isSubmitting;
              }
              return isSubmitting;
            }
          }
          cResult[12] = items4;
          let tmp29 = items4;
        } else {
          tmp29 = cResult[12];
        }
        if (cResult[13] !== tmp28) {
          class V {
            constructor() {
              obj = closure_11;
              guild = closure_11.getGuild(closure_14);
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
              return obj.getGuild(closure_12.getFlattenedGuildIds()[0]);
            }
          }
          cResult[13] = tmp28;
          class G {
            constructor() {
              return closure_13.getCurrentUser();
            }
          }
          cResult[14] = V;
          class A {
            constructor() {
              isSubmitting = pendingAvatarDecoration.getFormState() === closure_14.SUBMITTING;
              if (!isSubmitting) {
                tmp = pendingProfileFrame;
                isSubmitting = pendingProfileFrame.isSubmitting;
              }
              return isSubmitting;
            }
          }
        } else {
          class V {
            constructor() {
              obj = closure_11;
              guild = closure_11.getGuild(closure_14);
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
              return obj.getGuild(closure_12.getFlattenedGuildIds()[0]);
            }
          }
        }
        let tmp33 = stateFromStores1;
        const stateFromStores2 = tmp(tmp2[11]).useStateFromStores(tmp29, tmp31);
        if (!stateFromStores1) {
          class V {
            constructor() {
              obj = closure_11;
              guild = closure_11.getGuild(closure_14);
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
              return obj.getGuild(closure_12.getFlattenedGuildIds()[0]);
            }
          }
          tmp33 = stateFromStoresObject.formState === FormStates.CLOSED;
        }
        closure_15 = tmp33;
        if (cResult[15] === tmp33) {
          class V {
            constructor() {
              obj = closure_11;
              guild = closure_11.getGuild(closure_14);
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
              return obj.getGuild(closure_12.getFlattenedGuildIds()[0]);
            }
          }
        }
        _require = pendingThemeColors(function* () {
          pendingBanner = tmp2;
          pendingNickname = tmp3;
          if (!closure_1_15) {
            if (null != c0) {
              const guildMemberChangesForUpdateRequest = closure_0(
                pendingNickname[16],
              ).getGuildMemberChangesForUpdateRequest({
                pendingAvatar,
                pendingNickname,
                pendingAvatarDecoration,
                pendingNameplate,
                pendingDisplayNameStyles,
              });
              closure_130_0 = guildMemberChangesForUpdateRequest;
              closure_0(pendingNickname[16]);
              let id;
              if (user != null) {
                id = user.id;
              }
              const profileChangesForUpdateRequest = closure_0(pendingNickname[16]).getProfileChangesForUpdateRequest(
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
                if (user != null) {
                  id1 = user.id;
                }
                pendingBio = 1;
                pendingPronouns = 1;
                return {
                  value: closure_0(pendingNickname[14]).saveGuildIdentityChanges(
                    id1,
                    guildMemberChangesForUpdateRequest,
                  ),
                  done: false,
                };
              }
              closure_0(pendingNickname[16]);
            }
          }
          yield "IconComponent";
          if (1 === tmp6) {
            if (arg0 === 1) {
              pendingPronouns = 3;
              throw value;
            } else if (arg0 === 2) {
              pendingPronouns = 3;
              return { value, done: true };
            } else {
              closure_130_4 = value;
              if (closure_130_4.ok) {
                const body2 = closure_130_4.body;
                if (undefined !== pendingAvatar) {
                  const obj12 = {
                    isGuildProfile: true,
                    avatarHash: body2.avatar,
                    avatarId: closure_130_0.avatarId,
                    avatarAssetOrigin: null,
                  };
                  let assetOrigin;
                  if (pendingAvatar != null) {
                    assetOrigin = pendingAvatar.assetOrigin;
                  }
                  obj12.avatarAssetOrigin = assetOrigin;
                  const result = closure_0(pendingNickname[17]).trackUserAvatarUpdated(obj12);
                  closure_0(pendingNickname[17]);
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
                  const result1 = closure_0(pendingNickname[18]).showGenericGuildProfileUpdateFailureToast(
                    closure_130_4.body.avatar,
                  );
                  closure_130_3 = true;
                  closure_0(pendingNickname[18]);
                }
              }
              let tmp42 = closure_130_2;
              if (closure_130_2) {
                let ok;
                if (closure_130_4 != null) {
                  ok = closure_130_4.ok;
                }
                c0 = ok;
                if (ok == null) {
                  c0 = false;
                }
                tmp42 = c0;
              }
              closure_130_2 = tmp42;
            }
          } else if (arg0 === 1) {
            pendingPronouns = 3;
            throw value;
          } else if (arg0 === 2) {
            pendingPronouns = 3;
            return { value, done: true };
          } else {
            closure_130_8 = value;
            let ok1;
            if (closure_130_8 != null) {
              ok1 = closure_130_8.ok;
            }
            if (!ok1) {
              const aPIError = new closure_0(pendingNickname[20]).APIError(closure_130_8);
              const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
              if (null != firstFieldErrorMessage) {
                const result2 = closure_0(pendingNickname[18]).showGenericGuildProfileUpdateFailureToast(
                  firstFieldErrorMessage,
                );
                closure_130_3 = true;
                closure_0(pendingNickname[18]);
              }
            }
            let tmp24 = closure_130_2;
            if (closure_130_2) {
              let ok2;
              if (closure_130_8 != null) {
                ok2 = closure_130_8.ok;
              }
              pendingAvatar = ok2;
              if (ok2 == null) {
                pendingAvatar = false;
              }
              tmp24 = pendingAvatar;
            }
            closure_130_2 = tmp24;
          }
          let tmp54 = closure_130_2;
          if (!closure_130_2) {
            tmp54 = closure_130_3;
          }
          if (!tmp54) {
            const intl = closure_0(pendingNickname[21]).intl;
            const result3 = closure_0(pendingNickname[18]).showGenericGuildProfileUpdateFailureToast(
              intl.string(closure_0(pendingNickname[21]).t.s35OuK),
            );
            closure_0(pendingNickname[18]);
          }
          if (closure_130_2) {
            tmp22.delay();
          }
          return closure_130_2;
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
          class V {
            constructor() {
              obj = closure_11;
              guild = closure_11.getGuild(closure_14);
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
              return obj.getGuild(closure_12.getFlattenedGuildIds()[0]);
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
        const tmpResult8 = tmp(tmp2[11]);
      }
      let merged = Object.assign(guildAutomodProfileQuarantineErrors);
      const merged1 = Object.assign(stateFromStoresObject.errors);
      cResult[6] = guildAutomodProfileQuarantineErrors;
      cResult[7] = stateFromStoresObject.errors;
      cResult[8] = {};
      const obj2 = {};
      const tmpResult7 = require("initialize");
    }
  : function useGuildProfileEditForm() {
      const items = [memo];
      stateFromStores = stateFromStores(pendingNickname[11]).useStateFromStores(items, () => memo.getCurrentUser());
      let obj = stateFromStores(pendingNickname[11]);
      const items1 = [pendingAvatarDecoration, pendingNameplate];
      const stateFromStoresObject = stateFromStores(pendingNickname[11]).useStateFromStoresObject(items1, () => {
        const selectedGuildId = pendingAvatarDecoration.selectedGuildId;
        const obj = {};
        const merged = Object.assign(pendingAvatarDecoration.getPendingChanges(selectedGuildId));
        obj.errors = pendingAvatarDecoration.getErrors(selectedGuildId);
        obj.selectedGuild = pendingNameplate.getGuild(selectedGuildId);
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
      pendingNameplate = stateFromStoresObject.pendingNameplate;
      const pendingDisplayNameStyles = stateFromStoresObject.pendingDisplayNameStyles;
      const obj2 = stateFromStores(pendingNickname[11]);
      const tmp4 = pendingAvatarDecoration;
      const tmp5 = pendingNameplate;
      let id;
      if (selectedGuild != null) {
        id = selectedGuild.id;
      }
      const guildAutomodProfileQuarantineErrors = stateFromStores(
        pendingNickname[12],
      ).useGuildAutomodProfileQuarantineErrors(id);
      const obj3 = stateFromStores(pendingNickname[12]);
      const items2 = [tmp4, pendingProfileFrame];
      const stateFromStores1 = stateFromStores(pendingNickname[11]).useStateFromStores(items2, () => {
        let isSubmitting = pendingAvatarDecoration.getFormState() === constants.SUBMITTING;
        if (!isSubmitting) {
          isSubmitting = pendingProfileFrame.isSubmitting;
        }
        return isSubmitting;
      });
      let merged = Object.assign(guildAutomodProfileQuarantineErrors);
      const merged1 = Object.assign(stateFromStoresObject.errors);
      memo = selectedGuild.useMemo(() => {
        const delayedCall = new stateFromStores(pendingNickname[13]).DelayedCall(
          200,
          stateFromStores(pendingNickname[14]).resetAllPending,
        );
        return delayedCall;
      }, []);
      const items3 = [memo];
      const effect = selectedGuild.useEffect(
        () =>
          function cleanup() {
            memo.cancel();
            stateFromStores(pendingNickname[14]).resetAllPending();
          },
        items3,
      );
      FormStates = pendingAvatar(tmp2[15])();
      const obj4 = {};
      const obj6 = selectedGuild;
      const tmpResult = stateFromStores(pendingNickname[11]);
      const items4 = [tmp5, pendingDisplayNameStyles];
      let tmp15 = stateFromStores1;
      const stateFromStores2 = stateFromStores(pendingNickname[11]).useStateFromStores(items4, () => {
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
      const tmpResult2 = stateFromStores(pendingNickname[11]);
      if (selectedGuild != null) {
        id1 = selectedGuild.id;
      }
      const obj5 = {
        handleSubmit: obj6.useCallback(
          pendingThemeColors(function* () {
            closure_3 = tmp2;
            if (!closure_15) {
              if (null != stateFromStores) {
                const guildMemberChangesForUpdateRequest = stateFromStores(
                  tmp3[16],
                ).getGuildMemberChangesForUpdateRequest({
                  pendingAvatar,
                  pendingNickname,
                  pendingAvatarDecoration,
                  pendingNameplate,
                  pendingDisplayNameStyles,
                });
                closure_130_0 = guildMemberChangesForUpdateRequest;
                stateFromStores(tmp3[16]);
                let id;
                if (selectedGuild != null) {
                  id = selectedGuild.id;
                }
                const profileChangesForUpdateRequest = stateFromStores(tmp3[16]).getProfileChangesForUpdateRequest(
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
                  c4 = 1;
                  let v1 = 1;
                  return {
                    value: stateFromStores(tmp3[14]).saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest),
                    done: false,
                  };
                }
                stateFromStores(tmp3[16]);
              }
            }
            yield "IconComponent";
            if (1 === tmp6) {
              if (arg0 === 1) {
                v1 = 3;
                throw value;
              } else if (arg0 === 2) {
                v1 = 3;
                return { value, done: true };
              } else {
                closure_130_4 = value;
                if (closure_130_4.ok) {
                  const body2 = closure_130_4.body;
                  if (undefined !== closure_131_1) {
                    const obj12 = {
                      isGuildProfile: true,
                      avatarHash: body2.avatar,
                      avatarId: closure_130_0.avatarId,
                      avatarAssetOrigin: null,
                    };
                    let assetOrigin;
                    if (closure_131_1 != null) {
                      assetOrigin = closure_131_1.assetOrigin;
                    }
                    obj12.avatarAssetOrigin = assetOrigin;
                    const result = stateFromStores(tmp3[17]).trackUserAvatarUpdated(obj12);
                    stateFromStores(tmp3[17]);
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
                    const result1 = stateFromStores(tmp3[18]).showGenericGuildProfileUpdateFailureToast(
                      closure_130_4.body.avatar,
                    );
                    closure_130_3 = true;
                    stateFromStores(tmp3[18]);
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
              v1 = 3;
              throw value;
            } else if (arg0 === 2) {
              v1 = 3;
              return { value, done: true };
            } else {
              closure_130_8 = value;
              let ok1;
              if (closure_130_8 != null) {
                ok1 = closure_130_8.ok;
              }
              if (!ok1) {
                const aPIError = new stateFromStores(tmp3[20]).APIError(closure_130_8);
                const firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("banner");
                if (null != firstFieldErrorMessage) {
                  const result2 = stateFromStores(tmp3[18]).showGenericGuildProfileUpdateFailureToast(
                    firstFieldErrorMessage,
                  );
                  closure_130_3 = true;
                  stateFromStores(tmp3[18]);
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
              const intl = stateFromStores(tmp3[21]).intl;
              const result3 = stateFromStores(tmp3[18]).showGenericGuildProfileUpdateFailureToast(
                intl.string(stateFromStores(tmp3[21]).t.s35OuK),
              );
              stateFromStores(tmp3[18]);
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
        resetPending: stateFromStores(pendingNickname[14]).resetAllPending,
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
