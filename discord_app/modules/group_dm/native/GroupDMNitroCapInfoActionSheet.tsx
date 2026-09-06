// discord_app/modules/group_dm/native/GroupDMNitroCapInfoActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_GROUP_DM_NITRO_PARTICIPANTS as closure_5 } from "../GroupDMConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, title: null, body: null, button: null };
createCacheKey = {
  alignItems: "center",
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingBottom: ThemesDefault.space.PX_16,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
let obj1 = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
const obj2 = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
createCacheKey[3] = { width: "100%", marginTop: ThemesDefault.space.PX_24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: "100%", marginTop: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapInfoActionSheet.tsx");

export default function GroupDMNitroCapInfoActionSheet() {
  const tmp = callback3();
  const callback = React.useCallback(() => {
    callback(table[6]).hideActionSheet();
  }, []);
  let obj = { showGradient: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = {
    style: tmp.title,
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    accessibilityRole: "header",
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.u1ilug);
  const items = [callback(Text.Text, obj), ,];
  obj1 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.formatToPlainString(getSystemLocale.t["mr27w/"], { number: closure_5 });
  items[1] = callback(Text.Text, obj1);
  const obj3 = { style: tmp.button, children: null };
  const obj4 = { text: null, variant: "secondary", onPress: null, grow: true };
  const intl3 = getSystemLocale.intl;
  obj4[0] = intl3.string(getSystemLocale.t.cpT0Cq);
  obj4[2] = callback;
  obj3[1] = callback(Button.Button, obj4);
  items[2] = callback(View, obj3);
  obj[1] = items;
  obj[1] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
}
