// === Module 13978: FormatMenuNuxCoachmark ===

// Module 13978 (FormatMenuNuxCoachmark)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7101 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const useChatInputKeyboardOffsetDefault = tmp5(13979);
require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
const rect = { position: "absolute", top: -nativeDefault.space.PX_8, bottom: 0, left: null, width: 0 };
const PlatformUtils = fn(1375);
let num = 5;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
rect.left = num;
let closure_8 = createStyles.createStyles({ anchor: rect, underline: { textDecorationLine: "underline" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/FormatMenuNuxCoachmark.tsx");

export default function FormatMenuNuxCoachmark() {
  const tmp = closure_8();
  _require = tmp;
  const isMobileMarkdownFormatMenuEnabled = require("MobileMarkdownFormatMenuExperiment").useIsMobileMarkdownFormatMenuEnabled("FormatMenuNuxCoachmark");
  let obj = require("MobileMarkdownFormatMenuExperiment");
  require("useSelectedDismissibleContent");
  if (isMobileMarkdownFormatMenuEnabled) {
    if (tmp6) {
      const items = [tmp2(4847).DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK];
    }
    const tmp11 = _slicedToArray(tmp8([]), 2);
    importDefault = tmp12;
    const tmp13 = tmp11[0] === tmp2(4847).DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK;
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
        underlineHook(children, key) {
          return jsx(closure_0(closure_2[14]).Text, { variant: "text-sm/medium", color: "none", style: closure_1_0.underline, children }, key);
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
    coachmark = tmp2(9954).useCoachmark(ref, memo);
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
};