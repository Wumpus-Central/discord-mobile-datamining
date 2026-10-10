// discord_app/modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildPickerDefault from "components/GuildPicker.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
const timestampProducer = createStyles.createStyles({ content: { paddingHorizontal: 16 } });
const ReactCompilerGating = fn(558);
if (ReactCompilerGating.isReactCompilerEnabled()) {
  class GuildSettingsPickerBottomSheet {
    constructor(arg0) {
      tmp = feature;
      tmp2 = subsection;
      obj = feature(subsection[5]);
      cResult = obj.c(33);
      feature = global.feature;
      section = global.section;
      subsection = global.subsection;
      guildId = global.guildId;
      tmp4 = closure_6();
      obj2 = feature(subsection[6]);
      guildSettingsPickerFeature = obj2.useGuildSettingsPickerFeature(feature);
      ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
      if (cResult[0] === feature) {
        if (cResult[1] === section) {
          if (cResult[2] === subsection) {
            tmp6 = cResult[3];
          }
          if (cResult[4] === guildId) {
            if (cResult[5] === section) {
              if (cResult[6] === subsection) {
                tmp7 = cResult[7];
              }
              if (cResult[8] !== title) {
                tmp9 = jsx;
                obj1 = { title: null };
                obj1.title = title;
                tmp10 = jsx(tmp(tmp2[10]).BottomSheetTitleHeader, obj1);
                num5 = 8;
                cResult[8] = title;
                num6 = 9;
                cResult[9] = tmp10;
                tmp8 = tmp10;
              } else {
                tmp8 = cResult[9];
              }
              if (cResult[10] !== description) {
                tmp12 = jsx;
                obj10 = { variant: "text-md/medium", children: null };
                obj10.children = description;
                tmp13 = jsx(tmp(tmp2[11]).Text, obj10);
                num7 = 10;
                cResult[10] = description;
                num8 = 11;
                cResult[11] = tmp13;
                tmp11 = tmp13;
              } else {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp4.content) {
                if (cResult[13] === tmp11) {
                  tmp14 = cResult[14];
                }
                tmp18 = globalThis;
                _Symbol = Symbol;
                str = "react.memo_cache_sentinel";
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  tmp20 = jsx;
                  tmp21 = jsx(tmp(tmp2[12]).Spacer, { size: 16 });
                  num12 = 15;
                  cResult[15] = tmp21;
                  tmp19 = tmp21;
                } else {
                  tmp19 = cResult[15];
                }
                if (cResult[16] === guildId) {
                  if (cResult[17] === tmp6) {
                    if (cResult[18] === isGuildSupported) {
                      tmp22 = cResult[19];
                    }
                    _Symbol2 = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      tmp27 = jsx;
                      tmp28 = jsx(tmp(tmp2[12]).Spacer, { size: 16 });
                      num17 = 20;
                      cResult[20] = tmp28;
                      tmp26 = tmp28;
                    } else {
                      tmp26 = cResult[20];
                    }
                    tmp29 = null;
                    tmp30 = null == guildId;
                    if (cResult[21] === tmp7) {
                      if (cResult[22] === selectGuildCta) {
                        if (cResult[23] === tmp30) {
                          tmp31 = cResult[24];
                        }
                        if (cResult[25] === tmp4.content) {
                          if (cResult[26] === tmp31) {
                            tmp34 = cResult[27];
                          }
                          if (cResult[28] === tmp34) {
                            if (cResult[29] === tmp8) {
                              if (cResult[30] === tmp14) {
                                if (cResult[31] === tmp22) {
                                  tmp38 = cResult[32];
                                }
                                return tmp38;
                              }
                            }
                          }
                          tmp39 = jsxs;
                          obj11 = { startExpanded: true, children: null };
                          items = [, , , , ,];
                          items[0] = tmp8;
                          items[1] = tmp14;
                          items[2] = tmp19;
                          items[3] = tmp22;
                          items[4] = tmp26;
                          items[5] = tmp34;
                          obj11.children = items;
                          tmp40 = jsxs(tmp(tmp2[15]).BottomSheet, obj11);
                          num25 = 28;
                          cResult[28] = tmp34;
                          num26 = 29;
                          cResult[29] = tmp8;
                          num27 = 30;
                          cResult[30] = tmp14;
                          num28 = 31;
                          cResult[31] = tmp22;
                          num29 = 32;
                          cResult[32] = tmp40;
                          tmp38 = tmp40;
                        }
                        tmp35 = jsx;
                        tmp36 = guildId;
                        obj12 = { style: null, children: null };
                        obj12.style = tmp4.content;
                        obj12.children = tmp31;
                        tmp37 = jsx(guildId, obj12);
                        num22 = 25;
                        cResult[25] = tmp4.content;
                        num23 = 26;
                        cResult[26] = tmp31;
                        num24 = 27;
                        cResult[27] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                    tmp32 = jsx;
                    obj13 = { grow: true, text: null, disabled: null, onPress: null };
                    obj13.text = selectGuildCta;
                    obj13.disabled = tmp30;
                    obj13.onPress = tmp7;
                    tmp33 = jsx(tmp(tmp2[14]).Button, obj13);
                    num18 = 21;
                    cResult[21] = tmp7;
                    num19 = 22;
                    cResult[22] = selectGuildCta;
                    num20 = 23;
                    cResult[23] = tmp30;
                    num21 = 24;
                    cResult[24] = tmp33;
                    tmp31 = tmp33;
                  }
                }
                tmp23 = jsx;
                tmp24 = section;
                obj14 = { guildId: null, onChange: null, isGuildIncluded: null };
                obj14.guildId = guildId;
                obj14.onChange = tmp6;
                obj14.isGuildIncluded = isGuildSupported;
                tmp25 = jsx(section(tmp2[13]), obj14);
                num13 = 16;
                cResult[16] = guildId;
                num14 = 17;
                cResult[17] = tmp6;
                num15 = 18;
                cResult[18] = isGuildSupported;
                num16 = 19;
                cResult[19] = tmp25;
                tmp22 = tmp25;
              }
              tmp15 = jsx;
              tmp16 = guildId;
              obj15 = { style: null, children: null };
              obj15.style = tmp4.content;
              obj15.children = tmp11;
              tmp17 = jsx(guildId, obj15);
              num9 = 12;
              cResult[12] = tmp4.content;
              num10 = 13;
              cResult[13] = tmp11;
              num11 = 14;
              cResult[14] = tmp17;
              tmp14 = tmp17;
            }
          }
          handleOpenSelected = function handleOpenSelected() {
            _modDef38(null != guildId, "Guild ID must not be null on click");
            GuildSettingsActionCreatorsDefault.open(guildId, section, undefined, subsection);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          };
          num = 4;
          cResult[4] = guildId;
          num2 = 5;
          cResult[5] = section;
          num3 = 6;
          cResult[6] = subsection;
          num4 = 7;
          cResult[7] = handleOpenSelected;
          tmp7 = handleOpenSelected;
        }
      }
      handleGuildSelected = function handleGuildSelected(guildId) {
        ActionSheetActionCreatorsDefault.openLazy(
          () => Promise.resolve(closure_1_7),
          "GuildSettingsPickerBottomSheet",
          { feature, section, subsection, guildId },
        );
      };
      cResult[0] = feature;
      cResult[1] = section;
      cResult[2] = subsection;
      cResult[3] = handleGuildSelected;
      tmp6 = handleGuildSelected;
      return;
    }
  }
} else {
  class GuildSettingsPickerBottomSheet {
    constructor(arg0) {
      tmp = feature;
      tmp2 = subsection;
      obj = feature(subsection[5]);
      cResult = obj.c(33);
      feature = global.feature;
      section = global.section;
      subsection = global.subsection;
      guildId = global.guildId;
      tmp4 = closure_6();
      obj2 = feature(subsection[6]);
      guildSettingsPickerFeature = obj2.useGuildSettingsPickerFeature(feature);
      ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
      if (cResult[0] === feature) {
        if (cResult[1] === section) {
          if (cResult[2] === subsection) {
            tmp6 = cResult[3];
          }
          if (cResult[4] === guildId) {
            if (cResult[5] === section) {
              if (cResult[6] === subsection) {
                tmp7 = cResult[7];
              }
              if (cResult[8] !== title) {
                tmp9 = jsx;
                obj1 = { title: null };
                obj1.title = title;
                tmp10 = jsx(tmp(tmp2[10]).BottomSheetTitleHeader, obj1);
                num5 = 8;
                cResult[8] = title;
                num6 = 9;
                cResult[9] = tmp10;
                tmp8 = tmp10;
              } else {
                tmp8 = cResult[9];
              }
              if (cResult[10] !== description) {
                tmp12 = jsx;
                obj10 = { variant: "text-md/medium", children: null };
                obj10.children = description;
                tmp13 = jsx(tmp(tmp2[11]).Text, obj10);
                num7 = 10;
                cResult[10] = description;
                num8 = 11;
                cResult[11] = tmp13;
                tmp11 = tmp13;
              } else {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp4.content) {
                if (cResult[13] === tmp11) {
                  tmp14 = cResult[14];
                }
                tmp18 = globalThis;
                _Symbol = Symbol;
                str = "react.memo_cache_sentinel";
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  tmp20 = jsx;
                  tmp21 = jsx(tmp(tmp2[12]).Spacer, { size: 16 });
                  num12 = 15;
                  cResult[15] = tmp21;
                  tmp19 = tmp21;
                } else {
                  tmp19 = cResult[15];
                }
                if (cResult[16] === guildId) {
                  if (cResult[17] === tmp6) {
                    if (cResult[18] === isGuildSupported) {
                      tmp22 = cResult[19];
                    }
                    _Symbol2 = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      tmp27 = jsx;
                      tmp28 = jsx(tmp(tmp2[12]).Spacer, { size: 16 });
                      num17 = 20;
                      cResult[20] = tmp28;
                      tmp26 = tmp28;
                    } else {
                      tmp26 = cResult[20];
                    }
                    tmp29 = null;
                    tmp30 = null == guildId;
                    if (cResult[21] === tmp7) {
                      if (cResult[22] === selectGuildCta) {
                        if (cResult[23] === tmp30) {
                          tmp31 = cResult[24];
                        }
                        if (cResult[25] === tmp4.content) {
                          if (cResult[26] === tmp31) {
                            tmp34 = cResult[27];
                          }
                          if (cResult[28] === tmp34) {
                            if (cResult[29] === tmp8) {
                              if (cResult[30] === tmp14) {
                                if (cResult[31] === tmp22) {
                                  tmp38 = cResult[32];
                                }
                                return tmp38;
                              }
                            }
                          }
                          tmp39 = jsxs;
                          obj11 = { startExpanded: true, children: null };
                          items = [, , , , ,];
                          items[0] = tmp8;
                          items[1] = tmp14;
                          items[2] = tmp19;
                          items[3] = tmp22;
                          items[4] = tmp26;
                          items[5] = tmp34;
                          obj11.children = items;
                          tmp40 = jsxs(tmp(tmp2[15]).BottomSheet, obj11);
                          num25 = 28;
                          cResult[28] = tmp34;
                          num26 = 29;
                          cResult[29] = tmp8;
                          num27 = 30;
                          cResult[30] = tmp14;
                          num28 = 31;
                          cResult[31] = tmp22;
                          num29 = 32;
                          cResult[32] = tmp40;
                          tmp38 = tmp40;
                        }
                        tmp35 = jsx;
                        tmp36 = guildId;
                        obj12 = { style: null, children: null };
                        obj12.style = tmp4.content;
                        obj12.children = tmp31;
                        tmp37 = jsx(guildId, obj12);
                        num22 = 25;
                        cResult[25] = tmp4.content;
                        num23 = 26;
                        cResult[26] = tmp31;
                        num24 = 27;
                        cResult[27] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                    tmp32 = jsx;
                    obj13 = { grow: true, text: null, disabled: null, onPress: null };
                    obj13.text = selectGuildCta;
                    obj13.disabled = tmp30;
                    obj13.onPress = tmp7;
                    tmp33 = jsx(tmp(tmp2[14]).Button, obj13);
                    num18 = 21;
                    cResult[21] = tmp7;
                    num19 = 22;
                    cResult[22] = selectGuildCta;
                    num20 = 23;
                    cResult[23] = tmp30;
                    num21 = 24;
                    cResult[24] = tmp33;
                    tmp31 = tmp33;
                  }
                }
                tmp23 = jsx;
                tmp24 = section;
                obj14 = { guildId: null, onChange: null, isGuildIncluded: null };
                obj14.guildId = guildId;
                obj14.onChange = tmp6;
                obj14.isGuildIncluded = isGuildSupported;
                tmp25 = jsx(section(tmp2[13]), obj14);
                num13 = 16;
                cResult[16] = guildId;
                num14 = 17;
                cResult[17] = tmp6;
                num15 = 18;
                cResult[18] = isGuildSupported;
                num16 = 19;
                cResult[19] = tmp25;
                tmp22 = tmp25;
              }
              tmp15 = jsx;
              tmp16 = guildId;
              obj15 = { style: null, children: null };
              obj15.style = tmp4.content;
              obj15.children = tmp11;
              tmp17 = jsx(guildId, obj15);
              num9 = 12;
              cResult[12] = tmp4.content;
              num10 = 13;
              cResult[13] = tmp11;
              num11 = 14;
              cResult[14] = tmp17;
              tmp14 = tmp17;
            }
          }
          handleOpenSelected = function handleOpenSelected() {
            _modDef38(null != guildId, "Guild ID must not be null on click");
            GuildSettingsActionCreatorsDefault.open(guildId, section, undefined, subsection);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          };
          num = 4;
          cResult[4] = guildId;
          num2 = 5;
          cResult[5] = section;
          num3 = 6;
          cResult[6] = subsection;
          num4 = 7;
          cResult[7] = handleOpenSelected;
          tmp7 = handleOpenSelected;
        }
      }
      handleGuildSelected = function handleGuildSelected(guildId) {
        ActionSheetActionCreatorsDefault.openLazy(
          () => Promise.resolve(closure_1_7),
          "GuildSettingsPickerBottomSheet",
          { feature, section, subsection, guildId },
        );
      };
      cResult[0] = feature;
      cResult[1] = section;
      cResult[2] = subsection;
      cResult[3] = handleGuildSelected;
      tmp6 = handleGuildSelected;
      return;
    }
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");

export default GuildSettingsPickerBottomSheet;
