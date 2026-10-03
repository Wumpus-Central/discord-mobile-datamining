// === Module 12324: HubProgressActionSheet ===

// Module 12324 (HubProgressActionSheet)
import router_utils from "router_utils" /* 1112 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9491 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12325 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;

require = fn;
let View = fn(17).View;
const HubProgressBarConstants = fn(9492);
({ HUB_PROGRESS_ACTION_SHEET_ID: metroRequire, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_7 } = HubProgressBarConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_8, AnalyticsLocations: closure_9, InstantInviteSources: c10, Routes: closure_11 } = Constants);
const constants4 = fn(11938).DirectoryChannelScrollBehavior;
const GuildProgressConstants = fn(12125);
({ AnalyticsActions: map1, AnalyticsSetupTypes: closure_14 } = GuildProgressConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4890);
let closure_17 = createStyles.createStyles({ container: { padding: 16 }, footer: { marginTop: 12, display: "flex", alignItems: "center" } });
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(hubProgressBarCompletedSteps[11]).c(54);
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let tmp4 = closure_17();
  let obj = guild(hubProgressBarCompletedSteps[11]);
  hubProgressBarCompletedSteps = guild(hubProgressBarCompletedSteps[12]).useHubProgressBarCompletedSteps(guild);
  const size = hubProgressBarCompletedSteps.size;
  const bound = Math.max(guild(hubProgressBarCompletedSteps[13]).MIN_PROGRESS_PERCENT, 100 * size / num_total_actions);
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
    class A {
      constructor() {
        tmp = guild;
        defaultChannel = closure_5.getDefaultChannel(guild.id);
        if (null != defaultChannel) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp5 = Routes;
          obj1 = { state: null };
          obj5 = { scrollBehavior: null };
          tmp6 = closure_12;
          obj5.scrollBehavior = closure_12.GUILD_LIST_TOP;
          obj1.state = obj5;
          transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp.id, defaultChannel.id), obj1);
          tmp8 = closure_1;
          obj4 = closure_1(closure_2[8]);
          tmp9 = closure_6;
          hideActionSheetResult = obj4.hideActionSheet(closure_6);
        }
        return;
      }
    }
    cResult[5] = guild.id;
    cResult[6] = A;
  } else {
    class A {
      constructor() {
        tmp = guild;
        defaultChannel = closure_5.getDefaultChannel(guild.id);
        if (null != defaultChannel) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp5 = Routes;
          obj1 = { state: null };
          obj5 = { scrollBehavior: null };
          tmp6 = closure_12;
          obj5.scrollBehavior = closure_12.GUILD_LIST_TOP;
          obj1.state = obj5;
          transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp.id, defaultChannel.id), obj1);
          tmp8 = closure_1;
          obj4 = closure_1(closure_2[8]);
          tmp9 = closure_6;
          hideActionSheetResult = obj4.hideActionSheet(closure_6);
        }
        return;
      }
    }
  }
  if (cResult[7] !== guild) {
    class A {
      constructor() {
        tmp = guild;
        defaultChannel = closure_5.getDefaultChannel(guild.id);
        if (null != defaultChannel) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp5 = Routes;
          obj1 = { state: null };
          obj5 = { scrollBehavior: null };
          tmp6 = closure_12;
          obj5.scrollBehavior = closure_12.GUILD_LIST_TOP;
          obj1.state = obj5;
          transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp.id, defaultChannel.id), obj1);
          tmp8 = closure_1;
          obj4 = closure_1(closure_2[8]);
          tmp9 = closure_6;
          hideActionSheetResult = obj4.hideActionSheet(closure_6);
        }
        return;
      }
    }
    cResult[7] = guild;
    cResult[8] = tmp15;
  } else {
    class A {
      constructor() {
        tmp = guild;
        defaultChannel = closure_5.getDefaultChannel(guild.id);
        if (null != defaultChannel) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp5 = Routes;
          obj1 = { state: null };
          obj5 = { scrollBehavior: null };
          tmp6 = closure_12;
          obj5.scrollBehavior = closure_12.GUILD_LIST_TOP;
          obj1.state = obj5;
          transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp.id, defaultChannel.id), obj1);
          tmp8 = closure_1;
          obj4 = closure_1(closure_2[8]);
          tmp9 = closure_6;
          hideActionSheetResult = obj4.hideActionSheet(closure_6);
        }
        return;
      }
    }
  }
  if (cResult[9] !== hubProgressBarCompletedSteps) {
    class L {
      constructor() {
        tmp2 = closure_2;
        tmp = closure_0;
        if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
          tmpResult = tmp(tmp2[18]);
          tmp3 = AnalyticsLocations;
          openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
          tmp5 = closure_1;
          obj2 = closure_1(tmp2[8]);
          tmp6 = closure_6;
          hideActionSheetResult = obj2.hideActionSheet(closure_6);
        }
        return;
      }
    }
    cResult[9] = hubProgressBarCompletedSteps;
    cResult[10] = L;
  } else {
    class L {
      constructor() {
        tmp2 = closure_2;
        tmp = closure_0;
        if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
          tmpResult = tmp(tmp2[18]);
          tmp3 = AnalyticsLocations;
          openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
          tmp5 = closure_1;
          obj2 = closure_1(tmp2[8]);
          tmp6 = closure_6;
          hideActionSheetResult = obj2.hideActionSheet(closure_6);
        }
        return;
      }
    }
  }
  if (cResult[11] === guild.id) {
    class L {
      constructor() {
        tmp2 = closure_2;
        tmp = closure_0;
        if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
          tmpResult = tmp(tmp2[18]);
          tmp3 = AnalyticsLocations;
          openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
          tmp5 = closure_1;
          obj2 = closure_1(tmp2[8]);
          tmp6 = closure_6;
          hideActionSheetResult = obj2.hideActionSheet(closure_6);
        }
        return;
      }
    }
    if (cResult[14] !== (100 === bound)) {
      class L {
        constructor() {
          tmp2 = closure_2;
          tmp = closure_0;
          if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
            tmpResult = tmp(tmp2[18]);
            tmp3 = AnalyticsLocations;
            openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
            tmp5 = closure_1;
            obj2 = closure_1(tmp2[8]);
            tmp6 = closure_6;
            hideActionSheetResult = obj2.hideActionSheet(closure_6);
          }
          return;
        }
      }
      if (tmp18) {
        class L {
          constructor() {
            tmp2 = closure_2;
            tmp = closure_0;
            if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
              tmpResult = tmp(tmp2[18]);
              tmp3 = AnalyticsLocations;
              openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
              tmp5 = closure_1;
              obj2 = closure_1(tmp2[8]);
              tmp6 = closure_6;
              hideActionSheetResult = obj2.hideActionSheet(closure_6);
            }
            return;
          }
        }
        const stringResult = obj4.string(tmp(tmp2[20]).t);
      } else {
        class L {
          constructor() {
            tmp2 = closure_2;
            tmp = closure_0;
            if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
              tmpResult = tmp(tmp2[18]);
              tmp3 = AnalyticsLocations;
              openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
              tmp5 = closure_1;
              obj2 = closure_1(tmp2[8]);
              tmp6 = closure_6;
              hideActionSheetResult = obj2.hideActionSheet(closure_6);
            }
            return;
          }
        }
      }
      cResult[14] = tmp18;
      cResult[15] = stringResult;
    } else {
      class L {
        constructor() {
          tmp2 = closure_2;
          tmp = closure_0;
          if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
            tmpResult = tmp(tmp2[18]);
            tmp3 = AnalyticsLocations;
            openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
            tmp5 = closure_1;
            obj2 = closure_1(tmp2[8]);
            tmp6 = closure_6;
            hideActionSheetResult = obj2.hideActionSheet(closure_6);
          }
          return;
        }
      }
      const container = tmp4.container;
      if (cResult[16] !== size) {
        class L {
          constructor() {
            tmp2 = closure_2;
            tmp = closure_0;
            if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
              tmpResult = tmp(tmp2[18]);
              tmp3 = AnalyticsLocations;
              openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
              tmp5 = closure_1;
              obj2 = closure_1(tmp2[8]);
              tmp6 = closure_6;
              hideActionSheetResult = obj2.hideActionSheet(closure_6);
            }
            return;
          }
        }
        const obj6 = {
          numFinished: size,
          total: num_total_actions,
          stepsHook(children, arg1) {
                  return closure_1_15(guild(hubProgressBarCompletedSteps[21]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
                }
        };
        const formatResult = obj5.format(tmp(tmp2[20]).t.l6iRLs, obj6);
        cResult[16] = size;
        cResult[17] = formatResult;
      } else {
        class L {
          constructor() {
            tmp2 = closure_2;
            tmp = closure_0;
            if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
              tmpResult = tmp(tmp2[18]);
              tmp3 = AnalyticsLocations;
              openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
              tmp5 = closure_1;
              obj2 = closure_1(tmp2[8]);
              tmp6 = closure_6;
              hideActionSheetResult = obj2.hideActionSheet(closure_6);
            }
            return;
          }
        }
      }
      if (cResult[18] === tmp22) {
        class L {
          constructor() {
            tmp2 = closure_2;
            tmp = closure_0;
            if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
              tmpResult = tmp(tmp2[18]);
              tmp3 = AnalyticsLocations;
              openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
              tmp5 = closure_1;
              obj2 = closure_1(tmp2[8]);
              tmp6 = closure_6;
              hideActionSheetResult = obj2.hideActionSheet(closure_6);
            }
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_0;
              if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                tmpResult = tmp(tmp2[18]);
                tmp3 = AnalyticsLocations;
                openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                tmp5 = closure_1;
                obj2 = closure_1(tmp2[8]);
                tmp6 = closure_6;
                hideActionSheetResult = obj2.hideActionSheet(closure_6);
              }
              return;
            }
          }
          const stringResult1 = obj8.string(tmp(tmp2[20]).t.iNR25n);
          cResult[21] = stringResult1;
          const tmp27 = stringResult1;
        } else {
          class L {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_0;
              if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                tmpResult = tmp(tmp2[18]);
                tmp3 = AnalyticsLocations;
                openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                tmp5 = closure_1;
                obj2 = closure_1(tmp2[8]);
                tmp6 = closure_6;
                hideActionSheetResult = obj2.hideActionSheet(closure_6);
              }
              return;
            }
          }
        }
        if (cResult[22] !== hubProgressBarCompletedSteps) {
          class L {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_0;
              if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                tmpResult = tmp(tmp2[18]);
                tmp3 = AnalyticsLocations;
                openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                tmp5 = closure_1;
                obj2 = closure_1(tmp2[8]);
                tmp6 = closure_6;
                hideActionSheetResult = obj2.hideActionSheet(closure_6);
              }
              return;
            }
          }
          const tmp30Result = tmp30(tmp(tmp2[17]).HubProgressStep.JOIN_GUILD);
          cResult[22] = hubProgressBarCompletedSteps;
          cResult[23] = tmp30Result;
        } else {
          class L {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_0;
              if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                tmpResult = tmp(tmp2[18]);
                tmp3 = AnalyticsLocations;
                openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                tmp5 = closure_1;
                obj2 = closure_1(tmp2[8]);
                tmp6 = closure_6;
                hideActionSheetResult = obj2.hideActionSheet(closure_6);
              }
              return;
            }
          }
        }
        if (cResult[24] === A) {
          class L {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_0;
              if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                tmpResult = tmp(tmp2[18]);
                tmp3 = AnalyticsLocations;
                openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                tmp5 = closure_1;
                obj2 = closure_1(tmp2[8]);
                tmp6 = closure_6;
                hideActionSheetResult = obj2.hideActionSheet(closure_6);
              }
              return;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor() {
                tmp2 = closure_2;
                tmp = closure_0;
                if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                  tmpResult = tmp(tmp2[18]);
                  tmp3 = AnalyticsLocations;
                  openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                  tmp5 = closure_1;
                  obj2 = closure_1(tmp2[8]);
                  tmp6 = closure_6;
                  hideActionSheetResult = obj2.hideActionSheet(closure_6);
                }
                return;
              }
            }
            const stringResult2 = obj10.string(tmp(tmp2[20]).t["3NlTYU"]);
            cResult[27] = stringResult2;
            const tmp39 = stringResult2;
          } else {
            class L {
              constructor() {
                tmp2 = closure_2;
                tmp = closure_0;
                if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                  tmpResult = tmp(tmp2[18]);
                  tmp3 = AnalyticsLocations;
                  openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                  tmp5 = closure_1;
                  obj2 = closure_1(tmp2[8]);
                  tmp6 = closure_6;
                  hideActionSheetResult = obj2.hideActionSheet(closure_6);
                }
                return;
              }
            }
          }
          if (cResult[28] !== hubProgressBarCompletedSteps) {
            class L {
              constructor() {
                tmp2 = closure_2;
                tmp = closure_0;
                if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                  tmpResult = tmp(tmp2[18]);
                  tmp3 = AnalyticsLocations;
                  openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                  tmp5 = closure_1;
                  obj2 = closure_1(tmp2[8]);
                  tmp6 = closure_6;
                  hideActionSheetResult = obj2.hideActionSheet(closure_6);
                }
                return;
              }
            }
            const tmp42Result = tmp42(tmp(tmp2[17]).HubProgressStep.INVITE_USER);
            cResult[28] = hubProgressBarCompletedSteps;
            cResult[29] = tmp42Result;
          } else {
            class L {
              constructor() {
                tmp2 = closure_2;
                tmp = closure_0;
                if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                  tmpResult = tmp(tmp2[18]);
                  tmp3 = AnalyticsLocations;
                  openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                  tmp5 = closure_1;
                  obj2 = closure_1(tmp2[8]);
                  tmp6 = closure_6;
                  hideActionSheetResult = obj2.hideActionSheet(closure_6);
                }
                return;
              }
            }
          }
          if (cResult[30] === tmp15) {
            class L {
              constructor() {
                tmp2 = closure_2;
                tmp = closure_0;
                if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                  tmpResult = tmp(tmp2[18]);
                  tmp3 = AnalyticsLocations;
                  openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                  tmp5 = closure_1;
                  obj2 = closure_1(tmp2[8]);
                  tmp6 = closure_6;
                  hideActionSheetResult = obj2.hideActionSheet(closure_6);
                }
                return;
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
              class L {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                    tmpResult = tmp(tmp2[18]);
                    tmp3 = AnalyticsLocations;
                    openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                    tmp5 = closure_1;
                    obj2 = closure_1(tmp2[8]);
                    tmp6 = closure_6;
                    hideActionSheetResult = obj2.hideActionSheet(closure_6);
                  }
                  return;
                }
              }
              const stringResult3 = obj12.string(tmp(tmp2[20]).t.HFvFte);
              cResult[33] = stringResult3;
              const tmp51 = stringResult3;
            } else {
              class L {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                    tmpResult = tmp(tmp2[18]);
                    tmp3 = AnalyticsLocations;
                    openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                    tmp5 = closure_1;
                    obj2 = closure_1(tmp2[8]);
                    tmp6 = closure_6;
                    hideActionSheetResult = obj2.hideActionSheet(closure_6);
                  }
                  return;
                }
              }
            }
            if (cResult[34] !== hubProgressBarCompletedSteps) {
              class L {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                    tmpResult = tmp(tmp2[18]);
                    tmp3 = AnalyticsLocations;
                    openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                    tmp5 = closure_1;
                    obj2 = closure_1(tmp2[8]);
                    tmp6 = closure_6;
                    hideActionSheetResult = obj2.hideActionSheet(closure_6);
                  }
                  return;
                }
              }
              const tmp54Result = tmp54(tmp(tmp2[17]).HubProgressStep.CONTACT_SYNC);
              cResult[34] = hubProgressBarCompletedSteps;
              cResult[35] = tmp54Result;
            } else {
              class L {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                    tmpResult = tmp(tmp2[18]);
                    tmp3 = AnalyticsLocations;
                    openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                    tmp5 = closure_1;
                    obj2 = closure_1(tmp2[8]);
                    tmp6 = closure_6;
                    hideActionSheetResult = obj2.hideActionSheet(closure_6);
                  }
                  return;
                }
              }
            }
            if (cResult[36] === L) {
              class L {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                    tmpResult = tmp(tmp2[18]);
                    tmp3 = AnalyticsLocations;
                    openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                    tmp5 = closure_1;
                    obj2 = closure_1(tmp2[8]);
                    tmp6 = closure_6;
                    hideActionSheetResult = obj2.hideActionSheet(closure_6);
                  }
                  return;
                }
              }
              if (cResult[39] !== tmp4.footer) {
                class L {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                      tmpResult = tmp(tmp2[18]);
                      tmp3 = AnalyticsLocations;
                      openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                      tmp5 = closure_1;
                      obj2 = closure_1(tmp2[8]);
                      tmp6 = closure_6;
                      hideActionSheetResult = obj2.hideActionSheet(closure_6);
                    }
                    return;
                  }
                }
                tmp64[0] = tmp4.footer;
                cResult[39] = tmp4.footer;
                cResult[40] = tmp64;
              } else {
                class L {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                      tmpResult = tmp(tmp2[18]);
                      tmp3 = AnalyticsLocations;
                      openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                      tmp5 = closure_1;
                      obj2 = closure_1(tmp2[8]);
                      tmp6 = closure_6;
                      hideActionSheetResult = obj2.hideActionSheet(closure_6);
                    }
                    return;
                  }
                }
              }
              if (cResult[41] === tmp18) {
                class L {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                      tmpResult = tmp(tmp2[18]);
                      tmp3 = AnalyticsLocations;
                      openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                      tmp5 = closure_1;
                      obj2 = closure_1(tmp2[8]);
                      tmp6 = closure_6;
                      hideActionSheetResult = obj2.hideActionSheet(closure_6);
                    }
                    return;
                  }
                }
              }
              if (tmp18) {
                class L {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                      tmpResult = tmp(tmp2[18]);
                      tmp3 = AnalyticsLocations;
                      openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                      tmp5 = closure_1;
                      obj2 = closure_1(tmp2[8]);
                      tmp6 = closure_6;
                      hideActionSheetResult = obj2.hideActionSheet(closure_6);
                    }
                    return;
                  }
                }
                const intl2 = tmp(tmp2[20]).intl;
                tmp68[0] = intl2.string(tmp(tmp2[20]).t["0/5zhg"]);
                tmp68[1] = F;
                let tmp65Result = closure_15(tmp(tmp2[27]).Button, tmp68);
              } else {
                class L {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    if (!closure_2.has(closure_0(closure_2[17]).HubProgressStep.CONTACT_SYNC)) {
                      tmpResult = tmp(tmp2[18]);
                      tmp3 = AnalyticsLocations;
                      openContactSyncModalResult = tmpResult.openContactSyncModal({}, AnalyticsLocations.HUB_PROGRESS);
                      tmp5 = closure_1;
                      obj2 = closure_1(tmp2[8]);
                      tmp6 = closure_6;
                      hideActionSheetResult = obj2.hideActionSheet(closure_6);
                    }
                    return;
                  }
                }
                tmp66[1] = F;
                const obj7 = { variant: "text-sm/medium", color: "text-default", children: null };
                const intl = tmp(tmp2[20]).intl;
                obj7.children = intl.string(tmp(tmp2[20]).t["9E36wf"]);
                tmp66[2] = closure_15(tmp(tmp2[21]).Text, obj7);
                tmp65Result = closure_15(tmp(tmp2[28]).PressableOpacity, tmp66);
              }
              cResult[41] = tmp18;
              cResult[42] = F;
              cResult[43] = tmp65Result;
            }
            const obj9 = { onPress: L, source: analyticsSource(tmp2[26]), title: tmp51, isCompleted: tmp53, analyticsSetupType: constants6.HUB_PROGRESS, analyticsAction: constants5.CONTACT_SYNC };
            const tmp62 = closure_15(analyticsSource(tmp2[23]), obj9);
            cResult[36] = L;
            cResult[37] = tmp53;
            cResult[38] = tmp62;
            const tmp59 = analyticsSource(tmp2[23]);
          }
          const obj11 = { onPress: tmp15, source: analyticsSource(tmp2[25]), title: tmp39, isCompleted: tmp41, analyticsSetupType: constants6.HUB_PROGRESS, analyticsAction: constants5.INVITE };
          const tmp50 = closure_15(analyticsSource(tmp2[23]), obj11);
          cResult[30] = tmp15;
          cResult[31] = tmp41;
          cResult[32] = tmp50;
          const tmp47 = analyticsSource(tmp2[23]);
        }
        const obj13 = { onPress: A, source: analyticsSource(tmp2[24]), title: tmp27, isCompleted: tmp29, analyticsSetupType: constants6.HUB_PROGRESS, analyticsAction: constants5.JOIN_GUILD };
        const tmp38 = closure_15(analyticsSource(tmp2[23]), obj13);
        cResult[24] = A;
        cResult[25] = tmp29;
        cResult[26] = tmp38;
        const tmp35 = analyticsSource(tmp2[23]);
      }
      const obj14 = { title: tmp19, subtitle: tmp22 };
      const tmp26 = closure_15(tmp(tmp2[22]).GuildProgressHeader, obj14);
      cResult[18] = tmp22;
      cResult[19] = tmp19;
      cResult[20] = tmp26;
    }
  }
  class F {
    constructor() {
      obj = closure_1(closure_2[14]);
      obj1 = { setup_type: AnalyticsSetupTypes.HUB_PROGRESS, action: AnalyticsActions.DISMISS, num_total_actions: closure_7, num_actions_completed: size };
      trackResult = obj.track(AnalyticEvents.SERVER_SETUP_CTA_CLICKED, obj1);
      obj3 = closure_0(closure_2[19]);
      skipHubProgressResult = obj3.skipHubProgress(guild.id);
      obj4 = closure_1(closure_2[8]);
      hideActionSheetResult = obj4.hideActionSheet(closure_6);
      return;
    }
  }
  cResult[11] = guild.id;
  cResult[12] = size;
  cResult[13] = F;
  let obj2 = guild(hubProgressBarCompletedSteps[12]);
}) : ((guild) => {
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let hubProgressBarCompletedSteps;
  const tmp = closure_17();
  hubProgressBarCompletedSteps = guild(hubProgressBarCompletedSteps[12]).useHubProgressBarCompletedSteps(guild);
  const size = hubProgressBarCompletedSteps.size;
  const tmp5 = 100 === Math.max(guild(hubProgressBarCompletedSteps[13]).MIN_PROGRESS_PERCENT, 100 * size / num_total_actions);
  const ref = size.useRef(analyticsSource);
  const effect = size.useEffect(() => {
    closure_4.current = analyticsSource;
  });
  const items = [guild.id];
  const effect1 = size.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current });
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
    AnalyticsUtilsDefault.track(constants.SERVER_SETUP_CTA_CLICKED, { setup_type: constants6.HUB_PROGRESS, action: constants5.DISMISS, num_total_actions, num_actions_completed: size });
    const obj2 = { setup_type: constants6.HUB_PROGRESS, action: constants5.DISMISS, num_total_actions, num_actions_completed: size };
    HubProgressActionCreators.skipHubProgress(guild.id);
    ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
  }
  let obj2 = { style: tmp.container, children: null };
  let obj3 = { title: stringResult, subtitle: null };
  const intl2 = tmp2(tmp3[20]).intl;
  obj3.subtitle = intl2.format(guild(hubProgressBarCompletedSteps[20]).t.l6iRLs, {
    numFinished: size,
    total: num_total_actions,
    stepsHook(children, arg1) {
      return closure_1_15(guild(hubProgressBarCompletedSteps[21]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items1 = [closure_15(guild(hubProgressBarCompletedSteps[22]).GuildProgressHeader, obj3), , , , ];
  const obj5 = {
    onPress() {
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
    analyticsAction: null
  };
  let obj = guild(hubProgressBarCompletedSteps[12]);
  let obj4 = {
    numFinished: size,
    total: num_total_actions,
    stepsHook(children, arg1) {
      return closure_1_15(guild(hubProgressBarCompletedSteps[21]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  };
  obj5.source = analyticsSource(hubProgressBarCompletedSteps[24]);
  const intl3 = tmp2(tmp3[20]).intl;
  obj5.title = intl3.string(guild(hubProgressBarCompletedSteps[20]).t.iNR25n);
  obj5.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.JOIN_GUILD);
  obj5.analyticsSetupType = constants6.HUB_PROGRESS;
  obj5.analyticsAction = constants5.JOIN_GUILD;
  items1[1] = closure_15(analyticsSource(hubProgressBarCompletedSteps[23]), obj5);
  const obj6 = {
    onPress() {
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
    analyticsAction: null
  };
  const tmp12 = analyticsSource(hubProgressBarCompletedSteps[23]);
  obj6.source = analyticsSource(hubProgressBarCompletedSteps[25]);
  const intl4 = tmp2(tmp3[20]).intl;
  obj6.title = intl4.string(guild(hubProgressBarCompletedSteps[20]).t["3NlTYU"]);
  obj6.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.INVITE_USER);
  obj6.analyticsSetupType = constants6.HUB_PROGRESS;
  obj6.analyticsAction = constants5.INVITE;
  items1[2] = closure_15(analyticsSource(hubProgressBarCompletedSteps[23]), obj6);
  const obj7 = {
    onPress() {
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
    analyticsAction: null
  };
  const tmp13 = analyticsSource(hubProgressBarCompletedSteps[23]);
  obj7.source = analyticsSource(hubProgressBarCompletedSteps[26]);
  const intl5 = tmp2(tmp3[20]).intl;
  obj7.title = intl5.string(guild(hubProgressBarCompletedSteps[20]).t.HFvFte);
  obj7.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[17]).HubProgressStep.CONTACT_SYNC);
  obj7.analyticsSetupType = constants6.HUB_PROGRESS;
  obj7.analyticsAction = constants5.CONTACT_SYNC;
  items1[3] = closure_15(analyticsSource(hubProgressBarCompletedSteps[23]), obj7);
  const obj8 = { style: null, children: null };
  const items2 = [tmp.footer];
  obj8.style = items2;
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
});