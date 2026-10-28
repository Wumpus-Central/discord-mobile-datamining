// discord_app/modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3863 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import ConjureGuildPickerSheetDefault from "../../guild_pickers/native/ConjureGuildPickerSheet.tsx";
import useConjureProjectPickerOptionsDefault from "../useConjureProjectPickerOptions.tsx";
import ConjureClarification from "../ConjureClarification.tsx";
import ConjureClarificationServerSheetDefault from "ConjureClarificationServerSheet.tsx";
import ConjureClarificationProjectSheetDefault from "ConjureClarificationProjectSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const ConjureClarificationPickerSheet = "ConjureClarificationPickerSheet";
const ConjureClarificationEntityPicker = "ConjureClarificationEntityPicker";
fn(558);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ServerPicker(question) {
      const cResult = question(onChange[5]).c(22);
      question = question.question;
      value = question.value;
      importDefault = value;
      ({ disabled, onChange } = question);
      const obj = question(onChange[5]);
      const conjureEligibleGuilds = question(onChange[6]).useConjureEligibleGuilds(ConjureClarificationEntityPicker);
      if (0 === conjureEligibleGuilds.length) {
        return question.fallback;
      } else {
        if (cResult[0] === conjureEligibleGuilds) {
          let first = value[0];
          let id;
          if (first != null) {
            id = first.id;
          }
          if (cResult[1] === id) {
            let tmp7 = cResult[2];
          }
          if (cResult[5] === conjureEligibleGuilds) {
            if (cResult[6] === onChange) {
              if (cResult[7] === question.question) {
                if (cResult[8] === value) {
                  let tmp17 = cResult[9];
                }
                const first1 = value[0];
                let name;
                if (first1 != null) {
                  name = first1.name;
                }
                if (cResult[10] !== name) {
                  const first2 = value[0];
                  let name1;
                  if (first2 != null) {
                    name1 = first2.name;
                  }
                  if (name1 == null) {
                    name1 = tmp(onChange[9]).clarificationPickerPlaceholder("server", false);
                    const tmpResult = tmp(onChange[9]);
                  }
                  const first3 = value[0];
                  let name2;
                  if (first3 != null) {
                    name2 = first3.name;
                  }
                  cResult[10] = name2;
                  cResult[11] = name1;
                  let tmp22 = name1;
                } else {
                  tmp22 = cResult[11];
                }
                if (cResult[12] !== tmp7) {
                  let tmp28;
                  if (null != tmp7) {
                    const obj3 = { guild: tmp7, size: tmp(onChange[10]).GuildIconSizes.SMALL_32 };
                    tmp28 = jsx(require("GuildIcon"), { guild: tmp7, size: tmp(onChange[10]).GuildIconSizes.SMALL_32 });
                    const tmp31 = require("GuildIcon");
                  }
                  cResult[12] = tmp7;
                  cResult[13] = tmp28;
                  let tmp27 = tmp28;
                } else {
                  tmp27 = cResult[13];
                }
                if (cResult[14] === disabled) {
                  if (cResult[15] === tmp17) {
                    if (cResult[16] === tmp22) {
                      if (cResult[17] === tmp27) {
                        let tmp32 = cResult[18];
                      }
                      if (cResult[19] === tmp19) {
                        if (cResult[20] === tmp32) {
                          let tmp35 = cResult[21];
                        }
                        return tmp35;
                      }
                      const obj4 = { hasIcons: tmp19, children: tmp32 };
                      const tmp37 = jsx(tmp(onChange[12]).TableRowGroup, { hasIcons: tmp19, children: tmp32 });
                      cResult[19] = tmp19;
                      cResult[20] = tmp32;
                      cResult[21] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                }
                const obj5 = { label: tmp22, icon: tmp27, arrow: true, disabled, onPress: tmp17 };
                const tmp34 = jsx(tmp(onChange[11]).TableRow, {
                  label: tmp22,
                  icon: tmp27,
                  arrow: true,
                  disabled,
                  onPress: tmp17,
                });
                cResult[14] = disabled;
                cResult[15] = tmp17;
                cResult[16] = tmp22;
                cResult[17] = tmp27;
                cResult[18] = tmp34;
                tmp32 = tmp34;
              }
            }
          }
          function openSheet() {
            const obj2 = {
              content: jsx(ConjureClarificationServerSheetDefault, {
                sheetKey: ConjureClarificationPickerSheet,
                title: question.question,
                guilds: conjureEligibleGuilds,
                onPick(id) {
                  const name = id;
                  const items = [id.id];
                  return closure_1_2(
                    question(onChange[9]).clarificationEntities("server", items, () => name.name, closure_1_1),
                  );
                },
              }),
              key: ConjureClarificationPickerSheet,
              stackingBehavior: "stack",
            };
            ActionSheetActionCreators.showActionSheet(obj2);
          }
          cResult[5] = conjureEligibleGuilds;
          cResult[6] = onChange;
          cResult[7] = question.question;
          cResult[8] = value;
          cResult[9] = openSheet;
          tmp17 = openSheet;
        }
        const first4 = value[0];
        let id1;
        if (first4 != null) {
          id1 = first4.id;
        }
        if (cResult[3] !== id1) {
          const first5 = value[0];
          let id2;
          if (first5 != null) {
            id2 = first5.id;
          }
          const fn = function s(id) {
            const first = value[0];
            id = undefined;
            if (first != null) {
              id = first.id;
            }
            return id.id === id;
          };
          cResult[3] = id2;
          cResult[4] = fn;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[4];
        }
        const found = conjureEligibleGuilds.find(tmp11);
        cResult[0] = conjureEligibleGuilds;
        const first6 = value[0];
        let id3;
        if (first6 != null) {
          id3 = first6.id;
        }
        cResult[1] = id3;
        cResult[2] = found;
        tmp7 = found;
      }
      let obj2 = question(onChange[6]);
    }
  : function ServerPicker(onChange) {
      ({ question: require, value } = onChange);
      importDefault = value;
      onChange = onChange.onChange;
      ({ disabled, fallback } = onChange);
      const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds(
        ConjureClarificationEntityPicker,
      );
      if (0 === conjureEligibleGuilds.length) {
        return fallback;
      } else {
        const found = conjureEligibleGuilds.find((id) => {
          const first = value[0];
          id = undefined;
          if (first != null) {
            id = first.id;
          }
          return id.id === id;
        });
        let obj2 = { hasIcons: null != found, children: null };
        let first = value[0];
        let name;
        if (first != null) {
          name = first.name;
        }
        if (name == null) {
          name = require("ConjureClarification").clarificationPickerPlaceholder("server", false);
          const tmpResult = require("ConjureClarification");
        }
        const obj3 = { label: name, icon: null, arrow: true, disabled: null, onPress: null };
        let tmp8Result;
        if (null != found) {
          const obj4 = { guild: found, size: require("GuildIcon").GuildIconSizes.SMALL_32 };
          tmp8Result = jsx(require("GuildIcon"), { guild: found, size: require("GuildIcon").GuildIconSizes.SMALL_32 });
          const tmp6 = require("GuildIcon");
        }
        obj3.icon = tmp8Result;
        obj3.disabled = disabled;
        obj3.onPress = function openSheet() {
          const obj2 = {
            content: jsx(ConjureClarificationServerSheetDefault, {
              sheetKey: ConjureClarificationPickerSheet,
              title: question.question,
              guilds: conjureEligibleGuilds,
              onPick(id) {
                const name = id;
                const items = [id.id];
                return closure_1_2(
                  require("ConjureClarification").clarificationEntities("server", items, () => name.name, closure_1_1),
                );
              },
            }),
            key: ConjureClarificationPickerSheet,
            stackingBehavior: "stack",
          };
          ActionSheetActionCreators.showActionSheet(obj2);
        };
        obj2.children = jsx(require("TableRow").TableRow, {
          label: name,
          icon: null,
          arrow: true,
          disabled: null,
          onPress: null,
        });
        return jsx(require("TableRowGroup").TableRowGroup, { hasIcons: null != found, children: null });
      }
      const obj = require("useConjureProjects");
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProjectPicker(question) {
      const cResult = question(onChange[5]).c(11);
      question = question.question;
      value = question.value;
      importDefault = value;
      ({ disabled, onChange } = question);
      ({ projectId, fallback } = question);
      const projects = require("useConjureProjectPickerOptions")(projectId);
      if (0 === projects.length) {
        return fallback;
      } else {
        if (cResult[0] === onChange) {
          if (cResult[1] === projects) {
            if (cResult[2] === question.question) {
              if (cResult[3] === value) {
                let tmp4 = cResult[4];
              }
              const first = value[0];
              let name;
              if (first != null) {
                name = first.name;
              }
              if (cResult[5] !== name) {
                const first1 = value[0];
                let name1;
                if (first1 != null) {
                  name1 = first1.name;
                }
                if (name1 == null) {
                  name1 = tmp(onChange[9]).clarificationPickerPlaceholder("project", false);
                  const tmpResult = tmp(onChange[9]);
                }
                const first2 = value[0];
                let name2;
                if (first2 != null) {
                  name2 = first2.name;
                }
                cResult[5] = name2;
                cResult[6] = name1;
                let tmp8 = name1;
              } else {
                tmp8 = cResult[6];
              }
              if (cResult[7] === disabled) {
                if (cResult[8] === tmp4) {
                  if (cResult[9] === tmp8) {
                    let tmp13 = cResult[10];
                  }
                  return tmp13;
                }
              }
              let obj2 = { hasIcons: false, children: null };
              const obj3 = { label: tmp8, arrow: true, disabled, onPress: tmp4 };
              obj2.children = jsx(tmp(onChange[11]).TableRow, { label: tmp8, arrow: true, disabled, onPress: tmp4 });
              const tmp15 = jsx(tmp(onChange[12]).TableRowGroup, { hasIcons: false, children: null });
              cResult[7] = disabled;
              cResult[8] = tmp4;
              cResult[9] = tmp8;
              cResult[10] = tmp15;
              tmp13 = tmp15;
            }
          }
        }
        function openSheet() {
          const obj2 = {
            content: jsx(ConjureClarificationProjectSheetDefault, {
              sheetKey: ConjureClarificationPickerSheet,
              title: question.question,
              projects,
              onPick(projectId) {
                const items = [projectId.projectId];
                return closure_1_2(
                  question(onChange[9]).clarificationEntities("project", items, () => projectId.name, closure_1_1),
                );
              },
            }),
            key: ConjureClarificationPickerSheet,
            stackingBehavior: "stack",
          };
          ActionSheetActionCreators.showActionSheet(obj2);
        }
        cResult[0] = onChange;
        cResult[1] = projects;
        cResult[2] = question.question;
        cResult[3] = value;
        cResult[4] = openSheet;
        tmp4 = openSheet;
      }
      const obj = question(onChange[5]);
    }
  : function ProjectPicker(arg0) {
      ({ question: require, value } = arg0);
      importDefault = value;
      ({ onChange: dependencyMap, fallback } = arg0);
      ({ projectId, disabled } = arg0);
      const projects = useConjureProjectPickerOptionsDefault(projectId);
      if (0 !== projects.length) {
        const first = value[0];
        let name;
        if (first != null) {
          name = first.name;
        }
        if (name == null) {
          name = ConjureClarification.clarificationPickerPlaceholder("project", false);
          const tmp4Result = ConjureClarification;
        }
        const obj = { hasIcons: false, children: null };
        let obj2 = {
          label: name,
          arrow: true,
          disabled,
          onPress: function openSheet() {
            const obj2 = {
              content: jsx(ConjureClarificationProjectSheetDefault, {
                sheetKey: ConjureClarificationPickerSheet,
                title: question.question,
                projects,
                onPick(projectId) {
                  const items = [projectId.projectId];
                  return closure_1_2(
                    ConjureClarification.clarificationEntities("project", items, () => projectId.name, closure_1_1),
                  );
                },
              }),
              key: ConjureClarificationPickerSheet,
              stackingBehavior: "stack",
            };
            ActionSheetActionCreators.showActionSheet(obj2);
          },
        };
        obj.children = jsx(TableRow.TableRow, {
          label: name,
          arrow: true,
          disabled,
          onPress: function openSheet() {
            const obj2 = {
              content: jsx(ConjureClarificationProjectSheetDefault, {
                sheetKey: ConjureClarificationPickerSheet,
                title: question.question,
                projects,
                onPick(projectId) {
                  const items = [projectId.projectId];
                  return closure_1_2(
                    ConjureClarification.clarificationEntities("project", items, () => projectId.name, closure_1_1),
                  );
                },
              }),
              key: ConjureClarificationPickerSheet,
              stackingBehavior: "stack",
            };
            ActionSheetActionCreators.showActionSheet(obj2);
          },
        });
        fallback = jsx(TableRowGroup.TableRowGroup, { hasIcons: false, children: null });
      }
      return fallback;
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEntityPicker(value) {
      const cResult = question(onChange[5]).c(29);
      ({ projectId, question } = value);
      value = value.value;
      importDefault = value;
      ({ disabled, onChange } = value);
      let obj = question(onChange[5]);
      const conjureSettingsGuildId = question(onChange[15]).useConjureSettingsGuildId(projectId, true);
      if (cResult[0] === disabled) {
        if (cResult[1] === conjureSettingsGuildId) {
          if (cResult[2] === onChange) {
            if (cResult[3] === projectId) {
              if (cResult[4] === question) {
                if (cResult[5] === value) {
                  let tmp5 = cResult[6];
                }
                require("useConjureSafetyAlertsChannelPick")(tmp5);
                const input = question.input;
                const _Symbol = Symbol;
                if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                  let items = [conjureSettingsGuildId];
                  cResult[7] = items;
                  let tmp9 = items;
                } else {
                  tmp9 = cResult[7];
                }
                if (cResult[8] === conjureSettingsGuildId) {
                  if (cResult[9] === input) {
                    let tmp11 = cResult[10];
                    let tmp12 = cResult[11];
                  }
                  const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp9, tmp11, tmp12);
                  if (null != conjureSettingsGuildId) {
                    if (null != input) {
                      if ("project" !== input) {
                        if ("server" !== input) {
                          closure_6 = tmp15;
                          if (cResult[12] === stateFromStores) {
                            if (cResult[13] === conjureSettingsGuildId) {
                              if (cResult[14] === input) {
                                if (cResult[15] === tmp15) {
                                  if (cResult[16] === onChange) {
                                    if (cResult[17] === question.channel_filter) {
                                      if (cResult[18] === question.question) {
                                        if (cResult[19] === value) {
                                          let tmp16 = cResult[20];
                                        }
                                        if (cResult[21] === input) {
                                          if (cResult[22] === tmp15) {
                                            if (cResult[23] === value) {
                                              if (cResult[25] === disabled) {
                                                if (cResult[26] === tmp16) {
                                                  if (cResult[27] === tmp17) {
                                                    let tmp20 = cResult[28];
                                                  }
                                                  return tmp20;
                                                }
                                              }
                                              const obj3 = { hasIcons: false, children: null };
                                              let obj4 = { label: cResult[24], arrow: true, disabled, onPress: tmp16 };
                                              obj3.children = stateFromStores(tmp(tmp2[11]).TableRow, obj4);
                                              const tmp22 = stateFromStores(tmp(tmp2[12]).TableRowGroup, obj3);
                                              class P {
                                                constructor() {
                                                  channels = null;
                                                  if (null != closure_3) {
                                                    tmp3 = input;
                                                    str = "channel";
                                                    channels = null;
                                                    if ("channel" === input) {
                                                      tmp4 = closure_3;
                                                      channels = closure_3.getChannels(tmp);
                                                    }
                                                  }
                                                  return channels;
                                                }
                                              }
                                              cResult[25] = disabled;
                                              cResult[26] = tmp16;
                                              cResult[27] = cResult[24];
                                              cResult[28] = tmp22;
                                              tmp20 = tmp22;
                                            }
                                          }
                                        }
                                        if (value.length > 0) {
                                          const mapped = value.map((name) => name.name);
                                          let joined = mapped.join(", ");
                                        } else {
                                          joined = tmp(tmp2[9]).clarificationPickerPlaceholder(input, tmp15);
                                          const tmpResult2 = tmp(tmp2[9]);
                                        }
                                        cResult[21] = input;
                                        cResult[22] = tmp15;
                                        cResult[23] = value;
                                        class P {
                                          constructor() {
                                            channels = null;
                                            if (null != closure_3) {
                                              tmp3 = input;
                                              str = "channel";
                                              channels = null;
                                              if ("channel" === input) {
                                                tmp4 = closure_3;
                                                channels = closure_3.getChannels(tmp);
                                              }
                                            }
                                            return channels;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          function openSheet() {
                            if (null != conjureSettingsGuildId) {
                              if (null != input) {
                                if ("project" !== input) {
                                  if ("server" !== input) {
                                    if ("channel" === input) {
                                      if (!closure_6) {
                                        if (null != stateFromStores) {
                                          const result = ConjureUtils.conjureSettingChannels(
                                            tmp2,
                                            question.channel_filter,
                                          );
                                          const obj4 = {
                                            header: null,
                                            guild: null,
                                            channels: null,
                                            selectedChannel: null,
                                            noChannelOptionLabel: null,
                                            onSelect: null,
                                          };
                                          const obj7 = { title: question.question };
                                          obj4.header = obj7;
                                          const obj6 = ActionSheetActionCreators;
                                          obj4.guild = GuildStore.getGuild(conjureSettingsGuildId);
                                          obj4.channels = result;
                                          let found = result.find((id) => {
                                            const first = closure_1_1[0];
                                            id = undefined;
                                            if (first != null) {
                                              id = first.id;
                                            }
                                            return id.id === id;
                                          });
                                          if (found == null) {
                                            found = null;
                                          }
                                          let obj = { content: null, key: null, stackingBehavior: "stack" };
                                          obj4.selectedChannel = found;
                                          const intl = util.intl;
                                          obj4.noChannelOptionLabel = intl.string(_modDef3863["jtBVV+"]);
                                          obj4.onSelect = function onSelect(id) {
                                            if (null == id) {
                                              let items = [];
                                            } else {
                                              items = question(onChange[9]).clarificationChannelEntities(
                                                id,
                                                closure_1_1,
                                              );
                                              const obj = question(onChange[9]);
                                            }
                                            return closure_1_2(items, conjureSettingsGuildId);
                                          };
                                          obj.content = jsx(ChannelPickerActionSheetDefault, {
                                            header: null,
                                            guild: null,
                                            channels: null,
                                            selectedChannel: null,
                                            noChannelOptionLabel: null,
                                            onSelect: null,
                                          });
                                          obj.key = ConjureClarificationPickerSheet;
                                          obj6.showActionSheet(obj);
                                        }
                                      }
                                    }
                                    const obj8 = {
                                      guildId: conjureSettingsGuildId,
                                      type: input,
                                      channelFilter: null,
                                      title: null,
                                      maxPicks: null,
                                      selected: null,
                                      onSubmit: null,
                                    };
                                    ({ channel_filter: obj3.channelFilter, question: obj3.title } = question);
                                    let num = 1;
                                    const obj2 = ActionSheetActionCreators;
                                    if (closure_6) {
                                      num = ConjureClarification.MAX_CLARIFICATION_ENTITY_PICKS;
                                    }
                                    const obj12 = { content: null, key: null, stackingBehavior: "stack" };
                                    obj8.maxPicks = num;
                                    obj8.selected = value.map((id) => ({ id: id.id, label: id.name }));
                                    obj8.onSubmit = function onSubmit(arr) {
                                      closure_0 = arr;
                                      return closure_1_2(
                                        question(onChange[9]).clarificationEntities(
                                          input,
                                          arr.map((id) => id.id),
                                          (arg0) => {
                                            closure_0 = arg0;
                                            const found = closure_0.find((id) => id.id === closure_0);
                                            let label;
                                            if (found != null) {
                                              label = found.label;
                                            }
                                            return label;
                                          },
                                          closure_1_1,
                                        ),
                                        conjureSettingsGuildId,
                                      );
                                    };
                                    obj12.content = jsx(ConjureGuildPickerSheetDefault, {
                                      guildId: conjureSettingsGuildId,
                                      type: input,
                                      channelFilter: null,
                                      title: null,
                                      maxPicks: null,
                                      selected: null,
                                      onSubmit: null,
                                    });
                                    obj12.key = ConjureClarificationPickerSheet;
                                    obj2.showActionSheet(obj12);
                                  }
                                }
                              }
                            }
                          }
                          cResult[12] = stateFromStores;
                          cResult[13] = conjureSettingsGuildId;
                          class P {
                            constructor() {
                              channels = null;
                              if (null != closure_3) {
                                tmp3 = input;
                                str = "channel";
                                channels = null;
                                if ("channel" === input) {
                                  tmp4 = closure_3;
                                  channels = closure_3.getChannels(tmp);
                                }
                              }
                              return channels;
                            }
                          }
                          cResult[15] = true === question.multi_select;
                          cResult[16] = onChange;
                          cResult[17] = question.channel_filter;
                          cResult[18] = question.question;
                          cResult[19] = value;
                          cResult[20] = openSheet;
                          tmp16 = openSheet;
                        }
                      }
                    }
                  }
                  return value.fallback;
                }
                class P {
                  constructor() {
                    channels = null;
                    if (null != closure_3) {
                      tmp3 = input;
                      str = "channel";
                      channels = null;
                      if ("channel" === input) {
                        tmp4 = closure_3;
                        channels = closure_3.getChannels(tmp);
                      }
                    }
                    return channels;
                  }
                }
                const items1 = [conjureSettingsGuildId, input];
                cResult[8] = conjureSettingsGuildId;
                cResult[9] = input;
                cResult[10] = P;
                cResult[11] = items1;
                tmp12 = items1;
                tmp11 = P;
              }
            }
          }
        }
      }
      let obj5 = { projectId, guildId: conjureSettingsGuildId, question, value, disabled, onChange };
      cResult[0] = disabled;
      cResult[1] = conjureSettingsGuildId;
      cResult[2] = onChange;
      cResult[3] = projectId;
      cResult[4] = question;
      cResult[5] = value;
      cResult[6] = obj5;
      tmp5 = obj5;
    }
  : function GuildEntityPicker(value) {
      ({ projectId, question } = value);
      value = value.value;
      importDefault = value;
      ({ disabled, onChange } = value);
      closure_6 = undefined;
      const conjureSettingsGuildId = question(onChange[15]).useConjureSettingsGuildId(projectId, true);
      require("useConjureSafetyAlertsChannelPick")({
        projectId,
        guildId: conjureSettingsGuildId,
        question,
        value,
        disabled,
        onChange,
      });
      const input = question.input;
      let obj = question(onChange[15]);
      let items = [conjureSettingsGuildId];
      const items1 = [conjureSettingsGuildId, input];
      const stateFromStores = question(onChange[17]).useStateFromStores(
        items,
        () => {
          let channels = null;
          if (null != conjureSettingsGuildId) {
            channels = null;
            if ("channel" === input) {
              channels = GuildChannelStore.getChannels(tmp);
            }
          }
          return channels;
        },
        items1,
      );
      if (null != conjureSettingsGuildId) {
        if (null != input) {
          if ("project" !== input) {
            if ("server" !== input) {
              closure_6 = tmp6;
              if (value.length > 0) {
                const mapped = value.map((name) => name.name);
                let joined = mapped.join(", ");
              } else {
                joined = tmp(tmp2[9]).clarificationPickerPlaceholder(input, tmp6);
                const tmpResult = tmp(tmp2[9]);
              }
              const obj3 = { hasIcons: false, children: null };
              let obj4 = {
                label: joined,
                arrow: true,
                disabled,
                onPress: function openSheet() {
                  if (null != conjureSettingsGuildId) {
                    if (null != input) {
                      if ("project" !== input) {
                        if ("server" !== input) {
                          if ("channel" === input) {
                            if (!closure_6) {
                              if (null != stateFromStores) {
                                const result = ConjureUtils.conjureSettingChannels(tmp2, question.channel_filter);
                                const obj4 = {
                                  header: null,
                                  guild: null,
                                  channels: null,
                                  selectedChannel: null,
                                  noChannelOptionLabel: null,
                                  onSelect: null,
                                };
                                const obj7 = { title: question.question };
                                obj4.header = obj7;
                                const obj6 = ActionSheetActionCreators;
                                obj4.guild = GuildStore.getGuild(conjureSettingsGuildId);
                                obj4.channels = result;
                                let found = result.find((id) => {
                                  const first = closure_1_1[0];
                                  id = undefined;
                                  if (first != null) {
                                    id = first.id;
                                  }
                                  return id.id === id;
                                });
                                if (found == null) {
                                  found = null;
                                }
                                let obj = { content: null, key: null, stackingBehavior: "stack" };
                                obj4.selectedChannel = found;
                                const intl = util.intl;
                                obj4.noChannelOptionLabel = intl.string(_modDef3863["jtBVV+"]);
                                obj4.onSelect = function onSelect(id) {
                                  if (null == id) {
                                    let items = [];
                                  } else {
                                    items = question(onChange[9]).clarificationChannelEntities(id, closure_1_1);
                                    const obj = question(onChange[9]);
                                  }
                                  return closure_1_2(items, conjureSettingsGuildId);
                                };
                                obj.content = jsx(ChannelPickerActionSheetDefault, {
                                  header: null,
                                  guild: null,
                                  channels: null,
                                  selectedChannel: null,
                                  noChannelOptionLabel: null,
                                  onSelect: null,
                                });
                                obj.key = ConjureClarificationPickerSheet;
                                obj6.showActionSheet(obj);
                              }
                            }
                          }
                          const obj8 = {
                            guildId: conjureSettingsGuildId,
                            type: input,
                            channelFilter: null,
                            title: null,
                            maxPicks: null,
                            selected: null,
                            onSubmit: null,
                          };
                          ({ channel_filter: obj3.channelFilter, question: obj3.title } = question);
                          let num = 1;
                          const obj2 = ActionSheetActionCreators;
                          if (closure_6) {
                            num = ConjureClarification.MAX_CLARIFICATION_ENTITY_PICKS;
                          }
                          const obj12 = { content: null, key: null, stackingBehavior: "stack" };
                          obj8.maxPicks = num;
                          obj8.selected = value.map((id) => ({ id: id.id, label: id.name }));
                          obj8.onSubmit = function onSubmit(arr) {
                            closure_0 = arr;
                            return closure_1_2(
                              question(onChange[9]).clarificationEntities(
                                input,
                                arr.map((id) => id.id),
                                (arg0) => {
                                  closure_0 = arg0;
                                  const found = closure_0.find((id) => id.id === closure_0);
                                  let label;
                                  if (found != null) {
                                    label = found.label;
                                  }
                                  return label;
                                },
                                closure_1_1,
                              ),
                              conjureSettingsGuildId,
                            );
                          };
                          obj12.content = jsx(ConjureGuildPickerSheetDefault, {
                            guildId: conjureSettingsGuildId,
                            type: input,
                            channelFilter: null,
                            title: null,
                            maxPicks: null,
                            selected: null,
                            onSubmit: null,
                          });
                          obj12.key = ConjureClarificationPickerSheet;
                          obj2.showActionSheet(obj12);
                        }
                      }
                    }
                  }
                },
              };
              obj3.children = stateFromStores(tmp(tmp2[11]).TableRow, obj4);
              return stateFromStores(tmp(tmp2[12]).TableRowGroup, obj3);
            }
          }
        }
      }
      return value.fallback;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureClarificationEntityPicker(question) {
      const cResult = c.c(6);
      const input = question.question.input;
      if ("project" === input) {
        if (cResult[0] !== question) {
          const obj2 = {};
          const merged = Object.assign(question);
          const tmp22 = <closure_9 />;
          cResult[0] = question;
          cResult[1] = tmp22;
          let tmp16 = tmp22;
        } else {
          tmp16 = cResult[1];
        }
        return tmp16;
      } else if ("server" === input) {
        if (cResult[2] !== question) {
          const obj3 = {};
          const merged1 = Object.assign(question);
          const tmp15 = <closure_8 />;
          cResult[2] = question;
          cResult[3] = tmp15;
          let tmp9 = tmp15;
        } else {
          tmp9 = cResult[3];
        }
        return tmp9;
      } else {
        if (cResult[4] !== question) {
          const obj4 = {};
          const merged2 = Object.assign(question);
          const tmp8 = <closure_10 key={question.question.id} />;
          cResult[4] = question;
          cResult[5] = tmp8;
          let tmp2 = tmp8;
        } else {
          tmp2 = cResult[5];
        }
        return tmp2;
      }
    }
  : function ConjureClarificationEntityPicker(question) {
      const input = question.question.input;
      if ("project" === input) {
        const obj2 = {};
        const merged = Object.assign(question);
        return <closure_9 />;
      } else if ("server" === input) {
        const obj3 = {};
        const merged1 = Object.assign(question);
        return <closure_8 />;
      } else {
        const obj = {};
        const merged2 = Object.assign(question);
        return <closure_10 key={question.question.id} />;
      }
    };
