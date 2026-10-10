// discord_app/modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import openGuildPowerupsModalDefault from "../../../premium/powerups/native/utils/openGuildPowerupsModal.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(7887).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj = {
  titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" },
  guildIcon: { marginLeft: 4 },
  tag: { padding: 2 },
  tagStyles: null,
  divider: null,
  itemTrailingStyle: null,
  searchContainer: null,
  searchRow: null,
  searchField: null,
  emptyState: null,
  noResults: null,
};
const PlatformUtils = fn(1382);
let num = 18;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
obj.tagStyles = { lineHeight: num };
obj.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.itemTrailingStyle = { flexDirection: "row", alignItems: "center", gap: 8, height: 20 };
obj.searchContainer = { paddingHorizontal: 16, paddingTop: 16 };
obj.searchRow = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.searchField = { flex: 1 };
obj.emptyState = { alignItems: "center" };
obj.noResults = { padding: 16, textAlign: "center" };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let closure_11 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function Item(arg0) {
        const cResult = item(576).c(34);
        ({ start, end, item } = arg0);
        ({ selected, onSelectGuild } = arg0);
        const tmp4 = closure_10();
        let profile;
        if (item != null) {
          profile = item.profile;
        }
        let badge;
        if (profile != null) {
          badge = profile.badge;
        }
        if (cResult[0] === badge) {
          if (cResult[1] === item) {
            let tmp7 = cResult[2];
          }
          if (cResult[3] !== selected) {
            const obj2 = { selected };
            cResult[3] = selected;
            cResult[4] = obj2;
            let tmp12 = obj2;
          } else {
            tmp12 = cResult[4];
          }
          const radioA11yNative = item(4832).useRadioA11yNative(tmp12);
          ({ accessibilityRole, accessibilityState } = radioA11yNative);
          let id;
          if (item != null) {
            id = item.id;
          }
          if (cResult[5] === id) {
            if (cResult[6] === onSelectGuild) {
              let tmp15 = cResult[7];
            }
            if (cResult[8] !== item) {
              if (null != item) {
                let name = item.name;
              } else {
                const intl = item(1126).intl;
                name = intl.string(item(1126).t.PoWNfe);
              }
              cResult[8] = item;
              cResult[9] = name;
            } else {
              if (cResult[10] === item) {
                if (cResult[11] === tmp4.guildIcon) {
                  let tmp19 = cResult[12];
                }
                if (cResult[13] === tmp7) {
                  if (cResult[14] === profile) {
                    if (cResult[15] === item) {
                      if (cResult[16] === tmp4.tag) {
                        if (cResult[17] === tmp4.tagStyles) {
                          let tmp24 = cResult[18];
                        }
                        if (cResult[19] !== selected) {
                          const obj3 = { selected };
                          const tmp30 = closure_7(item(6265).FormRadio, obj3);
                          cResult[19] = selected;
                          cResult[20] = tmp30;
                          let tmp28 = tmp30;
                        } else {
                          tmp28 = cResult[20];
                        }
                        if (cResult[21] === tmp4.itemTrailingStyle) {
                          if (cResult[22] === tmp24) {
                            if (cResult[23] === tmp28) {
                              let tmp31 = cResult[24];
                            }
                            if (cResult[25] === accessibilityRole) {
                              if (cResult[26] === accessibilityState) {
                                if (cResult[27] === end) {
                                  if (cResult[28] === start) {
                                    if (cResult[29] === tmp15) {
                                      if (cResult[30] === tmp17) {
                                        if (cResult[31] === tmp19) {
                                          if (cResult[32] === tmp31) {
                                            let tmp35 = cResult[33];
                                          }
                                          return tmp35;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj4 = {
                              start,
                              end,
                              onPress: tmp15,
                              label: tmp17,
                              icon: tmp19,
                              accessibilityRole,
                              accessibilityState,
                              trailing: tmp31,
                            };
                            const tmp37 = closure_7(item(6179).TableRow, obj4);
                            cResult[25] = accessibilityRole;
                            cResult[26] = accessibilityState;
                            cResult[27] = end;
                            cResult[28] = start;
                            cResult[29] = tmp15;
                            cResult[30] = tmp17;
                            cResult[31] = tmp19;
                            cResult[32] = tmp31;
                            cResult[33] = tmp37;
                            tmp35 = tmp37;
                          }
                        }
                        const obj5 = { style: tmp4.itemTrailingStyle, children: null };
                        const items = [tmp24, tmp28];
                        obj5.children = items;
                        const tmp34 = closure_8(View, obj5);
                        cResult[21] = tmp4.itemTrailingStyle;
                        cResult[22] = tmp24;
                        cResult[23] = tmp28;
                        cResult[24] = tmp34;
                        tmp31 = tmp34;
                      }
                    }
                  }
                }
                let tmp26Result = null != item && null != profile;
                if (tmp26Result) {
                  const obj7 = {
                    containerStyles: null,
                    textStyle: null,
                    guildTag: null,
                    guildBadge: null,
                    badgeSize: null,
                    textVariant: "heading-md/semibold",
                    textColor: "text-strong",
                  };
                  ({ tag: obj6.containerStyles, tagStyles: obj6.textStyle } = tmp4);
                  const tag = profile.tag;
                  obj7.guildTag = tag;
                  obj7.guildBadge = tmp7;
                  obj7.badgeSize = GuildTagBadgeSize.SIZE_16;
                  tmp26Result = closure_7(item(8858).BaseGuildTagChiplet, obj7);
                }
                cResult[13] = tmp7;
                cResult[14] = profile;
                cResult[15] = item;
                cResult[16] = tmp4.tag;
                cResult[17] = tmp4.tagStyles;
                cResult[18] = tmp26Result;
                tmp24 = tmp26Result;
              }
              let tmp20 = null;
              if (null != item) {
                const obj8 = { style: tmp4.guildIcon, guild: item, size: item(6158).GuildIconSizes.SMALL_32 };
                tmp20 = closure_7(onSelectGuild(6158), obj8);
                const tmp23 = onSelectGuild(6158);
              }
              cResult[10] = item;
              cResult[11] = tmp4.guildIcon;
              cResult[12] = tmp20;
              tmp19 = tmp20;
            }
          }
          let id1;
          if (item != null) {
            id1 = item.id;
          }
          const fn = function v() {
            let id;
            if (item != null) {
              id = item.id;
            }
            if (id == null) {
              id = null;
            }
            onSelectGuild(id);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          };
          cResult[5] = id1;
          cResult[6] = onSelectGuild;
          cResult[7] = fn;
          tmp15 = fn;
          const tmpResult = item(4832);
        }
        let guildTagBadgeUrl = null != item;
        if (guildTagBadgeUrl) {
          let badge1;
          if (profile != null) {
            badge1 = profile.badge;
          }
          guildTagBadgeUrl = item(8289).getGuildTagBadgeUrl(item.id, badge1, GuildTagBadgeSize.SIZE_24);
          const tmpResult2 = item(8289);
        }
        let badge2;
        if (profile != null) {
          badge2 = profile.badge;
        }
        cResult[0] = badge2;
        cResult[1] = item;
        cResult[2] = guildTagBadgeUrl;
        tmp7 = guildTagBadgeUrl;
        let obj = item(576);
      }
    : function Item(item) {
        item = item.item;
        ({ selected, onSelectGuild: importDefault } = item);
        ({ start, end } = item);
        const tmp = closure_10();
        if (item != null) {
          const profile = item.profile;
        }
        let guildTagBadgeUrl = null != item;
        if (guildTagBadgeUrl) {
          let badge;
          if (profile != null) {
            badge = profile.badge;
          }
          guildTagBadgeUrl = item(8289).getGuildTagBadgeUrl(item.id, badge, GuildTagBadgeSize.SIZE_24);
          let obj = item(8289);
        }
        const radioA11yNative = item(4832).useRadioA11yNative({ selected });
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        const obj3 = {
          start,
          end,
          onPress() {
            let id;
            if (item != null) {
              id = item.id;
            }
            if (id == null) {
              id = null;
            }
            closure_1_1(id);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          },
          label: null,
          icon: null,
          accessibilityRole: null,
          accessibilityState: null,
          trailing: null,
        };
        if (null != item) {
          let name = item.name;
        } else {
          const intl = tmp7(1126).intl;
          name = intl.string(tmp7(1126).t.PoWNfe);
        }
        obj3.label = name;
        let tmp10Result = null;
        if (null != item) {
          const obj4 = { style: tmp.guildIcon, guild: item, size: tmp7(6158).GuildIconSizes.SMALL_32 };
          tmp10Result = closure_7(GuildIconDefault, obj4);
        }
        obj3.icon = tmp10Result;
        obj3.accessibilityRole = accessibilityRole;
        obj3.accessibilityState = accessibilityState;
        const obj5 = { style: tmp.itemTrailingStyle, children: null };
        let tmp10Result2 = null != item;
        if (tmp10Result2) {
          tmp10Result2 = null != profile;
        }
        if (tmp10Result2) {
          const obj10 = {
            containerStyles: null,
            textStyle: null,
            guildTag: null,
            guildBadge: null,
            badgeSize: null,
            textVariant: "heading-md/semibold",
            textColor: "text-strong",
          };
          ({ tag: obj6.containerStyles, tagStyles: obj6.textStyle } = tmp);
          const tag = profile.tag;
          obj10.guildTag = tag;
          obj10.guildBadge = guildTagBadgeUrl;
          obj10.badgeSize = GuildTagBadgeSize.SIZE_16;
          tmp10Result2 = closure_7(tmp7(8858).BaseGuildTagChiplet, obj10);
        }
        const items = [tmp10Result2, closure_7(item(6265).FormRadio, { selected })];
        obj5.children = items;
        obj3.trailing = closure_8(View, obj5);
        return closure_7(item(6179).TableRow, obj3);
      },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default function UserPrimaryGuildListBottomSheet(availableGuilds) {
  availableGuilds = availableGuilds.availableGuilds;
  const selectedGuildId = availableGuilds.selectedGuildId;
  const onSelectGuild = availableGuilds.onSelectGuild;
  first = undefined;
  c6 = undefined;
  function handleCreateGuildTag() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (1 === _undefined.length) {
      const obj2 = {
        guildId: _undefined[0].id,
        autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID,
        analyticsLocation: AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE,
      };
      openGuildPowerupsModalDefault(obj2);
      const tmpResult = openGuildPowerupsModalDefault;
    } else {
      const obj3 = { guilds: _undefined };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(14882, dependencyMap.paths),
        "GuildTagCreateGuildListBottomSheet",
        obj3,
      );
      const tmpResult2 = ActionSheetActionCreatorsDefault;
    }
  }
  const tmp = closure_10();
  _slicedToArray = tmp;
  [first, obj6.onChange] = first.useState("");
  const ref = first.useRef(null);
  const guildTagCreationUpsell = availableGuilds(onSelectGuild[18]).useGuildTagCreationUpsell(
    "UserPrimaryGuildListBottomSheet",
  );
  ({ creatableGuilds: c6, isUpsellVisible } = guildTagCreationUpsell);
  let items = [availableGuilds];
  const memo = first.useMemo(() => _modDef12.sortBy(availableGuilds, (name) => name.name.toLowerCase()), items);
  const items1 = [memo, first];
  const memo1 = first.useMemo(() => {
    let formatted = first.trim().toLowerCase();
    if ("" === formatted) {
      const items = [null];
      HermesBuiltin.arraySpread(memo, 1);
      let found = items;
    } else {
      found = memo.filter((name) => {
        formatted = name.name.toLowerCase();
        let hasItem = formatted.includes(formatted);
        if (!hasItem) {
          const profile = name.profile;
          let flag;
          if (profile != null) {
            if (profile.tag != null) {
              const formatted1 = str2.toLowerCase();
              flag = formatted1.includes(formatted);
            }
          }
          if (flag == null) {
            flag = false;
          }
          hasItem = flag;
        }
        return hasItem;
      });
    }
    return found;
  }, items1);
  const items2 = [first];
  const effect = first.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items2);
  const items3 = [memo1, first];
  const effect1 = first.useEffect(() => {
    if ("" !== first.trim()) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: memo1.length };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
    }
  }, items3);
  if (0 === availableGuilds.length) {
    if (null == selectedGuildId) {
      if (isUpsellVisible) {
        let obj2 = { children: null };
        let obj3 = { title: null, subtitle: null };
        const intl8 = tmp5(tmp6[13]).intl;
        obj3.title = intl8.string(tmp5(tmp6[13]).t.Fo0g9x);
        const intl9 = tmp5(tmp6[13]).intl;
        obj3.subtitle = intl9.string(tmp5(tmp6[13]).t["NV+MBV"]);
        const items4 = [memo(tmp5(tmp6[27]).BottomSheetTitleHeader, obj3)];
        const obj4 = { style: tmp.emptyState, children: null };
        const obj5 = { text: null, onPress: null };
        const intl10 = tmp5(tmp6[13]).intl;
        obj5.text = intl10.string(tmp5(tmp6[13]).t["65zBhE"]);
        obj5.onPress = handleCreateGuildTag;
        obj4.children = memo(tmp5(tmp6[28]).Button, obj5);
        items4[1] = memo(ref, obj4);
        obj2.children = items4;
        return memo1(tmp5(tmp6[26]).ActionSheet, obj2);
      }
    }
  }
  const obj6 = { placeholder: null, accessibilityLabel: null, onChange: null };
  let intl = tmp5(tmp6[13]).intl;
  obj6.placeholder = intl.string(availableGuilds(onSelectGuild[13]).t.uohsSv);
  const intl2 = tmp5(tmp6[13]).intl;
  obj6.accessibilityLabel = intl2.string(availableGuilds(onSelectGuild[13]).t.uohsSv);
  const tmp13 = memo(availableGuilds(onSelectGuild[29]).SearchField, obj6);
  const obj7 = { style: tmp.titleContainer, children: null };
  const obj8 = {
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    accessibilityRole: "header",
    children: null,
  };
  const intl3 = tmp5(tmp6[13]).intl;
  obj8.children = intl3.string(availableGuilds(onSelectGuild[13]).t.Fo0g9x);
  obj7.children = memo(availableGuilds(onSelectGuild[31]).Text, obj8);
  const items5 = [memo(ref, obj7)];
  const obj9 = { style: tmp.searchContainer, children: null };
  let tmp14Result = tmp13;
  if (isUpsellVisible) {
    const obj10 = { style: tmp.searchRow, children: null };
    const obj11 = { style: tmp.searchField, children: tmp13 };
    const items6 = [tmp12(tmp16, obj11)];
    const obj12 = { text: null, accessibilityLabel: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp5(tmp6[13]).intl;
    obj12.text = intl4.string(tmp5(tmp6[13]).t.CumH4u);
    const intl5 = tmp5(tmp6[13]).intl;
    obj12.accessibilityLabel = intl5.string(tmp5(tmp6[13]).t.xO5QzM);
    obj12.onPress = handleCreateGuildTag;
    items6[1] = tmp12(tmp5(tmp6[28]).Button, obj12);
    obj10.children = items6;
    tmp14Result = tmp14(tmp16, obj10);
  }
  const obj13 = { scrollable: true, startExpanded: true, header: null, children: null };
  const obj14 = { children: null };
  obj9.children = tmp14Result;
  items5[1] = memo(ref, obj9);
  obj14.children = items5;
  obj13.header = memo1(closure_9, obj14);
  const obj15 = {
    ref,
    accessibilityRole: "radiogroup",
    accessibilityLabel: null,
    keyboardShouldPersistTaps: "handled",
    ListEmptyComponent: null,
    ItemSeparatorComponent: null,
    data: null,
    contentContainerStyle: null,
    keyExtractor: null,
    renderItem: null,
  };
  const intl6 = tmp5(tmp6[13]).intl;
  obj15.accessibilityLabel = intl6.string(availableGuilds(onSelectGuild[13]).t.Fo0g9x);
  const obj16 = { variant: "text-md/normal", color: "text-muted", style: tmp.noResults, children: null };
  const intl7 = tmp5(tmp6[13]).intl;
  obj16.children = intl7.formatToPlainString(availableGuilds(onSelectGuild[13]).t.ZGVL3g, { count: 0 });
  obj15.ListEmptyComponent = memo(availableGuilds(onSelectGuild[31]).Text, obj16);
  obj15.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return React5(Form.FormDivider, { iconPush: true, style: divider.divider });
  };
  obj15.data = memo1;
  obj15.contentContainerStyle = { padding: 16 };
  obj15.keyExtractor = function keyExtractor(id) {
    let str = "none-guild-type";
    if (null != id) {
      str = id.id;
    }
    return str;
  };
  obj15.renderItem = function renderItem(arg0) {
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === memo1.length - 1, item, selected: null, onSelectGuild: null };
    let tmp3 = selectedGuildId;
    if (selectedGuildId == null) {
      tmp3 = null;
    }
    let id;
    if (item != null) {
      id = item.id;
    }
    if (id == null) {
      id = null;
    }
    obj.selected = tmp3 === id;
    obj.onSelectGuild = onSelectGuild;
    return React5(closure_11, obj);
  };
  obj13.children = memo(availableGuilds(onSelectGuild[32]).BottomSheetFlatList, obj15);
  return memo(availableGuilds(onSelectGuild[30]).BottomSheet, obj13);
}
