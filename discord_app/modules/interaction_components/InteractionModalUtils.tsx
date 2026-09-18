// === Module 17705: InteractionModalUtils ===

// Module 17705 (InteractionModalUtils)
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Server from "Server" /* 1895 */;
import stageAttachmentFilesDefault from "stageAttachmentFiles" /* 8045 */;
import ComponentStateContext from "ComponentStateContext" /* 8342 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9545 */;
import getURLForApplicationDefault from "getURLForApplication" /* 9750 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4543 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5062 */;
import InteractionModalStore from "InteractionModalStore" /* 14616 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8343 */;

const require = globalThis.__r;

require = fn;
function getData(arg0, arr, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  return arr.map((type) => {
    type = type.type;
    if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
      let obj4 = { type: type.type, components: null };
      let components = type.components;
      closure_0 = closure_1_0;
      uploads = closure_1_1;
      obj4.components = components.map((type) => {
        type = type.type;
        if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
          let obj4 = { type: type.type, components: null };
          let components = type.components;
          closure_0 = closure_1_0;
          uploads = closure_1_1;
          obj4.components = components.map((type) => {
            type = type.type;
            if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
              let obj4 = { type: type.type, components: null };
              let components = type.components;
              closure_0 = closure_1_0;
              uploads = closure_1_1;
              obj4.components = components.map((type) => {
                type = type.type;
                if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                  let obj4 = { type: type.type, components: null };
                  let components = type.components;
                  closure_0 = closure_1_0;
                  uploads = closure_1_1;
                  obj4.components = components.map(() => { ... });
                  return obj4;
                } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                  if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                    if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                      if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                        if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                          if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                            let obj20 = { type: type.type };
                            return obj20;
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                            let obj21 = { type: type.type, component: null };
                            let items = [type.component];
                            closure_0 = closure_1_0;
                            uploads = closure_1_1;
                            obj21.component = items.map(() => { ... })[0];
                            return obj21;
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                            closure_2_1(closure_2_2[23])(false, "unreachable");
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
            } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
            } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
            } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
              if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                  if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                    if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                      if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                        let obj20 = { type: type.type };
                        return obj20;
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                        let obj21 = { type: type.type, component: null };
                        let items = [type.component];
                        closure_0 = closure_1_0;
                        uploads = closure_1_1;
                        obj21.component = items.map((type) => {
                          type = type.type;
                          if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj4 = { type: type.type, components: null };
                            let components = type.components;
                            closure_0 = closure_1_0;
                            uploads = closure_1_1;
                            obj4.components = components.map(() => { ... });
                            return obj4;
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                            if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                              if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj20 = { type: type.type };
                                      return obj20;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                      let obj21 = { type: type.type, component: null };
                                      let items = [type.component];
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj21.component = items.map(() => { ... })[0];
                                      return obj21;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                      closure_2_1(closure_2_2[23])(false, "unreachable");
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                        closure_2_1(closure_2_2[23])(false, "unreachable");
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
        } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
        } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
        } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
          if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
            if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
              if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                  if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                    let obj20 = { type: type.type };
                    return obj20;
                  } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                    let obj21 = { type: type.type, component: null };
                    let items = [type.component];
                    closure_0 = closure_1_0;
                    uploads = closure_1_1;
                    obj21.component = items.map((type) => {
                      type = type.type;
                      if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                        let obj4 = { type: type.type, components: null };
                        let components = type.components;
                        closure_0 = closure_1_0;
                        uploads = closure_1_1;
                        obj4.components = components.map((type) => {
                          type = type.type;
                          if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj4 = { type: type.type, components: null };
                            let components = type.components;
                            closure_0 = closure_1_0;
                            uploads = closure_1_1;
                            obj4.components = components.map(() => { ... });
                            return obj4;
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                            if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                              if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj20 = { type: type.type };
                                      return obj20;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                      let obj21 = { type: type.type, component: null };
                                      let items = [type.component];
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj21.component = items.map(() => { ... })[0];
                                      return obj21;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                      closure_2_1(closure_2_2[23])(false, "unreachable");
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                        if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                          if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                            if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                              if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                  let obj20 = { type: type.type };
                                  return obj20;
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                  let obj21 = { type: type.type, component: null };
                                  let items = [type.component];
                                  closure_0 = closure_1_0;
                                  uploads = closure_1_1;
                                  obj21.component = items.map((type) => {
                                    type = type.type;
                                    if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj4 = { type: type.type, components: null };
                                      let components = type.components;
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj4.components = components.map(() => { ... });
                                      return obj4;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                                      if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                                        if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj20 = { type: type.type };
                                                return obj20;
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                                let obj21 = { type: type.type, component: null };
                                                let items = [type.component];
                                                closure_0 = closure_1_0;
                                                uploads = closure_1_1;
                                                obj21.component = items.map(() => { ... })[0];
                                                return obj21;
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                                closure_2_1(closure_2_2[23])(false, "unreachable");
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                  closure_2_1(closure_2_2[23])(false, "unreachable");
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
                  } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                  } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                  } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                    closure_2_1(closure_2_2[23])(false, "unreachable");
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
    } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
    } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
    } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
      if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
        if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
          if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
            if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
              if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                let obj20 = { type: type.type };
                return obj20;
              } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                let obj21 = { type: type.type, component: null };
                let items = [type.component];
                closure_0 = closure_1_0;
                uploads = closure_1_1;
                obj21.component = items.map((type) => {
                  type = type.type;
                  if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                    let obj4 = { type: type.type, components: null };
                    let components = type.components;
                    closure_0 = closure_1_0;
                    uploads = closure_1_1;
                    obj4.components = components.map((type) => {
                      type = type.type;
                      if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                        let obj4 = { type: type.type, components: null };
                        let components = type.components;
                        closure_0 = closure_1_0;
                        uploads = closure_1_1;
                        obj4.components = components.map((type) => {
                          type = type.type;
                          if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj4 = { type: type.type, components: null };
                            let components = type.components;
                            closure_0 = closure_1_0;
                            uploads = closure_1_1;
                            obj4.components = components.map(() => { ... });
                            return obj4;
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                          } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                            if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                              if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj20 = { type: type.type };
                                      return obj20;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                      let obj21 = { type: type.type, component: null };
                                      let items = [type.component];
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj21.component = items.map(() => { ... })[0];
                                      return obj21;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                      closure_2_1(closure_2_2[23])(false, "unreachable");
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                      } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                        if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                          if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                            if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                              if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                  let obj20 = { type: type.type };
                                  return obj20;
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                  let obj21 = { type: type.type, component: null };
                                  let items = [type.component];
                                  closure_0 = closure_1_0;
                                  uploads = closure_1_1;
                                  obj21.component = items.map((type) => {
                                    type = type.type;
                                    if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj4 = { type: type.type, components: null };
                                      let components = type.components;
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj4.components = components.map(() => { ... });
                                      return obj4;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                                      if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                                        if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj20 = { type: type.type };
                                                return obj20;
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                                let obj21 = { type: type.type, component: null };
                                                let items = [type.component];
                                                closure_0 = closure_1_0;
                                                uploads = closure_1_1;
                                                obj21.component = items.map(() => { ... })[0];
                                                return obj21;
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                                closure_2_1(closure_2_2[23])(false, "unreachable");
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                  closure_2_1(closure_2_2[23])(false, "unreachable");
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
                  } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                  } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                  } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                    if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                      if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                        if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                          if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                            if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                              let obj20 = { type: type.type };
                              return obj20;
                            } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                              let obj21 = { type: type.type, component: null };
                              let items = [type.component];
                              closure_0 = closure_1_0;
                              uploads = closure_1_1;
                              obj21.component = items.map((type) => {
                                type = type.type;
                                if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                                  let obj4 = { type: type.type, components: null };
                                  let components = type.components;
                                  closure_0 = closure_1_0;
                                  uploads = closure_1_1;
                                  obj4.components = components.map((type) => {
                                    type = type.type;
                                    if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj4 = { type: type.type, components: null };
                                      let components = type.components;
                                      closure_0 = closure_1_0;
                                      uploads = closure_1_1;
                                      obj4.components = components.map(() => { ... });
                                      return obj4;
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                                    } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                                      if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                                        if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj20 = { type: type.type };
                                                return obj20;
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                                let obj21 = { type: type.type, component: null };
                                                let items = [type.component];
                                                closure_0 = closure_1_0;
                                                uploads = closure_1_1;
                                                obj21.component = items.map(() => { ... })[0];
                                                return obj21;
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                                closure_2_1(closure_2_2[23])(false, "unreachable");
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                                } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                                  if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                                    if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                                      if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                        if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                          if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                            let obj20 = { type: type.type };
                                            return obj20;
                                          } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                            let obj21 = { type: type.type, component: null };
                                            let items = [type.component];
                                            closure_0 = closure_1_0;
                                            uploads = closure_1_1;
                                            obj21.component = items.map((type) => {
                                              type = type.type;
                                              if (closure_2_0(closure_2_2[13]).ComponentType.ACTION_ROW === type) {
                                                let obj4 = { type: type.type, components: null };
                                                let components = type.components;
                                                closure_0 = closure_1_0;
                                                uploads = closure_1_1;
                                                obj4.components = components.map(() => { ... });
                                                return obj4;
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_INPUT === type) {
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
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.FILE_UPLOAD === type) {
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
                                              } else if (closure_2_0(closure_2_2[13]).ComponentType.STRING_SELECT === type) {
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
                                                if (closure_2_0(closure_2_2[13]).ComponentType.USER_SELECT !== type) {
                                                  if (closure_2_0(closure_2_2[13]).ComponentType.ROLE_SELECT !== type) {
                                                    if (closure_2_0(closure_2_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                                      if (closure_2_0(closure_2_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                                        if (closure_2_0(closure_2_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                          let obj20 = { type: type.type };
                                                          return obj20;
                                                        } else if (closure_2_0(closure_2_2[13]).ComponentType.LABEL === type) {
                                                          let obj21 = { type: type.type, component: null };
                                                          let items = [type.component];
                                                          closure_0 = closure_1_0;
                                                          uploads = closure_1_1;
                                                          obj21.component = items.map(() => { ... })[0];
                                                          return obj21;
                                                        } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                                        } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                                        } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                                          closure_2_1(closure_2_2[23])(false, "unreachable");
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
                                          } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                                          } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                                          } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                                            closure_2_1(closure_2_2[23])(false, "unreachable");
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
                            } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
                            } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
                            } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                              closure_2_1(closure_2_2[23])(false, "unreachable");
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
              } else if (closure_2_0(closure_2_2[13]).ComponentType.RADIO_GROUP === type) {
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
              } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX_GROUP === type) {
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
              } else if (closure_2_0(closure_2_2[13]).ComponentType.CHECKBOX === type) {
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
                closure_2_1(closure_2_2[23])(false, "unreachable");
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
    const result = closure_0(customId[24]).deserializeComponentUploadId(id.id);
    let containerId;
    if (result != null) {
      containerId = result.containerId;
    }
    return containerId === closure_0;
  });
}
function submitModal() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_19 = async function _submitModal(arg0) {
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
      return { value: "HermesInternal", done: null };
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
        closure_131_5 = closure_131_4.map((item, index) => closure_1_0(nonce[27]).getAttachmentPayload(item, index));
        const obj8 = { uploads: closure_131_4 };
        closure_131_6 = closure_132_16(closure_131_0.customId, closure_131_0.components, obj8);
        function send() {
          if (null != closure_1_3) {
            let aborted;
            if (signal != null) {
              aborted = signal.aborted;
            }
            if (!aborted) {
              const HTTP = closure_0(nonce[28]).HTTP;
              const request = { url: constants.INTERACTIONS, body: null, signal: null, rejectWithError: false };
              let obj = { type: closure_0(nonce[13]).InteractionTypes.MODAL_SUBMIT, application_id: closure_1_0.application.id, channel_id: null, guild_id: null, data: null, session_id: null, nonce: null };
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
                  const timerId = setTimeout(closure_1_7, error.body.retry_after * signal(nonce[29]).Millis.SECOND);
                } else {
                  closure_2_0(nonce[26]).setFailed(closure_1_2);
                  const obj = closure_2_0(nonce[26]);
                }
              });
              const postResult = HTTP.post(request);
            }
          }
        }
        closure_131_7 = send;
        send();
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp10) {
      c6 = tmp;
      throw tmp10;
    }
  }
};
const DraftType = fn(5063).DraftType;
const InteractionModalState = fn(14616).InteractionModalState;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/InteractionModalUtils.tsx");

