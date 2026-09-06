// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef6992 from "../../../../../_runtime/metro/06992__.js";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import EditGuildEventUtils from "../../utils/EditGuildEventUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  headerTitle: { lineHeight: 28, textTransform: "uppercase" },
  buttonContainer: { width: 60 },
  rightButton: { marginLeft: 12 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx",
);

export default function EditGuildEventModalNavbar(screen) {
  screen = screen.screen;
  const tmp = closure_7();
  if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (tmp2(9704).EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (tmp2(9704).EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    tmp2(1369).assertNever(screen);
    const tmp2Result = tmp2(1369);
  }
  [tmp6, tmp7] = _slicedToArray(items, 2);
  let obj = { top: true, style: tmp.header, children: null };
  obj = { style: tmp.buttonContainer };
  const items1 = [hasOwnProperty(View, obj), ,];
  const obj1 = { style: tmp.headerTitle, variant: "text-xs/bold", color: "text-default", children: null };
  const intl = tmp2(1114).intl;
  obj1.children = intl.format(util.t["42HaFY"], { step: tmp6, total: tmp7 });
  items1[1] = hasOwnProperty(Text_Text.Text, obj1);
  const obj2 = { style: tmp.buttonContainer, children: null };
  const obj3 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  const intl2 = tmp2(1114).intl;
  obj3.accessibilityLabel = intl2.string(util.t.cpT0Cq);
  obj3.onPress = screen.onClose;
  obj3.source = _modDef6992;
  obj3.style = tmp.rightButton;
  obj2.children = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj3);
  items1[2] = hasOwnProperty(View, obj2);
  obj.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
}
