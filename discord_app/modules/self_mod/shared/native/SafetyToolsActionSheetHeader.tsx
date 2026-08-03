// === Module 10319: SafetyToolsActionSheetHeader ===

// Module 10319 (SafetyToolsActionSheetHeader)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { navbarContainer: { display: "flex", flexDirection: "row", justifyContent: "center" }, navbarLeft: null };
createCacheKey = { position: "absolute", left: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default function SafetyToolsActionSheetHeader(channelId) {
  let hasBackButton;
  let title;
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let callback;
  callback = undefined;
  ({ title, hasBackButton } = channelId);
  const tmp = createCacheKey();
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
      obj = { style: _undefined.navbarLeft };
      return _undefined(obj.getHeaderBackButton(callback), obj);
    }, items1);
  }
  const items2 = [memo, callback(channelId(recipientId[7]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title })];
  obj[1] = items2;
  return callback(warningType, obj);
};