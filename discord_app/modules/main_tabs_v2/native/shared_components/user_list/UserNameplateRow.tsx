// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { card: null };
createCacheKey = { padding: 0, paddingRight: ThemesDefault.space.PX_40, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx");

export const UserNameplateRow = function UserNameplateRow(onPressOut) {
  ({ icon, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  let flag = onPressOut.disabled;
  ({ label, subLabel, trailing, arrow, onPress } = onPressOut);
  if (flag === undefined) {
    flag = false;
  }
  ({ variant, start, end, labelLineClamp, subLabelLineClamp } = onPressOut);
  if (variant === undefined) {
    variant = "default";
  }
  ({ isPreviewRow, draggable, dragHandlePressableProps, nameplate } = onPressOut);
  if (isPreviewRow === undefined) {
    isPreviewRow = false;
  }
  const merged = Object.assign(onPressOut, Object.create(null));
  dependencyMap = undefined;
  let obj = React;
  const context = React.useContext(onPressIn(5568).TableRowGroupContext);
  let tmp6 = !context;
  if (!context) {
    tmp6 = true === end;
  }
  const tmp7 = callback(obj.useState(false), 2);
  dependencyMap = tmp7[1];
  const items = [onPressIn];
  const items1 = [onPressOut];
  callback = obj.useCallback((arg0) => {
    callback(true);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const callback1 = obj.useCallback((arg0) => {
    callback(false);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  const tmp2 = callback3();
  const token = onPressIn(4167).useToken(onPressOut(712).modules.mobile.TABLE_ROW_BORDER_RADIUS);
  obj = { shadow: "none", border: "none", radius: token, start: null, end: null, onPress: null, onPressIn: null, onPressOut: null, disabled: null, style: null };
  let tmp13 = !context;
  if (!context) {
    tmp13 = true === start;
  }
  obj[3] = tmp13;
  obj[4] = tmp6;
  obj[5] = onPress;
  obj[6] = callback;
  obj[7] = callback1;
  obj[8] = flag;
  obj[9] = tmp2.card;
  const merged1 = Object.assign(merged);
  const items2 = [callback2(onPressOut(8490), { nameplate, isPressed: tmp7[0], invertPressOpacity: true, fullOpacity: isPreviewRow, animate: isPreviewRow }), callback2(onPressIn(5567).TableRowInner, { height: "100%", label, subLabel, icon, trailing, arrow, disabled: flag, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps })];
  obj.children = items2;
  let tmp12Result = tmp12(tmp3(5569).Card, obj);
  if (!context) {
    if (!tmp6) {
      obj = { children: null };
      const items3 = [tmp12Result, ];
      obj1 = { adjustSpacingForIcon: null };
      obj1[0] = null != icon;
      items3[1] = tmp15(tmp3(5525).TableRowDivider, obj1);
      obj[0] = items3;
      tmp12Result = tmp12(closure_7, obj);
    }
  }
  return tmp12Result;
};