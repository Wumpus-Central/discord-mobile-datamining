import _slicedToArray from "_slicedToArray";
import "asyncRequireImpl";
import get_ActivityIndicator from "module_4461";
import { createChannelRecord } from "createChannelRecord";
import { useStageChannelUpsellCardStore as closure_7 } from "useStageChannelUpsellCardStore";
import { CREATE_GUILD_EVENT_MODAL_KEY as closure_8 } from "CREATE_GUILD_EVENT_MODAL_KEY";
import { ChannelTypes } from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let unpackModuleId;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
createCacheKey = { container: null, image: null, closeContainer: null, header: null, description: null, button: null };
createCacheKey = { flexDirection: "column", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: 16, margin: 16, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 16 };
createCacheKey[2] = { position: "absolute", top: 14, right: 14 };
createCacheKey[3] = { lineHeight: 20, marginBottom: 4 };
createCacheKey[4] = { textAlign: "center", marginBottom: 4 };
createCacheKey[5] = { marginTop: 12, alignSelf: "stretch" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx");

export default function StageChannelUpsell(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, onCreate: importDefault } = arg0);
  let dependencyMap;
  let tmp = createCacheKey();
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
    obj[0] = importDefault(7825);
    obj[3] = callback3(require(1297) /* Button */.Icon, obj);
    const items = [callback3(require(4783) /* PressableBase */.PressableOpacity, obj), , , , , ];
    const obj1 = { source: null, style: null };
    obj1[0] = importDefault(8582);
    obj1[1] = tmp.image;
    items[1] = callback3(closure_4, obj1);
    let obj2 = { style: null, variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.header;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj2[3] = intl.string(require(1236) /* getSystemLocale */.t.Sx8Ezi);
    items[2] = callback3(require(4251) /* Text */.Text, obj2);
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.description;
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj3[3] = intl2.string(require(1236) /* getSystemLocale */.t.JUzPhm);
    items[3] = callback3(require(4251) /* Text */.Text, obj3);
    const obj4 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj4[0] = tmp.description;
    const intl3 = require(1236) /* getSystemLocale */.intl;
    const obj5 = { suggestionsHook: null };
    obj5[0] = function suggestionsHook(children) {
      return callback2(callback(_undefined[14]).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    };
    obj4[3] = intl3.format(require(1236) /* getSystemLocale */.t.Vh7rP7, obj5);
    items[4] = callback3(require(4251) /* Text */.Text, obj4);
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.button;
    const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj7[2] = intl4.string(require(1236) /* getSystemLocale */.t["X/3SyA"]);
    obj7[3] = function onPress() {
      let obj = outer1_1(_undefined[17]);
      obj.popWithKey(outer1_8);
      obj = {
        guildId: closure_0,
        channelType: outer1_9.GUILD_STAGE_VOICE,
        onChannelCreated(id) {
          const tmp = outer1_6({ id, type: outer1_9.GUILD_STAGE_VOICE });
          if (null != tmp) {
            callback(tmp);
          }
        },
        onClose() {
          callback(table[17]).popWithKey(closure_12);
        }
      };
      outer1_1(_undefined[17]).pushLazy(outer1_0(_undefined[19])(_undefined[18], _undefined.paths), obj, outer1_12);
      _undefined();
      const obj2 = outer1_1(_undefined[17]);
      outer1_1(_undefined[20]).hideActionSheet();
    };
    obj6[1] = callback3(require(4666) /* Button */.Button, obj7);
    items[5] = callback3(closure_5, obj6);
    obj[1] = items;
    tmp4 = callback4(closure_5, obj);
  }
  return tmp4;
};