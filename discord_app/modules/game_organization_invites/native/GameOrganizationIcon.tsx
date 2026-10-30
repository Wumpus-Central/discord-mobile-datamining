// === Module 13155: GameOrganizationIcon ===

// Module 13155 (GameOrganizationIcon)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5712 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles((width, borderRadius) => {
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
  const tmp3 = closure_6(num, sm);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp4[1];
  [][0] = iconUrl;
  if (null != iconUrl) {
    if (iconUrl !== tmp4[0]) {
      const obj = { source: null, style: null, resizeMode: "cover", accessible: false, onError: null };
      const obj2 = { uri: iconUrl };
      obj.source = obj2;
      obj.style = tmp3.icon;
      obj.onError = tmp5;
      let tmp9 = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover", accessible: false, onError: null });
    }
    return tmp9;
  }
  const obj3 = { style: null };
  const items = [, ];
  ({ icon: arr[0], placeholder: arr[1] } = tmp3);
  obj3.style = items;
  tmp9 = <View style={null} />;
};