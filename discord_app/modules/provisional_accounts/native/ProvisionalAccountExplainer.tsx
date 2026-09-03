// === Module 12401: ChatProvisionalAccountExplainerCard ===

// Module 12401 (ChatProvisionalAccountExplainerCard)
import ThemesDefault from "Themes" /* 709 */;
import UserProfileCardDefault from "UserProfileCard" /* 6009 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
  let obj = iconSize(12403);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  obj = { style: items1, children: null };
  items1 = [tmp.chatContainer, style];
  obj = { style: tmp.header, children: null };
  obj1 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = iconSize(1233).intl;
  obj1[2] = intl.string(iconSize(1233).t.Iyka0U);
  const items2 = [callback(iconSize(4474).Text, obj1), callback(iconSize(7720).CircleErrorIcon, { size: "xs", color: "text-default" })];
  obj[1] = items2;
  const items3 = [callback2(View, obj), callback(iconSize(4474).Text, { variant: "text-sm/normal", color: "text-default", children: provisionalAccountExplanationText })];
  obj[1] = items3;
  return callback2(iconSize(5610).Card, obj);
};
export const UserProfileProvisionalAccountExplainerCard = function UserProfileProvisionalAccountExplainerCard(iconSize) {
  iconSize = iconSize.iconSize;
  importDefault = "text-md/semibold";
  const items = [iconSize, "text-md/semibold"];
  ({ style, userId } = iconSize);
  const callback = React.useCallback((application) => closure_1_5(textmdsemibold(closure_1_2[5]), { application, textVariant: textmdsemibold, iconSize }, application.id), items);
  let obj = iconSize(12403);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  obj = { style, title: null, titleIcon: null, children: null };
  const intl = iconSize(1233).intl;
  obj[1] = intl.string(iconSize(1233).t.Iyka0U);
  obj[2] = callback(iconSize(7720).CircleErrorIcon, { size: "xs", color: "text-default" });
  obj[3] = callback(iconSize(4474).Text, { variant: "text-md/normal", color: "text-default", children: provisionalAccountExplanationText });
  return callback(UserProfileCardDefault, obj);
};