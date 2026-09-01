// discord_app/modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = {
  navbarContainer: { display: "flex", flexDirection: "row", justifyContent: "center" },
  navbarLeft: null,
};
createCacheKey = { position: "absolute", left: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default function SafetyToolsActionSheetHeader(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let callback;
  callback = undefined;
  ({ title, hasBackButton } = channelId);
  const tmp = callback2();
  callback = tmp;
  const items = [channelId, recipientId, warningId, warningType];
  callback = warningId.useCallback(() => {
    const result = channelId(recipientId[5]).openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  }, items);
  const items1 = [callback, tmp.navbarLeft];
  let obj = { style: tmp.navbarContainer, children: null };
  let memo = null != hasBackButton;
  if (memo) {
    memo = warningId.useMemo(() => {
      let obj = channelId(recipientId[6]);
      obj = { style: lib.navbarLeft };
      return lib(obj.getHeaderBackButton(callback), obj);
    }, items1);
  }
  const items2 = [
    memo,
    callback(channelId(recipientId[7]).Text, {
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      children: title,
    }),
  ];
  obj[1] = items2;
  return callback(warningType, obj);
}
