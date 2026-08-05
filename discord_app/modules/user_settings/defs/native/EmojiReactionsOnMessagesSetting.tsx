// discord_app/modules/user_settings/defs/native/EmojiReactionsOnMessagesSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["zge/fP"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").RenderReactions.useSetting,
  onValueChange: require("explicitContentFromProto").RenderReactions.updateSetting
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["zge/fP"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").RenderReactions.useSetting,
  onValueChange: require("explicitContentFromProto").RenderReactions.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/EmojiReactionsOnMessagesSetting.tsx");

export default toggle;