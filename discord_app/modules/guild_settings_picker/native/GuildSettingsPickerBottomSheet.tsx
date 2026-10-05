// discord_app/modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildPickerDefault from "components/GuildPicker.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const metroRequire = createStyles.createStyles({ content: { paddingHorizontal: 16 } });
if (ReactCompilerGating.isReactCompilerEnabled()) {
  class GuildSettingsPickerBottomSheet {
    constructor(feature) {
      let description;
      let isGuildSupported;
      let items;
      let selectGuildCta;
      let subsection;
      let title;
      let obj = feature(subsection[5]);
      const cResult = obj.c(33);
      feature = feature.feature;
      const section = feature.section;
      subsection = feature.subsection;
      const guildId = feature.guildId;
      const tmp4 = closure_6();
      let obj2 = feature(subsection[6]);
      const guildSettingsPickerFeature = obj2.useGuildSettingsPickerFeature(feature);
      ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
      if (cResult[0] === feature) {
        if (cResult[1] === section) {
          let tmp6;
          if (cResult[2] === subsection) {
            tmp6 = cResult[3];
          }
          if (cResult[4] === guildId) {
            if (cResult[5] === section) {
              let tmp7;
              let tmp8;
              let tmp11;
              if (cResult[6] === subsection) {
                tmp7 = cResult[7];
              }
              if (cResult[8] !== title) {
                const obj3 = { title };
                const tmp10 = closure_4(feature(subsection[10]).BottomSheetTitleHeader, obj3);
                cResult[8] = title;
                cResult[9] = tmp10;
                tmp8 = tmp10;
              } else {
                tmp8 = cResult[9];
              }
              if (cResult[10] !== description) {
                const obj4 = { variant: "text-md/medium", children: description };
                const tmp13 = closure_4(feature(subsection[11]).Text, obj4);
                cResult[10] = description;
                cResult[11] = tmp13;
                tmp11 = tmp13;
              } else {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp4.content) {
                let tmp14;
                let tmp19;
                if (cResult[13] === tmp11) {
                  tmp14 = cResult[14];
                }
                const _Symbol = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp21 = closure_4(feature(subsection[12]).Spacer, { size: 16 });
                  cResult[15] = tmp21;
                  tmp19 = tmp21;
                } else {
                  tmp19 = cResult[15];
                }
                if (cResult[16] === guildId) {
                  if (cResult[17] === tmp6) {
                    let tmp22;
                    let tmp26;
                    if (cResult[18] === isGuildSupported) {
                      tmp22 = cResult[19];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp28 = closure_4(feature(subsection[12]).Spacer, { size: 16 });
                      cResult[20] = tmp28;
                      tmp26 = tmp28;
                    } else {
                      tmp26 = cResult[20];
                    }
                    if (cResult[21] === tmp7) {
                      if (cResult[22] === selectGuildCta) {
                        let tmp31;
                        if ((cResult[23] === null) == guildId) {
                          tmp31 = cResult[24];
                        }
                        if (cResult[25] === tmp4.content) {
                          let tmp34;
                          if (cResult[26] === tmp31) {
                            tmp34 = cResult[27];
                          }
                          if (cResult[28] === tmp34) {
                            if (cResult[29] === tmp8) {
                              if (cResult[30] === tmp14) {
                                let tmp38;
                                if (cResult[31] === tmp22) {
                                  tmp38 = cResult[32];
                                }
                                return tmp38;
                              }
                            }
                          }
                          const obj5 = { startExpanded: true, children: items };
                          items = [tmp8, tmp14, tmp19, tmp22, tmp26, tmp34];
                          const tmp40 = closure_5(feature(subsection[15]).BottomSheet, obj5);
                          cResult[28] = tmp34;
                          cResult[29] = tmp8;
                          cResult[30] = tmp14;
                          cResult[31] = tmp22;
                          cResult[32] = tmp40;
                          tmp38 = tmp40;
                        }
                        const obj6 = { style: tmp4.content, children: tmp31 };
                        const tmp37 = closure_4(guildId, obj6);
                        cResult[25] = tmp4.content;
                        cResult[26] = tmp31;
                        cResult[27] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                    const obj7 = { grow: true, text: selectGuildCta, disabled: null == guildId, onPress: tmp7 };
                    const tmp33 = closure_4(feature(subsection[14]).Button, obj7);
                    cResult[21] = tmp7;
                    cResult[22] = selectGuildCta;
                    cResult[23] = null == guildId;
                    cResult[24] = tmp33;
                    tmp31 = tmp33;
                  }
                }
                const obj8 = { guildId, onChange: tmp6, isGuildIncluded: isGuildSupported };
                const tmp25 = closure_4(section(subsection[13]), obj8);
                cResult[16] = guildId;
                cResult[17] = tmp6;
                cResult[18] = isGuildSupported;
                cResult[19] = tmp25;
                tmp22 = tmp25;
              }
              const obj9 = { style: tmp4.content, children: tmp11 };
              const tmp17 = closure_4(guildId, obj9);
              cResult[12] = tmp4.content;
              cResult[13] = tmp11;
              cResult[14] = tmp17;
              tmp14 = tmp17;
            }
          }
          function handleOpenSelected() {
            _modDef38(null != guildId, "Guild ID must not be null on click");
            const obj = GuildSettingsActionCreatorsDefault;
            obj.open(guildId, section, undefined, subsection);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
          }
          cResult[4] = guildId;
          cResult[5] = section;
          cResult[6] = subsection;
          cResult[7] = handleOpenSelected;
          tmp7 = handleOpenSelected;
        }
      }
      function handleGuildSelected(guildId) {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { feature, section, subsection, guildId };
        obj.openLazy(() => Promise.resolve(closure_1_7), "GuildSettingsPickerBottomSheet", obj2);
      }
      cResult[0] = feature;
      cResult[1] = section;
      cResult[2] = subsection;
      cResult[3] = handleGuildSelected;
      tmp6 = handleGuildSelected;
    }
  }
} else {
  class GuildSettingsPickerBottomSheet {
    constructor(feature) {
      let description;
      let guildId;
      let isGuildSupported;
      let items;
      let obj6;
      let section;
      let selectGuildCta;
      let subsection;
      let title;
      feature = feature.feature;
      ({ section: importDefault, subsection: dependencyMap, guildId } = feature);
      const tmp = closure_6();
      let obj = feature(13702);
      const guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
      ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
      let obj2 = { startExpanded: true, children: items };
      BottomSheet = feature(6645).BottomSheet;
      items = [closure_4(feature(6644).BottomSheetTitleHeader, { title }), , , , ,];
      const obj3 = {
        style: tmp.content,
        children: closure_4(feature(4886).Text, { variant: "text-md/medium", children: description }),
      };
      items[1] = closure_4(guildId, obj3);
      items[2] = closure_4(feature(1188).Spacer, { size: 16 });
      const obj4 = {
        guildId,
        onChange: function handleGuildSelected(guildId) {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { feature, section: importDefault, subsection: dependencyMap, guildId };
          obj.openLazy(() => Promise.resolve(closure_1_8), "GuildSettingsPickerBottomSheet", obj2);
        },
        isGuildIncluded: isGuildSupported,
      };
      items[3] = closure_4(GuildPickerDefault, obj4);
      items[4] = closure_4(feature(1188).Spacer, { size: 16 });
      const obj5 = { style: tmp.content, children: closure_4(feature(5594).Button, obj6) };
      obj6 = {
        grow: true,
        text: selectGuildCta,
        disabled: null == guildId,
        onPress: function handleOpenSelected() {
          _modDef38(null != guildId, "Guild ID must not be null on click");
          const obj = GuildSettingsActionCreatorsDefault;
          obj.open(guildId, importDefault, undefined, dependencyMap);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        },
      };
      items[5] = closure_4(guildId, obj5);
      return closure_5(BottomSheet, obj2);
    }
  }
}
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");

export default GuildSettingsPickerBottomSheet;
