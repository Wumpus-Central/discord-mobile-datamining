// === Module 10856: UnifiedGiftModalRecipientSelectScreen ===

// Module 10856 (UnifiedGiftModalRecipientSelectScreen)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import SearchableUserListDefault from "SearchableUserList" /* 10858 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserRowModes } from "UserRowModes" /* 10857 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { flex: 1, paddingTop: 16, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  importDefault = undefined;
  let obj = setRecipientUser(1498);
  importDefault = obj.useNavigation();
  obj = { style: callback().container, children: jsx(SearchableUserListDefault, obj) };
  obj = {
    onSelectUser(user) {
      setRecipientUser(user);
      navigation.navigate(setRecipientUser(closure_1_2[8]).UnifiedGiftModalScreens.GIFT_DETAIL);
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true
  };
  return <View onSelectUser={function onSelectUser(user) {
    setRecipientUser(user);
    navigation.navigate(setRecipientUser(closure_1_2[8]).UnifiedGiftModalScreens.GIFT_DETAIL);
  }} rowMode={UserRowModes.NONE} disableGradient disableThemedGradient />;
};