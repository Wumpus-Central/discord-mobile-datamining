// === Module 8275: CutoutableAvatarDecoration ===

// Module 8275 (CutoutableAvatarDecoration)
import AvatarUtils from "AvatarUtils" /* 1397 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

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
  let items = [AccessibilityStore];
  const stateFromStores = size(decorationStyle[4]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
          obj2.children = jsx(avatarDecoration(tmp2[9]), { source, style: sizeStyle });
          let tmp9 = jsx(avatarDecoration(tmp2[7]), { style, cutouts: nativeCutouts.nativeCutouts, children: null });
          const tmp12 = avatarDecoration(tmp2[7]);
        } else {
          const obj4 = { source, style };
          tmp9 = jsx(avatarDecoration(tmp2[9]), { source, style });
        }
      }
      if (null != nativeCutouts) {
        const obj5 = { style, cutouts: null, children: null };
        nativeCutouts = nativeCutouts.nativeCutouts;
        obj5.cutouts = nativeCutouts;
        const obj6 = { url: avatarDecorationUrl, style: sizeStyle };
        tmp2 = jsx(avatarDecoration(tmp2[8]), { url: avatarDecorationUrl, style: sizeStyle });
        obj5.children = tmp2;
        let tmp16 = jsx(avatarDecoration(tmp2[7]), { style, cutouts: null, children: null });
        const tmp19 = avatarDecoration(tmp2[7]);
      } else {
        const obj7 = { style, pointerEvents: "none", children: null };
        const obj8 = { url: avatarDecorationUrl, style: sizeStyle };
        obj7.children = jsx(avatarDecoration(tmp2[8]), { url: avatarDecorationUrl, style: sizeStyle });
        tmp16 = <stateFromStores style={style} pointerEvents="none">{null}</stateFromStores>;
      }
      tmpResult = size(tmp2[6]);
    }
  }
  return tmp6;
};