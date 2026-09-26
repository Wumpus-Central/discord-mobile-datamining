// === Module 11572: PlaceholderAppRow ===

// Module 11572 (PlaceholderAppRow)
import nativeDefault from "native" /* 576 */;
import TableRow from "TableRow" /* 5917 */;
import usePlaceholderSize from "usePlaceholderSize" /* 11536 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { loadingAppIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.loadingAppIcon = size;
obj2.loadingTextPlaceholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj2.loadingTextPlaceholderSmall = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/PlaceholderAppRow.tsx");

export default function PlaceholderAppRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_4();
  const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(10, 50);
  const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(30, 90);
  const obj3 = { icon: <View style={tmp.loadingAppIcon} />, label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null, onPress: null };
  const obj5 = { style: null };
  const items = [tmp.loadingTextPlaceholder, ];
  const obj4 = { style: tmp.loadingAppIcon };
  items[1] = { width: "" + placeholderWidth + "%" };
  obj5.style = items;
  obj3.label = <View style={null} />;
  const obj7 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall, ];
  const obj6 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj7.style = items1;
  obj3.subLabel = <View style={null} />;
  obj3.start = flag;
  obj3.end = flag2;
  obj3.onPress = function onPress() {

  };
  return jsx(TableRow.TableRow, { icon: <View style={tmp.loadingAppIcon} />, label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null, onPress: null });
};