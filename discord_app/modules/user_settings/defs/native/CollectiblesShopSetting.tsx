// discord_app/modules/user_settings/defs/native/CollectiblesShopSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ShopIcon from "../../../../design/components/Icon/native/redesign/generated/ShopIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { CollectiblesShopScreen } from "../../shop/native/CollectiblesShopScreen.tsx";

let obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return CollectiblesShopScreen /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;