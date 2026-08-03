// === Module 10549: AnnouncementChannelLurkerBar ===

// Module 10549 (AnnouncementChannelLurkerBar)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
class AnnouncementChannelLurkerBar {
  constructor(arg0) {
    channel = global.channel;
    tmp = jsxs();
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
              const result = channel(outer1_1[8]).showChannelFollowingActionSheet(channel.id, guildId);
              const obj = channel(outer1_1[8]);
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
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { wrapper: null, text: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 16, paddingTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx");

export default AnnouncementChannelLurkerBar;
export { AnnouncementChannelLurkerBar };