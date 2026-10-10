// === Module 17248: ConjureClarificationEntityPicker ===

// Module 17248 (ConjureClarificationEntityPicker)
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5056 */;
import ConjureUtils from "ConjureUtils" /* 6945 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12179 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 17072 */;
import ConjureClarification from "ConjureClarification" /* 17241 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const jsx = fn(21).jsx;
const ConjureClarificationPickerSheet = "ConjureClarificationPickerSheet";
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationEntityPicker(question) {
  const cResult = question(onChange[7]).c(22);
  question = question.question;
  value = question.value;
  importDefault = value;
  ({ disabled, onChange } = question);
  ({ projectId, fallback } = question);
  let obj = question(onChange[7]);
  const conjureSettingsGuildId = question(onChange[8]).useConjureSettingsGuildId(projectId, true);
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
    const stateFromStores = tmp(onChange[9]).useStateFromStores(first, tmp7, tmp8);
    if (null != conjureSettingsGuildId) {
      if (null != input) {
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
                            obj3.children = jsx(tmp(onChange[19]).TableRow, { label: cResult[17], arrow: true, disabled, onPress: tmp12 });
                            const tmp18 = jsx(tmp(onChange[18]).TableRowGroup, { hasIcons: false, children: null });
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
                        joined = tmp(onChange[15]).clarificationPickerPlaceholder(input, tmp11);
                        const tmpResult2 = tmp(onChange[15]);
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
                    obj4.noChannelOptionLabel = intl.string(_modDef3849["jtBVV+"]);
                    obj4.onSelect = function onSelect(id) {
                      closure_0 = id;
                      if (null == id) {
                        let items = [];
                      } else {
                        const obj = question(onChange[15]);
                        const items1 = [id.id];
                        items = obj.clarificationEntities(input, items1, () => question(5421).computeChannelName(closure_0, closure_2_6, stateFromStores), closure_1_1);
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
                return dependencyMap(question(onChange[15]).clarificationEntities(input, arr.map((id) => id.id), (arg0) => {
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
  let obj2 = question(onChange[8]);
}) : (function ConjureClarificationEntityPicker(question) {
  question = question.question;
  value = question.value;
  importDefault = value;
  const onChange = question.onChange;
  closure_6 = undefined;
  ({ projectId, disabled, fallback } = question);
  const conjureSettingsGuildId = question(onChange[8]).useConjureSettingsGuildId(projectId, true);
  const input = question.input;
  let obj = question(onChange[8]);
  let items = [conjureSettingsGuildId];
  let items1 = [conjureSettingsGuildId, input];
  const stateFromStores = question(onChange[9]).useStateFromStores(items, () => {
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
      closure_6 = tmp5;
      if (value.length > 0) {
        const mapped = value.map((name) => name.name);
        let joined = mapped.join(", ");
      } else {
        joined = tmp(tmp2[15]).clarificationPickerPlaceholder(input, tmp5);
        const tmpResult = tmp(tmp2[15]);
      }
      const obj3 = { hasIcons: false, children: null };
      let obj4 = {
        label: joined,
        arrow: true,
        disabled,
        onPress: function openSheet() {
              if (null != conjureSettingsGuildId) {
                if (null != input) {
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
                        obj4.noChannelOptionLabel = intl.string(_modDef3849["jtBVV+"]);
                        obj4.onSelect = function onSelect(id) {
                          closure_0 = id;
                          if (null == id) {
                            let items = [];
                          } else {
                            const obj = question(onChange[15]);
                            const items1 = [id.id];
                            items = obj.clarificationEntities(input, items1, () => question(5421).computeChannelName(closure_0, closure_2_6, stateFromStores), closure_1_1);
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
                    return dependencyMap(question(onChange[15]).clarificationEntities(input, arr.map((id) => id.id), (arg0) => {
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
      };
      obj3.children = jsx(tmp(tmp2[19]).TableRow, {
        label: joined,
        arrow: true,
        disabled,
        onPress: function openSheet() {
              if (null != conjureSettingsGuildId) {
                if (null != input) {
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
                        obj4.noChannelOptionLabel = intl.string(_modDef3849["jtBVV+"]);
                        obj4.onSelect = function onSelect(id) {
                          closure_0 = id;
                          if (null == id) {
                            let items = [];
                          } else {
                            const obj = question(onChange[15]);
                            const items1 = [id.id];
                            items = obj.clarificationEntities(input, items1, () => question(5421).computeChannelName(closure_0, closure_2_6, stateFromStores), closure_1_1);
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
                    return dependencyMap(question(onChange[15]).clarificationEntities(input, arr.map((id) => id.id), (arg0) => {
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
      });
      return jsx(tmp(tmp2[18]).TableRowGroup, { hasIcons: false, children: null });
    }
  }
  return fallback;
});