// === Module 9443: GameActivityIcon ===

// Module 9443 (GameActivityIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import native from "native" /* 4589 */;
import shared from "shared" /* 4729 */;
import FastImageDefault from "FastImage" /* 5974 */;
import UnknownGameIcon2 from "UnknownGameIcon" /* 8248 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let game;
  let onShown;
  let tmp12;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(14);
  ({ game, size, onShown } = style);
  style = style.style;
  const fallback = style.fallback;
  const tmp4 = closure_6();
  const obj2 = native;
  const theme = obj2.useThemeContext().theme;
  const iconURL = game.getIconURL(size);
  if (cResult[0] !== size) {
    const size1 = { width: size, height: size };
    cResult[0] = size;
    cResult[1] = size1;
    tmp6 = size1;
  } else {
    tmp6 = cResult[1];
  }
  const items = [iconURL, onShown];
  const effect = react.useEffect(() => {
    if (null != iconURL) {
      if (onShown != null) {
        tmp();
      }
    }
  }, items);
  if (null == iconURL) {
    if ("none" === fallback) {
      return null;
    } else {
      if (cResult[2] === tmp6) {
        let tmp13;
        if (cResult[3] === tmp4.icon) {
          tmp13 = cResult[4];
        }
        const tmpResult = shared;
        const isThemeDarkResult = tmpResult.isThemeDark(theme);
        const colors = nativeDefault.colors;
        const tmp16 = isThemeDarkResult ? colors.WHITE : colors.BLACK;
        if (cResult[5] === tmp13) {
          let tmp17;
          if (cResult[6] === tmp16) {
            tmp17 = cResult[7];
          }
          tmp12 = tmp17;
        }
        const tmp19 = jsx(UnknownGameIcon2.UnknownGameIcon, { size: "custom", style: tmp13, color: tmp16 });
        cResult[5] = tmp13;
        cResult[6] = tmp16;
        cResult[7] = tmp19;
        tmp17 = tmp19;
      }
      const items1 = [tmp4.icon, tmp6];
      cResult[2] = tmp6;
      cResult[3] = tmp4.icon;
      cResult[4] = items1;
      tmp13 = items1;
    }
  } else {
    if (cResult[8] === tmp6) {
      let tmp8;
      if (cResult[9] === tmp4.icon) {
        tmp8 = cResult[10];
      }
      FastImageDefault;
      tmp12 = <tmp11 source={AvatarUtils.makeSource(iconURL)} style={tmp8} />;
      const tmpResult2 = AvatarUtils;
    }
    const items2 = [tmp4.icon, tmp6];
    cResult[8] = tmp6;
    cResult[9] = tmp4.icon;
    cResult[10] = items2;
    tmp8 = items2;
  }
  if (cResult[11] === tmp12) {
    let tmp20;
    if (cResult[12] === style) {
      tmp20 = cResult[13];
    }
    return tmp20;
  }
  let tmp21 = tmp12;
  if (null != style) {
    tmp21 = <View style={style}>{tmp12}</View>;
  }
  cResult[11] = tmp12;
  cResult[12] = style;
  cResult[13] = tmp21;
  tmp20 = tmp21;
}) : ((style) => {
  let game;
  let onShown;
  let tmp10;
  let tmp13Result;
  ({ game, size, onShown } = style);
  style = style.style;
  const fallback = style.fallback;
  const tmp = closure_6();
  const obj = native;
  const theme = obj.useThemeContext().theme;
  const iconURL = game.getIconURL(size);
  const size1 = { width: size, height: size };
  const items = [iconURL, onShown];
  const effect = react.useEffect(() => {
    if (null != iconURL) {
      if (onShown != null) {
        tmp();
      }
    }
  }, items);
  if (null == iconURL) {
    if ("none" === fallback) {
      return null;
    } else {
      const items1 = [tmp.icon, size1];
      const UnknownGameIcon = UnknownGameIcon2.UnknownGameIcon;
      const tmp2Result = shared;
      const isThemeDarkResult = tmp2Result.isThemeDark(theme);
      const colors = nativeDefault.colors;
      tmp13Result = <UnknownGameIcon size="custom" style={items1} color={isThemeDarkResult ? colors.WHITE : colors.BLACK} />;
      tmp10 = jsx;
    }
  } else {
    FastImageDefault;
    const items2 = [tmp.icon, size1];
    tmp13Result = <tmp8 source={AvatarUtils.makeSource(iconURL)} style={items2} />;
    tmp10 = jsx;
    const tmp2Result2 = AvatarUtils;
  }
  let tmp10Result = tmp13Result;
  if (null != style) {
    const obj4 = { style, children: tmp13Result };
    tmp10Result = tmp10(View, obj4);
  }
  return tmp10Result;
}));
const result = size.fileFinishedImporting("modules/games/native/GameActivityIcon.tsx");

export default memoResult;