// discord_app/modules/auth/native/components/MFACodeInput.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const AppStates = fn(1074).AppStates;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4722);
let obj = {
  inputContainer: { marginTop: 20, flexDirection: "row", justifyContent: "center", alignSelf: "stretch" },
  input: { flex: 1, maxWidth: 336, flexDirection: "row", alignSelf: "stretch" },
  status: { flex: 1, maxHeight: 20, alignItems: "center", marginTop: 8 },
  error: { color: nativeDefault.unsafe_rawColors.RED_400 },
  minHeightGuard: { minHeight: 20 },
};
let closure_12 = createStyles.createStyles(obj);
let obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/MFACodeInput.tsx");

export default noop.forwardRef((appState, arg1) => {
  appState = appState.appState;
  const handleSubmit = appState.handleSubmit;
  ({ error, resetLoginOnClose } = appState);
  ({ style, showActivityIndicator } = appState);
  if (resetLoginOnClose === undefined) {
    resetLoginOnClose = true;
  }
  value = undefined;
  noop = undefined;
  let tmp = closure_12();
  const tmp4 = value(noop.useState(""), 2);
  value = tmp4[0];
  noop = tmp6;
  const tmp7 = value(noop.useState(null), 2);
  const first1 = tmp7[0];
  closure_6 = tmp7[1];
  const items = [first1];
  const callback = noop.useCallback(() => {
    const string = ClipboardUtils.getString();
    string.then((result) => {
      const trimmed = result.trim();
      let tmp = trimmed !== first1;
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
        closure_1_4(trimmed);
        closure_1_6(trimmed);
      }
    });
  }, items);
  handleSubmit(resetLoginOnClose[10])(() => {
    callback();
    return () => {
      if (callback.isAuthenticated()) {
        const string = appState(resetLoginOnClose[9]).getString();
        string.then((result) => {
          let tmp2 = "" !== closure_1_3;
          if (tmp2) {
            tmp2 = tmp === result;
          }
          if (tmp2) {
            appState(resetLoginOnClose[9]).copy("");
            const obj = appState(resetLoginOnClose[9]);
          }
        });
        const obj2 = appState(resetLoginOnClose[9]);
      } else {
        let obj = handleSubmit(resetLoginOnClose[11]);
        if (closure_1_2) {
          obj.loginReset();
        } else {
          obj.loginStatusReset();
        }
      }
    };
  });
  const items1 = [appState, callback];
  const effect = noop.useEffect(() => {
    if (appState === AppStates.ACTIVE) {
      callback();
    }
  }, items1);
  const items2 = [value, handleSubmit];
  const effect1 = noop.useEffect(() => {
    let isMatch = 6 === first.length;
    if (isMatch) {
      isMatch = /^\d+$/.test(first);
      const obj = /^\d+$/;
    }
    if (!isMatch) {
      isMatch = 8 === first.length;
    }
    if (isMatch) {
      handleSubmit(first);
    }
  }, items2);
  const imperativeHandle = noop.useImperativeHandle(
    arg1,
    () => ({
      clear() {
        closure_1_4("");
      },
    }),
    [],
  );
  let obj2 = {
    autoFocus: true,
    style: null,
    textStyle: tmp.input,
    value,
    autoCapitalize: "none",
    maxLength: 8,
    textContentType: "oneTimeCode",
    onChangeText: tmp4[1],
    accessibilityLabel: null,
  };
  const items3 = [tmp.inputContainer, style];
  obj2.style = items3;
  let obj = appState(resetLoginOnClose[8]);
  const tmp10 = handleSubmit;
  const intl = appState(resetLoginOnClose[13]).intl;
  obj2.accessibilityLabel = intl.string(appState(resetLoginOnClose[13]).t.yO4lAM);
  const items4 = [closure_9(handleSubmit(resetLoginOnClose[12]), obj2)];
  const items5 = [tmp.status];
  const tmp18 = handleSubmit(resetLoginOnClose[12]);
  const tmp19 = closure_6;
  const obj3 = { style: items5, children: null };
  items5[1] = Boolean(error) && tmp.minHeightGuard;
  if (showActivityIndicator) {
    const tmp2Result = tmp2(tmp3[8]);
    tmp10(tmp3[7]).unsafe_rawColors;
    const isThemeDarkResult = tmp2(tmp3[8]).isThemeDark(obj.useThemeContext().theme);
    const unsafe_rawColors = first1;
    const obj4 = {
      color: tmp2(tmp3[8]).isThemeDark(obj.useThemeContext().theme)
        ? unsafe_rawColors.WHITE
        : unsafe_rawColors.PRIMARY_500,
    };
    closure_9(first1, obj4);
    const tmp23 = tmp2(tmp3[8]).isThemeDark(obj.useThemeContext().theme)
      ? unsafe_rawColors.WHITE
      : unsafe_rawColors.PRIMARY_500;
  } else {
    let tmp17Result2 = null;
    if (null != error) {
      const obj5 = { style: tmp.error, variant: "text-md/medium", children: error };
      tmp17Result2 = closure_9(tmp2(tmp3[14]).Text, obj5);
    }
    const obj6 = { children: null };
    obj3.children = tmp17Result2;
    items4[1] = closure_9(tmp19, obj3);
    obj6.children = items4;
    return closure_11(closure_10, obj6);
  }
  const tmp20 = Boolean(error) && tmp.minHeightGuard;
});
