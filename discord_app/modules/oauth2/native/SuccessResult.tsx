// discord_app/modules/oauth2/native/SuccessResult.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: c10, Permissions: closure_11 } = Constants);
const AppLauncherRouteName = fn(1489).AppLauncherRouteName;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  scrollView: { flex: 1 },
  scrollViewContentContainer: null,
  inner: null,
  text: null,
  footer: null,
  footerLandscape: null,
  footerPortrait: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.scrollViewContentContainer = {
  height: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "center",
};
obj2.inner = { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
obj2.text = { marginTop: 24, paddingHorizontal: 40, textAlign: "center" };
obj2.footer = { flexDirection: "column", justifyContent: "space-between", padding: 16, gap: 16 };
obj2.footerLandscape = { flexDirection: "row-reverse", padding: 16 };
obj2.footerPortrait = { flexDirection: "column", padding: 16 };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  height: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(576).c(66);
      guild = guild.guild;
      const application = guild.application;
      const tmp4 = closure_16();
      guild(8018);
      if (null == application) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(tmp(1126).t["Dp+rgP"]);
          cResult[5] = stringResult;
        }
      } else {
        if (null != guild) {
          let name1;
          if (application != null) {
            name1 = application.name;
          }
          if (cResult[0] === name1) {
            let name3;
            if (guild != null) {
              name3 = guild.name;
            }
            if (cResult[1] === name3) {
              let tmp12 = cResult[2];
            }
            let tmp7 = tmp12;
          }
          const intl2 = tmp(1126).intl;
          let name4;
          if (application != null) {
            name4 = application.name;
          }
          let obj2 = { installedApplicationName: name4, guildName: null };
          class L {
            constructor() {
              tmp = guild;
              id = undefined;
              if (guild != null) {
                id = tmp.id;
              }
              if (null != id) {
                tmp9 = closure_1;
                tmp10 = closure_2;
                arr = closure_1(closure_2[14]);
                arr1 = arr.pop();
                tmp12 = closure_0;
                obj3 = closure_0(closure_2[15]);
                id1 = undefined;
                if (tmp != null) {
                  id1 = tmp.id;
                }
                transitionToGuildResult = obj3.transitionToGuild(id1);
                tmp9Result = tmp9(tmp10[16]);
                tmp5 = AnalyticEvents;
                id2 = undefined;
                if (application != null) {
                  id2 = application.id;
                }
                obj1 = { application_id: null, guild_id: null };
                obj1.application_id = id2;
                id3 = undefined;
                if (tmp != null) {
                  id3 = tmp.id;
                }
                obj1.guild_id = id3;
                trackResult = tmp9Result.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj1);
              }
              return;
            }
          }
          if (guild != null) {
            const name2 = guild.name;
          }
          obj2.guildName = name2;
          const formatResult = intl2.format(tmp(1126).t.IlF6IY, obj2);
          let name5;
          if (application != null) {
            name5 = application.name;
          }
          cResult[0] = name5;
          let name6;
          if (guild != null) {
            name6 = guild.name;
          }
          cResult[1] = name6;
          cResult[2] = formatResult;
          tmp12 = formatResult;
        } else {
          let name7;
          if (application != null) {
            name7 = application.name;
          }
          if (cResult[3] !== name7) {
            const intl = tmp(1126).intl;
            let name8;
            if (application != null) {
              name8 = application.name;
            }
            let obj3 = { installedApplicationName: name8 };
            const formatResult1 = intl.format(tmp(1126).t.vTVC5T, obj3);
            if (application != null) {
              const name = application.name;
            }
            class L {
              constructor() {
                tmp = guild;
                id = undefined;
                if (guild != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  tmp12 = closure_0;
                  obj3 = closure_0(closure_2[15]);
                  id1 = undefined;
                  if (tmp != null) {
                    id1 = tmp.id;
                  }
                  transitionToGuildResult = obj3.transitionToGuild(id1);
                  tmp9Result = tmp9(tmp10[16]);
                  tmp5 = AnalyticEvents;
                  id2 = undefined;
                  if (application != null) {
                    id2 = application.id;
                  }
                  obj1 = { application_id: null, guild_id: null };
                  obj1.application_id = id2;
                  id3 = undefined;
                  if (tmp != null) {
                    id3 = tmp.id;
                  }
                  obj1.guild_id = id3;
                  trackResult = tmp9Result.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj1);
                }
                return;
              }
            }
            cResult[4] = formatResult1;
            tmp7 = formatResult1;
          } else {
            tmp7 = cResult[4];
          }
        }
        let id1;
        if (application != null) {
          id1 = application.id;
        }
        if (cResult[6] === id1) {
          let id2;
          if (guild != null) {
            id2 = guild.id;
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [SelectedChannelStore];
            class H {
              constructor() {
                return closure_1_9.getChannelId();
              }
            }
            cResult[9] = items;
            cResult[10] = H;
            let tmp28 = H;
            let tmp27 = items;
          } else {
            tmp27 = cResult[9];
            tmp28 = cResult[10];
          }
          const stateFromStores = tmp(504).useStateFromStores(tmp27, tmp28);
          class L {
            constructor() {
              tmp = guild;
              id = undefined;
              if (guild != null) {
                id = tmp.id;
              }
              if (null != id) {
                tmp9 = closure_1;
                tmp10 = closure_2;
                arr = closure_1(closure_2[14]);
                arr1 = arr.pop();
                tmp12 = closure_0;
                obj3 = closure_0(closure_2[15]);
                id1 = undefined;
                if (tmp != null) {
                  id1 = tmp.id;
                }
                transitionToGuildResult = obj3.transitionToGuild(id1);
                tmp9Result = tmp9(tmp10[16]);
                tmp5 = AnalyticEvents;
                id2 = undefined;
                if (application != null) {
                  id2 = application.id;
                }
                obj1 = { application_id: null, guild_id: null };
                obj1.application_id = id2;
                id3 = undefined;
                if (tmp != null) {
                  id3 = tmp.id;
                }
                obj1.guild_id = id3;
                trackResult = tmp9Result.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj1);
              }
              return;
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [ChannelStore];
            class H {
              constructor() {
                return closure_1_9.getChannelId();
              }
            }
            cResult[11] = items1;
            let tmp31 = items1;
          } else {
            tmp31 = cResult[11];
          }
          if (cResult[12] !== stateFromStores) {
            const fn = function w() {
              return ChannelStore.getChannel(dependencyMap);
            };
            cResult[12] = stateFromStores;
            class H {
              constructor() {
                return closure_1_9.getChannelId();
              }
            }
            cResult[13] = fn;
            let tmp33 = fn;
          } else {
            tmp33 = cResult[13];
          }
          let tmpResult = tmp(504);
          const stateFromStores1 = tmp(504).useStateFromStores(tmp31, tmp33);
          if (cResult[14] === application) {
            class H {
              constructor() {
                return closure_1_9.getChannelId();
              }
            }
            if (cResult[17] !== undefined) {
              let id3;
              if (application != null) {
                id3 = application.id;
              }
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              cResult[17] = id3;
              cResult[18] = F;
            }
            let id4;
            if (application != null) {
              id4 = application.id;
            }
            if (cResult[19] !== id4) {
              let id5;
              if (application != null) {
                id5 = application.id;
              }
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              cResult[19] = id5;
              cResult[20] = tmp42;
              let tmp40 = tmp42;
            } else {
              tmp40 = cResult[20];
            }
            if (application != null) {
              let id = application.id;
            }
            class L {
              constructor() {
                tmp = guild;
                id = undefined;
                if (guild != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  tmp12 = closure_0;
                  obj3 = closure_0(closure_2[15]);
                  id1 = undefined;
                  if (tmp != null) {
                    id1 = tmp.id;
                  }
                  transitionToGuildResult = obj3.transitionToGuild(id1);
                  tmp9Result = tmp9(tmp10[16]);
                  tmp5 = AnalyticEvents;
                  id2 = undefined;
                  if (application != null) {
                    id2 = application.id;
                  }
                  obj1 = { application_id: null, guild_id: null };
                  obj1.application_id = id2;
                  id3 = undefined;
                  if (tmp != null) {
                    id3 = tmp.id;
                  }
                  obj1.guild_id = id3;
                  trackResult = tmp9Result.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj1);
                }
                return;
              }
            }
            const effect = stateFromStores1.useEffect(tmp40, tmp43);
            const _Symbol4 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [];
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              cResult[23] = items2;
            }
            if (cResult[24] !== stateFromStores1) {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              cResult[25] = Y;
            } else {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
            }
            tmp(504);
            class K {
              constructor() {
                tmp = closure_1;
                tmp2 = closure_2;
                arr = closure_1(closure_2[14]);
                arr1 = arr.pop();
                obj = closure_1(closure_2[18]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp5 = null != closure_2;
                if (tmp5) {
                  tmp6 = application;
                  tmp5 = null != application;
                }
                if (tmp5) {
                  tmpResult = tmp(tmp2[16]);
                  tmp7 = AnalyticEvents;
                  obj1 = { application_id: null };
                  tmp8 = application;
                  obj1.application_id = application.id;
                  trackResult = tmpResult.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj1);
                  tmp10 = globalThis;
                  _setImmediate = setImmediate;
                  setImmediateResult = setImmediate(() => {
                    const bestActiveInput = guild(dependencyMap[19]).getBestActiveInput();
                    if (bestActiveInput != null) {
                      const obj2 = { type: guild(dependencyMap[20]).KeyboardTypes.APP_LAUNCHER, context: null };
                      const obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
                      obj2.context = obj3;
                      bestActiveInput.openCustomKeyboard(obj2);
                    }
                    const obj = guild(dependencyMap[19]);
                  });
                }
                return;
              }
            }
            const _Symbol5 = Symbol;
            ({ container, scrollView, scrollViewContentContainer, inner } = tmp4);
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              tmp53[0] = application(8747);
              const tmp54 = closure_13(closure_4, tmp53);
              cResult[26] = tmp54;
              const tmp51 = tmp54;
            } else {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
            }
            const _Symbol6 = Symbol;
            const text = tmp4.text;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
              const string = tmp56.string;
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              cResult[27] = tmp57;
            } else {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
            }
            if (cResult[28] !== tmp4.text) {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              const tmp59 = closure_13(tmp(4892).Text, { style: null, variant: "text-lg/medium", children: null });
              cResult[28] = tmp4.text;
              cResult[29] = tmp59;
              const obj4 = { style: null, variant: "text-lg/medium", children: null };
            } else {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
            }
            if (cResult[30] === tmp4.text) {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
              if (cResult[33] === tmp4.inner) {
                class Y {
                  constructor() {
                    return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                  }
                }
              }
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              const obj5 = { style: inner, children: null };
              const items3 = [tmp51, tmp58, tmp60];
              obj5.children = items3;
              class L {
                constructor() {
                  tmp = guild;
                  id = undefined;
                  if (guild != null) {
                    id = tmp.id;
                  }
                  if (null != id) {
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    arr = closure_1(closure_2[14]);
                    arr1 = arr.pop();
                    tmp12 = closure_0;
                    obj3 = closure_0(closure_2[15]);
                    id1 = undefined;
                    if (tmp != null) {
                      id1 = tmp.id;
                    }
                    transitionToGuildResult = obj3.transitionToGuild(id1);
                    tmp9Result = tmp9(tmp10[16]);
                    tmp5 = AnalyticEvents;
                    id2 = undefined;
                    if (application != null) {
                      id2 = application.id;
                    }
                    obj1 = { application_id: null, guild_id: null };
                    obj1.application_id = id2;
                    id3 = undefined;
                    if (tmp != null) {
                      id3 = tmp.id;
                    }
                    obj1.guild_id = id3;
                    trackResult = tmp9Result.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj1);
                  }
                  return;
                }
              }
              cResult[33] = tmp4.inner;
              cResult[34] = tmp58;
              cResult[35] = tmp60;
              cResult[36] = tmp62;
              class K {
                constructor() {
                  tmp = closure_1;
                  tmp2 = closure_2;
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[18]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp5 = null != closure_2;
                  if (tmp5) {
                    tmp6 = application;
                    tmp5 = null != application;
                  }
                  if (tmp5) {
                    tmpResult = tmp(tmp2[16]);
                    tmp7 = AnalyticEvents;
                    obj1 = { application_id: null };
                    tmp8 = application;
                    obj1.application_id = application.id;
                    trackResult = tmpResult.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj1);
                    tmp10 = globalThis;
                    _setImmediate = setImmediate;
                    setImmediateResult = setImmediate(() => {
                      const bestActiveInput = guild(dependencyMap[19]).getBestActiveInput();
                      if (bestActiveInput != null) {
                        const obj2 = { type: guild(dependencyMap[20]).KeyboardTypes.APP_LAUNCHER, context: null };
                        const obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
                        obj2.context = obj3;
                        bestActiveInput.openCustomKeyboard(obj2);
                      }
                      const obj = guild(dependencyMap[19]);
                    });
                  }
                  return;
                }
              }
            }
            let tmp61 = null;
            if (null != tmp7) {
              class Y {
                constructor() {
                  return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
                }
              }
              class F {
                constructor() {
                  arr = closure_1(closure_2[14]);
                  arr1 = arr.pop();
                  obj = closure_1(closure_2[16]);
                  id = undefined;
                  if (application != null) {
                    id = application.id;
                  }
                  trackResult = obj.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: id,
                  });
                  return;
                }
              }
              class H {
                constructor() {
                  return closure_1_9.getChannelId();
                }
              }
              tmp61 = closure_13(tmp(4892).Text, { style: null, variant: "text-sm/normal", children: null });
              const obj6 = { style: null, variant: "text-sm/normal", children: null };
            }
            cResult[30] = tmp4.text;
            cResult[31] = tmp7;
            cResult[32] = tmp61;
          }
          class K {
            constructor() {
              tmp = closure_1;
              tmp2 = closure_2;
              arr = closure_1(closure_2[14]);
              arr1 = arr.pop();
              obj = closure_1(closure_2[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp5 = null != closure_2;
              if (tmp5) {
                tmp6 = application;
                tmp5 = null != application;
              }
              if (tmp5) {
                tmpResult = tmp(tmp2[16]);
                tmp7 = AnalyticEvents;
                obj1 = { application_id: null };
                tmp8 = application;
                obj1.application_id = application.id;
                trackResult = tmpResult.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj1);
                tmp10 = globalThis;
                _setImmediate = setImmediate;
                setImmediateResult = setImmediate(() => {
                  const bestActiveInput = guild(dependencyMap[19]).getBestActiveInput();
                  if (bestActiveInput != null) {
                    const obj2 = { type: guild(dependencyMap[20]).KeyboardTypes.APP_LAUNCHER, context: null };
                    const obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
                    obj2.context = obj3;
                    bestActiveInput.openCustomKeyboard(obj2);
                  }
                  const obj = guild(dependencyMap[19]);
                });
              }
              return;
            }
          }
          cResult[14] = application;
          cResult[15] = stateFromStores;
          cResult[16] = K;
          const tmpResult3 = tmp(504);
        }
        if (application != null) {
          class Y {
            constructor() {
              return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
            }
          }
        }
        cResult[6] = undefined;
        if (guild != null) {
          class Y {
            constructor() {
              return closure_8.can(Permissions.SEND_MESSAGES, closure_3);
            }
          }
        }
        class L {
          constructor() {
            tmp = guild;
            id = undefined;
            if (guild != null) {
              id = tmp.id;
            }
            if (null != id) {
              tmp9 = closure_1;
              tmp10 = closure_2;
              arr = closure_1(closure_2[14]);
              arr1 = arr.pop();
              tmp12 = closure_0;
              obj3 = closure_0(closure_2[15]);
              id1 = undefined;
              if (tmp != null) {
                id1 = tmp.id;
              }
              transitionToGuildResult = obj3.transitionToGuild(id1);
              tmp9Result = tmp9(tmp10[16]);
              tmp5 = AnalyticEvents;
              id2 = undefined;
              if (application != null) {
                id2 = application.id;
              }
              obj1 = { application_id: null, guild_id: null };
              obj1.application_id = id2;
              id3 = undefined;
              if (tmp != null) {
                id3 = tmp.id;
              }
              obj1.guild_id = id3;
              trackResult = tmp9Result.track(AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj1);
            }
            return;
          }
        }
        cResult[7] = undefined;
        cResult[8] = L;
      }
      let obj = guild(576);
    }
  : (guild) => {
      guild = guild.guild;
      const application = guild.application;
      let stateFromStores;
      noop = undefined;
      let tmp = closure_16();
      const items = [application, guild];
      const memo = noop.useMemo(() => {
        let obj = application;
        let tmp = null;
        if (null != application) {
          if (tmp != guild) {
            const intl3 = util.intl;
            let name;
            if (obj != tmp) {
              name = obj.name;
            }
            obj = { installedApplicationName: name, guildName: null };
            tmp = guild == tmp;
            let name1;
            if (!tmp) {
              name1 = guild.name;
            }
            obj.guildName = name1;
            let formatResult = intl3.format(util.t.IlF6IY, obj);
          } else {
            const intl2 = util.intl;
            let name2;
            if (obj != tmp) {
              name2 = obj.name;
            }
            const obj2 = { installedApplicationName: name2 };
            formatResult = intl2.format(util.t.vTVC5T, obj2);
          }
        } else {
          const intl = util.intl;
          return intl.string(util.t["Dp+rgP"]);
        }
      }, items);
      const items1 = [guild];
      let id;
      if (application != null) {
        id = application.id;
      }
      items1[1] = id;
      const callback = noop.useCallback(() => {
        let id;
        if (guild != null) {
          id = guild.id;
        }
        if (null != id) {
          ModalActionCreatorsDefault.pop();
          let id1;
          if (guild != null) {
            id1 = guild.id;
          }
          transitionToGuild.transitionToGuild(id1);
          let id2;
          if (application != null) {
            id2 = application.id;
          }
          const obj = { application_id: id2, guild_id: null };
          let id3;
          if (guild != null) {
            id3 = guild.id;
          }
          obj.guild_id = id3;
          AnalyticsUtilsDefault.track(v65535.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
          const tmp9Result = AnalyticsUtilsDefault;
        }
      }, items1);
      let obj = guild(stateFromStores[12]);
      const items2 = [SelectedChannelStore];
      stateFromStores = guild(stateFromStores[17]).useStateFromStores(items2, () => channelId.getChannelId());
      const tmp2Result = guild(stateFromStores[17]);
      const items3 = [ChannelStore];
      noop = guild(stateFromStores[17]).useStateFromStores(items3, () => ChannelStore.getChannel(stateFromStores));
      const items4 = [application, stateFromStores];
      let id1;
      const callback1 = obj2.useCallback(() => {
        ModalActionCreatorsDefault.pop();
        ActionSheetActionCreatorsDefault.hideActionSheet();
        let tmp5 = null != stateFromStores;
        if (tmp5) {
          tmp5 = null != application;
        }
        if (tmp5) {
          let obj2 = { application_id: application.id };
          AnalyticsUtilsDefault.track(v65535.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj2);
          const _setImmediate = setImmediate;
          setImmediate(() => {
            const bestActiveInput = guild(stateFromStores[19]).getBestActiveInput();
            if (bestActiveInput != null) {
              const obj2 = { type: guild(stateFromStores[20]).KeyboardTypes.APP_LAUNCHER, context: null };
              const obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
              obj2.context = obj3;
              bestActiveInput.openCustomKeyboard(obj2);
            }
            const obj = guild(stateFromStores[19]);
          });
          const tmpResult = AnalyticsUtilsDefault;
        }
      }, items4);
      if (application != null) {
        id1 = application.id;
      }
      const items5 = [id1];
      let id2;
      const callback2 = obj2.useCallback(() => {
        ModalActionCreatorsDefault.pop();
        let id;
        if (application != null) {
          id = application.id;
        }
        AnalyticsUtilsDefault.track(v65535.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
      }, items5);
      if (application != null) {
        id2 = application.id;
      }
      const items6 = [id2];
      const effect = obj2.useEffect(() => {
        let id;
        if (application != null) {
          id = application.id;
        }
        AnalyticsUtilsDefault.track(v65535.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
      }, items6);
      const tmp2Result3 = guild(stateFromStores[17]);
      const items7 = [PermissionStore];
      const stateFromStores1 = guild(stateFromStores[17]).useStateFromStores(items7, () =>
        PermissionStore.can(constants.SEND_MESSAGES, closure_3),
      );
      let obj3 = { bottom: true, style: tmp.container, children: null };
      const obj4 = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer, children: null };
      const obj5 = { style: tmp.inner, children: null };
      const tmp2Result4 = guild(stateFromStores[17]);
      const items8 = [closure_13(closure_4, { source: application(stateFromStores[21]) }), ,];
      const obj7 = { style: tmp.text, variant: "text-lg/medium", children: null };
      let intl = tmp2(tmp3[13]).intl;
      obj7.children = intl.string(guild(stateFromStores[13]).t.se5gLj);
      items8[1] = closure_13(guild(stateFromStores[22]).Text, obj7);
      let tmp15Result = null;
      if (null != memo) {
        const obj8 = { style: tmp.text, variant: "text-sm/normal", children: memo };
        tmp15Result = closure_13(tmp2(tmp3[22]).Text, obj8);
      }
      items8[2] = tmp15Result;
      obj5.children = items8;
      obj4.children = closure_14(closure_5, obj5);
      const items9 = [closure_13(closure_6, obj4)];
      const items10 = [tmp.footer];
      const obj9 = { style: null, children: null };
      items10[1] =
        obj.useStore().orientation === guild(stateFromStores[12]).OrientationType.LANDSCAPE
          ? tmp.footerLandscape
          : tmp.footerPortrait;
      obj9.style = items10;
      let tmp15Result3 = null;
      if (null != guild) {
        let intl2 = tmp2(tmp3[13]).intl;
        let name;
        if (guild != null) {
          name = guild.name;
        }
        const obj10 = { size: "lg", text: null, onPress: null };
        const obj11 = { guildName: name };
        obj10.text = intl2.formatToPlainString(tmp2(tmp3[13]).t.UdYYP3, obj11);
        obj10.onPress = callback;
        tmp15Result3 = closure_13(tmp2(tmp3[23]).Button, obj10);
      }
      const items11 = [tmp15Result3, ,];
      let tmp15Result4 = null;
      if (null != stateFromStores) {
        tmp15Result4 = null;
        if (stateFromStores1) {
          const obj12 = { size: "lg", text: null, onPress: null };
          let intl3 = tmp2(tmp3[13]).intl;
          obj12.text = intl3.string(tmp2(tmp3[13]).t["0cCDKP"]);
          obj12.onPress = callback1;
          tmp15Result4 = closure_13(tmp2(tmp3[23]).Button, obj12);
        }
      }
      items11[1] = tmp15Result4;
      let str;
      if (null != guild) {
        str = "tertiary";
      }
      const obj13 = { children: null };
      const obj14 = { size: "lg", variant: str, text: null, onPress: null };
      const intl4 = tmp2(tmp3[13]).intl;
      obj14.text = intl4.string(guild(stateFromStores[13]).t.cpT0Cq);
      obj14.onPress = callback2;
      items11[2] = closure_13(guild(stateFromStores[23]).Button, obj14);
      obj13.children = items11;
      obj9.children = closure_14(closure_15, obj13);
      items9[1] = closure_13(closure_5, obj9);
      obj3.children = items9;
      return closure_14(guild(stateFromStores[24]).SafeAreaPaddingView, obj3);
    };
