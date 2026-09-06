// discord_app/modules/search/native/components/tabs/pages/ErrorScreen.tsx
import AccessibilityAnnouncer2 from "../../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({
  container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" },
  text: { textAlign: "center", width: "75%" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default noop.memo((text) => {
  text = text.text;
  require = text;
  const tmp = closure_6();
  const items = [text];
  const effect = noop.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(text, "polite");
  }, items);
  let obj = { style: null, children: null };
  const items1 = [
    tmp.container,
    { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom },
  ];
  obj.style = items1;
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp.text, children: text };
  obj.children = jsx(Text_Text.Text, {
    variant: "text-sm/medium",
    color: "text-muted",
    style: tmp.text,
    children: text,
  });
  return (
    <View variant="text-sm/medium" color="text-muted" style={tmp.text}>
      {text}
    </View>
  );
});
