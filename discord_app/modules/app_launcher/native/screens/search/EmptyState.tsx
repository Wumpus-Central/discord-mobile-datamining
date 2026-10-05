// === Module 11733: search/EmptyState ===

// Module 11733 (search/EmptyState)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let showsGenericMessage;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { position: "relative", justifyContent: "center", alignItems: "center" }, textContainer: { justifyContent: "center", width: "100%" }, text: { marginTop: 16, textAlign: "center" } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((showsGenericMessage) => {
  let tmp10;
  let tmp7;
  let tmp8;
  const obj = showsGenericMessage(576);
  const cResult = obj.c(14);
  showsGenericMessage = showsGenericMessage.showsGenericMessage;
  let tmp4 = undefined !== showsGenericMessage;
  const query = showsGenericMessage.query;
  if (tmp4) {
    tmp4 = showsGenericMessage;
  }
  showsGenericMessage = tmp4;
  const tmp5 = closure_5();
  const tmpResult = showsGenericMessage(11665);
  const logAppLauncherEmptyStateView = tmpResult.useLogAppLauncherEmptyStateView(tmp(8932).AppLauncherEmptyStateType.SEARCH_EMPTY, query);
  if (cResult[0] !== tmp4) {
    const fn = function o() {
      let stringResult;
      const intl = intl2.intl;
      const string = intl.string;
      const t = intl2.t;
      if (showsGenericMessage) {
        stringResult = string(t.aOkFv8);
      } else {
        stringResult = string(t.LSNOYf);
      }
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(stringResult, "polite");
    };
    const items = [tmp4];
    cResult[0] = tmp4;
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = react.useEffect(tmp7, tmp8);
  if (cResult[3] !== tmp4) {
    let stringResult;
    let intl = tmp(1126).intl;
    let string = intl.string;
    let t = tmp(1126).t;
    if (tmp4) {
      stringResult = string(t.aOkFv8);
    } else {
      stringResult = string(t.LSNOYf);
    }
    cResult[3] = tmp4;
    cResult[4] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp5.text) {
    let tmp12;
    if (cResult[6] === tmp10) {
      tmp12 = cResult[7];
    }
    if (cResult[8] === tmp5.textContainer) {
      let tmp14;
      if (cResult[9] === tmp12) {
        tmp14 = cResult[10];
      }
      if (cResult[11] === tmp5.container) {
        let tmp18;
        if (cResult[12] === tmp14) {
          tmp18 = cResult[13];
        }
        return tmp18;
      }
      const tmp21 = <View style={tmp5.container}>{tmp14}</View>;
      cResult[11] = tmp5.container;
      cResult[12] = tmp14;
      cResult[13] = tmp21;
      tmp18 = tmp21;
    }
    const tmp17 = <View style={tmp5.textContainer}>{tmp12}</View>;
    cResult[8] = tmp5.textContainer;
    cResult[9] = tmp12;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const tmp13 = jsx(showsGenericMessage(4886).Text, { style: tmp5.text, variant: "text-sm/medium", color: "text-default", children: tmp10 });
  cResult[5] = tmp5.text;
  cResult[6] = tmp10;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((showsGenericMessage) => {
  let flag = showsGenericMessage.showsGenericMessage;
  const query = showsGenericMessage.query;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  const obj = flag(11665);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(flag(8932).AppLauncherEmptyStateType.SEARCH_EMPTY, query);
  const items = [flag];
  const effect = react.useEffect(() => {
    let stringResult;
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (flag) {
      stringResult = string(t.aOkFv8);
    } else {
      stringResult = string(t.LSNOYf);
    }
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult, "polite");
  }, items);
  const Text = flag(4886).Text;
  let intl = flag(1126).intl;
  let string = intl.string;
  let t = flag(1126).t;
  if (flag) {
    let stringResult = string(t.aOkFv8);
  } else {
    stringResult = string(t.LSNOYf);
  }
  return <View style={tmp.container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/EmptyState.tsx");

export default tmp2;