// === Module 8501: CutoutableAvatarDecoration ===

// Module 8501 (CutoutableAvatarDecoration)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import FastImageDefault from "FastImage" /* 5981 */;
import ClipViewDefault from "ClipView" /* 8502 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animate;
  let avatarDecoration;
  let avatarDecorationUrl;
  let cutout;
  let decorationStyle;
  let sizeStyle;
  let source;
  let style;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(30);
  ({ size, avatarDecoration, decorationStyle, animate, cutout } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const tmp7 = (true === animate && !tmpResult.useStateFromStores(tmp4, tmp5) || "always" === animate) && null != avatarDecoration;
  if (cResult[2] === avatarDecoration) {
    if (cResult[3] === tmp7) {
      let tmp9;
      let tmp12;
      let tmp11;
      if (cResult[4] === size) {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== size) {
        const size1 = { width: size, height: size };
        const size2 = { width: size, height: size };
        cResult[6] = size;
        cResult[7] = size1;
        cResult[8] = size2;
        tmp12 = size2;
        tmp11 = size1;
      } else {
        tmp11 = cResult[7];
        tmp12 = cResult[8];
      }
      if (cResult[9] === decorationStyle) {
        let tmp13;
        let tmp15;
        if (cResult[10] === tmp12) {
          tmp13 = cResult[11];
        }
        let str2 = tmp9;
        if (tmp9 == null) {
          str2 = "";
        }
        if (cResult[12] !== str2) {
          const obj2 = { uri: str2 };
          cResult[12] = str2;
          cResult[13] = obj2;
          tmp15 = obj2;
        } else {
          tmp15 = cResult[13];
        }
        if (cResult[14] === tmp9) {
          if (cResult[15] === tmp7) {
            if (cResult[16] === tmp11) {
              if (cResult[17] === tmp13) {
                let tmp16;
                if (cResult[18] === tmp15) {
                  tmp16 = cResult[19];
                }
                ({ avatarDecorationUrl, style, sizeStyle, source } = tmp16);
                let tmp18 = null;
                if (null != avatarDecoration) {
                  tmp18 = null;
                  if (null != avatarDecorationUrl) {
                    let tmp19;
                    let tmp22;
                    const tmpResult3 = PlatformUtils;
                    if (tmpResult3.isAndroid()) {
                      if (tmp17) {
                        let tmp30;
                        if (cResult[20] === avatarDecorationUrl) {
                          if (cResult[21] === cutout) {
                            if (cResult[22] === sizeStyle) {
                              let tmp26;
                              if (cResult[23] === style) {
                                tmp26 = cResult[24];
                              }
                              tmp19 = tmp26;
                            }
                          }
                        }
                        if (null != cutout) {
                          ClipViewDefault;
                          tmp30 = <tmp33 style={style} cutouts={cutout.nativeCutouts}>{null}</tmp33>;
                        } else {
                          tmp30 = <View style={style} pointerEvents="none">{null}</View>;
                        }
                        cResult[20] = avatarDecorationUrl;
                        cResult[21] = cutout;
                        cResult[22] = sizeStyle;
                        cResult[23] = style;
                        cResult[24] = tmp30;
                        tmp26 = tmp30;
                      }
                      tmp18 = tmp19;
                    }
                    if (cResult[25] === cutout) {
                      if (cResult[26] === sizeStyle) {
                        if (cResult[27] === source) {
                          if (cResult[28] === style) {
                            tmp19 = cResult[29];
                          }
                        }
                      }
                    }
                    if (null != cutout) {
                      ClipViewDefault;
                      tmp22 = <tmp25 style={style} cutouts={cutout.nativeCutouts}>{null}</tmp25>;
                    } else {
                      tmp22 = jsx(FastImageDefault, { source, style });
                    }
                    cResult[25] = cutout;
                    cResult[26] = sizeStyle;
                    cResult[27] = source;
                    cResult[28] = style;
                    cResult[29] = tmp22;
                    tmp19 = tmp22;
                  }
                }
                return tmp18;
              }
            }
          }
        }
        const obj10 = { avatarDecorationUrl: tmp9, sizeStyle: tmp11, style: tmp13, shouldAnimate: tmp7, source: tmp15 };
        cResult[14] = tmp9;
        cResult[15] = tmp7;
        cResult[16] = tmp11;
        cResult[17] = tmp13;
        cResult[18] = tmp15;
        cResult[19] = obj10;
        tmp16 = obj10;
      }
      const items1 = [tmp12, decorationStyle];
      cResult[9] = decorationStyle;
      cResult[10] = tmp12;
      cResult[11] = items1;
      tmp13 = items1;
    }
  }
  const tmpResult4 = AvatarUtils;
  const avatarDecorationURL = tmpResult4.getAvatarDecorationURL({ avatarDecoration, canAnimate: tmp7, size });
  cResult[2] = avatarDecoration;
  cResult[3] = tmp7;
  cResult[4] = size;
  cResult[5] = avatarDecorationURL;
  tmp9 = avatarDecorationURL;
}) : ((size) => {
  let avatarDecorationUrl;
  let sizeStyle;
  let source;
  let style;
  let useReducedMotion;
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  const cutout = size.cutout;
  const tmp2 = decorationStyle;
  let obj = size(decorationStyle[6]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [animate, size, avatarDecoration, decorationStyle, stateFromStores];
  const memo = animate.useMemo(() => {
    let items;
    let str2;
    const obj = AvatarUtils;
    const obj2 = { avatarDecoration, canAnimate: (true === animate && !stateFromStores || "always" === animate) && null != avatarDecoration, size };
    const avatarDecorationURL = obj.getAvatarDecorationURL(obj2);
    const obj3 = { avatarDecorationUrl: avatarDecorationURL, sizeStyle: { width: size, height: size }, style: items, shouldAnimate: (true === animate && !stateFromStores || "always" === animate) && null != avatarDecoration, source: { uri: str2 } };
    size = { width: size, height: size };
    items = [size, decorationStyle];
    str2 = avatarDecorationURL;
    if (avatarDecorationURL == null) {
      str2 = "";
    }
    return obj3;
  }, items1);
  ({ avatarDecorationUrl, style, sizeStyle, source } = memo);
  let tmp6 = null;
  const tmp = size;
  if (null != avatarDecoration) {
    tmp6 = null;
    if (null != avatarDecorationUrl) {
      let tmp9;
      const tmpResult = tmp(tmp2[8]);
      if (tmpResult.isAndroid()) {
        if (tmp5) {
          let tmp16;
          if (null != cutout) {
            let obj3 = { url: avatarDecorationUrl, style: sizeStyle };
            avatarDecoration(tmp2[9]);
            tmp16 = <tmp19 style={style} cutouts={cutout.nativeCutouts}>{null}</tmp19>;
          } else {
            tmp16 = <stateFromStores style={style} pointerEvents="none">{null}</stateFromStores>;
          }
          tmp9 = tmp16;
        }
        tmp6 = tmp9;
      }
      if (null != cutout) {
        avatarDecoration(tmp2[9]);
        tmp9 = <tmp12 style={style} cutouts={cutout.nativeCutouts}>{null}</tmp12>;
      } else {
        tmp9 = jsx(avatarDecoration(tmp2[11]), { source, style });
      }
    }
  }
  return tmp6;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default tmp2;