// discord_app/modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx
import set from "../../../../utils/PlatformUtils.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import isIterable from "../../../../../_runtime/04010_isIterable.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import identity from "../../../../../_runtime/00700_identity.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
      callback(705).batchUpdates(() => closure_1_4.setState({ isEnabled: closure_0 }));
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