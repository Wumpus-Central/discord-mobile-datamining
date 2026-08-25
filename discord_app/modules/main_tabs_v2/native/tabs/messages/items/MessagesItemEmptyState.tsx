// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import Text from "../../../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import registerAssetDefault from "../../../../../../../_runtime/15411_registerAsset.js";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { container: null, containerImage: null, image: null, body: null, title: null };
obj = { padding: ThemesDefault.space.PX_16, flex: 1, height: 325 };
obj[0] = obj;
createCacheKey = { marginBottom: ThemesDefault.space.PX_16, flexShrink: 1, flexGrow: 1 };
obj[1] = createCacheKey;
obj[2] = { height: "100%", width: "100%" };
obj[3] = { marginBottom: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
obj[4] = { textAlign: "center" };
let closure_8 = createCacheKey.createStyles(obj);
let obj2 = { marginBottom: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
const memoResult = importAllResult.memo(function MessagesItemEmptyState() {
  const tmp = callback3();
  let obj = { style: tmp.container, collapsable: false, children: null };
  obj = { style: tmp.containerImage, children: null };
  obj = { resizeMode: "contain", source: null, style: null };
  const callback = importAllResult.useCallback(() => {
    let obj = callback(table[5]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        obj = { screen: "add-friends", params: null };
        obj[1] = { sourcePage: "Messages Empty State", presentation: "card" };
        current.navigate("friends", obj);
      }
    }
  }, []);
  obj[1] = registerAssetDefault;
  obj[2] = tmp.image;
  obj[1] = callback(closure_4, obj);
  const items = [callback(closure_5, obj), , , ];
  obj1 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.title, maxFontSizeMultiplier: 2, children: null };
  const intl = getSystemLocale.intl;
  obj1[4] = intl.string(getSystemLocale.t["8JZof8"]);
  items[1] = callback(Text.Heading, obj1);
  const obj2 = { color: "text-default", variant: "text-md/medium", style: tmp.body, maxFontSizeMultiplier: 2, children: null };
  const intl2 = getSystemLocale.intl;
  obj2[4] = intl2.string(getSystemLocale.t["qm+H7x"]);
  items[2] = callback(Text.Text, obj2);
  const obj3 = { text: null, onPress: null, size: "lg" };
  const intl3 = getSystemLocale.intl;
  obj3[0] = intl3.string(getSystemLocale.t.zIJnA6);
  obj3[1] = callback;
  items[3] = callback(Button.Button, obj3);
  obj[2] = items;
  return callback2(closure_5, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default memoResult;
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;