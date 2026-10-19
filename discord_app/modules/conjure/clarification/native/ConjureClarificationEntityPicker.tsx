// === Module 12315: ConjureClarificationEntityPicker ===

// Module 12315 (ConjureClarificationEntityPicker)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5171 */;
import TableRow from "TableRow" /* 6851 */;
import TableRowGroup from "TableRowGroup" /* 6935 */;
import ConjureUtils from "ConjureUtils" /* 7291 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11688 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 11690 */;
import ConjureClarification from "ConjureClarification" /* 12309 */;
import useConjureProjectPickerOptionsDefault from "useConjureProjectPickerOptions" /* 12316 */;
import ConjureClarificationProjectSheetDefault from "ConjureClarificationProjectSheet" /* 12318 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4878 */;
import GuildStore from "GuildStore" /* 4822 */;
import RelationshipStore from "RelationshipStore" /* 4890 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const jsx = fn(21).jsx;
const ConjureClarificationPickerSheet = "ConjureClarificationPickerSheet";
fn(558);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectPicker(question) {
  const cResult = question(onChange[7]).c(11);
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
              name1 = tmp(onChange[11]).clarificationPickerPlaceholder("project", false);
              const tmpResult = tmp(onChange[11]);
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
          obj2.children = jsx(tmp(onChange[13]).TableRow, { label: tmp8, arrow: true, disabled, onPress: tmp4 });
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
            return closure_1_2(question(onChange[11]).clarificationEntities("project", items, () => projectId.name, closure_1_1));
          }
        }),
        key: ConjureClarificationPickerSheet,
        stackingBehavior: "stack"
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
  const obj = question(onChange[7]);
}) : (function ProjectPicker(arg0) {
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
                return closure_1_2(ConjureClarification.clarificationEntities("project", items, () => projectId.name, closure_1_1));
              }
            }),
            key: ConjureClarificationPickerSheet,
            stackingBehavior: "stack"
          };
          ActionSheetActionCreators.showActionSheet(obj2);
        }
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
                return closure_1_2(ConjureClarification.clarificationEntities("project", items, () => projectId.name, closure_1_1));
              }
            }),
            key: ConjureClarificationPickerSheet,
            stackingBehavior: "stack"
          };
          ActionSheetActionCreators.showActionSheet(obj2);
        }
    });
    fallback = jsx(TableRowGroup.TableRowGroup, { hasIcons: false, children: null });
  }
  return fallback;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEntityPicker(question) {
  const cResult = question(onChange[7]).c(22);
  question = question.question;
  value = question.value;
  importDefault = value;
  ({ disabled, onChange } = question);
  ({ projectId, fallback } = question);
  let obj = question(onChange[7]);
  const conjureSettingsGuildId = question(onChange[14]).useConjureSettingsGuildId(projectId, true);
  const input = question.input;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [conjureSettingsGuildId];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === conjureSettingsGuildId) {
    if (cResult[2] === input) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(onChange[15]).useStateFromStores(first, tmp7, tmp8);
    if (null != conjureSettingsGuildId) {
      if (null != input) {
        if ("project" !== input) {
          closure_6 = tmp11;
          if (cResult[5] === stateFromStores) {
            if (cResult[6] === conjureSettingsGuildId) {
              if (cResult[7] === input) {
                if (cResult[8] === tmp11) {
                  if (cResult[9] === onChange) {
                    if (cResult[10] === question.channel_filter) {
                      if (cResult[11] === question.question) {
                        if (cResult[12] === value) {
                          let tmp12 = cResult[13];
                        }
                        if (cResult[14] === input) {
                          if (cResult[15] === tmp11) {
                            if (cResult[16] === value) {
                              if (cResult[18] === disabled) {
                                if (cResult[19] === tmp12) {
                                  if (cResult[20] === tmp13) {
                                    let tmp16 = cResult[21];
                                  }
                                  return tmp16;
                                }
                              }
                              const obj3 = { hasIcons: false, children: null };
                              let obj4 = { label: cResult[17], arrow: true, disabled, onPress: tmp12 };
                              obj3.children = jsx(tmp(onChange[13]).TableRow, { label: cResult[17], arrow: true, disabled, onPress: tmp12 });
                              const tmp18 = jsx(tmp(onChange[12]).TableRowGroup, { hasIcons: false, children: null });
                              cResult[18] = disabled;
                              cResult[19] = tmp12;
                              cResult[20] = cResult[17];
                              cResult[21] = tmp18;
                              tmp16 = tmp18;
                            }
                          }
                        }
                        if (value.length > 0) {
                          const mapped = value.map((name) => name.name);
                          let joined = mapped.join(", ");
                        } else {
                          joined = tmp(onChange[11]).clarificationPickerPlaceholder(input, tmp11);
                          const tmpResult2 = tmp(onChange[11]);
                        }
                        cResult[14] = input;
                        cResult[15] = tmp11;
                        cResult[16] = value;
                        cResult[17] = joined;
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
                  if ("channel" === input) {
                    if (!closure_6) {
                      if (null != stateFromStores) {
                        const result = ConjureUtils.conjureSettingChannels(tmp2, question.channel_filter);
                        const obj4 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
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
                        obj4.noChannelOptionLabel = intl.string(_modDef3820["jtBVV+"]);
                        obj4.onSelect = function onSelect(id) {
                          closure_0 = id;
                          if (null == id) {
                            let items = [];
                          } else {
                            const obj = question(onChange[11]);
                            const items1 = [id.id];
                            items = obj.clarificationEntities(input, items1, () => question(5565).computeChannelName(closure_0, closure_2_6, stateFromStores), closure_1_1);
                          }
                          return dependencyMap(items, conjureSettingsGuildId);
                        };
                        obj.content = jsx(ChannelPickerActionSheetDefault, { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null });
                        obj.key = ConjureClarificationPickerSheet;
                        obj6.showActionSheet(obj);
                      }
                    }
                  }
                  const obj8 = { guildId: conjureSettingsGuildId, type: input, channelFilter: null, title: null, maxPicks: null, selected: null, onSubmit: null };
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
                    return dependencyMap(question(onChange[11]).clarificationEntities(input, arr.map((id) => id.id), (arg0) => {
                      closure_0 = arg0;
                      const found = closure_0.find((id) => id.id === closure_0);
                      let label;
                      if (found != null) {
                        label = found.label;
                      }
                      return label;
                    }, closure_1_1), conjureSettingsGuildId);
                  };
                  obj12.content = jsx(ConjureGuildPickerSheetDefault, { guildId: conjureSettingsGuildId, type: input, channelFilter: null, title: null, maxPicks: null, selected: null, onSubmit: null });
                  obj12.key = ConjureClarificationPickerSheet;
                  obj2.showActionSheet(obj12);
                }
              }
            }
          }
          cResult[5] = stateFromStores;
          cResult[6] = conjureSettingsGuildId;
          cResult[7] = input;
          cResult[8] = true === question.multi_select;
          cResult[9] = onChange;
          cResult[10] = question.channel_filter;
          cResult[11] = question.question;
          cResult[12] = value;
          cResult[13] = openSheet;
          tmp12 = openSheet;
        }
      }
    }
    return fallback;
  }
  const fn = function f() {
    let channels = null;
    if (null != conjureSettingsGuildId) {
      channels = null;
      if ("channel" === input) {
        channels = GuildChannelStore.getChannels(tmp);
      }
    }
    return channels;
  };
  let items1 = [conjureSettingsGuildId, input];
  cResult[1] = conjureSettingsGuildId;
  cResult[2] = input;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  let obj2 = question(onChange[14]);
}) : (function GuildEntityPicker(question) {
  question = question.question;
  value = question.value;
  importDefault = value;
  const onChange = question.onChange;
  closure_6 = undefined;
  ({ projectId, disabled, fallback } = question);
  const conjureSettingsGuildId = question(onChange[14]).useConjureSettingsGuildId(projectId, true);
  const input = question.input;
  let obj = question(onChange[14]);
  let items = [conjureSettingsGuildId];
  let items1 = [conjureSettingsGuildId, input];
  const stateFromStores = question(onChange[15]).useStateFromStores(items, () => {
    let channels = null;
    if (null != conjureSettingsGuildId) {
      channels = null;
      if ("channel" === input) {
        channels = GuildChannelStore.getChannels(tmp);
      }
    }
    return channels;
  }, items1);
  if (null != conjureSettingsGuildId) {
    if (null != input) {
      if ("project" !== input) {
        closure_6 = tmp5;
        if (value.length > 0) {
          const mapped = value.map((name) => name.name);
          let joined = mapped.join(", ");
        } else {
          joined = tmp(tmp2[11]).clarificationPickerPlaceholder(input, tmp5);
          const tmpResult = tmp(tmp2[11]);
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
                        if ("channel" === input) {
                          if (!closure_6) {
                            if (null != stateFromStores) {
                              const result = ConjureUtils.conjureSettingChannels(tmp2, question.channel_filter);
                              const obj4 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
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
                              obj4.noChannelOptionLabel = intl.string(_modDef3820["jtBVV+"]);
                              obj4.onSelect = function onSelect(id) {
                                closure_0 = id;
                                if (null == id) {
                                  let items = [];
                                } else {
                                  const obj = question(onChange[11]);
                                  const items1 = [id.id];
                                  items = obj.clarificationEntities(input, items1, () => question(5565).computeChannelName(closure_0, closure_2_6, stateFromStores), closure_1_1);
                                }
                                return dependencyMap(items, conjureSettingsGuildId);
                              };
                              obj.content = jsx(ChannelPickerActionSheetDefault, { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null });
                              obj.key = ConjureClarificationPickerSheet;
                              obj6.showActionSheet(obj);
                            }
                          }
                        }
                        const obj8 = { guildId: conjureSettingsGuildId, type: input, channelFilter: null, title: null, maxPicks: null, selected: null, onSubmit: null };
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
                          return dependencyMap(question(onChange[11]).clarificationEntities(input, arr.map((id) => id.id), (arg0) => {
                            closure_0 = arg0;
                            const found = closure_0.find((id) => id.id === closure_0);
                            let label;
                            if (found != null) {
                              label = found.label;
                            }
                            return label;
                          }, closure_1_1), conjureSettingsGuildId);
                        };
                        obj12.content = jsx(ConjureGuildPickerSheetDefault, { guildId: conjureSettingsGuildId, type: input, channelFilter: null, title: null, maxPicks: null, selected: null, onSubmit: null });
                        obj12.key = ConjureClarificationPickerSheet;
                        obj2.showActionSheet(obj12);
                      }
                    }
                  }
                }
        };
        obj3.children = jsx(tmp(tmp2[13]).TableRow, {
          label: joined,
          arrow: true,
          disabled,
          onPress: function openSheet() {
                  if (null != conjureSettingsGuildId) {
                    if (null != input) {
                      if ("project" !== input) {
                        if ("channel" === input) {
                          if (!closure_6) {
                            if (null != stateFromStores) {
                              const result = ConjureUtils.conjureSettingChannels(tmp2, question.channel_filter);
                              const obj4 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
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
                              obj4.noChannelOptionLabel = intl.string(_modDef3820["jtBVV+"]);
                              obj4.onSelect = function onSelect(id) {
                                closure_0 = id;
                                if (null == id) {
                                  let items = [];
                                } else {
                                  const obj = question(onChange[11]);
                                  const items1 = [id.id];
                                  items = obj.clarificationEntities(input, items1, () => question(5565).computeChannelName(closure_0, closure_2_6, stateFromStores), closure_1_1);
                                }
                                return dependencyMap(items, conjureSettingsGuildId);
                              };
                              obj.content = jsx(ChannelPickerActionSheetDefault, { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null });
                              obj.key = ConjureClarificationPickerSheet;
                              obj6.showActionSheet(obj);
                            }
                          }
                        }
                        const obj8 = { guildId: conjureSettingsGuildId, type: input, channelFilter: null, title: null, maxPicks: null, selected: null, onSubmit: null };
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
                          return dependencyMap(question(onChange[11]).clarificationEntities(input, arr.map((id) => id.id), (arg0) => {
                            closure_0 = arg0;
                            const found = closure_0.find((id) => id.id === closure_0);
                            let label;
                            if (found != null) {
                              label = found.label;
                            }
                            return label;
                          }, closure_1_1), conjureSettingsGuildId);
                        };
                        obj12.content = jsx(ConjureGuildPickerSheetDefault, { guildId: conjureSettingsGuildId, type: input, channelFilter: null, title: null, maxPicks: null, selected: null, onSubmit: null });
                        obj12.key = ConjureClarificationPickerSheet;
                        obj2.showActionSheet(obj12);
                      }
                    }
                  }
                }
        });
        return jsx(tmp(tmp2[12]).TableRowGroup, { hasIcons: false, children: null });
      }
    }
  }
  return fallback;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationEntityPicker(question) {
  const cResult = c.c(2);
  if (cResult[0] !== question) {
    if ("project" === question.question.input) {
      const obj2 = {};
      const merged = Object.assign(question);
      let tmp7 = <closure_9 />;
    } else {
      const obj3 = {};
      const merged1 = Object.assign(question);
      tmp7 = <closure_10 />;
    }
    cResult[0] = question;
    cResult[1] = tmp7;
  } else {
    return cResult[1];
  }
}) : (function ConjureClarificationEntityPicker(question) {
  if ("project" === question.question.input) {
    const obj2 = {};
    const merged = Object.assign(question);
    let tmp6 = <closure_9 />;
  } else {
    const obj = {};
    const merged1 = Object.assign(question);
    tmp6 = <closure_10 />;
  }
  return tmp6;
});