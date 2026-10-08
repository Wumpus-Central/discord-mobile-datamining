// discord_app/modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx
import router_utils from "../../../../routing/router_utils.tsx";
import preloaded_user_settings from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../../../instant_invite/native/InstantInviteUtils.tsx";
import HubProgressActionCreators from "../../../HubProgressActionCreators.tsx";
import ContactSyncModalActionCreators from "../../../../contact_sync/native/ContactSyncModalActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../../stores/GuildChannelStore.tsx";

require = fn;
let View = fn(17).View;
const HubProgressBarConstants = fn(8671);
({ HUB_PROGRESS_ACTION_SHEET_ID: metroRequire, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_7 } = HubProgressBarConstants);
const Constants = fn(1085);
({
  AnalyticEvents: closure_8,
  AnalyticsLocations: closure_9,
  InstantInviteSources: c10,
  Routes: closure_11,
} = Constants);
let closure_12 = fn(12025).DirectoryChannelScrollBehavior;
const GuildProgressConstants = fn(12219);
({ AnalyticsActions: map1, AnalyticsSetupTypes: closure_14 } = GuildProgressConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5090);
let closure_17 = createStyles.createStyles({
  container: { padding: 16 },
  footer: { marginTop: 12, display: "flex", alignItems: "center" },
});
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function HubProgressActionSheet(guild) {
      const cResult = guild(hubProgressBarCompletedSteps[11]).c(52);
      guild = guild.guild;
      const analyticsSource = guild.analyticsSource;
      let obj = guild(hubProgressBarCompletedSteps[11]);
      let tmp4 = closure_17();
      hubProgressBarCompletedSteps = guild(hubProgressBarCompletedSteps[12]).useHubProgressBarCompletedSteps(guild);
      const size = hubProgressBarCompletedSteps.size;
      const bound = Math.max(guild(hubProgressBarCompletedSteps[13]).MIN_PROGRESS_PERCENT, (100 * size) / total);
      View = size.useRef(analyticsSource);
      if (cResult[0] !== analyticsSource) {
        const fn = function u() {
          closure_4.current = analyticsSource;
        };
        cResult[0] = analyticsSource;
        cResult[1] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      const effect = obj3.useEffect(tmp8);
      if (cResult[2] !== guild.id) {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
        const items = [guild.id];
        cResult[2] = guild.id;
        cResult[3] = R;
        cResult[4] = items;
        let tmp11 = items;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
        tmp11 = cResult[4];
      }
      const effect1 = obj3.useEffect(R, tmp11);
      if (cResult[5] !== guild.id) {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
        cResult[5] = guild.id;
        cResult[6] = tmp14;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
      }
      if (cResult[7] !== guild) {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
        cResult[7] = guild;
        cResult[8] = tmp16;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
      }
      if (cResult[9] !== hubProgressBarCompletedSteps) {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
        cResult[9] = hubProgressBarCompletedSteps;
        cResult[10] = tmp18;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
      }
      if (cResult[11] === guild.id) {
        class R {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
        if (cResult[14] !== (100 === bound)) {
          class R {
            constructor() {
              obj = closure_1(closure_2[14]);
              obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
              trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
              return;
            }
          }
          if (tmp20) {
            class R {
              constructor() {
                obj = closure_1(closure_2[14]);
                obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                return;
              }
            }
            const stringResult = obj4.string(tmp(tmp2[20]).t);
          } else {
            class R {
              constructor() {
                obj = closure_1(closure_2[14]);
                obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                return;
              }
            }
          }
          cResult[14] = tmp20;
          cResult[15] = stringResult;
        } else {
          class R {
            constructor() {
              obj = closure_1(closure_2[14]);
              obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
              trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
              return;
            }
          }
          const container = tmp4.container;
          if (cResult[16] !== size) {
            class R {
              constructor() {
                obj = closure_1(closure_2[14]);
                obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                return;
              }
            }
            const obj6 = {
              numFinished: size,
              total,
              stepsHook(children, arg1) {
                return closure_1_15(
                  guild(hubProgressBarCompletedSteps[21]).Text,
                  { variant: "text-sm/medium", color: "mobile-text-heading-primary", children },
                  arg1,
                );
              },
            };
            const formatResult = obj5.format(tmp(tmp2[20]).t.l6iRLs, obj6);
            cResult[16] = size;
            cResult[17] = formatResult;
          } else {
            class R {
              constructor() {
                obj = closure_1(closure_2[14]);
                obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                return;
              }
            }
          }
          if (cResult[18] === tmp24) {
            class R {
              constructor() {
                obj = closure_1(closure_2[14]);
                obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                return;
              }
            }
            const _Symbol = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor() {
                  obj = closure_1(closure_2[14]);
                  obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                  trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                  return;
                }
              }
              const stringResult1 = obj8.string(tmp(tmp2[20]).t.iNR25n);
              cResult[21] = stringResult1;
              const tmp29 = stringResult1;
            } else {
              class R {
                constructor() {
                  obj = closure_1(closure_2[14]);
                  obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                  trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                  return;
                }
              }
            }
            if (cResult[22] !== hubProgressBarCompletedSteps) {
              class R {
                constructor() {
                  obj = closure_1(closure_2[14]);
                  obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                  trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                  return;
                }
              }
              const tmp32Result = tmp32(tmp(tmp2[17]).HubProgressStep.JOIN_GUILD);
              cResult[22] = hubProgressBarCompletedSteps;
              cResult[23] = tmp32Result;
            } else {
              class R {
                constructor() {
                  obj = closure_1(closure_2[14]);
                  obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                  trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                  return;
                }
              }
            }
            if (cResult[24] === tmp14) {
              class R {
                constructor() {
                  obj = closure_1(closure_2[14]);
                  obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                  trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                  return;
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor() {
                    obj = closure_1(closure_2[14]);
                    obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                    trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                    return;
                  }
                }
                const stringResult2 = obj10.string(tmp(tmp2[20]).t["3NlTYU"]);
                cResult[27] = stringResult2;
                const tmp41 = stringResult2;
              } else {
                class R {
                  constructor() {
                    obj = closure_1(closure_2[14]);
                    obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                    trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                    return;
                  }
                }
              }
              if (cResult[28] !== hubProgressBarCompletedSteps) {
                class R {
                  constructor() {
                    obj = closure_1(closure_2[14]);
                    obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                    trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                    return;
                  }
                }
                const tmp44Result = tmp44(tmp(tmp2[17]).HubProgressStep.INVITE_USER);
                cResult[28] = hubProgressBarCompletedSteps;
                cResult[29] = tmp44Result;
              } else {
                class R {
                  constructor() {
                    obj = closure_1(closure_2[14]);
                    obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                    trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                    return;
                  }
                }
              }
              if (cResult[30] === tmp16) {
                class R {
                  constructor() {
                    obj = closure_1(closure_2[14]);
                    obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                    trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                    return;
                  }
                }
                const _Symbol3 = Symbol;
                if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                  class R {
                    constructor() {
                      obj = closure_1(closure_2[14]);
                      obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                      return;
                    }
                  }
                  const stringResult3 = obj12.string(tmp(tmp2[20]).t.HFvFte);
                  cResult[33] = stringResult3;
                  const tmp53 = stringResult3;
                } else {
                  class R {
                    constructor() {
                      obj = closure_1(closure_2[14]);
                      obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                      return;
                    }
                  }
                }
                if (cResult[34] !== hubProgressBarCompletedSteps) {
                  class R {
                    constructor() {
                      obj = closure_1(closure_2[14]);
                      obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                      return;
                    }
                  }
                  const tmp56Result = tmp56(tmp(tmp2[17]).HubProgressStep.CONTACT_SYNC);
                  cResult[34] = hubProgressBarCompletedSteps;
                  cResult[35] = tmp56Result;
                } else {
                  class R {
                    constructor() {
                      obj = closure_1(closure_2[14]);
                      obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                      return;
                    }
                  }
                }
                if (cResult[36] === tmp18) {
                  class R {
                    constructor() {
                      obj = closure_1(closure_2[14]);
                      obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                      return;
                    }
                  }
                  if (cResult[39] === tmp20) {
                    class R {
                      constructor() {
                        obj = closure_1(closure_2[14]);
                        obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                        trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                        return;
                      }
                    }
                  }
                  if (tmp20) {
                    class R {
                      constructor() {
                        obj = closure_1(closure_2[14]);
                        obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                        trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                        return;
                      }
                    }
                    const intl2 = tmp(tmp2[20]).intl;
                    tmp68[0] = intl2.string(tmp(tmp2[20]).t["0/5zhg"]);
                    tmp68[1] = tmp19;
                    let tmp65Result = closure_15(tmp(tmp2[27]).Button, tmp68);
                  } else {
                    class R {
                      constructor() {
                        obj = closure_1(closure_2[14]);
                        obj1 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: closure_4.current };
                        trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
                        return;
                      }
                    }
                    tmp66[1] = tmp19;
                    const obj7 = { variant: "text-sm/medium", color: "text-default", children: null };
                    const intl = tmp(tmp2[20]).intl;
                    obj7.children = intl.string(tmp(tmp2[20]).t["9E36wf"]);
                    tmp66[2] = closure_15(tmp(tmp2[21]).Text, obj7);
                    tmp65Result = closure_15(tmp(tmp2[28]).PressableOpacity, tmp66);
                  }
                  cResult[39] = tmp20;
                  cResult[40] = tmp19;
                  cResult[41] = tmp65Result;
                }
                const obj9 = {
                  onPress: tmp18,
                  source: analyticsSource(tmp2[26]),
                  title: tmp53,
                  isCompleted: tmp55,
                  analyticsSetupType: constants5.HUB_PROGRESS,
                  analyticsAction: constants4.CONTACT_SYNC,
                };
                const tmp64 = closure_15(analyticsSource(tmp2[23]), obj9);
                cResult[36] = tmp18;
                cResult[37] = tmp55;
                cResult[38] = tmp64;
                const tmp61 = analyticsSource(tmp2[23]);
              }
              const obj11 = {
                onPress: tmp16,
                source: analyticsSource(tmp2[25]),
                title: tmp41,
                isCompleted: tmp43,
                analyticsSetupType: constants5.HUB_PROGRESS,
                analyticsAction: constants4.INVITE,
              };
              const tmp52 = closure_15(analyticsSource(tmp2[23]), obj11);
              cResult[30] = tmp16;
              cResult[31] = tmp43;
              cResult[32] = tmp52;
              const tmp49 = analyticsSource(tmp2[23]);
            }
            const obj13 = {
              onPress: tmp14,
              source: analyticsSource(tmp2[24]),
              title: tmp29,
              isCompleted: tmp31,
              analyticsSetupType: constants5.HUB_PROGRESS,
              analyticsAction: constants4.JOIN_GUILD,
            };
            const tmp40 = closure_15(analyticsSource(tmp2[23]), obj13);
            cResult[24] = tmp14;
            cResult[25] = tmp31;
            cResult[26] = tmp40;
            const tmp37 = analyticsSource(tmp2[23]);
          }
          const obj14 = { title: tmp21, subtitle: tmp24 };
          const tmp28 = closure_15(tmp(tmp2[22]).GuildProgressHeader, obj14);
          cResult[18] = tmp24;
          cResult[19] = tmp21;
          cResult[20] = tmp28;
        }
      }
      function handleFinishPress() {
        AnalyticsUtilsDefault.track(constants.SERVER_SETUP_CTA_CLICKED, {
          setup_type: constants5.HUB_PROGRESS,
          action: constants4.DISMISS,
          num_total_actions,
          num_actions_completed: size,
        });
        const obj2 = {
          setup_type: constants5.HUB_PROGRESS,
          action: constants4.DISMISS,
          num_total_actions,
          num_actions_completed: size,
        };
        HubProgressActionCreators.skipHubProgress(guild.id);
        ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
      }
      cResult[11] = guild.id;
      cResult[12] = size;
      cResult[13] = handleFinishPress;
      let obj2 = guild(hubProgressBarCompletedSteps[12]);
    }
  : function HubProgressActionSheet(guild) {
      guild = guild.guild;
      const analyticsSource = guild.analyticsSource;
      let hubProgressBarCompletedSteps;
      const tmp = closure_17();
      hubProgressBarCompletedSteps = guild(hubProgressBarCompletedSteps[12]).useHubProgressBarCompletedSteps(guild);
      const size = hubProgressBarCompletedSteps.size;
      const tmp5 = 100 === Math.max(guild(hubProgressBarCompletedSteps[13]).MIN_PROGRESS_PERCENT, (100 * size) / total);
      const ref = size.useRef(analyticsSource);
      const effect = size.useEffect(() => {
        closure_4.current = analyticsSource;
      });
      const items = [guild.id];
      const effect1 = size.useEffect(() => {
        AnalyticsUtilsDefault.track(constants.OPEN_MODAL, {
          type: "Hub Progress Action Sheet",
          guild_id: guild.id,
          source: ref.current,
        });
      }, items);
      const intl = guild(hubProgressBarCompletedSteps[20]).intl;
      const string = intl.string;
      const t = guild(hubProgressBarCompletedSteps[20]).t;
      if (tmp5) {
        let stringResult = string(t.zQ4gGo);
      } else {
        stringResult = string(t.hRVjpT);
      }
      function handleFinishPress() {
        AnalyticsUtilsDefault.track(constants.SERVER_SETUP_CTA_CLICKED, {
          setup_type: constants5.HUB_PROGRESS,
          action: constants4.DISMISS,
          num_total_actions,
          num_actions_completed: size,
        });
        const obj2 = {
          setup_type: constants5.HUB_PROGRESS,
          action: constants4.DISMISS,
          num_total_actions,
          num_actions_completed: size,
        };
        HubProgressActionCreators.skipHubProgress(guild.id);
        ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
      }
      let obj2 = { style: tmp.container, children: null };
      let obj3 = { title: stringResult, subtitle: null };
      const intl2 = tmp2(tmp3[20]).intl;
      obj3.subtitle = intl2.format(guild(hubProgressBarCompletedSteps[20]).t.l6iRLs, {
        numFinished: size,
        total,
        stepsHook(children, arg1) {
          return closure_1_15(
            guild(hubProgressBarCompletedSteps[21]).Text,
            { variant: "text-sm/medium", color: "mobile-text-heading-primary", children },
            arg1,
          );
        },
      });
      const items1 = [closure_15(guild(hubProgressBarCompletedSteps[22]).GuildProgressHeader, obj3), , , ,];
      const obj5 = {
        onPress: function handleJoinGuildPress() {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
          if (null != defaultChannel) {
            const obj2 = { state: null };
            const obj3 = { scrollBehavior: constants.GUILD_LIST_TOP };
            obj2.state = obj3;
            router_utils.transitionTo(closure_2_11.CHANNEL(guild.id, defaultChannel.id), obj2);
            ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
          }
        },
        source: null,
        title: null,
        isCompleted: null,
        analyticsSetupType: null,
        analyticsAction: null,
      };
      let obj = guild(hubProgressBarCompletedSteps[12]);
      let obj4 = {
        numFinished: size,
        total,
        stepsHook(children, arg1) {
          return closure_1_15(
            guild(hubProgressBarCompletedSteps[21]).Text,
            { variant: "text-sm/medium", color: "mobile-text-heading-primary", children },
            arg1,
          );
        },
      };
      obj5.source = analyticsSource(hubProgressBarCompletedSteps[24]);
      const intl3 = tmp2(tmp3[20]).intl;
      obj5.title = intl3.string(guild(hubProgressBarCompletedSteps[20]).t.iNR25n);
      obj5.isCompleted = hubProgressBarCompletedSteps.has(
        guild(hubProgressBarCompletedSteps[17]).HubProgressStep.JOIN_GUILD,
      );
      obj5.analyticsSetupType = constants5.HUB_PROGRESS;
      obj5.analyticsAction = constants4.JOIN_GUILD;
      items1[1] = closure_15(analyticsSource(hubProgressBarCompletedSteps[23]), obj5);
      const obj6 = {
        onPress: function handleInvitePress() {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
          const channels = GuildChannelStore.getChannels(guild.id);
          if (tmp4) {
            const obj = instant_invite_InstantInviteUtils;
            const result = obj.handleOpenInviteActionsheet(guild, defaultChannel.id, channels, constants3.HUB_PROGRESS);
          }
          tmp4 = null != defaultChannel && null != channels;
        },
        source: null,
        title: null,
        isCompleted: null,
        analyticsSetupType: null,
        analyticsAction: null,
      };
      const tmp12 = analyticsSource(hubProgressBarCompletedSteps[23]);
      obj6.source = analyticsSource(hubProgressBarCompletedSteps[25]);
      const intl4 = tmp2(tmp3[20]).intl;
      obj6.title = intl4.string(guild(hubProgressBarCompletedSteps[20]).t["3NlTYU"]);
      obj6.isCompleted = hubProgressBarCompletedSteps.has(
        guild(hubProgressBarCompletedSteps[17]).HubProgressStep.INVITE_USER,
      );
      obj6.analyticsSetupType = constants5.HUB_PROGRESS;
      obj6.analyticsAction = constants4.INVITE;
      items1[2] = closure_15(analyticsSource(hubProgressBarCompletedSteps[23]), obj6);
      const obj7 = {
        onPress: function handleContactSyncPress() {
          if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
            ContactSyncModalActionCreators.openContactSyncModal({}, constants2.HUB_PROGRESS);
            const tmpResult = ContactSyncModalActionCreators;
            ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
          }
        },
        source: null,
        title: null,
        isCompleted: null,
        analyticsSetupType: null,
        analyticsAction: null,
      };
      const tmp13 = analyticsSource(hubProgressBarCompletedSteps[23]);
      obj7.source = analyticsSource(hubProgressBarCompletedSteps[26]);
      const intl5 = tmp2(tmp3[20]).intl;
      obj7.title = intl5.string(guild(hubProgressBarCompletedSteps[20]).t.HFvFte);
      obj7.isCompleted = hubProgressBarCompletedSteps.has(
        guild(hubProgressBarCompletedSteps[17]).HubProgressStep.CONTACT_SYNC,
      );
      obj7.analyticsSetupType = constants5.HUB_PROGRESS;
      obj7.analyticsAction = constants4.CONTACT_SYNC;
      items1[3] = closure_15(analyticsSource(hubProgressBarCompletedSteps[23]), obj7);
      const obj8 = { style: tmp.footer, children: null };
      if (tmp5) {
        const obj9 = { text: null, onPress: null };
        const intl7 = tmp2(tmp3[20]).intl;
        obj9.text = intl7.string(tmp2(tmp3[20]).t["0/5zhg"]);
        obj9.onPress = handleFinishPress;
        let tmp11Result = closure_15(tmp2(tmp3[27]).Button, obj9);
      } else {
        const obj10 = { accessibilityRole: "button", onPress: handleFinishPress, children: null };
        const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl6 = tmp2(tmp3[20]).intl;
        obj11.children = intl6.string(tmp2(tmp3[20]).t["9E36wf"]);
        obj10.children = closure_15(tmp2(tmp3[21]).Text, obj11);
        tmp11Result = closure_15(tmp2(tmp3[28]).PressableOpacity, obj10);
      }
      obj8.children = tmp11Result;
      items1[4] = closure_15(ref, obj8);
      obj2.children = items1;
      const children = closure_16(tmp10, obj2);
      return closure_15(guild(hubProgressBarCompletedSteps[29]).BottomSheet, { startExpanded: true, children });
    };
