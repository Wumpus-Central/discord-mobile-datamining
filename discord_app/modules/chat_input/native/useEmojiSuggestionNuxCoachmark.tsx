// === Module 13089: useEmojiSuggestionNuxCoachmark ===

// Module 13089 (useEmojiSuggestionNuxCoachmark)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import KeyboardTypes from "KeyboardTypes" /* 1631 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1647 */;
import useToken from "useToken" /* 4913 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5083 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 6945 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 12810 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(2065).ContentDismissActionType;
const jsx = fn(21).jsx;
const EmojiSuggestionNuxCoachmark = "EmojiSuggestionNuxCoachmark";
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChatInputKeyboardOffset() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(height) {
      return height.height;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const keyboardState = KeyboardChatScrollView.useKeyboardState(first);
  let tmp6 = useCustomKeyboardHeightDefault();
  const tmpResult = KeyboardChatScrollView;
  const tmp7 = useKeyboardTypeDefault();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const tmpResult3 = useToken;
  if (tmpResult4.isIOS()) {
    if (tmp7 === KeyboardTypes.KeyboardTypes.SYSTEM) {
      tmp6 = keyboardState;
    }
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, tmp6 - Math.max(useSafeAreaInsetsDefault().bottom, token));
  } else {
    return 0;
  }
  tmpResult4 = PlatformUtils;
}) : (function useChatInputKeyboardOffset() {
  const keyboardState = KeyboardChatScrollView.useKeyboardState((height) => height.height);
  let tmp4 = useCustomKeyboardHeightDefault();
  const tmp5 = useKeyboardTypeDefault();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  if (obj3.isIOS()) {
    if (tmp5 === KeyboardTypes.KeyboardTypes.SYSTEM) {
      tmp4 = keyboardState;
    }
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, tmp4 - Math.max(useSafeAreaInsetsDefault().bottom, token));
  } else {
    return 0;
  }
  obj3 = PlatformUtils;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestionNuxCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiSuggestionNuxCoachmark(arg0, arg1) {
  let tmp = arg1;
  const cResult = require("c").c(23);
  let obj = require("c");
  [tmp7, tmp8] = noop.useState(arg1);
  if (arg1) {
    tmp = !tmp7;
  }
  if (tmp) {
    tmp8(true);
  }
  if (cResult[0] !== tmp7) {
    if (tmp7) {
      const items = [tmp2(2052).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = tmp7;
    cResult[1] = items1;
  } else {
    const tmp5Result = _slicedToArray(tmp2(7376).useSelectedDismissibleContent(cResult[1]), 2);
    _require = tmp12;
    const tmp13 = tmp5Result[0] === tmp2(2052).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK;
    closure_1 = tmp13;
    const tmp2Result = tmp2(7376);
    if (cResult[2] !== tmp13) {
      const fn = function f() {
        if (closure_1) {
          const obj2 = { location: EmojiSuggestionNuxCoachmark };
          const result = MobileEmojiSuggestionsExperiment.trackMobileEmojiSuggestionsExposure(obj2);
        }
      };
      const items2 = [tmp13];
      cResult[2] = tmp13;
      cResult[3] = fn;
      cResult[4] = items2;
      let tmp17 = items2;
      let tmp16 = fn;
    } else {
      tmp16 = cResult[3];
      tmp17 = cResult[4];
    }
    const effect = noop.useEffect(tmp16, tmp17);
    if (cResult[5] === tmp5Result[1]) {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp2(1128).intl;
        const stringResult = intl.string(tmp2(1128).t.l8nVB9);
        const intl2 = tmp2(1128).intl;
        const stringResult1 = intl2.string(tmp2(1128).t.ujfS5V);
        cResult[8] = stringResult;
        cResult[9] = stringResult1;
        let tmp22 = stringResult1;
        let tmp21 = stringResult;
      } else {
        tmp21 = cResult[8];
        tmp22 = cResult[9];
      }
      const sum = 4 + tmp15;
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            return closure_1_6(closure_0(closure_1_2[18]).Badge, { type: "beta", variant: "primary" });
          }
        }
        cResult[10] = K;
      } else {
        class K {
          constructor() {
            return closure_1_6(closure_0(closure_1_2[18]).Badge, { type: "beta", variant: "primary" });
          }
        }
      }
      if (cResult[11] !== tmp12) {
        class D {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[11] = tmp12;
        cResult[12] = D;
      } else {
        class D {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
        const stringResult2 = obj4.string(tmp2(1128).t["NX+WJN"]);
        cResult[13] = stringResult2;
        const tmp28 = stringResult2;
      } else {
        class D {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[14] !== tmp12) {
        class B {
          constructor() {
            return closure_0(ContentDismissActionType.TAKE_ACTION);
          }
        }
        cResult[14] = tmp12;
        cResult[15] = B;
      } else {
        class B {
          constructor() {
            return closure_0(ContentDismissActionType.TAKE_ACTION);
          }
        }
      }
      if (cResult[16] === B) {
        class B {
          constructor() {
            return closure_0(ContentDismissActionType.TAKE_ACTION);
          }
        }
      }
      const obj3 = { title: tmp21, description: tmp22, visible: tmp13, position: "top", offsetY: sum, renderImgComponent: K, onDismiss: D, buttonLabel: tmp28, buttonVariant: "primary", onButtonPress: B };
      cResult[16] = B;
      cResult[17] = sum;
      cResult[18] = D;
      cResult[19] = tmp13;
      cResult[20] = obj3;
    }
    const fn2 = function p(arg0) {
      if (closure_1) {
        closure_0(arg0);
      }
    };
    cResult[5] = tmp5Result[1];
    cResult[6] = tmp13;
    cResult[7] = fn2;
    tmp15 = closure_8();
  }
  const tmp6 = _slicedToArray(noop.useState(arg1), 2);
}) : (function useEmojiSuggestionNuxCoachmark(arg0, arg1) {
  let tmp = arg1;
  [tmp4, tmp5] = noop.useState(arg1);
  if (arg1) {
    tmp = !tmp4;
  }
  if (tmp) {
    tmp5(true);
  }
  const tmp3 = _slicedToArray(noop.useState(arg1), 2);
  if (tmp4) {
    const items = [tmp7(2052).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp2Result = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items1), 2);
  _require = tmp10;
  const tmp11 = tmp2Result[0] === require("dismissible_content").DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK;
  const visible = tmp11;
  const tmp12 = closure_8();
  dependencyMap = tmp12;
  const items2 = [tmp11];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const obj2 = { location: EmojiSuggestionNuxCoachmark };
      const result = MobileEmojiSuggestionsExperiment.trackMobileEmojiSuggestionsExposure(obj2);
    }
  }, items2);
  const items3 = [tmp11, tmp2Result[1]];
  const items4 = [tmp11, tmp12, tmp2Result[1]];
  const dismissCoachmark = noop.useCallback((arg0) => {
    if (closure_1) {
      closure_0(arg0);
    }
  }, items3);
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "top", offsetY: null, renderImgComponent: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.l8nVB9);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.ujfS5V);
    obj.visible = visible;
    obj.offsetY = 4 + closure_2;
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_6(closure_1_0(closure_1_2[18]).Badge, { type: "beta", variant: "primary" });
    };
    obj.onDismiss = function onDismiss() {
      return closure_1_0(constants.USER_DISMISS);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t["NX+WJN"]);
    obj.onButtonPress = function onButtonPress() {
      return closure_1_0(constants.TAKE_ACTION);
    };
    return obj;
  }, items4);
  let obj2 = require("useSelectedDismissibleContent");
  const coachmark = require("useCoachmark").useCoachmark(arg0, memo);
  return { dismissCoachmark };
});