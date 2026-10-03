// discord_app/modules/launchpad/native/LaunchPadSearchResults.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import sortByMatchScore from "../../autocompleter/index.tsx";
import RedesignCategory from "../../channel_list_v2/native/items/RedesignCategory.tsx";
import getLayoutStylesDefault from "shared/getLayoutStyles.tsx";
import renderChannelWrapperDefault from "shared/renderChannelWrapper.tsx";
import getScaledChannelRowHeightDefault from "shared/getScaledChannelRowHeight.tsx";
import renderChannelContentDefault from "shared/renderChannelContent.tsx";
import UnreadBadgeDefault from "shared/UnreadBadge.tsx";
import shared_renderChannelBadgeDefault from "shared/renderChannelBadge.tsx";
import renderChannelPressableWrapperDefault from "shared/renderChannelPressableWrapper.tsx";
import shared_TextChannelDefault from "shared/TextChannel.tsx";
import shared_DMChannelDefault from "shared/DMChannel.tsx";
import VoiceOrStageChannelDefault from "shared/VoiceOrStageChannel.tsx";
import LaunchPadSearchResultUserDefault from "LaunchPadSearchResultUser.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function renderItemJSX(result) {
  result = result.result;
  if (null == result) {
    return null;
  } else {
    const type = result.type;
    if (sortByMatchScore.AutocompleterResultTypes.GUILD === type) {
      const obj2 = { guild: result.record };
      return options(closure_14, obj2);
    } else if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL === type) {
      const obj3 = { channel: result.record, navigationReplace: true, showGuildBadgeIcon: true };
      return options(shared_TextChannelDefault, obj3);
    } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
      const obj5 = { channel: result.record, navigationReplace: true };
      return options(shared_DMChannelDefault, obj5);
    } else if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj6 = { channel: result.record };
      return options(VoiceOrStageChannelDefault, obj6);
    } else if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
      ({ record: obj4.user, comparator: obj4.comparator } = result);
      return options(LaunchPadSearchResultUserDefault, { user: null, comparator: null });
    } else if (sortByMatchScore.AutocompleterResultTypes.HEADER === type) {
      const obj8 = { name: result.record.text, styles: tmp };
      return RedesignCategory.renderCategoryItem(obj8);
    } else {
      const obj = { variant: "text-sm/semibold", children: result.type };
      return options(Text_Text.Text, obj);
    }
  }
}
function renderSearchResultsSection() {
  const obj = { name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t["zkoeq/"]);
  return options(closure_16, obj);
}
const View = fn(17).View;
const UnreadSetting = fn(5072).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const scrollIndicatorInsets = { bottom: 24 };
const createStyles = fn(4890);
let obj = {
  listContainer: { minHeight: 16 },
  list: { flex: -1, marginTop: 8 },
  guildIcon: { borderRadius: nativeDefault.radii.sm },
  categoryWrapper: null,
  pressable: null,
  pressableUnderlayColor: null,
};
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj.categoryWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.pressable = { flex: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.pressableUnderlayColor = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guild) => {
        const cResult = guild(576).c(35);
        guild = guild.guild;
        const tmp4 = closure_13();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = getLayoutStylesDefault();
          cResult[0] = tmp7;
          let first = tmp7;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== guild.id) {
          const fn = function b() {
            transitionToGuild.transitionToGuild(guild.id);
          };
          cResult[1] = guild.id;
          cResult[2] = fn;
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildReadStateStore];
          cResult[3] = items;
          let tmp9 = items;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] !== guild.id) {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
          cResult[4] = guild.id;
          cResult[5] = R;
        } else {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
        }
        const obj = guild(576);
        const stateFromStoresObject = guild(504).useStateFromStoresObject(tmp9, R);
        ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
        const tmpResult = guild(504);
        const fontScale = guild(5602).useFontScale();
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
          const items1 = [LocaleStore];
          const fn2 = function _() {
            return locale.locale;
          };
          cResult[6] = items1;
          cResult[7] = fn2;
          let tmp15 = fn2;
          const tmp14 = items1;
        } else {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
          tmp15 = cResult[7];
        }
        const tmpResult3 = guild(5602);
        const stateFromStores = guild(504).useStateFromStores(tmp14, tmp15);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
          tmp18[0] = first.container.borderRadius;
          cResult[8] = tmp18;
        } else {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
        }
        if (cResult[9] !== tmp4.pressable) {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
          tmp20[0] = tmp4.pressable;
          tmp20[1] = tmp18;
          cResult[9] = tmp4.pressable;
          cResult[10] = tmp20;
        } else {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
        }
        if (cResult[11] !== unread) {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
          const obj2 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
          const tmp24 = closure_9(UnreadBadgeDefault, obj2);
          cResult[11] = unread;
          cResult[12] = tmp24;
        } else {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
        }
        if (cResult[13] !== tmp4.guildIcon) {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
          tmp26[0] = tmp4.guildIcon;
          tmp26[1] = first.icon.margin;
          cResult[13] = tmp4.guildIcon;
          cResult[14] = tmp26;
        } else {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
        }
        if (cResult[15] === guild) {
          class R {
            constructor() {
              obj = {
                unread: closure_6.hasUnread(guild.id),
                mentionCount: closure_6.getMentionCount(guild.id),
                isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
              };
              return obj;
            }
          }
          if (cResult[18] === guild.name) {
            class R {
              constructor() {
                obj = {
                  unread: closure_6.hasUnread(guild.id),
                  mentionCount: closure_6.getMentionCount(guild.id),
                  isMentionLowImportance: closure_6.getIsMentionLowImportance(guild.id),
                };
                return obj;
              }
            }
          }
          const obj3 = { name: guild.name, mentionBadge: null };
          const obj4 = { mentionCount, locale: stateFromStores, isMentionLowImportance };
          obj3.mentionBadge = shared_renderChannelBadgeDefault(obj4);
          const tmp30Result = renderChannelContentDefault(obj3);
          cResult[18] = guild.name;
          cResult[19] = isMentionLowImportance;
          cResult[20] = stateFromStores;
          cResult[21] = mentionCount;
          cResult[22] = tmp30Result;
        }
        const obj5 = { size: first.icon.guildIconSize, guild, style: tmp26 };
        const tmpResult4 = guild(504);
        cResult[15] = guild;
        cResult[16] = tmp26;
        cResult[17] = closure_9(GuildIconDefault, { size: first.icon.guildIconSize, guild, style: tmp26 });
        const tmp27 = closure_9(GuildIconDefault, { size: first.icon.guildIconSize, guild, style: tmp26 });
      }
    : (guild) => {
        guild = guild.guild;
        const tmp = closure_13();
        const tmp2 = getLayoutStylesDefault();
        const items = [guild.id];
        const callback = noop.useCallback(() => {
          transitionToGuild.transitionToGuild(guild.id);
        }, items);
        const items1 = [GuildReadStateStore];
        const stateFromStoresObject = guild(504).useStateFromStoresObject(items1, () => ({
          unread: GuildReadStateStore.hasUnread(guild.id),
          mentionCount: GuildReadStateStore.getMentionCount(guild.id),
          isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id),
        }));
        ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
        const obj = guild(504);
        const fontScale = guild(5602).useFontScale();
        const obj2 = guild(5602);
        const items2 = [LocaleStore];
        const stateFromStores = guild(504).useStateFromStores(items2, () => locale.locale);
        const obj3 = guild(504);
        const obj4 = {
          onPress: callback,
          underlayColor: tmp.pressableUnderlayColor.backgroundColor,
          style: null,
          children: null,
        };
        const items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
        obj4.style = items3;
        const obj5 = { children: null };
        const tmp7 = renderChannelPressableWrapperDefault;
        const items4 = [
          closure_9(UnreadBadgeDefault, { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES }),
          ,
        ];
        const obj7 = { size: tmp2.icon.guildIconSize, guild, style: null };
        const items5 = [tmp.guildIcon, tmp2.icon.margin];
        obj7.style = items5;
        items4[1] = closure_9(GuildIconDefault, obj7);
        const obj8 = { name: guild.name, mentionBadge: null };
        const obj6 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
        const tmp8 = renderChannelWrapperDefault;
        obj8.mentionBadge = shared_renderChannelBadgeDefault({
          mentionCount,
          locale: stateFromStores,
          isMentionLowImportance,
        });
        items4[2] = renderChannelContentDefault(obj8);
        obj5.children = items4;
        obj4.children = tmp8(closure_11(closure_10, obj5), { fontScale });
        return tmp7(closure_9(guild(5909).PressableHighlight, obj4));
      },
);
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(8);
        ({ name, onPress, note } = arg0);
        const tmp4 = closure_13();
        categoryStyles = RedesignCategory.useCategoryStyles();
        if (cResult[0] === categoryStyles) {
          if (cResult[1] === name) {
            if (cResult[2] === note) {
              if (cResult[3] === onPress) {
                let tmp6 = cResult[4];
              }
              if (cResult[5] === tmp6) {
                if (cResult[6] === tmp4.categoryWrapper) {
                  let tmp8 = cResult[7];
                }
                return tmp8;
              }
              const obj3 = { style: tmp4.categoryWrapper, children: tmp6 };
              const tmp11 = options(View, obj3);
              cResult[5] = tmp6;
              cResult[6] = tmp4.categoryWrapper;
              cResult[7] = tmp11;
              tmp8 = tmp11;
            }
          }
        }
        const renderCategoryItemResult = RedesignCategory.renderCategoryItem({
          name,
          onPress,
          note,
          noteAlignment: "end",
          styles: categoryStyles,
        });
        cResult[0] = categoryStyles;
        cResult[1] = name;
        cResult[2] = note;
        cResult[3] = onPress;
        cResult[4] = renderCategoryItemResult;
        tmp6 = renderCategoryItemResult;
        const tmpResult = RedesignCategory;
      }
    : (arg0) => {
        ({ name, onPress, note } = arg0);
        const tmp = closure_13();
        categoryStyles = RedesignCategory.useCategoryStyles();
        return options(View, {
          style: tmp.categoryWrapper,
          children: RedesignCategory.renderCategoryItem({
            name,
            onPress,
            note,
            noteAlignment: "end",
            styles: categoryStyles,
          }),
        });
      },
);
fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (history) => {
        const cResult = history(toggleExpandedHistory[10]).c(33);
        history = history.history;
        const unreads = history.unreads;
        toggleExpandedHistory = history.toggleExpandedHistory;
        const expandedHistory = history.expandedHistory;
        const selectedGuildId = history.selectedGuildId;
        closure_13();
        let obj = history(toggleExpandedHistory[10]);
        const tmp = history;
        categoryStyles = history(toggleExpandedHistory[27]).useCategoryStyles();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== selectedGuildId) {
          const fn = function l() {
            if (null != selectedGuildId) {
              guild = GuildStore.getGuild(tmp);
              let name;
              if (guild != null) {
                name = guild.name;
              }
              return name;
            }
          };
          cResult[1] = selectedGuildId;
          cResult[2] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        let obj2 = history(toggleExpandedHistory[27]);
        const stateFromStores = tmp(toggleExpandedHistory[13]).useStateFromStores(first, tmp8);
        const height = unreads(tmp2[30])().height;
        if (cResult[3] === categoryStyles) {
          if (cResult[4] === history) {
            if (cResult[7] !== unreads) {
              const _Symbol = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                class L {
                  constructor(arg0) {
                    return history.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL;
                  }
                }
                cResult[9] = L;
              } else {
                class L {
                  constructor(arg0) {
                    return history.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL;
                  }
                }
              }
              const someResult = unreads.some(L);
              cResult[7] = unreads;
              cResult[8] = someResult;
            } else {
              class L {
                constructor(arg0) {
                  return history.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL;
                }
              }
              GuildStore = tmp11;
              if (cResult[10] === expandedHistory) {
                class L {
                  constructor(arg0) {
                    return history.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL;
                  }
                }
              }
              const fn2 = function z(arg0) {
                if (0 === arg0) {
                  const obj = { name: null, note: null, onPress: null };
                  const intl3 = util.intl;
                  obj.name = intl3.string(util.t["Xmh+5e"]);
                  const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: null };
                  const intl4 = util.intl;
                  const string = intl4.string;
                  let t2 = util.t;
                  if (expandedHistory) {
                    t2 = string(t2["3BdvgI"]);
                    obj2.children = t2;
                    let tmp14 = obj2;
                  } else {
                    obj2.children = string(t2["/XSoJ+"]);
                    tmp14 = obj2;
                  }
                  obj.note = options(Text_Text.Text, tmp14);
                  obj.onPress = toggleExpandedHistory;
                } else if (null != stateFromStores) {
                  const intl2 = util.intl;
                  const t1 = { guildName: tmp17 };
                  intl2.formatToPlainString(closure_7 ? t1["+DrQVp"] : t1["+lFj35"], t1);
                  const tmp9 = closure_7 ? t1["+DrQVp"] : t1["+lFj35"];
                } else {
                  const intl = util.intl;
                  const t = util.t;
                  const obj3 = { name: intl.string(closure_7 ? t.C5viSQ : t.ieCAhD) };
                  return options(tmp2, obj3);
                }
              };
              cResult[10] = expandedHistory;
              cResult[11] = tmp11;
              cResult[12] = stateFromStores;
              cResult[13] = toggleExpandedHistory;
              cResult[14] = fn2;
            }
          }
        }
        class E {
          constructor(arg0, arg1) {
            tmp = renderItemJSX;
            if (0 === history) {
              tmp4 = history;
              tmp3 = history[arg1];
            } else {
              tmp2 = unreads;
              tmp3 = unreads[arg1];
            }
            obj = { result: tmp3, categoryStyles: closure_5 };
            return tmp(obj);
          }
        }
        cResult[3] = categoryStyles;
        cResult[4] = history;
        cResult[5] = unreads;
        cResult[6] = E;
        const tmpResult = tmp(toggleExpandedHistory[13]);
      }
    : (history) => {
        history = history.history;
        const unreads = history.unreads;
        const toggleExpandedHistory = history.toggleExpandedHistory;
        const expandedHistory = history.expandedHistory;
        let str = history.selectedGuildId;
        c7 = undefined;
        const tmp = closure_13();
        categoryStyles = history(toggleExpandedHistory[27]).useCategoryStyles();
        let obj = history(toggleExpandedHistory[27]);
        const tmp2 = toggleExpandedHistory;
        const items = [c7];
        const stateFromStores = history(toggleExpandedHistory[13]).useStateFromStores(items, () => {
          if (null != str) {
            guild = GuildStore.getGuild(tmp);
            let name;
            if (guild != null) {
              name = guild.name;
            }
            return name;
          }
        });
        const items1 = [history, unreads, categoryStyles];
        const callback = expandedHistory.useCallback((arg0, arg1) => {
          if (0 === arg0) {
            let tmp3 = history[arg1];
          } else {
            tmp3 = unreads[arg1];
          }
          return renderItemJSX({ result: tmp3, categoryStyles });
        }, items1);
        const someResult = unreads.some(
          (type) => type.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL,
        );
        c7 = someResult;
        const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
        const callback1 = expandedHistory.useCallback((arg0) => {
          if (0 === arg0) {
            const obj = { name: null, note: null, onPress: null };
            const intl3 = util.intl;
            obj.name = intl3.string(util.t["Xmh+5e"]);
            const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: null };
            const intl4 = util.intl;
            const string = intl4.string;
            let t2 = util.t;
            if (expandedHistory) {
              t2 = string(t2["3BdvgI"]);
              obj2.children = t2;
              let tmp14 = obj2;
            } else {
              obj2.children = string(t2["/XSoJ+"]);
              tmp14 = obj2;
            }
            obj.note = options(Text_Text.Text, tmp14);
            obj.onPress = toggleExpandedHistory;
          } else if (null != stateFromStores) {
            const intl2 = util.intl;
            const t1 = { guildName: tmp17 };
            intl2.formatToPlainString(c7 ? t1["+DrQVp"] : t1["+lFj35"], t1);
            const tmp9 = c7 ? t1["+DrQVp"] : t1["+lFj35"];
          } else {
            const intl = util.intl;
            const t = util.t;
            const obj3 = { name: intl.string(c7 ? t.C5viSQ : t.ieCAhD) };
            return options(tmp2, obj3);
          }
        }, items2);
        let tmp9 = unreads(toggleExpandedHistory[11])();
        const voiceUsers = tmp9;
        let obj2 = history(toggleExpandedHistory[13]);
        const tmp5 = unreads;
        const fontScale = history(toggleExpandedHistory[14]).useFontScale();
        const items3 = [fontScale, history, unreads, tmp9];
        const callback2 = expandedHistory.useCallback((arg0, arg1) => {
          if (null == arg1) {
            return 0;
          } else {
            if (0 === arg0) {
              let tmp3 = history[arg1];
            } else {
              tmp3 = unreads[arg1];
            }
            let tmp6 = dependencyMap;
            if (tmp3.type === sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL) {
              tmp6 = getScaledChannelRowHeightDefault(fontScale);
              let diff = tmp6 + voiceUsers.voiceUsers.height - 2;
            } else {
              diff = getScaledChannelRowHeightDefault(fontScale);
            }
          }
        }, items3);
        if (!expandedHistory) {
          const _Math = Math;
          Math.max(5 - unreads.length, 2);
        }
        const obj4 = { style: tmp.listContainer, children: null };
        if (history.length > 0) {
          const obj5 = {
            optimizeListItemRender: true,
            batchesToRender: 6,
            style: tmp.list,
            sectionSize: tmp9.category.height,
            itemSize: callback2,
            renderItem: callback,
            renderSection: callback1,
            sections: null,
            sectionFooterSize: 8,
            footerSize: 8,
            scrollIndicatorInsets: null,
            chunkBase: null,
            keyboardShouldPersistTaps: "always",
          };
          const items4 = [tmp12, unreads.length];
          obj5.sections = items4;
          obj5.scrollIndicatorInsets = scrollIndicatorInsets;
          obj5.chunkBase = unreads(toggleExpandedHistory[30])().height;
          if (str == null) {
            str = "default";
          }
          let tmp13Result = tmp13(tmp5(tmp2[32]), obj5, str);
          const tmp5Result = tmp5(tmp2[32]);
        } else {
          tmp13Result = null;
        }
        obj4.children = tmp13Result;
        return fontScale(str, obj4);
      },
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (results) => {
        const cResult = results(ref[10]).c(19);
        results = results.results;
        const query = results.query;
        const tmp4 = closure_13();
        const obj = results(ref[10]);
        const tmp = results;
        categoryStyles = results(ref[27]).useCategoryStyles();
        const height = categoryStyles(ref[30])().height;
        if (cResult[0] === categoryStyles) {
          if (cResult[1] === results) {
            let tmp7 = cResult[2];
          }
          ref = noop.useRef(null);
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  scrollToTop = current.scrollToTop;
                  if (scrollToTop != null) {
                    flag = false;
                    scrollToTopResult = scrollToTop(false);
                  }
                }
                return;
              }
            }
            cResult[3] = I;
          } else {
            class I {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  scrollToTop = current.scrollToTop;
                  if (scrollToTop != null) {
                    flag = false;
                    scrollToTopResult = scrollToTop(false);
                  }
                }
                return;
              }
            }
          }
          if (cResult[4] !== query) {
            class I {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  scrollToTop = current.scrollToTop;
                  if (scrollToTop != null) {
                    flag = false;
                    scrollToTopResult = scrollToTop(false);
                  }
                }
                return;
              }
            }
            tmp13[0] = query;
            cResult[4] = query;
            cResult[5] = tmp13;
          } else {
            class I {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  scrollToTop = current.scrollToTop;
                  if (scrollToTop != null) {
                    flag = false;
                    scrollToTopResult = scrollToTop(false);
                  }
                }
                return;
              }
            }
          }
          const effect = noop.useEffect(I, tmp13);
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  scrollToTop = current.scrollToTop;
                  if (scrollToTop != null) {
                    flag = false;
                    scrollToTopResult = scrollToTop(false);
                  }
                }
                return;
              }
            }
            cResult[6] = tmp16;
          } else {
            class I {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  scrollToTop = current.scrollToTop;
                  if (scrollToTop != null) {
                    flag = false;
                    scrollToTopResult = scrollToTop(false);
                  }
                }
                return;
              }
            }
          }
          noop = tmp16;
          const fontScale = tmp(tmp2[14]).useFontScale();
          if (cResult[7] === fontScale) {
            class I {
              constructor() {
                current = closure_2.current;
                if (current != null) {
                  scrollToTop = current.scrollToTop;
                  if (scrollToTop != null) {
                    flag = false;
                    scrollToTopResult = scrollToTop(false);
                  }
                }
                return;
              }
            }
            if (cResult[10] === height) {
              class I {
                constructor() {
                  current = closure_2.current;
                  if (current != null) {
                    scrollToTop = current.scrollToTop;
                    if (scrollToTop != null) {
                      flag = false;
                      scrollToTopResult = scrollToTop(false);
                    }
                  }
                  return;
                }
              }
            }
            let tmp20 = null;
            if (results.length > 0) {
              class I {
                constructor() {
                  current = closure_2.current;
                  if (current != null) {
                    scrollToTop = current.scrollToTop;
                    if (scrollToTop != null) {
                      flag = false;
                      scrollToTopResult = scrollToTop(false);
                    }
                  }
                  return;
                }
              }
              const obj4 = {
                ref,
                optimizeListItemRender: true,
                batchesToRender: 6,
                style: tmp4.list,
                sectionSize: tmp16.category.height,
                itemSize: tmp18,
                renderSection: renderSearchResultsSection,
                renderItem: tmp7,
                sections: null,
                footerSize: 16,
                scrollIndicatorInsets: null,
                chunkBase: null,
                keyboardShouldPersistTaps: "always",
              };
              const items = [results.length];
              obj4.sections = items;
              obj4.scrollIndicatorInsets = scrollIndicatorInsets;
              obj4.chunkBase = height;
              tmp20 = closure_9(tmp6(tmp2[32]), obj4);
            }
            cResult[10] = height;
            cResult[11] = tmp18;
            cResult[12] = tmp7;
            cResult[13] = results.length;
            cResult[14] = tmp4.list;
            cResult[15] = tmp20;
          }
          const fn2 = function _(arg0, arg1) {
            if (null == arg1) {
              return 0;
            } else {
              let tmp3 = dependencyMap;
              if (results[arg1].type === sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL) {
                tmp3 = getScaledChannelRowHeightDefault(fontScale);
                let diff = tmp3 + tmp16.voiceUsers.height - 2;
              } else {
                diff = getScaledChannelRowHeightDefault(fontScale);
              }
            }
          };
          cResult[7] = fontScale;
          cResult[8] = results;
          cResult[9] = fn2;
          const tmpResult = tmp(tmp2[14]);
        }
        const fn = function l(arg0, arg1) {
          return renderItemJSX({ result: results[arg1], categoryStyles });
        };
        cResult[0] = categoryStyles;
        cResult[1] = results;
        cResult[2] = fn;
        tmp7 = fn;
        const obj2 = results(ref[27]);
        tmp6 = categoryStyles;
      }
    : (results) => {
        results = results.results;
        let ref;
        noop = undefined;
        const tmp = closure_13();
        categoryStyles = results(ref[27]).useCategoryStyles();
        const items = [results, categoryStyles];
        const callback = noop.useCallback(
          (arg0, arg1) => renderItemJSX({ result: results[arg1], categoryStyles }),
          items,
        );
        ref = noop.useRef(null);
        const items1 = [results.query];
        const effect = noop.useEffect(() => {
          const current = ref.current;
          if (current != null) {
            const scrollToTop = current.scrollToTop;
            if (scrollToTop != null) {
              scrollToTop(false);
            }
          }
        }, items1);
        const tmp8 = categoryStyles(ref[11])();
        noop = tmp8;
        const obj = results(ref[27]);
        const tmp2 = ref;
        const tmp4 = categoryStyles;
        const fontScale = results(ref[14]).useFontScale();
        const items2 = [fontScale, results, tmp8];
        const obj3 = { style: tmp.listContainer, children: null };
        let tmp11Result = null;
        if (results.length > 0) {
          const obj4 = {
            ref,
            optimizeListItemRender: true,
            batchesToRender: 6,
            style: tmp.list,
            sectionSize: tmp8.category.height,
            itemSize: tmp10,
            renderSection: renderSearchResultsSection,
            renderItem: callback,
            sections: null,
            footerSize: 16,
            scrollIndicatorInsets: null,
            chunkBase: null,
            keyboardShouldPersistTaps: "always",
          };
          const items3 = [results.length];
          obj4.sections = items3;
          obj4.scrollIndicatorInsets = scrollIndicatorInsets;
          obj4.chunkBase = categoryStyles(ref[30])().height;
          tmp11Result = closure_9(tmp4(tmp2[32]), obj4);
        }
        obj3.children = tmp11Result;
        return closure_9(fontScale, obj3);
      },
);
