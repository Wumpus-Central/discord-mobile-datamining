// discord_app/modules/collectibles/native/components/CutoutableAvatarDecoration.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default function CutoutableAvatarDecoration(size) {
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  let nativeCutouts = size.cutout;
  let stateFromStores;
  let tmp2 = decorationStyle;
  let obj = size(decorationStyle[4]);
  let items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
    let obj = size(decorationStyle[5]);
    obj = { avatarDecoration, canAnimate: tmp2, size };
    const avatarDecorationURL = obj.getAvatarDecorationURL(obj);
    obj = { avatarDecorationUrl: avatarDecorationURL, sizeStyle: obj1, style: items, shouldAnimate: tmp2, source: null };
    items = [{ width: size, height: size }, decorationStyle];
    let str2 = avatarDecorationURL;
    if (avatarDecorationURL == null) {
      str2 = "";
    }
    obj[4] = { uri: str2 };
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
          obj1 = { source: null, style: null };
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