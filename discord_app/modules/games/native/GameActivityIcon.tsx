// discord_app/modules/games/native/GameActivityIcon.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
let obj = { icon: null };
obj = { borderRadius: ThemesDefault.radii.xs };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GameActivityIcon(style) {
  ({ game, size, onShown } = style);
  style = style.style;
  let iconURL;
  const tmp = callback();
  let obj = onShown(4174);
  iconURL = game.getIconURL(size);
  obj = { width: size, height: size };
  const items = [iconURL, onShown];
  const effect = importAllResult.useEffect(() => {
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
      const items1 = [tmp.icon, obj];
      obj[1] = items1;
      let tmp2Result = tmp2(1363);
      const colors = iconURL(712).colors;
      obj[2] = tmp2Result.isThemeDark(obj.useThemeContext().theme) ? colors.WHITE : colors.BLACK;
      jsx(tmp2(8684).UnknownGameIcon, { size: "custom", style: null, color: null });
      const isThemeDarkResult = tmp2Result.isThemeDark(obj.useThemeContext().theme);
    }
  } else {
    obj1 = { source: null, style: null };
    tmp2Result = tmp2(1431);
    obj1[0] = tmp2Result.makeSource(iconURL);
    const items2 = [tmp.icon, obj];
    obj1[1] = items2;
    const tmp9 = jsx(iconURL(5461), { source: null, style: null });
    let tmp6Result = tmp9;
    if (null != style) {
      const obj2 = { style: null, children: null };
      obj2[0] = style;
      obj2[1] = tmp9;
      tmp6Result = <View style={null}>{null}</View>;
    }
    return tmp6Result;
  }
});
const result = require("set").fileFinishedImporting("modules/games/native/GameActivityIcon.tsx");

export default memoResult;