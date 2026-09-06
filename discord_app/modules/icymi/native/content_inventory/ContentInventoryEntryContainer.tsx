// === Module 16508: ContentInventoryEntryContainer ===

// Module 16508 (ContentInventoryEntryContainer)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createICYMIStyles = fn(16452);
const iCYMIStyles = createICYMIStyles.createICYMIStyles((marginBottom, arg1) => {
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
  obj.paddingBottom = num2;
  let num3 = 0;
  if (arg1) {
    num3 = marginBottom.margin;
  }
  obj.paddingTop = num3;
  obj.container = obj;
  obj.screenshotContainer = { marginBottom: marginBottom.margin };
  obj = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: marginBottom.margin };
  obj.header = obj;
  obj.headerInfo = { flex: 1 };
  let num4 = 1;
  if (obj4.isAndroid()) {
    num4 = -1;
  }
  obj.title = { display: "flex", flexDirection: "row", alignItems: "center", gap: 6, marginBottom: num4, marginTop: 2 };
  obj4 = PlatformUtils;
  obj.subTitleContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx");

export default function ContentInventoryEntryContainer(contentId) {
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
      let obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(contentId, type, "press");
      let obj1 = ICYMIActionCreatorsDefault;
      obj = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
      obj1.feedItemActioned(obj);
      tmp();
    } else {
      ICYMIActionCreatorsDefault.itemInteracted(contentId, type, "open_profile");
      obj = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "user" } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj);
      obj1 = { userId };
      showUserProfileActionSheetDefault(obj1);
    }
  }, items);
  let obj = contentId(type[9]);
  const items1 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items1, () => UserStore.getUser(userId));
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { unstable_pressDelay: 130, onPress: callback, accessibilityRole: "button", style: tmp.pressable, children: null };
    obj = { hideDivider: flag, highlight, children: null };
    const items2 = [tmp.container, ];
    let screenshotContainer = flag;
    if (flag) {
      screenshotContainer = tmp.screenshotContainer;
    }
    let obj1 = { style: null, children: null };
    items2[1] = screenshotContainer;
    obj1.style = items2;
    const obj2 = { style: tmp.header, children: null };
    const obj3 = { animate: true, size: tmp3(tmp4[12]).AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" };
    const items3 = [closure_6(tmp3(tmp4[12]).Avatar, obj3, stateFromStores.id), ];
    let obj4 = { style: tmp.headerInfo, children: null };
    let obj5 = { style: tmp.title, children: title };
    const items4 = [closure_6(View, obj5), ];
    const obj6 = { style: tmp.subTitleContainer, children: subtitle };
    items4[1] = closure_6(View, obj6);
    obj4.children = items4;
    items3[1] = closure_7(View, obj4);
    obj2.children = items3;
    const items5 = [closure_7(View, obj2), contentId.children];
    obj1.children = items5;
    obj.children = closure_7(View, obj1);
    obj.children = closure_6(tmp3(tmp4[11]).SimplePost, obj);
    tmp7Result = closure_6(tmp3(tmp4[10]).PressableHighlight, obj);
  }
  return tmp7Result;
};
export const useStyles = iCYMIStyles;