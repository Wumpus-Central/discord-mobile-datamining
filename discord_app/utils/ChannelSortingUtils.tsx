import createChannelRecord from "createChannelRecord";
import { ChannelTypes } from "ME";

let c3;
let obj1;
function getFirstChannelOfType(arg0, arg1, arg2, arr) {
  let closure_0 = arg1;
  let c1 = -1;
  const found = arr.find((channel) => {
    let flag = channel.channel.id === closure_0;
    if (flag) {
      let closure_1 = arg1;
      flag = true;
    }
    return flag;
  });
  if (c1 < 0) {
    return null;
  } else {
    let tmp12 = c1;
    if (c1 >= 0) {
      if (tmp12 < arr.length) {
        while (true) {
          let type = arr[tmp12].channel.type;
          let tmp4 = null != type;
          let tmp5 = tmp12;
          if (tmp4) {
            tmp4 = null != arg2;
          }
          if (tmp4) {
            let tmp6 = type === arg2;
            if (!tmp6) {
              let tmp7 = callback;
              let tmp8 = callback(type) && tmp7(arg2);
              tmp6 = tmp8;
            }
            if (!tmp6) {
              let tmp9 = callback2;
              let tmp10 = callback2(type) && tmp9(arg2);
              tmp6 = tmp10;
            }
            tmp4 = tmp6;
          }
          if (tmp4) {
            break;
          } else {
            let sum = tmp12 + arg0;
            if (sum >= 0) {
              tmp12 = sum;
            }
          }
        }
        return tmp3;
      }
    }
    return null;
  }
}
({ isGuildSelectableChannelType: obj1, isGuildVocalChannelType: c3 } = createChannelRecord);
const result = require("calculatePositionDeltas").fileFinishedImporting("utils/ChannelSortingUtils.tsx");

