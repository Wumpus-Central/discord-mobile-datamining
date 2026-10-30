// === Module 13947: useEmojiSuggestionNuxCoachmark ===

// Module 13947 (useEmojiSuggestionNuxCoachmark)
import util from "util" /* 1114 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 13677 */;
import useChatInputKeyboardOffsetDefault from "useChatInputKeyboardOffset" /* 13944 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestionNuxCoachmark.tsx");

export default function useEmojiSuggestionNuxCoachmark(targetRef, arg1) {
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
    const items = [tmp7(4842).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp2Result = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items1), 2);
  _require = tmp10;
  const tmp11 = tmp2Result[0] === require("dismissible_content").DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK;
  importDefault = tmp11;
  const tmp12 = useChatInputKeyboardOffsetDefault();
  dependencyMap = tmp12;
  const items2 = [tmp11];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const result = MobileEmojiSuggestionsExperiment.trackMobileEmojiSuggestionsExposure({ location: "EmojiSuggestionNuxCoachmark" });
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
      return closure_1_6(closure_1_0(closure_1_2[9]).Badge, { type: "beta", variant: "primary" });
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
  const obj2 = require("useSelectedDismissibleContent");
  const coachmark = require("useCoachmark").useCoachmark(targetRef, memo);
  return { dismissCoachmark };
};