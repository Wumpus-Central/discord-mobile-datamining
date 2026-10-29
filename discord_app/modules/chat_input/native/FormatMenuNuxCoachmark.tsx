// === Module 13796: FormatMenuNuxCoachmark ===

// Module 13796 (FormatMenuNuxCoachmark)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Text_Text from "Text/Text" /* 5271 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7087 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const useChatInputKeyboardOffsetDefault = tmp5(13797);
require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(4854).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
const rect = { position: "absolute", top: -nativeDefault.space.PX_8, bottom: 0, left: null, width: 0 };
const PlatformUtils = fn(1381);
let num = 5;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
rect.left = num;
let closure_8 = createStyles.createStyles({ anchor: rect, underline: { textDecorationLine: "underline" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/FormatMenuNuxCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormatMenuNuxCoachmark() {
  const cResult = require("c").c(19);
  const tmp4 = closure_8();
  _require = tmp4;
  const obj = require("c");
  const isMobileMarkdownFormatMenuEnabled = require("MobileMarkdownFormatMenuExperiment").useIsMobileMarkdownFormatMenuEnabled("FormatMenuNuxCoachmark");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeCustomKeyboard: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp8 = require("useKeyboardIsOpen")(first);
  if (cResult[1] === isMobileMarkdownFormatMenuEnabled) {
    if (cResult[2] === tmp8) {
      const tmp12 = _slicedToArray(tmp(tmp2[13]).useSelectedDismissibleContent(cResult[3]), 2);
      importDefault = tmp13;
      const tmp14 = tmp7(tmp2[14])();
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[15]).intl;
        const stringResult = intl.string(tmp(tmp2[15]).t["yYAD/t"]);
        cResult[4] = stringResult;
        let tmp15 = stringResult;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] !== tmp4.underline) {
        const intl2 = tmp(tmp2[15]).intl;
        const obj4 = {
          underlineHook(children, key) {
                  return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "none", style: underline.underline, children }, key);
                }
        };
        const formatResult = intl2.format(tmp(tmp2[15]).t["427UqW"], obj4);
        cResult[5] = tmp4.underline;
        cResult[6] = formatResult;
        let tmp17 = formatResult;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] !== tmp12[1]) {
        const fn = function p() {
          closure_1(ContentDismissActionType.USER_DISMISS);
        };
        cResult[7] = tmp13;
        cResult[8] = fn;
        let tmp19 = fn;
      } else {
        tmp19 = cResult[8];
      }
      const tmp20 = tmp12[0] === tmp(tmp2[12]).DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK;
      if (cResult[9] === tmp14) {
        if (cResult[10] === tmp17) {
          if (cResult[11] === tmp19) {
            if (cResult[12] === tmp20) {
              let tmp21 = cResult[13];
            }
            const ref = noop.useRef(null);
            coachmark = tmp(tmp2[17]).useCoachmark(ref, tmp21);
            if (cResult[14] !== coachmark) {
              class S {
                constructor() {
                  tmp = closure_2(false);
                  return;
                }
              }
              cResult[14] = coachmark;
              cResult[15] = S;
            } else {
              class S {
                constructor() {
                  tmp = closure_2(false);
                  return;
                }
              }
            }
            if (cResult[16] === S) {
              class S {
                constructor() {
                  tmp = closure_2(false);
                  return;
                }
              }
              return tmp27;
            }
            const obj5 = { style: tmp4.anchor, ref, onLayout: S, pointerEvents: "none", collapsable: false };
            const tmp30 = <View style={tmp4.anchor} ref={ref} onLayout={S} pointerEvents="none" collapsable={false} />;
            cResult[16] = S;
            cResult[17] = tmp4.anchor;
            cResult[18] = tmp30;
            tmp27 = tmp30;
            const tmpResult2 = tmp(tmp2[17]);
          }
        }
      }
      const obj6 = { title: tmp15, description: tmp17, visible: tmp20, position: "top", offsetY: tmp14, onDismiss: tmp19 };
      cResult[9] = tmp14;
      cResult[10] = tmp17;
      cResult[11] = tmp19;
      cResult[12] = tmp20;
      cResult[13] = obj6;
      tmp21 = obj6;
      const tmpResult = tmp(tmp2[13]);
    }
  }
  if (!isMobileMarkdownFormatMenuEnabled) {
    class S {
      constructor() {
        tmp = closure_2(false);
        return;
      }
    }
    cResult[1] = isMobileMarkdownFormatMenuEnabled;
    cResult[2] = tmp8;
    cResult[3] = tmp9;
  } else {
    class S {
      constructor() {
        tmp = closure_2(false);
        return;
      }
    }
  }
  const items = [require("dismissible_content").DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK];
  const obj2 = require("MobileMarkdownFormatMenuExperiment");
  tmp7 = importDefault;
}) : (function FormatMenuNuxCoachmark() {
  const tmp = closure_8();
  _require = tmp;
  const isMobileMarkdownFormatMenuEnabled = require("MobileMarkdownFormatMenuExperiment").useIsMobileMarkdownFormatMenuEnabled("FormatMenuNuxCoachmark");
  let obj = require("MobileMarkdownFormatMenuExperiment");
  require("useSelectedDismissibleContent");
  if (isMobileMarkdownFormatMenuEnabled) {
    if (tmp6) {
      const items = [tmp2(4841).DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK];
    }
    const tmp11 = _slicedToArray(tmp8([]), 2);
    importDefault = tmp12;
    const tmp13 = tmp11[0] === tmp2(4841).DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK;
    dependencyMap = tmp13;
    const tmp14 = useChatInputKeyboardOffsetDefault();
    _slicedToArray = tmp14;
    const items1 = [tmp14, tmp13, tmp11[1], tmp.underline];
    const memo = coachmark.useMemo(() => {
      const obj = { title: null, description: null, visible: null, position: "top", offsetY: null, onDismiss: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["yYAD/t"]);
      const intl2 = util.intl;
      obj.description = intl2.format(util.t["427UqW"], {
        underlineHook(children, id) {
          return jsx(closure_0(closure_2[16]).Text, { variant: "text-sm/medium", color: "none", style: closure_1_0.underline, children }, id);
        }
      });
      obj.visible = visible;
      obj.offsetY = offsetY;
      obj.onDismiss = function onDismiss() {
        closure_1_1(constants.USER_DISMISS);
      };
      return obj;
    }, items1);
    const ref = coachmark.useRef(null);
    coachmark = tmp2(9906).useCoachmark(ref, memo);
    const items2 = [coachmark];
    const obj2 = {
      style: tmp.anchor,
      ref,
      onLayout: coachmark.useCallback(() => {
          coachmark(false);
        }, items2),
      pointerEvents: "none",
      collapsable: false
    };
    return <View style={tmp.anchor} ref={ref} onLayout={coachmark.useCallback(() => {
      coachmark(false);
    }, items2)} pointerEvents="none" collapsable={false} />;
  }
  tmp6 = useKeyboardIsOpenDefault({ includeCustomKeyboard: true });
});