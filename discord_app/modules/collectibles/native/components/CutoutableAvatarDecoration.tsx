// discord_app/modules/collectibles/native/components/CutoutableAvatarDecoration.tsx
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default function CutoutableAvatarDecoration(size) {
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  let nativeCutouts = size.cutout;
  let stateFromStores;
  let tmp = decorationStyle;
  items = [stateFromStores];
  stateFromStores = size(decorationStyle[3]).useStateFromStores(items, () => stateFromStores.useReducedMotion);
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
    const obj3 = {
      avatarDecorationUrl: avatarDecorationURL,
      sizeStyle: { width: size, height: size },
      style: null,
      shouldAnimate: tmp2,
      source: null,
    };
    size = { width: size, height: size };
    items = [size, decorationStyle];
    obj3.style = items;
    let str2 = avatarDecorationURL;
    if (avatarDecorationURL == null) {
      str2 = "";
    }
    obj3.source = { uri: str2 };
    return obj3;
  }, items1);
  ({ shouldAnimate, style, source } = memo);
  let tmp5 = null;
  if (null != avatarDecoration) {
    tmp5 = null;
    if (null != memo.avatarDecorationUrl) {
      if (null != nativeCutouts) {
        const obj2 = { style, cutouts: null, children: null };
        nativeCutouts = nativeCutouts.nativeCutouts;
        obj2.cutouts = nativeCutouts;
        let obj3 = { source, style: tmp4, enableAnimation: shouldAnimate };
        tmp = jsx(avatarDecoration(tmp[6]), { source, style: tmp4, enableAnimation: shouldAnimate });
        obj2.children = tmp;
        let tmp8 = jsx(avatarDecoration(tmp[5]), { style, cutouts: null, children: null });
        const tmp11 = avatarDecoration(tmp[5]);
      } else {
        const obj4 = { source, style, enableAnimation: shouldAnimate, pointerEvents: "none" };
        tmp8 = jsx(avatarDecoration(tmp[6]), { source, style, enableAnimation: shouldAnimate, pointerEvents: "none" });
      }
    }
  }
  return tmp5;
}
