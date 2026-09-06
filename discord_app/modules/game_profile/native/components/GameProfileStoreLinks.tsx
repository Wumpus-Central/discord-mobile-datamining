// discord_app/modules/game_profile/native/components/GameProfileStoreLinks.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useOpenExternalUrlFromGameProfileDefault from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;

require = fn;
function WebsiteGameStoreLinkButton(data) {
  data = data.data;
  const trackAction = data.trackAction;
  closure_2 = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
  return React4(components_Button_Button.Button, {
    variant: "secondary",
    size: "md",
    text: data.title,
    icon: data.icon,
    onPress() {
      trackAction(data.action);
      closure_2(data.url);
    },
  });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinks.tsx");

export default function GameProfileStoreLinks(websiteButtons) {
  ({ game, trackAction } = websiteButtons);
  websiteButtons = websiteButtons.websiteButtons;
  const tmp = closure_6();
  let name;
  if (game != null) {
    name = game.name;
  }
  if (0 !== websiteButtons.length) {
    if (null != name) {
      if (1 === websiteButtons.length) {
        let obj = { data: websiteButtons[0], trackAction };
        return closure_4(WebsiteGameStoreLinkButton, obj);
      } else if (2 === websiteButtons.length) {
        obj = { style: tmp.container, children: null };
        const obj1 = { data: websiteButtons[0], trackAction };
        const items = [closure_4(WebsiteGameStoreLinkButton, obj1)];
        const obj2 = { data: websiteButtons[1], trackAction };
        items[1] = closure_4(WebsiteGameStoreLinkButton, obj2);
        obj.children = items;
        return closure_5(View, obj);
      } else {
        const obj3 = { variant: "secondary", size: "md", text: null, onPress: null };
        const intl = trackAction(name[8]).intl;
        obj3.text = intl.string(trackAction(name[8]).t["/hMurx"]);
        obj3.onPress = function onPress() {
          let obj = { key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY, content: null };
          obj = { gameName: name, websiteButtons, trackAction };
          obj.content = React4(GameProfileStoreLinksActionSheetDefault, obj);
          return obj.showActionSheet(obj);
        };
        const tmp17 = closure_4(trackAction(name[7]).Button, obj3);
        const first = websiteButtons[0];
        let action;
        if (first != null) {
          action = first.action;
        }
        let tmp4 = tmp17;
        if (action === trackAction(name[11]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
          obj = { style: tmp.container, children: null };
          const obj4 = { data: websiteButtons[0], trackAction };
          const items1 = [closure_4(WebsiteGameStoreLinkButton, obj4), tmp17];
          obj.children = items1;
          tmp4 = closure_5(View, obj);
        }
        return tmp4;
      }
    }
  }
  return null;
}
