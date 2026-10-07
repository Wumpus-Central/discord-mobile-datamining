// === Module 14673: IOSConversationSuggestionsSetting ===

// Module 14673 (IOSConversationSuggestionsSetting)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import _mod4498 from "module_4498" /* 4498 */;
import noop from "module_19" /* 19 */;

require = fn;
const identity = fn(1254);
let closure_4 = identity.createWithEqualityFn(() => ({ isEnabled: true }));
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isEnabled) {
      return isEnabled.isEnabled;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _mod4498.shallow);
}) : (() => closure_4((isEnabled) => isEnabled.isEnabled, _mod4498.shallow));
fn(17).NativeModules.IntentsHandler;
ReactCompilerGating = fn(558);
const SettingBuilders = fn(11142);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((result) => {
        closure_0 = result;
        closure_0(closure_2[4]).batchUpdates(() => state.setState({ isEnabled }));
      });
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
  return closure_5();
}) : (() => {
  const effect = noop.useEffect(() => {
    conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
    conversationSuggestionsEnabled.then((result) => {
      const isEnabled = result;
      isEnabled(closure_2[4]).batchUpdates(() => state.setState({ isEnabled }));
    });
  }, []);
  return closure_5();
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.J8foZq);
  },
  parent: fn(7645).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function t() {
        conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
        conversationSuggestionsEnabled.then((result) => {
          closure_0 = result;
          closure_0(closure_2[4]).batchUpdates(() => state.setState({ isEnabled }));
        });
      };
      const items = [];
      cResult[0] = fn;
      cResult[1] = items;
      tmp2 = fn;
      tmp3 = items;
    } else {
      [tmp2, tmp3] = cResult;
    }
    const effect = noop.useEffect(tmp2, tmp3);
    return closure_5();
  }) : (() => {
    const effect = noop.useEffect(() => {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((result) => {
        const isEnabled = result;
        isEnabled(closure_2[4]).batchUpdates(() => state.setState({ isEnabled }));
      });
    }, []);
    return closure_5();
  }),
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result.then((result) => {
      closure_0 = result;
      closure_0(1259).batchUpdates(() => state.setState({ isEnabled }));
    }).catch((error) => {
      new LoggerDefault("ConversationSuggestions").error("Error suggesting conversations", error);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !PlatformUtils.isAndroid();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default toggle;