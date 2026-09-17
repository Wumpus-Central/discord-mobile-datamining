// discord_app/modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj2 = {
  container: {
    marginTop: nativeDefault.space.PX_8,
    marginBottom: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_24,
  },
  textHeader: null,
};
const obj3 = {
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_24,
};
obj2.textHeader = { marginTop: nativeDefault.space.PX_8 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export const ForYouRecentActivitySectionHeader = function ForYouRecentActivitySectionHeader() {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  const obj2 = {
    style: tmp.textHeader,
    color: "text-muted",
    variant: "text-sm/semibold",
    accessibilityRole: "header",
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.yM9Krm);
  obj.children = jsx(Text_Text.Text, {
    style: tmp.textHeader,
    color: "text-muted",
    variant: "text-sm/semibold",
    accessibilityRole: "header",
    children: null,
  });
  return <View style={tmp.container}>{null}</View>;
};
