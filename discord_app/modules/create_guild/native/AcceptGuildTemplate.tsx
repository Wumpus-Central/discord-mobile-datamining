// === Module 11889: AcceptGuildTemplate ===

// Module 11889 (AcceptGuildTemplate)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2017 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5628 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6676 */;
import FormDividerDefault from "FormDivider" /* 8690 */;
import _modDef9804 from "module_9804" /* 9804 */;
import RolePillDefault from "RolePill" /* 11039 */;
import InvalidLink from "InvalidLink" /* 11890 */;
import GuildIconUploaderDefault from "GuildIconUploader" /* 11892 */;
import _modDef11897 from "module_11897" /* 11897 */;
import _modDef11898 from "module_11898" /* 11898 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5575 */;

require = fn;
function GuildTemplateResolving() {
  return closure_1_11(React4, { style: closure_14().resolvingContainer, children: closure_1_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
}
function GuildTemplateResolved(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = closure_14();
  let obj = guildTemplate(7052);
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("AcceptGuildTemplate");
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((item) => GuildRoleRecordUtilsAll.fromServer(guildTemplate.serializedSourceGuild.id, item));
  const found = mapped.filter((item) => !isEveryoneRole(item));
  obj = { contentContainerStyle: null, keyboardShouldPersistTaps: "handled", children: null };
  const items = [tmp.wrapper, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj.contentContainerStyle = items;
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guildTemplate(1114).intl;
  obj.children = intl.string(guildTemplate(1114).t.QzUORX);
  const items1 = [closure_11(guildTemplate(4602).Text, obj), closure_11(guildTemplate(4602).Text, { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name }), closure_11(GuildIconUploaderDefault, { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon }), , , , , , , , ];
  const obj3 = { label: null, error: null, hint: null, value: null, onChangeText: null, autoFocus: true, autoCorrect: false, returnKeyType: "done" };
  const intl2 = guildTemplate(1114).intl;
  obj3.label = intl2.string(guildTemplate(1114).t.dBih7e);
  name = undefined;
  if (errors != null) {
    name = errors.name;
  }
  obj3.error = name;
  const intl3 = tmp2(1114).intl;
  obj3.hint = intl3.format(guildTemplate(1114).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
  obj3.value = name;
  obj3.onChangeText = setName;
  items1[3] = closure_11(FreeFormInputGroupDefault, obj3);
  const obj5 = { style: tmp.createButtonWrapper, children: null };
  const obj6 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = tmp2(1114).intl;
  obj6.text = intl4.string(guildTemplate(1114).t["O0p/lS"]);
  obj6.onPress = createServer;
  obj6.loading = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj6.disabled = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj5.children = closure_11(guildTemplate(5026).Button, obj6);
  items1[4] = closure_11(closure_4, obj5);
  items1[5] = closure_11(FormDividerDefault, { style: tmp.divider, outer: true });
  const obj8 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp2(1114).intl;
  obj8.children = intl5.string(guildTemplate(1114).t.OGiMXJ);
  items1[6] = closure_11(guildTemplate(4602).Text, obj8);
  const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl6 = tmp2(1114).intl;
  obj9.children = intl6.string(guildTemplate(1114).t.Ztwyoz);
  items1[7] = closure_11(guildTemplate(4602).Text, obj9);
  items1[8] = closure_11(Channels, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj11 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default", children: null };
  const obj12 = { style: null, children: null };
  const items2 = [tmp.protip, typeConsolidationTextTransform];
  obj12.style = items2;
  const intl7 = tmp2(1114).intl;
  const items3 = [intl7.string(guildTemplate(1114).t["8tvIiN"]), ": "];
  obj12.children = items3;
  const items4 = [closure_12(guildTemplate(1178).LegacyText, obj12), ];
  const intl8 = tmp2(1114).intl;
  items4[1] = intl8.string(guildTemplate(1114).t.de7DpI);
  obj11.children = items4;
  items1[9] = closure_12(guildTemplate(4602).Text, obj11);
  let tmp9Result = null;
  if (found.length > 0) {
    const obj13 = { children: null };
    const obj14 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl9 = tmp2(1114).intl;
    obj14.children = intl9.string(tmp2(1114).t.mQ0H1p);
    const items5 = [closure_11(tmp2(4602).Text, obj14), , ];
    const obj15 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp2(1114).intl;
    obj15.children = intl10.string(tmp2(1114).t.jOPEYC);
    items5[1] = closure_11(tmp2(4602).Text, obj15);
    const obj16 = { roles: found };
    items5[2] = closure_11(Roles, obj16);
    obj13.children = items5;
    tmp9Result = closure_12(closure_13, obj13);
  }
  items1[10] = tmp9Result;
  obj.children = items1;
  return closure_12(closure_5, obj);
}
function Channels(channels) {
  const tmp = closure_14();
  closure_0 = tmp;
  let obj = _modDef12(channels.channels);
  const sortByResult = obj.sortBy((parent_id) => {
    if (null == parent_id.parent_id) {
      const _Number2 = Number;
      let result = 10000 * Number(parent_id.id);
    } else {
      const _Number = Number;
      result = 10000 * Number(parent_id.parent_id) + parent_id.id;
    }
    return result;
  });
  obj = {
    style: null,
    children: obj.sortBy((parent_id) => {
      if (null == parent_id.parent_id) {
        const _Number2 = Number;
        let result = 10000 * Number(parent_id.id);
      } else {
        const _Number = Number;
        result = 10000 * Number(parent_id.parent_id) + parent_id.id;
      }
      return result;
    }).map((children) => {
      let obj = { style: closure_0.channelRow, children: null };
      const items = [closure_0.channelIcon, ];
      let channelCategoryIcon = null;
      if (children.type === constants2.GUILD_CATEGORY) {
        channelCategoryIcon = closure_0.channelCategoryIcon;
      }
      obj = { style: items, color: nativeDefault.unsafe_rawColors.PRIMARY_400, size: native.Icon.Sizes.CUSTOM, source: null };
      items[1] = channelCategoryIcon;
      const type = children.type;
      if (isGuildVocalChannelType(type)) {
        let tmp10Result = _modDef9804;
      } else if (type === constants2.GUILD_CATEGORY) {
        tmp10Result = _modDef11897;
      } else {
        tmp10Result = _modDef11898;
      }
      obj.source = tmp10Result;
      const items1 = [closure_2_11(native.Icon, obj), ];
      const items2 = [closure_0.channelName, ];
      let channelCategoryName = null;
      if (children.type === constants2.GUILD_CATEGORY) {
        channelCategoryName = closure_0.channelCategoryName;
      }
      obj = { numberOfLines: 1, style: items2, children: children.name };
      items2[1] = channelCategoryName;
      items1[1] = closure_2_11(native.LegacyText, obj);
      obj.children = items1;
      return closure_2_12(React4, obj, children.id);
    }).value()
  };
  let items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  obj.style = items;
  return closure_11(closure_4, obj);
}
function Roles(roles) {
  roles = roles.roles;
  const substr = roles.slice();
  const reversed = substr.reverse();
  let obj = {
    style: null,
    children: reversed.map((role) => {
      const obj = { disableInteraction: true, role, color: null };
      let int2hexResult;
      if (0 !== role.color) {
        int2hexResult = utils_ColorUtils.int2hex(role.color);
      }
      obj.color = int2hexResult;
      return closure_1_11(RolePillDefault, obj, role.id);
    })
  };
  const items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = closure_14());
  obj.style = items;
  return closure_1_11(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const isGuildVocalChannelType = fn(1961).isGuildVocalChannelType;
const isEveryoneRole = fn(2016).isEveryoneRole;
const Constants = fn(1074);
({ MarketingURLs: closure_8, Fonts, ChannelTypes: closure_9 } = Constants);
const GuildTemplateStates = fn(7399).GuildTemplateStates;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4606);
let obj = { wrapper: null, header: null, description: null, iconUploader: null, createButtonWrapper: null, resolvingContainer: null, divider: null, sectionHeader: null, rolesChannelsWrapper: null, channelsWrapper: null, rolesWrapper: null, channelRow: null, channelIcon: null, channelCategoryIcon: null, channelName: null, channelCategoryName: null, sectionTip: null, protip: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj.wrapper = obj;
const createStyles = { textAlign: "center" };
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.header = createStyles;
obj.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj.iconUploader = { alignSelf: "center", marginBottom: 12 };
obj.createButtonWrapper = { marginTop: 8 };
obj.resolvingContainer = { alignItems: "center", flex: 1, justifyContent: "center" };
obj.divider = { marginTop: 8 };
let obj2 = {};
let merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj2.marginTop = 24;
obj.sectionHeader = obj2;
obj.rolesChannelsWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelsWrapper = { flexDirection: "column", paddingVertical: 0 };
obj.rolesWrapper = { flexDirection: "row", flexWrap: "wrap" };
obj.channelRow = { alignItems: "center", flexDirection: "row", height: 40 };
obj.channelIcon = { marginLeft: 12, marginRight: 8, height: 20, width: 20 };
obj.channelCategoryIcon = { marginLeft: 0, marginRight: 2, height: 12, width: 12 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelName = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj.channelCategoryName = {};
obj.sectionTip = { marginTop: 8 };
const obj4 = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let obj5 = {};
obj.protip = { color: nativeDefault.unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
let closure_14 = createStyles.createStyles(obj);
let closure_16 = noop.memo(() => {
  const obj = { Illustration: InvalidLink.InvalidLink, title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.C7ZRNw);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.A6MwXE);
  return closure_1_11(native.EmptyState, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

export default function AcceptGuildTemplate(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    const state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (GuildTemplateStates.ACCEPTING !== state) {
        if (GuildTemplateStates.ACCEPTED !== state) {
          if (GuildTemplateStates.RESOLVING === state) {
            let obj = {};
            const merged = Object.assign(guildTemplate);
            return closure_1_11(GuildTemplateResolving, obj);
          } else if (GuildTemplateStates.EXPIRED === state) {
            return closure_1_11(closure_16, {});
          }
        }
      }
    }
    obj = {};
    const merged1 = Object.assign(guildTemplate);
    return closure_1_11(GuildTemplateResolved, obj);
  }
  obj = {};
  const merged2 = Object.assign(guildTemplate);
  return closure_1_11(GuildTemplateResolving, obj);
};