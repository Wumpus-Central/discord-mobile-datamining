// discord_app/modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(7614).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" },
  guildIcon: { marginLeft: 4 },
  tag: { padding: 2 },
  tagStyles: null,
  divider: null,
  itemTrailingStyle: null,
};
const PlatformUtils = fn(1369);
let num = 18;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
obj.tagStyles = { lineHeight: num };
obj.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.itemTrailingStyle = { flexDirection: "row", alignItems: "center", gap: 8, height: 20 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_9 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = item(576).c(34);
        ({ start, end, item } = arg0);
        ({ selected, onSelectGuild } = arg0);
        const tmp4 = closure_8();
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
          const radioA11yNative = item(4600).useRadioA11yNative(tmp12);
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
                          const tmp30 = closure_6(item(6082).FormRadio, obj3);
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
                            class G {
                              constructor() {
                                id = undefined;
                                tmp = onSelectGuild;
                                if (item != null) {
                                  id = item.id;
                                }
                                if (id == null) {
                                  id = null;
                                }
                                tmpResult = tmp(id);
                                obj = closure_1(closure_2[11]);
                                hideActionSheetResult = obj.hideActionSheet();
                                return;
                              }
                            }
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
                        const tmp34 = closure_7(View, obj5);
                        class G {
                          constructor() {
                            id = undefined;
                            tmp = onSelectGuild;
                            if (item != null) {
                              id = item.id;
                            }
                            if (id == null) {
                              id = null;
                            }
                            tmpResult = tmp(id);
                            obj = closure_1(closure_2[11]);
                            hideActionSheetResult = obj.hideActionSheet();
                            return;
                          }
                        }
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
                  tmp26Result = closure_6(item(9409).BaseGuildTagChiplet, obj7);
                }
                cResult[13] = tmp7;
                cResult[14] = profile;
                cResult[15] = item;
                cResult[16] = tmp4.tag;
                class G {
                  constructor() {
                    id = undefined;
                    tmp = onSelectGuild;
                    if (item != null) {
                      id = item.id;
                    }
                    if (id == null) {
                      id = null;
                    }
                    tmpResult = tmp(id);
                    obj = closure_1(closure_2[11]);
                    hideActionSheetResult = obj.hideActionSheet();
                    return;
                  }
                }
                cResult[17] = tmp4.tagStyles;
                cResult[18] = tmp26Result;
                tmp24 = tmp26Result;
              }
              let tmp20 = null;
              if (null != item) {
                const obj8 = { style: tmp4.guildIcon, guild: item, size: item(5978).GuildIconSizes.SMALL_32 };
                tmp20 = closure_6(onSelectGuild(5978), obj8);
                const tmp23 = onSelectGuild(5978);
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
          class G {
            constructor() {
              id = undefined;
              tmp = onSelectGuild;
              if (item != null) {
                id = item.id;
              }
              if (id == null) {
                id = null;
              }
              tmpResult = tmp(id);
              obj = closure_1(closure_2[11]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          cResult[5] = id1;
          cResult[6] = onSelectGuild;
          cResult[7] = G;
          tmp15 = G;
          const tmpResult = item(4600);
        }
        let guildTagBadgeUrl = null != item;
        if (guildTagBadgeUrl) {
          let badge1;
          if (profile != null) {
            badge1 = profile.badge;
          }
          guildTagBadgeUrl = item(7847).getGuildTagBadgeUrl(item.id, badge1, GuildTagBadgeSize.SIZE_24);
          const tmpResult2 = item(7847);
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
    : (item) => {
        item = item.item;
        ({ selected, onSelectGuild: importDefault } = item);
        ({ start, end } = item);
        const tmp = closure_8();
        if (item != null) {
          const profile = item.profile;
        }
        let guildTagBadgeUrl = null != item;
        if (guildTagBadgeUrl) {
          let badge;
          if (profile != null) {
            badge = profile.badge;
          }
          guildTagBadgeUrl = item(7847).getGuildTagBadgeUrl(item.id, badge, GuildTagBadgeSize.SIZE_24);
          let obj = item(7847);
        }
        const radioA11yNative = item(4600).useRadioA11yNative({ selected });
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
          const obj4 = { style: tmp.guildIcon, guild: item, size: tmp7(5978).GuildIconSizes.SMALL_32 };
          tmp10Result = closure_6(GuildIconDefault, obj4);
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
          tmp10Result2 = closure_6(tmp7(9409).BaseGuildTagChiplet, obj10);
        }
        const items = [tmp10Result2, closure_6(item(6082).FormRadio, { selected })];
        obj5.children = items;
        obj3.trailing = closure_7(View, obj5);
        return closure_6(item(6000).TableRow, obj3);
      },
);
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onSelectGuild) => {
      const cResult = selectedGuildId(576).c(21);
      ({ availableGuilds, selectedGuildId } = onSelectGuild);
      onSelectGuild = onSelectGuild.onSelectGuild;
      const tmp4 = closure_8();
      dependencyMap = tmp4;
      if (cResult[0] !== availableGuilds) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o(name) {
            return name.name.toLowerCase();
          };
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const items = [null];
        HermesBuiltin.arraySpread(onSelectGuild(12).sortBy(availableGuilds, tmp6), 1);
        cResult[0] = availableGuilds;
        cResult[1] = items;
        const obj2 = onSelectGuild(12);
      } else {
        const data = cResult[1];
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            variant: "heading-lg/bold",
            color: "mobile-text-heading-primary",
            accessibilityRole: "header",
            children: null,
          };
          const intl = selectedGuildId(1126).intl;
          obj3.children = intl.string(selectedGuildId(1126).t.Fo0g9x);
          const tmp14 = closure_6(selectedGuildId(4892).Text, obj3);
          cResult[3] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] !== tmp4.titleContainer) {
          const obj4 = { style: tmp4.titleContainer, children: tmp12 };
          const tmp18 = closure_6(View, obj4);
          cResult[4] = tmp4.titleContainer;
          cResult[5] = tmp18;
        }
        if (cResult[6] !== tmp4.divider) {
          const fn2 = function f() {
            return timestampProducer(Form.FormDivider, { iconPush: true, style: divider.divider });
          };
          cResult[6] = tmp4.divider;
          cResult[7] = fn2;
          let tmp19 = fn2;
        } else {
          tmp19 = cResult[7];
        }
        const _Symbol3 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { padding: 16 };
          class C {
            constructor(arg0) {
              str = "none-guild-type";
              if (null != onSelectGuild) {
                str = onSelectGuild.id;
              }
              return str;
            }
          }
          cResult[8] = obj5;
          cResult[9] = C;
          let tmp20 = obj5;
        } else {
          tmp20 = cResult[8];
          class C {
            constructor(arg0) {
              str = "none-guild-type";
              if (null != onSelectGuild) {
                str = onSelectGuild.id;
              }
              return str;
            }
          }
        }
        if (cResult[10] === data.length) {
          if (cResult[11] === onSelectGuild) {
            if (cResult[12] === selectedGuildId) {
              let tmp22 = cResult[13];
            }
            class C {
              constructor(arg0) {
                str = "none-guild-type";
                if (null != onSelectGuild) {
                  str = onSelectGuild.id;
                }
                return str;
              }
            }
            const obj6 = {
              ItemSeparatorComponent: tmp19,
              data,
              contentContainerStyle: tmp20,
              keyExtractor: C,
              renderItem: tmp22,
            };
            const tmp25 = closure_6(selectedGuildId(8404).BottomSheetFlashList, obj6);
            cResult[14] = data;
            class G {
              constructor(arg0) {
                ({ item, index } = onSelectGuild);
                obj = {
                  start: 0 === index,
                  end: index === closure_3.length - 1,
                  item,
                  selected: null,
                  onSelectGuild: null,
                };
                tmp3 = selectedGuildId;
                tmp = jsx;
                tmp2 = closure_9;
                if (selectedGuildId == null) {
                  tmp3 = null;
                }
                id = undefined;
                if (item != null) {
                  id = item.id;
                }
                if (id == null) {
                  id = null;
                }
                obj.selected = tmp3 === id;
                obj.onSelectGuild = onSelectGuild;
                return tmp(tmp2, obj);
              }
            }
            cResult[16] = tmp22;
            cResult[17] = tmp25;
          }
        }
        class G {
          constructor(arg0) {
            ({ item, index } = onSelectGuild);
            obj = {
              start: 0 === index,
              end: index === closure_3.length - 1,
              item,
              selected: null,
              onSelectGuild: null,
            };
            tmp3 = selectedGuildId;
            tmp = jsx;
            tmp2 = closure_9;
            if (selectedGuildId == null) {
              tmp3 = null;
            }
            id = undefined;
            if (item != null) {
              id = item.id;
            }
            if (id == null) {
              id = null;
            }
            obj.selected = tmp3 === id;
            obj.onSelectGuild = onSelectGuild;
            return tmp(tmp2, obj);
          }
        }
        cResult[10] = data.length;
        cResult[11] = onSelectGuild;
        cResult[12] = selectedGuildId;
        cResult[13] = G;
        tmp22 = G;
      }
      let obj = selectedGuildId(576);
    }
  : (availableGuilds) => {
      availableGuilds = availableGuilds.availableGuilds;
      ({ selectedGuildId: importDefault, onSelectGuild: dependencyMap } = availableGuilds);
      const tmp = closure_8();
      noop = tmp;
      let items = [availableGuilds];
      const memo = noop.useMemo(() => {
        const items = [null];
        HermesBuiltin.arraySpread(
          _modDef12.sortBy(availableGuilds, (name) => name.name.toLowerCase()),
          1,
        );
        return items;
      }, items);
      let obj = { scrollable: true, startExpanded: true, header: null, children: null };
      const obj2 = { style: tmp.titleContainer, children: null };
      const obj3 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        children: null,
      };
      const intl = availableGuilds(1126).intl;
      obj3.children = intl.string(availableGuilds(1126).t.Fo0g9x);
      obj2.children = closure_6(availableGuilds(4892).Text, obj3);
      obj.header = closure_6(memo, obj2);
      obj.children = closure_6(availableGuilds(8404).BottomSheetFlashList, {
        ItemSeparatorComponent() {
          return timestampProducer(Form.FormDivider, { iconPush: true, style: divider.divider });
        },
        data: memo,
        contentContainerStyle: { padding: 16 },
        keyExtractor(id) {
          let str = "none-guild-type";
          if (null != id) {
            str = id.id;
          }
          return str;
        },
        renderItem(arg0) {
          ({ item, index } = arg0);
          const obj = { start: 0 === index, end: index === memo.length - 1, item, selected: null, onSelectGuild: null };
          let tmp3 = importDefault;
          if (importDefault == null) {
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
          return timestampProducer(closure_9, obj);
        },
      });
      return closure_6(availableGuilds(6652).BottomSheet, obj);
    };
