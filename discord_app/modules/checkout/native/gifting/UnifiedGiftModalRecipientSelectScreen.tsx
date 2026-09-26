// discord_app/modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes.tsx";
import SearchableUserListDefault from "../../../main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserRowModes = fn(10320).UserRowModes;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = {
  container: { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  importDefault = setRecipientUser(1485).useNavigation();
  const obj2 = {
    style: closure_6().container,
    children: jsx(SearchableUserListDefault, {
      onSelectUser(user) {
        setRecipientUser(user);
        navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, undefined, { pop: true });
      },
      rowMode: UserRowModes.NONE,
      disableGradient: true,
      disableThemedGradient: true,
    }),
  };
  return (
    <View style={closure_6().container}>
      {jsx(SearchableUserListDefault, {
        onSelectUser(user) {
          setRecipientUser(user);
          navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, undefined, { pop: true });
        },
        rowMode: UserRowModes.NONE,
        disableGradient: true,
        disableThemedGradient: true,
      })}
    </View>
  );
}
