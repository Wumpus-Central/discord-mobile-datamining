// === Module 16447: ForYouLoadMore ===

// Module 16447 (ForYouLoadMore)
import useStateFromStores from "useStateFromStores" /* 563 */;
import noop from "module_19" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7639 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  const items = [NotificationCenterItemsStore];
  let obj = { style: closure_6().container, children: null };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = tmp4(React2, {});
  } else {
    obj = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = tmp2(1114).intl;
    obj.text = intl.string(tmp2(1114).t["Q/LSXp"]);
    obj.onPress = onPressLoad.onPressLoad;
    tmp4Result = tmp4(tmp2(4975).Button, obj);
  }
  obj.children = tmp4Result;
  return <React3 style={closure_6().container}>{null}</React3>;
};