// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ChannelListState from "../../../guild_sidebar/ChannelListState.tsx";
import ICYMIUtils from "../../ICYMIUtils.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import ICYMIContentSettingControl from "ICYMIContentSettingControl.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelListStore from "../../../guild_sidebar/ChannelListStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import ICYMIStore from "../../ICYMIStore.tsx";

require = fn;
function ICYMICustomScoreChannelRow(channelId) {
  channelId = channelId.channelId;
  let stateFromStores1;
  ({ start, end, disabled } = channelId);
  const tmp = closure_14();
  const items = [ChannelStore];
  const stateFromStores = channelId(stateFromStores1[11]).useStateFromStores(items, () =>
    ChannelStore.getChannel(channelId),
  );
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
        const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(
          stateFromStores.guild_id,
          stateFromStores.id,
        );
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
    let obj3 = {
      arrow: true,
      disabled,
      icon: null,
      start: null,
      end: null,
      labelLineClamp: 1,
      label: null,
      trailing: null,
      onPress: null,
    };
    const obj4 = { size: tmp2(tmp3[20]).IconSizes.SMALL, source: channelIcon };
    obj3.icon = closure_11(tmp2(tmp3[20]).Icon, obj4);
    obj3.start = start;
    obj3.end = end;
    let tmp13 = tmp6;
    if (tmp8) {
      const obj5 = { style: tmp.channelNameContainer, children: null };
      const obj6 = { source: tmp5(tmp3[21]), size: tmp2(tmp3[20]).Icon.Sizes.SMALL, style: tmp.channelMutedIcon };
      const items3 = [closure_11(tmp2(tmp3[20]).Icon, obj6)];
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
const createStyles = fn(5090);
let obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
  guildHeader: null,
  categoryHeader: null,
  channelNameContainer: null,
  channelMutedIcon: null,
};
let obj3 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.guildHeader = { marginBottom: nativeDefault.space.PX_32 };
let obj4 = { marginBottom: nativeDefault.space.PX_32 };
obj2.categoryHeader = {
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
let obj5 = {
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
obj2.channelNameContainer = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj2.channelMutedIcon = { alignSelf: "center", tintColor: nativeDefault.colors.ICON_MUTED };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { alignSelf: "center", tintColor: nativeDefault.colors.ICON_MUTED };
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ICYMICustomScoresGuildScreen(navigation) {
      const cResult = navigation(576).c(33);
      navigation = navigation.navigation;
      const guildId = navigation.route.params.guildId;
      const tmp6 = closure_14();
      dependencyMap = tmp6;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function h() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      let obj = navigation(576);
      const stateFromStores = navigation(504).useStateFromStores(first, tmp9);
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      if (cResult[3] === name) {
        if (cResult[4] === navigation) {
          let tmp12 = cResult[5];
        }
        let name1;
        if (stateFromStores != null) {
          name1 = stateFromStores.name;
        }
        if (cResult[6] === navigation) {
          if (cResult[7] === name1) {
            let tmp14 = cResult[8];
          }
          const effect = noop.useEffect(tmp12, tmp14);
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            let items1 = [ICYMIStore];
            cResult[9] = items1;
            let tmp17 = items1;
          } else {
            tmp17 = cResult[9];
          }
          if (cResult[10] !== guildId) {
            class N {
              constructor() {
                return closure_10.getCustomGuildScore(guildId);
              }
            }
            cResult[10] = guildId;
            cResult[11] = N;
          } else {
            class N {
              constructor() {
                return closure_10.getCustomGuildScore(guildId);
              }
            }
          }
          const stateFromStores1 = tmp2(504).useStateFromStores(tmp17, N);
          if (cResult[12] !== stateFromStores1) {
            class N {
              constructor() {
                return closure_10.getCustomGuildScore(guildId);
              }
            }
            const numberToCustomScoreResult = tmp2(8446).numberToCustomScore(stateFromStores1);
            cResult[12] = stateFromStores1;
            cResult[13] = numberToCustomScoreResult;
            const tmp2Result5 = tmp2(8446);
          } else {
            class N {
              constructor() {
                return closure_10.getCustomGuildScore(guildId);
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class N {
              constructor() {
                return closure_10.getCustomGuildScore(guildId);
              }
            }
            const items2 = [ChannelListStore];
            cResult[14] = items2;
            const tmp26 = items2;
          } else {
            class N {
              constructor() {
                return closure_10.getCustomGuildScore(guildId);
              }
            }
          }
          if (cResult[15] !== guildId) {
            class R {
              constructor() {
                return closure_6.getGuild(guildId);
              }
            }
            cResult[15] = guildId;
            cResult[16] = R;
          } else {
            class R {
              constructor() {
                return closure_6.getGuild(guildId);
              }
            }
          }
          const tmp2Result4 = tmp2(504);
          const guildChannels = tmp2(504).useStateFromStoresObject(tmp26, R).guildChannels;
          if (cResult[17] === tmp23) {
            class R {
              constructor() {
                return closure_6.getGuild(guildId);
              }
            }
            const bottom = guildId(1630)().bottom;
            if (cResult[20] === stateFromStores) {
              class R {
                constructor() {
                  return closure_6.getGuild(guildId);
                }
              }
            }
            class W {
              constructor(arg0) {
                item = navigation.item;
                kind = item.kind;
                if ("header" === kind) {
                  tmp16 = null;
                  if (null != closure_3) {
                    tmp17 = jsxs;
                    tmp18 = Fragment;
                    obj1 = { children: null };
                    tmp19 = jsx;
                    tmp20 = View;
                    obj11 = { style: null, children: null };
                    tmp21 = closure_2;
                    obj11.style = closure_2.guildHeader;
                    tmp22 = jsx;
                    tmp23 = closure_0;
                    tmp24 = closure_2;
                    obj12 = { guild: null };
                    obj12.guild = tmp15;
                    obj11.children = jsx(closure_0(closure_2[27]).GuildScoreSettings, obj12);
                    items = [, ,];
                    items[0] = jsx(View, obj11);
                    tmp25 = jsx;
                    tmp26 = closure_0;
                    tmp27 = closure_2;
                    obj13 = { variant: "text-sm/semibold", color: "text-default", children: null };
                    tmp28 = closure_0;
                    tmp29 = closure_2;
                    intl = closure_0(closure_2[14]).intl;
                    tmp30 = closure_0;
                    tmp31 = closure_2;
                    obj13.children = intl.string(closure_0(closure_2[14]).t["0jRosn"]);
                    items[1] = jsx(closure_0(closure_2[22]).Text, obj13);
                    tmp32 = jsx;
                    tmp33 = closure_0;
                    tmp34 = closure_2;
                    obj14 = { variant: "text-xs/normal", color: "text-default", style: null, children: null };
                    obj15 = { marginBottom: null };
                    tmp35 = closure_1;
                    tmp36 = closure_2;
                    obj15.marginBottom = closure_1(closure_2[10]).space.PX_16;
                    obj14.style = obj15;
                    tmp37 = closure_0;
                    tmp38 = closure_2;
                    intl2 = closure_0(closure_2[14]).intl;
                    tmp39 = closure_0;
                    tmp40 = closure_2;
                    obj14.children = intl2.string(closure_0(closure_2[14]).t.l52PX4);
                    items[2] = jsx(closure_0(closure_2[22]).Text, obj14);
                    obj1.children = items;
                    tmp16 = jsxs(Fragment, obj1);
                  }
                  return tmp16;
                } else {
                  str2 = "categoryHeader";
                  if ("categoryHeader" === kind) {
                    tmp4 = jsxs;
                    tmp5 = View;
                    obj16 = { style: null, children: null };
                    tmp6 = closure_2;
                    obj16.style = closure_2.categoryHeader;
                    tmp7 = jsx;
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj17 = { size: "xs", color: null };
                    tmp10 = closure_1;
                    tmp11 = closure_2;
                    obj17.color = closure_1(closure_2[10]).colors.TEXT_SUBTLE;
                    items1 = [,];
                    items1[0] = jsx(closure_0(closure_2[28]).ChevronSmallDownIcon, obj17);
                    tmp12 = jsx;
                    tmp13 = closure_0;
                    tmp14 = closure_2;
                    obj18 = { variant: "text-sm/semibold", color: "text-default", children: null };
                    obj18.children = item.title;
                    items1[1] = jsx(closure_0(closure_2[22]).Text, obj18);
                    obj16.children = items1;
                    return jsxs(View, obj16);
                  } else {
                    str = "channel";
                    if ("channel" === kind) {
                      tmp2 = jsx;
                      tmp3 = ICYMICustomScoreChannelRow;
                      obj = { disabled: null, channelId: null, start: null, end: null };
                      ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
                      return jsx(ICYMICustomScoreChannelRow, obj);
                    } else {
                      tmp = null;
                      return null;
                    }
                  }
                }
              }
            }
            cResult[20] = stateFromStores;
            cResult[21] = tmp6.categoryHeader;
            cResult[22] = tmp6.guildHeader;
            cResult[23] = W;
          }
          const items3 = [];
          items3.push({ kind: "header" });
          const sections = guildChannels.getSections(false);
          const entries = sections.entries();
          const tmp34 = entries[Symbol.iterator]();
          while (tmp34 !== undefined) {
            class R {
              constructor() {
                return closure_6.getGuild(guildId);
              }
            }
            let tmp38 = stateFromStores(tmp36, 2);
            let first1 = tmp38[0];
            if (0 !== tmp38[1]) {
              class R {
                constructor() {
                  return closure_6.getGuild(guildId);
                }
              }
              let tmp50 = navigation;
              if (first1 !== navigation(7239).SECTION_INDEX_GUILD_ACTIONS) {
                class R {
                  constructor() {
                    return closure_6.getGuild(guildId);
                  }
                }
                if (first1 !== guildChannels.voiceChannelsSectionNumber) {
                  class R {
                    constructor() {
                      return closure_6.getGuild(guildId);
                    }
                  }
                  let categoryFromSection = guildChannels.getCategoryFromSection(first1);
                  let found;
                  if (categoryFromSection != null) {
                    class R {
                      constructor() {
                        return closure_6.getGuild(guildId);
                      }
                    }
                    found = arr6.filter((item) => navigation(closure_2[13]).isChannelCustomScoreEligible(item));
                  }
                  let arr7 = found;
                  if (null != found) {
                    class R {
                      constructor() {
                        return closure_6.getGuild(guildId);
                      }
                    }
                    if (0 !== arr7.length) {
                      class R {
                        constructor() {
                          return closure_6.getGuild(guildId);
                        }
                      }
                      let intl2 = tmp50(1126).intl;
                      let stringResult = intl2.string(tmp50(1126).t.GSfOoo);
                      class W {
                        constructor(arg0) {
                          item = navigation.item;
                          kind = item.kind;
                          if ("header" === kind) {
                            tmp16 = null;
                            if (null != closure_3) {
                              tmp17 = jsxs;
                              tmp18 = Fragment;
                              obj1 = { children: null };
                              tmp19 = jsx;
                              tmp20 = View;
                              obj11 = { style: null, children: null };
                              tmp21 = closure_2;
                              obj11.style = closure_2.guildHeader;
                              tmp22 = jsx;
                              tmp23 = closure_0;
                              tmp24 = closure_2;
                              obj12 = { guild: null };
                              obj12.guild = tmp15;
                              obj11.children = jsx(closure_0(closure_2[27]).GuildScoreSettings, obj12);
                              items = [, ,];
                              items[0] = jsx(View, obj11);
                              tmp25 = jsx;
                              tmp26 = closure_0;
                              tmp27 = closure_2;
                              obj13 = { variant: "text-sm/semibold", color: "text-default", children: null };
                              tmp28 = closure_0;
                              tmp29 = closure_2;
                              intl = closure_0(closure_2[14]).intl;
                              tmp30 = closure_0;
                              tmp31 = closure_2;
                              obj13.children = intl.string(closure_0(closure_2[14]).t["0jRosn"]);
                              items[1] = jsx(closure_0(closure_2[22]).Text, obj13);
                              tmp32 = jsx;
                              tmp33 = closure_0;
                              tmp34 = closure_2;
                              obj14 = { variant: "text-xs/normal", color: "text-default", style: null, children: null };
                              obj15 = { marginBottom: null };
                              tmp35 = closure_1;
                              tmp36 = closure_2;
                              obj15.marginBottom = closure_1(closure_2[10]).space.PX_16;
                              obj14.style = obj15;
                              tmp37 = closure_0;
                              tmp38 = closure_2;
                              intl2 = closure_0(closure_2[14]).intl;
                              tmp39 = closure_0;
                              tmp40 = closure_2;
                              obj14.children = intl2.string(closure_0(closure_2[14]).t.l52PX4);
                              items[2] = jsx(closure_0(closure_2[22]).Text, obj14);
                              obj1.children = items;
                              tmp16 = jsxs(Fragment, obj1);
                            }
                            return tmp16;
                          } else {
                            str2 = "categoryHeader";
                            if ("categoryHeader" === kind) {
                              tmp4 = jsxs;
                              tmp5 = View;
                              obj16 = { style: null, children: null };
                              tmp6 = closure_2;
                              obj16.style = closure_2.categoryHeader;
                              tmp7 = jsx;
                              tmp8 = closure_0;
                              tmp9 = closure_2;
                              obj17 = { size: "xs", color: null };
                              tmp10 = closure_1;
                              tmp11 = closure_2;
                              obj17.color = closure_1(closure_2[10]).colors.TEXT_SUBTLE;
                              items1 = [,];
                              items1[0] = jsx(closure_0(closure_2[28]).ChevronSmallDownIcon, obj17);
                              tmp12 = jsx;
                              tmp13 = closure_0;
                              tmp14 = closure_2;
                              obj18 = { variant: "text-sm/semibold", color: "text-default", children: null };
                              obj18.children = item.title;
                              items1[1] = jsx(closure_0(closure_2[22]).Text, obj18);
                              obj16.children = items1;
                              return jsxs(View, obj16);
                            } else {
                              str = "channel";
                              if ("channel" === kind) {
                                tmp2 = jsx;
                                tmp3 = ICYMICustomScoreChannelRow;
                                obj = { disabled: null, channelId: null, start: null, end: null };
                                ({
                                  disabled: obj.disabled,
                                  channelId: obj.channelId,
                                  start: obj.start,
                                  end: obj.end,
                                } = item);
                                return jsx(ICYMICustomScoreChannelRow, obj);
                              } else {
                                tmp = null;
                                return null;
                              }
                            }
                          }
                        }
                      }
                      let intl = tmp50(1126).intl;
                      stringResult = intl.string(tmp50(1126).t.gKcrqM);
                    }
                  }
                }
              }
            }
            continue;
          }
          if ("channel" === items3[items3.length - 1].kind) {
            class R {
              constructor() {
                return closure_6.getGuild(guildId);
              }
            }
            tmp44.end = true;
          }
          cResult[17] = tmp23;
          cResult[18] = guildChannels;
          cResult[19] = items3;
          const tmp2Result6 = tmp2(504);
        }
        const items4 = [navigation];
        cResult[6] = navigation;
        cResult[7] = name1;
        cResult[8] = items4;
        tmp14 = items4;
      }
      if (stateFromStores != null) {
        class R {
          constructor() {
            return closure_6.getGuild(guildId);
          }
        }
      }
      const fn2 = function y() {
        let str;
        if (stateFromStores != null) {
          str = stateFromStores.name;
        }
        if (str == null) {
          str = "";
        }
        navigation.setOptions({ title: str });
      };
      cResult[3] = undefined;
      cResult[4] = navigation;
      cResult[5] = fn2;
      tmp12 = fn2;
      const tmp2Result = navigation(504);
    }
  : function ICYMICustomScoresGuildScreen(navigation) {
      navigation = navigation.navigation;
      const guildId = navigation.route.params.guildId;
      noop = undefined;
      let guildChannels;
      const tmp = closure_14();
      dependencyMap = tmp;
      let items = [GuildStore];
      const stateFromStores = navigation(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let items1 = [navigation];
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
      const stateFromStores1 = navigation(504).useStateFromStores(items2, () =>
        ICYMIStore.getCustomGuildScore(guildId),
      );
      const tmp2Result = navigation(504);
      const numberToCustomScoreResult = navigation(8446).numberToCustomScore(stateFromStores1);
      noop = numberToCustomScoreResult;
      const tmp2Result3 = navigation(8446);
      const items3 = [ChannelListStore];
      guildChannels = navigation(504).useStateFromStoresObject(items3, () =>
        ChannelListStore.getGuild(guildId),
      ).guildChannels;
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
                  found = channelRecords.filter((item) =>
                    navigation(closure_1_2[13]).isChannelCustomScoreEligible(item),
                  );
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
      const items5 = [stateFromStores, ,];
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
            const items = [closure_2_11(View, obj3), ,];
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
            tmp16 = __initData(__initData2, obj2);
          }
          return tmp16;
        } else if ("categoryHeader" === kind) {
          const obj8 = { style: closure_2.categoryHeader, children: null };
          const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
          const items1 = [closure_2_11(ChevronSmallDownIcon.ChevronSmallDownIcon, obj9)];
          const obj10 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
          items1[1] = closure_2_11(Text_Text.Text, obj10);
          obj8.children = items1;
          return __initData(View, obj8);
        } else if ("channel" === kind) {
          const obj = { disabled: null, channelId: null, start: null, end: null };
          ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
          return closure_2_11(ICYMICustomScoreChannelRow, obj);
        } else {
          return null;
        }
      }, items5);
      let obj4 = {
        contentInset: null,
        showsVerticalScrollIndicator: false,
        renderItem: null,
        data: null,
        keyExtractor: null,
      };
      const rect = { bottom: guildId(1630)().bottom, top: guildId(587).space.PX_12 };
      obj4.contentInset = rect;
      obj4.renderItem = callback;
      obj4.data = memo;
      obj4.keyExtractor = keyExtractor;
      obj3.children = closure_11(navigation(8600).AnimatedFlashList, obj4);
      return closure_11(guildChannels, obj3);
    };
