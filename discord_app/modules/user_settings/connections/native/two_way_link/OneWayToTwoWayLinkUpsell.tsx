// discord_app/modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SelectedDismissibleContentDefault from "../../../../dismissible_content/native/SelectedDismissibleContent.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

const require = fn;
function OneWayToTwoWayNewTag(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const effect = noop.useEffect(() => markAsDismissed(ContentDismissActionType.UNKNOWN), items);
  const tmp = closure_8();
  return closure_6(markAsDismissed(1178).NewTag, { containerStyle: closure_8().newContainer, variant: "text-xs/bold" });
}
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  header: null,
  titleContainer: null,
  title: null,
  body: null,
  newContainer: null,
  reconnectButton: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  margin: 16,
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
};
createStyles.container = createStyles;
createStyles.header = { flexDirection: "row", marginBottom: 4, alignItems: "center" };
createStyles.titleContainer = { flexGrow: 1, flexShrink: 1 };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 16));
createStyles.title = {};
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
createStyles.body = {};
createStyles.newContainer = { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 };
createStyles.reconnectButton = { marginTop: 8 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx",
);

export const OneWayToTwoWayLinkUpsell = function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = closure_8();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  obj = { style: tmp.titleContainer, children: null };
  const obj1 = {
    contentTypes: null,
    children(visibleContent) {
      let tmp2 = null;
      if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
        const obj = { markAsDismissed: tmp };
        tmp2 = timestampProducer(OneWayToTwoWayNewTag, obj);
      }
      return tmp2;
    },
  };
  const items = [newIndicatorDismissibleContent];
  obj1.contentTypes = items;
  const items1 = [
    closure_6(SelectedDismissibleContentDefault, obj1),
    closure_6(newIndicatorDismissibleContent(4556).Text, {
      style: tmp.title,
      variant: "text-md/semibold",
      children: title,
    }),
  ];
  obj.children = items1;
  const items2 = [closure_7(View, obj), img];
  obj.children = items2;
  const items3 = [
    closure_7(View, obj),
    closure_6(newIndicatorDismissibleContent(4556).Text, {
      style: tmp.body,
      variant: "text-sm/medium",
      children: body,
    }),
  ];
  const obj4 = { style: tmp.reconnectButton, children: null };
  const obj5 = { text: null, onPress: null };
  const intl = newIndicatorDismissibleContent(1114).intl;
  obj5.text = intl.string(newIndicatorDismissibleContent(1114).t.vD60Pv);
  obj5.onPress = onPress;
  obj4.children = closure_6(newIndicatorDismissibleContent(4975).Button, obj5);
  items3[2] = closure_6(View, obj4);
  obj.children = items3;
  return closure_7(View, obj);
};
