// === Module 14678: toggle ===

// Module 14678 (toggle)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import set from "set" /* 1234 */;
import isIterable from "isIterable" /* 4105 */;
import closure_3 from "noop" /* 19 */;
import identity from "identity" /* 697 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
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
      conversationSuggestionsEnabled.then((arg0) => {
        const callback = arg0;
        callback(table[4]).batchUpdates(() => closure_1_4.setState({ isEnabled: closure_0 }));
      });
    }, []);
    return callback((isEnabled) => isEnabled.isEnabled, isIterable.shallow);
  },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result.then((arg0) => {
      const callback = arg0;
      callback(702).batchUpdates(() => closure_1_4.setState({ isEnabled: closure_0 }));
    }).catch((arg0) => {
      new callback2(3)("ConversationSuggestions").error("Error suggesting conversations", arg0);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !set.isAndroid();
  }
};
identity = createToggle.createToggle(identity);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default identity;