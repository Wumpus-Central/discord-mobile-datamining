// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import utils_ChannelUtils from "../../../../utils/native/ChannelUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09602_AssetRegistry.js";
import GuildRoleSubscriptionPurchasePreviewCardDefault from "GuildRoleSubscriptionPurchasePreviewCard.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let guildId, importAll;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let size;
let unpackModuleId;
({
  ActivityIndicator: closure_4,
  TouchableOpacity: hasOwnProperty,
  View: metroRequire,
  ScrollView: metroImportDefault,
} = react_native);
({ AnalyticsLocations: unpackModuleId, GuildFeatures: closure_12, MarketingURLs: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  heroImage: { aspectRatio: 4, width: "100%" },
  guildIconContainer: rect,
  guildIcon: obj3,
  contentCard: obj4,
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 },
  socialContainer: { flexDirection: "row" },
  socialBadge: obj5,
  socialBadgeIcon: { height: 24, marginRight: 6 },
  socialBadgeArrow: obj6,
  separator: size,
  moneyBirbPlaceholder: { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" },
  gatedChannel: { flexDirection: "row", alignItems: "center", marginBottom: -4 },
  gatedChannelIcon: obj7,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
rect = {
  borderWidth: 3,
  borderRadius: nativeDefault.radii.md,
  alignSelf: "flex-start",
  top: -35,
  left: 16,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
};
obj3 = { borderRadius: nativeDefault.radii.sm };
obj4 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingTop: 47,
  paddingHorizontal: 16,
  borderTopLeftRadius: nativeDefault.radii.md,
  borderTopRightRadius: nativeDefault.radii.md,
  marginTop: -15,
};
obj5 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.xl,
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: "center",
};
obj6 = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = {
  width: "100%",
  height: 1,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  marginVertical: 24,
};
obj7 = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_17();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { style: tmp2.separator };
        const tmp6 = authStore2(metroRequire, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_17().separator };
      return authStore2(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let obj5;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(intl6.t.FSPTDI, obj5) };
        const Text = Text_Text.Text;
        intl = intl6.intl;
        obj5 = { termsURL: null, paidURL: null };
        ({ TERMS: obj3.termsURL, PAID_TERMS: obj3.paidURL } = map1);
        const tmp7 = authStore2(Text, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let intl;
      let obj2;
      const obj = { variant: "text-xs/normal", color: "text-muted", children: intl.format(intl6.t.FSPTDI, obj2) };
      const Text = Text_Text.Text;
      intl = intl6.intl;
      obj2 = { termsURL: map1.TERMS, paidURL: map1.PAID_TERMS };
      return authStore2(Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let iconSource;
      let items;
      let onPress;
      let text;
      const obj = react2;
      const cResult = obj.c(15);
      ({ iconSource, text, onPress } = arg0);
      const tmp4 = closure_17();
      let num = 1;
      if (null != onPress) {
        num = 0.5;
      }
      if (cResult[0] === iconSource) {
        let tmp6;
        let tmp8;
        if (cResult[1] === tmp4.socialBadgeIcon) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== text) {
          const obj2 = { variant: "text-sm/medium", color: "text-default", children: text };
          const tmp10 = authStore2(Text_Text.Text, obj2);
          cResult[3] = text;
          cResult[4] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[4];
        }
        if ((cResult[5] === null) != onPress) {
          let tmp11;
          if (cResult[6] === tmp4.socialBadgeArrow) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === onPress) {
            if (cResult[9] === tmp4.socialBadge) {
              if (cResult[10] === num) {
                if (cResult[11] === tmp6) {
                  if (cResult[12] === tmp8) {
                    let tmp15;
                    if (cResult[13] === tmp11) {
                      tmp15 = cResult[14];
                    }
                    return tmp15;
                  }
                }
              }
            }
          }
          const obj3 = { style: tmp4.socialBadge, activeOpacity: num, onPress, children: items };
          items = [tmp6, tmp8, tmp11];
          const tmp18 = closure_15(hasOwnProperty, obj3);
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
        if (tmp12) {
          const obj4 = { source: AssetRegistryDefault, style: tmp4.socialBadgeArrow };
          const Icon = native.Icon;
          tmp12 = authStore2(Icon, obj4);
        }
        cResult[5] = null != onPress;
        cResult[6] = tmp4.socialBadgeArrow;
        cResult[7] = tmp12;
        tmp11 = tmp12;
      }
      const obj5 = { source: iconSource, style: tmp4.socialBadgeIcon, resizeMode: "contain", disableColor: true };
      const tmp7 = authStore2(native.Icon, obj5);
      cResult[0] = iconSource;
      cResult[1] = tmp4.socialBadgeIcon;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (onPress) => {
      let iconSource;
      let items;
      let num;
      let text;
      onPress = onPress.onPress;
      ({ iconSource, text } = onPress);
      const tmp = closure_17();
      let tmp5Result = null != onPress;
      const obj = { style: tmp.socialBadge, activeOpacity: num, onPress, children: items };
      num = 1;
      if (tmp5Result) {
        num = 0.5;
      }
      items = [, ,];
      const obj2 = { source: iconSource, style: tmp.socialBadgeIcon, resizeMode: "contain", disableColor: true };
      items[0] = authStore2(native.Icon, obj2);
      items[1] = authStore2(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: text });
      if (tmp5Result) {
        const obj3 = { source: AssetRegistryDefault, style: tmp.socialBadgeArrow };
        const Icon = native.Icon;
        tmp5Result = authStore2(Icon, obj3);
      }
      items[2] = tmp5Result;
      return closure_15(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let ROLE_SUBSCRIPTIONS_TAB;
      let first;
      let stateFromStores1;
      let theme;
      let tmp12;
      let tmp23;
      let tmp25;
      let tmp30;
      let tmp34;
      let tmp37;
      let obj = guildId(stateFromStores1[10]);
      const cResult = obj.c(89);
      guildId = guildId.guildId;
      const gatedChannelId = guildId.gatedChannelId;
      let obj2 = guildId(stateFromStores1[15]);
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("PurchasePage", "text-xs/semibold");
      const tmp5 = closure_17();
      let closure_2 = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { forceRestore: true };
        cResult[0] = obj3;
        first = obj3;
      } else {
        first = cResult[0];
      }
      gatedChannelId(stateFromStores1[16])(first);
      const tmpResult = guildId(stateFromStores1[17]);
      const first1 = tmpResult.useGroupListingsForGuild(guildId)[0];
      const tmpResult7 = guildId(stateFromStores1[18]);
      const groupListingsFetchContext = tmpResult7.useGroupListingsFetchContext();
      const tmpResult8 = guildId(stateFromStores1[17]);
      const subscriptionsSettings = tmpResult8.useSubscriptionsSettings(guildId);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore];
        cResult[1] = items;
        tmp12 = items;
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
      const tmpResult9 = guildId(stateFromStores1[19]);
      const stateFromStores = tmpResult9.useStateFromStores(tmp12, G);
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
      const useSubscriptionListingsForGroup = guildId(stateFromStores1[17]).useSubscriptionListingsForGroup;
      guildId(stateFromStores1[17]);
      if (first1 != null) {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
      }
      const subscriptionListingsForGroup = useSubscriptionListingsForGroup(undefined, tmp17);
      const mapped = subscriptionListingsForGroup.map(O);
      if (null != gatedChannelId) {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
        ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
      } else {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
        ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
      }
      let obj4 = {
        guildId,
        groupListingId: undefined,
        location: ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: mapped,
      };
      const tmp7Result = gatedChannelId(stateFromStores1[20]);
      if (first1 != null) {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
      }
      tmp7Result(obj4);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
        const items1 = [ChannelStore];
        cResult[6] = items1;
        tmp23 = items1;
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
        cResult[8] = tmp26;
        cResult[9] = items2;
        tmp25 = items2;
      } else {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
        tmp25 = cResult[9];
      }
      const tmpResult11 = guildId(stateFromStores1[19]);
      stateFromStores1 = tmpResult11.useStateFromStores(tmp23, tmp26, tmp25);
      const children = gatedChannelId(stateFromStores1[21])(stateFromStores1);
      gatedChannelId(stateFromStores1[21])(stateFromStores1);
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
        tmp30 = items3;
      } else {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
        tmp30 = cResult[11];
      }
      const tmpResult12 = guildId(stateFromStores1[19]);
      const stateFromStores2 = tmpResult12.useStateFromStores(tmp30, V);
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
        cResult[13] = tmp33;
      } else {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
      }
      if (groupListingsFetchContext) {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
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
        tmp34 = tmp36;
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
        const obj5 = { style: null, children: tmp34 };
        class V {
          constructor() {
            return "light" === closure_1_8.theme;
          }
        }
        const tmp39 = closure_14(closure_6, obj5);
        cResult[15] = tmp5.loadingContainer;
        cResult[16] = tmp39;
        tmp37 = tmp39;
      } else {
        class O {
          constructor(arg0) {
            return guildId.id;
          }
        }
      }
      return tmp37;
    }
  : (guildId) => {
      let GappedList;
      let ROLE_SUBSCRIPTIONS_TAB;
      let closure_2;
      let id1;
      let intl3;
      let intl4;
      let intl5;
      let items3;
      let items4;
      let items7;
      let obj12;
      let obj14;
      let obj20;
      let theme;
      let tmp5Result2;
      guildId = guildId.guildId;
      const gatedChannelId = guildId.gatedChannelId;
      let stateFromStores1;
      let children;
      let store_page_trailer_url;
      let obj = guildId(stateFromStores1[15]);
      const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("PurchasePage", "text-xs/semibold");
      const tmp4 = closure_17();
      importAll = tmp4;
      gatedChannelId(stateFromStores1[16])({ forceRestore: true });
      let obj2 = guildId(stateFromStores1[17]);
      const first = obj2.useGroupListingsForGuild(guildId)[0];
      let obj3 = guildId(stateFromStores1[18]);
      const groupListingsFetchContext = obj3.useGroupListingsFetchContext();
      let obj4 = guildId(stateFromStores1[17]);
      const subscriptionsSettings = obj4.useSubscriptionsSettings(guildId);
      let items = [GuildStore];
      const obj5 = guildId(stateFromStores1[19]);
      const stateFromStores = obj5.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let id;
      const useSubscriptionListingsForGroup = guildId(stateFromStores1[17]).useSubscriptionListingsForGroup;
      guildId(stateFromStores1[17]);
      if (first != null) {
        id = first.id;
      }
      const subscriptionListingsForGroup = useSubscriptionListingsForGroup(id, { includeUnpublished: false });
      const mapped = subscriptionListingsForGroup.map((id) => id.id);
      if (null != gatedChannelId) {
        ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
      } else {
        ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
      }
      const obj6 = {
        guildId,
        groupListingId: id1,
        location: ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: mapped,
      };
      id1 = undefined;
      const tmp5Result = gatedChannelId(stateFromStores1[20]);
      if (first != null) {
        id1 = first.id;
      }
      tmp5Result(obj6);
      const items1 = [ChannelStore];
      const items2 = [gatedChannelId];
      const tmpResult = guildId(stateFromStores1[19]);
      stateFromStores1 = tmpResult.useStateFromStores(items1, () => ChannelStore.getChannel(gatedChannelId), items2);
      children = tmp5(tmp2[21])(stateFromStores1);
      guildId(stateFromStores1[19]);
      [][0] = ThemeStore;
      if (groupListingsFetchContext) {
        if (null != subscriptionsSettings) {
          if (null != stateFromStores) {
            if (null != first) {
              const features = stateFromStores.features;
              const obj26 = require("GuildRoleSubscriptionSettingsUtils");
              const coverImageURI = obj26.getCoverImageURI(subscriptionsSettings);
              const description = subscriptionsSettings.description;
              let hasItem = features.has(constants2.PARTNERED);
              store_page_trailer_url = subscriptionsSettings.store_page_trailer_url;
              if (null != gatedChannelId) {
                let formatResult;
                if (null != stateFromStores1) {
                  const intl2 = tmp(tmp2[12]).intl;
                  const obj7 = {
                    unlockHook() {
                      let items;
                      let obj3;
                      const obj = { style: closure_2.gatedChannel, children: items };
                      items = [authStore2(native.Spacer, { size: 3 }), , ,];
                      const obj2 = {
                        size: native.Icon.Sizes.SMALL_20,
                        style: closure_2.gatedChannelIcon,
                        source: obj3.getChannelIcon(stateFromStores1),
                      };
                      const Icon = native.Icon;
                      obj3 = utils_ChannelUtils;
                      items[1] = authStore2(Icon, obj2);
                      items[2] = authStore2(native.Spacer, { size: 3 });
                      const obj4 = { variant: "text-xs/semibold", color: "text-default", children };
                      items[3] = authStore2(Text_Text.Text, obj4);
                      return closure_15(metroRequire, obj);
                    },
                  };
                  formatResult = intl2.format(tmp(tmp2[12]).t.A1L1hU, obj7);
                }
                const obj8 = { style: tmp4.container, scrollIndicatorInsets: { right: 1 }, children: items3 };
                const obj9 = { source: coverImageURI, style: tmp4.heroImage };
                items3 = [closure_14(gatedChannelId(stateFromStores1[26]), obj9), ,];
                const obj10 = { style: tmp4.contentCard, children: items4 };
                const obj11 = { style: tmp4.guildIconContainer, children: closure_14(tmp5Result2, obj12) };
                obj12 = {
                  size: guildId(stateFromStores1[27]).GuildIconSizes.XLARGE,
                  guild: stateFromStores,
                  style: tmp4.guildIcon,
                };
                tmp5Result2 = gatedChannelId(stateFromStores1[27]);
                items4 = [closure_14(closure_6, obj11), , , , , , , , , ,];
                const obj13 = {
                  variant: "heading-xl/bold",
                  color: "mobile-text-heading-primary",
                  children: intl3.format(guildId(stateFromStores1[12]).t.mqCkpl, obj14),
                };
                const Text = tmp(tmp2[11]).Text;
                intl3 = tmp(tmp2[12]).intl;
                obj14 = { serverName: stateFromStores.name };
                items4[1] = closure_14(Text, obj13);
                items4[2] = closure_14(guildId(stateFromStores1[13]).Spacer, { size: 8 });
                const obj15 = { variant: "text-sm/normal", color: "text-default", lineClamp: 3, children: description };
                items4[3] = closure_14(guildId(stateFromStores1[28]).TruncatedText, obj15);
                let tmp22Result = hasItem || null != store_page_trailer_url;
                if (tmp22Result) {
                  const items5 = [closure_14(guildId(stateFromStores1[13]).Spacer, { size: 24 })];
                  const obj16 = { style: tmp4.socialContainer, children: closure_15(GappedList, obj20) };
                  GappedList = tmp(tmp2[29]).GappedList;
                  if (hasItem) {
                    const obj17 = {
                      iconSource: gatedChannelId(stateFromStores1[30]),
                      text: intl4.string(guildId(stateFromStores1[12]).t["2MhjUV"]),
                    };
                    intl4 = tmp(tmp2[12]).intl;
                    hasItem = closure_14(closure_20, obj17);
                  }
                  const items6 = [hasItem];
                  let tmp24Result = null != store_page_trailer_url;
                  if (tmp24Result) {
                    const obj18 = {
                      iconSource: gatedChannelId(stateFromStores1[31]),
                      text: intl5.string(guildId(stateFromStores1[12]).t["4PGeGA"]),
                      onPress() {
                        const obj = LinkingDefault;
                        return obj.openURL(store_page_trailer_url);
                      },
                    };
                    intl5 = tmp(tmp2[12]).intl;
                    tmp24Result = closure_14(closure_20, obj18);
                  }
                  const obj19 = { children: items5 };
                  obj20 = { gap: 8, children: items6 };
                  items6[1] = tmp24Result;
                  items5[1] = closure_14(closure_6, obj16);
                  tmp22Result = closure_15(closure_16, obj19);
                }
                items4[4] = tmp22Result;
                items4[5] = closure_14(guildId(stateFromStores1[13]).Spacer, { size: 16 });
                items4[6] = closure_14(closure_19, {});
                items4[7] = closure_14(closure_18, {});
                const obj21 = {
                  variant: typeConsolidationEyebrow.variant,
                  color: "text-muted",
                  style: items7,
                  children: formatResult,
                };
                items7 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
                items4[8] = closure_14(guildId(stateFromStores1[11]).Text, obj21);
                items4[9] = closure_14(guildId(stateFromStores1[13]).Spacer, { size: 24 });
                const obj22 = {
                  gap: 16,
                  children: mapped.map((listingId) => {
                    const obj = { listingId, guildId };
                    return authStore2(GuildRoleSubscriptionPurchasePreviewCardDefault, obj, listingId);
                  }),
                };
                const GappedList2 = tmp(tmp2[29]).GappedList;
                items4[10] = closure_14(GappedList2, obj22);
                items3[1] = closure_15(closure_6, obj10);
                const obj23 = { source: tmp20, style: tmp4.moneyBirbPlaceholder };
                items3[2] = closure_14(gatedChannelId(stateFromStores1[26]), obj23);
                return closure_15(closure_7, obj8);
              }
              const intl = tmp(tmp2[12]).intl;
              formatResult = intl.string(tmp(tmp2[12]).t["mPHb1/"]);
            }
          }
        }
      }
      const obj24 = { style: tmp4.loadingContainer, children: closure_14(children, { size: "large" }) };
      return closure_14(closure_6, obj24);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx",
);

export default tmp7;
