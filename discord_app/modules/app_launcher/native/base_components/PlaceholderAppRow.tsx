// discord_app/modules/app_launcher/native/base_components/PlaceholderAppRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import usePlaceholderSize from "../hooks/usePlaceholderSize.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { loadingAppIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
createStyles.loadingAppIcon = size;
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
createStyles.loadingTextPlaceholder = createStyles;
createStyles.loadingTextPlaceholderSmall = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
let closure_4 = createStyles.createStyles(createStyles);
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
  let obj = usePlaceholderSize;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = usePlaceholderSize;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = { icon: null, label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null, onPress: null };
  obj = { style: tmp.loadingAppIcon };
  obj.icon = <View style={tmp.loadingAppIcon} />;
  obj1 = { style: null };
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  obj1.style = items;
  obj.label = <View style={null} />;
  const obj3 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall];
  const obj2 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj3.style = items1;
  obj.subLabel = <View style={null} />;
  obj.start = flag;
  obj.end = flag2;
  obj.onPress = function onPress() {};
  return jsx(TableRow.TableRow, { style: tmp.loadingAppIcon });
}
