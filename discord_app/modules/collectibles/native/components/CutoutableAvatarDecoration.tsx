// === Module 8468: CutoutableAvatarDecoration ===

// Module 8468 (CutoutableAvatarDecoration)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import FastImageDefault from "FastImage" /* 5974 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8465 */;
import ClipViewDefault from "ClipView" /* 8469 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2 = dependencyMap;
  const cResult = c.c(30);
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
  let tmp7 = true === animate && !useStateFromStores.useStateFromStores(tmp4, tmp5);
  if (!tmp7) {
    tmp7 = "always" === animate;
  }
  if (tmp7) {
    tmp7 = null != avatarDecoration;
  }
  if (cResult[2] === avatarDecoration) {
    if (cResult[3] === tmp7) {
      if (cResult[4] === size) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] !== size) {
        const size1 = { width: size, height: size };
        const size2 = { width: size, height: size };
        cResult[6] = size;
        cResult[7] = size1;
        cResult[8] = size2;
        let tmp12 = size2;
        let tmp11 = size1;
      } else {
        tmp11 = cResult[7];
        tmp12 = cResult[8];
      }
      if (cResult[9] === decorationStyle) {
        if (cResult[10] === tmp12) {
          let tmp13 = cResult[11];
        }
        let str2 = tmp9;
        if (tmp9 == null) {
          str2 = "";
        }
        if (cResult[12] !== str2) {
          const obj2 = { uri: str2 };
          cResult[12] = str2;
          cResult[13] = obj2;
          let tmp15 = obj2;
        } else {
          tmp15 = cResult[13];
        }
        if (cResult[14] === tmp9) {
          if (cResult[15] === tmp7) {
            if (cResult[16] === tmp11) {
              if (cResult[17] === tmp13) {
                if (cResult[18] === tmp15) {
                  let tmp16 = cResult[19];
                }
                ({ avatarDecorationUrl, style, sizeStyle, source } = tmp16);
                let tmp18 = null;
                if (null != avatarDecoration) {
                  tmp18 = null;
                  if (null != avatarDecorationUrl) {
                    if (!tmpResult3.isAndroid()) {
                      if (null != cutout) {
                        const obj3 = { style, cutouts: cutout.nativeCutouts, children: null };
                        const obj4 = { source, style: sizeStyle };
                        obj3.children = jsx(FastImageDefault, { source, style: sizeStyle });
                        let tmp21 = jsx(ClipViewDefault, { style, cutouts: cutout.nativeCutouts, children: null });
                      } else {
                        const obj5 = { source, style };
                        tmp21 = jsx(FastImageDefault, { source, style });
                      }
                      cResult[25] = cutout;
                      cResult[26] = sizeStyle;
                      cResult[27] = source;
                      cResult[28] = style;
                      cResult[29] = tmp21;
                    }
                    if (null != cutout) {
                      const obj6 = { style, cutouts: cutout.nativeCutouts, children: null };
                      const obj7 = { url: avatarDecorationUrl, style: sizeStyle };
                      tmp2 = jsx(APNGDecorationNativeComponentDefault, { url: avatarDecorationUrl, style: sizeStyle });
                      obj6.children = tmp2;
                      let tmp29 = jsx(ClipViewDefault, { style, cutouts: cutout.nativeCutouts, children: null });
                    } else {
                      const obj8 = { style, pointerEvents: "none", children: null };
                      const obj9 = { url: avatarDecorationUrl, style: sizeStyle };
                      obj8.children = jsx(APNGDecorationNativeComponentDefault, { url: avatarDecorationUrl, style: sizeStyle });
                      tmp29 = <View style={style} pointerEvents="none">{null}</View>;
                    }
                    cResult[20] = avatarDecorationUrl;
                    cResult[21] = cutout;
                    cResult[22] = sizeStyle;
                    cResult[23] = style;
                    cResult[24] = tmp29;
                    tmpResult3 = PlatformUtils;
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
  const tmpResult = useStateFromStores;
  const avatarDecorationURL = AvatarUtils.getAvatarDecorationURL({ avatarDecoration, canAnimate: tmp7, size });
  cResult[2] = avatarDecoration;
  cResult[3] = tmp7;
  cResult[4] = size;
  cResult[5] = avatarDecorationURL;
  tmp9 = avatarDecorationURL;
  const tmpResult4 = AvatarUtils;
}) : ((size) => {
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  let nativeCutouts = size.cutout;
  let tmp2 = decorationStyle;
  let items = [AccessibilityStore];
  const stateFromStores = size(decorationStyle[6]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [animate, size, avatarDecoration, decorationStyle, stateFromStores];
  const memo = animate.useMemo(() => {
    let tmp2 = true === animate;
    if (tmp2) {
      tmp2 = !stateFromStores;
    }
    if (!tmp2) {
      tmp2 = "always" === animate;
    }
    if (tmp2) {
      tmp2 = null != avatarDecoration;
    }
    const avatarDecorationURL = AvatarUtils.getAvatarDecorationURL({ avatarDecoration, canAnimate: tmp2, size });
    const obj3 = { avatarDecorationUrl: avatarDecorationURL, sizeStyle: { width: size, height: size }, style: null, shouldAnimate: tmp2, source: null };
    size = { width: size, height: size };
    const items = [size, decorationStyle];
    obj3.style = items;
    let str2 = avatarDecorationURL;
    if (avatarDecorationURL == null) {
      str2 = "";
    }
    obj3.source = { uri: str2 };
    return obj3;
  }, items1);
  ({ avatarDecorationUrl, style, sizeStyle, source } = memo);
  let tmp6 = null;
  if (null != avatarDecoration) {
    tmp6 = null;
    if (null != avatarDecorationUrl) {
      if (!tmpResult.isAndroid()) {
        if (null != nativeCutouts) {
          const obj2 = { style, cutouts: nativeCutouts.nativeCutouts, children: null };
          let obj3 = { source, style: sizeStyle };
          obj2.children = jsx(avatarDecoration(tmp2[11]), { source, style: sizeStyle });
          let tmp9 = jsx(avatarDecoration(tmp2[9]), { style, cutouts: nativeCutouts.nativeCutouts, children: null });
          const tmp12 = avatarDecoration(tmp2[9]);
        } else {
          const obj4 = { source, style };
          tmp9 = jsx(avatarDecoration(tmp2[11]), { source, style });
        }
      }
      if (null != nativeCutouts) {
        const obj5 = { style, cutouts: null, children: null };
        nativeCutouts = nativeCutouts.nativeCutouts;
        obj5.cutouts = nativeCutouts;
        const obj6 = { url: avatarDecorationUrl, style: sizeStyle };
        tmp2 = jsx(avatarDecoration(tmp2[10]), { url: avatarDecorationUrl, style: sizeStyle });
        obj5.children = tmp2;
        let tmp16 = jsx(avatarDecoration(tmp2[9]), { style, cutouts: null, children: null });
        const tmp19 = avatarDecoration(tmp2[9]);
      } else {
        const obj7 = { style, pointerEvents: "none", children: null };
        const obj8 = { url: avatarDecorationUrl, style: sizeStyle };
        obj7.children = jsx(avatarDecoration(tmp2[10]), { url: avatarDecorationUrl, style: sizeStyle });
        tmp16 = <stateFromStores style={style} pointerEvents="none">{null}</stateFromStores>;
      }
      tmpResult = size(tmp2[8]);
    }
  }
  return tmp6;
});