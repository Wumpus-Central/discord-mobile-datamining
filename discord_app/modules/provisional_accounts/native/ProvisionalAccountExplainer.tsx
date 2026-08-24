// discord_app/modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DividerDefault from "../../user_profile/native/UserProfileCard.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles(() => {
  let obj = { chatContainer: null, header: null };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, gap: ThemesDefault.space.PX_8 };
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[1] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx");

export const ChatProvisionalAccountExplainerCard = function ChatProvisionalAccountExplainerCard(iconSize) {
  iconSize = iconSize.iconSize;
  ({ style, userId } = iconSize);
  const tmp = callback3();
  c1 = "text-sm/semibold";
  const items = [iconSize, "text-sm/semibold"];
  const callback = React.useCallback((application) => closure_1_5(textmdsemibold(closure_1_2[5]), { application, textVariant: textmdsemibold, iconSize }, application.id), items);
  let obj = iconSize(11800);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  obj = { style: items1, children: null };
  items1 = [tmp.chatContainer, style];
  obj = { style: tmp.header, children: null };
  obj1 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = iconSize(1236).intl;
  obj1[2] = intl.string(iconSize(1236).t.Iyka0U);
  const items2 = [callback(iconSize(4734).Text, obj1), callback(iconSize(8074).CircleErrorIcon, { size: "xs", color: "text-default" })];
  obj[1] = items2;
  const items3 = [callback2(View, obj), callback(iconSize(4734).Text, { variant: "text-sm/normal", color: "text-default", children: provisionalAccountExplanationText })];
  obj[1] = items3;
  return callback2(iconSize(6292).Card, obj);
};
export const UserProfileProvisionalAccountExplainerCard = function UserProfileProvisionalAccountExplainerCard(iconSize) {
  iconSize = iconSize.iconSize;
  importDefault = "text-md/semibold";
  const items = [iconSize, "text-md/semibold"];
  ({ style, userId } = iconSize);
  const callback = React.useCallback((application) => closure_1_5(textmdsemibold(closure_1_2[5]), { application, textVariant: textmdsemibold, iconSize }, application.id), items);
  let obj = iconSize(11800);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  obj = { style, title: null, titleIcon: null, children: null };
  const intl = iconSize(1236).intl;
  obj[1] = intl.string(iconSize(1236).t.Iyka0U);
  obj[2] = callback(iconSize(8074).CircleErrorIcon, { size: "xs", color: "text-default" });
  obj[3] = callback(iconSize(4734).Text, { variant: "text-md/normal", color: "text-default", children: provisionalAccountExplanationText });
  return callback(DividerDefault, obj);
};