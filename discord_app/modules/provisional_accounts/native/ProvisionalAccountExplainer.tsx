// === Module 12627: ProvisionalAccountExplainer ===

// Module 12627 (ProvisionalAccountExplainer)
import nativeDefault from "native" /* 576 */;
import UserProfileCardDefault from "UserProfileCard" /* 7207 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12628 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles(() => {
  let obj = { chatContainer: null, header: null };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 };
  obj.chatContainer = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.header = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx");

export const ChatProvisionalAccountExplainerCard = function ChatProvisionalAccountExplainerCard(iconSize) {
  iconSize = iconSize.iconSize;
  ({ style, userId } = iconSize);
  const tmp = closure_7();
  c1 = "text-sm/semibold";
  const items = [iconSize, "text-sm/semibold"];
  const callback = noop.useCallback((application) => hasOwnProperty(ApplicationIconAndNameDefault, { application, textVariant, iconSize }, application.id), items);
  let obj = iconSize(12629);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  obj = { style: null, children: null };
  const items1 = [tmp.chatContainer, style];
  obj.style = items1;
  obj = { style: tmp.header, children: null };
  const obj1 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = iconSize(1114).intl;
  obj1.children = intl.string(iconSize(1114).t.Iyka0U);
  const items2 = [closure_5(iconSize(4556).Text, obj1), closure_5(iconSize(6610).CircleErrorIcon, { size: "xs", color: "text-default" })];
  obj.children = items2;
  const items3 = [closure_6(View, obj), closure_5(iconSize(4556).Text, { variant: "text-sm/normal", color: "text-default", children: provisionalAccountExplanationText })];
  obj.children = items3;
  return closure_6(iconSize(5607).Card, obj);
};
export const UserProfileProvisionalAccountExplainerCard = function UserProfileProvisionalAccountExplainerCard(iconSize) {
  iconSize = iconSize.iconSize;
  importDefault = "text-md/semibold";
  const items = [iconSize, "text-md/semibold"];
  ({ style, userId } = iconSize);
  const callback = noop.useCallback((application) => hasOwnProperty(ApplicationIconAndNameDefault, { application, textVariant, iconSize }, application.id), items);
  let obj = iconSize(12629);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  obj = { style, title: null, titleIcon: null, children: null };
  const intl = iconSize(1114).intl;
  obj.title = intl.string(iconSize(1114).t.Iyka0U);
  obj.titleIcon = closure_5(iconSize(6610).CircleErrorIcon, { size: "xs", color: "text-default" });
  obj.children = closure_5(iconSize(4556).Text, { variant: "text-md/normal", color: "text-default", children: provisionalAccountExplanationText });
  return closure_5(UserProfileCardDefault, obj);
};