// discord_app/modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = {
  container: {
    borderTopWidth: 1,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  noDivider: { borderTopWidth: 0, marginTop: 0 },
  text: null,
};
const obj3 = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: 12,
  marginBottom: 8,
  paddingHorizontal: 24,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.text = { marginTop: nativeDefault.space.PX_16 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default function ForYouSuggestedFriendsSectionHeader(showDivider) {
  showDivider = showDivider.showDivider;
  const tmp = closure_4();
  const items = [tmp.container];
  let noDivider = !showDivider;
  if (!showDivider) {
    noDivider = tmp.noDivider;
  }
  const obj = { style: items, children: null };
  items[1] = noDivider;
  const obj2 = { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["1uAmCw"]);
  obj.children = jsx(Text_Text.Text, {
    style: tmp.text,
    color: "text-muted",
    variant: "text-sm/semibold",
    children: null,
  });
  return <View style={items}>{null}</View>;
}
