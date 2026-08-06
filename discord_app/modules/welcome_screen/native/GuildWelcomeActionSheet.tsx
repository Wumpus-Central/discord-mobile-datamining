// discord_app/modules/welcome_screen/native/GuildWelcomeActionSheet.tsx
import preload from "preload";
import get_ActivityIndicator from "transitionTo";
import getEmojiToGroupId from "getEmojiToGroupId";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleInviteData from "handleInviteData";
import { NO_WELCOME_SCREEN } from "handleInviteData";
import { WELCOME_SCREEN_TYPE } from "WELCOME_SCREEN_TYPE";
import ME from "ME";
import { EMOJI_URL_BASE_SIZE } from "set";
import { Permissions } from "sum";
import jsxProd from "parseRawEmojiObject";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let Fonts;
let c4;
let c5;
let closure_14;
let closure_17;
let closure_18;
let map1;
const require = arg1;
class WelcomeChannelRow {
  constructor(arg0) {
    welcomeChannel = global.welcomeChannel;
    trackOptionSelect = global.trackOptionSelect;
    c2 = undefined;
    tmp = jsxs();
    tmp2 = welcomeChannel;
    tmp3 = c2;
    obj = require("initialize");
    items = [];
    items[0] = ScrollView;
    stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(welcomeChannel.channel_id));
    c2 = stateFromStores;
    tmp5 = trackOptionSelect;
    tmp6 = require("computeChannelName")(stateFromStores, true);
    obj2 = require("initialize");
    items1 = [];
    items1[0] = ScrollView;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = outer1_9.can(outer1_16.VIEW_CHANNEL, tmp);
      }
      return canResult;
    });
    obj3 = require("initialize");
    items2 = [];
    items2[0] = ScrollView;
    items3 = [];
    items3[0] = welcomeChannel.emoji_id;
    stateFromStores2 = obj3.useStateFromStores(items2, () => {
      let customEmojiById = null;
      if (null != welcomeChannel.emoji_id) {
        customEmojiById = outer1_6.getCustomEmojiById(tmp.emoji_id);
      }
      return customEmojiById;
    }, items3);
    items4 = [, ];
    items4[0] = stateFromStores;
    items4[1] = trackOptionSelect;
    tmp11Result1 = null;
    if (null != stateFromStores) {
      tmp11Result1 = null;
      if (stateFromStores1) {
        if (null != stateFromStores2) {
          tmp15 = jsx;
          obj = { style: null, source: null, resizeMode: "contain" };
          obj[0] = tmp.emoji;
          obj1 = { uri: null };
          tmp5Result = require("preload");
          tmp5Result1 = require("getAvatarURL");
          obj2 = { id: null, animated: null, size: null };
          ({ id: obj12[0], animated: obj12[1] } = stateFromStores2);
          tmp17 = EMOJI_URL_BASE_SIZE;
          obj2[2] = EMOJI_URL_BASE_SIZE;
          obj1[0] = tmp5Result1.getEmojiURL(obj2);
          obj[1] = obj1;
          tmp13 = jsx(tmp5Result, obj);
          tmp11 = jsx;
        } else {
          if (null != welcomeChannel.emoji_name) {
            tmp5Result2 = require("parseRawEmojiObject");
            tmp5Result3 = require("parseRawEmojiObject");
            flag = false;
            if (null != tmp5Result2.getByName(tmp5Result3.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
              tmp14 = jsx;
              obj3 = { style: null, variant: "text-sm/medium", children: null };
              obj3[0] = tmp.emoji;
              obj3[2] = welcomeChannel.emoji_name;
              tmp13 = jsx(require("Text").Text, obj3);
              tmp11 = jsx;
            }
          }
          tmp11 = jsx;
          tmp12 = View;
          obj4 = { style: null, children: null };
          obj4[0] = tmp.placeholderEmojiWrapper;
          obj5 = { size: null, source: null };
          obj5[0] = require("Button").Icon.Sizes.REFRESH_SMALL_16;
          obj5[1] = require("registerAsset");
          obj4[1] = jsx(require("Button").Icon, obj5);
          tmp13 = jsx(View, obj4);
        }
        obj6 = { DEPRECATED_style: null, leading: null, label: null, subLabel: null, onPress: null, trailing: null };
        obj6[0] = tmp.welcomeChannel;
        obj6[1] = tmp13;
        obj7 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
        obj7[2] = welcomeChannel.description;
        obj6[2] = tmp11(require("Text").Text, obj7);
        tmp11Result = null;
        if (null != stateFromStores) {
          obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
          obj8[2] = tmp6;
          tmp11Result = tmp11(require("Text").Text, obj8);
        }
        obj6[3] = tmp11Result;
        obj6[4] = tmp9;
        obj6[5] = tmp11(require("Form").FormRow.Arrow, {});
        tmp11Result1 = tmp11(require("Form").FormRow, obj6);
      }
    }
    return tmp11Result1;
  }
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ AnalyticEvents: map1, Fonts, Routes: closure_14 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { container: null, guildIcon: null, header: null, headerGuildName: null, guildDescription: null, welcomeChannel: null, channelsTitle: null, emoji: null, placeholderEmojiWrapper: null };
createCacheKey = { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").radii.sm, width: 64, height: 64, marginBottom: 16 };
let obj2 = {};
let obj1 = { borderRadius: require("Themes").radii.sm, width: 64, height: 64, marginBottom: 16 };
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.TEXT_SUBTLE, 24));
obj2.marginBottom = 8;
obj2.textAlign = "center";
createCacheKey[2] = obj2;
let obj3 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey[3] = obj3;
createCacheKey[4] = { textAlign: "center", marginBottom: 30 };
createCacheKey[5] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: require("Themes").radii.sm };
createCacheKey[6] = { alignSelf: "flex-start" };
createCacheKey[7] = { width: 24, height: 24 };
let obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: require("Themes").radii.sm };
createCacheKey[8] = { padding: 4, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { padding: 4, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs };
const result = require("getEmojiToGroupId").fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default function GuildWelcomeActionSheet(guildId) {
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  let dependencyMap;
  let welcomeScreen;
  let fetching;
  let hasError;
  let getEmojiToGroupId;
  let tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = guildId(589);
  let items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(guildId));
  let obj1 = guildId(589);
  let items1 = [handleInviteData];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ welcomeScreen: outer1_10.get(guildId), fetching: outer1_10.isFetching(), hasError: outer1_10.hasError() }));
  welcomeScreen = stateFromStoresObject.welcomeScreen;
  fetching = stateFromStoresObject.fetching;
  hasError = stateFromStoresObject.hasError;
  const items2 = [guildId, welcomeScreen];
  const effect = welcomeScreen.useEffect(() => {
    if (null == welcomeScreen) {
      onHide(_undefined[26]).wait(() => outer1_0(outer1_2[27]).fetchWelcomeScreen(closure_0));
      const obj = onHide(_undefined[26]);
    }
  }, items2);
  const items3 = [fetching, hasError];
  const effect1 = welcomeScreen.useEffect(() => {
    let tmp = false === fetching;
    if (tmp) {
      tmp = true === hasError;
    }
    if (tmp) {
      onHide(_undefined[18]).hideActionSheet();
      const obj = onHide(_undefined[18]);
    }
  }, items3);
  const items4 = [guildId, welcomeScreen];
  const effect2 = welcomeScreen.useEffect(() => {
    if (null != welcomeScreen) {
      onHide(_undefined[26]).wait(() => outer1_0(outer1_2[27]).welcomeScreenViewed(closure_0));
      const obj = onHide(_undefined[26]);
    }
  }, items4);
  const items5 = [welcomeScreen];
  const effect3 = welcomeScreen.useEffect(() => {
    if (welcomeScreen === outer1_11) {
      onHide(_undefined[18]).hideActionSheet();
      const obj = onHide(_undefined[18]);
    }
  }, items5);
  const items6 = [guildId];
  const effect4 = welcomeScreen.useEffect(() => {
    let obj = onHide(_undefined[28]);
    obj = { type: outer1_12, guild_id: guildId };
    obj.track(outer1_13.OPEN_MODAL, obj);
  }, items6);
  const items7 = [onHide];
  const effect5 = welcomeScreen.useEffect(() => () => {
    if (closure_1 != null) {
      tmp();
    }
  }, items7);
  const items8 = [guildId, welcomeScreen];
  getEmojiToGroupId = welcomeScreen.useCallback((arg0) => {
    if (null != welcomeScreen) {
      const items = [];
      const items1 = [];
      const _undefined = false;
      const welcome_channels = tmp.welcome_channels;
      const item = welcome_channels.forEach((description) => {
        items.push(description.description);
        items1.push(description.channel_id);
        if (null != description.emoji_id) {
          let c2 = true;
        }
      });
      let obj = onHide(_undefined[28]);
      obj = { index: null, guild_id: null, options: null, options_channel_ids: null, guild_description: null, has_custom_emojis: null };
      obj[0] = arg0;
      obj[1] = items;
      obj[2] = items;
      obj[3] = items1;
      obj[4] = tmp.description;
      obj[5] = _undefined;
      obj.track(outer1_13.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj);
    }
  }, items8);
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if (null != welcomeScreen) {
      obj = { startExpanded: true, children: null };
      obj = { contentContainerStyle: null, children: null };
      obj[0] = tmp.container;
      obj1 = { style: null, guild: null, size: null, textScale: 2 };
      obj1[0] = tmp.guildIcon;
      obj1[1] = stateFromStores;
      obj1[2] = onHide(11934).Sizes.MEDIUM;
      const items9 = [callback(onHide(11934), obj1), , , , ];
      const obj2 = { style: null, variant: "heading-xl/extrabold", color: "text-default", children: null };
      obj2[0] = tmp.header;
      const intl = tmp2(1236).intl;
      const obj3 = { guildName: null, guildNameHook: null };
      obj3[0] = stateFromStores.name;
      obj3[1] = function guildNameHook(children) {
        return outer1_17(guildId(_undefined[22]).Text, { style: _undefined.headerGuildName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children }, arg1);
      };
      obj2[3] = intl.format(tmp2(1236).t["0aydCN"], obj3);
      items9[1] = callback(tmp2(4281).Text, obj2);
      const obj4 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj4[0] = tmp.guildDescription;
      obj4[3] = welcomeScreen.description;
      items9[2] = callback(tmp2(4281).Text, obj4);
      const obj5 = { style: null, variant: "eyebrow", color: "text-default", children: null };
      obj5[0] = tmp.channelsTitle;
      const intl2 = tmp2(1236).intl;
      const tmp17 = onHide(11934);
      obj5[3] = intl2.string(tmp2(1236).t["haj5+i"]).toUpperCase();
      items9[3] = callback(tmp2(4281).Text, obj5);
      let welcome_channels = welcomeScreen.welcome_channels;
      items9[4] = welcome_channels.map((welcomeChannel) => {
        let closure_0 = arg1;
        return outer1_17(outer1_20, {
          welcomeChannel,
          trackOptionSelect(arg0) {
            return outer1_6(closure_0);
          }
        }, arg1);
      });
      obj[1] = items9;
      obj[1] = callback2(hasError, obj);
      tmp12 = callback(tmp2(5685).ActionSheet, obj);
      const str = intl2.string(tmp2(1236).t["haj5+i"]);
    }
  }
  return tmp12;
};
export { WelcomeChannelRow };