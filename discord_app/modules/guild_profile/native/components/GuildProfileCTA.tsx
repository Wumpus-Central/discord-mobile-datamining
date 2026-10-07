// discord_app/modules/guild_profile/native/components/GuildProfileCTA.tsx
import MemberVerificationTypes from "../../../guild_member_verification/MemberVerificationTypes.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import MemberVerificationAlertActionCreators from "../../../guild_member_verification/native/MemberVerificationAlertActionCreators.tsx";
import GuildProfileTypes from "../../GuildProfileTypes.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import JoinGuildRefusedError from "../../../guild/JoinGuildRefusedError.tsx";
import GuildDiscoveryUtils from "../../../../utils/GuildDiscoveryUtils.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import InstantInviteActionCreatorsDefault from "../../../../actions/InstantInviteActionCreators.tsx";
import handleNSFWGuildInvite from "../../../age_gate/native/handleNSFWGuildInvite.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import InviteStore from "../../../../stores/InviteStore.tsx";

require = fn;
let AnalyticsObjects = fn(1085).AnalyticsObjects;
const constants = fn(1095).ProfileCustomizationScrollPositions;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (profile) => {
      const cResult = profile(validInviteKey[6]).c(41);
      profile = profile.profile;
      ({ context, inviteKey } = profile);
      const tmp5 = guildId(validInviteKey[7])(profile, context, inviteKey);
      guildId = tmp5.guildId;
      validInviteKey = tmp5.validInviteKey;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { scrollPosition: constants.GUILD_TAG };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp8 = guildId(validInviteKey[8])(first);
      closure_3 = tmp8;
      if (cResult[1] !== guildId) {
        const fn = function _() {
          ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
          transitionToGuild.transitionToGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === guildId) {
        if (cResult[6] === guildId) {
          if (cResult[7] === validInviteKey) {
            let tmp11 = cResult[8];
          }
          InviteStore = tmp11;
          const tmp12 = tmp4(tmp2[13])(guildId);
          AnalyticsObjects = tmp12;
          if (cResult[9] === guildId) {
            let applicationStatus;
            if (tmp12 != null) {
              applicationStatus = tmp12.applicationStatus;
            }
            if (cResult[12] === guildId) {
              if (cResult[13] === tmp11) {
                if (cResult[14] === profile.visibility) {
                  if (cResult[17] !== guildId) {
                    class L {
                      constructor() {
                        obj = closure_1(closure_2[9]);
                        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                        obj2 = closure_0(closure_2[18]);
                        obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                        startLurkingResult = obj2.startLurking(guildId, obj1);
                        catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                        return;
                      }
                    }
                    cResult[17] = guildId;
                    cResult[18] = L;
                  } else {
                    class L {
                      constructor() {
                        obj = closure_1(closure_2[9]);
                        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                        obj2 = closure_0(closure_2[18]);
                        obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                        startLurkingResult = obj2.startLurking(guildId, obj1);
                        catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                        return;
                      }
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    class L {
                      constructor() {
                        obj = closure_1(closure_2[9]);
                        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                        obj2 = closure_0(closure_2[18]);
                        obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                        startLurkingResult = obj2.startLurking(guildId, obj1);
                        catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                        return;
                      }
                    }
                    cResult[19] = tmp21;
                  } else {
                    class L {
                      constructor() {
                        obj = closure_1(closure_2[9]);
                        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                        obj2 = closure_0(closure_2[18]);
                        obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                        startLurkingResult = obj2.startLurking(guildId, obj1);
                        catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                        return;
                      }
                    }
                  }
                  if (tmp(tmp2[7]).CTATypes.IS_MEMBER === tmp5.ctaType) {
                    class L {
                      constructor() {
                        obj = closure_1(closure_2[9]);
                        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                        obj2 = closure_0(closure_2[18]);
                        obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                        startLurkingResult = obj2.startLurking(guildId, obj1);
                        catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                        return;
                      }
                    }
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      class L {
                        constructor() {
                          obj = closure_1(closure_2[9]);
                          hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                          obj2 = closure_0(closure_2[18]);
                          obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                          startLurkingResult = obj2.startLurking(guildId, obj1);
                          catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                          return;
                        }
                      }
                      const stringResult = obj3.string(tmp(tmp2[20]).t.KLOhbO);
                      cResult[20] = stringResult;
                      const tmp22 = stringResult;
                    } else {
                      class L {
                        constructor() {
                          obj = closure_1(closure_2[9]);
                          hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                          obj2 = closure_0(closure_2[18]);
                          obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                          startLurkingResult = obj2.startLurking(guildId, obj1);
                          catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                          return;
                        }
                      }
                    }
                    if (cResult[21] !== tmp9) {
                      class L {
                        constructor() {
                          obj = closure_1(closure_2[9]);
                          hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                          obj2 = closure_0(closure_2[18]);
                          obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                          startLurkingResult = obj2.startLurking(guildId, obj1);
                          catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                          return;
                        }
                      }
                      let obj4 = {};
                      const merged = Object.assign(tmp21);
                      class M {
                        constructor() {
                          tmp = closure_2;
                          obj = closure_1(closure_2[9]);
                          tmp2 = guildId;
                          hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                          tmp4 = closure_0;
                          if (
                            profile.visibility !==
                            closure_0(closure_2[16]).GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT
                          ) {
                            tmp5 = validInviteKey;
                            tmp6 = null;
                            if (null != validInviteKey) {
                              tmp8 = closure_4;
                              tmp9 = closure_4();
                            }
                            return;
                          }
                          tmp4Result = tmp4(tmp[17]);
                          result = tmp4Result.openMemberVerificationModal(tmp2);
                          return;
                        }
                      }
                      obj4.text = tmp22;
                      const tmp28 = jsx(tmp(tmp2[21]).Button, {});
                      class G {
                        constructor() {
                          applicationStatus = undefined;
                          if (closure_5 != null) {
                            applicationStatus = closure_5.applicationStatus;
                          }
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          if (
                            closure_0(closure_2[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus
                          ) {
                            tmp2Result = tmp2(tmp3[15]);
                            tmp8 = guildId;
                            result = tmp2Result.openMemberVerificationPendingAlert(guildId);
                          } else if (
                            tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus
                          ) {
                            tmp2Result1 = tmp2(tmp3[15]);
                            obj1 = { guildId: null, canWithdraw: true };
                            tmp6 = guildId;
                            obj1.guildId = guildId;
                            result1 = tmp2Result1.openMemberVerificationRejectedAlert(obj1);
                          } else if (tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
                            tmp2Result2 = tmp2(tmp3[15]);
                            tmp4 = guildId;
                            result2 = tmp2Result2.openMemberVerificationIncompleteAlert(guildId);
                          }
                          return;
                        }
                      }
                      cResult[22] = tmp28;
                      const tmp24 = tmp28;
                    } else {
                      class L {
                        constructor() {
                          obj = closure_1(closure_2[9]);
                          hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                          obj2 = closure_0(closure_2[18]);
                          obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                          startLurkingResult = obj2.startLurking(guildId, obj1);
                          catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                          return;
                        }
                      }
                    }
                    return tmp24;
                  } else {
                    class L {
                      constructor() {
                        obj = closure_1(closure_2[9]);
                        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                        obj2 = closure_0(closure_2[18]);
                        obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                        startLurkingResult = obj2.startLurking(guildId, obj1);
                        catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                        return;
                      }
                    }
                  }
                }
              }
            }
            class M {
              constructor() {
                tmp = closure_2;
                obj = closure_1(closure_2[9]);
                tmp2 = guildId;
                hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                tmp4 = closure_0;
                if (profile.visibility !== closure_0(closure_2[16]).GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
                  tmp5 = validInviteKey;
                  tmp6 = null;
                  if (null != validInviteKey) {
                    tmp8 = closure_4;
                    tmp9 = closure_4();
                  }
                  return;
                }
                tmp4Result = tmp4(tmp[17]);
                result = tmp4Result.openMemberVerificationModal(tmp2);
                return;
              }
            }
            cResult[12] = guildId;
            class G {
              constructor() {
                applicationStatus = undefined;
                if (closure_5 != null) {
                  applicationStatus = closure_5.applicationStatus;
                }
                tmp2 = closure_0;
                tmp3 = closure_2;
                if (closure_0(closure_2[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
                  tmp2Result = tmp2(tmp3[15]);
                  tmp8 = guildId;
                  result = tmp2Result.openMemberVerificationPendingAlert(guildId);
                } else if (tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
                  tmp2Result1 = tmp2(tmp3[15]);
                  obj1 = { guildId: null, canWithdraw: true };
                  tmp6 = guildId;
                  obj1.guildId = guildId;
                  result1 = tmp2Result1.openMemberVerificationRejectedAlert(obj1);
                } else if (tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
                  tmp2Result2 = tmp2(tmp3[15]);
                  tmp4 = guildId;
                  result2 = tmp2Result2.openMemberVerificationIncompleteAlert(guildId);
                }
                return;
              }
            }
            cResult[14] = profile.visibility;
            cResult[15] = validInviteKey;
            cResult[16] = M;
          }
          if (tmp12 != null) {
            class L {
              constructor() {
                obj = closure_1(closure_2[9]);
                hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                obj2 = closure_0(closure_2[18]);
                obj1 = { object: AnalyticsObjects.GUILD_PROFILE };
                startLurkingResult = obj2.startLurking(guildId, obj1);
                catchPromise = startLurkingResult.catch(closure_0(closure_2[19]).ignoreJoinGuildRefused);
                return;
              }
            }
          }
          class G {
            constructor() {
              applicationStatus = undefined;
              if (closure_5 != null) {
                applicationStatus = closure_5.applicationStatus;
              }
              tmp2 = closure_0;
              tmp3 = closure_2;
              if (closure_0(closure_2[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
                tmp2Result = tmp2(tmp3[15]);
                tmp8 = guildId;
                result = tmp2Result.openMemberVerificationPendingAlert(guildId);
              } else if (tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
                tmp2Result1 = tmp2(tmp3[15]);
                obj1 = { guildId: null, canWithdraw: true };
                tmp6 = guildId;
                obj1.guildId = guildId;
                result1 = tmp2Result1.openMemberVerificationRejectedAlert(obj1);
              } else if (tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
                tmp2Result2 = tmp2(tmp3[15]);
                tmp4 = guildId;
                result2 = tmp2Result2.openMemberVerificationIncompleteAlert(guildId);
              }
              return;
            }
          }
          cResult[10] = undefined;
          cResult[11] = G;
        }
        const fn3 = function b() {
          if (null != validInviteKey) {
            const _HermesInternal = HermesInternal;
            ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
            const inviteKey = validInviteKey;
            const obj = {
              onConfirm: function join() {
                const result = guildId(validInviteKey[11]).acceptInviteAndTransitionToInviteChannel({
                  inviteKey,
                  context: { location: "guild_profile" },
                });
              },
            };
            if (!obj4.handleNSFWGuildInvite(InviteStore.getInvite(validInviteKey), obj)) {
              const obj2 = { inviteKey: validInviteKey, context: { location: "guild_profile" } };
              let result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj2);
              const tmp3Result = InstantInviteActionCreatorsDefault;
            }
            obj4 = handleNSFWGuildInvite;
          }
        };
        cResult[6] = guildId;
        cResult[8] = fn3;
        tmp11 = fn3;
      }
      const fn2 = function v() {
        ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
        closure_3();
      };
      cResult[3] = guildId;
      cResult[4] = tmp8;
      cResult[5] = fn2;
      let obj = profile(validInviteKey[6]);
    }
  : (profile) => {
      profile = profile.profile;
      let guildId;
      let validInviteKey;
      ({ context, inviteKey } = profile);
      const tmp2 = guildId(validInviteKey[7])(profile, context, inviteKey);
      guildId = tmp2.guildId;
      validInviteKey = tmp2.validInviteKey;
      const ctaType = tmp2.ctaType;
      noop = guildId(validInviteKey[8])({ scrollPosition: constants.GUILD_TAG });
      const items = [guildId];
      const items1 = [guildId, validInviteKey];
      const callback = noop.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
        transitionToGuild.transitionToGuild(guildId);
      }, items);
      const callback1 = noop.useCallback(() => {
        if (null != validInviteKey) {
          function join() {
            const result = guildId(validInviteKey[11]).acceptInviteAndTransitionToInviteChannel({
              inviteKey,
              context: { location: "guild_profile" },
            });
          }
          const _HermesInternal = HermesInternal;
          ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
          const inviteKey = validInviteKey;
          const obj = { onConfirm: join };
          if (!obj4.handleNSFWGuildInvite(InviteStore.getInvite(validInviteKey), obj)) {
            const obj2 = { inviteKey: validInviteKey, context: { location: "guild_profile" } };
            let result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj2);
            const tmp3Result = InstantInviteActionCreatorsDefault;
          }
          obj4 = handleNSFWGuildInvite;
        }
      }, items1);
      const tmp5 = guildId(validInviteKey[13])(guildId);
      const items2 = [guildId];
      let applicationStatus;
      if (tmp5 != null) {
        applicationStatus = tmp5.applicationStatus;
      }
      items2[1] = applicationStatus;
      const items3 = [guildId, callback1, profile.visibility, validInviteKey];
      const callback2 = noop.useCallback(() => {
        applicationStatus = undefined;
        if (applicationStatus != null) {
          applicationStatus = applicationStatus.applicationStatus;
        }
        if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
          const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
          const tmp2Result = MemberVerificationAlertActionCreators;
        } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const obj = { guildId, canWithdraw: true };
          const result1 = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj);
          const tmp2Result3 = MemberVerificationAlertActionCreators;
        } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
          const result2 = MemberVerificationAlertActionCreators.openMemberVerificationIncompleteAlert(guildId);
          const tmp2Result4 = MemberVerificationAlertActionCreators;
        }
      }, items2);
      const items4 = [guildId];
      const callback3 = obj2.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
        if (profile.visibility !== GuildProfileTypes.GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
          if (null != validInviteKey) {
            callback1();
          }
        }
        const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
        const tmp4Result = MemberVerificationModalActionCreators;
      }, items3);
      const callback4 = obj2.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
        const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
        GuildDiscoveryUtils.startLurking(guildId, { object: AnalyticsObjects.GUILD_PROFILE }).catch(
          JoinGuildRefusedError.ignoreJoinGuildRefused,
        );
      }, items4);
      const memo = obj2.useMemo(() => ({ grow: true, size: "lg", variant: "active" }), []);
      if (profile(validInviteKey[7]).CTATypes.IS_MEMBER === ctaType) {
        let obj3 = {};
        const merged = Object.assign(memo);
        obj3.onPress = callback;
        const intl7 = tmp11(tmp[20]).intl;
        obj3.text = intl7.string(tmp11(tmp[20]).t.KLOhbO);
        return jsx(tmp11(tmp[21]).Button, {});
      } else if (tmp11(tmp[7]).CTATypes.ADOPT_TAG === ctaType) {
        let obj4 = {};
        const merged1 = Object.assign(memo);
        obj4.onPress = function handleGoToTagSettings() {
          ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
          closure_3();
        };
        const intl6 = tmp11(tmp[20]).intl;
        obj4.text = intl6.string(tmp11(tmp[20]).t.cQDYRu);
        return jsx(tmp11(tmp[21]).Button, {});
      } else if (tmp11(tmp[7]).CTATypes.HAS_APPLICATION === ctaType) {
        const obj5 = {};
        const merged2 = Object.assign(memo);
        obj5.onPress = callback2;
        const intl5 = tmp11(tmp[20]).intl;
        obj5.text = intl5.string(tmp11(tmp[20]).t["4yfIDk"]);
        return jsx(tmp11(tmp[21]).Button, {});
      } else if (tmp11(tmp[7]).CTATypes.APPLY_TO_JOIN === ctaType) {
        const obj6 = {};
        const merged3 = Object.assign(memo);
        obj6.onPress = callback3;
        const intl4 = tmp11(tmp[20]).intl;
        obj6.text = intl4.string(tmp11(tmp[20]).t["7XdMW2"]);
        return jsx(tmp11(tmp[21]).Button, {});
      } else if (tmp11(tmp[7]).CTATypes.LURK_DISCOVERABLE === ctaType) {
        const obj7 = {};
        const merged4 = Object.assign(memo);
        obj7.onPress = callback4;
        const intl3 = tmp11(tmp[20]).intl;
        obj7.text = intl3.string(tmp11(tmp[20]).t.XpeFYr);
        return jsx(tmp11(tmp[21]).Button, {});
      } else if (tmp11(tmp[7]).CTATypes.JOIN_VIA_INVITE === ctaType) {
        const obj8 = {};
        const merged5 = Object.assign(memo);
        obj8.onPress = callback1;
        const intl2 = tmp11(tmp[20]).intl;
        obj8.text = intl2.string(tmp11(tmp[20]).t.XpeFYr);
        return jsx(tmp11(tmp[21]).Button, {});
      } else if (tmp11(tmp[7]).CTATypes.ACCEPT_ROLES === ctaType) {
        const obj9 = {};
        const merged6 = Object.assign(memo);
        obj9.onPress = callback1;
        const intl = tmp11(tmp[20]).intl;
        obj9.text = intl.string(tmp11(tmp[20]).t.MMlhsr);
        return jsx(tmp11(tmp[21]).Button, {});
      } else {
        return null;
      }
      let obj = { scrollPosition: constants.GUILD_TAG };
    };
