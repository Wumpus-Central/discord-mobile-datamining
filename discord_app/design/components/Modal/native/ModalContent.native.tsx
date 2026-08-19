// discord_app/design/components/Modal/native/ModalContent.native.tsx
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

let closure_2 = createCacheKey.createStyles({ scrollContainer: { flex: 1 }, contentContainer: { flexDirection: "column", paddingTop: 24, paddingHorizontal: 16, alignItems: "center", flexGrow: 1 } });
const forwardRefResult = importAllResult.forwardRef((children, ref) => {
  const tmp = callback();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={ref}>{children.children}</ScrollView>;
});
const result = require("obj132").fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = forwardRefResult;