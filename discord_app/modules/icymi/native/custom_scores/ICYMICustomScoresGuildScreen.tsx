// === Module 16808: ICYMICustomScoresGuildScreen ===

// Module 16808 (ICYMICustomScoresGuildScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import Text_Text from "Text/Text" /* 4753 */;
import ChannelListState from "ChannelListState" /* 7773 */;
import ICYMIUtils from "ICYMIUtils" /* 8625 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11424 */;
import ICYMIContentSettingControl from "ICYMIContentSettingControl" /* 16810 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelListStore from "ChannelListStore" /* 7770 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildStore from "GuildStore" /* 2064 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4938 */;
import ICYMIStore from "ICYMIStore" /* 8610 */;

require = fn;
function ICYMICustomScoreChannelRow(channelId) {
  channelId = channelId.channelId;
  let stateFromStores1;
  ({ start, end, disabled } = channelId);
  const tmp = closure_14();
  const items = [ChannelStore];
  const stateFromStores = channelId(stateFromStores1[11]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp6 = stateFromStores(stateFromStores1[12])(stateFromStores);
  let obj = channelId(stateFromStores1[11]);
  const tmp5 = stateFromStores;
  const items1 = [ICYMIStore, UserGuildSettingsStore];
  stateFromStores1 = channelId(stateFromStores1[11]).useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return ICYMIUtils.ICYMICustomScore.DEFAULT;
    } else {
      const customChannelScore = ICYMIStore.getCustomChannelScore(stateFromStores.guild_id, stateFromStores.id);
      if (customChannelScore !== ICYMIUtils.ICYMICustomScore.UNKNOWN) {
        return customChannelScore;
      } else {
        const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
        const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(stateFromStores.guild_id, stateFromStores.id);
      }
    }
  });
  const tmp8 = stateFromStores1 === channelId(stateFromStores1[13]).ICYMICustomScore.MUTED;
  closure_3 = tmp8;
  const items2 = [tmp8, stateFromStores1];
  [][0] = stateFromStores;
  const memo = noop.useMemo(() => {
    if (closure_3) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.lhPHmz);
    } else if (stateFromStores1 === ICYMIUtils.ICYMICustomScore.MORE) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.Rxe3jF);
    } else if (stateFromStores1 === ICYMIUtils.ICYMICustomScore.LESS) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.rdt65I);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.SnrG00);
    }
    return stringResult;
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    const channelIcon = tmp2(tmp3[18]).getChannelIcon(stateFromStores);
    let obj3 = { arrow: true, disabled, icon: null, start: null, end: null, labelLineClamp: 1, label: null, trailing: null, onPress: null };
    const obj4 = { size: tmp2(tmp3[20]).IconSizes.SMALL, source: channelIcon };
    obj3.icon = closure_11(tmp2(tmp3[20]).Icon, obj4);
    obj3.start = start;
    obj3.end = end;
    let tmp13 = tmp6;
    if (tmp8) {
      const obj5 = { style: tmp.channelNameContainer, children: null };
      const obj6 = { source: tmp5(tmp3[21]), size: tmp2(tmp3[20]).Icon.Sizes.SMALL, style: tmp.channelMutedIcon };
      const items3 = [closure_11(tmp2(tmp3[20]).Icon, obj6), ];
      const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp6 };
      items3[1] = closure_11(tmp2(tmp3[22]).Text, obj7);
      obj5.children = items3;
      tmp13 = closure_12(View, obj5);
    }
    obj3.label = tmp13;
    const obj8 = { text: memo };
    obj3.trailing = closure_11(tmp2(tmp3[19]).TableRow.TrailingText, obj8);
    obj3.onPress = tmp10;
    return closure_11(tmp2(tmp3[19]).TableRow, obj3);
  }
  const obj2 = channelId(stateFromStores1[11]);
}
function keyExtractor(kind, arg1) {
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
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_12 }, guildHeader: null, categoryHeader: null, channelNameContainer: null, channelMutedIcon: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.guildHeader = { marginBottom: nativeDefault.space.PX_32 };
let obj4 = { marginBottom: nativeDefault.space.PX_32 };
obj2.categoryHeader = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj5 = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.channelNameContainer = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj2.channelMutedIcon = { alignSelf: "center", tintColor: nativeDefault.colors.ICON_MUTED };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx");

