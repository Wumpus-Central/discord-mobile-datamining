// discord_app/modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button2 from "../../../../design/components/Button/native/Button.native.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import registerAssetDefault from "../../../../../_runtime/08245_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/09206_registerAsset.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { createChannelRecord } from "../../../../records/ChannelRecord.tsx";
import { useStageChannelUpsellCardStore as closure_7 } from "../../StageChannelUpsellCardStore.tsx";
import { CREATE_GUILD_EVENT_MODAL_KEY as closure_8 } from "../GuildEventModalConstants.tsx";
import { ChannelTypes } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
createCacheKey = { container: null, image: null, closeContainer: null, header: null, description: null, button: null };
createCacheKey = { flexDirection: "column", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: 16, margin: 16, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 16 };
createCacheKey[2] = { position: "absolute", top: 14, right: 14 };
createCacheKey[3] = { lineHeight: 20, marginBottom: 4 };
createCacheKey[4] = { textAlign: "center", marginBottom: 4 };
createCacheKey[5] = { marginTop: 12, alignSelf: "stretch" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx");

export default function StageChannelUpsell(arg0) {
  ({ guildId: require, onCreate: importDefault } = arg0);
  dependencyMap = undefined;
  let tmp = callback5();
  const tmp2 = callback(callback2(), 2);
  dependencyMap = tmp3;
  let tmp4 = null;
  if (!tmp2[0]) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { onPress: null, accessibilityRole: "button", style: null, children: null };
    obj[0] = tmp3;
    obj[2] = tmp.closeContainer;
    obj = { source: null };
    obj[0] = registerAssetDefault;
    obj[3] = callback3(Button.Icon, obj);
    const items = [callback3(PressableBase.PressableOpacity, obj), , , , , ];
    obj1 = { source: null, style: null };
    obj1[0] = registerAssetDefault2;
    obj1[1] = tmp.image;
    items[1] = callback3(closure_4, obj1);
    let obj2 = { style: null, variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.header;
    const intl = getSystemLocale.intl;
    obj2[3] = intl.string(getSystemLocale.t.Sx8Ezi);
    items[2] = callback3(Text.Text, obj2);
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.description;
    const intl2 = getSystemLocale.intl;
    obj3[3] = intl2.string(getSystemLocale.t.JUzPhm);
    items[3] = callback3(Text.Text, obj3);
    const obj4 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj4[0] = tmp.description;
    const intl3 = getSystemLocale.intl;
    const obj5 = { suggestionsHook: null };
    obj5[0] = function suggestionsHook(children) {
      return callback2(callback(lib[14]).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    };
    obj4[3] = intl3.format(getSystemLocale.t.Vh7rP7, obj5);
    items[4] = callback3(Text.Text, obj4);
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.button;
    const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl4 = getSystemLocale.intl;
    obj7[2] = intl4.string(getSystemLocale.t["X/3SyA"]);
    obj7[3] = function onPress() {
      let obj = closure_1_1(lib[17]);
      obj.popWithKey(closure_1_8);
      obj = {
        guildId: closure_0,
        channelType: closure_1_9.GUILD_STAGE_VOICE,
        onChannelCreated(id) {
          const tmp = closure_1_6({ id, type: closure_1_9.GUILD_STAGE_VOICE });
          if (null != tmp) {
            callback(tmp);
          }
        },
        onClose() {
          callback(table[17]).popWithKey(closure_12);
        }
      };
      closure_1_1(lib[17]).pushLazy(closure_1_0(lib[19])(lib[18], lib.paths), obj, closure_1_12);
      lib();
      const obj2 = closure_1_1(lib[17]);
      closure_1_1(lib[20]).hideActionSheet();
    };
    obj6[1] = callback3(Button2.Button, obj7);
    items[5] = callback3(closure_5, obj6);
    obj[1] = items;
    tmp4 = callback4(closure_5, obj);
  }
  return tmp4;
};