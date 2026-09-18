// discord_app/modules/user_profile/native/UserProfileCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import ChevronSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(7404);
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: closure_4 } = Constants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  title: {
    marginBottom: nativeDefault.space.PX_12,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
  },
  titleContent: null,
  text: null,
  row: null,
  rowLabel: null,
  rowLabelText: null,
  rowSublabel: null,
};
let obj3 = {
  marginBottom: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
obj2.titleContent = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.text = { flexShrink: 1 };
obj2.row = { flexDirection: "column", paddingVertical: 20 };
obj2.rowLabel = { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP };
obj2.rowLabelText = { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE };
obj2.rowSublabel = { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({
      title: 0,
      titleLeadingIcon: 0,
      titleIcon: 0,
      titleStyle: 0,
      trailingAction: 0,
      children: 0,
      style: 0,
    }),
  );
  const tmp2 = closure_8();
  const obj = { style };
  const merged1 = Object.assign(merged);
  let tmp3Result2 = null != title || null != trailingAction;
  if (tmp3Result2) {
    const obj2 = { style: null, children: null };
    const items = [tmp2.title, titleStyle];
    obj2.style = items;
    let tmp3Result = null != title;
    if (tmp3Result) {
      const obj3 = { style: tmp2.titleContent, children: null };
      const items1 = [titleLeadingIcon, ,];
      const obj4 = {
        style: tmp2.text,
        accessibilityRole: "header",
        variant: "text-sm/medium",
        color: "text-strong",
        lineClamp: 1,
        children: title,
      };
      items1[1] = hasOwnProperty(Text_Text.Text, obj4);
      items1[2] = titleIcon;
      obj3.children = items1;
      tmp3Result = timestampProducer(View, obj3);
    }
    const items2 = [tmp3Result, trailingAction];
    obj2.children = items2;
    tmp3Result2 = timestampProducer(View, obj2);
  }
  const items3 = [tmp3Result2, children];
  obj.children = items3;
  return timestampProducer(View, obj);
}
export const UserProfileFormRow = function UserProfileFormRow(arg0) {
  ({ label, sublabel, hint, isDestructive, labelColor, arrow } = arg0);
  ({ icon, disabled, onPress } = arg0);
  if (tmp6Result3 === undefined) {
    tmp6Result3 = false;
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
  const obj = {
    style: tmp.row,
    accessibilityRole: "button",
    accessibilityLabel: label,
    disabled,
    onPress,
    children: null,
  };
  const obj2 = { style: tmp.rowLabel, children: null };
  const items = [hasOwnProperty(icon, { size, color: str }), , ,];
  if (labelColor == null) {
    labelColor = str2;
  }
  items[1] = hasOwnProperty(Text_Text.Text, {
    variant: "text-md/semibold",
    color: labelColor,
    style: tmp.rowLabelText,
    children: label,
  });
  let tmp6Result = null != hint;
  if (tmp6Result) {
    const obj5 = { size, color: str };
    tmp6Result = hasOwnProperty(hint, obj5);
  }
  items[2] = tmp6Result;
  if (tmp6Result3) {
    tmp6Result3 = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
  }
  items[3] = tmp6Result3;
  obj2.children = items;
  const items1 = [timestampProducer(View, obj2)];
  let tmp6Result4 = null != sublabel;
  if (tmp6Result4) {
    const obj6 = { style: tmp.rowSublabel, children: sublabel };
    tmp6Result4 = hasOwnProperty(View, obj6);
  }
  items1[1] = tmp6Result4;
  obj.children = items1;
  return timestampProducer(Pressables.PressableOpacity, obj);
};
export const UserProfileCardRows = function UserProfileCardRows(children) {
  const obj = { children: null };
  const Children = noop.Children;
  obj.children = Children.map(children.children, (children, arg1) => closure_1_5(React.Fragment, { children }, arg1));
  return hasOwnProperty(React5, obj);
};