export default function ICYMICustomScoresGuildScreen(navigation) {
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  noop = undefined;
  let guildChannels;
  const tmp = closure_14();
  dependencyMap = tmp;
  let items = [GuildStore];
  const stateFromStores = navigation(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let items1 = [navigation, ];
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items1[1] = name;
  const effect = noop.useEffect(() => {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    navigation.setOptions({ title: str });
  }, items1);
  let obj = navigation(504);
  const items2 = [ICYMIStore];
  const stateFromStores1 = navigation(504).useStateFromStores(items2, () => ICYMIStore.getCustomGuildScore(guildId));
  const tmp2Result = navigation(504);
  const numberToCustomScoreResult = navigation(8625).numberToCustomScore(stateFromStores1);
  noop = numberToCustomScoreResult;
  const tmp2Result3 = navigation(8625);
  const items3 = [ChannelListStore];
  guildChannels = navigation(504).useStateFromStoresObject(items3, () => ChannelListStore.getGuild(guildId)).guildChannels;
  const items4 = [numberToCustomScoreResult, guildChannels];
  const memo = obj2.useMemo(() => {
    const items = [];
    items.push({ kind: "header" });
    const sections = guildChannels.getSections(false);
    const entries = sections.entries();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      let first = tmp6[0];
      if (0 !== tmp6[1]) {
        if (first !== ChannelListState.SECTION_INDEX_GUILD_ACTIONS) {
          if (first !== guildChannels.voiceChannelsSectionNumber) {
            let categoryFromSection = guildChannels.getCategoryFromSection(first);
            let found;
            if (categoryFromSection != null) {
              let channelRecords = categoryFromSection.getChannelRecords();
              found = channelRecords.filter((item) => navigation(closure_1_2[13]).isChannelCustomScoreEligible(item));
            }
            let arr3 = found;
            if (null != found) {
              if (0 !== arr3.length) {
                let intl3 = util.intl;
                let stringResult = intl3.string(util.t.GSfOoo);
                if (first === ChannelListState.SECTION_INDEX_FAVORITES) {
                  let intl2 = util.intl;
                  stringResult = intl2.string(util.t.mlPMCy);
                  let obj = { kind: "categoryHeader", index: null, title: null };
                  obj.index = first;
                  obj.title = stringResult;
                  let arr2 = items.push(obj);
                  let entries1 = arr3.entries();
                  let tmp23 = entries1[Symbol.iterator]();
                } else if (first !== ChannelListState.SECTION_INDEX_RECENTS) {
                  if (first >= ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY) {
                    let namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(first);
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
                let intl = util.intl;
                stringResult = intl.string(util.t.gKcrqM);
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
  let obj3 = { style: tmp.container, children: null };
  const callback = obj2.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("header" === kind) {
      let tmp16 = null;
      if (null != stateFromStores) {
        const obj2 = { children: null };
        const obj3 = { style: closure_2.guildHeader, children: null };
        const obj4 = { guild: tmp15 };
        obj3.children = closure_2_11(ICYMIContentSettingControl.GuildScoreSettings, obj4);
        const items = [closure_2_11(View, obj3), , ];
        const obj5 = { variant: "text-sm/semibold", color: "text-default", children: null };
        const intl = util.intl;
        obj5.children = intl.string(util.t["0jRosn"]);
        items[1] = closure_2_11(Text_Text.Text, obj5);
        const obj6 = { variant: "text-xs/normal", color: "text-default", style: null, children: null };
        const obj7 = { marginBottom: nativeDefault.space.PX_16 };
        obj6.style = obj7;
        const intl2 = util.intl;
        obj6.children = intl2.string(util.t.l52PX4);
        items[2] = closure_2_11(Text_Text.Text, obj6);
        obj2.children = items;
        tmp16 = closure_2_12(map1, obj2);
      }
      return tmp16;
    } else if ("categoryHeader" === kind) {
      const obj8 = { style: closure_2.categoryHeader, children: null };
      const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
      const items1 = [closure_2_11(ChevronSmallDownIcon.ChevronSmallDownIcon, obj9), ];
      const obj10 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
      items1[1] = closure_2_11(Text_Text.Text, obj10);
      obj8.children = items1;
      return closure_2_12(View, obj8);
    } else if ("channel" === kind) {
      const obj = { disabled: null, channelId: null, start: null, end: null };
      ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
      return closure_2_11(ICYMICustomScoreChannelRow, obj);
    } else {
      return null;
    }
  }, items5);
  let obj4 = { contentInset: null, showsVerticalScrollIndicator: false, renderItem: null, data: null, keyExtractor: null };
  const rect = { bottom: guildId(1612)().bottom, top: guildId(576).space.PX_12 };
  obj4.contentInset = rect;
  obj4.renderItem = callback;
  obj4.data = memo;
  obj4.keyExtractor = keyExtractor;
  obj3.children = closure_11(navigation(9002).AnimatedFlashList, obj4);
  return closure_11(guildChannels, obj3);
};