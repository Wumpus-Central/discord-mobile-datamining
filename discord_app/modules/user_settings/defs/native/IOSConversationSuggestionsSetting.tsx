// === Module 14206: toggle ===

// Module 14206 (toggle)
import obj132 from "obj132" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isIterable from "isIterable" /* 4006 */;
import noop from "noop" /* 19 */;
import identity from "identity" /* 700 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
let closure_4 = identity.createWithEqualityFn(() => ({ isEnabled: true }));
require("get ActivityIndicator").NativeModules.IntentsHandler;
identity = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.J8foZq);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useIOSConversationSuggestionsSettingValue() {
    const effect = React.useEffect(() => {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((result) => {
        const callback = result;
        callback(table[4]).batchUpdates(() => closure_1_4.setState({ isEnabled: closure_0 }));
      });
    }, []);
    return callback((isEnabled) => isEnabled.isEnabled, isIterable.shallow);
  },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result.then((result) => {
      const callback = result;
      callback(705).batchUpdates(() => closure_1_4.setState({ isEnabled: closure_0 }));
    }).catch((error) => {
      new callback2(3)("ConversationSuggestions").error("Error suggesting conversations", error);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !obj132.isAndroid();
  }
};
identity = createToggle.createToggle(identity);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default identity;