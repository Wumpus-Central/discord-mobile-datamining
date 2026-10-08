// discord_app/modules/opt_in_channels/native/ChannelBrowser.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NewChannelsStore from "../../recent_channels/NewChannelsStore.tsx";
import GuildCategoryStore from "../../../stores/GuildCategoryStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  container: { flex: 1 },
  header: { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 },
  categoryContainer: null,
  categoryTitle: null,
  channelTitle: null,
  selectAllContainer: null,
  selectAllCheckbox: null,
  newBadge: null,
  nuxCard: null,
  nuxCloseContainer: null,
  nuxHeader: null,
  nuxHeaderText: null,
  nuxBody: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 };
obj.categoryContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
};
obj.categoryTitle = { marginBottom: 0 };
obj.channelTitle = { flexDirection: "row", alignItems: "center" };
obj.selectAllContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
};
let obj5 = { marginRight: nativeDefault.space.PX_4, transform: null };
let items = [{ scale: 0.75 }];
obj5.transform = items;
obj.selectAllCheckbox = obj5;
obj.newBadge = { fontFamily: fn(1085).Fonts.DISPLAY_EXTRABOLD };
let obj4 = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
};
obj.nuxCard = {
  position: "relative",
  padding: 0,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  marginBottom: 0,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
};
const rect = { position: "absolute", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, top: 16, right: 16 };
obj.nuxCloseContainer = rect;
let obj6 = {
  position: "relative",
  padding: 0,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  marginBottom: 0,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
};
obj.nuxHeader = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  padding: 16,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
obj.nuxHeaderText = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
obj.nuxBody = { textAlign: "center", marginBottom: 4 };
let closure_15 = createStyles.createStyles(obj);
fn(558);
let obj7 = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  padding: 16,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
let ReactCompilerGating = fn(558);
let closure_17 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function CategoryRow(channel) {
        const cResult = channel(576).c(27);
        channel = channel.channel;
        const onChannelClick = channel.onChannelClick;
        const tmp4 = closure_15();
        const tmp5 = onChannelClick(5417)(channel);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserGuildSettingsStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channel.guild_id) {
          if (cResult[2] === channel.id) {
            let tmp8 = cResult[3];
          }
          const stateFromStores = tmp(504).useStateFromStores(first, tmp8);
          if (cResult[4] !== stateFromStores) {
            const obj2 = { checked: stateFromStores };
            cResult[4] = stateFromStores;
            cResult[5] = obj2;
            let tmp10 = obj2;
          } else {
            tmp10 = cResult[5];
          }
          const tmpResult = tmp(504);
          const checkboxA11yNative = tmp(4792).useCheckboxA11yNative(tmp10);
          if (cResult[6] === channel.guild_id) {
            if (cResult[7] === channel.id) {
              if (cResult[8] === onChannelClick) {
                let tmp12 = cResult[9];
              }
              let str2 = "text";
              if ("null" !== channel.id) {
                str2 = checkboxA11yNative.accessibilityRole;
              }
              if ("null" !== channel.id) {
                const accessibilityState = checkboxA11yNative.accessibilityState;
              }
              if (cResult[10] === tmp5) {
                if (cResult[11] === tmp4.categoryTitle) {
                  let tmp14 = cResult[12];
                }
                if (cResult[13] === tmp13) {
                  if (cResult[14] === stateFromStores) {
                    if (cResult[15] === tmp4.selectAllCheckbox) {
                      if (cResult[16] === tmp4.selectAllContainer) {
                        let tmp16 = cResult[17];
                      }
                      if (cResult[18] === tmp14) {
                        if (cResult[19] === tmp16) {
                          let tmp21 = cResult[20];
                        }
                        if (cResult[21] === tmp4.categoryContainer) {
                          if (cResult[22] === tmp12) {
                            if (cResult[23] === str2) {
                              if (cResult[24] === accessibilityState) {
                                if (cResult[25] === tmp21) {
                                  let tmp25 = cResult[26];
                                }
                                return tmp25;
                              }
                            }
                          }
                        }
                        const obj3 = {
                          style: tmp4.categoryContainer,
                          onPress: tmp12,
                          accessibilityRole: str2,
                          accessibilityState,
                          children: null,
                        };
                        class T {
                          constructor() {
                            return onChannelClick(channel.guild_id, channel.id, channel.id);
                          }
                        }
                        const tmp27 = closure_12(tmp(6189).PressableOpacity, obj3);
                        cResult[21] = tmp4.categoryContainer;
                        cResult[22] = tmp12;
                        cResult[23] = str2;
                        cResult[24] = accessibilityState;
                        cResult[25] = tmp21;
                        cResult[26] = tmp27;
                        tmp25 = tmp27;
                      }
                      const items1 = [tmp14, tmp16];
                      class T {
                        constructor() {
                          return onChannelClick(channel.guild_id, channel.id, channel.id);
                        }
                      }
                      const tmp24 = closure_13(closure_14, { children: null });
                      cResult[18] = tmp14;
                      cResult[19] = tmp16;
                      cResult[20] = tmp24;
                      tmp21 = tmp24;
                      const obj4 = { children: null };
                    }
                  }
                }
                let tmp17 = null;
                if (!tmp13) {
                  const obj5 = { style: tmp4.selectAllContainer, children: null };
                  const obj6 = { style: tmp4.selectAllCheckbox, children: null };
                  class T {
                    constructor() {
                      return onChannelClick(channel.guild_id, channel.id, channel.id);
                    }
                  }
                  obj6.children = closure_12(tmp(6182).FormCheckbox, { checked: null });
                  const items2 = [closure_12(View, obj6)];
                  const obj8 = { variant: "text-xs/semibold", color: "interactive-text-default", children: null };
                  const intl = tmp(1126).intl;
                  obj8.children = intl.string(tmp(1126).t.mSQwnW);
                  items2[1] = closure_12(tmp(5086).Text, obj8);
                  obj5.children = items2;
                  tmp17 = closure_13(View, obj5);
                  const obj7 = { checked: null };
                }
                cResult[13] = tmp13;
                cResult[14] = stateFromStores;
                class T {
                  constructor() {
                    return onChannelClick(channel.guild_id, channel.id, channel.id);
                  }
                }
                cResult[15] = tmp4.selectAllCheckbox;
                cResult[16] = tmp4.selectAllContainer;
                cResult[17] = tmp17;
                tmp16 = tmp17;
              }
              class T {
                constructor() {
                  return onChannelClick(channel.guild_id, channel.id, channel.id);
                }
              }
              const obj9 = { style: tmp4.categoryTitle, title: tmp5, lineClamp: 1 };
              const tmp15 = closure_12(tmp(6267).TableRowGroupTitle, obj9);
              cResult[10] = tmp5;
              cResult[11] = tmp4.categoryTitle;
              cResult[12] = tmp15;
              tmp14 = tmp15;
            }
          }
          class T {
            constructor() {
              return onChannelClick(channel.guild_id, channel.id, channel.id);
            }
          }
          cResult[6] = channel.guild_id;
          cResult[7] = channel.id;
          cResult[8] = onChannelClick;
          cResult[9] = T;
          tmp12 = T;
          const tmpResult2 = tmp(4792);
        }
        const fn = function l() {
          return UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = channel.id;
        cResult[3] = fn;
        tmp8 = fn;
        const obj = channel(576);
      }
    : function CategoryRow(channel) {
        channel = channel.channel;
        const onChannelClick = channel.onChannelClick;
        const tmp = closure_15();
        const tmp3 = onChannelClick(5417)(channel);
        const items = [UserGuildSettingsStore];
        const stateFromStores = channel(504).useStateFromStores(items, () =>
          UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id),
        );
        const obj = channel(504);
        const checkboxA11yNative = channel(4792).useCheckboxA11yNative({ checked: stateFromStores });
        const obj3 = {
          style: tmp.categoryContainer,
          onPress() {
            return onChannelClick(channel.guild_id, channel.id, channel.id);
          },
          accessibilityRole: null,
          accessibilityState: null,
          children: null,
        };
        let str = "text";
        if ("null" !== channel.id) {
          str = checkboxA11yNative.accessibilityRole;
        }
        obj3.accessibilityRole = str;
        let accessibilityState;
        if ("null" !== channel.id) {
          accessibilityState = checkboxA11yNative.accessibilityState;
        }
        obj3.accessibilityState = accessibilityState;
        const items1 = [
          closure_12(channel(6267).TableRowGroupTitle, { style: tmp.categoryTitle, title: tmp3, lineClamp: 1 }),
        ];
        let tmp10Result = null;
        if ("null" !== channel.id) {
          const obj5 = { style: tmp.selectAllContainer, children: null };
          const obj6 = { style: tmp.selectAllCheckbox, children: null };
          const obj7 = { checked: stateFromStores };
          obj6.children = closure_12(tmp4(6182).FormCheckbox, obj7);
          const items2 = [closure_12(View, obj6)];
          const obj8 = { variant: "text-xs/semibold", color: "interactive-text-default", children: null };
          const intl = tmp4(1126).intl;
          obj8.children = intl.string(tmp4(1126).t.mSQwnW);
          items2[1] = closure_12(tmp4(5086).Text, obj8);
          obj5.children = items2;
          tmp10Result = closure_13(View, obj5);
        }
        items1[1] = tmp10Result;
        obj3.children = closure_13(closure_14, { children: items1 });
        return closure_12(channel(6189).PressableOpacity, obj3);
      },
);
ReactCompilerGating = fn(558);
let closure_18 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelRow(channel) {
        const cResult = channel(onChannelClick[14]).c(56);
        channel = channel.channel;
        guild = channel.guild;
        ({ isFirst, isLast, onChannelClick } = channel);
        closure_15();
        const obj = channel(onChannelClick[14]);
        [r10024, _slicedToArray] = noop.useState(0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserGuildSettingsStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channel.guild_id) {
          if (cResult[2] === channel.id) {
            let tmp8 = cResult[3];
          }
          const stateFromStores = tmp(onChannelClick[17]).useStateFromStores(first, tmp8);
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [NewChannelsStore];
            cResult[4] = items1;
            let tmp10 = items1;
          } else {
            tmp10 = cResult[4];
          }
          if (cResult[5] === channel.id) {
            let id;
            if (guild != null) {
              id = guild.id;
            }
            if (cResult[6] === id) {
              let tmp14 = cResult[7];
            }
            if (cResult[8] === channel.id) {
              if (cResult[9] === guild) {
                let tmp17 = cResult[10];
              }
              const stateFromStores1 = tmp(onChannelClick[17]).useStateFromStores(tmp10, tmp14, tmp17);
              const _Symbol2 = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const items2 = [UserGuildSettingsStore];
                cResult[11] = items2;
                let tmp19 = items2;
              } else {
                tmp19 = cResult[11];
              }
              if (cResult[12] === channel.guild_id) {
                if (cResult[13] === channel.parent_id) {
                  let tmp21 = cResult[14];
                }
                const stateFromStores2 = tmp(onChannelClick[17]).useStateFromStores(tmp19, tmp21);
                guild(onChannelClick[31])(channel);
                let topic = channel.topic;
                class N {
                  constructor() {
                    tmp = channel;
                    isChannelOptedInResult = null != channel.parent_id;
                    if (isChannelOptedInResult) {
                      tmp3 = closure_10;
                      isChannelOptedInResult = closure_10.isChannelOptedIn(tmp.guild_id, tmp.parent_id);
                    }
                    return isChannelOptedInResult;
                  }
                }
                if (!tmp26) {
                  topic = tmp(onChannelClick[18]).getActiveAgoTimestamp(channel.id);
                  const tmpResult9 = tmp(onChannelClick[18]);
                }
                const _Symbol3 = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  class O {
                    constructor(arg0) {
                      tmp = closure_3(channel.nativeEvent.layout.width);
                      return;
                    }
                  }
                  cResult[15] = O;
                } else {
                  class O {
                    constructor(arg0) {
                      tmp = closure_3(channel.nativeEvent.layout.width);
                      return;
                    }
                  }
                }
                const tmpResult8 = tmp(onChannelClick[17]);
                const token = tmp(onChannelClick[35]).useToken(
                  tmp23(onChannelClick[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE,
                );
                const tmpResult10 = tmp(onChannelClick[35]);
                const token1 = tmp(onChannelClick[35]).useToken(
                  tmp23(onChannelClick[12]).modules.mobile.TABLE_ROW_LABEL_COLOR,
                );
                if (null == guild) {
                  class O {
                    constructor(arg0) {
                      tmp = closure_3(channel.nativeEvent.layout.width);
                      return;
                    }
                  }
                } else {
                  class O {
                    constructor(arg0) {
                      tmp = closure_3(channel.nativeEvent.layout.width);
                      return;
                    }
                  }
                  const channelIconWithGuild = tmp(onChannelClick[36]).getChannelIconWithGuild(channel, guild);
                  cResult[16] = channel;
                  cResult[17] = guild;
                  class N {
                    constructor() {
                      tmp = channel;
                      isChannelOptedInResult = null != channel.parent_id;
                      if (isChannelOptedInResult) {
                        tmp3 = closure_10;
                        isChannelOptedInResult = closure_10.isChannelOptedIn(tmp.guild_id, tmp.parent_id);
                      }
                      return isChannelOptedInResult;
                    }
                  }
                  cResult[18] = channelIconWithGuild;
                  const tmpResult12 = tmp(onChannelClick[36]);
                }
                const tmpResult11 = tmp(onChannelClick[35]);
              }
              class N {
                constructor() {
                  tmp = channel;
                  isChannelOptedInResult = null != channel.parent_id;
                  if (isChannelOptedInResult) {
                    tmp3 = closure_10;
                    isChannelOptedInResult = closure_10.isChannelOptedIn(tmp.guild_id, tmp.parent_id);
                  }
                  return isChannelOptedInResult;
                }
              }
              cResult[12] = channel.guild_id;
              cResult[13] = channel.parent_id;
              cResult[14] = N;
              tmp21 = N;
              const tmpResult7 = tmp(onChannelClick[17]);
            }
            const items3 = [, guild];
            cResult[8] = channel.id;
            cResult[9] = guild;
            cResult[10] = items3;
            tmp17 = items3;
          }
          cResult[5] = channel.id;
          if (guild != null) {
            class O {
              constructor(arg0) {
                tmp = closure_3(channel.nativeEvent.layout.width);
                return;
              }
            }
          }
          const fn2 = function k() {
            let id;
            if (guild != null) {
              id = guild.id;
            }
            return NewChannelsStore.shouldIndicateNewChannel(id, channel.id);
          };
          cResult[6] = undefined;
          cResult[7] = fn2;
          tmp14 = fn2;
          const tmpResult = tmp(onChannelClick[17]);
        }
        const fn = function c() {
          return UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id);
        };
        ({ guild_id: tmp3[1], id: tmp3[2] } = channel);
        cResult[3] = fn;
        tmp8 = fn;
        const tmp5 = _slicedToArray(noop.useState(0), 2);
      }
    : function ChannelRow(channel) {
        channel = channel.channel;
        const onChannelClick = channel.onChannelClick;
        guild = undefined;
        ({ isFirst, isLast, forceChecked } = channel);
        const tmp = closure_15();
        [tmp3, c3] = guild(noop.useState(0), 2);
        const tmp2 = guild(noop.useState(0), 2);
        const items = [UserGuildSettingsStore];
        let stateFromStores = channel(onChannelClick[17]).useStateFromStores(items, () =>
          UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id),
        );
        const obj2 = channel(onChannelClick[17]);
        const items1 = [NewChannelsStore];
        const items2 = [channel.id, guild];
        let stateFromStores1 = channel(onChannelClick[17]).useStateFromStores(
          items1,
          () => {
            let id;
            if (guild != null) {
              id = guild.id;
            }
            return NewChannelsStore.shouldIndicateNewChannel(id, channel.id);
          },
          items2,
        );
        const obj3 = channel(onChannelClick[17]);
        const items3 = [UserGuildSettingsStore];
        const stateFromStores2 = channel(onChannelClick[17]).useStateFromStores(items3, () => {
          let isChannelOptedInResult = null != channel.parent_id;
          if (isChannelOptedInResult) {
            isChannelOptedInResult = UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.parent_id);
          }
          return isChannelOptedInResult;
        });
        let topic = channel.topic;
        let isGuildVocalResult = null != topic;
        const obj4 = channel(onChannelClick[17]);
        if (isGuildVocalResult) {
          isGuildVocalResult = 0 !== topic.length;
        }
        if (!isGuildVocalResult) {
          isGuildVocalResult = channel.isGuildVocal();
        }
        if (!isGuildVocalResult) {
          topic = tmp4(tmp5[18]).getActiveAgoTimestamp(channel.id);
          const tmp4Result = tmp4(tmp5[18]);
        }
        const callback = noop.useCallback((nativeEvent) => {
          _undefined(nativeEvent.nativeEvent.layout.width);
        }, []);
        const tmp10 = guild(onChannelClick[31])(channel);
        const token = channel(onChannelClick[35]).useToken(tmp9(tmp5[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
        channel(onChannelClick[35]);
        if (null == guild) {
          return null;
        } else {
          const channelIconWithGuild = tmp4(tmp5[36]).getChannelIconWithGuild(channel, guild);
          const tmp4Result7 = tmp4(tmp5[36]);
          let rulesChannelId;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          const obj5 = { isRulesChannel: rulesChannelId === channel.id };
          const channelIconComponent = tmp4(tmp5[36]).getChannelIconComponent(channel, obj5);
          const obj6 = {
            start: isFirst,
            end: isLast,
            disabled: stateFromStores2,
            icon: null,
            label: null,
            subLabel: null,
            subLabelLineClamp: 1,
            onPress: null,
            checked: null,
          };
          const obj7 = { source: channelIconWithGuild, IconComponent: channelIconComponent };
          obj6.icon = closure_12(tmp4(tmp5[38]).TableRowIcon, obj7);
          const obj8 = { style: tmp.channelTitle, children: null };
          let tmp21;
          if (stateFromStores1) {
            const obj9 = { marginRight: tmp3 + 8 };
            tmp21 = obj9;
          }
          const obj10 = { lineClamp: 1, style: tmp21, variant: token, color: tmp15, children: tmp10 };
          const items4 = [closure_12(tmp4(tmp5[29]).Text, obj10)];
          if (stateFromStores1) {
            const obj11 = { style: null, onLayout: null, children: null };
            const obj12 = { marginLeft: -tmp3 };
            obj11.style = obj12;
            obj11.onLayout = callback;
            const obj13 = { color: tmp4(tmp5[39]).BadgeColors.BRAND, text: null, textStyle: null };
            const intl = tmp4(tmp5[25]).intl;
            obj13.text = intl.string(tmp4(tmp5[25]).t.y2b7CA);
            obj13.textStyle = tmp.newBadge;
            obj11.children = closure_12(tmp4(tmp5[39]).TextBadge, obj13);
            stateFromStores1 = closure_12(View, obj11);
          }
          items4[1] = stateFromStores1;
          obj8.children = items4;
          obj6.label = closure_13(View, obj8);
          let parseTopicResult = null;
          if (null != topic) {
            parseTopicResult = null;
            if (topic.length > 0) {
              const obj14 = { channelId: channel.id, shouldCloseModal: true };
              parseTopicResult = tmp9(tmp5[40]).parseTopic(topic, true, obj14);
              const tmp9Result = tmp9(tmp5[40]);
            }
          }
          obj6.subLabel = parseTopicResult;
          obj6.onPress = function onPress() {
            return onChannelClick(guild.id, channel.id, channel.parent_id);
          };
          if (!stateFromStores) {
            stateFromStores = stateFromStores2;
          }
          if (!stateFromStores) {
            stateFromStores = forceChecked;
          }
          obj6.checked = stateFromStores;
          return closure_12(tmp4(tmp5[37]).TableCheckboxRow, obj6);
        }
        const tmp4Result5 = channel(onChannelClick[35]);
      },
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelBrowser(guildId) {
      const cResult = guildId(onChannelClick[14]).c(43);
      guildId = guildId.guildId;
      closure_15();
      let obj = guildId(onChannelClick[14]);
      let obj2 = items3;
      [tmp6, importDefault] = stateFromStores(items3.useState(""), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { includeKeyboardHeight: true };
        cResult[0] = obj3;
        let first = obj3;
      } else {
        first = cResult[0];
      }
      const insets = require("useSafeAreaInsetsKeyboardAware")(first).insets;
      onChannelClick = require("useBatchUpdateChannelSettings")(guildId).onChannelClick;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[1] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== guildId) {
        class B {
          constructor() {
            return closure_9.getGuild(guildId);
          }
        }
        cResult[2] = guildId;
        cResult[3] = B;
      } else {
        class B {
          constructor() {
            return closure_9.getGuild(guildId);
          }
        }
      }
      const tmp5 = stateFromStores(items3.useState(""), 2);
      stateFromStores = guildId(onChannelClick[17]).useStateFromStores(tmp8, B);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return closure_9.getGuild(guildId);
          }
        }
        const items1 = [GuildCategoryStore];
        cResult[4] = items1;
        const tmp12 = items1;
      } else {
        class B {
          constructor() {
            return closure_9.getGuild(guildId);
          }
        }
      }
      if (cResult[5] !== guildId) {
        class B {
          constructor() {
            return closure_9.getGuild(guildId);
          }
        }
        cResult[5] = guildId;
        cResult[6] = tmp14;
      } else {
        class B {
          constructor() {
            return closure_9.getGuild(guildId);
          }
        }
      }
      const tmpResult = guildId(onChannelClick[17]);
      const stateFromStores1 = guildId(onChannelClick[17]).useStateFromStores(tmp12, tmp14);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return closure_9.getGuild(guildId);
          }
        }
        const items2 = [GuildChannelStore];
        cResult[7] = items2;
        const tmp16 = items2;
      } else {
        class B {
          constructor() {
            return closure_9.getGuild(guildId);
          }
        }
      }
      if (cResult[8] !== guildId) {
        class F {
          constructor() {
            return closure_8.getChannels(guildId);
          }
        }
        cResult[8] = guildId;
        cResult[9] = F;
      } else {
        class F {
          constructor() {
            return closure_8.getChannels(guildId);
          }
        }
      }
      const tmpResult6 = guildId(onChannelClick[17]);
      const stateFromStores2 = guildId(onChannelClick[17]).useStateFromStores(tmp16, F);
      const tmpResult7 = guildId(onChannelClick[17]);
      const filterCategoriesByQuery = guildId(onChannelClick[18]).useFilterCategoriesByQuery(
        guildId,
        stateFromStores1,
        stateFromStores2,
        tmp6,
      );
      const tmpResult8 = guildId(onChannelClick[18]);
      let result = guildId(onChannelClick[19]).useIsDismissibleContentDismissed_UNSAFE(
        tmp(tmp2[20]).DismissibleContent.CHANNEL_BROWSER_NUX,
      );
      const tmpResult9 = guildId(onChannelClick[19]);
      const channelBrowserSections = guildId(onChannelClick[18]).useChannelBrowserSections(
        guildId,
        filterCategoriesByQuery,
        64,
      );
      if (cResult[10] === filterCategoriesByQuery) {
        class F {
          constructor() {
            return closure_8.getChannels(guildId);
          }
        }
        if (cResult[13] !== guildId) {
          class F {
            constructor() {
              return closure_8.getChannels(guildId);
            }
          }
          let result1 = obj10.hasNotSetUpChannelOptIn(guildId);
          cResult[13] = guildId;
          cResult[14] = result1;
        } else {
          class F {
            constructor() {
              return closure_8.getChannels(guildId);
            }
          }
        }
        result1 = tmp22;
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              return closure_8.getChannels(guildId);
            }
          }
          cResult[15] = tmp25;
        } else {
          class F {
            constructor() {
              return closure_8.getChannels(guildId);
            }
          }
        }
        const effect = obj2.useEffect(tmp25);
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              return closure_8.getChannels(guildId);
            }
          }
          cResult[16] = tmp28;
        } else {
          class F {
            constructor() {
              return closure_8.getChannels(guildId);
            }
          }
        }
        if (cResult[17] === tmp22) {
          class F {
            constructor() {
              return closure_8.getChannels(guildId);
            }
          }
        }
        class Q {
          constructor(arg0) {
            id = guildId.item.channel;
            if (null == id) {
              return null;
            } else {
              tmp4 = jsx;
              if (tmp) {
                tmp10 = closure_17;
                obj1 = { channel: null, onChannelClick: null };
                obj1.channel = id;
                tmp11 = onChannelClick;
                obj1.onChannelClick = onChannelClick;
                id = id.id;
                tmp4Result = tmp4(closure_17, obj1, id);
              } else {
                tmp5 = closure_18;
                obj = {
                  channel: null,
                  guild: null,
                  isFirst: null,
                  isLast: null,
                  forceChecked: null,
                  onChannelClick: null,
                };
                obj.channel = id;
                tmp6 = closure_3;
                obj.guild = closure_3;
                num = 0;
                obj.isFirst = 0 === tmp2;
                obj.isLast = tmp3;
                tmp7 = closure_6;
                obj.forceChecked = closure_6;
                tmp8 = onChannelClick;
                obj.onChannelClick = onChannelClick;
                tmp4Result = tmp4(closure_18, obj, id.id);
              }
              tmp12 = tmp4Result;
            }
            return;
          }
        }
        cResult[17] = tmp22;
        cResult[18] = stateFromStores;
        cResult[19] = onChannelClick;
        cResult[20] = Q;
      }
      items3 = [];
      const item = channelBrowserSections.forEach((rowCount, section) => {
        if (rowCount.rowCount > 0) {
          const channel = filterCategoriesByQuery._categories[section].channel;
          const obj2 = { isSection: true, section, row: -1, channel, isLast: false };
          items3.push(obj2);
          for (let num = 0; num < rowCount.rowCount; num = num + 1) {
            let obj = { isSection: false, section, row: num, channel: null, isLast: null };
            let tmp3 = filterCategoriesByQuery[channel.id][num];
            let channel1;
            if (tmp3 != null) {
              channel1 = tmp3.channel;
            }
            obj.channel = channel1;
            obj.isLast = num >= filterCategoriesByQuery[channel.id].length - 1;
            let arr2 = items3.push(obj);
          }
        }
      });
      cResult[10] = filterCategoriesByQuery;
      cResult[11] = channelBrowserSections;
      cResult[12] = items3;
      const tmpResult10 = guildId(onChannelClick[18]);
    }
  : function ChannelBrowser(guildId) {
      guildId = guildId.guildId;
      let onChannelClick;
      let stateFromStores;
      let filterCategoriesByQuery;
      const tmp = closure_15();
      const tmp2 = stateFromStores(filterCategoriesByQuery.useState(""), 2);
      importDefault = tmp2[1];
      onChannelClick = require("useBatchUpdateChannelSettings")(guildId).onChannelClick;
      let items = [GuildStore];
      stateFromStores = guildId(onChannelClick[17]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj = guildId(onChannelClick[17]);
      const items1 = [GuildCategoryStore];
      const stateFromStores1 = guildId(onChannelClick[17]).useStateFromStores(items1, () =>
        GuildCategoryStore.getCategories(guildId),
      );
      let obj2 = guildId(onChannelClick[17]);
      const items2 = [GuildChannelStore];
      const stateFromStores2 = guildId(onChannelClick[17]).useStateFromStores(items2, () =>
        GuildChannelStore.getChannels(guildId),
      );
      const obj3 = guildId(onChannelClick[17]);
      filterCategoriesByQuery = guildId(onChannelClick[18]).useFilterCategoriesByQuery(
        guildId,
        stateFromStores1,
        stateFromStores2,
        tmp2[0],
      );
      const obj4 = guildId(onChannelClick[18]);
      let result = guildId(onChannelClick[19]).useIsDismissibleContentDismissed_UNSAFE(
        guildId(onChannelClick[20]).DismissibleContent.CHANNEL_BROWSER_NUX,
      );
      const obj5 = guildId(onChannelClick[19]);
      const channelBrowserSections = guildId(onChannelClick[18]).useChannelBrowserSections(
        guildId,
        filterCategoriesByQuery,
        64,
      );
      const items3 = [filterCategoriesByQuery, channelBrowserSections];
      const memo = filterCategoriesByQuery.useMemo(() => {
        const items = [];
        const item = channelBrowserSections.forEach((rowCount, section) => {
          if (rowCount.rowCount > 0) {
            const channel = filterCategoriesByQuery._categories[section].channel;
            const obj2 = { isSection: true, section, row: -1, channel, isLast: false };
            items.push(obj2);
            for (let num = 0; num < rowCount.rowCount; num = num + 1) {
              let obj = { isSection: false, section, row: num, channel: null, isLast: null };
              let tmp3 = filterCategoriesByQuery[channel.id][num];
              let channel1;
              if (tmp3 != null) {
                channel1 = tmp3.channel;
              }
              obj.channel = channel1;
              obj.isLast = num >= filterCategoriesByQuery[channel.id].length - 1;
              let arr2 = items.push(obj);
            }
          }
        });
        return items;
      }, items3);
      const obj6 = guildId(onChannelClick[18]);
      const result1 = guildId(onChannelClick[21]).hasNotSetUpChannelOptIn(guildId);
      const effect = filterCategoriesByQuery.useEffect(() => {
        const result = guildId(onChannelClick[19]).UNSAFE_markDismissibleContentAsDismissed(
          guildId(onChannelClick[20]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
          { dismissAction: constants.DISMISS },
        );
      });
      const items4 = [stateFromStores, result1, onChannelClick];
      const obj8 = { style: tmp.container, children: null };
      const obj9 = { style: tmp.header, children: null };
      const callback = filterCategoriesByQuery.useCallback((item) => {
        let id = item.item.channel;
        if (null == id) {
          return null;
        } else if (tmp) {
          const obj2 = { channel: id, onChannelClick };
          id = id.id;
          let tmp4Result = __initData(closure_17, obj2, id);
        } else {
          const obj = {
            channel: id,
            guild: stateFromStores,
            isFirst: 0 === tmp2,
            isLast: tmp3,
            forceChecked: result1,
            onChannelClick,
          };
          tmp4Result = __initData(closure_18, obj, id.id);
        }
      }, items4);
      obj9.children = closure_12(guildId(onChannelClick[22]).SearchField, {
        size: "md",
        onChange(arg0) {
          return closure_1(arg0);
        },
      });
      const items5 = [closure_12(channelBrowserSections, obj9)];
      let tmp16Result = null;
      if (!result) {
        const obj11 = { style: tmp.nuxCard, children: null };
        const obj12 = {
          onPress: function handleDismissNux() {
            const result = guildId(onChannelClick[19]).UNSAFE_markDismissibleContentAsDismissed(
              guildId(onChannelClick[20]).DismissibleContent.CHANNEL_BROWSER_NUX,
              { dismissAction: constants.DISMISS },
            );
          },
          accessibilityRole: "button",
          accessibilityLabel: null,
          style: null,
          children: null,
        };
        const intl = tmp5(tmp4[25]).intl;
        obj12.accessibilityLabel = intl.string(tmp5(tmp4[25]).t.cpT0Cq);
        obj12.style = tmp.nuxCloseContainer;
        obj12.children = closure_12(tmp5(tmp4[26]).CircleXIcon, {});
        const items6 = [closure_12(tmp5(tmp4[24]).PressableOpacity, obj12), ,];
        const obj13 = { source: tmp3(tmp4[28]) };
        items6[1] = closure_12(tmp3(tmp4[27]), obj13);
        const obj14 = { style: tmp.nuxHeader, children: null };
        const obj15 = { style: tmp.nuxHeaderText, children: null };
        const obj16 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
        const intl2 = tmp5(tmp4[25]).intl;
        obj16.children = intl2.string(tmp5(tmp4[25]).t.utqWEC);
        obj15.children = closure_12(tmp5(tmp4[29]).Text, obj16);
        const items7 = [closure_12(tmp17, obj15), ,];
        const obj17 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: null };
        const intl3 = tmp5(tmp4[25]).intl;
        obj17.children = intl3.string(tmp5(tmp4[25]).t["+9etcM"]);
        items7[1] = closure_12(tmp5(tmp4[29]).Text, obj17);
        const obj18 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: null };
        const intl4 = tmp5(tmp4[25]).intl;
        obj18.children = intl4.format(tmp5(tmp4[25]).t.Z0axjk, {});
        items7[2] = closure_12(tmp5(tmp4[29]).Text, obj18);
        obj14.children = items7;
        items6[2] = closure_13(tmp17, obj14);
        obj11.children = items6;
        tmp16Result = closure_13(tmp5(tmp4[23]).Card, obj11);
        const tmp3Result = tmp3(tmp4[27]);
      }
      const obj19 = {
        ListHeaderComponent: tmp16Result,
        accessibilityLabel: null,
        renderItem: null,
        data: null,
        contentContainerStyle: null,
        keyExtractor: null,
      };
      const intl5 = tmp5(tmp4[25]).intl;
      obj19.accessibilityLabel = intl5.string(guildId(onChannelClick[25]).t.et6wav);
      obj19.renderItem = callback;
      obj19.data = memo;
      const obj10 = {
        size: "md",
        onChange(arg0) {
          return closure_1(arg0);
        },
      };
      const obj7 = guildId(onChannelClick[21]);
      obj19.contentContainerStyle = {
        paddingBottom:
          require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets.bottom +
          require("native").space.PX_16,
        paddingHorizontal: require("native").space.PX_16,
      };
      obj19.keyExtractor = keyExtractor;
      items5[1] = closure_12(guildId(onChannelClick[30]).FlashList, obj19);
      obj8.children = items5;
      return closure_13(channelBrowserSections, obj8);
    };
