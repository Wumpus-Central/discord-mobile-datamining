// === Module 11259: AcceptGuildTemplate ===

// Module 11259 (AcceptGuildTemplate)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2103 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5884 */;
import FormDividerDefault from "FormDivider" /* 8051 */;
import _modDef8980 from "module_8980" /* 8980 */;
import RolePillDefault from "RolePill" /* 10398 */;
import InvalidLink from "InvalidLink" /* 11260 */;
import GuildIconUploaderDefault from "GuildIconUploader" /* 11262 */;
import _modDef11267 from "module_11267" /* 11267 */;
import _modDef11268 from "module_11268" /* 11268 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5831 */;

require = fn;
function GuildTemplateResolving() {
  return closure_1_11(React4, { style: closure_14().resolvingContainer, children: closure_1_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
}
function GuildTemplateResolved(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = closure_14();
  const typeConsolidationTextTransform = guildTemplate(6395).useTypeConsolidationTextTransform("AcceptGuildTemplate");
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((item) => GuildRoleRecordUtilsAll.fromServer(guildTemplate.serializedSourceGuild.id, item));
  const found = mapped.filter((item) => !isEveryoneRole(item));
  const obj2 = { contentContainerStyle: null, keyboardShouldPersistTaps: "handled", children: null };
  const items = [tmp.wrapper, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.contentContainerStyle = items;
  const obj3 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guildTemplate(1115).intl;
  obj3.children = intl.string(guildTemplate(1115).t.QzUORX);
  const items1 = [closure_11(guildTemplate(4825).Text, obj3), closure_11(guildTemplate(4825).Text, { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name }), closure_11(GuildIconUploaderDefault, { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon }), , , , , , , , , ];
  const obj6 = { label: null, errorMessage: null, value: null, onChange: null, autoFocus: true, autoCorrect: false, returnKeyType: "done", clearable: true };
  const intl2 = guildTemplate(1115).intl;
  obj6.label = intl2.string(guildTemplate(1115).t.dBih7e);
  let name1;
  if (errors != null) {
    name1 = errors.name;
  }
  obj6.errorMessage = name1;
  obj6.value = name;
  obj6.onChange = setName;
  items1[3] = closure_11(guildTemplate(6019).TextInput, obj6);
  const obj7 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1115).intl;
  obj7.children = intl3.format(guildTemplate(1115).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
  items1[4] = closure_11(guildTemplate(4825).Text, obj7);
  const obj9 = { style: tmp.createButtonWrapper, children: null };
  const obj10 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = tmp2(1115).intl;
  obj10.text = intl4.string(guildTemplate(1115).t["O0p/lS"]);
  obj10.onPress = createServer;
  obj10.loading = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj10.disabled = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj9.children = closure_11(guildTemplate(5274).Button, obj10);
  items1[5] = closure_11(closure_4, obj9);
  items1[6] = closure_11(FormDividerDefault, { style: tmp.divider, outer: true });
  const obj12 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp2(1115).intl;
  obj12.children = intl5.string(guildTemplate(1115).t.OGiMXJ);
  items1[7] = closure_11(guildTemplate(4825).Text, obj12);
  const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl6 = tmp2(1115).intl;
  obj13.children = intl6.string(guildTemplate(1115).t.Ztwyoz);
  items1[8] = closure_11(guildTemplate(4825).Text, obj13);
  items1[9] = closure_11(Channels, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj15 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default", children: null };
  const obj16 = { style: null, children: null };
  const items2 = [tmp.protip, typeConsolidationTextTransform];
  obj16.style = items2;
  const intl7 = tmp2(1115).intl;
  const items3 = [intl7.string(guildTemplate(1115).t["8tvIiN"]), ": "];
  obj16.children = items3;
  const items4 = [closure_12(guildTemplate(1177).LegacyText, obj16), ];
  const intl8 = tmp2(1115).intl;
  items4[1] = intl8.string(guildTemplate(1115).t.de7DpI);
  obj15.children = items4;
  items1[10] = closure_12(guildTemplate(4825).Text, obj15);
  let tmp9Result = null;
  if (found.length > 0) {
    const obj17 = { children: null };
    const obj18 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl9 = tmp2(1115).intl;
    obj18.children = intl9.string(tmp2(1115).t.mQ0H1p);
    const items5 = [closure_11(tmp2(4825).Text, obj18), , ];
    const obj19 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp2(1115).intl;
    obj19.children = intl10.string(tmp2(1115).t.jOPEYC);
    items5[1] = closure_11(tmp2(4825).Text, obj19);
    const obj20 = { roles: found };
    items5[2] = closure_11(Roles, obj20);
    obj17.children = items5;
    tmp9Result = closure_12(closure_13, obj17);
  }
  items1[11] = tmp9Result;
  obj2.children = items1;
  return closure_12(closure_5, obj2);
}
function Channels(channels) {
  const tmp = closure_14();
  closure_0 = tmp;
  let obj = _modDef12(channels.channels);
  const sortByResult = _modDef12(channels.channels).sortBy((parent_id) => {
    if (null == parent_id.parent_id) {
      const _Number2 = Number;
      let result = 10000 * Number(parent_id.id);
    } else {
      const _Number = Number;
      result = 10000 * Number(parent_id.parent_id) + parent_id.id;
    }
    return result;
  });
  let obj2 = {
    style: null,
    children: _modDef12(channels.channels).sortBy((parent_id) => {
      if (null == parent_id.parent_id) {
        const _Number2 = Number;
        let result = 10000 * Number(parent_id.id);
      } else {
        const _Number = Number;
        result = 10000 * Number(parent_id.parent_id) + parent_id.id;
      }
      return result;
    }).map((children) => {
      const obj = { style: closure_0.channelRow, children: null };
      const items = [closure_0.channelIcon, ];
      let channelCategoryIcon = null;
      if (children.type === constants2.GUILD_CATEGORY) {
        channelCategoryIcon = closure_0.channelCategoryIcon;
      }
      const obj2 = { style: items, color: nativeDefault.unsafe_rawColors.PRIMARY_400, size: native.Icon.Sizes.CUSTOM, source: null };
      items[1] = channelCategoryIcon;
      const type = children.type;
      if (isGuildVocalChannelType(type)) {
        let tmp10Result = _modDef8980;
      } else if (type === constants2.GUILD_CATEGORY) {
        tmp10Result = _modDef11267;
      } else {
        tmp10Result = _modDef11268;
      }
      obj2.source = tmp10Result;
      const items1 = [closure_2_11(native.Icon, obj2), ];
      const items2 = [closure_0.channelName, ];
      let channelCategoryName = null;
      if (children.type === constants2.GUILD_CATEGORY) {
        channelCategoryName = closure_0.channelCategoryName;
      }
      items2[1] = channelCategoryName;
      items1[1] = closure_2_11(native.LegacyText, { numberOfLines: 1, style: items2, children: children.name });
      obj.children = items1;
      return closure_2_12(React4, obj, children.id);
    }).value()
  };
  let items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  obj2.style = items;
  return closure_11(closure_4, obj2);
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
const isGuildVocalChannelType = fn(2048).isGuildVocalChannelType;
const isEveryoneRole = fn(2102).isEveryoneRole;
const Constants = fn(1074);
({ MarketingURLs: closure_8, Fonts, ChannelTypes: closure_9 } = Constants);
const GuildTemplateStates = fn(6739).GuildTemplateStates;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4829);
let obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 }, header: null, description: null, iconUploader: null, hint: null, createButtonWrapper: null, resolvingContainer: null, divider: null, sectionHeader: null, rolesChannelsWrapper: null, channelsWrapper: null, rolesWrapper: null, channelRow: null, channelIcon: null, channelCategoryIcon: null, channelName: null, channelCategoryName: null, sectionTip: null, protip: null };
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.header = { textAlign: "center" };
obj.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj.iconUploader = { alignSelf: "center", marginBottom: 12 };
obj.hint = { marginVertical: 8 };
obj.createButtonWrapper = { marginTop: 8 };
obj.resolvingContainer = { alignItems: "center", flex: 1, justifyContent: "center" };
obj.divider = { marginTop: 8 };
const obj5 = {};
let TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj5.marginTop = 24;
obj.sectionHeader = obj5;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
const obj4 = { textAlign: "center" };
obj.rolesChannelsWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelsWrapper = { flexDirection: "column", paddingVertical: 0 };
obj.rolesWrapper = { flexDirection: "row", flexWrap: "wrap" };
obj.channelRow = { alignItems: "center", flexDirection: "row", height: 40 };
obj.channelIcon = { marginLeft: 12, marginRight: 8, height: 20, width: 20 };
obj.channelCategoryIcon = { marginLeft: 0, marginRight: 2, height: 12, width: 12 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelName = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj.channelCategoryName = {};
obj.sectionTip = { marginTop: 8 };
let obj7 = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
const obj8 = {};
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
            const obj2 = {};
            const merged = Object.assign(guildTemplate);
            return closure_1_11(GuildTemplateResolving, obj2);
          } else if (GuildTemplateStates.EXPIRED === state) {
            return closure_1_11(closure_16, {});
          }
        }
      }
    }
    const obj3 = {};
    const merged1 = Object.assign(guildTemplate);
    return closure_1_11(GuildTemplateResolved, obj3);
  }
  const merged2 = Object.assign(guildTemplate);
  return closure_1_11(GuildTemplateResolving, {});
};