export const useIsFirstTextInputInModal = function useIsFirstTextInputInModal(id) {
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
  let tmp6 = type === Server.ComponentType.ACTION_ROW && first.components[0].id === id;
  if (!tmp6) {
    let type1;
    if (first != null) {
      type1 = first.type;
    }
    tmp6 = type1 === Server.ComponentType.LABEL && first.component.id === id;
    const tmp8 = type1 === Server.ComponentType.LABEL && first.component.id === id;
  }
  return tmp6;
};
export const useModalState = function useModalState(channelId, onClose) {
  _require = channelId;
  importDefault = onClose;
  ({ application, customId } = channelId);
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
  const items2 = [tmp, channelId, tmp10];
  const items3 = [first, stateFromStores, onClose, customId, channelId.channelId];
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
        return { value: "HermesInternal", done: null };
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
            if ((function validate(arr) {
              c0 = true;
              const item = arr.forEach((fn) => {
                if (!fn()) {
                  c0 = false;
                }
              });
              return c0;
            })(closure_8)) {
              const _Date = Date;
              const fromTimestampResult = v1(customId[19]).fromTimestamp(Date.now());
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
        return { value: "HermesInternal", done: null };
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
      channelId = customId;
      const uploads = UploadAttachmentStore.getUploads(channelId.channelId, DraftType.InteractionModal);
      const found = uploads.filter((id) => {
        const result = closure_0(customId[24]).deserializeComponentUploadId(id.id);
        let containerId;
        if (result != null) {
          containerId = result.containerId;
        }
        return containerId === closure_0;
      });
      UploadAttachmentActionCreatorsDefault.removeFiles(channelId.channelId, found.map((id) => id.id), DraftType.InteractionModal);
      onClose();
    }
    if (stateFromStores === InteractionModalState.ERRORED) {
      const intl = util.intl;
      _slicedToArray(intl.string(util.t.uJgdEu));
    }
  }, items3);
  closure_129_0 = application;
  const items4 = [, , , ];
  ({ id: arr5[0], icon: arr5[1], name: arr5[2], bot: arr5[3] } = application);
  const memo = first.useMemo(() => {
    const guildId = SelectedGuildStore.getGuildId();
    let member;
    if (null != guildId) {
      if (null != application.bot) {
        member = GuildMemberStore.getMember(guildId, tmp3.bot.id);
      }
    }
    const obj2 = { id: application.id, icon: application.icon, botIconFirst: true, bot: null, guildMember: null };
    let bot;
    if (null != member) {
      bot = application.bot;
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
    } else if (null != application.bot) {
      name = application.bot.username;
    } else {
      name = application.name;
    }
    obj3.applicationName = name;
    obj3.applicationBaseUrl = getURLForApplicationDefault(application.id);
    return obj3;
  }, items4);
  return { components: channelId.components, applicationIconURL: memo.applicationIconURL, applicationName: memo.applicationName, submissionState: stateFromStores, error: tmp3, validators: tmp10, validationErrors: tmp7, setValidationErrors: tmp8, onSubmit: callback };
};
export const useIframeModalState = function useIframeModalState(channelId) {
  ({ application, customId } = channelId);
  const items = [, , , ];
  ({ id: arr[0], icon: arr[1], name: arr[2], bot: arr[3] } = application);
  const memo = noop.useMemo(() => {
    const guildId = SelectedGuildStore.getGuildId();
    let member;
    if (null != guildId) {
      if (null != application.bot) {
        member = GuildMemberStore.getMember(guildId, tmp3.bot.id);
      }
    }
    const obj2 = { id: application.id, icon: application.icon, botIconFirst: true, bot: null, guildMember: null };
    let bot;
    if (null != member) {
      bot = application.bot;
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
    } else if (null != application.bot) {
      name = application.bot.username;
    } else {
      name = application.name;
    }
    obj3.applicationName = name;
    obj3.applicationBaseUrl = getURLForApplicationDefault(application.id);
    return obj3;
  }, items);
  const applicationBaseUrl = memo.applicationBaseUrl;
  ({ applicationIconURL, applicationName } = memo);
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
};
export { submitModal };