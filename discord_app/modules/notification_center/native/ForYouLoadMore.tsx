// === Module 16387: ForYouLoadMore ===

// Module 16387 (ForYouLoadMore)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7124 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onPressLoad;

let c2;
let c3;
({ ActivityIndicator: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPressLoad) => {
  let loading;
  let tmp10Result;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  onPressLoad = onPressLoad.onPressLoad;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotificationCenterItemsStore];
    const fn = function f() {
      return loading.loading;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    let tmp9;
    if (cResult[3] === onPressLoad) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      let tmp13;
      if (cResult[6] === tmp9) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
    const tmp16 = <_false style={tmp4.container}>{tmp9}</_false>;
    cResult[5] = tmp4.container;
    cResult[6] = tmp9;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  if (stateFromStores) {
    tmp10Result = <React2 />;
  } else {
    const Button = components_Button_Button.Button;
    const intl = intl2.intl;
    tmp10Result = <Button variant="secondary" grow size="md" text={intl.string(intl2.t["Q/LSXp"])} onPress={onPressLoad} />;
  }
  cResult[2] = stateFromStores;
  cResult[3] = onPressLoad;
  cResult[4] = tmp10Result;
  tmp9 = tmp10Result;
}) : ((onPressLoad) => {
  let loading;
  let tmp4Result;
  onPressLoad = onPressLoad.onPressLoad;
  const items = [NotificationCenterItemsStore];
  const tmp = closure_6();
  const obj = useStateFromStores;
  if (obj.useStateFromStores(items, () => loading.loading)) {
    tmp4Result = <React2 />;
  } else {
    const Button = components_Button_Button.Button;
    const intl = intl2.intl;
    tmp4Result = <Button variant="secondary" grow size="md" text={intl.string(intl2.t["Q/LSXp"])} onPress={onPressLoad} />;
  }
  return <_false style={tmp.container}>{tmp4Result}</_false>;
});
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = tmp4;