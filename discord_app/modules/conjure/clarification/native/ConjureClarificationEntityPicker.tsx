// discord_app/modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import ConjureGuildPickerSheetDefault from "../../guild_pickers/native/ConjureGuildPickerSheet.tsx";
import ConjureClarification from "../ConjureClarification.tsx";
import useConjureProjectPickerOptionsDefault from "../useConjureProjectPickerOptions.tsx";
import ConjureClarificationServerSheetDefault from "ConjureClarificationServerSheet.tsx";
import ConjureClarificationProjectSheetDefault from "ConjureClarificationProjectSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function ServerPicker(onChange) {
  ({ question: require, value } = onChange);
  importDefault = value;
  onChange = onChange.onChange;
  ({ disabled, fallback } = onChange);
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds(
    "ConjureClarificationEntityPicker",
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
}
function ProjectPicker(arg0) {
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
}
function GuildEntityPicker(value) {
  ({ projectId, question } = value);
  value = value.value;
  importDefault = value;
  ({ disabled, onChange } = value);
  closure_6 = undefined;
  const conjureSettingsGuildId = question(onChange[13]).useConjureSettingsGuildId(projectId, true);
  require("useConjureSafetyAlertsChannelPick")({
    projectId,
    guildId: conjureSettingsGuildId,
    question,
    value,
    disabled,
    onChange,
  });
  const input = question.input;
  let obj = question(onChange[13]);
  let items = [conjureSettingsGuildId];
  const items1 = [conjureSettingsGuildId, input];
  const stateFromStores = question(onChange[15]).useStateFromStores(
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
            joined = tmp(tmp2[7]).clarificationPickerPlaceholder(input, tmp6);
            const tmpResult = tmp(tmp2[7]);
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
                            obj4.noChannelOptionLabel = intl.string(_modDef3868["jtBVV+"]);
                            obj4.onSelect = function onSelect(stateFromStores1) {
                              if (null == stateFromStores1) {
                                let items = [];
                              } else {
                                items = question(onChange[7]).clarificationChannelEntities(
                                  stateFromStores1,
                                  closure_1_1,
                                );
                                const obj = question(onChange[7]);
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
                          question(onChange[7]).clarificationEntities(
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
          obj3.children = stateFromStores(tmp(tmp2[6]).TableRow, obj4);
          return stateFromStores(tmp(tmp2[5]).TableRowGroup, obj3);
        }
      }
    }
  }
  return value.fallback;
}
const jsx = fn(21).jsx;
const ConjureClarificationPickerSheet = "ConjureClarificationPickerSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx");

export default function ConjureClarificationEntityPicker(question) {
  const input = question.question.input;
  if ("project" === input) {
    const obj2 = {};
    const merged = Object.assign(question);
    return <ProjectPicker />;
  } else if ("server" === input) {
    const obj3 = {};
    const merged1 = Object.assign(question);
    return <ServerPicker />;
  } else {
    const obj = {};
    const merged2 = Object.assign(question);
    return <GuildEntityPicker key={question.question.id} />;
  }
}
