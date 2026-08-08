// discord_app/modules/guild_onboarding_home/native/ResourcesRow.tsx
import "noop";
import { ScrollView } from "get ActivityIndicator";
import { ONBOARDING_HOME_RESOURCES_SHEET_KEY as closure_4 } from "ONBOARDING_HOME_RESOURCES_SHEET_KEY";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useResourceChannels } from "../useResourceChannels.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { display: "flex", flexDirection: "row", paddingBottom: 8, marginBottom: 16 }, channelItem: null };
createCacheKey = { display: "flex", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.round, marginLeft: 8, paddingVertical: 8, paddingHorizontal: 12 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ONBOARDING_HOME_RESOURCES_SHEET_KEY").fileFinishedImporting("modules/guild_onboarding_home/native/ResourcesRow.tsx");

export default function ResourcesRow(guildId) {
  guildId = guildId.guildId;
  let importDefault;
  const tmp = createCacheKey();
  importDefault = tmp;
  const arr = useResourceChannels(guildId);
  let obj = { horizontal: true, style: tmp.container, children: null };
  const substr = arr.slice(0, 2);
  const items = [
    substr.map((children) => {
      let closure_0 = children;
      let obj = {
        style: _undefined.channelItem,
        onPress() {
          const homeResourceChannel = guildId(outer2_2[7]).selectHomeResourceChannel(channelId, channelId.channelId);
        },
        children: null
      };
      obj = { variant: "text-md/medium", color: "text-default", children: children.title };
      obj[2] = outer1_5(guildId(outer1_2[12]).Text, obj);
      return outer1_5(guildId(outer1_2[11]).PressableOpacity, obj, children.channelId);
    }),

  ];
  let tmp6 = null;
  if (tmp3) {
    obj = { style: null, onPress: null, children: null };
    obj[0] = tmp.channelItem;
    obj[1] = function onPress() {
      let obj = _undefined(outer1_2[8]);
      obj = { guildId };
      obj.openLazy(guildId(outer1_2[10])(outer1_2[9], outer1_2.paths), outer1_4, obj);
    };
    obj = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = guildId(1236).intl;
    const obj1 = { count: null };
    obj1[0] = arr.length - 2;
    obj[2] = intl.format(guildId(1236).t.F6iMs4, obj1);
    obj[2] = callback(guildId(4299).Text, obj);
    tmp6 = callback(guildId(4846).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj[2] = items;
  return closure_6(ScrollView, obj);
};