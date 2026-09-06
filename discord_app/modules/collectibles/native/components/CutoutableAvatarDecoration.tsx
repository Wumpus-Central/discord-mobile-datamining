// === Module 8812: CutoutableAvatarDecoration ===

// Module 8812 (CutoutableAvatarDecoration)
import AvatarUtils from "AvatarUtils" /* 1396 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default function CutoutableAvatarDecoration(size) {
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  let nativeCutouts = size.cutout;
  let tmp2 = decorationStyle;
  let obj = size(decorationStyle[4]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
    let obj = { avatarDecoration, canAnimate: tmp2, size };
    const avatarDecorationURL = obj.getAvatarDecorationURL(obj);
    obj = { avatarDecorationUrl: avatarDecorationURL, sizeStyle: { width: size, height: size }, style: null, shouldAnimate: tmp2, source: null };
    size = { width: size, height: size };
    const items = [size, decorationStyle];
    obj.style = items;
    let str2 = avatarDecorationURL;
    if (avatarDecorationURL == null) {
      str2 = "";
    }
    obj.source = { uri: str2 };
    return obj;
  }, items1);
  ({ avatarDecorationUrl, style, sizeStyle, source } = memo);
  let tmp6 = null;
  if (null != avatarDecoration) {
    tmp6 = null;
    if (null != avatarDecorationUrl) {
      if (!tmpResult.isAndroid()) {
        if (null != nativeCutouts) {
          obj = { style, cutouts: nativeCutouts.nativeCutouts, children: null };
          obj = { source, style: sizeStyle };
          obj.children = jsx(avatarDecoration(tmp2[9]), { source, style: sizeStyle });
          let tmp9 = jsx(avatarDecoration(tmp2[7]), { source, style: sizeStyle });
          const tmp12 = avatarDecoration(tmp2[7]);
        } else {
          const obj1 = { source, style };
          tmp9 = jsx(avatarDecoration(tmp2[9]), { source, style });
        }
      }
      if (null != nativeCutouts) {
        const obj2 = { style, cutouts: null, children: null };
        nativeCutouts = nativeCutouts.nativeCutouts;
        obj2.cutouts = nativeCutouts;
        const obj3 = { url: avatarDecorationUrl, style: sizeStyle };
        tmp2 = jsx(avatarDecoration(tmp2[8]), { url: avatarDecorationUrl, style: sizeStyle });
        obj2.children = tmp2;
        let tmp16 = jsx(avatarDecoration(tmp2[7]), { style, cutouts: null, children: null });
        const tmp19 = avatarDecoration(tmp2[7]);
      } else {
        const obj4 = { style, pointerEvents: "none", children: null };
        const obj5 = { url: avatarDecorationUrl, style: sizeStyle };
        obj4.children = jsx(avatarDecoration(tmp2[8]), { url: avatarDecorationUrl, style: sizeStyle });
        tmp16 = <stateFromStores style={style} pointerEvents="none">{null}</stateFromStores>;
      }
      tmpResult = size(tmp2[6]);
    }
  }
  return tmp6;
};