// === Module 12119: GuildTemplatesItem ===

// Module 12119 (GuildTemplatesItem)
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import DirectoryEntryTypes from "DirectoryEntryTypes" /* 12101 */;
import { GuildDirectoryCreate } from "GuildDirectoryCreate" /* 12106 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
class GuildTemplatesItem {
  constructor(arg0) {
    guildTemplate = global.guildTemplate;
    onGuildTemplatePress = global.onGuildTemplatePress;
    obj = {
      Icon(qXtNtS) {
            return closure_1_9(guildTemplate(closure_1_2[7]).Icon, { source: guildTemplate(closure_1_2[8]).GUILD_TEMPLATE_ICONS[guildTemplate.id], disableColor: true, style: { width: 48, height: 48 } });
          },
      message: guildTemplate.label,
      onPress() {
            return onGuildTemplatePress(guildTemplate);
          }
    };
    return jsx(require("ListSelectionItem"), obj);
  }
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ getHubGuildTemplatesMap: closure_6, HubGuildTemplateId: error } = DirectoryEntryTypes);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ label: { marginTop: 16, marginLeft: 16, marginBottom: 8 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 }, templateGroup: { marginHorizontal: 16 } });
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryTemplates.tsx");

export default function GuildDirectoryTemplates(directoryGuildName) {
  const _require = directoryGuildName;
  const tmp = callback4();
  importDefault = React.useRef(directoryGuildName);
  let obj = _require(navigation[9]);
  navigation = obj.useNavigation();
  const tmp3 = callback();
  const effect = React.useEffect(() => {
    closure_1.current = closure_0;
  });
  const items = [navigation];
  callback = React.useCallback((guildTemplate) => {
    navigation.push(closure_1_8.CREATE, { onHubGuildInfoSet: ref.current.onHubGuildInfoSet, guildTemplate });
  }, items);
  obj = { children: null };
  obj = { contentContainerStyle: obj1, children: null };
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = _require(navigation[13]).intl;
  obj3[4] = intl.format(_require(navigation[13]).t.T7aLYT, { guildName: directoryGuildName.directoryGuildName });
  const items1 = [callback2(_require(navigation[12]).Text, obj3), ];
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _require(navigation[13]).intl;
  obj5[3] = intl2.string(_require(navigation[13]).t["RA+St6"]);
  items1[1] = callback2(_require(navigation[12]).Text, obj5);
  obj2[1] = items1;
  const items2 = [callback3(closure_4, obj2), , , ];
  const obj6 = { style: tmp.templateGroup, children: null };
  const obj7 = { hasIcons: true, children: null };
  const obj8 = { guildTemplate: null, onGuildTemplatePress: null };
  const obj9 = {};
  const merged = Object.assign(tmp3[constants.CREATE]);
  const intl3 = _require(navigation[13]).intl;
  obj9.label = intl3.string(_require(navigation[13]).t.WqJbLi);
  obj8[0] = obj9;
  obj8[1] = callback;
  obj7[1] = callback2(GuildTemplatesItem, obj8);
  obj6[1] = callback2(_require(navigation[14]).TableRowGroup, obj7);
  items2[1] = callback2(closure_4, obj6);
  const obj10 = { style: tmp.label, children: null };
  obj1 = { paddingBottom: importDefault(navigation[10])().bottom + 16 };
  const obj4 = { guildName: directoryGuildName.directoryGuildName };
  const intl4 = _require(navigation[13]).intl;
  obj10[1] = intl4.string(_require(navigation[13]).t.JGDkfg);
  items2[2] = callback2(importDefault(navigation[15]), obj10);
  const obj11 = { style: tmp.templateGroup, children: null };
  const obj12 = { hasIcons: true, children: null };
  const items3 = [callback2(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_STUDY], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_SCHOOL_CLUB], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_CLASS], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_SOCIAL], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_MAJOR], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[constants.HUB_DORM], onGuildTemplatePress: callback })];
  obj12[1] = items3;
  obj11[1] = callback3(_require(navigation[14]).TableRowGroup, obj12);
  items2[3] = callback2(closure_4, obj11);
  obj[1] = items2;
  obj[0] = callback3(closure_5, obj);
  return callback2(_require(navigation[11]).GuildDirectoryAddModalScreen, obj);
};
export { GuildTemplatesItem };