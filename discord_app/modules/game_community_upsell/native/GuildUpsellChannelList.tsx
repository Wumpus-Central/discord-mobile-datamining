// === Module 18569: GuildUpsellChannelList ===

// Module 18569 (GuildUpsellChannelList)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5761 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import noop from "module_19" /* 19 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 15833 */;
import ConsentStore from "ConsentStore" /* 6877 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
let closure_9 = fn(18570).MAX_DISPLAYED_UPSELL_GUILDS;
const Constants = fn(1072);
({ AnalyticEvents: closure_10, Consents: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG }, header: null, headerTitle: null, listContainer: null, subheaderWrapper: null, createDescription: null, templateScroll: null, templateRow: null, templateRowWide: null, templateCard: null, templateCardWide: null, templateIconWrapper: null, templateTitle: null, buttonGroup: null, buttonGroupWide: null, descriptionSpacing: null, joinSection: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
obj2.header = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
obj2.headerTitle = { flex: 1 };
obj2.listContainer = { flex: 1 };
let obj4 = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
obj2.subheaderWrapper = { marginBottom: nativeDefault.space.PX_8 };
let obj5 = { marginBottom: nativeDefault.space.PX_8 };
obj2.createDescription = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_12 };
let obj6 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_12 };
obj2.templateScroll = { marginHorizontal: -nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12 };
let obj7 = { marginHorizontal: -nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12 };
obj2.templateRow = { flexDirection: "row", alignItems: "stretch", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
let obj8 = { flexDirection: "row", alignItems: "stretch", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.templateRowWide = { paddingHorizontal: 0, marginBottom: nativeDefault.space.PX_12 };
obj2.templateCard = { width: 204 };
obj2.templateCardWide = { flex: 1, minWidth: 0 };
let obj9 = { paddingHorizontal: 0, marginBottom: nativeDefault.space.PX_12 };
obj2.templateIconWrapper = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj10 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.templateTitle = { marginBottom: nativeDefault.space.PX_4 };
let obj11 = { marginBottom: nativeDefault.space.PX_4 };
obj2.buttonGroup = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_20 };
obj2.buttonGroupWide = { flexDirection: "row" };
const obj12 = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_20 };
obj2.descriptionSpacing = { marginBottom: nativeDefault.space.PX_8 };
const obj13 = { marginBottom: nativeDefault.space.PX_8 };
obj2.joinSection = { gap: nativeDefault.space.PX_4 };
let closure_14 = createStyles.createStyles(obj2);
const obj14 = { gap: nativeDefault.space.PX_4 };
let items = [{ id: "hangout", title: fn(1113).t.ScXySs, description: fn(1113).t.DSCqxM, Icon: fn(15044).BumpingFistsSpotIllustration }, , ];
const obj15 = { id: "hangout", title: fn(1113).t.ScXySs, description: fn(1113).t.DSCqxM, Icon: fn(15044).BumpingFistsSpotIllustration };
items[1] = { id: "gaming", title: fn(1113).t["F+MTAZ"], description: fn(1113).t.srNlJw, Icon: fn(18571).ChatControllersSpotIllustration };
const obj16 = { id: "gaming", title: fn(1113).t["F+MTAZ"], description: fn(1113).t.srNlJw, Icon: fn(18571).ChatControllersSpotIllustration };
items[2] = { id: "hobbies", title: fn(1113).t["0Ka6B5"], description: fn(1113).t["5oGAp/"], Icon: fn(18575).MiniaturesSpotIllustration };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default function GuildUpsellChannelList(style) {
  importDefault = undefined;
  let data;
  let memo;
  let callback1;
  let callback2;
  let youBarTotalHeight;
  const tmp = closure_14();
  _require = tmp;
  let num = 1;
  if (require("useChatLayout")().isChatBesideChannelList) {
    num = 2;
  }
  importDefault = tmp3;
  items = [ConsentStore, LocalAppDetectionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const hasConsentedResult = ConsentStore.hasConsented(constants2.PERSONALIZATION);
    let someResult = !hasConsentedResult;
    if (hasConsentedResult) {
      const _Object = Object;
      const values = Object.values(userAgnosticState.getUserAgnosticState().apps);
      someResult = values.some((lastScannedAt) => {
        lastScannedAt = undefined;
        if (lastScannedAt != null) {
          lastScannedAt = lastScannedAt.lastScannedAt;
        }
        return null != lastScannedAt;
      });
    }
    return someResult;
  });
  let obj = require("initialize");
  data = require("MobileGameCommunitiesActionCreators").useMobileGameCommunities(stateFromStores).data;
  let items1 = [data];
  memo = callback1.useMemo(() => {
    items = data;
    if (data == null) {
      items = [];
    }
    return items.slice(0, closure_9);
  }, items1);
  const callback = callback1.useCallback((guild_id, game_id) => {
    data(memo[15]).dismissGuild(guild_id);
    const obj = data(memo[15]);
    closure_1(memo[16]).track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, { game_id, guild_id });
  }, []);
  callback1 = callback1.useCallback(() => {
    closure_1(memo[17]).openCreateGuildModal();
  }, []);
  callback2 = callback1.useCallback(() => {
    const result = closure_1(memo[17]).openGuildJoinServerScreen();
  }, []);
  let items2 = [callback1, callback2, memo.length, tmp, 2 === num];
  const memo1 = callback1.useMemo(() => {
    const mapped = items.map((Icon) => {
      const obj = { onPress, radius: 16, style: null, children: null };
      if (closure_1_1) {
        let templateCard = closure_1_0.templateCardWide;
        let tmp5 = closure_1_0;
      } else {
        templateCard = closure_1_0.templateCard;
        tmp5 = closure_1_0;
      }
      obj.style = templateCard;
      items = [closure_2_12(youBarTotalHeight, { style: tmp5.templateIconWrapper, children: closure_2_12(Icon.Icon, { width: 114, height: 64 }) }), ];
      const obj3 = { children: null };
      const obj4 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", style: tmp5.templateTitle, children: null };
      const intl = closure_0(memo[9]).intl;
      obj4.children = intl.string(Icon.title);
      const items1 = [closure_2_12(closure_0(memo[19]).Text, obj4), ];
      const obj5 = { variant: "body-sm/medium", color: "text-subtle", children: null };
      const intl2 = closure_0(memo[9]).intl;
      obj5.children = intl2.string(Icon.description);
      items1[1] = closure_2_12(closure_0(memo[19]).Text, obj5);
      obj3.children = items1;
      items[1] = closure_2_13(youBarTotalHeight, obj3);
      obj.children = items;
      return closure_2_13(closure_0(memo[18]).Card, obj, Icon.id);
    });
    let obj = { style: closure_0.subheaderWrapper, children: null };
    const obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    let intl = util.intl;
    obj2.children = intl.string(util.t["abaDI+"]);
    items = [application_id(Text_Text.Text, obj2), , , , ];
    let obj3 = { variant: "body-sm/medium", color: "text-subtle", style: closure_0.createDescription, children: null };
    let intl2 = util.intl;
    obj3.children = intl2.string(util.t.raDC7V);
    items[1] = application_id(Text_Text.Text, obj3);
    let buttonGroupWide = closure_1;
    if (closure_1) {
      let obj5 = { style: null, children: null };
      let items1 = [, ];
      ({ templateRow: arr2[0], templateRowWide: arr2[1] } = closure_0);
      obj5.style = items1;
      obj5.children = mapped;
      let tmp5Result = application_id(timestampProducer, obj5);
    } else {
      const obj6 = { horizontal: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
      ({ templateScroll: obj4.style, templateRow: obj4.contentContainerStyle } = closure_0);
      obj6.children = mapped;
      tmp5Result = application_id(hasOwnProperty, obj6);
    }
    items[2] = tmp5Result;
    const items2 = [closure_0.buttonGroup, ];
    if (buttonGroupWide) {
      buttonGroupWide = closure_0.buttonGroupWide;
    }
    const obj7 = { style: items2, children: null };
    items2[1] = buttonGroupWide;
    const obj8 = { variant: "primary", size: "md", text: null, onPress: null, grow: true };
    const intl3 = util.intl;
    obj8.text = intl3.string(util.t.B44MTm);
    obj8.onPress = callback1;
    const items3 = [application_id(components_Button_Button.Button, obj8), ];
    const obj9 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
    const intl4 = util.intl;
    obj9.text = intl4.string(util.t.wKy7MA);
    obj9.onPress = callback2;
    items3[1] = application_id(components_Button_Button.Button, obj9);
    obj7.children = items3;
    items[3] = state(timestampProducer, obj7);
    let tmp2Result = memo.length > 0;
    if (tmp2Result) {
      const obj10 = { style: closure_0.joinSection, children: null };
      const obj11 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
      const intl5 = util.intl;
      obj11.children = intl5.string(util.t.rJRote);
      const items4 = [application_id(Text_Text.Text, obj11), ];
      const obj21 = { variant: "body-sm/medium", color: "text-subtle", style: closure_0.descriptionSpacing, children: null };
      const intl6 = util.intl;
      obj21.children = intl6.string(util.t.pJT2DK);
      items4[1] = application_id(Text_Text.Text, obj21);
      obj10.children = items4;
      tmp2Result = state(timestampProducer, obj10);
    }
    items[4] = tmp2Result;
    obj.children = items;
    return state(timestampProducer, obj);
  }, items2);
  let obj2 = require("MobileGameCommunitiesActionCreators");
  youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  let items3 = [youBarTotalHeight];
  let obj4 = { style: null, children: null };
  let items4 = [tmp.container, style.style];
  obj4.style = items4;
  let obj5 = { style: tmp.header, children: null };
  const memo2 = callback1.useMemo(() => ({ paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + youBarTotalHeight }), items3);
  let obj6 = { style: tmp.headerTitle, color: "mobile-text-heading-primary", variant: "heading-lg/semibold", children: null };
  let intl = require("util").intl;
  obj6.children = intl.string(require("util").t["7hB4kg"]);
  obj5.children = closure_12(require("Text/Text").Text, obj6);
  const items5 = [closure_12(youBarTotalHeight, obj5), ];
  let obj3 = require("useYouBarTotalHeight");
  items5[1] = closure_12(youBarTotalHeight, { style: tmp.listContainer, children: closure_12(require("GuildUpsellList").GuildUpsellList, { numColumns: num, suggestedGuilds: memo, contentContainerStyle: memo2, onDismiss: callback, subheader: memo1 }, num) });
  obj4.children = items5;
  return closure_13(youBarTotalHeight, obj4);
};