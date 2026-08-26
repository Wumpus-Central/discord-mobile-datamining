// discord_app/modules/parent_tools/native/ConnectGuardianBottomSheet.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useOnNewPendingRequestDefault from "../hooks/useOnNewPendingRequest.tsx";
import ConnectGuardianCard from "ConnectGuardianCard.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../FamilyCenterStore.tsx";
import { CONNECT_GUARDIAN_BOTTOM_SHEET_KEY as closure_6 } from "../FamilyCenterConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, info: null, centered: null, cardContainer: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_24, paddingVertical: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { alignItems: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default function ConnectGuardianBottomSheet(arg0) {
  ({ title, body } = arg0);
  ({ linkCode, expiresAt, onRefresh } = arg0);
  const tmp = callback();
  let obj = defaultAreStatesEqual;
  const items = [closure_5];
  let stateFromStores = obj.useStateFromStores(items, () => store.getLinkCode());
  obj1 = defaultAreStatesEqual;
  const items1 = [closure_5];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => store.getLinkCodeExpiresAt());
  callback = React.useCallback(() => {
    callback(table[8]).hideActionSheet(closure_6);
  }, []);
  useOnNewPendingRequestDefault(callback);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.info, children: null };
  obj1 = { style: tmp.centered, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  if (title == null) {
    const intl = tmp2(1236).intl;
    title = intl.string(tmp7(2369).aCUVfL);
  }
  obj1[4] = title;
  const items2 = [closure_7(Text.Text, obj1), ];
  const obj2 = { style: tmp.centered, variant: "text-md/medium", color: "text-default", children: null };
  if (body == null) {
    const intl2 = tmp2(1236).intl;
    body = intl2.format(tmp7(2369)["2O6ltn"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  }
  obj2[3] = body;
  items2[1] = closure_7(Text.Text, obj2);
  obj[1] = items2;
  const items3 = [closure_8(View, obj), , ];
  const obj3 = { style: tmp.cardContainer, children: null };
  if (stateFromStores == null) {
    stateFromStores = linkCode;
  }
  const obj4 = { linkCode: stateFromStores, expiresAt: null, onRefresh: null };
  if (stateFromStores1 == null) {
    stateFromStores1 = expiresAt;
  }
  const obj5 = { startExpanded: true, children: null };
  obj4[1] = stateFromStores1;
  obj4[2] = onRefresh;
  obj3[1] = closure_7(ConnectGuardianCard.ConnectGuardianCard, obj4);
  items3[1] = closure_7(View, obj3);
  const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl3 = tmp2(1236).intl;
  obj6[2] = intl3.string(messagesProxyDefault.Hsm5IF);
  obj6[3] = callback;
  items3[2] = closure_7(Button.Button, obj6);
  obj[1] = items3;
  obj5[1] = closure_8(View, obj);
  return closure_7(Background.BottomSheet, obj5);
};