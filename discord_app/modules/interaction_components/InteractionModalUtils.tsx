// discord_app/modules/interaction_components/InteractionModalUtils.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import getAvatarURLDefault from "../../utils/AvatarUtils.tsx";
import PermissionOverwriteType from "../../flow/Server.tsx";
import isInteractionComponent from "ComponentStateContext.tsx";
import getURLForApplicationDefault from "../activities/getURLForApplication.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import { DraftType } from "../../stores/DraftStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import handleConnectionOpen from "../../stores/SelectedGuildStore.tsx";
import map from "../../stores/UploadAttachmentStore.tsx";
import getModalState from "InteractionModalStore.tsx";
import { InteractionModalState } from "InteractionModalStore.tsx";
import getInteractionComponentStates from "LocalInteractionComponentStateStore.tsx";
import { Endpoints } from "../../Constants.tsx";

require = fn;
function getData(arg0, arr) {
  closure_0 = arg0;
  closure_1 = arg2;
  return arr.map((item, index) => {
    let type = item.type;
    if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
      let obj = { type: null, components: null };
      obj[0] = item.type;
      let components = item.components;
      obj[1] = components.map((item, index) => {
        let type = item.type;
        if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
          let obj = { type: null, components: null };
          obj[0] = item.type;
          let components = item.components;
          obj[1] = components.map((item, index) => {
            let type = item.type;
            if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
              let obj = { type: null, components: null };
              obj[0] = item.type;
              let components = item.components;
              obj[1] = components.map((item, index) => {
                let type = item.type;
                if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                  let obj = { type: null, components: null };
                  obj[0] = item.type;
                  let components = item.components;
                  obj[1] = components.map(() => { ... });
                  return obj;
                } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                  let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                  obj = { type: null, custom_id: null, value: null };
                  ({ type: obj9[0], customId: obj9[1] } = item);
                  type = undefined;
                  if (iter3 != null) {
                    type = iter3.type;
                  }
                  let value = null;
                  if (type === item.type) {
                    value = iter3.value;
                  }
                  obj[2] = value;
                  return obj;
                } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                  let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                  let type1;
                  if (interactionComponentState != null) {
                    type1 = interactionComponentState.type;
                  }
                  let uploadIds = null;
                  if (type1 === item.type) {
                    uploadIds = interactionComponentState.uploadIds;
                  }
                  let obj1 = { type: null, custom_id: null, values: null };
                  ({ type: obj8[0], customId: obj8[1] } = item);
                  let mapped;
                  if (uploadIds != null) {
                    mapped = uploadIds.map(() => { ... });
                  }
                  if (mapped == null) {
                    mapped = null;
                  }
                  obj1[2] = mapped;
                  return obj1;
                } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                  let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                  let obj2 = { type: null, custom_id: null, values: null };
                  ({ type: obj7[0], customId: obj7[1] } = item);
                  let type2;
                  if (interactionComponentState1 != null) {
                    type2 = interactionComponentState1.type;
                  }
                  let values = null;
                  if (type2 === item.type) {
                    values = interactionComponentState1.values;
                  }
                  obj2[2] = values;
                  return obj2;
                } else {
                  if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                    if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                      if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                        if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                          if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                            let obj3 = { type: null };
                            obj3[0] = item.type;
                            return obj3;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                            let obj4 = { type: null, component: null };
                            obj4[0] = item.type;
                            let items = [item.component];
                            obj4[1] = items.map(() => { ... })[0];
                            return obj4;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                            let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let obj5 = { type: null, custom_id: null, value: null };
                            ({ type: obj3[0], customId: obj3[1] } = item);
                            let type3;
                            if (iter2 != null) {
                              type3 = iter2.type;
                            }
                            value = null;
                            if (type3 === item.type) {
                              value = iter2.value;
                            }
                            obj5[2] = value;
                            return obj5;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                            let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let obj6 = { type: null, custom_id: null, values: null };
                            ({ type: obj2[0], customId: obj2[1] } = item);
                            let type4;
                            if (interactionComponentState2 != null) {
                              type4 = interactionComponentState2.type;
                            }
                            values = null;
                            if (type4 === item.type) {
                              values = interactionComponentState2.values;
                            }
                            obj6[2] = values;
                            return obj6;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                            let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            obj = { type: null, custom_id: null, value: null };
                            ({ type: obj[0], customId: obj[1] } = item);
                            let type5;
                            if (iter != null) {
                              type5 = iter.type;
                            }
                            obj[2] = type5 === item.type && iter.value;
                            return obj;
                          } else {
                            closure_1_1(closure_1_2[23])(false, "unreachable");
                          }
                        }
                      }
                    }
                  }
                  let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                  let obj7 = { type: null, custom_id: null, values: null };
                  ({ type: obj6[0], customId: obj6[1] } = item);
                  let type6;
                  if (interactionComponentState3 != null) {
                    type6 = interactionComponentState3.type;
                  }
                  let mapped1 = null;
                  if (type6 === item.type) {
                    let selectedOptions = interactionComponentState3.selectedOptions;
                    mapped1 = selectedOptions.map(() => { ... });
                  }
                  obj7[2] = mapped1;
                  return obj7;
                }
              });
              return obj;
            } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
              let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
              obj = { type: null, custom_id: null, value: null };
              ({ type: obj9[0], customId: obj9[1] } = item);
              type = undefined;
              if (iter3 != null) {
                type = iter3.type;
              }
              let value = null;
              if (type === item.type) {
                value = iter3.value;
              }
              obj[2] = value;
              return obj;
            } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
              let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
              let type1;
              if (interactionComponentState != null) {
                type1 = interactionComponentState.type;
              }
              let uploadIds = null;
              if (type1 === item.type) {
                uploadIds = interactionComponentState.uploadIds;
              }
              let obj1 = { type: null, custom_id: null, values: null };
              ({ type: obj8[0], customId: obj8[1] } = item);
              let mapped;
              if (uploadIds != null) {
                mapped = uploadIds.map((item, index) => {
                  closure_0 = item;
                  uploads = uploads.uploads;
                  return uploads.findIndex(() => { ... });
                });
              }
              if (mapped == null) {
                mapped = null;
              }
              obj1[2] = mapped;
              return obj1;
            } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
              let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
              let obj2 = { type: null, custom_id: null, values: null };
              ({ type: obj7[0], customId: obj7[1] } = item);
              let type2;
              if (interactionComponentState1 != null) {
                type2 = interactionComponentState1.type;
              }
              let values = null;
              if (type2 === item.type) {
                values = interactionComponentState1.values;
              }
              obj2[2] = values;
              return obj2;
            } else {
              if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                  if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                    if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                      if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                        let obj3 = { type: null };
                        obj3[0] = item.type;
                        return obj3;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                        let obj4 = { type: null, component: null };
                        obj4[0] = item.type;
                        let items = [item.component];
                        obj4[1] = items.map((item, index) => {
                          let type = item.type;
                          if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj = { type: null, components: null };
                            obj[0] = item.type;
                            let components = item.components;
                            obj[1] = components.map(() => { ... });
                            return obj;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            obj = { type: null, custom_id: null, value: null };
                            ({ type: obj9[0], customId: obj9[1] } = item);
                            type = undefined;
                            if (iter3 != null) {
                              type = iter3.type;
                            }
                            let value = null;
                            if (type === item.type) {
                              value = iter3.value;
                            }
                            obj[2] = value;
                            return obj;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let type1;
                            if (interactionComponentState != null) {
                              type1 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type1 === item.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj1 = { type: null, custom_id: null, values: null };
                            ({ type: obj8[0], customId: obj8[1] } = item);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj1[2] = mapped;
                            return obj1;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let obj2 = { type: null, custom_id: null, values: null };
                            ({ type: obj7[0], customId: obj7[1] } = item);
                            let type2;
                            if (interactionComponentState1 != null) {
                              type2 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type2 === item.type) {
                              values = interactionComponentState1.values;
                            }
                            obj2[2] = values;
                            return obj2;
                          } else {
                            if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                              if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj3 = { type: null };
                                      obj3[0] = item.type;
                                      return obj3;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                      let obj4 = { type: null, component: null };
                                      obj4[0] = item.type;
                                      let items = [item.component];
                                      obj4[1] = items.map(() => { ... })[0];
                                      return obj4;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3[0], customId: obj3[1] } = item);
                                      let type3;
                                      if (iter2 != null) {
                                        type3 = iter2.type;
                                      }
                                      value = null;
                                      if (type3 === item.type) {
                                        value = iter2.value;
                                      }
                                      obj5[2] = value;
                                      return obj5;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj6 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2[0], customId: obj2[1] } = item);
                                      let type4;
                                      if (interactionComponentState2 != null) {
                                        type4 = interactionComponentState2.type;
                                      }
                                      values = null;
                                      if (type4 === item.type) {
                                        values = interactionComponentState2.values;
                                      }
                                      obj6[2] = values;
                                      return obj6;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj[0], customId: obj[1] } = item);
                                      let type5;
                                      if (iter != null) {
                                        type5 = iter.type;
                                      }
                                      obj[2] = type5 === item.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_1_1(closure_1_2[23])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let obj7 = { type: null, custom_id: null, values: null };
                            ({ type: obj6[0], customId: obj6[1] } = item);
                            let type6;
                            if (interactionComponentState3 != null) {
                              type6 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type6 === item.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj7[2] = mapped1;
                            return obj7;
                          }
                        })[0];
                        return obj4;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                        let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        let obj5 = { type: null, custom_id: null, value: null };
                        ({ type: obj3[0], customId: obj3[1] } = item);
                        let type3;
                        if (iter2 != null) {
                          type3 = iter2.type;
                        }
                        value = null;
                        if (type3 === item.type) {
                          value = iter2.value;
                        }
                        obj5[2] = value;
                        return obj5;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                        let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        let obj6 = { type: null, custom_id: null, values: null };
                        ({ type: obj2[0], customId: obj2[1] } = item);
                        let type4;
                        if (interactionComponentState2 != null) {
                          type4 = interactionComponentState2.type;
                        }
                        values = null;
                        if (type4 === item.type) {
                          values = interactionComponentState2.values;
                        }
                        obj6[2] = values;
                        return obj6;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                        let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        obj = { type: null, custom_id: null, value: null };
                        ({ type: obj[0], customId: obj[1] } = item);
                        let type5;
                        if (iter != null) {
                          type5 = iter.type;
                        }
                        obj[2] = type5 === item.type && iter.value;
                        return obj;
                      } else {
                        closure_1_1(closure_1_2[23])(false, "unreachable");
                      }
                    }
                  }
                }
              }
              let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
              let obj7 = { type: null, custom_id: null, values: null };
              ({ type: obj6[0], customId: obj6[1] } = item);
              let type6;
              if (interactionComponentState3 != null) {
                type6 = interactionComponentState3.type;
              }
              let mapped1 = null;
              if (type6 === item.type) {
                let selectedOptions = interactionComponentState3.selectedOptions;
                mapped1 = selectedOptions.map((item, index) => item.value);
              }
              obj7[2] = mapped1;
              return obj7;
            }
          });
          return obj;
        } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
          let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
          obj = { type: null, custom_id: null, value: null };
          ({ type: obj9[0], customId: obj9[1] } = item);
          type = undefined;
          if (iter3 != null) {
            type = iter3.type;
          }
          let value = null;
          if (type === item.type) {
            value = iter3.value;
          }
          obj[2] = value;
          return obj;
        } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
          let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
          let type1;
          if (interactionComponentState != null) {
            type1 = interactionComponentState.type;
          }
          let uploadIds = null;
          if (type1 === item.type) {
            uploadIds = interactionComponentState.uploadIds;
          }
          let obj1 = { type: null, custom_id: null, values: null };
          ({ type: obj8[0], customId: obj8[1] } = item);
          let mapped;
          if (uploadIds != null) {
            mapped = uploadIds.map((item, index) => {
              closure_0 = item;
              uploads = uploads.uploads;
              return uploads.findIndex((item, index) => item.id === closure_0);
            });
          }
          if (mapped == null) {
            mapped = null;
          }
          obj1[2] = mapped;
          return obj1;
        } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
          let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
          let obj2 = { type: null, custom_id: null, values: null };
          ({ type: obj7[0], customId: obj7[1] } = item);
          let type2;
          if (interactionComponentState1 != null) {
            type2 = interactionComponentState1.type;
          }
          let values = null;
          if (type2 === item.type) {
            values = interactionComponentState1.values;
          }
          obj2[2] = values;
          return obj2;
        } else {
          if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
            if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
              if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                  if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                    let obj3 = { type: null };
                    obj3[0] = item.type;
                    return obj3;
                  } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                    let obj4 = { type: null, component: null };
                    obj4[0] = item.type;
                    let items = [item.component];
                    obj4[1] = items.map((item, index) => {
                      let type = item.type;
                      if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                        let obj = { type: null, components: null };
                        obj[0] = item.type;
                        let components = item.components;
                        obj[1] = components.map((item, index) => {
                          let type = item.type;
                          if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj = { type: null, components: null };
                            obj[0] = item.type;
                            let components = item.components;
                            obj[1] = components.map(() => { ... });
                            return obj;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            obj = { type: null, custom_id: null, value: null };
                            ({ type: obj9[0], customId: obj9[1] } = item);
                            type = undefined;
                            if (iter3 != null) {
                              type = iter3.type;
                            }
                            let value = null;
                            if (type === item.type) {
                              value = iter3.value;
                            }
                            obj[2] = value;
                            return obj;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let type1;
                            if (interactionComponentState != null) {
                              type1 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type1 === item.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj1 = { type: null, custom_id: null, values: null };
                            ({ type: obj8[0], customId: obj8[1] } = item);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj1[2] = mapped;
                            return obj1;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let obj2 = { type: null, custom_id: null, values: null };
                            ({ type: obj7[0], customId: obj7[1] } = item);
                            let type2;
                            if (interactionComponentState1 != null) {
                              type2 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type2 === item.type) {
                              values = interactionComponentState1.values;
                            }
                            obj2[2] = values;
                            return obj2;
                          } else {
                            if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                              if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj3 = { type: null };
                                      obj3[0] = item.type;
                                      return obj3;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                      let obj4 = { type: null, component: null };
                                      obj4[0] = item.type;
                                      let items = [item.component];
                                      obj4[1] = items.map(() => { ... })[0];
                                      return obj4;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3[0], customId: obj3[1] } = item);
                                      let type3;
                                      if (iter2 != null) {
                                        type3 = iter2.type;
                                      }
                                      value = null;
                                      if (type3 === item.type) {
                                        value = iter2.value;
                                      }
                                      obj5[2] = value;
                                      return obj5;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj6 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2[0], customId: obj2[1] } = item);
                                      let type4;
                                      if (interactionComponentState2 != null) {
                                        type4 = interactionComponentState2.type;
                                      }
                                      values = null;
                                      if (type4 === item.type) {
                                        values = interactionComponentState2.values;
                                      }
                                      obj6[2] = values;
                                      return obj6;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj[0], customId: obj[1] } = item);
                                      let type5;
                                      if (iter != null) {
                                        type5 = iter.type;
                                      }
                                      obj[2] = type5 === item.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_1_1(closure_1_2[23])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let obj7 = { type: null, custom_id: null, values: null };
                            ({ type: obj6[0], customId: obj6[1] } = item);
                            let type6;
                            if (interactionComponentState3 != null) {
                              type6 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type6 === item.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj7[2] = mapped1;
                            return obj7;
                          }
                        });
                        return obj;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                        let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        obj = { type: null, custom_id: null, value: null };
                        ({ type: obj9[0], customId: obj9[1] } = item);
                        type = undefined;
                        if (iter3 != null) {
                          type = iter3.type;
                        }
                        let value = null;
                        if (type === item.type) {
                          value = iter3.value;
                        }
                        obj[2] = value;
                        return obj;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                        let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        let type1;
                        if (interactionComponentState != null) {
                          type1 = interactionComponentState.type;
                        }
                        let uploadIds = null;
                        if (type1 === item.type) {
                          uploadIds = interactionComponentState.uploadIds;
                        }
                        let obj1 = { type: null, custom_id: null, values: null };
                        ({ type: obj8[0], customId: obj8[1] } = item);
                        let mapped;
                        if (uploadIds != null) {
                          mapped = uploadIds.map((item, index) => {
                            closure_0 = item;
                            uploads = uploads.uploads;
                            return uploads.findIndex(() => { ... });
                          });
                        }
                        if (mapped == null) {
                          mapped = null;
                        }
                        obj1[2] = mapped;
                        return obj1;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                        let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        let obj2 = { type: null, custom_id: null, values: null };
                        ({ type: obj7[0], customId: obj7[1] } = item);
                        let type2;
                        if (interactionComponentState1 != null) {
                          type2 = interactionComponentState1.type;
                        }
                        let values = null;
                        if (type2 === item.type) {
                          values = interactionComponentState1.values;
                        }
                        obj2[2] = values;
                        return obj2;
                      } else {
                        if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                          if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                            if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                              if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                  let obj3 = { type: null };
                                  obj3[0] = item.type;
                                  return obj3;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                  let obj4 = { type: null, component: null };
                                  obj4[0] = item.type;
                                  let items = [item.component];
                                  obj4[1] = items.map((item, index) => {
                                    let type = item.type;
                                    if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj = { type: null, components: null };
                                      obj[0] = item.type;
                                      let components = item.components;
                                      obj[1] = components.map(() => { ... });
                                      return obj;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj9[0], customId: obj9[1] } = item);
                                      type = undefined;
                                      if (iter3 != null) {
                                        type = iter3.type;
                                      }
                                      let value = null;
                                      if (type === item.type) {
                                        value = iter3.value;
                                      }
                                      obj[2] = value;
                                      return obj;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let type1;
                                      if (interactionComponentState != null) {
                                        type1 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type1 === item.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj1 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8[0], customId: obj8[1] } = item);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj1[2] = mapped;
                                      return obj1;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj2 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7[0], customId: obj7[1] } = item);
                                      let type2;
                                      if (interactionComponentState1 != null) {
                                        type2 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type2 === item.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj2[2] = values;
                                      return obj2;
                                    } else {
                                      if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                                        if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj3 = { type: null };
                                                obj3[0] = item.type;
                                                return obj3;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                                let obj4 = { type: null, component: null };
                                                obj4[0] = item.type;
                                                let items = [item.component];
                                                obj4[1] = items.map(() => { ... })[0];
                                                return obj4;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let obj5 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3[0], customId: obj3[1] } = item);
                                                let type3;
                                                if (iter2 != null) {
                                                  type3 = iter2.type;
                                                }
                                                value = null;
                                                if (type3 === item.type) {
                                                  value = iter2.value;
                                                }
                                                obj5[2] = value;
                                                return obj5;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let obj6 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2[0], customId: obj2[1] } = item);
                                                let type4;
                                                if (interactionComponentState2 != null) {
                                                  type4 = interactionComponentState2.type;
                                                }
                                                values = null;
                                                if (type4 === item.type) {
                                                  values = interactionComponentState2.values;
                                                }
                                                obj6[2] = values;
                                                return obj6;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj[0], customId: obj[1] } = item);
                                                let type5;
                                                if (iter != null) {
                                                  type5 = iter.type;
                                                }
                                                obj[2] = type5 === item.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_1_1(closure_1_2[23])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj7 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6[0], customId: obj6[1] } = item);
                                      let type6;
                                      if (interactionComponentState3 != null) {
                                        type6 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type6 === item.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj7[2] = mapped1;
                                      return obj7;
                                    }
                                  })[0];
                                  return obj4;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                  let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  let obj5 = { type: null, custom_id: null, value: null };
                                  ({ type: obj3[0], customId: obj3[1] } = item);
                                  let type3;
                                  if (iter2 != null) {
                                    type3 = iter2.type;
                                  }
                                  value = null;
                                  if (type3 === item.type) {
                                    value = iter2.value;
                                  }
                                  obj5[2] = value;
                                  return obj5;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                  let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  let obj6 = { type: null, custom_id: null, values: null };
                                  ({ type: obj2[0], customId: obj2[1] } = item);
                                  let type4;
                                  if (interactionComponentState2 != null) {
                                    type4 = interactionComponentState2.type;
                                  }
                                  values = null;
                                  if (type4 === item.type) {
                                    values = interactionComponentState2.values;
                                  }
                                  obj6[2] = values;
                                  return obj6;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                  let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  obj = { type: null, custom_id: null, value: null };
                                  ({ type: obj[0], customId: obj[1] } = item);
                                  let type5;
                                  if (iter != null) {
                                    type5 = iter.type;
                                  }
                                  obj[2] = type5 === item.type && iter.value;
                                  return obj;
                                } else {
                                  closure_1_1(closure_1_2[23])(false, "unreachable");
                                }
                              }
                            }
                          }
                        }
                        let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        let obj7 = { type: null, custom_id: null, values: null };
                        ({ type: obj6[0], customId: obj6[1] } = item);
                        let type6;
                        if (interactionComponentState3 != null) {
                          type6 = interactionComponentState3.type;
                        }
                        let mapped1 = null;
                        if (type6 === item.type) {
                          let selectedOptions = interactionComponentState3.selectedOptions;
                          mapped1 = selectedOptions.map((item, index) => item.value);
                        }
                        obj7[2] = mapped1;
                        return obj7;
                      }
                    })[0];
                    return obj4;
                  } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                    let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                    let obj5 = { type: null, custom_id: null, value: null };
                    ({ type: obj3[0], customId: obj3[1] } = item);
                    let type3;
                    if (iter2 != null) {
                      type3 = iter2.type;
                    }
                    value = null;
                    if (type3 === item.type) {
                      value = iter2.value;
                    }
                    obj5[2] = value;
                    return obj5;
                  } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                    let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                    let obj6 = { type: null, custom_id: null, values: null };
                    ({ type: obj2[0], customId: obj2[1] } = item);
                    let type4;
                    if (interactionComponentState2 != null) {
                      type4 = interactionComponentState2.type;
                    }
                    values = null;
                    if (type4 === item.type) {
                      values = interactionComponentState2.values;
                    }
                    obj6[2] = values;
                    return obj6;
                  } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                    let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                    obj = { type: null, custom_id: null, value: null };
                    ({ type: obj[0], customId: obj[1] } = item);
                    let type5;
                    if (iter != null) {
                      type5 = iter.type;
                    }
                    obj[2] = type5 === item.type && iter.value;
                    return obj;
                  } else {
                    closure_1_1(closure_1_2[23])(false, "unreachable");
                  }
                }
              }
            }
          }
          let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
          let obj7 = { type: null, custom_id: null, values: null };
          ({ type: obj6[0], customId: obj6[1] } = item);
          let type6;
          if (interactionComponentState3 != null) {
            type6 = interactionComponentState3.type;
          }
          let mapped1 = null;
          if (type6 === item.type) {
            let selectedOptions = interactionComponentState3.selectedOptions;
            mapped1 = selectedOptions.map((item, index) => item.value);
          }
          obj7[2] = mapped1;
          return obj7;
        }
      });
      return obj;
    } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
      let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
      obj = { type: null, custom_id: null, value: null };
      ({ type: obj9[0], customId: obj9[1] } = item);
      type = undefined;
      if (iter3 != null) {
        type = iter3.type;
      }
      let value = null;
      if (type === item.type) {
        value = iter3.value;
      }
      obj[2] = value;
      return obj;
    } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
      let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
      let type1;
      if (interactionComponentState != null) {
        type1 = interactionComponentState.type;
      }
      let uploadIds = null;
      if (type1 === item.type) {
        uploadIds = interactionComponentState.uploadIds;
      }
      let obj1 = { type: null, custom_id: null, values: null };
      ({ type: obj8[0], customId: obj8[1] } = item);
      let mapped;
      if (uploadIds != null) {
        mapped = uploadIds.map((item, index) => {
          closure_0 = item;
          uploads = uploads.uploads;
          return uploads.findIndex((item, index) => item.id === closure_0);
        });
      }
      if (mapped == null) {
        mapped = null;
      }
      obj1[2] = mapped;
      return obj1;
    } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
      let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
      let obj2 = { type: null, custom_id: null, values: null };
      ({ type: obj7[0], customId: obj7[1] } = item);
      let type2;
      if (interactionComponentState1 != null) {
        type2 = interactionComponentState1.type;
      }
      let values = null;
      if (type2 === item.type) {
        values = interactionComponentState1.values;
      }
      obj2[2] = values;
      return obj2;
    } else {
      if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
        if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
          if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
            if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
              if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                let obj3 = { type: null };
                obj3[0] = item.type;
                return obj3;
              } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                let obj4 = { type: null, component: null };
                obj4[0] = item.type;
                let items = [item.component];
                obj4[1] = items.map((item, index) => {
                  let type = item.type;
                  if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                    let obj = { type: null, components: null };
                    obj[0] = item.type;
                    let components = item.components;
                    obj[1] = components.map((item, index) => {
                      let type = item.type;
                      if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                        let obj = { type: null, components: null };
                        obj[0] = item.type;
                        let components = item.components;
                        obj[1] = components.map((item, index) => {
                          let type = item.type;
                          if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj = { type: null, components: null };
                            obj[0] = item.type;
                            let components = item.components;
                            obj[1] = components.map(() => { ... });
                            return obj;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            obj = { type: null, custom_id: null, value: null };
                            ({ type: obj9[0], customId: obj9[1] } = item);
                            type = undefined;
                            if (iter3 != null) {
                              type = iter3.type;
                            }
                            let value = null;
                            if (type === item.type) {
                              value = iter3.value;
                            }
                            obj[2] = value;
                            return obj;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let type1;
                            if (interactionComponentState != null) {
                              type1 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type1 === item.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj1 = { type: null, custom_id: null, values: null };
                            ({ type: obj8[0], customId: obj8[1] } = item);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj1[2] = mapped;
                            return obj1;
                          } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let obj2 = { type: null, custom_id: null, values: null };
                            ({ type: obj7[0], customId: obj7[1] } = item);
                            let type2;
                            if (interactionComponentState1 != null) {
                              type2 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type2 === item.type) {
                              values = interactionComponentState1.values;
                            }
                            obj2[2] = values;
                            return obj2;
                          } else {
                            if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                              if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj3 = { type: null };
                                      obj3[0] = item.type;
                                      return obj3;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                      let obj4 = { type: null, component: null };
                                      obj4[0] = item.type;
                                      let items = [item.component];
                                      obj4[1] = items.map(() => { ... })[0];
                                      return obj4;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3[0], customId: obj3[1] } = item);
                                      let type3;
                                      if (iter2 != null) {
                                        type3 = iter2.type;
                                      }
                                      value = null;
                                      if (type3 === item.type) {
                                        value = iter2.value;
                                      }
                                      obj5[2] = value;
                                      return obj5;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj6 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2[0], customId: obj2[1] } = item);
                                      let type4;
                                      if (interactionComponentState2 != null) {
                                        type4 = interactionComponentState2.type;
                                      }
                                      values = null;
                                      if (type4 === item.type) {
                                        values = interactionComponentState2.values;
                                      }
                                      obj6[2] = values;
                                      return obj6;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj[0], customId: obj[1] } = item);
                                      let type5;
                                      if (iter != null) {
                                        type5 = iter.type;
                                      }
                                      obj[2] = type5 === item.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_1_1(closure_1_2[23])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                            let obj7 = { type: null, custom_id: null, values: null };
                            ({ type: obj6[0], customId: obj6[1] } = item);
                            let type6;
                            if (interactionComponentState3 != null) {
                              type6 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type6 === item.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj7[2] = mapped1;
                            return obj7;
                          }
                        });
                        return obj;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                        let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        obj = { type: null, custom_id: null, value: null };
                        ({ type: obj9[0], customId: obj9[1] } = item);
                        type = undefined;
                        if (iter3 != null) {
                          type = iter3.type;
                        }
                        let value = null;
                        if (type === item.type) {
                          value = iter3.value;
                        }
                        obj[2] = value;
                        return obj;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                        let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        let type1;
                        if (interactionComponentState != null) {
                          type1 = interactionComponentState.type;
                        }
                        let uploadIds = null;
                        if (type1 === item.type) {
                          uploadIds = interactionComponentState.uploadIds;
                        }
                        let obj1 = { type: null, custom_id: null, values: null };
                        ({ type: obj8[0], customId: obj8[1] } = item);
                        let mapped;
                        if (uploadIds != null) {
                          mapped = uploadIds.map((item, index) => {
                            closure_0 = item;
                            uploads = uploads.uploads;
                            return uploads.findIndex(() => { ... });
                          });
                        }
                        if (mapped == null) {
                          mapped = null;
                        }
                        obj1[2] = mapped;
                        return obj1;
                      } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                        let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        let obj2 = { type: null, custom_id: null, values: null };
                        ({ type: obj7[0], customId: obj7[1] } = item);
                        let type2;
                        if (interactionComponentState1 != null) {
                          type2 = interactionComponentState1.type;
                        }
                        let values = null;
                        if (type2 === item.type) {
                          values = interactionComponentState1.values;
                        }
                        obj2[2] = values;
                        return obj2;
                      } else {
                        if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                          if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                            if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                              if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                  let obj3 = { type: null };
                                  obj3[0] = item.type;
                                  return obj3;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                  let obj4 = { type: null, component: null };
                                  obj4[0] = item.type;
                                  let items = [item.component];
                                  obj4[1] = items.map((item, index) => {
                                    let type = item.type;
                                    if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj = { type: null, components: null };
                                      obj[0] = item.type;
                                      let components = item.components;
                                      obj[1] = components.map(() => { ... });
                                      return obj;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj9[0], customId: obj9[1] } = item);
                                      type = undefined;
                                      if (iter3 != null) {
                                        type = iter3.type;
                                      }
                                      let value = null;
                                      if (type === item.type) {
                                        value = iter3.value;
                                      }
                                      obj[2] = value;
                                      return obj;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let type1;
                                      if (interactionComponentState != null) {
                                        type1 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type1 === item.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj1 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8[0], customId: obj8[1] } = item);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj1[2] = mapped;
                                      return obj1;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj2 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7[0], customId: obj7[1] } = item);
                                      let type2;
                                      if (interactionComponentState1 != null) {
                                        type2 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type2 === item.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj2[2] = values;
                                      return obj2;
                                    } else {
                                      if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                                        if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj3 = { type: null };
                                                obj3[0] = item.type;
                                                return obj3;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                                let obj4 = { type: null, component: null };
                                                obj4[0] = item.type;
                                                let items = [item.component];
                                                obj4[1] = items.map(() => { ... })[0];
                                                return obj4;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let obj5 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3[0], customId: obj3[1] } = item);
                                                let type3;
                                                if (iter2 != null) {
                                                  type3 = iter2.type;
                                                }
                                                value = null;
                                                if (type3 === item.type) {
                                                  value = iter2.value;
                                                }
                                                obj5[2] = value;
                                                return obj5;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let obj6 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2[0], customId: obj2[1] } = item);
                                                let type4;
                                                if (interactionComponentState2 != null) {
                                                  type4 = interactionComponentState2.type;
                                                }
                                                values = null;
                                                if (type4 === item.type) {
                                                  values = interactionComponentState2.values;
                                                }
                                                obj6[2] = values;
                                                return obj6;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj[0], customId: obj[1] } = item);
                                                let type5;
                                                if (iter != null) {
                                                  type5 = iter.type;
                                                }
                                                obj[2] = type5 === item.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_1_1(closure_1_2[23])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj7 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6[0], customId: obj6[1] } = item);
                                      let type6;
                                      if (interactionComponentState3 != null) {
                                        type6 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type6 === item.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj7[2] = mapped1;
                                      return obj7;
                                    }
                                  })[0];
                                  return obj4;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                  let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  let obj5 = { type: null, custom_id: null, value: null };
                                  ({ type: obj3[0], customId: obj3[1] } = item);
                                  let type3;
                                  if (iter2 != null) {
                                    type3 = iter2.type;
                                  }
                                  value = null;
                                  if (type3 === item.type) {
                                    value = iter2.value;
                                  }
                                  obj5[2] = value;
                                  return obj5;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                  let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  let obj6 = { type: null, custom_id: null, values: null };
                                  ({ type: obj2[0], customId: obj2[1] } = item);
                                  let type4;
                                  if (interactionComponentState2 != null) {
                                    type4 = interactionComponentState2.type;
                                  }
                                  values = null;
                                  if (type4 === item.type) {
                                    values = interactionComponentState2.values;
                                  }
                                  obj6[2] = values;
                                  return obj6;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                  let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  obj = { type: null, custom_id: null, value: null };
                                  ({ type: obj[0], customId: obj[1] } = item);
                                  let type5;
                                  if (iter != null) {
                                    type5 = iter.type;
                                  }
                                  obj[2] = type5 === item.type && iter.value;
                                  return obj;
                                } else {
                                  closure_1_1(closure_1_2[23])(false, "unreachable");
                                }
                              }
                            }
                          }
                        }
                        let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                        let obj7 = { type: null, custom_id: null, values: null };
                        ({ type: obj6[0], customId: obj6[1] } = item);
                        let type6;
                        if (interactionComponentState3 != null) {
                          type6 = interactionComponentState3.type;
                        }
                        let mapped1 = null;
                        if (type6 === item.type) {
                          let selectedOptions = interactionComponentState3.selectedOptions;
                          mapped1 = selectedOptions.map((item, index) => item.value);
                        }
                        obj7[2] = mapped1;
                        return obj7;
                      }
                    });
                    return obj;
                  } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                    let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                    obj = { type: null, custom_id: null, value: null };
                    ({ type: obj9[0], customId: obj9[1] } = item);
                    type = undefined;
                    if (iter3 != null) {
                      type = iter3.type;
                    }
                    let value = null;
                    if (type === item.type) {
                      value = iter3.value;
                    }
                    obj[2] = value;
                    return obj;
                  } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                    let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                    let type1;
                    if (interactionComponentState != null) {
                      type1 = interactionComponentState.type;
                    }
                    let uploadIds = null;
                    if (type1 === item.type) {
                      uploadIds = interactionComponentState.uploadIds;
                    }
                    let obj1 = { type: null, custom_id: null, values: null };
                    ({ type: obj8[0], customId: obj8[1] } = item);
                    let mapped;
                    if (uploadIds != null) {
                      mapped = uploadIds.map((item, index) => {
                        closure_0 = item;
                        uploads = uploads.uploads;
                        return uploads.findIndex((item, index) => item.id === closure_0);
                      });
                    }
                    if (mapped == null) {
                      mapped = null;
                    }
                    obj1[2] = mapped;
                    return obj1;
                  } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                    let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                    let obj2 = { type: null, custom_id: null, values: null };
                    ({ type: obj7[0], customId: obj7[1] } = item);
                    let type2;
                    if (interactionComponentState1 != null) {
                      type2 = interactionComponentState1.type;
                    }
                    let values = null;
                    if (type2 === item.type) {
                      values = interactionComponentState1.values;
                    }
                    obj2[2] = values;
                    return obj2;
                  } else {
                    if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                      if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                        if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                          if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                            if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                              let obj3 = { type: null };
                              obj3[0] = item.type;
                              return obj3;
                            } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                              let obj4 = { type: null, component: null };
                              obj4[0] = item.type;
                              let items = [item.component];
                              obj4[1] = items.map((item, index) => {
                                let type = item.type;
                                if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                  let obj = { type: null, components: null };
                                  obj[0] = item.type;
                                  let components = item.components;
                                  obj[1] = components.map((item, index) => {
                                    let type = item.type;
                                    if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj = { type: null, components: null };
                                      obj[0] = item.type;
                                      let components = item.components;
                                      obj[1] = components.map(() => { ... });
                                      return obj;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj9[0], customId: obj9[1] } = item);
                                      type = undefined;
                                      if (iter3 != null) {
                                        type = iter3.type;
                                      }
                                      let value = null;
                                      if (type === item.type) {
                                        value = iter3.value;
                                      }
                                      obj[2] = value;
                                      return obj;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let type1;
                                      if (interactionComponentState != null) {
                                        type1 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type1 === item.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj1 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8[0], customId: obj8[1] } = item);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj1[2] = mapped;
                                      return obj1;
                                    } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj2 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7[0], customId: obj7[1] } = item);
                                      let type2;
                                      if (interactionComponentState1 != null) {
                                        type2 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type2 === item.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj2[2] = values;
                                      return obj2;
                                    } else {
                                      if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                                        if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj3 = { type: null };
                                                obj3[0] = item.type;
                                                return obj3;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                                let obj4 = { type: null, component: null };
                                                obj4[0] = item.type;
                                                let items = [item.component];
                                                obj4[1] = items.map(() => { ... })[0];
                                                return obj4;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let obj5 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3[0], customId: obj3[1] } = item);
                                                let type3;
                                                if (iter2 != null) {
                                                  type3 = iter2.type;
                                                }
                                                value = null;
                                                if (type3 === item.type) {
                                                  value = iter2.value;
                                                }
                                                obj5[2] = value;
                                                return obj5;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let obj6 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2[0], customId: obj2[1] } = item);
                                                let type4;
                                                if (interactionComponentState2 != null) {
                                                  type4 = interactionComponentState2.type;
                                                }
                                                values = null;
                                                if (type4 === item.type) {
                                                  values = interactionComponentState2.values;
                                                }
                                                obj6[2] = values;
                                                return obj6;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj[0], customId: obj[1] } = item);
                                                let type5;
                                                if (iter != null) {
                                                  type5 = iter.type;
                                                }
                                                obj[2] = type5 === item.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_1_1(closure_1_2[23])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                      let obj7 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6[0], customId: obj6[1] } = item);
                                      let type6;
                                      if (interactionComponentState3 != null) {
                                        type6 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type6 === item.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj7[2] = mapped1;
                                      return obj7;
                                    }
                                  });
                                  return obj;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                                  let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  obj = { type: null, custom_id: null, value: null };
                                  ({ type: obj9[0], customId: obj9[1] } = item);
                                  type = undefined;
                                  if (iter3 != null) {
                                    type = iter3.type;
                                  }
                                  let value = null;
                                  if (type === item.type) {
                                    value = iter3.value;
                                  }
                                  obj[2] = value;
                                  return obj;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                                  let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  let type1;
                                  if (interactionComponentState != null) {
                                    type1 = interactionComponentState.type;
                                  }
                                  let uploadIds = null;
                                  if (type1 === item.type) {
                                    uploadIds = interactionComponentState.uploadIds;
                                  }
                                  let obj1 = { type: null, custom_id: null, values: null };
                                  ({ type: obj8[0], customId: obj8[1] } = item);
                                  let mapped;
                                  if (uploadIds != null) {
                                    mapped = uploadIds.map((item, index) => {
                                      closure_0 = item;
                                      uploads = uploads.uploads;
                                      return uploads.findIndex(() => { ... });
                                    });
                                  }
                                  if (mapped == null) {
                                    mapped = null;
                                  }
                                  obj1[2] = mapped;
                                  return obj1;
                                } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                                  let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  let obj2 = { type: null, custom_id: null, values: null };
                                  ({ type: obj7[0], customId: obj7[1] } = item);
                                  let type2;
                                  if (interactionComponentState1 != null) {
                                    type2 = interactionComponentState1.type;
                                  }
                                  let values = null;
                                  if (type2 === item.type) {
                                    values = interactionComponentState1.values;
                                  }
                                  obj2[2] = values;
                                  return obj2;
                                } else {
                                  if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                                    if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                                      if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                        if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                          if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                            let obj3 = { type: null };
                                            obj3[0] = item.type;
                                            return obj3;
                                          } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                            let obj4 = { type: null, component: null };
                                            obj4[0] = item.type;
                                            let items = [item.component];
                                            obj4[1] = items.map((item, index) => {
                                              let type = item.type;
                                              if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                                let obj = { type: null, components: null };
                                                obj[0] = item.type;
                                                let components = item.components;
                                                obj[1] = components.map(() => { ... });
                                                return obj;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_INPUT === type) {
                                                let iter3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj9[0], customId: obj9[1] } = item);
                                                type = undefined;
                                                if (iter3 != null) {
                                                  type = iter3.type;
                                                }
                                                let value = null;
                                                if (type === item.type) {
                                                  value = iter3.value;
                                                }
                                                obj[2] = value;
                                                return obj;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.FILE_UPLOAD === type) {
                                                let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let type1;
                                                if (interactionComponentState != null) {
                                                  type1 = interactionComponentState.type;
                                                }
                                                let uploadIds = null;
                                                if (type1 === item.type) {
                                                  uploadIds = interactionComponentState.uploadIds;
                                                }
                                                let obj1 = { type: null, custom_id: null, values: null };
                                                ({ type: obj8[0], customId: obj8[1] } = item);
                                                let mapped;
                                                if (uploadIds != null) {
                                                  mapped = uploadIds.map(() => { ... });
                                                }
                                                if (mapped == null) {
                                                  mapped = null;
                                                }
                                                obj1[2] = mapped;
                                                return obj1;
                                              } else if (closure_1_0(closure_1_2[13]).ComponentType.STRING_SELECT === type) {
                                                let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let obj2 = { type: null, custom_id: null, values: null };
                                                ({ type: obj7[0], customId: obj7[1] } = item);
                                                let type2;
                                                if (interactionComponentState1 != null) {
                                                  type2 = interactionComponentState1.type;
                                                }
                                                let values = null;
                                                if (type2 === item.type) {
                                                  values = interactionComponentState1.values;
                                                }
                                                obj2[2] = values;
                                                return obj2;
                                              } else {
                                                if (closure_1_0(closure_1_2[13]).ComponentType.USER_SELECT !== type) {
                                                  if (closure_1_0(closure_1_2[13]).ComponentType.ROLE_SELECT !== type) {
                                                    if (closure_1_0(closure_1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                                      if (closure_1_0(closure_1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                                        if (closure_1_0(closure_1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                          let obj3 = { type: null };
                                                          obj3[0] = item.type;
                                                          return obj3;
                                                        } else if (closure_1_0(closure_1_2[13]).ComponentType.LABEL === type) {
                                                          let obj4 = { type: null, component: null };
                                                          obj4[0] = item.type;
                                                          let items = [item.component];
                                                          obj4[1] = items.map(() => { ... })[0];
                                                          return obj4;
                                                        } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                                          let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                          let obj5 = { type: null, custom_id: null, value: null };
                                                          ({ type: obj3[0], customId: obj3[1] } = item);
                                                          let type3;
                                                          if (iter2 != null) {
                                                            type3 = iter2.type;
                                                          }
                                                          value = null;
                                                          if (type3 === item.type) {
                                                            value = iter2.value;
                                                          }
                                                          obj5[2] = value;
                                                          return obj5;
                                                        } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                                          let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                          let obj6 = { type: null, custom_id: null, values: null };
                                                          ({ type: obj2[0], customId: obj2[1] } = item);
                                                          let type4;
                                                          if (interactionComponentState2 != null) {
                                                            type4 = interactionComponentState2.type;
                                                          }
                                                          values = null;
                                                          if (type4 === item.type) {
                                                            values = interactionComponentState2.values;
                                                          }
                                                          obj6[2] = values;
                                                          return obj6;
                                                        } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                                          let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                          obj = { type: null, custom_id: null, value: null };
                                                          ({ type: obj[0], customId: obj[1] } = item);
                                                          let type5;
                                                          if (iter != null) {
                                                            type5 = iter.type;
                                                          }
                                                          obj[2] = type5 === item.type && iter.value;
                                                          return obj;
                                                        } else {
                                                          closure_1_1(closure_1_2[23])(false, "unreachable");
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                                let obj7 = { type: null, custom_id: null, values: null };
                                                ({ type: obj6[0], customId: obj6[1] } = item);
                                                let type6;
                                                if (interactionComponentState3 != null) {
                                                  type6 = interactionComponentState3.type;
                                                }
                                                let mapped1 = null;
                                                if (type6 === item.type) {
                                                  let selectedOptions = interactionComponentState3.selectedOptions;
                                                  mapped1 = selectedOptions.map(() => { ... });
                                                }
                                                obj7[2] = mapped1;
                                                return obj7;
                                              }
                                            })[0];
                                            return obj4;
                                          } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                                            let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                            let obj5 = { type: null, custom_id: null, value: null };
                                            ({ type: obj3[0], customId: obj3[1] } = item);
                                            let type3;
                                            if (iter2 != null) {
                                              type3 = iter2.type;
                                            }
                                            value = null;
                                            if (type3 === item.type) {
                                              value = iter2.value;
                                            }
                                            obj5[2] = value;
                                            return obj5;
                                          } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                            let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                            let obj6 = { type: null, custom_id: null, values: null };
                                            ({ type: obj2[0], customId: obj2[1] } = item);
                                            let type4;
                                            if (interactionComponentState2 != null) {
                                              type4 = interactionComponentState2.type;
                                            }
                                            values = null;
                                            if (type4 === item.type) {
                                              values = interactionComponentState2.values;
                                            }
                                            obj6[2] = values;
                                            return obj6;
                                          } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                                            let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                            obj = { type: null, custom_id: null, value: null };
                                            ({ type: obj[0], customId: obj[1] } = item);
                                            let type5;
                                            if (iter != null) {
                                              type5 = iter.type;
                                            }
                                            obj[2] = type5 === item.type && iter.value;
                                            return obj;
                                          } else {
                                            closure_1_1(closure_1_2[23])(false, "unreachable");
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                                  let obj7 = { type: null, custom_id: null, values: null };
                                  ({ type: obj6[0], customId: obj6[1] } = item);
                                  let type6;
                                  if (interactionComponentState3 != null) {
                                    type6 = interactionComponentState3.type;
                                  }
                                  let mapped1 = null;
                                  if (type6 === item.type) {
                                    let selectedOptions = interactionComponentState3.selectedOptions;
                                    mapped1 = selectedOptions.map((item, index) => item.value);
                                  }
                                  obj7[2] = mapped1;
                                  return obj7;
                                }
                              })[0];
                              return obj4;
                            } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                              let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                              let obj5 = { type: null, custom_id: null, value: null };
                              ({ type: obj3[0], customId: obj3[1] } = item);
                              let type3;
                              if (iter2 != null) {
                                type3 = iter2.type;
                              }
                              value = null;
                              if (type3 === item.type) {
                                value = iter2.value;
                              }
                              obj5[2] = value;
                              return obj5;
                            } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                              let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                              let obj6 = { type: null, custom_id: null, values: null };
                              ({ type: obj2[0], customId: obj2[1] } = item);
                              let type4;
                              if (interactionComponentState2 != null) {
                                type4 = interactionComponentState2.type;
                              }
                              values = null;
                              if (type4 === item.type) {
                                values = interactionComponentState2.values;
                              }
                              obj6[2] = values;
                              return obj6;
                            } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                              let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                              obj = { type: null, custom_id: null, value: null };
                              ({ type: obj[0], customId: obj[1] } = item);
                              let type5;
                              if (iter != null) {
                                type5 = iter.type;
                              }
                              obj[2] = type5 === item.type && iter.value;
                              return obj;
                            } else {
                              closure_1_1(closure_1_2[23])(false, "unreachable");
                            }
                          }
                        }
                      }
                    }
                    let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                    let obj7 = { type: null, custom_id: null, values: null };
                    ({ type: obj6[0], customId: obj6[1] } = item);
                    let type6;
                    if (interactionComponentState3 != null) {
                      type6 = interactionComponentState3.type;
                    }
                    let mapped1 = null;
                    if (type6 === item.type) {
                      let selectedOptions = interactionComponentState3.selectedOptions;
                      mapped1 = selectedOptions.map((item, index) => item.value);
                    }
                    obj7[2] = mapped1;
                    return obj7;
                  }
                })[0];
                return obj4;
              } else if (closure_1_0(closure_1_2[13]).ComponentType.RADIO_GROUP === type) {
                let iter2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                let obj5 = { type: null, custom_id: null, value: null };
                ({ type: obj3[0], customId: obj3[1] } = item);
                let type3;
                if (iter2 != null) {
                  type3 = iter2.type;
                }
                value = null;
                if (type3 === item.type) {
                  value = iter2.value;
                }
                obj5[2] = value;
                return obj5;
              } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, item.id);
                let obj6 = { type: null, custom_id: null, values: null };
                ({ type: obj2[0], customId: obj2[1] } = item);
                let type4;
                if (interactionComponentState2 != null) {
                  type4 = interactionComponentState2.type;
                }
                values = null;
                if (type4 === item.type) {
                  values = interactionComponentState2.values;
                }
                obj6[2] = values;
                return obj6;
              } else if (closure_1_0(closure_1_2[13]).ComponentType.CHECKBOX === type) {
                let iter = closure_1_14.getInteractionComponentState(closure_0, item.id);
                obj = { type: null, custom_id: null, value: null };
                ({ type: obj[0], customId: obj[1] } = item);
                let type5;
                if (iter != null) {
                  type5 = iter.type;
                }
                obj[2] = type5 === item.type && iter.value;
                return obj;
              } else {
                closure_1_1(closure_1_2[23])(false, "unreachable");
              }
            }
          }
        }
      }
      let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, item.id);
      let obj7 = { type: null, custom_id: null, values: null };
      ({ type: obj6[0], customId: obj6[1] } = item);
      let type6;
      if (interactionComponentState3 != null) {
        type6 = interactionComponentState3.type;
      }
      let mapped1 = null;
      if (type6 === item.type) {
        let selectedOptions = interactionComponentState3.selectedOptions;
        mapped1 = selectedOptions.map((item, index) => item.value);
      }
      obj7[2] = mapped1;
      return obj7;
    }
  });
}
function getUploadsForModal(id) {
  closure_0 = arg1;
  uploads = uploads.getUploads(id, DraftType.InteractionModal);
  return uploads.filter((item, index) => {
    const result = callback(customId[24]).deserializeComponentUploadId(item.id);
    let containerId;
    if (result != null) {
      containerId = result.containerId;
    }
    return containerId === callback;
  });
}
function submitModal() {
  const self = this;
  const apply = _submitModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitModal() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === closure_5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let arr = tmp3;
              let channel = tmp2;
              channel = undefined;
              arr = undefined;
              closure_5 = undefined;
              c6 = undefined;
              const channelId = lib.channelId;
              channel = closure_1_7.getChannel(channelId);
              callback(table[23])(null != channel, "expected channel");
              arr = closure_1_17(channelId, lib.customId);
              let tmp7;
              if (arr.length > 0) {
                tmp7 = callback(table[25])(arr);
              }
              obj1 = lib(table[26]);
              obj1 = { data: null, preflight: null };
              const obj2 = { interactionType: null, applicationId: null };
              obj2[0] = lib(table[13]).InteractionTypes.MODAL_SUBMIT;
              obj2[1] = lib.application.id;
              obj1[0] = obj2;
              obj1[1] = tmp7;
              obj1.addQueued(table, obj1);
              closure_5 = 1;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = tmp7;
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_5 = arr.map((item, index) => lib(4830).getAttachmentPayload(item, index));
            const obj4 = { uploads: null };
            obj4[0] = arr;
            c6 = callback2(lib.customId, lib.components, obj4);
            function send() {
              if (null != channel) {
                let aborted;
                if (aborted != null) {
                  aborted = aborted.aborted;
                }
                if (!aborted) {
                  const HTTP = lib(530).HTTP;
                  let obj = { url: null, body: null, signal: null, rejectWithError: false };
                  obj[0] = closure_1_15.INTERACTIONS;
                  obj = { type: null, application_id: null, channel_id: null, guild_id: null, data: null, session_id: null, nonce: null };
                  obj[0] = lib(1954).InteractionTypes.MODAL_SUBMIT;
                  obj[1] = lib.application.id;
                  ({ id: obj2[2], guild_id: obj2[3] } = channel);
                  obj = { id: null, custom_id: null, components: null, attachments: null };
                  ({ id: obj3[0], customId: obj3[1] } = lib);
                  obj[2] = sessionId;
                  let tmp9;
                  if (length.length > 0) {
                    tmp9 = length;
                  }
                  obj[3] = tmp9;
                  obj[4] = obj;
                  obj[5] = sessionId.getSessionId();
                  obj[6] = dependencyMap;
                  obj[1] = obj;
                  obj[2] = aborted;
                  HTTP.post(obj).catch((error) => {
                    if (429 === error.status) {
                      const _setTimeout = setTimeout;
                      const timerId = setTimeout(closure_7, error.body.retry_after * closure_1_1(closure_1_2[29]).Millis.SECOND);
                    } else {
                      closure_1_0(closure_1_2[26]).setFailed(closure_2);
                      const obj = closure_1_0(closure_1_2[26]);
                    }
                  });
                  const postResult = HTTP.post(obj);
                }
              }
            }
            send();
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp10) {
          c6 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("obj132").fileFinishedImporting("modules/interaction_components/InteractionModalUtils.tsx");

export const useIsFirstTextInputInModal = function useIsFirstTextInputInModal(id) {
  const componentStateContext = isInteractionComponent.useComponentStateContext();
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
  let tmp6 = type === PermissionOverwriteType.ComponentType.ACTION_ROW && first.components[0].id === id;
  if (!tmp6) {
    let type1;
    if (first != null) {
      type1 = first.type;
    }
    tmp6 = type1 === PermissionOverwriteType.ComponentType.LABEL && first.component.id === id;
  }
  return tmp6;
};
export const useModalState = function useModalState(channelId) {
  application = channelId;
  importDefault = arg1;
  ({ application, customId } = channelId);
  const tmp = importDefault(customId[16])();
  let callback = tmp;
  [tmp3, closure_4] = callback2(first.useState(null), 2);
  const tmp4 = callback2(first.useState(null), 2);
  first = tmp4[0];
  closure_6 = tmp4[1];
  const tmp2 = callback2(first.useState(null), 2);
  [tmp7, tmp8] = callback2(first.useState({}), 2);
  let obj = application(customId[17]);
  const items = [closure_12];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_12.getModalState(first), items1);
  const tmp10 = importDefault(customId[18])(() => new Set());
  closure_8 = tmp10;
  const items2 = [tmp, channelId, tmp10];
  const items3 = [first, stateFromStores, arg1, customId, channelId.channelId];
  callback = first.useCallback(callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c0 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1_4(null);
            closure_1_6(null);
            if ((function validate(closure_1_8) {
              c0 = true;
              const item = closure_1_8.forEach((item, index) => {
                if (!item()) {
                  c0 = false;
                }
              });
              return c0;
            })(closure_1_8)) {
              obj1 = v0(customId[19]);
              const _Date = Date;
              const fromTimestampResult = obj1.fromTimestamp(Date.now());
              closure_1_6(fromTimestampResult);
              v0 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_18(c0, closure_1_3, fromTimestampResult);
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp13) {
        c0 = tmp;
        throw tmp13;
      }
    }
  }), items2);
  const effect = first.useEffect(() => {
    if (stateFromStores === InteractionModalState.SUCCEEDED) {
      callback(customId[20]);
      const obj = { type: "CLEAR_INTERACTION_MODAL_STATE", customId: null };
      obj[1] = customId;
      obj.dispatch(obj);
      application = customId;
      const uploads = closure_1_11.getUploads(application.channelId, closure_8.InteractionModal);
      const found = uploads.filter((item, index) => {
        const result = callback(customId[24]).deserializeComponentUploadId(item.id);
        let containerId;
        if (result != null) {
          containerId = result.containerId;
        }
        return containerId === callback;
      });
      callback(customId[21]).removeFiles(application.channelId, found.map((item, index) => item.id), closure_8.InteractionModal);
      callback();
      const obj3 = callback(customId[21]);
    }
    if (stateFromStores === InteractionModalState.ERRORED) {
      const intl = application(customId[22]).intl;
      callback2(intl.string(application(customId[22]).t.uJgdEu));
    }
  }, items3);
  const items4 = [, , , ];
  ({ id: arr5[0], icon: arr5[1], name: arr5[2], bot: arr5[3] } = application);
  const memo = first.useMemo(() => {
    const guildId = closure_1_10.getGuildId();
    let member;
    if (null != guildId) {
      if (null != application.bot) {
        member = closure_1_9.getMember(guildId, tmp3.bot.id);
      }
    }
    let obj = { id: application.id, icon: application.icon, botIconFirst: true, bot: null, guildMember: null };
    let bot;
    if (null != member) {
      bot = application.bot;
    }
    obj = { applicationIconURL: obj.getApplicationIconURL(obj), applicationName: null, applicationBaseUrl: null };
    obj[3] = bot;
    obj[4] = member;
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
    obj[1] = name;
    obj[2] = getURLForApplicationDefault(application.id);
    return obj;
  }, items4);
  obj = { components: channelId.components, applicationIconURL: memo.applicationIconURL, applicationName: memo.applicationName, submissionState: stateFromStores, error: tmp3, validators: tmp10, validationErrors: tmp7, setValidationErrors: tmp8, onSubmit: callback };
  return obj;
};
export const useIframeModalState = function useIframeModalState(channelId) {
  ({ application, customId } = channelId);
  const items = [, , , ];
  ({ id: arr[0], icon: arr[1], name: arr[2], bot: arr[3] } = application);
  const memo = React.useMemo(() => {
    const guildId = closure_1_10.getGuildId();
    let member;
    if (null != guildId) {
      if (null != application.bot) {
        member = closure_1_9.getMember(guildId, tmp3.bot.id);
      }
    }
    let obj = { id: application.id, icon: application.icon, botIconFirst: true, bot: null, guildMember: null };
    let bot;
    if (null != member) {
      bot = application.bot;
    }
    obj = { applicationIconURL: obj.getApplicationIconURL(obj), applicationName: null, applicationBaseUrl: null };
    obj[3] = bot;
    obj[4] = member;
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
    obj[1] = name;
    obj[2] = getURLForApplicationDefault(application.id);
    return obj;
  }, items);
  const applicationBaseUrl = memo.applicationBaseUrl;
  ({ applicationIconURL, applicationName } = memo);
  channel = channel.getChannel(channelId.channelId);
  _modDef38(null != channel, "channel should not be null");
  let obj = { instance_id: "" + channelId.channelId + ":" + application.id + ":" + customId, custom_id: customId, channel_id: channelId.channelId };
  if (tmp4) {
    obj.guild_id = channel.guild_id;
  }
  let str = applicationBaseUrl;
  if (applicationBaseUrl == null) {
    str = "";
  }
  const str2 = new URL(str);
  str2.pathname = channelId.iframePath;
  obj = { applicationIconURL, applicationName, applicationBaseUrl, queryParams: obj, iframeUrl: str2.toString() };
  return obj;
};
export { submitModal };