// === Module 13972: GameOrganizationIcon ===

// Module 13972 (GameOrganizationIcon)
import nativeDefault from "native" /* 575 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2154 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let closure_7 = createStyles.createStyles((width, borderRadius) => {
  const obj = { icon: null, placeholder: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL } };
  const size = { width, height: width, borderRadius, overflow: "hidden" };
  obj.icon = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationIcon.tsx");

export default function GameOrganizationIcon(iconUrl) {
  iconUrl = iconUrl.iconUrl;
  let sm = iconUrl.borderRadius;
  if (sm === undefined) {
    sm = nativeDefault.radii.sm;
  }
  let num = iconUrl.size;
  if (num === undefined) {
    num = 48;
  }
  const fallback = iconUrl.fallback;
  let icon = closure_7(num, sm);
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp3[1];
  [][0] = iconUrl;
  if (null != iconUrl) {
    if (iconUrl !== tmp3[0]) {
      const obj = { source: null, style: null, resizeMode: "cover", accessible: false, onError: null };
      const obj2 = { uri: null };
      const obj4 = { size: num };
      obj2.uri = ImageProxyUtils.getSizedImageAssetURL(iconUrl, obj4);
      obj.source = obj2;
      obj.style = icon.icon;
      obj.onError = tmp4;
      return <tmp8 source={null} style={null} resizeMode="cover" accessible={false} onError={null} />;
    }
  }
  if (null != fallback) {
    const obj5 = { style: null, children: null };
    icon = icon.icon;
    obj5.style = icon;
    obj5.children = fallback;
    let obj6 = obj5;
  } else {
    obj6 = { style: null };
    items = [, ];
    ({ icon: arr[0], placeholder: arr[1] } = icon);
    obj6.style = items;
  }
  <View {...obj6} />;
};