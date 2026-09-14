// === Module 12239: search/EmptyState ===

// Module 12239 (search/EmptyState)
import util from "util" /* 1114 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4348 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_5 = createStyles.createStyles({ container: { position: "relative", justifyContent: "center", alignItems: "center" }, textContainer: { justifyContent: "center", width: "100%" }, text: { marginTop: 16, textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/EmptyState.tsx");

export default function EmptyState(showsGenericMessage) {
  let flag = showsGenericMessage.showsGenericMessage;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  const logAppLauncherEmptyStateView = flag(12181).useLogAppLauncherEmptyStateView(flag(9539).AppLauncherEmptyStateType.SEARCH_EMPTY, showsGenericMessage.query);
  const items = [flag];
  const effect = noop.useEffect(() => {
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (flag) {
      let stringResult = string(t.aOkFv8);
    } else {
      stringResult = string(t.LSNOYf);
    }
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult, "polite");
  }, items);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  let intl = flag(1114).intl;
  let string = intl.string;
  let t = flag(1114).t;
  if (flag) {
    let stringResult = string(t.aOkFv8);
  } else {
    stringResult = string(t.LSNOYf);
  }
  obj4.children = stringResult;
  obj3.children = jsx(flag(4632).Text, { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null });
  obj2.children = <View style={tmp.textContainer}>{null}</View>;
  return <View style={tmp.container}>{null}</View>;
};