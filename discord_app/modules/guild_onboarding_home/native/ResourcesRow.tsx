// === Module 16820: ResourcesRow ===

// Module 16820 (ResourcesRow)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12527 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16822 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
let closure_4 = fn(16821).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { display: "flex", flexDirection: "row", paddingBottom: 8, marginBottom: 16 }, channelItem: { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, marginLeft: 8, paddingVertical: 8, paddingHorizontal: 12 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/ResourcesRow.tsx");

export default function ResourcesRow(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_7();
  importDefault = tmp;
  const arr = useResourceChannelsDefault(guildId);
  let obj = { horizontal: true, style: tmp.container, children: null };
  const substr = arr.slice(0, 2);
  const items = [
    substr.map((children) => {
      const channelId = children;
      const obj = {
        style: channelItem.channelItem,
        onPress() {
          const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, channelId.channelId);
        },
        children: closure_1_5(guildId(4718).Text, { variant: "text-md/medium", color: "text-default", children: children.title })
      };
      return closure_1_5(guildId(5292).PressableOpacity, obj, children.channelId);
    }),

  ];
  let tmp6 = null;
  if (tmp3) {
    const obj2 = {
      style: tmp.channelItem,
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16823, dependencyMap.paths), closure_4, { guildId });
        },
      children: null
    };
    const obj3 = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = guildId(1115).intl;
    const obj4 = { count: arr.length - 2 };
    obj3.children = intl.format(guildId(1115).t.F6iMs4, obj4);
    obj2.children = closure_5(guildId(4718).Text, obj3);
    tmp6 = closure_5(guildId(5292).PressableOpacity, obj2);
  }
  items[1] = tmp6;
  obj.children = items;
  return closure_6(ScrollView, obj);
};