// === Module 14701: SettingsSearchEmptyState ===

// Module 14701 (SettingsSearchEmptyState)
import util from "util" /* 1114 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import NoResultsAlt from "NoResultsAlt" /* 9760 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { paddingTop: 24, justifyContent: "center", alignItems: "center" }, textContainer: { marginTop: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default noop.memo(function SettingsSearchEmptyState() {
  const tmp = closure_6();
  const effect = noop.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.zihbmv), "polite");
  }, []);
  let obj = { style: tmp.container, children: null };
  const items = [React4(NoResultsAlt.NoResultsAlt, { resizeMode: "contain" }), ];
  obj = { style: tmp.textContainer, align: "center", justify: "center", children: null };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = util.intl;
  obj.children = intl.string(util.t.zihbmv);
  const items1 = [React4(Text_Text.Text, obj), ];
  const obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.XclvsB);
  items1[1] = React4(Text_Text.Text, obj1);
  obj.children = items1;
  items[1] = hasOwnProperty(Stack_Stack.Stack, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
});