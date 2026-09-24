// discord_app/modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createICYMIStyles = fn(16879);
const iCYMIStyles = createICYMIStyles.createICYMIStyles((marginBottom, arg1) => {
  let num = 0;
  if (!arg1) {
    num = marginBottom.margin;
  }
  const obj = {
    pressable: { marginTop: num },
    container: null,
    screenshotContainer: null,
    header: null,
    headerInfo: null,
    title: null,
    subTitleContainer: null,
  };
  const obj2 = { marginHorizontal: marginBottom.margin, paddingBottom: null, paddingTop: null };
  let num2 = 0;
  if (!arg1) {
    num2 = marginBottom.margin;
  }
  obj2.paddingBottom = num2;
  let num3 = 0;
  if (arg1) {
    num3 = marginBottom.margin;
  }
  obj2.paddingTop = num3;
  obj.container = obj2;
  obj.screenshotContainer = { marginBottom: marginBottom.margin };
  obj.header = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    marginBottom: marginBottom.margin,
  };
  obj.headerInfo = { flex: 1 };
  const obj3 = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    marginBottom: marginBottom.margin,
  };
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
      ICYMIActionCreatorsDefault.itemInteracted(contentId, type, "press");
      const obj3 = {
        itemId: contentId,
        itemType: type,
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "item_container",
          actionIntentType: "open",
          actionDestinationType: null,
        },
      };
      ICYMIActionCreatorsDefault.feedItemActioned(obj3);
      tmp();
    } else {
      ICYMIActionCreatorsDefault.itemInteracted(contentId, type, "open_profile");
      const obj6 = {
        itemId: contentId,
        itemType: type,
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "item_container",
          actionIntentType: "open",
          actionDestinationType: "user",
        },
      };
      ICYMIActionCreatorsDefault.feedItemActioned(obj6);
      const obj7 = { userId };
      showUserProfileActionSheetDefault(obj7);
    }
  }, items);
  const items1 = [UserStore];
  const stateFromStores = contentId(type[9]).useStateFromStores(items1, () => UserStore.getUser(userId));
  let tmp7Result = null;
  if (null != stateFromStores) {
    let obj2 = {
      unstable_pressDelay: 130,
      onPress: callback,
      accessibilityRole: "button",
      style: tmp.pressable,
      children: null,
    };
    let obj3 = { hideDivider: flag, highlight, children: null };
    const items2 = [tmp.container];
    let screenshotContainer = flag;
    if (flag) {
      screenshotContainer = tmp.screenshotContainer;
    }
    let obj4 = { style: null, children: null };
    items2[1] = screenshotContainer;
    obj4.style = items2;
    let obj5 = { style: tmp.header, children: null };
    let obj6 = { animate: true, size: tmp3(tmp4[12]).AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" };
    const items3 = [closure_6(tmp3(tmp4[12]).Avatar, obj6, stateFromStores.id)];
    let obj7 = { style: tmp.headerInfo, children: null };
    const obj8 = { style: tmp.title, children: title };
    const items4 = [closure_6(View, obj8)];
    const obj9 = { style: tmp.subTitleContainer, children: subtitle };
    items4[1] = closure_6(View, obj9);
    obj7.children = items4;
    items3[1] = closure_7(View, obj7);
    obj5.children = items3;
    const items5 = [closure_7(View, obj5), contentId.children];
    obj4.children = items5;
    obj3.children = closure_7(View, obj4);
    obj2.children = closure_6(tmp3(tmp4[11]).SimplePost, obj3);
    tmp7Result = closure_6(tmp3(tmp4[10]).PressableHighlight, obj2);
  }
  return tmp7Result;
}
export const useStyles = iCYMIStyles;
