// discord_app/modules/games/native/GameActivityIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import shared from "../../../design/shared.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import UnknownGameIcon from "../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj = { icon: { borderRadius: nativeDefault.radii.xs } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { borderRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/native/GameActivityIcon.tsx");

export default noop.memo(function GameActivityIcon(style) {
  ({ game, size, onShown } = style);
  style = style.style;
  const tmp = closure_6();
  const iconURL = game.getIconURL(size);
  const size1 = { width: size, height: size };
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
      const obj2 = { size: "custom", style: null, color: null };
      const items1 = [tmp.icon, size1];
      obj2.style = items1;
      const tmp2Result = shared;
      const colors = nativeDefault.colors;
      obj2.color = shared.isThemeDark(obj.useThemeContext().theme) ? colors.WHITE : colors.BLACK;
      jsx(UnknownGameIcon.UnknownGameIcon, { size: "custom", style: null, color: null });
      const isThemeDarkResult = shared.isThemeDark(obj.useThemeContext().theme);
    }
  } else {
    const obj3 = { source: null, style: null };
    obj3.source = AvatarUtils.makeSource(iconURL);
    const items2 = [tmp.icon, size1];
    obj3.style = items2;
    const tmp9 = <tmp8 source={null} style={null} />;
    let tmp6Result = tmp9;
    if (null != style) {
      const obj4 = { style, children: tmp9 };
      tmp6Result = <View style={style}>{tmp9}</View>;
    }
    return tmp6Result;
  }
  obj = native;
});
