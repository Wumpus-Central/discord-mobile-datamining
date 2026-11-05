// discord_app/modules/user_profile/native/UserProfileWidgetsEmptyState.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02123_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_5 = fn(8900).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5143);
let obj2 = {
  container: { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" },
  textContainer: null,
  centeredText: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" };
obj2.textContainer = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.centeredText = { textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsEmptyState.tsx");

export default function UserProfileWidgetsEmptyState() {
  const tmp = closure_8();
  items = [AuthenticationStore];
  _require = require("initialize").useStateFromStores(items, () => id.getId());
  let obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centeredText, children: null };
  const intl = require("util").intl;
  obj4.children = intl.string(require("util").t["oqalC+"]);
  const items1 = [closure_6(require("Text/Text").Heading, obj4)];
  const obj5 = { variant: "body-sm/normal", color: "text-default", style: tmp.centeredText, children: null };
  const intl2 = require("util").intl;
  obj5.children = intl2.string(require("util").t.O9SQ1c);
  items1[1] = closure_6(require("Text/Text").Text, obj5);
  obj3.children = items1;
  const items2 = [closure_7(View, obj3)];
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj6.text = intl3.string(require("util").t["/NKLK5"]);
  obj6.onPress = function onPress() {
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId, action: constants.PRESS_ADD_WIDGET });
    const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(16822, dependencyMap.paths),
      "UserProfileWidgetAddActionSheet",
    );
  };
  items2[1] = closure_6(require("components/Button/Button").Button, obj6);
  obj2.children = items2;
  return closure_7(View, obj2);
}
