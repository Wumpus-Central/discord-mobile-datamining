// === Module 11377: MentionableSelectComponentActionSheet ===

// Module 11377 (MentionableSelectComponentActionSheet)
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8257 */;
import MentionableSelectOptionParts from "MentionableSelectOptionParts" /* 11379 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MentionableSelectComponentActionSheet(selectionActionComponent) {
  const cResult = selectionActionComponent(guildId[4]).c(30);
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  ({ labelComponent, channelId } = selectionActionComponent);
  guildId = selectionActionComponent.guildId;
  ({ containerId, onSubmit, allowEmpty } = selectionActionComponent);
  if (cResult[0] !== guildId) {
    guild = GuildStore.getGuild(guildId);
    cResult[0] = guildId;
    cResult[1] = guild;
    let tmp4 = guild;
  } else {
    tmp4 = cResult[1];
  }
  closure_3 = tmp4;
  let id;
  const obj = selectionActionComponent(guildId[4]);
  if (tmp4 != null) {
    id = tmp4.id;
  }
  const tmp8Result = channelId(guildId[5])(id, selectionActionComponent(guildId[6]).MIN_REREQUEST_TIME);
  GuildStore = tmp8Result;
  if (cResult[2] === channelId) {
    if (cResult[3] === selectionActionComponent) {
      let tmp11 = cResult[4];
    }
    if (cResult[5] === containerId) {
      if (cResult[6] === guildId) {
        if (cResult[7] === onSubmit) {
          if (cResult[8] === tmp11) {
            if (cResult[9] === selectionActionComponent) {
              let tmp12 = cResult[10];
            }
            ({ options, selectedOptions, isSelected, onPressOptionItem, submitSelection, setQuery } = channelId(tmp2[7])(tmp12));
            if (cResult[11] === tmp4) {
              if (cResult[12] === guildId) {
                let tmp14 = cResult[13];
              }
              if (cResult[14] === tmp4) {
                if (cResult[17] === allowEmpty) {
                  if (cResult[18] === channelId) {
                    if (cResult[19] === isSelected) {
                      if (cResult[20] === labelComponent) {
                        if (cResult[21] === onPressOptionItem) {
                          if (cResult[22] === options) {
                            if (cResult[23] === tmp14) {
                              if (cResult[24] === tmp15) {
                                if (cResult[25] === selectedOptions) {
                                  if (cResult[26] === selectionActionComponent) {
                                    if (cResult[27] === setQuery) {
                                      if (cResult[28] === submitSelection) {
                                        let tmp16 = cResult[29];
                                      }
                                      return tmp16;
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
                const obj2 = { onPressOptionItem, renderIcon: tmp14, renderDescription: tmp(tmp2[8]).renderMentionableOptionDescription, renderOptionSuffix: tmp15, selectionActionComponent: null, labelComponent: null, options: null, selectedCount: null, selectedOptions: null, isSelected: null, submitSelection: null, onQueryChange: null, itemAccessibilityLabel: null, channelId: null, allowEmpty: null };
                class E {
                  constructor(arg0) {
                    obj = closure_0(closure_2[8]);
                    return obj.renderMentionableOptionIcon(selectionActionComponent, closure_3, guildId);
                  }
                }
                obj2.labelComponent = labelComponent;
                obj2.options = options;
                obj2.selectedCount = selectedOptions.length;
                obj2.selectedOptions = selectedOptions;
                obj2.isSelected = isSelected;
                obj2.submitSelection = submitSelection;
                obj2.onQueryChange = setQuery;
                obj2.itemAccessibilityLabel = tmp(tmp2[8]).mentionableOptionAccessibilityLabel;
                obj2.channelId = channelId;
                obj2.allowEmpty = allowEmpty;
                const tmp19 = jsx(channelId(tmp2[9]), { onPressOptionItem, renderIcon: tmp14, renderDescription: tmp(tmp2[8]).renderMentionableOptionDescription, renderOptionSuffix: tmp15, selectionActionComponent: null, labelComponent: null, options: null, selectedCount: null, selectedOptions: null, isSelected: null, submitSelection: null, onQueryChange: null, itemAccessibilityLabel: null, channelId: null, allowEmpty: null });
                cResult[17] = allowEmpty;
                cResult[18] = channelId;
                cResult[19] = isSelected;
                cResult[20] = labelComponent;
                cResult[21] = onPressOptionItem;
                cResult[22] = options;
                cResult[23] = tmp14;
                cResult[24] = tmp15;
                cResult[25] = selectedOptions;
                cResult[26] = selectionActionComponent;
                cResult[27] = setQuery;
                cResult[28] = submitSelection;
                cResult[29] = tmp19;
                tmp16 = tmp19;
                const tmp7Result = channelId(tmp2[9]);
              }
              function renderOptionSuffix(type) {
                return MentionableSelectOptionParts.renderMentionableOptionSuffix(type, closure_3, closure_4);
              }
              cResult[14] = tmp4;
              cResult[15] = tmp8Result;
              cResult[16] = renderOptionSuffix;
              class E {
                constructor(arg0) {
                  obj = closure_0(closure_2[8]);
                  return obj.renderMentionableOptionIcon(selectionActionComponent, closure_3, guildId);
                }
              }
            }
            class E {
              constructor(arg0) {
                obj = closure_0(closure_2[8]);
                return obj.renderMentionableOptionIcon(selectionActionComponent, closure_3, guildId);
              }
            }
            cResult[11] = tmp4;
            cResult[12] = guildId;
            cResult[13] = E;
            tmp14 = E;
            const tmp13 = channelId(tmp2[7])(tmp12);
          }
        }
      }
    }
    const obj3 = { selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: tmp11, onSubmit };
    cResult[6] = guildId;
    cResult[7] = onSubmit;
    cResult[8] = tmp11;
    cResult[9] = selectionActionComponent;
    cResult[10] = obj3;
    tmp12 = obj3;
  }
  const fn = function f(query) {
    return SearchableSelectActionComponentUtils.queryMentionables(selectionActionComponent.type, query, channelId);
  };
  cResult[2] = channelId;
  cResult[3] = selectionActionComponent;
  cResult[4] = fn;
  tmp11 = fn;
  const tmp8 = channelId(guildId[5]);
}) : (function MentionableSelectComponentActionSheet(selectionActionComponent) {
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  GuildStore = undefined;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  guild = GuildStore.getGuild(guildId);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  GuildStore = channelId(guildId[5])(id, selectionActionComponent(tmp3[6]).MIN_REREQUEST_TIME);
  const items = [selectionActionComponent, channelId];
  const callback = guild.useCallback((query) => SearchableSelectActionComponentUtils.queryMentionables(selectionActionComponent.type, query, channelId), items);
  const tmp7 = channelId(guildId[7])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  const selectedOptions = tmp7.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
  const callback1 = guild.useCallback((type) => MentionableSelectOptionParts.renderMentionableOptionIcon(type, guild, guildId), items1);
  const obj = { onPressOptionItem, renderIcon: callback1, renderDescription: null, renderOptionSuffix: null, selectionActionComponent: null, labelComponent: null, options: null, selectedCount: null, selectedOptions: null, isSelected: null, submitSelection: null, onQueryChange: null, itemAccessibilityLabel: null, channelId: null, allowEmpty: null };
  const tmp4 = channelId(guildId[5]);
  obj.renderDescription = selectionActionComponent(guildId[8]).renderMentionableOptionDescription;
  obj.renderOptionSuffix = function renderOptionSuffix(type) {
    return MentionableSelectOptionParts.renderMentionableOptionSuffix(type, guild, closure_4);
  };
  obj.selectionActionComponent = selectionActionComponent;
  obj.labelComponent = labelComponent;
  obj.options = options;
  obj.selectedCount = selectedOptions.length;
  obj.selectedOptions = selectedOptions;
  obj.isSelected = isSelected;
  obj.submitSelection = submitSelection;
  obj.onQueryChange = setQuery;
  obj.itemAccessibilityLabel = selectionActionComponent(guildId[8]).mentionableOptionAccessibilityLabel;
  obj.channelId = channelId;
  obj.allowEmpty = allowEmpty;
  return jsx(channelId(guildId[9]), { onPressOptionItem, renderIcon: callback1, renderDescription: null, renderOptionSuffix: null, selectionActionComponent: null, labelComponent: null, options: null, selectedCount: null, selectedOptions: null, isSelected: null, submitSelection: null, onQueryChange: null, itemAccessibilityLabel: null, channelId: null, allowEmpty: null });
});