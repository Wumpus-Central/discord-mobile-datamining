// === Module 8770: WebsiteGameStoreLinkButton ===

// Module 8770 (WebsiteGameStoreLinkButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function WebsiteGameStoreLinkButton(data) {
  data = data.data;
  const trackAction = data.trackAction;
  dependencyMap = undefined;
  dependencyMap = trackAction(8734)(trackAction(4158).openURL);
  return callback(data(4880).Button, {
    variant: "secondary",
    size: "md",
    text: data.title,
    icon: data.icon,
    onPress() {
      trackAction(data.action);
      callback(data.url);
    }
  });
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { flexDirection: "column", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinks.tsx");

export default function GameProfileStoreLinks(websiteButtons) {
  ({ game, trackAction } = websiteButtons);
  websiteButtons = websiteButtons.websiteButtons;
  let name;
  const tmp = callback3();
  name = undefined;
  if (game != null) {
    name = game.name;
  }
  if (0 !== websiteButtons.length) {
    if (null != name) {
      if (1 === websiteButtons.length) {
        let obj = { data: null, trackAction: null };
        obj[0] = websiteButtons[0];
        obj[1] = trackAction;
        return callback(WebsiteGameStoreLinkButton, obj);
      } else if (2 === websiteButtons.length) {
        obj = { style: null, children: null };
        obj[0] = tmp.container;
        obj1 = { data: null, trackAction: null };
        obj1[0] = websiteButtons[0];
        obj1[1] = trackAction;
        const items = [callback(WebsiteGameStoreLinkButton, obj1), ];
        const obj2 = { data: null, trackAction: null };
        obj2[0] = websiteButtons[1];
        obj2[1] = trackAction;
        items[1] = callback(WebsiteGameStoreLinkButton, obj2);
        obj[1] = items;
        return callback2(View, obj);
      } else {
        const obj3 = { variant: "secondary", size: "md", text: null, onPress: null };
        const intl = trackAction(name[8]).intl;
        obj3[2] = intl.string(trackAction(name[8]).t["/hMurx"]);
        obj3[3] = function onPress() {
          let obj = trackAction(name[9]);
          obj = { key: trackAction(name[10]).ACTION_SHEET_KEY, content: closure_1_4(websiteButtons(name[10]), obj) };
          obj = { gameName: name, websiteButtons, trackAction };
          return obj.showActionSheet(obj);
        };
        const tmp17 = callback(trackAction(name[7]).Button, obj3);
        const first = websiteButtons[0];
        let action;
        if (first != null) {
          action = first.action;
        }
        let tmp4 = tmp17;
        if (action === trackAction(name[11]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
          obj = { style: null, children: null };
          obj[0] = tmp.container;
          const obj4 = { data: null, trackAction: null };
          obj4[0] = websiteButtons[0];
          obj4[1] = trackAction;
          const items1 = [callback(WebsiteGameStoreLinkButton, obj4), tmp17];
          obj[1] = items1;
          tmp4 = callback2(View, obj);
        }
        return tmp4;
      }
    }
  }
  return null;
};