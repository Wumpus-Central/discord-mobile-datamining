import set from "set";
import { View } from "handleJoinGuild";
import closure_6 from "set";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, header: null, headerTitle: null, twoColumnRow: null, listContainer: null, subheaderWrapper: null, createCard: null, descriptionSpacing: null, joinSection: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.PANEL_BG };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { flex: 1 };
let obj1 = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[3] = { flexDirection: "row", gap: require("Themes").space.PX_16, flex: 1 };
createCacheKey[4] = { flex: 1 };
let obj2 = { flexDirection: "row", gap: require("Themes").space.PX_16, flex: 1 };
createCacheKey[5] = { marginBottom: require("Themes").space.PX_8 };
let obj3 = { marginBottom: require("Themes").space.PX_8 };
createCacheKey[6] = { backgroundColor: require("Themes").colors.BG_SURFACE_RAISED, gap: require("Themes").space.PX_4, marginBottom: require("Themes").space.PX_24 };
let obj4 = { backgroundColor: require("Themes").colors.BG_SURFACE_RAISED, gap: require("Themes").space.PX_4, marginBottom: require("Themes").space.PX_24 };
createCacheKey[7] = { marginBottom: require("Themes").space.PX_8 };
let obj5 = { marginBottom: require("Themes").space.PX_8 };
createCacheKey[8] = { gap: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj6 = { gap: require("Themes").space.PX_4 };
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default function GuildUpsellChannelList(style) {
  style = style.style;
  let _require;
  let visualVariant;
  let callback1;
  let youBarTotalHeight;
  const tmp = createCacheKey();
  _require = tmp;
  const GameCommunityUpsellMultiExperiment = _require(youBarTotalHeight[7]).GameCommunityUpsellMultiExperiment;
  visualVariant = GameCommunityUpsellMultiExperiment.useConfig({ location: "GuildUpsellChannelList" }).visualVariant;
  const effect = React.useEffect(() => {
    let arr = Array.from(store.getLastFetchedGameIds());
    arr = Array.from(store.getDismissedGuildIds());
    const mobileGameCommunities = _undefined(youBarTotalHeight[8]).fetchMobileGameCommunities(arr, arr);
  }, []);
  let obj = _require(youBarTotalHeight[9]);
  let items = [closure_6];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const presentableUpsellGuilds = outer1_6.getPresentableUpsellGuilds();
    let num = 20;
    if ("one-column" === visualVariant) {
      num = 8;
    }
    return presentableUpsellGuilds.slice(0, num);
  });
  let items1 = [visualVariant];
  const callback = React.useCallback((guild_id, game_id) => {
    let obj = callback1(youBarTotalHeight[8]);
    obj.dismissGuild(guild_id);
    obj = { game_id, guild_id, variant: visualVariant };
    visualVariant(youBarTotalHeight[10]).track(outer1_7.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj);
  }, items1);
  callback1 = React.useCallback(() => {
    visualVariant(youBarTotalHeight[11]).openCreateGuildModal();
  }, []);
  let items2 = [callback1, , , , ];
  ({ subheaderWrapper: arr4[1], createCard: arr4[2], descriptionSpacing: arr4[3], joinSection: arr4[4] } = tmp);
  const memo = React.useMemo(() => {
    let obj = { style: _undefined.subheaderWrapper, children: null };
    obj = { style: _undefined.createCard, children: null };
    obj = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl = _undefined(youBarTotalHeight[14]).intl;
    obj[2] = intl.string(_undefined(youBarTotalHeight[14]).t.B44MTm);
    const items = [outer1_8(_undefined(youBarTotalHeight[13]).Text, obj), , ];
    const obj1 = { variant: "text-sm/medium", color: "text-default", style: _undefined.descriptionSpacing, children: null };
    const intl2 = _undefined(youBarTotalHeight[14]).intl;
    obj1[3] = intl2.string(_undefined(youBarTotalHeight[14]).t.l0tmhq);
    items[1] = outer1_8(_undefined(youBarTotalHeight[13]).Text, obj1);
    const obj2 = { variant: "primary", size: "sm", text: null, onPress: null, grow: true };
    const intl3 = _undefined(youBarTotalHeight[14]).intl;
    obj2[2] = intl3.string(_undefined(youBarTotalHeight[14]).t.CumH4u);
    obj2[3] = callback1;
    items[2] = outer1_8(_undefined(youBarTotalHeight[15]).Button, obj2);
    obj[1] = items;
    const items1 = [outer1_9(_undefined(youBarTotalHeight[12]).Card, obj), ];
    const obj3 = { style: _undefined.joinSection, children: null };
    const obj4 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl4 = _undefined(youBarTotalHeight[14]).intl;
    obj4[2] = intl4.string(_undefined(youBarTotalHeight[14]).t.rJRote);
    const items2 = [outer1_8(_undefined(youBarTotalHeight[13]).Text, obj4), ];
    const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: _undefined.descriptionSpacing, children: null };
    const intl5 = _undefined(youBarTotalHeight[14]).intl;
    obj5[3] = intl5.string(_undefined(youBarTotalHeight[14]).t.pJT2DK);
    items2[1] = outer1_8(_undefined(youBarTotalHeight[13]).Text, obj5);
    obj3[1] = items2;
    items1[1] = outer1_9(outer1_5, obj3);
    obj[1] = items1;
    return outer1_9(outer1_5, obj);
  }, items2);
  let obj1 = _require(youBarTotalHeight[16]);
  youBarTotalHeight = obj1.useYouBarTotalHeight();
  const items3 = [youBarTotalHeight];
  const memo1 = React.useMemo(() => ({ paddingHorizontal: visualVariant(youBarTotalHeight[6]).space.PX_16, paddingBottom: visualVariant(youBarTotalHeight[6]).space.PX_16 + youBarTotalHeight }), items3);
  if (0 === stateFromStoresArray.length) {
    obj = { style: null, children: null };
    const items4 = [tmp.container, style];
    obj[0] = items4;
    obj[1] = callback(tmp2(tmp3[17]).GuildsEmptyContent, {});
    let tmp15Result = callback(View, obj);
  } else {
    obj = { style: null, children: null };
    const items5 = [tmp.container, style];
    obj[0] = items5;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.header;
    let obj2 = { style: null, color: "mobile-text-heading-primary", variant: "heading-lg/bold", children: null };
    obj2[0] = tmp.headerTitle;
    let intl = tmp2(tmp3[14]).intl;
    obj2[3] = intl.string(tmp2(tmp3[14]).t["7hB4kg"]);
    obj1[1] = callback(tmp2(tmp3[13]).Text, obj2);
    const items6 = [callback(View, obj1), ];
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.listContainer;
    let tmp17Result = null;
    if ("one-column" === visualVariant) {
      let obj4 = { suggestedGuilds: null, contentContainerStyle: null, onDismiss: null, subheader: null };
      obj4[0] = stateFromStoresArray;
      obj4[1] = memo1;
      obj4[2] = callback;
      obj4[3] = memo;
      tmp17Result = tmp17(tmp2(tmp3[18]).OneColumnGuildUpsellList, obj4);
    }
    const items7 = [tmp17Result, ];
    tmp17Result = null;
    if ("two-column" === visualVariant) {
      let obj5 = { suggestedGuilds: null, contentContainerStyle: null, rowStyle: null, onDismiss: null, subheader: null };
      obj5[0] = stateFromStoresArray;
      obj5[1] = memo1;
      obj5[2] = tmp.twoColumnRow;
      obj5[3] = callback;
      obj5[4] = memo;
      tmp17Result = tmp17(tmp2(tmp3[18]).TwoColumnGuildUpsellList, obj5);
    }
    items7[1] = tmp17Result;
    obj3[1] = items7;
    items6[1] = closure_9(View, obj3);
    obj[1] = items6;
    tmp15Result = tmp15(tmp16, obj);
  }
  return tmp15Result;
};