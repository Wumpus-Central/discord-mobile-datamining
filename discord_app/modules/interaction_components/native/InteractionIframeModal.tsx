// === Module 17508: InteractionIframeModal ===

// Module 17508 (InteractionIframeModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import v1 from "v1" /* 1266 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5780 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import BotTagDefault from "BotTag" /* 8961 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 17509 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function makeIframeId() {
  return v1.v4();
}
const View = fn(17).View;
const BotTagTypes = fn(1360).BotTagTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const interaction_iframe_modal = "interaction_iframe_modal";
const createStyles = fn(4890);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 }, header: { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" }, headerCenterContainer: { flexDirection: "column", alignItems: "center" }, headerTitleContainer: { flexDirection: "row", marginBottom: 2 }, closeButton: { marginEnd: 8 }, spacerView: { marginStart: 8, width: 32 }, botTag: { marginStart: 4 } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = id(576).c(57);
  const tmp4 = closure_10();
  ({ application, title } = arg0);
  id = application.id;
  const obj = id(576);
  const iframeModalState = id(17496).useIframeModalState(arg0);
  ({ queryParams, iframeUrl } = iframeModalState);
  let obj2 = id(17496);
  [r10027, importDefault] = noop.useState(makeIframeId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { includeKeyboardHeight: true };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function k() {
      id(8008).lockOrientation("PORTRAIT");
      return () => {
        const result = id(dependencyMap[12]).restoreDefaultOrientation();
      };
    };
    const items = [];
    cResult[1] = fn;
    cResult[2] = items;
    let tmp10 = items;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp9, tmp10);
  if (cResult[3] !== id) {
    class R {
      constructor() {
        tmp = closure_1(closure_2[13])(id, undefined);
        return;
      }
    }
    cResult[3] = id;
    cResult[4] = R;
  } else {
    class R {
      constructor() {
        tmp = closure_1(closure_2[13])(id, undefined);
        return;
      }
    }
  }
  dependencyMap = R;
  if (cResult[5] !== R) {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[5] = R;
    cResult[6] = H;
  } else {
    class H {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  useBackPressHandlerDefault(H);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_0(closure_2[7]);
        tmp = closure_1(obj.v4());
        return;
      }
    }
    cResult[7] = E;
  } else {
    class E {
      constructor() {
        obj = closure_0(closure_2[7]);
        tmp = closure_1(obj.v4());
        return;
      }
    }
  }
  if (cResult[8] !== R) {
    class A {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { key: interaction_iframe_modal, content: null };
        intl = closure_0(closure_2[16]).intl;
        obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
        openResult = obj.open(obj1);
        tmp2 = closure_2();
        return;
      }
    }
    cResult[8] = R;
    cResult[9] = A;
  } else {
    class A {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { key: interaction_iframe_modal, content: null };
        intl = closure_0(closure_2[16]).intl;
        obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
        openResult = obj.open(obj1);
        tmp2 = closure_2();
        return;
      }
    }
  }
  if (cResult[10] === insets.bottom) {
    class A {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { key: interaction_iframe_modal, content: null };
        intl = closure_0(closure_2[16]).intl;
        obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
        openResult = obj.open(obj1);
        tmp2 = closure_2();
        return;
      }
    }
    if (cResult[13] === tmp4.wrapper) {
      class A {
        constructor() {
          obj = closure_1(closure_2[15]);
          obj1 = { key: interaction_iframe_modal, content: null };
          intl = closure_0(closure_2[16]).intl;
          obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
          openResult = obj.open(obj1);
          tmp2 = closure_2();
          return;
        }
      }
      const _Symbol = Symbol;
      const header = tmp4.header;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { key: interaction_iframe_modal, content: null };
            intl = closure_0(closure_2[16]).intl;
            obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
            openResult = obj.open(obj1);
            tmp2 = closure_2();
            return;
          }
        }
        const stringResult = obj6.string(tmp(1126).t.cpT0Cq);
        cResult[16] = stringResult;
        const tmp19 = stringResult;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { key: interaction_iframe_modal, content: null };
            intl = closure_0(closure_2[16]).intl;
            obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
            openResult = obj.open(obj1);
            tmp2 = closure_2();
            return;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { key: interaction_iframe_modal, content: null };
            intl = closure_0(closure_2[16]).intl;
            obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
            openResult = obj.open(obj1);
            tmp2 = closure_2();
            return;
          }
        }
        const tmp22 = closure_7(tmp(4795).XLargeIcon, {});
        cResult[17] = tmp22;
        const tmp21 = tmp22;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { key: interaction_iframe_modal, content: null };
            intl = closure_0(closure_2[16]).intl;
            obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
            openResult = obj.open(obj1);
            tmp2 = closure_2();
            return;
          }
        }
      }
      if (cResult[18] === R) {
        class A {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { key: interaction_iframe_modal, content: null };
            intl = closure_0(closure_2[16]).intl;
            obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
            openResult = obj.open(obj1);
            tmp2 = closure_2();
            return;
          }
        }
        if (cResult[21] !== application.name) {
          class A {
            constructor() {
              obj = closure_1(closure_2[15]);
              obj1 = { key: interaction_iframe_modal, content: null };
              intl = closure_0(closure_2[16]).intl;
              obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
              openResult = obj.open(obj1);
              tmp2 = closure_2();
              return;
            }
          }
          const obj5 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
          const tmp27 = closure_7(tmp(4886).Text, obj5);
          cResult[21] = application.name;
          cResult[22] = tmp27;
        } else {
          class A {
            constructor() {
              obj = closure_1(closure_2[15]);
              obj1 = { key: interaction_iframe_modal, content: null };
              intl = closure_0(closure_2[16]).intl;
              obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
              openResult = obj.open(obj1);
              tmp2 = closure_2();
              return;
            }
          }
        }
        if (application.bot != null) {
          class A {
            constructor() {
              obj = closure_1(closure_2[15]);
              obj1 = { key: interaction_iframe_modal, content: null };
              intl = closure_0(closure_2[16]).intl;
              obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
              openResult = obj.open(obj1);
              tmp2 = closure_2();
              return;
            }
          }
        }
        if (cResult[23] === tmp4.botTag) {
          class A {
            constructor() {
              obj = closure_1(closure_2[15]);
              obj1 = { key: interaction_iframe_modal, content: null };
              intl = closure_0(closure_2[16]).intl;
              obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
              openResult = obj.open(obj1);
              tmp2 = closure_2();
              return;
            }
          }
          if (cResult[26] === tmp4.headerTitleContainer) {
            class A {
              constructor() {
                obj = closure_1(closure_2[15]);
                obj1 = { key: interaction_iframe_modal, content: null };
                intl = closure_0(closure_2[16]).intl;
                obj1.content = intl.string(closure_0(closure_2[16]).t.HehpFW);
                openResult = obj.open(obj1);
                tmp2 = closure_2();
                return;
              }
            }
          }
          const obj7 = { style: tmp4.headerTitleContainer, children: null };
          const items1 = [tmp26, tmp30];
          obj7.children = items1;
          const tmp37 = closure_8(View, obj7);
          cResult[26] = tmp4.headerTitleContainer;
          cResult[27] = tmp26;
          cResult[28] = tmp30;
          cResult[29] = tmp37;
        }
        const obj8 = { type: BotTagTypes.BOT, verified: undefined, style: tmp4.botTag };
        const tmp33 = closure_7(BotTagDefault, obj8);
        cResult[23] = tmp4.botTag;
        cResult[24] = undefined;
        cResult[25] = tmp33;
      }
      const obj9 = { accessibilityRole: "button", accessibilityLabel: tmp19, onPress: R, style: tmp4.closeButton, children: tmp21 };
      const tmp25 = closure_7(tmp(5909).PressableOpacity, obj9);
      cResult[18] = R;
      cResult[19] = tmp4.closeButton;
      cResult[20] = tmp25;
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
  const tmp6 = _slicedToArray(noop.useState(makeIframeId), 2);
}) : ((children) => {
  const tmp = closure_10();
  const application = children.application;
  const id = application.id;
  const iframeModalState = id(onDisallowedNavigation[10]).useIframeModalState(children);
  const queryParams = iframeModalState.queryParams;
  const obj = id(onDisallowedNavigation[10]);
  [tmp6, importDefault] = noop.useState(makeIframeId);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = noop.useLayoutEffect(() => {
    id(callback[12]).lockOrientation("PORTRAIT");
    return () => {
      const result = id(callback[12]).restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  onDisallowedNavigation = noop.useCallback(() => {
    closeIFrameModalDefault(id, undefined);
  }, items);
  const items1 = [onDisallowedNavigation];
  const callback1 = noop.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  let obj2 = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj2.style = items2;
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  let intl = id(onDisallowedNavigation[16]).intl;
  obj4.accessibilityLabel = intl.string(id(onDisallowedNavigation[16]).t.cpT0Cq);
  obj4.onPress = onDisallowedNavigation;
  obj4.style = tmp.closeButton;
  obj4.children = closure_7(id(onDisallowedNavigation[17]).XLargeIcon, {});
  const items3 = [closure_7(id(onDisallowedNavigation[18]).PressableOpacity, obj4), , ];
  const obj5 = { style: tmp.headerCenterContainer, children: null };
  const obj6 = { style: tmp.headerTitleContainer, children: null };
  const items4 = [closure_7(id(onDisallowedNavigation[19]).Text, { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  const obj8 = { type: BotTagTypes.BOT, verified: null, style: null };
  const bot = application.bot;
  let verified;
  const obj7 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  const tmp5 = _slicedToArray(noop.useState(makeIframeId), 2);
  if (bot != null) {
    verified = bot.verified;
  }
  obj8.verified = verified;
  obj8.style = tmp.botTag;
  items4[1] = closure_7(require("BotTag"), obj8);
  obj6.children = items4;
  const items5 = [closure_8(View, obj6), closure_7(id(onDisallowedNavigation[19]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: children.title })];
  obj5.children = items5;
  items3[1] = closure_8(View, obj5);
  items3[2] = closure_7(View, { style: tmp.spacerView });
  obj3.children = items3;
  const items6 = [closure_8(View, obj3), ];
  const obj10 = {
    iframeId: tmp6,
    onDisallowedNavigation,
    onActivityCrash() {
      importDefault(v1.v4());
    },
    applicationId: application.id,
    channelId: queryParams.channel_id,
    guildId: queryParams.guild_id,
    activityUrl: iframeModalState.iframeUrl,
    activitySessionId: queryParams.instance_id,
    queryParams,
    onLoadError() {
      const obj2 = { key: interaction_iframe_modal, content: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t.HehpFW);
      ToastActionCreatorsDefault.open(obj2);
      callback();
    },
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: false,
    ignoreSilentHardwareSwitch: false
  };
  const obj9 = { style: tmp.spacerView };
  const tmp15 = require("BotTag");
  const tmp7Result = require("ComponentOwnedWebView");
  obj10.allowPopups = id(onDisallowedNavigation[21]).allowPopups(application);
  items6[1] = closure_7(tmp7Result, obj10, tmp6);
  obj2.children = items6;
  return closure_8(View, obj2);
});