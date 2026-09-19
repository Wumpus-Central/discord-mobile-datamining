// discord_app/modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06864_BottomSheetModal.js";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import useOpenExternalUrlFromGameProfileDefault from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  header: {
    gap: nativeDefault.space.PX_8,
    paddingTop: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_24,
  },
  headerText: { textAlign: "center" },
  buttons: null,
};
let obj3 = {
  gap: nativeDefault.space.PX_8,
  paddingTop: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
};
obj2.buttons = { gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx",
);

export default function GameProfileStoreLinksActionSheet(gameName) {
  ({ websiteButtons, trackAction: require } = gameName);
  const tmp = closure_6();
  importDefault = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
  const obj = { children: null };
  const obj2 = { contentContainerStyle: null, children: null };
  obj2.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = {
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.headerText,
    children: null,
  };
  const intl = util.intl;
  obj5.children = intl.string(util.t["/4gj6r"]);
  const items = [closure_4(Text_Text.Text, obj5)];
  const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.format(util.t["0acM2Y"], { gameName: gameName.gameName });
  items[1] = closure_4(Text_Text.Text, obj6);
  obj4.children = items;
  const items1 = [closure_5(View, obj4)];
  const obj3 = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  items1[1] = closure_4(View, {
    style: tmp.buttons,
    children: websiteButtons.map((url) => {
      url = url.url;
      const action = url.action;
      ({ icon, title } = url);
      return closure_1_4(
        components_Button_Button.Button,
        {
          icon,
          text: title,
          variant: "secondary",
          size: "md",
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            require(action);
            action(url);
          },
        },
        url,
      );
    }),
  });
  obj2.children = items1;
  obj.children = closure_5(BottomSheetModal.BottomSheetScrollView, obj2);
  return closure_4(ActionSheet.ActionSheet, obj);
}
export const ACTION_SHEET_KEY = "game-profile-store-links";
