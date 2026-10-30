// discord_app/modules/app_icons/native/AppIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const getIconById = fn(9958).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = {
  container: { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  image: { resizeMode: "contain", height: "100%", width: "100%" },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = closure_6();
  const tmp4 = useThemeDefault();
  const tmp5 = getIconById(size.id);
  let num2 = 1;
  if (obj.isThemeDark(tmp4)) {
    num2 = 0;
  }
  const obj2 = { style: null, children: jsx(FastImageDefault, { style: tmp.image, source: tmp5.iconSource }) };
  const items = [tmp.container, { width: num, height: num, borderWidth: num2 }, size.style];
  obj2.style = items;
  return <View style={null}>{jsx(FastImageDefault, { style: tmp.image, source: tmp5.iconSource })}</View>;
}
