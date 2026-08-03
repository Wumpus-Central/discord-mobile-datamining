// === Module 7746: ModalContent ===

// Module 7746 (ModalContent)
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_2 = createCacheKey.createStyles({ scrollContainer: { flex: 1 }, contentContainer: { flexDirection: "column", paddingTop: 24, paddingHorizontal: 16, alignItems: "center", flexGrow: 1 } });
const forwardRefResult = require("noop").forwardRef((children, ref) => {
  const tmp = callback();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={arg1}>{arg0.children}</ScrollView>;
});
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = forwardRefResult;