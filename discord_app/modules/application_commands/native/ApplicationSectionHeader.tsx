// === Module 12396: ApplicationSectionHeader ===

// Module 12396 (ApplicationSectionHeader)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { applicationHeaderWrapper: null, applicationIcon: null };
createStyles = { flexDirection: "row", alignItems: "center", height: 32, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingHorizontal: 16 };
createStyles.applicationHeaderWrapper = createStyles;
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm, marginRight: 8 };
createStyles.applicationIcon = size;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default function ApplicationSectionHeader(section) {
  section = section.section;
  const guildId = section.guildId;
  const tmp = closure_7();
  let obj = section(504);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != guildId) {
      let botId;
      if (section != null) {
        botId = section.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const applicationCommandsIconSource = section(12231).getApplicationCommandsIconSource(section, stateFromStores);
  let nick;
  if (stateFromStores != null) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (section != null) {
    name = section.name;
  }
  obj = { style: tmp.applicationHeaderWrapper, accessibilityLabel: null, children: null };
  const intl = tmp2(1114).intl;
  obj.accessibilityLabel = intl.formatToPlainString(section(1114).t["Ocw/sM"], { applicationName: name });
  let tmp9 = null != applicationCommandsIconSource;
  if (tmp9) {
    obj = { style: tmp.applicationIcon, source: applicationCommandsIconSource };
    tmp9 = closure_5(guildId(5587), obj);
  }
  const items1 = [tmp9, closure_5(section(4556).Text, { variant: "eyebrow", color: "interactive-text-default", children: name })];
  obj.children = items1;
  return closure_6(View, obj);
};
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;