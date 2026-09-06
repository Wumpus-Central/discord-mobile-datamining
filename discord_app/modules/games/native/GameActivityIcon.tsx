// discord_app/modules/games/native/GameActivityIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { icon: null };
obj = { borderRadius: nativeDefault.radii.xs };
obj.icon = obj;
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/native/GameActivityIcon.tsx");

export default noop.memo(function GameActivityIcon(style) {
  ({ game, size, onShown } = style);
  style = style.style;
  const tmp = closure_6();
  let obj = native;
  const iconURL = game.getIconURL(size);
  size = { width: size, height: size };
  const items = [iconURL, onShown];
  const effect = noop.useEffect(() => {
    if (null != iconURL) {
      if (onShown != null) {
        tmp();
      }
    }
  }, items);
  if (null == iconURL) {
    if ("none" === style.fallback) {
      return null;
    } else {
      obj = { size: "custom", style: null, color: null };
      const items1 = [tmp.icon, size];
      obj.style = items1;
      let tmp2Result = tmp2(4411);
      const colors = nativeDefault.colors;
      obj.color = tmp2Result.isThemeDark(obj.useThemeContext().theme) ? colors.WHITE : colors.BLACK;
      jsx(tmp2(8565).UnknownGameIcon, { size: "custom", style: null, color: null });
      const isThemeDarkResult = tmp2Result.isThemeDark(obj.useThemeContext().theme);
    }
  } else {
    obj = { source: null, style: null };
    tmp2Result = tmp2(1396);
    obj.source = tmp2Result.makeSource(iconURL);
    const items2 = [tmp.icon, size];
    obj.style = items2;
    const tmp9 = jsx(FastImageDefault, { source: null, style: null });
    let tmp6Result = tmp9;
    if (null != style) {
      const obj1 = { style, children: tmp9 };
      tmp6Result = <View style={style}>{tmp9}</View>;
    }
    return tmp6Result;
  }
});
