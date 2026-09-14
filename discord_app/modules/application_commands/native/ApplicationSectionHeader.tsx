// === Module 12526: ApplicationSectionHeader ===

// Module 12526 (ApplicationSectionHeader)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
const obj2 = { applicationHeaderWrapper: { flexDirection: "row", alignItems: "center", height: 32, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingHorizontal: 16 }, applicationIcon: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm, marginRight: 8 };
obj2.applicationIcon = size;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default function ApplicationSectionHeader(section) {
  section = section.section;
  const guildId = section.guildId;
  const tmp = closure_7();
  const items = [GuildMemberStore];
  const stateFromStores = section(504).useStateFromStores(items, () => {
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
  const obj = section(504);
  const applicationCommandsIconSource = section(12361).getApplicationCommandsIconSource(section, stateFromStores);
  let nick;
  if (stateFromStores != null) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (section != null) {
    name = section.name;
  }
  const obj3 = { style: tmp.applicationHeaderWrapper, accessibilityLabel: null, children: null };
  const intl = tmp2(1114).intl;
  obj3.accessibilityLabel = intl.formatToPlainString(section(1114).t["Ocw/sM"], { applicationName: name });
  let tmp9 = null != applicationCommandsIconSource;
  if (tmp9) {
    const obj4 = { style: tmp.applicationIcon, source: applicationCommandsIconSource };
    tmp9 = closure_5(guildId(5668), obj4);
  }
  const items1 = [tmp9, closure_5(section(4632).Text, { variant: "eyebrow", color: "interactive-text-default", children: name })];
  obj3.children = items1;
  return closure_6(View, obj3);
};
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;