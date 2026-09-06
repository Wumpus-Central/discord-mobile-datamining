// === Module 17390: getData ===

// Module 17390 (getData)
import _modDef38 from "module_38" /* 38 */;
import isInteractionComponent from "isInteractionComponent" /* 8112 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "fetchFingerprint" /* 502 */;
import closure_7 from "ensureGuildLoaded" /* 1957 */;
import { DraftType } from "handleChanged" /* 4901 */;
import closure_9 from "trackCommunicationDisabled" /* 2021 */;
import closure_10 from "handleConnectionOpen" /* 4381 */;
import closure_11 from "map" /* 4900 */;
import closure_12 from "getModalState" /* 14397 */;
import { InteractionModalState } from "getModalState" /* 14397 */;
import closure_14 from "getInteractionComponentStates" /* 8113 */;
import { Endpoints } from "ME" /* 1074 */;

require = arg1;
function getData(arg0, arr) {
  closure_0 = arg0;
  closure_1 = arg2;
  return arr.map((type) => {
    type = type.type;
    if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
      let obj = { type: null, components: null };
      obj[0] = type.type;
      let components = type.components;
      obj[1] = components.map((type) => {
        type = type.type;
        if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
          let obj = { type: null, components: null };
          obj[0] = type.type;
          let components = type.components;
          obj[1] = components.map((type) => {
            type = type.type;
            if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
              let obj = { type: null, components: null };
              obj[0] = type.type;
              let components = type.components;
              obj[1] = components.map((type) => {
                type = type.type;
                if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                  let obj = { type: null, components: null };
                  obj[0] = type.type;
                  let components = type.components;
                  obj[1] = components.map(() => { ... });
                  return obj;
                } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                  let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                  obj = { type: null, custom_id: null, value: null };
                  ({ type: obj9[0], customId: obj9[1] } = type);
                  type = undefined;
                  if (iter3 != null) {
                    type = iter3.type;
                  }
                  let value = null;
                  if (type === type.type) {
                    value = iter3.value;
                  }
                  obj[2] = value;
                  return obj;
                } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                  let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                  let type1;
                  if (interactionComponentState != null) {
                    type1 = interactionComponentState.type;
                  }
                  let uploadIds = null;
                  if (type1 === type.type) {
                    uploadIds = interactionComponentState.uploadIds;
                  }
                  let obj1 = { type: null, custom_id: null, values: null };
                  ({ type: obj8[0], customId: obj8[1] } = type);
                  let mapped;
                  if (uploadIds != null) {
                    mapped = uploadIds.map(() => { ... });
                  }
                  if (mapped == null) {
                    mapped = null;
                  }
                  obj1[2] = mapped;
                  return obj1;
                } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                  let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                  let obj2 = { type: null, custom_id: null, values: null };
                  ({ type: obj7[0], customId: obj7[1] } = type);
                  let type2;
                  if (interactionComponentState1 != null) {
                    type2 = interactionComponentState1.type;
                  }
                  let values = null;
                  if (type2 === type.type) {
                    values = interactionComponentState1.values;
                  }
                  obj2[2] = values;
                  return obj2;
                } else {
                  if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                    if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                      if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                        if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                          if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                            let obj3 = { type: null };
                            obj3[0] = type.type;
                            return obj3;
                          } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                            let obj4 = { type: null, component: null };
                            obj4[0] = type.type;
                            let items = [type.component];
                            obj4[1] = items.map(() => { ... })[0];
                            return obj4;
                          } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                            let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let obj5 = { type: null, custom_id: null, value: null };
                            ({ type: obj3[0], customId: obj3[1] } = type);
                            let type3;
                            if (iter2 != null) {
                              type3 = iter2.type;
                            }
                            value = null;
                            if (type3 === type.type) {
                              value = iter2.value;
                            }
                            obj5[2] = value;
                            return obj5;
                          } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                            let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let obj6 = { type: null, custom_id: null, values: null };
                            ({ type: obj2[0], customId: obj2[1] } = type);
                            let type4;
                            if (interactionComponentState2 != null) {
                              type4 = interactionComponentState2.type;
                            }
                            values = null;
                            if (type4 === type.type) {
                              values = interactionComponentState2.values;
                            }
                            obj6[2] = values;
                            return obj6;
                          } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                            let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            obj = { type: null, custom_id: null, value: null };
                            ({ type: obj[0], customId: obj[1] } = type);
                            let type5;
                            if (iter != null) {
                              type5 = iter.type;
                            }
                            obj[2] = type5 === type.type && iter.value;
                            return obj;
                          } else {
                            closure_1_1(tmp2[23])(false, "unreachable");
                          }
                        }
                      }
                    }
                  }
                  let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                  let obj7 = { type: null, custom_id: null, values: null };
                  ({ type: obj6[0], customId: obj6[1] } = type);
                  let type6;
                  if (interactionComponentState3 != null) {
                    type6 = interactionComponentState3.type;
                  }
                  let mapped1 = null;
                  if (type6 === type.type) {
                    let selectedOptions = interactionComponentState3.selectedOptions;
                    mapped1 = selectedOptions.map(() => { ... });
                  }
                  obj7[2] = mapped1;
                  return obj7;
                }
              });
              return obj;
            } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
              let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
              obj = { type: null, custom_id: null, value: null };
              ({ type: obj9[0], customId: obj9[1] } = type);
              type = undefined;
              if (iter3 != null) {
                type = iter3.type;
              }
              let value = null;
              if (type === type.type) {
                value = iter3.value;
              }
              obj[2] = value;
              return obj;
            } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
              let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
              let type1;
              if (interactionComponentState != null) {
                type1 = interactionComponentState.type;
              }
              let uploadIds = null;
              if (type1 === type.type) {
                uploadIds = interactionComponentState.uploadIds;
              }
              let obj1 = { type: null, custom_id: null, values: null };
              ({ type: obj8[0], customId: obj8[1] } = type);
              let mapped;
              if (uploadIds != null) {
                mapped = uploadIds.map((arg0) => {
                  closure_0 = arg0;
                  uploads = uploads.uploads;
                  return uploads.findIndex(() => { ... });
                });
              }
              if (mapped == null) {
                mapped = null;
              }
              obj1[2] = mapped;
              return obj1;
            } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
              let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
              let obj2 = { type: null, custom_id: null, values: null };
              ({ type: obj7[0], customId: obj7[1] } = type);
              let type2;
              if (interactionComponentState1 != null) {
                type2 = interactionComponentState1.type;
              }
              let values = null;
              if (type2 === type.type) {
                values = interactionComponentState1.values;
              }
              obj2[2] = values;
              return obj2;
            } else {
              if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                  if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                    if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                      if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                        let obj3 = { type: null };
                        obj3[0] = type.type;
                        return obj3;
                      } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                        let obj4 = { type: null, component: null };
                        obj4[0] = type.type;
                        let items = [type.component];
                        obj4[1] = items.map((type) => {
                          type = type.type;
                          if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj = { type: null, components: null };
                            obj[0] = type.type;
                            let components = type.components;
                            obj[1] = components.map(() => { ... });
                            return obj;
                          } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            obj = { type: null, custom_id: null, value: null };
                            ({ type: obj9[0], customId: obj9[1] } = type);
                            type = undefined;
                            if (iter3 != null) {
                              type = iter3.type;
                            }
                            let value = null;
                            if (type === type.type) {
                              value = iter3.value;
                            }
                            obj[2] = value;
                            return obj;
                          } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let type1;
                            if (interactionComponentState != null) {
                              type1 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type1 === type.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj1 = { type: null, custom_id: null, values: null };
                            ({ type: obj8[0], customId: obj8[1] } = type);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj1[2] = mapped;
                            return obj1;
                          } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let obj2 = { type: null, custom_id: null, values: null };
                            ({ type: obj7[0], customId: obj7[1] } = type);
                            let type2;
                            if (interactionComponentState1 != null) {
                              type2 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type2 === type.type) {
                              values = interactionComponentState1.values;
                            }
                            obj2[2] = values;
                            return obj2;
                          } else {
                            if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                              if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj3 = { type: null };
                                      obj3[0] = type.type;
                                      return obj3;
                                    } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                      let obj4 = { type: null, component: null };
                                      obj4[0] = type.type;
                                      let items = [type.component];
                                      obj4[1] = items.map(() => { ... })[0];
                                      return obj4;
                                    } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3[0], customId: obj3[1] } = type);
                                      let type3;
                                      if (iter2 != null) {
                                        type3 = iter2.type;
                                      }
                                      value = null;
                                      if (type3 === type.type) {
                                        value = iter2.value;
                                      }
                                      obj5[2] = value;
                                      return obj5;
                                    } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj6 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2[0], customId: obj2[1] } = type);
                                      let type4;
                                      if (interactionComponentState2 != null) {
                                        type4 = interactionComponentState2.type;
                                      }
                                      values = null;
                                      if (type4 === type.type) {
                                        values = interactionComponentState2.values;
                                      }
                                      obj6[2] = values;
                                      return obj6;
                                    } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj[0], customId: obj[1] } = type);
                                      let type5;
                                      if (iter != null) {
                                        type5 = iter.type;
                                      }
                                      obj[2] = type5 === type.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_1_1(tmp2[23])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let obj7 = { type: null, custom_id: null, values: null };
                            ({ type: obj6[0], customId: obj6[1] } = type);
                            let type6;
                            if (interactionComponentState3 != null) {
                              type6 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type6 === type.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj7[2] = mapped1;
                            return obj7;
                          }
                        })[0];
                        return obj4;
                      } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                        let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        let obj5 = { type: null, custom_id: null, value: null };
                        ({ type: obj3[0], customId: obj3[1] } = type);
                        let type3;
                        if (iter2 != null) {
                          type3 = iter2.type;
                        }
                        value = null;
                        if (type3 === type.type) {
                          value = iter2.value;
                        }
                        obj5[2] = value;
                        return obj5;
                      } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                        let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        let obj6 = { type: null, custom_id: null, values: null };
                        ({ type: obj2[0], customId: obj2[1] } = type);
                        let type4;
                        if (interactionComponentState2 != null) {
                          type4 = interactionComponentState2.type;
                        }
                        values = null;
                        if (type4 === type.type) {
                          values = interactionComponentState2.values;
                        }
                        obj6[2] = values;
                        return obj6;
                      } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                        let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        obj = { type: null, custom_id: null, value: null };
                        ({ type: obj[0], customId: obj[1] } = type);
                        let type5;
                        if (iter != null) {
                          type5 = iter.type;
                        }
                        obj[2] = type5 === type.type && iter.value;
                        return obj;
                      } else {
                        closure_1_1(tmp2[23])(false, "unreachable");
                      }
                    }
                  }
                }
              }
              let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
              let obj7 = { type: null, custom_id: null, values: null };
              ({ type: obj6[0], customId: obj6[1] } = type);
              let type6;
              if (interactionComponentState3 != null) {
                type6 = interactionComponentState3.type;
              }
              let mapped1 = null;
              if (type6 === type.type) {
                let selectedOptions = interactionComponentState3.selectedOptions;
                mapped1 = selectedOptions.map((value) => value.value);
              }
              obj7[2] = mapped1;
              return obj7;
            }
          });
          return obj;
        } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
          let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
          obj = { type: null, custom_id: null, value: null };
          ({ type: obj9[0], customId: obj9[1] } = type);
          type = undefined;
          if (iter3 != null) {
            type = iter3.type;
          }
          let value = null;
          if (type === type.type) {
            value = iter3.value;
          }
          obj[2] = value;
          return obj;
        } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
          let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
          let type1;
          if (interactionComponentState != null) {
            type1 = interactionComponentState.type;
          }
          let uploadIds = null;
          if (type1 === type.type) {
            uploadIds = interactionComponentState.uploadIds;
          }
          let obj1 = { type: null, custom_id: null, values: null };
          ({ type: obj8[0], customId: obj8[1] } = type);
          let mapped;
          if (uploadIds != null) {
            mapped = uploadIds.map((arg0) => {
              closure_0 = arg0;
              uploads = uploads.uploads;
              return uploads.findIndex((id) => id.id === closure_0);
            });
          }
          if (mapped == null) {
            mapped = null;
          }
          obj1[2] = mapped;
          return obj1;
        } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
          let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
          let obj2 = { type: null, custom_id: null, values: null };
          ({ type: obj7[0], customId: obj7[1] } = type);
          let type2;
          if (interactionComponentState1 != null) {
            type2 = interactionComponentState1.type;
          }
          let values = null;
          if (type2 === type.type) {
            values = interactionComponentState1.values;
          }
          obj2[2] = values;
          return obj2;
        } else {
          if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
            if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
              if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                  if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                    let obj3 = { type: null };
                    obj3[0] = type.type;
                    return obj3;
                  } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                    let obj4 = { type: null, component: null };
                    obj4[0] = type.type;
                    let items = [type.component];
                    obj4[1] = items.map((type) => {
                      type = type.type;
                      if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                        let obj = { type: null, components: null };
                        obj[0] = type.type;
                        let components = type.components;
                        obj[1] = components.map((type) => {
                          type = type.type;
                          if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj = { type: null, components: null };
                            obj[0] = type.type;
                            let components = type.components;
                            obj[1] = components.map(() => { ... });
                            return obj;
                          } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            obj = { type: null, custom_id: null, value: null };
                            ({ type: obj9[0], customId: obj9[1] } = type);
                            type = undefined;
                            if (iter3 != null) {
                              type = iter3.type;
                            }
                            let value = null;
                            if (type === type.type) {
                              value = iter3.value;
                            }
                            obj[2] = value;
                            return obj;
                          } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let type1;
                            if (interactionComponentState != null) {
                              type1 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type1 === type.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj1 = { type: null, custom_id: null, values: null };
                            ({ type: obj8[0], customId: obj8[1] } = type);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj1[2] = mapped;
                            return obj1;
                          } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let obj2 = { type: null, custom_id: null, values: null };
                            ({ type: obj7[0], customId: obj7[1] } = type);
                            let type2;
                            if (interactionComponentState1 != null) {
                              type2 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type2 === type.type) {
                              values = interactionComponentState1.values;
                            }
                            obj2[2] = values;
                            return obj2;
                          } else {
                            if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                              if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj3 = { type: null };
                                      obj3[0] = type.type;
                                      return obj3;
                                    } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                      let obj4 = { type: null, component: null };
                                      obj4[0] = type.type;
                                      let items = [type.component];
                                      obj4[1] = items.map(() => { ... })[0];
                                      return obj4;
                                    } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3[0], customId: obj3[1] } = type);
                                      let type3;
                                      if (iter2 != null) {
                                        type3 = iter2.type;
                                      }
                                      value = null;
                                      if (type3 === type.type) {
                                        value = iter2.value;
                                      }
                                      obj5[2] = value;
                                      return obj5;
                                    } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj6 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2[0], customId: obj2[1] } = type);
                                      let type4;
                                      if (interactionComponentState2 != null) {
                                        type4 = interactionComponentState2.type;
                                      }
                                      values = null;
                                      if (type4 === type.type) {
                                        values = interactionComponentState2.values;
                                      }
                                      obj6[2] = values;
                                      return obj6;
                                    } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj[0], customId: obj[1] } = type);
                                      let type5;
                                      if (iter != null) {
                                        type5 = iter.type;
                                      }
                                      obj[2] = type5 === type.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_1_1(tmp2[23])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let obj7 = { type: null, custom_id: null, values: null };
                            ({ type: obj6[0], customId: obj6[1] } = type);
                            let type6;
                            if (interactionComponentState3 != null) {
                              type6 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type6 === type.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj7[2] = mapped1;
                            return obj7;
                          }
                        });
                        return obj;
                      } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                        let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        obj = { type: null, custom_id: null, value: null };
                        ({ type: obj9[0], customId: obj9[1] } = type);
                        type = undefined;
                        if (iter3 != null) {
                          type = iter3.type;
                        }
                        let value = null;
                        if (type === type.type) {
                          value = iter3.value;
                        }
                        obj[2] = value;
                        return obj;
                      } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                        let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        let type1;
                        if (interactionComponentState != null) {
                          type1 = interactionComponentState.type;
                        }
                        let uploadIds = null;
                        if (type1 === type.type) {
                          uploadIds = interactionComponentState.uploadIds;
                        }
                        let obj1 = { type: null, custom_id: null, values: null };
                        ({ type: obj8[0], customId: obj8[1] } = type);
                        let mapped;
                        if (uploadIds != null) {
                          mapped = uploadIds.map((arg0) => {
                            closure_0 = arg0;
                            uploads = uploads.uploads;
                            return uploads.findIndex(() => { ... });
                          });
                        }
                        if (mapped == null) {
                          mapped = null;
                        }
                        obj1[2] = mapped;
                        return obj1;
                      } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                        let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        let obj2 = { type: null, custom_id: null, values: null };
                        ({ type: obj7[0], customId: obj7[1] } = type);
                        let type2;
                        if (interactionComponentState1 != null) {
                          type2 = interactionComponentState1.type;
                        }
                        let values = null;
                        if (type2 === type.type) {
                          values = interactionComponentState1.values;
                        }
                        obj2[2] = values;
                        return obj2;
                      } else {
                        if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                          if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                            if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                              if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                  let obj3 = { type: null };
                                  obj3[0] = type.type;
                                  return obj3;
                                } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                  let obj4 = { type: null, component: null };
                                  obj4[0] = type.type;
                                  let items = [type.component];
                                  obj4[1] = items.map((type) => {
                                    type = type.type;
                                    if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj = { type: null, components: null };
                                      obj[0] = type.type;
                                      let components = type.components;
                                      obj[1] = components.map(() => { ... });
                                      return obj;
                                    } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj9[0], customId: obj9[1] } = type);
                                      type = undefined;
                                      if (iter3 != null) {
                                        type = iter3.type;
                                      }
                                      let value = null;
                                      if (type === type.type) {
                                        value = iter3.value;
                                      }
                                      obj[2] = value;
                                      return obj;
                                    } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let type1;
                                      if (interactionComponentState != null) {
                                        type1 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type1 === type.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj1 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8[0], customId: obj8[1] } = type);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj1[2] = mapped;
                                      return obj1;
                                    } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj2 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7[0], customId: obj7[1] } = type);
                                      let type2;
                                      if (interactionComponentState1 != null) {
                                        type2 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type2 === type.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj2[2] = values;
                                      return obj2;
                                    } else {
                                      if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                                        if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj3 = { type: null };
                                                obj3[0] = type.type;
                                                return obj3;
                                              } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                                let obj4 = { type: null, component: null };
                                                obj4[0] = type.type;
                                                let items = [type.component];
                                                obj4[1] = items.map(() => { ... })[0];
                                                return obj4;
                                              } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let obj5 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3[0], customId: obj3[1] } = type);
                                                let type3;
                                                if (iter2 != null) {
                                                  type3 = iter2.type;
                                                }
                                                value = null;
                                                if (type3 === type.type) {
                                                  value = iter2.value;
                                                }
                                                obj5[2] = value;
                                                return obj5;
                                              } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let obj6 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2[0], customId: obj2[1] } = type);
                                                let type4;
                                                if (interactionComponentState2 != null) {
                                                  type4 = interactionComponentState2.type;
                                                }
                                                values = null;
                                                if (type4 === type.type) {
                                                  values = interactionComponentState2.values;
                                                }
                                                obj6[2] = values;
                                                return obj6;
                                              } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj[0], customId: obj[1] } = type);
                                                let type5;
                                                if (iter != null) {
                                                  type5 = iter.type;
                                                }
                                                obj[2] = type5 === type.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_1_1(tmp2[23])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj7 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6[0], customId: obj6[1] } = type);
                                      let type6;
                                      if (interactionComponentState3 != null) {
                                        type6 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type6 === type.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj7[2] = mapped1;
                                      return obj7;
                                    }
                                  })[0];
                                  return obj4;
                                } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                  let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  let obj5 = { type: null, custom_id: null, value: null };
                                  ({ type: obj3[0], customId: obj3[1] } = type);
                                  let type3;
                                  if (iter2 != null) {
                                    type3 = iter2.type;
                                  }
                                  value = null;
                                  if (type3 === type.type) {
                                    value = iter2.value;
                                  }
                                  obj5[2] = value;
                                  return obj5;
                                } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                  let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  let obj6 = { type: null, custom_id: null, values: null };
                                  ({ type: obj2[0], customId: obj2[1] } = type);
                                  let type4;
                                  if (interactionComponentState2 != null) {
                                    type4 = interactionComponentState2.type;
                                  }
                                  values = null;
                                  if (type4 === type.type) {
                                    values = interactionComponentState2.values;
                                  }
                                  obj6[2] = values;
                                  return obj6;
                                } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                  let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  obj = { type: null, custom_id: null, value: null };
                                  ({ type: obj[0], customId: obj[1] } = type);
                                  let type5;
                                  if (iter != null) {
                                    type5 = iter.type;
                                  }
                                  obj[2] = type5 === type.type && iter.value;
                                  return obj;
                                } else {
                                  closure_1_1(tmp2[23])(false, "unreachable");
                                }
                              }
                            }
                          }
                        }
                        let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        let obj7 = { type: null, custom_id: null, values: null };
                        ({ type: obj6[0], customId: obj6[1] } = type);
                        let type6;
                        if (interactionComponentState3 != null) {
                          type6 = interactionComponentState3.type;
                        }
                        let mapped1 = null;
                        if (type6 === type.type) {
                          let selectedOptions = interactionComponentState3.selectedOptions;
                          mapped1 = selectedOptions.map((value) => value.value);
                        }
                        obj7[2] = mapped1;
                        return obj7;
                      }
                    })[0];
                    return obj4;
                  } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                    let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                    let obj5 = { type: null, custom_id: null, value: null };
                    ({ type: obj3[0], customId: obj3[1] } = type);
                    let type3;
                    if (iter2 != null) {
                      type3 = iter2.type;
                    }
                    value = null;
                    if (type3 === type.type) {
                      value = iter2.value;
                    }
                    obj5[2] = value;
                    return obj5;
                  } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                    let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                    let obj6 = { type: null, custom_id: null, values: null };
                    ({ type: obj2[0], customId: obj2[1] } = type);
                    let type4;
                    if (interactionComponentState2 != null) {
                      type4 = interactionComponentState2.type;
                    }
                    values = null;
                    if (type4 === type.type) {
                      values = interactionComponentState2.values;
                    }
                    obj6[2] = values;
                    return obj6;
                  } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                    let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                    obj = { type: null, custom_id: null, value: null };
                    ({ type: obj[0], customId: obj[1] } = type);
                    let type5;
                    if (iter != null) {
                      type5 = iter.type;
                    }
                    obj[2] = type5 === type.type && iter.value;
                    return obj;
                  } else {
                    closure_1_1(tmp2[23])(false, "unreachable");
                  }
                }
              }
            }
          }
          let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
          let obj7 = { type: null, custom_id: null, values: null };
          ({ type: obj6[0], customId: obj6[1] } = type);
          let type6;
          if (interactionComponentState3 != null) {
            type6 = interactionComponentState3.type;
          }
          let mapped1 = null;
          if (type6 === type.type) {
            let selectedOptions = interactionComponentState3.selectedOptions;
            mapped1 = selectedOptions.map((value) => value.value);
          }
          obj7[2] = mapped1;
          return obj7;
        }
      });
      return obj;
    } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
      let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
      obj = { type: null, custom_id: null, value: null };
      ({ type: obj9[0], customId: obj9[1] } = type);
      type = undefined;
      if (iter3 != null) {
        type = iter3.type;
      }
      let value = null;
      if (type === type.type) {
        value = iter3.value;
      }
      obj[2] = value;
      return obj;
    } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
      let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
      let type1;
      if (interactionComponentState != null) {
        type1 = interactionComponentState.type;
      }
      let uploadIds = null;
      if (type1 === type.type) {
        uploadIds = interactionComponentState.uploadIds;
      }
      let obj1 = { type: null, custom_id: null, values: null };
      ({ type: obj8[0], customId: obj8[1] } = type);
      let mapped;
      if (uploadIds != null) {
        mapped = uploadIds.map((arg0) => {
          closure_0 = arg0;
          uploads = uploads.uploads;
          return uploads.findIndex((id) => id.id === closure_0);
        });
      }
      if (mapped == null) {
        mapped = null;
      }
      obj1[2] = mapped;
      return obj1;
    } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
      let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
      let obj2 = { type: null, custom_id: null, values: null };
      ({ type: obj7[0], customId: obj7[1] } = type);
      let type2;
      if (interactionComponentState1 != null) {
        type2 = interactionComponentState1.type;
      }
      let values = null;
      if (type2 === type.type) {
        values = interactionComponentState1.values;
      }
      obj2[2] = values;
      return obj2;
    } else {
      if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
        if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
          if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
            if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
              if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                let obj3 = { type: null };
                obj3[0] = type.type;
                return obj3;
              } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                let obj4 = { type: null, component: null };
                obj4[0] = type.type;
                let items = [type.component];
                obj4[1] = items.map((type) => {
                  type = type.type;
                  if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                    let obj = { type: null, components: null };
                    obj[0] = type.type;
                    let components = type.components;
                    obj[1] = components.map((type) => {
                      type = type.type;
                      if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                        let obj = { type: null, components: null };
                        obj[0] = type.type;
                        let components = type.components;
                        obj[1] = components.map((type) => {
                          type = type.type;
                          if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                            let obj = { type: null, components: null };
                            obj[0] = type.type;
                            let components = type.components;
                            obj[1] = components.map(() => { ... });
                            return obj;
                          } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                            let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            obj = { type: null, custom_id: null, value: null };
                            ({ type: obj9[0], customId: obj9[1] } = type);
                            type = undefined;
                            if (iter3 != null) {
                              type = iter3.type;
                            }
                            let value = null;
                            if (type === type.type) {
                              value = iter3.value;
                            }
                            obj[2] = value;
                            return obj;
                          } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                            let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let type1;
                            if (interactionComponentState != null) {
                              type1 = interactionComponentState.type;
                            }
                            let uploadIds = null;
                            if (type1 === type.type) {
                              uploadIds = interactionComponentState.uploadIds;
                            }
                            let obj1 = { type: null, custom_id: null, values: null };
                            ({ type: obj8[0], customId: obj8[1] } = type);
                            let mapped;
                            if (uploadIds != null) {
                              mapped = uploadIds.map(() => { ... });
                            }
                            if (mapped == null) {
                              mapped = null;
                            }
                            obj1[2] = mapped;
                            return obj1;
                          } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                            let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let obj2 = { type: null, custom_id: null, values: null };
                            ({ type: obj7[0], customId: obj7[1] } = type);
                            let type2;
                            if (interactionComponentState1 != null) {
                              type2 = interactionComponentState1.type;
                            }
                            let values = null;
                            if (type2 === type.type) {
                              values = interactionComponentState1.values;
                            }
                            obj2[2] = values;
                            return obj2;
                          } else {
                            if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                              if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                                if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                  if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                    if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                      let obj3 = { type: null };
                                      obj3[0] = type.type;
                                      return obj3;
                                    } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                      let obj4 = { type: null, component: null };
                                      obj4[0] = type.type;
                                      let items = [type.component];
                                      obj4[1] = items.map(() => { ... })[0];
                                      return obj4;
                                    } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                      let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj5 = { type: null, custom_id: null, value: null };
                                      ({ type: obj3[0], customId: obj3[1] } = type);
                                      let type3;
                                      if (iter2 != null) {
                                        type3 = iter2.type;
                                      }
                                      value = null;
                                      if (type3 === type.type) {
                                        value = iter2.value;
                                      }
                                      obj5[2] = value;
                                      return obj5;
                                    } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                      let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj6 = { type: null, custom_id: null, values: null };
                                      ({ type: obj2[0], customId: obj2[1] } = type);
                                      let type4;
                                      if (interactionComponentState2 != null) {
                                        type4 = interactionComponentState2.type;
                                      }
                                      values = null;
                                      if (type4 === type.type) {
                                        values = interactionComponentState2.values;
                                      }
                                      obj6[2] = values;
                                      return obj6;
                                    } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                      let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj[0], customId: obj[1] } = type);
                                      let type5;
                                      if (iter != null) {
                                        type5 = iter.type;
                                      }
                                      obj[2] = type5 === type.type && iter.value;
                                      return obj;
                                    } else {
                                      closure_1_1(tmp2[23])(false, "unreachable");
                                    }
                                  }
                                }
                              }
                            }
                            let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                            let obj7 = { type: null, custom_id: null, values: null };
                            ({ type: obj6[0], customId: obj6[1] } = type);
                            let type6;
                            if (interactionComponentState3 != null) {
                              type6 = interactionComponentState3.type;
                            }
                            let mapped1 = null;
                            if (type6 === type.type) {
                              let selectedOptions = interactionComponentState3.selectedOptions;
                              mapped1 = selectedOptions.map(() => { ... });
                            }
                            obj7[2] = mapped1;
                            return obj7;
                          }
                        });
                        return obj;
                      } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                        let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        obj = { type: null, custom_id: null, value: null };
                        ({ type: obj9[0], customId: obj9[1] } = type);
                        type = undefined;
                        if (iter3 != null) {
                          type = iter3.type;
                        }
                        let value = null;
                        if (type === type.type) {
                          value = iter3.value;
                        }
                        obj[2] = value;
                        return obj;
                      } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                        let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        let type1;
                        if (interactionComponentState != null) {
                          type1 = interactionComponentState.type;
                        }
                        let uploadIds = null;
                        if (type1 === type.type) {
                          uploadIds = interactionComponentState.uploadIds;
                        }
                        let obj1 = { type: null, custom_id: null, values: null };
                        ({ type: obj8[0], customId: obj8[1] } = type);
                        let mapped;
                        if (uploadIds != null) {
                          mapped = uploadIds.map((arg0) => {
                            closure_0 = arg0;
                            uploads = uploads.uploads;
                            return uploads.findIndex(() => { ... });
                          });
                        }
                        if (mapped == null) {
                          mapped = null;
                        }
                        obj1[2] = mapped;
                        return obj1;
                      } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                        let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        let obj2 = { type: null, custom_id: null, values: null };
                        ({ type: obj7[0], customId: obj7[1] } = type);
                        let type2;
                        if (interactionComponentState1 != null) {
                          type2 = interactionComponentState1.type;
                        }
                        let values = null;
                        if (type2 === type.type) {
                          values = interactionComponentState1.values;
                        }
                        obj2[2] = values;
                        return obj2;
                      } else {
                        if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                          if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                            if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                              if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                  let obj3 = { type: null };
                                  obj3[0] = type.type;
                                  return obj3;
                                } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                  let obj4 = { type: null, component: null };
                                  obj4[0] = type.type;
                                  let items = [type.component];
                                  obj4[1] = items.map((type) => {
                                    type = type.type;
                                    if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj = { type: null, components: null };
                                      obj[0] = type.type;
                                      let components = type.components;
                                      obj[1] = components.map(() => { ... });
                                      return obj;
                                    } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj9[0], customId: obj9[1] } = type);
                                      type = undefined;
                                      if (iter3 != null) {
                                        type = iter3.type;
                                      }
                                      let value = null;
                                      if (type === type.type) {
                                        value = iter3.value;
                                      }
                                      obj[2] = value;
                                      return obj;
                                    } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let type1;
                                      if (interactionComponentState != null) {
                                        type1 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type1 === type.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj1 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8[0], customId: obj8[1] } = type);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj1[2] = mapped;
                                      return obj1;
                                    } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj2 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7[0], customId: obj7[1] } = type);
                                      let type2;
                                      if (interactionComponentState1 != null) {
                                        type2 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type2 === type.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj2[2] = values;
                                      return obj2;
                                    } else {
                                      if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                                        if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj3 = { type: null };
                                                obj3[0] = type.type;
                                                return obj3;
                                              } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                                let obj4 = { type: null, component: null };
                                                obj4[0] = type.type;
                                                let items = [type.component];
                                                obj4[1] = items.map(() => { ... })[0];
                                                return obj4;
                                              } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let obj5 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3[0], customId: obj3[1] } = type);
                                                let type3;
                                                if (iter2 != null) {
                                                  type3 = iter2.type;
                                                }
                                                value = null;
                                                if (type3 === type.type) {
                                                  value = iter2.value;
                                                }
                                                obj5[2] = value;
                                                return obj5;
                                              } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let obj6 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2[0], customId: obj2[1] } = type);
                                                let type4;
                                                if (interactionComponentState2 != null) {
                                                  type4 = interactionComponentState2.type;
                                                }
                                                values = null;
                                                if (type4 === type.type) {
                                                  values = interactionComponentState2.values;
                                                }
                                                obj6[2] = values;
                                                return obj6;
                                              } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj[0], customId: obj[1] } = type);
                                                let type5;
                                                if (iter != null) {
                                                  type5 = iter.type;
                                                }
                                                obj[2] = type5 === type.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_1_1(tmp2[23])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj7 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6[0], customId: obj6[1] } = type);
                                      let type6;
                                      if (interactionComponentState3 != null) {
                                        type6 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type6 === type.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj7[2] = mapped1;
                                      return obj7;
                                    }
                                  })[0];
                                  return obj4;
                                } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                  let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  let obj5 = { type: null, custom_id: null, value: null };
                                  ({ type: obj3[0], customId: obj3[1] } = type);
                                  let type3;
                                  if (iter2 != null) {
                                    type3 = iter2.type;
                                  }
                                  value = null;
                                  if (type3 === type.type) {
                                    value = iter2.value;
                                  }
                                  obj5[2] = value;
                                  return obj5;
                                } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                  let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  let obj6 = { type: null, custom_id: null, values: null };
                                  ({ type: obj2[0], customId: obj2[1] } = type);
                                  let type4;
                                  if (interactionComponentState2 != null) {
                                    type4 = interactionComponentState2.type;
                                  }
                                  values = null;
                                  if (type4 === type.type) {
                                    values = interactionComponentState2.values;
                                  }
                                  obj6[2] = values;
                                  return obj6;
                                } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                  let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  obj = { type: null, custom_id: null, value: null };
                                  ({ type: obj[0], customId: obj[1] } = type);
                                  let type5;
                                  if (iter != null) {
                                    type5 = iter.type;
                                  }
                                  obj[2] = type5 === type.type && iter.value;
                                  return obj;
                                } else {
                                  closure_1_1(tmp2[23])(false, "unreachable");
                                }
                              }
                            }
                          }
                        }
                        let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                        let obj7 = { type: null, custom_id: null, values: null };
                        ({ type: obj6[0], customId: obj6[1] } = type);
                        let type6;
                        if (interactionComponentState3 != null) {
                          type6 = interactionComponentState3.type;
                        }
                        let mapped1 = null;
                        if (type6 === type.type) {
                          let selectedOptions = interactionComponentState3.selectedOptions;
                          mapped1 = selectedOptions.map((value) => value.value);
                        }
                        obj7[2] = mapped1;
                        return obj7;
                      }
                    });
                    return obj;
                  } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                    let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                    obj = { type: null, custom_id: null, value: null };
                    ({ type: obj9[0], customId: obj9[1] } = type);
                    type = undefined;
                    if (iter3 != null) {
                      type = iter3.type;
                    }
                    let value = null;
                    if (type === type.type) {
                      value = iter3.value;
                    }
                    obj[2] = value;
                    return obj;
                  } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                    let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                    let type1;
                    if (interactionComponentState != null) {
                      type1 = interactionComponentState.type;
                    }
                    let uploadIds = null;
                    if (type1 === type.type) {
                      uploadIds = interactionComponentState.uploadIds;
                    }
                    let obj1 = { type: null, custom_id: null, values: null };
                    ({ type: obj8[0], customId: obj8[1] } = type);
                    let mapped;
                    if (uploadIds != null) {
                      mapped = uploadIds.map((arg0) => {
                        closure_0 = arg0;
                        uploads = uploads.uploads;
                        return uploads.findIndex((id) => id.id === closure_0);
                      });
                    }
                    if (mapped == null) {
                      mapped = null;
                    }
                    obj1[2] = mapped;
                    return obj1;
                  } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                    let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                    let obj2 = { type: null, custom_id: null, values: null };
                    ({ type: obj7[0], customId: obj7[1] } = type);
                    let type2;
                    if (interactionComponentState1 != null) {
                      type2 = interactionComponentState1.type;
                    }
                    let values = null;
                    if (type2 === type.type) {
                      values = interactionComponentState1.values;
                    }
                    obj2[2] = values;
                    return obj2;
                  } else {
                    if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                      if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                        if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                          if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                            if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                              let obj3 = { type: null };
                              obj3[0] = type.type;
                              return obj3;
                            } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                              let obj4 = { type: null, component: null };
                              obj4[0] = type.type;
                              let items = [type.component];
                              obj4[1] = items.map((type) => {
                                type = type.type;
                                if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                  let obj = { type: null, components: null };
                                  obj[0] = type.type;
                                  let components = type.components;
                                  obj[1] = components.map((type) => {
                                    type = type.type;
                                    if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                      let obj = { type: null, components: null };
                                      obj[0] = type.type;
                                      let components = type.components;
                                      obj[1] = components.map(() => { ... });
                                      return obj;
                                    } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                                      let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      obj = { type: null, custom_id: null, value: null };
                                      ({ type: obj9[0], customId: obj9[1] } = type);
                                      type = undefined;
                                      if (iter3 != null) {
                                        type = iter3.type;
                                      }
                                      let value = null;
                                      if (type === type.type) {
                                        value = iter3.value;
                                      }
                                      obj[2] = value;
                                      return obj;
                                    } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                                      let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let type1;
                                      if (interactionComponentState != null) {
                                        type1 = interactionComponentState.type;
                                      }
                                      let uploadIds = null;
                                      if (type1 === type.type) {
                                        uploadIds = interactionComponentState.uploadIds;
                                      }
                                      let obj1 = { type: null, custom_id: null, values: null };
                                      ({ type: obj8[0], customId: obj8[1] } = type);
                                      let mapped;
                                      if (uploadIds != null) {
                                        mapped = uploadIds.map(() => { ... });
                                      }
                                      if (mapped == null) {
                                        mapped = null;
                                      }
                                      obj1[2] = mapped;
                                      return obj1;
                                    } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                                      let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj2 = { type: null, custom_id: null, values: null };
                                      ({ type: obj7[0], customId: obj7[1] } = type);
                                      let type2;
                                      if (interactionComponentState1 != null) {
                                        type2 = interactionComponentState1.type;
                                      }
                                      let values = null;
                                      if (type2 === type.type) {
                                        values = interactionComponentState1.values;
                                      }
                                      obj2[2] = values;
                                      return obj2;
                                    } else {
                                      if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                                        if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                                          if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                            if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                              if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                let obj3 = { type: null };
                                                obj3[0] = type.type;
                                                return obj3;
                                              } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                                let obj4 = { type: null, component: null };
                                                obj4[0] = type.type;
                                                let items = [type.component];
                                                obj4[1] = items.map(() => { ... })[0];
                                                return obj4;
                                              } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                                let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let obj5 = { type: null, custom_id: null, value: null };
                                                ({ type: obj3[0], customId: obj3[1] } = type);
                                                let type3;
                                                if (iter2 != null) {
                                                  type3 = iter2.type;
                                                }
                                                value = null;
                                                if (type3 === type.type) {
                                                  value = iter2.value;
                                                }
                                                obj5[2] = value;
                                                return obj5;
                                              } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                                let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let obj6 = { type: null, custom_id: null, values: null };
                                                ({ type: obj2[0], customId: obj2[1] } = type);
                                                let type4;
                                                if (interactionComponentState2 != null) {
                                                  type4 = interactionComponentState2.type;
                                                }
                                                values = null;
                                                if (type4 === type.type) {
                                                  values = interactionComponentState2.values;
                                                }
                                                obj6[2] = values;
                                                return obj6;
                                              } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                                let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj[0], customId: obj[1] } = type);
                                                let type5;
                                                if (iter != null) {
                                                  type5 = iter.type;
                                                }
                                                obj[2] = type5 === type.type && iter.value;
                                                return obj;
                                              } else {
                                                closure_1_1(tmp2[23])(false, "unreachable");
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                      let obj7 = { type: null, custom_id: null, values: null };
                                      ({ type: obj6[0], customId: obj6[1] } = type);
                                      let type6;
                                      if (interactionComponentState3 != null) {
                                        type6 = interactionComponentState3.type;
                                      }
                                      let mapped1 = null;
                                      if (type6 === type.type) {
                                        let selectedOptions = interactionComponentState3.selectedOptions;
                                        mapped1 = selectedOptions.map(() => { ... });
                                      }
                                      obj7[2] = mapped1;
                                      return obj7;
                                    }
                                  });
                                  return obj;
                                } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                                  let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  obj = { type: null, custom_id: null, value: null };
                                  ({ type: obj9[0], customId: obj9[1] } = type);
                                  type = undefined;
                                  if (iter3 != null) {
                                    type = iter3.type;
                                  }
                                  let value = null;
                                  if (type === type.type) {
                                    value = iter3.value;
                                  }
                                  obj[2] = value;
                                  return obj;
                                } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                                  let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  let type1;
                                  if (interactionComponentState != null) {
                                    type1 = interactionComponentState.type;
                                  }
                                  let uploadIds = null;
                                  if (type1 === type.type) {
                                    uploadIds = interactionComponentState.uploadIds;
                                  }
                                  let obj1 = { type: null, custom_id: null, values: null };
                                  ({ type: obj8[0], customId: obj8[1] } = type);
                                  let mapped;
                                  if (uploadIds != null) {
                                    mapped = uploadIds.map((arg0) => {
                                      closure_0 = arg0;
                                      uploads = uploads.uploads;
                                      return uploads.findIndex(() => { ... });
                                    });
                                  }
                                  if (mapped == null) {
                                    mapped = null;
                                  }
                                  obj1[2] = mapped;
                                  return obj1;
                                } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                                  let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  let obj2 = { type: null, custom_id: null, values: null };
                                  ({ type: obj7[0], customId: obj7[1] } = type);
                                  let type2;
                                  if (interactionComponentState1 != null) {
                                    type2 = interactionComponentState1.type;
                                  }
                                  let values = null;
                                  if (type2 === type.type) {
                                    values = interactionComponentState1.values;
                                  }
                                  obj2[2] = values;
                                  return obj2;
                                } else {
                                  if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                                    if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                                      if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                        if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                          if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                            let obj3 = { type: null };
                                            obj3[0] = type.type;
                                            return obj3;
                                          } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                            let obj4 = { type: null, component: null };
                                            obj4[0] = type.type;
                                            let items = [type.component];
                                            obj4[1] = items.map((type) => {
                                              type = type.type;
                                              if (closure_1_0(closure_1_2[13]).ComponentType.ACTION_ROW === type) {
                                                let obj = { type: null, components: null };
                                                obj[0] = type.type;
                                                let components = type.components;
                                                obj[1] = components.map(() => { ... });
                                                return obj;
                                              } else if (tmp(tmp2[13]).ComponentType.TEXT_INPUT === type) {
                                                let iter3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                obj = { type: null, custom_id: null, value: null };
                                                ({ type: obj9[0], customId: obj9[1] } = type);
                                                type = undefined;
                                                if (iter3 != null) {
                                                  type = iter3.type;
                                                }
                                                let value = null;
                                                if (type === type.type) {
                                                  value = iter3.value;
                                                }
                                                obj[2] = value;
                                                return obj;
                                              } else if (tmp(tmp2[13]).ComponentType.FILE_UPLOAD === type) {
                                                let interactionComponentState = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let type1;
                                                if (interactionComponentState != null) {
                                                  type1 = interactionComponentState.type;
                                                }
                                                let uploadIds = null;
                                                if (type1 === type.type) {
                                                  uploadIds = interactionComponentState.uploadIds;
                                                }
                                                let obj1 = { type: null, custom_id: null, values: null };
                                                ({ type: obj8[0], customId: obj8[1] } = type);
                                                let mapped;
                                                if (uploadIds != null) {
                                                  mapped = uploadIds.map(() => { ... });
                                                }
                                                if (mapped == null) {
                                                  mapped = null;
                                                }
                                                obj1[2] = mapped;
                                                return obj1;
                                              } else if (tmp(tmp2[13]).ComponentType.STRING_SELECT === type) {
                                                let interactionComponentState1 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let obj2 = { type: null, custom_id: null, values: null };
                                                ({ type: obj7[0], customId: obj7[1] } = type);
                                                let type2;
                                                if (interactionComponentState1 != null) {
                                                  type2 = interactionComponentState1.type;
                                                }
                                                let values = null;
                                                if (type2 === type.type) {
                                                  values = interactionComponentState1.values;
                                                }
                                                obj2[2] = values;
                                                return obj2;
                                              } else {
                                                if (tmp(tmp2[13]).ComponentType.USER_SELECT !== type) {
                                                  if (tmp(tmp2[13]).ComponentType.ROLE_SELECT !== type) {
                                                    if (tmp(tmp2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
                                                      if (tmp(tmp2[13]).ComponentType.CHANNEL_SELECT !== type) {
                                                        if (tmp(tmp2[13]).ComponentType.TEXT_DISPLAY === type) {
                                                          let obj3 = { type: null };
                                                          obj3[0] = type.type;
                                                          return obj3;
                                                        } else if (tmp(tmp2[13]).ComponentType.LABEL === type) {
                                                          let obj4 = { type: null, component: null };
                                                          obj4[0] = type.type;
                                                          let items = [type.component];
                                                          obj4[1] = items.map(() => { ... })[0];
                                                          return obj4;
                                                        } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                                          let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                          let obj5 = { type: null, custom_id: null, value: null };
                                                          ({ type: obj3[0], customId: obj3[1] } = type);
                                                          let type3;
                                                          if (iter2 != null) {
                                                            type3 = iter2.type;
                                                          }
                                                          value = null;
                                                          if (type3 === type.type) {
                                                            value = iter2.value;
                                                          }
                                                          obj5[2] = value;
                                                          return obj5;
                                                        } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                                          let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                          let obj6 = { type: null, custom_id: null, values: null };
                                                          ({ type: obj2[0], customId: obj2[1] } = type);
                                                          let type4;
                                                          if (interactionComponentState2 != null) {
                                                            type4 = interactionComponentState2.type;
                                                          }
                                                          values = null;
                                                          if (type4 === type.type) {
                                                            values = interactionComponentState2.values;
                                                          }
                                                          obj6[2] = values;
                                                          return obj6;
                                                        } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                                          let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                          obj = { type: null, custom_id: null, value: null };
                                                          ({ type: obj[0], customId: obj[1] } = type);
                                                          let type5;
                                                          if (iter != null) {
                                                            type5 = iter.type;
                                                          }
                                                          obj[2] = type5 === type.type && iter.value;
                                                          return obj;
                                                        } else {
                                                          closure_1_1(tmp2[23])(false, "unreachable");
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                                let obj7 = { type: null, custom_id: null, values: null };
                                                ({ type: obj6[0], customId: obj6[1] } = type);
                                                let type6;
                                                if (interactionComponentState3 != null) {
                                                  type6 = interactionComponentState3.type;
                                                }
                                                let mapped1 = null;
                                                if (type6 === type.type) {
                                                  let selectedOptions = interactionComponentState3.selectedOptions;
                                                  mapped1 = selectedOptions.map(() => { ... });
                                                }
                                                obj7[2] = mapped1;
                                                return obj7;
                                              }
                                            })[0];
                                            return obj4;
                                          } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                                            let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                            let obj5 = { type: null, custom_id: null, value: null };
                                            ({ type: obj3[0], customId: obj3[1] } = type);
                                            let type3;
                                            if (iter2 != null) {
                                              type3 = iter2.type;
                                            }
                                            value = null;
                                            if (type3 === type.type) {
                                              value = iter2.value;
                                            }
                                            obj5[2] = value;
                                            return obj5;
                                          } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                                            let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                            let obj6 = { type: null, custom_id: null, values: null };
                                            ({ type: obj2[0], customId: obj2[1] } = type);
                                            let type4;
                                            if (interactionComponentState2 != null) {
                                              type4 = interactionComponentState2.type;
                                            }
                                            values = null;
                                            if (type4 === type.type) {
                                              values = interactionComponentState2.values;
                                            }
                                            obj6[2] = values;
                                            return obj6;
                                          } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                                            let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                            obj = { type: null, custom_id: null, value: null };
                                            ({ type: obj[0], customId: obj[1] } = type);
                                            let type5;
                                            if (iter != null) {
                                              type5 = iter.type;
                                            }
                                            obj[2] = type5 === type.type && iter.value;
                                            return obj;
                                          } else {
                                            closure_1_1(tmp2[23])(false, "unreachable");
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                                  let obj7 = { type: null, custom_id: null, values: null };
                                  ({ type: obj6[0], customId: obj6[1] } = type);
                                  let type6;
                                  if (interactionComponentState3 != null) {
                                    type6 = interactionComponentState3.type;
                                  }
                                  let mapped1 = null;
                                  if (type6 === type.type) {
                                    let selectedOptions = interactionComponentState3.selectedOptions;
                                    mapped1 = selectedOptions.map((value) => value.value);
                                  }
                                  obj7[2] = mapped1;
                                  return obj7;
                                }
                              })[0];
                              return obj4;
                            } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                              let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                              let obj5 = { type: null, custom_id: null, value: null };
                              ({ type: obj3[0], customId: obj3[1] } = type);
                              let type3;
                              if (iter2 != null) {
                                type3 = iter2.type;
                              }
                              value = null;
                              if (type3 === type.type) {
                                value = iter2.value;
                              }
                              obj5[2] = value;
                              return obj5;
                            } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                              let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                              let obj6 = { type: null, custom_id: null, values: null };
                              ({ type: obj2[0], customId: obj2[1] } = type);
                              let type4;
                              if (interactionComponentState2 != null) {
                                type4 = interactionComponentState2.type;
                              }
                              values = null;
                              if (type4 === type.type) {
                                values = interactionComponentState2.values;
                              }
                              obj6[2] = values;
                              return obj6;
                            } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                              let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                              obj = { type: null, custom_id: null, value: null };
                              ({ type: obj[0], customId: obj[1] } = type);
                              let type5;
                              if (iter != null) {
                                type5 = iter.type;
                              }
                              obj[2] = type5 === type.type && iter.value;
                              return obj;
                            } else {
                              closure_1_1(tmp2[23])(false, "unreachable");
                            }
                          }
                        }
                      }
                    }
                    let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                    let obj7 = { type: null, custom_id: null, values: null };
                    ({ type: obj6[0], customId: obj6[1] } = type);
                    let type6;
                    if (interactionComponentState3 != null) {
                      type6 = interactionComponentState3.type;
                    }
                    let mapped1 = null;
                    if (type6 === type.type) {
                      let selectedOptions = interactionComponentState3.selectedOptions;
                      mapped1 = selectedOptions.map((value) => value.value);
                    }
                    obj7[2] = mapped1;
                    return obj7;
                  }
                })[0];
                return obj4;
              } else if (tmp(tmp2[13]).ComponentType.RADIO_GROUP === type) {
                let iter2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                let obj5 = { type: null, custom_id: null, value: null };
                ({ type: obj3[0], customId: obj3[1] } = type);
                let type3;
                if (iter2 != null) {
                  type3 = iter2.type;
                }
                value = null;
                if (type3 === type.type) {
                  value = iter2.value;
                }
                obj5[2] = value;
                return obj5;
              } else if (tmp(tmp2[13]).ComponentType.CHECKBOX_GROUP === type) {
                let interactionComponentState2 = closure_1_14.getInteractionComponentState(closure_0, type.id);
                let obj6 = { type: null, custom_id: null, values: null };
                ({ type: obj2[0], customId: obj2[1] } = type);
                let type4;
                if (interactionComponentState2 != null) {
                  type4 = interactionComponentState2.type;
                }
                values = null;
                if (type4 === type.type) {
                  values = interactionComponentState2.values;
                }
                obj6[2] = values;
                return obj6;
              } else if (tmp(tmp2[13]).ComponentType.CHECKBOX === type) {
                let iter = closure_1_14.getInteractionComponentState(closure_0, type.id);
                obj = { type: null, custom_id: null, value: null };
                ({ type: obj[0], customId: obj[1] } = type);
                let type5;
                if (iter != null) {
                  type5 = iter.type;
                }
                obj[2] = type5 === type.type && iter.value;
                return obj;
              } else {
                closure_1_1(tmp2[23])(false, "unreachable");
              }
            }
          }
        }
      }
      let interactionComponentState3 = closure_1_14.getInteractionComponentState(closure_0, type.id);
      let obj7 = { type: null, custom_id: null, values: null };
      ({ type: obj6[0], customId: obj6[1] } = type);
      let type6;
      if (interactionComponentState3 != null) {
        type6 = interactionComponentState3.type;
      }
      let mapped1 = null;
      if (type6 === type.type) {
        let selectedOptions = interactionComponentState3.selectedOptions;
        mapped1 = selectedOptions.map((value) => value.value);
      }
      obj7[2] = mapped1;
      return obj7;
    }
  });
}
function getUploadsForModal(id) {
  closure_0 = arg1;
  uploads = uploads.getUploads(id, DraftType.InteractionModal);
  return uploads.filter((id) => {
    const result = callback(closure_1_2[24]).deserializeComponentUploadId(id.id);
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
          return { value: "HermesInternal", done: null };
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
                tmp7 = callback(tmp30[25])(arr);
              }
              obj1 = lib(tmp30[26]);
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
            closure_5 = arr.map((closure_0, closure_1) => lib(5129).getAttachmentPayload(closure_0, closure_1));
            const obj4 = { uploads: null };
            obj4[0] = arr;
            c6 = callback2(lib.customId, lib.components, obj4);
            function send() {
              if (null != channel) {
                let aborted;
                if (closure_1 != null) {
                  aborted = tmp13.aborted;
                }
                if (!aborted) {
                  const HTTP = lib(1272).HTTP;
                  let obj = { url: null, body: null, signal: null, rejectWithError: false };
                  obj[0] = closure_1_15.INTERACTIONS;
                  obj = { type: null, application_id: null, channel_id: null, guild_id: null, data: null, session_id: null, nonce: null };
                  obj[0] = lib(1894).InteractionTypes.MODAL_SUBMIT;
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
                  obj[2] = tmp13;
                  HTTP.post(obj).catch((status) => {
                    if (429 === status.status) {
                      const _setTimeout = setTimeout;
                      const timerId = setTimeout(closure_7, status.body.retry_after * closure_1_1(closure_1_2[29]).Millis.SECOND);
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
            return { value: "HermesInternal", done: null };
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
let result = require("set").fileFinishedImporting("modules/interaction_components/InteractionModalUtils.tsx");

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
  let tmp6 = type === tmp(1894).ComponentType.ACTION_ROW && first.components[0].id === id;
  if (!tmp6) {
    let type1;
    if (first != null) {
      type1 = first.type;
    }
    tmp6 = type1 === tmp(1894).ComponentType.LABEL && first.component.id === id;
    const tmp8 = type1 === tmp(1894).ComponentType.LABEL && first.component.id === id;
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
        return { value: "HermesInternal", done: null };
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
              const item = closure_1_8.forEach((arg0) => {
                if (!arg0()) {
                  c0 = false;
                }
              });
              return c0;
            })(closure_1_8)) {
              obj1 = v0(closure_1_2[19]);
              const _Date = Date;
              const fromTimestampResult = obj1.fromTimestamp(Date.now());
              tmp22(fromTimestampResult);
              v0 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_18(c0, closure_1_3, fromTimestampResult);
              return obj1;
            }
            tmp22 = closure_1_6;
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
        return { value: "HermesInternal", done: null };
      } catch (tmp13) {
        c0 = tmp;
        throw tmp13;
      }
    }
  }), items2);
  const effect = first.useEffect(() => {
    if (stateFromStores === closure_1_13.SUCCEEDED) {
      let obj = callback(customId[20]);
      obj = { type: "CLEAR_INTERACTION_MODAL_STATE", customId: null };
      obj[1] = customId;
      obj.dispatch(obj);
      application = customId;
      const uploads = closure_1_11.getUploads(application.channelId, closure_8.InteractionModal);
      const found = uploads.filter((id) => {
        const result = callback(closure_1_2[24]).deserializeComponentUploadId(id.id);
        let containerId;
        if (result != null) {
          containerId = result.containerId;
        }
        return containerId === callback;
      });
      callback(customId[21]).removeFiles(application.channelId, found.map((id) => id.id), closure_8.InteractionModal);
      callback();
      const obj3 = callback(customId[21]);
    }
    if (stateFromStores === closure_1_13.ERRORED) {
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
    let obj = closure_1_1(closure_1_2[14]);
    obj = { id: application.id, icon: application.icon, botIconFirst: true, bot: null, guildMember: null };
    let bot;
    if (null != member) {
      bot = tmp7.bot;
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
    } else if (null != tmp7.bot) {
      name = tmp7.bot.username;
    } else {
      name = tmp7.name;
    }
    obj[1] = name;
    obj[2] = closure_1_1(closure_1_2[15])(application.id);
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
    let obj = closure_1_1(closure_1_2[14]);
    obj = { id: application.id, icon: application.icon, botIconFirst: true, bot: null, guildMember: null };
    let bot;
    if (null != member) {
      bot = tmp7.bot;
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
    } else if (null != tmp7.bot) {
      name = tmp7.bot.username;
    } else {
      name = tmp7.name;
    }
    obj[1] = name;
    obj[2] = closure_1_1(closure_1_2[15])(application.id);
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