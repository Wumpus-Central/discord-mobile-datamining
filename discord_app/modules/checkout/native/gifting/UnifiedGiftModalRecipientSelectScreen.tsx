// === Module 9634: UnifiedGiftModalRecipientSelectScreen ===

// Module 9634 (UnifiedGiftModalRecipientSelectScreen)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import SearchableUserListDefault from "SearchableUserList" /* 9635 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserRowModes } from "UserRowModes" /* 9081 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
const createCacheKey = { flex: 1, paddingTop: 16, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  let obj = setRecipientUser(1500);
  importDefault = obj.useNavigation();
  { style: callback().container, children: jsx(SearchableUserListDefault, obj) };
  obj = {
    onSelectUser(user) {
      setRecipientUser(user);
      navigation.navigate(setRecipientUser(dependencyMap[8]).UnifiedGiftModalScreens.GIFT_DETAIL);
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true
  };
  return <View onSelectUser={function onSelectUser(user) {
    setRecipientUser(user);
    navigation.navigate(setRecipientUser(dependencyMap[8]).UnifiedGiftModalScreens.GIFT_DETAIL);
  }} rowMode={UserRowModes.NONE} disableGradient disableThemedGradient />;
};