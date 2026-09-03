// discord_app/modules/custom_status/native/ClearAfterOptionsActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import context from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { ClearAfterOptions } from "../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { content: null, buttonWrapper: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default function ClearAfterOptionsActionSheet(arg0) {
  ({ initialValue, onChange: require } = arg0);
  closure_1 = undefined;
  const tmp = callback4();
  const tmp2 = callback(React.useState(initialValue), 2);
  closure_1 = tmp2[0];
  let obj = { contentStyles: tmp.content, header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["5XnRQ+"]);
  obj[1] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { onChange: tmp2[1], title: null, defaultValue: null, hasIcons: false, children: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.E45wvP);
  obj[2] = initialValue;
  obj[4] = ClearAfterOptions.map((value) =>
    callback3(callback(7705).TableRadioRow, { value, label: callback2(9240)(value) }, value),
  );
  const items = [callback2(context.TableRadioGroup, obj)];
  obj1 = { style: tmp.buttonWrapper, children: null };
  const obj2 = {
    onPress() {
      callback(callback2);
      callback2(closure_1_2[14]).hideActionSheet();
    },
    text: null,
  };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t.TyCVIq);
  obj1[1] = callback2(Button.Button, obj2);
  items[1] = callback2(View, obj1);
  obj[2] = items;
  return callback3(Background.BottomSheet, obj);
}
