// === Module 16557: ResourcesRow ===

// Module 16557 (ResourcesRow)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12284 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16559 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
let closure_4 = fn(16558).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { display: "flex", flexDirection: "row", paddingBottom: 8, marginBottom: 16 }, channelItem: null };
createStyles = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, marginLeft: 8, paddingVertical: 8, paddingHorizontal: 12 };
createStyles.channelItem = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
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
      let obj = {
        style: channelItem.channelItem,
        onPress() {
          const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, channelId.channelId);
        },
        children: null
      };
      obj = { variant: "text-md/medium", color: "text-default", children: children.title };
      obj.children = closure_1_5(guildId(4556).Text, obj);
      return closure_1_5(guildId(5123).PressableOpacity, obj, children.channelId);
    }),

  ];
  let tmp6 = null;
  if (tmp3) {
    obj = {
      style: tmp.channelItem,
      onPress() {
          const obj = { guildId };
          obj.openLazy(asyncRequireImpl(16560, dependencyMap.paths), closure_4, obj);
        },
      children: null
    };
    obj = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = guildId(1114).intl;
    const obj1 = { count: arr.length - 2 };
    obj.children = intl.format(guildId(1114).t.F6iMs4, obj1);
    obj.children = closure_5(guildId(4556).Text, obj);
    tmp6 = closure_5(guildId(5123).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj.children = items;
  return closure_6(ScrollView, obj);
};