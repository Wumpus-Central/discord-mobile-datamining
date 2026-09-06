// === Module 11795: AcceptGuildTemplate ===

// Module 11795 (AcceptGuildTemplate)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2017 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5577 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6605 */;
import FormDividerDefault from "FormDivider" /* 8599 */;
import _modDef9713 from "module_9713" /* 9713 */;
import RolePillDefault from "RolePill" /* 10947 */;
import InvalidLink from "InvalidLink" /* 11796 */;
import GuildIconUploaderDefault from "GuildIconUploader" /* 11798 */;
import _modDef11803 from "module_11803" /* 11803 */;
import _modDef11804 from "module_11804" /* 11804 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function GuildTemplateResolving() {
  return closure_1_11(React4, { style: closure_14().resolvingContainer, children: closure_1_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
}
function GuildTemplateResolved(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = closure_14();
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((item) => GuildRoleRecordUtilsAll.fromServer(guildTemplate.serializedSourceGuild.id, item));
  const found = mapped.filter((item) => !isEveryoneRole(item));
  let obj = { contentContainerStyle: null, keyboardShouldPersistTaps: "handled", children: null };
  const items = [tmp.wrapper, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj.contentContainerStyle = items;
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guildTemplate(1114).intl;
  obj.children = intl.string(guildTemplate(1114).t.QzUORX);
  const items1 = [closure_11(guildTemplate(4556).Text, obj), , , , , , , , , , ];
  obj = { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name };
  items1[1] = closure_11(guildTemplate(4556).Text, obj);
  items1[2] = closure_11(GuildIconUploaderDefault, { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon });
  const obj2 = { label: null, error: null, hint: null, value: null, onChangeText: null, autoFocus: true, autoCorrect: false, returnKeyType: "done" };
  const intl2 = guildTemplate(1114).intl;
  obj2.label = intl2.string(guildTemplate(1114).t.dBih7e);
  name = undefined;
  if (errors != null) {
    name = errors.name;
  }
  obj2.error = name;
  const intl3 = tmp10(1114).intl;
  obj2.hint = intl3.format(guildTemplate(1114).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
  obj2.value = name;
  obj2.onChangeText = setName;
  items1[3] = closure_11(FreeFormInputGroupDefault, obj2);
  const obj4 = { style: tmp.createButtonWrapper, children: null };
  const obj5 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = tmp10(1114).intl;
  obj5.text = intl4.string(guildTemplate(1114).t["O0p/lS"]);
  obj5.onPress = createServer;
  obj5.loading = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj5.disabled = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj4.children = closure_11(guildTemplate(4975).Button, obj5);
  items1[4] = closure_11(closure_4, obj4);
  items1[5] = closure_11(FormDividerDefault, { style: tmp.divider, outer: true });
  const obj7 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp10(1114).intl;
  obj7.children = intl5.string(guildTemplate(1114).t.OGiMXJ);
  items1[6] = closure_11(guildTemplate(4556).Text, obj7);
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl6 = tmp10(1114).intl;
  obj8.children = intl6.string(guildTemplate(1114).t.Ztwyoz);
  items1[7] = closure_11(guildTemplate(4556).Text, obj8);
  items1[8] = closure_11(Channels, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj10 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default", children: null };
  const obj11 = { style: tmp.protip, children: null };
  const intl7 = tmp10(1114).intl;
  const items2 = [intl7.string(guildTemplate(1114).t["8tvIiN"]), ": "];
  obj11.children = items2;
  const items3 = [closure_12(guildTemplate(1178).LegacyText, obj11), ];
  const intl8 = tmp10(1114).intl;
  items3[1] = intl8.string(guildTemplate(1114).t.de7DpI);
  obj10.children = items3;
  items1[9] = closure_12(guildTemplate(4556).Text, obj10);
  let tmp7Result = null;
  if (found.length > 0) {
    const obj12 = { children: null };
    const obj13 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl9 = tmp10(1114).intl;
    obj13.children = intl9.string(tmp10(1114).t.mQ0H1p);
    const items4 = [closure_11(tmp10(4556).Text, obj13), , ];
    const obj14 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp10(1114).intl;
    obj14.children = intl10.string(tmp10(1114).t.jOPEYC);
    items4[1] = closure_11(tmp10(4556).Text, obj14);
    const obj15 = { roles: found };
    items4[2] = closure_11(Roles, obj15);
    obj12.children = items4;
    tmp7Result = closure_12(closure_13, obj12);
  }
  items1[10] = tmp7Result;
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
        let tmp10Result = _modDef9713;
      } else if (type === constants2.GUILD_CATEGORY) {
        tmp10Result = _modDef11803;
      } else {
        tmp10Result = _modDef11804;
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
const GuildTemplateStates = fn(7326).GuildTemplateStates;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
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
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelName = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj.channelCategoryName = {};
obj.sectionTip = { marginTop: 8 };
let obj4 = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
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