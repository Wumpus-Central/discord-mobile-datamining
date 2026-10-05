// === Module 8714: ? ===

// Module 8714
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import transitionToGuild2 from "transitionToGuild" /* 6845 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let arr1, guild, hideActionSheetResult, obj1, setImmediateResult, tmp10, tmp7, tmp8, trackResult;

let c10;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: c10, Permissions: unpackModuleId } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollView: { flex: 1 }, scrollViewContentContainer: obj3, inner: { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, text: { marginTop: 24, paddingHorizontal: 40, textAlign: "center" }, footer: { flexDirection: "column", justifyContent: "space-between", padding: 16, gap: 16 }, footerLandscape: { flexDirection: "row-reverse", padding: 16 }, footerPortrait: { flexDirection: "column", padding: 16 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
let closure_16 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let channelId;
  let container;
  let inner;
  let items4;
  let name3;
  let scrollView;
  let scrollViewContentContainer;
  let stateFromStores;
  let tmp6;
  const tmp = guild;
  const tmp2 = stateFromStores;
  let obj = guild(stateFromStores[11]);
  const cResult = obj.c(66);
  guild = guild.guild;
  const application = guild.application;
  const tmp4 = closure_16();
  let obj2 = guild(stateFromStores[12]);
  const orientation = obj2.useStore().orientation;
  if (null == application) {
    let tmp21;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[13]).intl;
      const stringResult = intl3.string(tmp(tmp2[13]).t["Dp+rgP"]);
      cResult[5] = stringResult;
      tmp21 = stringResult;
    } else {
      tmp21 = cResult[5];
    }
    tmp6 = tmp21;
  } else if (null != guild) {
    let name;
    const first = cResult[0];
    if (application != null) {
      name = application.name;
    }
    if (first === name) {
      let tmp14;
      let name1;
      const tmp12 = cResult[1];
      if (guild != null) {
        name1 = guild.name;
      }
      if (tmp12 === name1) {
        tmp14 = cResult[2];
      }
      tmp6 = tmp14;
    }
    const intl2 = tmp(tmp2[13]).intl;
    const format2 = intl2.format;
    let name2;
    const IlF6IY = tmp(tmp2[13]).t.IlF6IY;
    if (application != null) {
      name2 = application.name;
    }
    let obj3 = { installedApplicationName: name2, guildName: name3 };
    name3 = undefined;
    if (guild != null) {
      name3 = guild.name;
    }
    const format2Result = format2(IlF6IY, obj3);
    let name4;
    if (application != null) {
      name4 = application.name;
    }
    cResult[0] = name4;
    let name5;
    if (guild != null) {
      name5 = guild.name;
    }
    cResult[1] = name5;
    cResult[2] = format2Result;
    tmp14 = format2Result;
  } else {
    let name6;
    const tmp66 = cResult[3];
    if (application != null) {
      name6 = application.name;
    }
    if (tmp66 !== name6) {
      const intl = tmp(tmp2[13]).intl;
      const format = intl.format;
      let name7;
      const vTVC5T = tmp(tmp2[13]).t.vTVC5T;
      if (application != null) {
        name7 = application.name;
      }
      const obj4 = { installedApplicationName: name7 };
      const formatResult = format(vTVC5T, obj4);
      let name8;
      if (application != null) {
        name8 = application.name;
      }
      cResult[3] = name8;
      cResult[4] = formatResult;
      tmp6 = formatResult;
    } else {
      tmp6 = cResult[4];
    }
  }
  let id;
  const tmp23 = cResult[6];
  if (application != null) {
    id = application.id;
  }
  if (tmp23 === id) {
    let tmp30;
    let tmp29;
    let tmp33;
    let tmp35;
    let id1;
    if (guild != null) {
      id1 = guild.id;
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SelectedChannelStore];
      class H {
        constructor() {
          return channelId.getChannelId();
        }
      }
      cResult[9] = items;
      cResult[10] = H;
      tmp30 = H;
      tmp29 = items;
    } else {
      tmp29 = cResult[9];
      tmp30 = cResult[10];
    }
    let tmpResult = tmp(tmp2[17]);
    stateFromStores = tmpResult.useStateFromStores(tmp29, tmp30);
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ChannelStore];
      class H {
        constructor() {
          return channelId.getChannelId();
        }
      }
      cResult[11] = items1;
      tmp33 = items1;
    } else {
      tmp33 = cResult[11];
    }
    if (cResult[12] !== stateFromStores) {
      const fn = function w() {
        return ChannelStore.getChannel(stateFromStores);
      };
      cResult[12] = stateFromStores;
      class H {
        constructor() {
          return channelId.getChannelId();
        }
      }
      cResult[13] = fn;
      tmp35 = fn;
    } else {
      tmp35 = cResult[13];
    }
    const tmpResult3 = tmp(tmp2[17]);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp33, tmp35);
    if (cResult[14] === application) {
      let tmp44;
      let tmp48;
      const tmp38 = cResult[17];
      class H {
        constructor() {
          return channelId.getChannelId();
        }
      }
      if (tmp38 !== undefined) {
        let id2;
        if (application != null) {
          id2 = application.id;
        }
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        cResult[17] = id2;
        cResult[18] = F;
      }
      let id3;
      const tmp42 = cResult[19];
      if (application != null) {
        id3 = application.id;
      }
      if (tmp42 !== id3) {
        let id4;
        if (application != null) {
          id4 = application.id;
        }
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        cResult[19] = id4;
        cResult[20] = tmp46;
        tmp44 = tmp46;
      } else {
        tmp44 = cResult[20];
      }
      let id5;
      if (application != null) {
        id5 = application.id;
      }
      if (cResult[21] !== id5) {
        const items2 = [id5];
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        cResult[22] = items2;
        tmp48 = items2;
      } else {
        tmp48 = cResult[22];
      }
      const effect = stateFromStores1.useEffect(tmp44, tmp48);
      const _Symbol4 = Symbol;
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [];
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        cResult[23] = items3;
      }
      if (cResult[24] !== stateFromStores1) {
        class Y {
          constructor() {
            return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
          }
        }
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        cResult[25] = Y;
      } else {
        class Y {
          constructor() {
            return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
          }
        }
      }
      tmp(tmp2[17]);
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
              let obj3;
              const obj = guild(stateFromStores[19]);
              const bestActiveInput = obj.getBestActiveInput();
              if (bestActiveInput != null) {
                const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                const obj2 = { type: guild(stateFromStores[20]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
                obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
                openCustomKeyboard(obj2);
              }
            });
          }
          return;
        }
      }
      const _Symbol5 = Symbol;
      ({ container, scrollView, scrollViewContentContainer, inner } = tmp4);
      class L {
        constructor() {
          let id3;
          let id;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id1;
            const transitionToGuild = transitionToGuild2.transitionToGuild;
            transitionToGuild2;
            if (guild != null) {
              id1 = guild.id;
            }
            transitionToGuild(id1);
            let id2;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id2 = application.id;
            }
            const obj = { application_id: id2, guild_id: id3 };
            id3 = undefined;
            if (guild != null) {
              id3 = guild.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
          }
        }
      }
      const _Symbol6 = Symbol;
      const text = tmp4.text;
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
          }
        }
        const string = tmp59.string;
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        cResult[27] = tmp60;
      } else {
        class Y {
          constructor() {
            return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
          }
        }
      }
      if (cResult[28] !== tmp4.text) {
        class Y {
          constructor() {
            return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
          }
        }
        const obj5 = { style: null, variant: "text-lg/medium", children: null };
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        cResult[28] = tmp4.text;
        cResult[29] = closure_13(tmp(tmp2[22]).Text, obj5);
        const tmp62 = closure_13(tmp(tmp2[22]).Text, obj5);
      } else {
        class Y {
          constructor() {
            return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
          }
        }
      }
      if (cResult[30] === tmp4.text) {
        class Y {
          constructor() {
            return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
          }
        }
        if (cResult[33] === tmp4.inner) {
          class Y {
            constructor() {
              return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
            }
          }
        }
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        const obj6 = { style: inner, children: items4 };
        items4 = [tmp57, tmp61, tmp63];
        cResult[33] = tmp4.inner;
        cResult[34] = tmp61;
        cResult[35] = tmp63;
        cResult[36] = closure_14(closure_5, obj6);
        closure_14(closure_5, obj6);
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
                let obj3;
                const obj = guild(stateFromStores[19]);
                const bestActiveInput = obj.getBestActiveInput();
                if (bestActiveInput != null) {
                  const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                  const obj2 = { type: guild(stateFromStores[20]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
                  obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
                  openCustomKeyboard(obj2);
                }
              });
            }
            return;
          }
        }
      }
      let tmp64 = null;
      if (null != tmp6) {
        class Y {
          constructor() {
            return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
          }
        }
        const obj7 = { style: null, variant: "text-sm/normal", children: null };
        class F {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        class H {
          constructor() {
            return channelId.getChannelId();
          }
        }
        tmp64 = closure_13(tmp(tmp2[22]).Text, obj7);
      }
      cResult[30] = tmp4.text;
      cResult[31] = tmp6;
      cResult[32] = tmp64;
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
            let obj3;
            const obj = guild(stateFromStores[19]);
            const bestActiveInput = obj.getBestActiveInput();
            if (bestActiveInput != null) {
              const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
              const obj2 = { type: guild(stateFromStores[20]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
              obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
              openCustomKeyboard(obj2);
            }
          });
        }
        return;
      }
    }
    cResult[14] = application;
    cResult[15] = stateFromStores;
    cResult[16] = K;
    class L {
      constructor() {
        let id3;
        let id;
        if (guild != null) {
          id = guild.id;
        }
        if (null != id) {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
          let id1;
          const transitionToGuild = transitionToGuild2.transitionToGuild;
          transitionToGuild2;
          if (guild != null) {
            id1 = guild.id;
          }
          transitionToGuild(id1);
          let id2;
          const track = AnalyticsUtilsDefault.track;
          const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
          AnalyticsUtilsDefault;
          if (application != null) {
            id2 = application.id;
          }
          const obj = { application_id: id2, guild_id: id3 };
          id3 = undefined;
          if (guild != null) {
            id3 = guild.id;
          }
          track(OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
        }
      }
    }
  }
  if (application != null) {
    class Y {
      constructor() {
        return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
      }
    }
  }
  cResult[6] = undefined;
  if (guild != null) {
    class Y {
      constructor() {
        return PermissionStore.can(unpackModuleId.SEND_MESSAGES, stateFromStores1);
      }
    }
  }
  class L {
    constructor() {
      let id3;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      if (null != id) {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        let id1;
        const transitionToGuild = transitionToGuild2.transitionToGuild;
        transitionToGuild2;
        if (guild != null) {
          id1 = guild.id;
        }
        transitionToGuild(id1);
        let id2;
        const track = AnalyticsUtilsDefault.track;
        const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
        AnalyticsUtilsDefault;
        if (application != null) {
          id2 = application.id;
        }
        const obj = { application_id: id2, guild_id: id3 };
        id3 = undefined;
        if (guild != null) {
          id3 = guild.id;
        }
        track(OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
      }
    }
  }
  cResult[7] = undefined;
  cResult[8] = L;
}) : ((guild) => {
  let channelId;
  let closure_3;
  let intl;
  let intl3;
  let intl4;
  let items8;
  let items9;
  let obj11;
  let obj13;
  let obj5;
  guild = guild.guild;
  const application = guild.application;
  let stateFromStores;
  react = undefined;
  const tmp = closure_16();
  const tmp2 = guild;
  let obj = guild(stateFromStores[12]);
  let obj2 = react;
  const items = [application, guild];
  const orientation = obj.useStore().orientation;
  const memo = react.useMemo(() => {
    let name1;
    let stringResult;
    if (null != application) {
      let format2Result;
      if (null != guild) {
        const intl3 = intl5.intl;
        const format2 = intl3.format;
        let name;
        const IlF6IY = intl5.t.IlF6IY;
        if (application != null) {
          name = application.name;
        }
        const obj2 = { installedApplicationName: name, guildName: name1 };
        name1 = undefined;
        if (guild != null) {
          name1 = guild.name;
        }
        format2Result = format2(IlF6IY, obj2);
      } else {
        const intl2 = intl5.intl;
        const format = intl2.format;
        let name2;
        const vTVC5T = intl5.t.vTVC5T;
        if (application != null) {
          name2 = application.name;
        }
        const obj = { installedApplicationName: name2 };
        format2Result = format(vTVC5T, obj);
      }
      stringResult = format2Result;
    } else {
      const intl = intl5.intl;
      stringResult = intl.string(intl5.t["Dp+rgP"]);
    }
    return stringResult;
  }, items);
  const items1 = [guild, ];
  let id;
  const useCallback = react.useCallback;
  if (application != null) {
    id = application.id;
  }
  items1[1] = id;
  const callback = useCallback(() => {
    let id3;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      let id1;
      const transitionToGuild = transitionToGuild2.transitionToGuild;
      transitionToGuild2;
      if (guild != null) {
        id1 = guild.id;
      }
      transitionToGuild(id1);
      let id2;
      const track = AnalyticsUtilsDefault.track;
      const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
      AnalyticsUtilsDefault;
      if (application != null) {
        id2 = application.id;
      }
      const obj = { application_id: id2, guild_id: id3 };
      id3 = undefined;
      if (guild != null) {
        id3 = guild.id;
      }
      track(OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
    }
  }, items1);
  const items2 = [SelectedChannelStore];
  const tmp2Result = tmp2(stateFromStores[17]);
  stateFromStores = tmp2Result.useStateFromStores(items2, () => channelId.getChannelId());
  const items3 = [ChannelStore];
  const tmp2Result3 = tmp2(stateFromStores[17]);
  react = tmp2Result3.useStateFromStores(items3, () => ChannelStore.getChannel(stateFromStores));
  const items4 = [application, stateFromStores];
  let id1;
  const callback1 = obj2.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const tmp5 = null != stateFromStores && null != application;
    if (tmp5) {
      let obj2 = { application_id: application.id };
      const tmpResult = AnalyticsUtilsDefault;
      tmpResult.track(authStore.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj2);
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj3;
        const obj = guild(stateFromStores[19]);
        const bestActiveInput = obj.getBestActiveInput();
        if (bestActiveInput != null) {
          const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
          const obj2 = { type: guild(stateFromStores[20]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
          obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
          openCustomKeyboard(obj2);
        }
      });
    }
  }, items4);
  const useCallback2 = obj2.useCallback;
  if (application != null) {
    id1 = application.id;
  }
  const items5 = [id1];
  let id2;
  const callback2 = useCallback2(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    let id;
    const track = AnalyticsUtilsDefault.track;
    const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
    AnalyticsUtilsDefault;
    if (application != null) {
      id = application.id;
    }
    track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
  }, items5);
  const useEffect = obj2.useEffect;
  if (application != null) {
    id2 = application.id;
  }
  const items6 = [id2];
  const effect = useEffect(() => {
    let id;
    const track = AnalyticsUtilsDefault.track;
    const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = authStore.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
    AnalyticsUtilsDefault;
    if (application != null) {
      id = application.id;
    }
    track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
  }, items6);
  const items7 = [PermissionStore];
  const tmp2Result4 = tmp2(stateFromStores[17]);
  const stateFromStores1 = tmp2Result4.useStateFromStores(items7, () => PermissionStore.can(unpackModuleId.SEND_MESSAGES, closure_3));
  let obj3 = { bottom: true, style: tmp.container, children: items9 };
  const obj4 = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer, children: closure_14(closure_5, obj5) };
  obj5 = { style: tmp.inner, children: items8 };
  const obj6 = { source: application(stateFromStores[21]) };
  const SafeAreaPaddingView = tmp2(tmp3[24]).SafeAreaPaddingView;
  items8 = [closure_13(closure_4, obj6), , ];
  const obj7 = { style: tmp.text, variant: "text-lg/medium", children: intl.string(tmp2(stateFromStores[13]).t.se5gLj) };
  const Text = tmp2(tmp3[22]).Text;
  intl = tmp2(tmp3[13]).intl;
  items8[1] = closure_13(Text, obj7);
  let tmp15Result = null;
  if (null != memo) {
    const obj8 = { style: tmp.text, variant: "text-sm/normal", children: memo };
    tmp15Result = closure_13(tmp2(tmp3[22]).Text, obj8);
  }
  items8[2] = tmp15Result;
  items9 = [closure_13(closure_6, obj4), ];
  const items10 = [tmp.footer, ];
  const obj9 = { style: items10, children: closure_14(closure_15, obj13) };
  items10[1] = orientation === tmp2(stateFromStores[12]).OrientationType.LANDSCAPE ? tmp.footerLandscape : tmp.footerPortrait;
  let tmp15Result3 = null;
  if (null != guild) {
    const Button = tmp2(tmp3[23]).Button;
    let intl2 = tmp2(tmp3[13]).intl;
    const formatToPlainString = intl2.formatToPlainString;
    let name;
    const UdYYP3 = tmp2(tmp3[13]).t.UdYYP3;
    if (guild != null) {
      name = guild.name;
    }
    const obj10 = { size: "lg", text: formatToPlainString(UdYYP3, obj11), onPress: callback };
    obj11 = { guildName: name };
    tmp15Result3 = closure_13(Button, obj10);
  }
  const items11 = [tmp15Result3, , ];
  let tmp15Result4 = null;
  if (null != stateFromStores) {
    tmp15Result4 = null;
    if (stateFromStores1) {
      const obj12 = { size: "lg", text: intl3.string(tmp2(stateFromStores[13]).t["0cCDKP"]), onPress: callback1 };
      const Button2 = tmp2(tmp3[23]).Button;
      intl3 = tmp2(tmp3[13]).intl;
      tmp15Result4 = closure_13(Button2, obj12);
    }
  }
  items11[1] = tmp15Result4;
  let str;
  const Button3 = tmp2(tmp3[23]).Button;
  if (null != guild) {
    str = "tertiary";
  }
  obj13 = { children: items11 };
  const obj14 = { size: "lg", variant: str, text: intl4.string(tmp2(stateFromStores[13]).t.cpT0Cq), onPress: callback2 };
  intl4 = tmp2(tmp3[13]).intl;
  items11[2] = closure_13(Button3, obj14);
  items9[1] = closure_13(closure_5, obj9);
  return closure_14(SafeAreaPaddingView, obj3);
});
const result = size.fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default tmp6;