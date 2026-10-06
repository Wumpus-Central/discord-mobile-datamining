// === Module 17577: InteractionIframeModal ===

// Module 17577 (InteractionIframeModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import v1 from "v1" /* 1266 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 17578 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
let obj2;
function makeIframeId() {
  const obj = v1;
  return obj.v4();
}
const View = react_native.View;
const BotTagTypes = ApplicationConstants.BotTagTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const interaction_iframe_modal = "interaction_iframe_modal";
let obj = { wrapper: obj2, header: { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" }, headerCenterContainer: { flexDirection: "column", alignItems: "center" }, headerTitleContainer: { flexDirection: "row", marginBottom: 2 }, closeButton: { marginEnd: 8 }, spacerView: { marginStart: 8, width: 32 }, botTag: { marginStart: 4 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let first;
  let id;
  let iframeUrl;
  let items1;
  let queryParams;
  let title;
  let tmp10;
  let tmp9;
  const tmp = id;
  let obj = id(R[9]);
  const cResult = obj.c(57);
  const tmp4 = closure_10();
  ({ application, title } = arg0);
  id = application.id;
  const obj2 = id(R[10]);
  const iframeModalState = obj2.useIframeModalState(arg0);
  ({ queryParams, iframeUrl } = iframeModalState);
  [r10027, importDefault] = react.useState(makeIframeId);
  _slicedToArray(react.useState(makeIframeId), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { includeKeyboardHeight: true };
    cResult[0] = obj4;
    first = obj4;
  } else {
    first = cResult[0];
  }
  const insets = require("useSafeAreaInsetsKeyboardAware")(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function k() {
      let obj = id(R[12]);
      obj.lockOrientation("PORTRAIT");
      return () => {
        const obj = id(closure_1_2[12]);
        const result = obj.restoreDefaultOrientation();
      };
    };
    const items = [];
    cResult[1] = fn;
    cResult[2] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp9, tmp10);
  if (cResult[3] !== id) {
    class R {
      constructor() {
        closeIFrameModalDefault(id, undefined);
      }
    }
    cResult[3] = id;
    cResult[4] = R;
  } else {
    class R {
      constructor() {
        closeIFrameModalDefault(id, undefined);
      }
    }
  }
  R = tmp12;
  if (cResult[5] !== tmp12) {
    class H {
      constructor() {
        R();
        return true;
      }
    }
    cResult[5] = tmp12;
    cResult[6] = H;
  } else {
    class H {
      constructor() {
        R();
        return true;
      }
    }
  }
  require("useBackPressHandler")(H);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const obj = v1;
        importDefault(obj.v4());
      }
    }
    cResult[7] = E;
  } else {
    class E {
      constructor() {
        const obj = v1;
        importDefault(obj.v4());
      }
    }
  }
  if (cResult[8] !== tmp12) {
    class A {
      constructor() {
        let intl;
        const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl2.intl;
        open(obj);
        R();
      }
    }
    cResult[8] = tmp12;
    cResult[9] = A;
  } else {
    class A {
      constructor() {
        let intl;
        const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl2.intl;
        open(obj);
        R();
      }
    }
  }
  if (cResult[10] === insets.bottom) {
    class A {
      constructor() {
        let intl;
        const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl2.intl;
        open(obj);
        R();
      }
    }
    if (cResult[13] === tmp4.wrapper) {
      let tmp19;
      let tmp21;
      class A {
        constructor() {
          let intl;
          const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl2.intl;
          open(obj);
          R();
        }
      }
      const _Symbol = Symbol;
      const header = tmp4.header;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            let intl;
            const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl2.intl;
            open(obj);
            R();
          }
        }
        const stringResult = obj6.string(tmp(R[16]).t.cpT0Cq);
        cResult[16] = stringResult;
        tmp19 = stringResult;
      } else {
        class A {
          constructor() {
            let intl;
            const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl2.intl;
            open(obj);
            R();
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            let intl;
            const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl2.intl;
            open(obj);
            R();
          }
        }
        const tmp22 = closure_7(tmp(R[17]).XLargeIcon, {});
        cResult[17] = tmp22;
        tmp21 = tmp22;
      } else {
        class A {
          constructor() {
            let intl;
            const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl2.intl;
            open(obj);
            R();
          }
        }
      }
      if (cResult[18] === tmp12) {
        class A {
          constructor() {
            let intl;
            const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl2.intl;
            open(obj);
            R();
          }
        }
        if (cResult[21] !== application.name) {
          class A {
            constructor() {
              let intl;
              const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl2.intl;
              open(obj);
              R();
            }
          }
          const obj5 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
          cResult[21] = application.name;
          cResult[22] = closure_7(tmp(R[19]).Text, obj5);
          const tmp27 = closure_7(tmp(R[19]).Text, obj5);
        } else {
          class A {
            constructor() {
              let intl;
              const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl2.intl;
              open(obj);
              R();
            }
          }
        }
        if (application.bot != null) {
          class A {
            constructor() {
              let intl;
              const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl2.intl;
              open(obj);
              R();
            }
          }
        }
        if (cResult[23] === tmp4.botTag) {
          class A {
            constructor() {
              let intl;
              const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl2.intl;
              open(obj);
              R();
            }
          }
          if (cResult[26] === tmp4.headerTitleContainer) {
            class A {
              constructor() {
                let intl;
                const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl2.intl;
                open(obj);
                R();
              }
            }
          }
          const obj7 = { style: tmp4.headerTitleContainer, children: items1 };
          items1 = [tmp26, tmp30];
          cResult[26] = tmp4.headerTitleContainer;
          cResult[27] = tmp26;
          cResult[28] = tmp30;
          cResult[29] = closure_8(View, obj7);
          const tmp37 = closure_8(View, obj7);
        }
        const obj8 = { type: BotTagTypes.BOT, verified: undefined, style: tmp4.botTag };
        cResult[23] = tmp4.botTag;
        cResult[24] = undefined;
        cResult[25] = closure_7(require("BotTag"), obj8);
        const tmp33 = closure_7(require("BotTag"), obj8);
      }
      const obj9 = { accessibilityRole: "button", accessibilityLabel: tmp19, onPress: tmp12, style: tmp4.closeButton, children: tmp21 };
      cResult[18] = tmp12;
      cResult[19] = tmp4.closeButton;
      cResult[20] = closure_7(tmp(R[18]).PressableOpacity, obj9);
      const tmp25 = closure_7(tmp(R[18]).PressableOpacity, obj9);
    }
    const items2 = [tmp4.wrapper, tmp17];
    cResult[13] = tmp4.wrapper;
    cResult[14] = tmp17;
    cResult[15] = items2;
  }
  const obj10 = { paddingTop: insets.top, paddingBottom: insets.bottom };
  cResult[10] = insets.bottom;
  cResult[11] = insets.top;
  cResult[12] = obj10;
}) : ((application) => {
  let callback;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let onDisallowedNavigation;
  let tmp2Result;
  let tmp6;
  let verified;
  const tmp = closure_10();
  application = application.application;
  const id = application.id;
  const title = application.title;
  let obj = id(onDisallowedNavigation[10]);
  const iframeModalState = obj.useIframeModalState(application);
  const queryParams = iframeModalState.queryParams;
  const iframeUrl = iframeModalState.iframeUrl;
  [tmp6, importDefault] = react.useState(makeIframeId);
  _slicedToArray(react.useState(makeIframeId), 2);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = id(callback[12]);
    obj.lockOrientation("PORTRAIT");
    return () => {
      const obj = id(callback[12]);
      const result = obj.restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  onDisallowedNavigation = react.useCallback(() => {
    closeIFrameModalDefault(id, undefined);
  }, items);
  const items1 = [onDisallowedNavigation];
  const callback1 = react.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  const obj2 = { style: items2, children: items6 };
  items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj3 = { style: tmp.header, children: items3 };
  const obj4 = { accessibilityRole: "button", accessibilityLabel: intl.string(id(onDisallowedNavigation[16]).t.cpT0Cq), onPress: onDisallowedNavigation, style: tmp.closeButton, children: closure_7(id(onDisallowedNavigation[17]).XLargeIcon, {}) };
  const PressableOpacity = id(onDisallowedNavigation[18]).PressableOpacity;
  intl = id(onDisallowedNavigation[16]).intl;
  items3 = [closure_7(PressableOpacity, obj4), , ];
  const obj6 = { style: tmp.headerTitleContainer, children: items4 };
  items4 = [, ];
  const obj5 = { style: tmp.headerCenterContainer, children: items5 };
  const obj7 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  items4[0] = closure_7(id(onDisallowedNavigation[19]).Text, obj7);
  const bot = application.bot;
  const obj8 = { type: BotTagTypes.BOT, verified, style: tmp.botTag };
  verified = undefined;
  const tmp15 = require("BotTag");
  if (bot != null) {
    verified = bot.verified;
  }
  items4[1] = closure_7(tmp15, obj8);
  items5 = [closure_8(View, obj6), closure_7(id(tmp3[19]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: title })];
  items3[1] = closure_8(View, obj5);
  const obj9 = { style: tmp.spacerView };
  items3[2] = closure_7(View, obj9);
  items6 = [closure_8(View, obj3), ];
  const obj10 = {
    iframeId: tmp6,
    onDisallowedNavigation,
    onActivityCrash() {
      const obj = v1;
      importDefault(obj.v4());
    },
    applicationId: application.id,
    channelId: queryParams.channel_id,
    guildId: queryParams.guild_id,
    activityUrl: iframeUrl,
    activitySessionId: queryParams.instance_id,
    queryParams,
    onLoadError() {
      let intl;
      const obj = { key: interaction_iframe_modal, content: intl.string(intl2.t.HehpFW) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      open(obj);
      callback();
    },
    allowPopups: tmp2Result.allowPopups(application),
    referrerPolicy: "origin",
    isPipOrGridMode: false,
    ignoreSilentHardwareSwitch: false
  };
  const tmp7Result = require("ComponentOwnedWebView");
  tmp2Result = id(onDisallowedNavigation[21]);
  items6[1] = closure_7(tmp7Result, obj10, tmp6);
  return closure_8(View, obj2);
});
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default tmp3;