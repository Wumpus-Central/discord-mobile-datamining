// discord_app/modules/notification_center/native/ForYouLoadMore.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import util from "../../../intl/index.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import NotificationCenterItemsStore from "../NotificationCenterItemsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 24,
    marginHorizontal: 16,
    height: 42,
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  const items = [NotificationCenterItemsStore];
  let obj = { style: closure_6().container, children: null };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = <React2 />;
  } else {
    obj = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = util.intl;
    obj.text = intl.string(util.t["Q/LSXp"]);
    obj.onPress = onPressLoad.onPressLoad;
    tmp4Result = jsx(components_Button_Button.Button, {
      variant: "secondary",
      grow: true,
      size: "md",
      text: null,
      onPress: null,
    });
  }
  obj.children = tmp4Result;
  return <React3 style={closure_6().container}>{null}</React3>;
};
