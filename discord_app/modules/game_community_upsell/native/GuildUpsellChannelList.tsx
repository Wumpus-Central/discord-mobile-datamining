// === Module 16264: GuildUpsellChannelList ===

// Module 16264 (GuildUpsellChannelList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 15620 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_8 = fn(16265).MAX_DISPLAYED_UPSELL_GUILDS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, headerTitle: null, listContainer: null, subheaderWrapper: null, createDescription: null, templateScroll: null, templateRow: null, templateCard: null, templateIconWrapper: null, templateTitle: null, buttonGroup: null, descriptionSpacing: null, joinSection: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
createStyles.container = createStyles;
createStyles.header = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
createStyles.headerTitle = { flex: 1 };
createStyles.listContainer = { flex: 1 };
let obj1 = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
createStyles.subheaderWrapper = { marginBottom: nativeDefault.space.PX_8 };
let obj2 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.createDescription = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_12 };
let obj3 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_12 };
createStyles.templateScroll = { marginHorizontal: -nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12 };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12 };
createStyles.templateRow = { flexDirection: "row", alignItems: "stretch", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.templateCard = { width: 204 };
let obj5 = { flexDirection: "row", alignItems: "stretch", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.templateIconWrapper = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj6 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.templateTitle = { marginBottom: nativeDefault.space.PX_4 };
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
createStyles.buttonGroup = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_20 };
const obj8 = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_20 };
createStyles.descriptionSpacing = { marginBottom: nativeDefault.space.PX_8 };
const obj9 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.joinSection = { gap: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(createStyles);
const obj10 = { gap: nativeDefault.space.PX_4 };
let items = [{ id: "hangout", title: fn(1114).t.ScXySs, description: fn(1114).t.DSCqxM, Icon: fn(5692).BumpingFistsSpotIllustration }, , ];
const obj11 = { id: "hangout", title: fn(1114).t.ScXySs, description: fn(1114).t.DSCqxM, Icon: fn(5692).BumpingFistsSpotIllustration };
items[1] = { id: "gaming", title: fn(1114).t["F+MTAZ"], description: fn(1114).t.srNlJw, Icon: fn(5692).ChatControllersSpotIllustration };
const obj12 = { id: "gaming", title: fn(1114).t["F+MTAZ"], description: fn(1114).t.srNlJw, Icon: fn(5692).ChatControllersSpotIllustration };
items[2] = { id: "hobbies", title: fn(1114).t["0Ka6B5"], description: fn(1114).t["5oGAp/"], Icon: fn(5692).MiniaturesSpotIllustration };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default function GuildUpsellChannelList(style) {
  let callback2;
  let youBarTotalHeight;
  const tmp = closure_12();
  _require = tmp;
  const GameCommunityAddServerEntryExperiment = require("GameCommunityUpsellExperiment").GameCommunityAddServerEntryExperiment;
  const effect = youBarTotalHeight.useEffect(() => {
    const mobileGameCommunitiesIfStale = closure_0(callback2[11]).fetchMobileGameCommunitiesIfStale();
  }, []);
  let obj = require("initialize");
  items = [MobileGameCommunitiesStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    presentableUpsellGuilds = presentableUpsellGuilds.getPresentableUpsellGuilds();
    return presentableUpsellGuilds.slice(0, closure_1_8);
  });
  const callback = youBarTotalHeight.useCallback((guild_id, game_id) => {
    let obj = callback1(callback2[11]);
    obj.dismissGuild(guild_id);
    obj = { game_id, guild_id };
    stateFromStoresArray(callback2[13]).track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj);
  }, []);
  const callback1 = youBarTotalHeight.useCallback(() => {
    stateFromStoresArray(callback2[14]).openCreateGuildModal();
  }, []);
  callback2 = youBarTotalHeight.useCallback(() => {
    const result = stateFromStoresArray(callback2[14]).openGuildJoinServerScreen();
  }, []);
  let items1 = [callback1, callback2, stateFromStoresArray.length, tmp];
  const memo = youBarTotalHeight.useMemo(() => {
    let obj = { style: closure_0.subheaderWrapper, children: null };
    obj = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
    let intl = util.intl;
    obj.children = intl.string(util.t["abaDI+"]);
    items = [closure_2_10(Text_Text.Text, obj), , , , ];
    obj = { variant: "text-sm/medium", color: "text-subtle", style: closure_0.createDescription, children: null };
    let intl2 = util.intl;
    obj.children = intl2.string(util.t.raDC7V);
    items[1] = closure_2_10(Text_Text.Text, obj);
    items[2] = closure_2_10(hasOwnProperty, {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      style: closure_0.templateScroll,
      contentContainerStyle: closure_0.templateRow,
      children: items.map((Icon) => {
        let obj = { onPress, radius: 16, style: closure_1_0.templateCard, children: null };
        obj = { style: closure_1_0.templateIconWrapper, children: closure_2_10(Icon.Icon, { width: 114, height: 64 }) };
        items = [closure_2_10(closure_2_6, obj), ];
        obj = { children: null };
        const obj1 = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: closure_1_0.templateTitle, children: null };
        const intl = closure_0(callback2[8]).intl;
        obj1.children = intl.string(Icon.title);
        const items1 = [closure_2_10(closure_0(callback2[15]).Text, obj1), ];
        const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
        const intl2 = closure_0(callback2[8]).intl;
        obj2.children = intl2.string(Icon.description);
        items1[1] = closure_2_10(closure_0(callback2[15]).Text, obj2);
        obj.children = items1;
        items[1] = closure_2_11(closure_2_6, obj);
        obj.children = items;
        return closure_2_11(closure_0(callback2[16]).Card, obj, Icon.id);
      })
    });
    let obj2 = { style: closure_0.buttonGroup, children: null };
    const obj3 = { variant: "primary", size: "md", text: null, onPress: null, grow: true };
    const intl3 = util.intl;
    obj3.text = intl3.string(util.t.B44MTm);
    obj3.onPress = callback1;
    let items1 = [closure_2_10(components_Button_Button.Button, obj3), ];
    const obj4 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
    const intl4 = util.intl;
    obj4.text = intl4.string(util.t.wKy7MA);
    obj4.onPress = callback2;
    items1[1] = closure_2_10(components_Button_Button.Button, obj4);
    obj2.children = items1;
    items[3] = closure_2_11(timestampProducer, obj2);
    let tmpResult = stateFromStoresArray.length > 0;
    if (tmpResult) {
      const obj5 = { style: tmp3.joinSection, children: null };
      const obj6 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
      const intl5 = tmp5(1114).intl;
      obj6.children = intl5.string(tmp5(1114).t.rJRote);
      const items2 = [tmp4(tmp5(4556).Text, obj6), ];
      const obj7 = { variant: "text-sm/medium", color: "text-subtle", style: tmp3.descriptionSpacing, children: null };
      const intl6 = tmp5(1114).intl;
      obj7.children = intl6.string(tmp5(1114).t.pJT2DK);
      items2[1] = tmp4(tmp5(4556).Text, obj7);
      obj5.children = items2;
      tmpResult = tmp(tmp2, obj5);
    }
    items[4] = tmpResult;
    obj.children = items;
    return closure_2_11(timestampProducer, obj);
  }, items1);
  let obj1 = require("useYouBarTotalHeight");
  youBarTotalHeight = obj1.useYouBarTotalHeight();
  let items2 = [youBarTotalHeight];
  obj = { style: null, children: null };
  const items3 = [tmp.container, style.style];
  obj.style = items3;
  obj = { style: tmp.header, children: null };
  const memo1 = youBarTotalHeight.useMemo(() => ({ paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + youBarTotalHeight }), items2);
  obj1 = { style: tmp.headerTitle, color: "mobile-text-heading-primary", variant: "heading-lg/bold", children: null };
  let intl = require("util").intl;
  obj1.children = intl.string(require("util").t["7hB4kg"]);
  obj.children = closure_10(require("Text/Text").Text, obj1);
  const items4 = [closure_10(closure_6, obj), closure_10(closure_6, { style: tmp.listContainer, children: closure_10(require("OneColumnGuildUpsellList").OneColumnGuildUpsellList, { suggestedGuilds: stateFromStoresArray, contentContainerStyle: memo1, cardAction: GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildUpsellChannelList" }).cardAction, onDismiss: callback, subheader: memo }) })];
  obj.children = items4;
  return closure_11(closure_6, obj);
};