// === Module 9456: GameActivityIcon ===

// Module 9456 (GameActivityIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4595 */;
import FastImageDefault from "FastImage" /* 5981 */;
import noop from "module_19" /* 19 */;

const AvatarUtils = UnknownGameIcon(1402);
const shared = UnknownGameIcon(4735);
const UnknownGameIcon2 = UnknownGameIcon(8281);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { icon: { borderRadius: nativeDefault.radii.xs } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/native/GameActivityIcon.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let UnknownGameIcon = require;
  let tmp = dependencyMap;
  const cResult = c.c(14);
  ({ game, size, onShown } = style);
  style = style.style;
  const tmp3 = closure_6();
  const iconURL = game.getIconURL(size);
  if (cResult[0] !== size) {
    const size1 = { width: size, height: size };
    cResult[0] = size;
    cResult[1] = size1;
    let tmp5 = size1;
  } else {
    tmp5 = cResult[1];
  }
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
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp3.icon) {
          let tmp12 = cResult[4];
        }
        const UnknownGameIconResult = shared;
        const colors = nativeDefault.colors;
        const tmp15 = shared.isThemeDark(obj2.useThemeContext().theme) ? colors.WHITE : colors.BLACK;
        if (cResult[5] === tmp12) {
        }
        UnknownGameIcon = UnknownGameIcon2.UnknownGameIcon;
        const obj3 = { size: "custom", style: tmp12, color: tmp15 };
        tmp = <UnknownGameIcon size="custom" style={tmp12} color={tmp15} />;
        cResult[5] = tmp12;
        cResult[6] = tmp15;
        cResult[7] = tmp;
        const isThemeDarkResult = shared.isThemeDark(obj2.useThemeContext().theme);
      }
      const items1 = [tmp3.icon, tmp5];
      cResult[2] = tmp5;
      cResult[3] = tmp3.icon;
      cResult[4] = items1;
      tmp12 = items1;
    }
  } else {
    if (cResult[8] === tmp5) {
      if (cResult[9] === tmp3.icon) {
        let tmp7 = cResult[10];
      }
      const obj4 = { source: null, style: null };
      obj4.source = AvatarUtils.makeSource(iconURL);
      obj4.style = tmp7;
      const tmp11 = <tmp10 source={null} style={null} />;
      if (cResult[11] === tmp11) {
        if (cResult[12] === style) {
          let tmp19 = cResult[13];
        }
        return tmp19;
      }
      let tmp20 = tmp11;
      if (null != style) {
        const obj5 = { style, children: tmp11 };
        tmp20 = <View style={style}>{tmp11}</View>;
      }
      cResult[11] = tmp11;
      cResult[12] = style;
      cResult[13] = tmp20;
      tmp19 = tmp20;
      const UnknownGameIconResult1 = AvatarUtils;
    }
    const items2 = [tmp3.icon, tmp5];
    cResult[8] = tmp5;
    cResult[9] = tmp3.icon;
    cResult[10] = items2;
    tmp7 = items2;
  }
  obj2 = native;
}) : ((style) => {
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
      jsx(UnknownGameIcon2.UnknownGameIcon, { size: "custom", style: null, color: null });
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
}));