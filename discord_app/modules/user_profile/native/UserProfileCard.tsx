// === Module 7185: Divider ===

// Module 7185 (Divider)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 6685 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 7186 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function Divider() {
  return callback(View, { style: callback2().rowDivider });
}
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: c5, CARD_PADDING } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
const createCacheKey = { marginBottom: ThemesDefault.space.PX_12, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { flexShrink: 1 };
createCacheKey[3] = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, marginLeft: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP, marginRight: -CARD_PADDING };
createCacheKey[4] = { flexDirection: "column", paddingVertical: 20 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP };
createCacheKey[6] = { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE };
createCacheKey[7] = { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = callback2();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabledDefault("UserProfileCard");
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
      obj1 = { style: null, accessibilityRole: "header", variant: null, color: null, lineClamp: 1, children: null };
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
      items1[1] = callback(Text.Text, obj1);
      items1[2] = titleIcon;
      obj[1] = items1;
      tmp5Result = callback2(View, obj);
    }
    const items2 = [tmp5Result, trailingAction];
    obj[1] = items2;
    tmp5Result = callback2(View, obj);
  }
  const items3 = [tmp5Result, children];
  obj.children = items3;
  return callback2(View, obj);
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
  const obj = { size: closure_5, color: str };
  const items = [callback(icon, obj), , , ];
  if (labelColor == null) {
    labelColor = str2;
  }
  items[1] = callback(Text.Text, { variant: "text-md/semibold", color: labelColor, style: tmp.rowLabelText, children: label });
  tmp6Result = null != hint;
  if (tmp6Result) {
    const obj2 = { size: null, color: null };
    obj2[0] = closure_5;
    obj2[1] = str;
    tmp6Result = callback(hint, obj2);
  }
  items[2] = tmp6Result;
  if (tmp6Result) {
    tmp6Result = callback(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
  }
  items[3] = tmp6Result;
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  let tmp6Result1 = null != sublabel;
  if (tmp6Result1) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.rowSublabel;
    obj3[1] = sublabel;
    tmp6Result1 = callback(View, obj3);
  }
  items1[1] = tmp6Result1;
  obj[5] = items1;
  return callback2(PressableBase.PressableOpacity, obj);
};
export const UserProfileCardRows = function UserProfileCardRows(children) {
  closure_0 = useIsMobileVisualRefreshExperimentEnabledDefault("UserProfileCardRows");
  const Children = React.Children;
  return callback(closure_8, {
    children: Children.map(children.children, (arg0, arg1) => {
      let tmp2 = null;
      if (!closure_0) {
        tmp2 = null;
        if (0 !== arg1) {
          tmp2 = closure_1_6(Divider, {});
        }
      }
      const children = [tmp2, arg0];
      return closure_1_7(closure_1_3.Fragment, { children }, arg1);
    })
  });
};