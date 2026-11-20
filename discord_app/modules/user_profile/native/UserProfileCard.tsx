// === Module 7443: UserProfileCard ===

// Module 7443 (UserProfileCard)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5385 */;
import Pressables from "Pressables" /* 6910 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7445 */;
import UserProfileCardTitleDefault from "UserProfileCardTitle" /* 7446 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(7444);
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4794);
let obj2 = { title: { marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_4 }, row: { flexDirection: "column", paddingVertical: 20 }, rowLabel: { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP }, rowLabelText: { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE }, rowSublabel: { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, titleLeadingIcon: 0, titleIcon: 0, titleStyle: 0, trailingAction: 0, children: 0, style: 0 }));
  const obj = { style };
  const merged1 = Object.assign(merged);
  let tmp3Result = null != title || null != trailingAction;
  if (tmp3Result) {
    const obj2 = { style: null, children: null };
    items = [tmp2.title, titleStyle];
    obj2.style = items;
    let tmp7 = null != title;
    if (tmp7) {
      const obj3 = { title, leadingIcon: titleLeadingIcon, trailingIcon: titleIcon };
      tmp7 = timestampProducer(UserProfileCardTitleDefault, obj3);
    }
    const items1 = [tmp7, trailingAction];
    obj2.children = items1;
    tmp3Result = metroImportDefault(View, obj2);
  }
  const items2 = [tmp3Result, children];
  obj.children = items2;
  return metroImportDefault(View, obj);
};
export function UserProfileFormRow(arg0) {
  ({ label, sublabel, hint, isDestructive, labelColor, arrow } = arg0);
  ({ icon, disabled, onPress } = arg0);
  if (tmp6Result3 === undefined) {
    tmp6Result3 = false;
  }
  const tmp = closure_9();
  let str;
  if (isDestructive) {
    str = "text-feedback-critical";
  }
  let str2 = "mobile-text-heading-primary";
  if (isDestructive) {
    str2 = "text-feedback-critical";
  }
  const obj = { style: tmp.row, accessibilityRole: "button", accessibilityLabel: label, disabled, onPress, children: null };
  const obj2 = { style: tmp.rowLabel, children: null };
  items = [timestampProducer(icon, { size, color: str }), , , ];
  if (labelColor == null) {
    labelColor = str2;
  }
  items[1] = timestampProducer(Text_Text.Text, { variant: "body-md/semibold", color: labelColor, style: tmp.rowLabelText, children: label });
  let tmp6Result = null != hint;
  if (tmp6Result) {
    const obj5 = { size, color: str };
    tmp6Result = timestampProducer(hint, obj5);
  }
  items[2] = tmp6Result;
  if (tmp6Result3) {
    tmp6Result3 = timestampProducer(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
  }
  items[3] = tmp6Result3;
  obj2.children = items;
  const items1 = [metroImportDefault(View, obj2), ];
  let tmp6Result4 = null != sublabel;
  if (tmp6Result4) {
    const obj6 = { style: tmp.rowSublabel, children: sublabel };
    tmp6Result4 = timestampProducer(View, obj6);
  }
  items1[1] = tmp6Result4;
  obj.children = items1;
  return metroImportDefault(Pressables.PressableOpacity, obj);
}
export function UserProfileCardRows(children) {
  const obj = { children: null };
  const Children = noop.Children;
  obj.children = Children.map(children.children, (children, arg1) => closure_1_6(React.Fragment, { children }, arg1));
  return timestampProducer(React5, obj);
}