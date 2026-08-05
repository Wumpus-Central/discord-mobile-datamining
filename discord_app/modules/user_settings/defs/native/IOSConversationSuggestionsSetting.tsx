// discord_app/modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx
import noop from "noop";
import identity from "identity";
import createToggle from "createToggle";

const require = arg1;
let closure_4 = identity.createWithEqualityFn(() => ({ isEnabled: true }));
require("get ActivityIndicator").NativeModules.IntentsHandler;
identity = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.J8foZq);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useIOSConversationSuggestionsSettingValue() {
    const effect = React.useEffect(() => {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((arg0) => {
        const callback = arg0;
        callback(table[4]).batchUpdates(() => outer1_4.setState({ isEnabled: closure_0 }));
      });
    }, []);
    return callback((isEnabled) => isEnabled.isEnabled, require("../../../../../_runtime/03898_isIterable.js") /* isIterable */.shallow);
  },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result.then((arg0) => {
      const callback = arg0;
      callback(705).batchUpdates(() => outer1_4.setState({ isEnabled: closure_0 }));
    }).catch((arg0) => {
      new callback2(3)("ConversationSuggestions").error("Error suggesting conversations", arg0);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !require("../../../../utils/PlatformUtils.tsx") /* set */.isAndroid();
  }
};
identity = createToggle.createToggle(identity);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default identity;