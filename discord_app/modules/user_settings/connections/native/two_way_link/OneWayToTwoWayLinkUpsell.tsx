// === Module 17354: OneWayToTwoWayLinkUpsell ===

// Module 17354 (OneWayToTwoWayLinkUpsell)
import nativeDefault from "native" /* 575 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10499 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 6763 */;

const require = fn;
function OneWayToTwoWayNewTag(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  items = [markAsDismissed];
  const effect = noop.useEffect(() => markAsDismissed(ContentDismissActionType.UNKNOWN), items);
  const tmp = closure_8();
  return closure_6(markAsDismissed(1187).NewTag, { containerStyle: closure_8().newContainer, variant: "body-xs/semibold" });
}
const View = fn(17).View;
const Fonts = fn(1072).Fonts;
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, margin: 16, padding: 12, borderRadius: nativeDefault.radii.sm }, header: { flexDirection: "row", marginBottom: 4, alignItems: "center" }, titleContainer: { flexGrow: 1, flexShrink: 1 }, title: null, body: null, newContainer: null, reconnectButton: null };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 16));
obj2.title = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.body = {};
obj2.newContainer = { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 };
obj2.reconnectButton = { marginTop: 8 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx");

export function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = closure_8();
  let obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { style: tmp.titleContainer, children: null };
  const obj4 = {
    contentTypes: null,
    children(visibleContent) {
      let tmp2 = null;
      if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
        const obj = { markAsDismissed: tmp };
        tmp2 = timestampProducer(OneWayToTwoWayNewTag, obj);
      }
      return tmp2;
    }
  };
  items = [newIndicatorDismissibleContent];
  obj4.contentTypes = items;
  const items1 = [closure_6(SelectedDismissibleContentDefault, obj4), closure_6(newIndicatorDismissibleContent(5866).Text, { style: tmp.title, variant: "body-md/semibold", children: title })];
  obj3.children = items1;
  const items2 = [closure_7(View, obj3), img];
  obj2.children = items2;
  const items3 = [closure_7(View, obj2), closure_6(newIndicatorDismissibleContent(5866).Text, { style: tmp.body, variant: "body-sm/medium", children: body }), ];
  const obj7 = { style: tmp.reconnectButton, children: null };
  const obj8 = { text: null, onPress: null };
  const intl = newIndicatorDismissibleContent(1113).intl;
  obj8.text = intl.string(newIndicatorDismissibleContent(1113).t.vD60Pv);
  obj8.onPress = onPress;
  obj7.children = closure_6(newIndicatorDismissibleContent(5873).Button, obj8);
  items3[2] = closure_6(View, obj7);
  obj.children = items3;
  return closure_7(View, obj);
}