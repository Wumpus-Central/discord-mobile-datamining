import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
const iCYMIStyles = createICYMIStyles.createICYMIStyles((marginBottom) => {
  let num = 0;
  if (!arg1) {
    num = marginBottom.margin;
  }
  let obj = { pressable: { marginTop: num }, container: null, screenshotContainer: null, header: null, headerInfo: null, title: null, subTitleContainer: null };
  obj = { marginHorizontal: marginBottom.margin, paddingBottom: null, paddingTop: null };
  let num2 = 0;
  if (!arg1) {
    num2 = marginBottom.margin;
  }
  obj[1] = num2;
  let num3 = 0;
  if (arg1) {
    num3 = marginBottom.margin;
  }
  obj[2] = num3;
  obj[1] = obj;
  obj[2] = { marginBottom: marginBottom.margin };
  obj = { display: "flex", flexDirection: "row", alignItems: "center", gap: importDefault(712).space.PX_12, marginBottom: marginBottom.margin };
  obj[3] = obj;
  obj[4] = { flex: 1 };
  let num4 = 1;
  if (obj4.isAndroid()) {
    num4 = -1;
  }
  obj[5] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 6, marginBottom: num4, marginTop: 2 };
  obj4 = require(500) /* set */;
  const tmp = importDefault;
  obj[6] = { flexDirection: "row", alignItems: "center", gap: importDefault(712).space.PX_8 };
  return obj;
});
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx");

export default function ContentInventoryEntryContainer(contentId) {
  let highlight;
  let subtitle;
  let title;
  contentId = contentId.contentId;
  const userId = contentId.userId;
  let flag = contentId.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  const type = contentId.type;
  ({ highlight, title, subtitle } = contentId);
  if (highlight === undefined) {
    highlight = false;
  }
  const onPress = contentId.onPress;
  const tmp = iCYMIStyles(flag);
  const items = [contentId, type, userId, onPress];
  const callback = onPress.useCallback(() => {
    if (null != onPress) {
      let obj = userId(type[7]);
      obj.itemInteracted(contentId, type, "press");
      let obj1 = userId(type[7]);
      obj = { itemId: null, itemType: null, actionParameters: null };
      obj[0] = contentId;
      obj[1] = type;
      obj[2] = { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null };
      obj1.feedItemActioned(obj);
      tmp();
    } else {
      userId(type[7]).itemInteracted(contentId, type, "open_profile");
      const obj4 = userId(type[7]);
      obj = { itemId: null, itemType: null, actionParameters: null };
      obj[0] = contentId;
      obj[1] = type;
      obj[2] = { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "user" };
      userId(type[7]).feedItemActioned(obj);
      obj1 = { userId: null };
      obj1[0] = userId;
      userId(type[8])(obj1);
      const obj5 = userId(type[7]);
    }
  }, items);
  let obj = contentId(type[9]);
  const items1 = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_5.getUser(userId));
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { unstable_pressDelay: 130, onPress: null, accessibilityRole: "button", style: null, children: null };
    obj[1] = callback;
    obj[3] = tmp.pressable;
    obj = { hideDivider: null, highlight: null, children: null };
    obj[0] = flag;
    obj[1] = highlight;
    const items2 = [tmp.container, ];
    let screenshotContainer = flag;
    if (flag) {
      screenshotContainer = tmp.screenshotContainer;
    }
    let obj1 = { style: null, children: null };
    items2[1] = screenshotContainer;
    obj1[0] = items2;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    const obj3 = { animate: true, size: null, user: null, guildId: "Array" };
    obj3[1] = tmp3(tmp4[12]).AvatarSizes.NORMAL;
    obj3[2] = stateFromStores;
    const items3 = [closure_6(tmp3(tmp4[12]).Avatar, obj3, stateFromStores.id), ];
    let obj4 = { style: null, children: null };
    obj4[0] = tmp.headerInfo;
    let obj5 = { style: null, children: null };
    obj5[0] = tmp.title;
    obj5[1] = title;
    const items4 = [closure_6(View, obj5), ];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.subTitleContainer;
    obj6[1] = subtitle;
    items4[1] = closure_6(View, obj6);
    obj4[1] = items4;
    items3[1] = closure_7(View, obj4);
    obj2[1] = items3;
    const items5 = [closure_7(View, obj2), contentId.children];
    obj1[1] = items5;
    obj[2] = closure_7(View, obj1);
    obj[4] = closure_6(tmp3(tmp4[11]).SimplePost, obj);
    tmp7Result = tmp7(tmp3(tmp4[10]).PressableHighlight, obj);
  }
  return tmp7Result;
};
export const useStyles = iCYMIStyles;