// === Module 15703: items ===

// Module 15703 (items)
import ThemesDefault from "Themes" /* 712 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "set" /* 15247 */;
import { MAX_DISPLAYED_UPSELL_GUILDS as closure_8 } from "MAX_DISPLAYED_UPSELL_GUILDS" /* 15704 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, header: null, headerTitle: null, listContainer: null, subheaderWrapper: null, createDescription: null, templateScroll: null, templateRow: null, templateCard: null, templateIconWrapper: null, templateTitle: null, buttonGroup: null, descriptionSpacing: null, joinSection: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.PANEL_BG };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { flex: 1 };
let obj1 = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[4] = { marginBottom: ThemesDefault.space.PX_8 };
let obj2 = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[5] = { marginTop: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_12 };
let obj3 = { marginTop: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_12 };
createCacheKey[6] = { marginHorizontal: -ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_12 };
let obj4 = { marginHorizontal: -ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_12 };
createCacheKey[7] = { flexDirection: "row", alignItems: "stretch", gap: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[8] = { width: 204 };
let obj5 = { flexDirection: "row", alignItems: "stretch", gap: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[9] = { alignItems: "center", marginBottom: ThemesDefault.space.PX_16 };
let obj6 = { alignItems: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[10] = { marginBottom: ThemesDefault.space.PX_4 };
let obj7 = { marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[11] = { gap: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_20 };
const obj8 = { gap: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_20 };
createCacheKey[12] = { marginBottom: ThemesDefault.space.PX_8 };
const obj9 = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[13] = { gap: ThemesDefault.space.PX_4 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const obj10 = { gap: ThemesDefault.space.PX_4 };
let items = [{ id: "hangout", title: require("getSystemLocale").t.ScXySs, description: require("getSystemLocale").t.DSCqxM, Icon: require("AccountAgeTier10LargeBadge").BumpingFistsSpotIllustration }, , ];
const obj11 = { id: "hangout", title: require("getSystemLocale").t.ScXySs, description: require("getSystemLocale").t.DSCqxM, Icon: require("AccountAgeTier10LargeBadge").BumpingFistsSpotIllustration };
items[1] = { id: "gaming", title: require("getSystemLocale").t["F+MTAZ"], description: require("getSystemLocale").t.srNlJw, Icon: require("AccountAgeTier10LargeBadge").ChatControllersSpotIllustration };
const obj12 = { id: "gaming", title: require("getSystemLocale").t["F+MTAZ"], description: require("getSystemLocale").t.srNlJw, Icon: require("AccountAgeTier10LargeBadge").ChatControllersSpotIllustration };
items[2] = { id: "hobbies", title: require("getSystemLocale").t["0Ka6B5"], description: require("getSystemLocale").t["5oGAp/"], Icon: require("AccountAgeTier10LargeBadge").MiniaturesSpotIllustration };
const obj13 = { id: "hobbies", title: require("getSystemLocale").t["0Ka6B5"], description: require("getSystemLocale").t["5oGAp/"], Icon: require("AccountAgeTier10LargeBadge").MiniaturesSpotIllustration };
let result = require("set").fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default function GuildUpsellChannelList(style) {
  let _require;
  let stateFromStoresArray;
  let callback1;
  let callback2;
  let youBarTotalHeight;
  const tmp = callback3();
  _require = tmp;
  const GameCommunityAddServerEntryExperiment = _require(callback2[10]).GameCommunityAddServerEntryExperiment;
  const effect = youBarTotalHeight.useEffect(() => {
    const mobileGameCommunitiesIfStale = lib(callback2[11]).fetchMobileGameCommunitiesIfStale();
  }, []);
  let obj = _require(callback2[12]);
  items = [closure_7];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    presentableUpsellGuilds = presentableUpsellGuilds.getPresentableUpsellGuilds();
    return presentableUpsellGuilds.slice(0, closure_8);
  });
  const callback = youBarTotalHeight.useCallback((guild_id, game_id) => {
    let obj = callback1(callback2[11]);
    obj.dismissGuild(guild_id);
    obj = { game_id, guild_id };
    stateFromStoresArray(callback2[13]).track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj);
  }, []);
  callback1 = youBarTotalHeight.useCallback(() => {
    stateFromStoresArray(callback2[14]).openCreateGuildModal();
  }, []);
  callback2 = youBarTotalHeight.useCallback(() => {
    const result = stateFromStoresArray(callback2[14]).openGuildJoinServerScreen();
  }, []);
  let items1 = [callback1, callback2, stateFromStoresArray.length, tmp];
  const memo = youBarTotalHeight.useMemo(() => {
    let obj = { style: lib.subheaderWrapper, children: null };
    obj = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
    let intl = lib(callback2[8]).intl;
    obj[2] = intl.string(lib(callback2[8]).t["abaDI+"]);
    items = [closure_1_10(lib(callback2[15]).Text, obj), , , , ];
    obj = { variant: "text-sm/medium", color: "text-subtle", style: lib.createDescription, children: null };
    let intl2 = lib(callback2[8]).intl;
    obj[3] = intl2.string(lib(callback2[8]).t.raDC7V);
    items[1] = closure_1_10(lib(callback2[15]).Text, obj);
    items[2] = closure_1_10(closure_1_5, {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      style: lib.templateScroll,
      contentContainerStyle: lib.templateRow,
      children: closure_1_13.map((Icon) => {
        let obj = { onPress: closure_2, radius: 16, style: closure_0.templateCard, children: null };
        obj = { style: closure_0.templateIconWrapper, children: closure_1_10(Icon.Icon, { width: 114, height: 64 }) };
        items = [closure_1_10(closure_1_6, obj), ];
        obj = { children: null };
        obj1 = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: closure_0.templateTitle, children: null };
        const intl = closure_1_0(closure_1_3[8]).intl;
        obj1[3] = intl.string(Icon.title);
        const items1 = [closure_1_10(closure_1_0(closure_1_3[15]).Text, obj1), ];
        const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
        const intl2 = closure_1_0(closure_1_3[8]).intl;
        obj2[2] = intl2.string(Icon.description);
        items1[1] = closure_1_10(closure_1_0(closure_1_3[15]).Text, obj2);
        obj[0] = items1;
        items[1] = closure_1_11(closure_1_6, obj);
        obj[3] = items;
        return closure_1_11(closure_1_0(closure_1_3[16]).Card, obj, Icon.id);
      })
    });
    let obj2 = { style: lib.buttonGroup, children: null };
    const obj3 = { variant: "primary", size: "md", text: null, onPress: null, grow: true };
    const intl3 = lib(callback2[8]).intl;
    obj3[2] = intl3.string(lib(callback2[8]).t.B44MTm);
    obj3[3] = callback1;
    let items1 = [closure_1_10(lib(callback2[17]).Button, obj3), ];
    const obj4 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
    const intl4 = lib(callback2[8]).intl;
    obj4[2] = intl4.string(lib(callback2[8]).t.wKy7MA);
    obj4[3] = callback2;
    items1[1] = closure_1_10(lib(callback2[17]).Button, obj4);
    obj2[1] = items1;
    items[3] = closure_1_11(closure_1_6, obj2);
    let tmpResult = stateFromStoresArray.length > 0;
    if (tmpResult) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp3.joinSection;
      const obj6 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
      const intl5 = tmp5(tmp6[8]).intl;
      obj6[2] = intl5.string(tmp5(tmp6[8]).t.rJRote);
      const items2 = [tmp4(tmp5(tmp6[15]).Text, obj6), ];
      const obj7 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
      obj7[2] = tmp3.descriptionSpacing;
      const intl6 = tmp5(tmp6[8]).intl;
      obj7[3] = intl6.string(tmp5(tmp6[8]).t.pJT2DK);
      items2[1] = tmp4(tmp5(tmp6[15]).Text, obj7);
      obj5[1] = items2;
      tmpResult = tmp(tmp2, obj5);
    }
    items[4] = tmpResult;
    obj[1] = items;
    return closure_1_11(closure_1_6, obj);
  }, items1);
  obj1 = _require(callback2[18]);
  youBarTotalHeight = obj1.useYouBarTotalHeight();
  let items2 = [youBarTotalHeight];
  obj = { style: items3, children: null };
  items3 = [tmp.container, style.style];
  obj = { style: tmp.header, children: null };
  const memo1 = youBarTotalHeight.useMemo(() => ({ paddingHorizontal: stateFromStoresArray(callback2[7]).space.PX_16, paddingBottom: stateFromStoresArray(callback2[7]).space.PX_16 + youBarTotalHeight }), items2);
  obj1 = { style: tmp.headerTitle, color: "mobile-text-heading-primary", variant: "heading-lg/bold", children: null };
  let intl = _require(callback2[8]).intl;
  obj1[3] = intl.string(_require(callback2[8]).t["7hB4kg"]);
  obj[1] = callback(_require(callback2[15]).Text, obj1);
  const items4 = [callback(closure_6, obj), callback(closure_6, { style: tmp.listContainer, children: callback(_require(callback2[19]).OneColumnGuildUpsellList, { suggestedGuilds: stateFromStoresArray, contentContainerStyle: memo1, cardAction: GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildUpsellChannelList" }).cardAction, onDismiss: callback, subheader: memo }) })];
  obj[1] = items4;
  return callback2(closure_6, obj);
};