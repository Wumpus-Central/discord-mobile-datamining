// discord_app/modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserProfileCardDefault from "../../user_profile/native/UserProfileCard.tsx";
import ApplicationIconAndNameDefault from "../../user_profile/native/ApplicationIconAndName.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles(() => {
  const obj = {
    chatContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 },
    header: null,
  };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 };
  obj.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
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
  const callback = noop.useCallback(
    (application) =>
      hasOwnProperty(ApplicationIconAndNameDefault, { application, textVariant, iconSize }, application.id),
    items,
  );
  const provisionalAccountExplanationText = iconSize(12780).useProvisionalAccountExplanationText({
    userId,
    renderApplicationName: callback,
  });
  const obj2 = { style: null, children: null };
  const items1 = [tmp.chatContainer, style];
  obj2.style = items1;
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = iconSize(1115).intl;
  obj4.children = intl.string(iconSize(1115).t.Iyka0U);
  const items2 = [
    closure_5(iconSize(4636).Text, obj4),
    closure_5(iconSize(6721).CircleErrorIcon, { size: "xs", color: "text-default" }),
  ];
  obj3.children = items2;
  const items3 = [
    closure_6(View, obj3),
    closure_5(iconSize(4636).Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: provisionalAccountExplanationText,
    }),
  ];
  obj2.children = items3;
  return closure_6(iconSize(5695).Card, obj2);
};
export const UserProfileProvisionalAccountExplainerCard = function UserProfileProvisionalAccountExplainerCard(
  iconSize,
) {
  iconSize = iconSize.iconSize;
  importDefault = "text-md/semibold";
  const items = [iconSize, "text-md/semibold"];
  ({ style, userId } = iconSize);
  const callback = noop.useCallback(
    (application) =>
      hasOwnProperty(ApplicationIconAndNameDefault, { application, textVariant, iconSize }, application.id),
    items,
  );
  const provisionalAccountExplanationText = iconSize(12780).useProvisionalAccountExplanationText({
    userId,
    renderApplicationName: callback,
  });
  const obj2 = { style, title: null, titleIcon: null, children: null };
  const obj = iconSize(12780);
  const intl = iconSize(1115).intl;
  obj2.title = intl.string(iconSize(1115).t.Iyka0U);
  obj2.titleIcon = closure_5(iconSize(6721).CircleErrorIcon, { size: "xs", color: "text-default" });
  obj2.children = closure_5(iconSize(4636).Text, {
    variant: "text-md/normal",
    color: "text-default",
    children: provisionalAccountExplanationText,
  });
  return closure_5(UserProfileCardDefault, obj2);
};
