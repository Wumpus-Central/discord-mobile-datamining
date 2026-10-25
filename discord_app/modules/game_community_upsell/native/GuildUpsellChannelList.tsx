// discord_app/modules/game_community_upsell/native/GuildUpsellChannelList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import MobileGameCommunitiesActionCreatorsAll from "MobileGameCommunitiesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocalAppDetectionStore from "../../local_app_detection/native/LocalAppDetectionStore.tsx";
import ConsentStore from "../../../stores/ConsentStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_9 = fn(17703).MAX_DISPLAYED_UPSELL_GUILDS;
const Constants = fn(1087);
({ AnalyticEvents: c10, Consents: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4971);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG },
  header: null,
  headerTitle: null,
  listContainer: null,
  subheaderWrapper: null,
  createDescription: null,
  templateScroll: null,
  templateRow: null,
  templateCard: null,
  templateIconWrapper: null,
  templateTitle: null,
  buttonGroup: null,
  descriptionSpacing: null,
  joinSection: null,
};
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
obj2.templateRow = {
  flexDirection: "row",
  alignItems: "stretch",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.templateCard = { width: 204 };
let obj8 = {
  flexDirection: "row",
  alignItems: "stretch",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.templateIconWrapper = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj9 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.templateTitle = { marginBottom: nativeDefault.space.PX_4 };
let obj10 = { marginBottom: nativeDefault.space.PX_4 };
obj2.buttonGroup = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_20 };
const obj11 = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_20 };
obj2.descriptionSpacing = { marginBottom: nativeDefault.space.PX_8 };
const obj12 = { marginBottom: nativeDefault.space.PX_8 };
obj2.joinSection = { gap: nativeDefault.space.PX_4 };
let closure_14 = createStyles.createStyles(obj2);
const obj13 = { gap: nativeDefault.space.PX_4 };
let items = [
  {
    id: "hangout",
    title: fn(1128).t.ScXySs,
    description: fn(1128).t.DSCqxM,
    Icon: fn(14271).BumpingFistsSpotIllustration,
  },
  ,
];
const obj14 = {
  id: "hangout",
  title: fn(1128).t.ScXySs,
  description: fn(1128).t.DSCqxM,
  Icon: fn(14271).BumpingFistsSpotIllustration,
};
items[1] = {
  id: "gaming",
  title: fn(1128).t["F+MTAZ"],
  description: fn(1128).t.srNlJw,
  Icon: fn(17704).ChatControllersSpotIllustration,
};
const obj15 = {
  id: "gaming",
  title: fn(1128).t["F+MTAZ"],
  description: fn(1128).t.srNlJw,
  Icon: fn(17704).ChatControllersSpotIllustration,
};
items[2] = {
  id: "hobbies",
  title: fn(1128).t["0Ka6B5"],
  description: fn(1128).t["5oGAp/"],
  Icon: fn(17708).MiniaturesSpotIllustration,
};
const ReactCompilerGating = fn(558);
const obj16 = {
  id: "hobbies",
  title: fn(1128).t["0Ka6B5"],
  description: fn(1128).t["5oGAp/"],
  Icon: fn(17708).MiniaturesSpotIllustration,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildUpsellChannelList(arg0) {
      const cResult = require("c").c(57);
      const tmp4 = closure_14();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [ConsentStore, LocalAppDetectionStore];
        const fn = function h() {
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
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      const tmpResult = require("initialize");
      const data = require("MobileGameCommunitiesActionCreators").useMobileGameCommunities(stateFromStores).data;
      if (cResult[2] !== data) {
        let items1 = data;
        if (data == null) {
          items1 = [];
        }
        cResult[2] = data;
        cResult[3] = items1;
        let arr2 = items1;
      } else {
        arr2 = cResult[3];
      }
      if (cResult[4] !== arr2) {
        const substr = arr2.slice(0, closure_9);
        cResult[4] = arr2;
        cResult[5] = substr;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0, arg1) {
            obj = closure_1_2(closure_1_3[16]);
            dismissGuildResult = obj.dismissGuild(arg0);
            obj2 = closure_1(closure_1_3[17]);
            obj1 = { game_id: arg1, guild_id: arg0 };
            trackResult = obj2.track(closure_1_10.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj1);
            return;
          }
        }
        cResult[6] = M;
      } else {
        class M {
          constructor(arg0, arg1) {
            obj = closure_1_2(closure_1_3[16]);
            dismissGuildResult = obj.dismissGuild(arg0);
            obj2 = closure_1(closure_1_3[17]);
            obj1 = { game_id: arg1, guild_id: arg0 };
            trackResult = obj2.track(closure_1_10.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj1);
            return;
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0, arg1) {
            obj = closure_1_2(closure_1_3[16]);
            dismissGuildResult = obj.dismissGuild(arg0);
            obj2 = closure_1(closure_1_3[17]);
            obj1 = { game_id: arg1, guild_id: arg0 };
            trackResult = obj2.track(closure_1_10.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj1);
            return;
          }
        }
        cResult[7] = tmp16;
      } else {
        class M {
          constructor(arg0, arg1) {
            obj = closure_1_2(closure_1_3[16]);
            dismissGuildResult = obj.dismissGuild(arg0);
            obj2 = closure_1(closure_1_3[17]);
            obj1 = { game_id: arg1, guild_id: arg0 };
            trackResult = obj2.track(closure_1_10.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj1);
            return;
          }
        }
      }
      importDefault = tmp16;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
        cResult[8] = A;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
        const obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
        let intl = tmp(1128).intl;
        obj2.children = intl.string(tmp(1128).t["abaDI+"]);
        const tmp19 = closure_12(tmp(5234).Text, obj2);
        cResult[9] = tmp19;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
        const stringResult = obj5.string(tmp(1128).t.raDC7V);
        cResult[10] = stringResult;
        const tmp20 = stringResult;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
      }
      if (cResult[11] !== tmp4.createDescription) {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
        let obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.createDescription, children: tmp20 };
        const tmp23 = closure_12(tmp(5234).Text, obj3);
        cResult[11] = tmp4.createDescription;
        cResult[12] = tmp23;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
      }
      if (cResult[13] === tmp4.templateCard) {
        class A {
          constructor() {
            obj = closure_1(closure_1_3[18]);
            result = obj.openGuildJoinServerScreen();
            return;
          }
        }
      }
      const mapped = items.map((Icon) => {
        const obj = { onPress, radius: 16, style: closure_0.templateCard, children: null };
        items = [
          __initData(timestampProducer, {
            style: closure_0.templateIconWrapper,
            children: __initData(Icon.Icon, { width: 114, height: 64 }),
          }),
        ];
        const obj3 = { children: null };
        const obj4 = {
          variant: "text-md/bold",
          color: "mobile-text-heading-primary",
          style: closure_0.templateTitle,
          children: null,
        };
        const intl = util.intl;
        obj4.children = intl.string(Icon.title);
        const items1 = [__initData(Text_Text.Text, obj4)];
        const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: null };
        const intl2 = util.intl;
        obj5.children = intl2.string(Icon.description);
        items1[1] = __initData(Text_Text.Text, obj5);
        obj3.children = items1;
        items[1] = map1(timestampProducer, obj3);
        obj.children = items;
        return map1(Card.Card, obj, Icon.id);
      });
      cResult[13] = tmp4.templateCard;
      cResult[14] = tmp4.templateIconWrapper;
      cResult[15] = tmp4.templateTitle;
      cResult[16] = mapped;
      const tmpResult2 = require("MobileGameCommunitiesActionCreators");
    }
  : function GuildUpsellChannelList(style) {
      let callback1;
      let callback2;
      const tmp = closure_14();
      _require = tmp;
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
      const data = require("MobileGameCommunitiesActionCreators").useMobileGameCommunities(stateFromStores).data;
      let items1 = [data];
      const memo = callback2.useMemo(() => {
        items = data;
        if (data == null) {
          items = [];
        }
        return items.slice(0, closure_9);
      }, items1);
      const callback = callback2.useCallback((guild_id, game_id) => {
        memo(callback1[16]).dismissGuild(guild_id);
        const obj = memo(callback1[16]);
        data(callback1[17]).track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, { game_id, guild_id });
      }, []);
      callback1 = callback2.useCallback(() => {
        data(callback1[18]).openCreateGuildModal();
      }, []);
      callback2 = callback2.useCallback(() => {
        const result = data(callback1[18]).openGuildJoinServerScreen();
      }, []);
      let items2 = [callback1, callback2, memo.length, tmp];
      const memo1 = callback2.useMemo(() => {
        let obj = { style: closure_0.subheaderWrapper, children: null };
        const obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
        let intl = util.intl;
        obj2.children = intl.string(util.t["abaDI+"]);
        items = [__initData(Text_Text.Text, obj2), , , ,];
        let obj3 = {
          variant: "text-sm/medium",
          color: "text-subtle",
          style: closure_0.createDescription,
          children: null,
        };
        let intl2 = util.intl;
        obj3.children = intl2.string(util.t.raDC7V);
        items[1] = __initData(Text_Text.Text, obj3);
        items[2] = __initData(hasOwnProperty, {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          style: closure_0.templateScroll,
          contentContainerStyle: closure_0.templateRow,
          children: items.map((Icon) => {
            const obj = { onPress, radius: 16, style: closure_1_0.templateCard, children: null };
            items = [
              closure_2_12(closure_2_6, {
                style: closure_1_0.templateIconWrapper,
                children: closure_2_12(Icon.Icon, { width: 114, height: 64 }),
              }),
            ];
            const obj3 = { children: null };
            const obj4 = {
              variant: "text-md/bold",
              color: "mobile-text-heading-primary",
              style: closure_1_0.templateTitle,
              children: null,
            };
            const intl = closure_0(callback1[9]).intl;
            obj4.children = intl.string(Icon.title);
            const items1 = [closure_2_12(closure_0(callback1[19]).Text, obj4)];
            const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: null };
            const intl2 = closure_0(callback1[9]).intl;
            obj5.children = intl2.string(Icon.description);
            items1[1] = closure_2_12(closure_0(callback1[19]).Text, obj5);
            obj3.children = items1;
            items[1] = closure_2_13(closure_2_6, obj3);
            obj.children = items;
            return closure_2_13(closure_0(callback1[20]).Card, obj, Icon.id);
          }),
        });
        let obj5 = { style: closure_0.buttonGroup, children: null };
        const obj6 = { variant: "primary", size: "md", text: null, onPress: null, grow: true };
        const intl3 = util.intl;
        obj6.text = intl3.string(util.t.B44MTm);
        obj6.onPress = callback1;
        let items1 = [__initData(components_Button_Button.Button, obj6)];
        const obj7 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
        const intl4 = util.intl;
        obj7.text = intl4.string(util.t.wKy7MA);
        obj7.onPress = callback2;
        items1[1] = __initData(components_Button_Button.Button, obj7);
        obj5.children = items1;
        items[3] = map1(timestampProducer, obj5);
        let tmpResult = memo.length > 0;
        if (tmpResult) {
          const obj8 = { style: closure_0.joinSection, children: null };
          const obj9 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
          const intl5 = util.intl;
          obj9.children = intl5.string(util.t.rJRote);
          const items2 = [__initData(Text_Text.Text, obj9)];
          const obj10 = {
            variant: "text-sm/medium",
            color: "text-subtle",
            style: closure_0.descriptionSpacing,
            children: null,
          };
          const intl6 = util.intl;
          obj10.children = intl6.string(util.t.pJT2DK);
          items2[1] = __initData(Text_Text.Text, obj10);
          obj8.children = items2;
          tmpResult = map1(timestampProducer, obj8);
        }
        items[4] = tmpResult;
        obj.children = items;
        return map1(timestampProducer, obj);
      }, items2);
      let obj2 = require("MobileGameCommunitiesActionCreators");
      const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
      const items3 = [youBarTotalHeight];
      let obj4 = { style: null, children: null };
      const items4 = [tmp.container, style.style];
      obj4.style = items4;
      let obj5 = { style: tmp.header, children: null };
      const memo2 = callback2.useMemo(
        () => ({
          paddingHorizontal: nativeDefault.space.PX_16,
          paddingBottom: nativeDefault.space.PX_16 + youBarTotalHeight,
        }),
        items3,
      );
      let obj6 = {
        style: tmp.headerTitle,
        color: "mobile-text-heading-primary",
        variant: "heading-lg/bold",
        children: null,
      };
      let intl = require("util").intl;
      obj6.children = intl.string(require("util").t["7hB4kg"]);
      obj5.children = closure_12(require("Text/Text").Text, obj6);
      const items5 = [closure_12(closure_6, obj5)];
      let obj3 = require("useYouBarTotalHeight");
      items5[1] = closure_12(closure_6, {
        style: tmp.listContainer,
        children: closure_12(require("OneColumnGuildUpsellList").OneColumnGuildUpsellList, {
          suggestedGuilds: memo,
          contentContainerStyle: memo2,
          onDismiss: callback,
          subheader: memo1,
        }),
      });
      obj4.children = items5;
      return closure_13(closure_6, obj4);
    };
