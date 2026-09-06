// discord_app/modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _mod4184 from "../../../../../_runtime/metro/04184__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let identity = fn(1244);
let closure_4 = identity.createWithEqualityFn(() => ({ isEnabled: true }));
fn(17).NativeModules.IntentsHandler;
const SettingBuilders = fn(11468);
identity = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.J8foZq);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useIOSConversationSuggestionsSettingValue() {
    const effect = noop.useEffect(() => {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((result) => {
        const isEnabled = result;
        isEnabled(closure_2[4]).batchUpdates(() => state.setState({ isEnabled }));
      });
    }, []);
    return closure_4((isEnabled) => isEnabled.isEnabled, _mod4184.shallow);
  },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result
      .then((result) => {
        closure_0 = result;
        closure_0(1249).batchUpdates(() => state.setState({ isEnabled }));
      })
      .catch((error) => {
        new LoggerDefault("ConversationSuggestions").error("Error suggesting conversations", error);
      });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !PlatformUtils.isAndroid();
  },
};
identity = SettingBuilders.createToggle(identity);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default identity;
