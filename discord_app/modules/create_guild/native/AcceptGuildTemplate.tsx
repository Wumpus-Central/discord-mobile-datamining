// discord_app/modules/create_guild/native/AcceptGuildTemplate.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import GuildRoleRecordUtilsAll from "../../../utils/GuildRoleRecordUtils.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import FormDividerDefault from "../../../design/void/Form/native/FormDivider.tsx";
import _modDef9224 from "../../../../_runtime/metro/09224__.js";
import RolePillDefault from "../../../components_native/common/RolePill.tsx";
import InvalidLink from "../../../design/components/Illustration/native/redesign/generated/InvalidLink.tsx";
import GuildIconUploaderDefault from "../../guild/native/GuildIconUploader.tsx";
import _modDef11427 from "../../../../_runtime/metro/11427__.js";
import _modDef11428 from "../../../../_runtime/metro/11428__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../rebrand/native/TextStyles.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const isGuildVocalChannelType = fn(2055).isGuildVocalChannelType;
const isEveryoneRole = fn(2107).isEveryoneRole;
const Constants = fn(1085);
({ MarketingURLs: closure_8, Fonts, ChannelTypes: closure_9 } = Constants);
const GuildTemplateStates = fn(6839).GuildTemplateStates;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 },
  header: null,
  description: null,
  iconUploader: null,
  hint: null,
  createButtonWrapper: null,
  resolvingContainer: null,
  divider: null,
  sectionHeader: null,
  rolesChannelsWrapper: null,
  channelsWrapper: null,
  rolesWrapper: null,
  channelRow: null,
  channelIcon: null,
  channelCategoryIcon: null,
  channelName: null,
  channelCategoryName: null,
  sectionTip: null,
  protip: null,
};
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.header = { textAlign: "center" };
obj.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj.iconUploader = { alignSelf: "center", marginBottom: 12 };
obj.hint = { marginVertical: 8 };
obj.createButtonWrapper = { marginTop: 8 };
obj.resolvingContainer = { alignItems: "center", flex: 1, justifyContent: "center" };
obj.divider = { marginTop: 8 };
let obj5 = {};
let TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj5.marginTop = 24;
obj.sectionHeader = obj5;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
let obj4 = { textAlign: "center" };
obj.rolesChannelsWrapper = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 8,
  padding: 8,
};
obj.channelsWrapper = { flexDirection: "column", paddingVertical: 0 };
obj.rolesWrapper = { flexDirection: "row", flexWrap: "wrap" };
obj.channelRow = { alignItems: "center", flexDirection: "row", height: 40 };
obj.channelIcon = { marginLeft: 12, marginRight: 8, height: 20, width: 20 };
obj.channelCategoryIcon = { marginLeft: 0, marginRight: 2, height: 12, width: 12 };
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 8,
  padding: 8,
};
obj.channelName = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj.channelCategoryName = {};
obj.sectionTip = { marginTop: 8 };
let obj7 = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let obj8 = {};
obj.protip = {
  color: nativeDefault.unsafe_rawColors.GREEN_360,
  fontFamily: Fonts.PRIMARY_BOLD,
  textTransform: "uppercase",
};
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      const tmp4 = closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = closure_1_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.resolvingContainer) {
        const obj2 = { style: tmp4.resolvingContainer, children: first };
        const tmp11 = closure_1_11(React4, obj2);
        cResult[1] = tmp4.resolvingContainer;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () =>
      closure_1_11(React4, {
        style: closure_14().resolvingContainer,
        children: closure_1_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}),
      });
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { Illustration: InvalidLink.InvalidLink, title: null, body: null };
          const intl = util.intl;
          obj2.title = intl.string(util.t.C7ZRNw);
          const intl2 = util.intl;
          obj2.body = intl2.string(util.t.A6MwXE);
          const tmp6 = closure_1_11(native.EmptyState, obj2);
          cResult[0] = tmp6;
          let first = tmp6;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => {
        const obj = { Illustration: InvalidLink.InvalidLink, title: null, body: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.C7ZRNw);
        const intl2 = util.intl;
        obj.body = intl2.string(util.t.A6MwXE);
        return closure_1_11(native.EmptyState, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildTemplate) => {
      const cResult = guildTemplate(576).c(72);
      guildTemplate = guildTemplate.guildTemplate;
      ({ createServer, name, setName, icon, chooseIcon, errors } = guildTemplate);
      const tmp4 = closure_14();
      const obj = guildTemplate(576);
      const typeConsolidationTextTransform =
        guildTemplate(6476).useTypeConsolidationTextTransform("AcceptGuildTemplate");
      _modDef38(null != guildTemplate, "guild template cannot be null");
      _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] === guildTemplate.serializedSourceGuild.id) {
        if (cResult[1] === guildTemplate.serializedSourceGuild.roles) {
          if (cResult[6] !== bottom) {
            const obj3 = { marginBottom: bottom };
            cResult[6] = bottom;
            cResult[7] = obj3;
            let tmp14 = obj3;
          } else {
            tmp14 = cResult[7];
          }
          if (cResult[8] === tmp4.wrapper) {
            if (cResult[9] === tmp14) {
              let tmp15 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.QzUORX);
              cResult[11] = stringResult;
              let tmp17 = stringResult;
            } else {
              tmp17 = cResult[11];
            }
            if (cResult[12] !== tmp4.header) {
              const obj4 = {
                style: tmp4.header,
                variant: "heading-xl/extrabold",
                color: "mobile-text-heading-primary",
                children: tmp17,
              };
              const tmp21 = closure_11(tmp(4892).Text, obj4);
              cResult[12] = tmp4.header;
              cResult[13] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[13];
            }
            if (cResult[14] === guildTemplate.name) {
              if (cResult[15] === tmp4.description) {
                let tmp22 = cResult[16];
              }
              if (cResult[17] === chooseIcon) {
                if (cResult[18] === icon) {
                  if (cResult[19] === tmp4.iconUploader) {
                    if (cResult[20] === tmp4.wrapper.backgroundColor) {
                      let tmp25 = cResult[21];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = tmp(1126).intl;
                      const stringResult1 = intl2.string(tmp(1126).t.dBih7e);
                      cResult[22] = stringResult1;
                      let tmp28 = stringResult1;
                    } else {
                      tmp28 = cResult[22];
                    }
                    let name1;
                    if (errors != null) {
                      name1 = errors.name;
                    }
                    if (cResult[23] === name) {
                      if (cResult[24] === setName) {
                        if (cResult[25] === name1) {
                          let tmp31 = cResult[26];
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl3 = tmp(1126).intl;
                          const obj5 = { guidelinesURL: constants.GUIDELINES };
                          const formatResult = intl3.format(tmp(1126).t["2bprXx"], obj5);
                          cResult[27] = formatResult;
                          let tmp34 = formatResult;
                        } else {
                          tmp34 = cResult[27];
                        }
                        if (cResult[28] !== tmp4.hint) {
                          const obj6 = {
                            style: tmp4.hint,
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: tmp34,
                          };
                          const tmp39 = closure_11(tmp(4892).Text, obj6);
                          cResult[28] = tmp4.hint;
                          cResult[29] = tmp39;
                          let tmp37 = tmp39;
                        } else {
                          tmp37 = cResult[29];
                        }
                        const _Symbol4 = Symbol;
                        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl4 = tmp(1126).intl;
                          const stringResult2 = intl4.string(tmp(1126).t["O0p/lS"]);
                          cResult[30] = stringResult2;
                          let tmp40 = stringResult2;
                        } else {
                          tmp40 = cResult[30];
                        }
                        if (cResult[31] === createServer) {
                          if (cResult[32] === tmp42) {
                            if (cResult[33] === tmp43) {
                              let tmp44 = cResult[34];
                            }
                            if (cResult[35] === tmp4.createButtonWrapper) {
                              if (cResult[36] === tmp44) {
                                let tmp47 = cResult[37];
                              }
                              if (cResult[38] !== tmp4.divider) {
                                const obj7 = { style: tmp4.divider, outer: true };
                                const tmp53 = closure_11(FormDividerDefault, obj7);
                                cResult[38] = tmp4.divider;
                                cResult[39] = tmp53;
                                let tmp51 = tmp53;
                              } else {
                                tmp51 = cResult[39];
                              }
                              const _Symbol5 = Symbol;
                              if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl5 = tmp(1126).intl;
                                const stringResult3 = intl5.string(tmp(1126).t.OGiMXJ);
                                cResult[40] = stringResult3;
                                let tmp54 = stringResult3;
                              } else {
                                tmp54 = cResult[40];
                              }
                              if (cResult[41] !== tmp4.sectionHeader) {
                                const obj8 = {
                                  style: tmp4.sectionHeader,
                                  variant: "heading-md/extrabold",
                                  color: "mobile-text-heading-primary",
                                  children: tmp54,
                                };
                                const tmp58 = closure_11(tmp(4892).Text, obj8);
                                cResult[41] = tmp4.sectionHeader;
                                cResult[42] = tmp58;
                                let tmp56 = tmp58;
                              } else {
                                tmp56 = cResult[42];
                              }
                              const _Symbol6 = Symbol;
                              if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                                const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
                                const intl6 = tmp(1126).intl;
                                obj9.children = intl6.string(tmp(1126).t.Ztwyoz);
                                const tmp61 = closure_11(tmp(4892).Text, obj9);
                                cResult[43] = tmp61;
                                let tmp59 = tmp61;
                              } else {
                                tmp59 = cResult[43];
                              }
                              if (cResult[44] !== guildTemplate.serializedSourceGuild.channels) {
                                const obj10 = { channels: guildTemplate.serializedSourceGuild.channels };
                                const tmp65 = closure_11(closure_18, obj10);
                                cResult[44] = guildTemplate.serializedSourceGuild.channels;
                                cResult[45] = tmp65;
                                let tmp62 = tmp65;
                              } else {
                                tmp62 = cResult[45];
                              }
                              if (cResult[46] === tmp4.protip) {
                                if (cResult[47] === typeConsolidationTextTransform) {
                                  let tmp67 = cResult[48];
                                }
                                const _Symbol7 = Symbol;
                                if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl7 = tmp(1126).intl;
                                  const stringResult4 = intl7.string(tmp(1126).t["8tvIiN"]);
                                  cResult[49] = stringResult4;
                                  let tmp68 = stringResult4;
                                } else {
                                  tmp68 = cResult[49];
                                }
                                if (cResult[50] !== tmp67) {
                                  const obj11 = { style: tmp67, children: null };
                                  const items = [tmp68, ": "];
                                  obj11.children = items;
                                  const tmp72 = closure_12(tmp(1188).LegacyText, obj11);
                                  cResult[50] = tmp67;
                                  cResult[51] = tmp72;
                                  let tmp70 = tmp72;
                                } else {
                                  tmp70 = cResult[51];
                                }
                                const _Symbol8 = Symbol;
                                if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl8 = tmp(1126).intl;
                                  const stringResult5 = intl8.string(tmp(1126).t.de7DpI);
                                  cResult[52] = stringResult5;
                                  let tmp73 = stringResult5;
                                } else {
                                  tmp73 = cResult[52];
                                }
                                if (cResult[53] === tmp4.sectionTip) {
                                  if (cResult[54] === tmp70) {
                                    let tmp75 = cResult[55];
                                  }
                                  if (cResult[56] === arr) {
                                    if (cResult[57] === tmp4.sectionHeader) {
                                      let tmp78 = cResult[58];
                                    }
                                    if (cResult[59] === tmp31) {
                                      if (cResult[60] === tmp37) {
                                        if (cResult[61] === tmp47) {
                                          if (cResult[62] === tmp51) {
                                            if (cResult[63] === tmp56) {
                                              if (cResult[64] === tmp62) {
                                                if (cResult[65] === tmp15) {
                                                  if (cResult[66] === tmp75) {
                                                    if (cResult[67] === tmp78) {
                                                      if (cResult[68] === tmp19) {
                                                        if (cResult[69] === tmp22) {
                                                          if (cResult[70] === tmp25) {
                                                            let tmp84 = cResult[71];
                                                          }
                                                          return tmp84;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj12 = {
                                      contentContainerStyle: tmp15,
                                      keyboardShouldPersistTaps: "handled",
                                      children: null,
                                    };
                                    const items1 = [
                                      tmp19,
                                      tmp22,
                                      tmp25,
                                      tmp31,
                                      tmp37,
                                      tmp47,
                                      tmp51,
                                      tmp56,
                                      tmp59,
                                      tmp62,
                                      tmp75,
                                      tmp78,
                                    ];
                                    obj12.children = items1;
                                    const tmp87 = closure_12(closure_5, obj12);
                                    cResult[59] = tmp31;
                                    cResult[60] = tmp37;
                                    cResult[61] = tmp47;
                                    cResult[62] = tmp51;
                                    cResult[63] = tmp56;
                                    cResult[64] = tmp62;
                                    cResult[65] = tmp15;
                                    cResult[66] = tmp75;
                                    cResult[67] = tmp78;
                                    cResult[68] = tmp19;
                                    cResult[69] = tmp22;
                                    cResult[70] = tmp25;
                                    cResult[71] = tmp87;
                                    tmp84 = tmp87;
                                  }
                                  let tmp79 = null;
                                  if (arr.length > 0) {
                                    const obj13 = { children: null };
                                    const obj14 = {
                                      style: tmp4.sectionHeader,
                                      variant: "heading-md/extrabold",
                                      color: "mobile-text-heading-primary",
                                      children: null,
                                    };
                                    const intl9 = tmp(1126).intl;
                                    obj14.children = intl9.string(tmp(1126).t.mQ0H1p);
                                    const items2 = [closure_11(tmp(4892).Text, obj14), ,];
                                    const obj15 = { variant: "text-xs/medium", color: "text-default", children: null };
                                    const intl10 = tmp(1126).intl;
                                    obj15.children = intl10.string(tmp(1126).t.jOPEYC);
                                    items2[1] = closure_11(tmp(4892).Text, obj15);
                                    const obj16 = { roles: arr };
                                    items2[2] = closure_11(closure_19, obj16);
                                    obj13.children = items2;
                                    tmp79 = closure_12(closure_13, obj13);
                                  }
                                  cResult[56] = arr;
                                  cResult[57] = tmp4.sectionHeader;
                                  cResult[58] = tmp79;
                                  tmp78 = tmp79;
                                }
                                const obj17 = {
                                  style: tmp66,
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: null,
                                };
                                const items3 = [tmp70, tmp73];
                                obj17.children = items3;
                                const tmp77 = closure_12(tmp(4892).Text, obj17);
                                cResult[53] = tmp4.sectionTip;
                                cResult[54] = tmp70;
                                cResult[55] = tmp77;
                                tmp75 = tmp77;
                              }
                              const items4 = [tmp4.protip, typeConsolidationTextTransform];
                              cResult[46] = tmp4.protip;
                              cResult[47] = typeConsolidationTextTransform;
                              cResult[48] = items4;
                              tmp67 = items4;
                            }
                            const obj18 = { style: tmp4.createButtonWrapper, children: tmp44 };
                            const tmp50 = closure_11(closure_4, obj18);
                            cResult[35] = tmp4.createButtonWrapper;
                            cResult[36] = tmp44;
                            cResult[37] = tmp50;
                            tmp47 = tmp50;
                          }
                        }
                        const obj19 = {
                          size: "md",
                          text: tmp40,
                          onPress: createServer,
                          loading: guildTemplate.state === GuildTemplateStates.ACCEPTING,
                          disabled: guildTemplate.state === GuildTemplateStates.ACCEPTING,
                          grow: true,
                        };
                        const tmp46 = closure_11(tmp(5601).Button, obj19);
                        cResult[31] = createServer;
                        cResult[32] = guildTemplate.state === GuildTemplateStates.ACCEPTING;
                        cResult[33] = guildTemplate.state === GuildTemplateStates.ACCEPTING;
                        cResult[34] = tmp46;
                        tmp44 = tmp46;
                      }
                    }
                    const obj20 = {
                      label: tmp28,
                      errorMessage: name1,
                      value: name,
                      onChange: setName,
                      autoFocus: true,
                      autoCorrect: false,
                      returnKeyType: "done",
                      clearable: true,
                    };
                    const tmp33 = closure_11(tmp(6105).TextInput, obj20);
                    cResult[23] = name;
                    cResult[24] = setName;
                    cResult[25] = name1;
                    cResult[26] = tmp33;
                    tmp31 = tmp33;
                  }
                }
              }
              const obj21 = {
                iconBackgroundColor: tmp4.wrapper.backgroundColor,
                style: tmp4.iconUploader,
                onPress: chooseIcon,
                icon,
              };
              const tmp27 = closure_11(GuildIconUploaderDefault, obj21);
              cResult[17] = chooseIcon;
              cResult[18] = icon;
              cResult[19] = tmp4.iconUploader;
              cResult[20] = tmp4.wrapper.backgroundColor;
              cResult[21] = tmp27;
              tmp25 = tmp27;
            }
            const obj22 = {
              style: tmp4.description,
              variant: "text-lg/medium",
              color: "text-default",
              children: guildTemplate.name,
            };
            const tmp24 = closure_11(tmp(4892).Text, obj22);
            cResult[14] = guildTemplate.name;
            cResult[15] = tmp4.description;
            cResult[16] = tmp24;
            tmp22 = tmp24;
          }
          const items5 = [tmp4.wrapper, tmp14];
          cResult[8] = tmp4.wrapper;
          cResult[9] = tmp14;
          cResult[10] = items5;
          tmp15 = items5;
        }
      }
      if (cResult[3] !== guildTemplate.serializedSourceGuild.id) {
        class A {
          constructor(arg0) {
            obj = closure_2(closure_3[19]);
            return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
          }
        }
        cResult[3] = guildTemplate.serializedSourceGuild.id;
        cResult[4] = A;
      } else {
        class A {
          constructor(arg0) {
            obj = closure_2(closure_3[19]);
            return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            obj = closure_2(closure_3[19]);
            return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
          }
        }
        cResult[5] = tmp12;
      } else {
        class A {
          constructor(arg0) {
            obj = closure_2(closure_3[19]);
            return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
          }
        }
      }
      const roles = guildTemplate.serializedSourceGuild.roles;
      const mapped = roles.map(A);
      const found = mapped.filter(tmp12);
      cResult[0] = guildTemplate.serializedSourceGuild.id;
      cResult[1] = guildTemplate.serializedSourceGuild.roles;
      cResult[2] = found;
      const obj2 = guildTemplate(6476);
    }
  : (guildTemplate) => {
      guildTemplate = guildTemplate.guildTemplate;
      const errors = guildTemplate.errors;
      ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
      const tmp = closure_14();
      const typeConsolidationTextTransform =
        guildTemplate(6476).useTypeConsolidationTextTransform("AcceptGuildTemplate");
      _modDef38(null != guildTemplate, "guild template cannot be null");
      _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
      const roles = guildTemplate.serializedSourceGuild.roles;
      const mapped = roles.map((item) =>
        GuildRoleRecordUtilsAll.fromServer(guildTemplate.serializedSourceGuild.id, item),
      );
      const found = mapped.filter((item) => !isEveryoneRole(item));
      const obj2 = { contentContainerStyle: null, keyboardShouldPersistTaps: "handled", children: null };
      const items = [tmp.wrapper, { marginBottom: useSafeAreaInsetsDefault().bottom }];
      obj2.contentContainerStyle = items;
      const obj3 = {
        style: tmp.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = guildTemplate(1126).intl;
      obj3.children = intl.string(guildTemplate(1126).t.QzUORX);
      const items1 = [
        closure_11(guildTemplate(4892).Text, obj3),
        closure_11(guildTemplate(4892).Text, {
          style: tmp.description,
          variant: "text-lg/medium",
          color: "text-default",
          children: guildTemplate.name,
        }),
        closure_11(GuildIconUploaderDefault, {
          iconBackgroundColor: tmp.wrapper.backgroundColor,
          style: tmp.iconUploader,
          onPress: chooseIcon,
          icon,
        }),
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
      ];
      const obj6 = {
        label: null,
        errorMessage: null,
        value: null,
        onChange: null,
        autoFocus: true,
        autoCorrect: false,
        returnKeyType: "done",
        clearable: true,
      };
      const intl2 = guildTemplate(1126).intl;
      obj6.label = intl2.string(guildTemplate(1126).t.dBih7e);
      let name1;
      if (errors != null) {
        name1 = errors.name;
      }
      obj6.errorMessage = name1;
      obj6.value = name;
      obj6.onChange = setName;
      items1[3] = closure_11(guildTemplate(6105).TextInput, obj6);
      const obj7 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp2(1126).intl;
      obj7.children = intl3.format(guildTemplate(1126).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
      items1[4] = closure_11(guildTemplate(4892).Text, obj7);
      const obj9 = { style: tmp.createButtonWrapper, children: null };
      const obj10 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
      const intl4 = tmp2(1126).intl;
      obj10.text = intl4.string(guildTemplate(1126).t["O0p/lS"]);
      obj10.onPress = createServer;
      obj10.loading = guildTemplate.state === GuildTemplateStates.ACCEPTING;
      obj10.disabled = guildTemplate.state === GuildTemplateStates.ACCEPTING;
      obj9.children = closure_11(guildTemplate(5601).Button, obj10);
      items1[5] = closure_11(closure_4, obj9);
      items1[6] = closure_11(FormDividerDefault, { style: tmp.divider, outer: true });
      const obj12 = {
        style: tmp.sectionHeader,
        variant: "heading-md/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl5 = tmp2(1126).intl;
      obj12.children = intl5.string(guildTemplate(1126).t.OGiMXJ);
      items1[7] = closure_11(guildTemplate(4892).Text, obj12);
      const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
      const intl6 = tmp2(1126).intl;
      obj13.children = intl6.string(guildTemplate(1126).t.Ztwyoz);
      items1[8] = closure_11(guildTemplate(4892).Text, obj13);
      items1[9] = closure_11(closure_18, { channels: guildTemplate.serializedSourceGuild.channels });
      const obj15 = {
        style: tmp.sectionTip,
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: null,
      };
      const obj16 = { style: null, children: null };
      const items2 = [tmp.protip, typeConsolidationTextTransform];
      obj16.style = items2;
      const intl7 = tmp2(1126).intl;
      const items3 = [intl7.string(guildTemplate(1126).t["8tvIiN"]), ": "];
      obj16.children = items3;
      const items4 = [closure_12(guildTemplate(1188).LegacyText, obj16)];
      const intl8 = tmp2(1126).intl;
      items4[1] = intl8.string(guildTemplate(1126).t.de7DpI);
      obj15.children = items4;
      items1[10] = closure_12(guildTemplate(4892).Text, obj15);
      let tmp9Result = null;
      if (found.length > 0) {
        const obj17 = { children: null };
        const obj18 = {
          style: tmp.sectionHeader,
          variant: "heading-md/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl9 = tmp2(1126).intl;
        obj18.children = intl9.string(tmp2(1126).t.mQ0H1p);
        const items5 = [closure_11(tmp2(4892).Text, obj18), ,];
        const obj19 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl10 = tmp2(1126).intl;
        obj19.children = intl10.string(tmp2(1126).t.jOPEYC);
        items5[1] = closure_11(tmp2(4892).Text, obj19);
        const obj20 = { roles: found };
        items5[2] = closure_11(closure_19, obj20);
        obj17.children = items5;
        tmp9Result = closure_12(closure_13, obj17);
      }
      items1[11] = tmp9Result;
      obj2.children = items1;
      return closure_12(closure_5, obj2);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channels) => {
      let valueResult = dependencyMap;
      const cResult = require("c").c(20);
      channelRow = channels.channels;
      const tmp3 = closure_14();
      _require = tmp3;
      if (cResult[0] === channelRow) {
        if (cResult[1] === tmp3.channelCategoryIcon) {
          if (cResult[2] === tmp3.channelCategoryName) {
            if (cResult[3] === tmp3.channelIcon) {
              if (cResult[4] === tmp3.channelName) {
                if (cResult[5] === tmp3.channelRow) {
                  if (cResult[14] === tmp3.channelsWrapper) {
                    if (cResult[15] === tmp3.rolesChannelsWrapper) {
                      let tmp9 = cResult[16];
                    }
                    if (cResult[17] === tmp4) {
                      if (cResult[18] === tmp9) {
                        let tmp10 = cResult[19];
                      }
                      return tmp10;
                    }
                    const obj3 = { style: tmp9, children: tmp4 };
                    const tmp13 = closure_11(closure_4, obj3);
                    cResult[17] = tmp4;
                    cResult[18] = tmp9;
                    cResult[19] = tmp13;
                    tmp10 = tmp13;
                  }
                  let items = [,];
                  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp3);
                  cResult[14] = tmp3.channelsWrapper;
                  cResult[15] = tmp3.rolesChannelsWrapper;
                  cResult[16] = items;
                  tmp9 = items;
                }
              }
            }
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(parent_id) {
          if (null == parent_id.parent_id) {
            const _Number2 = Number;
            let result = 10000 * Number(parent_id.id);
          } else {
            const _Number = Number;
            result = 10000 * Number(parent_id.parent_id) + parent_id.id;
          }
          return result;
        };
        cResult[7] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[7];
      }
      if (cResult[8] === tmp3.channelCategoryIcon) {
        if (cResult[9] === tmp3.channelCategoryName) {
          if (cResult[10] === tmp3.channelIcon) {
            if (cResult[11] === tmp3.channelName) {
              if (cResult[12] === tmp3.channelRow) {
                let tmp6 = cResult[13];
              }
              let obj2 = _modDef12(channelRow);
              const sortByResult = _modDef12(channelRow).sortBy(tmp5);
              valueResult = _modDef12(channelRow).sortBy(tmp5).map(tmp6).value();
              cResult[0] = channelRow;
              cResult[1] = tmp3.channelCategoryIcon;
              cResult[2] = tmp3.channelCategoryName;
              cResult[3] = tmp3.channelIcon;
              ({ channelName: tmp2[4], channelRow } = tmp3);
              cResult[5] = channelRow;
              cResult[6] = valueResult;
              const iter = _modDef12(channelRow).sortBy(tmp5).map(tmp6);
            }
          }
        }
      }
      const fn2 = function c(children) {
        const obj = { style: closure_0.channelRow, children: null };
        const items = [closure_0.channelIcon];
        let channelCategoryIcon = null;
        if (children.type === constants2.GUILD_CATEGORY) {
          channelCategoryIcon = closure_0.channelCategoryIcon;
        }
        const obj2 = {
          style: items,
          color: nativeDefault.unsafe_rawColors.PRIMARY_400,
          size: native.Icon.Sizes.CUSTOM,
          source: null,
        };
        items[1] = channelCategoryIcon;
        const type = children.type;
        if (isGuildVocalChannelType(type)) {
          let tmp10Result = _modDef9224;
        } else if (type === constants2.GUILD_CATEGORY) {
          tmp10Result = _modDef11427;
        } else {
          tmp10Result = _modDef11428;
        }
        obj2.source = tmp10Result;
        const items1 = [closure_2_11(native.Icon, obj2)];
        const items2 = [closure_0.channelName];
        let channelCategoryName = null;
        if (children.type === constants2.GUILD_CATEGORY) {
          channelCategoryName = closure_0.channelCategoryName;
        }
        items2[1] = channelCategoryName;
        items1[1] = closure_2_11(native.LegacyText, { numberOfLines: 1, style: items2, children: children.name });
        obj.children = items1;
        return __initData(React4, obj, children.id);
      };
      cResult[8] = tmp3.channelCategoryIcon;
      cResult[9] = tmp3.channelCategoryName;
      cResult[10] = tmp3.channelIcon;
      cResult[11] = tmp3.channelName;
      cResult[12] = tmp3.channelRow;
      cResult[13] = fn2;
      tmp6 = fn2;
      let obj = require("c");
    }
  : (channels) => {
      const tmp = closure_14();
      closure_0 = tmp;
      let obj = _modDef12(channels.channels);
      const sortByResult = _modDef12(channels.channels).sortBy((parent_id) => {
        if (null == parent_id.parent_id) {
          const _Number2 = Number;
          let result = 10000 * Number(parent_id.id);
        } else {
          const _Number = Number;
          result = 10000 * Number(parent_id.parent_id) + parent_id.id;
        }
        return result;
      });
      let obj2 = {
        style: null,
        children: _modDef12(channels.channels)
          .sortBy((parent_id) => {
            if (null == parent_id.parent_id) {
              const _Number2 = Number;
              let result = 10000 * Number(parent_id.id);
            } else {
              const _Number = Number;
              result = 10000 * Number(parent_id.parent_id) + parent_id.id;
            }
            return result;
          })
          .map((children) => {
            const obj = { style: closure_0.channelRow, children: null };
            const items = [closure_0.channelIcon];
            let channelCategoryIcon = null;
            if (children.type === constants2.GUILD_CATEGORY) {
              channelCategoryIcon = closure_0.channelCategoryIcon;
            }
            const obj2 = {
              style: items,
              color: nativeDefault.unsafe_rawColors.PRIMARY_400,
              size: native.Icon.Sizes.CUSTOM,
              source: null,
            };
            items[1] = channelCategoryIcon;
            const type = children.type;
            if (isGuildVocalChannelType(type)) {
              let tmp10Result = _modDef9224;
            } else if (type === constants2.GUILD_CATEGORY) {
              tmp10Result = _modDef11427;
            } else {
              tmp10Result = _modDef11428;
            }
            obj2.source = tmp10Result;
            const items1 = [closure_2_11(native.Icon, obj2)];
            const items2 = [closure_0.channelName];
            let channelCategoryName = null;
            if (children.type === constants2.GUILD_CATEGORY) {
              channelCategoryName = closure_0.channelCategoryName;
            }
            items2[1] = channelCategoryName;
            items1[1] = closure_2_11(native.LegacyText, { numberOfLines: 1, style: items2, children: children.name });
            obj.children = items1;
            return __initData(React4, obj, children.id);
          })
          .value(),
      };
      let items = [,];
      ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
      obj2.style = items;
      return closure_11(closure_4, obj2);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (roles) => {
      const cResult = c.c(9);
      roles = roles.roles;
      const tmp2 = closure_14();
      if (cResult[0] !== roles) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o(role) {
            const obj = { disableInteraction: true, role, color: null };
            let int2hexResult;
            if (0 !== role.color) {
              int2hexResult = require("utils/ColorUtils").int2hex(role.color);
              const obj2 = require("utils/ColorUtils");
            }
            obj.color = int2hexResult;
            return closure_1_11(RolePillDefault, obj, role.id);
          };
          cResult[2] = fn;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[2];
        }
        const substr = roles.slice();
        const reversed = substr.reverse();
        const mapped = reversed.map(tmp5);
        cResult[0] = roles;
        cResult[1] = mapped;
      } else {
        if (cResult[3] === tmp2.rolesChannelsWrapper) {
          if (cResult[4] === tmp2.rolesWrapper) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === tmp3) {
            if (cResult[7] === tmp8) {
              let tmp9 = cResult[8];
            }
            return tmp9;
          }
          let obj2 = { style: tmp8, children: tmp3 };
          const tmp12 = closure_1_11(React4, obj2);
          cResult[6] = tmp3;
          cResult[7] = tmp8;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
        const items = [,];
        ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = tmp2);
        cResult[3] = tmp2.rolesChannelsWrapper;
        cResult[4] = tmp2.rolesWrapper;
        cResult[5] = items;
        tmp8 = items;
      }
    }
  : (roles) => {
      roles = roles.roles;
      const substr = roles.slice();
      const reversed = substr.reverse();
      let obj = {
        style: null,
        children: reversed.map((role) => {
          const obj = { disableInteraction: true, role, color: null };
          let int2hexResult;
          if (0 !== role.color) {
            int2hexResult = require("utils/ColorUtils").int2hex(role.color);
            const obj2 = require("utils/ColorUtils");
          }
          obj.color = int2hexResult;
          return closure_1_11(RolePillDefault, obj, role.id);
        }),
      };
      const items = [,];
      ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = closure_14());
      obj.style = items;
      return closure_1_11(React4, obj);
    };
ReactCompilerGating = fn(558);
let obj9 = {
  color: nativeDefault.unsafe_rawColors.GREEN_360,
  fontFamily: Fonts.PRIMARY_BOLD,
  textTransform: "uppercase",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildTemplate) => {
      const cResult = c.c(7);
      guildTemplate = guildTemplate.guildTemplate;
      if (null != guildTemplate) {
        state = guildTemplate.state;
        if (GuildTemplateStates.RESOLVED !== state) {
          if (GuildTemplateStates.ACCEPTING !== state) {
            if (GuildTemplateStates.ACCEPTED !== state) {
              if (GuildTemplateStates.RESOLVING === state) {
                if (cResult[2] !== guildTemplate) {
                  const obj2 = {};
                  const merged = Object.assign(guildTemplate);
                  const tmp21 = closure_1_11(closure_15, obj2);
                  cResult[2] = guildTemplate;
                  cResult[3] = tmp21;
                  let tmp15 = tmp21;
                } else {
                  tmp15 = cResult[3];
                }
                return tmp15;
              } else if (GuildTemplateStates.EXPIRED === state) {
                const _Symbol = Symbol;
                if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp14 = closure_1_11(closure_16, {});
                  cResult[4] = tmp14;
                  let tmp11 = tmp14;
                } else {
                  tmp11 = cResult[4];
                }
                return tmp11;
              }
            }
          }
        }
        if (cResult[0] !== guildTemplate) {
          const obj3 = {};
          const merged1 = Object.assign(guildTemplate);
          const tmp28 = closure_1_11(closure_17, obj3);
          cResult[0] = guildTemplate;
          cResult[1] = tmp28;
          let tmp22 = tmp28;
        } else {
          tmp22 = cResult[1];
        }
        return tmp22;
      }
      if (cResult[5] !== guildTemplate) {
        const obj4 = {};
        const merged2 = Object.assign(guildTemplate);
        const tmp9 = closure_1_11(closure_15, obj4);
        cResult[5] = guildTemplate;
        cResult[6] = tmp9;
        let tmp3 = tmp9;
      } else {
        tmp3 = cResult[6];
      }
      return tmp3;
    }
  : (guildTemplate) => {
      guildTemplate = guildTemplate.guildTemplate;
      if (null != guildTemplate) {
        state = guildTemplate.state;
        if (GuildTemplateStates.RESOLVED !== state) {
          if (GuildTemplateStates.ACCEPTING !== state) {
            if (GuildTemplateStates.ACCEPTED !== state) {
              if (GuildTemplateStates.RESOLVING === state) {
                const obj2 = {};
                const merged = Object.assign(guildTemplate);
                return closure_1_11(closure_15, obj2);
              } else if (GuildTemplateStates.EXPIRED === state) {
                return closure_1_11(closure_16, {});
              }
            }
          }
        }
        const obj3 = {};
        const merged1 = Object.assign(guildTemplate);
        return closure_1_11(closure_17, obj3);
      }
      const merged2 = Object.assign(guildTemplate);
      return closure_1_11(closure_15, {});
    };
