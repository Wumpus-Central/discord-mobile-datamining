// === Module 16147: ChannelSortingUtils ===

// Module 16147 (ChannelSortingUtils)
import Constants from "Constants" /* 1074 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7112 */;
import DragAndDropUtilsDefault from "DragAndDropUtils" /* 12416 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import size from "module_2" /* 2 */;

function getFirstChannelOfType(arg0, arg1, arg2, arr) {
  closure_0 = arg1;
  closure_1 = -1;
  const found = arr.find((channel, index) => {
    let flag = channel.channel.id === closure_0;
    if (flag) {
      closure_1 = index;
      flag = true;
    }
    return flag;
  });
  if (closure_1 < 0) {
    return null;
  } else {
    let tmp12 = closure_1;
    if (closure_1 >= 0) {
      if (tmp12 < arr.length) {
        while (true) {
          let type = arr[tmp12].channel.type;
          let tmp4 = null != type;
          if (tmp4) {
            tmp4 = null != arg2;
          }
          if (tmp4) {
            let tmp6 = type === arg2;
            if (!tmp6) {
              let tmp8 = React2(type) && React2(arg2);
              tmp6 = tmp8;
            }
            if (!tmp6) {
              let tmp10 = React3(type) && React3(arg2);
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
({ isGuildSelectableChannelType: c2, isGuildVocalChannelType: c3 } = ChannelRecord);
let ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("utils/ChannelSortingUtils.tsx");

export const areTypesInSameSection = function areTypesInSameSection(arg0, arg1) {
  let tmp = null != arg0 && null != arg1;
  if (tmp) {
    let tmp2 = arg0 === arg1;
    if (!tmp2) {
      tmp2 = React2(arg0) && React2(arg1);
      const tmp4 = React2(arg0) && React2(arg1);
    }
    if (!tmp2) {
      tmp2 = React3(arg0) && React3(arg1);
      const tmp6 = React3(arg0) && React3(arg1);
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getDropData = function getDropData(localChannel, arg1, localChannel2, to, channelList) {
  if (null != localChannel) {
    parent_id3 = localChannel2;
    if (null != localChannel2) {
      const GUILD_CATEGORY = ChannelTypes.GUILD_CATEGORY;
      if (localChannel.type === GUILD_CATEGORY) {
        if (to !== arg1) {
          if (to >= arg1) {
            if (to > arg1) {
              closure_132_0 = parent_id3;
              closure_132_1 = true;
              closure_132_2 = undefined;
              let num17 = 0;
              if (null != parent_id3) {
                closure_132_2 = null;
                const found = channelList.filter((channel) => {
                  const type = channel.channel.type;
                  let tmp2 = null != closure_0;
                  if (tmp2) {
                    let tmp3 = closure_1;
                    if (!closure_1) {
                      const type2 = tmp.type;
                      let tmp4 = null != type2 && null != type;
                      if (tmp4) {
                        let tmp5 = type2 === type;
                        if (!tmp5) {
                          tmp5 = React2(type2) && React2(type);
                          const tmp7 = React2(type2) && React2(type);
                        }
                        if (!tmp5) {
                          tmp5 = React3(type2) && React3(type);
                          const tmp9 = React3(type2) && React3(type);
                        }
                        tmp4 = tmp5;
                      }
                      tmp3 = tmp4;
                    }
                    tmp2 = tmp3;
                  }
                  return tmp2;
                });
                const found1 = found.find((item, index) => {
                  let flag = null != localChannel && tmp === localChannel.id;
                  if (flag) {
                    closure_2 = index;
                    flag = true;
                  }
                  return flag;
                });
                num17 = closure_132_2;
              }
              if (num17 == null) {
                num17 = 0;
              }
              const tmp52 = getFirstChannelOfType(-1, parent_id3.id, localChannel.type, channelList);
              if (null != tmp52) {
                if (tmp52.channel.id !== localChannel.id) {
                  if (null == tmp49) {
                    let obj = { referenceId: tmp52.channel.id, parentId: null };
                    let tmp54 = obj;
                  } else {
                    tmp54 = null;
                  }
                }
              }
              tmp49 = channelList[num17 + 1];
            }
          }
        }
        obj = { referenceId: null, parentId: null };
        ({ id: obj13.referenceId, parent_id: parent_id3 } = parent_id3);
        obj.parentId = parent_id3;
      } else {
        const type3 = localChannel.type;
        const type4 = parent_id3.type;
        let tmp = null != type3 && null != type4;
        if (tmp) {
          let tmp2 = type3 === type4;
          if (!tmp2) {
            tmp2 = c2(type3) && c2(type4);
            const tmp4 = c2(type3) && c2(type4);
          }
          if (!tmp2) {
            tmp2 = closure_3(type3) && closure_3(type4);
            const tmp6 = closure_3(type3) && closure_3(type4);
          }
          tmp = tmp2;
        }
        if (tmp) {
          ({ id: obj11.referenceId, parent_id: obj11.parentId } = parent_id3);
          let tmp12 = { referenceId: null, parentId: null };
          const obj1 = { referenceId: null, parentId: null };
        } else if (to < arg1) {
          if (parent_id3.type !== GUILD_CATEGORY) {
            closure_130_0 = parent_id3;
            closure_130_1 = true;
            let num9 = 0;
            if (null != parent_id3) {
              closure_130_2 = null;
              const found2 = channelList.filter((channel) => {
                const type = channel.channel.type;
                let tmp2 = null != closure_0;
                if (tmp2) {
                  let tmp3 = closure_1;
                  if (!closure_1) {
                    const type2 = tmp.type;
                    let tmp4 = null != type2 && null != type;
                    if (tmp4) {
                      let tmp5 = type2 === type;
                      if (!tmp5) {
                        tmp5 = React2(type2) && React2(type);
                        const tmp7 = React2(type2) && React2(type);
                      }
                      if (!tmp5) {
                        tmp5 = React3(type2) && React3(type);
                        const tmp9 = React3(type2) && React3(type);
                      }
                      tmp4 = tmp5;
                    }
                    tmp3 = tmp4;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              });
              const found3 = found2.find((item, index) => {
                let flag = null != localChannel && tmp === localChannel.id;
                if (flag) {
                  closure_2 = index;
                  flag = true;
                }
                return flag;
              });
              num9 = closure_130_2;
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
                const obj2 = { referenceId: id, parentId: null };
              }
            }
            if (c2(localChannel.type)) {
              if (null != tmp30) {
                if (tmp32(tmp27.channel.type)) {
                  const obj3 = { referenceId: tmp30.channel.id, parentId: parent_id3.parent_id };
                } else {
                  const channel5 = tmp27.channel;
                }
              }
            }
            tmp32 = c2;
          }
          closure_131_0 = parent_id3;
          closure_131_1 = true;
          let num13 = 0;
          if (null != parent_id3) {
            closure_131_2 = null;
            const found4 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != closure_0;
              if (tmp2) {
                let tmp3 = closure_1;
                if (!closure_1) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = React2(type2) && React2(type);
                      const tmp7 = React2(type2) && React2(type);
                    }
                    if (!tmp5) {
                      tmp5 = React3(type2) && React3(type);
                      const tmp9 = React3(type2) && React3(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found5 = found4.find((item, index) => {
              let flag = null != localChannel && tmp === localChannel.id;
              if (flag) {
                closure_2 = index;
                flag = true;
              }
              return flag;
            });
            num13 = closure_131_2;
          }
          if (num13 == null) {
            num13 = 0;
          }
          let parent_id2 = channelList[num13 - 1];
          let id2 = getFirstChannelOfType(1, parent_id3.id, localChannel.type, channelList);
          if (null == parent_id2) {
            const obj4 = { referenceId: null, parentId: null };
          } else {
            if (null != id2) {
              const type = parent_id2.channel.type;
              const type2 = localChannel.type;
              let tmp37 = null != type && null != type2;
              if (tmp37) {
                let tmp38 = type === type2;
                if (!tmp38) {
                  tmp38 = c2(type) && c2(type2);
                  const tmp40 = c2(type) && c2(type2);
                }
                if (!tmp38) {
                  tmp38 = closure_3(type) && closure_3(type2);
                  const tmp42 = closure_3(type) && closure_3(type2);
                }
                tmp37 = tmp38;
              }
              if (!tmp37) {
                if (!localChannel.isGuildVocal()) {
                  const channel6 = parent_id2.channel;
                  if (channel6.isCategory()) {
                    const obj5 = { referenceId: id2.channel.id, parentId: parent_id2.channel.id };
                  }
                }
              }
            }
            const obj6 = { referenceId: null, parentId: null };
            id2 = id2.channel.id;
            obj6.referenceId = id2;
            parent_id2 = parent_id2.channel.parent_id;
            obj6.parentId = parent_id2;
          }
        } else if (parent_id3.type === GUILD_CATEGORY) {
          closure_129_0 = parent_id3;
          closure_129_1 = true;
          let num5 = 0;
          if (null != parent_id3) {
            closure_129_2 = null;
            const found6 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != closure_0;
              if (tmp2) {
                let tmp3 = closure_1;
                if (!closure_1) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = React2(type2) && React2(type);
                      const tmp7 = React2(type2) && React2(type);
                    }
                    if (!tmp5) {
                      tmp5 = React3(type2) && React3(type);
                      const tmp9 = React3(type2) && React3(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found7 = found6.find((item, index) => {
              let flag = null != localChannel && tmp === localChannel.id;
              if (flag) {
                closure_2 = index;
                flag = true;
              }
              return flag;
            });
            num5 = closure_129_2;
          }
          if (num5 == null) {
            num5 = 0;
          }
          let parent_id = channelList[num5 + 1];
          id = getFirstChannelOfType(-1, parent_id3.id, localChannel.type, channelList);
          if (null != id) {
            if (null == parent_id) {
              const obj7 = { referenceId: id.channel.id, parentId: null };
              id = parent_id3.id;
              obj7.parentId = id;
            } else {
              const type5 = parent_id.channel.type;
              const type6 = localChannel.type;
              let tmp18 = null != type5 && null != type6;
              if (tmp18) {
                let tmp19 = type5 === type6;
                if (!tmp19) {
                  tmp19 = c2(type5) && c2(type6);
                  const tmp21 = c2(type5) && c2(type6);
                }
                if (!tmp19) {
                  tmp19 = closure_3(type5) && closure_3(type6);
                  const tmp23 = closure_3(type5) && closure_3(type6);
                }
                tmp18 = tmp19;
              }
              if (!tmp18) {
                if (!c2(localChannel.type)) {
                  const channel4 = parent_id.channel;
                  if (channel4.isCategory()) {
                    const obj8 = { referenceId: id.channel.id, parentId: parent_id3.id };
                  }
                } else {
                  const channel3 = parent_id.channel;
                }
              }
            }
            const obj9 = { referenceId: id.channel.id, parentId: null };
            parent_id = parent_id.channel.parent_id;
            obj9.parentId = parent_id;
          }
        } else {
          c1 = true;
          let num = 0;
          if (null != parent_id3) {
            c2 = null;
            const found8 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != closure_0;
              if (tmp2) {
                let tmp3 = closure_1;
                if (!closure_1) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = React2(type2) && React2(type);
                      const tmp7 = React2(type2) && React2(type);
                    }
                    if (!tmp5) {
                      tmp5 = React3(type2) && React3(type);
                      const tmp9 = React3(type2) && React3(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found9 = found8.find((item, index) => {
              let flag = null != localChannel && tmp === localChannel.id;
              if (flag) {
                closure_2 = index;
                flag = true;
              }
              return flag;
            });
            num = c2;
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
                  obj = { referenceId: tmp11.channel.id, parentId: null };
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
                    const obj10 = { referenceId: tmp11.channel.id, parentId: tmp8.channel.parent_id };
                    tmp12 = obj10;
                  }
                }
              }
              const obj11 = { referenceId: tmp11.channel.id, parentId: parent_id3.parent_id };
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
  importDefault = localChannel;
  dependencyMap = parentId;
  function generateUpdates(substr) {
    if (null != closure_2) {
      if (null != num11) {
        let tmp4 = null != closure_2;
        if (tmp4) {
          tmp4 = null != num11;
        }
        if (tmp4) {
          tmp4 = null != substr[closure_2];
        }
        if (tmp4) {
          tmp4 = substr[closure_2].channel === closure_0;
        }
        if (tmp4) {
          tmp4 = null != substr[num11];
        }
        if (tmp4) {
          let obj = DragAndDropUtilsDefault;
          let moveItemFromToResult = obj.moveItemFromTo(substr, closure_2, num11);
        }
        obj = {
          oldOrdering: substr,
          newOrdering: moveItemFromToResult,
          idGetter(channel) {
                return channel.channel.id;
              },
          existingPositionGetter(channel) {
                return channel.channel.position;
              }
        };
        closure_4 = closure_4.concat(DragAndDropUtilsDefault.calculatePositionDeltas(obj));
        return moveItemFromToResult;
      }
    }
    moveItemFromToResult = [...substr];
  }
  ChannelTypes = [];
  let items = [];
  let _categories = channels._categories;
  if (localChannel.isCategory()) {
    const items1 = [];
    HermesBuiltin.arraySpread(_categories, 0);
    const substr = items1.slice(1);
    closure_129_0 = localChannel;
    closure_129_1 = false;
    closure_129_2 = undefined;
    let num4 = 0;
    if (null != localChannel) {
      closure_129_2 = null;
      const found = substr.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = closure_1;
          if (!closure_1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = React2(type2) && React2(type);
                const tmp7 = React2(type2) && React2(type);
              }
              if (!tmp5) {
                tmp5 = React3(type2) && React3(type);
                const tmp9 = React3(type2) && React3(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found1 = found.find((item, index) => {
        let flag = null != localChannel && tmp === localChannel.id;
        if (flag) {
          closure_2 = index;
          flag = true;
        }
        return flag;
      });
      num4 = closure_129_2;
    }
    localChannel2 = num4;
    closure_130_0 = localChannel2;
    closure_130_1 = false;
    closure_130_2 = undefined;
    if (null != localChannel2) {
      closure_130_2 = null;
      const found2 = substr.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = closure_1;
          if (!closure_1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = React2(type2) && React2(type);
                const tmp7 = React2(type2) && React2(type);
              }
              if (!tmp5) {
                tmp5 = React3(type2) && React3(type);
                const tmp9 = React3(type2) && React3(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found3 = found2.find((item, index) => {
        let flag = null != localChannel && tmp === localChannel.id;
        if (flag) {
          closure_2 = index;
          flag = true;
        }
        return flag;
      });
    }
    const updates = generateUpdates(substr);
    updates.unshift(_categories[0]);
    items = updates;
  }
  if (localChannel2(localChannel.type)) {
    let tmp11 = _categories;
    if (items.length > 0) {
      tmp11 = items;
    }
    const tmp10Result = getFlattedChannelListDefault(tmp11, channels, (channel) => localChannel2(channel.channel.type));
    closure_131_0 = localChannel;
    closure_131_1 = false;
    closure_131_2 = undefined;
    let num7 = 0;
    if (null != localChannel) {
      closure_131_2 = null;
      const found4 = tmp10Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = closure_1;
          if (!closure_1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = React2(type2) && React2(type);
                const tmp7 = React2(type2) && React2(type);
              }
              if (!tmp5) {
                tmp5 = React3(type2) && React3(type);
                const tmp9 = React3(type2) && React3(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found5 = found4.find((item, index) => {
        let flag = null != localChannel && tmp === localChannel.id;
        if (flag) {
          closure_2 = index;
          flag = true;
        }
        return flag;
      });
      num7 = closure_131_2;
    }
    localChannel2 = num7;
    closure_132_0 = localChannel2;
    closure_132_1 = false;
    closure_132_2 = undefined;
    if (null != localChannel2) {
      closure_132_2 = null;
      const found6 = tmp10Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = closure_1;
          if (!closure_1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = React2(type2) && React2(type);
                const tmp7 = React2(type2) && React2(type);
              }
              if (!tmp5) {
                tmp5 = React3(type2) && React3(type);
                const tmp9 = React3(type2) && React3(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found7 = found6.find((item, index) => {
        let flag = null != localChannel && tmp === localChannel.id;
        if (flag) {
          closure_2 = index;
          flag = true;
        }
        return flag;
      });
    }
    const updates1 = generateUpdates(tmp10Result);
  }
  if (localChannel.isGuildVocal()) {
    if (items.length > 0) {
      _categories = items;
    }
    const tmp18Result = getFlattedChannelListDefault(_categories, channels, (channel) => {
      channel = channel.channel;
      return channel.isGuildVocal();
    });
    closure_133_0 = localChannel;
    closure_133_1 = false;
    closure_133_2 = undefined;
    let num10 = 0;
    if (null != localChannel) {
      closure_133_2 = null;
      const found8 = tmp18Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = closure_1;
          if (!closure_1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = React2(type2) && React2(type);
                const tmp7 = React2(type2) && React2(type);
              }
              if (!tmp5) {
                tmp5 = React3(type2) && React3(type);
                const tmp9 = React3(type2) && React3(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found9 = found8.find((item, index) => {
        let flag = null != localChannel && tmp === localChannel.id;
        if (flag) {
          closure_2 = index;
          flag = true;
        }
        return flag;
      });
      num10 = closure_133_2;
    }
    localChannel2 = num10;
    closure_134_0 = localChannel2;
    closure_134_1 = false;
    closure_134_2 = undefined;
    if (null != localChannel2) {
      closure_134_2 = null;
      const found10 = tmp18Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != closure_0;
        if (tmp2) {
          let tmp3 = closure_1;
          if (!closure_1) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = React2(type2) && React2(type);
                const tmp7 = React2(type2) && React2(type);
              }
              if (!tmp5) {
                tmp5 = React3(type2) && React3(type);
                const tmp9 = React3(type2) && React3(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found11 = found10.find((item, index) => {
        let flag = null != localChannel && tmp === localChannel.id;
        if (flag) {
          closure_2 = index;
          flag = true;
        }
        return flag;
      });
    }
    const updates2 = generateUpdates(tmp18Result);
  }
  let tmp23 = localChannel.parent_id !== parentId;
  if (tmp23) {
    tmp23 = null == ChannelTypes.find((id) => {
      let flag = id.id === localChannel.id;
      if (flag) {
        id.parent_id = parent_id;
        flag = true;
      }
      return flag;
    });
  }
  if (tmp23) {
    let obj = { id: localChannel.id, parent_id: parentId };
    ChannelTypes.push(obj);
  }
  return ChannelTypes;
};