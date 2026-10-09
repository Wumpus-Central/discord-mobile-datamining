// discord_app/modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes.tsx";
import SearchableUserListDefault from "../../../main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserRowModes = fn(10187).UserRowModes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = {
  container: { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
      const cResult = setRecipientUser(576).c(6);
      setRecipientUser = setRecipientUser.setRecipientUser;
      const obj = setRecipientUser(576);
      const navigation = setRecipientUser(1503).useNavigation();
      const tmp4 = closure_6();
      if (cResult[0] === navigation) {
        if (cResult[1] === setRecipientUser) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.container) {
          if (cResult[4] === tmp5) {
            let tmp7 = cResult[5];
          }
          return tmp7;
        }
        const obj3 = { style: tmp4.container, children: tmp5 };
        const tmp10 = <View style={tmp4.container}>{tmp5}</View>;
        cResult[3] = tmp4.container;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = jsx(navigation(10188), {
        onSelectUser(arg0) {
          setRecipientUser(arg0);
          navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, undefined, { pop: true });
        },
        rowMode: UserRowModes.NONE,
        disableGradient: true,
        disableThemedGradient: true,
      });
      cResult[0] = navigation;
      cResult[1] = setRecipientUser;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj2 = setRecipientUser(1503);
      const obj4 = {
        onSelectUser(arg0) {
          setRecipientUser(arg0);
          navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, undefined, { pop: true });
        },
        rowMode: UserRowModes.NONE,
        disableGradient: true,
        disableThemedGradient: true,
      };
    }
  : function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
      setRecipientUser = setRecipientUser.setRecipientUser;
      importDefault = setRecipientUser(1503).useNavigation();
      const obj2 = {
        style: closure_6().container,
        children: jsx(SearchableUserListDefault, {
          onSelectUser(arg0) {
            setRecipientUser(arg0);
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
            onSelectUser(arg0) {
              setRecipientUser(arg0);
              navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, undefined, { pop: true });
            },
            rowMode: UserRowModes.NONE,
            disableGradient: true,
            disableThemedGradient: true,
          })}
        </View>
      );
    };
