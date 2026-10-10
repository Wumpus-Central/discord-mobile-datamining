// === Module 18085: InteractionIframeModal ===

// Module 18085 (InteractionIframeModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5372 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6664 */;
import BotTagDefault from "BotTag" /* 8766 */;
import makeIframeIdDefault from "makeIframeId" /* 10929 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 18086 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const BotTagTypes = fn(1373).BotTagTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const interaction_iframe_modal = "interaction_iframe_modal";
const createStyles = fn(5092);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 }, header: { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" }, headerCenterContainer: { flexDirection: "column", alignItems: "center" }, headerTitleContainer: { flexDirection: "row", marginBottom: 2 }, closeButton: { marginEnd: 8 }, spacerView: { marginStart: 8, width: 32 }, botTag: { marginStart: 4 } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InteractionIframeModal(arg0) {
  const cResult = id2(576).c(60);
  const tmp4 = closure_10();
  ({ application, title, id } = arg0);
  id2 = application.id;
  const obj = id2(576);
  const iframeModalState = id2(18073).useIframeModalState(arg0);
  ({ queryParams, iframeUrl } = iframeModalState);
  let obj2 = id2(18073);
  [r10030, importDefault] = noop.useState(makeIframeIdDefault);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { includeKeyboardHeight: true };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        obj = id(closure_2[12]);
        lockOrientationResult = obj.lockOrientation("PORTRAIT");
        return () => { ... };
      }
    }
    const items = [];
    cResult[1] = B;
    cResult[2] = items;
    let tmp10 = items;
  } else {
    class B {
      constructor() {
        obj = id(closure_2[12]);
        lockOrientationResult = obj.lockOrientation("PORTRAIT");
        return () => { ... };
      }
    }
    tmp10 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(B, tmp10);
  if (cResult[3] !== id2) {
    class A {
      constructor() {
        tmp = closure_1(closure_2[13])(id, undefined);
        return;
      }
    }
    cResult[3] = id2;
    cResult[4] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_1(closure_2[13])(id, undefined);
        return;
      }
    }
  }
  dependencyMap = A;
  if (cResult[5] !== A) {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[5] = A;
    cResult[6] = D;
  } else {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  useBackPressHandlerDefault(D);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[7] = tmp16;
  } else {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  if (cResult[8] !== A) {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    cResult[8] = A;
    cResult[9] = tmp18;
  } else {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
  }
  if (cResult[10] === insets.bottom) {
    class D {
      constructor() {
        tmp = closure_2();
        return true;
      }
    }
    if (cResult[13] === tmp4.wrapper) {
      class D {
        constructor() {
          tmp = closure_2();
          return true;
        }
      }
      const _Symbol = Symbol;
      const header = tmp4.header;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        const stringResult = obj6.string(tmp(1126).t.cpT0Cq);
        cResult[16] = stringResult;
        const tmp21 = stringResult;
      } else {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        const tmp24 = closure_7(tmp(10258).XLargeIcon, {});
        cResult[17] = tmp24;
        const tmp23 = tmp24;
      } else {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
      }
      if (cResult[18] === A) {
        class D {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
        if (cResult[21] !== application.name) {
          class D {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          const obj5 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
          const tmp29 = closure_7(tmp(5088).Text, obj5);
          cResult[21] = application.name;
          cResult[22] = tmp29;
        } else {
          class D {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        if (application.bot != null) {
          class D {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        if (cResult[23] === tmp4.botTag) {
          class D {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          if (cResult[26] === tmp4.headerTitleContainer) {
            class D {
              constructor() {
                tmp = closure_2();
                return true;
              }
            }
          }
          const obj7 = { style: tmp4.headerTitleContainer, children: null };
          const items1 = [tmp28, tmp32];
          obj7.children = items1;
          const tmp39 = closure_8(View, obj7);
          cResult[26] = tmp4.headerTitleContainer;
          cResult[27] = tmp28;
          cResult[28] = tmp32;
          cResult[29] = tmp39;
        }
        const obj8 = { type: BotTagTypes.BOT, verified: undefined, style: tmp4.botTag };
        const tmp35 = closure_7(BotTagDefault, obj8);
        cResult[23] = tmp4.botTag;
        cResult[24] = undefined;
        cResult[25] = tmp35;
      }
      const obj9 = { accessibilityRole: "button", accessibilityLabel: tmp21, onPress: A, style: tmp4.closeButton, children: tmp23 };
      const tmp27 = closure_7(tmp(6184).PressableOpacity, obj9);
      cResult[18] = A;
      cResult[19] = tmp4.closeButton;
      cResult[20] = tmp27;
    }
    const items2 = [tmp4.wrapper, tmp19];
    cResult[13] = tmp4.wrapper;
    cResult[14] = tmp19;
    cResult[15] = items2;
  }
  const obj10 = { paddingTop: insets.top, paddingBottom: insets.bottom };
  cResult[10] = insets.bottom;
  cResult[11] = insets.top;
  cResult[12] = obj10;
  const tmp7 = _slicedToArray(noop.useState(makeIframeIdDefault), 2);
}) : (function InteractionIframeModal(application) {
  const tmp = closure_10();
  application = application.application;
  const id2 = application.id;
  ({ title, id } = application);
  const iframeModalState = id2(onDisallowedNavigation[9]).useIframeModalState(application);
  const queryParams = iframeModalState.queryParams;
  const obj = id2(onDisallowedNavigation[9]);
  [tmp7, importDefault] = noop.useState(require("makeIframeId"));
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = noop.useLayoutEffect(() => {
    id2(callback[12]).lockOrientation("PORTRAIT");
    return () => {
      const result = id2(callback[12]).restoreDefaultOrientation();
    };
  }, []);
  const items = [id2];
  onDisallowedNavigation = noop.useCallback(() => {
    closeIFrameModalDefault(id2, undefined);
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
  let intl = id2(onDisallowedNavigation[16]).intl;
  obj4.accessibilityLabel = intl.string(id2(onDisallowedNavigation[16]).t.cpT0Cq);
  obj4.onPress = onDisallowedNavigation;
  obj4.style = tmp.closeButton;
  obj4.children = closure_7(id2(onDisallowedNavigation[17]).XLargeIcon, {});
  const items3 = [closure_7(id2(onDisallowedNavigation[18]).PressableOpacity, obj4), , ];
  const obj5 = { style: tmp.headerCenterContainer, children: null };
  const obj6 = { style: tmp.headerTitleContainer, children: null };
  const items4 = [closure_7(id2(onDisallowedNavigation[19]).Text, { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  const obj8 = { type: BotTagTypes.BOT, verified: null, style: null };
  const bot = application.bot;
  let verified;
  const obj7 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  const tmp6 = _slicedToArray(noop.useState(require("makeIframeId")), 2);
  if (bot != null) {
    verified = bot.verified;
  }
  obj8.verified = verified;
  obj8.style = tmp.botTag;
  items4[1] = closure_7(require("BotTag"), obj8);
  obj6.children = items4;
  const items5 = [closure_8(View, obj6), closure_7(id2(onDisallowedNavigation[19]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: title })];
  obj5.children = items5;
  items3[1] = closure_8(View, obj5);
  items3[2] = closure_7(View, { style: tmp.spacerView });
  obj3.children = items3;
  const items6 = [closure_8(View, obj3), ];
  const obj10 = {
    iframeId: tmp7,
    onDisallowedNavigation,
    onActivityCrash() {
      closure_1_1(makeIframeIdDefault());
    },
    applicationId: application.id,
    channelId: queryParams.channel_id,
    guildId: queryParams.guild_id,
    contextSource: null,
    activityUrl: null,
    activitySessionId: null,
    queryParams: null,
    onLoadError: null,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: false,
    ignoreSilentHardwareSwitch: false
  };
  const obj11 = { type: null, interactionId: null };
  const obj9 = { style: tmp.spacerView };
  const tmp15 = require("BotTag");
  obj11.type = id2(onDisallowedNavigation[21]).EmbeddedContextSourceType.INTERACTION;
  obj11.interactionId = id;
  obj10.contextSource = obj11;
  obj10.activityUrl = iframeModalState.iframeUrl;
  obj10.activitySessionId = queryParams.instance_id;
  obj10.queryParams = queryParams;
  obj10.onLoadError = function onLoadError() {
    const obj2 = { text: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t.HehpFW);
    ToastActionCreatorsDefault.open(interaction_iframe_modal, obj2);
    callback();
  };
  const tmp5Result = require("ComponentOwnedWebView");
  obj10.allowPopups = id2(onDisallowedNavigation[22]).allowPopups(application);
  items6[1] = closure_7(tmp5Result, obj10, tmp7);
  obj2.children = items6;
  return closure_8(View, obj2);
});