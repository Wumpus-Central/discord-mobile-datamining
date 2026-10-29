// discord_app/modules/chat_input/native/useEmojiSuggestionNuxCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import MobileEmojiSuggestionsExperiment from "../experiments/MobileEmojiSuggestionsExperiment.tsx";
import useChatInputKeyboardOffsetDefault from "useChatInputKeyboardOffset.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(4854).ContentDismissActionType;
const jsx = fn(21).jsx;
const EmojiSuggestionNuxCoachmark = "EmojiSuggestionNuxCoachmark";
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestionNuxCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmojiSuggestionNuxCoachmark(arg0, arg1) {
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
          const items = [tmp2(4841).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK];
          let items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = tmp7;
        cResult[1] = items1;
      } else {
        const tmp5Result = _slicedToArray(tmp2(7555).useSelectedDismissibleContent(cResult[1]), 2);
        _require = tmp12;
        const tmp13 = tmp5Result[0] === tmp2(4841).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK;
        importDefault = tmp13;
        const tmp2Result = tmp2(7555);
        if (cResult[2] !== tmp13) {
          class I {
            constructor() {
              if (closure_1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[9]);
                obj1 = { location: null };
                tmp3 = EmojiSuggestionNuxCoachmark;
                obj1.location = EmojiSuggestionNuxCoachmark;
                result = obj.trackMobileEmojiSuggestionsExposure(obj1);
              }
              return;
            }
          }
          const items2 = [tmp13];
          cResult[2] = tmp13;
          cResult[3] = I;
          cResult[4] = items2;
          let tmp17 = items2;
        } else {
          class I {
            constructor() {
              if (closure_1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[9]);
                obj1 = { location: null };
                tmp3 = EmojiSuggestionNuxCoachmark;
                obj1.location = EmojiSuggestionNuxCoachmark;
                result = obj.trackMobileEmojiSuggestionsExposure(obj1);
              }
              return;
            }
          }
          tmp17 = cResult[4];
        }
        const effect = noop.useEffect(I, tmp17);
        if (cResult[5] === tmp5Result[1]) {
          class I {
            constructor() {
              if (closure_1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[9]);
                obj1 = { location: null };
                tmp3 = EmojiSuggestionNuxCoachmark;
                obj1.location = EmojiSuggestionNuxCoachmark;
                result = obj.trackMobileEmojiSuggestionsExposure(obj1);
              }
              return;
            }
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                if (closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[9]);
                  obj1 = { location: null };
                  tmp3 = EmojiSuggestionNuxCoachmark;
                  obj1.location = EmojiSuggestionNuxCoachmark;
                  result = obj.trackMobileEmojiSuggestionsExposure(obj1);
                }
                return;
              }
            }
            const stringResult = obj4.string(tmp2(1125).t.l8nVB9);
            const intl = tmp2(1125).intl;
            const stringResult1 = intl.string(tmp2(1125).t.ujfS5V);
            cResult[8] = stringResult;
            cResult[9] = stringResult1;
            let tmp22 = stringResult1;
            const tmp21 = stringResult;
          } else {
            class I {
              constructor() {
                if (closure_1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[9]);
                  obj1 = { location: null };
                  tmp3 = EmojiSuggestionNuxCoachmark;
                  obj1.location = EmojiSuggestionNuxCoachmark;
                  result = obj.trackMobileEmojiSuggestionsExposure(obj1);
                }
                return;
              }
            }
            tmp22 = cResult[9];
          }
          const sum = 4 + tmp15;
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor() {
                return closure_1_6(closure_0(closure_1_2[11]).Badge, { type: "beta", variant: "primary" });
              }
            }
            cResult[10] = B;
          } else {
            class B {
              constructor() {
                return closure_1_6(closure_0(closure_1_2[11]).Badge, { type: "beta", variant: "primary" });
              }
            }
          }
          if (cResult[11] !== tmp12) {
            class U {
              constructor() {
                return closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
            cResult[11] = tmp12;
            cResult[12] = U;
          } else {
            class U {
              constructor() {
                return closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          const _Symbol3 = Symbol;
          class O {
            constructor(arg0) {
              if (closure_1) {
                tmp = arg0;
                tmp2 = closure_0;
                tmp3 = closure_0(arg0);
              }
              return;
            }
          }
          if (tmp28 === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                return closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
            const stringResult2 = obj5.string(tmp2(1125).t["NX+WJN"]);
            cResult[13] = stringResult2;
            const tmp29 = stringResult2;
          } else {
            class U {
              constructor() {
                return closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          if (cResult[14] !== tmp12) {
            class U {
              constructor() {
                return closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
            cResult[14] = tmp12;
            cResult[15] = tmp32;
          } else {
            class U {
              constructor() {
                return closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          if (cResult[16] === tmp32) {
            class U {
              constructor() {
                return closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          const obj3 = {
            title: tmp21,
            description: tmp22,
            visible: tmp13,
            position: "top",
            offsetY: sum,
            renderImgComponent: B,
            onDismiss: U,
            buttonLabel: tmp29,
            buttonVariant: "primary",
            onButtonPress: tmp32,
          };
          cResult[16] = tmp32;
          cResult[17] = sum;
          cResult[18] = U;
          cResult[19] = tmp13;
          cResult[20] = obj3;
        }
        class O {
          constructor(arg0) {
            if (closure_1) {
              tmp = arg0;
              tmp2 = closure_0;
              tmp3 = closure_0(arg0);
            }
            return;
          }
        }
        cResult[5] = tmp5Result[1];
        cResult[6] = tmp13;
        cResult[7] = O;
        tmp15 = useChatInputKeyboardOffsetDefault();
      }
      const tmp6 = _slicedToArray(noop.useState(arg1), 2);
    }
  : function useEmojiSuggestionNuxCoachmark(arg0, arg1) {
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
        const items = [tmp7(4841).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK];
        let items1 = items;
      } else {
        items1 = [];
      }
      const tmp2Result = _slicedToArray(
        require("useSelectedDismissibleContent").useSelectedDismissibleContent(items1),
        2,
      );
      _require = tmp10;
      const tmp11 =
        tmp2Result[0] === require("dismissible_content").DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK;
      importDefault = tmp11;
      const tmp12 = useChatInputKeyboardOffsetDefault();
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
        const obj = {
          title: null,
          description: null,
          visible: null,
          position: "top",
          offsetY: null,
          renderImgComponent: null,
          onDismiss: null,
          buttonLabel: null,
          buttonVariant: "primary",
          onButtonPress: null,
        };
        const intl = util.intl;
        obj.title = intl.string(util.t.l8nVB9);
        const intl2 = util.intl;
        obj.description = intl2.string(util.t.ujfS5V);
        obj.visible = visible;
        obj.offsetY = 4 + closure_2;
        obj.renderImgComponent = function renderImgComponent() {
          return closure_1_6(closure_1_0(closure_1_2[11]).Badge, { type: "beta", variant: "primary" });
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
    };
