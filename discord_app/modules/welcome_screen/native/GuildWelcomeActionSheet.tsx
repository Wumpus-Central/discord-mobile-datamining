// === Module 12910: GuildWelcomeActionSheet ===

// Module 12910 (GuildWelcomeActionSheet)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5676 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import WelcomeScreenStore from "WelcomeScreenStore" /* 12907 */;
import TextStyles_mod from "TextStyles" /* 5741 */;

require = fn;
class WelcomeChannelRow {
  constructor(arg0) {
    welcomeChannel = global.welcomeChannel;
    trackOptionSelect = global.trackOptionSelect;
    closure_2 = undefined;
    tmp = closure_19();
    tmp2 = welcomeChannel;
    tmp3 = closure_2;
    obj = welcomeChannel(closure_2[15]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(welcomeChannel.channel_id));
    closure_2 = stateFromStores;
    tmp5 = trackOptionSelect;
    tmp6 = trackOptionSelect(closure_2[16])(stateFromStores, true);
    obj2 = welcomeChannel(closure_2[15]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, tmp);
      }
      return canResult;
    });
    obj3 = welcomeChannel(closure_2[15]);
    items2 = [];
    items2[0] = closure_6;
    items3 = [];
    items3[0] = welcomeChannel.emoji_id;
    stateFromStores2 = obj3.useStateFromStores(items2, () => {
      let customEmojiById = null;
      if (null != welcomeChannel.emoji_id) {
        customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
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
          obj1 = { style: null, source: null, resizeMode: "contain" };
          obj1.style = tmp.emoji;
          obj16 = { uri: null };
          tmp5Result = tmp5(tmp3[19]);
          tmp5Result1 = tmp5(tmp3[20]);
          obj17 = { id: null, animated: null, size: null };
          ({ id: obj12.id, animated: obj12.animated } = stateFromStores2);
          tmp17 = EMOJI_URL_BASE_SIZE;
          obj17.size = EMOJI_URL_BASE_SIZE;
          obj16.uri = tmp5Result1.getEmojiURL(obj17);
          obj1.source = obj16;
          tmp13 = jsx(tmp5Result, obj1);
          tmp11 = jsx;
        } else {
          if (null != welcomeChannel.emoji_name) {
            tmp5Result2 = tmp5(tmp3[21]);
            tmp5Result3 = tmp5(tmp3[21]);
            flag = false;
            if (null != tmp5Result2.getByName(tmp5Result3.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
              tmp14 = jsx;
              obj18 = { style: null, variant: "text-sm/medium", children: null };
              obj18.style = tmp.emoji;
              obj18.children = welcomeChannel.emoji_name;
              tmp13 = jsx(tmp2(tmp3[22]).Text, obj18);
              tmp11 = jsx;
            }
          }
          tmp11 = jsx;
          tmp12 = View;
          obj19 = { style: null, children: null };
          obj19.style = tmp.placeholderEmojiWrapper;
          obj20 = { size: null, source: null };
          obj20.size = tmp2(tmp3[23]).Icon.Sizes.REFRESH_SMALL_16;
          obj20.source = tmp5(tmp3[24]);
          obj19.children = jsx(tmp2(tmp3[23]).Icon, obj20);
          tmp13 = jsx(View, obj19);
        }
        obj21 = { DEPRECATED_style: null, leading: null, label: null, subLabel: null, onPress: null, trailing: null };
        obj21.DEPRECATED_style = tmp.welcomeChannel;
        obj21.leading = tmp13;
        obj22 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
        obj22.children = welcomeChannel.description;
        obj21.label = tmp11(tmp2(tmp3[22]).Text, obj22);
        tmp11Result = null;
        if (null != stateFromStores) {
          obj23 = { variant: "text-sm/medium", color: "text-default", children: null };
          obj23.children = tmp6;
          tmp11Result = tmp11(tmp2(tmp3[22]).Text, obj23);
        }
        obj21.subLabel = tmp11Result;
        obj21.onPress = tmp9;
        obj21.trailing = tmp11(tmp2(tmp3[25]).FormRow.Arrow, {});
        tmp11Result1 = tmp11(tmp2(tmp3[25]).FormRow, obj21);
      }
    }
    return tmp11Result1;
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const NO_WELCOME_SCREEN = fn(12907).NO_WELCOME_SCREEN;
const WELCOME_SCREEN_TYPE = fn(12911).WELCOME_SCREEN_TYPE;
const Constants = fn(1074);
({ AnalyticEvents: map1, Fonts, Routes: closure_14 } = Constants);
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, guildIcon: null, header: null, headerGuildName: null, guildDescription: null, welcomeChannel: null, channelsTitle: null, emoji: null, placeholderEmojiWrapper: null };
let size = { borderRadius: nativeDefault.radii.sm, width: 64, height: 64, marginBottom: 16 };
obj2.guildIcon = size;
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 24));
obj4.marginBottom = 8;
obj4.textAlign = "center";
obj2.header = obj4;
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj2.headerGuildName = {};
obj2.guildDescription = { textAlign: "center", marginBottom: 30 };
let obj3 = { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = {};
obj2.welcomeChannel = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: nativeDefault.radii.sm };
obj2.channelsTitle = { alignSelf: "flex-start" };
obj2.emoji = { width: 24, height: 24 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: nativeDefault.radii.sm };
obj2.placeholderEmojiWrapper = { padding: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs };
let closure_19 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default function GuildWelcomeActionSheet(guildId) {
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  let tmp = closure_19();
  dependencyMap = tmp;
  let items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(504);
  let items1 = [WelcomeScreenStore];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items1, () => ({ welcomeScreen: WelcomeScreenStore.get(guildId), fetching: WelcomeScreenStore.isFetching(), hasError: WelcomeScreenStore.hasError() }));
  const welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  const items2 = [guildId, welcomeScreen];
  const effect = welcomeScreen.useEffect(() => {
    if (null == welcomeScreen) {
      DispatcherDefault.wait(() => guildId(closure_2[27]).fetchWelcomeScreen(closure_1_0));
    }
  }, items2);
  const items3 = [fetching, hasError];
  const effect1 = welcomeScreen.useEffect(() => {
    let tmp = false === fetching;
    if (tmp) {
      tmp = true === hasError;
    }
    if (tmp) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items3);
  const items4 = [guildId, welcomeScreen];
  const effect2 = welcomeScreen.useEffect(() => {
    if (null != welcomeScreen) {
      DispatcherDefault.wait(() => guildId(closure_2[27]).welcomeScreenViewed(closure_1_0));
    }
  }, items4);
  const items5 = [welcomeScreen];
  const effect3 = welcomeScreen.useEffect(() => {
    if (welcomeScreen === NO_WELCOME_SCREEN) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items5);
  const items6 = [guildId];
  const effect4 = welcomeScreen.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: WELCOME_SCREEN_TYPE, guild_id: guildId });
  }, items6);
  const items7 = [onHide];
  const effect5 = welcomeScreen.useEffect(() => () => {
    if (onHide != null) {
      tmp();
    }
  }, items7);
  const items8 = [guildId, welcomeScreen];
  closure_6 = welcomeScreen.useCallback((index) => {
    if (null != welcomeScreen) {
      const items = [];
      const items1 = [];
      has_custom_emojis = false;
      const welcome_channels = welcomeScreen.welcome_channels;
      const item = welcome_channels.forEach((description) => {
        items.push(description.description);
        items1.push(description.channel_id);
        if (null != description.emoji_id) {
          c2 = true;
        }
      });
      const obj2 = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis };
      AnalyticsUtilsDefault.track(constants.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
    }
  }, items8);
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if (null != welcomeScreen) {
      const obj3 = { startExpanded: true, children: null };
      const obj4 = { contentContainerStyle: tmp.container, children: null };
      const obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: onHide(12912).Sizes.MEDIUM, textScale: 2 };
      const items9 = [closure_17(onHide(12912), obj5), , , , ];
      const obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "text-default", children: null };
      const intl = tmp2(1115).intl;
      const obj7 = {
        guildName: stateFromStores.name,
        guildNameHook(children, arg1) {
              return closure_2_17(Text_Text.Text, { style: has_custom_emojis.headerGuildName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children }, arg1);
            }
      };
      obj6.children = intl.format(tmp2(1115).t["0aydCN"], obj7);
      items9[1] = closure_17(tmp2(4752).Text, obj6);
      const obj8 = { style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: welcomeScreen.description };
      items9[2] = closure_17(tmp2(4752).Text, obj8);
      const obj9 = { style: tmp.channelsTitle, variant: "eyebrow", color: "text-default", children: null };
      const intl2 = tmp2(1115).intl;
      const tmp17 = onHide(12912);
      obj9.children = intl2.string(tmp2(1115).t["haj5+i"]).toUpperCase();
      items9[3] = closure_17(tmp2(4752).Text, obj9);
      let welcome_channels = welcomeScreen.welcome_channels;
      items9[4] = welcome_channels.map((welcomeChannel, index) => {
        closure_0 = index;
        return closure_1_17(WelcomeChannelRow, {
          welcomeChannel,
          trackOptionSelect() {
            return closure_6(closure_0);
          }
        }, index);
      });
      obj4.children = items9;
      obj3.children = closure_18(hasError, obj4);
      tmp12 = closure_17(tmp2(7442).ActionSheet, obj3);
      const str = intl2.string(tmp2(1115).t["haj5+i"]);
    }
  }
  return tmp12;
};
export { WelcomeChannelRow };