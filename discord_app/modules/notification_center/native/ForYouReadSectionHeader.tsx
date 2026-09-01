// discord_app/modules/notification_center/native/ForYouReadSectionHeader.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: obj1, StyleSheet } = get_ActivityIndicator);
createCacheKey = { container: null, textHeader: null };
createCacheKey = {
  borderTopWidth: StyleSheet.hairlineWidth,
  borderTopColor: ThemesDefault.colors.BORDER_SUBTLE,
  marginVertical: 8,
  paddingHorizontal: 24,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 20 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
obj1 = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 20 };
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = function ForYouReadSectionHeader() {
  const tmp = callback();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.textHeader, variant: "text-sm/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.hftC1K);
  obj[1] = jsx(Text.Text, { style: tmp.textHeader, variant: "text-sm/semibold", children: null });
  return (
    <closure_2 style={tmp.textHeader} variant="text-sm/semibold">
      {null}
    </closure_2>
  );
};
