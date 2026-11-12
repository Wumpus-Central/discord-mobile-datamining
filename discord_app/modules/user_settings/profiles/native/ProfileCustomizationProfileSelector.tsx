// === Module 17078: ProfileCustomizationProfileSelector ===

// Module 17078 (ProfileCustomizationProfileSelector)
import nativeDefault from "native" /* 575 */;
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 6210 */;
import GuildIconDefault from "GuildIcon" /* 7654 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
let closure_4 = fn(17079).PROFILE_SELECTOR_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationProfileSelector.tsx");

export default function ProfileCustomizationProfileSelector(guild) {
  guild = guild.guild;
  ({ onBeforeOpen: importDefault, onSelectMainProfile: dependencyMap, onSelectGuild: View } = guild);
  const obj = { style: closure_6().container, children: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = tmp3(1113).intl;
    name = intl.string(tmp3(1113).t["2p07FR"]);
  }
  const obj2 = { label: name, labelLineClamp: 1, icon: null, trailing: null, accessibilityHint: null, onPress: null };
  if (null != guild) {
    const obj3 = { guild, size: tmp3(7654).GuildIconSizes.XSMALL };
    let tmpResult = jsx(GuildIconDefault, { guild, size: tmp3(7654).GuildIconSizes.XSMALL });
    let tmp8 = importDefault;
  } else {
    const obj4 = { size: "md", color: nativeDefault.colors.ICON_DEFAULT };
    tmpResult = jsx(tmp3(11673).ClydeIcon, { size: "md", color: nativeDefault.colors.ICON_DEFAULT });
    tmp8 = importDefault;
  }
  const obj5 = { hasIcons: true, children: null };
  obj2.icon = tmpResult;
  obj2.trailing = jsx(guild(10491).ChevronSmallDownIcon, { size: "sm", color: tmp8(575).colors.ICON_SUBTLE });
  const intl2 = tmp3(1113).intl;
  obj2.accessibilityHint = intl2.string(guild(1113).t["5h07Mp"]);
  obj2.onPress = function handlePress() {
    markAccessibilityFocusDefault();
    closure_1_1(() => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      if (id == null) {
        id = null;
      }
      require("ActionSheetActionCreators").openLazy(guild(paths[15])(paths[14], paths.paths), closure_2_4, { selectedGuildId: id, onSelectMainProfile, onSelectGuild });
    });
  };
  obj5.children = jsx(guild(7379).TableRow, { label: name, labelLineClamp: 1, icon: null, trailing: null, accessibilityHint: null, onPress: null });
  obj.children = jsx(guild(7680).TableRowGroup, { hasIcons: true, children: null });
  return <View style={closure_6().container}>{null}</View>;
};