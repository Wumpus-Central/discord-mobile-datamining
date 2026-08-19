// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

let c3 = importAllResult;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
obj[0] = obj;
obj[1] = { flex: 1 };
obj[2] = { paddingHorizontal: 16 };
const createCacheKey = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[3] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  ({ children, action } = arg0);
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(32), 2);
  importDefault = tmp2[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const obj = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: items, contentContainerStyle: tmp.scroller, children };
  items = [tmp.flex, { marginBottom: tmp2[0] + insets.bottom }];
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [callback2(closure_5, obj), ];
  const items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  items1[1] = callback2(closure_4, { style: items2, onLayout: callback, children: action });
  obj[1] = items1;
  return callback3(closure_4, obj);
});
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default forwardRefResult;