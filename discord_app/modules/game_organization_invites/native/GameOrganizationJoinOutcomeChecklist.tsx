// === Module 12197: GameOrganizationJoinOutcomeChecklist ===

// Module 12197 (GameOrganizationJoinOutcomeChecklist)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5508 */;
import ClockIcon from "ClockIcon" /* 5626 */;
import Stack_Stack from "Stack/Stack" /* 5989 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7152 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7399 */;
import useGameOrganizationJoinOutcome from "useGameOrganizationJoinOutcome" /* 12192 */;
import noop from "module_19" /* 19 */;

require = fn;
function RowIcon(status) {
  status = status.status;
  if (useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeRowStatus.SUCCESS === status) {
    const obj2 = { size: "refresh_sm", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    return React4(CircleCheckIcon.CircleCheckIcon, obj2);
  } else if (useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeRowStatus.PENDING === status) {
    const obj3 = { size: "refresh_sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    return React4(ClockIcon.ClockIcon, obj3);
  } else if (useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeRowStatus.ERROR === status) {
    const obj = { size: "refresh_sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    return React4(CircleErrorIcon.CircleErrorIcon, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4917);
let obj2 = { card: { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, content: { flex: 1 }, divider: null };
let obj3 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeChecklist.tsx");

export default function GameOrganizationJoinOutcomeChecklist(rows) {
  rows = rows.rows;
  const tmp = closure_6();
  importDefault = tmp;
  return closure_4(rows(5989).Stack, {
    spacing: nativeDefault.space.PX_16,
    style: tmp.card,
    children: rows.map((subtitle, index) => {
      subtitle = subtitle.subtitle;
      ({ key, status, title } = subtitle);
      const obj = { direction: "horizontal", align: "flex-start", spacing: nativeDefault.space.PX_16, children: null };
      items = [React4(RowIcon, { status }), ];
      const obj2 = { spacing: nativeDefault.space.PX_16, style: content.content, children: null };
      const obj3 = { spacing: nativeDefault.space.PX_4, children: null };
      const items1 = [React4(Text_Text.Text, { variant: "heading-sm/semibold", color: "text-strong", children: title }), ];
      let tmp4Result = null;
      if (null != subtitle) {
        const obj4 = { variant: "body-md/normal", color: "text-default", children: subtitle };
        tmp4Result = React4(Text_Text.Text, obj4);
      }
      items1[1] = tmp4Result;
      obj3.children = items1;
      const items2 = [hasOwnProperty(Stack_Stack.Stack, obj3), ];
      let tmp4Result2 = null;
      if (index < rows.length - 1) {
        const obj5 = { style: content.divider };
        tmp4Result2 = React4(View, obj5);
      }
      items2[1] = tmp4Result2;
      obj2.children = items2;
      items[1] = hasOwnProperty(Stack_Stack.Stack, obj2);
      obj.children = items;
      return hasOwnProperty(Stack_Stack.Stack, obj, key);
    })
  });
};