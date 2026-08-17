// discord_app/design/void/Form/native/Form.tsx
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import context2 from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
const context = importAllResult.createContext({ isForm: false });
const forwardRefResult = importAllResult.forwardRef((keyboardShouldPersistTaps, ref) => {
  let str = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  ({ style, children } = keyboardShouldPersistTaps);
  if (str === undefined) {
    str = "never";
  }
  let flag = keyboardShouldPersistTaps.alwaysBounceVertical;
  if (flag === undefined) {
    flag = true;
  }
  ({ contentContainerStyle, onScroll, scrollsToTop, onLayout } = keyboardShouldPersistTaps);
  const tmp = callback();
  let redesign = importAllResult.useContext(context2.RedesignCompatContext);
  let obj = { value: { isForm: true }, children: null };
  obj = { ref, onLayout, scrollsToTop, style: null, contentContainerStyle: null, contentInset: null, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: null, alwaysBounceVertical: null, onScroll: null, children: null };
  const items = [tmp.form, style, ];
  if (redesign) {
    redesign = tmp.redesign;
  }
  items[2] = redesign;
  obj[3] = items;
  obj = { paddingBottom: 38 + useSafeAreaInsetsKeyboardAwareDefault().insets.bottom };
  const items1 = [obj, contentContainerStyle];
  obj[4] = items1;
  obj[5] = { top: 0 };
  obj[7] = str;
  obj[8] = flag;
  obj[9] = onScroll;
  obj[10] = children;
  obj[1] = <ScrollView paddingBottom={38 + useSafeAreaInsetsKeyboardAwareDefault().insets.bottom} />;
  return <context.Provider paddingBottom={38 + useSafeAreaInsetsKeyboardAwareDefault().insets.bottom} />;
});
const result = require("set").fileFinishedImporting("design/void/Form/native/Form.tsx");

export default forwardRefResult;
export const FormContext = context;