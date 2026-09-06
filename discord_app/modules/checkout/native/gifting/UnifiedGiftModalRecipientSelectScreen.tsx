// discord_app/modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes.tsx";
import SearchableUserListDefault from "../../../main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserRowModes = fn(10860).UserRowModes;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  let obj = setRecipientUser(1483);
  importDefault = obj.useNavigation();
  obj = { style: closure_6().container, children: null };
  obj = {
    onSelectUser(user) {
      setRecipientUser(user);
      navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL);
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true,
  };
  obj.children = jsx(SearchableUserListDefault, {
    onSelectUser(user) {
      setRecipientUser(user);
      navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL);
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true,
  });
  return (
    <View
      onSelectUser={function onSelectUser(user) {
        setRecipientUser(user);
        navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL);
      }}
      rowMode={UserRowModes.NONE}
      disableGradient
      disableThemedGradient
    />
  );
}
