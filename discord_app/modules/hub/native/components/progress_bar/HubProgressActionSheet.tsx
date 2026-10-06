// === Module 12339: HubProgressActionSheet ===

// Module 12339 (HubProgressActionSheet)
import react_native from "react-native" /* 17 */;
import router_utils from "router_utils" /* 1112 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9504 */;
import directory_channels_GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 11952 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12340 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9505 */;
import Constants from "Constants" /* 1085 */;
import GuildProgressConstants from "GuildProgressConstants" /* 12140 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let guild;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let View = react_native.View;
({ HUB_PROGRESS_ACTION_SHEET_ID: metroRequire, HUB_PROGRESS_NUM_TOTAL_STEPS: metroImportDefault } = HubProgressBarConstants);
({ AnalyticEvents: metroImportAll, AnalyticsLocations: c9, InstantInviteSources: c10, Routes: unpackModuleId } = Constants);
const constants4 = directory_channels_GuildDirectoryConstants.DirectoryChannelScrollBehavior;
({ AnalyticsActions: map1, AnalyticsSetupTypes: closure_14 } = GuildProgressConstants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = createStyles.createStyles({ container: { padding: 16 }, footer: { marginTop: 12, display: "flex", alignItems: "center" } });
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let hubProgressBarCompletedSteps;
  let intl;
  let items1;
  let obj4;
  let ref;
  let tmp11;
  let tmp8;
  let obj = guild(hubProgressBarCompletedSteps[11]);
  const cResult = obj.c(54);
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let tmp4 = closure_17();
  let obj2 = guild(hubProgressBarCompletedSteps[12]);
  hubProgressBarCompletedSteps = obj2.useHubProgressBarCompletedSteps(guild);
  size = hubProgressBarCompletedSteps.size;
  let obj3 = size;
  const bound = Math.max(guild(hubProgressBarCompletedSteps[13]).MIN_PROGRESS_PERCENT, 100 * size / num_total_actions);
  View = size.useRef(analyticsSource);
  if (cResult[0] !== analyticsSource) {
    const fn = function u() {
      ref.current = analyticsSource;
    };
    cResult[0] = analyticsSource;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  const effect = obj3.useEffect(tmp8);
  if (cResult[2] !== guild.id) {
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current };
        obj.track(metroImportAll.OPEN_MODAL, obj2);
      }
    }
    const items = [guild.id];
    cResult[2] = guild.id;
    cResult[3] = R;
    cResult[4] = items;
    tmp11 = items;
  } else {
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current };
        obj.track(metroImportAll.OPEN_MODAL, obj2);
      }
    }
    tmp11 = cResult[4];
  }
  const effect1 = obj3.useEffect(R, tmp11);
  if (cResult[5] !== guild.id) {
    class A {
      constructor() {
        let obj3;
        const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
        if (null != defaultChannel) {
          const obj2 = { state: obj3 };
          obj3 = { scrollBehavior: constants.GUILD_LIST_TOP };
          const obj = router_utils;
          obj.transitionTo(unpackModuleId.CHANNEL(guild.id, defaultChannel.id), obj2);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet(metroRequire);
        }
      }
    }
    cResult[5] = guild.id;
    cResult[6] = A;
  } else {
    class A {
      constructor() {
        let obj3;
        const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
        if (null != defaultChannel) {
          const obj2 = { state: obj3 };
          obj3 = { scrollBehavior: constants.GUILD_LIST_TOP };
          const obj = router_utils;
          obj.transitionTo(unpackModuleId.CHANNEL(guild.id, defaultChannel.id), obj2);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet(metroRequire);
        }
      }
    }
  }
  if (cResult[7] !== guild) {
    class A {
      constructor() {
        let obj3;
        const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
        if (null != defaultChannel) {
          const obj2 = { state: obj3 };
          obj3 = { scrollBehavior: constants.GUILD_LIST_TOP };
          const obj = router_utils;
          obj.transitionTo(unpackModuleId.CHANNEL(guild.id, defaultChannel.id), obj2);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet(metroRequire);
        }
      }
    }
    cResult[7] = guild;
    cResult[8] = tmp15;
  } else {
    class A {
      constructor() {
        let obj3;
        const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
        if (null != defaultChannel) {
          const obj2 = { state: obj3 };
          obj3 = { scrollBehavior: constants.GUILD_LIST_TOP };
          const obj = router_utils;
          obj.transitionTo(unpackModuleId.CHANNEL(guild.id, defaultChannel.id), obj2);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet(metroRequire);
        }
      }
    }
  }
  if (cResult[9] !== hubProgressBarCompletedSteps) {
    class L {
      constructor() {
        if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
          const tmpResult = ContactSyncModalActionCreators;
          tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet(metroRequire);
        }
      }
    }
    cResult[9] = hubProgressBarCompletedSteps;
    cResult[10] = L;
  } else {
    class L {
      constructor() {
        if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
          const tmpResult = ContactSyncModalActionCreators;
          tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet(metroRequire);
        }
      }
    }
  }
  if (cResult[11] === guild.id) {
    class L {
      constructor() {
        if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
          const tmpResult = ContactSyncModalActionCreators;
          tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet(metroRequire);
        }
      }
    }
    if (cResult[14] !== (100 === bound)) {
      class L {
        constructor() {
          if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
            const tmpResult = ContactSyncModalActionCreators;
            tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(metroRequire);
          }
        }
      }
      const string = tmp20.string;
      const t = tmp(tmp2[20]).t;
      if (100 === bound) {
        class L {
          constructor() {
            if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
              const tmpResult = ContactSyncModalActionCreators;
              tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(metroRequire);
            }
          }
        }
      } else {
        class L {
          constructor() {
            if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
              const tmpResult = ContactSyncModalActionCreators;
              tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(metroRequire);
            }
          }
        }
      }
      cResult[14] = 100 === bound;
      cResult[15] = tmp21;
    } else {
      class L {
        constructor() {
          if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
            const tmpResult = ContactSyncModalActionCreators;
            tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(metroRequire);
          }
        }
      }
    }
    const container = tmp4.container;
    if (cResult[16] !== size) {
      class L {
        constructor() {
          if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
            const tmpResult = ContactSyncModalActionCreators;
            tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(metroRequire);
          }
        }
      }
      const obj5 = {
        numFinished: size,
        total: num_total_actions,
        stepsHook(children, arg1) {
              const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
              return closure_1_15(guild(hubProgressBarCompletedSteps[21]).Text, obj, arg1);
            }
      };
      cResult[16] = size;
      cResult[17] = obj4.format(guild(hubProgressBarCompletedSteps[20]).t.l6iRLs, obj5);
      const formatResult = obj4.format(guild(hubProgressBarCompletedSteps[20]).t.l6iRLs, obj5);
    } else {
      class L {
        constructor() {
          if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
            const tmpResult = ContactSyncModalActionCreators;
            tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(metroRequire);
          }
        }
      }
    }
    if (cResult[18] === tmp22) {
      let tmp27;
      class L {
        constructor() {
          if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
            const tmpResult = ContactSyncModalActionCreators;
            tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(metroRequire);
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
              const tmpResult = ContactSyncModalActionCreators;
              tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(metroRequire);
            }
          }
        }
        const stringResult = obj7.string(guild(hubProgressBarCompletedSteps[20]).t.iNR25n);
        cResult[21] = stringResult;
        tmp27 = stringResult;
      } else {
        class L {
          constructor() {
            if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
              const tmpResult = ContactSyncModalActionCreators;
              tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(metroRequire);
            }
          }
        }
      }
      if (cResult[22] !== hubProgressBarCompletedSteps) {
        class L {
          constructor() {
            if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
              const tmpResult = ContactSyncModalActionCreators;
              tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(metroRequire);
            }
          }
        }
        cResult[22] = hubProgressBarCompletedSteps;
        cResult[23] = tmp30(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.JOIN_GUILD);
        const tmp30Result = tmp30(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.JOIN_GUILD);
      } else {
        class L {
          constructor() {
            if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
              const tmpResult = ContactSyncModalActionCreators;
              tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(metroRequire);
            }
          }
        }
      }
      if (cResult[24] === A) {
        let tmp39;
        class L {
          constructor() {
            if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
              const tmpResult = ContactSyncModalActionCreators;
              tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(metroRequire);
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                const tmpResult = ContactSyncModalActionCreators;
                tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet(metroRequire);
              }
            }
          }
          const stringResult1 = obj9.string(guild(hubProgressBarCompletedSteps[20]).t["3NlTYU"]);
          cResult[27] = stringResult1;
          tmp39 = stringResult1;
        } else {
          class L {
            constructor() {
              if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                const tmpResult = ContactSyncModalActionCreators;
                tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet(metroRequire);
              }
            }
          }
        }
        if (cResult[28] !== hubProgressBarCompletedSteps) {
          class L {
            constructor() {
              if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                const tmpResult = ContactSyncModalActionCreators;
                tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet(metroRequire);
              }
            }
          }
          cResult[28] = hubProgressBarCompletedSteps;
          cResult[29] = tmp42(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.INVITE_USER);
          const tmp42Result = tmp42(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.INVITE_USER);
        } else {
          class L {
            constructor() {
              if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                const tmpResult = ContactSyncModalActionCreators;
                tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet(metroRequire);
              }
            }
          }
        }
        if (cResult[30] === tmp15) {
          let tmp51;
          class L {
            constructor() {
              if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                const tmpResult = ContactSyncModalActionCreators;
                tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet(metroRequire);
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor() {
                if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                  const tmpResult = ContactSyncModalActionCreators;
                  tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet(metroRequire);
                }
              }
            }
            const stringResult2 = obj11.string(guild(hubProgressBarCompletedSteps[20]).t.HFvFte);
            cResult[33] = stringResult2;
            tmp51 = stringResult2;
          } else {
            class L {
              constructor() {
                if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                  const tmpResult = ContactSyncModalActionCreators;
                  tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet(metroRequire);
                }
              }
            }
          }
          if (cResult[34] !== hubProgressBarCompletedSteps) {
            class L {
              constructor() {
                if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                  const tmpResult = ContactSyncModalActionCreators;
                  tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet(metroRequire);
                }
              }
            }
            cResult[34] = hubProgressBarCompletedSteps;
            cResult[35] = tmp54(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.CONTACT_SYNC);
            const tmp54Result = tmp54(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.CONTACT_SYNC);
          } else {
            class L {
              constructor() {
                if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                  const tmpResult = ContactSyncModalActionCreators;
                  tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet(metroRequire);
                }
              }
            }
          }
          if (cResult[36] === L) {
            let tmp66Result;
            class L {
              constructor() {
                if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                  const tmpResult = ContactSyncModalActionCreators;
                  tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet(metroRequire);
                }
              }
            }
            if (cResult[39] !== tmp4.footer) {
              class L {
                constructor() {
                  if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                    const tmpResult = ContactSyncModalActionCreators;
                    tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                    const obj2 = ActionSheetActionCreatorsDefault;
                    obj2.hideActionSheet(metroRequire);
                  }
                }
              }
              tmp64[0] = tmp4.footer;
              cResult[39] = tmp4.footer;
              cResult[40] = tmp64;
            } else {
              class L {
                constructor() {
                  if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                    const tmpResult = ContactSyncModalActionCreators;
                    tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                    const obj2 = ActionSheetActionCreatorsDefault;
                    obj2.hideActionSheet(metroRequire);
                  }
                }
              }
            }
            if (cResult[41] === 100 === bound) {
              class L {
                constructor() {
                  if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                    const tmpResult = ContactSyncModalActionCreators;
                    tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                    const obj2 = ActionSheetActionCreatorsDefault;
                    obj2.hideActionSheet(metroRequire);
                  }
                }
              }
              if (cResult[44] === tmp64) {
                class L {
                  constructor() {
                    if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                      const tmpResult = ContactSyncModalActionCreators;
                      tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                      const obj2 = ActionSheetActionCreatorsDefault;
                      obj2.hideActionSheet(metroRequire);
                    }
                  }
                }
                if (cResult[47] === tmp4.container) {
                  class L {
                    constructor() {
                      if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                        const tmpResult = ContactSyncModalActionCreators;
                        tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                        const obj2 = ActionSheetActionCreatorsDefault;
                        obj2.hideActionSheet(metroRequire);
                      }
                    }
                  }
                }
                const obj6 = { style: container, children: items1 };
                items1 = [tmp24, tmp32, tmp44, tmp56, tmp70];
                const obj8 = { startExpanded: true, children: closure_16(View, obj6) };
                closure_16(View, obj6);
                cResult[47] = tmp4.container;
                cResult[48] = tmp24;
                cResult[49] = tmp32;
                cResult[50] = tmp44;
                cResult[51] = tmp56;
                cResult[52] = tmp70;
                cResult[53] = closure_15(guild(hubProgressBarCompletedSteps[29]).BottomSheet, obj8);
                const tmp79 = closure_15(guild(hubProgressBarCompletedSteps[29]).BottomSheet, obj8);
              }
              const obj10 = { style: tmp64, children: tmp65 };
              cResult[44] = tmp64;
              cResult[45] = tmp65;
              cResult[46] = closure_15(View, obj10);
              const tmp73 = closure_15(View, obj10);
            }
            if (100 === bound) {
              class L {
                constructor() {
                  if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                    const tmpResult = ContactSyncModalActionCreators;
                    tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                    const obj2 = ActionSheetActionCreatorsDefault;
                    obj2.hideActionSheet(metroRequire);
                  }
                }
              }
              const Button = tmp(tmp2[27]).Button;
              const intl2 = tmp(tmp2[20]).intl;
              tmp69[0] = intl2.string(guild(hubProgressBarCompletedSteps[20]).t["0/5zhg"]);
              tmp69[1] = F;
              tmp66Result = closure_15(Button, tmp69);
            } else {
              class L {
                constructor() {
                  if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
                    const tmpResult = ContactSyncModalActionCreators;
                    tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
                    const obj2 = ActionSheetActionCreatorsDefault;
                    obj2.hideActionSheet(metroRequire);
                  }
                }
              }
              tmp67[1] = F;
              const PressableOpacity = tmp(tmp2[28]).PressableOpacity;
              const obj12 = { variant: "text-sm/medium", color: "text-default", children: intl.string(guild(hubProgressBarCompletedSteps[20]).t["9E36wf"]) };
              const Text = tmp(tmp2[21]).Text;
              intl = tmp(tmp2[20]).intl;
              tmp67[2] = closure_15(Text, obj12);
              tmp66Result = closure_15(PressableOpacity, tmp67);
            }
            cResult[41] = 100 === bound;
            cResult[42] = F;
            cResult[43] = tmp66Result;
          }
          const obj13 = { onPress: L, source: analyticsSource(hubProgressBarCompletedSteps[26]), title: tmp51, isCompleted: tmp53, analyticsSetupType: constants6.HUB_PROGRESS, analyticsAction: constants5.CONTACT_SYNC };
          const tmp59 = analyticsSource(hubProgressBarCompletedSteps[23]);
          cResult[36] = L;
          cResult[37] = tmp53;
          cResult[38] = closure_15(tmp59, obj13);
          const tmp62 = closure_15(tmp59, obj13);
        }
        const obj14 = { onPress: tmp15, source: analyticsSource(hubProgressBarCompletedSteps[25]), title: tmp39, isCompleted: tmp41, analyticsSetupType: constants6.HUB_PROGRESS, analyticsAction: constants5.INVITE };
        const tmp47 = analyticsSource(hubProgressBarCompletedSteps[23]);
        cResult[30] = tmp15;
        cResult[31] = tmp41;
        cResult[32] = closure_15(tmp47, obj14);
        const tmp50 = closure_15(tmp47, obj14);
      }
      const obj15 = { onPress: A, source: analyticsSource(hubProgressBarCompletedSteps[24]), title: tmp27, isCompleted: tmp29, analyticsSetupType: constants6.HUB_PROGRESS, analyticsAction: constants5.JOIN_GUILD };
      const tmp35 = analyticsSource(hubProgressBarCompletedSteps[23]);
      cResult[24] = A;
      cResult[25] = tmp29;
      cResult[26] = closure_15(tmp35, obj15);
      const tmp38 = closure_15(tmp35, obj15);
    }
    const obj16 = { title: tmp21, subtitle: tmp22 };
    cResult[18] = tmp22;
    cResult[19] = tmp21;
    cResult[20] = closure_15(guild(hubProgressBarCompletedSteps[22]).GuildProgressHeader, obj16);
    const tmp26 = closure_15(guild(hubProgressBarCompletedSteps[22]).GuildProgressHeader, obj16);
  }
  class F {
    constructor() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { setup_type: constants3.HUB_PROGRESS, action: map1.DISMISS, num_total_actions: metroImportDefault, num_actions_completed: size };
      obj.track(metroImportAll.SERVER_SETUP_CTA_CLICKED, obj2);
      const obj3 = HubProgressActionCreators;
      obj3.skipHubProgress(guild.id);
      const obj4 = ActionSheetActionCreatorsDefault;
      obj4.hideActionSheet(metroRequire);
    }
  }
  cResult[11] = guild.id;
  cResult[12] = size;
  cResult[13] = F;
}) : ((guild) => {
  let Text;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let obj11;
  let obj4;
  let stringResult;
  let tmp11Result;
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let hubProgressBarCompletedSteps;
  const tmp = closure_17();
  let obj = guild(hubProgressBarCompletedSteps[12]);
  hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  size = hubProgressBarCompletedSteps.size;
  const tmp5 = 100 === Math.max(guild(hubProgressBarCompletedSteps[13]).MIN_PROGRESS_PERCENT, 100 * size / num_total_actions);
  const ref = size.useRef(analyticsSource);
  const effect = size.useEffect(() => {
    ref.current = analyticsSource;
  });
  const items = [guild.id];
  const effect1 = size.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current };
    obj.track(metroImportAll.OPEN_MODAL, obj2);
  }, items);
  const intl = guild(hubProgressBarCompletedSteps[20]).intl;
  const string = intl.string;
  const t = guild(hubProgressBarCompletedSteps[20]).t;
  if (tmp5) {
    stringResult = string(t.zQ4gGo);
  } else {
    stringResult = string(t.hRVjpT);
  }
  function handleFinishPress() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { setup_type: constants3.HUB_PROGRESS, action: map1.DISMISS, num_total_actions: metroImportDefault, num_actions_completed: size };
    obj.track(metroImportAll.SERVER_SETUP_CTA_CLICKED, obj2);
    const obj3 = HubProgressActionCreators;
    obj3.skipHubProgress(guild.id);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet(metroRequire);
  }
  let obj2 = { style: tmp.container, children: items1 };
  let obj3 = { title: stringResult, subtitle: intl2.format(guild(hubProgressBarCompletedSteps[20]).t.l6iRLs, obj4) };
  const GuildProgressHeader = tmp2(tmp3[22]).GuildProgressHeader;
  intl2 = tmp2(tmp3[20]).intl;
  obj4 = {
    numFinished: size,
    total: num_total_actions,
    stepsHook(children, arg1) {
      const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
      return closure_1_15(guild(hubProgressBarCompletedSteps[21]).Text, obj, arg1);
    }
  };
  items1 = [closure_15(GuildProgressHeader, obj3), , , , ];
  const obj5 = {
    onPress() {
      let obj3;
      const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
      if (null != defaultChannel) {
        const obj2 = { state: obj3 };
        obj3 = { scrollBehavior: constants.GUILD_LIST_TOP };
        const obj = router_utils;
        obj.transitionTo(unpackModuleId.CHANNEL(guild.id, defaultChannel.id), obj2);
        const obj4 = ActionSheetActionCreatorsDefault;
        obj4.hideActionSheet(metroRequire);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[24]),
    title: intl3.string(guild(hubProgressBarCompletedSteps[20]).t.iNR25n),
    isCompleted: hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.JOIN_GUILD),
    analyticsSetupType: constants6.HUB_PROGRESS,
    analyticsAction: constants5.JOIN_GUILD
  };
  const tmp12 = analyticsSource(hubProgressBarCompletedSteps[23]);
  intl3 = tmp2(tmp3[20]).intl;
  items1[1] = closure_15(tmp12, obj5);
  const obj6 = {
    onPress() {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
      const channels = GuildChannelStore.getChannels(guild.id);
      const tmp4 = null != defaultChannel && null != channels;
      if (tmp4) {
        const obj = instant_invite_InstantInviteUtils;
        const result = obj.handleOpenInviteActionsheet(guild, defaultChannel.id, channels, constants2.HUB_PROGRESS);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[25]),
    title: intl4.string(guild(hubProgressBarCompletedSteps[20]).t["3NlTYU"]),
    isCompleted: hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.INVITE_USER),
    analyticsSetupType: constants6.HUB_PROGRESS,
    analyticsAction: constants5.INVITE
  };
  const tmp13 = analyticsSource(hubProgressBarCompletedSteps[23]);
  intl4 = tmp2(tmp3[20]).intl;
  items1[2] = closure_15(tmp13, obj6);
  const obj7 = {
    onPress() {
      if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
        const tmpResult = ContactSyncModalActionCreators;
        tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet(metroRequire);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[26]),
    title: intl5.string(guild(hubProgressBarCompletedSteps[20]).t.HFvFte),
    isCompleted: hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.CONTACT_SYNC),
    analyticsSetupType: constants6.HUB_PROGRESS,
    analyticsAction: constants5.CONTACT_SYNC
  };
  const tmp14 = analyticsSource(hubProgressBarCompletedSteps[23]);
  intl5 = tmp2(tmp3[20]).intl;
  items1[3] = closure_15(tmp14, obj7);
  const obj8 = { style: items2, children: tmp11Result };
  items2 = [tmp.footer];
  if (tmp5) {
    const obj9 = { text: intl7.string(guild(hubProgressBarCompletedSteps[20]).t["0/5zhg"]), onPress: handleFinishPress };
    const Button = tmp2(tmp3[27]).Button;
    intl7 = tmp2(tmp3[20]).intl;
    tmp11Result = closure_15(Button, obj9);
  } else {
    const obj10 = { accessibilityRole: "button", onPress: handleFinishPress, children: closure_15(Text, obj11) };
    const PressableOpacity = tmp2(tmp3[28]).PressableOpacity;
    obj11 = { variant: "text-sm/medium", color: "text-default", children: intl6.string(guild(hubProgressBarCompletedSteps[20]).t["9E36wf"]) };
    Text = tmp2(tmp3[21]).Text;
    intl6 = tmp2(tmp3[20]).intl;
    tmp11Result = closure_15(PressableOpacity, obj10);
  }
  items1[4] = closure_15(ref, obj8);
  const children = closure_16(tmp10, obj2);
  return closure_15(guild(hubProgressBarCompletedSteps[29]).BottomSheet, { startExpanded: true, children });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default tmp6;