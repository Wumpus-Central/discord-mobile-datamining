// discord_app/modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
class AnnouncementChannelLurkerBar {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_5();
    obj = { style: tmp.wrapper, children: null };
    obj = { style: tmp.text, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t.Hl0Mqh);
    items = [, ];
    items[0] = jsx(require("Text").Text, obj);
    obj1 = {
      onPress() {
            const guildId = channel.getGuildId();
            if (null != guildId) {
              const result = channel(closure_1_1[8]).showChannelFollowingActionSheet(channel.id, guildId);
              const obj = channel(closure_1_1[8]);
            }
          },
      text: null,
      size: "sm",
      variant: "secondary",
      grow: true
    };
    intl2 = require("getSystemLocale").intl;
    obj1[1] = intl2.string(require("getSystemLocale").t["4z5PU1"]);
    items[1] = jsx(require("Button").Button, obj1);
    obj[1] = items;
    return jsxs(View, obj);
  }
}
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { wrapper: null, text: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, paddingTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: 8 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx");

export default AnnouncementChannelLurkerBar;
export { AnnouncementChannelLurkerBar };