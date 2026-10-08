// discord_app/modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _mod4690 from "../../../../../_runtime/metro/04690__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const identity = fn(1266);
let closure_4 = identity.createWithEqualityFn(() => ({ isEnabled: true }));
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConversationSuggestionsEnabled() {
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
      return closure_4(first, _mod4690.shallow);
    }
  : function useConversationSuggestionsEnabled() {
      return closure_4((isEnabled) => isEnabled.isEnabled, _mod4690.shallow);
    };
fn(17).NativeModules.IntentsHandler;
ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIOSConversationSuggestionsSettingValue() {
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
    }
  : function useIOSConversationSuggestionsSettingValue() {
      const effect = noop.useEffect(() => {
        conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
        conversationSuggestionsEnabled.then((result) => {
          const isEnabled = result;
          isEnabled(closure_2[4]).batchUpdates(() => state.setState({ isEnabled }));
        });
      }, []);
      return closure_5();
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.J8foZq);
  },
  parent: fn(7966).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useIOSConversationSuggestionsSettingValue() {
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
      }
    : function useIOSConversationSuggestionsSettingValue() {
        const effect = noop.useEffect(() => {
          conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
          conversationSuggestionsEnabled.then((result) => {
            const isEnabled = result;
            isEnabled(closure_2[4]).batchUpdates(() => state.setState({ isEnabled }));
          });
        }, []);
        return closure_5();
      },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result
      .then((result) => {
        closure_0 = result;
        closure_0(1271).batchUpdates(() => state.setState({ isEnabled }));
      })
      .catch((error) => {
        new LoggerDefault("ConversationSuggestions").error("Error suggesting conversations", error);
      });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !PlatformUtils.isAndroid();
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default toggle;
