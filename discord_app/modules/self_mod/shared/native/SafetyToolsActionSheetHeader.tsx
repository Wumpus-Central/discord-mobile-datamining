// discord_app/modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SafetyToolsActionCreators from "../../SafetyToolsActionCreators.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  navbarContainer: { display: "flex", flexDirection: "row", justifyContent: "center" },
  navbarLeft: null,
};
createStyles = { position: "absolute", left: nativeDefault.space.PX_16 };
createStyles.navbarLeft = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default function SafetyToolsActionSheetHeader(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  ({ title, hasBackButton } = channelId);
  const tmp = closure_6();
  const navbarLeft = tmp;
  const items = [channelId, recipientId, warningId, warningType];
  const callback = warningId.useCallback(() => {
    const result = SafetyToolsActionCreators.openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  }, items);
  const items1 = [callback, tmp.navbarLeft];
  let obj = { style: tmp.navbarContainer, children: null };
  let memo = null != hasBackButton;
  if (memo) {
    memo = warningId.useMemo(() => {
      const obj = { style: navbarLeft.navbarLeft };
      return React4(obj.getHeaderBackButton(callback), obj);
    }, items1);
  }
  const items2 = [
    memo,
    navbarLeft(channelId(recipientId[7]).Text, {
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      children: title,
    }),
  ];
  obj.children = items2;
  return callback(warningType, obj);
}
