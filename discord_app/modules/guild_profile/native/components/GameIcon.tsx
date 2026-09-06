// === Module 9196: components/GameIcon ===

// Module 9196 (components/GameIcon)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import noop from "module_19" /* 19 */;

const Pressables = FireIcon(5123);
const FireIcon2 = FireIcon(9198);
const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { gameIcon: { width: 32, height: 32 }, gameIconImage: null, gameIconMask: null, fireIcon: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles.gameIconImage = size;
const size1 = { position: "absolute", top: -4, right: -4, display: "flex", justifyContent: "center", alignItems: "center", padding: 2, width: 18, height: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.sm };
createStyles.gameIconMask = size1;
createStyles.fireIcon = { marginTop: -1, width: 14, height: 14 };
createStyles = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GameIcon.tsx");

export default function GameIcon(arg0) {
  ({ style, game } = arg0);
  ({ activityLevel, onPress } = arg0);
  let fireIcon = createStyles();
  const iconURL = game.getIconURL(24);
  let source = null;
  if (null != iconURL) {
    let obj = AvatarUtilsDefault;
    source = obj.makeSource(iconURL);
  }
  const items = [game, onPress];
  let callback = noop.useCallback(() => {
    if (onPress != null) {
      tmp(game);
    }
  }, items);
  if (activityLevel != null) {
    const level = activityLevel.level;
  }
  let FireIcon = require;
  let ORANGE_260 = dependencyMap;
  if (null == source) {
    return null;
  } else {
    style = level === tmp5;
    if (null != onPress) {
      obj = { style: null, onPress: null, children: null };
      const items1 = [style, fireIcon.gameIcon];
      obj.style = items1;
      obj.onPress = callback;
      style = timestampProducer;
      obj = { style: fireIcon.gameIconImage, source };
      callback = [timestampProducer(hasOwnProperty, obj), ];
      if (style) {
        source = React4;
        const obj1 = { style: fireIcon.gameIconMask, children: null };
        FireIcon = FireIcon2.FireIcon;
        const obj2 = { style: null, color: null };
        fireIcon = fireIcon.fireIcon;
        obj2.style = fireIcon;
        ORANGE_260 = nativeDefault.unsafe_rawColors.ORANGE_260;
        obj2.color = ORANGE_260;
        obj1.children = style(FireIcon, obj2);
        style = style(React4, obj1);
      }
      callback[1] = style;
      obj.children = callback;
      let tmp14Result = React5(Pressables.PressableHighlight, obj);
    } else {
      const obj3 = { style: null, children: null };
      const items2 = [style, fireIcon.gameIcon];
      obj3.style = items2;
      const obj4 = { style: fireIcon.gameIconImage, source };
      const items3 = [timestampProducer(hasOwnProperty, obj4), ];
      let tmp16Result = style;
      if (style) {
        const obj5 = { style: fireIcon.gameIconMask, children: null };
        const obj6 = { style: fireIcon.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_330 };
        obj5.children = timestampProducer(FireIcon2.FireIcon, obj6);
        tmp16Result = timestampProducer(React4, obj5);
      }
      items3[1] = tmp16Result;
      obj3.children = items3;
      tmp14Result = React5(React4, obj3);
    }
  }
};
export const useStyles = createStyles;