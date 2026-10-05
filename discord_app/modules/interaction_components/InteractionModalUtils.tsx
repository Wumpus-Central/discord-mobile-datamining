// === Module 17520: InteractionModalUtils ===

// Module 17520 (InteractionModalUtils)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Server from "Server" /* 1985 */;
import stageAttachmentFilesDefault from "stageAttachmentFiles" /* 7472 */;
import ComponentStateContext from "ComponentStateContext" /* 7795 */;
import getURLForApplicationDefault from "getURLForApplication" /* 8706 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8812 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7267 */;
import InteractionModalStore from "InteractionModalStore" /* 14162 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7796 */;

require = fn;
function validate(arr) {
  c0 = true;
  const item = arr.forEach((fn) => {
    if (!fn()) {
      c0 = false;
    }
  });
  return c0;
}
function getData(arg0, arr, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  return arr.map((type) => {
    type = type.type;
    if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
      let obj4 = { type: type.type, components: null };
      let components = type.components;
      closure_0 = closure_1_0;
      uploads = closure_1_1;
      obj4.components = components.map((type) => {
        type = type.type;
        if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
          let obj4 = { type: type.type, components: null };
          let components = type.components;
          closure_0 = closure_1_0;
          uploads = closure_1_1;
          obj4.components = components.map((type) => {
            type = type.type;
            if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
              let obj4 = { type: type.type, components: null };
              let components = type.components;
              closure_0 = closure_1_0;
              uploads = closure_1_1;
              obj4.components = components.map((type) => {
                type = type.type;
                if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                  let obj4 = { type: type.type, components: null };
                  let components = type.components;
                  closure_0 = closure_1_0;
                  uploads = closure_1_1;
                  obj4.components = components.map(() => { ... });
                  return obj4;
                } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                  let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                  let obj5 = { type: null, custom_id: null, value: null };
                  ({ type: obj9.type, customId: obj9.custom_id } = type);
                  let type1;
                  if (iter3 != null) {
                    type1 = iter3.type;
                  }
                  let value = null;
                  if (type1 === type.type) {
                    value = iter3.value;
                  }
                  obj5.value = value;
                  return obj5;
                } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                  let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                  let type2;
                  if (interactionComponentState != null) {
                    type2 = interactionComponentState.type;
                  }
                  let uploadIds = null;
                  if (type2 === type.type) {
                    uploadIds = interactionComponentState.uploadIds;
                  }
                  let obj10 = { type: null, custom_id: null, values: null };
                  ({ type: obj8.type, customId: obj8.custom_id } = type);
                  let mapped;
                  if (uploadIds != null) {
                    mapped = uploadIds.map(() => { ... });
                  }
                  if (mapped == null) {
                    mapped = null;
                  }
                  obj10.values = mapped;
                  return obj10;
                } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                  let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                  let obj19 = { type: null, custom_id: null, values: null };
                  ({ type: obj7.type, customId: obj7.custom_id } = type);
                  let type3;
                  if (interactionComponentState1 != null) {
                    type3 = interactionComponentState1.type;
                  }
                  let values = null;
                  if (type3 === type.type) {
                    values = interactionComponentState1.values;
                  }
                  obj19.values = values;
                  return obj19;
                } else {
                  if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                    if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                      if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                        if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                          if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                            let obj20 = { type: type.type };
                            return obj20;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                            let obj21 = { type: type.type, component: null };
                            let items = [type.component];
                            closure_0 = closure_1_0;
                            uploads = closure_1_1;
                            obj21.component = items.map(() => { ... })[0];
                            return obj21;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                            let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj22 = { type: null, custom_id: null, value: null };
                            ({ type: obj3.type, customId: obj3.custom_id } = type);
                            let type4;
                            if (iter2 != null) {
                              type4 = iter2.type;
                            }
                            let value2 = null;
                            if (type4 === type.type) {
                              value2 = iter2.value;
                            }
                            obj22.value = value2;
                            return obj22;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                            let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj23 = { type: null, custom_id: null, values: null };
                            ({ type: obj2.type, customId: obj2.custom_id } = type);
                            let type5;
                            if (interactionComponentState2 != null) {
                              type5 = interactionComponentState2.type;
                            }
                            let values2 = null;
                            if (type5 === type.type) {
                              values2 = interactionComponentState2.values;
                            }
                            obj23.values = values2;
                            return obj23;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                            let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj = { type: null, custom_id: null, value: null };
                            ({ type: obj.type, customId: obj.custom_id } = type);
                            let type6;
                            if (iter != null) {
                              type6 = iter.type;
                            }
                            obj.value = type6 === type.type && iter.value;
                            return obj;
                          } else {
                            closure_2_1(closure_2_2[25])(false, "unreachable");
                          }
                        }
                      }
                    }
                  }
                  let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                  let obj24 = { type: null, custom_id: null, values: null };
                  ({ type: obj6.type, customId: obj6.custom_id } = type);
                  let type7;
                  if (interactionComponentState3 != null) {
                    type7 = interactionComponentState3.type;
                  }
                  let mapped1 = null;
                  if (type7 === type.type) {
                    let selectedOptions = interactionComponentState3.selectedOptions;
                    mapped1 = selectedOptions.map(() => { ... });
                  }
                  obj24.values = mapped1;
                  return obj24;
                }
              });
              return obj4;
            } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
              let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
              let obj5 = { type: null, custom_id: null, value: null };
              ({ type: obj9.type, customId: obj9.custom_id } = type);
              let type1;
              if (iter3 != null) {
                type1 = iter3.type;
              }
              let value = null;
              if (type1 === type.type) {
                value = iter3.value;
              }
              obj5.value = value;
              return obj5;
            } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
              let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
              let type2;
              if (interactionComponentState != null) {
                type2 = interactionComponentState.type;
              }
              let uploadIds = null;
              if (type2 === type.type) {
                uploadIds = interactionComponentState.uploadIds;
              }
              let obj10 = { type: null, custom_id: null, values: null };
              ({ type: obj8.type, customId: obj8.custom_id } = type);
              let mapped;
              if (uploadIds != null) {
                mapped = uploadIds.map((item) => {
                  closure_0 = item;
                  uploads = uploads.uploads;
                  return uploads.findIndex(() => { ... });
                });
              }
              if (mapped == null) {
                mapped = null;
              }
              obj10.values = mapped;
              return obj10;
            } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
              let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
              let obj19 = { type: null, custom_id: null, values: null };
              ({ type: obj7.type, customId: obj7.custom_id } = type);
              let type3;
              if (interactionComponentState1 != null) {
                type3 = interactionComponentState1.type;
              }
              let values = null;
              if (type3 === type.type) {
                values = interactionComponentState1.values;
              }
              obj19.values = values;
              return obj19;
            } else {
              if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                  if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                    if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                      if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                        let obj20 = { type: type.type };
                        return obj20;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                        let obj21 = { type: type.type, component: null };
                        let items = [type.component];
                        closure_0 = closure_1_0;
                        uploads = closure_1_1;
                        obj21.component = items.map((type) => {
                          type = type.type;
                          if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                            let obj4 = { type: type.type, components: null };
                            let components = type.components;
                            closure_0 = closure_1_0;
                            uploads = closure_1_1;
                            obj4.components = components.map(() => { ... });
                            return obj4;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj5 = { type: null, custom_id: null, value: null };
                            ({ type: obj9.type, customId: obj9.custom_id } = type);
                            let type1;
                            if (iter3 != null) {
                              type1 = iter3.type;
                            }
                            let value = null;
                            if (type1 === type.type) {
                              value = iter3.value;
                            }
                            obj5.value = value;
                            return obj5;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let type2;
                            if (interactionComponentState != null) {
                              type2 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type2 === type.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj10 = { type: null, custom_id: null, values: null };
                            ({ type: obj8.type, customId: obj8.custom_id } = type);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj10.values = mapped;
                            return obj10;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj19 = { type: null, custom_id: null, values: null };
                            ({ type: obj7.type, customId: obj7.custom_id } = type);
                            let type3;
                            if (interactionComponentState1 != null) {
                              type3 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type3 === type.type) {
                              values = interactionComponentState1.values;
                            }
                            obj19.values = values;
                            return obj19;
                          } else {
                            if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                              if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj20 = { type: type.type };
                                      return obj20;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                      let obj21 = { type: type.type, component: null };
                                      let items = [type.component];
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj21.component = items.map(() => { ... })[0];
                                      return obj21;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj22 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3.type, customId: obj3.custom_id } = type);
                                      let type4;
                                      if (iter2 != null) {
                                        type4 = iter2.type;
                                      }
                                      let value2 = null;
                                      if (type4 === type.type) {
                                        value2 = iter2.value;
                                      }
                                      obj22.value = value2;
                                      return obj22;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj23 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2.type, customId: obj2.custom_id } = type);
                                      let type5;
                                      if (interactionComponentState2 != null) {
                                        type5 = interactionComponentState2.type;
                                      }
                                      let values2 = null;
                                      if (type5 === type.type) {
                                        values2 = interactionComponentState2.values;
                                      }
                                      obj23.values = values2;
                                      return obj23;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj.type, customId: obj.custom_id } = type);
                                      let type6;
                                      if (iter != null) {
                                        type6 = iter.type;
                                      }
                                      obj.value = type6 === type.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_2_1(closure_2_2[25])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj24 = { type: null, custom_id: null, values: null };
                            ({ type: obj6.type, customId: obj6.custom_id } = type);
                            let type7;
                            if (interactionComponentState3 != null) {
                              type7 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type7 === type.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj24.values = mapped1;
                            return obj24;
                          }
                        })[0];
                        return obj21;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                        let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj22 = { type: null, custom_id: null, value: null };
                        ({ type: obj3.type, customId: obj3.custom_id } = type);
                        let type4;
                        if (iter2 != null) {
                          type4 = iter2.type;
                        }
                        let value2 = null;
                        if (type4 === type.type) {
                          value2 = iter2.value;
                        }
                        obj22.value = value2;
                        return obj22;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                        let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj23 = { type: null, custom_id: null, values: null };
                        ({ type: obj2.type, customId: obj2.custom_id } = type);
                        let type5;
                        if (interactionComponentState2 != null) {
                          type5 = interactionComponentState2.type;
                        }
                        let values2 = null;
                        if (type5 === type.type) {
                          values2 = interactionComponentState2.values;
                        }
                        obj23.values = values2;
                        return obj23;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                        let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj = { type: null, custom_id: null, value: null };
                        ({ type: obj.type, customId: obj.custom_id } = type);
                        let type6;
                        if (iter != null) {
                          type6 = iter.type;
                        }
                        obj.value = type6 === type.type && iter.value;
                        return obj;
                      } else {
                        closure_2_1(closure_2_2[25])(false, "unreachable");
                      }
                    }
                  }
                }
              }
              let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
              let obj24 = { type: null, custom_id: null, values: null };
              ({ type: obj6.type, customId: obj6.custom_id } = type);
              let type7;
              if (interactionComponentState3 != null) {
                type7 = interactionComponentState3.type;
              }
              let mapped1 = null;
              if (type7 === type.type) {
                let selectedOptions = interactionComponentState3.selectedOptions;
                mapped1 = selectedOptions.map((value) => value.value);
              }
              obj24.values = mapped1;
              return obj24;
            }
          });
          return obj4;
        } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
          let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
          let obj5 = { type: null, custom_id: null, value: null };
          ({ type: obj9.type, customId: obj9.custom_id } = type);
          let type1;
          if (iter3 != null) {
            type1 = iter3.type;
          }
          let value = null;
          if (type1 === type.type) {
            value = iter3.value;
          }
          obj5.value = value;
          return obj5;
        } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
          let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
          let type2;
          if (interactionComponentState != null) {
            type2 = interactionComponentState.type;
          }
          let uploadIds = null;
          if (type2 === type.type) {
            uploadIds = interactionComponentState.uploadIds;
          }
          let obj10 = { type: null, custom_id: null, values: null };
          ({ type: obj8.type, customId: obj8.custom_id } = type);
          let mapped;
          if (uploadIds != null) {
            mapped = uploadIds.map((item) => {
              closure_0 = item;
              uploads = uploads.uploads;
              return uploads.findIndex((id) => id.id === closure_0);
            });
          }
          if (mapped == null) {
            mapped = null;
          }
          obj10.values = mapped;
          return obj10;
        } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
          let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
          let obj19 = { type: null, custom_id: null, values: null };
          ({ type: obj7.type, customId: obj7.custom_id } = type);
          let type3;
          if (interactionComponentState1 != null) {
            type3 = interactionComponentState1.type;
          }
          let values = null;
          if (type3 === type.type) {
            values = interactionComponentState1.values;
          }
          obj19.values = values;
          return obj19;
        } else {
          if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
            if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
              if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                  if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                    let obj20 = { type: type.type };
                    return obj20;
                  } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                    let obj21 = { type: type.type, component: null };
                    let items = [type.component];
                    closure_0 = closure_1_0;
                    uploads = closure_1_1;
                    obj21.component = items.map((type) => {
                      type = type.type;
                      if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                        let obj4 = { type: type.type, components: null };
                        let components = type.components;
                        closure_0 = closure_1_0;
                        uploads = closure_1_1;
                        obj4.components = components.map((type) => {
                          type = type.type;
                          if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                            let obj4 = { type: type.type, components: null };
                            let components = type.components;
                            closure_0 = closure_1_0;
                            uploads = closure_1_1;
                            obj4.components = components.map(() => { ... });
                            return obj4;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj5 = { type: null, custom_id: null, value: null };
                            ({ type: obj9.type, customId: obj9.custom_id } = type);
                            let type1;
                            if (iter3 != null) {
                              type1 = iter3.type;
                            }
                            let value = null;
                            if (type1 === type.type) {
                              value = iter3.value;
                            }
                            obj5.value = value;
                            return obj5;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let type2;
                            if (interactionComponentState != null) {
                              type2 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type2 === type.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj10 = { type: null, custom_id: null, values: null };
                            ({ type: obj8.type, customId: obj8.custom_id } = type);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj10.values = mapped;
                            return obj10;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj19 = { type: null, custom_id: null, values: null };
                            ({ type: obj7.type, customId: obj7.custom_id } = type);
                            let type3;
                            if (interactionComponentState1 != null) {
                              type3 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type3 === type.type) {
                              values = interactionComponentState1.values;
                            }
                            obj19.values = values;
                            return obj19;
                          } else {
                            if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                              if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj20 = { type: type.type };
                                      return obj20;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                      let obj21 = { type: type.type, component: null };
                                      let items = [type.component];
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj21.component = items.map(() => { ... })[0];
                                      return obj21;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj22 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3.type, customId: obj3.custom_id } = type);
                                      let type4;
                                      if (iter2 != null) {
                                        type4 = iter2.type;
                                      }
                                      let value2 = null;
                                      if (type4 === type.type) {
                                        value2 = iter2.value;
                                      }
                                      obj22.value = value2;
                                      return obj22;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj23 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2.type, customId: obj2.custom_id } = type);
                                      let type5;
                                      if (interactionComponentState2 != null) {
                                        type5 = interactionComponentState2.type;
                                      }
                                      let values2 = null;
                                      if (type5 === type.type) {
                                        values2 = interactionComponentState2.values;
                                      }
                                      obj23.values = values2;
                                      return obj23;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj.type, customId: obj.custom_id } = type);
                                      let type6;
                                      if (iter != null) {
                                        type6 = iter.type;
                                      }
                                      obj.value = type6 === type.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_2_1(closure_2_2[25])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj24 = { type: null, custom_id: null, values: null };
                            ({ type: obj6.type, customId: obj6.custom_id } = type);
                            let type7;
                            if (interactionComponentState3 != null) {
                              type7 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type7 === type.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj24.values = mapped1;
                            return obj24;
                          }
                        });
                        return obj4;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                        let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj5 = { type: null, custom_id: null, value: null };
                        ({ type: obj9.type, customId: obj9.custom_id } = type);
                        let type1;
                        if (iter3 != null) {
                          type1 = iter3.type;
                        }
                        let value = null;
                        if (type1 === type.type) {
                          value = iter3.value;
                        }
                        obj5.value = value;
                        return obj5;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                        let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let type2;
                        if (interactionComponentState != null) {
                          type2 = interactionComponentState.type;
                        }
                        let uploadIds = null;
                        if (type2 === type.type) {
                          uploadIds = interactionComponentState.uploadIds;
                        }
                        let obj10 = { type: null, custom_id: null, values: null };
                        ({ type: obj8.type, customId: obj8.custom_id } = type);
                        let mapped;
                        if (uploadIds != null) {
                          mapped = uploadIds.map((item) => {
                            closure_0 = item;
                            uploads = uploads.uploads;
                            return uploads.findIndex(() => { ... });
                          });
                        }
                        if (mapped == null) {
                          mapped = null;
                        }
                        obj10.values = mapped;
                        return obj10;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                        let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj19 = { type: null, custom_id: null, values: null };
                        ({ type: obj7.type, customId: obj7.custom_id } = type);
                        let type3;
                        if (interactionComponentState1 != null) {
                          type3 = interactionComponentState1.type;
                        }
                        let values = null;
                        if (type3 === type.type) {
                          values = interactionComponentState1.values;
                        }
                        obj19.values = values;
                        return obj19;
                      } else {
                        if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                          if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                            if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                              if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                  let obj20 = { type: type.type };
                                  return obj20;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                  let obj21 = { type: type.type, component: null };
                                  let items = [type.component];
                                  closure_0 = closure_1_0;
                                  uploads = closure_1_1;
                                  obj21.component = items.map((type) => {
                                    type = type.type;
                                    if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                                      let obj4 = { type: type.type, components: null };
                                      let components = type.components;
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj4.components = components.map(() => { ... });
                                      return obj4;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj9.type, customId: obj9.custom_id } = type);
                                      let type1;
                                      if (iter3 != null) {
                                        type1 = iter3.type;
                                      }
                                      let value = null;
                                      if (type1 === type.type) {
                                        value = iter3.value;
                                      }
                                      obj5.value = value;
                                      return obj5;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let type2;
                                      if (interactionComponentState != null) {
                                        type2 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type2 === type.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj10 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8.type, customId: obj8.custom_id } = type);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj10.values = mapped;
                                      return obj10;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj19 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7.type, customId: obj7.custom_id } = type);
                                      let type3;
                                      if (interactionComponentState1 != null) {
                                        type3 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type3 === type.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj19.values = values;
                                      return obj19;
                                    } else {
                                      if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                                        if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj20 = { type: type.type };
                                                return obj20;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                                let obj21 = { type: type.type, component: null };
                                                let items = [type.component];
                                                closure_0 = closure_1_0;
                                                uploads = closure_1_1;
                                                obj21.component = items.map(() => { ... })[0];
                                                return obj21;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj22 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3.type, customId: obj3.custom_id } = type);
                                                let type4;
                                                if (iter2 != null) {
                                                  type4 = iter2.type;
                                                }
                                                let value2 = null;
                                                if (type4 === type.type) {
                                                  value2 = iter2.value;
                                                }
                                                obj22.value = value2;
                                                return obj22;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj23 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2.type, customId: obj2.custom_id } = type);
                                                let type5;
                                                if (interactionComponentState2 != null) {
                                                  type5 = interactionComponentState2.type;
                                                }
                                                let values2 = null;
                                                if (type5 === type.type) {
                                                  values2 = interactionComponentState2.values;
                                                }
                                                obj23.values = values2;
                                                return obj23;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj.type, customId: obj.custom_id } = type);
                                                let type6;
                                                if (iter != null) {
                                                  type6 = iter.type;
                                                }
                                                obj.value = type6 === type.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_2_1(closure_2_2[25])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj24 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6.type, customId: obj6.custom_id } = type);
                                      let type7;
                                      if (interactionComponentState3 != null) {
                                        type7 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type7 === type.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj24.values = mapped1;
                                      return obj24;
                                    }
                                  })[0];
                                  return obj21;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                  let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj22 = { type: null, custom_id: null, value: null };
                                  ({ type: obj3.type, customId: obj3.custom_id } = type);
                                  let type4;
                                  if (iter2 != null) {
                                    type4 = iter2.type;
                                  }
                                  let value2 = null;
                                  if (type4 === type.type) {
                                    value2 = iter2.value;
                                  }
                                  obj22.value = value2;
                                  return obj22;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                  let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj23 = { type: null, custom_id: null, values: null };
                                  ({ type: obj2.type, customId: obj2.custom_id } = type);
                                  let type5;
                                  if (interactionComponentState2 != null) {
                                    type5 = interactionComponentState2.type;
                                  }
                                  let values2 = null;
                                  if (type5 === type.type) {
                                    values2 = interactionComponentState2.values;
                                  }
                                  obj23.values = values2;
                                  return obj23;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                  let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj = { type: null, custom_id: null, value: null };
                                  ({ type: obj.type, customId: obj.custom_id } = type);
                                  let type6;
                                  if (iter != null) {
                                    type6 = iter.type;
                                  }
                                  obj.value = type6 === type.type && iter.value;
                                  return obj;
                                } else {
                                  closure_2_1(closure_2_2[25])(false, "unreachable");
                                }
                              }
                            }
                          }
                        }
                        let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj24 = { type: null, custom_id: null, values: null };
                        ({ type: obj6.type, customId: obj6.custom_id } = type);
                        let type7;
                        if (interactionComponentState3 != null) {
                          type7 = interactionComponentState3.type;
                        }
                        let mapped1 = null;
                        if (type7 === type.type) {
                          let selectedOptions = interactionComponentState3.selectedOptions;
                          mapped1 = selectedOptions.map((value) => value.value);
                        }
                        obj24.values = mapped1;
                        return obj24;
                      }
                    })[0];
                    return obj21;
                  } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                    let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                    let obj22 = { type: null, custom_id: null, value: null };
                    ({ type: obj3.type, customId: obj3.custom_id } = type);
                    let type4;
                    if (iter2 != null) {
                      type4 = iter2.type;
                    }
                    let value2 = null;
                    if (type4 === type.type) {
                      value2 = iter2.value;
                    }
                    obj22.value = value2;
                    return obj22;
                  } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                    let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                    let obj23 = { type: null, custom_id: null, values: null };
                    ({ type: obj2.type, customId: obj2.custom_id } = type);
                    let type5;
                    if (interactionComponentState2 != null) {
                      type5 = interactionComponentState2.type;
                    }
                    let values2 = null;
                    if (type5 === type.type) {
                      values2 = interactionComponentState2.values;
                    }
                    obj23.values = values2;
                    return obj23;
                  } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                    let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                    let obj = { type: null, custom_id: null, value: null };
                    ({ type: obj.type, customId: obj.custom_id } = type);
                    let type6;
                    if (iter != null) {
                      type6 = iter.type;
                    }
                    obj.value = type6 === type.type && iter.value;
                    return obj;
                  } else {
                    closure_2_1(closure_2_2[25])(false, "unreachable");
                  }
                }
              }
            }
          }
          let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
          let obj24 = { type: null, custom_id: null, values: null };
          ({ type: obj6.type, customId: obj6.custom_id } = type);
          let type7;
          if (interactionComponentState3 != null) {
            type7 = interactionComponentState3.type;
          }
          let mapped1 = null;
          if (type7 === type.type) {
            let selectedOptions = interactionComponentState3.selectedOptions;
            mapped1 = selectedOptions.map((value) => value.value);
          }
          obj24.values = mapped1;
          return obj24;
        }
      });
      return obj4;
    } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
      let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
      let obj5 = { type: null, custom_id: null, value: null };
      ({ type: obj9.type, customId: obj9.custom_id } = type);
      let type1;
      if (iter3 != null) {
        type1 = iter3.type;
      }
      let value = null;
      if (type1 === type.type) {
        value = iter3.value;
      }
      obj5.value = value;
      return obj5;
    } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
      let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
      let type2;
      if (interactionComponentState != null) {
        type2 = interactionComponentState.type;
      }
      let uploadIds = null;
      if (type2 === type.type) {
        uploadIds = interactionComponentState.uploadIds;
      }
      let obj10 = { type: null, custom_id: null, values: null };
      ({ type: obj8.type, customId: obj8.custom_id } = type);
      let mapped;
      if (uploadIds != null) {
        mapped = uploadIds.map((item) => {
          closure_0 = item;
          uploads = uploads.uploads;
          return uploads.findIndex((id) => id.id === closure_0);
        });
      }
      if (mapped == null) {
        mapped = null;
      }
      obj10.values = mapped;
      return obj10;
    } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
      let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
      let obj19 = { type: null, custom_id: null, values: null };
      ({ type: obj7.type, customId: obj7.custom_id } = type);
      let type3;
      if (interactionComponentState1 != null) {
        type3 = interactionComponentState1.type;
      }
      let values = null;
      if (type3 === type.type) {
        values = interactionComponentState1.values;
      }
      obj19.values = values;
      return obj19;
    } else {
      if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
        if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
          if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
            if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
              if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                let obj20 = { type: type.type };
                return obj20;
              } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                let obj21 = { type: type.type, component: null };
                let items = [type.component];
                closure_0 = closure_1_0;
                uploads = closure_1_1;
                obj21.component = items.map((type) => {
                  type = type.type;
                  if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                    let obj4 = { type: type.type, components: null };
                    let components = type.components;
                    closure_0 = closure_1_0;
                    uploads = closure_1_1;
                    obj4.components = components.map((type) => {
                      type = type.type;
                      if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                        let obj4 = { type: type.type, components: null };
                        let components = type.components;
                        closure_0 = closure_1_0;
                        uploads = closure_1_1;
                        obj4.components = components.map((type) => {
                          type = type.type;
                          if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                            let obj4 = { type: type.type, components: null };
                            let components = type.components;
                            closure_0 = closure_1_0;
                            uploads = closure_1_1;
                            obj4.components = components.map(() => { ... });
                            return obj4;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj5 = { type: null, custom_id: null, value: null };
                            ({ type: obj9.type, customId: obj9.custom_id } = type);
                            let type1;
                            if (iter3 != null) {
                              type1 = iter3.type;
                            }
                            let value = null;
                            if (type1 === type.type) {
                              value = iter3.value;
                            }
                            obj5.value = value;
                            return obj5;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let type2;
                            if (interactionComponentState != null) {
                              type2 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type2 === type.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj10 = { type: null, custom_id: null, values: null };
                            ({ type: obj8.type, customId: obj8.custom_id } = type);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj10.values = mapped;
                            return obj10;
                          } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj19 = { type: null, custom_id: null, values: null };
                            ({ type: obj7.type, customId: obj7.custom_id } = type);
                            let type3;
                            if (interactionComponentState1 != null) {
                              type3 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type3 === type.type) {
                              values = interactionComponentState1.values;
                            }
                            obj19.values = values;
                            return obj19;
                          } else {
                            if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                              if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj20 = { type: type.type };
                                      return obj20;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                      let obj21 = { type: type.type, component: null };
                                      let items = [type.component];
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj21.component = items.map(() => { ... })[0];
                                      return obj21;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj22 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3.type, customId: obj3.custom_id } = type);
                                      let type4;
                                      if (iter2 != null) {
                                        type4 = iter2.type;
                                      }
                                      let value2 = null;
                                      if (type4 === type.type) {
                                        value2 = iter2.value;
                                      }
                                      obj22.value = value2;
                                      return obj22;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj23 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2.type, customId: obj2.custom_id } = type);
                                      let type5;
                                      if (interactionComponentState2 != null) {
                                        type5 = interactionComponentState2.type;
                                      }
                                      let values2 = null;
                                      if (type5 === type.type) {
                                        values2 = interactionComponentState2.values;
                                      }
                                      obj23.values = values2;
                                      return obj23;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj.type, customId: obj.custom_id } = type);
                                      let type6;
                                      if (iter != null) {
                                        type6 = iter.type;
                                      }
                                      obj.value = type6 === type.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_2_1(closure_2_2[25])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                            let obj24 = { type: null, custom_id: null, values: null };
                            ({ type: obj6.type, customId: obj6.custom_id } = type);
                            let type7;
                            if (interactionComponentState3 != null) {
                              type7 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type7 === type.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj24.values = mapped1;
                            return obj24;
                          }
                        });
                        return obj4;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                        let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj5 = { type: null, custom_id: null, value: null };
                        ({ type: obj9.type, customId: obj9.custom_id } = type);
                        let type1;
                        if (iter3 != null) {
                          type1 = iter3.type;
                        }
                        let value = null;
                        if (type1 === type.type) {
                          value = iter3.value;
                        }
                        obj5.value = value;
                        return obj5;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                        let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let type2;
                        if (interactionComponentState != null) {
                          type2 = interactionComponentState.type;
                        }
                        let uploadIds = null;
                        if (type2 === type.type) {
                          uploadIds = interactionComponentState.uploadIds;
                        }
                        let obj10 = { type: null, custom_id: null, values: null };
                        ({ type: obj8.type, customId: obj8.custom_id } = type);
                        let mapped;
                        if (uploadIds != null) {
                          mapped = uploadIds.map((item) => {
                            closure_0 = item;
                            uploads = uploads.uploads;
                            return uploads.findIndex(() => { ... });
                          });
                        }
                        if (mapped == null) {
                          mapped = null;
                        }
                        obj10.values = mapped;
                        return obj10;
                      } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                        let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj19 = { type: null, custom_id: null, values: null };
                        ({ type: obj7.type, customId: obj7.custom_id } = type);
                        let type3;
                        if (interactionComponentState1 != null) {
                          type3 = interactionComponentState1.type;
                        }
                        let values = null;
                        if (type3 === type.type) {
                          values = interactionComponentState1.values;
                        }
                        obj19.values = values;
                        return obj19;
                      } else {
                        if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                          if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                            if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                              if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                  let obj20 = { type: type.type };
                                  return obj20;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                  let obj21 = { type: type.type, component: null };
                                  let items = [type.component];
                                  closure_0 = closure_1_0;
                                  uploads = closure_1_1;
                                  obj21.component = items.map((type) => {
                                    type = type.type;
                                    if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                                      let obj4 = { type: type.type, components: null };
                                      let components = type.components;
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj4.components = components.map(() => { ... });
                                      return obj4;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj9.type, customId: obj9.custom_id } = type);
                                      let type1;
                                      if (iter3 != null) {
                                        type1 = iter3.type;
                                      }
                                      let value = null;
                                      if (type1 === type.type) {
                                        value = iter3.value;
                                      }
                                      obj5.value = value;
                                      return obj5;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let type2;
                                      if (interactionComponentState != null) {
                                        type2 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type2 === type.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj10 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8.type, customId: obj8.custom_id } = type);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj10.values = mapped;
                                      return obj10;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj19 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7.type, customId: obj7.custom_id } = type);
                                      let type3;
                                      if (interactionComponentState1 != null) {
                                        type3 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type3 === type.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj19.values = values;
                                      return obj19;
                                    } else {
                                      if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                                        if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj20 = { type: type.type };
                                                return obj20;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                                let obj21 = { type: type.type, component: null };
                                                let items = [type.component];
                                                closure_0 = closure_1_0;
                                                uploads = closure_1_1;
                                                obj21.component = items.map(() => { ... })[0];
                                                return obj21;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj22 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3.type, customId: obj3.custom_id } = type);
                                                let type4;
                                                if (iter2 != null) {
                                                  type4 = iter2.type;
                                                }
                                                let value2 = null;
                                                if (type4 === type.type) {
                                                  value2 = iter2.value;
                                                }
                                                obj22.value = value2;
                                                return obj22;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj23 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2.type, customId: obj2.custom_id } = type);
                                                let type5;
                                                if (interactionComponentState2 != null) {
                                                  type5 = interactionComponentState2.type;
                                                }
                                                let values2 = null;
                                                if (type5 === type.type) {
                                                  values2 = interactionComponentState2.values;
                                                }
                                                obj23.values = values2;
                                                return obj23;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj.type, customId: obj.custom_id } = type);
                                                let type6;
                                                if (iter != null) {
                                                  type6 = iter.type;
                                                }
                                                obj.value = type6 === type.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_2_1(closure_2_2[25])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj24 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6.type, customId: obj6.custom_id } = type);
                                      let type7;
                                      if (interactionComponentState3 != null) {
                                        type7 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type7 === type.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj24.values = mapped1;
                                      return obj24;
                                    }
                                  })[0];
                                  return obj21;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                  let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj22 = { type: null, custom_id: null, value: null };
                                  ({ type: obj3.type, customId: obj3.custom_id } = type);
                                  let type4;
                                  if (iter2 != null) {
                                    type4 = iter2.type;
                                  }
                                  let value2 = null;
                                  if (type4 === type.type) {
                                    value2 = iter2.value;
                                  }
                                  obj22.value = value2;
                                  return obj22;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                  let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj23 = { type: null, custom_id: null, values: null };
                                  ({ type: obj2.type, customId: obj2.custom_id } = type);
                                  let type5;
                                  if (interactionComponentState2 != null) {
                                    type5 = interactionComponentState2.type;
                                  }
                                  let values2 = null;
                                  if (type5 === type.type) {
                                    values2 = interactionComponentState2.values;
                                  }
                                  obj23.values = values2;
                                  return obj23;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                  let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj = { type: null, custom_id: null, value: null };
                                  ({ type: obj.type, customId: obj.custom_id } = type);
                                  let type6;
                                  if (iter != null) {
                                    type6 = iter.type;
                                  }
                                  obj.value = type6 === type.type && iter.value;
                                  return obj;
                                } else {
                                  closure_2_1(closure_2_2[25])(false, "unreachable");
                                }
                              }
                            }
                          }
                        }
                        let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                        let obj24 = { type: null, custom_id: null, values: null };
                        ({ type: obj6.type, customId: obj6.custom_id } = type);
                        let type7;
                        if (interactionComponentState3 != null) {
                          type7 = interactionComponentState3.type;
                        }
                        let mapped1 = null;
                        if (type7 === type.type) {
                          let selectedOptions = interactionComponentState3.selectedOptions;
                          mapped1 = selectedOptions.map((value) => value.value);
                        }
                        obj24.values = mapped1;
                        return obj24;
                      }
                    });
                    return obj4;
                  } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                    let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                    let obj5 = { type: null, custom_id: null, value: null };
                    ({ type: obj9.type, customId: obj9.custom_id } = type);
                    let type1;
                    if (iter3 != null) {
                      type1 = iter3.type;
                    }
                    let value = null;
                    if (type1 === type.type) {
                      value = iter3.value;
                    }
                    obj5.value = value;
                    return obj5;
                  } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                    let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                    let type2;
                    if (interactionComponentState != null) {
                      type2 = interactionComponentState.type;
                    }
                    let uploadIds = null;
                    if (type2 === type.type) {
                      uploadIds = interactionComponentState.uploadIds;
                    }
                    let obj10 = { type: null, custom_id: null, values: null };
                    ({ type: obj8.type, customId: obj8.custom_id } = type);
                    let mapped;
                    if (uploadIds != null) {
                      mapped = uploadIds.map((item) => {
                        closure_0 = item;
                        uploads = uploads.uploads;
                        return uploads.findIndex((id) => id.id === closure_0);
                      });
                    }
                    if (mapped == null) {
                      mapped = null;
                    }
                    obj10.values = mapped;
                    return obj10;
                  } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                    let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                    let obj19 = { type: null, custom_id: null, values: null };
                    ({ type: obj7.type, customId: obj7.custom_id } = type);
                    let type3;
                    if (interactionComponentState1 != null) {
                      type3 = interactionComponentState1.type;
                    }
                    let values = null;
                    if (type3 === type.type) {
                      values = interactionComponentState1.values;
                    }
                    obj19.values = values;
                    return obj19;
                  } else {
                    if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                      if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                        if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                          if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                            if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                              let obj20 = { type: type.type };
                              return obj20;
                            } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                              let obj21 = { type: type.type, component: null };
                              let items = [type.component];
                              closure_0 = closure_1_0;
                              uploads = closure_1_1;
                              obj21.component = items.map((type) => {
                                type = type.type;
                                if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                                  let obj4 = { type: type.type, components: null };
                                  let components = type.components;
                                  closure_0 = closure_1_0;
                                  uploads = closure_1_1;
                                  obj4.components = components.map((type) => {
                                    type = type.type;
                                    if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                                      let obj4 = { type: type.type, components: null };
                                      let components = type.components;
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj4.components = components.map(() => { ... });
                                      return obj4;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj9.type, customId: obj9.custom_id } = type);
                                      let type1;
                                      if (iter3 != null) {
                                        type1 = iter3.type;
                                      }
                                      let value = null;
                                      if (type1 === type.type) {
                                        value = iter3.value;
                                      }
                                      obj5.value = value;
                                      return obj5;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let type2;
                                      if (interactionComponentState != null) {
                                        type2 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type2 === type.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj10 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8.type, customId: obj8.custom_id } = type);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj10.values = mapped;
                                      return obj10;
                                    } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj19 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7.type, customId: obj7.custom_id } = type);
                                      let type3;
                                      if (interactionComponentState1 != null) {
                                        type3 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type3 === type.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj19.values = values;
                                      return obj19;
                                    } else {
                                      if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                                        if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj20 = { type: type.type };
                                                return obj20;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                                let obj21 = { type: type.type, component: null };
                                                let items = [type.component];
                                                closure_0 = closure_1_0;
                                                uploads = closure_1_1;
                                                obj21.component = items.map(() => { ... })[0];
                                                return obj21;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj22 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3.type, customId: obj3.custom_id } = type);
                                                let type4;
                                                if (iter2 != null) {
                                                  type4 = iter2.type;
                                                }
                                                let value2 = null;
                                                if (type4 === type.type) {
                                                  value2 = iter2.value;
                                                }
                                                obj22.value = value2;
                                                return obj22;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj23 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2.type, customId: obj2.custom_id } = type);
                                                let type5;
                                                if (interactionComponentState2 != null) {
                                                  type5 = interactionComponentState2.type;
                                                }
                                                let values2 = null;
                                                if (type5 === type.type) {
                                                  values2 = interactionComponentState2.values;
                                                }
                                                obj23.values = values2;
                                                return obj23;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj.type, customId: obj.custom_id } = type);
                                                let type6;
                                                if (iter != null) {
                                                  type6 = iter.type;
                                                }
                                                obj.value = type6 === type.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_2_1(closure_2_2[25])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                      let obj24 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6.type, customId: obj6.custom_id } = type);
                                      let type7;
                                      if (interactionComponentState3 != null) {
                                        type7 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type7 === type.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj24.values = mapped1;
                                      return obj24;
                                    }
                                  });
                                  return obj4;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                                  let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj5 = { type: null, custom_id: null, value: null };
                                  ({ type: obj9.type, customId: obj9.custom_id } = type);
                                  let type1;
                                  if (iter3 != null) {
                                    type1 = iter3.type;
                                  }
                                  let value = null;
                                  if (type1 === type.type) {
                                    value = iter3.value;
                                  }
                                  obj5.value = value;
                                  return obj5;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                                  let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let type2;
                                  if (interactionComponentState != null) {
                                    type2 = interactionComponentState.type;
                                  }
                                  let uploadIds = null;
                                  if (type2 === type.type) {
                                    uploadIds = interactionComponentState.uploadIds;
                                  }
                                  let obj10 = { type: null, custom_id: null, values: null };
                                  ({ type: obj8.type, customId: obj8.custom_id } = type);
                                  let mapped;
                                  if (uploadIds != null) {
                                    mapped = uploadIds.map((item) => {
                                      closure_0 = item;
                                      uploads = uploads.uploads;
                                      return uploads.findIndex(() => { ... });
                                    });
                                  }
                                  if (mapped == null) {
                                    mapped = null;
                                  }
                                  obj10.values = mapped;
                                  return obj10;
                                } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                                  let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj19 = { type: null, custom_id: null, values: null };
                                  ({ type: obj7.type, customId: obj7.custom_id } = type);
                                  let type3;
                                  if (interactionComponentState1 != null) {
                                    type3 = interactionComponentState1.type;
                                  }
                                  let values = null;
                                  if (type3 === type.type) {
                                    values = interactionComponentState1.values;
                                  }
                                  obj19.values = values;
                                  return obj19;
                                } else {
                                  if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                                    if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                                      if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                                        if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                          if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                            let obj20 = { type: type.type };
                                            return obj20;
                                          } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                            let obj21 = { type: type.type, component: null };
                                            let items = [type.component];
                                            closure_0 = closure_1_0;
                                            uploads = closure_1_1;
                                            obj21.component = items.map((type) => {
                                              type = type.type;
                                              if (closure_2_0(closure_2_2[14]).ComponentType.ACTION_ROW === type) {
                                                let obj4 = { type: type.type, components: null };
                                                let components = type.components;
                                                closure_0 = closure_1_0;
                                                uploads = closure_1_1;
                                                obj4.components = components.map(() => { ... });
                                                return obj4;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_INPUT === type) {
                                                let iter3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj5 = { type: null, custom_id: null, value: null };
                                                ({ type: obj9.type, customId: obj9.custom_id } = type);
                                                let type1;
                                                if (iter3 != null) {
                                                  type1 = iter3.type;
                                                }
                                                let value = null;
                                                if (type1 === type.type) {
                                                  value = iter3.value;
                                                }
                                                obj5.value = value;
                                                return obj5;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.FILE_UPLOAD === type) {
                                                let interactionComponentState = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let type2;
                                                if (interactionComponentState != null) {
                                                  type2 = interactionComponentState.type;
                                                }
                                                let uploadIds = null;
                                                if (type2 === type.type) {
                                                  uploadIds = interactionComponentState.uploadIds;
                                                }
                                                let obj10 = { type: null, custom_id: null, values: null };
                                                ({ type: obj8.type, customId: obj8.custom_id } = type);
                                                let mapped;
                                                if (uploadIds != null) {
                                                  mapped = uploadIds.map(() => { ... });
                                                }
                                                if (mapped == null) {
                                                  mapped = null;
                                                }
                                                obj10.values = mapped;
                                                return obj10;
                                              } else if (closure_2_0(closure_2_2[14]).ComponentType.STRING_SELECT === type) {
                                                let interactionComponentState1 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj19 = { type: null, custom_id: null, values: null };
                                                ({ type: obj7.type, customId: obj7.custom_id } = type);
                                                let type3;
                                                if (interactionComponentState1 != null) {
                                                  type3 = interactionComponentState1.type;
                                                }
                                                let values = null;
                                                if (type3 === type.type) {
                                                  values = interactionComponentState1.values;
                                                }
                                                obj19.values = values;
                                                return obj19;
                                              } else {
                                                if (closure_2_0(closure_2_2[14]).ComponentType.USER_SELECT !== type) {
                                                  if (closure_2_0(closure_2_2[14]).ComponentType.ROLE_SELECT !== type) {
                                                    if (closure_2_0(closure_2_2[14]).ComponentType.MENTIONABLE_SELECT !== type) {
                                                      if (closure_2_0(closure_2_2[14]).ComponentType.CHANNEL_SELECT !== type) {
                                                        if (closure_2_0(closure_2_2[14]).ComponentType.TEXT_DISPLAY === type) {
                                                          let obj20 = { type: type.type };
                                                          return obj20;
                                                        } else if (closure_2_0(closure_2_2[14]).ComponentType.LABEL === type) {
                                                          let obj21 = { type: type.type, component: null };
                                                          let items = [type.component];
                                                          closure_0 = closure_1_0;
                                                          uploads = closure_1_1;
                                                          obj21.component = items.map(() => { ... })[0];
                                                          return obj21;
                                                        } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                                          let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                          let obj22 = { type: null, custom_id: null, value: null };
                                                          ({ type: obj3.type, customId: obj3.custom_id } = type);
                                                          let type4;
                                                          if (iter2 != null) {
                                                            type4 = iter2.type;
                                                          }
                                                          let value2 = null;
                                                          if (type4 === type.type) {
                                                            value2 = iter2.value;
                                                          }
                                                          obj22.value = value2;
                                                          return obj22;
                                                        } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                                          let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                          let obj23 = { type: null, custom_id: null, values: null };
                                                          ({ type: obj2.type, customId: obj2.custom_id } = type);
                                                          let type5;
                                                          if (interactionComponentState2 != null) {
                                                            type5 = interactionComponentState2.type;
                                                          }
                                                          let values2 = null;
                                                          if (type5 === type.type) {
                                                            values2 = interactionComponentState2.values;
                                                          }
                                                          obj23.values = values2;
                                                          return obj23;
                                                        } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                                          let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                          let obj = { type: null, custom_id: null, value: null };
                                                          ({ type: obj.type, customId: obj.custom_id } = type);
                                                          let type6;
                                                          if (iter != null) {
                                                            type6 = iter.type;
                                                          }
                                                          obj.value = type6 === type.type && iter.value;
                                                          return obj;
                                                        } else {
                                                          closure_2_1(closure_2_2[25])(false, "unreachable");
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                                let obj24 = { type: null, custom_id: null, values: null };
                                                ({ type: obj6.type, customId: obj6.custom_id } = type);
                                                let type7;
                                                if (interactionComponentState3 != null) {
                                                  type7 = interactionComponentState3.type;
                                                }
                                                let mapped1 = null;
                                                if (type7 === type.type) {
                                                  let selectedOptions = interactionComponentState3.selectedOptions;
                                                  mapped1 = selectedOptions.map(() => { ... });
                                                }
                                                obj24.values = mapped1;
                                                return obj24;
                                              }
                                            })[0];
                                            return obj21;
                                          } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                                            let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                            let obj22 = { type: null, custom_id: null, value: null };
                                            ({ type: obj3.type, customId: obj3.custom_id } = type);
                                            let type4;
                                            if (iter2 != null) {
                                              type4 = iter2.type;
                                            }
                                            let value2 = null;
                                            if (type4 === type.type) {
                                              value2 = iter2.value;
                                            }
                                            obj22.value = value2;
                                            return obj22;
                                          } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                                            let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                            let obj23 = { type: null, custom_id: null, values: null };
                                            ({ type: obj2.type, customId: obj2.custom_id } = type);
                                            let type5;
                                            if (interactionComponentState2 != null) {
                                              type5 = interactionComponentState2.type;
                                            }
                                            let values2 = null;
                                            if (type5 === type.type) {
                                              values2 = interactionComponentState2.values;
                                            }
                                            obj23.values = values2;
                                            return obj23;
                                          } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                                            let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                            let obj = { type: null, custom_id: null, value: null };
                                            ({ type: obj.type, customId: obj.custom_id } = type);
                                            let type6;
                                            if (iter != null) {
                                              type6 = iter.type;
                                            }
                                            obj.value = type6 === type.type && iter.value;
                                            return obj;
                                          } else {
                                            closure_2_1(closure_2_2[25])(false, "unreachable");
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                                  let obj24 = { type: null, custom_id: null, values: null };
                                  ({ type: obj6.type, customId: obj6.custom_id } = type);
                                  let type7;
                                  if (interactionComponentState3 != null) {
                                    type7 = interactionComponentState3.type;
                                  }
                                  let mapped1 = null;
                                  if (type7 === type.type) {
                                    let selectedOptions = interactionComponentState3.selectedOptions;
                                    mapped1 = selectedOptions.map((value) => value.value);
                                  }
                                  obj24.values = mapped1;
                                  return obj24;
                                }
                              })[0];
                              return obj21;
                            } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                              let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                              let obj22 = { type: null, custom_id: null, value: null };
                              ({ type: obj3.type, customId: obj3.custom_id } = type);
                              let type4;
                              if (iter2 != null) {
                                type4 = iter2.type;
                              }
                              let value2 = null;
                              if (type4 === type.type) {
                                value2 = iter2.value;
                              }
                              obj22.value = value2;
                              return obj22;
                            } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                              let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                              let obj23 = { type: null, custom_id: null, values: null };
                              ({ type: obj2.type, customId: obj2.custom_id } = type);
                              let type5;
                              if (interactionComponentState2 != null) {
                                type5 = interactionComponentState2.type;
                              }
                              let values2 = null;
                              if (type5 === type.type) {
                                values2 = interactionComponentState2.values;
                              }
                              obj23.values = values2;
                              return obj23;
                            } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                              let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                              let obj = { type: null, custom_id: null, value: null };
                              ({ type: obj.type, customId: obj.custom_id } = type);
                              let type6;
                              if (iter != null) {
                                type6 = iter.type;
                              }
                              obj.value = type6 === type.type && iter.value;
                              return obj;
                            } else {
                              closure_2_1(closure_2_2[25])(false, "unreachable");
                            }
                          }
                        }
                      }
                    }
                    let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                    let obj24 = { type: null, custom_id: null, values: null };
                    ({ type: obj6.type, customId: obj6.custom_id } = type);
                    let type7;
                    if (interactionComponentState3 != null) {
                      type7 = interactionComponentState3.type;
                    }
                    let mapped1 = null;
                    if (type7 === type.type) {
                      let selectedOptions = interactionComponentState3.selectedOptions;
                      mapped1 = selectedOptions.map((value) => value.value);
                    }
                    obj24.values = mapped1;
                    return obj24;
                  }
                })[0];
                return obj21;
              } else if (closure_2_0(closure_2_2[14]).ComponentType.RADIO_GROUP === type) {
                let iter2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                let obj22 = { type: null, custom_id: null, value: null };
                ({ type: obj3.type, customId: obj3.custom_id } = type);
                let type4;
                if (iter2 != null) {
                  type4 = iter2.type;
                }
                let value2 = null;
                if (type4 === type.type) {
                  value2 = iter2.value;
                }
                obj22.value = value2;
                return obj22;
              } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX_GROUP === type) {
                let interactionComponentState2 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                let obj23 = { type: null, custom_id: null, values: null };
                ({ type: obj2.type, customId: obj2.custom_id } = type);
                let type5;
                if (interactionComponentState2 != null) {
                  type5 = interactionComponentState2.type;
                }
                let values2 = null;
                if (type5 === type.type) {
                  values2 = interactionComponentState2.values;
                }
                obj23.values = values2;
                return obj23;
              } else if (closure_2_0(closure_2_2[14]).ComponentType.CHECKBOX === type) {
                let iter = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
                let obj = { type: null, custom_id: null, value: null };
                ({ type: obj.type, customId: obj.custom_id } = type);
                let type6;
                if (iter != null) {
                  type6 = iter.type;
                }
                obj.value = type6 === type.type && iter.value;
                return obj;
              } else {
                closure_2_1(closure_2_2[25])(false, "unreachable");
              }
            }
          }
        }
      }
      let interactionComponentState3 = closure_2_14.getInteractionComponentState(closure_1_0, type.id);
      let obj24 = { type: null, custom_id: null, values: null };
      ({ type: obj6.type, customId: obj6.custom_id } = type);
      let type7;
      if (interactionComponentState3 != null) {
        type7 = interactionComponentState3.type;
      }
      let mapped1 = null;
      if (type7 === type.type) {
        let selectedOptions = interactionComponentState3.selectedOptions;
        mapped1 = selectedOptions.map((value) => value.value);
      }
      obj24.values = mapped1;
      return obj24;
    }
  });
}
function getUploadsForModal(id, customId) {
  closure_0 = customId;
  const uploads = UploadAttachmentStore.getUploads(id, DraftType.InteractionModal);
  return uploads.filter((id) => {
    const result = closure_0(customId[26]).deserializeComponentUploadId(id.id);
    let containerId;
    if (result != null) {
      containerId = result.containerId;
    }
    return containerId === closure_0;
  });
}
function submitModal() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _submitModal(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp2;
          closure_131_0 = _require;
          closure_131_1 = signal;
          closure_131_2 = nonce;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          const channelId = _require.channelId;
          channel = channel.getChannel(channelId);
          closure_131_3 = channel;
          _modDef38(null != channel, "expected channel");
          const arr = getUploadsForModal(channelId, _require.customId);
          closure_131_4 = arr;
          let tmp7;
          if (arr.length > 0) {
            tmp7 = stageAttachmentFilesDefault(arr);
          }
          let obj5 = { data: null, preflight: null };
          const obj6 = { interactionType: require("Server").InteractionTypes.MODAL_SUBMIT, applicationId: _require.application.id };
          obj5.data = obj6;
          obj5.preflight = tmp7;
          require("InteractionActionCreators").addQueued(nonce, obj5);
          c5 = 1;
          c6 = 1;
          const obj7 = { value: tmp7, done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        closure_131_5 = closure_131_4.map((item, index) => closure_1_0(nonce[29]).getAttachmentPayload(item, index));
        const obj8 = { uploads: closure_131_4 };
        closure_131_6 = closure_132_18(closure_131_0.customId, closure_131_0.components, obj8);
        function send() {
          if (null != closure_1_3) {
            let aborted;
            if (signal != null) {
              aborted = signal.aborted;
            }
            if (!aborted) {
              const HTTP = closure_0(nonce[30]).HTTP;
              const request = { url: constants.INTERACTIONS, body: null, signal: null, rejectWithError: false };
              let obj = { type: closure_0(nonce[14]).InteractionTypes.MODAL_SUBMIT, application_id: closure_1_0.application.id, channel_id: null, guild_id: null, data: null, session_id: null, nonce: null };
              ({ id: obj2.channel_id, guild_id: obj2.guild_id } = closure_1_3);
              const obj5 = { id: null, custom_id: null, components: null, attachments: null };
              ({ id: obj3.id, customId: obj3.custom_id } = closure_1_0);
              obj5.components = components;
              let tmp9;
              if (length.length > 0) {
                tmp9 = length;
              }
              obj5.attachments = tmp9;
              obj.data = obj5;
              obj.session_id = components.getSessionId();
              obj.nonce = nonce;
              request.body = obj;
              request.signal = signal;
              HTTP.post(request).catch((error) => {
                if (429 === error.status) {
                  const _setTimeout = setTimeout;
                  const timerId = setTimeout(closure_1_7, error.body.retry_after * signal(nonce[31]).Millis.SECOND);
                } else {
                  closure_2_0(nonce[28]).setFailed(closure_1_2);
                  const obj = closure_2_0(nonce[28]);
                }
              });
              const postResult = HTTP.post(request);
            }
          }
        }
        closure_131_7 = send;
        send();
        c6 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp10) {
      c6 = tmp;
      throw tmp10;
    }
  }
};
const DraftType = fn(7031).DraftType;
const InteractionModalState = fn(14162).InteractionModalState;
const Endpoints = fn(1085).Endpoints;
fn(558);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((bot) => {
  const cResult = c.c(11);
  if (cResult[0] === bot.bot) {
    if (cResult[1] === bot.icon) {
      if (cResult[2] === bot.id) {
        let tmp3 = cResult[3];
        let tmp4 = cResult[4];
      }
      let nick;
      if (tmp3 != null) {
        nick = tmp3.nick;
      }
      if (null != nick) {
        let name = tmp3.nick;
      } else if (null != bot.bot) {
        name = bot.bot.username;
      } else {
        name = bot.name;
      }
      if (cResult[5] !== bot.id) {
        const tmp14 = getURLForApplicationDefault(bot.id);
        cResult[5] = bot.id;
        cResult[6] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp12) {
        if (cResult[8] === tmp4) {
          if (cResult[9] === name) {
            let tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
      const obj3 = { applicationIconURL: tmp4, applicationName: name, applicationBaseUrl: tmp12 };
      cResult[7] = tmp12;
      cResult[8] = tmp4;
      cResult[9] = name;
      cResult[10] = obj3;
      tmp15 = obj3;
    }
  }
  const guildId = SelectedGuildStore.getGuildId();
  let member;
  if (null != guildId) {
    if (null != bot.bot) {
      member = GuildMemberStore.getMember(guildId, bot.bot.id);
    }
  }
  const obj4 = { id: bot.id, icon: bot.icon, botIconFirst: true, bot: null, guildMember: null };
  bot = undefined;
  if (null != member) {
    bot = bot.bot;
  }
  obj4.bot = bot;
  obj4.guildMember = member;
  const applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj4);
  cResult[0] = bot.bot;
  cResult[1] = bot.icon;
  cResult[2] = bot.id;
  cResult[3] = member;
  cResult[4] = applicationIconURL;
  tmp4 = applicationIconURL;
  tmp3 = member;
}) : ((arg0) => {
  const user = arg0;
  const items = [, , , ];
  ({ id: arr[0], icon: arr[1], name: arr[2], bot: arr[3] } = arg0);
  return noop.useMemo(() => {
    const guildId = SelectedGuildStore.getGuildId();
    let member;
    if (null != guildId) {
      if (null != user.bot) {
        member = GuildMemberStore.getMember(guildId, tmp3.bot.id);
      }
    }
    const obj2 = { id: user.id, icon: user.icon, botIconFirst: true, bot: null, guildMember: null };
    let bot;
    if (null != member) {
      bot = user.bot;
    }
    const obj3 = { applicationIconURL: AvatarUtilsDefault.getApplicationIconURL(obj2), applicationName: null, applicationBaseUrl: null };
    obj2.bot = bot;
    obj2.guildMember = member;
    let nick;
    if (member != null) {
      nick = member.nick;
    }
    if (null != nick) {
      let name = member.nick;
    } else if (null != user.bot) {
      name = user.bot.username;
    } else {
      name = user.name;
    }
    obj3.applicationName = name;
    obj3.applicationBaseUrl = getURLForApplicationDefault(user.id);
    return obj3;
  }, items);
});
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const componentStateContext = ComponentStateContext.useComponentStateContext();
  let first;
  if (componentStateContext != null) {
    const modal = componentStateContext.modal;
    if (modal != null) {
      first = modal.components[0];
    }
  }
  let type;
  if (first != null) {
    type = first.type;
  }
  let tmp6 = type === Server.ComponentType.ACTION_ROW && first.components[0].id === arg0;
  if (!tmp6) {
    let type1;
    if (first != null) {
      type1 = first.type;
    }
    tmp6 = type1 === Server.ComponentType.LABEL && first.component.id === arg0;
    const tmp8 = type1 === Server.ComponentType.LABEL && first.component.id === arg0;
  }
  return tmp6;
}) : ((arg0) => {
  const componentStateContext = ComponentStateContext.useComponentStateContext();
  let first;
  if (componentStateContext != null) {
    const modal = componentStateContext.modal;
    if (modal != null) {
      first = modal.components[0];
    }
  }
  let type;
  if (first != null) {
    type = first.type;
  }
  let tmp6 = type === Server.ComponentType.ACTION_ROW && first.components[0].id === arg0;
  if (!tmp6) {
    let type1;
    if (first != null) {
      type1 = first.type;
    }
    tmp6 = type1 === Server.ComponentType.LABEL && first.component.id === arg0;
    const tmp8 = type1 === Server.ComponentType.LABEL && first.component.id === arg0;
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((customId, arg1) => {
  _require = customId;
  importDefault = arg1;
  const cResult = require("c").c(30);
  customId = customId.customId;
  ({ components, application } = customId);
  const tmp5 = require("useUnmountAbortSignal")();
  asyncGeneratorStep = tmp5;
  let obj = require("c");
  let obj2 = first;
  const tmp = _require;
  const tmp4 = importDefault;
  [r10024, _slicedToArray] = first.useState(null);
  [first, closure_6] = first.useState(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {};
    cResult[0] = obj3;
    let first1 = obj3;
  } else {
    first1 = cResult[0];
  }
  _slicedToArray(obj2.useState(first1), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [InteractionModalStore];
    cResult[1] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] !== first) {
    class N {
      constructor() {
        return closure_12.getModalState(closure_5);
      }
    }
    const items1 = [first];
    cResult[2] = first;
    cResult[3] = N;
    cResult[4] = items1;
    let tmp15 = items1;
  } else {
    class N {
      constructor() {
        return closure_12.getModalState(closure_5);
      }
    }
    tmp15 = cResult[4];
  }
  const tmp7 = _slicedToArray(first.useState(null), 2);
  const stateFromStores = tmp(customId[19]).useStateFromStores(tmp12, N, tmp15);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        set = new Set();
        return set;
      }
    }
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        set = new Set();
        return set;
      }
    }
  }
  const tmp18 = tmp4(customId[20])(P);
  closure_8 = tmp18;
  if (cResult[6] === tmp5) {
    class P {
      constructor() {
        set = new Set();
        return set;
      }
    }
  }
  _require = asyncGeneratorStep(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _slicedToArray(null);
            closure_1_6(null);
            if (validate(closure_1_8)) {
              const _Date = Date;
              const fromTimestampResult = v1(customId[21]).fromTimestamp(Date.now());
              closure_1_6(fromTimestampResult);
              c1 = 1;
              c0 = 1;
              const obj5 = { value: submitModal(c0, closure_1_3, fromTimestampResult), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp13) {
        c0 = tmp;
        throw tmp13;
      }
    }
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[6] = tmp5;
  cResult[7] = customId;
  cResult[8] = tmp18;
  cResult[9] = fn;
  const tmpResult = tmp(customId[19]);
}) : ((customId, arg1) => {
  _require = customId;
  importDefault = arg1;
  customId = customId.customId;
  ({ application, components } = customId);
  const tmp = require("useUnmountAbortSignal")();
  asyncGeneratorStep = tmp;
  [tmp3, _slicedToArray] = first.useState(null);
  [first, closure_6] = first.useState(null);
  const tmp2 = _slicedToArray(first.useState(null), 2);
  [tmp7, tmp8] = first.useState({});
  const tmp6 = _slicedToArray(first.useState({}), 2);
  const items = [InteractionModalStore];
  const items1 = [first];
  const stateFromStores = require("initialize").useStateFromStores(items, () => InteractionModalStore.getModalState(first), items1);
  const tmp10 = require("useInitialValue")(() => new Set());
  closure_8 = tmp10;
  const items2 = [tmp, customId, tmp10];
  const items3 = [first, stateFromStores, arg1, customId, customId.channelId];
  const callback = first.useCallback(asyncGeneratorStep(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _slicedToArray(null);
            closure_6(null);
            if (validate(closure_8)) {
              const _Date = Date;
              const fromTimestampResult = v1(customId[21]).fromTimestamp(Date.now());
              closure_6(fromTimestampResult);
              v1 = 1;
              c0 = 1;
              const obj5 = { value: submitModal(closure_0, closure_3, fromTimestampResult), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp13) {
        c0 = tmp;
        throw tmp13;
      }
    }
  }), items2);
  const effect = first.useEffect(() => {
    if (stateFromStores === InteractionModalState.SUCCEEDED) {
      const obj2 = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
      DispatcherDefault.dispatch(obj2);
      const uploads = UploadAttachmentStore.getUploads(customId.channelId, DraftType.InteractionModal);
      const found = uploads.filter((id) => {
        const result = closure_0(customId[26]).deserializeComponentUploadId(id.id);
        let containerId;
        if (result != null) {
          containerId = result.containerId;
        }
        return containerId === closure_0;
      });
      UploadAttachmentActionCreatorsDefault.removeFiles(customId.channelId, found.map((id) => id.id), DraftType.InteractionModal);
      closure_1();
    }
    if (stateFromStores === InteractionModalState.ERRORED) {
      const intl = util.intl;
      _slicedToArray(intl.string(util.t.uJgdEu));
    }
  }, items3);
  const tmp13 = closure_17(application);
  return { components, applicationIconURL: tmp13.applicationIconURL, applicationName: tmp13.applicationName, submissionState: stateFromStores, error: tmp3, validators: tmp10, validationErrors: tmp7, setValidationErrors: tmp8, onSubmit: callback };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/InteractionModalUtils.tsx");

export const useIsFirstTextInputInModal = tmp2;
export const useModalState = tmp3;
export const useIframeModalState = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = c.c(16);
  ({ application, customId } = channelId);
  ({ applicationIconURL, applicationName, applicationBaseUrl } = closure_17(application));
  if (cResult[0] !== channelId.channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    cResult[0] = channelId.channelId;
    cResult[1] = channel;
    let tmp4 = channel;
  } else {
    tmp4 = cResult[1];
  }
  _modDef38(null != tmp4, "channel should not be null");
  const combined = "" + channelId.channelId + ":" + application.id + ":" + customId;
  if (cResult[2] === tmp4.guild_id) {
    if (cResult[3] === customId) {
      if (cResult[4] === combined) {
        if (cResult[5] === channelId.channelId) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === applicationBaseUrl) {
          if (cResult[8] === channelId.iframePath) {
            let tmp11 = cResult[9];
          }
          if (cResult[10] === applicationBaseUrl) {
            if (cResult[11] === applicationIconURL) {
              if (cResult[12] === applicationName) {
                if (cResult[13] === tmp11) {
                  if (cResult[14] === tmp9) {
                    let tmp17 = cResult[15];
                  }
                  return tmp17;
                }
              }
            }
          }
          const obj2 = { applicationIconURL, applicationName, applicationBaseUrl, queryParams: tmp9, iframeUrl: tmp11 };
          cResult[10] = applicationBaseUrl;
          cResult[11] = applicationIconURL;
          cResult[12] = applicationName;
          cResult[13] = tmp11;
          cResult[14] = tmp9;
          cResult[15] = obj2;
          tmp17 = obj2;
        }
        let str = applicationBaseUrl;
        if (applicationBaseUrl == null) {
          str = "";
        }
        const str2 = new URL(str);
        str2.pathname = channelId.iframePath;
        const str1 = str2.toString();
        cResult[7] = applicationBaseUrl;
        cResult[8] = channelId.iframePath;
        cResult[9] = str1;
        tmp11 = str1;
      }
    }
  }
  const obj3 = { instance_id: combined, custom_id: customId, channel_id: channelId.channelId };
  if (tmp10) {
    obj3.guild_id = tmp4.guild_id;
  }
  cResult[2] = tmp4.guild_id;
  cResult[3] = customId;
  cResult[4] = combined;
  cResult[5] = channelId.channelId;
  cResult[6] = obj3;
  tmp9 = obj3;
  tmp10 = null != tmp4.guild_id && "" !== tmp4.guild_id;
  const tmp3 = closure_17(application);
}) : ((channelId) => {
  ({ application, customId } = channelId);
  const tmp = closure_17(application);
  const applicationBaseUrl = tmp.applicationBaseUrl;
  ({ applicationIconURL, applicationName } = tmp);
  const channel = ChannelStore.getChannel(channelId.channelId);
  _modDef38(null != channel, "channel should not be null");
  const obj = { instance_id: "" + channelId.channelId + ":" + application.id + ":" + customId, custom_id: customId, channel_id: channelId.channelId };
  if (tmp4) {
    obj.guild_id = channel.guild_id;
  }
  let str = applicationBaseUrl;
  if (applicationBaseUrl == null) {
    str = "";
  }
  const str2 = new URL(str);
  str2.pathname = channelId.iframePath;
  return { applicationIconURL, applicationName, applicationBaseUrl, queryParams: obj, iframeUrl: str2.toString() };
});
export { submitModal };