// === Module 14329: ? ===

// Module 14329
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "fetchFingerprint" /* 1218 */;
import { AppStates } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let c4 = importAllResult;
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { inputContainer: { marginTop: 20, flexDirection: "row", justifyContent: "center", alignSelf: "stretch" }, input: { flex: 1, maxWidth: 336, flexDirection: "row", alignSelf: "stretch" }, status: { flex: 1, maxHeight: 20, alignItems: "center", marginTop: 8 }, error: null, minHeightGuard: null };
obj = { color: ThemesDefault.unsafe_rawColors.RED_400 };
obj[3] = obj;
obj[4] = { minHeight: 20 };
let closure_12 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((appState, ref) => {
  appState = appState.appState;
  const handleSubmit = appState.handleSubmit;
  ({ error, resetLoginOnClose } = appState);
  ({ style, showActivityIndicator } = appState);
  if (resetLoginOnClose === undefined) {
    resetLoginOnClose = true;
  }
  let first;
  importAllResult = undefined;
  let first1;
  closure_6 = undefined;
  let callback;
  let tmp = callback2();
  let obj = appState(resetLoginOnClose[8]);
  const tmp4 = first(importAllResult.useState(""), 2);
  first = tmp4[0];
  importAllResult = tmp6;
  const tmp7 = first(importAllResult.useState(null), 2);
  first1 = tmp7[0];
  closure_6 = tmp7[1];
  const items = [first1];
  callback = importAllResult.useCallback(() => {
    const string = appState(resetLoginOnClose[9]).getString();
    string.then((str) => {
      const trimmed = str.trim();
      let tmp = trimmed !== closure_5;
      if (tmp) {
        let isMatch = 6 === trimmed.length;
        if (isMatch) {
          isMatch = /^\d+$/.test(trimmed);
          const obj = /^\d+$/;
        }
        if (!isMatch) {
          let isMatch1 = 8 === trimmed.length;
          if (isMatch1) {
            isMatch1 = /^[a-z0-9]+$/i.test(trimmed);
            const obj2 = /^[a-z0-9]+$/i;
          }
          isMatch = isMatch1;
        }
        tmp = isMatch;
      }
      if (tmp) {
        callback(trimmed);
        callback2(trimmed);
      }
    });
  }, items);
  handleSubmit(resetLoginOnClose[10])(() => {
    callback();
    return () => {
      if (closure_1_7.isAuthenticated()) {
        const string = closure_1_0(closure_1_2[9]).getString();
        string.then((arg0) => {
          let tmp2 = "" !== closure_3;
          if (tmp2) {
            tmp2 = tmp === arg0;
          }
          if (tmp2) {
            closure_1_0(closure_1_2[9]).copy("");
            const obj = closure_1_0(closure_1_2[9]);
          }
        });
        const obj2 = closure_1_0(closure_1_2[9]);
      } else {
        let obj = closure_1_1(closure_1_2[11]);
        if (closure_2) {
          obj.loginReset();
        } else {
          obj.loginStatusReset();
        }
      }
    };
  });
  const items1 = [appState, callback];
  const effect = importAllResult.useEffect(() => {
    if (appState === closure_1_8.ACTIVE) {
      callback();
    }
  }, items1);
  const items2 = [first, handleSubmit];
  const effect1 = importAllResult.useEffect(() => {
    let isMatch = 6 === first.length;
    if (isMatch) {
      isMatch = /^\d+$/.test(arr);
      const obj = /^\d+$/;
    }
    if (!isMatch) {
      isMatch = 8 === arr.length;
    }
    if (isMatch) {
      handleSubmit(arr);
    }
  }, items2);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    clear() {
      callback("");
    }
  }), []);
  obj = { autoFocus: true, style: items3, textStyle: tmp.input, value: first, autoCapitalize: "none", maxLength: 8, textContentType: "oneTimeCode", onChangeText: tmp6, accessibilityLabel: null };
  items3 = [tmp.inputContainer, style];
  const intl = appState(resetLoginOnClose[13]).intl;
  obj[8] = intl.string(appState(resetLoginOnClose[13]).t.yO4lAM);
  const items4 = [callback(handleSubmit(resetLoginOnClose[12]), obj), ];
  const items5 = [tmp.status, ];
  const tmp10 = handleSubmit;
  const tmp15 = closure_11;
  const tmp16 = closure_10;
  const tmp18 = handleSubmit(resetLoginOnClose[12]);
  const tmp19 = closure_6;
  obj = { style: items5, children: null };
  items5[1] = Boolean(error) && tmp.minHeightGuard;
  if (showActivityIndicator) {
    const tmp2Result = tmp2(tmp3[8]);
    let unsafe_rawColors = tmp10(tmp3[7]).unsafe_rawColors;
    const isThemeDarkResult = tmp2(tmp3[8]).isThemeDark(obj.useThemeContext().theme);
    unsafe_rawColors = first1;
    obj1 = { color: null };
    obj1[0] = tmp2(tmp3[8]).isThemeDark(obj.useThemeContext().theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
    let tmp17Result = tmp17(first1, obj1);
    const tmp23 = tmp2(tmp3[8]).isThemeDark(obj.useThemeContext().theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
  } else {
    tmp17Result = null;
    if (null != error) {
      let obj2 = { style: null, variant: "text-md/medium", children: null };
      obj2[0] = tmp.error;
      obj2[2] = error;
      tmp17Result = tmp17(tmp2(tmp3[14]).Text, obj2);
    }
    const obj3 = { children: null };
    obj[1] = tmp17Result;
    items4[1] = tmp17(tmp19, obj);
    obj3[0] = items4;
    return tmp15(tmp16, obj3);
  }
});
const result = require("set").fileFinishedImporting("modules/auth/native/components/MFACodeInput.tsx");

export default forwardRefResult;