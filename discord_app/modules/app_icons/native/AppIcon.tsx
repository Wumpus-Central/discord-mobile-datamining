// discord_app/modules/app_icons/native/AppIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const getIconById = fn(9323).getIconById;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, image: null };
createStyles = { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.container = createStyles;
createStyles.image = { resizeMode: "contain", height: "100%", width: "100%" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = closure_7();
  const tmp2 = useThemeDefault();
  let obj = shared;
  let num2 = 1;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  obj = { style: null, children: null };
  const items = [tmp.container, { width: num, height: num, borderWidth: num2 }, size.style];
  obj.style = items;
  obj = { style: tmp.image, source: getIconById(size.id).iconSource };
  obj.children = <React3 style={tmp.image} source={getIconById(size.id).iconSource} />;
  return <React4 style={tmp.image} source={getIconById(size.id).iconSource} />;
}
