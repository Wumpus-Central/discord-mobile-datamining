// discord_app/modules/guild_profile/native/components/GameIcon.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const Pressables = PressableHighlight(6189);
const FireIcon2 = PressableHighlight(9085);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
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
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GameIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameIcon(arg0) {
      let PressableHighlight = require;
      let tmp = dependencyMap;
      const cResult = c.c(34);
      ({ style, game } = arg0);
      ({ activityLevel, onPress } = arg0);
      const tmp3 = styles();
      if (cResult[0] !== game) {
        const iconURL = game.getIconURL(24);
        let source = null;
        if (null != iconURL) {
          source = AvatarUtilsDefault.makeSource(iconURL);
        }
        cResult[0] = game;
        cResult[1] = source;
        let tmp4 = source;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === game) {
        if (cResult[3] === onPress) {
          let tmp8 = cResult[4];
        }
        if (activityLevel != null) {
          const level = activityLevel.level;
        }
        if (null == tmp4) {
          return null;
        } else {
          if (null == onPress) {
            if (cResult[20] === style) {
              if (cResult[21] === tmp3.gameIcon) {
                let tmp13 = cResult[22];
              }
              if (cResult[23] === tmp4) {
                if (cResult[24] === tmp3.gameIconImage) {
                  let tmp14 = cResult[25];
                }
                if (cResult[26] === tmp12) {
                  if (cResult[27] === tmp3.fireIcon) {
                    if (cResult[28] === tmp3.gameIconMask) {
                      let tmp18 = cResult[29];
                    }
                    if (cResult[30] === tmp13) {
                      if (cResult[31] === tmp14) {
                      }
                    }
                    const obj3 = { style: tmp13, children: null };
                    const items = [tmp14, tmp18];
                    obj3.children = items;
                    const tmp26 = timestampProducer(View, obj3);
                    cResult[30] = tmp13;
                    cResult[31] = tmp14;
                    cResult[32] = tmp18;
                    class R {
                      constructor() {
                        if (onPress != null) {
                          tmp2 = game;
                          tmpResult = tmp(game);
                        }
                        return;
                      }
                    }
                    cResult[33] = tmp26;
                  }
                }
                let tmp19 = tmp12;
                if (tmp12) {
                  const obj4 = { style: tmp3.gameIconMask, children: null };
                  const obj5 = { style: tmp3.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_330 };
                  obj4.children = hasOwnProperty(FireIcon2.FireIcon, obj5);
                  tmp19 = hasOwnProperty(View, obj4);
                }
                cResult[26] = tmp12;
                cResult[27] = tmp3.fireIcon;
                cResult[28] = tmp3.gameIconMask;
                cResult[29] = tmp19;
                tmp18 = tmp19;
              }
              const obj6 = { style: tmp3.gameIconImage, source: tmp4 };
              const tmp17 = hasOwnProperty(FastImageDefault, obj6);
              cResult[23] = tmp4;
              cResult[24] = tmp3.gameIconImage;
              cResult[25] = tmp17;
              tmp14 = tmp17;
            }
            const items1 = [style, tmp3.gameIcon];
            cResult[20] = style;
            cResult[21] = tmp3.gameIcon;
            cResult[22] = items1;
            tmp13 = items1;
          }
          if (cResult[5] === style) {
            if (cResult[6] === tmp3.gameIcon) {
              let tmp27 = cResult[7];
            }
            if (cResult[8] === tmp4) {
              if (cResult[9] === tmp3.gameIconImage) {
                let tmp28 = cResult[10];
              }
              if (cResult[11] === tmp12) {
                if (cResult[12] === tmp3.fireIcon) {
                  if (cResult[13] === tmp3.gameIconMask) {
                    let tmp32 = cResult[14];
                  }
                  if (cResult[15] === tmp8) {
                    if (cResult[16] === tmp27) {
                      if (cResult[17] === tmp28) {
                      }
                    }
                  }
                  PressableHighlight = Pressables.PressableHighlight;
                  const obj7 = { style: tmp27, onPress: tmp8, children: null };
                  const items2 = [tmp28, tmp32];
                  obj7.children = items2;
                  tmp = timestampProducer(PressableHighlight, obj7);
                  cResult[15] = tmp8;
                  cResult[16] = tmp27;
                  class R {
                    constructor() {
                      if (onPress != null) {
                        tmp2 = game;
                        tmpResult = tmp(game);
                      }
                      return;
                    }
                  }
                  cResult[18] = tmp32;
                  cResult[19] = tmp;
                }
              }
              let tmp33 = tmp12;
              if (tmp12) {
                const obj8 = { style: tmp3.gameIconMask, children: null };
                const obj9 = { style: tmp3.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_260 };
                obj8.children = hasOwnProperty(FireIcon2.FireIcon, obj9);
                tmp33 = hasOwnProperty(View, obj8);
              }
              cResult[11] = tmp12;
              cResult[12] = tmp3.fireIcon;
              cResult[13] = tmp3.gameIconMask;
              cResult[14] = tmp33;
              tmp32 = tmp33;
            }
            const obj10 = { style: tmp3.gameIconImage, source: tmp4 };
            const tmp31 = hasOwnProperty(FastImageDefault, obj10);
            cResult[8] = tmp4;
            cResult[9] = tmp3.gameIconImage;
            cResult[10] = tmp31;
            tmp28 = tmp31;
          }
          const items3 = [style, tmp3.gameIcon];
          cResult[5] = style;
          cResult[6] = tmp3.gameIcon;
          cResult[7] = items3;
          tmp27 = items3;
        }
      }
      class R {
        constructor() {
          if (onPress != null) {
            tmp2 = game;
            tmpResult = tmp(game);
          }
          return;
        }
      }
      cResult[2] = game;
      cResult[3] = onPress;
      cResult[4] = R;
      tmp8 = R;
    }
  : function GameIcon(arg0) {
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
          style = hasOwnProperty;
          const obj3 = { style: fireIcon.gameIconImage, source };
          callback = [hasOwnProperty(FastImageDefault, obj3)];
          if (style1) {
            const obj4 = { style: fireIcon.gameIconMask, children: null };
            FireIcon = FireIcon2.FireIcon;
            const obj5 = { style: null, color: null };
            fireIcon = fireIcon.fireIcon;
            obj5.style = fireIcon;
            ORANGE_260 = nativeDefault.unsafe_rawColors.ORANGE_260;
            obj5.color = ORANGE_260;
            source = style(FireIcon, obj5);
            obj4.children = source;
            style1 = style(View, obj4);
          }
          callback[1] = style1;
          obj2.children = callback;
          let tmp13Result = timestampProducer(Pressables.PressableHighlight, obj2);
        } else {
          const obj6 = { style: null, children: null };
          const items2 = [style, fireIcon.gameIcon];
          obj6.style = items2;
          const obj7 = { style: fireIcon.gameIconImage, source };
          const items3 = [hasOwnProperty(FastImageDefault, obj7)];
          let tmp15Result = style1;
          if (style1) {
            const obj8 = { style: fireIcon.gameIconMask, children: null };
            const obj9 = { style: fireIcon.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_330 };
            obj8.children = hasOwnProperty(FireIcon2.FireIcon, obj9);
            tmp15Result = hasOwnProperty(View, obj8);
          }
          items3[1] = tmp15Result;
          obj6.children = items3;
          tmp13Result = timestampProducer(View, obj6);
        }
      }
    };
export const useStyles = styles;
