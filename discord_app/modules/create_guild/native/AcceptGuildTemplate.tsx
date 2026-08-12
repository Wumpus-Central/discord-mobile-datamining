// discord_app/modules/create_guild/native/AcceptGuildTemplate.tsx
import get_ActivityIndicator from "Text";
import { isGuildVocalChannelType } from "createChannelRecord";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import ME from "ME";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import jsxProd from "Divider";
import createCacheKey from "createCacheKey";
import importAllResult from "module_8510";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import { apply } from "../../../../_runtime/00012_apply.js";
import { 00038__ } from "../../../../_runtime/metro/00038__.js";
import { ActivityIndicator } from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import { getInvalidLinkSource } from "../../../design/components/Illustration/native/redesign/generated/InvalidLink.tsx";
import { Divider } from "../../../design/void/Form/native/FormDivider.tsx";
import { FreeFormInputGroup } from "../../../design/void/Form/native/FreeFormInputGroup.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { renderIcon } from "../../guild/native/GuildIconUploader.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";

let Fonts;
let c4;
let c5;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function GuildTemplateResolving() {
  return callback(closure_4, { style: callback2().resolvingContainer, children: callback(ActivityIndicator.ActivityIndicator, {}) });
}
function GuildTemplateResolved(guildTemplate) {
  let chooseIcon;
  let createServer;
  let icon;
  let name;
  let setName;
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = callback2();
  00038__(null != guildTemplate, "guild template cannot be null");
  00038__(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((arg0) => outer1_2(outer1_3[16]).fromServer(guildTemplate.serializedSourceGuild.id, arg0));
  const found = mapped.filter((arg0) => !callback(arg0));
  let obj = { contentContainerStyle: items, keyboardShouldPersistTaps: "handled", children: null };
  items = [tmp.wrapper, { marginBottom: useSafeAreaInsets().bottom }];
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guildTemplate(1236).intl;
  obj[3] = intl.string(guildTemplate(1236).t.QzUORX);
  const items1 = [callback(guildTemplate(4340).Text, obj), , , , , , , , , , ];
  obj = { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name };
  items1[1] = callback(guildTemplate(4340).Text, obj);
  items1[2] = callback(renderIcon, { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon });
  const obj2 = { label: null, error: null, hint: null, value: null, onChangeText: null, autoFocus: true, autoCorrect: false, returnKeyType: "done" };
  const intl2 = guildTemplate(1236).intl;
  obj2[0] = intl2.string(guildTemplate(1236).t.dBih7e);
  name = undefined;
  if (errors != null) {
    name = errors.name;
  }
  obj2[1] = name;
  const intl3 = tmp10(1236).intl;
  obj2[2] = intl3.format(guildTemplate(1236).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
  obj2[3] = name;
  obj2[4] = setName;
  items1[3] = callback(FreeFormInputGroup, obj2);
  const obj4 = { style: tmp.createButtonWrapper, children: null };
  const obj5 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = tmp10(1236).intl;
  obj5[1] = intl4.string(guildTemplate(1236).t["O0p/lS"]);
  obj5[2] = createServer;
  obj5[3] = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj5[4] = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj4[1] = callback(guildTemplate(4754).Button, obj5);
  items1[4] = callback(closure_4, obj4);
  items1[5] = callback(Divider, { style: tmp.divider, outer: true });
  const obj7 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp10(1236).intl;
  obj7[3] = intl5.string(guildTemplate(1236).t.OGiMXJ);
  items1[6] = callback(guildTemplate(4340).Text, obj7);
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl6 = tmp10(1236).intl;
  obj8[2] = intl6.string(guildTemplate(1236).t.Ztwyoz);
  items1[7] = callback(guildTemplate(4340).Text, obj8);
  items1[8] = callback(Channels, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj10 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default", children: null };
  const obj11 = { style: tmp.protip, children: null };
  const intl7 = tmp10(1236).intl;
  const items2 = [intl7.string(guildTemplate(1236).t["8tvIiN"]), ": "];
  obj11[1] = items2;
  const items3 = [closure_12(guildTemplate(1297).LegacyText, obj11), ];
  const intl8 = tmp10(1236).intl;
  items3[1] = intl8.string(guildTemplate(1236).t.de7DpI);
  obj10[3] = items3;
  items1[9] = closure_12(guildTemplate(4340).Text, obj10);
  let tmp7Result = null;
  if (found.length > 0) {
    const obj12 = { children: null };
    const obj13 = { style: null, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
    obj13[0] = tmp.sectionHeader;
    const intl9 = tmp10(1236).intl;
    obj13[3] = intl9.string(tmp10(1236).t.mQ0H1p);
    const items4 = [tmp9(tmp10(4340).Text, obj13), , ];
    const obj14 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp10(1236).intl;
    obj14[2] = intl10.string(tmp10(1236).t.jOPEYC);
    items4[1] = tmp9(tmp10(4340).Text, obj14);
    const obj15 = { roles: null };
    obj15[0] = found;
    items4[2] = tmp9(Roles, obj15);
    obj12[0] = items4;
    tmp7Result = tmp7(closure_13, obj12);
  }
  items1[10] = tmp7Result;
  obj[2] = items1;
  return closure_12(closure_5, obj);
}
function Channels(channels) {
  let c0;
  const tmp = callback2();
  c0 = tmp;
  let obj = apply(channels.channels);
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
    style: items,
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
      let obj = { style: _undefined.channelRow, children: null };
      const items = [_undefined.channelIcon, ];
      let channelCategoryIcon = null;
      if (children.type === outer1_9.GUILD_CATEGORY) {
        channelCategoryIcon = tmp5.channelCategoryIcon;
      }
      obj = { style: items, color: outer1_1(tmp8[8]).unsafe_rawColors.PRIMARY_400, size: tmp7(tmp8[11]).Icon.Sizes.CUSTOM, source: null };
      items[1] = channelCategoryIcon;
      const type = children.type;
      if (outer1_6(type)) {
        let tmp10Result = tmp10(tmp8[23]);
      } else if (type === outer1_9.GUILD_CATEGORY) {
        tmp10Result = tmp10(tmp8[24]);
      } else {
        tmp10Result = tmp10(tmp8[25]);
      }
      obj[3] = tmp10Result;
      const items1 = [outer1_11(_undefined(outer1_3[11]).Icon, obj), ];
      const items2 = [_undefined.channelName, ];
      let channelCategoryName = null;
      if (children.type === outer1_9.GUILD_CATEGORY) {
        channelCategoryName = tmp5.channelCategoryName;
      }
      obj = { numberOfLines: 1, style: items2, children: children.name };
      items2[1] = channelCategoryName;
      items1[1] = outer1_11(_undefined(outer1_3[11]).LegacyText, obj);
      obj[1] = items1;
      return outer1_12(outer1_4, obj, children.id);
    }).value()
  };
  items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  return callback(closure_4, obj);
}
function Roles(roles) {
  roles = roles.roles;
  const substr = roles.slice();
  const reversed = substr.reverse();
  const tmp = callback2();
  const items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = tmp);
  return callback(closure_4, {
    style: items,
    children: reversed.map((color) => {
      const obj = { disableInteraction: true, role: color, color: null };
      let int2hexResult;
      if (0 !== color.color) {
        int2hexResult = callback(table[27]).int2hex(color.color);
        const obj2 = callback(table[27]);
      }
      obj[2] = int2hexResult;
      return closure_11(callback2(table[26]), obj, color.id);
    })
  });
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ MarketingURLs: metroImportAll, Fonts, ChannelTypes: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let obj = { wrapper: null, header: null, description: null, iconUploader: null, createButtonWrapper: null, resolvingContainer: null, divider: null, sectionHeader: null, rolesChannelsWrapper: null, channelsWrapper: null, rolesWrapper: null, channelRow: null, channelIcon: null, channelCategoryIcon: null, channelName: null, channelCategoryName: null, sectionTip: null, protip: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj[0] = obj;
createCacheKey = { textAlign: "center" };
let merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj[1] = createCacheKey;
obj[2] = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj[3] = { alignSelf: "center", marginBottom: 12 };
obj[4] = { marginTop: 8 };
obj[5] = { alignItems: "center", flex: 1, justifyContent: "center" };
obj[6] = { marginTop: 8 };
let obj2 = {};
let merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj2.marginTop = 24;
obj[7] = obj2;
obj[8] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, marginTop: 8, padding: 8 };
obj[9] = { flexDirection: "column", paddingVertical: 0 };
obj[10] = { flexDirection: "row", flexWrap: "wrap" };
obj[11] = { alignItems: "center", flexDirection: "row", height: 40 };
obj[12] = { marginLeft: 12, marginRight: 8, height: 20, width: 20 };
obj[13] = { marginLeft: 0, marginRight: 2, height: 12, width: 12 };
const obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, marginTop: 8, padding: 8 };
obj[14] = { color: require("Themes").colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let merged2 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj[15] = {};
obj[16] = { marginTop: 8 };
let obj4 = { color: require("Themes").colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let obj5 = {};
obj[17] = { color: require("Themes").unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
let closure_14 = createCacheKey.createStyles(obj);
let closure_16 = importAllResult.memo(() => {
  const obj = { Illustration: null, title: null, body: null };
  obj[0] = getInvalidLinkSource.InvalidLink;
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.C7ZRNw);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.A6MwXE);
  return callback(Button.EmptyState, obj);
});
const obj6 = { color: require("Themes").unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
let result = require("createChannelRecord").fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

export default function AcceptGuildTemplate(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    const state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (tmp.ACCEPTING !== state) {
        if (tmp.ACCEPTED !== state) {
          if (tmp.RESOLVING === state) {
            let obj = {};
            const merged = Object.assign(guildTemplate);
            return callback(GuildTemplateResolving, obj);
          } else if (tmp.EXPIRED === state) {
            return callback(closure_16, {});
          }
        }
      }
    }
    obj = {};
    const merged1 = Object.assign(guildTemplate);
    return callback(GuildTemplateResolved, obj);
  }
  obj = {};
  const merged2 = Object.assign(guildTemplate);
  return callback(GuildTemplateResolving, obj);
};