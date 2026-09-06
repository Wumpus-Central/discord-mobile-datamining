// === Module 16457: ICYMICustomScoresGuildScreen ===

// Module 16457 (ICYMICustomScoresGuildScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import ChannelListState from "ChannelListState" /* 7528 */;
import ICYMIUtils from "ICYMIUtils" /* 8350 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11153 */;
import ICYMIContentSettingControl from "ICYMIContentSettingControl" /* 16459 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelListStore from "ChannelListStore" /* 7525 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

require = fn;
function ICYMICustomScoreChannelRow(channelId) {
  channelId = channelId.channelId;
  let stateFromStores1;
  ({ start, end, disabled } = channelId);
  let tmp = closure_14();
  let obj = channelId(stateFromStores1[11]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp6 = stateFromStores(stateFromStores1[12])(stateFromStores);
  let obj1 = channelId(stateFromStores1[11]);
  const items1 = [ICYMIStore, UserGuildSettingsStore];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return ICYMIUtils.ICYMICustomScore.DEFAULT;
    } else {
      const customChannelScore = ICYMIStore.getCustomChannelScore(tmp.guild_id, tmp.id);
      if (customChannelScore !== ICYMIUtils.ICYMICustomScore.UNKNOWN) {
        return customChannelScore;
      } else {
        const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
        const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(tmp.guild_id, tmp.id);
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
    } else {
      if (stateFromStores1 === ICYMIUtils.ICYMICustomScore.MORE) {
        const intl3 = util.intl;
        stringResult = intl3.string(util.t.Rxe3jF);
      } else if (tmp === ICYMIUtils.ICYMICustomScore.LESS) {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t.rdt65I);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.SnrG00);
      }
      tmp = stateFromStores1;
    }
    return stringResult;
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    const channelIcon = tmp2(tmp3[18]).getChannelIcon(stateFromStores);
    obj = { arrow: true, disabled, icon: null, start: null, end: null, labelLineClamp: 1, label: null, trailing: null, onPress: null };
    obj = { size: tmp2(tmp3[20]).IconSizes.SMALL, source: channelIcon };
    obj.icon = closure_11(tmp2(tmp3[20]).Icon, obj);
    obj.start = start;
    obj.end = end;
    let tmp13 = tmp6;
    if (tmp8) {
      obj1 = { style: tmp.channelNameContainer, children: null };
      const obj2 = { source: tmp5(tmp3[21]), size: tmp2(tmp3[20]).Icon.Sizes.SMALL, style: tmp.channelMutedIcon };
      const items3 = [tmp15(tmp2(tmp3[20]).Icon, obj2), ];
      const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp6 };
      items3[1] = tmp15(tmp2(tmp3[22]).Text, obj3);
      obj1.children = items3;
      tmp13 = closure_12(View, obj1);
    }
    obj.label = tmp13;
    const obj4 = { text: memo };
    obj.trailing = closure_11(tmp2(tmp3[19]).TableRow.TrailingText, obj4);
    obj.onPress = tmp10;
    return closure_11(tmp2(tmp3[19]).TableRow, obj);
  }
  tmp5 = stateFromStores;
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
fn(4560);
let createStyles = { container: null, guildHeader: null, categoryHeader: null, channelNameContainer: null, channelMutedIcon: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
createStyles.guildHeader = { marginBottom: nativeDefault.space.PX_32 };
let obj1 = { marginBottom: nativeDefault.space.PX_32 };
createStyles.categoryHeader = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj2 = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.channelNameContainer = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
createStyles.channelMutedIcon = { alignSelf: "center", tintColor: nativeDefault.colors.ICON_MUTED };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx");

export default function ICYMICustomScoresGuildScreen(navigation) {
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  noop = undefined;
  let guildChannels;
  const tmp = closure_14();
  dependencyMap = tmp;
  let obj = navigation(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
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
  let tmp2Result = tmp2(504);
  const items2 = [ICYMIStore];
  const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => ICYMIStore.getCustomGuildScore(guildId));
  tmp2Result = tmp2(8350);
  const numberToCustomScoreResult = tmp2Result.numberToCustomScore(stateFromStores1);
  noop = numberToCustomScoreResult;
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
        let tmp27 = require;
        if (first !== ChannelListState.SECTION_INDEX_GUILD_ACTIONS) {
          let obj3 = guildChannels;
          if (first !== guildChannels.voiceChannelsSectionNumber) {
            let categoryFromSection = obj3.getCategoryFromSection(first);
            let found;
            if (categoryFromSection != null) {
              let channelRecords = categoryFromSection.getChannelRecords();
              found = channelRecords.filter((item) => navigation(closure_1_2[13]).isChannelCustomScoreEligible(item));
            }
            let arr3 = found;
            if (null != found) {
              if (0 !== arr3.length) {
                let intl3 = tmp27(1114).intl;
                let stringResult = intl3.string(tmp27(1114).t.GSfOoo);
                if (first === tmp27(7528).SECTION_INDEX_FAVORITES) {
                  let intl2 = tmp27(1114).intl;
                  stringResult = intl2.string(tmp27(1114).t.mlPMCy);
                  let obj = { kind: "categoryHeader", index: null, title: null };
                  obj.index = first;
                  obj.title = stringResult;
                  let arr = items.push(obj);
                  let entries1 = arr3.entries();
                  let tmp23 = entries1[Symbol.iterator]();
                } else if (first !== tmp27(7528).SECTION_INDEX_RECENTS) {
                  if (first >= tmp27(7528).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
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
                let intl = tmp27(1114).intl;
                stringResult = intl.string(tmp27(1114).t.gKcrqM);
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
  const callback = obj2.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("header" === kind) {
      let tmp16 = null;
      if (null != stateFromStores) {
        let obj = { children: null };
        obj = { style: closure_2.guildHeader, children: null };
        const obj1 = { guild: tmp15 };
        obj.children = closure_2_11(ICYMIContentSettingControl.GuildScoreSettings, obj1);
        const items = [closure_2_11(View, obj), , ];
        const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["0jRosn"]);
        items[1] = closure_2_11(Text_Text.Text, obj2);
        const obj3 = { variant: "text-xs/normal", color: "text-default", style: null, children: null };
        const obj4 = { marginBottom: nativeDefault.space.PX_16 };
        obj3.style = obj4;
        const intl2 = util.intl;
        obj3.children = intl2.string(util.t.l52PX4);
        items[2] = closure_2_11(Text_Text.Text, obj3);
        obj.children = items;
        tmp16 = closure_2_12(map1, obj);
      }
      return tmp16;
    } else if ("categoryHeader" === kind) {
      const obj5 = { style: closure_2.categoryHeader, children: null };
      const obj6 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
      const items1 = [closure_2_11(ChevronSmallDownIcon.ChevronSmallDownIcon, obj6), ];
      const obj7 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
      items1[1] = closure_2_11(Text_Text.Text, obj7);
      obj5.children = items1;
      return closure_2_12(View, obj5);
    } else if ("channel" === kind) {
      obj = { disabled: null, channelId: null, start: null, end: null };
      ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
      return closure_2_11(ICYMICustomScoreChannelRow, obj);
    } else {
      return null;
    }
  }, items5);
  obj = { contentInset: null, showsVerticalScrollIndicator: false, renderItem: null, data: null, keyExtractor: null };
  const rect = { bottom: guildId(1611)().bottom, top: guildId(576).space.PX_12 };
  obj.contentInset = rect;
  obj.renderItem = callback;
  obj.data = memo;
  obj.keyExtractor = keyExtractor;
  obj.children = closure_11(navigation(8874).AnimatedFlashList, obj);
  return closure_11(guildChannels, obj);
};