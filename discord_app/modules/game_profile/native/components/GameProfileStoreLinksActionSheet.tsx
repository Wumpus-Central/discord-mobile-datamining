// discord_app/modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06627_BottomSheetModal.js";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import useOpenExternalUrlFromGameProfileDefault from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { header: null, headerText: null, buttons: null };
createStyles = {
  gap: nativeDefault.space.PX_8,
  paddingTop: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
};
createStyles.header = createStyles;
createStyles.headerText = { textAlign: "center" };
createStyles.buttons = { gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx",
);

export default function GameProfileStoreLinksActionSheet(gameName) {
  ({ websiteButtons, trackAction: require } = gameName);
  const tmp = closure_6();
  importDefault = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
  let obj = { children: null };
  obj = { contentContainerStyle: null, children: null };
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  obj.contentContainerStyle = obj;
  const obj1 = { style: tmp.header, children: null };
  const obj2 = {
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.headerText,
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t["/4gj6r"]);
  const items = [closure_4(Text_Text.Text, obj2)];
  const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(util.t["0acM2Y"], { gameName: gameName.gameName });
  items[1] = closure_4(Text_Text.Text, obj3);
  obj1.children = items;
  const items1 = [closure_5(View, obj1)];
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
  obj.children = items1;
  obj.children = closure_5(BottomSheetModal.BottomSheetScrollView, obj);
  return closure_4(ActionSheet.ActionSheet, obj);
}
export const ACTION_SHEET_KEY = "game-profile-store-links";
