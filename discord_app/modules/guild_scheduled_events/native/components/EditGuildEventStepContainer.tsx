// === Module 8544: ? ===

// Module 8544
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
let c3 = importAllResult;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { container: null, flex: null, scroller: null, buttonContainer: null };
obj = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
obj[0] = obj;
obj[1] = { flex: 1 };
obj[2] = { paddingHorizontal: 16 };
createCacheKey = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[3] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let action;
  let children;
  let importDefault;
  ({ children, action } = arg0);
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(32), 2);
  importDefault = tmp2[1];
  const insets = importDefault(5281)().insets;
  let obj = { style: tmp.container, children: null };
  obj = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: items, contentContainerStyle: tmp.scroller, children };
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
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default forwardRefResult;