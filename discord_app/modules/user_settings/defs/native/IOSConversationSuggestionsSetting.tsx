// === Module 14904: IOSConversationSuggestionsSetting ===

// Module 14904 (IOSConversationSuggestionsSetting)
import LoggerDefault from "Logger" /* 3 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import _mod4229 from "module_4229" /* 4229 */;
import noop from "module_19" /* 19 */;

require = fn;
let identity = fn(1244);
let closure_4 = identity.createWithEqualityFn(() => ({ isEnabled: true }));
fn(17).NativeModules.IntentsHandler;
const SettingBuilders = fn(11562);
identity = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.J8foZq);
  },
  parent: fn(8049).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useIOSConversationSuggestionsSettingValue() {
    const effect = noop.useEffect(() => {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((result) => {
        const isEnabled = result;
        isEnabled(closure_2[4]).batchUpdates(() => state.setState({ isEnabled }));
      });
    }, []);
    return closure_4((isEnabled) => isEnabled.isEnabled, _mod4229.shallow);
  },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result.then((result) => {
      closure_0 = result;
      closure_0(1249).batchUpdates(() => state.setState({ isEnabled }));
    }).catch((error) => {
      new LoggerDefault("ConversationSuggestions").error("Error suggesting conversations", error);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !PlatformUtils.isAndroid();
  }
};
identity = SettingBuilders.createToggle(identity);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default identity;