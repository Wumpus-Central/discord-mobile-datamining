// === Module 11681: EmptyState ===

// Module 11681 (EmptyState)
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let closure_5 = createCacheKey.createStyles({ container: { position: "relative", justifyContent: "center", alignItems: "center" }, textContainer: { justifyContent: "center", width: "100%" }, text: { marginTop: 16, textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/search/EmptyState.tsx");

export default function EmptyState(showsGenericMessage) {
  let flag = showsGenericMessage.showsGenericMessage;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  let obj = flag(11623);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(flag(8435).AppLauncherEmptyStateType.SEARCH_EMPTY, showsGenericMessage.query);
  const items = [flag];
  const effect = React.useEffect(() => {
    const intl = flag(closure_1_1[6]).intl;
    const string = intl.string;
    const t = flag(closure_1_1[6]).t;
    if (flag) {
      let stringResult = string(t.aOkFv8);
    } else {
      stringResult = string(t.LSNOYf);
    }
    const AccessibilityAnnouncer = flag(closure_1_1[7]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult, "polite");
  }, items);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.textContainer, children: null };
  obj1 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  let intl = flag(1236).intl;
  let string = intl.string;
  let t = flag(1236).t;
  if (flag) {
    let stringResult = string(t.aOkFv8);
  } else {
    stringResult = string(t.LSNOYf);
  }
  obj1[3] = stringResult;
  obj[1] = jsx(flag(4474).Text, { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null });
  obj[1] = <View style={tmp.textContainer}>{null}</View>;
  return <View style={tmp.textContainer}>{null}</View>;
};