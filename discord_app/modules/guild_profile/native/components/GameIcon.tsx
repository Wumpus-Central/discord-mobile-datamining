// discord_app/modules/guild_profile/native/components/GameIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const Pressables = FireIcon(5339);
const FireIcon2 = FireIcon(10025);
const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { gameIcon: { width: 32, height: 32 }, gameIconImage: null, gameIconMask: null, fireIcon: null };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
obj2.gameIconImage = size;
const size1 = {
  position: "absolute",
  top: -4,
  right: -4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  width: 18,
  height: 18,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: nativeDefault.radii.sm,
};
obj2.gameIconMask = size1;
obj2.fireIcon = { marginTop: -1, width: 14, height: 14 };
const styles = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GameIcon.tsx");

export default function GameIcon(arg0) {
  ({ style, game } = arg0);
  ({ activityLevel, onPress } = arg0);
  let fireIcon = styles();
  const iconURL = game.getIconURL(24);
  let source = null;
  if (null != iconURL) {
    source = AvatarUtilsDefault.makeSource(iconURL);
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
    let style1 = level === tmp5;
    if (null != onPress) {
      const obj2 = { style: null, onPress: null, children: null };
      const items1 = [style, fireIcon.gameIcon];
      obj2.style = items1;
      obj2.onPress = callback;
      style = timestampProducer;
      const obj3 = { style: fireIcon.gameIconImage, source };
      callback = [timestampProducer(hasOwnProperty, obj3)];
      if (style1) {
        source = React4;
        const obj4 = { style: fireIcon.gameIconMask, children: null };
        FireIcon = FireIcon2.FireIcon;
        const obj5 = { style: null, color: null };
        fireIcon = fireIcon.fireIcon;
        obj5.style = fireIcon;
        ORANGE_260 = nativeDefault.unsafe_rawColors.ORANGE_260;
        obj5.color = ORANGE_260;
        obj4.children = style(FireIcon, obj5);
        style1 = style(React4, obj4);
      }
      callback[1] = style1;
      obj2.children = callback;
      let tmp14Result = React5(Pressables.PressableHighlight, obj2);
    } else {
      const obj6 = { style: null, children: null };
      const items2 = [style, fireIcon.gameIcon];
      obj6.style = items2;
      const obj7 = { style: fireIcon.gameIconImage, source };
      const items3 = [timestampProducer(hasOwnProperty, obj7)];
      let tmp16Result = style1;
      if (style1) {
        const obj8 = { style: fireIcon.gameIconMask, children: null };
        const obj9 = { style: fireIcon.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_330 };
        obj8.children = timestampProducer(FireIcon2.FireIcon, obj9);
        tmp16Result = timestampProducer(React4, obj8);
      }
      items3[1] = tmp16Result;
      obj6.children = items3;
      tmp14Result = React5(React4, obj6);
    }
  }
}
export const useStyles = styles;
