// === Module 16531: GuildRoleSubscriptionPurchasePage ===

// Module 16531 (GuildRoleSubscriptionPurchasePage)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import LinkingDefault from "Linking" /* 4571 */;
import Text_Text from "Text/Text" /* 4892 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import _modDef9615 from "module_9615" /* 9615 */;
import GuildRoleSubscriptionPurchasePreviewCardDefault from "GuildRoleSubscriptionPurchasePreviewCard" /* 16541 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, TouchableOpacity: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticsLocations: closure_11, GuildFeatures: closure_12, MarketingURLs: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, heroImage: { aspectRatio: 4, width: "100%" }, guildIconContainer: null, guildIcon: null, contentCard: null, loadingContainer: null, socialContainer: null, socialBadge: null, socialBadgeIcon: null, socialBadgeArrow: null, separator: null, moneyBirbPlaceholder: null, gatedChannel: null, gatedChannelIcon: null };
const rect = { borderWidth: 3, borderRadius: nativeDefault.radii.md, alignSelf: "flex-start", top: -35, left: 16, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute" };
obj2.guildIconContainer = rect;
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.guildIcon = { borderRadius: nativeDefault.radii.sm };
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj2.contentCard = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md, marginTop: -15 };
obj2.loadingContainer = { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 };
obj2.socialContainer = { flexDirection: "row" };
let obj5 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md, marginTop: -15 };
obj2.socialBadge = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
obj2.socialBadgeIcon = { height: 24, marginRight: 6 };
let obj6 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
obj2.socialBadgeArrow = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 24 };
obj2.separator = size;
obj2.moneyBirbPlaceholder = { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" };
obj2.gatedChannel = { flexDirection: "row", alignItems: "center", marginBottom: -4 };
let obj7 = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.gatedChannelIcon = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_17();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = state(timestampProducer, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => state(timestampProducer, { style: closure_17().separator }));
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    ({ TERMS: obj3.termsURL, PAID_TERMS: obj3.paidURL } = constants3);
    obj2.children = intl.format(util.t.FSPTDI, { termsURL: null, paidURL: null });
    const tmp7 = state(Text_Text.Text, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
    const obj5 = { termsURL: null, paidURL: null };
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.FSPTDI, { termsURL: constants3.TERMS, paidURL: constants3.PAID_TERMS });
  return state(Text_Text.Text, obj);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ iconSource, text, onPress } = arg0);
  const tmp4 = closure_17();
  let num = 1;
  if (null != onPress) {
    num = 0.5;
  }
  if (cResult[0] === iconSource) {
    if (cResult[1] === tmp4.socialBadgeIcon) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== text) {
      const obj2 = { variant: "text-sm/medium", color: "text-default", children: text };
      const tmp10 = state(Text_Text.Text, obj2);
      cResult[3] = text;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp4.socialBadgeArrow) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] === onPress) {
        if (cResult[9] === tmp4.socialBadge) {
          if (cResult[10] === num) {
            if (cResult[11] === tmp6) {
              if (cResult[12] === tmp8) {
                if (cResult[13] === tmp11) {
                  let tmp15 = cResult[14];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const obj3 = { style: tmp4.socialBadge, activeOpacity: num, onPress, children: null };
      const items = [tmp6, tmp8, tmp11];
      obj3.children = items;
      const tmp18 = closure_1_15(hasOwnProperty, obj3);
      cResult[8] = onPress;
      cResult[9] = tmp4.socialBadge;
      cResult[10] = num;
      cResult[11] = tmp6;
      cResult[12] = tmp8;
      cResult[13] = tmp11;
      cResult[14] = tmp18;
      tmp15 = tmp18;
    }
    let tmp12 = tmp5;
    if (tmp5) {
      const obj4 = { source: _modDef9615, style: tmp4.socialBadgeArrow };
      tmp12 = state(native.Icon, obj4);
    }
    cResult[5] = tmp5;
    cResult[6] = tmp4.socialBadgeArrow;
    cResult[7] = tmp12;
    tmp11 = tmp12;
  }
  const tmp7 = state(native.Icon, { source: iconSource, style: tmp4.socialBadgeIcon, resizeMode: "contain", disableColor: true });
  cResult[0] = iconSource;
  cResult[1] = tmp4.socialBadgeIcon;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const obj5 = { source: iconSource, style: tmp4.socialBadgeIcon, resizeMode: "contain", disableColor: true };
}) : ((onPress) => {
  onPress = onPress.onPress;
  ({ iconSource, text } = onPress);
  const tmp = closure_17();
  let tmp5Result = null != onPress;
  const obj = { style: tmp.socialBadge, activeOpacity: null, onPress: null, children: null };
  let num = 1;
  if (tmp5Result) {
    num = 0.5;
  }
  obj.activeOpacity = num;
  obj.onPress = onPress;
  const items = [state(native.Icon, { source: iconSource, style: tmp.socialBadgeIcon, resizeMode: "contain", disableColor: true }), state(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: text }), ];
  if (tmp5Result) {
    const obj3 = { source: _modDef9615, style: tmp.socialBadgeArrow };
    tmp5Result = state(native.Icon, obj3);
  }
  items[2] = tmp5Result;
  obj.children = items;
  return closure_1_15(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let obj8 = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(stateFromStores1[10]).c(89);
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let obj = guildId(stateFromStores1[10]);
  const typeConsolidationEyebrow = guildId(stateFromStores1[15]).useTypeConsolidationEyebrow("PurchasePage", "text-xs/semibold");
  const tmp5 = closure_17();
  closure_2 = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { forceRestore: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  gatedChannelId(stateFromStores1[16])(first);
  let obj2 = guildId(stateFromStores1[15]);
  const first1 = guildId(stateFromStores1[17]).useGroupListingsForGuild(guildId)[0];
  const tmpResult = guildId(stateFromStores1[17]);
  const groupListingsFetchContext = guildId(stateFromStores1[18]).useGroupListingsFetchContext();
  const tmpResult7 = guildId(stateFromStores1[18]);
  const subscriptionsSettings = guildId(stateFromStores1[17]).useSubscriptionsSettings(guildId);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[1] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] !== guildId) {
    class G {
      constructor() {
        return closure_10.getGuild(guildId);
      }
    }
    cResult[2] = guildId;
    cResult[3] = G;
  } else {
    class G {
      constructor() {
        return closure_10.getGuild(guildId);
      }
    }
  }
  const tmpResult8 = guildId(stateFromStores1[17]);
  const stateFromStores = guildId(stateFromStores1[19]).useStateFromStores(tmp12, G);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        return closure_10.getGuild(guildId);
      }
    }
    cResult[4] = tmp17;
  } else {
    class G {
      constructor() {
        return closure_10.getGuild(guildId);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    cResult[5] = O;
  } else {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
  }
  const tmpResult9 = guildId(stateFromStores1[19]);
  if (first1 != null) {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
  }
  const subscriptionListingsForGroup = guildId(stateFromStores1[17]).useSubscriptionListingsForGroup(undefined, tmp17);
  const mapped = subscriptionListingsForGroup.map(O);
  if (null != gatedChannelId) {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    let ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
  }
  const obj4 = { guildId, groupListingId: null, location: null, relevantSubscriptionListingIds: null };
  const tmpResult10 = guildId(stateFromStores1[17]);
  if (first1 != null) {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
  }
  obj4.groupListingId = undefined;
  obj4.location = ROLE_SUBSCRIPTIONS_TAB;
  obj4.relevantSubscriptionListingIds = mapped;
  gatedChannelId(stateFromStores1[20])(obj4);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    const items1 = [ChannelStore];
    cResult[6] = items1;
    const tmp22 = items1;
  } else {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
  }
  if (cResult[7] !== gatedChannelId) {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    const items2 = [gatedChannelId];
    cResult[7] = gatedChannelId;
    cResult[8] = tmp25;
    cResult[9] = items2;
    let tmp24 = items2;
  } else {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    tmp24 = cResult[9];
  }
  const tmp7Result = gatedChannelId(stateFromStores1[20]);
  stateFromStores1 = guildId(stateFromStores1[19]).useStateFromStores(tmp22, tmp25, tmp24);
  const tmpResult11 = guildId(stateFromStores1[19]);
  const children = gatedChannelId(stateFromStores1[21])(stateFromStores1);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    const items3 = [ThemeStore];
    class V {
      constructor() {
        return "light" === closure_1_8.theme;
      }
    }
    cResult[10] = V;
    cResult[11] = items3;
    let tmp29 = items3;
  } else {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    tmp29 = cResult[11];
  }
  const tmp27 = gatedChannelId(stateFromStores1[21])(stateFromStores1);
  const stateFromStores2 = guildId(stateFromStores1[19]).useStateFromStores(tmp29, V);
  if (cResult[12] !== stateFromStores2) {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    cResult[12] = stateFromStores2;
    class V {
      constructor() {
        return "light" === closure_1_8.theme;
      }
    }
    cResult[13] = tmp31;
  } else {
    class O {
      constructor(arg0) {
        return guildId.id;
      }
    }
    if (groupListingsFetchContext) {
      class O {
        constructor(arg0) {
          return guildId.id;
        }
      }
    }
    const _Symbol = Symbol;
    class V {
      constructor() {
        return "light" === closure_1_8.theme;
      }
    }
    if (tmp33 === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor(arg0) {
          return guildId.id;
        }
      }
      const tmp36 = closure_14(children, { size: "large" });
      class V {
        constructor() {
          return "light" === closure_1_8.theme;
        }
      }
      cResult[14] = tmp36;
      const tmp34 = tmp36;
    } else {
      class O {
        constructor(arg0) {
          return guildId.id;
        }
      }
    }
    if (cResult[15] !== tmp5.loadingContainer) {
      class O {
        constructor(arg0) {
          return guildId.id;
        }
      }
      const obj5 = { style: null, children: null };
      class V {
        constructor() {
          return "light" === closure_1_8.theme;
        }
      }
      obj5.children = tmp34;
      const tmp39 = closure_14(closure_6, obj5);
      cResult[15] = tmp5.loadingContainer;
      cResult[16] = tmp39;
      const tmp37 = tmp39;
    } else {
      class O {
        constructor(arg0) {
          return guildId.id;
        }
      }
    }
    return tmp37;
  }
  const tmpResult12 = guildId(stateFromStores1[19]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let stateFromStores1;
  let children;
  let store_page_trailer_url;
  const typeConsolidationEyebrow = guildId(stateFromStores1[15]).useTypeConsolidationEyebrow("PurchasePage", "text-xs/semibold");
  const tmp4 = closure_17();
  importAll = tmp4;
  gatedChannelId(stateFromStores1[16])({ forceRestore: true });
  let obj = guildId(stateFromStores1[15]);
  const first = guildId(stateFromStores1[17]).useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(stateFromStores1[17]);
  const groupListingsFetchContext = guildId(stateFromStores1[18]).useGroupListingsFetchContext();
  const obj3 = guildId(stateFromStores1[18]);
  const subscriptionsSettings = guildId(stateFromStores1[17]).useSubscriptionsSettings(guildId);
  const obj4 = guildId(stateFromStores1[17]);
  let items = [GuildStore];
  const stateFromStores = guildId(stateFromStores1[19]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj5 = guildId(stateFromStores1[19]);
  let id;
  if (first != null) {
    id = first.id;
  }
  const subscriptionListingsForGroup = guildId(stateFromStores1[17]).useSubscriptionListingsForGroup(id, { includeUnpublished: false });
  const mapped = subscriptionListingsForGroup.map((id) => id.id);
  if (null != gatedChannelId) {
    let ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
  }
  const obj7 = { guildId, groupListingId: null, location: null, relevantSubscriptionListingIds: null };
  let id1;
  const obj6 = guildId(stateFromStores1[17]);
  if (first != null) {
    id1 = first.id;
  }
  obj7.groupListingId = id1;
  obj7.location = ROLE_SUBSCRIPTIONS_TAB;
  obj7.relevantSubscriptionListingIds = mapped;
  gatedChannelId(stateFromStores1[20])(obj7);
  const tmp5Result = gatedChannelId(stateFromStores1[20]);
  const items1 = [ChannelStore];
  const items2 = [gatedChannelId];
  stateFromStores1 = guildId(stateFromStores1[19]).useStateFromStores(items1, () => ChannelStore.getChannel(gatedChannelId), items2);
  children = tmp5(tmp2[21])(stateFromStores1);
  guildId(stateFromStores1[19]);
  [][0] = ThemeStore;
  if (groupListingsFetchContext) {
    if (null != subscriptionsSettings) {
      if (null != stateFromStores) {
        if (null != first) {
          const features = stateFromStores.features;
          const coverImageURI = require("GuildRoleSubscriptionSettingsUtils").getCoverImageURI(subscriptionsSettings);
          let hasItem = features.has(constants2.PARTNERED);
          store_page_trailer_url = subscriptionsSettings.store_page_trailer_url;
          if (null != gatedChannelId) {
            if (null != stateFromStores1) {
              const intl2 = tmp(tmp2[12]).intl;
              const obj8 = {
                unlockHook() {
                              const obj = { style: closure_2.gatedChannel, children: null };
                              const items = [state(native.Spacer, { size: 3 }), , , ];
                              const obj2 = { size: native.Icon.Sizes.SMALL_20, style: closure_2.gatedChannelIcon, source: utils_ChannelUtils.getChannelIcon(stateFromStores1) };
                              items[1] = state(native.Icon, obj2);
                              items[2] = state(native.Spacer, { size: 3 });
                              items[3] = state(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children });
                              obj.children = items;
                              return closure_2_15(timestampProducer, obj);
                            }
              };
              let formatResult = intl2.format(tmp(tmp2[12]).t.A1L1hU, obj8);
            }
            const obj9 = { style: tmp4.container, scrollIndicatorInsets: { right: 1 }, children: null };
            const obj10 = { source: coverImageURI, style: tmp4.heroImage };
            const items3 = [closure_14(tmp5(tmp2[26]), obj10), , ];
            const obj11 = { style: tmp4.contentCard, children: null };
            const obj12 = { style: tmp4.guildIconContainer, children: null };
            const obj13 = { size: tmp(tmp2[27]).GuildIconSizes.XLARGE, guild: stateFromStores, style: tmp4.guildIcon };
            obj12.children = closure_14(tmp5(tmp2[27]), obj13);
            const items4 = [closure_14(closure_6, obj12), , , , , , , , , , ];
            const obj14 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
            const intl3 = tmp(tmp2[12]).intl;
            const obj15 = { serverName: stateFromStores.name };
            obj14.children = intl3.format(tmp(tmp2[12]).t.mqCkpl, obj15);
            items4[1] = closure_14(tmp(tmp2[11]).Text, obj14);
            items4[2] = closure_14(tmp(tmp2[13]).Spacer, { size: 8 });
            const obj16 = { variant: "text-sm/normal", color: "text-default", lineClamp: 3, children: subscriptionsSettings.description };
            items4[3] = closure_14(tmp(tmp2[28]).TruncatedText, obj16);
            let tmp21Result = hasItem;
            if (!hasItem) {
              tmp21Result = null != store_page_trailer_url;
            }
            if (tmp21Result) {
              const items5 = [closure_14(tmp(tmp2[13]).Spacer, { size: 24 }), ];
              const obj17 = { style: tmp4.socialContainer, children: null };
              if (hasItem) {
                const obj18 = { iconSource: tmp5(tmp2[30]), text: null };
                const intl4 = tmp(tmp2[12]).intl;
                obj18.text = intl4.string(tmp(tmp2[12]).t["2MhjUV"]);
                hasItem = closure_14(closure_20, obj18);
              }
              const items6 = [hasItem, ];
              let tmp23Result = null != store_page_trailer_url;
              if (tmp23Result) {
                const obj19 = { iconSource: tmp5(tmp2[31]), text: null, onPress: null };
                const intl5 = tmp(tmp2[12]).intl;
                obj19.text = intl5.string(tmp(tmp2[12]).t["4PGeGA"]);
                obj19.onPress = function onPress() {
                  return LinkingDefault.openURL(store_page_trailer_url);
                };
                tmp23Result = closure_14(closure_20, obj19);
              }
              const obj20 = { children: null };
              const obj21 = { gap: 8, children: null };
              items6[1] = tmp23Result;
              obj21.children = items6;
              obj17.children = closure_15(tmp(tmp2[29]).GappedList, obj21);
              items5[1] = closure_14(closure_6, obj17);
              obj20.children = items5;
              tmp21Result = closure_15(closure_16, obj20);
            }
            items4[4] = tmp21Result;
            items4[5] = closure_14(tmp(tmp2[13]).Spacer, { size: 16 });
            items4[6] = closure_14(closure_19, {});
            items4[7] = closure_14(closure_18, {});
            const obj22 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: null, children: null };
            const items7 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
            obj22.style = items7;
            obj22.children = formatResult;
            items4[8] = closure_14(tmp(tmp2[11]).Text, obj22);
            items4[9] = closure_14(tmp(tmp2[13]).Spacer, { size: 24 });
            const obj23 = { gap: 16, children: mapped.map((listingId) => state(GuildRoleSubscriptionPurchasePreviewCardDefault, { listingId, guildId }, listingId)) };
            items4[10] = closure_14(tmp(tmp2[29]).GappedList, obj23);
            obj11.children = items4;
            items3[1] = closure_15(closure_6, obj11);
            const obj24 = { source: tmp19, style: tmp4.moneyBirbPlaceholder };
            items3[2] = closure_14(tmp5(tmp2[26]), obj24);
            obj9.children = items3;
            return closure_15(closure_7, obj9);
          }
          const intl = tmp(tmp2[12]).intl;
          formatResult = intl.string(tmp(tmp2[12]).t["mPHb1/"]);
          const obj27 = require("GuildRoleSubscriptionSettingsUtils");
        }
      }
    }
  }
  const tmpResult = guildId(stateFromStores1[19]);
  return closure_14(closure_6, { style: tmp4.loadingContainer, children: closure_14(children, { size: "large" }) });
});