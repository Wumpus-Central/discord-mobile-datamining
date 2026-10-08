// === Module 14788: SettingsSearchEmptyState ===

// Module 14788 (SettingsSearchEmptyState)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4788 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import NoResultsAlt from "NoResultsAlt" /* 8606 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles({ container: { paddingTop: 24, justifyContent: "center", alignItems: "center" }, textContainer: { marginTop: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsSearchEmptyState() {
  const cResult = c.c(10);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.zihbmv), "polite");
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = React4(NoResultsAlt.NoResultsAlt, { resizeMode: "contain" });
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    let intl = util.intl;
    obj2.children = intl.string(util.t.zihbmv);
    const tmp13 = React4(Text_Text.Text, obj2);
    cResult[3] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t.XclvsB);
    const tmp16 = React4(Text_Text.Text, obj3);
    cResult[4] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== tmp4.textContainer) {
    const obj4 = { style: tmp4.textContainer, align: "center", justify: "center", children: null };
    const items1 = [tmp11, tmp14];
    obj4.children = items1;
    const tmp19 = hasOwnProperty(Stack_Stack.Stack, obj4);
    cResult[5] = tmp4.textContainer;
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp4.container) {
    if (cResult[8] === tmp17) {
      let tmp20 = cResult[9];
    }
    return tmp20;
  }
  const obj5 = { style: tmp4.container, children: null };
  const items2 = [tmp8, tmp17];
  obj5.children = items2;
  const tmp21 = hasOwnProperty(View, obj5);
  cResult[7] = tmp4.container;
  cResult[8] = tmp17;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : (function SettingsSearchEmptyState() {
  const tmp = closure_6();
  const effect = noop.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.zihbmv), "polite");
  }, []);
  const obj = { style: tmp.container, children: null };
  const items = [React4(NoResultsAlt.NoResultsAlt, { resizeMode: "contain" }), ];
  const obj2 = { style: tmp.textContainer, align: "center", justify: "center", children: null };
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = util.intl;
  obj3.children = intl.string(util.t.zihbmv);
  const items1 = [React4(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.XclvsB);
  items1[1] = React4(Text_Text.Text, obj4);
  obj2.children = items1;
  items[1] = hasOwnProperty(Stack_Stack.Stack, obj2);
  obj.children = items;
  return hasOwnProperty(View, obj);
}));