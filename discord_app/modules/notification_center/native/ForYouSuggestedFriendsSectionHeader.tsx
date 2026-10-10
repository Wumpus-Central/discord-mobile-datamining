// === Module 16872: ForYouSuggestedFriendsSectionHeader ===

// Module 16872 (ForYouSuggestedFriendsSectionHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { container: { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, noDivider: { borderTopWidth: 0, marginTop: 0 }, text: null };
let obj3 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.text = { marginTop: nativeDefault.space.PX_16 };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ForYouSuggestedFriendsSectionHeader(showDivider) {
  const cResult = c.c(9);
  showDivider = showDivider.showDivider;
  const tmp4 = closure_4();
  let noDivider = !showDivider;
  if (!showDivider) {
    noDivider = tmp4.noDivider;
  }
  if (cResult[0] === tmp4.container) {
    if (cResult[1] === noDivider) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["1uAmCw"]);
      cResult[3] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.text) {
      const obj2 = { style: tmp4.text, color: "text-muted", variant: "text-sm/semibold", children: tmp7 };
      const tmp11 = jsx(Text_Text.Text, { style: tmp4.text, color: "text-muted", variant: "text-sm/semibold", children: tmp7 });
      cResult[4] = tmp4.text;
      cResult[5] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp9) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { style: tmp5, children: tmp9 };
    const tmp15 = <View style={tmp5}>{tmp9}</View>;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const items = [tmp4.container, noDivider];
  cResult[0] = tmp4.container;
  cResult[1] = noDivider;
  cResult[2] = items;
  tmp5 = items;
}) : (function ForYouSuggestedFriendsSectionHeader(showDivider) {
  showDivider = showDivider.showDivider;
  const tmp = closure_4();
  const items = [tmp.container, ];
  let noDivider = !showDivider;
  if (!showDivider) {
    noDivider = tmp.noDivider;
  }
  const obj = { style: items, children: null };
  items[1] = noDivider;
  const obj2 = { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["1uAmCw"]);
  obj.children = jsx(Text_Text.Text, { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null });
  return <View style={items}>{null}</View>;
});