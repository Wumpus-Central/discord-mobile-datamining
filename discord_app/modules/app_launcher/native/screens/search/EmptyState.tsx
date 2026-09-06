// discord_app/modules/app_launcher/native/screens/search/EmptyState.tsx
import util from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  container: { position: "relative", justifyContent: "center", alignItems: "center" },
  textContainer: { justifyContent: "center", width: "100%" },
  text: { marginTop: 16, textAlign: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/EmptyState.tsx");

export default function EmptyState(showsGenericMessage) {
  let flag = showsGenericMessage.showsGenericMessage;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  let obj = flag(12051);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(
    flag(9409).AppLauncherEmptyStateType.SEARCH_EMPTY,
    showsGenericMessage.query,
  );
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
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.textContainer, children: null };
  const obj1 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  let intl = flag(1114).intl;
  let string = intl.string;
  let t = flag(1114).t;
  if (flag) {
    let stringResult = string(t.aOkFv8);
  } else {
    stringResult = string(t.LSNOYf);
  }
  obj1.children = stringResult;
  obj.children = jsx(flag(4556).Text, {
    style: tmp.text,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  });
  obj.children = <View style={tmp.textContainer}>{null}</View>;
  return <View style={tmp.textContainer}>{null}</View>;
}
