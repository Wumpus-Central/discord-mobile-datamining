// discord_app/modules/directory_channels/native/components/GuildDirectoryTemplates.tsx
import native from "../../../../design/void/native.tsx";
import GuildDirectoryTemplatesIcons from "../GuildDirectoryTemplatesIcons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
class GuildTemplatesItem {
  constructor(arg0) {
    guildTemplate = global.guildTemplate;
    onGuildTemplatePress = global.onGuildTemplatePress;
    obj = {
      Icon() {
        return React7(native.Icon, {
          source: GuildDirectoryTemplatesIcons.GUILD_TEMPLATE_ICONS[guildTemplate.id],
          disableColor: true,
          style: { width: 48, height: 48 },
        });
      },
      message: guildTemplate.label,
      onPress() {
        return onGuildTemplatePress(guildTemplate);
      },
    };
    return jsx(onGuildTemplatePress(closure_2[6]), obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const GuildDirectoryConstants = fn(11788);
({ getHubGuildTemplatesMap: metroRequire, HubGuildTemplateId: closure_7 } = GuildDirectoryConstants);
const GuildDirectoryCreate = fn(11793).GuildDirectoryCreate;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4836);
let closure_11 = createStyles.createStyles({
  label: { marginTop: 16, marginLeft: 16, marginBottom: 8 },
  title: { marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center" },
  header: { alignItems: "center", justifyContent: "center", padding: 16 },
  templateGroup: { marginHorizontal: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryTemplates.tsx");

export default function GuildDirectoryTemplates(directoryGuildName) {
  _require = directoryGuildName;
  const tmp = closure_11();
  importDefault = noop.useRef(directoryGuildName);
  navigation = require("useNavigation").useNavigation();
  const tmp3 = closure_6();
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  });
  const items = [navigation];
  const callback = noop.useCallback((guildTemplate) => {
    navigation.push(GuildDirectoryCreate.CREATE, { onHubGuildInfoSet: ref.current.onHubGuildInfoSet, guildTemplate });
  }, items);
  const obj2 = { children: null };
  const obj3 = { contentContainerStyle: null, children: null };
  const obj = require("useNavigation");
  obj3.contentContainerStyle = { paddingBottom: require("useSafeAreaInsets")().bottom + 16 };
  const obj5 = { style: tmp.header, children: null };
  const obj6 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = require("util").intl;
  obj6.children = intl.format(require("util").t.T7aLYT, { guildName: directoryGuildName.directoryGuildName });
  const items1 = [closure_9(require("Text/Text").Text, obj6)];
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj8.children = intl2.string(require("util").t["RA+St6"]);
  items1[1] = closure_9(require("Text/Text").Text, obj8);
  obj5.children = items1;
  const items2 = [closure_10(closure_4, obj5), , ,];
  const obj9 = { style: tmp.templateGroup, children: null };
  const obj10 = { hasIcons: true, children: null };
  const obj11 = { guildTemplate: null, onGuildTemplatePress: null };
  const obj12 = {};
  const merged = Object.assign(tmp3[constants.CREATE]);
  const intl3 = require("util").intl;
  obj12.label = intl3.string(require("util").t.WqJbLi);
  obj11.guildTemplate = obj12;
  obj11.onGuildTemplatePress = callback;
  obj10.children = closure_9(GuildTemplatesItem, obj11);
  obj9.children = closure_9(require("TableRowGroup").TableRowGroup, obj10);
  items2[1] = closure_9(closure_4, obj9);
  const obj13 = { style: tmp.label, children: null };
  const obj4 = { paddingBottom: require("useSafeAreaInsets")().bottom + 16 };
  const obj7 = { guildName: directoryGuildName.directoryGuildName };
  const intl4 = require("util").intl;
  obj13.children = intl4.string(require("util").t.JGDkfg);
  items2[2] = closure_9(require("FreeFormLabel"), obj13);
  const obj14 = { style: tmp.templateGroup, children: null };
  const obj15 = { hasIcons: true, children: null };
  const items3 = [
    closure_9(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_STUDY], onGuildTemplatePress: callback }),
    closure_9(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_SCHOOL_CLUB], onGuildTemplatePress: callback }),
    closure_9(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_CLASS], onGuildTemplatePress: callback }),
    closure_9(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_SOCIAL], onGuildTemplatePress: callback }),
    closure_9(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_MAJOR], onGuildTemplatePress: callback }),
    closure_9(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_DORM], onGuildTemplatePress: callback }),
  ];
  obj15.children = items3;
  obj14.children = closure_10(require("TableRowGroup").TableRowGroup, obj15);
  items2[3] = closure_9(closure_4, obj14);
  obj3.children = items2;
  obj2.children = closure_10(closure_5, obj3);
  return closure_9(require("GuildDirectoryAddModal").GuildDirectoryAddModalScreen, obj2);
}
export { GuildTemplatesItem };
