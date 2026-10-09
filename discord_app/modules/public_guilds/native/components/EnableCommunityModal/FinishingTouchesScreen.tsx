// discord_app/modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx
import BigFlagUtilsAll from "../../../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../../../../../utils/PermissionUtils.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../guild_settings/GuildSettingsActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../../../../guild_settings/GuildSettingsStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";

const require = fn;
const View = fn(17).View;
const PublicGuildsConstants = fn(8046);
({
  CREATE_NEW_CHANNEL_VALUE: closure_9,
  MODERATOR_PERMISSIONS: c10,
  MODERATOR_PERMISSIONS_FLAG: closure_11,
} = PublicGuildsConstants);
const Constants = fn(1085);
({ GuildFeatures: closure_12, HelpdeskArticles: map1, UserNotificationSettings: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FinishingTouchesScreen() {
      const cResult = guild(576).c(59);
      const ref = noop.useRef(null);
      let obj = guild(576);
      const token = guild(4779).useToken(defaultMessageNotifications(587).modules.mobile.TABLE_ROW_PADDING);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildSettingsStore];
        const fn = function b() {
          return props.getProps();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      let obj3 = guild(4779);
      guild = guild(504).useStateFromStoresObject(tmp7, tmp8).guild;
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      defaultMessageNotifications = _slicedToArray(noop.useState(prop), 1)[0];
      const tmpResult = guild(504);
      [tmp15, tmp16] = noop.useState(false);
      if (cResult[2] !== guild) {
        const someResult = closure_10.some((item) => PermissionUtilsAll.canEveryone(item, guild));
        cResult[2] = guild;
        cResult[3] = someResult;
        let tmp17 = someResult;
      } else {
        tmp17 = cResult[3];
      }
      const tmp14 = _slicedToArray(noop.useState(false), 2);
      [tmp21, tmp22] = noop.useState(!tmp17);
      const first1 = _slicedToArray(noop.useState(tmp21), 1)[0];
      let prop1;
      if (guild != null) {
        prop1 = guild.defaultMessageNotifications;
      }
      if (cResult[4] === prop1) {
        if (cResult[5] === defaultMessageNotifications) {
          let tmp25 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function k(features) {
            everyoneRole = undefined;
            if (null != features) {
              everyoneRole = everyoneRole.getEveryoneRole(features);
            }
            if (null != everyoneRole) {
              const _Set = Set;
              const set = new Set(features.features);
              set.add(constants.COMMUNITY);
              const removeResult = BigFlagUtilsAll.remove(everyoneRole.permissions, closure_1_11);
              const obj2 = {};
              const merged = Object.assign(everyoneRole);
              obj2.permissions = removeResult;
              const obj4 = {
                features: set,
                rulesChannelId: null,
                safetyAlertsChannelId: null,
                verificationLevel: null,
                explicitContentFilter: null,
                publicUpdatesChannelId: null,
                defaultMessageNotifications: null,
              };
              let rulesChannelId = features.rulesChannelId;
              if (rulesChannelId == null) {
                rulesChannelId = closure_1_9;
              }
              obj4.rulesChannelId = rulesChannelId;
              ({
                safetyAlertsChannelId: obj6.safetyAlertsChannelId,
                verificationLevel: obj6.verificationLevel,
                explicitContentFilter: obj6.explicitContentFilter,
                publicUpdatesChannelId,
              } = features);
              if (publicUpdatesChannelId == null) {
                publicUpdatesChannelId = closure_1_9;
              }
              obj4.publicUpdatesChannelId = publicUpdatesChannelId;
              obj4.defaultMessageNotifications = features.defaultMessageNotifications;
              first(8621).saveGuild(features.id, obj4);
              if (removeResult !== everyoneRole.permissions) {
                const items = [obj2];
                guild(18288).saveRoleSettings(features.id, items);
                const obj = guild(18288);
              }
              const obj5 = first(8621);
            }
          };
          cResult[7] = fn2;
          let tmp27 = fn2;
        } else {
          tmp27 = cResult[7];
        }
        const tmp28 = tmp5(18335)();
        const enableCommunitySharedStyles = tmp(18334).useEnableCommunitySharedStyles();
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.XGl4ba);
          cResult[8] = stringResult;
          let tmp31 = stringResult;
        } else {
          tmp31 = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = {
            ref,
            accessibilityRole: "header",
            variant: "text-md/semibold",
            color: "text-subtle",
            children: null,
          };
          const intl2 = tmp(1126).intl;
          obj4.children = intl2.formatToPlainString(tmp(1126).t.tInpJj, { number: 3, total: 3 });
          const tmp35 = closure_15(tmp(5087).Text, obj4);
          cResult[9] = tmp35;
          let tmp33 = tmp35;
        } else {
          tmp33 = cResult[9];
        }
        if (cResult[10] !== tmp28.finishingTouches) {
          let obj5 = { resizeMode: "contain", source: tmp28.finishingTouches };
          const tmp38 = closure_15(tmp5(6163), obj5);
          cResult[10] = tmp28.finishingTouches;
          cResult[11] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[11];
        }
        const _Symbol4 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(tmp(1126).t["Pj/s/a"]);
          cResult[12] = stringResult1;
          let tmp39 = stringResult1;
        } else {
          tmp39 = cResult[12];
        }
        if (cResult[13] !== enableCommunitySharedStyles.header) {
          const obj6 = {
            style: enableCommunitySharedStyles.header,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: tmp39,
          };
          const tmp43 = closure_15(tmp(5087).Heading, obj6);
          cResult[13] = enableCommunitySharedStyles.header;
          cResult[14] = tmp43;
          let tmp41 = tmp43;
        } else {
          tmp41 = cResult[14];
        }
        const _Symbol5 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult2 = intl4.string(tmp(1126).t["IL7/no"]);
          cResult[15] = stringResult2;
          let tmp44 = stringResult2;
        } else {
          tmp44 = cResult[15];
        }
        if (cResult[16] !== enableCommunitySharedStyles.description) {
          const obj7 = {
            style: enableCommunitySharedStyles.description,
            variant: "text-md/medium",
            color: "text-subtle",
            children: tmp44,
          };
          const tmp48 = closure_15(tmp(5087).Text, obj7);
          cResult[16] = enableCommunitySharedStyles.description;
          cResult[17] = tmp48;
          let tmp46 = tmp48;
        } else {
          tmp46 = cResult[17];
        }
        if (cResult[18] === enableCommunitySharedStyles.content) {
          if (cResult[19] === tmp41) {
            if (cResult[20] === tmp46) {
              if (cResult[21] === tmp36) {
                let tmp49 = cResult[22];
              }
              if (cResult[23] !== token) {
                const obj8 = { paddingHorizontal: token };
                cResult[23] = token;
                cResult[24] = obj8;
                let tmp53 = obj8;
              } else {
                tmp53 = cResult[24];
              }
              const _Symbol6 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1126).intl;
                const obj9 = {
                  infoHook() {
                    return null;
                  },
                };
                const formatResult = intl5.format(tmp(1126).t.K8Eg4P, obj9);
                cResult[25] = formatResult;
                let tmp54 = formatResult;
              } else {
                tmp54 = cResult[25];
              }
              let prop2;
              if (guild != null) {
                prop2 = guild.defaultMessageNotifications;
              }
              if ((cResult[26] === defaultMessageNotifications) === constants2.ONLY_MENTIONS) {
                if (cResult[27] === tmp25) {
                  if (cResult[28] === tmp58) {
                    let tmp59 = cResult[29];
                  }
                  if (cResult[30] === tmp57) {
                    if (cResult[31] === tmp59) {
                      let tmp62 = cResult[32];
                    }
                    const _Symbol7 = Symbol;
                    if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = tmp(1126).intl;
                      const obj10 = {
                        infoHook() {
                          return null;
                        },
                      };
                      const formatResult1 = intl6.format(tmp(1126).t.v8qCoG, obj10);
                      cResult[33] = formatResult1;
                      let tmp65 = formatResult1;
                    } else {
                      tmp65 = cResult[33];
                    }
                    if (cResult[34] === first1) {
                      if (cResult[35] === tmp21) {
                        let tmp67 = cResult[36];
                      }
                      if (cResult[37] === first1) {
                        if (cResult[38] === tmp67) {
                          let tmp70 = cResult[39];
                        }
                        if (cResult[40] === tmp62) {
                          if (cResult[41] === tmp70) {
                            let tmp73 = cResult[42];
                          }
                          const _Symbol8 = Symbol;
                          if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl7 = tmp(1126).intl;
                            const stringResult3 = intl7.string(tmp(1126).t["k+b2Cf"]);
                            cResult[43] = stringResult3;
                            let tmp76 = stringResult3;
                          } else {
                            tmp76 = cResult[43];
                          }
                          const _Symbol9 = Symbol;
                          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl8 = tmp(1126).intl;
                            const stringResult4 = intl8.string(tmp(1126).t["9AG3wI"]);
                            cResult[44] = stringResult4;
                            let tmp78 = stringResult4;
                          } else {
                            tmp78 = cResult[44];
                          }
                          if (cResult[45] !== tmp15) {
                            const obj11 = { title: tmp76, hasIcons: false, children: null };
                            const obj12 = { label: tmp78, value: tmp15, onValueChange: tmp16 };
                            obj11.children = closure_15(tmp(6889).TableSwitchRow, obj12);
                            const tmp82 = closure_15(tmp(6269).TableRowGroup, obj11);
                            cResult[45] = tmp15;
                            cResult[46] = tmp82;
                            let tmp80 = tmp82;
                          } else {
                            tmp80 = cResult[46];
                          }
                          if (cResult[47] === tmp53) {
                            if (cResult[48] === tmp73) {
                              if (cResult[49] === tmp80) {
                                let tmp83 = cResult[50];
                              }
                              const _Symbol10 = Symbol;
                              if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl9 = tmp(1126).intl;
                                const obj13 = {
                                  communityGuidelines: tmp5(2127).getArticleURL(constants.PUBLIC_GUILD_GUILDLINES),
                                  typesOfGuilds: null,
                                };
                                const tmp5Result = tmp5(2127);
                                obj13.typesOfGuilds = tmp5(2127).getArticleURL(
                                  constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES,
                                );
                                const formatResult2 = intl9.format(tmp(1126).t["BwbW/Q"], obj13);
                                cResult[51] = formatResult2;
                                let tmp86 = formatResult2;
                                const tmp5Result2 = tmp5(2127);
                              } else {
                                tmp86 = cResult[51];
                              }
                              if (cResult[52] !== enableCommunitySharedStyles.formHint) {
                                const obj14 = {
                                  style: enableCommunitySharedStyles.formHint,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: tmp86,
                                };
                                const tmp91 = closure_15(tmp(5087).Text, obj14);
                                cResult[52] = enableCommunitySharedStyles.formHint;
                                cResult[53] = tmp91;
                                let tmp89 = tmp91;
                              } else {
                                tmp89 = cResult[53];
                              }
                              if (cResult[54] === tmp49) {
                                if (cResult[55] === tmp83) {
                                  if (cResult[56] === tmp89) {
                                    if (cResult[57] === tmp30) {
                                      let tmp92 = cResult[58];
                                    }
                                    return tmp92;
                                  }
                                }
                              }
                              const obj15 = {
                                headerRef: ref,
                                currentStep: tmp(18332).EnableCommunityModalSteps.STEP_3,
                                onSuccess: tmp27,
                                disableNextStep: tmp30,
                                buttonText: tmp31,
                                children: null,
                              };
                              const items1 = [tmp49, tmp83, tmp89];
                              obj15.children = items1;
                              const tmp94 = closure_16(tmp(18332).EnableCommunityModalScreen, obj15);
                              cResult[54] = tmp49;
                              cResult[55] = tmp83;
                              cResult[56] = tmp89;
                              cResult[57] = tmp30;
                              cResult[58] = tmp94;
                              tmp92 = tmp94;
                            }
                          }
                          const obj16 = { spacing: 24, style: tmp53, children: null };
                          const items2 = [tmp73, tmp80];
                          obj16.children = items2;
                          const tmp85 = closure_16(tmp(5374).Stack, obj16);
                          cResult[47] = tmp53;
                          cResult[48] = tmp73;
                          cResult[49] = tmp80;
                          cResult[50] = tmp85;
                          tmp83 = tmp85;
                        }
                        const obj17 = { hasIcons: false, children: null };
                        const items3 = [tmp62, tmp70];
                        obj17.children = items3;
                        const tmp75 = closure_16(tmp(6269).TableRowGroup, obj17);
                        cResult[40] = tmp62;
                        cResult[41] = tmp70;
                        cResult[42] = tmp75;
                        tmp73 = tmp75;
                      }
                      const obj18 = { formSwitchDisabled: first1, children: tmp67 };
                      const tmp72 = closure_15(tmp5(18344), obj18);
                      cResult[37] = first1;
                      cResult[38] = tmp67;
                      cResult[39] = tmp72;
                      tmp70 = tmp72;
                    }
                    const obj19 = { label: tmp65, value: tmp21, disabled: first1, onValueChange: tmp22 };
                    const tmp69 = closure_15(tmp(6889).TableSwitchRow, obj19);
                    cResult[34] = first1;
                    cResult[35] = tmp21;
                    cResult[36] = tmp69;
                    tmp67 = tmp69;
                  }
                  const obj20 = { formSwitchDisabled: tmp57, children: tmp59 };
                  const tmp64 = closure_15(tmp5(18344), obj20);
                  cResult[30] = tmp57;
                  cResult[31] = tmp59;
                  cResult[32] = tmp64;
                  tmp62 = tmp64;
                }
              }
              const obj21 = {
                label: tmp54,
                value: prop2 === constants2.ONLY_MENTIONS,
                disabled: defaultMessageNotifications === constants2.ONLY_MENTIONS,
                onValueChange: tmp25,
              };
              const tmp61 = closure_15(tmp(6889).TableSwitchRow, obj21);
              cResult[26] = defaultMessageNotifications === constants2.ONLY_MENTIONS;
              cResult[27] = tmp25;
              cResult[28] = prop2 === constants2.ONLY_MENTIONS;
              cResult[29] = tmp61;
              tmp59 = tmp61;
            }
          }
        }
        const obj22 = { style: enableCommunitySharedStyles.content, children: null };
        const items4 = [tmp33, tmp36, tmp41, tmp46];
        obj22.children = items4;
        const tmp52 = closure_16(View, obj22);
        cResult[18] = enableCommunitySharedStyles.content;
        cResult[19] = tmp41;
        cResult[20] = tmp46;
        cResult[21] = tmp36;
        class A {
          constructor(arg0) {
            tmp = arg0;
            if (arg0) {
              tmp2 = null;
              prop = undefined;
              if (guild != null) {
                prop = guild.defaultMessageNotifications;
              }
              if (prop !== UserNotificationSettings.ONLY_MENTIONS) {
                tmp11 = closure_1;
                tmp12 = closure_3;
                obj3 = closure_1(closure_3[14]);
                obj1 = { defaultMessageNotifications: null };
                obj1.defaultMessageNotifications = tmp4.ONLY_MENTIONS;
                updateGuildResult = obj3.updateGuild(obj1);
              }
              return;
            }
            if (!tmp) {
              tmp5 = closure_1;
              tmp6 = null;
              tmp = null == closure_1;
            }
            if (!tmp) {
              tmp7 = closure_1;
              tmp8 = closure_3;
              obj = closure_1(closure_3[14]);
              obj5 = { defaultMessageNotifications: null };
              tmp9 = closure_1;
              obj5.defaultMessageNotifications = closure_1;
              updateGuildResult1 = obj.updateGuild(obj5);
            }
            return;
          }
        }
        cResult[22] = tmp52;
        tmp49 = tmp52;
        const tmpResult2 = tmp(18334);
      }
      let prop3;
      if (guild != null) {
        prop3 = guild.defaultMessageNotifications;
      }
      class A {
        constructor(arg0) {
          tmp = arg0;
          if (arg0) {
            tmp2 = null;
            prop = undefined;
            if (guild != null) {
              prop = guild.defaultMessageNotifications;
            }
            if (prop !== UserNotificationSettings.ONLY_MENTIONS) {
              tmp11 = closure_1;
              tmp12 = closure_3;
              obj3 = closure_1(closure_3[14]);
              obj1 = { defaultMessageNotifications: null };
              obj1.defaultMessageNotifications = tmp4.ONLY_MENTIONS;
              updateGuildResult = obj3.updateGuild(obj1);
            }
            return;
          }
          if (!tmp) {
            tmp5 = closure_1;
            tmp6 = null;
            tmp = null == closure_1;
          }
          if (!tmp) {
            tmp7 = closure_1;
            tmp8 = closure_3;
            obj = closure_1(closure_3[14]);
            obj5 = { defaultMessageNotifications: null };
            tmp9 = closure_1;
            obj5.defaultMessageNotifications = closure_1;
            updateGuildResult1 = obj.updateGuild(obj5);
          }
          return;
        }
      }
      cResult[4] = prop3;
      cResult[5] = defaultMessageNotifications;
      cResult[6] = A;
      tmp25 = A;
      const tmp11Result = _slicedToArray(noop.useState(!tmp17), 2);
    }
  : function FinishingTouchesScreen() {
      const ref = noop.useRef(null);
      const token = guild(4779).useToken(defaultMessageNotifications(587).modules.mobile.TABLE_ROW_PADDING);
      let obj2 = guild(4779);
      let items = [GuildSettingsStore];
      guild = guild(504).useStateFromStoresObject(items, () => props.getProps()).guild;
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      defaultMessageNotifications = _slicedToArray(noop.useState(prop), 1)[0];
      [first1, obj19.onValueChange] = noop.useState(false);
      let obj3 = guild(504);
      [tmp12, tmp13] = _slicedToArray(
        noop.useState(!closure_10.some((item) => PermissionUtilsAll.canEveryone(item, guild))),
        2,
      );
      const first2 = _slicedToArray(noop.useState(tmp12), 1)[0];
      let prop1;
      if (guild != null) {
        prop1 = guild.defaultMessageNotifications;
      }
      const items1 = [prop1, defaultMessageNotifications];
      const callback = noop.useCallback((arg0) => {
        let tmp = arg0;
        if (arg0) {
          let prop;
          if (guild != null) {
            prop = guild.defaultMessageNotifications;
          }
          if (prop !== constants2.ONLY_MENTIONS) {
            const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
            GuildSettingsActionCreatorsDefault.updateGuild(obj2);
          }
        }
        if (!tmp) {
          tmp = null == defaultMessageNotifications;
        }
        if (!tmp) {
          const obj4 = { defaultMessageNotifications };
          GuildSettingsActionCreatorsDefault.updateGuild(obj4);
        }
      }, items1);
      const callback1 = noop.useCallback((features) => {
        everyoneRole = undefined;
        if (null != features) {
          everyoneRole = everyoneRole.getEveryoneRole(features);
        }
        if (null != everyoneRole) {
          const _Set = Set;
          const set = new Set(features.features);
          set.add(constants.COMMUNITY);
          const removeResult = BigFlagUtilsAll.remove(everyoneRole.permissions, closure_1_11);
          const obj2 = {};
          const merged = Object.assign(everyoneRole);
          obj2.permissions = removeResult;
          const obj4 = {
            features: set,
            rulesChannelId: null,
            safetyAlertsChannelId: null,
            verificationLevel: null,
            explicitContentFilter: null,
            publicUpdatesChannelId: null,
            defaultMessageNotifications: null,
          };
          let rulesChannelId = features.rulesChannelId;
          if (rulesChannelId == null) {
            rulesChannelId = closure_1_9;
          }
          obj4.rulesChannelId = rulesChannelId;
          ({
            safetyAlertsChannelId: obj6.safetyAlertsChannelId,
            verificationLevel: obj6.verificationLevel,
            explicitContentFilter: obj6.explicitContentFilter,
            publicUpdatesChannelId,
          } = features);
          if (publicUpdatesChannelId == null) {
            publicUpdatesChannelId = closure_1_9;
          }
          obj4.publicUpdatesChannelId = publicUpdatesChannelId;
          obj4.defaultMessageNotifications = features.defaultMessageNotifications;
          first(8621).saveGuild(features.id, obj4);
          if (removeResult !== everyoneRole.permissions) {
            const items = [obj2];
            guild(18288).saveRoleSettings(features.id, items);
            const obj = guild(18288);
          }
          const obj5 = first(8621);
        }
      }, []);
      const tmp11 = _slicedToArray(
        noop.useState(!closure_10.some((item) => PermissionUtilsAll.canEveryone(item, guild))),
        2,
      );
      const tmp19 = defaultMessageNotifications(18335)();
      const enableCommunitySharedStyles = guild(18334).useEnableCommunitySharedStyles();
      let obj4 = {
        headerRef: ref,
        currentStep: guild(18332).EnableCommunityModalSteps.STEP_3,
        onSuccess: callback1,
        disableNextStep: !first1,
        buttonText: null,
        children: null,
      };
      const intl = tmp2(1126).intl;
      obj4.buttonText = intl.string(guild(1126).t.XGl4ba);
      let obj5 = { style: enableCommunitySharedStyles.content, children: null };
      const obj6 = {
        ref,
        accessibilityRole: "header",
        variant: "text-md/semibold",
        color: "text-subtle",
        children: null,
      };
      const intl2 = tmp2(1126).intl;
      obj6.children = intl2.formatToPlainString(guild(1126).t.tInpJj, { number: 3, total: 3 });
      const items2 = [
        closure_15(guild(5087).Text, obj6),
        closure_15(defaultMessageNotifications(6163), { resizeMode: "contain", source: tmp19.finishingTouches }),
        ,
      ];
      const obj8 = {
        style: enableCommunitySharedStyles.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl3 = tmp2(1126).intl;
      obj8.children = intl3.string(guild(1126).t["Pj/s/a"]);
      items2[2] = closure_15(guild(5087).Heading, obj8);
      const obj9 = {
        style: enableCommunitySharedStyles.description,
        variant: "text-md/medium",
        color: "text-subtle",
        children: null,
      };
      const intl4 = tmp2(1126).intl;
      obj9.children = intl4.string(guild(1126).t["IL7/no"]);
      items2[3] = closure_15(guild(5087).Text, obj9);
      obj5.children = items2;
      const items3 = [closure_16(View, obj5), ,];
      const obj10 = { spacing: 24, style: { paddingHorizontal: token }, children: null };
      const obj11 = { formSwitchDisabled: defaultMessageNotifications === constants2.ONLY_MENTIONS, children: null };
      const obj7 = { resizeMode: "contain", source: tmp19.finishingTouches };
      const tmp2Result = guild(18334);
      const obj12 = { label: null, value: null, disabled: null, onValueChange: null };
      const intl5 = tmp2(1126).intl;
      obj12.label = intl5.format(guild(1126).t.K8Eg4P, {
        infoHook() {
          return null;
        },
      });
      let prop2;
      if (guild != null) {
        prop2 = guild.defaultMessageNotifications;
      }
      const obj14 = { hasIcons: false, children: null };
      obj12.value = prop2 === constants2.ONLY_MENTIONS;
      obj12.disabled = defaultMessageNotifications === constants2.ONLY_MENTIONS;
      obj12.onValueChange = callback;
      obj11.children = closure_15(guild(6889).TableSwitchRow, obj12);
      const items4 = [closure_15(defaultMessageNotifications(18344), obj11)];
      const obj15 = { formSwitchDisabled: first2, children: null };
      const obj13 = {
        infoHook() {
          return null;
        },
      };
      const tmp4Result = defaultMessageNotifications(18344);
      const obj16 = { label: null, value: null, disabled: null, onValueChange: null };
      const intl6 = tmp2(1126).intl;
      obj16.label = intl6.format(guild(1126).t.v8qCoG, {
        infoHook() {
          return null;
        },
      });
      obj16.value = tmp12;
      obj16.disabled = first2;
      obj16.onValueChange = tmp13;
      obj15.children = closure_15(guild(6889).TableSwitchRow, obj16);
      items4[1] = closure_15(defaultMessageNotifications(18344), obj15);
      obj14.children = items4;
      const items5 = [closure_16(guild(6269).TableRowGroup, obj14)];
      const obj18 = { title: null, hasIcons: false, children: null };
      const intl7 = tmp2(1126).intl;
      obj18.title = intl7.string(guild(1126).t["k+b2Cf"]);
      const obj19 = { label: null, value: null, onValueChange: null };
      const intl8 = tmp2(1126).intl;
      obj19.label = intl8.string(guild(1126).t["9AG3wI"]);
      obj19.value = first1;
      obj18.children = closure_15(guild(6889).TableSwitchRow, obj19);
      items5[1] = closure_15(guild(6269).TableRowGroup, obj18);
      obj10.children = items5;
      items3[1] = closure_16(guild(5374).Stack, obj10);
      const obj20 = {
        style: enableCommunitySharedStyles.formHint,
        variant: "text-xs/medium",
        color: "text-subtle",
        children: null,
      };
      const intl9 = tmp2(1126).intl;
      const obj21 = { communityGuidelines: null, typesOfGuilds: null };
      const obj17 = {
        infoHook() {
          return null;
        },
      };
      const tmp4Result4 = defaultMessageNotifications(18344);
      obj21.communityGuidelines = defaultMessageNotifications(2127).getArticleURL(constants.PUBLIC_GUILD_GUILDLINES);
      const tmp4Result5 = defaultMessageNotifications(2127);
      obj21.typesOfGuilds = defaultMessageNotifications(2127).getArticleURL(
        constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES,
      );
      obj20.children = intl9.format(guild(1126).t["BwbW/Q"], obj21);
      items3[2] = closure_15(guild(5087).Text, obj20);
      obj4.children = items3;
      return closure_16(guild(18332).EnableCommunityModalScreen, obj4);
    };
