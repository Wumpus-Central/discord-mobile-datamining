import noop from "noop";
import { View } from "get ActivityIndicator";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let CARD_PADDING;
let CARD_ROWS_COLUMN_GAP;
let CARD_ROWS_ICON_SIZE;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function Divider() {
  return callback(View, { style: createCacheKey().rowDivider });
}
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: c5, CARD_PADDING } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
createCacheKey = { title: null, titleContent: null, text: null, rowDivider: null, row: null, rowLabel: null, rowLabelText: null, rowSublabel: null };
createCacheKey = { marginBottom: require("Themes").space.PX_12, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[2] = { flexShrink: 1 };
let obj1 = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[3] = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP, marginRight: -CARD_PADDING };
createCacheKey[4] = { flexDirection: "column", paddingVertical: 20 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP };
createCacheKey[6] = { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE };
createCacheKey[7] = { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP, marginRight: -CARD_PADDING };
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  let children;
  let style;
  let title;
  let titleIcon;
  let titleLeadingIcon;
  let titleStyle;
  let trailingAction;
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = createCacheKey();
  const tmp4 = importDefault(1348)("UserProfileCard");
  let obj = { style };
  const merged1 = Object.assign(merged);
  let tmp5Result = null != title || null != trailingAction;
  if (tmp5Result) {
    obj = { style: null, children: null };
    const items = [tmp2.title, titleStyle];
    obj[0] = items;
    tmp5Result = null != title;
    if (tmp5Result) {
      obj = { style: null, children: null };
      obj[0] = tmp2.titleContent;
      const items1 = [titleLeadingIcon, , ];
      const obj1 = { style: null, accessibilityRole: "header", variant: null, color: null, lineClamp: 1, children: null };
      obj1[0] = tmp2.text;
      let str = "text-sm/semibold";
      if (tmp4) {
        str = "text-sm/medium";
      }
      obj1[2] = str;
      let str2 = "text-default";
      if (tmp4) {
        str2 = "text-strong";
      }
      obj1[3] = str2;
      obj1[5] = title;
      items1[1] = closure_6(require(4281) /* Text */.Text, obj1);
      items1[2] = titleIcon;
      obj[1] = items1;
      tmp5Result = tmp5(tmp6, obj);
      const tmp10 = closure_6;
    }
    const items2 = [tmp5Result, trailingAction];
    obj[1] = items2;
    tmp5Result = tmp5(tmp6, obj);
  }
  const items3 = [tmp5Result, children];
  obj.children = items3;
  return closure_7(View, obj);
};
export const UserProfileFormRow = function UserProfileFormRow(arg0) {
  let arrow;
  let disabled;
  let hint;
  let icon;
  let isDestructive;
  let label;
  let labelColor;
  let onPress;
  let sublabel;
  ({ label, sublabel, hint, isDestructive, labelColor, arrow } = arg0);
  ({ icon, disabled, onPress } = arg0);
  if (tmp6Result === undefined) {
    tmp6Result = false;
  }
  const tmp = createCacheKey();
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
  obj = { size: closure_5, color: str };
  const items = [callback(icon, obj), , , ];
  if (labelColor == null) {
    labelColor = str2;
  }
  items[1] = callback(require(4281) /* Text */.Text, { variant: "text-md/semibold", color: labelColor, style: tmp.rowLabelText, children: label });
  tmp6Result = null != hint;
  if (tmp6Result) {
    const obj2 = { size: null, color: null };
    obj2[0] = closure_5;
    obj2[1] = str;
    tmp6Result = tmp6(hint, obj2);
  }
  items[2] = tmp6Result;
  if (tmp6Result) {
    tmp6Result = tmp6(require(5660) /* ChevronSmallRightIcon */.ChevronSmallRightIcon, { size: "sm" });
  }
  items[3] = tmp6Result;
  obj[1] = items;
  const items1 = [closure_7(View, obj), ];
  let tmp6Result1 = null != sublabel;
  if (tmp6Result1) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.rowSublabel;
    obj3[1] = sublabel;
    tmp6Result1 = tmp6(tmp5, obj3);
  }
  items1[1] = tmp6Result1;
  obj[5] = items1;
  return closure_7(require(4812) /* PressableBase */.PressableOpacity, obj);
};
export const UserProfileCardRows = function UserProfileCardRows(children) {
  let closure_0;
  closure_0 = importDefault(1348)("UserProfileCardRows");
  const Children = React.Children;
  return callback(closure_8, {
    children: Children.map(children.children, (arg0, arg1) => {
      let tmp2 = null;
      if (!closure_0) {
        tmp2 = null;
        if (0 !== arg1) {
          tmp2 = outer1_6(outer1_10, {});
        }
      }
      const children = [tmp2, arg0];
      return outer1_7(outer1_3.Fragment, { children }, arg1);
    })
  });
};