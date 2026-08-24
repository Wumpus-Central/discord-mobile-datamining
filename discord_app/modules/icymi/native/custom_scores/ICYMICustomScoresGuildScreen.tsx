// === Module 15713: ICYMICustomScoreChannelRow ===

// Module 15713 (ICYMICustomScoreChannelRow)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleReset" /* 5250 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import closure_9 from "updateUserGuildSettingsInternal" /* 5043 */;
import closure_10 from "filterStaffGuild" /* 9044 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function ICYMICustomScoreChannelRow(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  let stateFromStores1;
  closure_3 = undefined;
  ({ start, end, disabled } = channelId);
  let tmp = callback3();
  let obj = channelId(stateFromStores1[11]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getChannel(channelId));
  const tmp6 = stateFromStores(stateFromStores1[12])(stateFromStores);
  obj1 = channelId(stateFromStores1[11]);
  const items1 = [closure_10, closure_9];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return channelId(stateFromStores1[13]).ICYMICustomScore.DEFAULT;
    } else {
      const customChannelScore = closure_1_10.getCustomChannelScore(tmp.guild_id, tmp.id);
      if (customChannelScore !== channelId(stateFromStores1[13]).ICYMICustomScore.UNKNOWN) {
        return customChannelScore;
      } else {
        const ICYMICustomScore = channelId(stateFromStores1[13]).ICYMICustomScore;
        const isChannelMutedResult = closure_1_9.isChannelMuted(tmp.guild_id, tmp.id);
      }
    }
  });
  const tmp8 = stateFromStores1 === channelId(stateFromStores1[13]).ICYMICustomScore.MUTED;
  closure_3 = tmp8;
  const items2 = [tmp8, stateFromStores1];
  [][0] = stateFromStores;
  const memo = React.useMemo(() => {
    if (closure_3) {
      const intl4 = channelId(stateFromStores1[14]).intl;
      let stringResult = intl4.string(channelId(stateFromStores1[14]).t.lhPHmz);
    } else {
      if (stateFromStores1 === channelId(stateFromStores1[13]).ICYMICustomScore.MORE) {
        const intl3 = channelId(stateFromStores1[14]).intl;
        stringResult = intl3.string(channelId(stateFromStores1[14]).t.Rxe3jF);
      } else if (tmp === channelId(stateFromStores1[13]).ICYMICustomScore.LESS) {
        const intl2 = channelId(stateFromStores1[14]).intl;
        stringResult = intl2.string(channelId(stateFromStores1[14]).t.rdt65I);
      } else {
        const intl = channelId(stateFromStores1[14]).intl;
        stringResult = intl.string(channelId(stateFromStores1[14]).t.SnrG00);
      }
      tmp = stateFromStores1;
    }
    return stringResult;
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    const channelIcon = tmp2(tmp3[18]).getChannelIcon(stateFromStores);
    obj = { arrow: true, disabled: null, icon: null, start: null, end: null, labelLineClamp: 1, label: null, trailing: null, onPress: null };
    obj[1] = disabled;
    obj = { size: null, source: null };
    obj[0] = tmp2(tmp3[20]).IconSizes.SMALL;
    obj[1] = channelIcon;
    obj[2] = callback(tmp2(tmp3[20]).Icon, obj);
    obj[3] = start;
    obj[4] = end;
    let tmp13 = tmp6;
    if (tmp8) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.channelNameContainer;
      const obj2 = { source: null, size: null, style: null };
      obj2[0] = tmp5(tmp3[21]);
      obj2[1] = tmp2(tmp3[20]).Icon.Sizes.SMALL;
      obj2[2] = tmp.channelMutedIcon;
      const items3 = [tmp15(tmp2(tmp3[20]).Icon, obj2), ];
      const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
      obj3[3] = tmp6;
      items3[1] = tmp15(tmp2(tmp3[22]).Text, obj3);
      obj1[1] = items3;
      tmp13 = callback2(View, obj1);
    }
    obj[6] = tmp13;
    const obj4 = { text: null };
    obj4[0] = memo;
    obj[7] = callback(tmp2(tmp3[19]).TableRow.TrailingText, obj4);
    obj[8] = tmp10;
    return callback(tmp2(tmp3[19]).TableRow, obj);
  }
  tmp5 = stateFromStores;
}
function keyExtractor(kind) {
  kind = kind.kind;
  if ("header" === kind) {
    return "header";
  } else if ("categoryHeader" === kind) {
    const _HermesInternal3 = HermesInternal;
    return "categoryHeader-" + kind.index;
  } else if ("channel" === kind) {
    const _HermesInternal2 = HermesInternal;
    return "channel-" + kind.channelId;
  } else {
    const _HermesInternal = HermesInternal;
    return "" + arg1;
  }
}
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
createCacheKey = { container: null, guildHeader: null, categoryHeader: null, channelNameContainer: null, channelMutedIcon: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_32 };
let obj1 = { marginBottom: ThemesDefault.space.PX_32 };
createCacheKey[2] = { paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8, display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj2 = { paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8, display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[3] = { flexDirection: "row", gap: ThemesDefault.space.PX_4 };
let obj3 = { flexDirection: "row", gap: ThemesDefault.space.PX_4 };
createCacheKey[4] = { alignSelf: "center", tintColor: ThemesDefault.colors.ICON_MUTED };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj4 = { alignSelf: "center", tintColor: ThemesDefault.colors.ICON_MUTED };
const result = require("set").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx");

export default function ICYMICustomScoresGuildScreen(navigation) {
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  dependencyMap = undefined;
  let stateFromStores;
  let React;
  let guildChannels;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = navigation(589);
  let items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getGuild(guildId));
  obj1 = React;
  let items1 = [navigation, ];
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items1[1] = name;
  const effect = React.useEffect(() => {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    navigation.setOptions({ title: str });
  }, items1);
  let tmp2Result = tmp2(589);
  const items2 = [closure_10];
  const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => closure_1_10.getCustomGuildScore(guildId));
  tmp2Result = tmp2(9056);
  const numberToCustomScoreResult = tmp2Result.numberToCustomScore(stateFromStores1);
  React = numberToCustomScoreResult;
  const items3 = [closure_6];
  guildChannels = navigation(589).useStateFromStoresObject(items3, () => closure_1_6.getGuild(guildId)).guildChannels;
  const items4 = [numberToCustomScoreResult, guildChannels];
  const memo = obj1.useMemo(() => {
    const items = [];
    items.push({ kind: "header" });
    const sections = guildChannels.getSections(false);
    const entries = sections.entries();
    while (tmp3 !== undefined) {
      let tmp5 = stateFromStores;
      let tmp6 = stateFromStores(tmp4, 2);
      let first = tmp6[0];
      if (0 !== tmp6[1]) {
        let tmp25 = first;
        let tmp26 = navigation;
        let tmp27 = navigation;
        let tmp28 = closure_2;
        let tmp29 = closure_2;
        if (first !== navigation(closure_2[23]).SECTION_INDEX_GUILD_ACTIONS) {
          let tmp30 = first;
          let tmp31 = guildChannels;
          let obj3 = guildChannels;
          if (first !== guildChannels.voiceChannelsSectionNumber) {
            let tmp32 = tmp31;
            let tmp33 = first;
            let categoryFromSection = obj3.getCategoryFromSection(first);
            let found;
            if (categoryFromSection != null) {
              let channelRecords = categoryFromSection.getChannelRecords();
              found = channelRecords.filter((stateFromStores) => callback(table[13]).isChannelCustomScoreEligible(stateFromStores));
            }
            let arr3 = found;
            if (null != found) {
              let tmp34 = found;
              if (0 !== arr3.length) {
                let tmp35 = tmp26;
                let tmp36 = tmp28;
                let intl3 = tmp27(tmp29[14]).intl;
                let stringResult = intl3.string(tmp27(tmp29[14]).t.GSfOoo);
                let tmp37 = first;
                if (first === tmp27(tmp29[23]).SECTION_INDEX_FAVORITES) {
                  let tmp15 = tmp26;
                  let tmp16 = tmp28;
                  let intl2 = tmp27(tmp29[14]).intl;
                  stringResult = intl2.string(tmp27(tmp29[14]).t.mlPMCy);
                  let obj = { kind: "categoryHeader", index: null, title: null };
                  let tmp17 = first;
                  obj[1] = first;
                  let tmp18 = stringResult;
                  obj[2] = stringResult;
                  let arr = items.push(obj);
                  let tmp20 = found;
                  let entries1 = arr3.entries();
                  let tmp22 = entries1;
                  let tmp23 = entries1[Symbol.iterator]();
                } else {
                  let tmp38 = first;
                  let tmp39 = tmp26;
                  let tmp40 = tmp28;
                  if (first !== tmp27(tmp29[23]).SECTION_INDEX_RECENTS) {
                    let tmp9 = first;
                    let tmp10 = tmp26;
                    let tmp11 = tmp28;
                    if (first >= tmp27(tmp29[23]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
                      let tmp41 = tmp31;
                      let tmp42 = first;
                      let namedCategoryFromSection = obj3.getNamedCategoryFromSection(first);
                      let str;
                      if (namedCategoryFromSection != null) {
                        str = namedCategoryFromSection.record.name;
                      }
                      if (str == null) {
                        str = "";
                      }
                      stringResult = str;
                    }
                  }
                }
                let tmp13 = tmp26;
                let tmp14 = tmp28;
                let intl = tmp27(tmp29[14]).intl;
                stringResult = intl.string(tmp27(tmp29[14]).t.gKcrqM);
              }
            }
          }
        }
      }
      continue;
    }
    if ("channel" === items[items.length - 1].kind) {
      tmp24.end = true;
    }
    return items;
  }, items4);
  const items5 = [stateFromStores, , ];
  ({ categoryHeader: arr6[1], guildHeader: arr6[2] } = tmp);
  obj = { style: tmp.container, children: null };
  const callback = obj1.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("header" === kind) {
      let tmp16 = null;
      if (null != stateFromStores) {
        let obj = { children: null };
        obj = { style: null, children: null };
        obj[0] = closure_2.guildHeader;
        obj1 = { guild: null };
        obj1[0] = tmp15;
        obj[1] = closure_1_11(navigation(closure_2[25]).GuildScoreSettings, obj1);
        const items = [closure_1_11(guildChannels, obj), , ];
        const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
        const intl = navigation(closure_2[14]).intl;
        obj2[2] = intl.string(navigation(closure_2[14]).t["0jRosn"]);
        items[1] = closure_1_11(navigation(closure_2[22]).Text, obj2);
        const obj3 = { variant: "text-xs/normal", color: "text-default", style: null, children: null };
        const obj4 = { marginBottom: null };
        obj4[0] = guildId(closure_2[10]).space.PX_16;
        obj3[2] = obj4;
        const intl2 = navigation(closure_2[14]).intl;
        obj3[3] = intl2.string(navigation(closure_2[14]).t.l52PX4);
        items[2] = closure_1_11(navigation(closure_2[22]).Text, obj3);
        obj[0] = items;
        tmp16 = closure_1_12(closure_1_13, obj);
      }
      return tmp16;
    } else if ("categoryHeader" === kind) {
      const obj5 = { style: null, children: null };
      obj5[0] = closure_2.categoryHeader;
      const obj6 = { size: "xs", color: null };
      obj6[1] = guildId(closure_2[10]).colors.TEXT_SUBTLE;
      const items1 = [closure_1_11(navigation(closure_2[26]).ChevronSmallDownIcon, obj6), ];
      const obj7 = { variant: "text-sm/semibold", color: "text-default", children: null };
      obj7[2] = item.title;
      items1[1] = closure_1_11(navigation(closure_2[22]).Text, obj7);
      obj5[1] = items1;
      return closure_1_12(guildChannels, obj5);
    } else if ("channel" === kind) {
      obj = { disabled: null, channelId: null, start: null, end: null };
      ({ disabled: obj[0], channelId: obj[1], start: obj[2], end: obj[3] } = item);
      return closure_1_11(closure_1_15, obj);
    } else {
      return null;
    }
  }, items5);
  obj = { contentInset: null, showsVerticalScrollIndicator: false, renderItem: null, data: null, keyExtractor: null };
  obj1 = { bottom: guildId(1629)().bottom, top: guildId(712).space.PX_12 };
  obj[0] = obj1;
  obj[2] = callback;
  obj[3] = memo;
  obj[4] = keyExtractor;
  obj[1] = callback(navigation(8029).AnimatedFlashList, obj);
  return callback(guildChannels, obj);
};