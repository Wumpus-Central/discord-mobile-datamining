// === Module 9091: GuildProfileCTA ===

// Module 9091 (GuildProfileCTA)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6107 */;
import GuildProfileTypes from "GuildProfileTypes" /* 6130 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6149 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6906 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7042 */;
import transitionToGuild from "transitionToGuild" /* 7043 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8472 */;
import handleNSFWGuildInvite from "handleNSFWGuildInvite" /* 9098 */;
import noop from "module_19" /* 19 */;
import InviteStore from "InviteStore" /* 5071 */;

require = fn;
let AnalyticsObjects = fn(1085).AnalyticsObjects;
const constants = fn(1095).ProfileCustomizationScrollPositions;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileCTA(profile) {
  const cResult = profile(validInviteKey[6]).c(41);
  profile = profile.profile;
  ({ context, inviteKey } = profile);
  const tmp4 = guildId(validInviteKey[7])(profile, context, inviteKey);
  guildId = tmp4.guildId;
  validInviteKey = tmp4.validInviteKey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { scrollPosition: constants.GUILD_TAG };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp7 = guildId(validInviteKey[8])(first);
  closure_3 = tmp7;
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        obj2 = closure_0(closure_2[10]);
        transitionToGuildResult = obj2.transitionToGuild(guildId);
        return;
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        obj2 = closure_0(closure_2[10]);
        transitionToGuildResult = obj2.transitionToGuild(guildId);
        return;
      }
    }
  }
  if (cResult[3] === guildId) {
    class I {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        obj2 = closure_0(closure_2[10]);
        transitionToGuildResult = obj2.transitionToGuild(guildId);
        return;
      }
    }
    if (cResult[6] === guildId) {
      class I {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
          obj2 = closure_0(closure_2[10]);
          transitionToGuildResult = obj2.transitionToGuild(guildId);
          return;
        }
      }
      InviteStore = C;
      class C {
        constructor() {
          tmp = validInviteKey;
          if (null != validInviteKey) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj3 = closure_1(closure_2[9]);
            tmp5 = guildId;
            tmp6 = globalThis;
            _HermesInternal = HermesInternal;
            str = "GuildProfileActionSheet:";
            hideActionSheetResult = obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
            closure_0 = tmp;
            tmp8 = closure_0;
            obj4 = closure_0(closure_2[12]);
            tmp9 = closure_4;
            obj1 = { onConfirm: null };
            obj1.onConfirm = function join() {
              const result = guildId(validInviteKey[11]).acceptInviteAndTransitionToInviteChannel({ inviteKey, context: { location: "guild_profile" } });
            };
            if (!obj4.handleNSFWGuildInvite(closure_4.getInvite(tmp), obj1)) {
              tmp3Result = tmp3(tmp4[11]);
              obj6 = { inviteKey: null, context: null };
              obj6.inviteKey = tmp;
              obj6.context = { location: "guild_profile" };
              result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj6);
            }
          }
          return;
        }
      }
      AnalyticsObjects = tmp10;
      if (cResult[9] === guildId) {
        class I {
          constructor() {
            obj = closure_1(closure_2[9]);
            hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            obj2 = closure_0(closure_2[10]);
            transitionToGuildResult = obj2.transitionToGuild(guildId);
            return;
          }
        }
        class C {
          constructor() {
            tmp = validInviteKey;
            if (null != validInviteKey) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj3 = closure_1(closure_2[9]);
              tmp5 = guildId;
              tmp6 = globalThis;
              _HermesInternal = HermesInternal;
              str = "GuildProfileActionSheet:";
              hideActionSheetResult = obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
              closure_0 = tmp;
              tmp8 = closure_0;
              obj4 = closure_0(closure_2[12]);
              tmp9 = closure_4;
              obj1 = { onConfirm: null };
              obj1.onConfirm = function join() {
                const result = guildId(validInviteKey[11]).acceptInviteAndTransitionToInviteChannel({ inviteKey, context: { location: "guild_profile" } });
              };
              if (!obj4.handleNSFWGuildInvite(closure_4.getInvite(tmp), obj1)) {
                tmp3Result = tmp3(tmp4[11]);
                obj6 = { inviteKey: null, context: null };
                obj6.inviteKey = tmp;
                obj6.context = { location: "guild_profile" };
                result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj6);
              }
            }
            return;
          }
        }
        if (tmp10 != null) {
          class I {
            constructor() {
              obj = closure_1(closure_2[9]);
              hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              obj2 = closure_0(closure_2[10]);
              transitionToGuildResult = obj2.transitionToGuild(guildId);
              return;
            }
          }
        }
        if (tmp11 === undefined) {
          class I {
            constructor() {
              obj = closure_1(closure_2[9]);
              hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              obj2 = closure_0(closure_2[10]);
              transitionToGuildResult = obj2.transitionToGuild(guildId);
              return;
            }
          }
        }
        if (cResult[12] === guildId) {
          class I {
            constructor() {
              obj = closure_1(closure_2[9]);
              hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              obj2 = closure_0(closure_2[10]);
              transitionToGuildResult = obj2.transitionToGuild(guildId);
              return;
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
      if (tmp10 != null) {
        class I {
          constructor() {
            obj = closure_1(closure_2[9]);
            hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            obj2 = closure_0(closure_2[10]);
            transitionToGuildResult = obj2.transitionToGuild(guildId);
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
    class C {
      constructor() {
        tmp = validInviteKey;
        if (null != validInviteKey) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj3 = closure_1(closure_2[9]);
          tmp5 = guildId;
          tmp6 = globalThis;
          _HermesInternal = HermesInternal;
          str = "GuildProfileActionSheet:";
          hideActionSheetResult = obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
          closure_0 = tmp;
          tmp8 = closure_0;
          obj4 = closure_0(closure_2[12]);
          tmp9 = closure_4;
          obj1 = { onConfirm: null };
          obj1.onConfirm = function join() {
            const result = guildId(validInviteKey[11]).acceptInviteAndTransitionToInviteChannel({ inviteKey, context: { location: "guild_profile" } });
          };
          if (!obj4.handleNSFWGuildInvite(closure_4.getInvite(tmp), obj1)) {
            tmp3Result = tmp3(tmp4[11]);
            obj6 = { inviteKey: null, context: null };
            obj6.inviteKey = tmp;
            obj6.context = { location: "guild_profile" };
            result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj6);
          }
        }
        return;
      }
    }
    cResult[6] = guildId;
    cResult[8] = C;
  }
  function handleGoToTagSettings() {
    ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
    closure_3();
  }
  cResult[3] = guildId;
  cResult[4] = tmp7;
  cResult[5] = handleGoToTagSettings;
  let obj = profile(validInviteKey[6]);
}) : (function GuildProfileCTA(profile) {
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
        const result = guildId(validInviteKey[11]).acceptInviteAndTransitionToInviteChannel({ inviteKey, context: { location: "guild_profile" } });
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
  const items2 = [guildId, ];
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
    GuildDiscoveryUtils.startLurking(guildId, { object: AnalyticsObjects.GUILD_PROFILE }).catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
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
});