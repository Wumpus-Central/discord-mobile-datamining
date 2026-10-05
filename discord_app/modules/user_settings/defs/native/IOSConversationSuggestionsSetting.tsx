// discord_app/modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/04492__slicedToArray.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import 01254__ from "../../../../../_runtime/metro/01254__.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let conversationSuggestionsEnabled;

const NativeModules = react_native.NativeModules;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_4 = module_1254.createWithEqualityFn(() => ({ isEnabled: true }));
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isEnabled) {
      return isEnabled.isEnabled;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _slicedToArray.shallow);
}) : (() => closure_4((isEnabled) => isEnabled.isEnabled, _slicedToArray.shallow));
const IntentsHandler = NativeModules.IntentsHandler;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((result) => {
        let closure_0 = result;
        const obj = closure_0(closure_2[4]);
        obj.batchUpdates(() => {
          const obj = { isEnabled };
          return state.setState(obj);
        });
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
  const effect = react.useEffect(tmp2, tmp3);
  return closure_5();
}) : (() => {
  const effect = react.useEffect(() => {
    let state;
    conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
    conversationSuggestionsEnabled.then((result) => {
      const isEnabled = result;
      let obj = isEnabled(closure_2[4]);
      obj.batchUpdates(() => {
        const obj = { isEnabled };
        return state.setState(obj);
      });
    });
  }, []);
  return closure_5();
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.J8foZq);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp2,
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    const nextPromise = result.then((result) => {
      let closure_0 = result;
      const obj = closure_0(closure_2[4]);
      obj.batchUpdates(() => {
        const obj = { isEnabled };
        return state.setState(obj);
      });
    });
    nextPromise.catch((error) => {
      const obj = new LoggerDefault("ConversationSuggestions");
      obj.error("Error suggesting conversations", error);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    const obj = PlatformUtils;
    return !obj.isAndroid();
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default toggle;