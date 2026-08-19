// === Module 15813: ResourcesRow ===

// Module 15813 (ResourcesRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useResourceChannelsDefault from "useResourceChannels" /* 15815 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { ONBOARDING_HOME_RESOURCES_SHEET_KEY as closure_4 } from "ONBOARDING_HOME_RESOURCES_SHEET_KEY" /* 15814 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { display: "flex", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.round, marginLeft: 8, paddingVertical: 8, paddingHorizontal: 12 };
createCacheKey[1] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/native/ResourcesRow.tsx");

export default function ResourcesRow(guildId) {
  guildId = guildId.guildId;
  const tmp = callback2();
  importDefault = tmp;
  const arr = useResourceChannelsDefault(guildId);
  let obj = { horizontal: true, style: tmp.container, children: null };
  const substr = arr.slice(0, 2);
  const items = [
    substr.map((item, index) => {
      closure_0 = item;
      const obj = { variant: "text-md/medium", color: "text-default", children: item.title };
      obj[2] = closure_1_5(guildId(dependencyMap[12]).Text, obj);
      return closure_1_5(guildId(dependencyMap[11]).PressableOpacity, obj, item.channelId);
    }),

  ];
  let tmp6 = null;
  if (tmp3) {
    obj = { style: null, onPress: null, children: null };
    obj[0] = tmp.channelItem;
    obj[1] = function onPress() {
      lib(dependencyMap[8]);
      const obj = { guildId };
      obj.openLazy(guildId(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), closure_1_4, obj);
    };
    obj = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = guildId(1236).intl;
    obj1 = { count: null };
    obj1[0] = arr.length - 2;
    obj[2] = intl.format(guildId(1236).t.F6iMs4, obj1);
    obj[2] = callback(guildId(4734).Text, obj);
    tmp6 = callback(guildId(5433).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj[2] = items;
  return callback(ScrollView, obj);
};