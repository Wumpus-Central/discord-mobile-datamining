// === Module 11120: UnifiedGiftModalRecipientSelectScreen ===

// Module 11120 (UnifiedGiftModalRecipientSelectScreen)
import nativeDefault from "native" /* 576 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 11088 */;
import SearchableUserListDefault from "SearchableUserList" /* 11122 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserRowModes = fn(11121).UserRowModes;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  importDefault = setRecipientUser(1484).useNavigation();
  const obj2 = {
    style: closure_6().container,
    children: jsx(SearchableUserListDefault, {
      onSelectUser(user) {
        setRecipientUser(user);
        navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL);
      },
      rowMode: UserRowModes.NONE,
      disableGradient: true,
      disableThemedGradient: true
    })
  };
  return <View style={closure_6().container}>{jsx(SearchableUserListDefault, {
    onSelectUser(user) {
      setRecipientUser(user);
      navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL);
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true
  })}</View>;
};