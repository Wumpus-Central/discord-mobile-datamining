// === Module 7973: CutoutableAvatarDecoration ===

// Module 7973 (CutoutableAvatarDecoration)
import noop from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default function CutoutableAvatarDecoration(size) {
  let avatarDecorationUrl;
  let sizeStyle;
  let source;
  let style;
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  let nativeCutouts = size.cutout;
  let stateFromStores;
  let tmp2 = decorationStyle;
  let obj = size(decorationStyle[4]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [animate, size, avatarDecoration, decorationStyle, stateFromStores];
  const memo = animate.useMemo(() => {
    let tmp = animate;
    if (animate) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      tmp = null != avatarDecoration;
    }
    let obj = size(decorationStyle[5]);
    obj = { avatarDecoration, canAnimate: tmp, size };
    const avatarDecorationURL = obj.getAvatarDecorationURL(obj);
    obj = { avatarDecorationUrl: avatarDecorationURL, sizeStyle: obj1, style: items, shouldAnimate: tmp, source: null };
    items = [{ width: size, height: size }, decorationStyle];
    let str = avatarDecorationURL;
    if (avatarDecorationURL == null) {
      str = "";
    }
    obj[4] = { uri: str };
    return obj;
  }, items1);
  ({ avatarDecorationUrl, style, sizeStyle, source } = memo);
  let tmp6 = null;
  if (null != avatarDecoration) {
    tmp6 = null;
    if (null != avatarDecorationUrl) {
      if (!tmpResult.isAndroid()) {
        if (null != nativeCutouts) {
          obj = { style: null, cutouts: null, children: null };
          obj[0] = style;
          obj[1] = nativeCutouts.nativeCutouts;
          obj = { source: null, style: null };
          obj[0] = source;
          obj[1] = sizeStyle;
          obj[2] = jsx(avatarDecoration(tmp2[9]), { source: null, style: null });
          let tmp9 = jsx(avatarDecoration(tmp2[7]), { source: null, style: null });
          const tmp12 = avatarDecoration(tmp2[7]);
        } else {
          const obj1 = { source: null, style: null };
          obj1[0] = source;
          obj1[1] = style;
          tmp9 = jsx(avatarDecoration(tmp2[9]), { source: null, style: null });
        }
      }
      if (null != nativeCutouts) {
        const obj2 = { style: null, cutouts: null, children: null };
        obj2[0] = style;
        nativeCutouts = nativeCutouts.nativeCutouts;
        obj2[1] = nativeCutouts;
        const obj3 = { url: null, style: null };
        obj3[0] = avatarDecorationUrl;
        obj3[1] = sizeStyle;
        tmp2 = jsx(avatarDecoration(tmp2[8]), { url: null, style: null });
        obj2[2] = tmp2;
        let tmp16 = jsx(avatarDecoration(tmp2[7]), { style: null, cutouts: null, children: null });
        const tmp19 = avatarDecoration(tmp2[7]);
      } else {
        const obj4 = { style: null, pointerEvents: "none", children: null };
        obj4[0] = style;
        const obj5 = { url: null, style: null };
        obj5[0] = avatarDecorationUrl;
        obj5[1] = sizeStyle;
        obj4[2] = jsx(avatarDecoration(tmp2[8]), { url: null, style: null });
        tmp16 = <stateFromStores style={null} pointerEvents="none">{null}</stateFromStores>;
      }
      tmpResult = size(tmp2[6]);
    }
  }
  return tmp6;
};