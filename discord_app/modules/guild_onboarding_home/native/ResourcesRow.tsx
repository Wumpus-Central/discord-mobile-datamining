// discord_app/modules/guild_onboarding_home/native/ResourcesRow.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildOnboardingHomeActionCreators from "../GuildOnboardingHomeActionCreators.tsx";
import OnboardingHomeConstants from "OnboardingHomeConstants.tsx";
import useResourceChannelsDefault from "../useResourceChannels.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
let closure_4 = OnboardingHomeConstants.ONBOARDING_HOME_RESOURCES_SHEET_KEY;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  container: { display: "flex", flexDirection: "row", paddingBottom: 8, marginBottom: 16 },
  channelItem: obj2,
};
obj2 = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.round,
  marginLeft: 8,
  paddingVertical: 8,
  paddingHorizontal: 12,
};
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/ResourcesRow.tsx");

export default function ResourcesRow(guildId) {
  let Text;
  let channelItem;
  let intl;
  let items;
  let obj3;
  let obj4;
  guildId = guildId.guildId;
  const tmp = closure_7();
  importDefault = tmp;
  const arr = useResourceChannelsDefault(guildId);
  let obj = { horizontal: true, style: tmp.container, children: items };
  const tmp3 = arr.length > 2;
  const substr = arr.slice(0, 2);
  items = [
    substr.map((children) => {
      let obj2;
      let obj = {
        style: channelItem.channelItem,
        onPress() {
          const channelId = children.channelId;
          const obj = GuildOnboardingHomeActionCreators;
          const homeResourceChannel = obj.selectHomeResourceChannel(guildId, channelId);
        },
        children: closure_1_5(guildId(dependencyMap[12]).Text, obj2),
      };
      const PressableOpacity = guildId(dependencyMap[11]).PressableOpacity;
      obj2 = { variant: "text-md/medium", color: "text-default", children: children.title };
      return closure_1_5(PressableOpacity, obj, children.channelId);
    }),
  ];
  let tmp6 = null;
  if (tmp3) {
    let obj2 = {
      style: tmp.channelItem,
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { guildId };
        obj.openLazy(asyncRequire(16555, dependencyMap.paths), closure_4, obj2);
      },
      children: closure_5(Text, obj3),
    };
    let PressableOpacity = guildId(5916).PressableOpacity;
    obj3 = { variant: "text-md/medium", color: "text-default", children: intl.format(guildId(1126).t.F6iMs4, obj4) };
    Text = guildId(4892).Text;
    intl = guildId(1126).intl;
    obj4 = { count: arr.length - 2 };
    tmp6 = closure_5(PressableOpacity, obj2);
  }
  items[1] = tmp6;
  return closure_6(ScrollView, obj);
}
