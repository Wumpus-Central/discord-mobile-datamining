// === Module 15882: ResourcesRow ===

// Module 15882 (ResourcesRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useResourceChannelsDefault from "useResourceChannels" /* 15884 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { ONBOARDING_HOME_RESOURCES_SHEET_KEY as closure_4 } from "ONBOARDING_HOME_RESOURCES_SHEET_KEY" /* 15883 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { display: "flex", flexDirection: "row", paddingBottom: 8, marginBottom: 16 }, channelItem: null };
createCacheKey = { display: "flex", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.round, marginLeft: 8, paddingVertical: 8, paddingHorizontal: 12 };
createCacheKey[1] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/ResourcesRow.tsx");

export default function ResourcesRow(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  const tmp = callback2();
  importDefault = tmp;
  const arr = useResourceChannelsDefault(guildId);
  let obj = { horizontal: true, style: tmp.container, children: null };
  const substr = arr.slice(0, 2);
  const items = [
    substr.map((children) => {
      closure_0 = children;
      let obj = {
        style: lib.channelItem,
        onPress() {
          const homeResourceChannel = guildId(closure_2_2[7]).selectHomeResourceChannel(channelId, channelId.channelId);
        },
        children: null
      };
      obj = { variant: "text-md/medium", color: "text-default", children: children.title };
      obj[2] = closure_1_5(guildId(closure_1_2[12]).Text, obj);
      return closure_1_5(guildId(closure_1_2[11]).PressableOpacity, obj, children.channelId);
    }),

  ];
  let tmp6 = null;
  if (tmp3) {
    obj = { style: null, onPress: null, children: null };
    obj[0] = tmp.channelItem;
    obj[1] = function onPress() {
      let obj = lib(closure_1_2[8]);
      obj = { guildId };
      obj.openLazy(guildId(closure_1_2[10])(closure_1_2[9], closure_1_2.paths), closure_1_4, obj);
    };
    obj = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = guildId(1236).intl;
    obj1 = { count: null };
    obj1[0] = arr.length - 2;
    obj[2] = intl.format(guildId(1236).t.F6iMs4, obj1);
    obj[2] = callback(guildId(4739).Text, obj);
    tmp6 = callback(guildId(5438).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj[2] = items;
  return closure_6(ScrollView, obj);
};