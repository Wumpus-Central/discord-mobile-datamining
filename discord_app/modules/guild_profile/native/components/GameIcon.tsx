// === Module 9405: components/GameIcon ===

// Module 9405 (components/GameIcon)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Pressables from "Pressables" /* 5909 */;
import ClanGameplayActivity from "ClanGameplayActivity" /* 9406 */;
import FireIcon3 from "FireIcon" /* 9407 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
let size1;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { gameIcon: { width: 32, height: 32 }, gameIconImage: size, gameIconMask: size1, fireIcon: { marginTop: -1, width: 14, height: 14 } };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", top: -4, right: -4, display: "flex", justifyContent: "center", alignItems: "center", padding: 2, width: 18, height: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.sm };
const styles = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let FireIcon;
  let FireIcon2;
  let activityLevel;
  let game;
  let items;
  let items2;
  let obj5;
  let obj9;
  let onPress;
  let style;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(34);
  ({ style, game } = arg0);
  ({ activityLevel, onPress } = arg0);
  const tmp4 = styles();
  if (cResult[0] !== game) {
    const iconURL = game.getIconURL(24);
    let source = null;
    if (null != iconURL) {
      const obj2 = AvatarUtilsDefault;
      source = obj2.makeSource(iconURL);
    }
    cResult[0] = game;
    cResult[1] = source;
    tmp5 = source;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === game) {
    let tmp9;
    let level;
    if (cResult[3] === onPress) {
      tmp9 = cResult[4];
    }
    if (activityLevel != null) {
      level = activityLevel.level;
    }
    let tmp11 = null;
    if (null != tmp5) {
      let tmp23;
      const tmp12 = level === ClanGameplayActivity.ClanGameplayActivity.HIGH;
      if (null != onPress) {
        if (cResult[5] === style) {
          let tmp27;
          if (cResult[6] === tmp4.gameIcon) {
            tmp27 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            let tmp28;
            if (cResult[9] === tmp4.gameIconImage) {
              tmp28 = cResult[10];
            }
            if (cResult[11] === tmp12) {
              if (cResult[12] === tmp4.fireIcon) {
                let tmp32;
                if (cResult[13] === tmp4.gameIconMask) {
                  tmp32 = cResult[14];
                }
                if (cResult[15] === tmp9) {
                  if (cResult[16] === tmp27) {
                    if (cResult[17] === tmp28) {
                      let tmp37;
                      if (cResult[18] === tmp32) {
                        tmp37 = cResult[19];
                      }
                      tmp23 = tmp37;
                    }
                  }
                }
                const obj3 = { style: tmp27, onPress: tmp9, children: items };
                items = [tmp28, tmp32];
                const tmp39 = metroImportDefault(Pressables.PressableHighlight, obj3);
                cResult[15] = tmp9;
                cResult[16] = tmp27;
                cResult[17] = tmp28;
                cResult[18] = tmp32;
                cResult[19] = tmp39;
                tmp37 = tmp39;
              }
            }
            let tmp33 = tmp12;
            if (tmp33) {
              const obj4 = { style: tmp4.gameIconMask, children: metroRequire(FireIcon2, obj5) };
              obj5 = { style: tmp4.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_260 };
              FireIcon2 = FireIcon3.FireIcon;
              tmp33 = metroRequire(React3, obj4);
            }
            cResult[11] = tmp12;
            cResult[12] = tmp4.fireIcon;
            cResult[13] = tmp4.gameIconMask;
            cResult[14] = tmp33;
            tmp32 = tmp33;
          }
          const obj6 = { style: tmp4.gameIconImage, source: tmp5 };
          const tmp31 = metroRequire(hasOwnProperty, obj6);
          cResult[8] = tmp5;
          cResult[9] = tmp4.gameIconImage;
          cResult[10] = tmp31;
          tmp28 = tmp31;
        }
        const items1 = [style, tmp4.gameIcon];
        cResult[5] = style;
        cResult[6] = tmp4.gameIcon;
        cResult[7] = items1;
        tmp27 = items1;
      } else {
        if (cResult[20] === style) {
          let tmp13;
          if (cResult[21] === tmp4.gameIcon) {
            tmp13 = cResult[22];
          }
          if (cResult[23] === tmp5) {
            let tmp14;
            if (cResult[24] === tmp4.gameIconImage) {
              tmp14 = cResult[25];
            }
            if (cResult[26] === tmp12) {
              if (cResult[27] === tmp4.fireIcon) {
                let tmp18;
                if (cResult[28] === tmp4.gameIconMask) {
                  tmp18 = cResult[29];
                }
                if (cResult[30] === tmp13) {
                  if (cResult[31] === tmp14) {
                    if (cResult[32] === tmp18) {
                      tmp23 = cResult[33];
                    }
                  }
                }
                const obj7 = { style: tmp13, children: items2 };
                items2 = [tmp14, tmp18];
                const tmp26 = metroImportDefault(React3, obj7);
                cResult[30] = tmp13;
                cResult[31] = tmp14;
                cResult[32] = tmp18;
                cResult[33] = tmp26;
                tmp23 = tmp26;
              }
            }
            let tmp19 = tmp12;
            if (tmp19) {
              const obj8 = { style: tmp4.gameIconMask, children: metroRequire(FireIcon, obj9) };
              obj9 = { style: tmp4.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_330 };
              FireIcon = FireIcon3.FireIcon;
              tmp19 = metroRequire(React3, obj8);
            }
            cResult[26] = tmp12;
            cResult[27] = tmp4.fireIcon;
            cResult[28] = tmp4.gameIconMask;
            cResult[29] = tmp19;
            tmp18 = tmp19;
          }
          const obj10 = { style: tmp4.gameIconImage, source: tmp5 };
          const tmp17 = metroRequire(hasOwnProperty, obj10);
          cResult[23] = tmp5;
          cResult[24] = tmp4.gameIconImage;
          cResult[25] = tmp17;
          tmp14 = tmp17;
        }
        const items3 = [style, tmp4.gameIcon];
        cResult[20] = style;
        cResult[21] = tmp4.gameIcon;
        cResult[22] = items3;
        tmp13 = items3;
      }
      tmp11 = tmp23;
    }
    return tmp11;
  }
  const fn = function k() {
    if (onPress != null) {
      tmp(game);
    }
  };
  cResult[2] = game;
  cResult[3] = onPress;
  cResult[4] = fn;
  tmp9 = fn;
}) : ((arg0) => {
  let FireIcon;
  let FireIcon2;
  let activityLevel;
  let game;
  let items1;
  let items2;
  let items3;
  let items4;
  let level;
  let obj5;
  let obj9;
  let onPress;
  let style;
  ({ style, game } = arg0);
  ({ activityLevel, onPress } = arg0);
  const tmp = styles();
  const iconURL = game.getIconURL(24);
  let source = null;
  if (null != iconURL) {
    const obj = AvatarUtilsDefault;
    source = obj.makeSource(iconURL);
  }
  const items = [game, onPress];
  const callback = react.useCallback(() => {
    if (onPress != null) {
      tmp(game);
    }
  }, items);
  if (activityLevel != null) {
    level = activityLevel.level;
  }
  let tmp9 = null;
  if (null != source) {
    let tmp19Result;
    let tmp15Result = level === ClanGameplayActivity.ClanGameplayActivity.HIGH;
    if (null != onPress) {
      const obj2 = { style: items1, onPress: callback, children: items2 };
      items1 = [style, tmp.gameIcon];
      const obj3 = { style: tmp.gameIconImage, source };
      const PressableHighlight = Pressables.PressableHighlight;
      items2 = [metroRequire(hasOwnProperty, obj3), ];
      if (tmp15Result) {
        const obj4 = { style: tmp.gameIconMask, children: metroRequire(FireIcon2, obj5) };
        obj5 = { style: tmp.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_260 };
        FireIcon2 = FireIcon3.FireIcon;
        tmp15Result = metroRequire(React3, obj4);
      }
      items2[1] = tmp15Result;
      tmp19Result = metroImportDefault(PressableHighlight, obj2);
    } else {
      const obj6 = { style: items3, children: items4 };
      items3 = [style, tmp.gameIcon];
      const obj7 = { style: tmp.gameIconImage, source };
      items4 = [metroRequire(hasOwnProperty, obj7), ];
      let tmp21Result = tmp15Result;
      if (tmp21Result) {
        const obj8 = { style: tmp.gameIconMask, children: metroRequire(FireIcon, obj9) };
        obj9 = { style: tmp.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_330 };
        FireIcon = FireIcon3.FireIcon;
        tmp21Result = metroRequire(React3, obj8);
      }
      items4[1] = tmp21Result;
      tmp19Result = metroImportDefault(React3, obj6);
    }
    tmp9 = tmp19Result;
  }
  return tmp9;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GameIcon.tsx");

export default tmp6;
export const useStyles = styles;