// === Module 17021: pages/ErrorScreen ===

// Module 17021 (pages/ErrorScreen)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4433 */;
import Text_Text from "Text/Text" /* 4718 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7177 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" }, text: { textAlign: "center", width: "75%" } });
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
  const obj = { style: null, children: null };
  const items1 = [tmp.container, { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  obj.style = items1;
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp.text, children: text });
  return <View style={null}>{null}</View>;
});