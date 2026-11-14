// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx
import util from "../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef7430 from "../../../../../_runtime/metro/07430__.js";
import EditGuildEventUtils from "../../utils/EditGuildEventUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let closure_7 = createStyles.createStyles({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  headerTitle: { lineHeight: 28 },
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
    items = [1, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    GlobalUtils.assertNever(screen);
    const tmp2Result = GlobalUtils;
  }
  [tmp6, tmp7] = items;
  const obj = { top: true, style: tmp.header, children: null };
  const items1 = [hasOwnProperty(View, { style: tmp.buttonContainer }), ,];
  const obj3 = { style: tmp.headerTitle, variant: "body-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.format(util.t["42HaFY"], { step: tmp6, total: tmp7 });
  items1[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.buttonContainer, children: null };
  const obj5 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  const intl2 = util.intl;
  obj5.accessibilityLabel = intl2.string(util.t.cpT0Cq);
  obj5.onPress = screen.onClose;
  obj5.source = _modDef7430;
  obj5.style = tmp.rightButton;
  obj4.children = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj5);
  items1[2] = hasOwnProperty(View, obj4);
  obj.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
}
