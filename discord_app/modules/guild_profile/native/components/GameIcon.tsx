// discord_app/modules/guild_profile/native/components/GameIcon.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { gameIcon: { width: 32, height: 32 }, gameIconImage: null, gameIconMask: null, fireIcon: null };
createCacheKey = { width: 32, height: 32, borderRadius: require("Themes").radii.xs, borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_STRONG };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { position: "absolute", top: -4, right: -4, display: "flex", justifyContent: "center", alignItems: "center", padding: 2, width: 18, height: 18, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderRadius: require("Themes").radii.sm };
createCacheKey[3] = { marginTop: -1, width: 14, height: 14 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { position: "absolute", top: -4, right: -4, display: "flex", justifyContent: "center", alignItems: "center", padding: 2, width: 18, height: 18, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderRadius: require("Themes").radii.sm };
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GameIcon.tsx");

export default function GameIcon(arg0) {
  let activityLevel;
  let game;
  let onPress;
  let style;
  ({ style, game } = arg0);
  ({ activityLevel, onPress } = arg0);
  let fireIcon = createCacheKey();
  const iconURL = game.getIconURL(24);
  let source = null;
  if (null != iconURL) {
    let obj = onPress(1435);
    source = obj.makeSource(iconURL);
  }
  const items = [game, onPress];
  let callback = React.useCallback(() => {
    if (onPress != null) {
      tmp(game);
    }
  }, items);
  if (activityLevel != null) {
    const level = activityLevel.level;
  }
  let FireIcon = game;
  let ORANGE_260 = dependencyMap;
  if (null == source) {
    return null;
  } else {
    style = level === tmp5;
    if (null != onPress) {
      obj = { style: null, onPress: null, children: null };
      const items1 = [style, fireIcon.gameIcon];
      obj[0] = items1;
      obj[1] = callback;
      style = callback;
      obj = { style: null, source: null };
      obj[0] = fireIcon.gameIconImage;
      obj[1] = source;
      callback = [, ];
      callback[0] = callback(closure_5, obj);
      if (style) {
        source = closure_4;
        const obj1 = { style: null, children: null };
        obj1[0] = fireIcon.gameIconMask;
        FireIcon = FireIcon(12206).FireIcon;
        const obj2 = { style: null, color: null };
        fireIcon = fireIcon.fireIcon;
        obj2[0] = fireIcon;
        ORANGE_260 = onPress(712).unsafe_rawColors.ORANGE_260;
        obj2[1] = ORANGE_260;
        obj1[1] = style(FireIcon, obj2);
        style = style(closure_4, obj1);
      }
      callback[1] = style;
      obj[2] = callback;
      let tmp14Result = closure_7(FireIcon(4846).PressableHighlight, obj);
      const tmp10 = closure_7;
    } else {
      const obj3 = { style: null, children: null };
      const items2 = [style, fireIcon.gameIcon];
      obj3[0] = items2;
      const obj4 = { style: null, source: null };
      obj4[0] = fireIcon.gameIconImage;
      obj4[1] = source;
      const items3 = [callback(closure_5, obj4), ];
      let tmp16Result = style;
      if (style) {
        const obj5 = { style: null, children: null };
        obj5[0] = fireIcon.gameIconMask;
        const obj6 = { style: null, color: null };
        obj6[0] = fireIcon.fireIcon;
        obj6[1] = onPress(712).unsafe_rawColors.ORANGE_330;
        obj5[1] = tmp16(FireIcon(12206).FireIcon, obj6);
        tmp16Result = tmp16(tmp15, obj5);
      }
      items3[1] = tmp16Result;
      obj3[1] = items3;
      tmp14Result = closure_7(tmp15, obj3);
      const tmp14 = closure_7;
    }
  }
};
export const useStyles = createCacheKey;