// === Module 9413: GuildProfileCTA ===

// Module 9413 (GuildProfileCTA)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4702 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5917 */;
import GuildProfileTypes from "GuildProfileTypes" /* 5940 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5960 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 6844 */;
import transitionToGuild from "transitionToGuild" /* 6845 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8054 */;
import handleNSFWGuildInvite from "handleNSFWGuildInvite" /* 9420 */;
import react_mod from "react" /* 19 */;
import InviteStore_mod from "InviteStore" /* 4871 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let profile;

let react = react_mod;
let InviteStore = InviteStore_mod;
let AnalyticsObjects = Constants.AnalyticsObjects;
const constants = UserSettingsConstants.ProfileCustomizationScrollPositions;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((profile) => {
  let closure_4;
  let context;
  let first;
  let guildId;
  let inviteKey;
  let obj3;
  let tmp9;
  let validInviteKey;
  let obj = profile(validInviteKey[6]);
  const cResult = obj.c(41);
  profile = profile.profile;
  ({ context, inviteKey } = profile);
  const tmp5 = guildId(validInviteKey[7])(profile, context, inviteKey);
  guildId = tmp5.guildId;
  validInviteKey = tmp5.validInviteKey;
  const ctaType = tmp5.ctaType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { scrollPosition: constants.GUILD_TAG };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp8 = guildId(validInviteKey[8])(first);
  let closure_3 = tmp8;
  if (cResult[1] !== guildId) {
    const fn = function _() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      const obj2 = transitionToGuild;
      obj2.transitionToGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === guildId) {
    if (cResult[6] === guildId) {
      let tmp11;
      if (cResult[7] === validInviteKey) {
        tmp11 = cResult[8];
      }
      InviteStore = tmp11;
      const tmp12 = guildId(validInviteKey[13])(guildId);
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
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                    const obj2 = GuildDiscoveryUtils;
                    const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                    obj2.startLurking(guildId, obj3);
                  }
                }
                cResult[17] = guildId;
                cResult[18] = L;
              } else {
                class L {
                  constructor() {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                    const obj2 = GuildDiscoveryUtils;
                    const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                    obj2.startLurking(guildId, obj3);
                  }
                }
              }
              const _Symbol = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class L {
                  constructor() {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                    const obj2 = GuildDiscoveryUtils;
                    const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                    obj2.startLurking(guildId, obj3);
                  }
                }
                cResult[19] = tmp22;
              } else {
                class L {
                  constructor() {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                    const obj2 = GuildDiscoveryUtils;
                    const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                    obj2.startLurking(guildId, obj3);
                  }
                }
              }
              if (profile(validInviteKey[7]).CTATypes.IS_MEMBER === ctaType) {
                let tmp23;
                let tmp25;
                class L {
                  constructor() {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                    const obj2 = GuildDiscoveryUtils;
                    const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                    obj2.startLurking(guildId, obj3);
                  }
                }
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  class L {
                    constructor() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                      const obj2 = GuildDiscoveryUtils;
                      const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                      obj2.startLurking(guildId, obj3);
                    }
                  }
                  const stringResult = obj3.string(profile(validInviteKey[19]).t.KLOhbO);
                  cResult[20] = stringResult;
                  tmp23 = stringResult;
                } else {
                  class L {
                    constructor() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                      const obj2 = GuildDiscoveryUtils;
                      const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                      obj2.startLurking(guildId, obj3);
                    }
                  }
                }
                if (cResult[21] !== tmp9) {
                  class L {
                    constructor() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                      const obj2 = GuildDiscoveryUtils;
                      const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                      obj2.startLurking(guildId, obj3);
                    }
                  }
                  const Button = tmp(tmp2[20]).Button;
                  const merged = Object.assign(tmp22);
                  class M {
                    constructor() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                      if (profile.visibility !== GuildProfileTypes.GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
                        if (null != validInviteKey) {
                          closure_4();
                        }
                      }
                      const tmp4Result = MemberVerificationModalActionCreators;
                      const result = tmp4Result.openMemberVerificationModal(guildId);
                    }
                  }
                  const tmp29 = <Button text={tmp23} />;
                  class G {
                    constructor() {
                      applicationStatus = undefined;
                      if (applicationStatus != null) {
                        applicationStatus = applicationStatus.applicationStatus;
                      }
                      if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
                        const tmp2Result = MemberVerificationAlertActionCreators;
                        const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
                      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
                        const obj = { guildId, canWithdraw: true };
                        const tmp2Result3 = MemberVerificationAlertActionCreators;
                        const result1 = tmp2Result3.openMemberVerificationRejectedAlert(obj);
                      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
                        const tmp2Result4 = MemberVerificationAlertActionCreators;
                        const result2 = tmp2Result4.openMemberVerificationIncompleteAlert(guildId);
                      }
                    }
                  }
                  cResult[22] = tmp29;
                  tmp25 = tmp29;
                } else {
                  class L {
                    constructor() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                      const obj2 = GuildDiscoveryUtils;
                      const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                      obj2.startLurking(guildId, obj3);
                    }
                  }
                }
                return tmp25;
              } else {
                class L {
                  constructor() {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
                    const obj2 = GuildDiscoveryUtils;
                    const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
                    obj2.startLurking(guildId, obj3);
                  }
                }
              }
            }
          }
        }
        class M {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            if (profile.visibility !== GuildProfileTypes.GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
              if (null != validInviteKey) {
                closure_4();
              }
            }
            const tmp4Result = MemberVerificationModalActionCreators;
            const result = tmp4Result.openMemberVerificationModal(guildId);
          }
        }
        cResult[12] = guildId;
        class G {
          constructor() {
            applicationStatus = undefined;
            if (applicationStatus != null) {
              applicationStatus = applicationStatus.applicationStatus;
            }
            if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
              const tmp2Result = MemberVerificationAlertActionCreators;
              const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
            } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
              const obj = { guildId, canWithdraw: true };
              const tmp2Result3 = MemberVerificationAlertActionCreators;
              const result1 = tmp2Result3.openMemberVerificationRejectedAlert(obj);
            } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
              const tmp2Result4 = MemberVerificationAlertActionCreators;
              const result2 = tmp2Result4.openMemberVerificationIncompleteAlert(guildId);
            }
          }
        }
        cResult[14] = profile.visibility;
        cResult[15] = validInviteKey;
        cResult[16] = M;
      }
      if (tmp12 != null) {
        class L {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            const obj2 = GuildDiscoveryUtils;
            const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
            obj2.startLurking(guildId, obj3);
          }
        }
      }
      class G {
        constructor() {
          applicationStatus = undefined;
          if (applicationStatus != null) {
            applicationStatus = applicationStatus.applicationStatus;
          }
          if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
            const tmp2Result = MemberVerificationAlertActionCreators;
            const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
          } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
            const obj = { guildId, canWithdraw: true };
            const tmp2Result3 = MemberVerificationAlertActionCreators;
            const result1 = tmp2Result3.openMemberVerificationRejectedAlert(obj);
          } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
            const tmp2Result4 = MemberVerificationAlertActionCreators;
            const result2 = tmp2Result4.openMemberVerificationIncompleteAlert(guildId);
          }
        }
      }
      cResult[10] = undefined;
      cResult[11] = G;
    }
    const fn3 = function b() {
      if (null != validInviteKey) {
        const _HermesInternal = HermesInternal;
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
        let closure_0 = validInviteKey;
        let obj = {
          onConfirm: function join() {
              const obj = guildId(validInviteKey[11]);
              const obj2 = { inviteKey, context: { location: "guild_profile" } };
              const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
            }
        };
        const obj4 = handleNSFWGuildInvite;
        if (!obj4.handleNSFWGuildInvite(InviteStore.getInvite(validInviteKey), obj)) {
          let obj2 = { inviteKey: validInviteKey, context: { location: "guild_profile" } };
          const tmp3Result = InstantInviteActionCreatorsDefault;
          let result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj2);
        }
      }
    };
    cResult[6] = guildId;
    cResult[8] = fn3;
    tmp11 = fn3;
  }
  const fn2 = function v() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    closure_3();
  };
  cResult[3] = guildId;
  cResult[4] = tmp8;
  cResult[5] = fn2;
}) : ((profile) => {
  let closure_3;
  let context;
  let inviteKey;
  profile = profile.profile;
  let guildId;
  let validInviteKey;
  ({ context, inviteKey } = profile);
  const tmp2 = guildId(validInviteKey[7])(profile, context, inviteKey);
  guildId = tmp2.guildId;
  validInviteKey = tmp2.validInviteKey;
  const ctaType = tmp2.ctaType;
  let obj = { scrollPosition: constants.GUILD_TAG };
  react = guildId(validInviteKey[8])(obj);
  let obj2 = react;
  const items = [guildId];
  const items1 = [guildId, validInviteKey];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    const obj2 = transitionToGuild;
    obj2.transitionToGuild(guildId);
  }, items);
  const callback1 = react.useCallback(() => {
    if (null != validInviteKey) {
      function join() {
        const obj = guildId(validInviteKey[11]);
        const obj2 = { inviteKey, context: { location: "guild_profile" } };
        const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
      }
      const _HermesInternal = HermesInternal;
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
      let closure_0 = validInviteKey;
      let obj = { onConfirm: join };
      const obj4 = handleNSFWGuildInvite;
      if (!obj4.handleNSFWGuildInvite(InviteStore.getInvite(validInviteKey), obj)) {
        let obj2 = { inviteKey: validInviteKey, context: { location: "guild_profile" } };
        const tmp3Result = InstantInviteActionCreatorsDefault;
        let result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj2);
      }
    }
  }, items1);
  const tmp5 = guildId(validInviteKey[13])(guildId);
  const items2 = [guildId, ];
  let applicationStatus;
  const useCallback = react.useCallback;
  if (tmp5 != null) {
    applicationStatus = tmp5.applicationStatus;
  }
  items2[1] = applicationStatus;
  const items3 = [guildId, callback1, profile.visibility, validInviteKey];
  const callback2 = useCallback(() => {
    applicationStatus = undefined;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const tmp2Result = MemberVerificationAlertActionCreators;
      const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj = { guildId, canWithdraw: true };
      const tmp2Result3 = MemberVerificationAlertActionCreators;
      const result1 = tmp2Result3.openMemberVerificationRejectedAlert(obj);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
      const tmp2Result4 = MemberVerificationAlertActionCreators;
      const result2 = tmp2Result4.openMemberVerificationIncompleteAlert(guildId);
    }
  }, items2);
  const items4 = [guildId];
  const callback3 = obj2.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    if (profile.visibility !== GuildProfileTypes.GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
      if (null != validInviteKey) {
        callback1();
      }
    }
    const tmp4Result = MemberVerificationModalActionCreators;
    const result = tmp4Result.openMemberVerificationModal(guildId);
  }, items3);
  const callback4 = obj2.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    const obj2 = GuildDiscoveryUtils;
    const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
    obj2.startLurking(guildId, obj3);
  }, items4);
  const memo = obj2.useMemo(() => ({ grow: true, size: "lg", variant: "active" }), []);
  if (profile(validInviteKey[7]).CTATypes.IS_MEMBER === ctaType) {
    const Button7 = tmp11(tmp[20]).Button;
    const merged = Object.assign(memo);
    const intl7 = tmp11(tmp[19]).intl;
    return <Button7 onPress={callback} text={intl7.string(profile(validInviteKey[19]).t.KLOhbO)} />;
  } else if (profile(validInviteKey[7]).CTATypes.ADOPT_TAG === ctaType) {
    const Button6 = tmp11(tmp[20]).Button;
    const merged1 = Object.assign(memo);
    const intl6 = tmp11(tmp[19]).intl;
    return <Button6 onPress={function handleGoToTagSettings() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      closure_3();
    }} text={intl6.string(profile(validInviteKey[19]).t.cQDYRu)} />;
  } else if (profile(validInviteKey[7]).CTATypes.HAS_APPLICATION === ctaType) {
    const Button5 = tmp11(tmp[20]).Button;
    const merged2 = Object.assign(memo);
    const intl5 = tmp11(tmp[19]).intl;
    return <Button5 onPress={callback2} text={intl5.string(profile(validInviteKey[19]).t["4yfIDk"])} />;
  } else if (profile(validInviteKey[7]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const Button4 = tmp11(tmp[20]).Button;
    const merged3 = Object.assign(memo);
    const intl4 = tmp11(tmp[19]).intl;
    return <Button4 onPress={callback3} text={intl4.string(profile(validInviteKey[19]).t["7XdMW2"])} />;
  } else if (profile(validInviteKey[7]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const Button3 = tmp11(tmp[20]).Button;
    const merged4 = Object.assign(memo);
    const intl3 = tmp11(tmp[19]).intl;
    return <Button3 onPress={callback4} text={intl3.string(profile(validInviteKey[19]).t.XpeFYr)} />;
  } else if (profile(validInviteKey[7]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const Button2 = tmp11(tmp[20]).Button;
    const merged5 = Object.assign(memo);
    const intl2 = tmp11(tmp[19]).intl;
    return <Button2 onPress={callback1} text={intl2.string(profile(validInviteKey[19]).t.XpeFYr)} />;
  } else if (profile(validInviteKey[7]).CTATypes.ACCEPT_ROLES === ctaType) {
    const Button = tmp11(tmp[20]).Button;
    const merged6 = Object.assign(memo);
    const intl = tmp11(tmp[19]).intl;
    return <Button onPress={callback1} text={intl.string(profile(validInviteKey[19]).t.MMlhsr)} />;
  } else {
    return null;
  }
});
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default tmp2;