export const areTypesInSameSection = function areTypesInSameSection(arg0, arg1) {
  let tmp = null != arg0 && null != arg1;
  if (tmp) {
    let tmp2 = arg0 === arg1;
    if (!tmp2) {
      tmp2 = callback(arg0) && callback(arg1);
      const tmp3 = callback;
      const tmp4 = callback(arg0) && callback(arg1);
    }
    if (!tmp2) {
      tmp2 = callback2(arg0) && callback2(arg1);
      const tmp5 = callback2;
      const tmp6 = callback2(arg0) && callback2(arg1);
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getDropData = function getDropData(localChannel, arg1, localChannel2, index, channelList) {
  let parent_id3;
  if (null != localChannel) {
    parent_id3 = localChannel2;
    if (null != localChannel2) {
      const GUILD_CATEGORY = ChannelTypes.GUILD_CATEGORY;
      if (localChannel.type === GUILD_CATEGORY) {
        if (index !== arg1) {
          if (index >= arg1) {
            let tmp47 = null;
            if (index > arg1) {
              let c1 = true;
              let callback;
              let num17 = 0;
              if (null != parent_id3) {
                callback = null;
                const found = channelList.filter((channel) => {
                  const type = channel.channel.type;
                  let tmp2 = null != closure_0;
                  if (tmp2) {
                    let tmp3 = c1;
                    if (!c1) {
                      const type2 = tmp.type;
                      let tmp4 = null != type2 && null != type;
                      if (tmp4) {
                        let tmp5 = type2 === type;
                        if (!tmp5) {
                          tmp5 = _null(type2) && _null(type);
                          const tmp6 = _null;
                          const tmp7 = _null(type2) && _null(type);
                        }
                        if (!tmp5) {
                          tmp5 = num11(type2) && num11(type);
                          const tmp8 = num11;
                          const tmp9 = num11(type2) && num11(type);
                        }
                        tmp4 = tmp5;
                      }
                      tmp3 = tmp4;
                    }
                    tmp2 = tmp3;
                  }
                  return tmp2;
                });
                const found1 = found.find((arg0, arg1) => {
                  let flag = null != localChannel2 && tmp === localChannel2.id;
                  if (flag) {
                    let closure_2 = arg1;
                    flag = true;
                  }
                  return flag;
                });
                num17 = callback;
              }
              if (num17 == null) {
                num17 = 0;
              }
              const tmp52 = getFirstChannelOfType(-1, parent_id3.id, localChannel.type, channelList);
              let tmp53 = null;
              if (null != tmp52) {
                tmp53 = null;
                if (tmp52.channel.id !== localChannel.id) {
                  if (null == tmp49) {
                    let obj = { referenceId: null, parentId: null };
                    obj[0] = tmp52.channel.id;
                    let tmp54 = obj;
                  } else {
                    tmp54 = null;
                  }
                  tmp53 = tmp54;
                }
              }
              tmp47 = tmp53;
            }
          }
        }
        obj = { referenceId: null, parentId: null };
        ({ id: obj13[0], parent_id: parent_id3 } = parent_id3);
        obj[1] = parent_id3;
        tmp47 = obj;
      } else {
        const type3 = localChannel.type;
        const type4 = parent_id3.type;
        let tmp = null != type3 && null != type4;
        if (tmp) {
          let tmp2 = type3 === type4;
          if (!tmp2) {
            tmp2 = callback(type3) && callback(type4);
            const tmp3 = callback;
            const tmp4 = callback(type3) && callback(type4);
          }
          if (!tmp2) {
            tmp2 = callback2(type3) && callback2(type4);
            const tmp5 = callback2;
            const tmp6 = callback2(type3) && callback2(type4);
          }
          tmp = tmp2;
        }
        if (tmp) {
          ({ id: obj11[0], parent_id: obj11[1] } = parent_id3);
          let tmp12 = { referenceId: null, parentId: null };
          const obj1 = { referenceId: null, parentId: null };
        } else if (index < arg1) {
          if (parent_id3.type !== GUILD_CATEGORY) {
            c1 = true;
            let num9 = 0;
            if (null != parent_id3) {
              callback = null;
              const found2 = channelList.filter((channel) => {
                const type = channel.channel.type;
                let tmp2 = null != closure_0;
                if (tmp2) {
                  let tmp3 = c1;
                  if (!c1) {
                    const type2 = tmp.type;
                    let tmp4 = null != type2 && null != type;
                    if (tmp4) {
                      let tmp5 = type2 === type;
                      if (!tmp5) {
                        tmp5 = _null(type2) && _null(type);
                        const tmp6 = _null;
                        const tmp7 = _null(type2) && _null(type);
                      }
                      if (!tmp5) {
                        tmp5 = num11(type2) && num11(type);
                        const tmp8 = num11;
                        const tmp9 = num11(type2) && num11(type);
                      }
                      tmp4 = tmp5;
                    }
                    tmp3 = tmp4;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              });
              const found3 = found2.find((arg0, arg1) => {
                let flag = null != localChannel2 && tmp === localChannel2.id;
                if (flag) {
                  let closure_2 = arg1;
                  flag = true;
                }
                return flag;
              });
              num9 = callback;
            }
            if (num9 == null) {
              num9 = 0;
            }
            const tmp30 = getFirstChannelOfType(1, parent_id3.id, localChannel.type, channelList);
            if (null == channelList[num9 - 1]) {
              if (!localChannel.isGuildVocal()) {
                let id = null;
                if (null != tmp30) {
                  id = tmp30.channel.id;
                }
                let obj2 = { referenceId: null, parentId: null };
                obj2[0] = id;
              }
            }
            let tmp33 = null;
            if (callback(localChannel.type)) {
              tmp33 = null;
              if (null != tmp30) {
                if (tmp32(tmp27.channel.type)) {
                  const obj3 = { referenceId: null, parentId: null };
                  obj3[0] = tmp30.channel.id;
                  obj3[1] = parent_id3.parent_id;
                  tmp33 = obj3;
                } else {
                  const channel5 = tmp27.channel;
                  tmp33 = null;
                }
              }
            }
            obj2 = tmp33;
            tmp32 = callback;
          }
          c1 = true;
          let num13 = 0;
          if (null != parent_id3) {
            callback = null;
            const found4 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != closure_0;
              if (tmp2) {
                let tmp3 = c1;
                if (!c1) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = _null(type2) && _null(type);
                      const tmp6 = _null;
                      const tmp7 = _null(type2) && _null(type);
                    }
                    if (!tmp5) {
                      tmp5 = num11(type2) && num11(type);
                      const tmp8 = num11;
                      const tmp9 = num11(type2) && num11(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found5 = found4.find((arg0, arg1) => {
              let flag = null != localChannel2 && tmp === localChannel2.id;
              if (flag) {
                let closure_2 = arg1;
                flag = true;
              }
              return flag;
            });
            num13 = callback;
          }
          if (num13 == null) {
            num13 = 0;
          }
          let parent_id2 = channelList[num13 - 1];
          let id2 = getFirstChannelOfType(1, parent_id3.id, localChannel.type, channelList);
          if (null == parent_id2) {
            let obj4 = { referenceId: null, parentId: null };
          } else {
            obj4 = null;
            if (null != id2) {
              const type = parent_id2.channel.type;
              const type2 = localChannel.type;
              let tmp37 = null != type && null != type2;
              if (tmp37) {
                let tmp38 = type === type2;
                if (!tmp38) {
                  tmp38 = callback(type) && callback(type2);
                  const tmp39 = callback;
                  const tmp40 = callback(type) && callback(type2);
                }
                if (!tmp38) {
                  tmp38 = callback2(type) && callback2(type2);
                  const tmp41 = callback2;
                  const tmp42 = callback2(type) && callback2(type2);
                }
                tmp37 = tmp38;
              }
              if (!tmp37) {
                if (!localChannel.isGuildVocal()) {
                  const channel6 = parent_id2.channel;
                  obj4 = null;
                  if (channel6.isCategory()) {
                    const obj5 = { referenceId: null, parentId: null };
                    obj5[0] = id2.channel.id;
                    obj5[1] = parent_id2.channel.id;
                    obj4 = obj5;
                  }
                }
              }
            }
            const obj6 = { referenceId: null, parentId: null };
            id2 = id2.channel.id;
            obj6[0] = id2;
            parent_id2 = parent_id2.channel.parent_id;
            obj6[1] = parent_id2;
            obj4 = obj6;
          }
        } else if (parent_id3.type === GUILD_CATEGORY) {
          c1 = true;
          let num5 = 0;
          if (null != parent_id3) {
            callback = null;
            const found6 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != closure_0;
              if (tmp2) {
                let tmp3 = c1;
                if (!c1) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = _null(type2) && _null(type);
                      const tmp6 = _null;
                      const tmp7 = _null(type2) && _null(type);
                    }
                    if (!tmp5) {
                      tmp5 = num11(type2) && num11(type);
                      const tmp8 = num11;
                      const tmp9 = num11(type2) && num11(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found7 = found6.find((arg0, arg1) => {
              let flag = null != localChannel2 && tmp === localChannel2.id;
              if (flag) {
                let closure_2 = arg1;
                flag = true;
              }
              return flag;
            });
            num5 = callback;
          }
          if (num5 == null) {
            num5 = 0;
          }
          let parent_id = channelList[num5 + 1];
          id = getFirstChannelOfType(-1, parent_id3.id, localChannel.type, channelList);
          let tmp17 = null;
          if (null != id) {
            if (null == parent_id) {
              const obj7 = { referenceId: null, parentId: null };
              obj7[0] = id.channel.id;
              id = parent_id3.id;
              obj7[1] = id;
              tmp17 = obj7;
            } else {
              const type5 = parent_id.channel.type;
              const type6 = localChannel.type;
              let tmp18 = null != type5 && null != type6;
              if (tmp18) {
                let tmp19 = type5 === type6;
                if (!tmp19) {
                  tmp19 = callback(type5) && callback(type6);
                  const tmp20 = callback;
                  const tmp21 = callback(type5) && callback(type6);
                }
                if (!tmp19) {
                  tmp19 = callback2(type5) && callback2(type6);
                  const tmp22 = callback2;
                  const tmp23 = callback2(type5) && callback2(type6);
                }
                tmp18 = tmp19;
              }
              if (!tmp18) {
                if (!callback(localChannel.type)) {
                  const channel4 = parent_id.channel;
                  tmp17 = null;
                  if (channel4.isCategory()) {
                    const obj8 = { referenceId: null, parentId: null };
                    obj8[0] = id.channel.id;
                    obj8[1] = parent_id3.id;
                    tmp17 = obj8;
                  }
                } else {
                  const channel3 = parent_id.channel;
                }
              }
            }
            const obj9 = { referenceId: null, parentId: null };
            obj9[0] = id.channel.id;
            parent_id = parent_id.channel.parent_id;
            obj9[1] = parent_id;
            tmp17 = obj9;
          }
        } else {
          c1 = true;
          let num = 0;
          if (null != parent_id3) {
            callback = null;
            const found8 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != closure_0;
              if (tmp2) {
                let tmp3 = c1;
                if (!c1) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = _null(type2) && _null(type);
                      const tmp6 = _null;
                      const tmp7 = _null(type2) && _null(type);
                    }
                    if (!tmp5) {
                      tmp5 = num11(type2) && num11(type);
                      const tmp8 = num11;
                      const tmp9 = num11(type2) && num11(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found9 = found8.find((arg0, arg1) => {
              let flag = null != localChannel2 && tmp === localChannel2.id;
              if (flag) {
                let closure_2 = arg1;
                flag = true;
              }
              return flag;
            });
            num = callback;
          }
          if (num == null) {
            num = 0;
          }
          const tmp11 = getFirstChannelOfType(-1, parent_id3.id, localChannel.type, channelList);
          tmp12 = null;
          if (null != tmp11) {
            if (!localChannel.isGuildVocal()) {
              let tmp13 = null;
              if (localChannel.isCategory()) {
                if (null == tmp8) {
                  obj = { referenceId: null, parentId: null };
                  obj[0] = tmp11.channel.id;
                  tmp13 = obj;
                } else {
                  const channel2 = tmp8.channel;
                  tmp13 = null;
                }
              }
              tmp12 = tmp13;
            } else {
              if (null != tmp8) {
                const channel7 = tmp8.channel;
                if (!channel7.isCategory()) {
                  const channel = tmp8.channel;
                  if (channel.isGuildVocal()) {
                    const obj10 = { referenceId: null, parentId: null };
                    obj10[0] = tmp11.channel.id;
                    obj10[1] = tmp8.channel.parent_id;
                    tmp12 = obj10;
                  }
                }
              }
              const obj11 = { referenceId: null, parentId: null };
              obj11[0] = tmp11.channel.id;
              obj11[1] = parent_id3.parent_id;
              tmp12 = obj11;
            }
          }
        }
        return tmp12;
      }
    }
  }
  return null;
};
export const getDnDUpdates = function getDnDUpdates(localChannel, localChannel2, parentId, channels) {
  let importDefault = localChannel;
  let dependencyMap = parentId;
  function generateUpdates(substr) {
    if (null != c2) {
      if (null != num11) {
        let tmp4 = null != tmp;
        if (tmp4) {
          tmp4 = null != tmp2;
        }
        if (tmp4) {
          tmp4 = null != substr[tmp];
        }
        if (tmp4) {
          tmp4 = substr[tmp].channel === localChannel2;
        }
        if (tmp4) {
          tmp4 = null != substr[tmp2];
        }
        if (tmp4) {
          let obj = localChannel2(11524);
          let moveItemFromToResult = obj.moveItemFromTo(substr, tmp, tmp2);
        }
        obj = { oldOrdering: null, newOrdering: null, idGetter: null, existingPositionGetter: null };
        obj[0] = substr;
        obj[1] = moveItemFromToResult;
        obj[2] = function idGetter(channel) {
          return channel.channel.id;
        };
        obj[3] = function existingPositionGetter(channel) {
          return channel.channel.position;
        };
        closure_4 = closure_4.concat(localChannel2(11524).calculatePositionDeltas(obj));
        return moveItemFromToResult;
      }
    }
    moveItemFromToResult = [...substr];
  }
  const ChannelTypes = [];
  let items = [];
  let _categories = channels._categories;
  if (localChannel.isCategory()) {
    const items1 = [];
    HermesBuiltin.arraySpread(_categories, 0);
    const substr = items1.slice(1);
    importDefault = localChannel;
    dependencyMap = false;
    let callback;
    let num4 = 0;
    if (null != localChannel) {
      callback = null;
      const found = substr.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = c1;
          if (!c1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = _null(type2) && _null(type);
                const tmp6 = _null;
                const tmp7 = _null(type2) && _null(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                const tmp8 = num11;
                const tmp9 = num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found1 = found.find((arg0, arg1) => {
        let flag = null != localChannel2 && tmp === localChannel2.id;
        if (flag) {
          let closure_2 = arg1;
          flag = true;
        }
        return flag;
      });
      num4 = callback;
    }
    callback = num4;
    importDefault = localChannel2;
    dependencyMap = false;
    callback = undefined;
    let num5 = 0;
    if (null != localChannel2) {
      callback = null;
      const found2 = substr.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = c1;
          if (!c1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = _null(type2) && _null(type);
                const tmp6 = _null;
                const tmp7 = _null(type2) && _null(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                const tmp8 = num11;
                const tmp9 = num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found3 = found2.find((arg0, arg1) => {
        let flag = null != localChannel2 && tmp === localChannel2.id;
        if (flag) {
          let closure_2 = arg1;
          flag = true;
        }
        return flag;
      });
      num5 = callback;
    }
    let num11 = num5;
    const updates = generateUpdates(substr);
    updates.unshift(_categories[0]);
    items = updates;
  }
  if (callback(localChannel.type)) {
    let tmp11 = _categories;
    if (items.length > 0) {
      tmp11 = items;
    }
    const tmp10Result = importDefault(5132)(tmp11, channels, (channel) => _null(channel.channel.type));
    importDefault = localChannel;
    dependencyMap = false;
    callback = undefined;
    let num7 = 0;
    if (null != localChannel) {
      callback = null;
      const found4 = tmp10Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = c1;
          if (!c1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = _null(type2) && _null(type);
                const tmp6 = _null;
                const tmp7 = _null(type2) && _null(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                const tmp8 = num11;
                const tmp9 = num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found5 = found4.find((arg0, arg1) => {
        let flag = null != localChannel2 && tmp === localChannel2.id;
        if (flag) {
          let closure_2 = arg1;
          flag = true;
        }
        return flag;
      });
      num7 = callback;
    }
    callback = num7;
    importDefault = localChannel2;
    dependencyMap = false;
    callback = undefined;
    let num8 = 0;
    if (null != localChannel2) {
      callback = null;
      const found6 = tmp10Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = c1;
          if (!c1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = _null(type2) && _null(type);
                const tmp6 = _null;
                const tmp7 = _null(type2) && _null(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                const tmp8 = num11;
                const tmp9 = num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found7 = found6.find((arg0, arg1) => {
        let flag = null != localChannel2 && tmp === localChannel2.id;
        if (flag) {
          let closure_2 = arg1;
          flag = true;
        }
        return flag;
      });
      num8 = callback;
    }
    num11 = num8;
    const updates1 = generateUpdates(tmp10Result);
    const tmp10 = importDefault(5132);
  }
  if (localChannel.isGuildVocal()) {
    if (items.length > 0) {
      _categories = items;
    }
    const tmp18Result = importDefault(5132)(_categories, channels, (channel) => {
      channel = channel.channel;
      return channel.isGuildVocal();
    });
    importDefault = localChannel;
    dependencyMap = false;
    callback = undefined;
    let num10 = 0;
    if (null != localChannel) {
      callback = null;
      const found8 = tmp18Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = c1;
          if (!c1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = _null(type2) && _null(type);
                const tmp6 = _null;
                const tmp7 = _null(type2) && _null(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                const tmp8 = num11;
                const tmp9 = num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found9 = found8.find((arg0, arg1) => {
        let flag = null != localChannel2 && tmp === localChannel2.id;
        if (flag) {
          let closure_2 = arg1;
          flag = true;
        }
        return flag;
      });
      num10 = callback;
    }
    callback = num10;
    importDefault = localChannel2;
    dependencyMap = false;
    callback = undefined;
    num11 = 0;
    if (null != localChannel2) {
      callback = null;
      const found10 = tmp18Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = c1;
          if (!c1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = _null(type2) && _null(type);
                const tmp6 = _null;
                const tmp7 = _null(type2) && _null(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                const tmp8 = num11;
                const tmp9 = num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found11 = found10.find((arg0, arg1) => {
        let flag = null != localChannel2 && tmp === localChannel2.id;
        if (flag) {
          let closure_2 = arg1;
          flag = true;
        }
        return flag;
      });
      num11 = callback;
    }
    const updates2 = generateUpdates(tmp18Result);
    const tmp18 = importDefault(5132);
  }
  let tmp23 = localChannel.parent_id !== parentId;
  if (tmp23) {
    tmp23 = null == ChannelTypes.find((id) => {
      let flag = id.id === localChannel2.id;
      if (flag) {
        id.parent_id = c1;
        flag = true;
      }
      return flag;
    });
  }
  if (tmp23) {
    let obj = { id: null, parent_id: null };
    obj[0] = localChannel.id;
    obj[1] = parentId;
    ChannelTypes.push(obj);
  }
  return ChannelTypes;
};