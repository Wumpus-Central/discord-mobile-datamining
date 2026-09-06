// === Module 7207: UserProfileCard ===

// Module 7207 (UserProfileCard)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7209 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(7208);
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: closure_4 } = Constants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = { title: null, titleContent: null, text: null, row: null, rowLabel: null, rowLabelText: null, rowSublabel: null };
createStyles = { marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.title = createStyles;
createStyles.titleContent = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.text = { flexShrink: 1 };
createStyles.row = { flexDirection: "column", paddingVertical: 20 };
createStyles.rowLabel = { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP };
createStyles.rowLabelText = { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE };
createStyles.rowSublabel = { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, titleLeadingIcon: 0, titleIcon: 0, titleStyle: 0, trailingAction: 0, children: 0, style: 0 }));
  const tmp2 = closure_8();
  let obj = { style };
  const merged1 = Object.assign(merged);
  let tmp3Result = null != title || null != trailingAction;
  if (tmp3Result) {
    obj = { style: null, children: null };
    const items = [tmp2.title, titleStyle];
    obj.style = items;
    tmp3Result = null != title;
    if (tmp3Result) {
      obj = { style: tmp2.titleContent, children: null };
      const items1 = [titleLeadingIcon, , ];
      const obj1 = { style: tmp2.text, accessibilityRole: "header", variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: title };
      items1[1] = hasOwnProperty(Text_Text.Text, obj1);
      items1[2] = titleIcon;
      obj.children = items1;
      tmp3Result = tmp3(tmp4, obj);
    }
    const items2 = [tmp3Result, trailingAction];
    obj.children = items2;
    tmp3Result = tmp3(tmp4, obj);
  }
  const items3 = [tmp3Result, children];
  obj.children = items3;
  return timestampProducer(View, obj);
};
export const UserProfileFormRow = function UserProfileFormRow(arg0) {
  ({ label, sublabel, hint, isDestructive, labelColor, arrow } = arg0);
  ({ icon, disabled, onPress } = arg0);
  if (tmp6Result === undefined) {
    tmp6Result = false;
  }
  const tmp = closure_8();
  let str;
  if (isDestructive) {
    str = "text-feedback-critical";
  }
  let str2 = "mobile-text-heading-primary";
  if (isDestructive) {
    str2 = "text-feedback-critical";
  }
  let obj = { style: tmp.row, accessibilityRole: "button", accessibilityLabel: label, disabled, onPress, children: null };
  obj = { style: tmp.rowLabel, children: null };
  obj = { size, color: str };
  const items = [hasOwnProperty(icon, obj), , , ];
  if (labelColor == null) {
    labelColor = str2;
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", color: labelColor, style: tmp.rowLabelText, children: label });
  tmp6Result = null != hint;
  if (tmp6Result) {
    const obj2 = { size, color: str };
    tmp6Result = tmp6(hint, obj2);
  }
  items[2] = tmp6Result;
  if (tmp6Result) {
    tmp6Result = tmp6(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
  }
  items[3] = tmp6Result;
  obj.children = items;
  const items1 = [timestampProducer(View, obj), ];
  let tmp6Result1 = null != sublabel;
  if (tmp6Result1) {
    const obj3 = { style: tmp.rowSublabel, children: sublabel };
    tmp6Result1 = tmp6(tmp5, obj3);
  }
  items1[1] = tmp6Result1;
  obj.children = items1;
  return timestampProducer(Pressables.PressableOpacity, obj);
};
export const UserProfileCardRows = function UserProfileCardRows(children) {
  const obj = { children: null };
  const Children = noop.Children;
  obj.children = Children.map(children.children, (children, arg1) => closure_1_5(React.Fragment, { children }, arg1));
  return hasOwnProperty(React5, obj);
};