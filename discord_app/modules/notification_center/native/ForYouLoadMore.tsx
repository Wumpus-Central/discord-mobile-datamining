// === Module 16577: ForYouLoadMore ===

// Module 16577 (ForYouLoadMore)
import util from "util" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5060 */;
import noop from "module_19" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7747 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  const tmp = closure_6();
  const items = [NotificationCenterItemsStore];
  const obj2 = { style: tmp.container, children: null };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = <React2 />;
  } else {
    const obj3 = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t["Q/LSXp"]);
    obj3.onPress = onPressLoad.onPressLoad;
    tmp4Result = jsx(components_Button_Button.Button, { variant: "secondary", grow: true, size: "md", text: null, onPress: null });
  }
  obj2.children = tmp4Result;
  return <React3 style={tmp.container}>{null}</React3>;
};