// === Module 7207: UserProfileCard ===

// Module 7207 (UserProfileCard)
import ThemesDefault from "Themes" /* 576 */;
import Text from "Text" /* 4556 */;
import PressableBase from "PressableBase" /* 5123 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7209 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 7208 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: c4 } = ARBITRARY_LARGE_OFFSET);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { title: null, titleContent: null, text: null, row: null, rowLabel: null, rowLabelText: null, rowSublabel: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_12, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { flexShrink: 1 };
createCacheKey[3] = { flexDirection: "column", paddingVertical: 20 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP };
createCacheKey[5] = { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE };
createCacheKey[6] = { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flex: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = callback2();
  let obj = { style };
  const merged1 = Object.assign(merged);
  let tmp3Result = null != title || null != trailingAction;
  if (tmp3Result) {
    obj = { style: null, children: null };
    const items = [tmp2.title, titleStyle];
    obj[0] = items;
    tmp3Result = null != title;
    if (tmp3Result) {
      obj = { style: null, children: null };
      obj[0] = tmp2.titleContent;
      const items1 = [titleLeadingIcon, , ];
      obj1 = { style: null, accessibilityRole: "header", variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: null };
      obj1[0] = tmp2.text;
      obj1[5] = title;
      items1[1] = callback(Text.Text, obj1);
      items1[2] = titleIcon;
      obj[1] = items1;
      tmp3Result = tmp3(tmp4, obj);
    }
    const items2 = [tmp3Result, trailingAction];
    obj[1] = items2;
    tmp3Result = tmp3(tmp4, obj);
  }
  const items3 = [tmp3Result, children];
  obj.children = items3;
  return closure_6(View, obj);
};
export const UserProfileFormRow = function UserProfileFormRow(arg0) {
  ({ label, sublabel, hint, isDestructive, labelColor, arrow } = arg0);
  ({ icon, disabled, onPress } = arg0);
  if (tmp6Result === undefined) {
    tmp6Result = false;
  }
  const tmp = callback2();
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
  obj = { size: closure_4, color: str };
  const items = [callback(icon, obj), , , ];
  if (labelColor == null) {
    labelColor = str2;
  }
  items[1] = callback(Text.Text, { variant: "text-md/semibold", color: labelColor, style: tmp.rowLabelText, children: label });
  tmp6Result = null != hint;
  if (tmp6Result) {
    const obj2 = { size: null, color: null };
    obj2[0] = closure_4;
    obj2[1] = str;
    tmp6Result = tmp6(hint, obj2);
  }
  items[2] = tmp6Result;
  if (tmp6Result) {
    tmp6Result = tmp6(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
  }
  items[3] = tmp6Result;
  obj[1] = items;
  const items1 = [closure_6(View, obj), ];
  let tmp6Result1 = null != sublabel;
  if (tmp6Result1) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.rowSublabel;
    obj3[1] = sublabel;
    tmp6Result1 = tmp6(tmp5, obj3);
  }
  items1[1] = tmp6Result1;
  obj[5] = items1;
  return closure_6(PressableBase.PressableOpacity, obj);
};
export const UserProfileCardRows = function UserProfileCardRows(children) {
  const Children = React.Children;
  return callback(closure_7, { children: Children.map(children.children, (children) => callback(React.Fragment, { children }, arg1)) });
};