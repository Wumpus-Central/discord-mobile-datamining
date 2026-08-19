// === Module 10613: SafetyToolsActionSheetHeader ===

// Module 10613 (SafetyToolsActionSheetHeader)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { position: "absolute", left: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default function SafetyToolsActionSheetHeader(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  ({ title, hasBackButton } = channelId);
  const tmp = callback2();
  const items = [channelId, recipientId, warningId, warningType];
  const callback = warningId.useCallback(() => {
    const result = channelId(recipientId[5]).openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  }, items);
  const items1 = [callback, tmp.navbarLeft];
  let obj = { style: tmp.navbarContainer, children: null };
  let memo = null != hasBackButton;
  if (memo) {
    memo = warningId.useMemo(() => {
      channelId(recipientId[6]);
      const obj = { style: lib.navbarLeft };
      return lib(obj.getHeaderBackButton(callback), obj);
    }, items1);
  }
  const items2 = [memo, callback(channelId(recipientId[7]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title })];
  obj[1] = items2;
  return callback(warningType, obj);
};