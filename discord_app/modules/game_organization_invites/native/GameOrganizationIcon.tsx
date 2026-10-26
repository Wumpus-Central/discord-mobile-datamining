// === Module 12729: GameOrganizationIcon ===

// Module 12729 (GameOrganizationIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5669 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let closure_7 = createStyles.createStyles((width, borderRadius) => {
  const obj = { icon: null, placeholder: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL } };
  const size = { width, height: width, borderRadius, overflow: "hidden" };
  obj.icon = size;
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationIcon(iconUrl) {
  const cResult = c.c(11);
  iconUrl = iconUrl.iconUrl;
  ({ borderRadius, size } = iconUrl);
  if (undefined === borderRadius) {
    borderRadius = nativeDefault.radii.sm;
  }
  let num = 48;
  if (undefined !== size) {
    num = size;
  }
  placeholder = closure_7(num, borderRadius);
  let num2 = 2;
  [tmp6, importDefault] = noop.useState(null);
  if (cResult[0] !== iconUrl) {
    const fn = function u() {
      let tmp2 = iconUrl;
      if (iconUrl == null) {
        tmp2 = null;
      }
      importDefault(tmp2);
    };
    cResult[0] = iconUrl;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (null != iconUrl) {
    if (iconUrl !== tmp6) {
      if (cResult[5] !== iconUrl) {
        const obj2 = { uri: iconUrl };
        cResult[5] = iconUrl;
        cResult[6] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === placeholder.icon) {
          if (cResult[9] === tmp8) {
            let tmp9 = cResult[10];
          }
          return tmp9;
        }
      }
      const obj3 = { source: tmp8, style: placeholder.icon, resizeMode: "cover", accessible: false, onError: tmp7 };
      const tmp12 = jsx(FastImageDefault, { source: tmp8, style: placeholder.icon, resizeMode: "cover", accessible: false, onError: tmp7 });
      cResult[7] = tmp7;
      cResult[8] = placeholder.icon;
      cResult[9] = tmp8;
      cResult[10] = tmp12;
      tmp9 = tmp12;
    }
  }
  if (cResult[2] === placeholder.icon) {
  }
  const obj4 = { style: null };
  const items = [, ];
  ({ icon: arr[0], placeholder: arr[1] } = placeholder);
  obj4.style = items;
  const tmp14 = <View style={null} />;
  ({ icon: tmp2[num2], placeholder } = placeholder);
  cResult[3] = placeholder;
  num2 = 4;
  cResult[4] = tmp14;
  const tmp5 = _slicedToArray(noop.useState(null), 2);
}) : (function GameOrganizationIcon(iconUrl) {
  iconUrl = iconUrl.iconUrl;
  let sm = iconUrl.borderRadius;
  if (sm === undefined) {
    sm = nativeDefault.radii.sm;
  }
  let num = iconUrl.size;
  if (num === undefined) {
    num = 48;
  }
  const tmp3 = closure_7(num, sm);
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
});