// discord_app/modules/notification_center/native/ForYouReadSectionHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = {
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
    marginVertical: 8,
    paddingHorizontal: 24,
  },
  textHeader: null,
};
const obj3 = {
  borderTopWidth: StyleSheet.hairlineWidth,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  marginVertical: 8,
  paddingHorizontal: 24,
};
obj2.textHeader = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 20 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = function ForYouReadSectionHeader() {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.textHeader, variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.hftC1K);
  obj.children = jsx(Text_Text.Text, { style: tmp.textHeader, variant: "text-sm/semibold", children: null });
  return <React2 style={tmp.container}>{null}</React2>;
};
