// === Module 16240: GuildUpsellChannelList ===

// Module 16240 (GuildUpsellChannelList)
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Card_Card from "Card/Card" /* 6002 */;
import BumpingFistsSpotIllustration from "BumpingFistsSpotIllustration" /* 12829 */;
import MobileGameCommunitiesConstants from "MobileGameCommunitiesConstants" /* 16241 */;
import ChatControllersSpotIllustration from "ChatControllersSpotIllustration" /* 16242 */;
import MiniaturesSpotIllustration from "MiniaturesSpotIllustration" /* 16244 */;
import MobileGameCommunitiesActionCreatorsAll from "MobileGameCommunitiesActionCreators" /* 16246 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 13540 */;
import ConsentStore from "ConsentStore" /* 6091 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, lastScannedAt, style, tmp3;

let c10;
let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let closure_9 = MobileGameCommunitiesConstants.MAX_DISPLAYED_UPSELL_GUILDS;
({ AnalyticEvents: c10, Consents: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, headerTitle: { flex: 1 }, listContainer: { flex: 1 }, subheaderWrapper: obj4, createDescription: obj5, templateScroll: obj6, templateRow: obj7, templateCard: { width: 204 }, templateIconWrapper: obj8, templateTitle: obj9, buttonGroup: obj10, descriptionSpacing: { marginBottom: nativeDefault.space.PX_8 }, joinSection: { gap: nativeDefault.space.PX_4 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
createStyles = createStyles.createStyles;
obj3 = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_12 };
obj6 = { marginHorizontal: -nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12 };
obj7 = { flexDirection: "row", alignItems: "stretch", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj8 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj9 = { marginBottom: nativeDefault.space.PX_4 };
obj10 = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_20 };
({ marginBottom: nativeDefault.space.PX_8 });
({ gap: nativeDefault.space.PX_4 });
let closure_14 = createStyles(obj);
let items = [{ id: "hangout", title: intl7.t.ScXySs, description: intl7.t.DSCqxM, Icon: BumpingFistsSpotIllustration.BumpingFistsSpotIllustration }, , ];
({ id: "hangout", title: intl7.t.ScXySs, description: intl7.t.DSCqxM, Icon: BumpingFistsSpotIllustration.BumpingFistsSpotIllustration });
items[1] = { id: "gaming", title: intl7.t["F+MTAZ"], description: intl7.t.srNlJw, Icon: ChatControllersSpotIllustration.ChatControllersSpotIllustration };
({ id: "gaming", title: intl7.t["F+MTAZ"], description: intl7.t.srNlJw, Icon: ChatControllersSpotIllustration.ChatControllersSpotIllustration });
items[2] = { id: "hobbies", title: intl7.t["0Ka6B5"], description: intl7.t["5oGAp/"], Icon: MiniaturesSpotIllustration.MiniaturesSpotIllustration };
({ id: "hobbies", title: intl7.t["0Ka6B5"], description: intl7.t["5oGAp/"], Icon: MiniaturesSpotIllustration.MiniaturesSpotIllustration });
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr2;
  let closure_0;
  let constants2;
  let first;
  let onPress;
  let tmp16;
  let tmp6;
  let tmp7;
  let userAgnosticState;
  let obj = require("react");
  const cResult = obj.c(59);
  const tmp4 = closure_14();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "GuildUpsellChannelList" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const GameCommunityAddServerEntryExperiment = tmp(13543).GameCommunityAddServerEntryExperiment;
  const cardAction = GameCommunityAddServerEntryExperiment.useConfig(first).cardAction;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    items = [ConsentStore, LocalAppDetectionStore];
    class I {
      constructor() {
        hasConsentedResult = closure_1_8.hasConsented(closure_1_11.PERSONALIZATION);
        someResult = !hasConsentedResult;
        if (hasConsentedResult) {
          tmp3 = globalThis;
          _Object = Object;
          tmp4 = closure_1_7;
          values = Object.values(closure_1_7.getUserAgnosticState().apps);
          someResult = values.some((lastScannedAt) => {
            lastScannedAt = undefined;
            if (lastScannedAt != null) {
              lastScannedAt = lastScannedAt.lastScannedAt;
            }
            return null != lastScannedAt;
          });
        }
        return someResult;
      }
    }
    cResult[1] = items;
    cResult[2] = I;
    tmp7 = I;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const tmpResult2 = require("MobileGameCommunitiesActionCreators");
  const data = tmpResult2.useMobileGameCommunities(stateFromStores).data;
  if (cResult[3] !== data) {
    let items1 = data;
    if (data == null) {
      items1 = [];
    }
    cResult[3] = data;
    class I {
      constructor() {
        hasConsentedResult = closure_1_8.hasConsented(closure_1_11.PERSONALIZATION);
        someResult = !hasConsentedResult;
        if (hasConsentedResult) {
          tmp3 = globalThis;
          _Object = Object;
          tmp4 = closure_1_7;
          values = Object.values(closure_1_7.getUserAgnosticState().apps);
          someResult = values.some((lastScannedAt) => {
            lastScannedAt = undefined;
            if (lastScannedAt != null) {
              lastScannedAt = lastScannedAt.lastScannedAt;
            }
            return null != lastScannedAt;
          });
        }
        return someResult;
      }
    }
    cResult[4] = items1;
    arr2 = items1;
  } else {
    arr2 = cResult[4];
  }
  if (cResult[5] !== arr2) {
    const substr = arr2.slice(0, closure_9);
    cResult[5] = arr2;
    class I {
      constructor() {
        hasConsentedResult = closure_1_8.hasConsented(closure_1_11.PERSONALIZATION);
        someResult = !hasConsentedResult;
        if (hasConsentedResult) {
          tmp3 = globalThis;
          _Object = Object;
          tmp4 = closure_1_7;
          values = Object.values(closure_1_7.getUserAgnosticState().apps);
          someResult = values.some((lastScannedAt) => {
            lastScannedAt = undefined;
            if (lastScannedAt != null) {
              lastScannedAt = lastScannedAt.lastScannedAt;
            }
            return null != lastScannedAt;
          });
        }
        return someResult;
      }
    }
    cResult[6] = substr;
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(guild_id, game_id) {
      const obj = MobileGameCommunitiesActionCreatorsAll;
      obj.dismissGuild(guild_id);
      const obj2 = onPress(dependencyMap[18]);
      const obj3 = { game_id, guild_id };
      obj2.track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj3);
    };
    cResult[7] = fn;
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function w() {
      const obj = onPress(dependencyMap[19]);
      obj.openCreateGuildModal();
    };
    cResult[8] = fn2;
    tmp16 = fn2;
  } else {
    tmp16 = cResult[8];
  }
  importDefault = tmp16;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
    cResult[9] = X;
  } else {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
    let obj3 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
    let Text = tmp(4892).Text;
    const string = tmp(1126).intl.string;
    class I {
      constructor() {
        hasConsentedResult = closure_1_8.hasConsented(closure_1_11.PERSONALIZATION);
        someResult = !hasConsentedResult;
        if (hasConsentedResult) {
          tmp3 = globalThis;
          _Object = Object;
          tmp4 = closure_1_7;
          values = Object.values(closure_1_7.getUserAgnosticState().apps);
          someResult = values.some((lastScannedAt) => {
            lastScannedAt = undefined;
            if (lastScannedAt != null) {
              lastScannedAt = lastScannedAt.lastScannedAt;
            }
            return null != lastScannedAt;
          });
        }
        return someResult;
      }
    }
    cResult[10] = closure_12(Text, obj3);
    const tmp19 = closure_12(Text, obj3);
  } else {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
  }
  const createDescription = tmp4.createDescription;
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
    cResult[11] = obj6.string(require("intl").t.raDC7V);
    obj6.string(require("intl").t.raDC7V);
    class I {
      constructor() {
        hasConsentedResult = closure_1_8.hasConsented(closure_1_11.PERSONALIZATION);
        someResult = !hasConsentedResult;
        if (hasConsentedResult) {
          tmp3 = globalThis;
          _Object = Object;
          tmp4 = closure_1_7;
          values = Object.values(closure_1_7.getUserAgnosticState().apps);
          someResult = values.some((lastScannedAt) => {
            lastScannedAt = undefined;
            if (lastScannedAt != null) {
              lastScannedAt = lastScannedAt.lastScannedAt;
            }
            return null != lastScannedAt;
          });
        }
        return someResult;
      }
    }
  } else {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
  }
  if (cResult[12] !== tmp4.createDescription) {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
    let obj4 = { variant: "text-sm/medium", color: "text-subtle", style: createDescription, children: tmp20 };
    const tmp23 = closure_12(require("Text/Text").Text, obj4);
    class I {
      constructor() {
        hasConsentedResult = closure_1_8.hasConsented(closure_1_11.PERSONALIZATION);
        someResult = !hasConsentedResult;
        if (hasConsentedResult) {
          tmp3 = globalThis;
          _Object = Object;
          tmp4 = closure_1_7;
          values = Object.values(closure_1_7.getUserAgnosticState().apps);
          someResult = values.some((lastScannedAt) => {
            lastScannedAt = undefined;
            if (lastScannedAt != null) {
              lastScannedAt = lastScannedAt.lastScannedAt;
            }
            return null != lastScannedAt;
          });
        }
        return someResult;
      }
    }
    cResult[12] = tmp4.createDescription;
    cResult[13] = tmp23;
  } else {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
  }
  if (cResult[14] === tmp4.templateCard) {
    class X {
      constructor() {
        const obj = onPress(dependencyMap[19]);
        const result = obj.openGuildJoinServerScreen();
      }
    }
  }
  const mapped = items.map((Icon) => {
    let intl;
    let intl2;
    let items1;
    const obj = { onPress, radius: 16, style: closure_0.templateCard, children: items };
    const obj2 = { style: closure_0.templateIconWrapper, children: closure_12(Icon.Icon, { width: 114, height: 64 }) };
    const Card = Card_Card.Card;
    items = [closure_12(metroRequire, obj2), ];
    const obj3 = { children: items1 };
    const obj4 = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: closure_0.templateTitle, children: intl.string(Icon.title) };
    const Text = Text_Text.Text;
    intl = intl7.intl;
    items1 = [closure_12(Text, obj4), ];
    const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: intl2.string(Icon.description) };
    const Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    items1[1] = closure_12(Text2, obj5);
    items[1] = map1(metroRequire, obj3);
    return map1(Card, obj, Icon.id);
  });
  cResult[14] = tmp4.templateCard;
  cResult[15] = tmp4.templateIconWrapper;
  cResult[16] = tmp4.templateTitle;
  cResult[17] = mapped;
}) : ((style) => {
  let Text;
  let closure_0;
  let constants2;
  let intl;
  let items4;
  let items5;
  let obj6;
  let userAgnosticState;
  let callback1;
  let callback2;
  style = style.style;
  const tmp = closure_14();
  _require = tmp;
  const GameCommunityAddServerEntryExperiment = require("GameCommunityUpsellExperiment").GameCommunityAddServerEntryExperiment;
  const cardAction = GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildUpsellChannelList" }).cardAction;
  let obj = require("get initialized");
  items = [ConsentStore, LocalAppDetectionStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let obj2 = require("MobileGameCommunitiesActionCreators");
  const data = obj2.useMobileGameCommunities(stateFromStores).data;
  let items1 = [data];
  const memo = callback2.useMemo(() => {
    items = data;
    if (data == null) {
      items = [];
    }
    return items.slice(0, closure_9);
  }, items1);
  const callback = callback2.useCallback((guild_id, game_id) => {
    const obj = memo(callback1[17]);
    obj.dismissGuild(guild_id);
    const obj2 = data(callback1[18]);
    const obj3 = { game_id, guild_id };
    obj2.track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj3);
  }, []);
  callback1 = callback2.useCallback(() => {
    const obj = data(callback1[19]);
    obj.openCreateGuildModal();
  }, []);
  callback2 = callback2.useCallback(() => {
    const obj = data(callback1[19]);
    const result = obj.openGuildJoinServerScreen();
  }, []);
  let items2 = [callback1, callback2, memo.length, tmp];
  const memo1 = callback2.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let items1;
    let items2;
    let onPress;
    let obj = { style: closure_0.subheaderWrapper, children: items };
    let obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: intl.string(intl7.t["abaDI+"]) };
    let Text = Text_Text.Text;
    intl = intl7.intl;
    items = [closure_12(Text, obj2), , , , ];
    let obj3 = { variant: "text-sm/medium", color: "text-subtle", style: closure_0.createDescription, children: intl2.string(intl7.t.raDC7V) };
    let Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    items[1] = closure_12(Text2, obj3);
    let obj4 = {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      style: closure_0.templateScroll,
      contentContainerStyle: closure_0.templateRow,
      children: items.map((Icon) => {
        let intl;
        let intl2;
        let items1;
        const obj = { onPress, radius: 16, style: closure_1_0.templateCard, children: items };
        const obj2 = { style: closure_1_0.templateIconWrapper, children: closure_2_12(Icon.Icon, { width: 114, height: 64 }) };
        const Card = closure_0(callback1[21]).Card;
        items = [closure_2_12(closure_2_6, obj2), ];
        const obj3 = { children: items1 };
        const obj4 = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: closure_1_0.templateTitle, children: intl.string(Icon.title) };
        const Text = closure_0(callback1[20]).Text;
        intl = closure_0(callback1[9]).intl;
        items1 = [closure_2_12(Text, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: intl2.string(Icon.description) };
        const Text2 = closure_0(callback1[20]).Text;
        intl2 = closure_0(callback1[9]).intl;
        items1[1] = closure_2_12(Text2, obj5);
        items[1] = closure_2_13(closure_2_6, obj3);
        return closure_2_13(Card, obj, Icon.id);
      })
    };
    items[2] = closure_12(hasOwnProperty, obj4);
    let obj5 = { style: closure_0.buttonGroup, children: items1 };
    const obj6 = { variant: "primary", size: "md", text: intl3.string(intl7.t.B44MTm), onPress: callback1, grow: true };
    const Button = components_Button_Button.Button;
    intl3 = intl7.intl;
    items1 = [closure_12(Button, obj6), ];
    const obj7 = { variant: "secondary", size: "md", text: intl4.string(intl7.t.wKy7MA), onPress: callback2, grow: true };
    const Button2 = components_Button_Button.Button;
    intl4 = intl7.intl;
    items1[1] = closure_12(Button2, obj7);
    items[3] = map1(metroRequire, obj5);
    let tmpResult = memo.length > 0;
    if (tmpResult) {
      const obj8 = { style: closure_0.joinSection, children: items2 };
      const obj9 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: intl5.string(intl7.t.rJRote) };
      const Text3 = Text_Text.Text;
      intl5 = intl7.intl;
      items2 = [closure_12(Text3, obj9), ];
      const obj10 = { variant: "text-sm/medium", color: "text-subtle", style: closure_0.descriptionSpacing, children: intl6.string(intl7.t.pJT2DK) };
      const Text4 = Text_Text.Text;
      intl6 = intl7.intl;
      items2[1] = closure_12(Text4, obj10);
      tmpResult = map1(metroRequire, obj8);
    }
    items[4] = tmpResult;
    return map1(metroRequire, obj);
  }, items2);
  let obj3 = require("useYouBarTotalHeight");
  const youBarTotalHeight = obj3.useYouBarTotalHeight();
  const items3 = [youBarTotalHeight];
  let obj4 = { style: items4, children: items5 };
  items4 = [tmp.container, style];
  let obj5 = { style: tmp.header, children: closure_12(Text, obj6) };
  const memo2 = callback2.useMemo(() => {
    const obj = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + youBarTotalHeight };
    return obj;
  }, items3);
  obj6 = { style: tmp.headerTitle, color: "mobile-text-heading-primary", variant: "heading-lg/bold", children: intl.string(require("intl").t["7hB4kg"]) };
  Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items5 = [closure_12(closure_6, obj5), ];
  let obj7 = { style: tmp.listContainer, children: closure_12(require("OneColumnGuildUpsellList").OneColumnGuildUpsellList, { suggestedGuilds: memo, contentContainerStyle: memo2, cardAction, onDismiss: callback, subheader: memo1 }) };
  items5[1] = closure_12(closure_6, obj7);
  return closure_13(closure_6, obj4);
});
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default tmp6;