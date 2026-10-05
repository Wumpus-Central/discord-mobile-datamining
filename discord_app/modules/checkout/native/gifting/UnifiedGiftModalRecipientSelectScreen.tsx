// discord_app/modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes.tsx";
import UserRowConstants from "../../../main_tabs_v2/native/shared_components/user_list/UserRowConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault, navigation, setRecipientUser;

let obj2;
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setRecipientUser) => {
      const obj = setRecipientUser(576);
      const cResult = obj.c(6);
      setRecipientUser = setRecipientUser.setRecipientUser;
      const obj2 = setRecipientUser(1490);
      navigation = obj2.useNavigation();
      const tmp4 = closure_6();
      if (cResult[0] === navigation) {
        let tmp5;
        if (cResult[1] === setRecipientUser) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.container) {
          let tmp7;
          if (cResult[4] === tmp5) {
            tmp7 = cResult[5];
          }
          return tmp7;
        }
        const tmp10 = <View style={tmp4.container}>{tmp5}</View>;
        cResult[3] = tmp4.container;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = jsx(navigation(10593), {
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
    }
  : (setRecipientUser) => {
      setRecipientUser = setRecipientUser.setRecipientUser;
      const obj = setRecipientUser(1490);
      importDefault = obj.useNavigation();
      return <View style={closure_6().container}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default tmp3;
