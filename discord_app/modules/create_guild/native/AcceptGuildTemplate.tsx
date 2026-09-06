// discord_app/modules/create_guild/native/AcceptGuildTemplate.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import _modDef6605 from "../../../design/void/Form/native/FreeFormInputGroup.tsx";
import DividerDefault from "../../../design/void/Form/native/FormDivider.tsx";
import getInvalidLinkSource from "../../../design/components/Illustration/native/redesign/generated/InvalidLink.tsx";
import renderIconDefault from "../../guild/native/GuildIconUploader.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { isGuildVocalChannelType } from "../../../records/ChannelRecord.tsx";
import { isEveryoneRole } from "../../../records/GuildRoleRecord.tsx";
import ME from "../../../Constants.tsx";
import { GuildTemplateStates } from "../../guild_templates/GuildTemplatesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import importDefaultResult from "../../rebrand/native/TextStyles.tsx";

require = arg1;
function GuildTemplateResolving() {
  return callback(closure_4, {
    style: callback2().resolvingContainer,
    children: callback(ActivityIndicator.ActivityIndicator, {}),
  });
}
function GuildTemplateResolved(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = callback2();
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((arg0) =>
    closure_1_2(closure_1_3[16]).fromServer(guildTemplate.serializedSourceGuild.id, arg0),
  );
  const found = mapped.filter((arg0) => !callback(arg0));
  let obj = { contentContainerStyle: items, keyboardShouldPersistTaps: "handled", children: null };
  items = [tmp.wrapper, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guildTemplate(1114).intl;
  obj[3] = intl.string(guildTemplate(1114).t.QzUORX);
  const items1 = [callback(guildTemplate(4556).Text, obj), , , , , , , , , ,];
  obj = { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name };
  items1[1] = callback(guildTemplate(4556).Text, obj);
  items1[2] = callback(renderIconDefault, {
    iconBackgroundColor: tmp.wrapper.backgroundColor,
    style: tmp.iconUploader,
    onPress: chooseIcon,
    icon,
  });
  const obj2 = {
    label: null,
    error: null,
    hint: null,
    value: null,
    onChangeText: null,
    autoFocus: true,
    autoCorrect: false,
    returnKeyType: "done",
  };
  const intl2 = guildTemplate(1114).intl;
  obj2[0] = intl2.string(guildTemplate(1114).t.dBih7e);
  name = undefined;
  if (errors != null) {
    name = errors.name;
  }
  obj2[1] = name;
  const intl3 = tmp10(1114).intl;
  obj2[2] = intl3.format(guildTemplate(1114).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
  obj2[3] = name;
  obj2[4] = setName;
  items1[3] = callback(_modDef6605, obj2);
  const obj4 = { style: tmp.createButtonWrapper, children: null };
  const obj5 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = tmp10(1114).intl;
  obj5[1] = intl4.string(guildTemplate(1114).t["O0p/lS"]);
  obj5[2] = createServer;
  obj5[3] = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj5[4] = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj4[1] = callback(guildTemplate(4975).Button, obj5);
  items1[4] = callback(closure_4, obj4);
  items1[5] = callback(DividerDefault, { style: tmp.divider, outer: true });
  const obj7 = {
    style: tmp.sectionHeader,
    variant: "heading-md/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl5 = tmp10(1114).intl;
  obj7[3] = intl5.string(guildTemplate(1114).t.OGiMXJ);
  items1[6] = callback(guildTemplate(4556).Text, obj7);
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl6 = tmp10(1114).intl;
  obj8[2] = intl6.string(guildTemplate(1114).t.Ztwyoz);
  items1[7] = callback(guildTemplate(4556).Text, obj8);
  items1[8] = callback(Channels, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj10 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default", children: null };
  const obj11 = { style: tmp.protip, children: null };
  const intl7 = tmp10(1114).intl;
  const items2 = [intl7.string(guildTemplate(1114).t["8tvIiN"]), ": "];
  obj11[1] = items2;
  const items3 = [closure_12(guildTemplate(1178).LegacyText, obj11)];
  const intl8 = tmp10(1114).intl;
  items3[1] = intl8.string(guildTemplate(1114).t.de7DpI);
  obj10[3] = items3;
  items1[9] = closure_12(guildTemplate(4556).Text, obj10);
  let tmp7Result = null;
  if (found.length > 0) {
    const obj12 = { children: null };
    const obj13 = {
      style: null,
      variant: "heading-md/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    obj13[0] = tmp.sectionHeader;
    const intl9 = tmp10(1114).intl;
    obj13[3] = intl9.string(tmp10(1114).t.mQ0H1p);
    const items4 = [tmp9(tmp10(4556).Text, obj13), ,];
    const obj14 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp10(1114).intl;
    obj14[2] = intl10.string(tmp10(1114).t.jOPEYC);
    items4[1] = tmp9(tmp10(4556).Text, obj14);
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
  closure_0 = undefined;
  const tmp = callback2();
  closure_0 = tmp;
  let obj = applyDefault(channels.channels);
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
    children: obj
      .sortBy((parent_id) => {
        if (null == parent_id.parent_id) {
          const _Number2 = Number;
          let result = 10000 * Number(parent_id.id);
        } else {
          const _Number = Number;
          result = 10000 * Number(parent_id.parent_id) + parent_id.id;
        }
        return result;
      })
      .map((children) => {
        let obj = { style: lib.channelRow, children: null };
        const items = [lib.channelIcon];
        let channelCategoryIcon = null;
        if (children.type === closure_1_9.GUILD_CATEGORY) {
          channelCategoryIcon = tmp5.channelCategoryIcon;
        }
        obj = {
          style: items,
          color: closure_1_1(tmp8[8]).unsafe_rawColors.PRIMARY_400,
          size: tmp7(tmp8[11]).Icon.Sizes.CUSTOM,
          source: null,
        };
        items[1] = channelCategoryIcon;
        const type = children.type;
        if (closure_1_6(type)) {
          let tmp10Result = tmp10(tmp8[23]);
        } else if (type === closure_1_9.GUILD_CATEGORY) {
          tmp10Result = tmp10(tmp8[24]);
        } else {
          tmp10Result = tmp10(tmp8[25]);
        }
        obj[3] = tmp10Result;
        const items1 = [closure_1_11(lib(closure_1_3[11]).Icon, obj)];
        const items2 = [lib.channelName];
        let channelCategoryName = null;
        if (children.type === closure_1_9.GUILD_CATEGORY) {
          channelCategoryName = tmp5.channelCategoryName;
        }
        obj = { numberOfLines: 1, style: items2, children: children.name };
        items2[1] = channelCategoryName;
        items1[1] = closure_1_11(lib(closure_1_3[11]).LegacyText, obj);
        obj[1] = items1;
        return closure_1_12(closure_1_4, obj, children.id);
      })
      .value(),
  };
  items = [,];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  return callback(closure_4, obj);
}
function Roles(roles) {
  roles = roles.roles;
  const substr = roles.slice();
  const reversed = substr.reverse();
  const tmp = callback2();
  const items = [,];
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
    }),
  });
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ MarketingURLs: closure_8, Fonts, ChannelTypes: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let obj = {
  wrapper: null,
  header: null,
  description: null,
  iconUploader: null,
  createButtonWrapper: null,
  resolvingContainer: null,
  divider: null,
  sectionHeader: null,
  rolesChannelsWrapper: null,
  channelsWrapper: null,
  rolesWrapper: null,
  channelRow: null,
  channelIcon: null,
  channelCategoryIcon: null,
  channelName: null,
  channelCategoryName: null,
  sectionTip: null,
  protip: null,
};
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj[0] = obj;
createCacheKey = { textAlign: "center" };
let merged = Object.assign(
  importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
obj[1] = createCacheKey;
obj[2] = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj[3] = { alignSelf: "center", marginBottom: 12 };
obj[4] = { marginTop: 8 };
obj[5] = { alignItems: "center", flex: 1, justifyContent: "center" };
obj[6] = { marginTop: 8 };
let obj2 = {};
let merged1 = Object.assign(
  importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16),
);
obj2.marginTop = 24;
obj[7] = obj2;
const importDefaultResult1 = importDefaultResult;
obj[8] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.sm,
  marginTop: 8,
  padding: 8,
};
obj[9] = { flexDirection: "column", paddingVertical: 0 };
obj[10] = { flexDirection: "row", flexWrap: "wrap" };
obj[11] = { alignItems: "center", flexDirection: "row", height: 40 };
obj[12] = { marginLeft: 12, marginRight: 8, height: 20, width: 20 };
obj[13] = { marginLeft: 0, marginRight: 2, height: 12, width: 12 };
const obj3 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.sm,
  marginTop: 8,
  padding: 8,
};
obj[14] = { color: ThemesDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let merged2 = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj[15] = {};
obj[16] = { marginTop: 8 };
let obj4 = { color: ThemesDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let obj5 = {};
obj[17] = {
  color: ThemesDefault.unsafe_rawColors.GREEN_360,
  fontFamily: Fonts.PRIMARY_BOLD,
  textTransform: "uppercase",
};
let closure_14 = createCacheKey.createStyles(obj);
let closure_16 = importAllResult.memo(() => {
  const obj = { Illustration: getInvalidLinkSource.InvalidLink, title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.C7ZRNw);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.A6MwXE);
  return callback(Button.EmptyState, obj);
});
const obj6 = {
  color: ThemesDefault.unsafe_rawColors.GREEN_360,
  fontFamily: Fonts.PRIMARY_BOLD,
  textTransform: "uppercase",
};
let result = require("set").fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

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
}
